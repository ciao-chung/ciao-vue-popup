### Example

**Script**

```javascript
import foobarComponent from '@/components/Demo/CustomComponent/foobar.vue'
export default {
  methods: {
    popup() {
      this.$popup('append', {
        component: foobarComponent,
      })
    },
  },
}
```

**foobar.vue**

> You can use popupConfig in props to get popup object which you pass to **append** method.

```html
<template>
  <div :style="{ width: level*20+'vw'}">
    <h3>foobar level{{level}}</h3>

    <button class="btn btn-sm btn-dark" @click="popup">
      popup
    </button>
  </div>
</template>

<script lang="babel" type="text/babel">
import foobarComponent from '@/components/Demo/CustomComponent/foobar.vue'
export default {
  props: {
    popupConfig: {
      type: Object,
    },
  },
  methods: {
    popup() {
      this.$popup('append', {
        component: foobarComponent,
        level: this.level+1
      })
    },
  },
  computed: {
    level() {
      if(!this.popupConfig.level) return 1
      return this.popupConfig.level
    },
  },
}
</script>
```