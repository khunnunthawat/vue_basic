<template>
  <div id="comA">
    <h3>{{ $store.getters.getCount }}</h3>
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  name: "comA",
  methods: {
    add() {
      this.$store.dispatch("addAction"); // เข้าถึง vuex ของ actions ที่เป็นฟังก์ชั่น addAction
    }
  }
};
</script>

<style lang="scss" scoped></style>
