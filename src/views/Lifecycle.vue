<template>
  <div id="lifecycle">
    <h3>Lifecycle</h3>
    <span>{{ counter }}</span>
    <br />
    <button class="btn btn-vue" @click="add">Change</button>
  </div>
</template>

<script>
export default {
  name: "Lifecycle",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    add() {
      this.counter++;
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style></style>
