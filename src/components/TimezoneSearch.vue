<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '../types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

let input = $ref('')
let index = $ref(0)
const searchResult = computed(() => {
  return fuse.search(input)
})

function add(t: Timezone) {
  addToTimezone(t)
  input = ''
  index = 0
}
</script>

<template>
  <div relative>
    <input
      v-model="input" type="text" placeholder="Search timezone..."
      px2 py1 border="~ gray/15 rounded" bg-transparent w-full
    >
    <div v-show="input" absolute top-full bg-gray-900 left-0 right-0>
      <button
        v-for="i of searchResult"
        :key="i.refIndex" flex gap2
        @click="add(i.item)"
      >
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>

<style>
html {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
