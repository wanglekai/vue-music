import { get } from './base'

export function getSinger() {
  return get('/api/getSingerList')
}
export function getSingerDetail(singer) {
  return get('/api/getSingerDetail', {
    mid: singer.mid
  })
}
