<script setup>
import frontimage from "../items/homePage/frontimg.vue";
import navBar from "../items/navBarComp/navBar.vue";
import BodyText from "../items/homePage/homeBlurb.vue"
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <div class="HomePage">
       <navBar>
       </navBar>
          <frontimage>
          </frontimage>
              <BodyText>
              </BodyText>
    </div>
</template>


<script>
export default{
  name:'HomePage',
  components:(
    navBar,
    frontimage,
    BodyText
  )
}
</script>


<style scoped>

img {
  align-items: center;
  justify-content: center;
  margin-top: 31px;
  margin-bottom: 80px;
  place-items: center;
  font-family:Verdana, Geneva, Tahoma, sans-serif
}
h1 {
  font-weight: 3;
  font-size: .2rem;
  top: -10px;
}
header {
    display: block;
    place-items: left;
    justify-content: left;
    align-items: left;
    padding-right: calc(var(--section-gap) / 2);
    width: 100vw;
    background-color:rgb(255, 255, 255);
    padding:0
  }
h3 {
  font-size: 1.2rem;
}

.HomePage {
  margin: 0;
  padding: 0;
  display:block;
}


@media (min-width: 1024px) {
 
}
</style>
