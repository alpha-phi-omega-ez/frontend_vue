<script setup>
import HomePage from "./components/views/HomePage.vue";
</script>

<template>
    <div class="wrapper">
      <main msg="Alpha Phi Omega, Epsilon Zeta Chapter at Rensselaer Polytechnic Institute"/>
    <HomePage> </HomePage>
  </div>
</template>

<style scoped>
header {
  line-height: 1;
}

.HomePage {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
