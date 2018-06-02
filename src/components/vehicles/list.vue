<template>
  <div>
    <b-row>
      <b-col sm="12" md="6">
        <b-form-group
            id="formMakeSearch"
            label="Search by Make:"
            label-for="makeSearch"
        >
          <b-input-group>
            <b-input-group-text @click="queryMake = ''" slot="append">
              <strong class="text-info">↺</strong>
            </b-input-group-text>
            <b-form-input id="makeSearch" v-model.trim="queryMake" placeholder="e.g. Ford"/>
          </b-input-group>
          <slot name="description">
            <label for="makeTags">Quick Find:</label>
            <b-badge v-for="tag in makes" @click="queryMake = tag" id="makeTags" pill variant="light" href="#" :key="tag">{{ tag }}</b-badge>
          </slot>
        </b-form-group>
      </b-col>
      <b-col sm="12" md="6">
        <b-form-group
            id="formModelSearch"
            label="Search by Model:"
            label-for="modelSearch"
        >
          <b-input-group>
            <b-input-group-text @click="queryModel = ''" slot="append">
              <strong class="text-info">↺</strong>
            </b-input-group-text>
            <b-form-input id="modelSearch" v-model.trim="queryModel" placeholder="e.g. Fiesta"/>
          </b-input-group>
          <slot name="description">
            <label for="modelTags">Quick Find:</label>
            <b-badge v-for="tag in models" @click="queryModel = tag" id="modelTags" pill variant="light" href="#" :key="tag">{{ tag }}</b-badge>
          </slot>
        </b-form-group>
      </b-col>
    </b-row>
    
    <b-row v-if="!searchVehicles.length">
      <b-col class="text-center">
        <b-alert show variant="warning">
          Sorry, none of those here today, <a href="#" class="alert-link" @click="resetSearch">restart your search</a>.
        </b-alert>
      </b-col>
    </b-row>

    <b-row v-else no-gutters>
      <car-card v-for="vehicle in searchVehicles" :vehicle="vehicle" :key="vehicle.registration"/>
    </b-row>
    
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
      return [...new Set(this.allVehicles.map(carMakes => carMakes.vehicleCapDetails.presentationMake))]
    },
    models () {
      if (this.activeQuery === 'make') {
        const vehiclesByMake = this.allVehicles.filter(index => {
          const regex = new RegExp(this.queryMake, 'gi')
          return index.vehicleCapDetails.presentationMake.match(regex)
        })
        return [...new Set(vehiclesByMake.map(carMakes => carMakes.vehicleCapDetails.presentationRange))]
      }
      return [...new Set(this.searchVehicles.map(carMakes => carMakes.vehicleCapDetails.presentationRange))]
    }
  },
  methods: {
    resetSearch () {
      this.queryMake = ''
      this.queryModel = ''
    }
  },
  components: { carCard },
  mixins: [ loadDatabase ]
}
</script>

<style>
</style>