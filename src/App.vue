<script setup>
import Home from './components/Home.vue'
import navbar from './components/navbar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <main msg="Alpha Phi Omega, Epsilon Zeta Chapter" />
    </div>
    <Home>
    </Home>
  </header>
  <main>
    <navbar />
  </main>
</template>

<style scoped>
header {
  line-height: 1;
}

.home {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
