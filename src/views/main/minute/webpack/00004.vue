<template>
   <div id="cnblogs_post_body">
      <h2>output</h2>
      <blockquote>
         打包后的文件一些配置
      </blockquote>
      <h3>filename</h3>
      <p>string function</p>
      <p>打包后的文件名字</p>
      <pre-code>
         // webpack.config.js

         module.exports ={
            // 入口文件
            entry: "bundle.js",
            output:{
               // 打包后的文件名字
               filename: "bundle.js",
            }
         }
      </pre-code>
      <h3>path</h3>
      <p>string</p>
      <p>打包后的文件存放路径<strong>必须要是一个绝对的路径</strong></p>
      <p>如果不写 <span class="red">webpack</span> 内部也会默认生成在 <span class="red">dist</span> 文件里面</p>
      <pre-code>
         // webpack.config.js
         const path = require('path');

         module.exports ={
            // 入口文件
            entry: "index.js",
            output:{
               // 打包后的文件名字
               filename: "bundle.js",
               // 打包后的文件路径
               path: path.resolve(__dirname, "dist")
            }
         }
      </pre-code>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>