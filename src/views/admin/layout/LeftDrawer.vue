<template>
  <v-navigation-drawer v-model="leftDrawer.drawer" :color="color" border="0">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
      >
        <v-list-item-title class="text-green-lighten-1 text-body-2 font-weight-bold">Romaric wanlainjo</v-list-item-title>
        <v-list-item-subtitle class="text-green-lighten-1 text-caption">Admin</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(route, i) in leftDrawerArray"
        :key="i"
        :to="route.to"
        active-class="bg"
      >
        <template v-slot:prepend>
          <i :class="route.icon" class="drawerIcon mr-3"></i>
        </template>

        <v-list-item-title class="text-green-lighten-1 text-caption">{{
          route.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useDisplay } from "vuetify";
import { mapGetters, mapState } from "vuex";
export default {
  created() {
    this.drawerVisibility();
  },
  methods: {
    drawerVisibility() {
      switch (useDisplay().name.value) {
        case "xs":
          return (this.leftDrawer.drawer = false);
        case "sm":
          return (this.leftDrawer.drawer = false);
        case "md":
          return (this.leftDrawer.drawer = false);
        case "lg":
          return (this.leftDrawer.drawer = true);
        case "xl":
          return (this.leftDrawer.drawer = true);
        case "xxl":
          return (this.leftDrawer.drawer = true);
      }
    },
  },

  computed: {
    ...mapGetters(["leftDrawerArray"]),
    ...mapState(["leftDrawer"]),
    // eslint-disable-next-line vue/return-in-computed-property
    color() {
      switch (useDisplay().name.value) {
        case "xs":
          return "#040d21";
        case "sm":
          return "#040d21";
        case "md":
          return "#040d21";
        case "lg":
          return "transparent";
        case "xl":
          return "transparent";
        case "xxl":
          return "transparent";
      }
    },
  },
};
</script>

<style>
.drawerIcon {
  color: #00dc82;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
}

.bg {
  background: rgba(4, 13, 33, 0.25) !important;
  backdrop-filter: blur(6px) !important;
  border-radius: 10px !important;
}
</style>