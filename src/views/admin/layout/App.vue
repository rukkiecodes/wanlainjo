<template>
  <v-layout>
    <AppBar />
    <LeftDrawer />

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
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
      this.fetchDeletedStudents();
      this.getCourses();
      this.countCourses();
      this.getReports();
    });
  },

  methods: {
    ...mapActions(["countStudents", "fetchStudents", "fetchDeletedStudents", "getCourses", "countCourses", "getReports"]),
  },
};
</script>

<style scoped>
@import "./style/dashboard.css";
</style>