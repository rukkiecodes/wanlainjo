<template>
  <v-app>
    <AppBar />
    <Drawer />
    
    <v-main>
      <router-view />
    </v-main>
    
    <BottomNav class="hidden-sm-and-up" />
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./AppBar.vue";
import Drawer from "./Drawer.vue";
import BottomNav from "./BottomNav.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    AppBar,
    Drawer,
    BottomNav,
    Footer,
  },
};
</script>