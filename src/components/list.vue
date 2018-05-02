<template>
  <div class="pos-r">
    <!-- 顶部导航栏 -->
    <head-nav></head-nav>
    <!-- 搜索区域 -->
    <div class="mt-15 ml-15 mr-15">
      <div class="fx bgc-w brs-2 search-box">
        <input class="fx-1 pl-8" type="text" placeholder="请输入楼盘名和区域">
        <div class="search-btn fx fx-align-center fx-justify-center">
          <i class="icon-sprite" :style="searchStyle"></i>
        </div>
      </div>
    </div>
    <!-- 楼盘列表 -->
    <section class="mt-12 mb-12 pl-8 pr-8 bgc-w bd-t bd-b">
      <ul class="c-3 f-14 bold bd-b fx filter-list">
        <li class="bd-r fx fx-align-center fx-justify-center fx-1">
          <span>区域</span>
          <i class="icon-sprite" :style="triangleStyle"></i>
        </li>
        <li class="bd-r fx fx-align-center fx-justify-center fx fx-1">
          <span>售价</span>
          <i class="icon-sprite" :style="triangleStyle"></i>
        </li>
        <li class="bd-r fx fx-align-center fx-justify-center fx-1">
          <span>房型</span>
          <i class="icon-sprite" :style="triangleStyle"></i>
        </li>
        <li class="fx fx-align-center fx-justify-center fx-1">
          <span>状态</span>
          <i class="icon-sprite" :style="triangleStyle"></i>
        </li>
      </ul>
      <p class="no-data bd-b">没有找到相关数据，换个搜索条件试试</p>
      <p class="guess">猜你喜欢</p>
      <ul class="building-list">
        <li class="list-li bd-b">
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
                <span class="c-red f-15">8500元/平米</span>
              </div>
              <!-- <div>
                <span class="tag">双卫</span>
              </div> -->
            </div>
          </a>
        </li>
      </ul>
      <p class="c-8 f-14 ta-c lh-38">已经是最后一条数据了！</p>
    </section>
    <!-- 筛选条件 暂时先隐藏 -->
    <!-- <section class="filter-popup">
      <ul class="c-3 f-14 bold bd-b fx filter-list">
        <li class="bd-r fx fx-align-center fx-justify-center fx-1">
          <span>区域</span>
          <i class="icon-sprite" :style="triangleStyle"></i>
        </li>
        <li class="bd-r fx fx-align-center fx-justify-center fx fx-1">
          <span>售价</span>
          <i class="icon-sprite" :style="triangleStyle"></i>
        </li>
        <li class="bd-r fx fx-align-center fx-justify-center fx-1">
          <span>房型</span>
          <i class="icon-sprite" :style="triangleStyle"></i>
        </li>
        <li class="fx fx-align-center fx-justify-center fx-1">
          <span>状态</span>
          <i class="icon-sprite" :style="triangleStyle"></i>
        </li>
      </ul>
      <div class="filter-item-list">
        <ul>
          <li class="lh-40 bd-b c-0">不限</li>
        </ul>
      </div>
    </section> -->
    <c-footer></c-footer>
  </div>  
</template>
<script>
import headNav from '@/components/common/headNav.vue'
import cFooter from '@/components/common/footer.vue'
import sprite_newh from '@/assets/imgs/sprite_newh.svg'
export default {
  data () {
    return {
      searchStyle: {
        background: `url(${sprite_newh}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 -215px'
      },
      triangleStyle: {
        background: `url(${sprite_newh}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 -30px'
      },
    }
  },
  components: {
    headNav,
    cFooter
  }
}
</script>

<style lang="scss" scoped>
.search-btn {
  width: 56px;
  border-left: 1px solid #e5e5e5;
}
.icon-sprite {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.search-box {
  height: 41px;
  box-sizing: border-box;
  padding: 5px 0;
  border: 1px solid #e5e5e5;
}
.no-data {
  font-size: 13px;
  padding: 16px 0;
  text-align: center;
  line-height: 1.5;
}
.guess {
  padding: 6px 6px 0;
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
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
.filter-list {
  padding: 14px 0;
  line-height: 27px;

}

.filter-popup {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  background: #fff;
}
.filter-item-list {
  max-height: 410px;
  padding-left: 19px;
  overflow-y: scroll;
}
</style>
