<template>
  <v-container class="">
    <v-row>
      <v-col>
        <NamesCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NamesCard from "@/components/about/NamesCard.vue";
export default {
  components: {
    NamesCard,
  },
};
</script>

<style>
</style>
NamesCard