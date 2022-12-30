<script setup>
import image from "../assets/img/frontpic.jpg";
</script>

<template>
  <div id="homeimg">
    <img
      xmlns="https://www.w3.org/2000/svg"
      width="1400"
      height="400"
      fill="../assets/img/frontpic.jpg"
    />
         <path  d="../assets/img/frontpic.jpg"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      image: image,
    };
  },
};
</script>

<style lang="css"></style>
