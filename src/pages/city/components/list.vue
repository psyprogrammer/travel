<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="area">
        <h2 class="title border-topbottom">我的位置</h2>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <h2 class="title border-topbottom">热门城市</h2>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <h2 class="title border-topbottom">{{key}}</h2>
        <ul class="item-list">
          <li class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
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
