<template>
  <div>
    <div class="form-group">Click apply trigger error</div>

    <div class="alert alert-danger" v-if="error">
      {{error.message}}
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    error: {
      default: () => null,
    }
  },
}
</script>