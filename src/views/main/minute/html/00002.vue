<template>
   <div class="post">
      <h1 class="postTitle" style="padding-right: 0px;">
         <a id="cb_post_title_url" class="postTitle2" href="https://www.cnblogs.com/xiaohuochai/p/5033039.html">HTML的16个全局属性</a>
         <div style="position: absolute; margin-left: 6px; display: inline-block; vertical-align: middle;"><img id="oImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVQ4T+2T4Q2CMBCFv27CBjgCG+gIjAAbOAIjOIJs4Ai6gRvIBpjXXCOp19T/8pJLoTneXcj3Ah91wAV4bu68xwXoAZ2EzEAmE9AWTB6AelRDyaAx9zgh0wE4ATczcTdIE7wl0oe7wX/8RMHigfQTB3fDdM1IEvYyONdIVEOSqDwCY2Z2NaS/UNbqMSQmvauUPlfbNKpBSdTUVyXSs/XyBlRCNBG20I28AAAAAElFTkSuQmCC" style="cursor: pointer; margin: 0px;"><div id="qrcode" style="display: none; position: absolute; left: 20px; top: -40px;" title="http://www.cnblogs.com/xiaohuochai/p/5033039.html"><canvas width="80" height="80" style="display: none;"></canvas><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAFI0lEQVR4Xu2c63LrIBCD4/d/6JxJWjuYID4J0k56Qv90GjAX7a5WC6m3y+VyvYQ/1+vXI9u23X+rv9Ww9XN7v/3z1nP1HHUf1b5/ruagcQmaGwLXehJ3470N9yZOFp30Lecko44avzbEAlBEE3red/SdAFQelVqzthKFES22RxPKk1SIq7Wl4+z9F4DA58S1UwCmHutaucVl9UZS/qUk466tHmcB+E4emHKdyv6ld5FCIE+k54kTfzWEPx5AyobEE8Qz7vjUzxHapB+VsVOPfakO/FgAU4u7pRypfaf9N+dKcbiXsz9ZCzsAkUh+ewDtQtgwDx0SpLzUmpJ42FjmqYvLefJ8YAEYH0adsNxaALqelFqbNFfPQ6ker8fe/yZpRe31OLXuXAB+VyLKAAhgL4kQPxAfkdaqrdnzsqTvPTvCYa9bwVC/bhZeAD4M0U0iivNG3ToV1CNH+WRcOr0hRUD8fjx/SyILQILrub0JoBrGOTVxlkDjOF5F3KYyvQzBiitJKTx5dumBC8AHApQgD6BHbuVUaicPokxKkqFlYOJbV9OO9hs6jVkAFnfhvVKOkovLF8R9jkFS7qu9Na04bAWyADxDnQLdDGFS36rOdDNdMn7Km6T/aO1u8ugmkWSDjnxJF1Vu8k8AmMoXB7RbH7V5m1+2bfqLS5RdFVcS/+/tU7UwAfkRACZCWoW2m2VdTy/nIVJP53a1Kl0lHFG0ADybleTS04FqqxIhTyNeSc8BiYfKdhqbsjCdwpDHP42/ABzTgc0QpnuHUUlBGU1l5dIbKLRczxvVqspz73ci7uIWgM/S7AQgqXTXeq43uAZpcaD7LHEacSoVAQtAcStny5jyVs61Ru2pbumX6sDbemYVgVrrbDY+nm9daxKQVIHUScEdrxUudGCq5qIqyElcrXK0KWOUDiMgCMhX6MW3B7BXiZDnpERO4UgG6bUT2buc5q7hGG8B+PXvaulPlwPTkJ4NVSV7eklkdI1KqlF0yD06X7B0Q5n6uZxaLtbN8DQ3JZWXAEiE7S4i5RvafOlt7kYpJGmvZOx9HacDVRp0AfgwSwTgLG8QXzmajEK59mLlgeQEPT4udWEzicyq8xpoCje12JbB3hbAlowhDqMCXXkcWd+pRIhmXKOka1Hjdg8TRo+5Pg5AyjhkVcp4s4CWz8/SDD2v+F5yavnVDiUWF4DaRZoh7GZdlfnSutTN0mUWVAkr0ZS98SiqDhkzUguTm38sgGmGIytRuyNNKJE5Y5TrSKWV0qjH571LJfI0Aojanc2/PYDlvbCrjYgjRz25BShpTmonfnUNpPbUfekELY4ImwziZPfRNSjvd9dMxcQphN1QIw01297zFmUMMhK1KyMqAGtObP6zoTuoK5CV5CDDld7ytgA6HOiQfampXqUPb+MocT/7Oe2JjHt44gLQhardzwphNYUbVqNyqBw/JX/Sb7Qm10MXgNVXO1zgTyGcOjFJC5IQSWZMDzhIfqTtuBfnVs4Vo2SIEYH9JwBM7xPS/imwLaBdrycFQM5QhzBp26F/NlwAPsww9f5Ays6uN/RUf3o09iqOc7P0AhD4hZxgCkA6WxtNAK09pacmVI4quZImugXg9zsTqF6Xntgr5dSgVBWkmayXGV/pxaQGynaa97gTWQCKGle8zaN2jl+RMaMarlePkj6jbDwcsvUrpUbe2pHqwP8ewIQbbn1nASHvKb2DTnzImHRu6O5devRP1sKUbOjIqDxQdRPaqHwhIBWA/wCXw6E9wfFgmQAAAABJRU5ErkJggg==" style="display: block;"></div></div></h1>
      <div class="clear"></div>
      <div class="postBody">
         <div id="cnblogs_post_body" class="blogpost-body"><h2>前面的话</h2>
            <p><span class="Apple-tab-span">在HTML中，属性能表达相当丰富的语义，而且属性也会额外提供很多实用的功能</span>，HTML共支持16个常见的全局属性。</p>
            <p>&nbsp;</p>
            <h2>HTML原有属性</h2>
            <h3 id="anchor1">accesskey</h3>
            <p>作用：浏览器用来创建激活或聚焦元素的快捷键</p>
            <p>值：一个键盘字符如 O</p>
            <p>范围：支持该属性的元素有&lt;a&gt;、&lt;area&gt;、&lt;button&gt;、&lt;input&gt;、&lt;label&gt;、&lt;legend&gt;、&lt;textarea&gt;</p>
            <p>注意：使用该属性可能在新窗口打开链接时可能会被浏览器屏蔽</p>
            <div class="cnblogs_code"><div class="cnblogs_code_toolbar"><span class="cnblogs_code_copy"><a href="javascript:void(0);" onclick="copyCnblogsCode(this)" title="复制代码"><img src="//common.cnblogs.com/images/copycode.gif" alt="复制代码"></a></span></div>
               <pre>&lt;div&gt;
    &lt;a href=<span style="color: #800000;">"</span><span style="color: #800000;">https://www.baidu.com</span><span style="color: #800000;">"</span> accesskey=<span style="color: #800000;">"</span><span style="color: #800000;">b</span><span style="color: #800000;">"</span>&gt;百度&lt;/a&gt;
    &lt;a href=<span style="color: #800000;">"</span><span style="color: #800000;">https://www.taobao.com</span><span style="color: #800000;">"</span> accesskey=<span style="color: #800000;">"</span><span style="color: #800000;">a</span><span style="color: #800000;">"</span>&gt;阿里&lt;/a&gt;
    &lt;a href=<span style="color: #800000;">"</span><span style="color: #800000;">https://www.qq.com</span><span style="color: #800000;">"</span> accesskey=<span style="color: #800000;">"</span><span style="color: #800000;">t</span><span style="color: #800000;">"</span>&gt;腾讯&lt;/a&gt;
    &lt;p&gt;快捷键(alt+b)可以跳转到百度；快捷键(alt+a)可以跳转到阿里；快捷键(alt+t)可以跳转到腾讯&lt;/p&gt;
&lt;/div&gt;</pre>
               <div class="cnblogs_code_toolbar"><span class="cnblogs_code_copy"><a href="javascript:void(0);" onclick="copyCnblogsCode(this)" title="复制代码"><img src="//common.cnblogs.com/images/copycode.gif" alt="复制代码"></a></span></div></div>
            <p><iframe src="https://demo.xiaohuochai.site/html/16attr/h1.html" frameborder="0" width="320" height="155"></iframe></p>
            <h3 id="anchor2">class</h3>
            <p>作用：规定元素的一个或多个类名</p>
            <p>值：多个类名用空格分隔</p>
            <p>注意：类名不能以数字开头</p>
            <p>&nbsp;</p>
            <h3 id="anchor3">dir</h3>
            <p>作用：文字的方向</p>
            <p>值：ltr/rtl/auto</p>
            <p><iframe src="https://demo.xiaohuochai.site/html/16attr/h22.html" frameborder="0" width="300" height="200"></iframe></p>
            <h3 id="anchor4">id</h3>
            <p>作用：规定元素的唯一标识</p>
            <p>注意：若浏览器中出现多个id名的情况，CSS样式对所以该id名的元素都生效，但javascript脚本仅对第一个出现该id名的元素生效</p>
            <p><img src="https://images2015.cnblogs.com/blog/740839/201512/740839-20151209160940168-161832411.gif" alt=""></p>
            <h3 id="anchor5">lang</h3>
            <p>作用：规定元素内容的语言</p>
            <div class="cnblogs_code">
<pre><span style="color: #000000;">en:英文
zh:中文
zh</span>-CN：简体中文</pre>
            </div>
            <div>
               <div>zh 是中文，代表的是宏语言（Macrolanguage），zh 单独用表示中文整体，可以是方言、文言文、简繁体等混合内容。理论上 zh-CN 表示的是中国大陆中文，包含方言和简繁体，但默认指简体普通话。为了精准性，应该用独立语种替换，包括但不仅限于普通话和七大方言：</div>
               <div>
                  <div class="cnblogs_code"><div class="cnblogs_code_toolbar"><span class="cnblogs_code_copy"><a href="javascript:void(0);" onclick="copyCnblogsCode(this)" title="复制代码"><img src="//common.cnblogs.com/images/copycode.gif" alt="复制代码"></a></span></div>
                     <pre><span style="color: #000000;">cmn 普通话（官话、国语）
wuu 吴语（江浙话、上海话）、czh 徽语（徽州话、严州话、吴语</span>-<span style="color: #000000;">徽严片）
hak 客家语
yue 粤语（广东话）
nan 闽南语（福建话、台语）、cpx 莆仙话（莆田话、兴化语）、cdo 闽东语、mnp 闽北语、zco 闽中语
gan 赣语（江西话）
hsn 湘语（湖南话）
cjy 晋语（山西话、陕北话）<br></span></pre>
                     <div class="cnblogs_code_toolbar"><span class="cnblogs_code_copy"><a href="javascript:void(0);" onclick="copyCnblogsCode(this)" title="复制代码"><img src="//common.cnblogs.com/images/copycode.gif" alt="复制代码"></a></span></div></div>
                  <p>以下所有 zh 开头写法已于 2009 年废弃，因为在语言学的分类上，中国语言学者多认为吴语、粤语、闽语等是汉语的方言，而西方学者多认为这些语言是一门和汉语同级关系的单独语种</p>
                  <p>以下两种写法均正确，后者描述更精准，但目前浏览器和操作系统都只支持前者，使用新标准可能会造成无法匹配浏览器用户定义字体、网页翻译、程序语言自动切换等功能，为了兼容性推荐使用前者</p>
                  <div class="cnblogs_code">
<pre>zh-CN 中文 (简体, 中国大陆) 对应 cmn-Hans-<span style="color: #000000;">CN 普通话 (简体, 中国大陆)
zh</span>-SG 中文 (简体, 新加坡)   对应 cmn-Hans-<span style="color: #000000;">SG 普通话 (简体, 新加坡)
zh</span>-HK 中文 (繁体, 香港)     对应 cmn-Hant-<span style="color: #000000;">HK 普通话 (繁体, 香港)
zh</span>-MO 中文 (繁体, 澳门)     对应 cmn-Hant-<span style="color: #000000;">MO 普通话 (繁体, 澳门)
zh</span>-TW 中文 (繁体, 台湾)     对应 cmn-Hant-<span style="color: #000000;">TW 普通话 (繁体, 台湾)<br></span></pre>
                  </div>
                  <p>&nbsp;</p>
               </div>
            </div>
            <h3 id="anchor6">style</h3>
            <p><span class="Apple-tab-span">作用：设置元素的行间样式</span></p>
            <p>&nbsp;</p>
            <h3 id="anchor7"><span class="Apple-tab-span">tabindex</span></h3>
            <p>作用：规定元素的tab键次序</p>
            <p>值：&lt;number&gt;(1是第一个)</p>
            <div class="cnblogs_code">
<pre>&lt;div&gt;
    &lt;a href=<span style="color: #800000;">"</span><span style="color: #800000;">https://www.baidu.com</span><span style="color: #800000;">"</span> tabindex=<span style="color: #800000;">"</span><span style="color: #800000;">3</span><span style="color: #800000;">"</span>&gt;百度&lt;/a&gt;
    &lt;a href=<span style="color: #800000;">"</span><span style="color: #800000;">https://www.taobao.com</span><span style="color: #800000;">"</span> tabindex=<span style="color: #800000;">"</span><span style="color: #800000;">2</span><span style="color: #800000;">"</span>&gt;阿里&lt;/a&gt;
    &lt;a href=<span style="color: #800000;">"</span><span style="color: #800000;">https://www.qq.com</span><span style="color: #800000;">"</span> tabindex=<span style="color: #800000;">"</span><span style="color: #800000;">1</span><span style="color: #800000;">"</span>&gt;腾讯&lt;/a&gt;
&lt;/div&gt;</pre>
            </div>
            <p><iframe src="https://demo.xiaohuochai.site/html/16attr/h3.html" frameborder="0" width="300" height="200"></iframe></p>
            <h3 id="anchor8">title</h3>
            <p><span class="Apple-tab-span">作用：规定关于元素的额外信息，鼠标移到元素上时显示一段提示文本</span</p>
            <p><img src="https://images2015.cnblogs.com/blog/740839/201512/740839-20151209161743246-1237942253.gif" alt=""></p>
            <p>&nbsp;</p>
            <h2>HTML5新增属性</h2>
            <h3 id="anchor9">contenteditable</h3>
            <p>作用：指定是否可以在浏览器里编辑内容</p>
            <p>值：true/false</p>
            <p>注意：设置document.designMode ='on'时，页面的任意位置都可以编辑；使用contenteditable ='true'则只对具体元素和其包含的元素起作用</p>
            <p>移动端：移动端ios5以及android3之后才支持该属性</p>
            <p><iframe src="https://demo.xiaohuochai.site/html/16attr/h4.html" frameborder="0" width="300" height="200"></iframe></p>
            <p><span class="Apple-tab-span">&lt;演示框&gt;</span>选中文字后，<span class="Apple-tab-span">点击下列相应属性值可进行演示</span></p>
            <p><iframe src="https://demo.xiaohuochai.site/html/16attr/h5.html" frameborder="0" width="300" height="200"></iframe></p>
            <h3 id="anchor10">contextmenu(没有浏览器支持)</h3>
            <p>作用：跟元素关联的右键菜单</p>
            <p>值：&lt;menu&gt;元素中唯一ID</p>
            <p>&nbsp;</p>
            <h3 id="anchor11">data-*</h3>
            <p>作用：用于存储页面或应用程序的私有定制数据</p>
            <p>注意：属性名不应包含任何大写字母，且在前缀"data-"之后必须有至少一个字符；属性值可以是任意字符串</p>
            <p>使用：可以在所有浏览器中使用getAttribute方法来获取data-*属性的值，也可以使用javascript中dataset属性访问data-*属性的值，不过IE10-浏览器不支持dataset</p>
            <p>&nbsp;</p>
            <h3 id="anchor12">draggable(IE8-不支持)</h3>
            <p>作用：用户是否可以拖动元素</p>
            <p>值：true/false/auto</p>
            <p>注意：链接和图像默认是可拖动的</p>
            <p>&nbsp;</p>
            <h3 id="anchor13">dropzone(所有浏览器都不支持)</h3>
            <p>作用：规定在拖动被拖动数据时是否进行复制、移动或链接</p>
            <p>值：copy拷贝/move移动/link指向原始数据链接</p>
            <p>&nbsp;</p>
            <h3 id="anchor14">hidden(IE7-不支持)</h3>
            <p>作用：显示或隐藏该元素(与display:none的作用一样)</p>
            <p>值：hidden="" || hidden= "hidden"</p>
            <p>&nbsp;</p>
            <h3 id="anchor15">spellcheck(IE9-不支持)</h3>
            <p>作用：规定是否对元素进行拼写和语法检查,对拼写错误的单词会在其下方出现红线</p>
            <p>范围：可编辑区域（表单或contenteditable元素）</p>
            <p>值：true/false</p>
            <p>注意：移动端支持不好</p>
            <p><img src="https://images2015.cnblogs.com/blog/740839/201512/740839-20151210103116215-1480485725.gif" alt=""></p>
            <h3 id="anchor16">translate(所有浏览器都不支持)</h3>
            <p>作用：规定是否应该翻译元素内容</p>
            <p>值：yes/no</p></div><div id="MySignature">好的代码像粥一样，都是用时间熬出来的</div>
         <div class="clear"></div>
         <div id="blog_post_info_block">
            <div id="BlogPostCategory"></div>
            <div id="blog_post_info"><div id="green_channel">
               <a href="javascript:void(0);" id="green_channel_digg" onclick="DiggIt(5033039,cb_blogId,1);green_channel_success(this,'谢谢推荐！');">好文要顶</a>
               <a id="green_channel_follow" onclick="follow('fff91f67-38dc-e411-b908-9dcfd8948a71');" href="javascript:void(0);">关注我</a>
               <a id="green_channel_favorite" onclick="AddToWz(cb_entryId);return false;" href="javascript:void(0);">收藏该文</a>
               <a id="green_channel_weibo" href="javascript:void(0);" title="分享至新浪微博" onclick="ShareToTsina()"><img src="//common.cnblogs.com/images/icon_weibo_24.png" alt=""></a>
               <a id="green_channel_wechat" href="javascript:void(0);" title="分享至微信" onclick="shareOnWechat()"><img src="//common.cnblogs.com/images/wechat.png" alt=""></a>
            </div>
               <!--<div id="author_profile">-->
                  <!--<div id="author_profile_honor"></div>-->
      <!---->
               <!--</div>-->
               <!--<div id="div_digg">-->
                  <!--<div class="diggit" onclick="votePost(5033039,'Digg')">-->
                     <!--<span class="diggnum" id="digg_count">7</span>-->
                  <!--</div>-->
                  <!--<div class="buryit" onclick="votePost(5033039,'Bury')">-->
                     <!--<span class="burynum" id="bury_count">1</span>-->
                  <!--</div>-->
                  <!--<div class="clear"></div>-->
                  <!--<div class="diggword" id="digg_tips">-->
                  <!--</div>-->
               <!--</div>-->
             </div>
            <div class="clear"></div>
            <div id="post_next_prev"><a href="https://www.cnblogs.com/xiaohuochai/p/5032377.html" class="p_n_p_prefix">« </a> 上一篇：<a href="https://www.cnblogs.com/xiaohuochai/p/5032377.html" title="发布于2015-12-09 11:57">HTML5之废弃和更新的元素与属性</a><br><a href="https://www.cnblogs.com/xiaohuochai/p/5046656.html" class="p_n_p_prefix">» </a> 下一篇：<a href="https://www.cnblogs.com/xiaohuochai/p/5046656.html" title="发布于2015-12-14 21:57">了解HTML列表</a><br></div>
         </div>

      </div>
      <div class="postDesc"></div>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>