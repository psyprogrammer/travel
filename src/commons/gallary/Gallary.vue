<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img class="gallary-img" :src="item" >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: 'fraction',
        observeParents: true, // 当父级DOM元素发生改变，轮播区域会自我刷新一次
        observer: true  // 当自己DOM元素发生改变，轮播区域会自我刷新一次
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    display: flex
    flex-direction: column
    justify-content: center
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #ffffff
        bottom: -.8rem
</style>
