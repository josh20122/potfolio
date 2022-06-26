<template>
  <v-card color="secondary">
    <v-card-text>
      <card-header :header="'Language Skills'" />
    </v-card-text>
    <v-card-text>
      <div
        class="grid wait--text text-lg space-y-2 pb-3"
        v-for="lang in languages"
        :key="lang.lang"
      >
        <div class="flex justify-space-between">
          <span v-text="lang.lang"></span>
          <span v-text="lang.value + '%'"></span>
        </div>
        <v-progress-linear
          height="10"
          buffer-value="2"
          color="error"
          :value="lang.value"
          striped
          stream
          active
        >
        </v-progress-linear>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import CardHeader from "./CardHeader.vue";
export default {
  components: { CardHeader },
  data() {
    return {
      languages: [
        { lang: "English", value: 98 },
        { lang: "Kiswahili", value: 89 },
      ],
    };
  },
};
</script>

<style>
</style>