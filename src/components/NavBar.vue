<template>
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon"></span>
    </label>
    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <!-- <router-link
        to="/"
        v-slot="{ href, navigate, isActive }"
        class="navbar-head"
      >
        <v-img
          alt="Vuetify Logo"
          class="logo shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />
        <NavLink :active="isActive" :href="href" @click="navigate"
          >Brais Vidal</NavLink
        >
      </router-link> -->
      <div class="navigation__list">
        <router-link
          to="/"
          v-slot="{ href, navigate, isActive }"
          class="navigation__item"
        >
          <NavLink class="navigation__link" :active="isActive" :href="href" @click="navigate"
            >Home</NavLink
          >
        </router-link>
        <router-link
          to="/work"
          v-slot="{ href, navigate, isActive }"
          class="navigation__item"
        >
          <NavLink class="navigation__link" :active="isActive" :href="href" @click="navigate"
            >Work</NavLink
          >
        </router-link>
        <router-link
          to="/about"
          v-slot="{ href, navigate, isActive }"
          class="navigation__item"
        >
          <NavLink class="navigation__link" :active="isActive" :href="href" @click="navigate"
            >About</NavLink
          >
        </router-link>
        <router-link
          to="/gallery"
          v-slot="{ href, navigate, isActive }"
          class="navigation__item"
        >
          <NavLink class="navigation__link" :active="isActive" :href="href" @click="navigate"
            >Gallery</NavLink
          >
        </router-link>
        <router-link
          to="/blog"
          v-slot="{ href, navigate, isActive }"
          class="navigation__item"
        >
          <NavLink class="navigation__link" :active="isActive" :href="href" @click="navigate"
            >Blog</NavLink
          >
        </router-link>
        <router-link
          to="/Resume"
          v-slot="{ href, navigate, isActive }"
          class="navigation__item"
        >
          <NavLink class="navigation__link" :active="isActive" :href="href" @click="navigate"
            >Resume</NavLink
          >
        </router-link>
        <a
          href="https://github.com/braisv"
          target="_blank"
          class="navigation__item tab-github"
        >
          <v-img
            alt="Vuetify Logo"
            class="logo shrink mr-2"
            contain
            src="@/assets/logos/github.svg"
            transition="scale-transition"
            width="30"
          />
          <NavLink class="navigation__link">GitHub</NavLink>
        </a>
      </div>
    </nav>
    <!-- <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation___item">
          <a href="#" class="navigation__link"><span>01</span> About Natours</a>
        </li>
        <li class="navigation___item">
          <a href="#" class="navigation__link"><span>02</span> Your benefits</a>
        </li>
        <li class="navigation___item">
          <a href="#" class="navigation__link"><span>03</span> Popular tours</a>
        </li>
        <li class="navigation___item">
          <a href="#" class="navigation__link"><span>04</span> Stories</a>
        </li>
        <li class="navigation___item">
          <a href="#" class="navigation__link"><span>05</span> Book now</a>
        </li>
      </ul>
    </nav> -->
  </div>
</template>
