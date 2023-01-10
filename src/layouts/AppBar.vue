<template>
    <v-app-bar class="pr-4" flat>
        <v-app-bar-title>
            <v-img src="@/assets/images/logo.png" width="150" />
        </v-app-bar-title>

        <v-spacer />

        <v-btn v-for="(route, i) in routes" :key="i" :to="route.to" variant="text" class="text-body-1 ml-2 hidden-xs">{{ route.title }}</v-btn>
        <v-app-bar-nav-icon @click="drawer.drawer = !drawer.drawer" class="hidden-sm-and-up" />
    </v-app-bar>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['drawer']),
        ...mapGetters(['routes'])
    }
}
</script>
