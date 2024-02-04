<template>
    <div class="black-bg" v-if="isModalOpen == 1">
        <div class="white-bg">
            <h4>{{modalStat.title}}</h4>
            <img class="room-img" :src="modalStat.img" />
            <p>{{modalStat.cont}}</p>
            <input v-model.number="month" />
            <input v-model.number="month" type="range" min="1" max="12" />
            <p>{{ month }} 개월 선택함 {{ month * modalStat.price}} 원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'defailModalComponent',
    data(){
        return{
            month : 1,
        }
    },
    watch:{
      month(tester) {
        if (isNaN(tester)) {
          alert('문자는 입력할 수 없습니다.')
          this.month = 1
          return
        }
        if (tester == 2) {
          alert('우리는 2개월은 받지않습니다.')
          this.month = 1
          return
        }
        if (tester > 12) {
          alert('13개월이상 렌탈이 불가능합니다.')
          this.month = 12
        }

      },
    },
    props : {
        modalStat : Object,
        isModalOpen : Boolean,

    },
    methods: {

    },
}
</script>

<style></style>
