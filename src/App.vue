<template>
  <v-app>
    <AppBar />
    <Drawer />
    <BottomNav class="hidden-sm-and-up" />

    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <ViewCouseDetails />
  </v-app>
</template>

<script>
import AppBar from '@/layouts/AppBar.vue'
import Drawer from '@/layouts/Drawer.vue'
import Footer from '@/layouts/Footer.vue'
import BottomNav from '@/layouts/BottomNav.vue'
import ViewCouseDetails from '@/components/ViewCouseDetails.vue'
export default {
  components: {
    AppBar,
    Drawer,
    Footer,
    BottomNav,
    ViewCouseDetails
  }
}
</script>