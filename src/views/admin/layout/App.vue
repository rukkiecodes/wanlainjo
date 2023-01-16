<template>
  <div class="dashBoardBackground">
    <div class="circles"></div>
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
import { mapActions } from "vuex";
import AppBar from "./AppBar.vue";
import LeftDrawer from "./LeftDrawer.vue";
export default {
  components: {
    AppBar,
    LeftDrawer,
  },

  mounted() {
    this.$nextTick(() => {
      this.countStudents();
      this.fetchStudents();
    });
  },

  methods: {
    ...mapActions(["countStudents", "fetchStudents"]),
  },
};
</script>

<style scoped>
@import "./style/dashboard.css";
</style>