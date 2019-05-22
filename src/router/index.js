import Vue from 'vue'
import Router from 'vue-router'
import DemoBase from '@/components/Demo/Base/Base.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/base',
      name: 'base',
      component: DemoBase,
    }
  ]
})
