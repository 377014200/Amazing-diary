<template>
   <div id="cnblogs_post_body">
      <h2>plugins</h2>
      <blockquote>
         webpack 有着丰富的插件接口(rich plugin interface)。webpack 自身的多数功能都使用这个插件接口。这个插件接口使 webpack 变得极其灵活。
      </blockquote>
      <table>
         <tr>
            <th>name</th>
            <th>description</th>
         </tr>
         <tr>
            <td><a href="https://github.com/johnagan/clean-webpack-plugin" target="_blank">clean-webpack-plugin</a></td>
            <td>用于在构建之前删除您的构建文件夹</td>
         </tr>
         <tr>
            <td><a href="https://github.com/jantimon/html-webpack-plugin#third-party-addons" target="_blank">html-webpack-plugin</a></td>
            <td>简单创建 HTML 文件，用于服务器访问</td>
         </tr>

         <tr>
            <td><a href="https://github.com/webpack-contrib/uglifyjs-webpack-plugin" target="_blank">uglifyjs-webpack-plugin</a></td>
            <td>这个插件使用uglify-js来缩小你的JavaScript。这个模块至少需要Node v6.9.0和Webpack v4.0.0。</td>
         </tr>
         <tr>
            <td><a href="https://github.com/NMFR/optimize-css-assets-webpack-plugin" target="_blank">optimize-css-assets-webpack-plugin</a></td>
            <td>一个Webpack插件来优化最小化CSS资产。</td>
         </tr>
         <tr>
            <td><a href="https://webpack.js.org/plugins/mini-css-extract-plugin/" target="_blank">mini-css-extract-plugin</a></td>
            <td>这个插件将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。它支持随需应变加载CSS和源代码。
               它构建在一个新的webpack v4特性(模块类型)之上，需要webpack 4才能工作。</td>
         </tr>
         <tr>
            <td><a href="https://webpack.js.org/plugins/terser-webpack-plugin/" target="_blank">terser-webpack-plugin</a></td>
            <td>这个插件使用更简洁的语言来缩小你的JavaScript</td>
         </tr>
         <tr>
            <td><a href="https://github.com/SimenB/add-asset-html-webpack-plugin" target="_blank">add-asset-html-webpack-plugin</a></td>
            <td>将JavaScript或CSS资产添加到HTML -webpack-plugin生成的HTML中</td>
         </tr>
         <tr>
            <td><a href="https://webpack.js.org/plugins/dll-plugin/" target="_blank">DllPlugin</a></td>
            <td>DllPlugin和DllReferencePlugin提供了拆分包的方法，可以显著提高构建时性能</td>
         </tr>

      </table>



   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>