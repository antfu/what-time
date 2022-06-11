<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '../types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

let input = $ref('')
let index = $ref(0)
const searchResult = $computed(() => {
  return fuse.search(input)
})

function add(t: Timezone) {
  addToTimezone(t)
  input = ''
  index = 0
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown')
    index = (index + 1) % searchResult.length
  else if (e.key === 'ArrowUp')
    index = (index - 1 + searchResult.length) % searchResult.length
  else if (e.key === 'Enter')
    add(searchResult[index].item)
}
</script>

<template>
  <div relative>
    <input
      v-model="input" type="text" placeholder="Search timezone..."
      p="x3 y2" text-xl border="~ base rounded" bg-transparent w-full
      @keydown="onKeyDown"
    >
    <div
      v-show="input"
      absolute top-full left-0 right-0 z-10
      border="~ base rounded" shadow bg-base max-h-100 overflow-auto
    >
      <button
        v-for="i, idx of searchResult"
        :key="i.refIndex" block w-full px2
        :class="idx === index ? 'bg-gray:10' : ''"
        @click="add(i.item)"
      >
        <TimezoneItem :timezone="i.item" />
      </button>
    </div>
  </div>
</template>
