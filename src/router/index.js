import Vue from 'vue'
import Router from 'vue-router'
import DemoHome from '@/components/Demo/Home/Home.vue'
import DemoDefaultConfig from '@/components/Demo/DefaultConfig/DefaultConfig.vue'
import DemoBase from '@/components/Demo/Base/Base.vue'
import DemoConfirm from '@/components/Demo/Confirm/Confirm.vue'
import DemoPrompt from '@/components/Demo/Prompt/Prompt.vue'
import DemoCustomComponent from '@/components/Demo/CustomComponent/CustomComponent.vue'
import DemoCloseCallback from '@/components/Demo/CloseCallback/CloseCallback.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: DemoHome,
    },
    {
      path: '/default-config',
      name: 'default-config',
      component: DemoDefaultConfig,
    },
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
    {
      path: '/prompt',
      name: 'prompt',
      component: DemoPrompt,
    },
    {
      path: '/custom-vue-component',
      name: 'custom-vue-component',
      component: DemoCustomComponent,
    },
    {
      path: '/close-callback',
      name: 'close-callback',
      component: DemoCloseCallback,
    },
  ]
})
