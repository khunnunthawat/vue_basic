import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/style.scss";

Vue.config.productionTip = false;

import Vue2Filters from "vue2-filters";
Vue.use(Vue2Filters);

new Vue({
  router, // เปลี่ยนหน้า push.router
  store, // vuex
  render: h => h(App) // ทำการถามว่าโหลดตัว component ตัวไหนเป็นตัวแรก ก็คือ App.vue ขึ้นมาก่อน
}).$mount("#app"); // app นี้คือส่วนของ index.html id="app"
