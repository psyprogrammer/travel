<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-Recommend></home-Recommend>
  </div>
</template>

<script>
import HomeHeader from './components/homeHeader'
import HomeSwiper from './components/homeSwiper'
import HomeIcons from './components/homeIcons'
import HomeRecommend from './components/homeRecommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style>
</style>
