<template>
   <div id="cnblogs_post_body">
      <h2>context</h2>
      <p>string</p>
      <p>基本目录，一个绝对路径，用于从配置中解析入口点和加载器。</p>
      <p>默认情况下，使用当前目录，但建议在配置中传递值。这使您的配置独立于CWD（当前工作目录）。</p>
      <pre-code>
         module.exports = {
            //... 默认值应该是 path.resolve(__dirname') 的一个路径
            context: path.resolve(__dirname, 'src')
            // 入口点
            entry: './main.js'
         };
      </pre-code>
   </div>
</template>

<script>
   export default {
      name: "00007"
   }
</script>

<style scoped>

</style>