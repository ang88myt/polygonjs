(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{992:function(e,t,r){"use strict";r.r(t),r.d(t,"SVGLoader",(function(){return P}));var a,o,n,i,s,c,l,u,y,p,h,f,b,v,d,x,g,k=r(12),m=(r(14),r(44)),w=r(10),A=r(28),M=r(53),T=r(131),V=r(157),F=r(6),C=r(4),P=function(e){A.a.call(this,e)};P.prototype=Object.assign(Object.create(A.a.prototype),{constructor:P,load:function(e,t,r,a){var o=this,n=new m.a(o.manager);n.setPath(o.path),n.load(e,(function(e){t(o.parse(e))}),r,a)},parse:function(e){function t(e,t,a,o,n,i,s,c){o=o*Math.PI/180,t=Math.abs(t),a=Math.abs(a);var l=(s.x-c.x)/2,u=(s.y-c.y)/2,y=Math.cos(o)*l+Math.sin(o)*u,p=-Math.sin(o)*l+Math.cos(o)*u,h=t*t,f=a*a,b=y*y,v=p*p,d=b/h+v/f;if(d>1){var x=Math.sqrt(d);h=(t*=x)*t,f=(a*=x)*a}var g=h*v+f*b,k=(h*f-g)/g,m=Math.sqrt(Math.max(0,k));n===i&&(m=-m);var w=m*t*p/a,A=-m*a*y/t,M=Math.cos(o)*w-Math.sin(o)*A+(s.x+c.x)/2,T=Math.sin(o)*w+Math.cos(o)*A+(s.y+c.y)/2,V=r(1,0,(y-w)/t,(p-A)/a),F=r((y-w)/t,(p-A)/a,(-y-w)/t,(-p-A)/a)%(2*Math.PI);e.currentPath.absellipse(M,T,t,a,V,V+F,0===i,o)}function r(e,t,r,a){var o=e*r+t*a,n=Math.sqrt(e*e+t*t)*Math.sqrt(r*r+a*a),i=Math.acos(Math.max(-1,Math.min(1,o/n)));return e*a-t*r<0&&(i=-i),i}function a(e,t){function r(r,a,o){void 0===o&&(o=function(e){return e}),e.hasAttribute(r)&&(t[a]=o(e.getAttribute(r))),e.style&&""!==e.style[r]&&(t[a]=o(e.style[r]))}function a(e){return Math.max(0,Math.min(1,parseFloat(e)))}function o(e){return Math.max(0,parseFloat(e))}return t=Object.assign({},t),r("fill","fill"),r("fill-opacity","fillOpacity",a),r("stroke","stroke"),r("stroke-opacity","strokeOpacity",a),r("stroke-width","strokeWidth",o),r("stroke-linejoin","strokeLineJoin"),r("stroke-linecap","strokeLineCap"),r("stroke-miterlimit","strokeMiterLimit",o),t}function o(e,t){return e-(t-e)}function n(e){for(var t=e.split(/[\s,]+|(?=\s?[+\-])/),r=0;r<t.length;r++){var a=t[r];if(a.indexOf(".")!==a.lastIndexOf("."))for(var o=a.split("."),n=2;n<o.length;n++)t.splice(r+n-1,0,"0."+o[n]);t[r]=parseFloat(a)}return t}function i(e){var t=e.elements;return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function s(e){var t=e.elements;return Math.sqrt(t[3]*t[3]+t[4]*t[4])}console.log("THREE.SVGLoader");var c=[],l=[],u=new M.a,y=new M.a,p=new M.a,h=new M.a,f=new F.Vector2,b=new C.Vector3,v=new M.a;console.time("THREE.SVGLoader: DOMParser");var d=(new DOMParser).parseFromString(e,"image/svg+xml");console.timeEnd("THREE.SVGLoader: DOMParser"),console.time("THREE.SVGLoader: Parse"),function e(r,d){if(1===r.nodeType){var x=function(e){if(!e.hasAttribute("transform"))return null;var t=function(e){for(var t=new M.a,r=u,a=e.getAttribute("transform").split(")"),o=a.length-1;o>=0;o--){var i=a[o].trim();if(""!==i){var s=i.indexOf("("),c=i.length;if(s>0&&s<c){var l=i.substr(0,s),f=n(i.substr(s+1,c-s-1));switch(r.identity(),l){case"translate":if(f.length>=1){var b=f[0],v=b;f.length>=2&&(v=f[1]),r.translate(b,v)}break;case"rotate":if(f.length>=1){var d,x=0,g=0;d=-f[0]*Math.PI/180,f.length>=3&&(x=f[1],g=f[2]),y.identity().translate(-x,-g),p.identity().rotate(d),h.multiplyMatrices(p,y),y.identity().translate(x,g),r.multiplyMatrices(y,h)}break;case"scale":if(f.length>=1){var k=f[0],m=k;f.length>=2&&(m=f[1]),r.scale(k,m)}break;case"skewX":1===f.length&&r.set(1,Math.tan(f[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":1===f.length&&r.set(1,0,0,Math.tan(f[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":6===f.length&&r.set(f[0],f[2],f[4],f[1],f[3],f[5],0,0,1)}}t.premultiply(r)}}return t}(e);l.length>0&&t.premultiply(l[l.length-1]);return v.copy(t),l.push(t),t}(r),g=null;switch(r.nodeName){case"svg":break;case"g":d=a(r,d);break;case"path":d=a(r,d),r.hasAttribute("d")&&(g=function(e){for(var r=new V.a,a=new F.Vector2,i=new F.Vector2,s=new F.Vector2,c=!0,l=!1,u=e.getAttribute("d").match(/[a-df-z][^a-df-z]*/gi),y=0,p=u.length;y<p;y++){var h=u[y],f=h.charAt(0),b=h.substr(1).trim();switch(!0===c&&(l=!0,c=!1),f){case"M":for(var v=n(b),d=0,x=v.length;d<x;d+=2)a.x=v[d+0],a.y=v[d+1],i.x=a.x,i.y=a.y,0===d?r.moveTo(a.x,a.y):r.lineTo(a.x,a.y),0===d&&!0===l&&s.copy(a);break;case"H":for(v=n(b),d=0,x=v.length;d<x;d++)a.x=v[d],i.x=a.x,i.y=a.y,r.lineTo(a.x,a.y),0===d&&!0===l&&s.copy(a);break;case"V":for(v=n(b),d=0,x=v.length;d<x;d++)a.y=v[d],i.x=a.x,i.y=a.y,r.lineTo(a.x,a.y),0===d&&!0===l&&s.copy(a);break;case"L":for(v=n(b),d=0,x=v.length;d<x;d+=2)a.x=v[d+0],a.y=v[d+1],i.x=a.x,i.y=a.y,r.lineTo(a.x,a.y),0===d&&!0===l&&s.copy(a);break;case"C":for(v=n(b),d=0,x=v.length;d<x;d+=6)r.bezierCurveTo(v[d+0],v[d+1],v[d+2],v[d+3],v[d+4],v[d+5]),i.x=v[d+2],i.y=v[d+3],a.x=v[d+4],a.y=v[d+5],0===d&&!0===l&&s.copy(a);break;case"S":for(v=n(b),d=0,x=v.length;d<x;d+=4)r.bezierCurveTo(o(a.x,i.x),o(a.y,i.y),v[d+0],v[d+1],v[d+2],v[d+3]),i.x=v[d+0],i.y=v[d+1],a.x=v[d+2],a.y=v[d+3],0===d&&!0===l&&s.copy(a);break;case"Q":for(v=n(b),d=0,x=v.length;d<x;d+=4)r.quadraticCurveTo(v[d+0],v[d+1],v[d+2],v[d+3]),i.x=v[d+0],i.y=v[d+1],a.x=v[d+2],a.y=v[d+3],0===d&&!0===l&&s.copy(a);break;case"T":for(v=n(b),d=0,x=v.length;d<x;d+=2){var g=o(a.x,i.x),k=o(a.y,i.y);r.quadraticCurveTo(g,k,v[d+0],v[d+1]),i.x=g,i.y=k,a.x=v[d+0],a.y=v[d+1],0===d&&!0===l&&s.copy(a)}break;case"A":for(v=n(b),d=0,x=v.length;d<x;d+=7){var m=a.clone();a.x=v[d+5],a.y=v[d+6],i.x=a.x,i.y=a.y,t(r,v[d],v[d+1],v[d+2],v[d+3],v[d+4],m,a),0===d&&!0===l&&s.copy(a)}break;case"m":for(v=n(b),d=0,x=v.length;d<x;d+=2)a.x+=v[d+0],a.y+=v[d+1],i.x=a.x,i.y=a.y,0===d?r.moveTo(a.x,a.y):r.lineTo(a.x,a.y),0===d&&!0===l&&s.copy(a);break;case"h":for(v=n(b),d=0,x=v.length;d<x;d++)a.x+=v[d],i.x=a.x,i.y=a.y,r.lineTo(a.x,a.y),0===d&&!0===l&&s.copy(a);break;case"v":for(v=n(b),d=0,x=v.length;d<x;d++)a.y+=v[d],i.x=a.x,i.y=a.y,r.lineTo(a.x,a.y),0===d&&!0===l&&s.copy(a);break;case"l":for(v=n(b),d=0,x=v.length;d<x;d+=2)a.x+=v[d+0],a.y+=v[d+1],i.x=a.x,i.y=a.y,r.lineTo(a.x,a.y),0===d&&!0===l&&s.copy(a);break;case"c":for(v=n(b),d=0,x=v.length;d<x;d+=6)r.bezierCurveTo(a.x+v[d+0],a.y+v[d+1],a.x+v[d+2],a.y+v[d+3],a.x+v[d+4],a.y+v[d+5]),i.x=a.x+v[d+2],i.y=a.y+v[d+3],a.x+=v[d+4],a.y+=v[d+5],0===d&&!0===l&&s.copy(a);break;case"s":for(v=n(b),d=0,x=v.length;d<x;d+=4)r.bezierCurveTo(o(a.x,i.x),o(a.y,i.y),a.x+v[d+0],a.y+v[d+1],a.x+v[d+2],a.y+v[d+3]),i.x=a.x+v[d+0],i.y=a.y+v[d+1],a.x+=v[d+2],a.y+=v[d+3],0===d&&!0===l&&s.copy(a);break;case"q":for(v=n(b),d=0,x=v.length;d<x;d+=4)r.quadraticCurveTo(a.x+v[d+0],a.y+v[d+1],a.x+v[d+2],a.y+v[d+3]),i.x=a.x+v[d+0],i.y=a.y+v[d+1],a.x+=v[d+2],a.y+=v[d+3],0===d&&!0===l&&s.copy(a);break;case"t":for(v=n(b),d=0,x=v.length;d<x;d+=2){g=o(a.x,i.x),k=o(a.y,i.y);r.quadraticCurveTo(g,k,a.x+v[d+0],a.y+v[d+1]),i.x=g,i.y=k,a.x=a.x+v[d+0],a.y=a.y+v[d+1],0===d&&!0===l&&s.copy(a)}break;case"a":for(v=n(b),d=0,x=v.length;d<x;d+=7){m=a.clone();a.x+=v[d+5],a.y+=v[d+6],i.x=a.x,i.y=a.y,t(r,v[d],v[d+1],v[d+2],v[d+3],v[d+4],m,a),0===d&&!0===l&&s.copy(a)}break;case"Z":case"z":r.currentPath.autoClose=!0,r.currentPath.curves.length>0&&(a.copy(s),r.currentPath.currentPoint.copy(a),c=!0);break;default:console.warn(h)}l=!1}return r}(r));break;case"rect":d=a(r,d),g=function(e){var t=parseFloat(e.getAttribute("x")||0),r=parseFloat(e.getAttribute("y")||0),a=parseFloat(e.getAttribute("rx")||0),o=parseFloat(e.getAttribute("ry")||0),n=parseFloat(e.getAttribute("width")),i=parseFloat(e.getAttribute("height")),s=new V.a;s.moveTo(t+2*a,r),s.lineTo(t+n-2*a,r),(0!==a||0!==o)&&s.bezierCurveTo(t+n,r,t+n,r,t+n,r+2*o);s.lineTo(t+n,r+i-2*o),(0!==a||0!==o)&&s.bezierCurveTo(t+n,r+i,t+n,r+i,t+n-2*a,r+i);s.lineTo(t+2*a,r+i),(0!==a||0!==o)&&s.bezierCurveTo(t,r+i,t,r+i,t,r+i-2*o);s.lineTo(t,r+2*o),(0!==a||0!==o)&&s.bezierCurveTo(t,r,t,r,t+2*a,r);return s}(r);break;case"polygon":d=a(r,d),g=function(e){function t(e,t,o){var n=parseFloat(t),i=parseFloat(o);0===a?r.moveTo(n,i):r.lineTo(n,i),a++}var r=new V.a,a=0;return e.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,t),r.currentPath.autoClose=!0,r}(r);break;case"polyline":d=a(r,d),g=function(e){function t(e,t,o){var n=parseFloat(t),i=parseFloat(o);0===a?r.moveTo(n,i):r.lineTo(n,i),a++}var r=new V.a,a=0;return e.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,t),r.currentPath.autoClose=!1,r}(r);break;case"circle":d=a(r,d),g=function(e){var t=parseFloat(e.getAttribute("cx")),r=parseFloat(e.getAttribute("cy")),a=parseFloat(e.getAttribute("r")),o=new T.a;o.absarc(t,r,a,0,2*Math.PI);var n=new V.a;return n.subPaths.push(o),n}(r);break;case"ellipse":d=a(r,d),g=function(e){var t=parseFloat(e.getAttribute("cx")),r=parseFloat(e.getAttribute("cy")),a=parseFloat(e.getAttribute("rx")),o=parseFloat(e.getAttribute("ry")),n=new T.a;n.absellipse(t,r,a,o,0,2*Math.PI);var i=new V.a;return i.subPaths.push(n),i}(r);break;case"line":d=a(r,d),g=function(e){var t=parseFloat(e.getAttribute("x1")),r=parseFloat(e.getAttribute("y1")),a=parseFloat(e.getAttribute("x2")),o=parseFloat(e.getAttribute("y2")),n=new V.a;return n.moveTo(t,r),n.lineTo(a,o),n.currentPath.autoClose=!1,n}(r);break;default:console.log(r)}g&&(void 0!==d.fill&&"none"!==d.fill&&g.color.setStyle(d.fill),function(e,t){function r(e){b.set(e.x,e.y,1).applyMatrix3(t),e.set(b.x,b.y)}for(var a=function(e){return 0!==e.elements[1]||0!==e.elements[3]}(t),o=e.subPaths,n=0,c=o.length;n<c;n++)for(var l=o[n].curves,u=0;u<l.length;u++){var y=l[u];y.isLineCurve?(r(y.v1),r(y.v2)):y.isCubicBezierCurve?(r(y.v0),r(y.v1),r(y.v2),r(y.v3)):y.isQuadraticBezierCurve?(r(y.v0),r(y.v1),r(y.v2)):y.isEllipseCurve&&(a&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),f.set(y.aX,y.aY),r(f),y.aX=f.x,y.aY=f.y,y.xRadius*=i(t),y.yRadius*=s(t))}}(g,v),c.push(g),g.userData={node:r,style:d});for(var k=r.childNodes,m=0;m<k.length;m++)e(k[m],d);x&&(l.pop(),l.length>0?v.copy(l[l.length-1]):v.identity())}}(d.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4});var x={paths:c,xml:d.documentElement};return console.timeEnd("THREE.SVGLoader: Parse"),x}}),P.getStrokeStyle=function(e,t,r,a,o){return{strokeColor:t=void 0!==t?t:"#000",strokeWidth:e=void 0!==e?e:1,strokeLineJoin:r=void 0!==r?r:"miter",strokeLineCap:a=void 0!==a?a:"butt",strokeMiterLimit:o=void 0!==o?o:4}},P.pointsToStroke=function(e,t,r,a){var o=[],n=[],i=[];if(0===P.pointsToStrokeWithBuffers(e,t,r,a,o,n,i))return null;var s=new k.BufferGeometry;return s.setAttribute("position",new w.Float32BufferAttribute(o,3)),s.setAttribute("normal",new w.Float32BufferAttribute(n,3)),s.setAttribute("uv",new w.Float32BufferAttribute(i,2)),s},P.pointsToStrokeWithBuffers=(a=new F.Vector2,o=new F.Vector2,n=new F.Vector2,i=new F.Vector2,s=new F.Vector2,c=new F.Vector2,l=new F.Vector2,u=new F.Vector2,y=new F.Vector2,p=new F.Vector2,h=new F.Vector2,f=new F.Vector2,b=new F.Vector2,v=new F.Vector2,d=new F.Vector2,x=new F.Vector2,g=new F.Vector2,function(e,t,r,k,m,w,A,M){r=void 0!==r?r:12,k=void 0!==k?k:.001,M=void 0!==M?M:0;var T=(e=function(e){for(var t=!1,r=1,a=e.length-1;r<a;r++)if(e[r].distanceTo(e[r+1])<k){t=!0;break}if(!t)return e;var o=[];for(o.push(e[0]),r=1,a=e.length-1;r<a;r++)e[r].distanceTo(e[r+1])>=k&&o.push(e[r]);return o.push(e[e.length-1]),o}(e)).length;if(T<2)return 0;var V,F,C,P,S,L=e[0].equals(e[T-1]),z=e[0],E=t.strokeWidth/2,q=1/(T-1),O=0,I=!1,B=0,G=3*M,J=2*M;U(e[0],e[1],a).multiplyScalar(E),u.copy(e[0]).sub(a),y.copy(e[0]).add(a),p.copy(u),h.copy(y);for(var R=1;R<T;R++){V=e[R],F=R===T-1?L?e[1]:void 0:e[R+1];var H=a;U(z,V,H),n.copy(H).multiplyScalar(E),f.copy(V).sub(n),b.copy(V).add(n);var W=O+q;if(C=!1,void 0!==F){U(V,F,o),n.copy(o).multiplyScalar(E),v.copy(V).sub(n),d.copy(V).add(n),P=!0,n.subVectors(F,z),H.dot(n)<0&&(P=!1),1===R&&(I=P),n.subVectors(F,V),n.normalize();var j=Math.abs(H.dot(n));if(0!==j){var D=E/j;n.multiplyScalar(-D),i.subVectors(V,z),s.copy(i).setLength(D).add(n),x.copy(s).negate();var X=s.length(),Y=i.length();i.divideScalar(Y),c.subVectors(F,V);var N=c.length();switch(c.divideScalar(N),i.dot(x)<Y&&c.dot(x)<N&&(C=!0),g.copy(s).add(V),x.add(V),S=!1,C?P?(d.copy(x),b.copy(x)):(v.copy(x),f.copy(x)):ee(),t.strokeLineJoin){case"bevel":te(P,C,W);break;case"round":re(P,C),P?_(V,f,v,W,0):_(V,d,b,W,1);break;case"miter":case"miter-clip":default:var Q=E*t.strokeMiterLimit/X;if(Q<1){if("miter-clip"!==t.strokeLineJoin){te(P,C,W);break}re(P,C),P?(c.subVectors(g,f).multiplyScalar(Q).add(f),l.subVectors(g,v).multiplyScalar(Q).add(v),$(f,W,0),$(c,W,0),$(V,W,.5),$(V,W,.5),$(c,W,0),$(l,W,0),$(V,W,.5),$(l,W,0),$(v,W,0)):(c.subVectors(g,b).multiplyScalar(Q).add(b),l.subVectors(g,d).multiplyScalar(Q).add(d),$(b,W,1),$(c,W,1),$(V,W,.5),$(V,W,.5),$(c,W,1),$(l,W,1),$(V,W,.5),$(l,W,1),$(d,W,1))}else C?(P?($(y,O,1),$(u,O,0),$(g,W,0),$(y,O,1),$(g,W,0),$(x,W,1)):($(y,O,1),$(u,O,0),$(g,W,1),$(u,O,0),$(x,W,0),$(g,W,1)),P?v.copy(g):d.copy(g)):P?($(f,W,0),$(g,W,0),$(V,W,.5),$(V,W,.5),$(g,W,0),$(v,W,0)):($(b,W,1),$(g,W,1),$(V,W,.5),$(V,W,.5),$(g,W,1),$(d,W,1)),S=!0}}else ee()}else ee();L||R!==T-1||ae(e[0],p,h,P,!0,O),O=W,z=V,u.copy(v),y.copy(d)}if(L){if(C&&m){var Z=g,K=x;I!==P&&(Z=x,K=g),P?(S||I)&&(K.toArray(m,0),K.toArray(m,9),S&&Z.toArray(m,3)):!S&&I||(K.toArray(m,3),K.toArray(m,9),S&&Z.toArray(m,0))}}else ae(V,f,b,P,!1,W);return B;function U(e,t,r){return r.subVectors(t,e),r.set(-r.y,r.x).normalize()}function $(e,t,r){m&&(m[G]=e.x,m[G+1]=e.y,m[G+2]=0,w&&(w[G]=0,w[G+1]=0,w[G+2]=1),G+=3,A&&(A[J]=t,A[J+1]=r,J+=2)),B+=3}function _(e,t,s,c,l){a.copy(t).sub(e).normalize(),o.copy(s).sub(e).normalize();var u=Math.PI,y=a.dot(o);Math.abs(y)<1&&(u=Math.abs(Math.acos(y))),u/=r,n.copy(t);for(var p=0,h=r-1;p<h;p++)i.copy(n).rotateAround(e,u),$(n,c,l),$(i,c,l),$(e,c,.5),n.copy(i);$(i,c,l),$(s,c,l),$(e,c,.5)}function ee(){$(y,O,1),$(u,O,0),$(f,W,0),$(y,O,1),$(f,W,1),$(b,W,0)}function te(e,t,r){t?e?($(y,O,1),$(u,O,0),$(f,W,0),$(y,O,1),$(f,W,0),$(x,W,1),$(f,r,0),$(v,r,0),$(x,r,.5)):($(y,O,1),$(u,O,0),$(b,W,1),$(u,O,0),$(x,W,0),$(b,W,1),$(b,r,1),$(d,r,0),$(x,r,.5)):e?($(f,r,0),$(v,r,0),$(V,r,.5)):($(b,r,1),$(d,r,0),$(V,r,.5))}function re(e,t){t&&(e?($(y,O,1),$(u,O,0),$(f,W,0),$(y,O,1),$(f,W,0),$(x,W,1),$(f,O,0),$(V,W,.5),$(x,W,1),$(V,W,.5),$(v,O,0),$(x,W,1)):($(y,O,1),$(u,O,0),$(b,W,1),$(u,O,0),$(x,W,0),$(b,W,1),$(b,O,1),$(x,W,0),$(V,W,.5),$(V,W,.5),$(x,W,0),$(d,O,1)))}function ae(e,r,s,c,l,u){switch(t.strokeLineCap){case"round":l?_(e,s,r,u,.5):_(e,r,s,u,.5);break;case"square":if(l)a.subVectors(r,e),o.set(a.y,-a.x),n.addVectors(a,o).add(e),i.subVectors(o,a).add(e),c?(n.toArray(m,3),i.toArray(m,0),i.toArray(m,9)):(n.toArray(m,3),n.toArray(m,9),i.toArray(m,0));else{a.subVectors(s,e),o.set(a.y,-a.x),n.addVectors(a,o).add(e),i.subVectors(o,a).add(e);var y=m.length;c?(n.toArray(m,y-3),i.toArray(m,y-6),i.toArray(m,y-12)):(n.toArray(m,y-6),i.toArray(m,y-3),i.toArray(m,y-12))}}}})}}]);
//# sourceMappingURL=modules_three-polygonjs-engine~polygonjs-editor-SVGLoader.js.js.map