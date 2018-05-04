<template>
  <section class="head-nav bd-b fx fx-justify-between fx-align-center">
    <a class="go-back" href="javascript:history.back();"></a>
    <img :src="logoSrc" height="30" alt="" @click="linkTo(1)">
    <i class="icon iconfont icon-caidan menu" @click="isShowMenu = true"></i>
    <!-- menu弹层 暂时隐藏 -->
    <section class="menu-layer" @click="isShowMenu = false" v-show="isShowMenu">
      <div class="menu-box bd-l">
        <ul>
          <li class="bd-b pl-32 lh-40 text-overflow" @click="linkTo(1)">
            <i class="icon iconfont icon-tabhome c-green mr-10"></i>
            <span>首页</span>
          </li>
          <li class="bd-b pl-32 lh-40 text-overflow" @click="linkTo(2)">
            <i class="icon iconfont icon-xinfangloupan1 c-green mr-10"></i>
            <span>新房楼盘</span>
          </li>
          <li class="bd-b pl-32 lh-40 text-overflow" @click="linkTo(3)">
            <i class="icon iconfont icon-bao c-green mr-10"></i>
            <span>优惠团购</span>
          </li>
          <li class="bd-b pl-32 lh-40 text-overflow" @click="linkTo(4)">
            <i class="icon iconfont icon-ziyuan c-green mr-10"></i>
            <span>看房团</span>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>
<script>
import logo from '@/assets/imgs/logo.jpg'
export default {
  data () {
    return {
      logoSrc: logo,
      isShowMenu: false,
    }
  },
  methods: {
    linkTo (to) {
      switch (to) {
        case 1: // 首页
          this.$router.replace({path: '/'})
          break
        case 2: // 新房楼盘
          this.$router.push({path: '/list'})
          break
        case 3: // 优惠团购
          this.$router.push({path: '/group'})
          break
        case 4: // 看房团
          this.$router.push({path: '/kanfangtuan'})
          break
      }
      
    },
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
      background: url(../../assets/imgs/sprite_newh.svg) no-repeat;
      background-size: cover;
      background-position: 0 -818px;
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

