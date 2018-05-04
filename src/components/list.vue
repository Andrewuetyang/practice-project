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
          <input class="fx-1 pl-8" type="text" placeholder="请输入楼盘名和区域">
          <div class="search-btn fx fx-align-center fx-justify-center">
            <i class="icon-sprite icon-sprite-search"></i>
          </div>
        </div>
      </div>
      <!-- 楼盘列表 -->
      <section class="mt-12 mb-12 pl-8 pr-8 bgc-w bd-t bd-b">
        <ul class="c-3 f-14 bold bd-b fx filter-list">
          <li @click="isShowFilterPopup = true" class="bd-r fx fx-align-center fx-justify-center fx-1">
            <span>区域</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
          <li @click="isShowFilterPopup = true" class="bd-r fx fx-align-center fx-justify-center fx fx-1">
            <span>售价</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
          <li @click="isShowFilterPopup = true" class="bd-r fx fx-align-center fx-justify-center fx-1">
            <span>房型</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
          <li @click="isShowFilterPopup = true" class="fx fx-align-center fx-justify-center fx-1">
            <span>状态</span>
            <i class="icon-sprite icon-sprite-triangle"></i>
          </li>
        </ul>
        <p class="no-data bd-b" v-if="!houseList.length && isLastPage">没有找到相关数据，换个搜索条件试试</p>
        <p class="guess" v-if="!houseList.length && isLastPage">猜你喜欢</p>
        <ul class="building-list">
          <li class="list-li bd-b" v-for="(house, idx) in houseList" :key="idx">
            <router-link class="list-li-a" :to="{path:'/detail', query: {city_id: house.city_id}}">
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
              <span>区域</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li class="bd-r fx fx-align-center fx-justify-center fx fx-1">
              <span>售价</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li class="bd-r fx fx-align-center fx-justify-center fx-1">
              <span>房型</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
            <li class="fx fx-align-center fx-justify-center fx-1">
              <span>状态</span>
              <i class="icon-sprite icon-sprite-triangle"></i>
            </li>
          </ul>
          <div class="filter-item-list">
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
        </div>
      </section>
      <c-footer></c-footer>
    </div>  
  </div>
</template>
<script>
import fetchMixin from '@/components/common/fetch-mixin.js'
import headNav from '@/components/common/headNav.vue'
import cFooter from '@/components/common/footer.vue'
import sprite_newh from '@/assets/imgs/sprite_newh.svg'
export default {
  mixins: [fetchMixin],
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
      keyword: '',
    }
  },
  components: {
    headNav,
    cFooter
  },
  created () {
    this.getList()
  },

  watch: {
    city_id (newV) {
      this.reList()
    },
    keyword (newV) {
      this.reList()
    }
  },
  methods: {
    reList () {
      this.page = 1
      this.houseList = []
      this.isLastPage = false
      this.getList()
    },

    getList () {
      return new Promise((resolve, reject) => {
        this.fetchData(`/api/houses/index?page=${
          this.page
        }&page_size=${this.pageSize}&city_id=${
          this.city_id
        }&keyword=${this.keyword}`).then(res => {
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
      this.getList().then(res => {
        this.loading = false
      }).catch(err => {
        this.loading = false
      })
    }
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
</style>
