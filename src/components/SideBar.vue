<template>
   <div id="sideBar">
      <div id="sideBarMain">

         <!--done-->
         <div class="newsItem">
            <h3 class="catListTitle">公告</h3>
            <div id="blog-news">
               <canvas id="canvas" style="width:100%;" height="100" width="700">当前浏览器不支持canvas，请更换浏览器后再试</canvas>
               <nav class="navbar">
                  <router-link class="navbar-link" :to="{name: beforeString + '_html'}">HTML</router-link>
                  <router-link class="navbar-link" :to="{name: beforeString + '_css'}">CSS</router-link>
                  <!--<a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/5249139.html">CSS</a>-->
                  <!--<a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/5613593.html">JS</a>-->
                  <router-link class="navbar-link" :to="{name: beforeString + '_js'}">JS</router-link>
                  <router-link class="navbar-link" :to="{name: beforeString + '_ts'}">TS</router-link>
                  <router-link class="navbar-link" :to="{name: beforeString + '_es6'}">ES6</router-link>
                  <router-link class="navbar-link" :to="{name: beforeString + '_git'}">git</router-link>
                  <!--<a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/7233392.html">ES6</a>-->
                  <router-link class="navbar-link" :to="{name: beforeString + '_http'}">HTTP</router-link>
                  <!--<a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/6392010.html">HTTP</a>-->
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/6489658.html">jQuery</a>
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/8794894.html">React</a>
                  <router-link class="navbar-link" :to="{name: beforeString + '_vue'}">Vue</router-link>
                  <!--<a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/7356084.html">Vue</a>-->
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/6940560.html">NodeJS</a>
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/6038637.html">PHP</a>
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/6081482.html">MySQL</a>
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/7097376.html">Bootstrap</a>
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/7372243.html">MongoDB</a>
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/7423751.html">移动端</a>
                  <a class="navbar-link" target="_blank" href="http://www.cnblogs.com/xiaohuochai/p/6666415.html">前端工具</a>
                  <router-link class="navbar-link" :to="{name: beforeString + '_webpack'}">Webpack</router-link>
               </nav>
            </div><!--<script type="text/javascript">loadBlogNews();</script>-->

         </div>

         <div id="blog-calendar" style="display:none"></div>

         <div id="leftcontentcontainer">
            <div id="blog-sidecolumn"></div>
         </div>

      </div><!--end: sideBarMain -->
   </div><!--end: sideBar 侧边栏容器 -->

</template>

<script>
   import {clock} from '@js/canvas'
   export default {
      name: "SideBar",
      mounted: function () {
         clock()
      },
      props:{
         beforeString: {
            type: String,
            default: 'minute'
         },
      }
   }
</script>

<style scoped>

</style>