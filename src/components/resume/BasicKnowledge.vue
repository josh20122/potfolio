<template>
  <v-card color="secondary">
    <v-card-text class="">
      <card-header :header="'Basic Knowledge'" />
    </v-card-text>
    <v-card-text class="pa-0">
      <v-list color="secondary" expand class="pa-0">
        <v-list-item v-for="basic in basics" :key="basic.skill">
          <v-list-item-icon>
            <v-icon dense color="wait" v-text="basic.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="wait--text" v-text="basic.skill">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import CardHeader from "./CardHeader.vue";
export default {
  components: { CardHeader },
  data() {
    return {
      basics: [
        {
          skill: "Search engine marketing",
          icon: "mdi-rocket",
        },
        {
          skill: "iOS and android apps",
          icon: "mdi-rocket",
        },
        {
          skill: "Spreadsheets (Excel, Google Spreadsheets, etc.)",
          icon: "mdi-rocket",
        },
        {
          skill: "Email Communication",
          icon: "mdi-rocket",
        },
        {
          skill: "Presentation software (PowerPoint, Keynote)",
          icon: "mdi-rocket",
        },
        {
          skill: "Office suites (Microsoft Office, G Suite)",
          icon: "mdi-rocket",
        },
        {
          skill: "Operating systems (Windows,MacOS and Linux)",
          icon: "mdi-rocket",
        },
      ],
    };
  },
};
</script>

<style>
</style>