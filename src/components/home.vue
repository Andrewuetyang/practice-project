<!--首页-->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <head-nav></head-nav>
    <!-- banner -->
    <section class="banner-box" :style="{backgroundImage: bannerBgImage}">
      <div class="search-wrapper">
        <div class="search-box">
          <div class="search">
            <input class="search-input" type="text" v-model="keyword" placeholder="输入楼盘或区域开始找房咯~">
            <div class="icon-search-box" @click="search">
              <i class="icon-search"></i>
            </div>
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
        <li class="list-li bd-b"
            v-for="(house, index) in houseList" :key="index">
          <router-link class="list-li-a" :to="{path:'/detail', query: {id: house.id}}">
            <div class="img-box mr-12">
              <img class="img-full" :src="house.main_image" alt="">
              <span class="img-desc">效果图</span>
            </div>
            <div class="desc-box c-grey">
              <div class="mb-7 f-16 bold c-3 lh-20">{{house.house_name}}</div>
              <div class="fx mb-7 f-12">
                <span class="text-overflow">{{house.address}}</span>
              </div>
              <div class="fx fx-justify-between mb-7">
                <span class="f-12">{{house.city}}</span>
                <span class="c-dark-red f-15">{{house.average_price | priceFormat}}</span>
              </div>
              <div>
                <span class="tag" v-for="(item, idx) in house.decoration_condition.split('，')"
                      :key="idx">{{item}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
    <c-footer></c-footer>
  </div>
</template>
<script>
import fetchDataMixin from '@/components/common/fetch-mixin.js'
import headNav from '@/components/common/headNav.vue'
import bodyNav from '@/components/common/bodyNav.vue'
import cFooter from '@/components/common/footer.vue'
import sprite_newh from '@/assets/imgs/sprite_newh.svg'
export default {
  mixins: [fetchDataMixin],
  data () {
    return {
      filterList: [
        ['一室', '二室', '三室'],
        ['在售', '待售', '售罄'],
        ['1万以下', '1-2万', '全部'],
      ],
      houseList: [],
      keyword: '',
      bannerBgImage: ''
    }
  },
  
  components: {
    headNav,
    bodyNav,
    cFooter
  },

  created () {
    this.fetchRecommend()
    this.fetchBanner()
  },

  filters: {
    // 后台返回的价格单位为元，且有时候返回待定，这里显示的是多少钱/平
    priceFormat (backendVal) {
      if (backendVal == '待定') return backendVal
      return `${backendVal}/平`
    },
  },

  methods: {

    /*
    * 获取banner
    */
    fetchBanner () {
      return new Promise((resolve, reject) => {
        this.fetchData(`/api/common/getWebBanner`).then(res => {
          this.bannerBgImage = `url(${res.data[0].image})`
          console.log(this.bannerBgImage, 'bann')
          resolve(res)
        })
      })
    },

    fetchRecommend () {
      // 在搜索没有结果时，需要展示猜你喜欢
      // 猜你喜欢其实就是没带city_id和keword的列表
      // 因此在请求的时候，需要使用noResult这个变量，来过滤city_id和keyword
      return new Promise((resolve, reject) => {
        this.fetchData(`/api/houses/recommend`).then(res => {
          this.houseList = res.data
          resolve(res)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },

    /**
     * 跳转列表页
     * @param index {{Number}} 种类：0-房型，1-房子状态，2-均价 3-搜索
     * @param item {{String}} 名称文本
     * @param idx {{Number}} 名称文本在集合中的下标
     */
    linkToList (index, item, idx) {
      if (index === 0) {
        this.$router.push({path: '/list', query: {house_size: idx + 1}})
      } else if (index === 1) {
        this.$router.push({path: '/list', query: {sale_status: idx + 1}})
      } else if (index === 2) {
        if (idx === 2) {
          this.$router.push({path: '/list'})
        } else {
          this.$router.push({path: '/list', query: {price: idx + 1}})
        }
      } else { 
        this.$router.push({path: '/list', query: {keyword: item}})
      }
    },

    // 跳转楼盘详情页
    linkToDetail (id) {
      this.$router.push({path: '/detail', query: {id: id}})
    },

    // 搜索跳转
    search () {
      this.linkToList(3, this.keyword)
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-box {
  width: 100%;
  height: 180px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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
        .icon-search-box {
          position: absolute;
          top: 0;
          right: 0;
          width: 36px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center; 
        }
        .icon-search {
          display: inline-block;
          width: 22px;
          height: 22px;
          background: url(../assets/imgs/sprite_newh.svg) no-repeat;
          background-size: 22px 701px;
          background-position: 0 -152px;
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
        max-height: 81px;
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
