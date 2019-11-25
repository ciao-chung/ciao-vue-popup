### Usage

use **footer.components** options pass **Vue Components**

### Example

```javascript
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
    }
  },
}
```

### Props

- popupConfig: Object, the popup object which you pass to **append** method.
- defaultConfig: Object, default config object.
- error: Any, popup error, see more in **Error Page**.
- data: Any, popup data.

### Events

- close: Close popup.
- setLoader: Set loader status, the following is arguments.
  - status(argument1): Boolean, loader status