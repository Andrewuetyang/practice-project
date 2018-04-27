import MockAdapter from 'axios-mock-adapter';

//导入假数据
import home from './data/home'

const BASEURL = 'https://www.mockdata.com'

export default function (axios) {
  const mock = new MockAdapter(axios);

  //拦截请求
  mock.onGet(BASEURL + '/home').reply(200, home);
};


