/**
 * 配置信息
 */
let host = location.hostname;
let port = location.port;

let appUrl = port == '8080' ? '' : 'http://www.marksit.space:81';

export default {
  install(Vue) {
    //添加全局方法
    Vue.prototype.$config = {
      'appUrl': appUrl
    }
  }
}
