<template>
	<div>
		<img :src="vehicle.displayImage.medium" :alt="`${make} ${model}`">
		<h1>{{ make }} {{ model }}</h1>
		<h3>{{ vehicle.minimumMonthlyPayment | currency }}pm or {{ vehicle.vehiclePrice.salePrice | currency }}</h3>
	</div>
</template>

<script>
import { loadDatabase } from './mixins/loadDatabase'

export default {
  name: 'details',
  computed: {
    make () { return this.vehicle.vehicleCapDetails.presentationMake },
    model () { return this.vehicle.vehicleCapDetails.presentationRange }
  },
  filters: {
    currency (val) {
      return val.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 })
    }
  },
  mixins: [ loadDatabase ]
}
</script>

<style>
</style>