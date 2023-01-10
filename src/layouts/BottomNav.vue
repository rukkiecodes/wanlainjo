<template>
    <v-bottom-navigation grow>
        <v-btn to="/courses" value="courses">
            <v-icon>mdi-account-school</v-icon>

            courses
        </v-btn>

        <v-btn to="/contact" value="contact">
            <v-icon>mdi-phone</v-icon>

            Contact
        </v-btn>

        <v-btn to="/events" value="events">
            <v-icon>mdi-party-popper</v-icon>

            Events
        </v-btn>
    </v-bottom-navigation>
</template>
