<template>
  <div id="slot">
    <h3>Slot</h3>

    <Clock>
      <span style="color: green">วันเวลาปัจจุบัน</span>
    </Clock>

    <!-- Using FallBack -->
    <Clock />

    <Clock>
      <span style="color: orange">วันเวลาปัจจุบัน</span>
      <template v-slot:header>
        <h3>Header</h3>
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  name: "Slot",
  components: {
    Clock
  }
};
</script>

<style></style>
