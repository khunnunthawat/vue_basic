<template>
  <div id="demofilter">
    <h3>Filter</h3>
    <h3>{{ 1234 | currency("THB") }}</h3>
    <h3>{{ 1234 | currency("$") }}</h3>
    <h3>{{ 2000000000000 | bytes }}</h3>
    <h3>{{ "Nunthawat" | capitalize({ onlyFirstLetter: true }) }}</h3>
    <h3>{{ [1, 2, 3] | reverseArray }}</h3>
    <h3>{{ date | ordinal }}</h3>
    <a :href="link">vue2-filters</a>
  </div>
</template>

<script>
export default {
  name: "Demofilter",
  filters: {
    reverseArray(value) {
      return value.slice().reverse();
    }
  },
  data() {
    return { link: "https://www.npmjs.com/package/vue2-filters" };
  }
};
</script>

<style></style>
