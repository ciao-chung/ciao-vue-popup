import Popup from '@/components/Plugin/Popup.vue'
import Vue from 'vue'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)
import { events } from '@/components/Plugin/Events.js'

class Installer {
  constructor() {
    this.isInstalled = false
  }
  install(Vue) {
    if(this.isInstalled) return
    this.isInstalled = true
    Vue.component('VuePopupPlugin', Popup)

    Vue.prototype.$popup = (action, options) => {
      events.$emit(action, options)
    }
  }
}

export default new Installer()