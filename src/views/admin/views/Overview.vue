<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          class="rounded-lg"
          color="indigo-lighten-5"
          flat
          to="/admin/students"
        >
          <v-card-text>
            <v-row justify="space-between">
              <v-col cols="4">
                <v-avatar
                  color="indigo"
                  size="50"
                  rounded="0"
                  class="rounded-lg"
                >
                  <i class="las la-user-graduate icon text-white"></i>
                </v-avatar>
              </v-col>
              <v-col
                cols="8"
                class="d-flex flex-column justify-center align-end"
              >
                <h3 class="font-weight-bold text-h6 mb-0 text-indigo-lighten-1">
                  Students
                </h3>
                <h3 class="font-weight-bold mb-0 text-indigo-lighten-1">
                  {{
                    countStudents.count
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0
                  }}
                </h3>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text>
            <v-card color="white" class="rounded-lg" flat>
              <v-card-text class="pa-0">
                <v-row no-gutters>
                  <v-col
                    v-for="(student, i) in allStudents.slice(0, 3)"
                    :key="i"
                    cols="12"
                  >
                    <v-card class="rounded-lg" flat>
                      <v-card-text class="pa-2">
                        <v-list
                          density="compact"
                          rounded="lg"
                          color="transparent"
                          class="px-0"
                        >
                          <v-list-item color="transparent" class="px-0">
                            <template v-slot:prepend>
                              <v-badge
                                dot
                                :color="
                                  student?.verified ? 'green' : 'red-darken-4'
                                "
                              >
                                <v-avatar>
                                  <v-img cover :src="student?.displayPicture" />
                                </v-avatar>
                              </v-badge>
                            </template>

                            <v-list-item-title
                              class="
                                text-indigo-lighten-1
                                font-weight-bold
                                ml-4
                              "
                              >{{ student?.studentsname }}</v-list-item-title
                            >
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          class="rounded-lg"
          color="indigo-lighten-5"
          flat
          to="/admin/students"
        >
          <v-card-text>
            <v-row justify="space-between">
              <v-col cols="4">
                <v-avatar
                  color="indigo"
                  size="50"
                  rounded="0"
                  class="rounded-lg"
                >
                  <i class="las la-laptop-code icon text-white"></i>
                </v-avatar>
              </v-col>
              <v-col
                cols="8"
                class="d-flex flex-column justify-center align-end"
              >
                <h3 class="font-weight-bold text-h6 mb-0 text-indigo-lighten-1">
                  Students
                </h3>
                <h3 class="font-weight-bold mb-0 text-indigo-lighten-1">
                  {{
                    countStudents.count
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0
                  }}
                </h3>
              </v-col>
            </v-row>
            <v-card color="white" class="mt-8" flat>
              <v-card-text>
                <v-row>
                  <v-col
                    cols="12"
                    v-for="course in courses.slice(0, 3)"
                    :key="course?.id"
                    class="d-flex justify-start align-center mb-1"
                  >
                    <v-avatar>
                      <v-img cover class="rounded-lg" :src="course.image" />
                    </v-avatar>
                    <v-card-text class="font-weight-bold py-0 text-indigo">
                      {{ course?.title }}
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["countStudents", "countCourses"]),
    ...mapGetters(["courses", "allStudents"]),
  },
};
</script>

<style scoped>
.icon {
  font-size: 2rem;
}
</style>