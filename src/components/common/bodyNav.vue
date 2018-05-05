<template>
  <div class="body-nav fx bd-b">
    <router-link class="fx-1 fx fx-justify-center" to="/list">
      <div>
        <div class="icon-box fx fx-justify-center fx-align-center">
          <i class="nav-icon iconfont icon-tabhome"></i>
        </div>
        <div class="nav-txt">新房楼盘</div>
      </div>
    </router-link>
    <router-link class="fx-1 fx fx-justify-center" to="/group">
      <div>
        <div class="icon-box fx fx-justify-center fx-align-center">
          <i class="nav-icon iconfont icon-bao"></i>
        </div>
        <div class="nav-txt">优惠团购</div>
      </div>
    </router-link>
    <router-link class="fx-1 fx fx-justify-center" to="/kanfangtuan">
      <div>
        <div class="icon-box fx fx-justify-center fx-align-center">
          <i class="nav-icon iconfont icon-ziyuan"></i>
        </div>
        <div class="nav-txt">看房团</div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.body-nav {
  padding: 15px 0;
  background: #fff;
  .icon-box {
    width: 48px;
    height: 48px;
    margin: auto;
    border-radius: 50%;
    background: #e6b322;
    .nav-icon {
      width: 24px;
      height: 24px;
      font-size: 24px;
      color: #fff;
      line-height: 1;
      overflow: hidden;
    }
    .nav-txt {
      font-size: 14px;
      color: #333;
      line-height: 1.2;
      margin-top: 5px;
      text-align: center;
    }
  }
}
</style>


