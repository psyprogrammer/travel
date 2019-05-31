<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/游玩/酒店
        </div>
    <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe600;</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
  .header
    display:flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      background: #fff
      height: .64rem
      line-height: .64rem
      margin-top: .11rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margin-left: -0.05rem

</style>
