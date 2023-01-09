<template>
    <v-footer color="#001277" class="py-16">
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <v-row dense>
                        <v-col cols="12" sm="4" v-for="(route, i) in routes" :key="i">
                            <router-link :to="route.to" class="text-decoration-none text-white text-body-2">{{
                                route.title
                            }}</router-link>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4" class="d-flex align-center justify-center">
                    <v-text-field variant="outlined" density="comfortable" placeholder="Email address" class="bg-white" hide-details />
                    <v-btn height="48" flat class="bg-indigo-darken-4 ml-4">Subscribe</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        routes: [
            { title: 'Home', to: '' },
            { title: 'About', to: '' },
            { title: 'Courses', to: '' },
            { title: 'Contact Us', to: '' },
            { title: 'Python', to: '' },
            { title: 'Web & Mobile', to: '' },
            { title: 'UI/UX', to: '' },
            { title: 'Data Science', to: '' },
            { title: 'Web & App Services', to: '' },
            { title: 'Cloud Service', to: '' },
            { title: 'PC Tech', to: '' },
            { title: 'Graphic Services', to: '' },
        ]
    })
}
</script>
