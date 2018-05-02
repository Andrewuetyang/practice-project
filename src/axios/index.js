import axios from 'axios';
import qs from 'qs';
import mockConfig from './mockConfig';
import Router from '@/router' 

//初始化
function install(Vue, opt) {
  //判断是否使用mock数据
  if (opt.mock) {
    mockConfig(axios);
  }

  //创建axios实例
  const instance = axios.create({
    timeout: 10000, // 超时
    headers: {
      'Content-Type' : 'application/json'
    },
    transformRequest: [function (data) {
      return qs.stringify(data);
    }]
  })

  // // 添加请求拦截器
  // instance.interceptors.request.use(function (config) {
  //   // 显示 loading
  //   // commonComponent.$common.showLoading({
  //   //   cover: 2,
  //   //   delay: 1000
  //   // });

  //   return config;
  // }, function (error) {
  //   // 对请求错误做些什么
  //   return Promise.reject(error);
  // })

  // 添加响应拦截器
  // instance.interceptors.response.use(function (response) {
  //   // commonComponent.$common.hideLoading(); // 清除loading
  //   //过滤不需要跳转页面
  //   const [_data, _path, _url] = [response.data, ['user_info'], response.config.url];
  //   let _filter = false;
  //   for (const item of _path) {
  //     if(_url.indexOf(item) != -1){
  //       _filter = true;
  //       break;
  //     }
  //   }
  //   //用户没有登录，跳转登录页面
  //   if (_data.ret && _filter === false && _data.ret === 10001) {
  //     Router.router.replace({
  //       'path': '/login',
  //       'query': {
  //         before: Router.router.currentRoute.path
  //       }
  //     });
  //   }

  //   return response;
  // }, function (error) {
  //   // 对响应错误做点什么
  //   // commonComponent.$common.hideLoading() // 清除loading
  //   return Promise.reject(error);
  // })

  //添加全局方法
  Vue.prototype.$axios = instance;
}

export default {
  install
}
