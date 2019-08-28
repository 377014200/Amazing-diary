<template>
    <div id="home">
        <div id="header">
            <div id="navigator">

                <ul id="navList">
                    <li><router-link id="blog_nav_sitehome" class="menu" to="/main">首页</router-link></li>
                    <!--<li><router-link id="blog_nav_myhome" class="menu" to="/prose">总结</router-link></li>-->
                    <!--<li><a id="blog_nav_myhome" class="menu" href="https://www.cnblogs.com/xiaohuochai/">首页</a></li>-->
                    <!--<li><a id="blog_nav_newpost" class="menu" rel="nofollow" href="https://i.cnblogs.com/EditPosts.aspx?opt=1">新随笔</a></li>-->
                    <!--<li><a id="blog_nav_contact" class="menu" rel="nofollow" href="https://msg.cnblogs.com/send/%E5%B0%8F%E7%81%AB%E6%9F%B4%E7%9A%84%E8%93%9D%E8%89%B2%E7%90%86%E6%83%B3">联系</a></li>-->
                    <!--<li><a id="blog_nav_rss" class="menu" href="https://www.cnblogs.com/xiaohuochai/rss">订阅</a>-->
                        <!--&lt;!&ndash;<a id="blog_nav_rss_image" class="aHeaderXML" href="https://www.cnblogs.com/xiaohuochai/rss"><img src="//www.cnblogs.com/images/xml.gif" alt="订阅" /></a>&ndash;&gt;</li>-->
                    <!--<li><a id="blog_nav_admin" class="menu" rel="nofollow" href="https://i.cnblogs.com/">管理</a></li>-->
                </ul>
                <div class="blogStats">

                    <div id="blog_stats">
                        <span id="stats_post_count">随笔 - 700&nbsp; </span>
                        <span id="stats_article_count">文章 - 0&nbsp; </span>
                        <span id="stats-comment_count">评论 - 1193</span>
                    </div>

                </div><!--end: blogStats -->
            </div><!--end: navigator -->
        </div>
        <router-view />
        <div id="footer">
            <!--done-->
            Copyright &copy;2019 问问他们我是谁
        </div><!--end: footer -->
    </div>
</template>

<script>
  // import '@css/bundle-BlueSky.css'

  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>