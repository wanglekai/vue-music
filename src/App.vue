<template>
  <tab />
  <router-view />
</template>
<script>
import tab from './components/tab'
export default {
  name: 'App',
  components: {
    tab
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
