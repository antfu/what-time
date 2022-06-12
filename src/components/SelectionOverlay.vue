<script setup lang="ts">
const top = $ref(0)
const bottom = $ref(0)
let edgeStart = $ref(0)
let edgeEnd = $ref(0)
const leftEdge = $computed(() => Math.min(edgeStart, edgeEnd))
const rightEdge = $computed(() => Math.max(edgeStart, edgeEnd))
const width = $computed(() => Math.abs(edgeStart - edgeEnd))

const { pressed } = useMousePressed()
const { x, y } = useMouse()
const el = ref<HTMLElement>()
const box = reactive(useElementBounding(el))

function rounded(x: number) {
  let n = Math.round(x / dayCellWidth)
  n = Math.max(0, n)
  n = Math.min(24, n)
  return n * dayCellWidth
}

whenever(pressed, (i) => {
  edgeStart = rounded(x.value - box.left)
  edgeEnd = edgeStart
}, { flush: 'sync' })

watchEffect(() => {
  if (!pressed.value)
    return
  edgeEnd = rounded(x.value - box.left)
})

const position = $computed(() => ({
  left: `${leftEdge}px`,
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${width}px`,
}))
const leftWhiteout = $computed(() => ({
  left: '0',
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${leftEdge}px`,
}))
const rightWhiteout = $computed(() => ({
  right: '0',
  top: `${top}px`,
  bottom: `${bottom}px`,
  left: `${rightEdge}px`,
}))
</script>

<template>
  <div v-show="pressed" ref="el" pointer-events-none>
    <div absolute :style="leftWhiteout" bg-base op80 />
    <div absolute :style="rightWhiteout" bg-base op80 />
    <div absolute border="3 green6 rounded" shadow :style="position" />
  </div>
</template>
