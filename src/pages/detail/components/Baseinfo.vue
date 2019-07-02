<template>
  <div>
    <div class="map-baseinfo">
      <div class="map-flexbox">
        <div class="map-left border-right">
          <div class="map-left-title">
            <span>5.0</span>
            <span>分</span>
            <span>超赞</span>
          </div>
          <div class="map-left-desc">
            <span>71495条评论</span>
            <span>20条攻略</span>
            <span class="iconfont go-icon">&#xe64a;</span>
          </div>
        </div>
        <div class="map-right">
          <div class="map-right-title">
            <span>景点简介</span>
          </div>
          <span class="map-right-desc">开放时间、贴士</span>
          <span class="iconfont go-icon">&#xe64a;</span>
        </div>
      </div>
      <div class="map-address border-top">
        <span class="map-address-info">北京市朝阳区东四环小武基北路</span>
        <span class="iconfont map-icon">&#xe649;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Baseinfo'
}
</script>

<style lang="stylus" scoped>
  .map-baseinfo >>> .go-icon
      position: absolute
      top: .3rem
      right: .2rem
      color: #9e9e9e
      font-size: .4rem !important
  .map-baseinfo
    position: relative
    overflow: hidden
    padding: .1rem .2rem 0 .2rem
    background: #fff
    border-radius: .1rem .1rem 0 0
    margin-top: -.1rem
    margin-bottom: .3rem
    .map-flexbox
      overflow: hidden
      display: flex
      height: 1rem
      padding-top: .1rem
      padding-bottom: .2rem
      .map-left
        width: 50%
        height: 100%
        .map-left-title
          span:first-child
            font-size: .44rem
            color: #ff8300
            line-height: .44rem
          span:nth-child(2)
            font-size: .28rem
            color: #ff8300
            line-height: .48rem
          span:last-child
            font-size: .28rem
            color: #ff8300
            line-height: .48rem
            margin-left: .2rem
        .map-left-desc
          span:first-child
            font-size: .24rem
            color: #9e9e9e
            line-height: .32rem
            margin-right: .2rem
          span:last-child
            font-size: .24rem
            color: #9e9e9e
            line-height: .32rem
            margin-right: .2rem
      .map-right
        width: 50%
        .map-right-title
          span
            font-size: .28rem
            color: #212121
            line-height: .48rem
            padding-left: .3rem
        .map-right-desc
          color: #9e9e9e
          font-size: .24rem
          padding-left: .3rem

    .map-address
      width: 100%
      height: 0.8rem
      line-height: .8rem


</style>
