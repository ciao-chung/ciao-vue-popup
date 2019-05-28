import Vue from 'vue'
import Router from 'vue-router'
import DemoHome from '@/components/Demo/Home/Home.vue'
import DemoDefaultConfig from '@/components/Demo/DefaultConfig/DefaultConfig.vue'
import DemoBase from '@/components/Demo/Base/Base.vue'
import DemoConfirm from '@/components/Demo/Confirm/Confirm.vue'
import DemoPrompt from '@/components/Demo/Prompt/Prompt.vue'
import DemoCustomComponent from '@/components/Demo/CustomComponent/CustomComponent.vue'
import DemoCustomComponentInFooter from '@/components/Demo/CustomComponentInFooter/CustomComponentInFooter.vue'
import DemoCloseCallback from '@/components/Demo/CloseCallback/CloseCallback.vue'
import DemoAsyncApply from '@/components/Demo/AsyncApply/AsyncApply.vue'
import DemoError from '@/components/Demo/Error/Error.vue'

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
      path: '/inject-custom-component',
      name: 'inject-custom-component',
      component: DemoCustomComponent,
    },
    {
      path: '/custom-component-in-footer',
      name: 'custom-component-in-footer',
      component: DemoCustomComponentInFooter,
    },
    {
      path: '/close-callback',
      name: 'close-callback',
      component: DemoCloseCallback,
    },
    {
      path: '/async-apply',
      name: 'async-apply',
      component: DemoAsyncApply,
    },
    {
      path: '/error',
      name: 'error',
      component: DemoError,
    },
  ]
})
