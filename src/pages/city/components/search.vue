<template>
  <div class="wrapper">
    <input type="text" class="searchBox" placeholder="输入城市或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
