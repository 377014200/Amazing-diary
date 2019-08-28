<template>
   <div
      id="catalog"
      :class="['box', showCatalog ? '' :'boxHide']"
      @click="onShowCatalog"
   >
      <span
         id="catalogQuit"
         :class="['box-quit', showCatalog ? '' : 'box-quitAnother']"
      >{{showCatalog ? '×' :'显示目录'}}</span>
      <template v-if="showCatalog">
         <h6
            class="box-title"
         >目录</h6>


         <a
            v-for="(item,i) in catalogList"
            :key="i"
            :title="item.innerHtml"
            :href=" '#' + item.href"
            class="box-anchor"
            :class="selectIndex === i ? 'box-anchor box-anchorActive' : ''"
            @click="onActive(i)"
         >{{'['+(i+1)+']' + item.innerHtml}}</a>
      </template>
   </div>
</template>

<script>
   import {addEvent, removeEvent, drag} from '@js/utils'

   export default {
      name: 'Catalog',
      data: function () {
         return {
            selectIndex: -1,
            showCatalog: false,
         }
      },
      props: {
         catalogList: {
            type: Array,
            default: function () {
               return []
            }
         }
      },
      mounted: function () {
         // 目录是可以拖动的
         drag('catalog')
      },
      methods: {
         onShowCatalog: function (e) {
            var target = e.target || e.srcElement;
            // console.dir(target)
            //设置关闭按钮的点击事件
            this.showCatalog = target.className != 'box-quit'
            // 滚轮事件
            if (target.id == 'catalogQuit') {
               if (this.showCatalog) {
                  this.onWheel()
                  addEvent(window, 'scroll', this.onWheel)
               } else {
                  removeEvent(window, 'scroll', this.onWheel, false)
               }
            }
         },
         onActive: function (index) {
            this.selectIndex = index
         },
         onWheel: function () {
            console.log(123)
            //获取列表项
            //获取章节题目项
            this.catalogList.forEach((item, index, array) => {
               var oTitle = document.getElementById(item.href)
               //获取当前章节题目离可视区上侧的距离
               var iTop = oTitle.getBoundingClientRect().top;
               //获取下一个章节题目

               var oNext = array[index + 1] ? document.getElementById(array[index + 1].href) : null;
               //如果存在下一个章节题目，则获取下一个章节题目离可视区上侧的距离
               if (oNext) {
                  var iNextTop = oNext.getBoundingClientRect().top;
               }
               //当前章节题目离可视区上侧的距离小于10时
               if (iTop <= 10) {
                  //当下一个章节题目不存在， 或下一个章节题目离可视区上侧的距离大于10时，设置当前章节题目对应的目录项为激活态
                  if (iNextTop > 10 || !oNext) {
                     this.onActive(index);
                  }
               }
            });
         }
      }
   }
</script>

<style scoped>
   h6 {
      margin: 0;
      padding: 0;
   }

   #catalog {
      position: fixed;
      left: 10px;
      top: 60px;
      font: 16px/30px SimSun;
      border: 2px solid #ccc;
      padding: 4px;
      border-radius: 5px;
      min-width: 100px;
      max-width: 155px;
      overflow: hidden;
      cursor: default;
      background: rgba(255, 255, 255, 0.5);
   }

   .boxHide {
      border: none;
      width: 60px;
      height: 30px;
      padding: 0;
   }

   .box-title {
      text-align: center;
      font-size: 20px;
      color: #444;
   }

   .box-quit {
      position: absolute;
      text-align: center;
      right: 0;
      top: 4px;
      cursor: pointer;
      font-weight: bold;
   }

   .box-quitAnother {
      background: rgba(51, 153, 255, 0.55);
      left: 0;
      top: 0;
   }

   a.box-anchor {
      display: block;
      text-decoration: none;
      color: black;
      border-left: 3px solid transparent;
      padding: 0 3px;
      margin-bottom: 3px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }

   a.box-anchor:hover {
      color: #3399ff;
   }

   a.box-anchorActive {
      color: #3399ff;
      text-decoration: underline;
      border-color: #2175bc
   }
</style>
