<template>
  <div>
    <h3>
      {{ car.vehicleCapDetails.presentationMake }}
      {{ car.vehicleCapDetails.presentationRange }}
    </h3>
    <h5>
      {{ car.vehiclePrice.salePrice | currency }}
    </h5>
  </div>
</template>

<script>
export default {
  props: ['car'],
  filters: {
    currency (val) {
      return val.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 })
    }
  }
}
</script>

<style>
</style>