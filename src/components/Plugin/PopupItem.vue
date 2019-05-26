<template>
  <div tabindex="0" ciao-vue-popup="item"
    @keyup.enter.stop="onPopupItemKeyUpEnter"
    @keyup.esc.stop="close"
    :style="popupItemStyle">
    <div ciao-vue-popup="header">
      <div class="help"></div>

      <div class="title">
        <span v-show="title">{{title}}</span>
      </div>

      <div class="action">
        <span class="close-icon" @click="close">&times;</span>
      </div>
    </div>

    <div ciao-vue-popup="body">
      <component
        :is="getComponent(item)"
        :popupConfig="item"
        :key="'ciao-vue-popup-'+item.uid">
      </component>
    </div>

    <div ciao-vue-popup="footer" v-if="createFooter">
      <button ciao-vue-popup-button="info" v-if="createApplyButton" @click="apply">
        {{'Apply'}}
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ItemText from './PopupItem/Text'
import ItemConfirm from './PopupItem/Confirm'
export default {
  props: {
    item: {
      type: Object,
    },
    defaultConfig: {
      type: Object,
    },
  },
  data() {
    return {
      autoCloseTimeout: null,
    }
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

      if(this.item.autoClose) this.autoClose()
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
    getComponent(item) {
      if(item.component) return item.component
      if(!name) return 'item-text'
      const getComponent = !!this.$options.components[`item-${item.name}`]
      if(!getComponent) return null
      return `item-${item.name}`
    },
    close() {
      this.$emit('close', this.item.uid)
    },
    autoClose() {
      clearTimeout(this.autoCloseTimeout)
      this.autoCloseTimeout = setTimeout(() => {
        this.close()
      }, this.item.autoClose)
    },
    onPopupItemKeyUpEnter() {
      if(this.item.applyOnEnter == true) return this.apply()
      if(this.defaultConfig.applyOnEnter == true) return this.apply()
      return
    },
    async apply() {
      try {
        await this.item.apply.callback()
      } catch(error) {
        console.error(error)
      }
      this.close()
    },
  },
  computed: {
    popupItemStyle() {
      return {
        zIndex: this.zIndex,
        minWidth: this.minWidth,
      }
    },
    createFooter() {
      if(this.createApplyButton) return true
      if(this.item.footer) return true
      return false
    },
    createApplyButton() {
      if(this.item.type == 'confirm') return true
      if(this.item.type == 'prompt') return true
      if(this.item.apply) return true
      return false
    },
    title() {
      if(this.item.title != undefined) return this.item.title
      return this.defaultConfig.title
    },
    zIndex() {
      if(!this.item.zIndex) return 9000
      return this.item.zIndex
    },
    minWidth() {
      if(!this.item.minWidth) return '20vw'
      return this.item.minWidth
    },
  },
  components: {
    'item-text': ItemText,
    'item-confirm': ItemConfirm,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>