<template>
   <div id="cnblogs_post_body">
      <h2>new 运算符都做了什么操作</h2>
      <p style="text-align: right">2019-05-09 11:09</p>
      <p>new 在 JavaScript 是一个运算符在执行的时候会隐式的执行三步操作</p>
      <p>1. 创建一个对象, 对象的 __proto__ 指向 constructor 的 prototype </p>
      <p>2. this 指向这个对象 </p>
      <p>3. constructor 执行完毕返回这个对象</p>
   </div>
</template>

<script>
   export default {
      name: "00001",
      created: function () {
         // console.log(this.$route)
      }
   }
</script>

<style scoped>

</style>