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
    <span class="px-1">{{ $t('currentLocation') }}:</span>
    <button data-test="decrement" @click="currentLocation.decrement">-</button>
    <span class="px-1" id="current-location">{{
      currentLocation.location
    }}</span>
    <button data-test="increment" @click="currentLocation.increment">+</button>
  </div>
</template>

<style scoped></style>
