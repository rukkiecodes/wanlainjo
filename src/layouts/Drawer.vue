<template>
    <v-navigation-drawer v-model="drawer.drawer" temporary>
        <v-list density="compact" nav>
            <v-list-item v-for="(route, i) in routes" :key="i" :to="route.to" :prepend-icon="route.icon"
                :title="route.title" :value="route.title"></v-list-item>
        </v-list></v-navigation-drawer>
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