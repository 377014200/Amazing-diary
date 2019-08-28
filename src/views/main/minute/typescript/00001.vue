<template>
   <div id="cnblogs_post_body">
      <h2>typescript 的数据类型</h2>
      <p>十种类型</p>
      <blockquote style="text-indent: 0">
         <strong>Undefined</strong>: <br>
         <strong>Number</strong>:数值类型;<br>
         <strong>string</strong>: 字符串类型;<br>
         <strong>Boolean</strong>: 布尔类型；<br>
         <strong>enum</strong>：枚举类型；<br>
         <strong>any</strong>: 任意类型，一个牛X的类型；<br>
         <strong>void</strong>：空类型；<br>
        <strong>Array</strong>: 数组类型;<br>
         <strong>Tuple</strong>: 元祖类型；<br>
         <strong>Null</strong>：空类型。<br>
      </blockquote>
      <h3>Undefined类型</h3>
      <p>在js中当你定义了一个变量，但没有给他赋予任何值的时候，他就是Undefined类型。这可能和你以前学的语言稍有不同，其他语言会有个类型的默认值。</p>
      <p>我们现在来看一个例子，比如我们要声明一个年龄的变量age,我们要使用数值类型，也就是Number,但是我们不给他任何的值，我们只是在控制台给它输出，然后我们来看结果。</p>
      <p>新建demo01.ts文件，下入下面代码：</p>
      <pre-code :aliases="['typescript']">
         //声明数值类型的变量age，但不予赋值
         var age:number
         console.log(age)
      </pre-code>

      <h3>Number类型</h3>
      <p>在TypeScript中，所有的数字都是Number类型，这不分是整数还是小数。比如下面我们声明一个年龄是18岁，身高是178.5厘米。</p>
      <p>新建一个文件demo01_1.ts文件，写入下面代码</p>
      <pre-code :aliases="['typescript']">
         var age:number = 18
         var stature:number = 178.5
         console.log(age)
         console.log(stature)
      </pre-code>

      <h3>string类型</h3>
      <p>由单引号或者双引号括起来的一串字符就是字符串。比如：“技术胖”,'jspang.com'。看下面的代码：</p>
      <p>demo01_2.ts</p>
      <pre-code :aliases="['typescript']">
         var jspang:string = "技术胖 jspang.com"
         console.log(jspang)
      </pre-code>

      <h3>boolean布尔类型</h3>
      <p>作任何业务逻辑判断都要有布尔类型的参与，通过对与错的判断是最直观的逻辑处理。boolean类型只有两种值，true和false。</p>
      <pre-code :aliases="['typescript']">
         var b:boolean = true
         var c:boolean = false
      </pre-code>

      <h3>enum 类型</h3>
      <p>这种变量的结果是固定的几个数据时，就是我们使用枚举类型的最好时机：</p>
      <pre-code :aliases="['typescript']">
         enum REN{ nan , nv ,yao}
         console.log(REN.yao)  //返回了2，这是索引index，跟数组很想
      </pre-code>
      <p>如果我们想给这些枚举赋值，可以直接使用=,来进行赋值。</p>
      <pre-code :aliases="['typescript']">
         enum REN{
            nan = '男',
            nv = '女',
            yao= '妖'
         }
         console.log(REN.yao)  //返回了妖 这个字
      </pre-code>

      <h3>any类型</h3>
      <p>一个写惯了前端的人，有时候不自觉的就分不清类型了。这是个不好的习惯，也是前端的痛，就因为这个原因，JavaScript也多次被人诟病说大型项目不适合用JavaScript。但是习惯一旦养成，改是需要时间和磨练的。TypeScript友好的为我们提供了一种特殊的类型any，比如我们在程序中不断变化着类型，又不想让程序报错，这时候就可以使用any了。</p>
      <pre-code :aliases="['typescript']">
         var t:any =10
         t = "jspang"
         t = true
         console.log(t)
      </pre-code>

      <h3>Null类型</h3>
      <p>你懂得</p>
   </div>
</template>

<script>
   export default {

   }
</script>

<style scoped>

</style>