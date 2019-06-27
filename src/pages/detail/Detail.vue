<template>
  <div class="wrapper">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>


<style lang="stylus" scoped>

</style>
