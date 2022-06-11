<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const uppercase = computed(() => props.name.toLocaleUpperCase())
</script>

<template>
  <div>Hello, {{uppercase}}</div>
</template>
