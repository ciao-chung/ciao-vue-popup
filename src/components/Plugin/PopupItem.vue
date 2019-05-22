<template>
  <div tabindex="0" ciao-vue-popup="item" @keyup.esc.stop="close">
    <div ciao-vue-popup="header">
      <div class="help"></div>

      <div class="title">
        <span v-show="item.title">{{item.title}}</span>
      </div>

      <div class="action">
        <span class="close-icon" @click="close">&times;</span>
      </div>
    </div>

    <div ciao-vue-popup="body">
      <component
        :is="getComponent(item.type)"
        :popupConfig="item"
        :key="'ciao-vue-popup-'+item.uid">
      </component>
    </div>

    <div ciao-vue-popup="footer" v-if="createFooter">
      <button ciao-vue-popup-button="info" v-if="item.accept">
        {{'Apply'}}
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ItemText from './PopupItem/Text'
export default {
  props: {
    item: {
      type: Object,
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      $(this.$el).focus()
      this.setupItemStyle()
      $(window).resize(() => {
        this.setupItemStyle()
      })
    },
    setupItemStyle() {
      this.$nextTick(() => {
        const deviceWidth = $(window).width()
        const popupWidth = $(this.$el).width()
        $(this.$el).css({
          left: (deviceWidth-popupWidth)/2
        })

        const helpWidth = $(this.$el).find('.help').width() || 0
        const actionWidth = $(this.$el).find('.action').width() || 0
        $(this.$el).find('.title').width(popupWidth - helpWidth - actionWidth)
      })
    },
    getComponent(name) {
      if(!name) return 'item-text'
      const getComponent = !!this.$options.components[`item-${name}`]
      if(!getComponent) return null
      return `item-${name}`
    },
    close() {
      this.$emit('close', this.item.uid)
    },
  },
  computed: {
    createFooter() {
      if(this.item.accept) return true
      if(this.item.footer) return true
      return false
    },
  },
  components: {
    'item-text': ItemText,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>