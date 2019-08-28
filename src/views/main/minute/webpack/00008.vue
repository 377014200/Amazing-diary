<template>
   <div id="cnblogs_post_body">
      <h2>publicPath</h2>
      <p>string function</p>
      <p>这属性很重要,也容易被忽略,当你在生产环境下引入的静态资源 404 的时候这个属性尤为重要</p>
      <p>对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。</p>
      <p>此选项指定在浏览器中所引用的「此输出目录对应的公开 URL」。相对 URL(relative URL) 会被相对于 HTML 页面（或 <base> 标签）解析。相对于服务的 URL(Server-relative URL)，相对于协议的 URL(protocol-relative URL) 或绝对 URL(absolute URL) 也可是可能用到的，或者有时必须用到，例如：当将资源托管到 CDN 时。</p>
      <p>该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，<span class="red"><strong>此选项的值都会以/结束</strong></span></p>
      <p>默认值是一个空字符串 ""</p>
      <p>简单规则如下：output.path 中的 URL 以 HTML 页面为基准。</p>
      <pre-code>
         path: path.resolve(__dirname, "public/assets"),
         publicPath: "https://cdn.example.com/assets/"
      </pre-code>
      <p>对于这个配置：</p>
      <pre-code>
         publicPath: "/assets/",
         chunkFilename: "[id].chunk.js"
      </pre-code>
      <p>对于一个 chunk 请求，看起来像这样 /assets/4.chunk.js。</p>
      <p>对于一个输出 HTML 的 loader 可能会像这样输出：</p>
      <pre-code :aliases="['html']">
         &#60link href="/assets/spinner.gif" /&#62
      </pre-code>
      <p>或者在加载 CSS 的一个图片时：</p>
      <pre-code :aliases="['css']">
         body{
            background-image: url(/assets/spinner.gif);
         }
      </pre-code>
      <p>webpack-dev-server 也会默认从 publicPath 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。</p>
      <p>示例：</p>
      <pre-code>
         publicPath: "https://cdn.example.com/assets/", // CDN（总是 HTTPS 协议）
         publicPath: "//cdn.example.com/assets/", // CDN (协议相同)
         publicPath: "/assets/", // 相对于服务(server-relative)
         publicPath: "assets/", // 相对于 HTML 页面
         publicPath: "../assets/", // 相对于 HTML 页面
         publicPath: "", // 相对于 HTML 页面（目录相同）
      </pre-code>
      <p>在编译时(compile time)无法知道输出文件的 publicPath 的情况下，可以留空，然后在入口文件(entry file)处使用自由变量(free variable) __webpack_public_path__，以便在运行时(runtime)进行动态设置。</p>
      <pre-code>
         __webpack_public_path__ = myRuntimePublicPath

         // 应用程序入口的其他部分
      </pre-code>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>