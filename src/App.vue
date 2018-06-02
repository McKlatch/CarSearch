<template>
  <b-container id="app">
    <h1 @click="$router.push('/')">CarSearch</h1>
    <keep-alive exclude="carDetails">
      <router-view/>
    </keep-alive>
  </b-container>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
