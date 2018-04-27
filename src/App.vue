<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {getUrlParam} from '@/assets/lib/utils.js'

  export default {
    name: 'app',
    data() {
      return {
        transitionName: ''
      }
    },
    mounted() {
      this.isLocalStorageSupported();
      this.andriodInputBug();
    },
    methods: {
      //解决安卓点击input，弹出键盘挡住input的问题
      andriodInputBug() {
        if (/Android/gi.test(navigator.userAgent)) {
          window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
              window.setTimeout(function () {
                document.activeElement.scrollIntoViewIfNeeded();
              }, 0);
            }
          })
        }
      },

      isLocalStorageSupported() {
        var testKey = 'test',
          storage = window.sessionStorage;
        try {
          storage.setItem(testKey, 'testValue');
          storage.removeItem(testKey);
          return true;
        } catch (error) {
          alert('您处于无痕浏览,无法为您提供良好的体验，请切换正常模式访问');
          return false;
        }
      },     
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    height: 100%;
    overflow: scroll;
  }
</style>
