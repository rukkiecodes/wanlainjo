<template>
  <v-app>
    <AppBar />
    <Drawer />
    
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
export default {
  components: {
    AppBar,
    Drawer,
    Footer
  }
}
</script>