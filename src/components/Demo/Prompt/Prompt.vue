<template>
  <div>
    <div class="example-container">
      <h1>Prompt</h1>

      <div class="markdown-container">
        <ExamplePrompt></ExamplePrompt>
      </div>

      <button class="btn btn-success btn-sm" @click="confirm">
        popup
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExamplePrompt from '@/components/Demo/Prompt/Prompt.md'
export default {
  methods: {
    confirm() {
      this.$popup('append', {
        type: 'prompt',
        content: 'Enter your name',
        defaultValue: 'Your name',
        placeholder: 'Your name',
        apply: {
          callback: this.apply,
          disable: data => !data
        },
      })
    },
    apply(data) {
      alert(`apply: ${data}`)
      console.warn('apply', data)
    },
  },
  components: {
    ExamplePrompt,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>