<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import fetchMixin from '@/components/common/fetch-mixin.js'
  export default {
    mixins: [fetchMixin],
    data () {
      return {}
    },
    mounted () {
      this.andriodInputBug()
    },
    methods: {
      //解决安卓点击input，弹出键盘挡住input的问题
      andriodInputBug() {
        if (/Android/gi.test(navigator.userAgent)) {
          window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
              window.setTimeout(function () {
                document.activeElement.scrollIntoViewIfNeeded()
              }, 0)
            }
          })
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
