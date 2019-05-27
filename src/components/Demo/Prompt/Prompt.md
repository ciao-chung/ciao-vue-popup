### Properties

- defaultValue(optional): String, Set default input value
- placeholder(optional): String, Set input placeholder
- inputCustomClass(optional): String, set custom classes of input
- apply(required): Object, **ApplyObject**
  - data(argument1): Any, result of prompt. 

### Example

```javascript
export default {
  methods: {
    confirm() {
      this.$popup('append', {
        type: 'prompt',
        content: 'Enter your name',
        defaultValue: 'Your name',
        placeholder: 'Your name',
        apply: {
          callback: this.apply,
        },
      })
    },
    apply(data) {
      alert(`apply: ${data}`)
      console.warn('apply', data)
    },
  },
}
```