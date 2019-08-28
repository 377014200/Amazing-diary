<template>
    <div class="post">
        <terminator
           title="html 的知识点总结"
           :catalogue="route"
        ></terminator>
    </div>
</template>

<script>
   import route from '@/router/prose/htmlRouter'
   import terminator from '@components/terminator'
   export default {
      name: "index",
      components:{
         terminator
      },
      created: function () {
         console.log(this.route)
      },
      data: function () {
         return {
            route
         }
      }
   }
</script>

<style scoped>

</style>