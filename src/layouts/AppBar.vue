<template>
    <v-app-bar class="pr-4" flat>
        <v-app-bar-title>
            <v-img src="@/assets/images/logo.png" width="150" />
        </v-app-bar-title>

        <v-spacer />

        <router-link v-for="(route, i) in routes" :key="i" :to="route.to"
            class="ml-4 text-decoration-none text-grey-darken-3 text-body-1"
            active-class="text-blue-darken-4 font-weight0-bold">{{
    route.title
            }}</router-link>
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
                title: 'About',
                icon: 'mdi-account',
                to: '/about'
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
