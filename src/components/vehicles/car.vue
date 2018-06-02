<template>
    <b-card :title="`${make} ${model}`"
          :img-src="imageURL"
          :img-alt="`${make} ${model}`"
          img-top
          tag="article"
          @click="$router.push(`/${vehicle.registration}`)">
    <p class="card-text">
      {{ vehicle.vehiclePrice.salePrice | currency }}
    </p>
    <b-button variant="primary">More...</b-button>
  </b-card>
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