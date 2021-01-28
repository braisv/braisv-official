<template>
    <div class="app" :class="[isDark ? 'dark' : 'light']">
      <NavBar />
      <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "./components/NavBar";
import { mapState } from "vuex";
import '@/sass/main.scss';

export default {
  name: "App",

  components: {
    NavBar,
  },

  data: () => ({
    mode: "dark",
  }),
  computed: {
    ...mapState('darkMode', ["isDark"])
  }
};
</script>
