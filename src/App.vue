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
  <v-snackbar v-model="snackbar.active" :color="snackbar.color" close-on-back location="top right" absolute>
    {{ snackbar.text }}

    <template v-slot:actions>
      <v-btn icon size="small" variant="text" @click="snackbar.active = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import AppBar from '@/layouts/AppBar.vue'
import Drawer from '@/layouts/Drawer.vue'
import Footer from '@/layouts/Footer.vue'
import BottomNav from '@/layouts/BottomNav.vue'
import { mapState } from 'vuex'
export default {
  components: {
    AppBar,
    Drawer,
    Footer,
    BottomNav
  },

  computed: {
    ...mapState(['snackbar'])
  }
}
</script>