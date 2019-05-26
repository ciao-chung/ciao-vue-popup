### Installation

```bash
yarn add ciao-vue-popup
```

### Setup in root component

**App.vue**

```vue
<template>
  <div id="app">
    <VuePopupPlugin :config="popupDefaultConfig"/>
  </div>
</template>

<script>
import Vue from 'vue'
import CiaoVuePopup from 'ciao-vue-popup'
Vue.use(CiaoVuePopup)

export default {
  name: 'App',
  data() {
    return {
      // to get more default config information see default config page 
      popupDefaultConfig: {
        defaultTitle: 'ciao-vue-popup',
      }
    }
  },
}
</script>

<!--don forget import style-->
<style src="ciao-vue-popup/dist/ciao-vue-popup.css"></style>
```