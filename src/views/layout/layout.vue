<script setup>
import Header from './cpns/header.vue'
import Aside from './cpns/aside.vue'
import { ref } from 'vue'
const isCollapse = ref(false)
const handlerFoldChange = (value) => {
  isCollapse.value = value
}
</script>

<template>
  <div class="layout">
    <el-container class="common-layout">
      <el-header><Header @foldChange="handlerFoldChange" /></el-header>
      <el-container class="body-layout">
        <el-aside :width="isCollapse ? '60px' : '200px'" class="el-aside">
          <Aside :isCollapse="isCollapse" />
        </el-aside>
        <el-main class="el-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.layout {
  height: 100vh; /* 确保整个布局占据整个视口高度 */
  .common-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .el-header {
    background-color: #001529;
    height: 60px; /* 固定头部高度 */
  }
  .body-layout {
    height: 500px;
  }
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto; /* 启用垂直滚动 */
    text-align: left;
    background-color: #001529;
    cursor: pointer;
    line-height: 50px;
    transition: width 1s ease;
    &::-webkit-scrollbar {
      display: none; /* 隐藏滚动条 */
    }
  }
  .el-main {
    background-color: pink;
    height: 100%; /* 确保 el-main 占据整个高度 */
    overflow: hidden; /* 不启用滚动 */
    flex: 1; /* 使 el-main 占据剩余空间 */
  }
}
</style>
