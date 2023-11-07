<template>
  <div v-if="camera">
    <h1>{{ camera.brand }} {{ camera.model }}</h1>
    <img :src="camera.image" alt="Camera Image" />
    <p>价格: {{ camera.price }}</p>
    <p>描述: {{ camera.description }}</p>
    <!-- 更多详细参数 -->
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      camera: null
    };
  },
  mounted() {
    // 从后端获取相机详细数据的逻辑，使用 Axios 或 Fetch API 发送 GET 请求
    // 根据路由参数获取相机ID，然后获取对应相机的详细信息
    const cameraId = this.$route.params.id;
    // 示例数据，实际应该从后端获取
    this.camera = {
      id: cameraId,
      brand: 'Nikon',
      model: 'D850',
      price: '$2500',
      image: 'url_to_nikon_d850_large.jpg',
      description: 'Nikon D850 is a high-end DSLR camera with excellent image quality.',
      // 更多详细参数
    };
  }
};
</script>
