<script setup>
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="menu">
    <el-menu
      :default-active="$route.path"
      background-color="#001530"
      router
      :collapse="props.isCollapse"
    >
      <el-sub-menu index="/html">
        <template #title>
          <el-icon><PictureRounded /></el-icon>
          <span>HTML视觉</span>
        </template>
        <el-menu-item index="/html/version">视觉设计</el-menu-item>
        <el-menu-item index="1-2">交互设计</el-menu-item>
        <el-menu-item index="1-3">背景图案</el-menu-item>
        <el-menu-item index="1-4">复杂布局</el-menu-item>
        <el-menu-item index="1-5">应用页面框架</el-menu-item>
        <el-menu-item index="1-6">实用功能</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/css">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>Css动效</span>
        </template>
        <el-menu-item index="/css/button">动效按钮</el-menu-item>
        <el-menu-item index="2-2">丰富动效</el-menu-item>
        <el-menu-item index="2-3">生成正多边形</el-menu-item>
        <el-menu-item index="2-4">生成阴影</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>Echarts交互</span>
        </template>
        <el-menu-item index="3-1">柱状图</el-menu-item>
        <el-menu-item index="3-2">饼图</el-menu-item>
        <el-menu-item index="3-3">生成正多边形</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="less">
.menu {
  --el-menu-text-color: #fff;
  --el-menu-active-color: skyblue;
  height: 100%;
  .el-menu {
    height: 100%;
    border-right: none;
    user-select: none;
  }
}
</style>
