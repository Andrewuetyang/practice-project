import MockAdapter from 'axios-mock-adapter';

//导入假数据
import home from './data/home'
import list from './data/list'
import detail from './data/detail'

const BASEURL = ''

export default function (axios) {
  const mock = new MockAdapter(axios);

  //拦截请求
  // 楼盘列表
  mock.onPost(BASEURL + '/api/houses/index').reply(200, list);
  // 楼盘详情
  mock.onPost(BASEURL + '/api/houses/detail').reply(200, detail);
};


