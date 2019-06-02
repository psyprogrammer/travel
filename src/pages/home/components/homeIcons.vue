<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon-panel" v-for="item in page" :key="item.id">
                <div class="img-panel">
                    <img class="image" :src="item.imgSrc">
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
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {id: '001', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '动植物园'},
        {id: '002', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png', desc: '一日游'},
        {id: '003', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', desc: '动植物园'},
        {id: '004', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png', desc: '故宫'},
        {id: '005', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', desc: '北京必游'},
        {id: '006', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png', desc: '爬长城'},
        {id: '007', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '动植物园'},
        {id: '008', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '限时抢购'},
        {id: '009', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '北京必游'}
      ]
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
      height: 70%
      width: 70%
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
