<template>
  <div :style="{ width: level*20+'vw'}" foobar>
    <h4>foobar level{{level}}</h4>

    <button class="btn btn-sm btn-dark" @click="popup">
      popup
    </button>
  </div>
</template>

<script lang="babel" type="text/babel">
import ComponentStack from '@/components/Demo/CustomComponent/ComponentStack.vue'
export default {
  props: {
    popupConfig: {
      type: Object,
    },
  },
  methods: {
    popup() {
      this.$popup('append', {
        component: ComponentStack,
        level: this.level+1
      })
    },
  },
  computed: {
    level() {
      if(!this.popupConfig.level) return 1
      return this.popupConfig.level
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[foobar]
  padding: 10px 20px
</style>