<template>
  <div class="wrapper">
    <span>城市选择</span>
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .wrapper
    position: relative
    background: $bgColor
    width: 100%
    height: $headerHeight
    line-height: $headerHeight
    font-size: .4rem
    color: #fff
    text-align: center
    .back-icon
      position: absolute
      left: .2rem
      top: 0
      font-size: .4rem
      color: #fff
</style>
