<template>
  <div id="data">
    <h2>Data</h2>
    <button
      @click="
        count++;
        isLogged = true;
      "
      class="btn btn-vue"
    >
      Count ++
    </button>
    <p>{{ count }}</p>
    <div>{{ message }}</div>
    <div>{{ isLogged }}</div>
    <input type="text" placeholder="Enter a message" v-model="message" />
    <!-- v-model คือ 2 way binding โดยตัวแปล data โดยตรง -->
    <h3 v-if="isLogged">Google</h3>
    <br />
    <div>{{ account.username }} {{ account.password }}</div>
    <!-- <div>{{ coures }}</div> -->
    <ul>
      <li v-for="(item, index) in coures" :key="index">
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "data",
  mounted() {
    this.message = "Welcome to Nunthawat";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogged: false,
      account: {
        username: "admin",
        password: "1234"
      },
      coures: ["Angular", "VueJS", "ReactJS", "UXUI", "Fluter"]
    };
  }
};
</script>

<style></style>
