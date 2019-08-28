export default [
   {
      path: '00001',
      name: 'minute_webpack_00001',
      title: '关于 webpack',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00001'),
   },
   {
      path: '00002',
      name: 'minute_webpack_00002',
      title: 'webpack 的相关命令 ',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00002'),
   },
   {
      path: '00007',
      name: 'minute_webpack_00007',
      title: 'context',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00007'),
   },
   {
      path: '00003',
      name: 'minute_webpack_00003',
      title: 'entry',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00003'),
   },
   {
      path: '00004',
      name: 'minute_webpack_00004',
      title: 'output',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00004'),
   },
   {
      path: '00005',
      name: 'minute_webpack_00005',
      title: 'mode',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00005'),
   },
   {
      path: '00008',
      name: 'minute_webpack_00008',
      title: 'publicPath',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00008'),
   },
   {
      path: '00006',
      name: 'minute_webpack_00006',
      title: 'module',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00006'),
   },
   {
      path: '00009',
      name: 'minute_webpack_00009',
      title: 'plugins',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00009'),
   },
   {
      path: '00010',
      name: 'minute_webpack_00010',
      title: 'loaders',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00010'),
   },
   {
      path: '00011',
      name: 'minute_webpack_00011',
      title: 'devtool',
      component: () => import(/* webpackChunkName: "minute~webpack" */ '../../views/main/minute/webpack/00011'),
   },
]