#### title

**Type: String**

If you setup this property.
 
Popup will show this value when your append popup don't setup title(**undefined**).

<hr>

#### zIndex

**Type: Number**

Setup z-index of first popup(default value is **9000**).

<hr>

#### minWidth

**Type: String** 

Setup popup min width, default is **20vw**

<hr>

#### applyOnEnter

**Type: Boolean**

Commit apply action when key up enter if has apply button(confirm/prompt mode), default is **true**.

<hr>

#### prompt.inputCustomClass

**Type: String**

Set default custom classes of prompt input

<hr>

#### apply.label

**Type: String**

Set default label of apply button(default is **Apply**)

<hr>


#### apply.extraClass

**Type: String**

Set default custom classes of apply button

<hr>

### header.components

**Type: Array(Vue components)**

**Props**

- popupConfig: Object, the popup object which you pass to **append** method.
- defaultConfig: Object, default config object.
- error: Any, popup error, see more in **Error Page**.
- data: Any, popup data.

**Events**

- close: Close popup.
- setLoader: Set loader status, the following is arguments.
  - status(argument1): Boolean, loader status

<hr>