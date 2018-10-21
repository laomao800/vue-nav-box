<template>
  <div
    class="nav-box__wrapper"
    :style="{ height: internalHeight }"
  >
    <div ref="content" class="nav-box__content">
      <slot />
    </div>
    <div
      class="nav-box__navs"
      :style="{ width: internalNavWidth }"
    >
      <ul>
        <li
          v-for="(nav, index) in navs"
          :key="index"
          :class="['nav-box__nav', {
            'nav-box__nav-active': activeItem ? activeItem === nav : index === 0
          }]"
          @click="navClick(nav)"
        >
          <slot
            v-if="nav.$slots.title"
            name="title"
          />
          <template v-else>
            {{ nav.title }}
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/*
 * Scroll feature fork from https://github.com/eddiemf/vue-scrollactive
 */
import bezierEasing from 'bezier-easing'

function parseSizeUnit(unit) {
  if (unit) {
    const isPercent = /\d+%/.test(unit)
    const size = parseInt(unit, 10)
    return size ? (isPercent ? `${size}%` : `${size}px`) : null
  }
  return null
}

export default {
  name: 'NavBox',

  props: {
    height: {
      type: [String, Number],
      default: null
    },
    navWidth: {
      type: [String, Number],
      default: null
    },
    duration: {
      type: Number,
      default: 400
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      navs: [],
      activeItem: null,
      lastActiveItem: null,
      triggerByScroll: false
    }
  },

  computed: {
    internalHeight() {
      return parseSizeUnit(this.height)
    },
    internalNavWidth() {
      return parseSizeUnit(this.navWidth)
    }
  },

  mounted() {
    this.scrollContainer = this.$refs.content
    this.scrollContainer.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    this.scrollContainer.removeEventListener('scroll', this.onScroll)
    window.cancelAnimationFrame(this.scrollAnimationFrame)
  },

  methods: {
    addNav(item) {
      this.navs.push(item)
    },

    async navClick(nav) {
      const target = nav.$el

      if (!target) {
        return
      }

      this.triggerByScroll = true
      this.activeItem = nav
      await this.scrollTo(target)
      this.triggerByScroll = false
    },

    scrollTo(target) {
      return new Promise(resolve => {
        const targetDistanceFromTop = this.getOffsetTop(target)
        const startingY = this.scrollContainer.scrollTop
        const difference = targetDistanceFromTop - startingY
        const easing = bezierEasing(0.5, 0, 0.35, 1)
        let start = null

        const step = timestamp => {
          if (!start) start = timestamp
          let progress = timestamp - start
          let progressPercentage = progress / this.duration
          if (progress >= this.duration) progress = this.duration
          if (progressPercentage >= 1) progressPercentage = 1
          const perTick =
            startingY +
            easing(progressPercentage) * (difference - this.offsetTop)
          this.scrollContainer.scrollTo(0, perTick)
          if (progress < this.duration) {
            this.scrollAnimationFrame = window.requestAnimationFrame(step)
          } else {
            this.scrollContainer.addEventListener('scroll', this.onScroll)
            resolve()
          }
        }

        window.requestAnimationFrame(step)
      })
    },

    getOffsetTop(target) {
      let yPosition = 0
      let nextElement = target
      while (nextElement && nextElement !== this.scrollContainer) {
        yPosition += nextElement.offsetTop
        nextElement = nextElement.offsetParent
      }
      return yPosition
    },

    onScroll(event) {
      if (!this.triggerByScroll) {
        this.activeItem = this.getItemInsideWindow()
        if (this.activeItem !== this.lastActiveItem) {
          this.$emit(
            'activeChanged',
            event,
            this.activeItem,
            this.lastActiveItem
          )
          this.lastActiveItem = this.activeItem
        }
      }
    },

    getItemInsideWindow() {
      let activeItem
      this.navs.forEach(item => {
        const target = item.$el
        if (!target) return
        const distanceFromTop = this.scrollContainer.scrollTop
        const isScreenPastSection =
          distanceFromTop >= this.getOffsetTop(target) - this.offsetTop
        const isScreenBeforeSectionEnd =
          distanceFromTop <
          this.getOffsetTop(target) - this.offsetTop + target.offsetHeight
        if (isScreenPastSection && isScreenBeforeSectionEnd) activeItem = item
      })
      return activeItem
    }
  }
}
</script>

<style lang="less">
@color-primary: #009efb;

.scrollbar() {
  &:hover::-webkit-scrollbar {
    opacity: 1;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.06);
    -webkit-border-radius: 100px;
    opacity: 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }

    &-thumb {
      background: rgba(0, 0, 0, 0.2);
      -webkit-border-radius: 100px;

      &:active {
        background: rgba(0, 0, 0, 0.6);
      }
    }
  }
}

.nav-box {
  &__wrapper {
    display: flex;
    height: 100%;
  }

  &__content {
    position: relative;
    flex: 1;
    padding-right: 16px;
    overflow: auto;
    .scrollbar();
  }

  &__navs {
    width: 200px;
    padding-left: 16px;
    overflow: auto;
    .scrollbar();

    ul {
      height: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      border-left: 1px solid #eaeaea;
    }
  }

  &__nav {
    position: relative;
    padding: 6px 0 6px 16px;
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 1.4;
    color: #333;
    cursor: pointer;
    transition: color 0.4s;

    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      box-sizing: content-box;
      display: block;
      width: 6px;
      height: 6px;
      content: '';
      background-color: #eee;
      border: 4px solid;
      border-color: transparent;
      border-radius: 50%;
      transition: background-color 0.4s;
      transform: translate(-50%, -50%);
    }

    &:hover {
      color: @color-primary;

      &::before {
        background-color: #ddd;
      }
    }

    &-active {
      color: @color-primary;

      &::before {
        background-color: #fff !important;
        border-color: @color-primary;
      }
    }
  }
}
</style>
