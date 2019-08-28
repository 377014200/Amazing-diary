<template>
   <div id="main">
      <catalog
         :catalog-list="catalogList"
      ></catalog>
      <div class="route-histry">查看历史:</div>
      <div class="main-nav">
         <router-link :to="{name: 'minute' + toggleTag}">笔记</router-link>
         <router-link :to="{name: 'prose'  + toggleTag}">总结</router-link>
         <router-link :to="{name: 'memo'}">备忘录</router-link>
      </div>
      <div id="mainContent">
         <div class="forFlow">
            <div id="post_detail">
               <!--done-->
               <div id="topics">
                  <router-view />

               </div><!--end: topics 文章、评论容器-->
            </div>
            <a name="!comments"></a>
            <div id="blog-comments-placeholder"></div>
            <!--<script type="text/javascript">var commentManager = new blogCommentManager();commentManager.renderComments(0);</script>-->

            <!--<div id='comment_form' class='commentform'>-->
               <!--<a name='commentform'></a>-->
               <!--<div id='divCommentShow'></div>-->
               <!--<div id='comment_nav'><span id='span_refresh_tips'></span>-->
                  <!--<a href='javascript:void(0);'-->
                     <!--onclick='return RefreshCommentList();'-->
                     <!--id='lnk_RefreshComments' runat='server'-->
                     <!--clientidmode='Static'-->
                  <!--&gt;刷新评论</a>-->
                  <!--<a href='#'-->
                     <!--onclick='return RefreshPage();'>刷新页面</a>-->
                  <!--<a-->
                     <!--href='#top'>返回顶部</a>-->
               <!--</div>-->
               <!--<div id='comment_form_container'></div>-->
               <!--<div class='ad_text_commentbox' id='ad_text_under_commentbox'></div>-->
               <!--<div id='ad_t2'></div>-->
               <!--<div id='opt_under_post'></div>-->
               <!--<div id='cnblogs_c1' class='c_ad_block'>-->
                  <!--<div id='div-gpt-ad-1546353474406-0' style='height:250px; width:300px;'></div>-->
               <!--</div>-->
               <!--<div id='under_post_news'></div>-->
               <!--<div id='cnblogs_c2' class='c_ad_block'>-->
                  <!--<div id='div-gpt-ad-1539008685004-0' style='height:60px; width:468px;'></div>-->
               <!--</div>-->
               <!--<div id='under_post_kb'></div>-->
               <!--<div id='HistoryToday' class='c_ad_block'></div>-->
            <!--</div> &lt;!&ndash; 暂时没什么用处 &ndash;&gt;-->


         </div><!--end: forFlow -->
      </div><!--end: mainContent 主体内容容器-->

      <side-bar
         :before-string="beforeString"
      ></side-bar><!--end: side-bar 右侧导航栏 -->

      <div class="clear"></div>

   </div><!--end: main -->
</template>

<script>
   // @ is an alias to /src
   // @js is an alias to /src/assets/
   import catalog from '@components/Catalog'
   import sideBar from '@components/SideBar'

   import '@css/common.css';
   import '@css/style.css';

   export default {
      name: 'home',
      components: {
         sideBar,
         catalog,
      },
      data: function () {
         return {
            catalogList: [],
         }
      },
      computed: {
         beforeString: function () {
            console.log(this.$route.fullPath)
            return ['minute', 'prose'].filter(str => {
               return new RegExp(str, 'g').test(this.$route.fullPath)
            })[0]
         },
         toggleTag: function () {
            let languages = ['HTML', 'CSS', 'JavaScript', 'TypeScript' ,'git' ,'ES6' ,'HTTP', 'jQuery' ,'React' ,'Vue', 'NodeJS' ,'PHP' ,'MySQL' ,'Bootstrap' ,'MongoDB' ,'移动端前端工具', 'webpack'];
           let types = {
              JavaScript: 'js',
              TypeScript: 'ts'
           }
            try{
               return "_" +languages
                  .filter( lang => new RegExp(lang,'ig').test(this.$route.fullPath))
                  .map(type =>  type in types ? types[type] : type)[0].toLowerCase()
            }catch (e) {
               return ""
            }
         }
      },
      created: function () {
      },
      mounted: function () {
         this.getCatalogue()
      },
      methods: {
         getCatalogue: function (tag) {
            tag = tag || 'h3'
            var oTopics = document.getElementById('topics')
            var tempArray = oTopics.querySelectorAll(tag);
            //为每一个章节标题顺序添加锚点标识
            this.catalogList = Array.prototype.map.call(tempArray, function (item, index) {
               var id = 'anchor' + (1 + index)
               item.setAttribute('id', id);
               return {
                  href: id,
                  innerHtml: item.innerHTML
               }
            });

            //返回章节标题这个类数组
         },
      },
      watch: {
         $route: {
            deep: true,
            immediate: true,
            handler: function (to) {
               this.$store.commit('SHOW_CONTENT', !!to.meta.catalogue)
            }
         },
         // toggleTag: function (a,b) {
         //    // console.log(a,b)
         // }
      }
   }
</script>

<style>
   @import url('~@css/common.css');
   @import url('~@css/style.css');
</style>

<style scoped>
   #main .route-histry {
      padding: 10px;
   }

   .main-nav {
      /*padding-left: 10px;*/
   }

   .main-nav a {
      display: inline-block;
      color: #000;
      font-size: 14px;
      width: 80px;
      padding: 5px 3px;
      border-radius: 0 26px 3px 0;
      text-indent: 10px;
   }

</style>