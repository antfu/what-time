<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div border="b gray/15" p2>
    <TimezoneSearch />
  </div>
</template>
