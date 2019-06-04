<template>
  <ul class="alphabet">
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .alphabet
    width: .4rem
    position: absolute
    right: .1rem
    top: 1.57rem
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    li
      text-align: center
      line-height: .35rem
      color: $bgColor
      font-weight: bold
      font-size: .3rem
</style>
