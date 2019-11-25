<template>
  <transition name="fade" mode="out-in">
    <div ciao-vue-popup="main" @click.stop v-if="hasAnyPopup" :style="popupStyle">
      <transition-group name="fade" ciao-vue-popup="item-container" tag="div">
        <PopupItem ciao-vue-popup="item"
          @close="close"
          v-for="item, index in items"
          :defaultConfig="defaultConfig"
          :index="index"
          :item="item"
          :key="'ciao-vue-popup-'+item.uid">
        </PopupItem>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import { events } from '@/components/Plugin/Events.js'
import PopupItem from './PopupItem'
import uuid from 'uuid'
import _cloneDeep from 'lodash/cloneDeep'
export default {
  props: {
    config: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      items: [],
      popupConfig: null,
    }
  },
  created() {
    events.$on('append', this.append)
    events.$on('close', this.close)
    events.$on('closeAll', this.closeAll)
  },
  methods: {
    uid() {
      return uuid.v4()
    },
    append(options) {
      const itemConfig = this.createItemConfig(options)
      this.items.push(itemConfig)
    },
    createItemConfig(options) {
      if(typeof options == 'string') {
        return {
          uid: this.uid(),
          content: options,
          type: 'text',
        }
      }

      if(!options.uid) options.uid = this.uid()
      return options
    },
    close(uid) {
      if(!this.itemKeyValueModel[uid]) return
      const index = this.itemKeyValueModel[uid].index
      this.$delete(this.items, index)
      setTimeout(() => {
        this.focusLastPopup()
      }, 300)
    },
    closeAll() {
      this.items = []
    },
    focusLastPopup() {
      const $items = $('div[ciao-vue-popup="item"]')
        .not('.fade-leave-active')
        .not('.fade-leave-to')
      if($items.length == 0) return
      const $lastItem = $items[$items.length-1]
      if(!$lastItem) return
      $lastItem.focus()
    }
  },
  computed: {
    defaultConfig() {
      const config = !this.config ? {} : this.config
      let result = {
        defaultTitle: null,
        applyOnEnter: true,
        ...config,
      }
      return result
    },
    zIndex() {
      if(!this.defaultConfig.zIndex) return 9000
      return this.defaultConfig.zIndex
    },
    popupStyle() {
      return {
        'animation-duration': '0.3s',
        zIndex: this.zIndex,
      }
    },
    itemKeyValueModel() {
      let result = {}
      for(const index in this.items) {
        let item = _cloneDeep(this.items[index])
        item.index = index
        result[item.uid] = item
      }
      return result
    },
    hasAnyPopup() {
      return this.items.length > 0
    },
  },
  components: {
    PopupItem,
  },
}
</script>

<style src="vue2-animate/dist/vue2-animate.min.css"></style>
<style src="@/assets/popup.sass" lang="sass" type="text/sass"></style>
<style src="@/assets/v-popover.scss" lang="scss" type="text/scss"></style>
<style lang="sass" type="text/sass"></style>