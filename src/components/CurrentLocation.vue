<script>
import { useLocationStore } from '@/stores/location';

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
    <button data-cy="decrement-button" @click="currentLocation.decrement">
      -
    </button>
    <span class="px-1" data-cy="current-location-value">{{
      currentLocation.location
    }}</span>
    <button data-cy="increment-button" @click="currentLocation.increment">
      +
    </button>
  </div>
</template>

<style scoped>
button {
  width: 30px;
  height: 30px;
}
</style>
