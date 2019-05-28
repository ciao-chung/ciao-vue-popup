import 'jquery-mousewheel'
export default {
  data() {
    return {
      scrollTop: 0,
      $popupItem: null,
    }
  },
  methods: {
    unbindMouseWheel() {
      this.$popupItem.unbind('mousewheel')
    },
    scrollStop() {
      this.$popupItem = $(this.$el)
      this.$popupItem.bind('mousewheel', (event, direction) => {
        this.scrollTop = $(window).scrollTop
        const height = this.$popupItem.height() || 0
        const scrollHeight = this.$popupItem.get(0).scrollHeight || 0
        const padding = 20*2

        // up
        if((this.scrollTop === (scrollHeight - height) && direction < 0) || (this.scrollTop === 0 && direction > 0)) {
          event.preventDefault()
        }

        // down
        else if ((this.scrollTop+height+padding >= scrollHeight-3) && direction < 0) {
          event.preventDefault()
        }
      })
    },
  },
}