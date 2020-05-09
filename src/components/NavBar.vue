<template>
  <v-app-bar app color="secondary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.svg"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title>Brais Vidal</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn href="https://github.com/braisv" target="_blank" text>
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-3"
        contain
        src="@/assets/logos/github.svg"
        transition="scale-transition"
        width="30"
      />
      <span class="mr-2">GitHub</span>
      <!-- <v-icon>fas fa-external-link-alt</v-icon> -->
    </v-btn>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-app-bar>
</template>
