import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible'
import '../public/css/loaders.css'
import iFrameResize from '../public/js/iframe-resizer/js/iframeResizer'
import $ from 'jquery'
import { get, post } from "@/api/index.js";
import menuJson from "@/lib/menuJson.js";

Vue.prototype.$menuJson = menuJson;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

Vue.directive('resize', {
  bind: function(el, { value = {} }) {
    el.addEventListener('load', () => iFrameResize(value, el))
  }
})

Vue.use(ElementUI)
Vue.config.productionTip = false

// const whiteList = ['/login','/register','/usageseal'] // 免登录白名单

// router.beforeEach((to, from, next) => {
//   console.log(to,from);
//   if (to.name == 'Home' && to.query.taskId) {
//     console.log('储存taskid')
//     sessionStorage.setItem('taskId', to.query.taskId)
//   }
//   if (to.matched.some(res => res.meta.requireAuth)) {
//     if (sessionStorage.getItem('esignmerchantsid')) {
//       next()
//     } else {
//       if (whiteList.indexOf(to.path) !== -1) {
//         next()
//       } else {
//         return next({
//           path: '/login'
//         })
//       }
//     }
//   } else {
//     next()
//   }
// })

new Vue({
  data: function(){
      return {
        defaultActive: sessionStorage.getItem('defaultActive') || '',
        loadingHome: false,
        iframeUrl: ''
      }
  },
  render: h => h(App),
  router
}).$mount('#app')
