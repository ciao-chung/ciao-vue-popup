### Properties

- closeCallback(option): Function, on close callback.
  - isCancel(argument1): Boolean, if this argument is true, it mean user close popup manually(click close icon or key up esc key).

### Example

You can do something when popup on close.

```javascript
this.$popup('append', {
  content: 'foobar',
  closeCallback: (isCancel) => alert('On Close')
})
```