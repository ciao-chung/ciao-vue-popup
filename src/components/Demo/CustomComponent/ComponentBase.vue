<template>
  <div foobar>
    <div v-for="i in 10">
      <h3>Some Custom Content</h3>
      <img src="https://vuejs.org/images/logo.png" alt="">
    </div>
  </div>
</template>

<style lang="sass" type="text/sass" scoped>
div[foobar]
  padding: 10px 20px
</style>