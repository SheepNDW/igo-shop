<template>
  <RouterView />
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    watch(route, (newValue) => {
      const newTitle = newValue.meta.title ?? ''
      document.title = `碁人館 ${newTitle}`
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/all.scss';
</style>
