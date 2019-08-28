<template>
   <div id="cnblogs_post_body">
      <h2>devtool</h2>
      <blockquote>
         选择一种样式的源映射来增强调试过程。这些值会极大地影响构建和重建速度。
      </blockquote>
      <table>
         <thead>
         <tr>
            <th>devtool</th>
            <th>build</th>
            <th>rebuild</th>
            <th>production</th>
            <th>quality</th>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td><div class="content"><p>(none)</p></div></td>
            <td class="description desktop">+++</td>
            <td>+++</td>
            <td>yes</td>
            <td>bundled code</td>
         </tr>
         <tr>
            <td><div class="content"><p>eval</p></div></td>
            <td class="description desktop">+++</td>
            <td>+++</td>
            <td>no</td>
            <td>使用的 js 中 eval 函数</td>
         </tr>
         <tr>
            <td><div class="content"><p>cheap-eval-source-map</p></div></td>
            <td class="description desktop">+</td>
            <td>++</td>
            <td>no</td>
            <td>transformed code (lines only)</td>
         </tr>
         <tr>
            <td><div class="content"><p class="red">cheap-module-eval-source-map</p></div></td>
            <td class="description desktop">o</td>
            <td>++</td>
            <td>no</td>
            <td>development 下推荐使用</td>
         </tr>
         <tr>
            <td><div class="content"><p>eval-source-map</p></div></td>
            <td class="description desktop">--</td>
            <td>+</td>
            <td>no</td>
            <td>original source</td>
         </tr>
         <tr>
            <td><div class="content"><p>cheap-source-map</p></div></td>
            <td class="description desktop">+</td>
            <td>o</td>
            <td>yes</td>
            <td>(仅限行)</td>
         </tr>
         <tr>
            <td><div class="content"><p class="red">cheap-module-source-map</p></div></td>
            <td class="description desktop">o</td>
            <td>-</td>
            <td>yes</td>
            <td>production 下推荐使用,包含第三方的插件于 loaders (仅限行) </td>
         </tr>
         <tr>
            <td><div class="content"><p>inline-cheap-source-map</p></div></td>
            <td class="description desktop">+</td>
            <td>o</td>
            <td>no</td>
            <td>仅限行</td>
         </tr>
         <tr>
            <td><div class="content"><p>inline-cheap-module-source-map</p></div></td>
            <td class="description desktop">o</td>
            <td>-</td>
            <td>no</td>
            <td>包含第三方的插件于 loaders 仅限行 </td>
         </tr>
         <tr>
            <td><div class="content"><p>source-map</p></div></td>
            <td class="description desktop">--</td>
            <td>--</td>
            <td>yes</td>
            <td>会生成一个 .map 的文件来做映射关系(精确到列)</td>
         </tr>
         <tr>
            <td><div class="content"><p>inline-source-map</p></div></td>
            <td class="description desktop">--</td>
            <td>--</td>
            <td>no</td>
            <td>.map 文件里面的内容会以 base64 的形式写在 打包后的 js 文件中的底部来做映射关系(精确到列)</td>
         </tr>
         <tr>
            <td><div class="content"><p>hidden-source-map</p></div></td>
            <td class="description desktop">--</td>
            <td>--</td>
            <td>yes</td>
            <td>original source</td>
         </tr>
         <tr>
            <td><div class="content"><p>nosources-source-map</p></div></td>
            <td class="description desktop">--</td>
            <td>--</td>
            <td>yes</td>
            <td>without source content</td>
         </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>
</style>