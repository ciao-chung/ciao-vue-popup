<template>
  <div>
    <div class="example-container">
      <h1>Confirm</h1>

      <div class="markdown-container">
        <ExampleConfirm></ExampleConfirm>
      </div>

      <button class="btn btn-success btn-sm" @click="confirm">
        popup
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleConfirm from '@/components/Demo/Confirm/Confirm.md'
export default {
  methods: {
    confirm() {
      this.$popup('append', {
        type: 'confirm',
        content: 'Do you want to continue?',
        apply: {
          callback: this.apply,
        },
      })
    },
    apply() {
      alert('apply')
    },
  },
  components: {
    ExampleConfirm,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>