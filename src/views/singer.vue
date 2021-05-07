<template>
<div class="singer" v-loading="!singers.length">
  <index-list :data="singers" @select="selectSinger" />
  <router-view :singer="selectedSinger" />
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
      singers: [],
      selectedSinger: null
    }
  },
  async created () {
    const result = await getSinger()
    // console.log(result)
    this.singers = result.singers
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      // this.cacheSinger(singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    }
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
