<!--首页-->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <head-nav></head-nav>
    <!-- banner -->
    <section class="banner-box">
      <div class="search-wrapper">
        <div class="search-box">
          <div class="search">
            <input class="search-input" type="text" placeholder="输入楼盘或区域开始找房咯~">
            <i class="icon-search"></i>
          </div>
        </div>
      </div>
    </section>
    <!-- 主导航区域 -->
    <body-nav></body-nav>
    <!-- 分类导航 -->
    <section class="category-nav mt-12 bd-t bd-b">
      <div class="fx sub-nav" v-for="(subList, index) in filterList" :key="index">
        <a style="width: 33.33%"
           :class="{'bd-r': idx !== 2, 'c-green inline-fx fx-align-center fx-justify-center': index === 2 && idx === 2}"
           v-for="(item, idx) in subList"
           :key="idx"
           @click="linkToList(index, item, idx)">
          {{item}}
          <i style="vertical-align: middle;"
              class="arrow-right arrow-right-green"
              v-if="index === 2 && idx === 2"></i>
        </a>
      </div>
    </section>
    <!-- 楼盘列表 -->
    <section class="mt-12 mb-12 pl-8 pr-8 bgc-w bd-t bd-b">
      <h3 class="c-3 f-16 bd-b" style="line-height: 55px;">推荐楼盘</h3>
      <ul class="building-list">
        <li class="list-li bd-b" @click="linkToDetail()">
          <a class="list-li-a" href="#">
            <div class="img-box mr-12">
              <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/实景图-1-333x235.jpg" alt="">
              <span class="img-desc">效果图</span>
            </div>
            <div class="desc-box c-grey">
              <div class="mb-7 f-16 bold c-3 lh-20">富力南昆山</div>
              <div class="fx mb-7 f-12">
                <span class="text-overflow">阿萨德发生的发生度假区（广河高速永汉出口处）</span>
              </div>
              <div class="fx fx-justify-between mb-7">
                <span class="f-12">惠州</span>
                <span class="c-dark-red f-15">8500元/平</span>
              </div>
              <div>
                <span class="tag">双卫</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <c-footer></c-footer>
  </div>
</template>
<script>
import fetchMixin from '@/components/common/fetch-mixin.js'
import headNav from '@/components/common/headNav.vue'
import bodyNav from '@/components/common/bodyNav.vue'
import cFooter from '@/components/common/footer.vue'
import sprite_newh from '@/assets/imgs/sprite_newh.svg'
export default {
  mixins: [fetchMixin],
  data () {
    return {
      filterList: [
        ['一室', '二室', '三室'],
        ['在售', '待售', '售罄'],
        ['1万以下', '1-2万', '全部'],
      ],
      houseList: []
    }
  },
  
  components: {
    headNav,
    bodyNav,
    cFooter
  },

  created () {
    // this.fetchData().then(res => {
    //   this.houseList = res.data.data
    // }).catch(err => {
    //   console.log(err, 'err');
    // })
  },

  methods: {

    /**
     * 跳转列表页
     * @param index {{Number}} 种类：0-房型，1-房子状态，2-均价
     * @param item {{String}} 名称文本
     * @param idx {{Number}} 名称文本在集合中的下标
     */
    linkToList (index, item, idx) {
      if (index === 0) {
        this.$router.push({path: '/list', query: {style: item}})
      } else if (index === 1) {
        this.$router.push({path: '/list', query: {status: item}})
      } else {
        if (idx === 2) {
          this.$router.push({path: '/list'})
        } else {
          this.$router.push({path: '/list', query: {price: item}})
        }
      }
    },

    // 跳转楼盘详情页
    linkToDetail (id) {
      this.$router.push({path: '/detail', query: {id: id}})
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-box {
  width: 100%;
  height: 180px;
  position: relative;
  background: url(../assets/imgs/banner.jpg) no-repeat center center/cover;
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
          width: 22px;
          height: 22px;
          position: absolute;
          top: 7px;
          right: 7px;
          background: url(../assets/imgs/sprite_newh.svg) no-repeat;
          background-size: cover;
          background-position: 0 -99px;
        }
      }
    }
  }
}

.category-nav {
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 143px;
  padding: 20px 0;
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
        position: relative;
        .img-desc {
          position: absolute;
          bottom: 5px;
          right: 5px;
          color: rgba(255, 255, 255, .5);
          font-size: 12px;
        }
      }
      .desc-box {
        flex: 1;
        line-height: 1;
        min-width: 0;
      }
    }
  }
}
</style>
