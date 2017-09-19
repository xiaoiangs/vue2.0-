<template>
  <div id="app">
    <transition :name='transitionName'>
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: ''
    }
  },
  mounted () {
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
  .router-view { //路由class
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
