<template>
  <div class="wrapper">
    <div class="header">
      <span class="heart iconfont">&#xe602;</span>
      周末去哪儿
      </div>
    <div class="like-item border-bottom">
      <div class="img-panel">
        <img class="image" src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg">
      </div>
      <div class="main-info">
        <p class="title">故宫</p>
        <p class="description">德智体美劳全面发展的亲子日，这些地方该去看看…</p>
      </div>
    </div>
    <div class="like-item border-bottom">
      <div class="img-panel">
        <img class="image" src="http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg">
      </div>
      <div class="main-info">
        <p class="title">故宫</p>
        <p class="description">世界五大宫之首，穿越与您近在咫尺</p>
      </div>
    </div>
    <div class="like-item border-bottom">
      <div class="img-panel">
        <img class="image" src="http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg">
      </div>
      <div class="main-info">
        <p class="title">故宫</p>
        <p class="description">数百年的宫廷庙宇，至今依旧威严霸气</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend'
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
    height: 5rem
    margin-left: .2rem
    overflow: hidden
    .img-panel
      width: 100%
      height: 0
      overflow: hidden
      padding-bottom: 33.9%
      .image
        width: 100%
    .main-info
      .title
        font-size: .42rem
        font-weight: bold
        line-height: .4rem
        margin-top: .2rem
      .description
        line-height: .4rem
        font-size: .3rem
</style>
