<template>
  <v-card color="secondary " class="wait--text">
    <v-card-text> <card-header :header="'Professional Skills'" /> </v-card-text>
    <v-card-text>
      <v-container class="pa-0">
        <v-row justify="">
          <v-col
            v-for="skill in skills"
            :key="skill.skill"
            cols="6"
            class="mx-auto"
          >
            <div class="grid space-y-1 justify-center">
              <div>
                <v-progress-circular
                  color="error"
                  :value="skill.value"
                  size="100"
                  width="7"
                >
                  <span class="wait--text text-lg" v-text="skill.value + '%'">
                  </span>
                </v-progress-circular>
              </div>
              <div
                class="wait--text uppercase text-center text-base"
                v-text="skill.skill"
              ></div>
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
  components: { CardHeader },
  data() {
    return {
      skills: [
        { skill: "web design", value: 90 },
        { skill: "web development", value: 96 },
        { skill: "graphic design", value: 80 },
        { skill: "auto cad", value: 82 },
      ],
    };
  },
};
</script>

<style>
</style>