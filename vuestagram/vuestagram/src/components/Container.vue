<template>
  <div>
    <Post 
      :peed="item"
      v-for="item in peeds"
      :key="item"
    />

  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "ContainerComponent",
  props : {
    peeds : Array,
  },
  components: {
    Post
  }
};
</script>

<style>
</style>