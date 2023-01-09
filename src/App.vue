<template>
  <v-app>
    <AppBar />
    <Drawer />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/layouts/AppBar.vue'
import Drawer from '@/layouts/Drawer.vue'
export default {
  components: {
    AppBar,
    Drawer
  }
}
</script>