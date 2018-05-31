<template>
  <div>
    <p v-for="vehicle in vehicles">
      <car-card :car="vehicle" />
    </p>
  </div>
</template>

<script>
import carCard from './car.vue'

export default {
  data () {
    return {
      vehicles: {}
    }
  },
  created () {
    fetch('/static/db.json')
    .then(blob => blob.json())
    .then(json => {
      this.vehicles = json.vehicles
    })
  },
  components: { carCard }
}
</script>

<style>
</style>