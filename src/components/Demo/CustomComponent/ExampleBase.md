### Base Example

**Script**

```javascript
import ComponentBase from '@/components/Demo/CustomComponent/ComponentBase.vue'
export default {
  methods: {
    popup() {
      this.$popup('append', {
        component: ComponentBase,
      })
    },
  },
}
```