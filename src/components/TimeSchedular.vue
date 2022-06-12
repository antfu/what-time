<script setup lang="ts">
</script>

<template>
  <div>
    <div
      v-for="zone, idx of zones.value"
      :key="zone.name"
      px4 py2 border="b base" relative
    >
      <TimezoneItem :timezone="zone">
        <TimeDial :timezone="zone" />
      </TimezoneItem>
      <div
        absolute left="-6" top-0 bottom-0 text-xl
        flex="~ col" justify-center
      >
        <button
          v-if="homeZone.value !== zone.name"
          icon-btn m--1px i-ri-close-fill
          title="Remove"
          @click="removeZone(zone)"
        />
        <button
          v-if="homeZone.value !== zone.name"
          icon-btn m--1px i-ri-home-2-fill scale-75
          title="Set to home zone"
          @click="setHomeZone(zone)"
        />
        <button
          v-if="idx !== 0"
          icon-btn m--1px i-ri-arrow-up-s-fill
          title="Move up"
          @click="moveZone(zone, -1)"
        />
        <button
          v-if="idx !== zones.value.length - 1"
          icon-btn m--1px i-ri-arrow-down-s-fill
          title="Move down"
          @click="moveZone(zone, 1)"
        />
      </div>
    </div>
  </div>
</template>
