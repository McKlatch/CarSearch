<template>
  <div>
    <img :src="car.displayImage.small" :alt="`${make} ${model}`">
    <h3>
      {{ make }} {{ model }}
    </h3>
    <h5>
      {{ car.vehiclePrice.salePrice | currency }}
    </h5>
  </div>
</template>

<script>
export default {
  props: ['car'],
  computed: {
    make () { return this.car.vehicleCapDetails.presentationMake },
    model () { return this.car.vehicleCapDetails.presentationRange }
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