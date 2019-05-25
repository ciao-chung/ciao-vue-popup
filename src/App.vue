<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 nav">
        <PartialMenu></PartialMenu>
      </div>

      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 page">
        <router-view/>
      </div>
    </div>

    <VuePopupPlugin :config="config"/>
  </div>
</template>

<script>
import Vue from 'vue'
import prismjs from 'prismjs'
import PrismjsLoadLanguages from 'prismjs/components/index.js'
import Popup from '@/components/Plugin/Installer.js'
import PartialMenu from '@/components/Demo/Menu.vue'
Vue.use(Popup)

export default {
  name: 'App',
  updated() {
    prismjs.highlightAll()
  },
  components: {
    PartialMenu,
  },
  computed: {
    config() {
      return {
        defaultTitle: 'Popup',
      }
    }
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="prismjs/themes/prism.css"></style>
<style lang="sass" type="text/sass">
div#app
  padding: 0
  &>.row
    margin: 0
    &>.nav
      padding: 0
    &>.page
      padding-top: 20px
  .nav-container
    height: 100vh
    overflow-y: auto
    .list-group-item
      cursor: pointer
.example-container
  padding: 20px 0
  .mark-container
    margin: 25px 0
</style>