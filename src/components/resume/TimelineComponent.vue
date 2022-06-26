<template>
  <v-timeline dense class="pl-0">
    <v-timeline-item
      v-for="item in items"
      :key="item.title"
      icon="mdi-rocket"
      small
      icon-color="error"
      color="secondary"
    >
      <div class="grid">
        <div class="text-lg wait--text uppercase" v-text="item.title"></div>
        <div class="secondary2--text uppercase" v-text="item.sub"></div>
        <div class="wait--text" v-text="item.desc"></div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style>
</style>