<template>
  <div id="app">
    <transition :name='transitionName'>
      <router-view class="router-view"></router-view>
    </transition>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
  import { Loading } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    components: {
      Loading
    },
    data () {
      return {
        transitionName: ''
      }
    },
    computed: {
      ...mapState({
        isLoading: state => state.isLoading // 直接从state中拿状态，不需要在data定义
      })
    },
    watch: {
      '$route' (to, from) { // 监听路由是前进还是后退
        if (!to.path) {
          to.path = +new Date() + 1
        }
        if (!from.path) {
          from.path = +new Date()
        }

        if (to.path > from.path) {
          this.transitionName = 'slide-forward'
        } else {
          this.transitionName = 'slide-back'
        }
      }
    }
  }
</script>

<style lang="less">
  @import './style/common.css'; // app 中引入reset
  @import './style/change.vux.css'; // app 中引入修改vux的css文件
  .router-view { //路由class
    width:100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide-forward-enter { // 前进
    transform: translate(100%);
  }
  .slide-forward-enter-active {
    transition: all 0.2s ease-in-out;
  }
  .slide-forward-leave-active {
    transform: translate(-100%);
    transition: all  0.2ms ease-in-out;
  }


  .slide-back-enter { // 后退
    transform: translate(-100%);
  }
  .slide-back-enter-active {
    transition: all 0.2s ease-in-out;
  }
  .slide-back-leave-active {
    transform: translate(100%);
    transition: all  0.2s ease-in-out;
  }
</style>
