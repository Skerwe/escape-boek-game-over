<script>
import { RouterLink, RouterView } from 'vue-router';
import CurrentLocation from '@/components/CurrentLocation.vue';

import { useI18n } from 'vue-i18n'
import $ from 'jquery';

export default {
  components: {
    RouterLink,
    RouterView,
    CurrentLocation,
  },
  async setup() {
    const burgerToggel = () => {
      // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
      $('.navbar-burger').toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');
    };

    const { t } = useI18n()
    return { burgerToggel, t };
  },
  data() {
    return {
      version: 'v1.2.0',
    };
  },
};
</script>

<template>
  <header id="page-header" class="has-text-centered mt-2">
    <h1 class="title is-inline-block-desktop">Escape Boek</h1>
    <div class="subtitle is-inline-block-desktop">
      <span class="is-invisible-touch">: </span>Game Over
    </div>

    <CurrentLocation />

    <nav
      class="navbar has-background-light"
      role="navigation"
      aria-label="main navigation"
    >
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        data-cy="burger-menu"
        @click="burgerToggel()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <RouterLink
            id="home-page"
            class="navbar-item"
            to="/"
            data-cy="home-page-link"
          >
            {{ $t('pageInventory') }}
          </RouterLink>
          <RouterLink
            id="about-page"
            class="navbar-item"
            to="/about"
            data-cy="about-page-link"
          >
            {{ $t('pageAbout') }}
          </RouterLink>
        </div>

        <div class="navbar-end">
          <div class="navbar-item" >
            <template v-for="(locale, index) in $i18n.availableLocales" :key="`locale-${locale}`">
              <a
                v-if="$i18n.locale !== locale"
                @click="$i18n.locale = locale"
              >
                {{ locale.toUpperCase() }}
              </a>
              <strong v-if="$i18n.locale === locale">
                {{ locale.toUpperCase() }}
              </strong>
              <span v-if="index < $i18n.availableLocales.length - 1" class="px-2">|</span>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer id="page-footer" class="footer has-background-light py-4">
    <div class="content has-text-centered">
      <p>
        <strong>Inventory Companion</strong>
        <span class="is-size-7 ml-1">{{ version }}</span>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
