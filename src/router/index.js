import { createRouter, createWebHistory } from "vue-router";
import CameraList from '@/components/CameraList.vue';
import CameraDetail from '@/components/CameraDetail.vue';
// import CameraComparison from './components/CameraComparison.vue';

const routes = [
  { path: '/', component: CameraList },
  { path: '/detail/:id', component: CameraDetail, props: true },
  // { path: '/comparison', component: CameraComparison }
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;