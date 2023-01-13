<template>
  <v-app-bar class="pr-0 pr-sm-4" flat>
    <v-app-bar-title>
      <v-img src="@/assets/images/logo.png" width="150" />
    </v-app-bar-title>

    <v-spacer />

    <v-btn
      v-for="(route, i) in routes"
      :key="i"
      :to="route.to"
      variant="text"
      class="text-body-1 ml-2 hidden-xs"
      >{{ route.title }}</v-btn
    >
    <v-btn variant="text" class="text-body-1 ml-2 hidden-xs">
      Meetings

      <v-menu activator="parent" open-on-hover>
        <v-list density="compact" class="py-0">
          <v-list-item density="compact" to="/events">
            <v-list-item-title>Events</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
    <v-btn to="/register" class="bg-indigo-darken-4 ml-4">Register</v-btn>
    <v-app-bar-nav-icon
      @click="drawer.drawer = !drawer.drawer"
      class="hidden-sm-and-up ml-2"
    />
  </v-app-bar>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["drawer"]),
    ...mapGetters(["routes"]),
  },
};
</script>
