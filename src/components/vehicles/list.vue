<template>
  <div>
    <p v-for="vehicle in vehicles">
      <car-card :vehicle="vehicle" />
    </p>
  </div>
</template>

<script>
import carCard from './Car.vue'

export default {
  data () {
    return {
      vehicles: {}
    }
  },
  computed: {
    makes () {
      return [...new Set(this.vehicles.map(carMakes => carMakes.vehicleCapDetails.presentationMake))]
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