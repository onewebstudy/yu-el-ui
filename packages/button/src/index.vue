<!--
 * @Author: yubb
 * @Date: 2023-04-26 14:00:26
 * @LastEditTime: 2023-04-26 15:49:53
 * @LastEditors: yubb
 * @Description: 
 * @FilePath: \yubb-el-ui\packages\button\src\index.vue
-->
<template>
  <el-button class="muk-btn" v-bind="$attrs">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot></slot>
  </el-button>
</template>
<script lang="ts">
export default {
  name: 'YuButton',
}
</script>
<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'middle',
  },
  type: {
    type: String,
    default: 'default',
  },
})
</script>

<style scoped lang="scss"></style>
