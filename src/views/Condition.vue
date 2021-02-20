<template>
  <div id="condition">
    <h3>Condition</h3>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <div v-if="isShow">Blink</div>
    <div v-else>Blink 2</div>
    <div v-show="isShow">Blink v-show</div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  mounted() {
    setInterval(() => {
      this.isShow = false;
    }, 1000);
  },
  data() {
    return {
      type: "C",
      isShow: true
    };
  }
};
</script>

<style></style>
