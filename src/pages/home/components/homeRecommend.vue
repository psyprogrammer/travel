<template>
  <div class="wrapper">
    <div class="header">
      <span class="heart iconfont">&#xe602;</span>
      猜你喜欢
      </div>
    <div class="like-item border-bottom">
      <div class="img-panel">
        <img class="image" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg">
      </div>
      <div class="main-info">
        <p class="title">故宫</p>
        <div class="star iconfont">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
        <div class="price">
          <span class="rmb iconfont">&#xe603;</span>
          <span class="num">60</span>
          <span class="qi">起</span>
        </div>
        <p class="description">世界五大宫之首，穿越与您近在咫尺</p>
      </div>
      <span class="location">东城区</span>
    </div>
    <div class="like-item border-bottom">
      <div class="img-panel">
        <img class="image" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg">
      </div>
      <div class="main-info">
        <p class="title">故宫</p>
        <div class="star iconfont">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
        <div class="price">
          <span class="rmb iconfont">&#xe603;</span>
          <span class="num">60</span>
          <span class="qi">起</span>
        </div>
        <p class="description">世界五大宫之首，穿越与您近在咫尺</p>
      </div>
      <span class="location">东城区</span>
    </div>
    <div class="like-item border-bottom">
      <div class="img-panel">
        <img class="image" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg">
      </div>
      <div class="main-info">
        <p class="title">故宫</p>
        <div class="star iconfont">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
        <div class="price">
          <span class="rmb iconfont">&#xe603;</span>
          <span class="num">60</span>
          <span class="qi">起</span>
        </div>
        <p class="description">世界五大宫之首，穿越与您近在咫尺</p>
      </div>
      <span class="location">东城区</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
  .header
    background: #eee
    height: .8rem
    line-height: .8rem
    font-size: .3rem
    padding-left: .3rem
    .heart
      color: red
  .like-item
    display: flex
    height: 3rem
    margin-left: .2rem
    overflow: hidden
    .img-panel
      width: 2.1rem
      height: 2.1rem
      padding-top: .15rem
      .image
        width: 100%
    .main-info
      flex: 1
      padding: .3rem
      position: relative
      .title
        font-size: .4rem
        line-height: .3rem
        margin-top: .2rem
      .star
        line-height: .3rem
        margin-top: .2rem
        color: #ffb436
      .price
        line-height: .3rem
        margin-top: .2rem
        .rmb
          font-size:.4rem
          color: #ffb436
        .num
          margin-left: -0.15rem
          font-size: .5rem
          color: #f55
        .qi
          font-size: .25rem
          margin-left: -0.05rem
      .description
        font-size: .3rem
        position: absolute
        bottom: .3rem
        color: red
    .location
      font-size: .3rem
      line-height: 3rem
      text-indent: -1rem
</style>
