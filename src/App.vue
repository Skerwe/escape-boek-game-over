<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Location from '@/components/Location.vue';
</script>

<template>
  <header class="has-text-centered mt-2" id="page-header">
    <h1 class="title is-inline-block-desktop">Escape Boek</h1>
    <div class="subtitle is-inline-block-desktop"><span class="is-invisible-touch">: </span>Game Over</div>

    <Location />

    <nav class="level is-mobile has-background-light">
      <div class="level-item">
        <!-- <span class="icon is-small">
          <i class="fas fa-home" aria-hidden="true"></i>
        </span> -->
        <RouterLink class="navbar-item" to="/">Inventory</RouterLink>
      </div>
      <div class="level-item">
        <!-- <span class="icon is-small">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span> -->
        <RouterLink class="navbar-item" to="/about">About</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer class="footer has-background-light py-4" id="page-footer">
    <div class="content has-text-centered">
      <p>
        <strong>Inventory Companion</strong>
      </p>
    </div>
  </footer>
</template>

<style scoped>
</style>
