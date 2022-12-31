<script setup>
import frontimage from "./frontimg.vue";
import navBar from "./navBarComp/navBar.vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div id="HomePage">
    <frontimage/>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  font-weight: 5;
  font-size: 1rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.navBar {
  padding:0
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
