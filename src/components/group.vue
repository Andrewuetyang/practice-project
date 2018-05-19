<template>
  <div class="pos-r full-box">
    <head-nav></head-nav>
    <div class="pl-8 pr-8 bgc-w" style="padding-bottom: 100px;">
      <ul class="ul">
        <li class="li bd-b" v-for="(item, index) in groupList" :key="index">
          <div class="fx fx-align-center">
            <div class="pic-left">
              <img class="img-full" :src="item.image" alt="">
            </div>
            <div class="desc-right c-grey">
              <div class="mb-7 f-16 bold lh-19 c-3">{{item.name}}({{item.attend_num || 0}}人已参加)</div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">特色：{{item.special}}</span>
              </div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">户型：{{item.houses_style}}</span>
              </div>
              <div class="lh-28 c-3" style="height: 28px;">{{item.countDownTxt}}</div>
            </div>
          </div>
          <div class="fx lh-33">
            <div class="btn-base f-14" style="width: 108px;" @click="isFormPopupShow = true">团购报名</div>
            <div class="ta-c fx-1 f-16 c-green">报名团购优惠早知道</div>
          </div>
          <p class="prev-act ta-c c-c" v-if="item.isOverdue">往期活动</p>
        </li>
      </ul>
    </div>
    <!-- 底部热线联系方式按钮区域 -->
    <hotline-bottom btn-text="团购热线" :tel="tel"></hotline-bottom>
    <!-- 团购报名 -->
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
  mixins: [fetchDataMixin, countDownMixin],
  data () {
    return {
      isFormPopupShow: false,
      formInfo: {
        title: '团购报名',
        type: 2
      },
      page: 1,
      pageSize: 1000,
      groupList: [],
      tel: '', // 团购热线电话
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
.prev-act {
  height: 15px;
  line-height: 32px;
}
.ul {
  background: #fff;
  .li {
    padding: 20px 0;
    .pic-left {
      width: 108px;
      margin-right: 12px;
    }
    .desc-right {
      flex: 1;
      line-height: 1;
      min-width: 0;
    }
  }
}
</style>
