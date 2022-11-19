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
      version: "v1.0.1",
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

    <nav class="level is-mobile has-background-light">
      <div class="level-item">
        <RouterLink class="navbar-item" to="/" id="home-page"
          >Inventory</RouterLink
        >
      </div>
      <div class="level-item">
        <RouterLink class="navbar-item" to="/about" id="about-page"
          >About</RouterLink
        >
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
