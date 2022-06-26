<template>
  <v-container class="pb-14">
    <v-row>
      <v-col cols="12">
        <div class="text-center wait--text font-extrabold text-4xl font-serif">
          MY <span class="info--text">RESUME</span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-card color="secondary">
          <v-card-text class="py-5 text-center">
            <v-btn elevation="" class="wait--text subtitle" color="error">
              <v-icon left color="">mdi-download</v-icon>
              <span>download my cv</span>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" class="">
        <CodingSkills />
      </v-col>
      <v-col cols="12" sm="6">
        <LughaSkills />
      </v-col>
      <v-col cols="12" sm="6" class="">
        <LanguageSkills />
      </v-col>
      <v-col cols="12" sm="6" class="">
        <BasicKnowledge />
      </v-col>
      <v-col class="" cols="12" sm="6">
        <EducationBackground />
      </v-col>
      <v-col>
        <Experience-card cols="12" class="" sm="6" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LanguageSkills from "../components/resume/LanguageSkills.vue";
import BasicKnowledge from "../components/resume/BasicKnowledge.vue";
import CodingSkills from "@/components/resume/CodingSkills.vue";
import EducationBackground from "@/components/resume/EducationBackground.vue";
import ExperienceCard from "../components/resume/ExperienceCard.vue";
import LughaSkills from "@/components/resume/LughaSkills.vue";
export default {
  components: {
    ExperienceCard,
    LanguageSkills,
    BasicKnowledge,
    CodingSkills,
    EducationBackground,
    LughaSkills,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>