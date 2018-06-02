<template>
	<b-card :img-src="vehicle.displayImage.medium"
          :img-alt="`${make} ${model}`"
          img-top>
		<h1>{{ make }} {{ model }} <small>{{ vehicle.year }}</small></h1>
		<h3>{{ vehicle.minimumMonthlyPayment | currency }}pm <small>or</small> {{ vehicle.vehiclePrice.salePrice | currency }}</h3>
    <p v-if="vehicle.autotraderDescription">{{ vehicle.autotraderDescription }}</p>
    <p v-if="vehicle.attentionGrabber">{{ vehicle.attentionGrabber }}</p>

    <b-row>
      <b-col>
    <b-table small stacked head-variant="light" :items="carInfo"></b-table>
  </b-col>
  <b-col lg="4" md="6" sm="12">
    <b-list-group flush>
      <b-list-group-item v-for="(feature, i) in vehicle.topFeatures" :key="i">{{ feature }}</b-list-group-item>
    </b-list-group>
  </b-col>
  <b-col lg="4" md="6" sm="12">
    <b-table small stacked head-variant="light" :items="docInfo"></b-table>
    <b-card title="Inquire Now!"
          tag="article"
          bg-variant="primary">
    <p class="card-text">
      <strong v-if="vehicle.watchersCount < 1">
        Other buyers could be interested.
      </strong>
      <strong v-if="vehicle.watchersCount === 1">
        Another buyer is interested.
      </strong>
      <strong v-if="vehicle.watchersCount > 1">
        {{ vehicle.watchersCount }} Other buyers are interested.
      </strong>
    </p>
  </b-card>
</b-col lg="4" md="6" sm="12">
</b-row>
	</b-card>
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
        '💨': (this.vehicle.carbonEmission || 'unknown') + ' g/km',
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