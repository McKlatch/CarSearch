<template>
  <div>
    <label for="makeSearch">Search by Make:</label>
    <input v-model="queryMake" type="text" name="makeSearch" placeholder="e.g. Ford">
    <span v-for="tag in makes" @click="queryMake = tag">{{ tag }} </span>
    <label for="modelSearch">Search by Model:</label>
    <input v-model="queryModel" type="text" name="modelSearch" placeholder="e.g. Fiesta">
    <span v-for="tag in models" @click="queryModel = tag">{{ tag }} </span>
    <span @click="resetSearch">reset</span>
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
      queryMake: '',
      queryModel: '',
      queryPrice: '',
      activeQuery: 'make'
    }
  },
  watch: {
    queryMake () { this.activeQuery = 'make' },
    queryModel () { this.activeQuery = 'model' }
  },
  computed: {
    searchVehicles () {
      return this.allVehicles.filter(index => {
        let regex
        if (this.activeQuery === 'make') {
          regex = new RegExp(this.queryMake, 'gi')
          return index.vehicleCapDetails.presentationMake.match(regex)
        }
        if (this.activeQuery === 'model') {
          regex = new RegExp(this.queryModel, 'gi')
          return index.vehicleCapDetails.presentationRange.match(regex)
        }
        return []
      })
    },
    makes () {
      return [...new Set(this.searchVehicles.map(carMakes => carMakes.vehicleCapDetails.presentationMake))]
    },
    models () {
      return [...new Set(this.searchVehicles.map(carMakes => carMakes.vehicleCapDetails.presentationRange))]
    }
  },
  methods: {
    resetSearch () {
      [this.queryMake, this.queryModel, this.queryPrice] = ''
    }
  },
  components: { carCard },
  mixins: [ loadDatabase ]
}
</script>

<style>
</style>