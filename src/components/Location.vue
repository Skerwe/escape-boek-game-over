<script>
import { useLocationStore } from '@/stores/location'

export default {
  setup() {
    const currentLocation = useLocationStore()
    currentLocation.load()

    return {
      currentLocation
    }
  },
}
</script>

<template>
  <div class="mb-3">
    Current location:
    <button @click="currentLocation.decrement">-</button> {{ currentLocation.location }}
    <button @click="currentLocation.increment">+</button>
  </div>
</template>

<style scoped>
</style>
