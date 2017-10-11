<template>
  <div>
    <tabbar>
      <div class="foot-container">
        <div class="item" :class="{'item-active':selected}" @click="toFirst">
          <span class="item-span iconfont icon-qiche"></span>
          <span class="item-text">租车</span>
        </div>

        <div class="item" :class="{'item-active':!selected}" @click="toSecond">
          <span class="item-span iconfont icon-tianqi"></span>
          <span class="item-text">天气</span>
        </div>

        <div class="item" :class="{'item-active':!selected}" @click="toThird">
          <span class="item-span iconfont icon-wode"></span>
          <span class="item-text">我的</span>
        </div>
      </div>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar } from 'vux'
  export default {
    components: {
      Tabbar
    },
    data () {
      return {
        selected: true
      }
    },
    methods: {
      toFirst () {
        this.$router.push('/')
      },
      toSecond () {
        this.$router.push('second')
      },
      toThird () {
        this.$router.push('me')
      }
    }
  }
</script>
<style scoped lang="scss">
  .foot-container{
    width:100%;
    height:0.6rem;
    display:flex;
    /*每一项*/
    .item{
      width:33.3%;
      height:0.6rem;
      position:relative;
      /*字体图标*/
      .item-span{
        position:absolute;
        top:22%;
        left:39%;
        font-size:.26rem;
      }
      /*文字说明*/
      .item-text{
        font-size:0.1rem;
        position:absolute;
        top:68%;
        left:39%;
        letter-spacing: 0.02rem;
      }
    }
  }
  /*当前选中*/
  .item-active{
    color:#6cc6dc;
  }
  @media screen and (min-width:385px) and (max-width:415px){.item-text{letter-spacing: 0.04rem !important;}}
  @media screen and (min-width:416px) and (max-width:435px){.item-text{letter-spacing: 0.05rem !important;}}
  @media screen and (min-width:436px) and (max-width:460px){.item-text{letter-spacing: 0.06rem !important;}}
  @media screen and (min-width:461px) and (max-width:490px){.item-text{letter-spacing: 0.07rem !important;}}
  @media screen and (min-width:491px) and (max-width:1200px){.item-text{letter-spacing: 0.07rem !important;}}
</style>
