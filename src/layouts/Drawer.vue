<template>
    <v-navigation-drawer v-model="drawer.drawer">...</v-navigation-drawer>
</template>

<script>
import { useDisplay } from "vuetify"
import { mapState } from 'vuex'
export default {
    created() {
        this.drawerVisibility();
    },

    methods: {
        drawerVisibility() {
            switch (useDisplay().name.value) {
                case "xs":
                    return (this.drawer.drawer = false);
                case "sm":
                    return (this.drawer.drawer = false);
                case "md":
                    return (this.drawer.drawer = false);
                case "lg":
                    return (this.drawer.drawer = false);
                case "xl":
                    return (this.drawer.drawer = false);
                case "xxl":
                    return (this.drawer.drawer = false);
            }
        },
    },

    computed: {
        ...mapState(['drawer'])
    }
}
</script>