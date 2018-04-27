// import引入的组件，打包在build.js中
import index from '../components/home/index.vue'


//前端路由
export default [
  { path: '/', component: index, meta: { title: '房产' }},
]
