<template>
  <div>
    <div class="example-container">
      <h1>CustomComponentInFooter</h1>

      <div class="markdown-container">
        <ExampleCustomComponentInFooter></ExampleCustomComponentInFooter>
      </div>

      <button class="btn btn-success btn-sm" @click="popup">
        popup
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleCustomComponentInFooter from '@/components/Demo/CustomComponentInFooter/CustomComponentInFooter.md'
import CustomButton from '@/components/Demo/CustomComponentInFooter/CustomButton.vue'
export default {
  methods: {
    popup() {
      this.$popup('append', {
        footer: {
          components: {
            CustomButton,
          },
        },
      })
    },
  },
  components: {
    ExampleCustomComponentInFooter,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>