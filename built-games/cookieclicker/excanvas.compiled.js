document.createElement("canvas").getContext||function(){var t=Math,e=t.round,i=t.sin,r=t.cos,s=t.abs,n=t.sqrt,a=10;function o(){return this.context_||(this.context_=new g(this))}var h=Array.prototype.slice;var l={init:function(t){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var e=t||document;e.createElement("canvas"),e.attachEvent("onreadystatechange",function(t,e){var i=h.call(arguments,2);return function(){return t.apply(e,i.concat(h.call(arguments)))}}(this.init_,this,e))}},init_:function(t){if(t.namespaces.g_vml_||t.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),t.namespaces.g_o_||t.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!t.styleSheets.ex_canvas_){var e=t.createStyleSheet();e.owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}for(var i=t.getElementsByTagName("canvas"),r=0;r<i.length;r++)this.initElement(i[r])},initElement:function(t){if(!t.getContext){t.getContext=o,t.innerHTML="",t.attachEvent("onpropertychange",c),t.attachEvent("onresize",u);var e=t.attributes;e.width&&e.width.specified?t.style.width=e.width.nodeValue+"px":t.width=t.clientWidth,e.height&&e.height.specified?t.style.height=e.height.nodeValue+"px":t.height=t.clientHeight}return t}};function c(t){var e=t.srcElement;switch(t.propertyName){case"width":e.style.width=e.attributes.width.nodeValue+"px",e.getContext().clearRect();break;case"height":e.style.height=e.attributes.height.nodeValue+"px",e.getContext().clearRect();break}}function u(t){var e=t.srcElement;e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")}l.init();for(var _=[],f=0;f<16;f++)for(var p=0;p<16;p++)_[16*f+p]=f.toString(16)+p.toString(16);function y(t,e){for(var i=[[1,0,0],[0,1,0],[0,0,1]],r=0;r<3;r++)for(var s=0;s<3;s++){for(var n=0,a=0;a<3;a++)n+=t[r][a]*e[a][s];i[r][s]=n}return i}function d(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}function x(t){var e,i=1;if("rgb"==(t=String(t)).substring(0,3)){var r=t.indexOf("(",3),s=t.indexOf(")",r+1),n=t.substring(r+1,s).split(",");e="#";for(var a=0;a<3;a++)e+=_[Number(n[a])];4==n.length&&"a"==t.substr(3,1)&&(i=n[3])}else e=t;return{color:e,alpha:i}}function g(t){this.m_=[[1,0,0],[0,1,0],[0,0,1]],this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.fillStyle=this.strokeStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=10,this.globalAlpha=1,this.canvas=t;var e=t.ownerDocument.createElement("div");e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",e.style.overflow="hidden",e.style.position="absolute",t.appendChild(e),this.element_=e,this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}var m=g.prototype;function v(t,e,i,r){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y}),t.currentX_=r.x,t.currentY_=r.y}function S(t,e,i){(function(t){for(var e=0;e<3;e++)for(var i=0;i<2;i++)if(!isFinite(t[e][i])||isNaN(t[e][i]))return!1;return!0})(e)&&(t.m_=e,i&&(t.lineScale_=n(s(e[0][0]*e[1][1]-e[0][1]*e[1][0]))))}function w(t){this.type_=t,this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0,this.colors_=[]}function C(){}m.clearRect=function(){this.element_.innerHTML=""},m.beginPath=function(){this.currentPath_=[]},m.moveTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},m.lineTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},m.bezierCurveTo=function(t,e,i,r,s,n){var a=this.getCoords_(s,n);v(this,this.getCoords_(t,e),this.getCoords_(i,r),a)},m.quadraticCurveTo=function(t,e,i,r){var s=this.getCoords_(t,e),n=this.getCoords_(i,r),a={x:this.currentX_+.6666666666666666*(s.x-this.currentX_),y:this.currentY_+.6666666666666666*(s.y-this.currentY_)};v(this,a,{x:a.x+(n.x-this.currentX_)/3,y:a.y+(n.y-this.currentY_)/3},n)},m.arc=function(t,e,s,n,o,h){s*=a;var l=h?"at":"wa",c=t+r(n)*s-5,u=e+i(n)*s-5,_=t+r(o)*s-5,f=e+i(o)*s-5;c!=_||h||(c+=.125);var p=this.getCoords_(t,e),y=this.getCoords_(c,u),d=this.getCoords_(_,f);this.currentPath_.push({type:l,x:p.x,y:p.y,radius:s,xStart:y.x,yStart:y.y,xEnd:d.x,yEnd:d.y})},m.rect=function(t,e,i,r){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath()},m.strokeRect=function(t,e,i,r){var s=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.stroke(),this.currentPath_=s},m.fillRect=function(t,e,i,r){var s=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.fill(),this.currentPath_=s},m.createLinearGradient=function(t,e,i,r){var s=new w("gradient");return s.x0_=t,s.y0_=e,s.x1_=i,s.y1_=r,s},m.createRadialGradient=function(t,e,i,r,s,n){var a=new w("gradientradial");return a.x0_=t,a.y0_=e,a.r0_=i,a.x1_=r,a.y1_=s,a.r1_=n,a},m.drawImage=function(i){var r,s,n,o,h,l,c,u,_=i.runtimeStyle.width,f=i.runtimeStyle.height;i.runtimeStyle.width="auto",i.runtimeStyle.height="auto";var p=i.width,y=i.height;if(i.runtimeStyle.width=_,i.runtimeStyle.height=f,3==arguments.length)r=arguments[1],s=arguments[2],h=l=0,c=n=p,u=o=y;else if(5==arguments.length)r=arguments[1],s=arguments[2],n=arguments[3],o=arguments[4],h=l=0,c=p,u=y;else{if(9!=arguments.length)throw Error("Invalid number of arguments");h=arguments[1],l=arguments[2],c=arguments[3],u=arguments[4],r=arguments[5],s=arguments[6],n=arguments[7],o=arguments[8]}var d=this.getCoords_(r,s),x=[];if(x.push(" <g_vml_:group",' coordsize="',100,",",100,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]){var g=[];g.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",e(d.x/a),",","Dy=",e(d.y/a),"");var m=d,v=this.getCoords_(r+n,s),S=this.getCoords_(r,s+o),w=this.getCoords_(r+n,s+o);m.x=t.max(m.x,v.x,S.x,w.x),m.y=t.max(m.y,v.y,S.y,w.y),x.push("padding:0 ",e(m.x/a),"px ",e(m.y/a),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",g.join(""),", sizingmethod='clip');")}else x.push("top:",e(d.y/a),"px;left:",e(d.x/a),"px;");x.push(' ">','<g_vml_:image src="',i.src,'"',' style="width:',a*n,"px;"," height:",a*o,'px;"',' cropleft="',h/p,'"',' croptop="',l/y,'"',' cropright="',(p-h-c)/p,'"',' cropbottom="',(y-l-u)/y,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",x.join(""))},m.stroke=function(i){var r=[],s=x(i?this.fillStyle:this.strokeStyle),n=s.color,o=s.alpha*this.globalAlpha;r.push("<g_vml_:shape",' filled="',!!i,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',100," ",100,'"',' stroked="',!i,'"',' path="');for(var h={x:null,y:null},l={x:null,y:null},c=0;c<this.currentPath_.length;c++){var u=this.currentPath_[c];switch(u.type){case"moveTo":r.push(" m ",e(u.x),",",e(u.y));break;case"lineTo":r.push(" l ",e(u.x),",",e(u.y));break;case"close":r.push(" x "),u=null;break;case"bezierCurveTo":r.push(" c ",e(u.cp1x),",",e(u.cp1y),",",e(u.cp2x),",",e(u.cp2y),",",e(u.x),",",e(u.y));break;case"at":case"wa":r.push(" ",u.type," ",e(u.x-this.arcScaleX_*u.radius),",",e(u.y-this.arcScaleY_*u.radius)," ",e(u.x+this.arcScaleX_*u.radius),",",e(u.y+this.arcScaleY_*u.radius)," ",e(u.xStart),",",e(u.yStart)," ",e(u.xEnd),",",e(u.yEnd));break}u&&((null==h.x||u.x<h.x)&&(h.x=u.x),(null==l.x||u.x>l.x)&&(l.x=u.x),(null==h.y||u.y<h.y)&&(h.y=u.y),(null==l.y||u.y>l.y)&&(l.y=u.y))}if(r.push(' ">'),i)if("object"==typeof this.fillStyle){var _=this.fillStyle,f=0,p={x:0,y:0},y=0,d=1;if("gradient"==_.type_){var g=_.x1_/this.arcScaleX_,m=_.y1_/this.arcScaleY_,v=this.getCoords_(_.x0_/this.arcScaleX_,_.y0_/this.arcScaleY_),S=this.getCoords_(g,m);(f=180*Math.atan2(S.x-v.x,S.y-v.y)/Math.PI)<0&&(f+=360),f<1e-6&&(f=0)}else{v=this.getCoords_(_.x0_,_.y0_);var w=l.x-h.x,C=l.y-h.y;p={x:(v.x-h.x)/w,y:(v.y-h.y)/C},w/=this.arcScaleX_*a,C/=this.arcScaleY_*a;var b=t.max(w,C);y=2*_.r0_/b,d=2*_.r1_/b-y}var T=_.colors_;T.sort((function(t,e){return t.offset-e.offset}));var k=T.length,P=T[0].color,E=T[k-1].color,M=T[0].alpha*this.globalAlpha,X=T[k-1].alpha*this.globalAlpha,Y=[];for(c=0;c<k;c++){var L=T[c];Y.push(L.offset*d+y+" "+L.color)}r.push('<g_vml_:fill type="',_.type_,'"',' method="none" focus="100%"',' color="',P,'"',' color2="',E,'"',' colors="',Y.join(","),'"',' opacity="',X,'"',' g_o_:opacity2="',M,'"',' angle="',f,'"',' focusposition="',p.x,",",p.y,'" />')}else r.push('<g_vml_:fill color="',n,'" opacity="',o,'" />');else{var A=this.lineScale_*this.lineWidth;A<1&&(o*=A),r.push("<g_vml_:stroke",' opacity="',o,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',function(t){switch(t){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}(this.lineCap),'"',' weight="',A,'px"',' color="',n,'" />')}r.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",r.join(""))},m.fill=function(){this.stroke(!0)},m.closePath=function(){this.currentPath_.push({type:"close"})},m.getCoords_=function(t,e){var i=this.m_;return{x:a*(t*i[0][0]+e*i[1][0]+i[2][0])-5,y:a*(t*i[0][1]+e*i[1][1]+i[2][1])-5}},m.save=function(){var t={};d(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=y([[1,0,0],[0,1,0],[0,0,1]],this.m_)},m.restore=function(){d(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},m.translate=function(t,e){S(this,y([[1,0,0],[0,1,0],[t,e,1]],this.m_),!1)},m.rotate=function(t){var e=r(t),s=i(t);S(this,y([[e,s,0],[-s,e,0],[0,0,1]],this.m_),!1)},m.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e,S(this,y([[t,0,0],[0,e,0],[0,0,1]],this.m_),!0)},m.transform=function(t,e,i,r,s,n){S(this,y([[t,e,0],[i,r,0],[s,n,1]],this.m_),!0)},m.setTransform=function(t,e,i,r,s,n){S(this,[[t,e,0],[i,r,0],[s,n,1]],!0)},m.clip=function(){},m.arcTo=function(){},m.createPattern=function(){return new C},w.prototype.addColorStop=function(t,e){e=x(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})},G_vmlCanvasManager=l,CanvasRenderingContext2D=g,CanvasGradient=w,CanvasPattern=C}();