import htmlRouter from './htmlRouter'
import cssRouter from './cssRouter'
import javascriptRouter from './javascriptRouter'
import typescriptRouter from "./typescriptRouter";
import webpackRouter from "./webpackRouter";
import gitRouter from './gitRouter';

export default [
   {
      path: 'html',
      name: 'minute_html',
      meta:{
         catalogue: true,
      },
      component:  () => import(/* webpackChunkName: "minute~html" */ '../../views/main/minute/html'),
      children: htmlRouter
   },
   // ...htmlRouter,
   {
      path:'css',
      name:'minute_css',
      meta:{
         catalogue: true,
      },
      component:  () => import(/* webpackChunkName: "minute~css" */  '../../views/main/minute/css'),
      children: cssRouter,
   },
   {
      path: 'http',
      name: 'minute_http',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "minute~http" */ '../../views/main/minute/http')
   },
   {
      path: 'vue',
      name: 'minute_vue',
      meta:{
         catalogue: true,
      },
      component:  () => import(/* webpackChunkName: "minute~vue" */ '../../views/main/minute/vue')
   },
   {
      path: 'JavaScript',
      name: 'minute_js',
      meta:{
         catalogue: true,
      },
      component:  () => import(/* webpackChunkName: "minute~javascript" */ '../../views/main/minute/javascript'),
      children: javascriptRouter,
   },
   {
      path: 'TypeScript',
      name: 'minute_ts',
      meta:{
         catalogue: true,
      },
      component:  () => import(/* webpackChunkName: "minute~typescript" */ '../../views/main/minute/typescript'),
      children: typescriptRouter
   },
   {
      path: 'es6',
      name: 'minute_es6',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "minute~es6" */ '../../views/main/minute/es6')
   },
   {
      path: 'webpack',
      name: 'minute_webpack',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack'),
      children: webpackRouter
   },
   {
      path: 'git',
      name: 'minute_git',
      meta:{
         catalogue: true,
      },
      component: () => import(/* webpackChunkName: "minute~git" */ '../../views/main/minute/git'),
      children: gitRouter
   },
]