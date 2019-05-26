<template>
  <div>
    <div class="example-container">
      <h2>String</h2>

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
      <h2>Auto Close</h2>

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
    ExampleAutoClose,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>