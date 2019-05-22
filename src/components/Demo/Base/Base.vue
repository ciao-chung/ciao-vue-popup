<template>
  <div>
    <h1>Base</h1>

    <div class="container">
      <ExampleBase></ExampleBase>
    </div>

    <button class="btn btn-success btn-sm" @click="popup">
      popup
    </button>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleBase from '@/components/Demo/Base/Base.md'
export default {
  methods: {
    popup() {
      this.$popup('append', 'foobar')
    },
  },
  components: {
    ExampleBase,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>