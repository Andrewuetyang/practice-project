<template>
  <div class="pos-r" style="height: 100%; overflow-y: scroll;">
    <head-nav></head-nav>
    <div class="pl-8 pr-8 bgc-w">
      <ul class="ul">
        <li class="li bd-b pos-r">
          <div class="fx">
            <div class="pic-left">
              <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/实景图-1-333x235.jpg" alt="">
            </div>
            <div class="desc-right c-grey">
              <div class="mb-7 f-16 bold lh-19 c-3">名澳汇锦桃园(100人已参加)</div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">推荐理由：天河智慧城唯一在售住宅，地铁上盖</span>
              </div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">集合信息：</span>
              </div>
              <div class="lh-28 c-3">
                <span>服务：</span>
                <span class="tag">免费大巴</span>
              </div>
            </div>
          </div>
          <div class="fx lh-33">
            <div class="btn-base f-14 mr-12 bold" style="width: 108px;">看房团报名</div>
            <div class="fx-1 f-15">还剩：-天-时-分-秒</div>
          </div>
          <div class="fx fx-justify-between lh-33">
            <div class="ta-c c-0" style="width: 108px;">水悦山庄</div>
            <div class="c-0 mr-24">均价：7500元/m2</div>
          </div>
          <p class="prev-act ta-c c-c">往期活动</p>
        </li>
        <li class="li bd-b">
          <div class="fx">
            <div class="pic-left">
              <img class="img-full" src="http://www.hjw68.com/wp-content/uploads/2017/09/实景图-1-333x235.jpg" alt="">
            </div>
            <div class="desc-right c-grey">
              <div class="mb-7 f-16 bold lh-19 c-3">名澳汇锦桃园(100人已参加)</div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">推荐理由：天河智慧城唯一在售住宅，地铁上盖</span>
              </div>
              <div class="fx mb-6 f-12">
                <span class="text-overflow">集合信息：</span>
              </div>
              <div class="lh-28 c-3">
                <span>服务：</span>
                <span class="tag">免费大巴</span>
              </div>
            </div>
          </div>
          <div class="fx lh-33">
            <div class="btn-base f-14 mr-12 bold" style="width: 108px;">看房团报名</div>
            <div class="fx-1 f-15">还剩：-天-时-分-秒</div>
          </div>
          <div class="fx fx-justify-between lh-33">
            <div class="ta-c c-0" style="width: 108px;">水悦山庄</div>
            <div class="c-0 mr-24">均价：7500元/m2</div>
          </div>
          <p class="ta-c c-c">往期活动</p>
        </li>
      </ul>
    </div>
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
