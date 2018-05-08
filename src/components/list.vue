<template>
  <div class="full-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="190">
    <div class="pos-r">
      <!-- 顶部导航栏 -->
      <head-nav></head-nav>
      <!-- 搜索区域 -->
      <div class="mt-15 ml-15 mr-15">
        <div class="fx bgc-w brs-2 search-box">
          <input class="fx-1 pl-8" type="text" maxlength="100"
                v-model="tempKeyword" placeholder="输入楼盘或区域开始找房咯~">
          <div class="search-btn fx fx-align-center fx-justify-center" @click="searchKeyword">
            <i class="icon-sprite icon-sprite-search"></i>
          </div>
        </div>
      </div>
      <!-- 楼盘列表 -->
      <section class="mt-12 mb-12 pl-8 pr-8 bgc-w bd-t bd-b">
        <ul class="c-3 f-14 bold bd-b fx filter-list">
          <li @click="handleFilterPopup(1)" class="bd-r fx fx-align-center fx-justify-center fx-1">
            <span>{{areaTxt}}</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
          <li @click="handleFilterPopup(2)" class="bd-r fx fx-align-center fx-justify-center fx fx-1">
            <span>{{priceTxt}}</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
          <li @click="handleFilterPopup(3)" class="bd-r fx fx-align-center fx-justify-center fx-1">
            <span>{{houseTypeTxt}}</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
          <li @click="handleFilterPopup(4)" class="fx fx-align-center fx-justify-center fx-1">
            <span>{{statusTxt}}</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
        </ul>
        <p class="no-data bd-b c-9" v-if="noResult">没有找到 “{{keyword}}” 的楼盘 请换其他关键词搜索~</p>
        <p class="guess c-green bold" v-if="noResult">猜你喜欢</p>
        <ul class="building-list">
          <li class="list-li bd-b" v-for="(house, idx) in houseList" :key="idx">
            <router-link class="list-li-a" :to="{path:'/detail', query: {id: house.id}}">
              <div class="img-box mr-12">
                <img class="img-full" :src="house.main_image" alt="">
              </div>
              <div class="desc-box c-grey">
                <div class="mb-6 f-16 bold c-3">{{house.house_name}}</div>
                <div class="fx mb-6 f-12">
                  <span class="text-overflow">{{house.address}}</span>
                </div>
                <div class="fx fx-justify-between mb-6">
                  <span class="f-12">{{house.city}}</span>
                  <span class="c-red f-15">{{house.property_fee}}</span>
                </div>
                <div>
                  <span class="tag" v-for="(item, index) in house.decoration_condition.split('，')"
                        :key="index">{{item}}</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <p class="c-8 f-14 ta-c lh-38" v-if="isLastPage">已经是最后一条数据了！</p>
        <p class="c-8 f-14 ta-c lh-38 fx fx-align-center fx-justify-center" v-else>
          <i class="icon-loading"></i>
          <span class="c-0 f-14">加载中...</span>
        </p>
      </section>
      <!-- 筛选条件 暂时先隐藏 -->
      <section class="filter-popup" v-if="isShowFilterPopup">
        <div class="empty-layer"  @click.stop="isShowFilterPopup=false"></div>
        <div class="filter-content">
          <ul class="c-3 f-14 bold bd-b fx filter-list">
            <li class="bd-r fx fx-align-center fx-justify-center fx-1">
              <span>{{areaTxt}}</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li class="bd-r fx fx-align-center fx-justify-center fx fx-1">
              <span>{{priceTxt}}</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li class="bd-r fx fx-align-center fx-justify-center fx-1">
              <span>{{houseTypeTxt}}</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li class="fx fx-align-center fx-justify-center fx-1">
              <span>{{statusTxt}}</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
          </ul>
          <div class="filter-item-list" v-show="filterPopupType != 4">
            <ul>
              <li class="lh-40 bd-b c-0">不限</li>
              <li class="lh-40 bd-b c-0">不限</li>
              <li class="lh-40 bd-b c-0">不限</li>
              <li class="lh-40 bd-b c-0">不限</li>
              <li class="lh-40 bd-b c-0">不限</li>
              <li class="lh-40 bd-b c-0">不限</li>
              <li class="lh-40 bd-b c-0">不限</li>
              <li class="lh-40 bd-b c-0">不限</li>
            </ul>
          </div>
          <div class="bgc-w" v-show="filterPopupType == 4">
            <div class="bd-b pd-20">
              <div class="f-14 bold mb-12">售卖状态</div>
              <div class="fx fx-justify-between">
                <div class="status-tag">不限</div>
                <div class="status-tag">在售</div>
                <div class="status-tag">待售</div>
                <div class="status-tag">售罄</div>
              </div>
            </div>
            <div class="f-16 ta-c bold" style="line-height: 49px;">
              <div class="c-9">清空条件</div>
              <div class="bgc-green c-f">确定</div>
            </div>
          </div>
        </div>
      </section>
      <c-footer></c-footer>
    </div>  
  </div>
</template>
<script>
import fetchDataMixin from '@/components/common/fetch-mixin.js'
import headNav from '@/components/common/headNav.vue'
import cFooter from '@/components/common/footer.vue'
import sprite_newh from '@/assets/imgs/sprite_newh.svg'
export default {
  mixins: [fetchDataMixin],
  data () {
    return {
      isShowFilterPopup: false, // 是否展示过滤条件弹窗
      isLastPage: false, // 是否是最后一页
      loading: false, // 是否正在加载
      houseList: [], // 楼盘列表
      pageSize: 10,
      page: 1,
      city_id: '',
      tempKeyword: '', // 临时输入关键词
      keyword: this.$route.query.keyword || '',
      noResult: false, // 没有搜索和查询结果
      cityList: [], // 城市列表
      areaTxt: '区域',
      priceTxt: '售价',
      houseTypeTxt: '房型',
      statusTxt: '状态',
      filterPopupType: 0, // 筛选条件弹窗弹出的类型 1：区域，2：售价，3：房型，4：状态
    }
  },
  components: {
    headNav,
    cFooter
  },
  created () {
    this.getHouseList({
      keyword: this.keyword
    }).then(res => {
      // 第一次筛选请求没有数据，需要展示猜你喜欢
      if (!res.data || !res.data.length) {
        this.noResult = true
        this.getHouseList()
      } else {
        this.noResult = false
      }
    })
  },

  watch: {
    city_id (newV) {
      this.reHouseList()
    },
    keyword (newV) {
      this.reHouseList()
    }
  },
  methods: {
    reHouseList () {
      this.page = 1
      this.houseList = []
      this.isLastPage = false
      this.getHouseList({
        city_id: this.city_id,
        keyword: this.keyword
      }).then(res => {
        // 第一次筛选请求没有数据，需要展示猜你喜欢
        if (!res.data || !res.data.length) {
          this.noResult = true
          this.getHouseList()
        } else {
          this.noResult = false
        }
      })
    },

    searchKeyword () {
      this.keyword = this.tempKeyword
    },

    getHouseList (param = {}) {
      // 在搜索没有结果时，需要展示猜你喜欢
      // 猜你喜欢其实就是没带city_id和keword的列表
      // 因此在请求的时候，需要使用noResult这个变量，来过滤city_id和keyword
      return new Promise((resolve, reject) => {
        this.fetchData(`/api/houses/index?page=${
          this.page
        }&page_size=${this.pageSize}&city_id=${
          !this.noResult && param.city_id || ''
        }&keyword=${!this.noResult && param.keyword || ''}`).then(res => {
          this.houseList = this.houseList.concat(res.data)
          this.isLastPage = res.data.length < this.pageSize
          resolve(res)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },

    loadMore () {
      if (this.loading || this.isLastPage) return
      this.loading = true
      this.page++
      this.getHouseList({
        city_id: this.city_id,
        keyword: this.keyword
      }).then(res => {
        this.loading = false
      }).catch(err => {
        this.loading = false
      })
    },

    // 筛选条件弹窗处理
    handleFilterPopup (type) {
      this.isShowFilterPopup = true
      this.filterPopupType = type
    },

    // 城市列表
    getCityList (city_id = '') {
      this.fetchData(`/api/houses/index?city_id=${city_id}`)
          .then(res => {
            this.cityList = res.data
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.pd-20 {
  padding: 20px;
}
.search-btn {
  width: 56px;
  border-left: 1px solid #e5e5e5;
}
.icon-sprite {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(../assets/imgs/sprite_newh.svg);
  background-repeat: no-repeat;
  background-size: 20px 637px;
}
.icon-sprite-search {
  background-position: 0 -348px;
}
.icon-sprite-triangle {
  transform: scale(0.6);
  background-position: 0 -59px;
}
.icon-loading {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  background: url(../assets/imgs/loading.gif) no-repeat center center/contain;
}
.search-box {
  height: 41px;
  box-sizing: border-box;
  padding: 5px 0;
  border: 1px solid #e5e5e5;
}
.no-data {
  font-size: 14px;
  padding: 20px 0;
  text-align: center;
  line-height: 28px;
}
.guess {
  padding: 20px 0;
  font-size: 14px;
  line-height: 28px;
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
        max-height: 81px;
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
  height: 100%;
  .empty-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .filter-content {
    position: relative;
    background: #fff;
  }
}

.filter-item-list {
  max-height: 410px;
  padding-left: 19px;
  overflow-y: scroll;
}

.status-tag {
  width: 70px;
  height: 25px;
  line-height: 25px;
  border: 1px solid #e5e5e5;
  text-align: center;
  font-size: 12px;
  color: #999;
  border-radius: 2px;
}
</style>
