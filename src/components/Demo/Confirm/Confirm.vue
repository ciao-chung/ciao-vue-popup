<template>
  <div>
    <div class="example-container">
      <h2>Confirm</h2>

      <div class="mark-container">

      </div>

      <button class="btn btn-success btn-sm" @click="confirm">
        popup
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  methods: {
    confirm() {
      this.$popup('append', {
        type: 'confirm',
        title: 'foo',
        content: 'bar',
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
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>