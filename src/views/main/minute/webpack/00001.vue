<template>
   <div id="cnblogs_post_body">
      <h2>为什么要用 webpack</h2>
      <blockquote>
         ① 模块化开发（import，require）<br>
         ② 预处理（Less，Sass，ES6，TypeScript……）<br>
         ③ 主流框架脚手架支持（Vue，React，Angular）<br>
         ④ 庞大的社区（资源丰富，降低学习成本）
      </blockquote>
      <p>首先，Grunt和Gulp只能将一些CSS和JS文件分别压缩合并成单个文件，当然也具有一些编译功能，比如Less和Sass的编译、ES6到ES5的编译等等。但是Webpack不仅具有它们所具备的这些编译压缩合并功能，同时还具备模块化开发和组件式开发等优点，在目前流行的前端框架React和Vue中也得到很好的支持。
      </p>
      <p>然后再说说Parcel，它一度被人认为是未来最有可能替代Webpack的前端打包工具，主要原因是它几乎零配置，而且打包入口也不仅仅只是JS，另外其打包速度也要比Webpack快。然而，虽然Parcel相比Webpack似乎具有更多优势，但它毕竟还不够成熟，没有Webpack庞大的社区，一旦遇到问题很难在网上快速找到相应解决办法。并且最近Webpack 4.0已经发布，配置相比之前简化了一些，也增加了一些新功能，所以我们完全有理由相信Webpack在未来也会越来越好。
      </p>
      <p><a href="https://github.com/chemdemo/chemdemo.github.io/issues/13" target="_blank">一个关于 webpack 简单介绍的文章很适合初学者这个文档的例子来看不是最新的 webpack 版本</a></p>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>