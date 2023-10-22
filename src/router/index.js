import Vue from "vue";
import VueRouter from "vue-router";
import calculator from "../views/calculator.vue";
import degreecal from "../views/degreecal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/calculator",
  },
  {
    path: "/calculator",
    name: "��ѧ������",
    component: calculator,
  },
  {
    path: "/degreecal",
    name: "���ʼ�����",
    component: degreecal,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
