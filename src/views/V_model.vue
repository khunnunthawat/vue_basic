<template>
  <div id="v-model">
    <h2>v-model</h2>
    <input v-model="message" type="text" placeholder="Enter your message" />
    <p>Message is: {{ message }}</p>
    <button class="btn btn-vue" @click="message = ''">Reset</button>
  </div>
</template>

<script>
export default {
  name: "v-model",
  data() {
    return {
      message: ""
    };
  }
};
</script>

<style></style>
