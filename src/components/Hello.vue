<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const uppercase = computed(() => props.name.toLocaleUpperCase())
</script>

<template>
  <div text="red 3xl" font-sans>Hello, {{uppercase}}</div>
  <div i-carbon-bee text-5xl text-yellow></div>
</template>
