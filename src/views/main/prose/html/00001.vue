<template>
   <div id="cnblogs_post_body">
      <pre-code :aliases="['html']">
         &#60body&#62
         &#60p&#62
            input1=&#62&#60input type="text" id="input1"&#62
         &#60/p&#62
         &#60p&#62
            input2=&#62
            &#60input type="text" id="input2"&#62
         &#60/p&#62
         &#60div&#62
            我每次比input1的值加1=&#62
            &#60span id="span"&#62&#60/span&#62
         &#60/div&#62
         &#60/body&#62
         
      </pre-code>


   </div>
</template>

<script>
   export default {
      created: function () {
         // console.log(this.$route)
      }
   }
</script>

<style scoped>

</style>