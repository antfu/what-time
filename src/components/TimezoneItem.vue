<script setup lang="ts">
import type { Timezone } from '../types'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour: 'numeric',
  minute: 'numeric',
})

const state = $computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = $computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' ') || '')
const offset = $computed(() => {
  const offset = timezone.offset - homeOffset.value
  return offset > 0 ? `+${offset}` : offset
})
const time = $computed(() => formatter.format(now.value))
</script>

<template>
  <div flex="~" items-center gap3>
    <div
      w-8 ma op80 font-bold text-center
      :title="`${timezone.offset} GMT`"
    >
      <div
        v-if="timezone.name === homeZone.value"
        i-ri-home-2-fill op50 ma
      />
      <div v-else text-sky6>
        {{ offset }}
      </div>
    </div>
    <div flex="~ col" text-left flex-auto w-30 ws-nowrap>
      <div>
        <span of-hidden text-ellipsis mr1>{{ city }}</span>
        <sup border="~ base rounded" px1>{{ timezone.abbr }}</sup>
      </div>
      <div text-sm op50 leading-1em>
        {{ state }}
      </div>
    </div>
    <div tabular-nums ma text-sm w-20 text-right>
      {{ time }}
    </div>
  </div>
</template>
