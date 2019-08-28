<template>
   <div class="post">
      <terminator
         title="webpack 笔记"
         :catalogue="route"
      ></terminator>
   </div>
</template>

<script>
   import route from '@/router/minute/webpackRouter'
   console.log(route)
   export default {
      name: "index",
      data: function () {
         return {
            route
         }
      },

   }
</script>


<style scoped>

</style>