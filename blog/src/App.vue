<template>
  <Navbar />
  <SlideBanner />
</template>

<script>
import Navbar from './components/NavBar.vue'
import SlideBanner from './components/SlideBanner.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    SlideBanner,
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

}
</style>
