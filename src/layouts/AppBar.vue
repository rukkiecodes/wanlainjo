<template>
    <v-app-bar class="pr-4" flat>
        <v-app-bar-title>
            <v-img src="@/assets/images/logo.png" width="150" />
        </v-app-bar-title>

        <v-spacer />

        <v-btn v-for="(route, i) in routes" :key="i" :to="route.to" variant="text" class="text-body-1 ml-2">{{ route.title }}</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        routes: [
            {
                title: 'Home',
                icon: 'mdi-home',
                to: '/'
            },
            {
                title: 'About Us',
                icon: 'mdi-account',
                to: '/about'
            },
            {
                title: 'Courses',
                icon: 'mdi-account',
                to: '/courses'
            },
            {
                title: 'Contact',
                icon: 'mdi-phone',
                to: '/contact'
            }
        ]
    })
}
</script>
