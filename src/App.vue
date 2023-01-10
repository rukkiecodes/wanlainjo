<template>
  <v-app>
    <AppBar />
    <Drawer />
    <BottomNav class="hidden-sm-and-up" />

    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '@/layouts/AppBar.vue'
import Drawer from '@/layouts/Drawer.vue'
import Footer from '@/layouts/Footer.vue'
import BottomNav from '@/layouts/BottomNav.vue'
export default {
  components: {
    AppBar,
    Drawer,
    Footer,
    BottomNav
  }
}
</script>