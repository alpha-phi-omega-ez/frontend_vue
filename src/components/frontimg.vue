<script setup>
import image from "../assets/img/frontpic.jpg";
</script>

<template>
  <div class="PhotoReel">
    <div class="homeimg">
     <img src="../assets/img/frontpic.jpg"
       width="600"
       height="300"
       position="left"/>
    </div>
    <div class="spacer">
      <img src="../assets/img/WhiteFull.png"
      width="50"
      height="300"/>
    </div>
    <div class="sideimg">
      <img src="../assets/img/pic6.png"
        width="200" 
        height="150"
        position="top"/>
    </div>
    </div>
    <div class="sideimg">
      <img src="../assets/img/pic6.png"
        width="200" 
        height="150"
        position="top"/>
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
}
</style>