<template>
   <!--
      1.一定要注意语法的错误;否则将不会显示代码的高亮! 2019/05/20;

   -->
   <div class="pre-code">
      <span class="copy-button">copy</span>
      <div
         class="hljs code"
         :class="[cardClassName]"
         style="white-space: pre"
         @input="onInput"
      >
         <slot></slot>
      </div>
   </div>
</template>

<script>
   import hljs from 'highlight.js/lib/highlight';


   export default {
      name: 'preCode',
      props: {
         linenum: {
            type: Number,
            default: 0
         },
         aliases: {
            type: Array,
            default: function () {
               return ['javascript']
            }
         }
      },
      data: function () {
         return {
            hljs,
            timestamp:new Date().getTime() * Math.random(),
         }
      },
      computed: {
         cardClassName: function () {
            if (window.btoa) {
               return "code" + btoa(String(this.timestamp))
            } else {
               return "code" + this.timestamp
            }
         }
      },
      methods: {
         onInput: function (e) {
            console.log(e.target.value)
            this.hljsCode()

         },
         loadLanguages: function () {
            this.hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
            this.hljs.registerLanguage('javascript', require('highlight.js/lib/languages//javascript'));
            this.hljs.registerLanguage('typescript', require('highlight.js/lib/languages//typescript'));
            this.hljs.registerLanguage('xml', require('highlight.js/lib/languages//xml'));
            this.hljs.registerLanguage('plaintext', require('highlight.js/lib/languages//plaintext'));
         },

         hljsCode: function () {
            // hljs.highlightBlock(block);
            var block = document.getElementsByClassName(this.cardClassName)[0]
            var aliases = this.aliases.length == 0 ? undefined : this.aliases;
            var htmlCode = this.hljs.highlightAuto(block.textContent, aliases)
            block.innerHTML=htmlCode.value
            console.log(htmlCode)
           // var oUl = document.createElement("ul")
            // var oDiv = document.createElement("div")
            // oDiv.className = 'has-numbering-bgcolor'
            // oUl.id = 'pre-numbering'
            // // console.log(htmlCode.split("\n"))
            // htmlCode.value.split("\n").forEach((item, i, htmlArray) => {
            //    if ((htmlArray.length - 1 === i && !item.trim()) || (i === 0 && !item.trim())) return
            //    var rowNum = this.linenum + i
            //    var oLi = document.createElement("li");
            //    var soundCode = item === "" ? "\n" : item
            //    oLi.innerHTML = `<span class="has-numbering" ><i>${rowNum}</i></span>` + soundCode
            //    oUl.appendChild(oLi)
            // })
            // block.innerText = ""
            // block.appendChild(oUl)
            // block.appendChild(oDiv)
         }
      },
      mounted: function () {
         // 加载语言包
         this.loadLanguages()
         // 语法高亮
         this.hljsCode()

      }
   }
</script>

<style scoped>
   /* 主题的样式 */
   @import url("~@base/sound_code/styles/dracula.css");
   .pre-code {
      position: relative;

   }

   .copy-button {
      position: absolute;
      top: 15px;
      right: 15px;
      color: #fff;
      z-index: 1;
      cursor: pointer;
      border: 1px solid pink;
   }

   .code {
      position: relative;
      padding: 0;
      width: 100%;
   }

   .code .has-numbering-bgcolor {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 40px;
      background-color: rgba(165, 143, 143, 0.26);
      border-right: 1px dotted pink;
   }

   #pre-numbering {
      list-style-type: none;
      padding: 0;
      margin: 0 !important;
      /*margin-left: 0;*/
   }

   #pre-numbering li {
      padding: 2px 0;
   }

   #pre-numbering li:hover {
      cursor: text;
      background-color: rgba(124, 124, 138, 0.78);
      color: #00b0e8 !important;
   }

   #pre-numbering li:hover span {
      color: #00b0e8 !important;
   }

   #pre-numbering li .has-numbering {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      padding: 0 8px;
      margin-right: 10px;
      float: left;
      width: 40px;
      text-align: center;

   }

</style>