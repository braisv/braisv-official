<template>
  <div class="home">
    <Cover />
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from "@/components/Cover.vue";
import Welcome from "@/components/Welcome.vue";
import "@/sass/main.scss";

export default {
  name: "Home",
  components: {
    Cover,
    Welcome
  },
  data: () => ({}),
};
</script>
