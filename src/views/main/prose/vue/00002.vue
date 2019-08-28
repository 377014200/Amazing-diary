<template>
   <div id="cnblogs_post_body">
      <h2>打包时报错：Error: CSS minification error:</h2>
      <p>下面的这张图是完整的错误信息</p>
      <p><img :src="require('@img/vue/02a138a88273ec5101a7bae51fed19a.png')" alt=""></p>
      <p>这个问题折磨了我一天, 起初以为是 vue.config.js 的问题, 为了解决这个问题寻找了好多的文档;看了好多的源码后;觉得配置文件是没有问题的,</p>
      <p>关键的是不知道问题在哪;最后用的是注释排除法,寻找问题的根源</p>
      <p>找到了是的</p>
      <p>
         就是这在 js 引用一个样式出现了打包失败而报错，在我的记忆中这种引入方式是可以的，怀疑是不是和框架有关; 但是我否认了!
      </p>
      <p><img :src="require('@img/vue/53cd31bbe0e8be28fb191faf1ff5e38.png')" alt=""></p>
      <p>问题到底在哪, 谁能告诉我答案, 我祈祷着, 按着自己的思路尝试在 style 引用这个css样式</p>
      <p><img :src="require('@img/vue/472889a16f709ddfe127be943ae0ea4.png')" alt=""></p>
      <p>然而结果并不是我期望的</p>
      <p>在开发环境下报错了, 如图:</p>
      <p><img :src="require('@img/vue/16de4a5143a12d30ffa112ffd48a2e8.png')" alt=""></p>
      <p>一个编译错误,在 common.css 中某某行一个语法的错误; 错误的行数显示的有些小误差;</p>
      <p><img :src="require('@img/vue/46321c43ddd91f20bccaecf906d0085.png')" alt=""></p>
      <p>在 2055 行和 2056 行 这个两个属性前面有个下划线去掉就没问题了. 这个 common.css 是我引入的一个 css 文件; 我记得在属性前面加符号是有特殊意义的当然我没有用过; 但是在我这里报错了, 果断的去掉了</p>
      <p>现在 可以打包了, 开发环境也可以正常运行 </p>
      <p class="ps">
         总结:
         <p class="ps">1. 在 js 中是可以引入 css , 无法打包的原因是 common.css 有 css 语法错误!!</p>
         <p class="ps">2. 在 js 中引入 css ,在开发环境 css 文件有语法错误; 但是没有检测到, 在 style 中引入 css 就可以检测到有语法错误, 以后尽量避免在 js 引入 css;</p>
         <p class="ps">3. 在 js 中引入 css, 这个 css 有语法错, 打包时检测语法错误就无法打包; 这个时候很难查到是哪里错误</p>
      </p>
   </div>
</template>

<script>
   export default {

   }
</script>

<style scoped>

</style>