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
          label: 'Default config',
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
          label: 'Confirm',
          route: {
            name: 'confirm',
          },
        },
        {
          label: 'Prompt',
          route: {
            name: 'prompt',
          },
        },
        {
          label: 'Inject custom component',
          route: {
            name: 'inject-custom-component',
          },
        },
        {
          label: 'Custom component in footer',
          route: {
            name: 'custom-component-in-footer',
          },
        },
        {
          label: 'Close Callback',
          route: {
            name: 'close-callback',
          },
        },
        {
          label: 'Async apply',
          route: {
            name: 'async-apply',
          },
        },
        {
          label: 'Error',
          route: {
            name: 'error',
          },
        },
        {
          label: 'Close popup',
          route: {
            name: 'close',
          },
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