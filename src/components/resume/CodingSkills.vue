<template>
  <v-card color="secondary">
    <v-card-text> <card-header :header="'Coding Skills'" /> </v-card-text>
    <v-card-text>
      <v-container class="fill-height pa-0">
        <v-row>
          <v-col v-for="skill in skills" :key="skill.lang" cols="12">
            <div class="grid space-y-1 text-lg">
              <div class="flex uppercase justify-space-between wait--text">
                <span v-text="skill.lang"></span>
                <span v-text="skill.value + '%'"></span>
              </div>
              <div>
                <v-progress-linear
                  color="error"
                  buffer-value="5"
                  striped
                  height="10"
                  stream
                  rounded
                  :value="skill.value"
                >
                </v-progress-linear>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import CardHeader from "./CardHeader.vue";
export default {
  components: {
    CardHeader,
  },
  data() {
    return {
      skills: [
        { lang: "css", value: 89 },
        { lang: "html", value: 94 },
        { lang: "php", value: 80 },
        { lang: "javascript", value: 78 },
        { lang: "vue", value: 87 },
        { lang: "laravel", value: 83 },
      ],
    };
  },
};
</script>

<style>
</style>