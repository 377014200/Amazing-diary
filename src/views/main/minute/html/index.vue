<template>
   <div>
      <router-view v-if="!showContent"/>
      <div class="post" v-if="showContent">

         <h1 class="postTitle">
            <a id="cb_post_title_url" class="postTitle2"
               href="https://www.cnblogs.com/xiaohuochai/p/5203223.html">HTML学习目录</a>
         </h1>
         <div class="clear"></div>
         <div class="postBody">
            <div id="cnblogs_post_body" class="blogpost-body">
               <h2>前面的话</h2>
               <p>
                  HTML被认为是前端知识体系里面最简单的知识，几年前，很多人都推荐在W3C上学习个几天就能够基本掌握。但随着HTML5和移动端的强势发展，HTML的技能点也越来越难。世上无难事，好学好总结。小火柴将HTML的知识体系进行了梳理和归纳，总结成以下目录</p>
               <h2>目录</h2>
               <h3>语法</h3>
               <!--<p><a href="javascript:void(0)" @click="onClick">HTML基础语法</a></p>-->
               <p><router-link :to="{name: 'minute_html_00001'}">HTML基础语法</router-link></p>
               <p><router-link :to="{name: 'minute_html_00002'}">HTML全局属性</router-link></p>
               <!--<p><a href="http://www.cnblogs.com/xiaohuochai/p/5033039.html" target="_blank">HTML全局属性</a></p>-->
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5434793.html" target="_blank">HTML5设计原则</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5433698.html" target="_blank">HTML5标签嵌套规则</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/6382710.html" target="_blank">HTML条件注释</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5437216.html" target="_blank">HTML规范</a></p>
               <h3>结构</h3>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/6213200.html" target="_blank">HTML文档声明</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/6214015.html" target="_blank">HTML文档头部</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/6216649.html" target="_blank">HTML骨架结构</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/6216633.html" target="_blank">HTML块级元素</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5088983.html" target="_blank">HTML内联元素</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5087815.html" target="_blank">HTML结构元素</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5090109.html" target="_blank">HTML交互元素</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5046584.html" target="_blank">HTML标签内容模型</a></p>
               <h3>标签</h3>
               <p>【重点标签】</p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5007282.html" target="_blank">HTML锚点</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5008341.html" target="_blank">HTML图像</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5046656.html" target="_blank">HTML列表</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5047343.html" target="_blank">HTML框架</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5008466.html" target="_blank">HTML表格</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/4839792.html" target="_blank">DOM操作表格</a></p>
               <p>【多媒体】</p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5091488.html" target="_blank">HTML音频和视频</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5064854.html" target="_blank">audio和video</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5069524.html" target="_blank">音乐播放器</a></p>
               <p>【表单】</p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5174891.html" target="_blank">form元素</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5179917.html" target="_blank">input元素属性</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5179909.html" target="_blank">input元素的type类型</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5180638.html" target="_blank">表单控件</a></p>
               <p><a href="http://www.cnblogs.com/xiaohuochai/p/5183699.html" target="_blank">表单美化</a></p>
               <p>&nbsp;</p></div>
            <div id="MySignature"></div>
            <div class="clear"></div>
            <div id="blog_post_info_block">
               <div id="BlogPostCategory"></div>
               <div id="EntryTag"></div>
               <div id="blog_post_info">
               </div>
               <div class="clear"></div>
               <div id="post_next_prev"></div>
            </div>


         </div>
      </div>
   </div>

</template>

<script>
   import {mapState} from 'vuex'
   export default {
      name: "index",
      data: function () {
         return {

         }
      },
      computed:{
         ...mapState(['showContent'])
      },
      methods: {
         onClick: function () {
            this.$router.push({name: 'html_0001'})
         }
      },
      mounted: function () {
         console.log(this.showContent)
      },
      watch: {
         showContent: function (a) {
            console.log(a)
         },

      }
   }
</script>

<style scoped>

</style>