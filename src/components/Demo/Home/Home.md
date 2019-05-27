### Installation

```bash
yarn add ciao-vue-popup
```

### Setup in root component

**App.vue**

```html
<template>
  <div id="app">
    <VuePopupPlugin :config="popupDefaultConfig"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // to get more default config information see default config page 
      popupDefaultConfig: {
        title: 'ciao-vue-popup',
        apply: {
          extraClass: 'btn btn-sm btn-info',
        },
        prompt: {
          inputCustomClass: 'form-control form-control-sm',
        },
      }
    }
  },
}
</script>

<!--Don't forget import style-->
<style src="ciao-vue-popup/dist/ciao-vue-popup.css"></style>
```