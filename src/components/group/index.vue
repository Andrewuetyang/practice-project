<template>
  <div class="pos-r" style="height: 100%; overflow-y: scroll;">
    <head-nav></head-nav>
    <div class="pl-8 pr-8 bgc-w">
      <ul class="ul">
        <li class="li bd-b">
          <div class="fx fx-align-center">
            <div class="pic-left">
              <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/实景图-1-333x235.jpg" alt="">
            </div>
            <div class="desc-right c-grey">
              <div class="mb-7 f-16 bold lh-19 c-3">名澳汇锦桃园(100人已参加)</div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">特色：</span>
              </div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">户型：2室2厅1卫 建面 约65平,3室2厅2卫 建面 约88平,3室2厅2卫 建面 约89平</span>
              </div>
              <div class="lh-28 c-3">还剩39天19小时30分30秒</div>
            </div>
          </div>
          <div class="fx lh-33">
            <div class="btn-base f-14" style="width: 108px;">团购报名</div>
            <div class="ta-c fx-1 f-16 c-green">报名团购优惠早知道</div>
          </div>
        </li>
        <li class="li bd-b">
          <div class="fx fx-align-center">
            <div class="pic-left">
              <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/实景图-1-333x235.jpg" alt="">
            </div>
            <div class="desc-right c-grey">
              <div class="mb-7 f-16 bold lh-19 c-3">名澳汇锦桃园(100人已参加)</div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">特色：</span>
              </div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">户型：2室2厅1卫 建面 约65平,3室2厅2卫 建面 约88平,3室2厅2卫 建面 约89平</span>
              </div>
              <div class="lh-28 c-3">还剩39天19小时30分30秒</div>
            </div>
          </div>
          <div class="fx lh-33">
            <div class="btn-base f-14" style="width: 108px;">团购报名</div>
            <div class="ta-c fx-1 f-16 c-green">报名团购优惠早知道</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部热线联系方式按钮区域 -->
    <hotline-bottom></hotline-bottom>
  </div>
</template>
<script>
import headNav from '@/components/common/headNav.vue'
import hotlineBottom from '@/components/common/hotlineBottom.vue'
export default {
  data () {
    return {}
  },
  components: {
    headNav,
    hotlineBottom
  }
}
</script>

<style lang="scss" scoped>
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

