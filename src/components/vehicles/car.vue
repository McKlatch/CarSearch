<!-- Data is passed into here from the parent component -->
<template>
  <b-col lg="3" md="4" sm="6">
    <b-card :title="`${make} ${model}`"
          :img-src="imageURL"
          :img-alt="`${make} ${model}`"
          img-top
          :border-variant="hover ? 'primary' : 'default'"
          :bg-variant="hover ? 'light' : 'default'"
          tag="article"
          @click="$router.push(`/${vehicle.registration}`)"
          @mouseenter="hover = true"
          @mouseleave="hover = false">
    <div class="card-text">
      <!-- 'Attentiongrabber' not shown if not present -->
      <span v-if="vehicle.attentionGrabber" class="font-weight-bold text-primary">{{ vehicle.attentionGrabber }}</span>
      <span class="font-weight-bold">{{ vehicle.minimumMonthlyPayment | currency }}pm</span> or {{ vehicle.vehiclePrice.salePrice | currency }}
    </div>
  </b-card>
</b-col>
</template>

<script>
export default {
  props: ['vehicle'],
  data () {
    return {
      hover: false
    }
  },
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