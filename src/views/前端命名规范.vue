<template>
   <h1>
      前端布局规范细则

      一、命名规范：

      1、基本要求：

      1）文件编码统一使用 UTF-8 编码；
      2）命名时以符合语义为主要参考指标，CSS属性书写规范，采用统一风格及命名方法；
      3）结构清晰，层级关系明朗，以不超过三级为标准；
      4）同一表现形式的样式要求可重复利用，模块组件类的样式要求可整体外部移植；
      5）编写 CSS 的时候，应当避免使用CSS Hack，能不用则不用。
      6）所有页面默认都针对Firefox 等最接近标准的浏览器进行设计，然后使用 IE 特有条件注释功能进行针对性修正。
      7）请使用英文进行命名，尽量避免使用拼音。命名要求具有可读性，尽量避免使用缩写。命名虽然允许数字，但应尽量避免使用数字命名。
      2、命名方法 要求采用统一的命名方法。常用命名方法有：
      1）连写式命名法，如：helloworld
      2）中线命名法，如：hello-world（目前采用此方法的较多，建议采用）
      3）下划线命名法，如：hello_world
      4）骆驼命名法，如：helloWorld
      5）帕斯卡命名法，如：HelloWorld
      6）其他方法。
      3、样式文件命名规范 如：
      全局的：global.css；
      主要的：master.css；
      布局、版面：layout.css；
      专栏：columns.css；
      文字：font.css；
      打印样式：print.css；
      主题：themes.css；
      补丁：pacth.css；
      格式化浏览器：base.css等。
      4、ID及Class命名常用名称
      页头：header
      登录条：login-bar
      标志：logo
      侧栏：side-bar
      广告：banner
      导航：nav
      子导航：sub-nav
      菜单：menu
      子菜单：sub-menu
      搜索：search
      滚动：scroll
      页面主体：main
      内容：content
      标签页：tab
      文章列表：list
      提示信息：msg
      小技巧：tips
      栏目标题：title
      加入：joinus
      指南：guild
      服务：service
      热点：hot
      新闻：news
      下载：download
      注册：regsiter
      状态：status
      按钮：btn
      投票：vote
      合作伙伴：partner
      友情链接：friendlink
      版权：copyright
      外套：wrap
      页脚：footer
      标题：title
      顶导航：top-nav（mini-nav）
   </h1>
</template>

<script>
   export default {
      name: "前端命名规范"
   }
</script>

<style scoped>

</style>