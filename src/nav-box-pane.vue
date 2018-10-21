<template>
  <div class="nav-box__pane">
    <div class="nav-box__head">
      <div class="nav-box__title">
        <slot
          v-if="$slots.title"
          name="title"
        />
        <template v-else>{{ title }}</template>
      </div>
    </div>
    <div class="nav-box__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBoxPane',

  components: {},

  props: {
    title: {
      required: true,
      type: String,
      default: null
    }
  },

  data() {
    return {}
  },

  mounted() {
    this.$parent.addNav && this.$parent.addNav(this)
  },

  methods: {}
}
</script>

<style lang="less">
@color-primary: #009efb;

.nav-box {
  &__pane {
    padding-bottom: 16px;
  }

  &__head {
    padding: 0.5em 1em;
    margin-bottom: 16px;
    line-height: 1.8em;
    background-color: #fafafa;
    border-bottom: 1px solid #eaeaea;
    border-left: 3px solid @color-primary;
  }

  &__title {
    font-size: 16px;
    font-weight: bold;
    cursor: default;
  }
}
</style>
