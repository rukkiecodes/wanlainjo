<template>
  <v-container>
    <v-card-text>
      <v-row justify="space-between">
        <v-col cols="12" sm="6" md="5">
          <v-card flat>
            <v-img :src="currentCourse.image" />
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="7">
          <v-card flat>
            <v-card-text
              style="line-height: 1em"
              class="text-h5 text-md-h4 font-weight-regular"
              >{{ currentCourse.subtext }}</v-card-text
            >
            <v-card-text class="text-body-2">{{
              currentCourse.body
            }}</v-card-text>
            <v-card-text>
              <v-card
                class="elevation-2 mb-4"
                v-for="(outline, i) in currentCourse.outline"
                :key="i"
              >
                <v-list>
                  <v-list-item :title="outline.title">
                    <template v-slot:append>
                      <v-btn
                        @click="outline.show = !outline.show"
                        color="grey-lighten-1"
                        :icon="
                          outline.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
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
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    currentCourse: null,
  }),

  created() {
    const currentCourse = this.courses.find(
      (course) => course.title === this.$route.params.title
    );

    this.currentCourse = currentCourse;
  },

  computed: {
    ...mapGetters(["courses"]),
  },
};
</script>