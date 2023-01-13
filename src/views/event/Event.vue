<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="12">
        <v-btn
          @click="$router.go(-1)"
          class="mb-4 text-capitalize"
          color="grey-darken-3"
          variant="text"
        >
          <v-icon icon="mdi-chevron-left" color="indigo"></v-icon>
          Go Back
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="5">
        <v-card flat>
          <v-img :src="currentEvent?.image" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="7">
        <v-card flat>
          <v-card-title>RSVP Now</v-card-title>
          <v-card-text>
            <v-text-field
              variant="outlined"
              v-model="name"
              label="Full Name"
              prepend-inner-icon="mdi-account-outline"
            />
            <v-text-field
              variant="outlined"
              label="Email"
              v-model="email"
              prepend-inner-icon="mdi-at"
            />
            <v-text-field
              variant="outlined"
              v-model="phone"
              label="Phone"
              prepend-inner-icon="mdi-phone"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              @click="rsvpForThisEvent"
              :loading="loading"
              size="large"
              class="bg-indigo-darken-4"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/plugins/firebase";
import { mapGetters, mapState } from "vuex";
export default {
  data: () => ({
    currentEvent: null,
    name: "",
    email: "",
    phone: "",
    loading: false,
  }),

  created() {
    const currentEvent = this.events.find(
      (course) => course?.title === this.$route.params.title
    );

    this.currentEvent = currentEvent;
  },

  mounted() {
    console.log({ ...this.currentEvent });
  },

  methods: {
    async rsvpForThisEvent() {
      if (this.name == "" || this.email == "" || this.phone == "") {
        this.snackbar.active = true;
        this.snackbar.text = "Please fill all fields";
        this.snackbar.color = "error";
      } else {
        this.loading = true;

        await addDoc(collection(db, this.currentEvent.collection), {
          name: this.name,
          email: this.email,
          phone: this.phone,
        });

        this.snackbar.active = true;
        this.snackbar.text = "You have successfully RSVP'd";
        this.snackbar.color = "success";
        this.loading = false;

        this.name = "";
        this.email = "";
        this.phone = "";
      }
    },
  },

  computed: {
    ...mapGetters(["events"]),
    ...mapState(["snackbar"]),
  },
};
</script>