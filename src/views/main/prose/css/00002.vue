<template>
   <div id="cnblogs_post_body">
      <h2>解决元素无边框导致的布局混乱的情况</h2>
      <h3>1、使用伪类元素</h3>
      <p>display: table 使元素 table 显示</p>
      <pre-code lang="css">
         .box:before {
            content: '  ';
            display: table;
         }
      </pre-code>

      <h3>2、设置边框颜色为透明</h3>
      <p></p>
      <pre-code lang="css">
         .box {
            border: 1px solid transparent;
         }
      </pre-code>

      <h3>2、设置元素隐藏溢出</h3>
      <p></p>
      <pre-code lang="css">
         .box {
            overflow: hidden;
         }
      </pre-code>

   </div>
</template>

<script>

   export default {

   }
</script>

<style scoped>
.box{
   border:1px solid transparent;
   overflow: hidden;
}
</style>