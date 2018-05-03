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
    timeout: 100000, // 超时
    headers: {
      'accept': 'application/json',
      'Content-Type' : 'application/json'
    },
    transformRequest: [function (data) {
      return qs.stringify(data);
    }]
  })

  //添加全局方法
  Vue.prototype.$axios = instance;
}

export default {
  install
}
