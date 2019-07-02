<template>
  <div class="container">
    <div class="wrapper">
      <img class="banner-img" :src="bannerImg" @click="ifshow">
      <div class="desc">
        <div class="desc-info">{{this.sightName}}</div>
        <div class="desc-number">
          <span class="iconfont img-icon">&#xeb23;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary class="gallary" :imgs="gallaryImgs" v-show="showGallary" @close="ifshow"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import commonGallary from 'commons/gallary/Gallary'
import fadeAnimation from 'commons/fade/fadeAnimation'
export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    ifshow () {
      this.showGallary = !this.showGallary
    }
  },
  components: {
    commonGallary,
    fadeAnimation
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
