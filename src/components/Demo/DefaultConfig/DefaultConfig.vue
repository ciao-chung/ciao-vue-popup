<template>
  <div>
    <div class="example-container">
      <h1>Default Config</h1>

      <div class="markdown-container">
        <DocDefaultConfig></DocDefaultConfig>
      </div>

    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import DocDefaultConfig from '@/components/Demo/DefaultConfig/DefaultConfig.md'
export default {
  components: {
    DocDefaultConfig,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>