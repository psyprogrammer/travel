<template>
  <div class="wrapper">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-baseinfo></detail-baseinfo>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/Header'
import detailBaseinfo from './components/Baseinfo'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailBaseinfo,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getData () {
      axios.get('/api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res && res.ret) {
        let data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>


<style lang="stylus" scoped>
  .wrapper
    background: #eee
    .content
      height: 50rem
</style>
