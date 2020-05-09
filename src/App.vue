<template>
  <v-app>
    <NavBar />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import '@/sass/main.scss'

export default {
  name: "App",

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
