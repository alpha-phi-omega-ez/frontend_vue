<script setup>
import FrontImage from "../items/homePageElements/FrontImg.vue";
import navBar from "../items/MultiUse/navBarComp/navBar.vue";
import LFSandAPO from "../items/homePageElements/LFSandText.vue";
import SocialsFooter from "../items/MultiUse/SocialsFooter.vue";
import CompositePhoto from "../items/homePageElements/CompositeImg.vue";
import APOsymbolIcons from "../items/MultiUse/APOsymbols.vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <div class="HomePage">
        <navBar> </navBar>
        <FrontImage> </FrontImage>
        <CompositePhoto> </CompositePhoto>
        <LFSandAPO> </LFSandAPO>
        <APOsymbolIcons> </APOsymbolIcons>
        <SocialsFooter> </SocialsFooter>
    </div>
</template>

<script>
export default {
  name: "HomePage",
  components:
    (navBar,
    FrontImage,
    CompositePhoto,
    LFSandAPO,
    APOsymbolIcons,
    SocialsFooter),
};
</script>

<style scoped>
img {
  align-items: center;
  justify-content: center;
  margin-top: 31px;
  margin-bottom: 0px;
  place-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  display: block;
  place-items: left;
  justify-content: left;
  align-items: left;
  padding-right: calc(var(--section-gap) / 2);
  width: 100vw;
  background-color: rgb(255, 255, 255);
  padding: 0;
}

.HomePage {
  margin: 0;
  padding: 0;
  display: block;
}

@media (min-width: 1024px) {
}
</style>
