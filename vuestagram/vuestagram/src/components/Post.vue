<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{peed.name}}</span>
    </div>
    <div class="post-body" :style="background-image : url(peed.postImage)"></div>
    <div class="post-content">
      <p>{{peed.likes}} Likes</p>
      <p>
        <strong>{{peed.name}}</strong> {{peed.content}}
      </p>
      <p class="date">{{peed.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    peed : Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>