import Vue from 'vue'
import NavBox from './nav-box.vue'
import NavBoxPane from './nav-box-pane.vue'

NavBox.install = function() {
  Vue.component(NavBox.name, NavBox)
}

NavBoxPane.install = function() {
  Vue.component(NavBoxPane.name, NavBoxPane)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(NavBox)
  window.Vue.use(NavBoxPane)
}

export { NavBox, NavBoxPane }
