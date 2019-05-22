<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 nav">
        <PartialMenu></PartialMenu>
      </div>

      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <router-view/>
      </div>
    </div>

    <VuePopupPlugin/>
  </div>
</template>

<script>
import Vue from 'vue'
import Popup from '@/components/Plugin/Installer.js'
import PartialMenu from '@/components/Demo/Menu.vue'
Vue.use(Popup)

export default {
  name: 'App',
  components: {
    PartialMenu,
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
  .nav
    padding: 0
  .nav-container
    height: 100vh
    overflow-y: auto
    .list-group-item
      cursor: pointer
</style>