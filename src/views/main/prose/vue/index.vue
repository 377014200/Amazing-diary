<template>
   <div class="post">
      <terminator
         title="vue 的知识点总结"
         :catalogue="route"
      ></terminator>
   </div>
</template>

<script>
   import route from '@/router/prose/vueRouter'
   export default {
      name: "index",
      data:function () {
         return {
            route
         }
      }
   }
</script>

<style scoped>

</style>