<template>
   <div id="cnblogs_post_body">
      <h2>entry</h2>
      <blockquote>string | [string] | object { &#60key&#62: string | [string] } | (function: () => string | [string] | object { &#60key&#62: string | [string] })</blockquote>
      <p>起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。</p>
      <p>动态加载的模块不是入口起点</p>
      <p>简单规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。</p>
      <pre-code>
         entry: {
            home: "./home.js",
            about: "./about.js",
            contact: "./contact.js"
         }
      </pre-code>
   </div>
</template>

<script>
   export default {
      name: "00003"
   }
</script>

<style scoped>

</style>