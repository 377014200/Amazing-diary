export default [
   {
      path: '00001',
      name: 'javascript_00001',
      title: 'new 运算符都做了什么操作',
      date: '2019-05-09 11:09',
      component: () => import(/* webpackChunkName: "prose~javascript" */ '../../views/main/prose/javascript/00001'),
   },
   {
      path: '00002',
      name: 'javascript_00002',
      title: 'es5 继承的方法',
      date: '2019-05-09 11:09',
      component: () => import(/* webpackChunkName: "prose~javascript" */ '../../views/main/prose/javascript/00002'),
   },
   {
      path: '00003',
      name: 'javascript_00003',
      title: 'postMessage解决跨域和跨页面通信的问题',
      date: '',
      component: () => import(/* webpackChunkName: "prose~javascript" */ '../../views/main/prose/javascript/00003'),
   },
]