<template>
    <v-dialog v-model="viewCourse.dialog" fullscreen>
        <v-card>
            <v-toolbar dark color="indigo-darken-4">
                <v-toolbar-title>{{ viewCourse.currentCourse.title }}</v-toolbar-title>
                <v-spacer />
                <v-btn dark class="bg-indigo-darken-3 text-capitalize" @click="viewCourse.dialog = false">
                    Close
                </v-btn>
                <v-btn class="bg-white ml-4 text-capitalize" @click="viewCourse.dialog = false">
                    Apply Now
                </v-btn>
            </v-toolbar>

            <v-card-text>
                <v-row justify="space-between">
                    <v-col cols="12" sm="6" md="5">
                        <v-card flat>
                            <v-img :src="viewCourse.currentCourse.image" />
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="7">
                        <v-card flat>
                            <v-card-title class="text-h5 text-md-h3 font-weight-regular">{{
                                viewCourse.currentCourse.title
                            }}</v-card-title>
                            <v-card-text class="text-body-2 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eveniet nemo,
                                quam earum nostrum asperiores atque sapiente officia error eos assumenda quod laborum
                                eligendi quos repellat, commodi rerum soluta facilis.
                            </v-card-text>
                            <v-card-text>
                                <v-timeline v-for="(item, i) in 5" :key="i">
                                    <v-timeline-item size="x-small">
                                        <template v-slot:icon>
                                            <v-avatar color="indigo" size="small">
                                                {{ i+ 1 }}
                                            </v-avatar>
                                        </template>
                                        <template v-slot:opposite>
                                            <span class="d-none d-md-flex text-caption font-weight-bold">Month</span>
                                        </template>
                                        <v-card class="elevation-2">
                                            <v-card-title class="text-h5">
                                                Lorem ipsum
                                            </v-card-title>
                                            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                                                scaevola imperdiet nec ut, sed euismod convenire principes at. Est et
                                                nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                                                salutandi sententiae.</v-card-text>
                                        </v-card>
                                    </v-timeline-item>
                                </v-timeline>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        dialog: false,
        notifications: true,
        sound: true,
        widgets: true
    }),

    computed: {
        ...mapState(["viewCourse"])
    }
}
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
}
</style>