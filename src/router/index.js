import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventMethod from "../views/EventMethod.vue";
import Data from "../views/Data.vue";
import Computed from "../views/Computed.vue";
import Binding from "../views/Binding.vue";
import Form from "../views/Form.vue";
import Slot from "../views/Slot.vue";
import Condition from "../views/Condition.vue";
import Loop from "../views/Loop.vue";
import Lifecycle from "../views/Lifecycle.vue";
import State from "../views/State.vue";
import Ref from "../views/Ref.vue";
import DemoFilter from "../views/DemoFilter.vue";
import Vuex from "../views/Vuex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/v-model",
    name: "v-model",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/V_model.vue")
  },
  {
    path: "/event-method",
    nanme: "Event-method",
    component: EventMethod
  },
  {
    path: "/data",
    name: "data",
    component: Data
  },
  {
    path: "/computed",
    name: "computed",
    component: Computed
  },
  {
    path: "/binding",
    name: "binding",
    component: Binding
  },
  {
    path: "/form",
    name: "form",
    component: Form
  },
  {
    path: "/slot",
    name: "slot",
    component: Slot
  },
  {
    path: "/condition",
    name: "condition",
    component: Condition
  },
  {
    path: "/loop",
    name: "loop",
    component: Loop
  },
  {
    path: "/lifecycle",
    name: "lifecycle",
    component: Lifecycle
  },
  {
    path: "/state",
    name: "state",
    component: State
  },
  {
    path: "/ref",
    name: "ref",
    component: Ref
  },
  {
    path: "/demo-filter",
    name: "demofilter",
    component: DemoFilter
  },
  {
    path: "/vuex",
    name: "vuex",
    component: Vuex
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
