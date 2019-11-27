import Vue from "vue"
console.warn(666)
export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    render(createElement) {
      return createElement(previewComponent);
    }
  }
}