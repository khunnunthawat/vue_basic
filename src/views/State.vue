<template>
  <div id="state">
    <h3>State</h3>
    <h4>{{ count }}</h4>
    <h4>{{ Math.random() }}</h4>
    <h4>Timestamp : {{ timestamp }}</h4>
    <button class="btn btn-vue" @click="timestamp = Date.now()">
      Update Timestamp
    </button>
    <button class="btn btn-vue" @click="count++">Update Count</button>
  </div>
</template>

<script>
export default {
  name: "State",
  created() {
    this.timestamp = 0;
  },
  mounted() {
    setInterval(() => {
      //this.count++;
      console.log("Timestamp:" + this.timestamp);
    }, 100);
  },
  data() {
    return {
      count: 0 //local state
    };
  }
};
</script>

<style></style>
