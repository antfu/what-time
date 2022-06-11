<script setup lang="ts">
</script>

<template>
  <div font-sans bg-canvas h-screen>
    <NavBar />
    <div border="~ base rounded" bg-base shadow mx8>
      <ActionBar />
      <TimeSchedular />
    </div>
  </div>
</template>

<style>
html.dark {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
