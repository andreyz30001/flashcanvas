/*
 * FlashCanvas
 *
 * Copyright (c) 2009      Tim Cameron Ryan
 * Copyright (c) 2009-2010 FlashCanvas Project
 * Released under the MIT/X License
 */
window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(h,i){function t(a){var b=a.d;arguments.callee[b]||(arguments.callee[b]=0);return arguments.callee[b]++}function u(){if(i.readyState==="complete"){i.detachEvent(v,u);for(var a=i.getElementsByTagName("canvas"),b=0,c=a.length;b<c;++b){var d=a[b];d.getContext||r.initElement(d)}}}function w(){var a=event.propertyName;if(a==="width"||a==="height"){var b=event.srcElement,c=b.getContext("2d"),d=parseInt(b[a]);if(isNaN(d)||d<0)d=a==="width"?
300:150;else if(d===0)d=1;b.style[a]=d+"px";c.F(b.clientWidth,b.clientHeight)}}function x(){var a=event.srcElement,b=a.parentNode;a.blur();b.focus()}function y(){h.detachEvent(z,y);for(var a=i.getElementsByTagName("canvas"),b=0,c=a.length;b<c;++b){var d=a[b],f=d.firstChild,g;for(g in f)if(typeof f[g]==="function")f[g]=null;for(g in d)if(typeof d[g]==="function")d[g]=null;d.detachEvent(A,w);f.detachEvent(B,x)}h[C]=null;h[D]=null;h[E]=null;h[F]=null;h[G]=null}function H(a){return(""+a).replace(/&/g,
"&amp;").replace(/</g,"&lt;")}var C="CanvasRenderingContext2D",D="CanvasGradient",E="CanvasPattern",F="FlashCanvas",G="G_vmlCanvasManager",B="onfocus",A="onpropertychange",v="onreadystatechange",z="onunload",l=function(){var a=i.getElementsByTagName("script");a=a[a.length-1];return i.documentMode>=8?a.src:a.getAttribute("src",4)}().replace(/[^\/]+$/,"flashcanvas.swf"),e=new function(a){for(var b=0,c=a.length;b<c;b++)this[a[b]]=b}(["toDataURL","save","restore","scale","rotate","translate","transform",
"setTransform","globalAlpha","globalCompositeOperation","strokeStyle","fillStyle","createLinearGradient","createRadialGradient","createPattern","lineWidth","lineCap","lineJoin","miterLimit","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","clearRect","fillRect","strokeRect","beginPath","closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo","arcTo","rect","arc","fill","stroke","clip","isPointInPath","font","textAlign","textBaseline","fillText","strokeText","measureText","drawImage",
"createImageData","getImageData","putImageData","addColorStop","resize"]),m={},j={},n={};function o(a,b){this.canvas=a;this.G=b;this.d=a.uniqueID;this.A();var c=this;setInterval(function(){j[c.d]===0&&c.e()},30)}o.prototype={save:function(){this.t.push({globalAlpha:this.globalAlpha,globalCompositeOperation:this.globalCompositeOperation,strokeStyle:this.strokeStyle,fillStyle:this.fillStyle,lineWidth:this.lineWidth,lineCap:this.lineCap,lineJoin:this.lineJoin,miterLimit:this.miterLimit,shadowOffsetX:this.shadowOffsetX,
shadowOffsetY:this.shadowOffsetY,shadowBlur:this.shadowBlur,shadowColor:this.shadowColor,font:this.font,textAlign:this.textAlign,textBaseline:this.textBaseline});this.b();this.c();this.g();this.f();this.o();this.n();this.a.push(e.save)},restore:function(){if(this.t.length>0){var a=this.t.pop();this.globalAlpha=a.globalAlpha;this.globalCompositeOperation=a.globalCompositeOperation;this.strokeStyle=a.strokeStyle;this.fillStyle=a.fillStyle;this.lineWidth=a.lineWidth;this.lineCap=a.lineCap;this.lineJoin=
a.lineJoin;this.miterLimit=a.miterLimit;this.shadowOffsetX=a.shadowOffsetX;this.shadowOffsetY=a.shadowOffsetY;this.shadowBlur=a.shadowBlur;this.shadowColor=a.shadowColor;this.font=a.font;this.textAlign=a.textAlign;this.textBaseline=a.textBaseline}this.a.push(e.restore)},scale:function(a,b){this.a.push(e.scale,a,b)},rotate:function(a){this.a.push(e.rotate,a)},translate:function(a,b){this.a.push(e.translate,a,b)},transform:function(a,b,c,d,f,g){this.a.push(e.transform,a,b,c,d,f,g)},setTransform:function(a,
b,c,d,f,g){this.a.push(e.setTransform,a,b,c,d,f,g)},b:function(){var a=this.a;if(this.h!==this.globalAlpha){this.h=this.globalAlpha;a.push(e.globalAlpha,this.h)}if(this.i!==this.globalCompositeOperation){this.i=this.globalCompositeOperation;a.push(e.globalCompositeOperation,this.i)}},g:function(){if(this.B!==this.strokeStyle){var a=this.B=this.strokeStyle;this.a.push(e.strokeStyle,typeof a==="object"?a.id:a)}},f:function(){if(this.w!==this.fillStyle){var a=this.w=this.fillStyle;this.a.push(e.fillStyle,
typeof a==="object"?a.id:a)}},createLinearGradient:function(a,b,c,d){this.a.push(e.createLinearGradient,a,b,c,d);return new p(this)},createRadialGradient:function(a,b,c,d,f,g){this.a.push(e.createRadialGradient,a,b,c,d,f,g);return new p(this)},createPattern:function(a,b){if(a.tagName.toUpperCase()==="IMG"){var c=a.getAttribute("src",2),d=this.d;this.a.push(e.createPattern,c,b);if(m[d]){this.e();++j[d]}return new I(this)}},o:function(){var a=this.a;if(this.l!==this.lineWidth){this.l=this.lineWidth;
a.push(e.lineWidth,this.l)}if(this.j!==this.lineCap){this.j=this.lineCap;a.push(e.lineCap,this.j)}if(this.k!==this.lineJoin){this.k=this.lineJoin;a.push(e.lineJoin,this.k)}if(this.m!==this.miterLimit){this.m=this.miterLimit;a.push(e.miterLimit,this.m)}},c:function(){var a=this.a;if(this.r!==this.shadowOffsetX){this.r=this.shadowOffsetX;a.push(e.shadowOffsetX,this.r)}if(this.s!==this.shadowOffsetY){this.s=this.shadowOffsetY;a.push(e.shadowOffsetY,this.s)}if(this.p!==this.shadowBlur){this.p=this.shadowBlur;
a.push(e.shadowBlur,this.p)}if(this.q!==this.shadowColor){this.q=this.shadowColor;a.push(e.shadowColor,this.q)}},clearRect:function(a,b,c,d){this.a.push(e.clearRect,a,b,c,d)},fillRect:function(a,b,c,d){this.b();this.c();this.f();this.a.push(e.fillRect,a,b,c,d)},strokeRect:function(a,b,c,d){this.b();this.c();this.g();this.o();this.a.push(e.strokeRect,a,b,c,d)},beginPath:function(){this.a.push(e.beginPath)},closePath:function(){this.a.push(e.closePath)},moveTo:function(a,b){this.a.push(e.moveTo,a,b)},
lineTo:function(a,b){this.a.push(e.lineTo,a,b)},quadraticCurveTo:function(a,b,c,d){this.a.push(e.quadraticCurveTo,a,b,c,d)},bezierCurveTo:function(a,b,c,d,f,g){this.a.push(e.bezierCurveTo,a,b,c,d,f,g)},arcTo:function(a,b,c,d,f){this.a.push(e.arcTo,a,b,c,d,f)},rect:function(a,b,c,d){this.a.push(e.rect,a,b,c,d)},arc:function(a,b,c,d,f,g){this.a.push(e.arc,a,b,c,d,f,g?1:0)},fill:function(){this.b();this.c();this.f();this.a.push(e.fill)},stroke:function(){this.b();this.c();this.g();this.o();this.a.push(e.stroke)},
clip:function(){this.a.push(e.clip)},n:function(){var a=this.a;if(this.z!==this.font)try{var b=n[this.d];b.style.font=this.z=this.font;var c=b.currentStyle;a.push(e.font,[c.fontStyle,c.fontWeight,b.offsetHeight,c.fontFamily].join(" "))}catch(d){}if(this.u!==this.textAlign){this.u=this.textAlign;a.push(e.textAlign,this.u)}if(this.v!==this.textBaseline){this.v=this.textBaseline;a.push(e.textBaseline,this.v)}},fillText:function(a,b,c,d){this.b();this.f();this.c();this.n();this.a.push(e.fillText,H(a),
b,c,d===void 0?Infinity:d)},strokeText:function(a,b,c,d){this.b();this.g();this.c();this.n();this.a.push(e.strokeText,H(a),b,c,d===void 0?Infinity:d)},measureText:function(a){var b=n[this.d];try{b.style.font=this.font}catch(c){}b.innerText=a.replace(/[ \n\f\r]/g,"\t");return new K(b.offsetWidth)},drawImage:function(){var a=arguments,b=a.length;if(a[0].tagName.toUpperCase()==="IMG"){var c=a[0].getAttribute("src",2),d=this.d;this.b();this.c();if(b===3)this.a.push(e.drawImage,b,c,a[1],a[2]);else if(b===
5)this.a.push(e.drawImage,b,c,a[1],a[2],a[3],a[4]);else if(b===9)this.a.push(e.drawImage,b,c,a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);else return;if(m[d]){this.e();++j[d]}}},A:function(){this.globalAlpha=this.h=1;this.globalCompositeOperation=this.i="source-over";this.fillStyle=this.w=this.strokeStyle=this.B="#000000";this.lineWidth=this.l=1;this.lineCap=this.j="butt";this.lineJoin=this.k="miter";this.miterLimit=this.m=10;this.shadowBlur=this.p=this.shadowOffsetY=this.s=this.shadowOffsetX=this.r=
0;this.shadowColor=this.q="rgba(0,0,0,0)";this.font=this.z="10px sans-serif";this.textAlign=this.u="start";this.textBaseline=this.v="alphabetic";this.a=[];this.t=[]},D:function(){var a=this.a;this.a=[];return a},e:function(){var a=this.D();if(a.length>0)return eval(this.G.CallFunction('<invoke name="postCommands" returntype="javascript"><arguments><string>'+a.join("&#0;")+"</string></arguments></invoke>"))},F:function(a,b){this.e();this.A();this.a.push(e.resize,a,b)}};function p(a){this.C=a;this.id=
t(a)}p.prototype={addColorStop:function(a,b){this.C.a.push(e.addColorStop,this.id,a,b)}};function I(a){this.id=t(a)}function K(a){this.width=a}var r={initElement:function(a){var b=parseInt(a.getAttribute("width")),c=parseInt(a.getAttribute("height"));if(isNaN(b)||b<0)b=300;if(isNaN(c)||c<0)c=150;a.style.width=b+"px";a.style.height=c+"px";b=a.uniqueID;c="external"+b;m[b]=false;j[b]=1;a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+
c+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+c+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>';var d=a.firstChild;n[b]=a.lastChild;var f=i.body.contains;if(f(a))d.movie=l;else var g=setInterval(function(){if(f(a)){clearInterval(g);d.movie=l}},0);if(i.compatMode==="BackCompat"||!h.XMLHttpRequest)n[b].style.overflow="hidden";
var q=new o(a,d);a.getContext=function(k){return k==="2d"?q:null};a.toDataURL=function(){var k=arguments,s=k[0]?k[0].toLowerCase():"image/png";s==="image/jpeg"?q.a.push(e.toDataURL,s,k[1]||0.5):q.a.push(e.toDataURL,s);return q.e()};d.attachEvent(B,x);return a},setOptions:function(){},trigger:function(a,b){i.getElementById("external"+a).parentNode.fireEvent("on"+b)},unlock:function(a,b){j[a]&&--j[a];if(b){var c=i.getElementById("external"+a);c.parentNode.attachEvent(A,w);c.resize(c.clientWidth,c.clientHeight);
m[a]=true}}};i.createElement("canvas");i.createStyleSheet().cssText="canvas{display:inline-block;overflow:hidden;width:300px;height:150px}";i.attachEvent(v,u);h.attachEvent(z,y);if(l.indexOf(location.protocol+"//"+location.host+"/")===0){var J=new ActiveXObject("Microsoft.XMLHTTP");J.open("GET",l,false);J.send(null)}h[C]=o;h[D]=p;h[E]=I;h[F]=r;h[G]={init:function(){},init_:function(){},initElement:r.initElement};keep=o.measureText}(window,document);
