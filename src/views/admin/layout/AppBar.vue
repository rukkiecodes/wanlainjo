<template>
  <v-app-bar color="transparent" :order="1" flat>
    <v-app-bar-title class="text font-weight-light">
      wanlainjo <span class="font-weight-bold">Tech Hub</span>
    </v-app-bar-title>

    <v-spacer />
    <v-app-bar-nav-icon
      @click="leftDrawer.drawer = !leftDrawer.drawer"
      icon
      class="text hidden-lg-and-up"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["leftDrawer"]),
  },
};
</script>