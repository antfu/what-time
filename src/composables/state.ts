import type { Timezone } from '../types'

export const zones = ref<Timezone[]>([])

export function addToTimezone(timezone: Timezone) {
  zones.value.push(timezone)
}
