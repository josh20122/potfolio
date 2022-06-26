<template>
  <v-container class="fill-height pb-12">
    <v-row>
      <v-col>
        <v-card color="blue " rounded="lg" class="mx-auto mt-14">
          <v-card-text>
            <v-img
              :src="'images/logo2.jpg'"
              contain
              class="rounded-lg"
              max-width="500"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <div
          class="
            font-bold
            text-lg
            py-1
            px-3
            mb-4
            bg-blue-500
            rounded-t-lg rounded-br-lg
            text-white
            font-mono
            max-w-min
          "
        >
          Hello
        </div>
        <div class="grid space-y-5">
          <div class="text-4xl font-bold text-gray-50">
            I'M <span class="info--text uppercase">Joshua Nzomo</span>
          </div>
          <div>
            <typewriter
              :replace="replace"
              :type-interval="100"
              :replace-interval="3000"
            >
              <div class="text-gray-50 text-2xl font-medium">
                I DO WEB DEVELOPMENT
              </div>
            </typewriter>
          </div>
          <div class="text-gray-50">
            With over 5+ years of job experience. I studied Information
            Technology at University and later honed my skills through
            commercial and freelance experience. My skills include PHP, Laravel,
            jQuery, database design, JavaScript and MySQL.
          </div>
          <div>
            <v-btn
              large
              elevation=""
              class="grey--text text--lighten-4"
              color="blue "
            >
              <v-icon color="white" left>mdi-rocket</v-icon>
              <span>portfolio</span>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-gray-50"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Typewriter from "typewriter-vue";
export default {
  components: { Typewriter },
  data() {
    return {
      replace: [
        { from: "WEB DEVELOPMENT", to: "UX/UI DESIGN" },
        { from: "UX/UI DESIGN", to: "WEB DESIGN" },
        { from: "WEB DESIGN", to: "WEB DEVELOPMENT" },
        { from: "WEB DEVELOPMENT", to: "UX/UI DESIGN" },
        { from: "UX/UI DESIGN", to: "WEB DESIGN" },
        { from: "WEB DESIGN", to: "WEB DEVELOPMENT" },
        { from: "WEB DEVELOPMENT", to: "UX/UI DESIGN" },
        { from: "UX/UI DESIGN", to: "WEB DESIGN" },
        { from: "WEB DESIGN", to: "WEB DEVELOPMENT" },
      ],
    };
  },
};
</script>
