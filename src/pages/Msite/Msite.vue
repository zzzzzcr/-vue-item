<template>
  <div class='container'>
    <div class='header'>
        <h1>网易严选</h1>
        <mt-search class='main-input' :value.sync="value" placeholder="搜索商品，共28305款好物"></mt-search>
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
    <div class='swiperContainer'>
        <mt-swipe :auto="4000">
          <mt-swipe-item>
              <img src="../../total images/ia_100000003.webp">
          </mt-swipe-item>          
        </mt-swipe>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Search.name, Search);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name:'Msite'
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
    justify-content center
    align-items center
    .nav li
      float left 
      height 15px
      line-height 15px      
      .nav a
        display block
        text-decoration none 
      .nav a :hover
        background-color red
    .swiperContainer
      width 100%
      height 100%
      .mint-swipe
        width 100%
        height 100%
        .mint-swipe-item
          width 100%
          height 100%
          img 
            width 100%
            height 150px
        
</style>
