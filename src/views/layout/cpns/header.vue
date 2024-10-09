<script setup>
import { ref, defineEmits } from 'vue'
const isFold = ref(false)

const emits = defineEmits(['foldChange'])
// 判断是否折叠
const handlerControl = () => {
  isFold.value = !isFold.value
  // 将改变的状态传递给父组件
  emits('foldChange', isFold.value)
}
</script>

<template>
  <div class="header">
    <div class="header-content">视觉效果集合</div>
    <div class="aside-control" @click="handlerControl">
      <el-icon size="24px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  .header-content {
    position: relative;
    width: 200px;
    background: linear-gradient(45deg, #d628fe, #35a2fd);
    background-clip: text;
    color: transparent;
    font-size: 28px;
    font-weight: 600;
    margin-left: 16px;
    margin-right: 20px;
    padding: 15px 0;
  }
  .aside-control {
    background-color: #9ea6c6;
    position: absolute;
    top: 22px;
    left: 220px;
    cursor: pointer;
  }
}
</style>
