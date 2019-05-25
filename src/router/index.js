import Vue from 'vue'
import Router from 'vue-router'
import DemoBase from '@/components/Demo/Base/Base.vue'
import DemoConfirm from '@/components/Demo/Confirm/Confirm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/base',
      name: 'base',
      component: DemoBase,
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: DemoConfirm,
    },
  ]
})
