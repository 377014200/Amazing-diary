//事件处理程序兼容写法
export function addEvent(target,type,handler){
  if(target.addEventListener){
    target.addEventListener(type,handler,false);
  }else{
    target.attachEvent('on'+type,function(event){
      return handler.call(target,event);
    });
  }
}
// 事件委托
// export function entrustEvent(e){
//   return target = e.target || e.srcElement;
//
// }
// 阻止事件冒泡
export function bubbleEvent(target,e){ // 第二实参最好为 e
  e = e || window.event;
  if (!-[1,]){
    e.cancelBubble = true;
  } else {
    e.stopPropagation();
  }
}

//阻止默认行为
export function defaultEvent (target,e){// 第二实参最好为 e
  e = e || window.event;
  if(!-[1,]){
    return e.returnValue = false;
  }else{
    return e.preventDefault();
  }
}
// 移除事件 !!需要注意的是如果绑定的事件为捕获模式这是移除事件要穿boolean 为true
export function removeEvent(target,type,handler,bool){// 第二实参最好为 e
  if (target.detachEvent){
    return target.detachEvent("on" + type, handler )
  } else {
    return target.removeEventListener(type, handler, bool)
  }
}
export function drag(id){
  var x0,y0,x1,y1,isMoving;
  var ele = document.getElementById(id);
  var L0,R0,T0,EH,EW,B0;
  var mousedownHandler = function(e){
    e = e || event;
    //获取元素距离定位父级的x轴及y轴距离
    x0 = this.offsetLeft;
    y0 = this.offsetTop;
    //获取此时鼠标距离视口左上角的x轴及y轴距离
    x1 = e.clientX;
    y1 = e.clientY;
    //按下鼠标时，表示正在运动
    isMoving = true;
    //鼠标按下时，获得此时的页面区域
    L0 = 0;
    R0 = document.documentElement.clientWidth;
    T0 = 0;
    B0 = document.documentElement.clientHeight;
    //鼠标按下时，获得此时的元素宽高
    EH = ele.offsetHeight;
    EW = ele.offsetWidth;
  }
  var mousemoveHandler = function(e){
    //如果没有触发down事件，而直接触发move事件，则函数直接返回
    if(!isMoving){
      return;
    }
    e = e || event;
    //获取此时鼠标距离视口左上角的x轴及y轴距离
    var x2 = e.clientX;
    var y2 = e.clientY;
    //计算此时元素应该距离视口左上角的x轴及y轴距离
    var X = x0 + (x2 - x1);
    var Y = y0 + (y2 - y1);
    /******范围限定*******/
      //获取鼠标移动时元素四边的瞬时值
    var L = X;
    var R = X + EW;
    var T = Y;
    // var B = Y + EH;
    //在将X和Y赋值给left和top之前，进行范围限定。只有在范围内时，才进行相应的移动
    //如果脱离左侧范围，则left置L0
    if(L < L0){X = L0;}
    //如果脱离右侧范围，则left置为R0
    if(R > R0){X = R0 - EW;}
    //如果脱离上侧范围，则top置T0
    if(T < T0){Y = T0;}

    //将X和Y的值赋给left和top，使元素移动到相应位置
    ele.style.left = X + 'px';
    ele.style.top = Y + 'px';
  }
  var mouseupHandler = function(){
    //鼠标抬起时，表示停止运动
    isMoving = false;
    //释放全局捕获
    if(ele.releaseCapture){
      ele.releaseCapture();
    }
  }
  var preventDefaultHandler = function(e){
    e = e || event;
    if(e.preventDefault){
      e.preventDefault();
    }else{
      e.returnValue = false;
    }
    //IE8-浏览器阻止默认行为
    if(ele.setCapture){
      ele.setCapture();
    }

  }
  addEvent(ele,'mousedown',mousedownHandler);
  addEvent(ele,'mousedown',preventDefaultHandler);
  addEvent(document,'mousemove',mousemoveHandler)
  addEvent(document,'mouseup',mouseupHandler)

}