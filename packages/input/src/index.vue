<template>
  <el-input v-bind="$attrs" :class="{ yu_color: ysize === '1' }"></el-input>
</template>
<script lang="ts">
export default {
  name: 'YuInput',
}
</script>
<script setup lang="ts">
defineProps({
  ysize: {
    type: String,
    default: '1',
  },
})
</script>

<style scoped lang="scss">
.yu_color {
  border: 1px solid #000;
}
</style>
