<template>
  <div>
    <div class="content" v-html="popupConfig.content"></div>

    <div class="input-container">
      <input type="text"
        :class="inputCustomClass"
        :placeholder="popupConfig.placeholder"
        v-model="localData">
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import PopupItemMixin from '@/components/Plugin/PopupItem/PopupItemMixin.js'
import _cloneDeep from 'lodash/cloneDeep'
export default {
  mixins: [PopupItemMixin],
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if(this.popupConfig.defaultValue) {
        this.localData = _cloneDeep(this.popupConfig.defaultValue)
      }

      this.$nextTick(() => {
        $(this.$el).find('input').first()
          .focus()
          .select()
      })
    },
  },
  computed: {
    inputCustomClass() {
      if(this.popupConfig.inputCustomClass) return this.popupConfig.inputCustomClass
      if(this.defaultPromptCustomClass) return this.defaultPromptCustomClass
      return null
    },
    defaultPromptCustomClass() {
      if(!this.defaultConfig.prompt) return null
      return this.defaultConfig.prompt.inputCustomClass
    }
  },
  watch: {
    localData() {
      this.$emit('updateData', this.localData)
    },
    data() {
      if(this.localData == this.data) return
      this.localData = this.data
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.input-container
  margin-top: 15px
</style>