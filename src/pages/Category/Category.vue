<template>
  <div>
    <div>
    <mt-search
      placeholder="搜索,共29019款好物">
    </mt-search>
    </div>
    <br/>    
    <ul class='left-nav'>
        <li>618专区</li>
        <li>爆品专区</li>
        <li>新品专区</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>严选全球</li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
export default {
};
</script>
<style lang="stylus">
.mint-searchbar-inner/deep/ .mint-searchbar-core
  width 100%
  height 25px
  text-align center
.left-nav
  width 150px
  li
    width 150px
    font-size 18px
    height 45px
</style>