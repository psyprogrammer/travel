<template>
  <div class="wrapper">
    <detail-banner></detail-banner>
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
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票--某一连锁店销售'
          }]
        },{
          title: '成人五馆联票'
        }]
      },{
        title: '儿童票'
      },{
        title: '老年票'
      },{
        title: '特惠票'
      },]
    }
  }
}
</script>


<style lang="stylus" scoped>
  .wrapper
    background: #eee
    .content
      height: 50rem
</style>
