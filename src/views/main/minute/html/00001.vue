<template>
   <div class="post">
      <h1 class="postTitle" style="padding-right: 0px;">
         <a id="cb_post_title_url" class="postTitle2"
            href="https://www.cnblogs.com/xiaohuochai/p/5003281.html">初识HTML</a>
         <div style="position: absolute; margin-left: 6px; display: inline-block; vertical-align: middle;"><img
            id="oImg"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVQ4T+2T4Q2CMBCFv27CBjgCG+gIjAAbOAIjOIJs4Ai6gRvIBpjXXCOp19T/8pJLoTneXcj3Ah91wAV4bu68xwXoAZ2EzEAmE9AWTB6AelRDyaAx9zgh0wE4ATczcTdIE7wl0oe7wX/8RMHigfQTB3fDdM1IEvYyONdIVEOSqDwCY2Z2NaS/UNbqMSQmvauUPlfbNKpBSdTUVyXSs/XyBlRCNBG20I28AAAAAElFTkSuQmCC"
            style="cursor: pointer; margin: 0px;">
            <div id="qrcode" style="display: none; position: absolute; left: 20px; top: -40px;"
                 title="http://www.cnblogs.com/xiaohuochai/p/5003281.html">
               <canvas width="80" height="80" style="display: none;"></canvas>
               <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAFNklEQVR4Xu2c0XajMAxEk///6O4hKcQYje/I0Oymq770tAEjRqPRyCG53263r1vy5+vrecr9fn/8Vn/Tspnz12PVmn0M63Hr/9e/+3XUeRT7tt7z/j0M1Q33F1NBq+v067brjV5rk0g3TDHRdfr11+MXChWAQTVRQkIAVZlQibrlRWUUZZmqQzFHlWofA8mRqq4CEPTbJdOuhN2TSHgpq8ToliV0LWJI30yoidD1+tcLQHAUlKC3AKhYQBajtUhK1LP6S+v8kwz8bwB0WzeZVuqAxAKKI3qddPesV32LDyRgCRgqx9H5fxVAujESUgr+zOtnzm01lMbG2eQ9mkgB+Jrrs1jc7TnOWJmmArfDjS7lzuNGuI9DaNKhdQpAcyNFNr6IgS6TKDvUbUnf2vMz00t03vo/cgjuNLatVwDuW8ApAKkTEQvc7JLdiSrAnWF7pmVYPmK8VcIF4AsmanhbolobQx2JAFYjW/9/5eqdCYPWIt2lGF1d3wAuAJ/v62R/NgCXJkJd9+qsKQZSBSzn0UShNJCY6b5ncoi9ANy/s0hN6ACg86ZStrtmg+iDatlAujvT0c8w+VABBWD8HjeRIKWBjja1LCIz2geX0ViKZfbaqrvTeo9ZmJoIBe3aEtrCd7wXxUI3rJI3DWBUwqQ7dDEHiGUNArRNDE0UClgXUCpZ2cULwD002e2y4YYqlctsORBDo9dpDicGuWzPXqcA7GozDWDbRFSdzzDG0a8sa6L4aJdm5DFH65HmbrEXgJ4GKhKFj7dR5/qpeVR195HHJJ0+y1ByJAWg0EBqkGEJk4BSNmkudQ13pE20NtkPl6nudQrALktuAnoS7UY5R4NUp75CpyKvRlUhJ4TuAUpVku4+oGwiURcmuhOItP2lSvkjARxt6ROtyWNd1c2X65D+9tVDx7velpg7LGEKgkr+7C7Pcj6VGJWwG6M6Dm3MqIQLQH7oKNwPJNSzrT5bLqSxmRFMlTbFRDFs50cbqgUgwdd8vM15PtDdrHT1SmljL9jLepRM0i6qFpo4yEZZD1gWgMf3o3eTCBP2eUSGOdHxZGsiBirPqCxUlrHkWclJpB6wLABfaVux2JUw1XvWc7mMI7MaGWky8dlY6Xi5wRpNIsQ0KiuyCDOaSqXpjp9UsureJIDOE6p0Uffm3HXaYGXg35sFs5NGNhYFbKiBNAMru6LKIGslPg5AAuxqN58FtE1MVh7ccXRaUzOTiFtOZIt+FYCjJqKYl9WdrGeLSpg6Nfm1mcZFRHi4gwJw/4iv2813kwhpYHZRJ3PtMdTFl2OzjUtVSdabKuYXgF2WiSQK+OFH/inrs5NLn9VRc3K7LjHL1UhVjSqOAtD8+hMJoPNx16xGOpo20smW+dmxkkYx0mdiYF891m5MAaibmFXCWUZljfJIS7OMoO5LmkoMPTC8fcR3duxxjbJqSh8NoKOBKivEDnqdPFakhdnpiKrHnVAkBgVg/J0bBPyWfOddOXen4uqOGd0EyUDGY7YTDjVKKVMF4PjrTFXpbrrtfFZOZTW7Q0KaONolnp00MjobzefUtU99BWgB+L2dRSjTzOsya1a/lkS5GkWbvnSvWb0/9f2Bs4LtSsJopMuWtJuAtwKYvQnXT0bHEctpgqDdmKy/3NkYojWVBU0i7l7b6LhfCWC2FF1zOrMbc9aDHmZc8ZB6f88/ooGkjVRuHwsg3Vg2y67u9PpD3i2aIFwZcTdMaEa+1EhnmwM1n48DkJhHrT0LCDWtlpHEmNkG5eqx6s47BhaAjIByIn8Aetu8N78wicEAAAAASUVORK5CYII="
                  style="display: block;"></div>
         </div>
      </h1>
      <div class="clear"></div>
      <div class="postBody">
         <div id="cnblogs_post_body" class="blogpost-body"><h2>前面的话</h2>
            <p>
               HTML文档的后缀一般都是.html，但是在以前，.htm后缀也是不少的，它们都代表html文档，实际上也没有本质的区别。htm是在win32时代，系统只能识别3位扩展名时使用的。现在一般都使用.html</p>
            <p>&nbsp;</p>
            <h3 id="anchor1">概念</h3>
            <p>(Hyper Text Markup Language)超文本标记语言，是用来描述网页的一种语言</p>
            <p><span style="line-height: 1.5;"></span><span style="line-height: 1.5;">[a]超文本(Hyper Text):不只包括文本，也可以包括图片、链接、音乐、视频等非文本元素</span>
            </p>
            <p><span style="line-height: 1.5;"></span><span style="line-height: 1.5;">[b]标记语言(Markup Language):标记语言是一套标记标签，HTML使用标记标签来描述网页</span>
            </p>
            <p>&nbsp;</p>
            <h3 id="anchor2">标签</h3>
            <p>由尖括号包围的关键词，比如 &lt;html&gt;</p>
            <p>HTML 标签分为单标签和双标签</p>
            <p>[a]双标签：HTML标签通常是成对出现的，比如 &lt;b&gt; 和 &lt;/b&gt;。第一个标签是开始标签，第二个标签是结束标签；开始标签和结束标签也被称为开放标签和闭合标签</p>
            <p>[b]常见的单标签有：&lt;img&gt;&lt;br&gt;&lt;hr&gt;&lt;input&gt;</p>
            <p>[注意]HTML标签对大小写不敏感，但要全小写</p>
            <p>&nbsp;</p>
            <h3 id="anchor3">属性</h3>
            <p>HTML标签可以拥有属性，属性提供了有关HTML元素的更多信息。</p>
            <p>属性以名值对(名称/值)的形式出现，且总是在HTML元素的开始标签中规定。</p>
            <p>[常见属性]<br>[a]class: 元素类名<br>[b]id:元素ID<br>[c]style:元素的行内样式<br>[d]title:元素的额外信息，可在工具提示中显示
            </p>
            <p>&nbsp;</p>
            <h3 id="anchor4">元素</h3>
            <p>从开始标签到结束标签的所有代码</p>
            <p>HTML元素以开始标签起始，以结束标签终止，元素的内容是开始标签与结束标签之间的内容。</p>
            <p>&nbsp;</p>
            <h3 id="anchor5">文档</h3>
            <p>HTML文档被称为网页，由嵌套的HTML元素构成</p>
            <p> [注意]浏览器不会显示HTML标签，而是使用标签来解释页面的内容。</p>
            <p>&nbsp;</p>
            <h3 id="anchor6">注释</h3>
            <p>注释是在HTML插入的描述性文本，用来解释该代码或提示其他信息。</p>
            <div class="cnblogs_code">
               <pre>&lt;!-- This <span style="color: #0000ff;">is</span> a comment --&gt;</pre>
            </div>
            <p><span style="line-height: 1.5;"></span><span style="line-height: 1.5;"></span><span
               style="line-height: 1.5;">[注意]注释只出现在代码中，</span><span style="line-height: 1.5;">不会在页面中显示；且</span>注释不可嵌套
            </p>
            <p>&nbsp;</p>
            <h3 id="anchor7">实体</h3>
            <p>HTML中某些字符是预留的，必须被替换为字符实体</p>
            <table class="table">
               <tbody>
               <tr>
                  <th style="width: 20%;">显示结果</th>
                  <th style="width: 20%;">描述</th>
                  <th style="width: 30%;">实体名称</th>
                  <th style="width: 30%;">实体编号</th>
               </tr>
               <tr>
                  <td>&nbsp;</td>
                  <td>空格</td>
                  <td> &amp;nbsp;</td>
                  <td>&amp;#160;</td>
               </tr>
               <tr>
                  <td>&lt;</td>
                  <td>小于号</td>
                  <td>&amp;lt;</td>
                  <td>&amp;#60;</td>
               </tr>
               <tr>
                  <td>&gt;</td>
                  <td>大于号</td>
                  <td>&amp;gt;</td>
                  <td>&amp;#62;</td>
               </tr>
               <tr>
                  <td>&amp;</td>
                  <td>和号</td>
                  <td>&amp;amp;</td>
                  <td>&amp;#38;</td>
               </tr>
               <tr>
                  <td>"</td>
                  <td>引号</td>
                  <td>&amp;quot;</td>
                  <td>&amp;#34;</td>
               </tr>
               <tr>
                  <td>'</td>
                  <td>撇号&nbsp;</td>
                  <td>&amp;apos;&nbsp;</td>
                  <td>&amp;#39;</td>
               </tr>
               <tr>
                  <td>￠</td>
                  <td>分</td>
                  <td>&amp;cent;</td>
                  <td>&amp;#162;</td>
               </tr>
               <tr>
                  <td>£</td>
                  <td>镑</td>
                  <td>&amp;pound;</td>
                  <td>&amp;#163;</td>
               </tr>
               <tr>
                  <td>¥</td>
                  <td>日圆</td>
                  <td>&amp;yen;</td>
                  <td>&amp;#165;</td>
               </tr>
               <tr>
                  <td>€</td>
                  <td>欧元</td>
                  <td>&amp;euro;</td>
                  <td>&amp;#8364;</td>
               </tr>
               <tr>
                  <td>§</td>
                  <td>小节</td>
                  <td>&amp;sect;</td>
                  <td>&amp;#167;</td>
               </tr>
               <tr>
                  <td>©</td>
                  <td>版权</td>
                  <td>&amp;copy;</td>
                  <td>&amp;#169;</td>
               </tr>
               <tr>
                  <td>®</td>
                  <td>注册商标</td>
                  <td>&amp;reg;</td>
                  <td>&amp;#174;</td>
               </tr>
               <tr>
                  <td>™</td>
                  <td>商标</td>
                  <td>&amp;trade;</td>
                  <td>&amp;#8482;</td>
               </tr>
               <tr>
                  <td>×</td>
                  <td>乘号</td>
                  <td>&amp;times;</td>
                  <td>&amp;#215;</td>
               </tr>
               <tr>
                  <td>÷</td>
                  <td>除号</td>
                  <td>&amp;divide;</td>
                  <td>&amp;#247;</td>
               </tr>
               </tbody>
            </table>
         </div>
         <div id="MySignature">好的代码像粥一样，都是用时间熬出来的</div>
         <div class="clear"></div>
         <div id="blog_post_info_block">
            <div id="BlogPostCategory"></div>
            <div id="EntryTag">标签: <a href="https://www.cnblogs.com/xiaohuochai/tag/HTML%E6%80%BB%E7%BB%93/">HTML总结</a>
            </div>
            <div class="clear"></div>
            <div id="post_next_prev"><a href="https://www.cnblogs.com/xiaohuochai/p/4986285.html"
                                        class="p_n_p_prefix">« </a> 上一篇：<a
               href="https://www.cnblogs.com/xiaohuochai/p/4986285.html" title="发布于2015-11-22 17:40">CSS字体</a><br><a
               href="https://www.cnblogs.com/xiaohuochai/p/5007282.html" class="p_n_p_prefix">» </a> 下一篇：<a
               href="https://www.cnblogs.com/xiaohuochai/p/5007282.html" title="发布于2015-11-30 19:06">了解HTML锚点</a><br>
            </div>
         </div>


      </div>
   </div>
</template>

<script>
   export default {}
</script>

<style scoped>

</style>