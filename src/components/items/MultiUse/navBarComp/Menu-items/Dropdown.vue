<script setup>
import { isSVGTag } from "@vue/shared";
import navBar from "../navBar.vue";
</script>

<template>
  <body>
    <h1>About Us</h1>
        <div class="menu-items">
            <div class="sub-menu-item"><a href="#">History</a></div>
            <div class="sub-menu-item"><a href="#">Current ECOM</a></div>
            <div class="sub-menu-item"><a href="#">Wiki</a></div>
            <div class="sub-menu-item"><a href="#">Alumni Association</a></div>
            <div class="sub-menu-item"><a href="#">Bylaws</a></div>
            <div class="sub-menu-item"><a href="#">Constitution</a></div>
            <div class="sub-menu-item"><a href="#">Awards</a></div>
        </div>
  </body>
  <div class="sub-item">
    <a href="#">
      
    </a>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["title", "items"],
};
</script>

<style>
nav.menu-item svg {
  width: 10px;
  margin-left: 10px;
}
</style>
