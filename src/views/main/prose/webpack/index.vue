<template>
   <div class="post">
      <terminator
         title="webpack 经验总结"
         :catalogue="route"
      ></terminator>
   </div>
</template>

<script>
   import route from '@/router/prose/webpackRouter'
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