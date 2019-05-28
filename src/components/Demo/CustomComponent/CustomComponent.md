### Props

- popupConfig: Object, the popup object which you pass to **append** method.
- defaultConfig: Object, default config object.
- error: Any, popup error, see more in **Error Page**.

### Events

- close: Close popup.
- updateData: Update data of popup, the following is arguments.
  - data(argument1): Any, data of popup, you can get this data in apply callback.
- setLoader: Set loader status, the following is arguments.
  - status(argument1): Boolean, loader status