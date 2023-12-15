<script>
import App from "./App.vue";

export default {
  name: "LoaderSuspenser",
  components: {
    App,
  },
};
</script>

<template>
  <Suspense>
    <template #default>
      <App />
    </template>
    <template #fallback>
      <div>
        <img
          alt="Inventory Companion application logo of a brown leather schoolbag and blue magic book of spells."
          src="./assets/images/logo.svg"
        />
        <h1>Loading...</h1>
      </div>
    </template>
  </Suspense>
</template>
