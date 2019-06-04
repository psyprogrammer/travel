<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="area">
        <h2 class="title border-topbottom">我的位置</h2>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <h2 class="title border-topbottom">热门城市</h2>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <h2 class="title border-topbottom">A</h2>
        <ul class="item-list">
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
        </ul>
      </div>
      <div class="area">
        <h2 class="title border-topbottom">B</h2>
        <ul class="item-list">
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
        </ul>
      </div>
      <div class="area">
        <h2 class="title border-topbottom">C</h2>
        <ul class="item-list">
          <li class="item border-bottom">成都</li>
          <li class="item border-bottom">成都</li>
          <li class="item border-bottom">成都</li>
          <li class="item border-bottom">成都</li>
          <li class="item border-bottom">成都</li>
          <li class="item border-bottom">成都</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .wrapper
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      line-height: .5rem
      background: #eee
      padding-left: .2rem
      color:#666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        width: 33.3%
        float: left
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
