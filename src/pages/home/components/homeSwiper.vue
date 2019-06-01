<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item of list" :key='item.id'>
            <img class="swiper-img" :src="item.srcUrl" >
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {id: 1, srcUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/69d69be30fa6d86f6428e936f1afaf17.jpg_890x330_6bf3a9f8.jpg'},
        {id: 2, srcUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/f57dd6499b548c6746bf02fb37331fb5.jpg_890x330_fa6053e8.jpg'},
        {id: 3, srcUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/8acf83e2b188076a93c1c6b705dca03c.jpg_890x330_98799450.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 35%
    background: #ccc
    .swiper-img
        width: 100%
</style>
