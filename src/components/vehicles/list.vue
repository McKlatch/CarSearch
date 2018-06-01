<template>
  <div>
    <p v-for="vehicle in allVehicles">
      <car-card :vehicle="vehicle" />
    </p>
  </div>
</template>

<script>
import carCard from './Car.vue'
import { loadDatabase } from '../mixins/loadDatabase'

export default {
  computed: {
    makes () {
      return [...new Set(this.allVehicles.map(carMakes => carMakes.vehicleCapDetails.presentationMake))]
    }
  },
  components: { carCard },
  mixins: [ loadDatabase ]
}
</script>

<style>
</style>