<template>

  <Modal @closeModal="closeModal()" :modalStat="modalStat" :isModalOpen="isModalOpen"/>
  
  <div class="menu">
    <a v-for="menu in menues" :key="menu">{{menu}}</a>
  </div>

  <Discount />

  <Card @openModal="openModal($event); " :oneRoom="item" v-for="item in oneRooms" :key="item"/>

</template>

<script>
import oneRoomData from './assets/datas.js'
import Discount from './component/discount.vue'
import Modal from './component/Modal.vue'
import Card from './component/Card.vue'

class Product{
  constructor(title, price, img){
    this.title = title;
    this.price = price;
    this.img = img;
    this.report = 0;
  }
}
let productArray = new Array()
productArray[0] = new Product('역삼동원룸', 70, 'room0')
productArray[1] = new Product('천호동원룸', 30, 'room1')
productArray[2] = new Product('마포구원룸', 50, 'room2')

let modalStat = new Object();

export default {
  name: 'App',
  data(){
    return{
      oneRooms : oneRoomData,
      isModalOpen : false,
      modalStat : modalStat,
      productArray : productArray,
      menues : ['Home', 'Shop', 'About'],
      
    }
  },
  methods:{
    openModal(item){
      modalStat.title = item.title
      modalStat.img = item.image
      modalStat.cont = item.content
      modalStat.price= item.price
      this.isModalOpen=true

    },
    closeModal(){
      this.isModalOpen = false;
    },
    increase(item){
      item.report++
    },
    getImageSource(imageName) {
      return imageName
    },
  },
  components: {
    Discount,
    Modal,
    Card,


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

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding-left: 10px;
}

.room-img{
  width: 100%;
  margin-top: 40;
}

body{margin: 0;}

div{box-sizing: border-box;}

.discount {background: #eee; padding: 10px; margin: 10px; border-radius: 5px;}

.black-bg{
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding:20px;
}

.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
