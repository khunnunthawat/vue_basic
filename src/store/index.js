import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // ทำการประกาศตัวแปร
  state: {
    count: 0 // จะถูกเปลี่ยนแปลงโดยการผ่าน mutations
  },
  getters: {
    getCount(state) {
      return state.count; // เข้าถึง getters จะปลอดภัยกว่าการเข้าถึง state โดยตรง
    }
  },
  mutations: {
    setCount(state, value) {
      state.count = value;
    }
  },
  actions: {
    addAction(context) {
      context.commit("setCount", this.getters.getCount + 1);
    },
    delAction(context) {
      context.commit("setCount", this.getters.getCount - 1);
    }
  },
  modules: {}
});
