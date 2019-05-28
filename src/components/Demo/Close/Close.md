### Close specify popup

By default, each popup has itself unique id when it has been created(**append action**).

But you can specify it's unique id(**uid**) when you append popup.

And then you can close this popup from external(in other vue component).

```javascript
this.$popup('append', {
  uid: 'my-popup',
})

this.$popup('close', 'my-popup')
```

### Close all popup

```javascript
this.$popup('closeAll')
```