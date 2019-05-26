<template>
  <div>
    <div class="example-container">
      <h1>Custom Component</h1>

      <div class="markdown-container">
        <ExampleCustomComponent></ExampleCustomComponent>
      </div>

      <button class="btn btn-success btn-sm" @click="popup">
        popup
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleCustomComponent from '@/components/Demo/CustomComponent/CustomComponent.md'
import foobarComponent from '@/components/Demo/CustomComponent/foobar.vue'
export default {
  methods: {
    popup() {
      this.$popup('append', {
        component: foobarComponent,
      })
    },
  },
  components: {
    ExampleCustomComponent,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>