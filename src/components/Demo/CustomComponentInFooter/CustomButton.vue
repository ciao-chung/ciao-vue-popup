<template>
  <button class="btn btn-sm btn-danger" @click="action">
    Delete
  </button>
</template>

<script lang="babel" type="text/babel">
export default {
  methods: {
    async action() {
      this.$emit('setLoader', true)
      await this.fakeApi()
      this.$emit('setLoader', false)
      this.$emit('close')
    },
    fakeApi() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>