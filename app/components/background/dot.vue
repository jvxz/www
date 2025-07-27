<script lang="ts" setup>
import { motion, useMotionValue, useSpring } from 'motion-v'

const sens = ref(0.4 * Math.random() / 10)

const { height, width } = useWindowSize()
const initX = ref(typeof window !== 'undefined' ? Math.random() * (width.value) : 0)
const initY = ref(typeof window !== 'undefined' ? Math.random() * (height.value) : 0)

const x = useMotionValue(initX.value)
const y = useMotionValue(initY.value)

const { x: mouseX, y: mouseY } = useMouse()
watch([mouseX, mouseY], updatePosition)
onMounted(() => updatePosition())

const sX = useSpring(x, {
  damping: 15,
  stiffness: 100,
})

const sY = useSpring(y, {
  damping: 15,
  stiffness: 100,
})

function updatePosition() {
  x.set(initX.value + (mouseX.value * sens.value))
  y.set(initY.value + (mouseY.value * sens.value))
}
</script>

<template>
  <motion.div
    :initial="{
      translateY: 1000,
      opacity: 0,
    }"
    :animate="{
      translateY: -250,
      opacity: 1,
    }"
    :transition="{
      duration: 1 * Math.random() + 4,
      ease: [0.17, 0.96, 0.92, 1],
    }"
  >
    <motion.div
      class="size-32 rounded-full"
      :style="{
        x: sX,
        y: sY,
        opacity: Math.random() * (0.3 - 0.15) + 0.15,
        backgroundColor: Math.random() > 0.5 ? 'var(--secondary)' : 'var(--primary)',
      }"
      :animate="{
        translateX: [20 * Math.random()],
        translateY: [20 * Math.random()],
      }"
      :transition="{
        duration: 1 * Math.random() + 5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: [0.76, 0, 0.24, 1],
      }"
    />
  </motion.div>
</template>
