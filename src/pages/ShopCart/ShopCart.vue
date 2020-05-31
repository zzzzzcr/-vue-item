<template>
  <div>
    <div class='firstTitle'>
      <h1>购物车</h1>
      <h2>领卷</h2>
    </div>
    <div class='secondTitle'>
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满99元免邮费</span>
    </div>
    <div class='thirdTitle'>
        <img src="../../total images/购物车.png" alt="">
    </div>
    <div class='fifthTitle'>
      <button class='btn1'>登录</button>
    </div>

  </div>
</template>
<script>
export default {
  name:'ShopCart'
};
</script>
<style lang="stylus">
.firstTitle
  height 40px
  width 100%
  h1
    float left 
  h2
    float right
    color red
.secondTitle
  width 100%
  height 50px
  font-size 10px
  background-color gray
  text-align center
  line-height 50px
  display flex
  justify-content space-between
.thirdTitle
  display flex
  justify-content center
  align-items center
.fifthTitle
  margin 0 auto
  width 300px
  .btn1
    width 300px
    height 70px
    background-color red
    color white
    font-size 20px
</style>