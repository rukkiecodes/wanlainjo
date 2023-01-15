<template>
  <v-navigation-drawer :color="color" border="0">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

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

        <v-list-item-title class="text text-caption">{{
          route.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useDisplay } from "vuetify";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["leftDrawerArray"]),
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
.text {
  color: #00dc82;
}

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