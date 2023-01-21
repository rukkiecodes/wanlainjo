<template>
  <v-container>
    <v-card flat>
      <v-card-actions>
        <v-btn @click="$router.go(-1)">
          <v-icon class="mr-2">mdi-arrow-left</v-icon>
          <span class="text-capitalize">Go Back</span>
        </v-btn>
        <v-spacer />
        <v-btn class="bg-indigo" :loading="loading" @click="save"
          >Save report</v-btn
        >
      </v-card-actions>
      <v-card-text class="px-2">
        <v-text-field v-model="title" variant="outlined" label="Title" />
        <v-text-field
          v-model="date"
          variant="outlined"
          type="date"
          label="Date"
        />
        <v-card id="editor" height="300"></v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import "https://cdn.quilljs.com/1.3.6/quill.js";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/plugins/firebase";
import { mapState } from "vuex";
export default {
  data: () => ({
    html: ``,
    title: ``,
    date: new Date().toISOString().substr(0, 10),
    loading: false,
  }),

  mounted() {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef, no-unused-vars
      var quill = new Quill("#editor", {
        theme: "snow",
      });

      quill.on("text-change", () => {
        this.html = quill.root.innerHTML;
      });
    });
  },

  methods: {
    async save() {
      this.loading = true;
      await addDoc(collection(db, "reports"), {
        title: this.title,
        date: this.date,
        html: this.html,
      });
      this.loading = false;
      this.snackbar.active = true;
      this.snackbar.text = "Report added successfully";
      this.snackbar.color = "success";
    },
  },

  computed: {
    ...mapState(["snackbar"]),
  },
};
</script>

<style scoped>
@import "https://cdn.quilljs.com/1.3.6/quill.snow.css";
</style>