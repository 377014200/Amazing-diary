export default [
   {
      path: '00001',
      name: 'minute_git_00001',
      title: '常用命令',
      component: () => import(/* webpackChunkName: "minute~git" */ '../../views/main/minute/git/00001'),
   },
   {
      path: '00002',
      name: 'minute_git_00002',
      title: '连接远程库',
      component: () => import(/* webpackChunkName: "minute~git" */ '../../views/main/minute/git/00002'),
   },

]