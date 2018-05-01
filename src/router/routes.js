// import引入的组件，打包在build.js中
import home from '../components/home/index.vue'
import group from '../components/group/index.vue'
import newBuilding from '../components/newBuilding/index.vue'
import kanfangtuan from '../components/kanfangtuan/index.vue'
import detail from '../components/detail/index.vue'


//前端路由
export default [
  { path: '/', component: home, meta: { title: '房产' }},
  { path: '/group', component: group, meta: { title: '优惠团购' }},
  { path: '/newBuilding', component: newBuilding, meta: { title: '看房团' }},
  { path: '/kanfangtuan', component: kanfangtuan, meta: { title: '看房团' }},
  { path: '/detail', component: detail, meta: { title: '详情' }},
]
