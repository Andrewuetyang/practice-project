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
    // 无限滚动
    Vue.directive('infinite-scroll', {
      bind: function (el, binding, vnode) {
        let cb = binding.value
        let vm = vnode.context
        let disabled = el.getAttribute('infinite-scroll-disabled')
        let distance = Number(el.getAttribute('infinite-scroll-distance'))
        distance = distance ? distance : 0

        // 监听滚动事件
        el.addEventListener('scroll', function (event) {
          let offsetHeight = event.currentTarget.offsetHeight,
            scrollHeight = event.currentTarget.scrollHeight,
            scrollTop = event.currentTarget.scrollTop,
            scrollBottom = offsetHeight + scrollTop

          if (scrollHeight - scrollBottom <= distance) {
            if (!vm[disabled] && typeof cb === 'function') {
              cb()
            }
          }
        })

      }
    });
  }
}
