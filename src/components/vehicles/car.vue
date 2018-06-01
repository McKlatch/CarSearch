<template>
  <b-link :to="`/${vehicle.registration}`">
    <img :src="imageURL" :alt="`${make} ${model}`">
    <h3>
      {{ make }} {{ model }}
    </h3>
    <h5>
      {{ vehicle.vehiclePrice.salePrice | currency }}
    </h5>
  </b-link>
</template>

<script>
export default {
  props: ['vehicle'],
  computed: {
    make () { return this.vehicle.vehicleCapDetails.presentationMake },
    model () { return this.vehicle.vehicleCapDetails.presentationRange },
    imageURL () { return this.vehicle.displayImage.small }
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