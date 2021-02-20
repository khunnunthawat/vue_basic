<template>
  <div id="comB">
    <h3>{{ $store.getters.getCount }}</h3>
    <button @click="del">Del</button>
  </div>
</template>

<script>
export default {
  name: "comB",
  methods: {
    del() {
      this.$store.dispatch("delAction"); // เข้าถึง vuex ของ actions ที่เป็นฟังก์ชั่น addAction
    }
  }
};
</script>

<style lang="scss" scoped></style>
