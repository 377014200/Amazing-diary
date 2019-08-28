<template>
   <div id="cnblogs_post_body">
      <h2>loaders</h2>
      <p>有三种方式使用loaders</p>
      <ul>
         <li>配置文件(推荐):在 webpack.config.js 文件中指定它们</li>
         <li>内联:在每个import语句中显式地指定它们</li>
         <li>CLI:在shell命令中指定它们。</li>
      </ul>
      <h3>配置文件</h3>
      <p>module.rules 允许您在 webpack 配置中指定几个 loaders。这是显示 loaders 的一种简洁方式，有助于维护干净的代码。它还为您提供了每个 loaders 的完整概述</p>
      <p>loaders 从右到左(或从下到上)计算/执行。在下面的示例中，执行从sass-loader开始，接着是css-loader，最后是style-loader。有关加载器订单的更多信息，请参阅“加载器特性”。</p>
      <pre-code>
         module.exports = {
            module: {
               rules: [
                  {
                     test: /\.css$/,
                     use: [
                        // style-loader
                        { loader: 'style-loader' },
                        // css-loader
                        {
                           loader: 'css-loader',
                           options: {
                              modules: true
                           }
                        },
                        // sass-loader
                        { loader: 'sass-loader' }
                     ]
                  }
               ]
            }
         };
      </pre-code>
      <h3>内联</h3>
      <p>可以在import语句或任何等效的"importing"方法中指定 loaders。使用!从资源中分离加载器。每个部分都相对于当前目录进行解析。</p>
      <p>通过在内联导入语句前加上前缀，可以覆盖配置中的任何 loaders、预 loaders 和后 loaders:</p>
      <pre-code>
         import Styles from 'style-loader!css-loader?modules!./styles.css';
      </pre-code>

      <p> * 前缀 ! 将禁用所有配置的正常加载程序</p>
      <pre-code>
         import Styles from '!style-loader!css-loader?modules!./styles.css';
      </pre-code>
      <p> * 前缀! !将禁用所有已配置的加载器(预加载器、加载器、后加载器)</p>
      <pre-code>
         import Styles from '!!style-loader!css-loader?modules!./styles.css';
      </pre-code>
      <p> * 与- - -前缀!将禁用所有已配置的预加载器和加载器，但不禁用后加载器</p>
      <pre-code>
         import Styles from '-!style-loader!css-loader?modules!./styles.css';
      </pre-code>
      <p><strong>选项可以通过查询参数传递，例如?key=value&foo=bar，或者JSON对象，例如?{"key":"value"，"foo":"bar"}。</strong></p>
      <h3>CLI</h3>
      <p>你也可以通过CLI使用加载器:</p>
      <p>这将对.jade文件使用jpeg加载器，对.css文件使用样式加载器和css加载器。</p>
      <pre-code>
         webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
      </pre-code>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>