<template>
  <div>
    <label for="makeSearch">Search by Make:</label>
    <input v-model="queryMake" type="text" name="makeSearch" placeholder="e.g. Ford">
    <label for="makeTags">Quick Find:</label>
    <b-badge v-for="tag in makes" @click="queryMake = tag" name="makeTags" pill variant="info" href="#">{{ tag }}</b-badge>
    <label for="modelSearch">Search by Model:</label>
    <input v-model="queryModel" type="text" name="modelSearch" placeholder="e.g. Fiesta">
    <label for="modelTags">Quick Find:</label>
    <b-badge v-for="tag in models" @click="queryModel = tag" name="modelTags" pill variant="info" href="#">{{ tag }}</b-badge>
    <span @click="resetSearch">reset</span>
    <b-alert v-if="!searchVehicles.length" show variant="warning">
    Sorry, none of those here today, <a href="#" class="alert-link" @click="resetSearch">restart your search</a>.
    </b-alert>
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
        let regex, searchResults
        if (this.activeQuery === 'make') {
          regex = new RegExp(this.queryMake, 'gi')
          searchResults = index.vehicleCapDetails.presentationMake.match(regex)
        }
        if (this.activeQuery === 'model') {
          regex = new RegExp(this.queryModel, 'gi')
          searchResults = index.vehicleCapDetails.presentationRange.match(regex)
        }
        return searchResults
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