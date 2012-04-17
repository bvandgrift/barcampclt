
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 *
 * Version: 1.3.1 (05/03/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function(b){var m,u,x,g,D,i,z,A,B,p=0,e={},q=[],n=0,c={},j=[],E=null,s=new Image,G=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,S=/[^\.]\.(swf)\s*$/i,H,I=1,k,l,h=false,y=b.extend(b("<div/>")[0],{prop:0}),v=0,O=!b.support.opacity&&!window.XMLHttpRequest,J=function(){u.hide();s.onerror=s.onload=null;E&&E.abort();m.empty()},P=function(){b.fancybox('<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>',{scrolling:"no",padding:20,transitionIn:"none",transitionOut:"none"})},
K=function(){return[b(window).width(),b(window).height(),b(document).scrollLeft(),b(document).scrollTop()]},T=function(){var a=K(),d={},f=c.margin,o=c.autoScale,t=(20+f)*2,w=(20+f)*2,r=c.padding*2;if(c.width.toString().indexOf("%")>-1){d.width=a[0]*parseFloat(c.width)/100-40;o=false}else d.width=c.width+r;if(c.height.toString().indexOf("%")>-1){d.height=a[1]*parseFloat(c.height)/100-40;o=false}else d.height=c.height+r;if(o&&(d.width>a[0]-t||d.height>a[1]-w))if(e.type=="image"||e.type=="swf"){t+=r;
w+=r;o=Math.min(Math.min(a[0]-t,c.width)/c.width,Math.min(a[1]-w,c.height)/c.height);d.width=Math.round(o*(d.width-r))+r;d.height=Math.round(o*(d.height-r))+r}else{d.width=Math.min(d.width,a[0]-t);d.height=Math.min(d.height,a[1]-w)}d.top=a[3]+(a[1]-(d.height+40))*0.5;d.left=a[2]+(a[0]-(d.width+40))*0.5;if(c.autoScale===false){d.top=Math.max(a[3]+f,d.top);d.left=Math.max(a[2]+f,d.left)}return d},U=function(a){if(a&&a.length)switch(c.titlePosition){case "inside":return a;case "over":return'<span id="fancybox-title-over">'+
a+"</span>";default:return'<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">'+a+'</span><span id="fancybox-title-right"></span></span>'}return false},V=function(){var a=c.title,d=l.width-c.padding*2,f="fancybox-title-"+c.titlePosition;b("#fancybox-title").remove();v=0;if(c.titleShow!==false){a=b.isFunction(c.titleFormat)?c.titleFormat(a,j,n,c):U(a);if(!(!a||a==="")){b('<div id="fancybox-title" class="'+f+'" />').css({width:d,paddingLeft:c.padding,
paddingRight:c.padding}).html(a).appendTo("body");switch(c.titlePosition){case "inside":v=b("#fancybox-title").outerHeight(true)-c.padding;l.height+=v;break;case "over":b("#fancybox-title").css("bottom",c.padding);break;default:b("#fancybox-title").css("bottom",b("#fancybox-title").outerHeight(true)*-1);break}b("#fancybox-title").appendTo(D).hide()}}},W=function(){b(document).unbind("keydown.fb").bind("keydown.fb",function(a){if(a.keyCode==27&&c.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if(a.keyCode==
37){a.preventDefault();b.fancybox.prev()}else if(a.keyCode==39){a.preventDefault();b.fancybox.next()}});if(b.fn.mousewheel){g.unbind("mousewheel.fb");j.length>1&&g.bind("mousewheel.fb",function(a,d){a.preventDefault();h||d===0||(d>0?b.fancybox.prev():b.fancybox.next())})}if(c.showNavArrows){if(c.cyclic&&j.length>1||n!==0)A.show();if(c.cyclic&&j.length>1||n!=j.length-1)B.show()}},X=function(){var a,d;if(j.length-1>n){a=j[n+1].href;if(typeof a!=="undefined"&&a.match(G)){d=new Image;d.src=a}}if(n>0){a=
j[n-1].href;if(typeof a!=="undefined"&&a.match(G)){d=new Image;d.src=a}}},L=function(){i.css("overflow",c.scrolling=="auto"?c.type=="image"||c.type=="iframe"||c.type=="swf"?"hidden":"auto":c.scrolling=="yes"?"auto":"visible");if(!b.support.opacity){i.get(0).style.removeAttribute("filter");g.get(0).style.removeAttribute("filter")}b("#fancybox-title").show();c.hideOnContentClick&&i.one("click",b.fancybox.close);c.hideOnOverlayClick&&x.one("click",b.fancybox.close);c.showCloseButton&&z.show();W();b(window).bind("resize.fb",
b.fancybox.center);c.centerOnScroll?b(window).bind("scroll.fb",b.fancybox.center):b(window).unbind("scroll.fb");b.isFunction(c.onComplete)&&c.onComplete(j,n,c);h=false;X()},M=function(a){var d=Math.round(k.width+(l.width-k.width)*a),f=Math.round(k.height+(l.height-k.height)*a),o=Math.round(k.top+(l.top-k.top)*a),t=Math.round(k.left+(l.left-k.left)*a);g.css({width:d+"px",height:f+"px",top:o+"px",left:t+"px"});d=Math.max(d-c.padding*2,0);f=Math.max(f-(c.padding*2+v*a),0);i.css({width:d+"px",height:f+
"px"});if(typeof l.opacity!=="undefined")g.css("opacity",a<0.5?0.5:a)},Y=function(a){var d=a.offset();d.top+=parseFloat(a.css("paddingTop"))||0;d.left+=parseFloat(a.css("paddingLeft"))||0;d.top+=parseFloat(a.css("border-top-width"))||0;d.left+=parseFloat(a.css("border-left-width"))||0;d.width=a.width();d.height=a.height();return d},Q=function(){var a=e.orig?b(e.orig):false,d={};if(a&&a.length){a=Y(a);d={width:a.width+c.padding*2,height:a.height+c.padding*2,top:a.top-c.padding-20,left:a.left-c.padding-
20}}else{a=K();d={width:1,height:1,top:a[3]+a[1]*0.5,left:a[2]+a[0]*0.5}}return d},N=function(){u.hide();if(g.is(":visible")&&b.isFunction(c.onCleanup))if(c.onCleanup(j,n,c)===false){b.event.trigger("fancybox-cancel");h=false;return}j=q;n=p;c=e;i.get(0).scrollTop=0;i.get(0).scrollLeft=0;if(c.overlayShow){O&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});
x.css({"background-color":c.overlayColor,opacity:c.overlayOpacity}).unbind().show()}l=T();V();if(g.is(":visible")){b(z.add(A).add(B)).hide();var a=g.position(),d;k={top:a.top,left:a.left,width:g.width(),height:g.height()};d=k.width==l.width&&k.height==l.height;i.fadeOut(c.changeFade,function(){var f=function(){i.html(m.contents()).fadeIn(c.changeFade,L)};b.event.trigger("fancybox-change");i.empty().css("overflow","hidden");if(d){i.css({top:c.padding,left:c.padding,width:Math.max(l.width-c.padding*
2,1),height:Math.max(l.height-c.padding*2-v,1)});f()}else{i.css({top:c.padding,left:c.padding,width:Math.max(k.width-c.padding*2,1),height:Math.max(k.height-c.padding*2,1)});y.prop=0;b(y).animate({prop:1},{duration:c.changeSpeed,easing:c.easingChange,step:M,complete:f})}})}else{g.css("opacity",1);if(c.transitionIn=="elastic"){k=Q();i.css({top:c.padding,left:c.padding,width:Math.max(k.width-c.padding*2,1),height:Math.max(k.height-c.padding*2,1)}).html(m.contents());g.css(k).show();if(c.opacity)l.opacity=
0;y.prop=0;b(y).animate({prop:1},{duration:c.speedIn,easing:c.easingIn,step:M,complete:L})}else{i.css({top:c.padding,left:c.padding,width:Math.max(l.width-c.padding*2,1),height:Math.max(l.height-c.padding*2-v,1)}).html(m.contents());g.css(l).fadeIn(c.transitionIn=="none"?0:c.speedIn,L)}}},F=function(){m.width(e.width);m.height(e.height);if(e.width=="auto")e.width=m.width();if(e.height=="auto")e.height=m.height();N()},Z=function(){h=true;e.width=s.width;e.height=s.height;b("<img />").attr({id:"fancybox-img",
src:s.src,alt:e.title}).appendTo(m);N()},C=function(){J();var a=q[p],d,f,o,t,w;e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));o=a.title||b(a).title||e.title||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(o===""&&e.orig)o=e.orig.attr("alt");d=a.nodeName&&/^(?:javascript|#)/i.test(a.href)?e.href||null:e.href||a.href||null;if(e.type){f=e.type;if(!d)d=e.content}else if(e.content)f="html";else if(d)if(d.match(G))f=
"image";else if(d.match(S))f="swf";else if(b(a).hasClass("iframe"))f="iframe";else if(d.match(/#/)){a=d.substr(d.indexOf("#"));f=b(a).length>0?"inline":"ajax"}else f="ajax";else f="inline";e.type=f;e.href=d;e.title=o;if(e.autoDimensions&&e.type!=="iframe"&&e.type!=="swf"){e.width="auto";e.height="auto"}if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=false;e.enableEscapeButton=false;e.showCloseButton=false}if(b.isFunction(e.onStart))if(e.onStart(q,p,e)===false){h=false;
return}m.css("padding",20+e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(i.children())});switch(f){case "html":m.html(e.content);F();break;case "inline":b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(i.children())}).bind("fancybox-cancel",function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();
s=new Image;s.onerror=function(){P()};s.onload=function(){s.onerror=null;s.onload=null;Z()};s.src=d;break;case "swf":t='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+d+'"></param>';w="";b.each(e.swf,function(r,R){t+='<param name="'+r+'" value="'+R+'"></param>';w+=" "+r+'="'+R+'"'});t+='<embed src="'+d+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+w+"></embed></object>";m.html(t);
F();break;case "ajax":a=d.split("#",2);f=e.ajax.data||{};if(a.length>1){d=a[0];if(typeof f=="string")f+="&selector="+a[1];else f.selector=a[1]}h=false;b.fancybox.showActivity();E=b.ajax(b.extend(e.ajax,{url:d,data:f,error:P,success:function(r){if(E.status==200){m.html(r);F()}}}));break;case "iframe":b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" scrolling="'+e.scrolling+'" src="'+e.href+'"></iframe>').appendTo(m);N();break}},$=function(){if(u.is(":visible")){b("div",
u).css("top",I*-40+"px");I=(I+1)%12}else clearInterval(H)},aa=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),u=b('<div id="fancybox-loading"><div></div></div>'),x=b('<div id="fancybox-overlay"></div>'),g=b('<div id="fancybox-wrap"></div>'));if(!b.support.opacity){g.addClass("fancybox-ie");u.addClass("fancybox-ie")}D=b('<div id="fancybox-outer"></div>').append('<div class="fancy-bg" id="fancy-bg-n"></div><div class="fancy-bg" id="fancy-bg-ne"></div><div class="fancy-bg" id="fancy-bg-e"></div><div class="fancy-bg" id="fancy-bg-se"></div><div class="fancy-bg" id="fancy-bg-s"></div><div class="fancy-bg" id="fancy-bg-sw"></div><div class="fancy-bg" id="fancy-bg-w"></div><div class="fancy-bg" id="fancy-bg-nw"></div>').appendTo(g);
D.append(i=b('<div id="fancybox-inner"></div>'),z=b('<a id="fancybox-close"></a>'),A=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),B=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));z.click(b.fancybox.close);u.click(b.fancybox.cancel);A.click(function(a){a.preventDefault();b.fancybox.prev()});B.click(function(a){a.preventDefault();b.fancybox.next()});if(O){x.get(0).style.setExpression("height",
"document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");u.get(0).style.setExpression("top","(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");D.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>')}}};
b.fn.fancybox=function(a){b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(d){d.preventDefault();if(!h){h=true;b(this).blur();q=[];p=0;d=b(this).attr("rel")||"";if(!d||d==""||d==="nofollow")q.push(this);else{q=b("a[rel="+d+"], area[rel="+d+"]");p=q.index(this)}C();return false}});return this};b.fancybox=function(a,d){if(!h){h=true;d=typeof d!=="undefined"?d:{};q=[];p=d.index||0;if(b.isArray(a)){for(var f=0,o=a.length;f<o;f++)if(typeof a[f]==
"object")b(a[f]).data("fancybox",b.extend({},d,a[f]));else a[f]=b({}).data("fancybox",b.extend({content:a[f]},d));q=jQuery.merge(q,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},d,a));else a=b({}).data("fancybox",b.extend({content:a},d));q.push(a)}if(p>q.length||p<0)p=0;C()}};b.fancybox.showActivity=function(){clearInterval(H);u.show();H=setInterval($,66)};b.fancybox.hideActivity=function(){u.hide()};b.fancybox.next=function(){return b.fancybox.pos(n+1)};b.fancybox.prev=function(){return b.fancybox.pos(n-
1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a,10);if(a>-1&&j.length>a){p=a;C()}if(c.cyclic&&j.length>1&&a<0){p=j.length-1;C()}if(c.cyclic&&j.length>1&&a>=j.length){p=0;C()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");J();e&&b.isFunction(e.onCancel)&&e.onCancel(q,p,e);h=false}};b.fancybox.close=function(){function a(){x.fadeOut("fast");g.hide();b.event.trigger("fancybox-cleanup");i.empty();b.isFunction(c.onClosed)&&c.onClosed(j,n,c);j=e=[];n=p=0;c=e={};h=false}
if(!(h||g.is(":hidden"))){h=true;if(c&&b.isFunction(c.onCleanup))if(c.onCleanup(j,n,c)===false){h=false;return}J();b(z.add(A).add(B)).hide();b("#fancybox-title").remove();g.add(i).add(x).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");i.css("overflow","hidden");if(c.transitionOut=="elastic"){k=Q();var d=g.position();l={top:d.top,left:d.left,width:g.width(),height:g.height()};if(c.opacity)l.opacity=1;y.prop=1;b(y).animate({prop:0},{duration:c.speedOut,easing:c.easingOut,
step:M,complete:a})}else g.fadeOut(c.transitionOut=="none"?0:c.speedOut,a)}};b.fancybox.resize=function(){var a,d;if(!(h||g.is(":hidden"))){h=true;a=i.wrapInner("<div style='overflow:auto'></div>").children();d=a.height();g.css({height:d+c.padding*2+v});i.css({height:d});a.replaceWith(a.children());b.fancybox.center()}};b.fancybox.center=function(){h=true;var a=K(),d=c.margin,f={};f.top=a[3]+(a[1]-(g.height()-v+40))*0.5;f.left=a[2]+(a[0]-(g.width()+40))*0.5;f.top=Math.max(a[3]+d,f.top);f.left=Math.max(a[2]+
d,f.left);g.css(f);h=false};b.fn.fancybox.defaults={padding:10,margin:20,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.3,overlayColor:"#666",titleShow:true,titlePosition:"outside",titleFormat:null,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",
easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,onStart:null,onCancel:null,onComplete:null,onCleanup:null,onClosed:null};b(document).ready(function(){aa()})})(jQuery);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h.i[\'1a\']=h.i[\'z\'];h.O(h.i,{y:\'D\',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce'.split('|'),0,{}))

/*!
 * jQuery Twitter Search Plugin
 * Examples and documentation at: http://jquery.malsup.com/twitter/
 * Copyright (c) 2010 M. Alsup
 * Version: 1.01 (14-APR-2010)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
 
 // @todo: refresh button
 
;(function($) {
	$.fn.twitterSearch = function(options) {
		if (typeof options == 'string')
			options = { term: options };
		return this.each(function() {
			var $frame = $(this);
			var opts = $.extend(true, {}, $.fn.twitterSearch.defaults, options || {}, $.metadata ? $frame.metadata() : {});
			opts.formatter = opts.formatter || $.fn.twitterSearch.formatter; 
			opts.filter = opts.filter || $.fn.twitterSearch.filter;
			var url = opts.url + opts.term;
			
			if (!opts.applyStyles) { // throw away all style defs
				for (var css in opts.css)
					opts.css[css] = {};
			}
			
			if (opts.title === null) // user can set to '' to suppress title
				opts.title = opts.term;

			opts.title = opts.title || '';
			var t = opts.titleLink ? ('<a href="'+ opts.titleLink +'">'+ opts.title + '</a>') : ('<span>' + opts.title + '</span>');
			var $t = $(t);
			if (opts.titleLink)
				$t.css(opts.css['titleLink']);
			var $title = $('<div class="twitterSearchTitle"></div>').append($t).appendTo($frame).css(opts.css['title']);
			if (opts.bird) {
				var $b = $('<img class="twitterSearchBird" src="'+opts.birdSrc+'" />').appendTo($title).css(opts.css['bird']);
				if (opts.birdLink)
					$b.wrap('<a href="'+ opts.birdLink +'"></a>');
			}
			var $cont = $('<ul></ul>').appendTo($frame).css(opts.css['container']);
			var cont = $cont[0];
			if (opts.colorExterior)
				$title.css('background-color',opts.colorExterior);
			if (opts.colorInterior)
				$cont.css('background-color',opts.colorInterior);
			
			$frame.css(opts.css['frame']);
			if (opts.colorExterior)
				$frame.css('border-color',opts.colorExterior);
			
			var h = $frame.innerHeight() - $title.outerHeight();
			$cont.height(h);
			
			if (opts.pause)
				$cont.hover(function(){cont.twitterSearchPause = true;},function(){cont.twitterSearchPause = false;});
			
			$('<div class="loading">Loading tweets..</div>').css(opts.css['loading']).appendTo($cont);
			
			// grab twitter stream
			$.getJSONP({
				url: url,
				timeout: 30000,
				error: function(xhr, status, e) {
					failWhale(e);
				},
				success: function(json) {
					if (json.error) {
						failWhale(json.error);
						return;
					}
					$cont.empty();
					// iterate twitter results 
					$.each(json.results, function(i) {
						if (!opts.filter.call(opts, this))
							return; // skip this tweet
						var tweet = opts.formatter(this, opts), $tweet = $(tweet);
						$tweet.css(opts.css['tweet']);
						var $img = $tweet.find('.avatar').css(opts.css['img']);
						$tweet.find('.user').css(opts.css['user']);
						$tweet.find('.timestamp').css(opts.css['time']);
						$tweet.find('a').css(opts.css['a']);
						$tweet.appendTo($cont);
						var $text = $tweet.find('.text').css(opts.css['text']);
						//if (opts.avatar) {
						//	var w = $img.outerWidth() + parseInt($tweet.css('paddingLeft'));
						//	$text.css('paddingLeft', w);
						//}
					});
					
					if (json.results.length < 2)
						return;

					// stage first animation
					setTimeout(go, opts.timeout);
				}
			});

			function failWhale(msg) {
				var $fail = $('<div class="twitterSearchFail">' + msg + '</div>').css(opts.css['fail']);
				$cont.empty().append($fail);
			};
			
			function go() {
				if (cont.twitterSearchPause) {
					setTimeout(go, 500);
					return;
				}
				var $el = $cont.children(':first'), el = $el[0];
				$el.animate(opts.animOut, opts.animOutSpeed, function() {
					var h = $el.outerHeight();
					$el.animate({ marginTop: -h }, opts.animInSpeed, function() {
						$el.css({ marginTop: 0,	opacity: 1 });
						/*@cc_on
						try { el.style.removeAttribute('filter'); } // ie cleartype fix
						catch(smother) {}
						@*/
						$el.css(opts.css['tweet']).show().appendTo($cont);
					});
					// stage next animation
					setTimeout(go, opts.timeout);					
				});
			}
		});
	};
	
	$.fn.twitterSearch.filter = function(tweet) {
		return true;
	};

	$.fn.twitterSearch.formatter = function(json, opts) {
		var t = json.text;
		if (opts.anchors) {
			t = json.text.replace(/(http:\/\/\S+)/g, '<a href="$1">$1</a>');
			t = t.replace(/\@(\w+)/g, '<a href="http://twitter.com/$1">@$1</a>');
		}
		var s = '<li class="clearfix">';
		if (opts.avatar)
			s += '<img class="avatar" src="' + json.profile_image_url + '" />';
		s += '<span class="user"><a href="http://www.twitter.com/'+ json.from_user+'/status/'+ json.id +'">' 
		  + json.from_user + '</a></span>';
		var d = prettyDate(json.created_at);
		if (opts.time && d)
			s += ' <span class="timestamp">'+ d +'</span>'
		 s += '<span class="text">' + t + '</span></li>';
		 return s;
	};
	
	$.fn.twitterSearch.defaults = {
		url: 'http://search.twitter.com/search.json?callback=?&q=',
		anchors: true,				// true or false (enable embedded links in tweets)
		animOutSpeed: 500,			// speed of animation for top tweet when removed
		animInSpeed: 500,			// speed of scroll animation for moving tweets up
		animOut: { opacity: 0 },	// animation of top tweet when it is removed
		applyStyles: true,			// true or false (apply default css styling or not)
		avatar: true,				// true or false (show or hide twitter profile images)
		bird: true,					// true or false (show or hide twitter bird image)
		birdLink: false,			// url that twitter bird image should like to
		birdSrc: 'http://cloud.github.com/downloads/malsup/twitter/tweet.gif', // twitter bird image
		colorExterior: null,        // css override of frame border-color and title background-color
		colorInterior: null,        // css override of container background-color
		filter: null,               // callback fn to filter tweets:  fn(tweetJson) { /* return false to skip tweet */ }
		formatter: null,			// callback fn to build tweet markup
		pause: false,				// true or false (pause on hover)
		term: '',					// twitter search term
		time: true,					// true or false (show or hide the time that the tweet was sent)
		timeout: 4000,				// delay betweet tweet scroll
		title: null,				// title text to display when frame option is true (default = 'term' text)
		titleLink: null,			// url for title link
		css: {
			// default styling
			a:     {},
			bird:  {},
			container: {},
			fail:  {},
			frame: {},
			tweet: {},
			img:   {},
			loading: {},
			text:  {},
			time:  {},
			title: {},
			titleLink: {},
			user:  {}
		}
	};

    // fn to handle jsonp with timeouts and errors
    // hat tip to Ricardo Tomasi for the timeout logic
    $.getJSONP = function(s) {
        s.dataType = 'jsonp';
        $.ajax(s);

        // figure out what the callback fn is
        var $script = $(document.getElementsByTagName('head')[0].firstChild);
        var url = $script.attr('src') || '';
        var cb = (url.match(/callback=(\w+)/)||[])[1];
        if (!cb)
            return; // bail
        var t = 0, cbFn = window[cb];

        $script[0].onerror = function(e) {
            $script.remove();
            handleError(s, {}, "error", e);
            clearTimeout(t);
        };

        if (!s.timeout)
            return;

        window[cb] = function(json) {
            clearTimeout(t);
            cbFn(json);
            cbFn = null;
        };

        t = setTimeout(function() {
            $script.remove();
            handleError(s, {}, "timeout");
            if (cbFn)
                window[cb] = function(){};
        }, s.timeout);
        
        function handleError(s, o, msg, e) {
            // support jquery versions before and after 1.4.3
            ($.ajax.handleError || $.handleError)(s, o, msg, e);
        }
    };
	
	/*
	 * JavaScript Pretty Date
	 * Copyright (c) 2008 John Resig (jquery.com)
	 * Licensed under the MIT license.
	 */
	// converts ISO time to casual time
	function prettyDate(time){
		var date = new Date((time || "").replace(/-/g,"/").replace(/TZ/g," ")),
			diff = (((new Date()).getTime() - date.getTime()) / 1000),
			day_diff = Math.floor(diff / 86400);
				
		if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
			return;
		var v = day_diff == 0 && (
				diff < 60 && "just now" ||
				diff < 120 && "1 minute ago" ||
				diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
				diff < 7200 && "1 hour ago" ||
				diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
			day_diff == 1 && "Yesterday" ||
			day_diff < 7 && day_diff + " days ago" ||
			day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
		if (!v)
			window.console && console.log(time);
		return v ? v : '';
	}

})(jQuery);
// remap jQuery to $
//(function($){})(window.jQuery);


