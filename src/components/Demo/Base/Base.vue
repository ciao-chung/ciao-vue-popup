<template>
  <div>
    <div class="example-container">
      <h2>String</h2>

      <div class="mark-container">
        <ExampleString></ExampleString>
      </div>

      <button class="btn btn-success btn-sm" @click="string">
        popup
      </button>
    </div>

    <div class="example-container">
      <h2>Title and content</h2>

      <div class="mark-container">
        <ExampleTitleAndContent></ExampleTitleAndContent>
      </div>

      <button class="btn btn-success btn-sm" @click="titleAndContent">
        popup
      </button>
    </div>



  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleString from '@/components/Demo/Base/String.md'
import ExampleTitleAndContent from '@/components/Demo/Base/TitleAndContent.md'
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
  },
  components: {
    ExampleString,
    ExampleTitleAndContent,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>