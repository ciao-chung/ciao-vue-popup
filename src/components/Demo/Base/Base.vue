<template>
  <div>
    <div class="example-container">
      <h1>String</h1>

      <div class="markdown-container">
        <ExampleString></ExampleString>
      </div>

      <button class="btn btn-success btn-sm" @click="string">
        popup
      </button>
    </div>

    <div class="example-container">
      <h1>Title and content</h1>

      <div class="markdown-container">
        <ExampleTitleAndContent></ExampleTitleAndContent>
      </div>

      <button class="btn btn-success btn-sm" @click="titleAndContent">
        popup
      </button>
    </div>

    <div class="example-container">
      <h1>Help</h1>

      <div class="markdown-container">
        <ExampleHelp></ExampleHelp>
      </div>

      <button class="btn btn-success btn-sm" @click="help">
        popup
      </button>
    </div>

    <div class="example-container">
      <h1>Without shadow</h1>

      <div class="markdown-container">
      </div>

      <button class="btn btn-success btn-sm" @click="withoutShadow">
        popup
      </button>
    </div>

    <div class="example-container">
      <h1>Auto Close</h1>

      <div class="markdown-container">
        <ExampleAutoClose></ExampleAutoClose>
      </div>

      <button class="btn btn-success btn-sm" @click="autoClose">
        popup
      </button>
    </div>

  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleString from '@/components/Demo/Base/String.md'
import ExampleTitleAndContent from '@/components/Demo/Base/TitleAndContent.md'
import ExampleHelp from '@/components/Demo/Base/Help.md'
import ExampleAutoClose from '@/components/Demo/Base/AutoClose.md'
export default {
  methods: {
    string() {
      this.$popup('append', 'foobar')
    },
    titleAndContent() {
      this.$popup('append', {
        title: 'foo',
        content: 'bar',
      })
    },
    help() {
      this.$popup('append', {
        content: 'help',
        help: 'This is help<br> This is help',
      })
    },
    withoutShadow() {
      this.$popup('append', {
        content: 'Without shadow',
        shadow: false,
      })
    },
    autoClose() {
      this.$popup('append', {
        title: 'foo',
        content: 'bar',
        autoClose: 3000,
      })
    },
  },
  components: {
    ExampleString,
    ExampleTitleAndContent,
    ExampleHelp,
    ExampleAutoClose,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>