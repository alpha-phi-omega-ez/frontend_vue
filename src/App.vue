<script setup>
import HomePage from "./components/views/HomePage.vue";
import navBar from "./components/items/navBarComp/navBar.vue";
import frontimage from "./components/items/homePage/frontimg.vue";
</script>

<template>
    <div class="wrapper">
         <main msg="Alpha Phi Omega, Epsilon Zeta Chapter at Rensselaer Polytechnic Institute" />
             <HomePage>
            </HomePage>
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
  header {
    display: block;
    place-items: left;
    justify-content: left;
    align-items: left;
    padding-right: 10px 10px;
    width: 70vw;
    background-color:rgb(174, 179, 248);
    padding: .3px
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
