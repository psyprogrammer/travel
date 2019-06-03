<template>
  <div class="wrapper">
    <div class="header">
      <span class="heart iconfont">&#xe602;</span>
      周末去哪儿
      </div>
    <div class="like-item border-bottom" v-for="item in weekendList" :key="item.id">
      <div class="img-panel">
        <img class="image" :src="item.imgUrl">
      </div>
      <div class="main-info">
        <p class="title">{{item.title}}</p>
        <p class="description">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
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
