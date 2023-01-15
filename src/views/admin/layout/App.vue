<template>
  <div class="dashBoardBackground">
    <div class="circle"></div>
    <v-layout class="app">
      <AppBar />
      <LeftDrawer />

      <v-main class="main">
        <router-view />
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import LeftDrawer from "./LeftDrawer.vue";
export default {
  components: {
    AppBar,
    LeftDrawer,
  },

  mounted() {
    this.$nextTick(() => {
      document.addEventListener("mousemove", (e) => {
        let circle = document.querySelector(".circle");
        let left = e.offsetX;
        let top = e.offsetY;
        circle.style.left = left + "px";
        circle.style.top = top + "px";
      });
    });
  },
};
</script>

<style scoped>
@import "./style/dashboard.css";
</style>