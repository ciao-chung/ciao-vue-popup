import Popup from '@/components/Plugin/Popup.vue'
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