<template>
  <div>
    <div class="example-container">
      <h1>Error</h1>

      <div class="markdown-container">
        <ExampleError></ExampleError>
      </div>

      <button class="btn btn-success btn-sm" @click="popup">
        popup
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ExampleError from '@/components/Demo/Error/Error.md'
import CustomComponent from '@/components/Demo/Error/CustomComponent.vue'
export default {
  methods: {
    popup() {
      this.$popup('append', {
        title: 'Error handle',
        content: 'This is error handle demo',
        component: CustomComponent,
        apply: {
          callback: this.apply,
        },
      })
    },
    async apply() {
      try {
        await this.fakeApi()
      } catch(error) {
        throw error
      }
    },
    fakeApi() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject({
            message: 'this is error',
          })
        }, 3000)
      })
    },
  },
  components: {
    ExampleError,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>