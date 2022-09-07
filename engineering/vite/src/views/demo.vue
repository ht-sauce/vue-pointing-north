<template>
  <div></div>
</template>

<script setup lang="ts">
// vue3.2起以下四个函数不需要每次都从vue中导出
//   defineProps: 'readonly',
//   defineEmits: 'readonly',
//   defineExpose: 'readonly',
//   withDefaults: 'readonly'
import {
  watch,
  computed,
  onMounted,
  onUnmounted,
  ref,
  onActivated,
  onDeactivated,
  reactive,
} from 'vue'
const props = defineProps({ test: { type: Number, default: 1 } })

const emits = defineEmits(['change'])

const demo = ref<number>(0)
// 对象方式，但不能直接赋值
const rtive = reactive({ test: 1 })

watch(
  () => props.test,
  (test: number) => {
    console.log(test)
  },
  { immediate: true, deep: true },
)

const test2 = computed(() => props.test)

onMounted(() => {
  console.log('元素挂载时')
  emits('change', 1)
})
onUnmounted(() => {
  console.log('组件卸载前')
})
// keep-alive缓存下生命周期
onActivated(() => {
  console.log('组件被激活')
})
onDeactivated(() => {
  console.log('组件隐藏，失活')
})

function onload() {
  console.log(test2.value, demo, rtive)
}

defineExpose({
  onload,
})
</script>

<style scoped lang="scss"></style>
