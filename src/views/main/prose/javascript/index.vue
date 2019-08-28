
<template>

   <div class="post">
      <terminator
         title="javascript 的知识点总结"
         :catalogue="route"
      ></terminator>

   </div>
</template>

<script>
   import route from '@/router/prose/javascriptRouter'

   export default {
      name: "index",
      data: function (){
         return{
            route,
         }
      },

      created: function () {
         console.log(this.route)
      }
   }
</script>

<style scoped>

</style>