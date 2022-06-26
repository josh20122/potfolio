<template>
  <div class="grid space-y-2">
    <div
      class="wait--text text-xl font-semibold uppercase"
      v-text="header"
    ></div>
    <div>
      <v-progress-linear color="error" value="30"> </v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header"],
};
</script>

<style>
</style>