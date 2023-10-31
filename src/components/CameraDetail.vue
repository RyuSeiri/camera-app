<template>
  <div>
    <h1>{{ camera.name }}</h1>
    <p>分辨率: {{ camera.resolution }}</p>
    <!-- 其他详细参数 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      camera: {} // 从后端获取的相机详细数据
    };
  },
  mounted() {
    // 从后端获取相机详细数据的逻辑，使用 Axios 或 Fetch API 发送 GET 请求
    // 更新 this.camera
  }
};
</script>
