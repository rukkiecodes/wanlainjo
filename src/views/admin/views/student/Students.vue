<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(student, i) in allStudents"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="rounded-lg">
          <v-card-text>
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
                    :color="student?.verified ? 'green' : 'red-darken-4'"
                  >
                    <v-avatar>
                      <v-img cover :src="student?.displayPicture" />
                    </v-avatar>
                  </v-badge>
                </template>

                <v-list-item-title
                  class="text-indigo-lighten-1 font-weight-bold ml-4"
                  >{{ student?.studentsname }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-text class="mt-0 pt-0">
            <v-row dense>
              <v-col cols="12">
                <span class="text-caption font-weight-regular font-weight-bold">
                  course One
                </span>
              </v-col>
              <v-col cols="4">
                <span class="text-caption font-weight-regular"> course: </span>
              </v-col>
              <v-col cols="8">
                <span class="text-caption font-weight-regular">{{
                  student.course1.course
                }}</span>
              </v-col>
              <v-col cols="4">
                <span class="text-caption font-weight-regular">
                  duration:
                </span>
              </v-col>
              <v-col cols="8">
                <span class="text-caption font-weight-regular"
                  >{{ student.course1.duration }} months</span
                >
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :to="`/admin/students/${student?.id}`"
              block
              class="text-capitalize bg-indigo-lighten-5"
            >
              View Student Details
            </v-btn>
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
    ...mapGetters(["allStudents"]),
  },
};
</script>
