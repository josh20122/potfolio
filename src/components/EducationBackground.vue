<template>
  <v-card color="secondary">
    <v-card-text> <card-header :header="'Education'" /> </v-card-text>
    <v-card-text>
      <TimelineComponent :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import CardHeader from "./CardHeader.vue";
import TimelineComponent from "./resume/TimelineComponent.vue";
export default {
  name: "edcation-backgrund",
  components: { CardHeader, TimelineComponent },
  data() {
    return {
      items: [
        {
          title: "University of the Incarnate Word ",
          sub: "BSC IN CSS | 2019 - Present",
          desc: "The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia. ",
        },
        {
          title: "University of British Columbia ",
          sub: "BSC IN CSS | 2017 - 2018",
          desc: "The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia. ",
        },
        {
          title: "The University of Alabama ",
          sub: "BSC IN CSS | 2015 - 2017",
          desc: "The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia. ",
        },
      ],
    };
  },
};
</script>

<style>
</style>