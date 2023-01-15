<template>
  <div class="dashBoardBackground">
    <div class="circle"></div>
    <v-layout class="app">
      <AppBar />

      <v-navigation-drawer :color="color" border="0"></v-navigation-drawer>

      <v-main class="main">
        <router-view />
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";
import AppBar from "./AppBar.vue";
export default {
  components: {
    AppBar,
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

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    color() {
      switch (useDisplay().name.value) {
        case "xs":
          return "white";
        case "sm":
          return "white";
        case "md":
          return "white";
        case "lg":
          return "transparent";
        case "xl":
          return "transparent";
        case "xxl":
          return "transparent";
      }
    },
  },
};
</script>

<style scoped>
@import "./style/dashboard.css";
</style>