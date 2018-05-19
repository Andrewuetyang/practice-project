<template>
  <div class="bottom-section fx">
    <a class="btn-base c-btn fx-1 btn-fbk-green" :href="telHref">
      {{btnText + tel}}
    </a>
  </div>
</template>
<script>
export default {
  props: ['btnText', 'tel'],
  computed: {
    telHref () {
      return `tel:${this.tel}`
    }
  }
}
</script>
<style lang="scss" scoped>
.bottom-section {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  padding: 8px;
  box-shadow:#ddd 0 -1px 2px;
  .c-btn {
    line-height: 44px;
    font-size: 16px;
  }
}
</style>

