<template>
  <div class="pos-r" style="height: 100%; overflow: scroll;">
    <head-nav></head-nav>
    <div class="mb-12 pos-r" style="height: 200px;">
      <swipe v-model="index" :pagination="false" :loop="false" style="height: 100%;">
        <swipe-item style="height: 100%;">
          <img class="img-full" :src="houseInfo.main_image" alt="">
        </swipe-item>
      </swipe>
      <div class="pagination">{{pagination}}</div>
    </div>
    <!-- 基本信息 -->
    <div class="base-info bd-b bd-t mb-12">
      <div>
        <div class="lh-24 bold mb-8">
          <span class="f-17 mr-8">{{houseInfo.house_name}}</span>
          <span class="f-14 c-6 pl-8 bd-l">{{houseInfo.build_cat}}-{{houseInfo.sale_status}}</span>
        </div>
        <div class="fx fx-justify-between fx-align-center f-20">
          <span class="f-16 bold c-red">均价<span class="f-20">{{houseInfo.average_price}}</span>/平</span>
          <span class="f-14" style="color: #939fa1;">占地面积：{{houseInfo.area}}平米</span>
        </div>
        <!-- 标签属性 -->
        <div class="tag-box mt-8">
          <span class="tag-detail"
                v-for="(item, index) in houseInfo.decoration_condition.split('，')"
                :key="index">{{item}}</span>
        </div>
      </div>
      <ul class="mt-15">
        <li class="bd-t lh-44 c-6 pos-r cell-arrow-right pt-10 pr-15 pb-10">
          <a class="li-base text-overflow fx fx-align-center" href="#">
            <i class="icon iconfont icon-location mr-8 lh-1"></i>
            <span>{{houseInfo.address}}</span>
          </a>
        </li>
        <li class="bd-t lh-44 c-6 pos-r cell-arrow-right pt-10 pr-15 pb-10">
          <a class="li-base text-overflow fx fx-align-center" href="#">
            <i class="icon iconfont icon-kaifashanglepuicon mr-8 lh-1"></i>
            <span>{{houseInfo.develop_company}}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 户型介绍 -->
    <div class="bgc-w mb-12 pl-8 pr-8" @click="isPopupImgsShow = true">
      <div class="lh-55 f-16">
        <span class="c-3 bold">户型介绍</span>
        <span class="c-9">({{houseStyleList.length || '-'}}种)</span>
      </div>
      <ul>
        <li class="bd-t pt-20 pb-20 fx" v-for="houseStyle in houseStyleList" :key="houseStyle.id">
          <div class="mr-12 fx fx-align-center" style="width: 108px;">
            <img class="img-full" :src="houseStyle.main_image" alt="">
          </div>
          <div class="desc-box">
            <div class="f-16 lh-20 mb-6">
              <span>3室2厅1卫 建面 约90平 - </span>
              <span class="c-green">在售</span>
            </div>
            <div class="c-8 f-12 lh-14 mb-6">3室2厅</div>
            <div class="c-red f-13 bold lh-14 mb-8">参考价</div>
            <div class="c-red f-13 bold lh-14 mb-8">参考首付</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 楼盘信息 -->
    <div class="box-base mb-12 bd-t bd-b">
      <div class="info-head">楼盘信息</div>
      <ul>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">楼盘别名</div>
          <div class="">{{houseInfo.house_name}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">开发商</div>
          <div class="">{{houseInfo.develop_company}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">最新开盘</div>
          <div class="">{{houseInfo.open_time}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">交房时间</div>
          <div class="">{{houseInfo.delivery_time}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">预售证号</div>
          <div class="">{{houseInfo.presell_no}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">项目地址</div>
          <div class="">{{houseInfo.address}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">物业类型</div>
          <div class="">{{houseInfo.build_cat}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">装修情况</div>
          <div class="">{{houseInfo.decoration_condition}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">车位数量</div>
          <div class="">{{houseInfo.car_num}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">容积率</div>
          <div class="">{{houseInfo.cubage_rate}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">绿化率</div>
          <div class="">{{houseInfo. greening_rate}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">占地面积</div>
          <div class="">{{houseInfo.cover}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">平均价格</div>
          <div class="">{{houseInfo.average_price}}</div>
        </li>
        <li class="info-list-item bd-t fx">
          <div class="c-9" style="width: 80px;">物业公司</div>
          <div class="">{{houseInfo.property_company}}</div>
        </li>
      </ul>
    </div>
    <!-- 楼盘简介 -->
    <div class="box-base mb-12 bd-t bd-b">
      <div class="info-head bd-b">楼盘简介</div>
      <!-- <div class="f-13 pt-16 pb-16" style="line-height: 1.9;" v-html="houseInfo.content"></div> -->
      <div class="f-13 pt-16 pb-16 house-desc" v-html="houseInfo.content"></div>
    </div>
    <!-- 最新开盘 -->
    <div class="box-base mb-12 bd-t bd-b">
      <div class="info-head">最新开盘</div>
      <div class="pb-20">
        <ul class="b-list touch-scrolling">
          <li class="b-list-item">
            <div class="item-pic" :style="{backgroundImage: imgSrc}"></div>
            <div class="c-red pt-12 lh-1 f-13">12500元/平</div>
          </li>
          <li class="b-list-item">
            <div class="item-pic" :style="{backgroundImage: imgSrc}"></div>
            <div class="c-red pt-12 lh-1 f-13">12500元/平</div>
          </li>
          <li class="b-list-item">
            <div class="item-pic" :style="{backgroundImage: imgSrc}"></div>
            <div class="c-red pt-12 lh-1 f-13">12500元/平</div>
          </li>
          <li class="b-list-item">
            <div class="item-pic" :style="{backgroundImage: imgSrc}"></div>
            <div class="c-red pt-12 lh-1 f-13">12500元/平</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 提示 -->
    <div class="declear">
      <span class="icon-declear"></span>
      <div class="declear-txt">以上信息仅供参考，最终结果以开发商公布以及政府部门登记备案为准，谢谢！</div>
    </div>
    <!-- placeholder -->
    <div style="height: 68px;"></div>
    <!-- 底部功能区 -->
    <div class="bottom-section fx fx-justify-between">
      <!-- 咨询是跳转到第三方IM应用中 暂时没提供 -->
      <div class="link-item">
        <i class="icon-base follow-icon"></i>
        <span class="f-12">咨询</span>
      </div>
      <div class="link-item" @click="isFormPopupShow = true">
        <i class="icon-base reserve-icon"></i>
        <span class="f-12">预约</span>
      </div>
      <a class="btn-base c-btn btn-fbk-green" style="width: 70%;" :href="telHref">联系售楼处{{tel}}</a>
    </div>
    <!-- 图片弹窗展示区域 -->
    <!-- 这里需要用v-if， 虽然v-show渲染更节省性能，但是swipe组件不支持 -->
    <div class="popup-imgs" v-if="isPopupImgsShow" @click="isPopupImgsShow = false">
      <div class="pos-r" style="width: 100%; height: 250px;">
        <swipe style="width: 100%; height: 100%;" v-model="popupImgsIndex" :pagination="false" :loop="false">
          <swipe-item>
            <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/样板间1-1-345x230.jpg" alt="">
          </swipe-item>
          <swipe-item>
            <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/样板间1-1-345x230.jpg" alt="">
          </swipe-item>
          <swipe-item>
            <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/样板间1-1-345x230.jpg" alt="">
          </swipe-item>
        </swipe>
        <div class="popup-close" @click.stop="isPopupImgsShow = false">
          <div class="icon-close-base icon-close"></div>
        </div>
      </div>
    </div>
    <form-popup :is-form-popup-show="isFormPopupShow"
                :info="reserveInfo"
                @close="isFormPopupShow = false"></form-popup>
  </div>
</template>
<script>
import fetchDataMixin from '@/components/common/fetch-mixin.js'
import headNav from '@/components/common/headNav.vue'
import formPopup from '@/components/common/formPopup.vue'
import {Swipe as swipe, SwipeItem as swipeItem} from 'c-swipe'
export default {
  mixins: [fetchDataMixin],
  data () {
    return {
      index: 0,
      popupImgsIndex: 0,
      isPopupImgsShow: false,
      imgSrc: 'url(//www.hjw68.com/wp-content/uploads/2017/11/2-4.png)',
      isFormPopupShow: false,
      reserveInfo: {
        title: '预约看房',
        type: 1
      },
      id: this.$route.query.id,
      tel: this.$route.query.tel,
      houseInfo: {
        decoration_condition: ''
      },
      houseStyleList: [],
    }
  },
  computed: {
    pagination () {
      return `${this.index + 1}/1`
    }
  },
  components: {
    headNav,
    swipe,
    swipeItem,
    formPopup
  },
  created () {
    this.fetchInfo()
    this.fetchHouseStyle()
  },
  computed: {
    telHref () {
      return `tel:${this.tel}`
    },
  },
  methods: {
    // 获取楼盘信息
    fetchInfo () {
      return new Promise((resolve, reject) => {
        this.fetchData(`/api/houses/detail?id=${
          this.id
        }`).then(res => {
          this.houseInfo = res.data
          resolve(res)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },

    // 获取房型信息
    fetchHouseStyle () {
      return new Promise((resolve, reject) => {
        this.fetchData(`/api/housesStyle/index?supplier_house=${this.id}`)
            .then(res => {
              this.houseStyleList = res.data.data
              resolve(res)
            }).catch(err => {
              console.log(err)
              reject(err)
            })
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.text-input {
  padding: 0 8px;
  height: 31px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
}
.icon-close-base {
  display: block;
  border-radius: 50%;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 60%;
    left: 50%;
    top: 51%;
    border-radius: 1px;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 60%;
    left: 50%;
    top: 51%;
    border-radius: 1px;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}


.base-info {
  background: #fff;
  padding: 20px 8px 0 16px;
}
.li-base {
  width: 90%;
}

.desc-box {
  flex: 1;
  line-height: 1;
  min-width: 0;
}

.info-list-item {
  padding: 10px 0;
  line-height: 21px;
}

.box-base {
  padding: 0 15px;
  background: #fff;
  overflow: hidden;
  .info-head {
    font-size: 16px;
    font-weight: bold;
    line-height: 55px;
  }
}

.b-list {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  font-size: 0;
  .b-list-item {
    display: inline-block;
    user-select: none;
    margin-right: 10px;
    .item-pic {
      width: 140px;
      height: 78px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }
}

.declear {
  margin: 2px 0;
  position: relative;
  .icon-declear {
    position: absolute;
    top: 1px;
    left: 20px;
    width: 11px;
    height: 12px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAIAAABx3JocAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTg4YmYyMS0xNzc1LTQ2MzgtYjc3My0zYWU3ZjUwOTlkNWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTFERTQ4MEQ4RUIzMTFFNjk4MkJEMTk1NEY2NzdBRjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTFERTQ4MEM4RUIzMTFFNjk4MkJEMTk1NEY2NzdBRjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyODEzZmVjZC1mY2EzLTQ1NWUtOTRhYi1hMDA5ZGVlNzE2NmIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk4OGJmMjEtMTc3NS00NjM4LWI3NzMtM2FlN2Y1MDk5ZDVlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yWz7TAAAAoJJREFUeNqklEtPIkEUhekG5CFoQIcwCAZCJLBAw4KNK0KMrPmN/AYyITEhbNyhC8OE8IxoAA0Qg4Dh4TAfXUoYaGahZ1Hprqp76tSte480Go00K3h9fW02m+12u9vtvry8vL29SZK0t7e3v79vt9t/KLDZbKsh0khBq9UijLHf789ms/f39z+fkBTIsqzVasVotVp/KnC5XGazWUqn0/V6XYRBeXBwcHh4yJkWi8VoNLIDlsFggLper4e0TqcznU51nwgEArpKpYKK4+Njv9/vdrsJE0eJkxnhhRQiIY3DIELv4+MjY7FY1DHFpkQiodfrYRUxa9AqYIP43d3d5QrBYDCVSi0UCQqTyaQanMvl5vN5LBbbZNzZ2eGbcBltmu34rUB1SdyUcJmfpcJNTCYTpG5b5eKMsuDTfAkiUNZ8G9+iIBcfFOT8axTiKWTxMKI0VW/7n0yJgtAJFdTvWvMI+Hy+bRqpaVQYDAYdXcAPPaZKcXFxsY3i6emJJZpYFpHValV1H1XLGapLtVqNkX6VvV4vX/f39/TM5r5fCjbnsZJSqcQHnSqHQiHahsRks1kysraVGRxks2Svrq4YPR6P0+mUhsMh/Z7JZMiNw+G4vLzEnZa7WRWtuTpDfKPRwBaSySQ+sHAtJMCCCtqB9Jyfn5+cnKi+Jfe9vr7GL4jHH46OjhaeIrwTFjIMC9bEMgqj0SgnLIO5zs3NTblcxk2xz3g8ziot/+Gdy1JD5N3d3e3tLa8FEaZyenrKOfR7oVAgmAqMRCJnZ2fY4lKmtObg4/GYbOfzeQ7EBKgckT+AOSINCWLyHwffrHyInp+fUfTw8MAMaQ+Hw5idcNa1/X8FGAAv9YdDWAFr4AAAAABJRU5ErkJggg==);
 
  }
  .declear-txt {
    padding: 0 20px 0 36px;
    font-size: 12px;
    color: #6b7072;
    line-height: 1.4;
  }
}

.bottom-section {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  padding: 8px 8px 8px 16px;
  box-shadow:#ddd 0 -1px 2px;
  .link-item {
    width: 32px;
    font-size: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .follow-icon {
      background: url(../assets/imgs/icon_detail_spirit.svg) no-repeat 0 -117px;
    }
    .reserve-icon {
      background: url(../assets/imgs/icon_detail_spirit.svg) no-repeat 0 -50px;
    }
    .icon-base {
      display: inline-block;
      width: 20px;
      height: 23px;
      background-size: 32px 872px;
    }
  }
  .c-btn {
    line-height: 44px;
    font-size: 16px;
  }
}

.pagination {
  position: absolute;
  padding: 1px 8px;
  line-height: 18px;
  background: rgba(0, 0, 0, .5);
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-size: 13px;
  right: 10px;
  bottom: 6px;
}

.popup-imgs {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  .popup-close {
    position: absolute;
    top: -46px;
    right: 18px;
    .icon-close {
      width: 32px;
      height: 32px;
      border: 2px solid #fff;
      &::before {
        background: #fff;
      }
      &::after {
        background: #fff;
      }
    }
  }
}

.tag-box {
  display: flex;
  .tag-detail {
    line-height: 1;
    vertical-align: top;
    padding: 4px 9px;
    border: 1px solid #e1e1e1;
    margin-right: 6px;
    border-radius: 20px;
    background-color: #fff;
    color: #999;
    font-size: 13px;
  }
}

.house-desc {
  width: 100%;
}

</style>
