You can pass a string to show a simple message popup.

```javascript
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
}
```