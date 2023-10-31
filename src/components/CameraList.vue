<template>
  <div>
    <!-- 一览画面 -->
    <el-table :data="cameraList">
      <!-- 表格列 -->
      <el-table-column prop="name" label="相机名称"></el-table-column>
      <el-table-column prop="resolution" label="分辨率"></el-table-column>
      <!-- 更多列 -->
    </el-table>

    <!-- 详细画面 -->
    <div v-if="selectedCamera">
      <h2>{{ selectedCamera.name }}</h2>
      <p>分辨率: {{ selectedCamera.resolution }}</p>
      <!-- 更多详细信息 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cameraList: [], // 相机列表数据
      selectedCamera: null // 当前选中的相机
    };
  },
  // 在此组件中获取相机数据并更新cameraList
  mounted() {
    // 使用Axios或其他方法获取相机数据并更新cameraList
  }
};
</script>
