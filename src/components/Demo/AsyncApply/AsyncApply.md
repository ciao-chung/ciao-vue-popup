### Example

You can pass a async apply callback, popup will close when your async apply action finished.

```javascript
export default {
  methods: {
    popup() {
      this.$popup('append', {
        apply: {
          callback: this.apply,
        },
      })
    },
    apply(data) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    },
  },
}
```