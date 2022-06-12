<script setup lang="ts">
</script>

<template>
  <div of-x-auto relative>
    <div
      v-for="zone of zones.value"
      :key="zone.name"
      px2 py2 border="b base" relative
      flex="~ gap3"
    >
      <div
        text-xl w-5
        flex="~ col none" justify-center items-center
      >
        <!-- <button
          v-if="idx !== 0"
          icon-btn m--1px i-ri-arrow-up-s-fill
          title="Move up"
          @click="moveZone(zone, -1)"
        /> -->
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
        <!-- <button
          v-if="idx !== zones.value.length - 1"
          icon-btn m--1px i-ri-arrow-down-s-fill
          title="Move down"
          @click="moveZone(zone, 1)"
        /> -->
      </div>
      <TimezoneItem :timezone="zone" w-max>
        <TimeDial :timezone="zone" />
      </TimezoneItem>
    </div>
    <SelectionOverlay absolute inset-0 />
  </div>
</template>
