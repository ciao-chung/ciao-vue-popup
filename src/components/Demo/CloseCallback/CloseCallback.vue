<template>
  <div>
    <div class="example-container">
      <h1>Close Callback</h1>

      <div class="markdown-container">
        <ExampleCloseCallback></ExampleCloseCallback>
      </div>

      <button class="btn btn-success btn-sm" @click="popup">
        popup
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleCloseCallback from '@/components/Demo/CloseCallback/CloseCallback.md'
export default {
  methods: {
    popup() {
      this.$popup('append', {
        content: 'foobar',
        closeCallback: () => alert('On Close')
      })
    },
  },
  components: {
    ExampleCloseCallback,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>