<template>
	<div>
		<img :src="vehicle.displayImage.medium" :alt="`${make} ${model}`">
		<h1>{{ make }} {{ model }}</h1>
		<h3>{{ vehicle.minimumMonthlyPayment | currency }}pm or {{ vehicle.vehiclePrice.salePrice | currency }}</h3>
	</div>
</template>

<script>
export default {
  data () {
    return {
      vehicle: {}
    }
  },
  computed: {
    make () { return this.vehicle.vehicleCapDetails.presentationMake },
    model () { return this.vehicle.vehicleCapDetails.presentationRange }
  },
  created () {
    fetch('/static/db.json')
    .then(blob => blob.json())
    .then(json => {
      this.vehicle = json.vehicles.find(obj => obj.registration === this.$route.params.reg)
    })
  },
  filters: {
    currency (val) {
      return val.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 })
    }
  }
}
</script>

<style>
</style>