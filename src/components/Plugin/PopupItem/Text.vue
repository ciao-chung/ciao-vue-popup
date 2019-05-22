<template>
  <div tabindex="0">
    text - {{popupConfig}}
  </div>
</template>

<script lang="babel" type="text/babel">
import PopupItemMixin from '@/components/Plugin/PopupItem/PopupItemMixin.js'
export default {
  mixins: [PopupItemMixin],
  data() {
    return {}
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>