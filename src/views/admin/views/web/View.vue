<template>
  <v-app>
    <v-app-bar density="compact" title="Website settings" flat>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      location="right"
      v-model="drawer"
      width="200"
      border="0"
    >
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :to="item.to"
          active-color="indigo"
          active-class="font-weight-bold"
          class="rounded-lg"
        >
          <v-list-item-title
            class="text-body-2"
            v-text="item.text"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { useDisplay } from "vuetify";
export default {
  data: () => ({
    drawer: true,
    items: [{ text: "Home page", to: "/admin/webSettings/home" }],
  }),

  created() {
    this.drawerVisibility();
  },

  methods: {
    drawerVisibility() {
      switch (useDisplay().name.value) {
        case "xs":
          return (this.drawer = false);
        case "sm":
          return (this.drawer = false);
        case "md":
          return (this.drawer = false);
        case "lg":
          return (this.drawer = true);
        case "xl":
          return (this.drawer = true);
        case "xxl":
          return (this.drawer = true);
      }
    },
  },
};
</script>