import htmlRouter from "./htmlRouter";
import cssRouter from "./cssRouter";
import vueRouter from "./vueRouter";
import javascriptRouter from "./javascriptRouter";
import webpackRoter from "./webpackRouter"
import  gitRouter from './gitRouter'
export default [
   {
      path: 'html',
      name: 'prose_html',
      meta:{
         catalogue: true,
      },
      component:  () => import( /* webpackChunkName: "prose~html" */  '../../views/main/prose/html'),
      children:htmlRouter,
   },
   {
      path:'css',
      name:'prose_css',
      meta:{
         catalogue: true,
      },
      component:  ()=> import( /* webpackChunkName: "prose~css" */ '../../views/main/prose/css'),
      children:cssRouter,
   },
   {
      path: 'http',
      name: 'prose_http',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "prose~http" */ '../../views/main/prose/http')

   },
   {
      path: 'vue',
      name: 'prose_vue',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "prose~vue" */ '../../views/main/prose/vue'),
      children: vueRouter
   },
   {
      path: 'JavaScript',
      name: 'prose_js',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "prose~javascript" */ '../../views/main/prose/javascript'),
      children: javascriptRouter
   },
   {
      path: 'TypeScript',
      name: 'prose_ts',
      meta:{
         // catalogue: true,
      },
      component: () => import(/* webpackChunkName: "prose~typescript" */ '../../views/main/prose/typeScript')
   },
   {
      path: 'es6',
      name: 'prose_es6',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "prose~es6" */ '../../views/main/prose/es6')
   },
   {
      path: 'webpack',
      name: 'prose_webpack',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "prose~webpack" */ '../../views/main/prose/webpack'),
      children: webpackRoter,
   },
   {
      path: 'git',
      name: 'prose_git',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "prose~webpack" */ '../../views/main/prose/git'),
      children: gitRouter,
   }
]