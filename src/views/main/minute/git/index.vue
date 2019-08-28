<template>
   <div class="post">
      <terminator
         title="git 笔记"
         :catalogue="route"
      ></terminator>
   </div>
</template>

<script>
   import route from '@/router/minute/gitRouter'
   export default {
      name: "index",
      data: function (){
         return{
            route,
         }
      },

   }
</script>

<style scoped>

</style>