<template>
  <div id="app">
    <router-view/>

    <VuePopupPlugin/>
  </div>
</template>

<script>
import Vue from 'vue'
import Popup from '@/components/Plugin/Installer.js'
Vue.use(Popup)

export default {
  name: 'App'
}
</script>

<style lang="sass" type="text/sass" scoped></style>