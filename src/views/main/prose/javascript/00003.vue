<template>
   <div id="cnblogs_post_body">
      <h2>postMessage解决跨域和跨页面通信的问题</h2>
      <h3>postMessage()方法</h3>
      <p>该 <span class="red">window.postMessage()</span>方法安全地启用 <span class="red">Window</span>对象之间的跨源通信；例如，在页面和它产生的弹出窗口之间，或者在页面和嵌入其中的 <span class="red">iframe</span>之间。</p>
      <p>通常，当且仅当它们源自的页面共享相同的协议、端口号和主机（也称为“同源策略”）时，允许不同页面上的脚本相互访问。<span class="red">window.postMessage()</span>提供一种受控制的机制来安全地规避这种限制（如果使用得当）。</p>
      <p>从广义上讲，一个窗口可以获得对另一个窗口的引用（例如，可以使用 <span class="red">targetWindow</span>= <span class="red">window.opener</span>），然后使用 <span class="red">targetWindow.postMessage() </span>在其上发送一个 <span class="red">MessageEvent</span>。然后，接收窗口可根据需要自由处理此事件。传递给 <span class="red">window.postMessage()</span>的参数（即“ <span class="red">message</span>”）通过事件对象暴露给接收窗口。</p>
      <h3>postMessage()方法语法</h3>
      <pre-code>
         targetWindow .postMessage（message，targetOrigin，[ transfer ]）;
      </pre-code>
      <p><strong>targetWindow</strong></p>
      <p>对将接收消息的窗口的引用。获得此类引用的方法包括：</p>
      <ul>
         <li><span class="red">Window.open </span>（生成一个新窗口然后引用它）</li>
         <li><span class="red">Window.opener</span> （引用产生这个的窗口）</li>
         <li><span class="red">HTMLIFrameElement.contentWindow</span>&#60iframe&#62从其父窗口引用嵌入式），</li>
         <li><span class="red">Window.parent</span>从嵌入式内部引用父窗口&#60iframe&#62）</li>
         <li><span class="red">Window.frames</span> +索引值（命名或数字）。</li>
      </ul>
      <p><strong>message</strong></p>
      <p>要发送到其他窗口的数据。使用结构化克隆算法序列化数据。这意味着您可以将各种各样的数据对象安全地传递到目标窗口，而无需自己序列化。</p>
      <p><strong>targetOrigin</strong></p>
      <p>指定要调度的事件的 <span class="red">Window.open </span>的原点，可以是文字字符串<span class="red">"*"</span>（表示没有首选项），也可以是 <span class="red">URI</span>。如果在计划调度事件时，<span class="red">targetWindow</span>文档的方案，主机名或端口与 <span class="red">targetOrigin</span>提供的内容不匹配，则不会调度该事件；只有当所有的三个条件都匹配时，将调度该事件。该机制可以控制发送消息的位置；例如，如果 <span class="red">postMessage()</span>用于传输密码，则该参数必须是 <span class="red">URI</span>，其来源与包含密码的消息的预期接收者相同，以防止恶意第三方拦截密码。始终提供具体的 <span class="red">targetOrigin</span>，而不是 <span class="red">*</span>，如果您知道其他窗口的文档应该位于何处。未能提供特定目标会泄露您发送给任何感兴趣的恶意站点的数据。</p>
      <p><strong>transfer（可选的）</strong></p>
      <p>transfer（可选的）</p>
      <p>是与消息一起传输的<span class="red"></span>对象序列。这些对象的所有权将提供给目标端，并且它们在发送端不再可用。</p>
      <h3>案例</h3>
      <p><strong>在当前的窗口打开一个新的窗口并发送信息过去</strong></p>
      <p class="ps">在 <span class="red">IE</span> 下新窗口和当前的窗口是共用一个 <span class="red">sessionStorage</span> 的</p>
      <p>在当前窗口调用 <span class="red">open</span> 方法</p>
      <p>使用 <span class="red">postMessage</span> 方法发送信息</p>
      <pre-code>
         function onToInterviewSystem(){
            var _this = this
            // IE 新打开的窗口和 parent 窗口 公用的是一个 sessionStorage
            // 如果是 IE 直接调用 open() 的方法; 否则要调用 postMessage 把数据传到新打开的窗口
            if (util.getweb() !== "IE"){
               var child = window.open(process.env.SERVER_UEL)
               var origin = process.env.SERVER_UEL
               var props = {
                  sessionId:Store.get('sessionId'),
                  username:Store.get("username")
               }
               // 有的时候把 props 传给 新的 window 对象的时候;新的 window 对象可能还没被创建出来
               // 如果新窗口的 message 在没有被创建出来的时候发送信息是没有效果的!!
               this.timer = setInterval(function () {
                  if (!child.closed){
                     clearInterval(_this.timer)
                     child.postMessage(props, origin);
                  }
               }, 500)
            } else{
               window.open(process.env.SERVER_UEL)
            }
         }
      </pre-code>

      <p>在新打开的窗口中注册 <span class="red">message</span> 事件</p>
      <pre-code>
         function thirdparty(){
            var _this = this
            window.addEventListener('message',function(e){
               console.log(e,"37")
               // 检测 message 的来源是不是期望的地址(这是必须的)
               // development(生产)  production(生产)
               if (e.origin === process.env.SERVER_UEL) {
                  var sessionId = e.data.sessionId
                  var username = e.data.username
               if (sessionId && username && !Store.get('sessionId')) {
                  Store.set('sessionId',sessionId)
                  Store.set('username',username)
                  _this.loginApplication().then((isAllowedToLogin)=> {
                     isAllowedToLogin && _this.$router.replace("/home")
                  })
               }
               }
            },false)
         }
      </pre-code>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>