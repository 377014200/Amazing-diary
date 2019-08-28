<template>
   <div class="post">
      <terminator
         title="css 的知识点总结"
         :catalogue="route"
      ></terminator>
   </div>
</template>

<script>
   import route from '@/router/prose/cssRouter'

   export default {
      name: "index",
      data: function () {
         return{
            route
         }
      }
   }
</script>

<style scoped>

</style>