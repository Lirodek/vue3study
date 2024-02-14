<template>
  <div v-for="post in posts" :key="post">
    <h5 @click="$router.push('/detail/'+post.number)">{{post.title}}</h5>
    <p>{{post.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    posts: Array
  },

}
</script>

<style></style>
