<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
        <v-card class="card rounded-lg" color="transparent" flat :to="item.to">
          <v-card-text>
            <v-row justify="space-between">
              <v-col cols="4">
                <v-avatar
                  color="#040D21"
                  size="50"
                  rounded="0"
                  class="rounded-lg"
                >
                  <i :class="item.icon" class="icon text-white"></i>
                </v-avatar>
              </v-col>
              <v-col
                cols="8"
                class="d-flex flex-column justify-center align-end"
              >
                <h3 class="font-weight-bold text-h6 mb-0 text-indigo-lighten-1">
                  {{ item.title }}
                </h3>
                <h3 class="font-weight-bold mb-0 text-indigo-lighten-1">
                  {{
                    item.title == "Students"
                      ? countStudents.count
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : item.title == "Courses"
                      ? 100
                      : item.title == "Instructors"
                      ? 100
                      : 0
                  }}
                </h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    items: [
      {
        title: "Students",
        icon: "las la-user-graduate",
        count: 100,
        to: "/admin/students",
      },
      {
        title: "Courses",
        icon: "las la-school",
        count: 100,
        to: "/admin/courses",
      },
      {
        title: "Instructors",
        icon: "las la-chalkboard-teacher",
        count: 100,
        to: "/admin/instructors",
      },
    ],
  }),

  computed: {
    ...mapState(["countStudents"]),
  },
};
</script>

<style scoped>
.card {
  background: rgba(92, 107, 192, 0.251) !important;
  backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
}

.icon {
  font-size: 2rem;
}
</style>