<template>
  <div>
    <div class="example-container">
      <h1>Async Apply</h1>

      <div class="markdown-container">
        <ExampleAsyncApply></ExampleAsyncApply>
      </div>

      <button class="btn btn-success btn-sm" @click="popup">
        popup
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleAsyncApply from '@/components/Demo/AsyncApply/AsyncApply.md'
export default {
  methods: {
    popup() {
      this.$popup('append', {
        apply: {
          callback: this.apply,
        },
      })
    },
    apply() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    },
  },
  components: {
    ExampleAsyncApply,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>