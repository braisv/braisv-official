<template>
  <div class="home">
    <Cover />
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from "@/components/Cover.vue";
import "@/sass/main.scss";

export default {
  name: "Home",
  components: {
    Cover,
  },
  data: () => ({}),
};
</script>
