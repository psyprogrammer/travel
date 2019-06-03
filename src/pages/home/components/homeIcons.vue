<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon-panel" v-for="item in page" :key="item.id">
                <div class="img-panel">
                    <img class="image" :src="item.imgUrl">
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => { //  遍历iconList
        const page = Math.floor(index / 8) //  决定iconList中的每个元素属于第几页
        if (!pages[page]) { //  如果第page页没有内容
          pages[page] = [] // 第page页就是一个新的空数组
        }
        pages[page].push(item) // 将第page页放进此次遍历中的iconList子元素
      })
      return pages // [[1,2,3,4,5,6,7,8],[9]]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .wrapper
    margin-top: .3rem
  .wrapper >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 50%
    touch-action: none
  .icon-panel
    position: relative
    width: 25%
    height: 0
    padding-bottom: 25%
    overflow: hidden
    float: left
    .img-panel
      height: 60%
      width: 60%
      margin: 0 auto
      .image
        width: 100%
    .icon-desc
      position: absolute
      left: 0
      bottom: 0
      height: 30%
      width: 100%
      text-align: center
      font-size: 0.45rem
      ellipsis()
</style>
