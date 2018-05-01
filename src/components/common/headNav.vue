<template>
  <section class="head-nav bd-b fx fx-justify-between fx-align-center">
    <a class="go-back" :style="goBackStyle" href="javascript:history.back();"></a>
    <img :src="logoSrc" height="30" alt="" @click="linkHome">
    <i class="icon iconfont icon-caidan menu"></i>
    <!-- menu弹层 暂时隐藏 -->
    <!-- <section class="menu-layer">
      <div class="menu-box bd-l">
        <ul>
          <li class="bd-b pl-32 lh-40 text-overflow">
            <i class="icon iconfont icon-tabhome c-green mr-10"></i>
            <span>首页</span>
          </li>
          <li class="bd-b pl-32 lh-40 text-overflow">
            <i class="icon iconfont icon-xinfangloupan1 c-green mr-10"></i>
            <span>新房楼盘</span>
          </li>
          <li class="bd-b pl-32 lh-40 text-overflow">
            <i class="icon iconfont icon-bao c-green mr-10"></i>
            <span>优惠团购</span>
          </li>
          <li class="bd-b pl-32 lh-40 text-overflow">
            <i class="icon iconfont icon-ziyuan c-green mr-10"></i>
            <span>看房团</span>
          </li>
        </ul>
      </div>
    </section> -->
  </section>
</template>
<script>
import logo from '@/assets/imgs/logo.jpg'
import sprite_newh from '@/assets/imgs/sprite_newh.svg'
export default {
  data () {
    return {
      logoSrc: logo,
      goBackStyle: {
        background: `url(${sprite_newh}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 -407px'
      }
    }
  },
  methods: {
    linkHome () {
      this.$router.replace({path: '/'})
    }
  }
  
}
</script>
<style lang="scss" scoped>
  .head-nav {
    position: relative;
    height: 50px;
    background: #fff;
    padding: 0 19px;
    .go-back {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
    .menu {
      color: #00ae66;
      font-size: 16px;
      line-height: 1;
    }
  }
  .menu-layer {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: transparent;
  }
  .menu-box {
    position: absolute;
    top: 51px;
    right: 0;
    z-index: 99;
    width: 146px;
    background: #fff;
  }
</style>

