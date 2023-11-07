import { createRouter, createWebHistory } from "vue-router";
import CameraList from '@/components/CameraList.vue';
import CameraDetail from '@/components/CameraDetail.vue';
// import CameraComparison from './components/CameraComparison.vue';

const routes = [
  { path: '/', component: CameraList },
  { path: '/camera/:id', component: CameraDetail, props: true }
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;