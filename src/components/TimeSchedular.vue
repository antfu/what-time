<script setup lang="ts">
</script>

<template>
  <div>
    <div
      v-for="zone, idx of zones.value"
      :key="zone.name"
      px4 py2 border="b base" relative
    >
      <TimezoneItem :timezone="zone" />
      <div
        absolute left="-6" top-0 bottom-0 text-xl
        flex="~ col" justify-center
      >
        <button
          icon-btn m--1px i-carbon-close
          title="Remove"
          @click="removeZone(zone)"
        />
        <button
          v-if="idx !== 0"
          icon-btn m--1px i-carbon-caret-up
          title="Move up"
          @click="moveZone(zone, -1)"
        />
        <button
          v-if="idx !== zones.value.length - 1"
          icon-btn m--1px i-carbon-caret-down
          title="Move down"
          @click="moveZone(zone, 1)"
        />
      </div>
    </div>
  </div>
</template>
