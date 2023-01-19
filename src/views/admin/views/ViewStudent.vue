<template>
  <v-container>
    <v-toolbar class="elevation-0" color="white">
      <v-btn @click="$router.go(-1)">
        <v-icon class="mr-2">mdi-arrow-left</v-icon>
        <span class="text-capitalize">Go Back</span>
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row>
      <v-col cols="12" sm="12" md="4">
        <v-card class="pa-0">
          <v-img cover :src="student?.displayPicture" />
        </v-card>

        <v-toolbar
          density="compact"
          color="transparent"
          class="hidden-sm-and-down"
        >
          <v-spacer />
          <v-toolbar-items>
            <v-btn>
              <v-icon class="mr-2 text-indigo">mdi-pencil</v-icon>
              <span class="text-capitalize text-indigo">Edit</span>
            </v-btn>
            <v-btn>
              <v-icon class="mr-2 text-red">mdi-delete</v-icon>
              <span class="text-capitalize text-red">Delete</span>
            </v-btn>
            <v-btn>
              <v-icon class="mr-2 text-green">mdi-check-all</v-icon>
              <span class="text-capitalize text-green">Verify</span>
            </v-btn>
          </v-toolbar-items>
          <v-spacer />
        </v-toolbar>
      </v-col>
      <v-col cols="12" sm="12" md="8">
        <v-card flat>
          <v-card-text
            class="d-flex justify-space-between align-center flex-wrap"
          >
            <h1
              class="
                text-grey-darken-4 text-h5 text-sm-h4 text-md-h5 text-lg-h4
                font-weight-bold
              "
            >
              {{ student?.studentsname }}
            </h1>

            <v-chip :color="student?.verified ? 'green' : 'red'">
              <span class="text-capitalize">{{
                student?.verified ? "verified" : "not verified"
              }}</span>
            </v-chip>
          </v-card-text>

          <v-card-text>
            <v-card-title class="px-0">student Info</v-card-title>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left text-caption text-capitalize">campus</th>
                  <th class="text-left text-caption text-capitalize">email</th>
                  <th class="text-left text-caption text-capitalize">phone</th>
                  <th class="text-left text-caption text-capitalize">dob</th>
                  <th class="text-left text-caption text-capitalize">age</th>
                  <th class="text-left text-caption text-capitalize">sex</th>
                  <th class="text-left text-caption text-capitalize">
                    address
                  </th>
                  <th class="text-left text-caption text-capitalize">
                    state of origin
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-caption">
                    {{
                      student?.campus == "Dline - Port Harcourt"
                        ? "D/Line"
                        : "NTA"
                    }}
                  </td>
                  <td class="text-caption">{{ student?.email }}</td>
                  <td class="text-caption">{{ student?.phone }}</td>
                  <td class="text-caption">{{ student?.dob }}</td>
                  <td class="text-caption">{{ getAge(student?.dob) }}</td>
                  <td class="text-caption">{{ student?.sex }}</td>
                  <td class="text-caption">{{ student?.address }}</td>
                  <td class="text-caption">{{ student?.state }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>

          <v-card-text>
            <v-card-title class="px-0">Sponsor Info</v-card-title>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left text-caption text-capitalize">
                    student's name
                  </th>
                  <th class="text-left text-caption text-capitalize">
                    sponsor Phone
                  </th>
                  <th class="text-left text-caption text-capitalize">
                    sponsor Address
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-caption">{{ student?.studentsname }}</td>
                  <td class="text-caption">{{ student?.sponsorPhone }}</td>
                  <td class="text-caption">{{ student?.sponsorAddress }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>

          <v-card>
            <v-card-title>Prefared courses</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-card>
                    <v-card-title class="text-h6">First choice</v-card-title>
                    <v-card-text class="d-flex flex-column">
                      <span class="text-body-2 font-weight-bold">{{
                        student?.course1?.course
                      }}</span>

                      <span class="text-caption">
                        {{ student?.course1?.duration }} Months</span
                      >
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-card>
                    <v-card-title class="text-h6">Second choice</v-card-title>
                    <v-card-text class="d-flex flex-column">
                      <span class="text-body-2 font-weight-bold">{{
                        student?.course2?.course
                      }}</span>

                      <span class="text-caption">
                        {{ student?.course2?.duration }} Months</span
                      >
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-card>
                    <v-card-title class="text-h6">Third choice</v-card-title>
                    <v-card-text class="d-flex flex-column">
                      <span class="text-body-2 font-weight-bold">{{
                        student?.course3?.course
                      }}</span>

                      <span class="text-caption">
                        {{ student?.course3?.duration }} Months</span
                      >
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-bottom-navigation grow class="hidden-md-and-up">
    <v-btn value="edit">
      <v-icon>mdi-pencil</v-icon>

      Edit
    </v-btn>

    <v-btn value="delete">
      <v-icon>mdi-delete</v-icon>

      Delete
    </v-btn>

    <v-btn value="verify">
      <v-icon>mdi-check-all</v-icon>

      Verify
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { doc, getDoc } from "@firebase/firestore";
import { db } from "@/plugins/firebase";
export default {
  data: () => ({
    student: {},
  }),

  created() {
    this.$nextTick(() => {
      this.getStudent();
    });
  },

  methods: {
    async getStudent() {
      let student = await (
        await getDoc(doc(db, "registration", this.$route.params.student))
      ).data();

      this.student = student;
    },

    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
};
</script>
