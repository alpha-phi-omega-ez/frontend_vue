<script setup>
import { assertExpressionStatement } from "@babel/types";
import image from "../assets/img/frontpic.jpg";
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div id="Home">
    <img :src='require()'/>
    <h3>
    </h3>
  </div>
</template>

<script>

</script>


<style scoped>
h1 {
  font-weight: 5;
  font-size: 1rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}


.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
