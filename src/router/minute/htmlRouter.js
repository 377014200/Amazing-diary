export default [
   {
      path: '00001',
      name: 'minute_html_00001',
      title: 'HTML基础语法',
      component: () => import(/* webpackChunkName: "minute~html" */ '../../views/main/minute/html/00001'),
   },
   {
      path: '00002',
      name: 'minute_html_00002',
      title: 'HTML的16个全局属性',
      component: () => import(/* webpackChunkName: "minute~html" */ '../../views/main/minute/html/00002'),
   },





]