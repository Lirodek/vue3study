<template>
  <div>
    <img class="room-img" :src="oneRoom.image" alt="">
    <h4 @click="openModal(oneRoom)">{{ oneRoom.title }}</h4>
    <p>{{oneRoom.price}} 원</p>
  </div>
</template>

<script>
export default {
    name : "cardComponent",
    props : {
        oneRoom : Object,
    },
    methods : {
        openModal(item){
            this.$emit('openModal',item)
        }
    }
}
</script>

<style>

</style>