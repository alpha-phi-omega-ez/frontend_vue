<script setup>
import frontimage from "./frontimg.vue";
import navBar from "./navBarComp/navBar.vue";
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
    </div>
</template>


<script>
export default{
  name:'HomePage',
  components:(
    navBar,
    frontimage
  )
}
</script>


<style scoped>
h1 {
  font-weight: 5;
  font-size: 1rem;
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
