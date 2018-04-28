<template>
  <section class="head-nav fx fx-justify-between fx-align-center">
    <a class="go-back" :style="goBackStyle" href="javascript:history.back();"></a>
    <img :src="logoSrc" height="30" alt="">
    <i class="icon iconfont icon-caidan menu"></i>
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
  }
  
}
</script>
<style lang="scss" scoped>
  .head-nav {
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
</style>

