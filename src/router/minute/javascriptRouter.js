export default [
   {
      path: '00001',
      name: 'minute_javascript_00001',
      title: 'RegExt',
      component: () => import(/* webpackChunkName: "minute~javascript" */ '../../views/main/minute/javascript/00001'),
   },
   {
      path: '00002',
      name: 'minute_javascript_00002',
      title: 'Object.defineProperty()和Object.defineProperties()',
      component: () => import(/* webpackChunkName: "minute~javascript" */ '../../views/main/minute/javascript/00002'),
   },
]