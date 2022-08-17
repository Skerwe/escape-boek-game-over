<script>
export default {
  data() {
    return {
      currentLocation: 0
    }
  },
  methods: {
    increment() {
      if (this.currentLocation + 1 <= 20) {
        this.currentLocation++
      }
    },
    decrement() {
      if (this.currentLocation - 1 >= 1) {
        this.currentLocation--
      }
    }
  }
}
</script>

<template>
  <div class="mb-3">
    Current location:
    <button @click="decrement">-</button> {{ currentLocation }}
    <button @click="increment">+</button>
  </div>
</template>

<style scoped>
</style>
