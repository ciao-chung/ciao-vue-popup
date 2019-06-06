<template>
  <div tabindex="0" ciao-vue-popup="item"
    @keyup.enter.stop="onPopupItemKeyUpEnter"
    @keyup.esc.stop="close(true)"
    :transparent="item.shadow == false"
    :style="popupItemStyle">
    <div ciao-vue-popup="header">
      <div ciao-vue-popup="help" v-if="item.help" v-tooltip="helpTooltipConfig">
        &#10067;
      </div>

      <div ciao-vue-popup="title">
        <span v-show="title">{{title}}</span>
        <Loader v-if="loading"></Loader>
      </div>

      <div class="action">
        <span class="close-icon" @click="close(true)">&#10005;</span>
      </div>
    </div>

    <div ciao-vue-popup="body" :empty="isEmptyBody" :style="{ maxHeight: bodyMaxHeight }">
      <component
        @close="close"
        @setLoader="setLoader"
        @updateData="updateData"
        :defaultConfig="defaultConfig"
        :is="getComponent(item)"
        :popupConfig="item"
        :ciao-vue-popup-type="getType(item)"
        :error="error"
        :key="'ciao-vue-popup-'+item.uid">
      </component>
    </div>

    <div ciao-vue-popup="footer" v-if="createFooter">
      <!--apply button-->
      <button ciao-vue-popup-button
        @click="apply"
        v-if="createApplyButton"
        :class=applyButtonExtraClass
        :disabled="disableApply">
        {{applyLabel}}
      </button>

      <component
        @close="close"
        @setLoader="setLoader"
        v-for="customComponent, key in footerCustomComponents"
        :data="data"
        :key="'component-'+key"
        :is="customComponent"></component>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import ScrollTop from '@/components/Plugin/ScrollStop.js'
import Loader from '@/components/Plugin/Loader.vue'
import ItemText from './PopupItem/Text'
import ItemConfirm from './PopupItem/Confirm'
import ItemPrompt from './PopupItem/Prompt'
export default {
  mixins: [ScrollTop],
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    },
    defaultConfig: {
      type: Object,
    },
  },
  data() {
    return {
      autoCloseTimeout: null,
      data: null,
      loading: false,
      error: null,
    }
  },
  beforeDestroy() {
    clearTimeout(this.autoCloseTimeout)
    this.unbindMouseWheel()
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.scrollStop()
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
      if(!item.type) return 'item-text'
      const getComponent = !!this.$options.components[`item-${item.type}`]
      if(!getComponent) return null
      return `item-${item.type}`
    },
    getType(item) {
      if(item.component) return 'custom'
      if(!item.type) return 'text'
      return item.type
    },
    close(isCancel = false) {
      this.$emit('close', this.item.uid)
      if(typeof this.item.closeCallback == 'function') this.item.closeCallback()
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
    updateData(data) {
      this.data = data
    },
    async apply() {
      if(!this.applyCallback) return
      if(this.disableApply) return
      if(this.loading) return

      this.setLoader(true)
      this.error = null
      try {
        await this.applyCallback(this.data)
        this.close()
      } catch(error) {
        console.error(error)
        this.error = error
      }
      this.setLoader(false)
    },
    setLoader(status) {
      this.loading = status
    },
  },
  computed: {
    bodyMaxHeight() {
      const top = (this.index+1)*30
      return `calc(80vh - ${top}px)`
    },
    applyLabel() {
      if(this.item.apply && this.item.apply.label) return this.item.apply.label
      if(this.defaultConfig.apply && this.defaultConfig.apply.label) return this.defaultConfig.apply.label
      return 'Apply'
    },
    helpTooltipConfig() {
      return {
        content: this.item.help,
        hideOnTargetClick: false,
        autoHide: false,
      }
    },
    applyButtonExtraClass() {
      if(this.item.apply && this.item.apply.extraClass) return this.item.apply.extraClass
      if(this.defaultConfig.apply && this.defaultConfig.apply.extraClass) return this.defaultConfig.apply.extraClass
      return null
    },
    disableApply() {
      if(this.loading == true) return true
      if(this.applyDisableCallback) return this.applyDisableCallback(this.data)
      return false
    },
    applyDisableCallback() {
      if(!this.item) return null
      if(!this.item.apply) return null
      if(typeof this.item.apply.disable != 'function') return null
      return this.item.apply.disable
    },
    applyCallback() {
      if(!this.item) return null
      if(!this.item.apply) return null
      if(typeof this.item.apply.callback != 'function') return null
      return this.item.apply.callback
    },
    popupItemStyle() {
      return {
        minWidth: this.minWidth,
      }
    },
    isEmptyBody() {
      if(!this.item.type && !this.item.content) return true
      if(this.item.type == 'text' && !this.item.content) return true
      if(this.item.type == 'confirm' && !this.item.content) return true
      return false
    },
    createFooter() {
      if(this.createApplyButton) return true
      if(this.footerCustomComponents) return true
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
    minWidth() {
      if(!this.item.minWidth) return '20vw'
      return this.item.minWidth
    },
    footerCustomComponents() {
      if(!this.item) return null
      if(!this.item.footer) return null
      if(!this.item.footer.components) return null
      return this.item.footer.components
    },
  },
  components: {
    Loader,
    'item-text': ItemText,
    'item-confirm': ItemConfirm,
    'item-prompt': ItemPrompt,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>