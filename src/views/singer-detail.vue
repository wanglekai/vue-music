<template>
  <div class="singer-detail">
    <music-list
      :songs="songs"
      :title="title"
      :pic="pic"
      :loading="loading"
    ></music-list>
  </div>
</template>

<script>
  // import createDetailComponent from '@/assets/js/create-detail-component'
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'
import MusicList from '@/components/music-list'
  // import { SINGER_KEY } from '@/assets/js/constant'
  // export default createDetailComponent('singer-detail', SINGER_KEY, getSingerDetail)
export default {
  name: 'singer-detail',
  props: {
    singer: Object
  },
  data () {
    return {
      songs: [],
      loadding: false
    }
  },
  computed: {
    pic() {
      const data = this.singer
      return data && data.pic
    },
    title() {
      const data = this.singer
      return data && (data.name || data.title)
    }
  },
  components: { MusicList },
  async created() {
    const result = await getSingerDetail(this.singer)
    this.songs = await processSongs(result.songs)
  }
}
</script>

<style lang="scss" scoped>
  .singer-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
