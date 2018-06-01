<template>
  <div>
    <input v-model="queryStr" type="text" name="carSearch" placeholder="Type a make or model to search">
    <p v-if="!searchVehicles.length">Sorry, none of those here today, we can try again tomorrow.</p>
    <p v-else v-for="vehicle in searchVehicles">
      <car-card :vehicle="vehicle" />
    </p>
  </div>
</template>

<script>
import carCard from './Car.vue'
import { loadDatabase } from '../mixins/loadDatabase'

export default {
  data () {
    return {
      queryStr: ''
    }
  },
  computed: {
    searchVehicles () {
      return this.allVehicles.filter(index => {
        const regex = new RegExp(this.queryStr, 'gi')
        return index.vehicleCapDetails.presentationMake.match(regex) || index.vehicleCapDetails.presentationRange.match(regex)
      })
    },
    makes () {
      return [...new Set(this.allVehicles.map(carMakes => carMakes.vehicleCapDetails.presentationMake))]
    },
    models () {
      return [...new Set(this.allVehicles.map(carMakes => carMakes.vehicleCapDetails.presentationRange))]
    }
  },
  components: { carCard },
  mixins: [ loadDatabase ]
}
</script>

<style>
</style>