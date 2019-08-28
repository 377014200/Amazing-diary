<template>
   <div id="cnblogs_post_body">
      <h2>mode</h2>
      <p>提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。</p>
      <h3>development</h3>
      <p>会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。</p>
      <pre-code>
         // webpack.development.config.js
         module.exports = {
            + mode: 'development'
            - plugins: [
            -   new webpack.NamedModulesPlugin(),
            -   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
            - ]
         }
      </pre-code>
      <h3>production</h3>
      <p>会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.</p>
      <pre-code>
         // webpack.production.config.js
         module.exports = {
            +  mode: 'production',
            -  plugins: [
            -    new UglifyJsPlugin(/* ... */),
            -    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
            -    new webpack.optimize.ModuleConcatenationPlugin(),
            -    new webpack.NoEmitOnErrorsPlugin()
            -  ]
         }
      </pre-code>
      <p class="ps">记住，只设置 NODE_ENV，则不会自动设置 mode。</p>
      <h3>none</h3>
      <p>退出任何默认优化选项</p>
      <pre-code>
         // webpack.custom.config.js
         module.exports = {
            + mode: 'none',
            - performance: {
            -     hints: false
            - },
            - optimization: {
            -   flagIncludedChunks: false,
            -   occurrenceOrder: false,
            -   sideEffects: false,
            -   usedExports: false,
            -   concatenateModules: false,
            -   splitChunks: {
            -     hidePathInfo: false,
            -     minSize: 10000,
            -     maxAsyncRequests: Infinity,
            -     maxInitialRequests: Infinity,
            -   },
            -   noEmitOnErrors: false,
            -   checkWasmTypes: false,
            -   minimize: false,
            - },
            - plugins: []
         }
      </pre-code>


   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>