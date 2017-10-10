<template>
  <div>
    <tabbar>
      <div class="foot-container">
        <div class="item">
          <span class="item-span iconfont icon-qiche"></span>
          <span class="item-text">租车</span>
        </div>

        <div class="item">
          <span class="item-span iconfont icon-tianqi"></span>
          <span class="item-text">天气</span>
        </div>

        <div class="item">
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

  @media screen and (min-width:385px) and (max-width:415px){.item-text{letter-spacing: 0.04rem !important;}}
  @media screen and (min-width:416px) and (max-width:435px){.item-text{letter-spacing: 0.05rem !important;}}
  @media screen and (min-width:436px) and (max-width:460px){.item-text{letter-spacing: 0.06rem !important;}}
  @media screen and (min-width:461px) and (max-width:490px){.item-text{letter-spacing: 0.07rem !important;}}
  @media screen and (min-width:491px) and (max-width:1200px){.item-text{letter-spacing: 0.07rem !important;}}
</style>
