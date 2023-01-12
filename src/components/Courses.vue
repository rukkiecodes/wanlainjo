<template>
  <v-row>
    <v-col
      cols="12"
      sm="4"
      v-for="(course, i) in courses.slice(0, slice)"
      :key="i"
    >
      <v-card>
        <v-card max-height="200" flat>
          <v-img :src="course.image" />
        </v-card>
        <v-card-title> {{ course.title }} </v-card-title>
        <v-card-text>{{ course.body }} </v-card-text>
        <v-card-actions>
          <v-btn
            :to="`course/${course.title}`"
            flat
            class="bg-grey-lighten-2 text-capitalize font-weight-regular text-body-2"
            >View Details</v-btn
          >
          <v-btn
            flat
            style="flex: 1"
            :to="`/register/${course.title}`"
            class="bg-indigo-darken-4 text-capitalize font-weight-regular text-body-2"
            >Apply Now</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    slice: {
      type: Number,
      default: 200,
    },
  },

  data: () => ({
    currentCourse: null,
  }),

  computed: {
    ...mapGetters(["courses"]),
  },
};
</script>
