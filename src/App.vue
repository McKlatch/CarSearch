<template>
  <div id="app">
    <h1 @click="$router.push('/')">CarSearch</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
