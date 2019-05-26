export default {
  props: {
    popupConfig: {
      type: Object,
    },
    defaultConfig: {
      type: Object,
    },
    data: {
      default: () => null,
    },
  },
  data() {
    return {
      localData: null,
    }
  },
}