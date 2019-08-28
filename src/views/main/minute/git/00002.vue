<template>
   <div id="cnblogs_post_body">
      <h2>连接远程库</h2>
      <h3>1. 创建 ssh</h3>
      <p><strong>如果 Git 的命令窗口创建不成功可以用黑窗口执行命令</strong></p>
      <pre-code :aliases="['plaintext']">
         ssh-keygen -t rsa -C "youremail@example.com"
      </pre-code>
      <p>如果一切顺利的话，可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人</p>
      <p>然后在远程库中添加:id_rsa.pub 文件里面内容</p>

      <h3>2. 连接远程库</h3>
      <pre-code :aliases="['plaintext']">
         // git@github.com:michaelliao/learngit.git 假设这是你的的远程仓库
         git remote add origin git@github.com:michaelliao/learngit.git
      </pre-code>





   </div>
</template>

<script>
   export default {
      name: "00002"
   }
</script>

<style scoped>

</style>