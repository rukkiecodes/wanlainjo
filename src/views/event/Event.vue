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
        <v-card flat v-if="currentEvent.open">
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
        <v-card flat v-else>
          <v-card-title>{{ currentEvent.title }}</v-card-title>
          <v-card-text>
            {{ currentEvent.description }}
          </v-card-text>
        </v-card>

        <v-row dense>
          <v-col
            v-for="(image, i) in currentEvent.gallery"
            :key="i"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card style="cursor: pointer" @click="setDialog(image)">
              <v-img :src="image" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" scrollable width="500">
      <v-card>
        <v-card-text class="pa-0">
          <v-img :src="image" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="indigo" class="text-capitalize" @click="dialog = false" block>Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    dialog: false,
    image: null,
  }),

  created() {
    const currentEvent = this.events.find(
      (course) => course?.title === this.$route.params.title
    );

    this.currentEvent = currentEvent;
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

    setDialog(image) {
      this.dialog = true;
      this.image = image;
    },
  },

  computed: {
    ...mapGetters(["events"]),
    ...mapState(["snackbar"]),
  },
};
</script>