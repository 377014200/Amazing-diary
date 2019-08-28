<template>
   <div id="cnblogs_post_body">
      <h2>webpack 的相关命令</h2>
      <p>全局安装</p>
      <pre-code :aliases="['plaintext']">
         npm install webpack webpack-cli -g
      </pre-code>
      <p>卸载全局</p>
      <pre-code :aliases="['plaintext']">
         npm uninstall webpack webpack-cli -g
      </pre-code>
      <p>项目内安装</p>
      <pre-code :aliases="['plaintext']">
         npm uninstall webpack webpack-cli --save--dev
         或者
         npm uninstall webpack webpack-cli -D
      </pre-code>
      <p>要运行项目内的 webpack</p>
      <pre-code :aliases="['plaintext']">
         npx webpack
      </pre-code>
      <p>查看 webpack 的历史版本</p>
      <pre-code :aliases="['plaintext']">
         npm info webpack
      </pre-code>
      <p>指定配置文件(默认是 webpack.config.js)</p>
      <pre-code :aliases="['plaintext']">
         npx webpack --config ×××××.js(你的配置文件的名字)
      </pre-code>
      <p>可以用–profile --json >stats.json命令行参数来生成记录wepack编译打包过程json文件，把该json文件上传到 <a href="http://webpack.github.io/analyse/" target="_blank">http://webpack.github.io/analyse/</a> 可以进行资源包大小和编译构建速度的分析</p>
      <pre-code :aliases="['plaintext']">
         –profile --json >stats.json
      </pre-code>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>