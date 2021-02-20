<template>
  <div id="ref">
    <h3>Ref</h3>
    <h3 ref="title">Waiting for change by ref</h3>
    <input
      ref="input1"
      type="text"
      placeholder="This will be focused automatically"
    />
  </div>
</template>

<script>
export default {
  name: "Ref",
  mounted() {
    this.$refs["title"].textContent = "Vuejs change Ref";
    this.$refs["input1"].focus();
    this.$refs["input1"].values = "1234";
  }
};
</script>

<style></style>
