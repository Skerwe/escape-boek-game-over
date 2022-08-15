<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CurrentLocation from '@/components/CurrentLocation.vue';
</script>

<template>
  <header class="container has-text-centered">
    <h1 class="title">Escape Boek</h1>
    <div class="subtitle">Game Over</div>

    <CurrentLocation />

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

  <footer class="container footer">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped>
</style>
