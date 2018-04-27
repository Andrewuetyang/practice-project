/**
 * 定义vue指令
 */
export default {
  install(Vue) {
    //使用v-backgroundColor ，设置页面背景颜色
    Vue.directive('backgroundColor', {
      inserted (el,binding) {
        document.documentElement.style.backgroundColor = binding.value;
      },
      unbind (el,binding) {
        document.documentElement.style.backgroundColor = '';
      },
    });
    Vue.directive('focus', {
      inserted: function (el) {
        // 聚焦元素
        el.focus();
      },
    });
  }
}
