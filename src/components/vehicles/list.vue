<template>
  <div>
    <p v-for="vehicle in vehicles">
      {{ vehicle.vehicleCapDetails.presentationMake }}
      {{ vehicle.vehicleCapDetails.presentationRange }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vehicles: {}
    }
  },
  created () {
    fetch('/static/db.json')
    .then(blob => blob.json())
    .then(json => {
      this.vehicles = json.vehicles
    })
  }
}
</script>

<style>
</style>