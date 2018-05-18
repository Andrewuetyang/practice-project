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
            <span>{{houseSizeTxt}}</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
          <li @click="handleFilterPopup(4)" class="fx fx-align-center fx-justify-center fx-1">
            <span>{{statusTxt}}</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
        </ul>
        <p class="no-data bd-b c-9" v-if="noResult">没有找到 "{{filter}}" 的楼盘 请换其他筛选条件~</p>
        <p class="guess c-green bold" v-if="noResult">猜你喜欢</p>
        <ul class="building-list">
          <li class="list-li bd-b" v-for="(house, idx) in houseList" :key="idx">
            <router-link class="list-li-a" :to="{path:'/detail', query: {id: house.id, tel: house.tel}}">
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
      <!-- 筛选条件 -->
      <section class="filter-popup" v-if="isShowFilterPopup">
        <div class="empty-layer"  @click.stop="isShowFilterPopup=false"></div>
        <div class="filter-content">
          <ul class="c-3 f-14 bold bd-b fx filter-list">
            <li @click="filterPopupType = 1" class="bd-r fx fx-align-center fx-justify-center fx-1">
              <span>{{areaTxt}}</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li @click="filterPopupType = 2" class="bd-r fx fx-align-center fx-justify-center fx fx-1">
              <span>{{priceTxt}}</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li @click="filterPopupType = 3" class="bd-r fx fx-align-center fx-justify-center fx-1">
              <span>{{houseSizeTxt}}</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li @click="filterPopupType = 4" class="fx fx-align-center fx-justify-center fx-1">
              <span>{{statusTxt}}</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
          </ul>
          <div class="filter-item-list" v-show="filterPopupType != 4">
            <ul>
              <li class="lh-40 bd-b c-0"
                  v-show="filterPopupType === 1"
                  v-for="city in cityList"
                  :key="city.id"
                  @click="selectCity(city)">{{city.city_name}}</li>
              <li class="lh-40 bd-b c-0"
                  v-show="filterPopupType === 2"
                  v-for="(price, index) in priceList"
                  :key="index"
                  @click="selectPrice(price, index)">{{price}}</li>
              <li class="lh-40 bd-b c-0"
                  v-show="filterPopupType === 3"
                  v-for="(houseSize, index) in houseSizeList"
                  :key="index"
                  @click="selectHouseSize(houseSize, index)">{{houseSize}}</li>
            </ul>
          </div>
          <div class="bgc-w" v-show="filterPopupType == 4">
            <div class="bd-b pd-20">
              <div class="f-14 bold mb-12">售卖状态</div>
              <div class="fx fx-justify-between">
                <div class="status-tag" v-for="(saleStatus, index) in saleStatusList"
                    :key="index" @click="selectSaleStaus(saleStatus, index)">{{saleStatus}}</div>
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
      filter: '', // 筛选名称
      city_id: '',
      tempKeyword: '', // 临时输入关键词
      keyword: this.$route.query.keyword || '',
      sale_status: this.$route.query.sale_status || '',
      price: this.$route.query.price || '',
      house_size: this.$route.query.house_size || '',
      noResult: false, // 没有搜索和查询结果
      cityList: [], // 城市列表
      houseSizeList: [
        '一室',
        '二室',
        '三室',
        '四室',
        '五室',
        '五室以上',
        '别墅'
      ], // 房型列表
      priceList: [
        '1万以下',
        '1-2万',
        '2-3万',
        '3-5万',
        '5-8万',
        '8万以上',
      ],
      saleStatusList: [
        '不限',
        '在售',
        '待售',
        '售罄'
      ],
      areaTxt: '区域',
      priceTxt: '售价',
      houseSizeTxt: '房型',
      statusTxt: '状态',
      filterPopupType: 0, // 筛选条件弹窗弹出的类型 1：区域，2：售价，3：房型，4：状态
    }
  },
  components: {
    headNav,
    cFooter
  },
  created () {
    this.getCityList().then(res => {
      // this.getHouseStyle()
    })
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
    house_size (newV) {
      this.reHouseList()
    },
    sale_status (newV) {
      this.reHouseList()
    },
    price (newV) {
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
        price: this.price,
        house_size: this.house_size,
        sale_status: this.sale_status,
        keyword: this.keyword
      }).then(res => {
        // 筛选请求没有数据，需要展示猜你喜欢
        if (!res.data || !res.data.length) {
          this.noResult = true
          this.getHouseList()
        } else {
          this.noResult = false
        }
      })
    },

    selectCity(city) {
      this.city_id = city.id
      this.filter = city.city_name
      this.areaTxt = city.city_name
      this.isShowFilterPopup = false
    },

    selectHouseSize(houseSize, index) {
      this.house_size = index + 1
      this.filter = houseSize
      this.houseSizeTxt = houseSize
      this.isShowFilterPopup = false
    },

    selectPrice(price, index) {
      this.price = index + 1
      this.filter = price
      this.priceTxt = price
      this.isShowFilterPopup = false
    },

    selectSaleStaus(saleStatus, index) {
      this.sale_status = index + 1
      this.filter = saleStatus
      this.statusTxt = saleStatus
      this.isShowFilterPopup = false
    },

    searchKeyword () {
      this.keyword = this.tempKeyword
      this.filter = this.keyword
    },

    getHouseList (param = {}) {
      // 在搜索没有结果时，需要展示猜你喜欢
      // 猜你喜欢其实就是筛选没结果时，不带筛选条件拉取的数据
      // 因此在请求的时候，需要使用noResult这个变量，来过滤city_id和keyword
      return new Promise((resolve, reject) => {
        let url = `/api/houses/index?page=${this.page}&page_size=${this.pageSize}`
        if (!this.noResult && param.city_id) url += `&city_id=${param.city_id}`
        if (!this.noResult && param.price) url += `&price=${param.price}`
        if (!this.noResult && param.house_size) url += `&house_size=${param.house_size}`
        if (!this.noResult && param.sale_status) url += `&sale_status=${param.sale_status}`
        if (!this.noResult && param.keyword) url += `&keyword=${param.keyword}`
        this.fetchData(url).then(res => {
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
        price: this.price,
        house_size: this.house_size,
        sale_status: this.sale_status,
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
    getCityList () {
      return new Promise((resolve, reject) => {
        this.fetchData('/api/city/index')
            .then(res => {
              this.cityList = res.data
              resolve(res)
            }).catch(err => reject(err))
      })
    },
    
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
    box-shadow: 0 0 10px #999;
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
