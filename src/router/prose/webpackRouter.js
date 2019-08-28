export default [
   {
      path: '00001',
      name: 'prose_webpack_00001',
      title: 'Code Splitting (分割代码)',
      component: () => import(/* webpackChunkName: "prose~webpack" */ '../../views/main/prose/webpack/00001'),
   },
   {
      path: '00002',
      name: 'prose_webpack_00002',
      title: 'Three Shaking (按需引入)',
      component: () => import(/* webpackChunkName: "prose~webpack" */ '../../views/main/prose/webpack/00002'),
   },
   {
      path: '00003',
      name: 'prose_webpack_00003',
      title: 'webpack新特性介绍 - 简书',
      component: () => import(/* webpackChunkName: "prose~webpack" */ '../../views/main/prose/webpack/00003'),
   },
   {
      path: '00004',
      name: 'prose_webpack_00004',
      title: 'Prefetching/Preloading modules',
      component: () => import(/* webpackChunkName: "prose~webpack" */ '../../views/main/prose/webpack/00004'),
   },
]