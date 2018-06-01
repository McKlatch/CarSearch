export const loadDatabase = {
  data () {
    return {
      allVehicles: [],
      vehicle: ''
    }
  },
  created () {
    fetch('/static/db.json')
    .then(blob => blob.json())
    .then(json => {
      // Fix for typo in database
      json.vehicles.map(item => {
        if ('displayImages' in item) {
          const mem = item['displayImages']
          delete item['displayImages']
          item['displayImage'] = mem
        }
      })
      this.allVehicles = json.vehicles
      if (this.$route.params.reg) {
        this.vehicle = this.allVehicles.find(obj => obj.registration === this.$route.params.reg)
      } else this.vehicle = ''
    })
  }
}
