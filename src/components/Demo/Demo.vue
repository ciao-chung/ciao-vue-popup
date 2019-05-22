<template>
  <div>
    <h1>Demo Page</h1>

    <button @click="openText">text</button>
  </div>
</template>

<script>
export default {
  methods: {
    openText() {
      this.$popup('append', 'foobar')
    },
  },
}
</script>