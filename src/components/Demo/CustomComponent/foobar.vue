<template>
  <div :style="{ width: level*20+'vw'}">
    <h3>foobar level{{level}}</h3>

    <button class="btn btn-sm btn-dark" @click="popup">
      popup
    </button>
  </div>
</template>

<script lang="babel" type="text/babel">
import foobarComponent from '@/components/Demo/CustomComponent/foobar.vue'
export default {
  props: {
    popupConfig: {
      type: Object,
    },
  },
  methods: {
    popup() {
      this.$popup('append', {
        component: foobarComponent,
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