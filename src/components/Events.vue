<template>
  <v-row>
    <v-col
      cols="12"
      sm="4"
      v-for="(event, i) in events.slice(0, slice)"
      :key="i"
    >
      <v-card>
        <v-card max-height="200" flat>
          <v-img :src="event.image" />
        </v-card>
        <v-card-title class="text-h6 font-weight-bold">
          {{ event.title }}
        </v-card-title>
        <v-card-text class="text-caption text-grey-darken-2"
          >{{ event.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="event.open"
            flat
            :to="`/event/${event.title}`"
            class="
              bg-indigo-darken-4
              text-capitalize
              font-weight-regular
              text-body-2
            "
            >RSVP Now</v-btn
          >
          <v-btn
            v-else
            flat
            :to="`/event/${event.title}`"
            class="
              bg-indigo-darken-4
              text-capitalize
              font-weight-regular
              text-body-2
            "
            >View Event</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    slice: {
      type: Number,
      default: 200,
    },
  },

  computed: {
    ...mapGetters(["events"]),
  },
};
</script>
