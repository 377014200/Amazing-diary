<template>
   <div id="cnblogs_post_body">
      <h2>module</h2>
      <blockquote>
         这些选项决定了如何处理项目中的不同类型的模块。
      </blockquote>
      <h3>rules</h3>
      <p>array</p>
      <p>创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。</p>
      <pre-code>
         // webpack.config.js

         module.exports = {
            module:{
               rules:[
                  // ....省略
               ]
            }
         }
      </pre-code>
      <p style="text-indent: 28px;"><strong>Rule.test</strong></p>
      <p>RegExt</p>
      <p>Rule.test 是 Rule.resource.test 的简写。如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource。</p>

      <p style="text-indent: 28px;"><strong>Rule.use</strong></p>
      <p>Array</p>
      <p>应用于模块的 UseEntries 列表。每个入口(entry)指定使用一个 loader。</p>
      <p>传递字符串（如：use: [ "style-loader" ]）是 loader 属性的简写方式（如：use: [ { loader: "style-loader "} ]）。</p>
      <p>可以通过传递多个加载器来链接加载器，这些加载器将从右向左应用(最后配置到第一个配置)。</p>
      <pre-code>
         use: [
            'style-loader',
            {
               loader: 'css-loader',
               options: {
                  importLoaders: 1
               }
            },
            {
               loader: 'less-loader',
               options: {
                  noIeCompat: true
               }
            }
         ]
      </pre-code>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>