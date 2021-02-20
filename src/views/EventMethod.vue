<template>
  <div id="Event-method">
    <h2>Event-method</h2>
    <button v-on:click="clickMe" class="btn btn-vue">ClickMe</button>
    <button v-on:click="clickMe2('Welcome to VueJS')" class="btn btn-vue">
      ClckMe2
    </button>
    <button @click="clickMe3('Welcome to Nunthawat')" class="btn btn-vue">
      Greet
    </button>
    <h3>{{ getTimestamp() }}</h3>
  </div>
</template>

<script>
export default {
  name: "Event-method",
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      console.log("Initialization");
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    clickMe3(message) {
      alert(message);
    },
    getTimestamp() {
      return Date();
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
