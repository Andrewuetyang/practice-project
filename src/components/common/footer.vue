<template>
  <div class="footer">
    <ul class="fx nav-bottom">
      <li>关于我们</li>
    </ul>
    <div class="footer-info">
      <p class="f-13">Copyright©2017 广州嘉鸿房地产代理有限公司 粤ICP备 17148220号-1</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    global () {
      return this.$store.state.app.global
    }
  },
}
</script>
<style lang="scss" scoped>
  .footer {
    padding: 0 15px;
    background: #2f3130;
    color: #727373;
  }
  .nav-bottom {
    border-bottom: 1px solid #3e403f;
    line-height: 46px;
    font-size: 13px;
  }
  .footer-info {
    text-align: center;
    line-height: 16px;
    font-size: 12px;
    padding: 10px 0;
  }
  .f-13 {
    font-size: 13px;
  }
  .lh-15 {
    line-height: 15px;
  }
</style>


