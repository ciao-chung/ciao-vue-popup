### Description

Sometime your apply action may has some error situation.

And when error happen you may need to catch and display error on popup.

The following will show how to handle error.

**Once popup catch error after apply action, it will stop close action to keep popup open status.**

**If you want to skip any error and close popup after apply, you can just catch error in apply callback and don't do anything.** 

### Example

**Script**

```javascript
import CustomComponent from '@/components/Demo/Error/CustomComponent.vue'
export default {
  methods: {
    popup() {
      this.$popup('append', {
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
}
```

**CustomComponent.vue**

> In custom component you can use props **error** to get error property.

```html
<template>
  <div>
    <div class="form-group">Click apply trigger error</div>

    <div class="alert alert-danger" v-if="error">
      {{error.message}}
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    error: {
      default: () => null,
    }
  },
}
</script>
```