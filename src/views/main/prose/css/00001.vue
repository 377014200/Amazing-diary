<template>
   <div id="cnblogs_post_body">
      <h2>如何实现元素水平垂直居中</h2>

      <h3>1、使用absolute与transform配合实现</h3>
      <p>主要实现代码：</p>
      <p>position:absolute; 首先给文本绝对定位；</p>
      <p>left:50%;top:50%;transform:translate(-50%,-50%);
         让文本距离盒子左边和上边分别为50%，再用transform向左（上）平移它自己宽度（高度）的50%，也就达到居中效果了。</p>
      <p>具体的css的代码就如下所示：</p>
      <pre-code
         lant="css"
      >
         #box{
         position: relative;
         width:400px;
         height: 380px;
         margin: auto;
         border:1px solid red;
         }

         #box span{
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%,-50%);
         border:1px solid;
         }
      </pre-code>
      <p>结果如下</p>
      <div
         class="example1-box"
         style="position: relative; max-width: 400px; min-width: 200px; height: 180px; margin: auto; border:1px solid red;"
      >
         <span
            class="example1-span"
            style=" border:1px solid;position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);"
         >
            #chidren <br> 这是一个 span 标签
         </span>
      </div>

      <h3>2、使用flex实现</h3>
      <p>主要实现代码：</p>
      <p>position:absolute; 首先给文本绝对定位；</p>
      <p>left:50%;top:50%;transform:translate(-50%,-50%);
         让文本距离盒子左边和上边分别为50%，再用transform向左（上）平移它自己宽度（高度）的50%，也就达到居中效果了。</p>
      <p>具体的css的代码就如下所示：</p>
      <pre-code :aliases="['css']">
         #box{
         width: 400px;
         display: flex;
         align-items: center;
         justify-content: center;
         }
      </pre-code>
      <p>结构如下：</p>
      <div
         class="example2-box"
         style="max-width: 400px; min-width: 200px;margin: auto; height: 180px; border: 1px solid red; display: flex; align-items: center; justify-content: center;"
      >
         <span
            class="example2-span"
            style="border:1px solid;"
         >
            #chidren <br> 这是一个 span 标签
         </span>
      </div>

      <h3>3、使用display:table来实现</h3>
      <p>主要实现代码：</p>
      <p>display: table使块状元素成为一个块级表格;</p>
      <p>display: table-cell;子元素设置成表格单元格;</p>
      <p>vertical-align: middle;使表格内容居中显示，即可实现垂直居中的效果;</p>
      <p>具体的css的代码就如下所示：</p>
      <pre-code :aliases="['css']">
         #box{
         border:1px solid red;
         display:table;
         text-align: center
         }
         #box span{
         display:table-cell;
         border:1px solid;
         vertical-align:middle
         }
      </pre-code>
      <p>结果如下：</p>
      <div
         class="example3-box"
         style="position: relative;max-width: 400px; min-width: 200px; height: 180px; margin: auto; border:1px solid red; display:table; text-align: center"
      >
         <span
            class="example3-child"
            style="display: table-cell; border:1px solid;vertical-align:middle"
         >
            <div>#chidren <br> 这是一个 span 标签</div>
         </span>
      </div>

      <h3>4、通过伪类元素实现</h3>
      <p>text-align:center 设置元素居中</p>
      <p>.box:before 设置父元素伪类且高度是100%</p>
      <p>display: inline-block; 设置伪类元素和子元素内联</p>
      <p>vertical-align:middle 设置伪类元素和子元素垂直居中</p>
      <pre-code :aliases="['css']">
         .box {
         width: 400px;
         height: 180px;
         border: 1px solid red;
         text-align:center;
         margin:auto;
         }
         .box:before{
            content: "";
            display: inline-block;
            height:100%;
            vertical-align: middle;
         }
         .box .span{
            display:inline-block;
            border:1px solid;
            vertical-align: middle;
         }
      </pre-code>
      <p>结果如下:</p>
      <div
         class="example4-box"
      >
         <span
            class="example4-span"
         >
            #chidren <br> 这是一个 span 标签
         </span>
      </div>
   </div>
</template>

<script>

   export default {

   }
</script>

<style scoped>
   .example4-box {
      max-width: 400px;
      min-width: 200px;
      height: 180px;
      border: 1px solid red;
      text-align:center;
      margin:auto;
   }
   .example4-box:before{
      content: "";
      display: inline-block;
      height:100%;
      vertical-align: middle;
   }
   .example4-box .example4-span{
      display:inline-block;
      border:1px solid;
      vertical-align: middle;
   }
</style>