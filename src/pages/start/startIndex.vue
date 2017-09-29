<template>
  <div>
    <div>分支首次push</div>
  </div>
</template>

<script>
  export default {
    name: 'startIndex',
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
            this.newsListShow = res.articles
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
