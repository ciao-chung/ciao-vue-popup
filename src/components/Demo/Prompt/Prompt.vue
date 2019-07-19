<template>
  <div>
    <div class="example-container">
      <h1>Prompt</h1>

      <div class="markdown-container">
        <ExamplePrompt></ExamplePrompt>
      </div>

      <button class="btn btn-success btn-sm" @click="prompt(0)">
        popup
      </button>

      <button class="btn btn-success btn-sm" @click="prompt(1)">
        textarea
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExamplePrompt from '@/components/Demo/Prompt/Prompt.md'
export default {
  methods: {
    prompt(textarea = false) {
      this.$popup('append', {
        type: 'prompt',
        textarea,
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