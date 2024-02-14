<template>
  <div>
    <h3>상세페이지</h3>
    <h5>{{posts[$route.params.id].title}}</h5>
    <p>{{posts[$route.params.id].content}}</p>
    <p>작성일시 : {{posts[$route.params.id].date}}</p>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'detailComponent',
  props: {
    posts : Array
  },
}
</script>

<style></style>
