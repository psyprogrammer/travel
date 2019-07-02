<template>
  <div class="container">
    <div class="wrapper">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1707/a3/a3924161475dee37a3.img.jpg_600x330_67fe57ba.jpg" @click="ifshow">
      <div class="desc">
        <div class="desc-info">青岛海昌极地海洋世界(AAAA景区)</div>
        <div class="desc-number">
          <span class="iconfont img-icon">&#xeb23;</span>
          123
        </div>
      </div>
    </div>
    <common-gallary class="gallary" :imgs="imgs" v-show="showGallary" @close="ifshow"></common-gallary>
  </div>
</template>

<script>
import commonGallary from 'commons/gallary/Gallary'
export default {
  name: 'detailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1901/7e/7e98eec1b8f27b6ea3.water.jpg_r_800x800_c24adf2a.jpg','http://img1.qunarzz.com/sight/p0/1707/a3/a3924161475dee37a3.img.jpg_r_800x800_1a4dad49.jpg']
    }
  },
  methods: {
    ifshow () {
      this.showGallary = !this.showGallary
    }
  },
  components: {
    commonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .gallary
    z-index: 99
  .wrapper
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .desc
      height: .6rem
      line-height: .6rem
      display: flex
      position: absolute
      bottom: 0
      left: 0
      right: 0
      padding: 0 .15rem
      padding-bottom: .16rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.5))
      .desc-info
        flex: 1
        font-size: .36rem
      .desc-number
        height: .4rem
        line-height: .4rem
        padding: 0 .3rem
        margin-top: .08rem
        background: rgba(0, 0, 0, 0.4)
        border-radius: .2rem
        font-size: .25rem
        .img-icon
          font-size: .34rem
</style>
