<template>
  <v-app-bar color="white" :order="1" flat>
    <v-app-bar-title class="text-indigo-lighten-1 font-weight-light">
      wanlainjo <span class="font-weight-bold">Tech Hub</span>
    </v-app-bar-title>
    <v-spacer />
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-chip
          v-bind="props"
          class="mr-4 pl-1"
          style="cursor: pointer"
          color="indigo"
        >
          <v-avatar class="mr-2">
            <i
              class="las la-user-circle text-indigo"
              style="font-size: 2em"
            ></i>
          </v-avatar>
          <span class="text-indigo">Admin</span>
        </v-chip>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item title="Admin" :subtitle="user?.email">
            <template v-slot:append>
              <v-avatar>
                <i
                  class="las la-user-circle text-indigo"
                  style="font-size: 2em"
                ></i>
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list v-if="!user" density="comfortable" class="pa-0">
          <v-list-item @click="" density="comfortable">
            <template v-slot:prepend>
              <v-avatar>
                <i class="las la-sign-in-alt" style="font-size: 1.5em"></i>
              </v-avatar>
            </template>
            <v-list-item-title>Sign In</v-list-item-title>

            <v-dialog v-model="loginDialog" activator="parent" width="400">
              <v-card>
                <v-card-title>Admin Login</v-card-title>
                <v-card-text class="px-2">
                  <v-text-field
                    v-model="email"
                    density="comfortable"
                    variant="outlined"
                    label="Email"
                  />
                  <v-text-field
                    v-model="password"
                    density="comfortable"
                    variant="outlined"
                    label="Password"
                    hide-details
                  />
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    @click="signIn"
                    :loading="loading"
                    block
                    class="bg-indigo"
                    >Sign In</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-btn
      @click="leftDrawer.drawer = !leftDrawer.drawer"
      icon
      class="hidden-lg-and-up"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { signInWithEmailAndPassword } from "@firebase/auth";
import { mapState } from "vuex";
import { auth } from "@/plugins/firebase";
export default {
  data: () => ({
    menu: false,
    user: null,
    email: "admin@wanlainjo.com",
    password: "wanlainjoAdmin@001",
    loading: false,
    loginDialog: false,
  }),
  mounted() {
    if (localStorage.wanlainjoAdmin != undefined) {
      this.user = JSON.parse(localStorage.wanlainjoAdmin);
    }
  },

  methods: {
    signIn() {
      this.loading = true;
      signInWithEmailAndPassword(auth, this.email, this.password).then(
        (userCredential) => {
          // Signed in
          console.log(userCredential);
          this.loading = false;
          this.loginDialog = false;

          const user = userCredential.user;
          this.user = user;
          localStorage.wanlainjoAdmin = JSON.stringify(user);

          this.snackbar.active = true;
          this.snackbar.text = "Login Successful";
          this.snackbar.color = "success";
        }
      );
    },
  },

  computed: {
    ...mapState(["leftDrawer", "snackbar"]),
  },
};
</script>
<!-- admin@wanlainjo.com -->
<!-- wanlainjoAdmin@001 -->