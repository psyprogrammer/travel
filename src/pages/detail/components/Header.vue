<template>
  <div class="container">
    <router-link tag="div" class="back" to="/" v-show="ifshow">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="wrapper" v-show="!ifshow" :style="opacityStyle">
      <span>青岛海昌极地海洋世界</span>
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      ifshow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 52) {
        this.ifshow = false
        let opacity = top / 120
        opacity = (opacity > 1) ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.ifshow = true
      }
    }
  },
  activated () {  // 当该组件激活时调用
    window.addEventListener("scroll", this.handleScroll)
  },
  deactivated () {  // 当该组件停用时调用 （避免该方法污染其他组件）
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .container
    .back
      position: absolute
      width: .8rem
      height: .8rem
      line-height: .8rem
      background: rgba(0,0,0,0.4)
      border-radius: 50%
      top: .2rem
      left: .2rem
      .back-icon
        color: #ffffff
        font-size: .4rem
        text-align: center
    .wrapper
      position: fixed
      top: 0
      left: 0
      background: $bgColor
      width: 100%
      height: $headerHeight
      line-height: $headerHeight
      font-size: .35rem
      color: #fff
      text-align: center
      .back-icon
        position: absolute
        left: .2rem
        top: 0
        font-size: .4rem
        color: #fff
    .content
      height: 50rem
</style>
