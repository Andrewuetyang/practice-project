<!--首页-->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <head-nav></head-nav>
    <!-- banner -->
    <section class="banner-box" :style="banner">
      <div class="search-wrapper">
        <div class="search-box">
          <div class="search">
            <input class="search-input" type="text" placeholder="输入楼盘或区域开始找房咯~">
            <i class="icon-search" :style="searchStyle"></i>
          </div>
        </div>
      </div>
    </section>
    <!-- 主导航区域 -->
    <body-nav></body-nav>
    <!-- 分类导航 -->
    <section class="category-nav mt-12 bd-t bd-b">
      <div class="fx sub-nav">
        <a class="fx-1 bd-r" href="#">一室</a>
        <a class="fx-1 bd-r" href="#">一室</a>
        <a class="fx-1" href="#">一室</a>
      </div>
    </section>
    <!-- 楼盘列表 -->
    <section class="mt-12 pl-8 pr-8 bgc-w bd-t bd-b">
      <h3 class="c-3 f-16 bd-b" style="line-height: 55px;">推荐楼盘</h3>
      <ul class="building-list">
        <li class="list-li">
          <a class="list-li-a" href="#">
            <div class="img-box mr-12">
              <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/实景图-1-333x235.jpg" alt="">
            </div>
            <div class="desc-box c-grey">
              <div class="mb-6 f-16 bold c-3">富力南昆山</div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">阿萨德发生的发生度假区（广河高速永汉出口处）</span>
              </div>
              <div class="fx fx-justify-between mb-6">
                <span class="f-12">惠州</span>
                <span class="c-red f-15">8500元/平</span>
              </div>
              <div>
                <span class="tag">双卫</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <footer class="mt-12">

    </footer>
  </div>
</template>
<script>
import headNav from '@/components/common/headNav.vue'
import bodyNav from '@/components/common/bodyNav.vue'
import banner from '@/assets/imgs/banner.jpg'
import sprite_newh from '@/assets/imgs/sprite_newh.svg'
export default {
  data () {
    return {
      banner: {
        background: `url(${banner}) no-repeat center center/cover`
      },
      searchStyle: {
        background: `url(${sprite_newh}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 -80px'
      }
    }
  },
  
  components: {
    headNav,
    bodyNav
  },
}
</script>
<style lang="scss" scoped>
.f-15 {
  font-size: 15px;
}
.mb-6 {
  margin-bottom: 6px;
}
.banner-box {
  width: 100%;
  height: 180px;
  position: relative;
  .search-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    .search-box {
      padding: 12px 15px;
      .search {
        height: 35px;
        line-height: 35px;
        padding-left: 13px;
        border-radius: 2px;
        background: #fff;
        position: relative;
        .search-input {
          width: 80%;
          padding: 0 8px;
          background: #fff;
        }
        .icon-search {
          display: inline-block;
          width: 20px;
          height: 20px;
          position: absolute;
          top: 7px;
          right: 7px;
        }
      }
    }
  }
}

.category-nav {
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 143px;
  .sub-nav {
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #333;
  }
}

.building-list {
  .list-li {
    padding: 20px 0;
    .list-li-a {
      display: flex;
      .img-box {
        display: flex;
        align-content: center;
        flex-shrink: 0;
        width: 108px;
      }
      .desc-box {
        flex: 1;
        line-height: 1;
        min-width: 0;
      }
    }
  }
}

.tag {
  font-size: 12px;
  padding: 2px 4px;
  line-height: 1;
  margin-right: 5px;
  background-color: #f4f7f9;
  color: #849aae;
}
</style>
