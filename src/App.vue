<template>
  <div id="app">
    <Header />
    <Content />
    <Footer @onClock="onClock" />
    <p>{{ time }}</p>
  </div>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import Content from "./components/layouts/Content.vue";
import Footer from "./components/layouts/Footer.vue";
import moment from "moment";
export default {
  name: "app",
  methods: {
    onClock(value) {
      this.time = moment(value).format("DD/MM/YYYY hh:mm:ss");
    }
  },
  data() {
    return {
      time: ""
    };
  },
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style lang="scss"></style>
