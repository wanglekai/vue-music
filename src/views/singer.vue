<template>
<div class="singer" v-loading="!singers.length">
  <index-list :data="singers" />
</div>
</template>
<script>
import { getSinger } from '../service/singer'
import indexList from '../components/index-list'
export default {
  name: 'singer',
  components: { indexList },
  data() {
    return {
      singers: []
    }
  },
  async created () {
    const result = await getSinger()
    // console.log(result)
    this.singers = result.singers
  }
}
</script>
<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 44px;
  bottom: 0;
}
</style>
