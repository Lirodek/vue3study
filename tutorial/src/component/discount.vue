<template>
    <div class="discount">
        <h4>지금 결제하면 {{discount2}}% 할인</h4>
    </div>
</template>

<script>
export default {
  name: 'discountComponent',
  data() {
    return {
      discount: 30,
      intervalId: null,
      repeatCount: 0,
    }
  },
  props: {
    discount2 : Number,
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.$emit('discountMinus')
      this.repeatCount++
      if (this.repeatCount == 10)
        clearInterval(this.intervalId)

    }, 1000)
  }
}
</script>

<style></style>
