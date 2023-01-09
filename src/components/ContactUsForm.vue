<template>
    <v-row justify="space-between">
        <v-col cols="12" sm="9">
            <v-card flat>
                <v-card-title>LET'S GET IN TOUCH</v-card-title>

                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" sm="4">
                            <v-text-field placeholder="Your name" density="comfortable" variant="outlined"
                                color="indigo" />
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field placeholder="Your email" density="comfortable" variant="outlined"
                                color="indigo" />
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field placeholder="Subject" density="comfortable" variant="outlined"
                                color="indigo" />
                        </v-col>
                        <v-col cols="12">
                            <v-textarea placeholder="Your Message" variant="outlined" color="indigo" />
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn class="bg-indigo-darken-4 text-body-1">Send message now</v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="3">
            <v-card v-for="(card, i) in cards" :key="i" flat>
                <v-card-title class="text-body-1 pb-0 text-indigo-darken-4">{{ card.title }}</v-card-title>
                <v-card-text class="pt-0">{{ card.body }}</v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        cards: [
            {
                title: 'Email Address',
                body: 'info@wanlainjotech-hub.com'
            },
            {
                title: 'Phone Number',
                body: '010-020-0340'
            },
            {
                title: 'Office Address',
                body: '20 Peremabiri Street, Dline Port Harcourt, R/S Nigeria'
            },
        ]
    })
}
</script>
