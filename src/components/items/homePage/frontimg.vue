<script setup>
import image from "../../../assets/img/websiteCreation.png";
</script>

<template>
     <div class="PhotoReel">
        <a href="https://www.apoez.org/">
            <img src="../../../assets/img/websiteCreation.png"
              width="1080" 
              height="755"
              position="center"/>
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


<style scoped>
.PhotoReel  {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width:100vw;
  background-color: #ebebeb;
  margin-bottom: -1rem;
  margin-top: 3rem
}
</style>