<template lang="">
  <div id="vuex">
    <h3>Vuex</h3>
    <h4>{{ $store.getters.getCount }}</h4>
    <hr />
    <ComA />
    <hr />
    <ComB />
  </div>
</template>
<script>
import ComA from "../components/ComA.vue";
import ComB from "../components/ComB.vue";
export default {
  name: "Vuex",
  components: {
    ComA,
    ComB
  }
};
</script>
<style lang="scss"></style>
