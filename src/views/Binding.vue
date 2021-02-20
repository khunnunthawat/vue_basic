<template>
  <div id="binding">
    <h3>Binding</h3>
    <img v-bind:src="imageUrl" v-bind:width="width" />
    <br />
    <a :href="link">My website</a>
    <p :class="[error, important]">CodeVueJS</p>
    <p :style="{ color, fontSize }">Binding Style</p>
    <p :style="isActive ? styleObject : ''">Binding Style</p>
    <button class="btn btn-vue" @click="isActive = !isActive">
      ToggleActive
    </button>
  </div>
</template>

<script>
export default {
  name: "binding",
  data() {
    return {
      imageUrl: "https://vuejs.org/images/logo.png",
      width: 100,
      link: "https://www.behance.net/khunnunthawat",
      error: "error_class",
      important: "important",
      color: "green",
      fontSize: "20px",
      styleObject: {
        backgroundColor: "blue",
        color: "white",
        fontWeight: "800"
      },
      isActive: false
    };
  }
};
</script>

<style>
.error_class {
  background-color: red;
  color: white;
}
.important {
  font-weight: 900;
}
</style>
