/* Version: 2014-09-02 14:26:31 */
!function(a,b,c){c.os||(c.os={}),c.isPlainObject(c.unit)||(c.unit={})}(window,document,$),function(a,b,c){var d=function(a,b){return d["object"==typeof b?"render":"compile"].apply(d,arguments)};!function(a,b){"use strict";a.version="2.0.1",a.openTag="<%",a.closeTag="%>",a.isEscape=!0,a.isCompress=!1,a.parser=null,a.render=function(a,b){var c=d(a);return void 0===c?e({id:a,name:"Render Error",message:"No Template"}):c(b)},a.compile=function(b,d){function g(c){try{return new k(c)+""}catch(f){return i?(f.id=b||d,f.name="Render Error",f.source=d,e(f)):a.compile(b,d,!0)(c)}}var h=arguments,i=h[2],j="anonymous";"string"!=typeof d&&(i=h[1],d=h[0],b=j);try{var k=f(d,i)}catch(l){return l.id=b||d,l.name="Syntax Error",e(l)}return g.prototype=k.prototype,g.toString=function(){return k.toString()},b!==j&&(c[b]=g),g},a.helper=function(b,c){a.prototype[b]=c},a.onerror=function(a){var c="[template]:\n"+a.id+"\n\n[name]:\n"+a.name;a.message&&(c+="\n\n[message]:\n"+a.message),a.line&&(c+="\n\n[line]:\n"+a.line,c+="\n\n[source]:\n"+a.source.split(/\n/)[a.line-1].replace(/^[\s\t]+/,"")),a.temp&&(c+="\n\n[temp]:\n"+a.temp),b.console&&console.error(c)};var c={},d=function(d){var e=c[d];if(void 0===e&&"document"in b){var f=document.getElementById(d);if(f){var g=f.value||f.innerHTML;return a.compile(d,g.replace(/^\s*|\s*$/g,""))}}else if(c.hasOwnProperty(d))return e},e=function(b){function c(){return c+""}return a.onerror(b),c.toString=function(){return"{Template Error}"},c},f=function(){a.prototype={$render:a.render,$escape:function(a){return"string"==typeof a?a.replace(/&(?![\w#]+;)|[<>"']/g,function(a){return{"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"}[a]}):a},$string:function(a){return"string"==typeof a||"number"==typeof a?a:"function"==typeof a?a():""}};var b=Array.prototype.forEach||function(a,b){for(var c=this.length>>>0,d=0;c>d;d++)d in this&&a.call(b,this[d],d,this)},c=function(a,c){b.call(a,c)},d="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",e=/\/\*(?:.|\n)*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|'[^']*'|"[^"]*"|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,f=/[^\w$]+/g,g=new RegExp(["\\b"+d.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),h=/\b\d[^,]*/g,i=/^,+|,+$/g,j=function(a){return a=a.replace(e,"").replace(f,",").replace(g,"").replace(h,"").replace(i,""),a=a?a.split(/,+/):[]};return function(b,d){function e(b){return o+=b.split(/\n/).length-1,a.isCompress&&(b=b.replace(/[\n\r\t\s]+/g," ")),b=b.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n"),b=u[1]+"'"+b+"'"+u[2],b+"\n"}function f(b){var c=o;if(l?b=l(b):d&&(b=b.replace(/\n/g,function(){return o++,"$line="+o+";"})),0===b.indexOf("=")){var e=0!==b.indexOf("==");if(b=b.replace(/^=*|[\s;]*$/g,""),e&&a.isEscape){var f=b.replace(/\s*\([^\)]+\)/,"");q.hasOwnProperty(f)||/^(include|print)$/.test(f)||(b="$escape($string("+b+"))")}else b="$string("+b+")";b=u[1]+b+u[2]}return d&&(b="$line="+c+";"+b),g(b),b+"\n"}function g(a){a=j(a),c(a,function(a){p.hasOwnProperty(a)||(h(a),p[a]=!0)})}function h(a){var b;"print"===a?b=w:"include"===a?(r.$render=q.$render,b=x):(b="$data."+a,q.hasOwnProperty(a)&&(r[a]=q[a],b=0===a.indexOf("$")?"$helpers."+a:b+"===undefined?$helpers."+a+":"+b)),s+=a+"="+b+","}var i=a.openTag,k=a.closeTag,l=a.parser,m=b,n="",o=1,p={$data:!0,$helpers:!0,$out:!0,$line:!0},q=a.prototype,r={},s="var $helpers=this,"+(d?"$line=0,":""),t="".trim,u=t?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],v=t?"if(content!==undefined){$out+=content;return content}":"$out.push(content);",w="function(content){"+v+"}",x="function(id,data){if(data===undefined){data=$data}var content=$helpers.$render(id,data);"+v+"}";c(m.split(i),function(a){a=a.split(k);var b=a[0],c=a[1];1===a.length?n+=e(b):(n+=f(b),c&&(n+=e(c)))}),m=n,d&&(m="try{"+m+"}catch(e){"+"e.line=$line;"+"throw e"+"}"),m="'use strict';"+s+u[0]+m+"return new String("+u[3]+")";try{var y=new Function("$data",m);return y.prototype=r,y}catch(z){throw z.temp="function anonymous($data) {"+m+"}",z}}}()}(d,this),"function"==typeof define?define(function(a,b,c){c.exports=d}):"undefined"!=typeof exports&&(module.exports=d),function(a){a.openTag="{",a.closeTag="}",a.parser=function(b){b=b.replace(/^\s/,"");var c=b.split(" "),d=c.shift(),e=a.keywords,f=e[d];return f&&e.hasOwnProperty(d)?(c=c.join(" "),b=f.call(b,c)):a.prototype.hasOwnProperty(d)?(c=c.join(","),b="=="+d+"("+c+");"):(b=b.replace(/[\s;]*$/,""),b="="+b),b},a.keywords={"if":function(a){return"if("+a+"){"},"else":function(a){return a=a.split(" "),a="if"===a.shift()?" if("+a.join(" ")+")":"","}else"+a+"{"},"/if":function(){return"}"},each:function(a){a=a.split(" ");var b=a[0]||"$data",c=a[1]||"as",d=a[2]||"$value",e=a[3]||"$index",f=d+","+e;return"as"!==c&&(b="[]"),"$each("+b+",function("+f+"){"},"/each":function(){return"});"},echo:function(a){return"print("+a+");"},include:function(a){a=a.split(" ");var b=a[0],c=a[1],d=b+(c?","+c:"");return"include("+d+");"}},a.helper("$each",function(a,b){var c=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};if(c(a))for(var d=0,e=a.length;e>d;d++)b.call(a,a[d],d,a);else for(d in a)b.call(a,a[d],d)})}(d),c.extend(c.unit,{template:d})}(window,document,$),function(a,b,c,d){var e=a(b);a.fn.lazyload=function(c){function f(){var b=0;h.each(function(){var c=a(this);if(!i.skip_invisible||"none"!==c.css("display"))if(a.abovethetop(this,i)||a.leftofbegin(this,i));else if(a.belowthefold(this,i)||a.rightoffold(this,i)){if(++b>i.failure_limit)return!1}else c.trigger("appear"),b=0})}var g,h=this,i={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(d!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),d!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(i,c)),g=i.container===d||i.container===b?e:a(i.container),0===i.event.indexOf("scroll")&&g.on(i.event,function(){return f()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(i.appear){var d=h.length;i.appear.call(b,d,i)}a("<img />").on("load",function(){c.hide().attr("src",c.data(i.data_attribute))[i.effect](i.effect_speed),b.loaded=!0;var d=a.grep(h,function(a){return!a.loaded});if(h=a(d),i.load){var e=h.length;i.load.call(b,e,i)}}).attr("src",c.data(i.data_attribute))}}),0!==i.event.indexOf("scroll")&&c.on(i.event,function(){b.loaded||c.trigger("appear")})}),e.on("resize",function(){f()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&e.on("pageshow",function(b){b=b.originalEvent||b,b.persisted&&h.each(function(){a(this).trigger("appear")})}),a(b).on("load",function(){f()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?e.height()+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e[0].scrollX:a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e[0].scrollX:a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.fn,{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}}),a.extend(a.unit,{lazyload:function(a){a.lazyload()}})}($,window,document),function(a,b,c){var d=function(){function d(a){var b=a.$pointer,d=a.$box,h=a.$leftBtn,i=a.$rightBtn,j=d.children(),k=j.length,l=a._divisibleNum,m=a.curClass,n=100/l,o=j.width(),p=o/10,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=!1,z=!1,A=.2,B=e.vendor[1]+"transform "+A+"s ease-in",C=a.start,D=a.move,E=a.end,F=a.animatestart,G=a.animateend,H=function(){},I=function(){},J=function(){},K=function(){};if(e.vendor[0]+"Transition"in document.body.style?(J=function(b){function d(b){var f=b.target;return g.transition(f,""),G(a,q),c(f).off(e,d),!1}var e=c.fx.transitionEnd||"transitionend";J=function(a){a.on(e,d),g.transition(a[0],B),g.transform(a[0],g.translate(-q*n+"%",0,0))},J(b)},K=function(a,b){g.transform(a[0],g.translate((b/o-q)*n+"%",0,0))}):(J=function(b){b.animate({"margin-left":100*-q+"%"},1e3*A,function(){G(a,q)})},K=function(a,b){a.css("margin-left",100*(b/o-q)+"%")}),d.on("animatestart",function(a,b,d){I(),H("disabled"),F(b,d),J(c(this))}),b&&b.length){var L=b.children();L.each(function(a){L.eq(a).attr("data-index",a)}).eq(0).addClass(m),I=function(){L.filter("."+m).removeClass(m),L.eq(q).addClass(m)},L.on("click",function(){var b=c(this);b.hasClass(m)||(q=parseInt(b.attr("data-index")),d.triggerHandler("animatestart",[a,q]))})}h&&i&&h.length&&i.length&&(H=function(a){0===q?(h.addClass(a),i.removeClass(a)):q===k-1?(h.removeClass(a),i.addClass(a)):(h.removeClass(a),i.removeClass(a))},h.addClass("disabled").on("click",function(){q>0&&(q--,d.triggerHandler("animatestart",[a,q]))}),i.on("click",function(){k-1>q&&(q++,d.triggerHandler("animatestart",[a,q]))}));var M=function(){if(a.isPlay){var b=null;return{play:function(){this.stop(),b=setInterval(function(){++q<k||(q=0),d.triggerHandler("animatestart",[a,q])},a.playInterval)},stop:function(){clearInterval(b)}}}return{play:function(){},stop:function(){}}}();d.on(f.start,function(b){y=!0,r=s=0,x=0,v=g.client(b,"X"),w=g.client(b,"Y"),g.transition(this,""),!e.isTouch&&b.preventDefault(),M.stop(),C(a,q)}),d.on(f.move,function(b){if(!y)return!0;z=!0;var d=g.client(b,"X"),e=g.client(b,"Y");return t=d-v,u=e-w,v=d,w=e,r+=t,s+=u,0==x&&(x=Math.abs(t)>Math.abs(u)?-1:1),1==x?(y=!1,!0):(b.preventDefault(),K(c(this),r),D(a,q),!1)}),d.on(f.end,function(){y?z?(r>p?q=0===q?0:q-1:-p>r&&(q=q===k-1?k-1:q+1),E(a,q),d.triggerHandler("animatestart",[a,q]),M.play()):(E(a,q),M.play()):E(a,q),y=z=!1}),M.play()}var e={vendor:function(){var a={webkit:"webkitTransform",Moz:"MozTransition",O:"OTransform",ms:"msTransform"},c=b.body.style;for(key in a)if(a[key]in c)return[key,"-"+key.toLowerCase()+"-"];return["",""]}(),isTouch:"ontouchstart"in a},f={start:"touchstart",move:"touchmove",end:"touchend"},g={translate:function(){var a=e.vendor,b=!0,c=navigator.userAgent;return"o"===a[0].toLowerCase()?b=!1:"ms"===a[0].toLowerCase()&&c.match(/MSIE\s(\S+);/gi)&&parseInt(RegExp.$1)<10?b=!1:c.match(/android\s(\S+);/gi)&&parseInt(RegExp.$1)<3&&(b=!1),b?function(a,b,c){return"translate3d("+a+", "+b+", "+c+")"}:function(a,b){return"translate("+a+", "+b+")"}}(),transform:function(a,b){return a.style[e.vendor[0]+"Transform"]=b,a},transition:function(a){var b="";return arguments.length>1&&(b=[].slice.call(arguments,1).join(",")),a.style[e.vendor[0]+"Transition"]=b,a},client:function(a,b){var c="client"+b;return e.isTouch?(g.client=function(a,b){var c="client"+b;return a.targetTouches[0][c]},a.targetTouches[0][c]):(g.client=function(a,b){var c="client"+b;return a[c]},a[c])}};return e.isTouch||(f.start="mousedown",f.move="mousemove",f.end="mouseup"),function(a){var b={$box:null,$pointer:null,$leftBtn:null,$rightBtn:null,curClass:"cur",isPlay:!0,playInterval:5e3,start:function(){},move:function(){},end:function(){},animatestart:function(){},animateend:function(){}};c.extend(b,a);var e=b.$box,f=e.children(),g=f.length,h=function(a){for(var b=a;0!==100%b;)b++;return b}(g);return e.css("width",100*h+"%"),f.css("width",100/h+"%"),b._divisibleNum=h,d(b),b}}();c.extend(c.unit,{touchSlide:d})}(window,document,$),function(a,b,c){function d(a){this.lowImage=a.lowImage||"",this.highImage=a.highImage||"",this.link=a.link,this.className=a.className||"__floatElem",this.positionX=a.positionX||0,this.positionY=a.positionY||0,this.width=a.width||50,this.height=a.height||50,this.random=function(a){return"number"==typeof a&&1>=a&&a>=0?a:1}(a.random),this.$elem=null,this.$css=null}d.prototype.initElem=function(){var a='<div class="__floatsWrap"><a class="{className}" href="{link}"><img src="" width="{width}" height="{height}" /></a></div>'.replace(/{className}/g,this.className).replace(/{link}/g,this.link).replace(/{width}/g,this.width).replace(/{height}/g,this.height);this.$elem=c(a),this.$elem.prepend(this.$css)},d.prototype.initCSS=function(){var a=c.fx.cssPrefix,b=".{className} {display: block;position: absolute;left: {left}px;top: {top}px;width: {width}px;height: {height}px;z-index: 9999;{prefix}transform-style: preserve-3d;{prefix}animation-name: {className};{prefix}animation-duration: 3s;{prefix}animation-iteration-count: infinite;{prefix}animation-timing-function: linear;}".replace(/{prefix}/g,a).replace(/{className}/g,this.className).replace(/{width}/g,this.width).replace(/{height}/g,this.height).replace(/{left}/g,this.positionX).replace(/{top}/g,this.positionY),d="@{prefix}keyframes {className} {0% { {prefix}transform: rotate(0deg); }3% { {prefix}transform: rotate(10deg); }6% { {prefix}transform: rotate(-8deg); }9% { {prefix}transform: rotate(14deg); }12% { {prefix}transform: rotate(-12deg); }15% { {prefix}transform: rotate(0deg); }100% { {prefix}transform: rotate(0deg); }}".replace(/{prefix}/g,a).replace(/{className}/g,this.className);this.$css='<style type="text/css">'+b+d+"</style>"},d.prototype.initImage=function(a){var b=this,c=b.$elem.find("img");c.one("load",function(){if(a(),b.highImage.length>0){var d=new Image;d.onload=function(){c[0].src=b.highImage},d.src=b.highImage}}),c[0].src=b.lowImage},d.prototype.init=function(){var a=this;a.random<1&&Math.random()<a.random||(a.initCSS(),a.initElem(),a.initImage(function(){c("body").append(a.$elem),console.log(a.className+" position: "+a.positionX+", "+a.positionY+"("+100*a.random+"%)")}))},c.extend(c.unit,{Floats:d})}(window,document,$);