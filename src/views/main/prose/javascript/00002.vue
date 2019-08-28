<template>
   <div id="cnblogs_post_body">
      <h2> es5 继承的方法</h2>
      <h3>1. 原型链继承</h3>
      <p>将被继承 class 的实例赋值到要继承 class 的 prototype 上面</p>
      <p><strong>缺点:</strong></p>
      <p class="indent">1. 被继承 class 的实例的 __proto__ 上面没有 constructor 属性</p>
      <p class="indent">2. 会继承多余的属性</p>
      <pre-code >
         function Father(name, age){
            this.name = name;
            this.age = age;
         }

         Father.prototype.say = function (){
             return this
         }
         var father = new Father("为美好的世界献上祝福", 123)
            function Son(){

         }
         Son.prototype = father

         var son = new Son()
         console.log(son)
         //Son {}
           // __proto__: Father // 没有 constructor 属性
               //age: undefined
              // name: "为美好的世界献上祝福"
              // __proto__:
              // say: ƒ ()
              // constructor: ƒ Father(name, age)
              // __proto__: Object
      </pre-code>
      <h3>2. 共享原型</h3>
      <p><strong>缺点:</strong></p>
      <p class="indent">1. 被继承 class 的 prototype 不能随便更改</p>
      <p class="indent">2. 自认为是最不好的继承方案</p>
      <pre-code>
         function Father(name, age){
            this.name = name;
            this.age = age;
         }

         Father.prototype.say = function (){
            return this
         }
         function Son(){

         }
         Son.prototype = Father.prototype.say

         var son = new Son()
         console.log(son)

      </pre-code>
      <h3>3. 圣杯模式</h3>
      <p>借用第三方的构造函数, 这种方案也是最好的方案</p>
      <pre-code>
         function Father(name, age){
            this.name = name;
            this.age = age;
         }

         Father.prototype.say = function (){
            return this
         };

         function Son(){
            this.name = "为美好的世界献上祝福"
         }
         Son.prototype.amend = function () {
            return this.name
         }
         // 封装一个用于继承的方法
         function indent(Origin, Target) {
            var config = Object.getOwnPropertyDescriptors(Target.prototype)
            function Fn (){}
            Fn.prototype = Origin.prototype;
            Target.prototype = new Fn()
            Object.defineProperties(Target.prototype, config);
         }
         // 另一种
         function extend(Origin, Target) {
            var props = Object.getOwnPropertyDescriptors(Target.prototype)
            Target.prototype = Object.create(Origin.prototype)
            Object.defineProperties(Target.prototype, props);
         }

         indent(Father, Son)
         var son = new Son()
         console.log(son.amend())  // => 为美好的世界献上祝福
      </pre-code>
   </div>
</template>

<script>
   export default {
      created(){
         function Person() {

         }
         Person.prototype.any = function () {
            console.log(this.name = "寻找失去的")
         }

         let person1 = new Person()

         let person2 = new Person()
         console.log(person2.__proto__.any = 123)

         console.log(Object.getOwnPropertyDescriptor(Person, "prototype"))




      }
   }
</script>

<style scoped>

</style>