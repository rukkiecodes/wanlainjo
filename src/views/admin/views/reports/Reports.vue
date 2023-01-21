<template>
  <v-toolbar density="comfortable" color="transparent">
    <v-btn to="/admin/reports/addReports" size="large" class="bg-indigo"
      >Add Report</v-btn
    >
  </v-toolbar>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="report in reports"
        :key="report?.id"
      >
        <v-card>
          <v-card-title> {{ report?.title }} </v-card-title>
          <v-card-text>
            <div v-html="`${report?.html}`.slice(0, 700)"></div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :to="`/admin/reports/${report?.id}`"
              class="bg-indigo-lighten-5"
              block
              >View report</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["reports"]),
  },
};
</script>

<style>
</style>