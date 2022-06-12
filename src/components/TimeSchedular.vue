<script setup lang="ts">
</script>

<template>
  <div relative select-none>
    <div
      absolute left--6 top-0 bottom-0
      flex="~ col"
    >
      <div
        v-for="zone, idx of zones.value"
        :key="zone.name"
        flex="~ col none" text-xl justify-center items-center
        :style="{ height: `${timezoneItemHeight}px` }"
      >
        <button
          v-if="idx !== 0"
          icon-btn m--1px i-ri-arrow-up-s-fill
          title="Move up"
          @click="moveZone(zone, -1)"
        />
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
          v-if="idx !== zones.value.length - 1"
          icon-btn m--1px i-ri-arrow-down-s-fill
          title="Move down"
          @click="moveZone(zone, 1)"
        />
      </div>
    </div>
    <div of-x-auto of-visible relative>
      <div
        v-for="zone of zones.value"
        :key="zone.name"
        border="b base"
      >
        <div flex="~ row" items-center w-max>
          <TimezoneItem
            :style="{ height: `${timezoneItemHeight}px`, width: `${timezoneItemWidth}px` }"
            :timezone="zone"
            flex-none px3
          />
          <TimeDial :timezone="zone" />
        </div>
      </div>
      <SelectionOverlay
        absolute inset-0 w-full
        :style="{ left: `${timezoneItemWidth}px` }"
      />
    </div>
  </div>
</template>
