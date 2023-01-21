<template>
  <v-app-bar color="white" :order="1" flat>
    <v-app-bar-title class="text-indigo-lighten-1 font-weight-light">
      wanlainjo <span class="font-weight-bold">Tech Hub</span>
    </v-app-bar-title>

    <v-spacer />
    <v-btn
      @click="leftDrawer.drawer = !leftDrawer.drawer"
      icon
      class="hidden-lg-and-up"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
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