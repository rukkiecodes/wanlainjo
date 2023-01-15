<template>
  <v-container class="d-flex justify-center">
    <v-card flat width="400" max-width="100%">
      <v-toolbar
        density="compact"
        color="indigo-darken-4"
        class="rounded-lg"
        flat
      >
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            @click="form.step = 1"
            :class="form.step == 1 ? 'bg-white' : 'bg-indigo-darken-4'"
          >
            Step 1
          </v-btn>

          <v-btn
            @click="form.step = 2"
            :class="form.step == 2 ? 'bg-white' : 'bg-indigo-darken-4'"
            :disabled="
              form.credentials.studentsname == '' ||
              form.credentials.sex == '' ||
              form.credentials.address == '' ||
              form.credentials.dob == '' ||
              form.credentials.state == '' ||
              form.credentials.phone == '' ||
              form.credentials.email == ''
            "
          >
            Step 2
          </v-btn>

          <v-btn
            @click="form.step = 3"
            :class="form.step == 3 ? 'bg-white' : 'bg-indigo-darken-4'"
            :disabled="
              form.credentials.studentsname == '' ||
              form.credentials.sex == '' ||
              form.credentials.address == '' ||
              form.credentials.dob == '' ||
              form.credentials.state == '' ||
              form.credentials.phone == '' ||
              form.credentials.email == '' ||
              form.credentials.sponsorName == '' ||
              form.credentials.sponsorAddress == '' ||
              form.credentials.sponsorPhone == ''
            "
          >
            Step 3
          </v-btn>
        </v-toolbar-items>
        <v-spacer />
      </v-toolbar>

      <v-card class="ma-0 pa-0">
        <v-card-title>{{
          form.step == 1
            ? "Student's details"
            : form.step == 2
            ? "Sponsorship"
            : "Student's details"
        }}</v-card-title>

        <v-card-text>
          <v-row dense class="pb-0 mb-0">
            <v-expand-transition>
              <v-col v-if="form.step == 1" cols="12">
                <v-file-input
                  @change="form.image = $event.target.files[0]"
                  density="compact"
                  label="Your image"
                  variant="outlined"
                />
                <v-text-field
                  v-model="form.credentials.studentsname"
                  density="compact"
                  label="Full name"
                  variant="outlined"
                />
                <v-select
                  v-model="form.credentials.sex"
                  :items="['Male', 'Female']"
                  density="compact"
                  label="Sex"
                  variant="outlined"
                />
                <v-text-field
                  v-model="form.credentials.address"
                  density="compact"
                  label="Address"
                  variant="outlined"
                />
                <v-text-field
                  v-model="form.credentials.dob"
                  density="compact"
                  type="date"
                  label="Date of birth"
                  variant="outlined"
                />
                <v-text-field
                  v-model="form.credentials.state"
                  density="compact"
                  label="State of origin"
                  variant="outlined"
                />
                <v-text-field
                  v-model="form.credentials.phone"
                  density="compact"
                  type="number"
                  label="Phone number"
                  variant="outlined"
                />
                <v-text-field
                  v-model="form.credentials.email"
                  density="compact"
                  type="email"
                  label="Email"
                  variant="outlined"
                />
                <v-card-actions class="px-0">
                  <v-spacer />
                  <v-btn
                    @click="form.step = 2"
                    :disabled="
                      form.credentials.studentsname == '' ||
                      form.credentials.sex == '' ||
                      form.credentials.address == '' ||
                      form.credentials.dob == '' ||
                      form.credentials.state == '' ||
                      form.credentials.phone == '' ||
                      form.credentials.email == ''
                    "
                    :loading="form.loading"
                    class="bg-indigo-darken-4 text-capitalize"
                    >Next</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-expand-transition>
            <v-expand-transition>
              <v-col v-if="form.step == 2" cols="12">
                <v-text-field
                  v-model="form.credentials.sponsorName"
                  density="compact"
                  label="Sponsor name"
                  variant="outlined"
                />
                <v-text-field
                  v-model="form.credentials.sponsorAddress"
                  density="compact"
                  label="Sponsor address"
                  variant="outlined"
                />
                <v-text-field
                  v-model="form.credentials.sponsorPhone"
                  type="number"
                  density="compact"
                  label="Sponsor phone"
                  variant="outlined"
                />
                <v-card-actions class="px-0">
                  <v-spacer />
                  <v-btn
                    @click="form.step = 3"
                    :disabled="
                      form.credentials.studentsname == '' ||
                      form.credentials.sex == '' ||
                      form.credentials.address == '' ||
                      form.credentials.dob == '' ||
                      form.credentials.state == '' ||
                      form.credentials.phone == '' ||
                      form.credentials.email == '' ||
                      form.credentials.sponsorName == '' ||
                      form.credentials.sponsorAddress == '' ||
                      form.credentials.sponsorPhone == ''
                    "
                    :loading="form.loading"
                    class="bg-indigo-darken-4 text-capitalize"
                    >Next</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-expand-transition>
            <v-expand-transition>
              <v-col v-if="form.step == 3" cols="12">
                <v-card flat>
                  <v-card-text>
                    <v-select
                      label="Campus"
                      v-model="form.credentials.campus"
                      :items="['Dline - Port Harcourt', 'NTA - Port Harcourt']"
                      density="compact"
                      variant="outlined"
                    />
                  </v-card-text>
                </v-card>

                <v-divider class="mb-5" />

                <v-card flat>
                  <v-toolbar density="compact" color="transparent">
                    <v-checkbox
                      @change="toggleActiveCardOne"
                      label="Course one(1)"
                    ></v-checkbox>
                  </v-toolbar>
                  <v-card :disabled="!form.activeCardOne" flat>
                    <v-card-text>
                      <v-select
                        v-model="form.credentials.course1.course"
                        label="Courses"
                        variant="underlined"
                        hide-details
                        density="compact"
                        :items="courses"
                      />
                    </v-card-text>
                    <v-card-text>
                      <v-slider
                        v-model="form.credentials.course1.duration"
                        label="Duration"
                        thumb-label
                        :min="0"
                        :max="12"
                        step="1"
                        @update:model-value="setCourseOnePrice"
                      ></v-slider>
                    </v-card-text>
                  </v-card>
                </v-card>

                <v-divider class="mb-5" />

                <v-card flat>
                  <v-toolbar density="compact" color="transparent">
                    <v-checkbox
                      @change="toggleActiveCardTwo"
                      label="Course two(2)"
                    ></v-checkbox>
                  </v-toolbar>

                  <v-card :disabled="!form.activeCardTwo" flat>
                    <v-card-text>
                      <v-select
                        v-model="form.credentials.course2.course"
                        label="Courses"
                        variant="underlined"
                        hide-details
                        :items="courses"
                      />
                    </v-card-text>
                    <v-card-text>
                      <v-slider
                        v-model="form.credentials.course2.duration"
                        @update:model-value="setCourseTwoPrice"
                        label="Duration"
                        thumb-label
                        :min="0"
                        :max="12"
                        step="1"
                      ></v-slider>
                    </v-card-text>
                  </v-card>
                </v-card>

                <v-divider class="mb-5" />

                <v-card flat>
                  <v-toolbar density="compact" color="transparent">
                    <v-checkbox
                      @change="toggleActiveCardThree"
                      label="Course three(3)"
                    ></v-checkbox>
                  </v-toolbar>

                  <v-card :disabled="!form.activeCardThree" flat>
                    <v-card-text>
                      <v-select
                        v-model="form.credentials.course3.course"
                        label="Courses"
                        variant="underlined"
                        hide-details
                        :items="courses"
                      />
                    </v-card-text>
                    <v-card-text>
                      <v-slider
                        v-model="form.credentials.course3.duration"
                        @update:model-value="setCourseThreePrice"
                        label="Duration"
                        thumb-label
                        :min="0"
                        :max="12"
                        step="1"
                      ></v-slider>
                    </v-card-text>
                  </v-card>
                </v-card>

                <v-card-actions class="px-0">
                  <v-spacer />
                  <v-btn
                    @click="submitForm"
                    :disabled="
                      form.credentials.studentsname == '' ||
                      form.credentials.sex == '' ||
                      form.credentials.address == '' ||
                      form.credentials.dob == '' ||
                      form.credentials.state == '' ||
                      form.credentials.phone == '' ||
                      form.credentials.email == '' ||
                      form.credentials.sponsorName == '' ||
                      form.credentials.sponsorAddress == '' ||
                      form.credentials.sponsorPhone == '' ||
                      form.credentials.campus == ''
                    "
                    :loading="form.loading"
                    class="bg-indigo-darken-4 text-capitalize"
                    >Register Now</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-expand-transition>
          </v-row>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>
  
  <script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations([
      "toggleActiveCardOne",
      "setCourseOnePrice",
      "toggleActiveCardTwo",
      "setCourseTwoPrice",
      "setCourseThreePrice",
      "toggleActiveCardThree",
    ]),
    ...mapActions(["submitForm"]),
  },

  computed: {
    ...mapGetters(["courses"]),
    ...mapState(["form"]),
  },
};
</script>
  