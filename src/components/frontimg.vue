<script setup>
import image from "../assets/img/frontpic.jpg";
</script>

<template>
  <div id="homeimg">
    <img src="../assets/img/frontpic.jpg"
      width="1100"
      height="400"
    />
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
