<script setup lang="ts">
</script>

<template>
  <div>
    <div
      v-for="zone of zones.value"
      :key="zone.name"
      px4 py2 border="b base"
    >
      <TimezoneItem :timezone="zone" />
    </div>
  </div>
</template>
