<template>
<div>
  <div class="wrapper">
    <input type="text" class="searchBox" placeholder="输入城市或拼音" v-model="keyword">
  </div>
  <div class="search-result" ref="search" v-show="keyword">
    <ul>
      <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
      <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',// 输入
      list: [],// 搜索结果
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {click: true})
  },
  watch: {
    // 监控输入
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 没有输入值，则将结果列表清空
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        // i指的是城市首字母
        for (let i in this.cities) {
          // 遍历同一首字母的城市数组
          this.cities[i].forEach((value) => {
            // indexOf用来检索value里面有没有keyword，有，返回第一次检索到的位置；没有，返回-1
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .wrapper
    background: $bgColor
    height: .72rem
    padding: 0 .1rem
    .searchBox
      width: 100%
      height: .62rem
      text-align: center
      border-radius: .1rem
      box-sizing: border-box
      padding: 0 .2rem
  .search-result
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background: #eee
    .search-item
      line-height: .76rem
      padding-left: .2rem
      background: #fff
</style>
