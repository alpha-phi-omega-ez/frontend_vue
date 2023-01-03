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
              <div class="block">
                <img src="../../assets/img/block.png"
                 width="250" 
                 height="30"
                 position="center"/>
              </div>
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
.block{
  align-items:center;
  justify-content: center;
  display:flex;
}

img {
  align-items: center;
  justify-content: center;
  margin: 31px;
  place-items: center;
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
    background-color:rgb(221, 231, 231);
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
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

}
</style>
