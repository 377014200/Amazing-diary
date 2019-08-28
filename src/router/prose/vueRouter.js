export default [
   {
      path: '00001',
      name: 'prose_vue_00001',
      title: '一些重要的连接',
      component: () => import(/* webpackChunkName: "minute~vue" */ '../../views/main/prose/vue/00001'),
   },
   {
      path: '00002',
      name: 'prose_vue_00002',
      title: '打包时报错：Error: CSS minification error:',
      component: () => import(/* webpackChunkName: "minute~vue" */ '../../views/main/prose/vue/00002'),
   },
]