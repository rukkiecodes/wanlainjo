<template>
  <v-container class="d-flex flex-column align-center">
    <v-card flat width="600" max-width="100%">
      <v-card-title> {{ currentReport?.title }} </v-card-title>
      <v-card-subtitle>{{ currentReport?.date }}</v-card-subtitle>
      <v-divider />
      <v-card-text v-html="currentReport?.html" />
    </v-card>
  </v-container>
</template>

<script>
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "@/plugins/firebase";
export default {
  data: () => ({
    currentReport: null,
  }),

  created() {
    this.getCurrentReport();
  },

  methods: {
    async getCurrentReport() {
      const unsub = onSnapshot(
        doc(db, "reports", this.$route.params.id),
        (doc) => {
          this.currentReport = doc.data();
        }
      );
      return unsub;
    },
  },
};
</script>

<style>
</style>