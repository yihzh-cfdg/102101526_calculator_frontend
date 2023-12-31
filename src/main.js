import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import './assets/css/reset.css'
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
import App from "./App.vue";
import router from "./router";
Vue.use(ElementUI);
axios.defaults.baseURL = "http://47.110.148.166:8083";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
