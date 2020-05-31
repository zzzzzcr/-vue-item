<template>
  <div class='container'>
    <div class='header'>
        <h1>网易严选</h1>
        <mt-search class='main-input' :value.sync="value" placeholder="搜索商品，共28305款好物"></mt-search>
        <button>登录</button>
    </div>
    <ul class='nav'>
      <li>
        <a href="">推荐</a>
      </li>
      <li>
        <a href="">居家生活</a>
      </li>
      <li>
        <a href="">服饰鞋包</a>
      </li>
      <li>
        <a href="">美食酒水</a>
      </li>
    </ul>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../total images/ia_100000003.webp" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../total images/ia_100000004.webp" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../total images/ia_100000005.webp" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../total images/ia_100000006.webp" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../total images/ia_100000007.webp" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    <div class='firstLine'>
        <h3>
          <img src="../../total images/ia_100000055.png" alt="">
          网易自营品牌
        </h3>
        <h3>
          <img src="../../total images/ia_100000056.png" alt="">
          网易自营品牌
        </h3>
        <h3>
          <img src="../../total images/ia_100000057.png" alt="">
          48小时快速退款
        </h3>
    </div>
    <div class='second-line'>
        <ul>
          <li>
            <img src="../../total images/ia_100000011.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="../../total images/ia_100000012.png" alt="">
            <span>居家生活</span>
          </li>
          <li>
            <img src="../../total images/ia_100000013.png" alt="">
            <span>服饰鞋包</span>
          </li>
          <li>
            <img src="../../total images/ia_100000014.png" alt="">
            <span>美食酒水</span>
          </li>
          <li>
            <img src="../../total images/ia_100000015.png" alt="">
            <span>个护清洁</span>
          </li>
          <li>
            <img src="../../total images/ia_100000016.png" alt="">
            <span>母婴亲子</span>
          </li>
          <li>
            <img src="../../total images/ia_100000017.png" alt="">
            <span>运动旅行</span>
          </li>
          <li>
            <img src="../../total images/ia_100000018.png" alt="">
            <span>数码家电</span>
          </li>
          <li>
            <img src="../../total images/ia_100000019.png" alt="">
            <span>全球特色</span>
          </li>
          <li>
            <img src="../../total images/ia_100000020.gif" alt="">
            <span>好货抄底</span>
          </li>
        </ul>
    </div>
    <div class='thirdLine'>
        <img src="../../total images/ia_100000059.webp" alt="">
    </div>
    <div class='forthLine'>
      <img src="../../total images/ia_100000060.webp" alt="">
    </div>
    <div class='fiveLine'>
        <img src="../../total images/ia_100000061.webp" alt="">
        <img src="../../total images/ia_100000062.webp" alt="">
        <img src="../../total images/ia_100000063.webp" alt=""> 
    </div>
    <div class='sixLine'>
        <img class='number1' src="../../total images/ia_100000583.png" alt="">
        <img class='number2' src="../../total images/ia_100000584.webp" alt="">
        <img class='number3' src="../../total images/ia_100000585.webp" alt="">
     </div>
    <div class='sevenLine'>
      <div class='firstPart'>
        <img src="../../total images/ia_100000587.webp" alt="">
        <img src="../../total images/ia_100000588.webp" alt="">
      </div>
      <div class='secondPart'>
        <ul>
          <li>
            <img src="../../total images/ia_100000587.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000588.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000587.webp" alt="">
          </li>
           <li>
            <img src="../../total images/ia_100000588.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000587.webp" alt="">
          </li> 
          <li>
            <img src="../../total images/ia_100000588.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000587.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000587.webp" alt="">
          </li>
        </ul>
      </div>        
     </div>
    <div class='eightLine'>
       <img src="../../total images/ia_100000602.webp" alt="">  
    </div>
    <div class='ninthLine'>
        <img src="../../total images/ia_100000606.webp" alt="">
        <img src="../../total images/ia_100000608.webp" alt="">
        <img src="../../total images/ia_100000609.webp" alt="">  
    </div>
    <div class='tenLine'>
        <ul>
          <li>
            <img src="../../total images/ia_100000606.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000608.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000609.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000611.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000612.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000611.webp" alt="">
          </li>        
        </ul>
    </div>
    <div class='elevenLine'>
      <ul>
          <li>
            <img src="../../total images/ia_100000606.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000608.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000609.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000611.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000612.webp" alt="">
          </li>
          <li>
            <img src="../../total images/ia_100000611.webp" alt="">
          </li>        
        </ul>
    </div>     
  </div>
</template>
<script>
import Vue from 'vue'
import { Search } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
Vue.component(Search.name, Search);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
  name:'Msite',
  mounted(){
    new Swiper ('.swiper-container', {
    
    loop: true, // 循环模式选项
    autoplay: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
   
    
    
  })      
  }
};
</script>
<style lang="stylus">
.container
  width 100%
  height 100%
  .header
    width 100%
    height 40px
    h1
      float left
      margin 5px
    .main-input
      float left
      margin 5px
  .nav
    width 100%
    display flex
    justify-content space-between
    align-items center    
    .nav li
      flex-grow 1
      float left 
      height 15px
      line-height 15px
      display flex
      justify-content center
      align-items center      
      .nav a
        display block
        text-decoration none
        text-align center
        display flex
        justify-content center
        align-items center  
      &:hover
        color red        
  .swiper-container
      width 100%
      height 200px
      img
        width 100%
        height 100%
  .firstLine
    width 100%
    height 40px
    justify-content space-between
    align-items center
    display flex
    h3
      float left
      img
        width 15px
        height 15px
  .second-line
    width 100%
    height 150px
    li
      width 20%
      height 60px
      text-align center
      align-items center
      float left
      img 
        width 100%
        height 100%
  .thirdLine
    width 100%
    height 120px
    img 
      width 100%
      height 100%
  .forthLine
    width 100%
    height 100px
    img 
      width 100%
      height 100%
  .fiveLine
    width 100%
    height 70px
    img
      width 33%
      height 100%
      float left
  .sixLine
    width 100%
    height 150px
    .number1
      width 50%
      height 150px
      background-color yellow
      float left 
    .number2
      width 50%
      height 75px
      background-color red
      float left
    .number3
      width 50%
      height 75px
      background-color blue
  .sevenLine
    width 100%
    .firstPart
      width 100%
      height 100px
      img
        width 50%
        height 100%
        float left
    .secondPart
      width 100%
      height 200px
      display flex
      li
        float left
        width 25%
        height 100px 
        img
          width 100%
          height 100%
          float left
  .eightLine
    width 100%
    height 200px
    img
      width 100%
      height 100%
  .ninthLine
    width 100%
    height 150px
    img
      width 33%
      height 100%
      float left
  .tenLine
    width 100%
    height 150px
    li
      float left
      width 33%
      height 75px
      img
        float left
        width 100%
        height 100%
  .elevenLine
    width 100%
    height 150px
    li
      float left
      width 33%
      height 75px
      img
        float left
        width 100%
        height 100%

</style>
