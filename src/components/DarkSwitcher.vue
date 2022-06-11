<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    i-carbon-sun dark:i-carbon-moon
    @click="toggleDark()"
  />
</template>
