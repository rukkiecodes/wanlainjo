<template>
  <v-toolbar class="elevation-0 px-0" color="white">
    <v-btn @click="$router.go(-1)">
      <v-icon class="mr-2">mdi-arrow-left</v-icon>
      <span class="text-capitalize">Go Back</span>
    </v-btn>
  </v-toolbar>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title class="text-h5 px-0">
            <span class="d-flex align-center">
              <v-btn icon size="x-small" flat>
                <i class="lar la-edit editIcon"></i>
              </v-btn>
              {{ currentCourse?.title }}
            </span>
            <v-dialog v-model="titleDialog" activator="parent" width="400">
              <v-card>
                <v-card-text>
                  <v-text-field
                    v-model="currentCourse.title"
                    label="Course title"
                    variant="plain"
                    hide-details
                    @keypress.enter="
                      () => {
                        updateCurrentCourseTitle();
                        titleDialog = false;
                      }
                    "
                  />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    class="bg-indigo"
                    text
                    @click="
                      () => {
                        titleDialog = false;
                        updateCurrentCourseTitle();
                      }
                    "
                  >
                    Done
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-row>
          <v-col cols="12">
            <v-card flat>
              <v-card-title class="text-h6 px-0">Course Image</v-card-title>
              <v-card-text class="pa-0">
                <v-img :src="currentCourse?.image" />
                <v-dialog
                  v-model="imageDialog"
                  activator="parent"
                  width="600"
                  scrollable
                >
                  <v-card>
                    <v-card-text class="px-0">
                      <v-card-text class="px-3">
                        <v-img :src="currentCourse?.image" />
                      </v-card-text>
                      <v-card-title>Choose from gallery</v-card-title>
                      <v-row dense>
                        <v-col
                          v-for="(img, i) in gallery"
                          :key="i"
                          cols="4"
                          class="pa-0"
                        >
                          <v-card
                            @click="
                              () => {
                                currentCourse.image = img;
                                updateCurrentCourseImage();
                              }
                            "
                            flat
                            height="100"
                          >
                            <v-card-text class="p-0">
                              <v-img cover :src="img" />
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        class="bg-indigo"
                        text
                        @click="
                          () => {
                            imageDialog = false;
                            updateCurrentCourseImage();
                          }
                        "
                      >
                        Done
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h6">Course Description</v-card-title>
              <v-card-text class="d-flex flex-column">
                <span class="text-body-2">
                  <v-btn icon size="x-small" flat>
                    <i class="lar la-edit editIcon"></i>
                  </v-btn>
                  {{ currentCourse?.body }}
                  <v-dialog v-model="bodyDialog" activator="parent" width="400">
                    <v-card>
                      <v-card-text>
                        <v-textarea
                          v-model="currentCourse.body"
                          label="Course Description"
                          variant="plain"
                          rows="1"
                          auto-grow
                          row-height="15"
                        />
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          class="bg-indigo"
                          text
                          @click="
                            () => {
                              bodyDialog = false;
                              updateCurrentCourseBody();
                            }
                          "
                        >
                          Done
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="6" md="8">
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title class="text-h6">Course Duration</v-card-title>
              <v-card-text class="d-flex flex-column">
                <span class="text-body-2 font-weight-bold d-flex align-center">
                  <v-btn icon size="x-small" flat>
                    <i class="lar la-edit editIcon"></i>
                  </v-btn>
                  {{ currentCourse?.duration }}
                  {{ currentCourse?.duration > 1 ? "Months" : "Month" }}
                  <v-dialog
                    v-model="durationDialog"
                    activator="parent"
                    width="400"
                  >
                    <v-card>
                      <v-card-text>
                        <v-text-field
                          v-model="currentCourse.duration"
                          label="Course duration"
                          variant="plain"
                          min="1"
                          hide-details
                          type="number"
                          @keypress.enter="
                            () => {
                              updateCurrentCourseDuration();
                              durationDialog = false;
                            }
                          "
                        />
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          class="bg-indigo"
                          text
                          @click="
                            () => {
                              durationDialog = false;
                              updateCurrentCourseDuration();
                            }
                          "
                        >
                          Done
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title class="text-h6">Course Fee</v-card-title>
              <v-card-text class="d-flex flex-column">
                <span class="text-body-2 font-weight-bold">
                  <v-btn icon size="x-small" flat>
                    <i class="lar la-edit editIcon d-flex align-center"></i>
                  </v-btn>
                  ₦{{
                    currentCourse?.price
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}

                  <v-dialog
                    v-model="priceDialog"
                    activator="parent"
                    width="400"
                  >
                    <v-card>
                      <v-card-text>
                        <v-text-field
                          v-model="currentCourse.price"
                          label="Course price"
                          variant="plain"
                          min="1"
                          hide-details
                          type="number"
                          @keypress.enter="
                            () => {
                              updateCurrentCoursePrice();
                              priceDialog = false;
                            }
                          "
                        />
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          class="bg-indigo"
                          text
                          @click="
                            () => {
                              priceDialog = false;
                              updateCurrentCoursePrice();
                            }
                          "
                        >
                          Done
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-actions>
                <v-text-field
                  v-model="whatYouWillLearn"
                  @keypress.enter="updateCurrentCourseWhatYouWillLearn"
                  variant="plain"
                  label="What you will learn"
                  hide-details
                />
                <v-btn
                  @click="updateCurrentCourseWhatYouWillLearn"
                  class="bg-indigo ml-4"
                  :disabled="!whatYouWillLearn"
                  >Add</v-btn
                >
              </v-card-actions>
              <v-card-text>
                <v-row
                  v-for="(wywl, i) in currentCourse?.whatYouWillLearn"
                  :key="i"
                  align="center"
                >
                  <v-col cols="1">
                    <v-btn
                      icon
                      @click="deleteWhatYouWillLearn(wywl)"
                      flat
                      size="x-small"
                    >
                      <i class="las la-trash-alt editIcon"></i>
                    </v-btn>
                  </v-col>
                  <v-col cols="11">
                    {{ wywl }}
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h6">Course outline</v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="outline"
                  @keypress.enter="updateCurrentCourseWhatYouWillLearn"
                  variant="outlined"
                  label="Add outline"
                />
              </v-card-text>
              <v-divider />
              <v-card-text>
                <v-combobox
                  v-model="breakdown"
                  label="I'm readonly"
                  variant="outlined"
                  chips
                  multiple
                ></v-combobox>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  @click="updateCurrentCourseOutline"
                  :loading="outlineLoading"
                  class="bg-indigo"
                  >Add outline</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "@firebase/firestore";
import { mapGetters } from "vuex";
import { db } from "@/plugins/firebase";
import gallery from "../gallery";
export default {
  data: () => ({
    currentCourse: null,
    imageDialog: false,
    bodyDialog: false,
    durationDialog: false,
    priceDialog: false,
    titleDialog: false,
    whatYouWillLearn: "",
    outline: "OneDrive",
    breakdown: [
      "OneDrive Basics",
      "Working with Files",
      "Working with Folders",
      "Working with Sharing",
      "Collaboration and Reviewing",
      "Doing More with OneDrive",
      "Extras",
    ],
    outlineLoading: false,
    gallery,
  }),

  created() {
    this.$nextTick(() => {
      this.getCurrentCourse();
    });
  },

  methods: {
    async getCurrentCourse() {
      const unsub = onSnapshot(
        doc(db, "courses", this.$route.params.id),
        (doc) => {
          this.currentCourse = doc.data();
        }
      );
      return unsub;
    },

    updateCurrentCourseImage() {
      updateDoc(doc(db, "courses", this.$route.params.id), {
        image: this.currentCourse.image,
      });
    },

    updateCurrentCourseBody() {
      updateDoc(doc(db, "courses", this.$route.params.id), {
        body: this.currentCourse.body,
      });
    },

    updateCurrentCourseDuration() {
      updateDoc(doc(db, "courses", this.$route.params.id), {
        duration: parseInt(this.currentCourse.duration),
      });
    },

    updateCurrentCoursePrice() {
      updateDoc(doc(db, "courses", this.$route.params.id), {
        price: parseInt(this.currentCourse.price),
      });
    },

    updateCurrentCourseTitle() {
      updateDoc(doc(db, "courses", this.$route.params.id), {
        title: this.currentCourse.title,
      });
    },

    async updateCurrentCourseWhatYouWillLearn() {
      await updateDoc(doc(db, "courses", this.$route.params.id), {
        whatYouWillLearn: arrayUnion(this.whatYouWillLearn),
      });
      this.whatYouWillLearn = "";
    },

    async deleteWhatYouWillLearn(prop) {
      await updateDoc(doc(db, "courses", this.$route.params.id), {
        whatYouWillLearn: arrayRemove(prop),
      });
    },

    async updateCurrentCourseOutline() {
      this.outlineLoading = true;
      await updateDoc(doc(db, "courses", this.$route.params.id), {
        outline: arrayUnion({
          title: this.outline,
          show: false,
          breakdown: this.breakdown,
        }),
      });
      this.outline = "";
      this.breakdown = [];
      this.outlineLoading = false;
    },
  },

  computed: {
    ...mapGetters(["courses"]),
  },
};
</script>

<style scoped>
.editIcon {
  font-size: 2em;
}
</style>