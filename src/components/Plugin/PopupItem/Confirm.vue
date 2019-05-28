<template>
  <div class="content" v-html="popupConfig.content"></div>
</template>

<script lang="babel" type="text/babel">
import PopupItemMixin from '@/components/Plugin/PopupItem/PopupItemMixin.js'
export default {
  mixins: [PopupItemMixin],
}
</script>

<style lang="sass" type="text/sass" scoped></style>