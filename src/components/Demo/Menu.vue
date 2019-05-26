<template>
  <div class="nav-container">
    <div class="list-group">
      <router-link class="list-group-item list-group-item-action"
        v-for="link, index in menu"
        :key="'index'+index"
        :to="getRoute(link)">
        {{link.label}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          label: 'Home',
          route: {
            name: 'home',
          },
        },
        {
          label: 'Default Config',
          route: {
            name: 'default-config',
          },
        },
        {
          label: 'Base usage',
          route: {
            name: 'base',
          },
        },
        {
          label: 'Size',
          anchor: 'size',
        },
        {
          label: 'z-index',
          anchor: 'z-index',
        },
        {
          label: 'Confirm',
          route: {
            name: 'confirm',
          },
        },
        {
          label: 'Prompt',
          anchor: 'prompt',
        },
        {
          label: 'Custom vue component',
          route: {
            name: 'custom-vue-component',
          },
        },
        {
          label: 'Auto close',
          anchor: 'auto-close',
        },
        {
          label: 'Apply',
          anchor: 'apply',
        },
        {
          label: 'Close',
          anchor: 'close',
        },
        {
          label: 'Async',
          anchor: 'async',
        },
        {
          label: 'Error',
          anchor: 'error',
        },
      ],
    }
  },
  methods: {
    getRoute(link) {
      if(!link.route) return {}
      return link.route
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>