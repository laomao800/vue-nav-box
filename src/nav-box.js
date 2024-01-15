/*
 * Scroll feature fork from https://github.com/eddiemf/vue-scrollactive
 */
import bezierEasing from 'bezier-easing'
import parseSize from '@laomao800/parse-size'

export default {
  name: 'NavBox',

  props: {
    height: {
      type: [String, Number],
      default: null,
    },
    navWidth: {
      type: [String, Number],
      default: null,
    },
    navPosition: {
      type: String,
    },
    duration: {
      type: Number,
      default: 400,
    },
    offsetTop: {
      type: Number,
      default: 0,
    },
    foldable: {
      type: Boolean,
      default: false,
    },
    navHidden: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      navs: [],
      activeItem: null,
      lastActiveItem: null,
      scrollByNav: false,
    }
  },

  computed: {
    internalHeight() {
      return parseSize(this.height)
    },
    internalNavWidth() {
      return parseSize(this.navWidth)
    },
  },

  watch: {
    navHidden: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.teardown()
        } else {
          this.init()
        }
      },
    },
  },

  beforeDestroy() {
    this.teardown()
  },

  methods: {
    init() {
      this.$nextTick(() =>
        this.$refs.content.addEventListener('scroll', this.onScroll),
      )
    },

    teardown() {
      this.$refs.content &&
        this.$refs.content.removeEventListener('scroll', this.onScroll)
      this.scrollAnimationFrame &&
        window.cancelAnimationFrame(this.scrollAnimationFrame)
    },

    addNav(item) {
      this.navs.push(item)
    },

    navClick(nav) {
      const target = nav.$el

      if (!target) {
        return
      }

      this.scrollByNav = true
      this.activeItem = nav
      this.scrollTo(target, () => {
        this.scrollByNav = false
      })
    },

    scrollTo(target, callback) {
      const targetDistanceFromTop = this.getOffsetTop(target)
      const startingY = this.$refs.content.scrollTop
      const difference = targetDistanceFromTop - startingY
      const easing = bezierEasing(0.5, 0, 0.35, 1)
      let start = null

      const step = (timestamp) => {
        if (!start) start = timestamp
        let progress = timestamp - start
        let progressPercentage = progress / this.duration
        if (progress >= this.duration) progress = this.duration
        if (progressPercentage >= 1) progressPercentage = 1
        const perTick =
          startingY + easing(progressPercentage) * (difference - this.offsetTop)
        this.$refs.content.scrollTo(0, perTick)
        if (progress < this.duration) {
          this.scrollAnimationFrame = window.requestAnimationFrame(step)
        } else {
          this.$refs.content.addEventListener('scroll', this.onScroll)
          callback()
        }
      }

      window.requestAnimationFrame(step)
    },

    getOffsetTop(target) {
      let yPosition = 0
      let nextElement = target
      while (nextElement && nextElement !== this.$refs.content) {
        yPosition += nextElement.offsetTop
        nextElement = nextElement.offsetParent
      }
      return yPosition
    },

    onScroll(event) {
      if (!this.scrollByNav) {
        this.activeItem = this.getItemInsideWindow()
        if (this.activeItem !== this.lastActiveItem) {
          this.$emit(
            'activeChanged',
            event,
            this.activeItem,
            this.lastActiveItem,
          )
          this.lastActiveItem = this.activeItem
        }
      }
    },

    getItemInsideWindow() {
      let activeItem
      this.navs.forEach((item) => {
        const target = item.$el
        if (!target) return
        const distanceFromTop = this.$refs.content.scrollTop
        const isScreenPastSection =
          distanceFromTop >= this.getOffsetTop(target) - this.offsetTop
        const isScreenBeforeSectionEnd =
          distanceFromTop <
          this.getOffsetTop(target) - this.offsetTop + target.offsetHeight
        if (isScreenPastSection && isScreenBeforeSectionEnd) activeItem = item
      })
      return activeItem
    },
  },

  render() {
    return (
      <div
        class={{
          'nav-box__wrapper': true,
          'nav-box__wrapper--foldable': this.foldable,
          [`nav-box__wrapper--nav-${this.navPosition}`]: this.foldable,
        }}
        style={{ height: this.internalHeight }}
      >
        <div ref="content" class="nav-box__content">
          {this.$slots.default}
        </div>
        {this.navHidden ? null : (
          <div class="nav-box__navs" style={{ width: this.internalNavWidth }}>
            <ul>
              {this.navs.map((nav, index) => (
                <li
                  key={index}
                  class={[
                    'nav-box__nav',
                    {
                      'nav-box__nav--active': this.activeItem
                        ? this.activeItem === nav
                        : index === 0,
                    },
                  ]}
                  on-click={() => this.navClick(nav)}
                >
                  {nav.$slots.title || nav.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  },
}
