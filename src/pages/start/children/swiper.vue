<template>
  <div>
    <swiper auto loop :list="list"></swiper>
  </div>
</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
  const baseList = [{
    url: '/list',
    img: 'https://static.vux.li/demo/1.jpg'
  }, {
    url: '/list',
    img: 'https://static.vux.li/demo/2.jpg'
  }, {
    url: '/list',
    img: 'https://static.vux.li/demo/3.jpg'
  }]
  export default {
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider
    },
    ready () {
    },
    methods: {
    },
    data () {
      return {
        list: baseList
      }
    }
  }
</script>

<style scoped>
  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #000;
  }
  .title{
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
</style>
