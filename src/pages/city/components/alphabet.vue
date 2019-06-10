<template>
  <ul class="alphabet">
    <li v-for="item in letters" :key="item.id" @click="handleLetterClick" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend" :ref="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchstart () {
      this.touchStatus = true
    },
    handleTouchmove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchend () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .alphabet
    background: red
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
      line-height: .4rem
      color: $bgColor
      font-weight: bold
      font-size: .3rem
</style>
