<template>
  <div>
    <h2>{{ msg }}</h2>
    <car-list/>
  </div>
</template>

<script>
import carList from './vehicles/List.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Let\'s find the car you\'re looking for:'
    }
  },
  components: { carList }
}
</script>

<style>
</style>
