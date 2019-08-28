import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import MinuteRouter from './minute'
import ProseRouter from './prose'
import Ahy from '../views/ahy/ahy'
console.log( process.env.BASE_URL,"router")
Vue.use(Router)
export default new Router({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: [
      {
         path: '/',
         name: 'home',
         redirect: '/main',
         component: Home,
         children: [
            {
               path: 'main',
               name: 'main',
               redirect: {name: 'memo'},
               component: () => import('../views/main/Main'),
               children: [
                  {
                     path: 'minute',
                     name: 'minute',
                     redirect: {name: 'minute_html'},
                     component: () => import('../views/main/minute'),
                     children: MinuteRouter
                  },
                  {
                     path: 'prose',
                     name: 'prose',
                     redirect: to => {
                        // 方法接收 目标路由 作为参数
                        // return 重定向的 字符串路径/路径对象
                        return to.fullPath +'/html'
                     },
                     component: () => import('../views/main/prose'),
                     children: ProseRouter
                  },
                  {
                     path: 'memo',
                     name: 'memo',
                     component: () => import('../views/main/memo'),
                  },
               ]
            },

         ]
      },
      {
         path: '/ahy',
         name: 'ahy',
         component: Ahy
      },
   ],
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition
      }
      return {x: 0, y: 0}
   }
})
