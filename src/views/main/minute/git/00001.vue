<template>
   <div id="cnblogs_post_body">
      <h2>常用命令</h2>
      <h3>创建 ssh</h3>
      <p><strong>如果 Git 的命令窗口创建不成功可以用黑窗口执行命令</strong></p>
      <pre-code :aliases="['plaintext']">
         $ ssh-keygen -t rsa -C "youremail@example.com"
         // 验证是否成功
         $ ssh -T git@github.com
      </pre-code>
      <p>如果一切顺利的话，可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人</p>
      <p>然后在远程库中添加:id_rsa.pub 文件里面内容</p>

      <h3>git commit</h3>
      <p><strong>修改文件名如何提交到版本库?</strong></p>
      <pre-code :aliases="['plaintext']">
         $ git commit --amend -m "[提交了什么说明一下吧]"
      </pre-code>

      <h3>git config</h3>
      <p>在git中，我们使用git config 命令用来配置git的配置文件，git配置级别主要有以下3类：</p>
      <ul>
         <li>仓库级别 local 【优先级最高】</li>
         <li>用户级别 global【优先级次之】</li>
         <li>系统级别 system【优先级最低】</li>
      </ul>
      <p>查看仓库配置【必须要进入到具体的目录下，比如要查看TestGit仓库的配置信息】</p>
      <pre-code :aliases="['plaintext']">
         $ git config --local -l
      </pre-code>
      <p>查看用户配置</p>
      <pre-code :aliases="['plaintext']">
         $ git config --global -l
      </pre-code>
      <p>查看系统配置</p>
      <pre-code :aliases="['plaintext']">
         $ git config --system -l
      </pre-code>
      <p>查看所有的配置信息，依次是系统级别、用户级别、仓库级别</p>
      <pre-code :aliases="['plaintext']">
         $ git config -l
      </pre-code>

      <p>常用配置选项</p>
      <pre-code :aliases="['plaintext']">
         $ git config -e 编辑配置文件

         $ git config --local -e 编辑仓库级别配置文件
         $ git config --global -e 编辑用户级别配置文件
         $ git config --system -e 编辑系统级别配置文件
      </pre-code>
      <p>添加配置项目</p>
      <pre-code :aliases="['plaintext']">
         $ git config --global user.email “you@example.com”
         $ git config --global user.name “Your Name”
      </pre-code>
      <h3>git init </h3>
      <p><strong>Git 使用 git init 命令来初始化一个 Git 仓库</strong></p>
      <p>Git 的很多命令都需要在 Git 的仓库中运行，所以 git init 是使用 Git 的第一个命令。</p>
      <p>在执行完成 git init 命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变（不像 SVN 会在每个子目录生成 .svn 目录，Git 只在仓库的根目录生成 .git
         目录）。</p>
      <p>使用当前目录作为Git仓库，我们只需使它初始化。</p>
      <pre-code :aliases="['plaintext']">
         $ git init
      </pre-code>

      <p>该命令执行完后会在当前目录生成一个 .git 目录。 使用我们指定目录作为Git仓库。</p>
      <pre-code :aliases="['plaintext']">
         $ git init newrepo
      </pre-code>

      <h3>git clone</h3>
      <p><strong>我们使用 git clone 从现有 Git 仓库中拷贝项目（类似 svn checkout）。</strong></p>
      <p> 克隆仓库的命令格式为：</p>
      <pre-code :aliases="['html']">
         $ git clone &#60repository&#62 &#60directory&#62
      </pre-code>

      <p><strong>参数说明:</strong></p>
      <ul>
         <li><strong>repository</strong>:Git 仓库。</li>
         <li><strong>directory</strong>:本地目录。</li>
      </ul>

      <pre-code :aliases="['plaintext']">
         例如:
         $ git clone git://github.com/schacon/grit.git
         $ git clone git://github.com/schacon/grit.git mygrit
      </pre-code>

      <h3>git log</h3>
      <p>
         <strong>查看信息(历史)</strong>
      </p>
      <pre-code :aliases="['plaintext']">
         // graph 参数可以看到分支合并图。
         $ git log --graph

         $ git log
      </pre-code>
      <p>查看合并路线</p>
      <pre-code :aliases="['plaintext']">
         $ git log --graph --pretty=oneline --abbrev-commit
         * d1be385 (HEAD -> master, origin/master) init hello
         *   e5e69f1 Merge branch 'dev'
         |\
         | *   57c53ab (origin/dev, dev) fix env conflict
         | |\
         | | * 7a5e5dd add env
         | * | 7bd91f1 add new env
         | |/
         * |   12a631b merged bug fix 101
         |\ \
         | * | 4c805e2 fix bug 101
         |/ /
         * |   e1e9c68 merge with no-ff
         |\ \
         | |/
         | * f52c633 add merge
         |/
         *   cf810e4 conflict fixed
      </pre-code>
      <h3>git reflog</h3>
      <p>
         <strong>查看信息(历史)</strong>
      </p>
      <pre-code :aliases="['plaintext']">
         $ git reflog
      </pre-code>
      <h3>git rebase</h3>
      <p>rebase操作可以把本地未push的分叉提交历史整理成直线</p>
      <p>rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。</p>
      <pre-code :aliases="['plaintext']">
         $ git rebase
      </pre-code>
      <h3>git reset</h3>
      <p>
         <strong>版本回退</strong>
      </p>
      <p> HEAD表示当前版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100</p>
      <p>版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。</p>
      <pre-code :aliases="['plaintext']">
         $ git reset --hard HEAD^
         or
         $ git reset --hard 1094a
         HEAD is now at e475afc add distributed
      </pre-code>
      <p>在Git中，总是有后悔药可以吃的。当你用$ git reset --hard HEAD^回退到add distributed版本时，再想恢复到append GPL，就必须找到append GPL的commit
         id。Git提供了一个命令 <span class="red"><strong>git reflog</strong></span> 用来记录你的每一次命令：</p>

      <pre-code :aliases="['plaintext']">
         $ git reflog
         e475afc HEAD@{1}: reset: moving to HEAD^
         1094adb (HEAD -> master) HEAD@{2}: commit: append GPL
         e475afc HEAD@{3}: commit: add distributed
         eaadf4e HEAD@{4}: commit (initial): wrote a readme file
      </pre-code>

      <h3>git rm</h3>
      <p><strong>删除暂存区里面的文件</strong></p>
      <pre-code :aliases="['html']">
         $ git rm &#60filename&#62
      </pre-code>
      <p><span class="red">commit</span> 后会删除版本库里面的代码</p>
      <p>通过 <span class="red">git checkout -- &#60filename&#62</span>命令找回, 当然必须是版本库里还没有产出这个文件,如果版本库里也没有了,就只能版本回退了
      </p>

      <h3>git branch</h3>
      <p><strong>查看分支</strong></p>
      <pre-code :aliases="['plaintext']">
         $ git branch

         or
         // 包含远程分支的预览
         $ git branch
      </pre-code>

      <p><strong>创建分支</strong></p>
      <pre-code :aliases="['html']">
         $ git branch &#60name&#62
      </pre-code>

      <p><strong>删除分支</strong></p>
      <pre-code :aliases="['html']">
         $ git branch -d &#60name&#62

         // 强制删除某个未合并的分支
         $ git branch -D &#60name&#62
      </pre-code>
      <p><strong>远程仓库分支关联</strong></p>
      <p>关联目的是在执行git pull, git push操作时就不需要指定对应的远程分支，你只要没有显示指定，git pull的时候，就会提示你。</p>
      <p>fatal: The current branch master has no upstream branch.
         To push the current branch and set the remote as upstream, use
      </p>
      <pre-code :aliases="['plaintext']">
         $ git branch --set-upstream-to=origin/master master
         Branch 'master' set up to track remote branch 'master' from 'origin'.
      </pre-code>

      <h3>git checkout </h3>
      <p><strong>切换分支</strong></p>
      <pre-code :aliases="['plaintext']">
         $ git checkout &#60name&#62

         or

         $ git switch &#60name&#62
      </pre-code>

      <p><strong>创建一个分支并切换到这个</strong></p>
      <pre-code :aliases="['html']">
         $ git checkout -b &#60name&#62
         $ git checkout -b newBranch

         or

         // 创建分支并关联对应的远程库的分支
         $ git checkout -b  &#60new_branch&#62 [&#60start_point&#62]
         $ git checkout -b newBranch  origin/newBranch
      </pre-code>

      <p><strong>基于当前所在分支新建一个赤裸裸的分支，没有任何的提交历史，但是当前分支的内容一一俱全</strong></p>
      <p>新建的分支，严格意义上说，还不是一个分支，因为HEAD指向的引用中没有commit值，只有在进行一次提交后，它才算得上真正的分支。</p>
      <pre-code :aliases="['html']">
         $ git checkout --orphan &#60new_branch&#62
      </pre-code>
      <p><strong>撤销某个文件的修改</strong></p>

      <pre-code :aliases="['html']">
         // 可以指定 commit 的 hash 值
         $ git checkout [-q] [&#60commit id&#62] [--] &#60paths>
         or
         // 如果不填写commit id，则默认会从暂存区检出该文件，如果暂存区为空，则该文件会回滚到最近一次的提交状态。当暂存区为空，如果我们想要放弃对某一个文件的修改，可以用这个命令进行撤销
         $ git checkout [-q] [--] &#6paths&#62
      </pre-code>
      <h3>git merge</h3>
      <p><strong>合并分支</strong></p>

      <pre-code :aliases="['plaintext']">
         如果你的控制台有 Fast-forward 这样的信息表示快速合并
         git merge
      </pre-code>

      <p>通常，合并分支时，如果可能，<span class="red">Git</span> 会用 <span class="red">Fast forward</span> 模式，但这种模式下，删除分支后，会丢掉分支信息</p>
      <p>如果要强制禁用 <span class="red">Fast forward</span> 模式，<span class="red">Git</span> 就会在 <span
         class="red">merge</span> 时生成一个新的 <span class="red">commit</span>，这样，从分支历史上就可以看出分支信息。</p>
      <p>因为本次合并要创建一个新的 <span class="red">commit</span>，所以加上 <span class="red">-m</span> 参数，把 <span
         class="red">commit</span> 描述写进去</p>


      <pre-code :aliases="['plaintext']">
         --no-ff参数，表示禁用Fast forward

         $ git merge --no-ff -m "merge with no-ff" &#60merge name&#62
      </pre-code>
      <p><strong>bug 分支</strong></p>
      <div><span class="red">场景描述: </span>
         <p style="text-indent: 24px"> 1. 此时正在 dev 的 merge 中做开发需要一天的时间才能完成新功能的开发; </p>
         <p style="text-indent:24px">2. 急需解决一个已知或者未知的 bug ;</p>
      </div>
      <span class="red">解决方案: </span>
      <ul>
         <li>
            在缓存中保存当前的分支状态 使用 <span class="red">git stash</span> 命令; 使用后当前分支"工作区"会后退到上一次 <span class="red">commit</span>
            的状态;此时可以在当前分支处理 bug 或者其他分支这里假设实在 master 分支中处理
            <p>你可以使用 <span class="red">git stash list</span> 命令查看缓存的列表</p>
            <pre-code :aliases="['plaintext']">
               $ git stash
               Saved working directory and index state WIP on dev: 3ebccaa .

               $ git stash list
               stash@{0}: WIP on master: 179e7c6 .

            </pre-code>

         </li>
         <li>切换到 master</li>
         <pre-code :aliases="['plaintext']">
            $ git checkout master
            Switched to branch 'master'
            Your branch is ahead of 'origin/master' by 15 commits.
            (use "git push" to publish your local commits)
         </pre-code>
         <li>修改 bug 并 <span class="red">commit</span> (你可以选择创建一个临时的分支去解决问题,但是个人认为那样也很繁琐)</li>
         <pre-code :aliases="['plaintext']">
            $ git add *

            $ git commit -m "."
            [master 179e7c6] .
            1 file changed, 1 insertion(+), 1 deletion(-)
         </pre-code>
         <li>现在 master 分支 bug处理完毕,但是 dev 的分支没有会到 dev 分支并使用 <span class="red">git cherry-pick</span> 命令把 master commit
            的内容 commit 到 dev 中
         </li>
         <pre-code :aliases="['plaintext']">
            $ git checkout dev
            Switched to branch 'dev'
            Your branch is ahead of 'origin/dev' by 14 commits.
            (use "git push" to publish your local commits)

            $ git cherry-pick 179e7c6
            [dev c985906] .
            Date: Tue Aug 27 22:20:17 2019 +0800
            1 file changed, 1 insertion(+), 1 deletion(-)
         </pre-code>
         <li>dev 的 bug 处理完了,把缓存的未完成的新功能取出来
            有两个办法：<br>
            一是用 <span class="red">git stash apply</span> 恢复，但是恢复后，<span class="red">stash</span> 内容并不删除，你需要用 <span
               class="red">git stash drop</span> 2来删除；<br>
            另一种方式是用git stash pop，恢复的同时把stash内容也删了<br>
            <p class="red"><strong>PS:</strong> 在 dev 的分支中存的状态就在 dev 中取状态; 否则后果很严重;</p>
         </li>
         现在 master 分支 bug 处理完毕,
         <pre-code :aliases="['plaintext']">
            $ git stash pop
            On branch dev
            Changes not staged for commit:
            (use "git add &#60file&#62..." to update what will be committed)
            (use "git restore &#60file&#62..." to discard changes in working directory)
            modified: hello.js

            no changes added to commit (use "git add" and/or "git commit -a")
            Dropped refs/stash@{0} (75243393482e34e6985a18dbd0690893804d76ab)

         </pre-code>
      </ul>
      <h3>git cherry-pick (拣选)</h3>
      <p>例如在修改 bug 每个分支都要做同样的修改, 拣选会很有用, 参考 bug 分支</p>
      <pre-code :aliases="['plaintext']">
         $ git cherry-pick 179e7c6
         [dev c985906] .
         Date: Tue Aug 27 22:20:17 2019 +0800
         1 file changed, 1 insertion(+), 1 deletion(-)

      </pre-code>
      <h3>git stash</h3>
      <p>
         1. 当正在dev分支上开发某个项目，这时项目中出现一个bug，需要紧急修复，但是正在开发的内容只是完成一半，还不想提交，这时可以用git
         stash命令将修改的内容保存至堆栈区，然后顺利切换到hotfix分支进行bug修复，修复完成后，再次切回到dev分支，从堆栈中恢复刚刚保存的内容。
      </p>
      <p>
         2. 由于疏忽，本应该在dev分支开发的内容，却在master上进行了开发，需要重新切回到dev分支上进行开发，可以用git stash将内容保存至堆栈中，切回到dev分支后，再次恢复内容即可。 总的来说，git
         stash命令的作用就是将目前还不想提交的但是已经修改的内容进行保存至堆栈中，后续可以在某个分支上恢复出堆栈中的内容。这也就是说，stash中的内容不仅仅可以恢复到原先开发的分支，也可以恢复到其他任意指定的分支上。git
         stash作用的范围包括工作区和暂存区中的内容，也就是说没有提交的内容都会保存至堆栈中。
      </p>

      <pre-code :aliases="['plaintext']">
         $ git status
         On branch master
         Changes not staged for commit:
         (use "git add &#60file&#62..." to update what will be committed)
         (use "git checkout -- &#60file&#62..." to discard changes in working directory)

            modified:   src/main/java/com/wy/CacheTest.java
            modified:   src/main/java/com/wy/StringTest.java

            no changes added to commit (use "git add" and/or "git commit -a")

            $ git stash
            Saved working directory and index state WIP on master: b2f489c second

            $ git status
            On branch master
            nothing to commit, working tree clean
      </pre-code>

      <p><strong>git stash save</strong></p>
      <p>作用等同于git stash，区别是可以加一些注释，如下</p>
      <pre-code :aliases="['plaintext']">
         $ git stash save "test1"
         stash@{0}: On master: test1
      </pre-code>

      <p><strong>git stash list</strong></p>
      <p>查看当前 stash 中的内容</p>
      <pre-code :aliases="['plaintext']">
         $ git stash list
         stash@{0}: WIP on master: e5e4350 .
         stash@{1}: WIP on dev: 9da1bf6 .
      </pre-code>

      <p><strong>git stash pop</strong></p>
      <p>将当前stash中的内容弹出，并应用到当前分支对应的工作目录上。</p>
      <p class="red">注：该命令将堆栈中最近保存的内容删除（栈是先进后出）</p>
      <pre-code :aliases="['plaintext']">
         $ git stash pop
         Auto-merging new-file.js
         CONFLICT (content): Merge conflict in new-file.js
         The stash entry is kept in case you need it again.

         or

         // 你可以指定 stash 的 name 我猜测的
         $ git stash pop 'stash@{0}'
      </pre-code>

      <p class="red">-- index</p>
      <p>可选的参数, 指定 stash 列表中的索引</p>
      <pre-code :aliases="['html']">
         $ git stash pop --index &#60index&#62
      </pre-code>

      <p><strong>git stash apply</strong></p>
      <p>将堆栈中的内容应用到当前目录，不同于git stash pop，该命令不会将内容从堆栈中删除，也就说该命令能够将堆栈的内容多次应用到工作目录中，适应于多个分支的情况。</p>
      <pre-code :aliases="['plaintext']">

         $ git stash apply

         or

         // 你可以指定 stash 的 name 这个我试过
         $ git stash apply 'stash@{0}'

         or

         // 可以使用 --index 参数
         $ git stash apply --index 0
      </pre-code>

      <p><strong>git stash drop</strong></p>
      <p>从堆栈中移除某个指定的stash</p>
      <p>不支持 --index 参数 </p>
      <pre-code :aliases="['plaintext']">

         $ git stash drop
         Dropped refs/stash@{0} (1fc31a3a182597c1723e0750ef8d05674c89689d)

         or

         // 你可以指定 stash 的 name 没试过
         $ git stash apply 'stash@{0}'
      </pre-code>

      <p><strong>git stash clear</strong></p>

      <p>没错: 他就是他</p>

      <p><strong>git stash show</strong></p>
      <p>查看堆栈中最新保存的stash和当前目录的差异。</p>
      <pre-code :aliases="['plaintext']">
         $ git stash show
         src/main/java/com/wy/StringTest.java | 2 +-
         1 file changed, 1 insertion(+), 1 deletion(-)
      </pre-code>

      <p><strong>git stash branch</strong></p>
      <p>从最新的stash创建分支</p>
      <p>应用场景：当储藏了部分工作，暂时不去理会，继续在当前分支进行开发，后续想将stash中的内容恢复到当前工作目录时，如果是针对同一个文件的修改（即便不是同行数据），那么可能会发生冲突，恢复失败，这里通过创建新的分支来解决。可以用于解决stash中的内容和当前目录的内容发生冲突的情景</p>

      <h3>git remote</h3>
      <p><strong>要查看远程库的信息，用 <span class="red">git remote</span></strong></p>
      <pre-code :aliases="['plaintext']">
         $ git remote
         origin

         or

         下面显示了可以抓取和推送的origin的地址。如果没有推送权限，就看不到push的地址。
         $ git remote -v
         origin  git@github.com:michaelliao/learngit.git (fetch)
         origin  git@github.com:michaelliao/learngit.git (push)
      </pre-code>
      <p><strong>git remote add origin</strong></p>
      <p>连接远程仓库</p>
      <p><span class="red">origin</span> 予以远程库的名字, 如果同时和码云的远程库有联系, 则使用不同的名字</p>
      <pre-code :aliases="['plaintext']">
         $ git remote add origin  git@github.com:michaelliao/learngit.git
      </pre-code>
      <p><strong>git remote set-url origin</strong></p>
      <p>修改远程仓库的URL</p>
      <pre-code :aliases="['plaintext']">
         $ git remote set-url origin  git@github.com:377014200/repository.git
      </pre-code>
      <p><strong>git remote get-url origin</strong></p>
      <p>查看远程仓库的URL</p>
      <pre-code :aliases="['plaintext']">
         $ git remote get-url origin
      </pre-code>
      <h3>git push</h3>
      <p>向远程仓库推送代码</p>
      <p>但是，并不是一定要把本地分支往远程推送，那么，哪些分支需要推送，哪些不需要呢？</p>
      <ul>
         <li><span class="red">master</span>分支是主分支，因此要时刻与远程同步；</li>
         <li><span class="red">dev</span>分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；</li>
         <li>bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；</li>
         <li>feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。</li>
      </ul>
      <p>总之，就是在Git中，分支完全可以在本地自己藏着玩，是否推送，视你的心情而定！</p>
      <p>使用 origin 参数并且指定 分支的名字</p>
      <pre-code :aliases="['html']">
         $ git push origin &#60branch name&#62
      </pre-code>
      <p><span class="red">别忘了第一次要加 -u 参数 以后就不需要了</span></p>
      <pre-code :aliases="['plaintext']">
         $ git push -u origin master
      </pre-code>
      <h3>git pull</h3>
      <p>提取远程仓库的代码</p>
      <p>使用 origin 参数并且指定 分支的名字</p>
      <pre-code :aliases="['html']">
         $ git pull origin &#60branch name&#62
      </pre-code>

      <h3>git tag</h3>
      <p>标签管理</p>
      <p>在Git中打标签非常简单，首先，切换到需要打标签的分支上：</p>
      <pre-code :aliases="['html']">
         $ git branch
         * dev
         master
         $ git checkout master
         Switched to branch 'master'
      </pre-code>
      <p>然后，敲命令 <span class="red">git tag &#60name&#62</span> 就可以打一个新标签：</p>
      <pre-code :aliases="['html']">
         $ git tag v1.0
      </pre-code>
      <p>可以用命令 <span class="red">git tag</span> 查看所有标签：</p>
      <pre-code :aliases="['html']">
         $ git tag
         v1.0
      </pre-code>
      <p><strong>默认为HEAD，也可以指定一个commit id；</strong></p>

      <pre-code :aliases="['plaintext']">
         $ git tag v0.9 f52c633
      </pre-code>

      <p>标签不是按时间顺序列出，而是按字母排序的。可以用 <span class="red">git show &#60tagname&#62</span>查看标签信息：</p>
      <pre-code :aliases="['html']">
         $ git show v0.9
         commit f52c63349bc3c1593499807e5c8e972b82c8f286 (tag: v0.9)
         Author: Michael Liao &#60askxuefeng@gmail.com&#62
         Date:   Fri May 18 21:56:54 2018 +0800

         add merge

         diff --git a/readme.txt b/readme.tx
      </pre-code>
      <p><strong>创建带有说明的标签，用-a指定标签名，-m指定说明文字：</strong></p>
      <pre-code :aliases="['html']">
         $ git show v0.1
         tag v0.1
         Tagger: Michael Liao &#60askxuefeng@gmail.com&#62
         Date:   Fri May 18 22:48:43 2018 +0800

         version 0.1 released

         commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (tag: v0.1)
         Author: Michael Liao &#60askxuefeng@gmail.com&#62
         Date:   Fri May 18 21:06:15 2018 +0800

         append GPL

         diff --git a/readme.txt b/readme.txt
      </pre-code>
      <p><strong>如果标签打错了，也可以删除：</strong></p>
      <pre-code :aliases="['plaintext']">
         $ git tag -d v0.1
         Deleted tag 'v0.1' (was f15b0dd)
      </pre-code>
      <p>因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。 如果要推送某个标签到远程，使用命令 <span class="red">git push origin &#60tagname&#62</span>：</p>

      <pre-code :aliases="['plaintext']">
         $ git push origin v1.0
         Total 0 (delta 0), reused 0 (delta 0)
         To github.com:michaelliao/learngit.git
         * [new tag]         v1.0 -> v1.0

         or

         // 一次性推送全部尚未推送到远程的本地标签
         $ git push origin --tags
         Total 0 (delta 0), reused 0 (delta 0)
         To github.com:michaelliao/learngit.git
         * [new tag]         v0.9 -> v0.9
      </pre-code>

      <p>如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：</p>
      <p>然后，从远程删除。删除命令也是push，但是格式如下</p>
      <pre-code :aliases="['plaintext']">
         $ git tag -d v0.9
         Deleted tag 'v0.9' (was f52c633)

         and
         // 远程删除
         $ git push origin :refs/tags/v0.9
         To github.com:michaelliao/learngit.git
         - [deleted]         v0.9
      </pre-code>




   </div>
</template>

<script>
   export default {}
</script>

<style scoped>

</style>