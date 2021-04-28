import { get } from './base'

export function getSinger() {
  return get('/api/getSingerList')
}
