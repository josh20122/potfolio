<template>
  <v-app>
    <v-app-bar app color="primary" flat outlined dense dark hide-on-scroll>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 rounded-circle"
          :src="'images/logo1.jpg'"
          transition="scale-transition"
          width="40"
          contain
        />
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      :src="'images/logo2.jpg'"
      app
      color="secondary"
      right
      :value="drawer"
    >
      <v-list>
        <v-list-item
          v-for="(page, key) in pages"
          :key="key"
          :to="page.link"
          color="white"
        >
          <v-list-item-content>
            <v-list-item-title class="red--text" v-text="page.page">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="primary">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      pages: [
        { page: "About Page", link: "/about" },
        { page: "Resume", link: "/resume" },
        { page: "Home", link: "/" },
      ],
    };
  },
};
</script>
