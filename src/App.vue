<script>
import { RouterLink, RouterView } from "vue-router";
import CurrentLocation from "@/components/CurrentLocation.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    CurrentLocation,
  },
  data() {
    return {
      version: "v1.1.0",
      languages: {
        en: { nativeName: 'EN' },
        nl: { nativeName: 'NL' }
      }
    };
  },
};
</script>

<template>
  <header class="has-text-centered mt-2" id="page-header">
    <h1 class="title is-inline-block-desktop">Escape Boek</h1>
    <div class="subtitle is-inline-block-desktop">
      <span class="is-invisible-touch">: </span>Game Over
    </div>

    <CurrentLocation />

    <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <RouterLink class="navbar-item" to="/" id="home-page">{{ $t('pageInventory') }}</RouterLink>
          <RouterLink class="navbar-item" to="/about" id="about-page">{{ $t('pageAbout') }}</RouterLink>
        </div>

        <div class="navbar-end">
          <div class="navbar-item" v-if="languages">
            <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
              <a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
                {{ languages[lng].nativeName }}
              </a>
              <strong v-if="$i18next.resolvedLanguage === lng">
                {{ languages[lng].nativeName }}
              </strong>
              <span v-if="index < (Object.keys(languages).length - 1)">&nbsp;|&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
    </nav>

  </header>

  <RouterView />

  <footer class="footer has-background-light py-4" id="page-footer">
    <div class="content has-text-centered">
      <p>
        <strong>Inventory Companion</strong>
        <span class="is-size-7 ml-1">{{ version }}</span>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
