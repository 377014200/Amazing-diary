export default [
   {
      path: '00001',
      name: 'prose_css_00001',
      title: '如何实现元素水平垂直居中',
      component: () => import(/* webpackChunkName: "prose~css" */ '../../views/main/prose/css/00001'),
   },
   {
      path: '00002',
      name: 'prose_css_00002',
      title: '解决元素无边框导致的布局混乱的情况',
      component: () => import(/* webpackChunkName: "prose~css" */ '../../views/main/prose/css/00002'),
   },
]