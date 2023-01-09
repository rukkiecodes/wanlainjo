<template>
    <v-card height="100" class="d-flex justify-center align-center my-10" flat>
        <v-card-text class="text-center text-h6 font-weight-bold">
            {{ text }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>
