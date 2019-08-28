<template>
   <div id="cnblogs_post_body">
      <h2>介绍</h2>
      <h3>exec()</h3>
      <pre-code>
         function Son(){

         }
         Son.prototype = {
         }
         var text ="this has been a short summer";
         var pattern =/(..)or(.)/g;

         var matches=pattern.exec(text);
         console.log(matches.index);   // 16
         console.log(matches.input);   // this has been a short summer
         console.log(matches[0]);// short
         console.log(matches[1]); // sh

         console.log(matches[2]);// t
      </pre-code>
      <p>接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组;或者在没有匹配项的情况下返回null. 返回的数组是Array实例，但包含两个额外的属性: index 和 input。</p>
      <p></p>
      <p>其中，</p>
      <p style="text-indent: 42px;">index 表示匹配项在字符串中的位置。（上面代码匹配项为 short ，对应的位置 是16）;</p>
      <p style="text-indent: 42px;">input 表示应用正则表达式的字符串。（上面代码的 text变量的值 this has been a short summer）;</p>
      <p> 在数组中,</p>
      <p style="text-indent: 42px;">第一项：表示与整个模式匹配的字符串 (上面代码中的 short 匹配 正则校验);</p>
      <p style="text-indent: 42px;">其它项: 与模式中的捕获组匹配的字符串（如果模式中没有捕获组，则该数组只包含一项）</p>
      <p>上述代码匹配模式中包含两个捕获组。第一个为（..），对应捕获的字符为 sh;第二个为（.），对应的捕获字符为 t。</p>
      <p>okay. 知道了数组的各项的意义，再看一些插件或库时，就不会一直蒙圈了。当然，我们也可以根据返回的匹配数据来自定义逻辑操作了。</p>











   </div>
</template>

<script>
   export default {
      name: "00001"
   }
</script>

<style scoped>

</style>