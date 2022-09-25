<script>
import { useLocationStore } from "@/stores/location";

export default {
  setup() {
    const currentLocation = useLocationStore();
    currentLocation.load();

    return {
      currentLocation,
    };
  },
};
</script>

<template>
  <div id="current-location" class="mb-3">
    Current location:
    <button data-test="decrement" @click="currentLocation.decrement">-</button>
    {{ currentLocation.location }}
    <button data-test="increment" @click="currentLocation.increment">+</button>
  </div>
</template>

<style scoped></style>
