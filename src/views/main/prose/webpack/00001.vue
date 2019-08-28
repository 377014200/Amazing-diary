<template>
   <div id="cnblogs_post_body">
      <h2>Code Splitting (分割代码)</h2>
      <p><a href="https://webpack.js.org/guides/code-splitting/" target="_blank">前往失去的 webpack 官网查看详细的文章</a></p>
      <h3>入口点:使用入口配置手动分割代码</h3>
      <pre-code>
         const path = require('path');
         // 如果条目块之间有任何重复的模块，它们将包含在两个包中.
         // 它没有那么灵活，也不能用于用核心应用程序逻辑动态分割代码。
         module.exports = {
            mode: 'development',
            entry: {
               index: './src/index.js',
            +  another: './src/another-module.js'
            },
            output: {
               filename: '[name].bundle.js',
               path: path.resolve(__dirname, 'dist')
            },
         // 用于提取重复引入的代码块!!
         +   optimization: {
         +     splitChunks: {
         +       chunks: 'all'
         +     }
         +   }
         };
      </pre-code>
      <h3>动态代码分割</h3>
      <p>当涉及到动态代码分割时，webpack支持两种类似的技术。推荐的第一种方法是使用import()语法，该语法符合ECMAScript对动态导入的建议。遗留的、特定于web包的方法是使用require.ensure。让我们尝试使用这两种方法中的第一种…</p>
      <p>webpack.config.js</p>
      <pre-code>
         const path = require('path');

         module.exports = {
            mode: 'development',
            entry: {
         +     index: './src/index.js'
         -     index: './src/index.js',
         -     another: './src/another-module.js'
         },
            output: {
               filename: '[name].bundle.js',
               // 它决定了非条目块文件的名称
         +     chunkFilename: '[name].bundle.js',
               path: path.resolve(__dirname, 'dist')
            },
         -   optimization: {
         -     splitChunks: {
         -       chunks: 'all'
         -     }
         -   }
         };
      </pre-code>
      <p>src/index.js</p>
      <p>现在，我们不再静态导入lodash，而是使用动态导入来分隔块:</p>
      <pre-code>
         - import _ from 'lodash';
         -
         - function component() {
         + function getComponent() {
         -   const element = document.createElement('div');
         -
         -   // Lodash, now imported by this script
         -   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
         +   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
         +     const element = document.createElement('div');
         +
         +     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
         +
         +     return element;
         +
         +   }).catch(error => 'An error occurred while loading the component');
         }

         - document.body.appendChild(component());
         + getComponent().then(component => {
         +   document.body.appendChild(component);
         + })
      </pre-code>
      <p>src/index.js</p>
      <p>由于import()返回一个promise，所以它可以与async函数一起使用。但是，这需要使用像Babel这样的预处理器和语法动态导入Babel插件。下面是如何简化代码:</p>
      <pre-code>
         - function getComponent() {
         + async function getComponent() {
         -   return import(/* webpackChunkName: "lodash" */ 'lodash').then({ default: _ } => {
         -     const element = document.createElement('div');
         -
         -     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
         -
         -     return element;
         -
         -   }).catch(error => 'An error occurred while loading the component');
         +   const element = document.createElement('div');
         +   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
         +
         +   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
         +
         +   return element;
         }

         getComponent().then(component => {
         document.body.appendChild(component);
         });
      </pre-code>
      <p>一旦开始分割代码，分析输出以检查模块的最终位置将非常有用。官方的分析工具是一个很好的起点。还有一些其他社区支持的选项:</p>
      <ul>
         <li><a href="https://alexkuz.github.io/webpack-chart/" target="_blank">webpack-chart</a>用于webpack统计的交互式饼图。</li>
         <li><a href="https://chrisbateman.github.io/webpack-visualizer/" target="_blank">webpack-visualizer</a>可视化并分析包，以查看哪些模块占用了空间，哪些模块可能是重复的。</li>
         <li><a href="https://github.com/webpack-contrib/webpack-bundle-analyzer" target="_blank">webpack-bundle-analyzer</a>一个插件和CLI实用程序，它将包内容表示为一个方便的交互式可缩放树地图。</li>
         <li><a href="https://webpack.jakoblind.no/optimize/" target="_blank">webpack bundle optimize helper</a>这个工具将分析您的捆绑包，并就如何改进以减少捆绑包的大小向您提供可操作的建议。</li>
      </ul>
<h1>sd</h1>

   </div>
</template>

<script>
   export default {

   }
</script>

<style scoped>

</style>