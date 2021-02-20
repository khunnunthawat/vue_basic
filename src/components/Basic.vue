<template>
  <div class="hello">
    <img src="../assets/vuejs.svg" alt="" width="100" />
    <h1>Basic</h1>
    <h2>{{ title }}</h2>
    <button class="btn btn-vue" v-on:click="counter += 1">
      Add {{ counter }}
    </button>
    <br />
    <br />
    <button class="btn btn-vue" @click="onClickAdd">Add</button>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: "Basic",
  data() {
    return {
      title: "Events v-on & function",
      counter: 0,
      count: 0
    };
  },
  methods: {
    onClickAdd() {
      this.count = this.count + 1;
    }
  }
};
</script>

<style scoped lang="scss"></style>
