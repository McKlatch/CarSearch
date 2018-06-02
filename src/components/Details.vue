<template>
	<div>
		<img :src="vehicle.displayImage.medium" :alt="`${make} ${model}`">
		<h1>{{ make }} {{ model }} {{ vehicle.year }}</h1>
		<h3>{{ vehicle.minimumMonthlyPayment | currency }}pm or {{ vehicle.vehiclePrice.salePrice | currency }}</h3>
    <p v-if="vehicle.autotraderDescription">{{ vehicle.autotraderDescription }}</p>
    <p v-if="vehicle.attentionGrabber">{{ vehicle.attentionGrabber }}</p>

    <b-row>
      <b-col>
    <b-table small stacked head-variant="light" :items="carInfo"></b-table>
  </b-col>
  <b-col>
    <b-list-group>
      <b-list-group-item v-for="feature in vehicle.topFeatures">{{ feature }}</b-list-group-item>
    </b-list-group>
  </b-col>
  <b-col>
    <b-table small stacked head-variant="light" :items="docInfo"></b-table>
    <b-card title="Inquire Now!"
          tag="article">
    <p class="card-text">
      {{ vehicle.watchersCount }} Other buyers are interested.
    </p>
  </b-card>
</b-col>
</b-row>
	</div>
</template>

<script>
import { loadDatabase } from './mixins/loadDatabase'

export default {
  name: 'carDetails',
  computed: {
    make () { return this.vehicle.vehicleCapDetails.presentationMake },
    model () { return this.vehicle.vehicleCapDetails.presentationRange },
    carInfo () {
      return [{
        '⛽': this.vehicle.fuel,
        '💺': this.vehicle.statistics.seats,
        '🚪': this.vehicle.doors,
        '🌀': this.vehicle.drivetrain,
        '⚙️': this.vehicle.transmission,
        '💨': this.vehicle.carbonEmission + ' g/km',
        '🔎': this.vehicle.displayColour || 'colour',
        '🚗': this.vehicle.vehicleCapDetails.bodyStyle,
        '⚖️': this.vehicle.vehicleCapDetails.engineSize + ' cc',
        '🔱': this.vehicle.statistics.enginePower + ' bhp',
        '📈': this.vehicle.statistics.mpg + ' mpg'
      }]
    },
    docInfo () {
      return [{
        'Insurance': this.vehicle.statistics.insuranceGroup,
        'Tax': this.vehicle.statistics.taxBand,
        'ServiceHistory': this.vehicle.serviceHistoryPresent ? '✔️' : '❌',
        'reg': this.vehicle.registration,
        'Milage': this.vehicle.mileage,
        '📍': this.vehicle.storeName
      }]
    }
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