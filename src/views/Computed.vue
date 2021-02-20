<template>
  <div id="computed">
    <h3>Computed</h3>
    <h3>{{ firstname }}</h3>
    <h3>{{ lastname }}</h3>
    <h3>{{ fullname }}</h3>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
    <h1>Random No from method : {{ getrandomno1() }}</h1>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
  </div>
</template>

<script>
export default {
  name: "computed",
  methods: {
    getrandomno1() {
      return Math.random();
    }
  },
  data() {
    return {
      firstname: "Nunthawat",
      lastname: "Rakyard"
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getrandomno() {
      return Math.random();
    }
  }
};
</script>

<style></style>
