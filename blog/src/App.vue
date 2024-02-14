<template>
  <Navbar />
  <div class="mt-4">
    <router-view :posts="postsData"></router-view>
  </div>

  <!-- <ListVue :posts="postsData" /> -->
</template>

<script>
import Navbar from './components/NavBar.vue'
// import ListVue from './components/List.vue'
import postsData from './assets/data.js'

export default {
  name: 'App',
  components: {
    Navbar,
    // ListVue,
  },
  data() {
    return {
      postsData : postsData,
    }
  },
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
