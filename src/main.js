import 'babel-polyfill'; //解决安卓4.X兼容性问题
import Vue from 'vue';
import App from './App.vue';
import Store from './store'; //使用vuex
import Config from './config'; //基础配置
import Router from './router'; //使用vue-router
import Directive from './directive'; //自定义指令
import jsonp from 'jsonp'; // jsonp
import methods from './assets/lib/globalMethods.js'; // 全局方法
import './assets/lib/iconfont.css';
import './assets/public.scss';
import './assets/base.scss';
import 'c-swipe/dist/swipe.css';

// import vConsole from 'vconsole'
// new vConsole()

Vue.prototype.$jsonp = jsonp;
Vue.prototype.$methods = methods;

Vue.use(Store);
Vue.use(Config);
Vue.use(Router);
Vue.use(Directive);

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router.router,
  store: Store.store
})

