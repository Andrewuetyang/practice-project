// import引入的组件，打包在build.js中
import home from '../components/home.vue'
import group from '../components/group.vue'
import list from '../components/list.vue'
import kanfangtuan from '../components/kanfangtuan.vue'
import detail from '../components/detail.vue'

// 按需加载模块
// const setting = resolve => {
//   require.ensure([], () => { resolve(require('../components/account/setting.vue')) }, 'inside')
// }

//前端路由
export default [
  { path: '/', component: home, meta: { title: '房产' }},
  { path: '/group', component: group, meta: { title: '优惠团购' }},
  { path: '/list', component: list, meta: { title: '列表' }},
  { path: '/kanfangtuan', component: kanfangtuan, meta: { title: '看房团' }},
  { path: '/detail', component: detail, meta: { title: '详情' }},
]
