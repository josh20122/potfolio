<template>
  <v-card color="secondary">
    <v-card-text>
      <card-header header="Experience" />
    </v-card-text>
    <v-card-text>
      <TimelineComponent :items="experience" />
    </v-card-text>
  </v-card>
</template>

<script>
import CardHeader from "./CardHeader.vue";
import TimelineComponent from "./TimelineComponent.vue";
export default {
  components: { CardHeader, TimelineComponent },
  data() {
    return {
      experience: [
        {
          title: "Ideal Devs ",
          sub: "Web Developer | 2016 - Present",
          desc: "The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia. ",
        },
        {
          title: "Ideal Devs ",
          sub: "Lead Ui/Ux Designer 2015 - 2018",
          desc: "The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia. ",
        },
        {
          title: "Ideal Devs ",
          sub: "Web Developer | 2016 - Present",
          desc: "The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia. ",
        },
      ],
    };
  },
};
</script>

<style>
</style>