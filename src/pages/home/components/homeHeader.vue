<template>
  <div class="header">
    <router-link to="/demo">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    </router-link>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/游玩/酒店
        </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
  .header
    display:flex
    line-height: $headerHeight
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
      min-width: 1.24rem
      padding: 0 .1rem
      float: right
      text-align: center
      font-size: .3rem
      color: #fff
      .arrow-icon
        font-size: .22rem
        margin-left: -0.05rem
</style>
