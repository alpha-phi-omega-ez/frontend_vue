<script setup>
import image from "../assets/img/websiteCreation.png";
</script>

<template>
  <div class="PhotoReel">
    <a href="https://www.apoez.org/">
      <img src="../assets/img/websiteCreation.png"
        width="1000" 
        height="800"
        position="top"/>
    </a>
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

<style lang="css">
</style>

<style scoped>
.PhotoReel  {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
</style>