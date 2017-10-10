<template>
  <div>
    <div>
      <swiper></swiper>
    </div>
  </div>
</template>

<script>
  import swiper from './children/swiper'
  export default {
    name: 'startIndex',
    components: {
      swiper
    },
    data () {
      return {
        msg: '。。。'
      }
    },
    methods: {
      setNewsApi: function () {
        this.$http('http://g.cn', 'type=top&key=123456')
          .then(res => {
            console.log(res)
          })
      }
    },
    created () {
      this.setNewsApi()
    }
  }
</script>

<style scoped>

</style>
