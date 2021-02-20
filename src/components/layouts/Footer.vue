<template>
  <div id="footer">
    <p class="footer">Copyright 2020 by FalNunthawat</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    setInterval(() => {
      this.$emit("onClock", Date());
    }, 100);
  }
};
</script>

<style scoped>
.footer {
  font-size: 12px;
  color: gray;
}
</style>
