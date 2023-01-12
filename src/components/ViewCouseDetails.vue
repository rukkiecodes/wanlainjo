<template>
  <v-dialog v-model="viewCourse.dialog" fullscreen>
    <v-card>
      <v-toolbar dark color="indigo-darken-4">
        <v-toolbar-title>{{ viewCourse.currentCourse.title }}</v-toolbar-title>
        <v-spacer />
        <v-btn
          dark
          class="bg-indigo-darken-3 text-capitalize"
          @click="viewCourse.dialog = false"
        >
          Close
        </v-btn>
        <v-btn
          class="bg-white ml-4 text-capitalize"
          :to="`/register/${viewCourse.currentCourse.title}`"
          @click="viewCourse.dialog = false"
        >
          Apply Now
        </v-btn>
      </v-toolbar>

      <v-container>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12" sm="6" md="5">
              <v-card flat>
                <v-img :src="viewCourse.currentCourse.image" />
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="7">
              <v-card flat>
                <v-card-text
                  style="line-height: 1em"
                  class="text-h5 text-md-h4 font-weight-regular"
                  >{{ viewCourse.currentCourse.subtext }}</v-card-text
                >
                <v-card-text class="text-body-2">{{
                  viewCourse.currentCourse.body
                }}</v-card-text>
                <v-card-text>
                  <v-timeline
                    v-for="(outline, i) in viewCourse.currentCourse.outline"
                    :key="i"
                  >
                    <v-timeline-item size="x-small">
                      <template v-slot:icon>
                        <v-avatar color="indigo" size="small">
                          {{ i + 1 }}
                        </v-avatar>
                      </template>
                      <template v-slot:opposite>
                        <span
                          class="d-none d-md-flex text-caption font-weight-bold"
                          >Month</span
                        >
                      </template>
                      <v-card class="elevation-2" width="500" max-width="100%">
                        <v-list>
                          <v-list-item :title="outline.title">
                            <template v-slot:append>
                              <v-btn
                                @click="outline.show = !outline.show"
                                color="grey-lighten-1"
                                :icon="
                                  outline.show
                                    ? 'mdi-chevron-up'
                                    : 'mdi-chevron-down'
                                "
                                variant="text"
                              ></v-btn>
                            </template>
                          </v-list-item>
                        </v-list>
                        <v-expand-transition>
                          <v-card-text v-show="outline.show">
                            <v-list density="compact">
                              <v-list-item
                                v-for="(item, i) in outline.breakdown"
                                :key="i"
                                density="compact"
                                class="py-0 text-caption"
                                :title="item"
                              >
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-expand-transition>
                      </v-card>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    dialog: false,
    notifications: true,
    sound: true,
    widgets: true,
  }),

  computed: {
    ...mapState(["viewCourse"]),
  },
};
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>