<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" v-for="course in courses" :key="course?.id">
        <v-card>
          <v-card max-height="200" flat>
            <v-img :src="course.image" />
          </v-card>
          <v-card-title> {{ course?.title }} </v-card-title>
          <v-card-text>{{ course?.body }} </v-card-text>
          <v-card-actions>
            <v-btn
              :to="`/admin/courses/${course?.id}`"
              flat
              block
              class="
                bg-grey-lighten-2
                text-capitalize
                font-weight-regular
                text-body-2
              "
              >View Details</v-btn
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
    ...mapGetters(["courses"]),
  },
};
</script>