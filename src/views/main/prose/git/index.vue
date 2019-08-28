<template>
   <div class="post">
      <terminator
         title="git 总结"
         :catalogue="route"
      ></terminator>
   </div>
</template>

<script>
   import route from '@/router/prose/gitRouter'
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