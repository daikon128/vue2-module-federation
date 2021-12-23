<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Vue3Button/>
</template>

<script>
import Vue3Button from './components/Vue3Button.vue'

export default {
  name: 'App',
  components: {
    Vue3Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
