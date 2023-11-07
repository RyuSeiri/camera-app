<template>
  <div>
    <h1>相机列表</h1>
    <ul>
      <li v-for="camera in cameras" :key="camera.id">
        <router-link :to="'/camera/' + camera.id">
          <img :src="camera.image" alt="Camera Thumbnail" />
          <h2>{{ camera.brand }} {{ camera.model }}</h2>
          <p>价格: {{ camera.price }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cameras: [
        {
          id: 1,
          brand: 'Nikon',
          model: 'D850',
          price: '$2500',
          image: 'url_to_nikon_d850_thumbnail.jpg',
          description: 'Nikon D850 is a high-end DSLR camera with excellent image quality.'
        },
        // Add more camera objects as needed
      ]
    };
  }
};
</script>
