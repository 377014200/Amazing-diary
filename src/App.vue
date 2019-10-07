<template>
   <div id="app">
      <div class="bg-img"></div>

      <router-view/>
      <h1>为什么 css-loader 的 module 选项会造成 hmr 失效</h1>
   </div>
</template>
<script>
   export default {
      data: function () {
         return {}
      },
      components: {},
      mounted: function () {

         var oHtml = document.getElementsByTagName('html')[0];
         var oBody = document.getElementsByTagName('body')[0];
         oBody.style.height = oHtml.style.height

      }
   }
</script>
<style lang="less">
   #app {
      height: 100%;

   }
   #app .bg-img{
      min-height: 100%;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0; left: 0;
      background: url('~@img/img3.jpg') center no-repeat ;
      background-size: 100%;
   }
   #nav {
      text-align: right;
      padding: 30px;
      a {
         font-weight: bold;
         color: #2c3e50;
         &.router-link-exact-active {
            color: #42b983;
         }
      }
   }
   .router-link-active{
      -webkit-box-shadow: 1px 1px 4px 1px rgba(33,117,188,0.9)!important;
      -moz-box-shadow: 1px 1px 4px 1px rgba(33,117,188,0.9)!important;
      box-shadow: 1px 1px 4px 1px rgba(33,117,188,0.9)!important;
   }
</style>

