<template>
  <div class="pos-r full-box">
    <head-nav></head-nav>
    <div class="pl-8 pr-8 bgc-w" style="padding-bottom: 100px;">
      <ul class="ul">
        <li class="li bd-b pos-r" v-for="(item, index) in groupList" :key="index">
          <div class="fx">
            <div class="pic-left">
              <img class="img-full" :src="item.image" alt="">
            </div>
            <div class="desc-right c-grey">
              <div class="mb-7 f-16 bold lh-19 c-3">{{item.name}}({{item.attend_num || 0}}人已参加)</div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">推荐理由：{{item.special}}</span>
              </div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">集合信息：{{item.houses_style}}</span>
              </div>
              <div class="lh-28 c-3">
                <span>服务：</span>
                <!-- <span class="tag">免费大巴</span> -->
              </div>
            </div>
          </div>
          <div class="fx lh-33">
            <div class="btn-base f-14 mr-12 bold" style="width: 108px;" @click="isFormPopupShow = true">看房团报名</div>
            <div class="fx-1 f-15">{{item.countDownTxt}}</div>
          </div>
          <!-- <div class="fx fx-justify-between lh-33">
            <div class="ta-c c-0" style="width: 108px;">水悦山庄</div>
            <div class="c-0 mr-24">均价：7500元/m2</div>
          </div> -->
          <p class="prev-act ta-c c-c" v-if="item.isOverDue == 0">往期活动</p>
        </li>
      </ul>
      <!-- <p class="c-8 f-14 ta-c lh-38" v-if="isLastPage">已经是最后一条数据了！</p>
      <p class="c-8 f-14 ta-c lh-38 fx fx-align-center fx-justify-center" v-else>
        <i class="icon-loading"></i>
        <span class="c-0 f-14">加载中...</span>
      </p> -->
    </div>
    
    <hotline-bottom></hotline-bottom>

    <form-popup :is-form-popup-show="isFormPopupShow"
                :info="formInfo"
                @close="isFormPopupShow = false"></form-popup>
  </div>
</template>
<script>
import headNav from '@/components/common/headNav.vue'
import hotlineBottom from '@/components/common/hotlineBottom.vue'
import formPopup from '@/components/common/formPopup.vue'
import countDownMixin from '@/components/common/countDown-mixin.js'
import fetchDataMixin from '@/components/common/fetch-mixin.js'
export default {
  mixins: [countDownMixin, fetchDataMixin],
  data () {
    return {
      isFormPopupShow: false,
      formInfo: {
        title: '看房团报名',
        type: 3
      },
      page: 1,
      pageSize: 1000,
      groupList: []
    }
  },
  components: {
    headNav,
    hotlineBottom,
    formPopup
  },
  created () {
    this.fetchGroupList()
  },
  methods: {
    fetchGroupList () {
      return new Promise((resolve, reject) => {
        this.fetchData(`/api/grouphouses/index?page=${
          this.page
        }&page_size=${
          this.pageSize
        }`).then(res => {
          this.groupList = this.countDown(res.data)
          resolve(res)
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.c-c {
  color: #ccc !important;
}
.ul {
  background: #fff;
  .li {
    padding: 20px 0;
    .pic-left {
      width: 108px;
      margin-right: 12px;
      display: flex;
      align-content: center;
      flex-shrink: 0;
    }
    .desc-right {
      flex: 1;
      line-height: 1;
      min-width: 0;
    }
    .prev-act {
      position: absolute;
      left: 0;
      bottom: 4px;
      z-index: 1;
      width: 100%;
    }
  }
}
</style>
