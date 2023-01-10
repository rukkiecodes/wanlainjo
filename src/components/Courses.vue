<template>
    <v-row>
        <v-col cols="12" sm="4" v-for="(course, i) in courses.slice(0, slice)" :key="i">
            <v-card>
                <v-card max-height="200" flat>
                    <v-img :src="course.image" />
                </v-card>
                <v-card-title> {{ course.title }} </v-card-title>
                <v-card-text>{{ course.body }} </v-card-text>
                <v-card-actions>
                    <v-btn @click="viewCurrentCourse(course)" flat style="flex: .5;"
                        class="bg-grey-darken-2 text-capitalize">View Details</v-btn>
                    <v-btn flat style="flex: 1;" :to="`/register/${course.title}`"
                        class="bg-indigo-darken-4 text-capitalize">Apply
                        Now</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ViewCouseDetailsVue from './ViewCouseDetails.vue';
export default {
    props: {
        slice: {
            type: Number,
            default: 200
        }
    },

    data: () => ({
        currentCourse: null,
    }),

    components: {
        ViewCouseDetailsVue
    },

    methods: {
        ...mapMutations(["viewCurrentCourse"])
    },

    computed: {
        ...mapGetters(["courses"])
    }
}
</script>
