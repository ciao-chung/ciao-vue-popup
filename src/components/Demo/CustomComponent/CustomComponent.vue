<template>
  <div>
    <div class="example-container">
      <h1>Custom Component</h1>

      <div class="markdown-container">
        <DocCustomComponent></DocCustomComponent>
      </div>
      <hr>

      <div>
        <div class="markdown-container">
          <ExampleBase></ExampleBase>
        </div>

        <button class="btn btn-success btn-sm" @click="baseDemo">
          popup
        </button>
        <hr>
      </div>

      <div>
        <div class="markdown-container">
          <ExampleCustomForm></ExampleCustomForm>
        </div>

        <button class="btn btn-success btn-sm" @click="customFormDemo">
          popup
        </button>
        <hr>
      </div>

      <div>
        <div class="markdown-container">
          <ExampleStack></ExampleStack>
        </div>

        <button class="btn btn-success btn-sm" @click="stackDemo">
          popup
        </button>
        <hr>
      </div>

    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ComponentBase from '@/components/Demo/CustomComponent/ComponentBase.vue'
import ComponentForm from '@/components/Demo/CustomComponent/ComponentForm.vue'
import ComponentStack from '@/components/Demo/CustomComponent/ComponentStack.vue'
import ExampleBase from '@/components/Demo/CustomComponent/ExampleBase.md'
import ExampleCustomForm from '@/components/Demo/CustomComponent/ExampleCustomForm.md'
import ExampleStack from '@/components/Demo/CustomComponent/ExampleStack.md'
import DocCustomComponent from '@/components/Demo/CustomComponent/CustomComponent.md'
export default {
  methods: {
    baseDemo() {
      this.$popup('append', {
        component: ComponentBase,
      })
    },
    customFormDemo() {
      this.$popup('append', {
        component: ComponentForm,
        apply: {
          callback(data) {
            alert(`Quantity: ${data}`)
          }
        },
      })
    },
    stackDemo() {
      this.$popup('append', {
        component: ComponentStack,
      })
    },
  },
  components: {
    DocCustomComponent,
    ExampleBase,
    ExampleCustomForm,
    ExampleStack,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>