<template>
  <b-col lg="3" md="4" sm="6">
    <b-card :title="`${make} ${model}`"
          :img-src="imageURL"
          :img-alt="`${make} ${model}`"
          img-top
          tag="article"
          @click="$router.push(`/${vehicle.registration}`)">
    <div class="card-text">
      <span v-if="vehicle.attentionGrabber" class="font-weight-bold text-primary">{{ vehicle.attentionGrabber }}</span>
      <span class="font-weight-bold">{{ vehicle.minimumMonthlyPayment | currency }}pm</span> or {{ vehicle.vehiclePrice.salePrice | currency }}
    </div>
  </b-card>
</b-col>
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