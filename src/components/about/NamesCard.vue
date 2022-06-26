<template>
  <v-card color="secondary">
    <v-card-text class="py-8">
      <div class="grid md:grid-cols-2 space-y-3 text-center text-lg pb-5">
        <div
          v-for="data in data1"
          class="flex text-center mx-auto"
          :key="data.item"
        >
          <div
            v-text="data.item + ' : '"
            class="secondary2--text capitalize"
          ></div>
          <div class="wait--text" v-text="data.value"></div>
        </div>
        <div
          v-for="data in data2"
          class="flex text-center mx-auto"
          :key="data.item"
        >
          <div v-text="data.item + ' : '" class="secondary2--text"></div>
          <div class="wait--text" v-text="data.value"></div>
        </div>
      </div>
      <div class="grid space-y-5">
        <div
          v-for="object in objects"
          class="grid space-y-3"
          :key="object.data"
        >
          <v-btn large text elevation="" color="back" exact>
            <v-icon color="" v-text="object.icon"></v-icon>
          </v-btn>
          <div class="mx-auto">
            <v-badge color="secondary">
              <span slot="badge">+</span>
              <span
                class="wait--text text-3xl font-serif font-semibold"
                v-text="object.value"
              ></span>
            </v-badge>
          </div>
          <div class="uppercase text-2xl wait--text mx-auto">
            {{ object.data }}
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      data1: [
        { item: "first name", value: "Scott" },
        { item: "Last name", value: "Robinson" },
        { item: "age", value: 22 },
        { item: "birthdate", value: "21 june 1990" },
        { item: "residence", value: "Kenya" },
      ],
      data2: [
        { item: "Languages", value: "English, Kiswahili" },
        { item: "phone", value: "+2547 5815 3416" },
        { item: "email", value: "scottrobinson1064@gmail.com" },
        { item: "freelance", value: "Available" },
        { item: "experience", value: "5 years" },
      ],
      objects: [
        { data: "happy clients", value: 333, icon: "mdi-rocket" },
        { data: "projects done", value: 333, icon: "mdi-rocket" },
        { data: "awards won", value: 333, icon: "mdi-rocket" },
        { data: "happy clients", value: 333, icon: "mdi-rocket" },
      ],
    };
  },
};
</script>

<style>
</style>