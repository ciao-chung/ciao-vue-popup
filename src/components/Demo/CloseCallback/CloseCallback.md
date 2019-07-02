### Properties

- closeCallback(option): Function, on close callback.
  - isCancel(argument1): Boolean, if this argument is true, it mean user close popup manually(click close icon or key up esc key).
  - data(argument2): Any, data of popup

### Example

You can do something when popup on close.

```javascript
this.$popup('append', {
  content: 'foobar',
  closeCallback: (isCancel, data) => console.warn('On Close', isCancel, data)
})
```