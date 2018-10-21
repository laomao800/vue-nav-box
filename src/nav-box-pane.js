export default {
  name: 'NavBoxPane',

  props: {
    title: {
      type: String,
      default: null
    }
  },

  mounted() {
    this.$parent.addNav && this.$parent.addNav(this)
  },

  render() {
    return (
      <div class="nav-box__pane">
        <div class="nav-box__head">
          <div class="nav-box__title">
            {this.$slots.title ? this.$slots.title : this.title}
          </div>
        </div>
        <div class="nav-box__body">{this.$slots.default}</div>
      </div>
    )
  }
}
