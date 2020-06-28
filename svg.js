!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).SVG=n()}(this,(function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var r=function(){},o={};["number","object","transform","class","style","function","string","undefined","boolean","path","svg","id"].forEach((function(t){return o[t]=t}));var i=("undefined"==typeof window?"undefined":t(window))!==o.undefined&&t(window.document)!==o.undefined,c=("undefined"==typeof process?"undefined":t(process))!==o.undefined&&null!=process.versions&&null!=process.versions.node,a=(("undefined"==typeof self?"undefined":t(self))===o.object&&self.constructor&&self.constructor.name,function(){var t={};if(c){var n=require("xmldom"),e=n.DOMParser,r=n.XMLSerializer;t.DOMParser=e,t.XMLSerializer=r,t.document=(new e).parseFromString("<!DOCTYPE html><title>.</title>","text/html")}else i&&(t=window);return t}()),u="http://www.w3.org/2000/svg",f={s:["svg"],d:["defs"],h:["desc","filter","metadata","style","script","title","view"],c:["cdata"],g:["g"],v:["circle","ellipse","line","path","polygon","polyline","rect"],t:["text"],i:["marker","symbol","clipPath","mask"],p:["linearGradient","radialGradient","pattern"],cT:["textPath","tspan"],cG:["stop"],cF:["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]},s=function(t,n){return[Math.cos(t)*n,Math.sin(t)*n]},l=function(t,n,e,r,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(null==o)return"";var c=s(r,e),a=s(o,e),u=[a[0]-c[0],a[1]-c[1]],f=c[0]*a[1]-c[1]*a[0],l=c[0]*a[0]+c[1]*a[1],d=Math.atan2(f,l)>0?0:1,p=i?"M ".concat(t,",").concat(n," l ").concat(c[0],",").concat(c[1]," "):"M ".concat(t+c[0],",").concat(n+c[1]," ");return p+=["a ",e,e,0,d,1,u[0],u[1]].join(" "),i&&(p+=" Z"),p},d=function(t,n,e,r,o){return[l(t,n,e,r,o,!1)]},p={arc:{nodeName:"path",attributes:["d"],args:d,methods:{setArc:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.setAttribute("d",d.apply(void 0,e))}}}},h=function(t,n,e,r,o){return[l(t,n,e,r,o,!0)]},v={wedge:{nodeName:"path",args:h,attributes:["d"],methods:{setArc:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.setAttribute("d",h.apply(void 0,e))}}}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return Array.from(Array(129)).map((function(t,n){return(n-128)/128*2+1})).map((function(o){return[t+(o+1)*e*.5,n+Math.pow(o,2)*r]}))},m={parabola:{nodeName:"polyline",attributes:["points"],args:function(t,n,e,r){return[g(t,n,e,r).map((function(t){return"".concat(t[0],",").concat(t[1])})).join(" ")]}}},y=function(t,n,e,r){var o=[t,n];return Array.from(Array(r)).map((function(t,n){return 2*Math.PI*n/r})).map((function(t){return[Math.cos(t),Math.sin(t)]})).map((function(t){return o.map((function(n,r){return n+e*t[r]}))}))},b={regularPolygon:{nodeName:"polygon",attributes:["points"],args:function(t,n,e,r){return[y(t,n,e,r).map((function(t){return"".concat(t[0],",").concat(t[1])})).join(" ")]}}},A={roundRect:{nodeName:"path",attributes:["d"],args:function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;o>e/2&&(o=e/2),o>r/2&&(o=r/2);var i=e-2*o,c=r-2*o,a="A".concat(o," ").concat(o," 0 0 1");return["M".concat(t+(e-i)/2,",").concat(n),"h".concat(i),a,"".concat(t+e,",").concat(n+(r-c)/2),"v".concat(c),a,"".concat(t+e-o,",").concat(n+r),"h".concat(-i),a,"".concat(t,",").concat(n+r-o),"v".concat(-c),a,"".concat(t+o,",").concat(n)].join(" ")}}},x=function(n){return null!=n&&t(n[Symbol.iterator])===o.function},E=function t(){switch(arguments.length){case void 0:case 0:return Array.from(arguments);case 1:return x(arguments[0])&&"string"!=typeof arguments[0]?t.apply(void 0,n(arguments[0])):[arguments[0]];default:return Array.from(arguments).map((function(e){return x(e)?n(t(e)):e}))}},w=function(){var t=E(arguments);return t.length>1?t.reduce((function(t,n){return t.concat(n)}),[]):t},C=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return e.filter((function(n){return t(n)===o.number})).concat(e.filter((function(n){return t(n)===o.object&&null!==n})).map((function(n){return t(n.x)===o.number?[n.x,n.y]:t(n[0])===o.number?[n[0],n[1]]:void 0})).filter((function(t){return void 0!==t})).reduce((function(t,n){return t.concat(n)}),[]))},j=function(t,n){return[t[0]+n[0],t[1]+n[1]]},O=function(t,n){return[t[0]-n[0],t[1]-n[1]]},k=function(t,n){return[t[0]*n,t[1]*n]},M=function(){var t=C.apply(void 0,n(w.apply(void 0,arguments))),e=t.slice(0,4);if(!e.length)return[""];var r=t[4]||0,o=t[5]||.5,i=[e[0],e[1]],c=[e[2],e[3]],a=O(c,i),u=j(i,k(a,.5)),f=[a[1],-a[0]],s=j(u,k(f,r)),l=j(i,k(O(s,i),o)),d=j(c,k(O(s,c),o));return["M".concat(i[0],",").concat(i[1],"C").concat(l[0],",").concat(l[1]," ").concat(d[0],",").concat(d[1]," ").concat(c[0],",").concat(c[1])]},P={bend:function(t,e){return t.setAttribute("d",M.apply(void 0,n(function(t){var n=t.getAttribute("d");return null==n||""===n?[]:[n.slice(n.indexOf("M")+1,n.indexOf("C")).split(","),n.split(" ").pop().split(",")].map((function(t){return t.map((function(t){return parseFloat(t)}))}))}(t)).concat([e]))),t}},S={curve:{nodeName:"path",attributes:["d"],args:M,methods:P}},N={};Object.assign(N,p,v,m,b,A,S);var T=Object.keys(N),L=[f.h,f.p,f.i],z=[f.g,f.v,f.t,T],F={svg:[f.s,f.d].concat(L).concat(z),g:z,text:[f.cT],linearGradient:[f.cG],radialGradient:[f.cG],defs:L,filter:[f.cF],marker:z,symbol:z,clipPath:z,mask:z},D={};Object.keys(F).forEach((function(t){D[t]=F[t].reduce((function(t,n){return t.concat(n)}),[])})),r(D);var B=function(t){return t.replace(/([-_][a-z])/gi,(function(t){return t.toUpperCase().replace("-","").replace("_","")}))},G=function(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase()},U=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},R={svg:["viewBox"],line:["x1","y1","x2","y2"],rect:["width","height","x","y"],circle:["r","cx","cy"],ellipse:["rx","ry","cx","cy"],polygon:["points"],polyline:["points"],path:["d"],text:["x","y"],mask:["id"],symbol:["id"],clipPath:["id","clip-rule"],marker:["id","markerHeight","markerUnits","markerWidth","orient","refX","refY"],linearGradient:["x1","x2","y1","y2"],radialGradient:["cx","cy","r","fr","fx","fy"],stop:["offset","stop-color","stop-opacity"],pattern:["patternContentUnits","patternTransform","patternUnits"]},q=function(t,n){return t.setAttribute(R.circle[0],n)},X=function(t,e,r){return[,].concat(n(C.apply(void 0,n(w(e,r))).slice(0,2))).forEach((function(n,e){return t.setAttribute(R.circle[e],n)}))},I=function(t,n,e,r){return[Math.sqrt(Math.pow(e-t,2)+Math.pow(r-n,2)),t,n]},V={circle:{args:function(t,e,r,o){var i=C.apply(void 0,n(w(t,e,r,o)));return i.length>3?I.apply(void 0,n(i)):i},methods:{radius:q,setRadius:q,origin:X,setOrigin:X,center:X,setCenter:X,position:X,setPosition:X}}},Y=function(t,n,e){return[n,e].forEach((function(n,e){return t.setAttribute(R.ellipse[e],n)}))},Z=function(t,e,r){return[,,].concat(n(C.apply(void 0,n(w(e,r))).slice(0,2))).forEach((function(n,e){return t.setAttribute(R.ellipse[e],n)}))},$={ellipse:{args:function(t,e,r,o){return C.apply(void 0,n(w(t,e,r,o))).slice(0,4)},methods:{radius:Y,setRadius:Y,origin:Z,setOrigin:Z,center:Z,setCenter:Z,position:Z,setPosition:Z}}},H=function(t,e,r,o){return C.apply(void 0,n(w(t,e,r,o))).slice(0,4)},Q={line:{args:H,methods:{setPoints:function(t,n,e,r,o){return H(n,e,r,o).forEach((function(n,e){return t.setAttribute(R.line[e],n)}))}}}},W=/[MmLlSsQqLlHhVvCcSsQqTtAaZz]/g,_=/-?[0-9]*\.?\d+/g,J={m:"move",l:"line",v:"vertical",h:"horizontal",a:"ellipse",c:"curve",s:"smoothCurve",q:"quadCurve",t:"smoothQuadCurve",z:"close"};Object.keys(J).forEach((function(t){var n=J[t];J[t.toUpperCase()]=n.charAt(0).toUpperCase()+n.slice(1)}));var K=function(t){var n=t.getAttribute("d");return null==n?"":n},tt=function(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return t.setAttribute("d","".concat(K(t)).concat(n).concat(w.apply(void 0,r).join(" ")))},nt=function(t){return t.removeAttribute("d")},et={string:function(t,n){return t.setAttribute("d",n)},object:function(t,n){return n.forEach((function(n){return tt(t,n.command,n.values)}))}},rt={command:tt,clear:nt,get:function(t){return function(t){for(var n,e=[];null!==(n=W.exec(t));)e.push(n);return e.map((function(n){return{command:t[n.index],index:n.index}})).reduceRight((function(n,e){var r=t.substring(e.index,n.length?n[n.length-1].index:t.length);return n.concat([{command:e.command,index:e.index,chunk:r.length>0?r.substr(1,r.length-1):r}])}),[]).reverse().map((function(t){var n=t.chunk.match(_);return t.en=J[t.command],t.values=n?n.map(parseFloat):[],delete t.chunk,t}))}(K(t))},set:function(n){if(1==(arguments.length<=1?0:arguments.length-1)){var e=t(arguments.length<=1?void 0:arguments[1]);et[e]&&(nt(n),et[e](n,arguments.length<=1?void 0:arguments[1]))}},add:function(n){if(1==(arguments.length<=1?0:arguments.length-1)){var e=t(arguments.length<=1?void 0:arguments[1]);et[e]&&et[e](n,arguments.length<=1?void 0:arguments[1])}}};Object.keys(J).forEach((function(t){rt[J[t]]=function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return tt.apply(void 0,[n,t].concat(r))}}));var ot={path:{methods:rt}},it=function(t,n,e){return[n,e].forEach((function(n,e){return t.setAttribute(R.rect[e],n)}))},ct=function(t,e,r){return[,,].concat(n(C.apply(void 0,n(w(e,r))).slice(0,2))).forEach((function(n,e){return t.setAttribute(R.rect[e],n)}))},at={rect:{args:function(t,e,r,o){var i=C.apply(void 0,n(w(t,e,r,o))).slice(0,4);return[0,1].filter((function(t){return i[t]<0})).forEach((function(t){i[2+t]+=i[t],i[t]=-i[t]})),i},methods:{origin:ct,setOrigin:ct,center:ct,setCenter:ct,size:it,setSize:it}}},ut=function(t){return(new a.DOMParser).parseFromString("<root></root>","text/xml").createCDATASection("".concat(t))},ft={style:{methods:{setTextContent:function(t,n){t.textContent="",t.appendChild(ut(n))}}}},st={text:{args:function(t,e,r){return C.apply(void 0,n(w(t,e,r))).slice(0,2)},init:function(n,e,r,i,c){var u=[e,r,i,c].filter((function(n){return t(n)===o.string})).shift();u&&(n.firstChild?n.firstChild.nodeValue=u:n.appendChild(a.document.createTextNode(u)))}}},lt=function(t,n,e,r,o){null==o&&(o=0);var i=e/1-e;return[t-i-o,n-i-o,e+2*i+2*o,r+2*i+2*o].join(" ")};function dt(){var t=C.apply(void 0,n(w(arguments)));return 2===t.length&&t.unshift(0,0),4===t.length?lt.apply(void 0,n(t)):void 0}var pt={removeChildren:function(t){for(;t.lastChild;)t.removeChild(t.lastChild)},appendTo:function(t,n){null!=n&&n.appendChild(t)},setAttributes:function(t,n){return Object.keys(n).forEach((function(e){return t.setAttribute(G(e),n[e])}))}};var ht=function(t,n){n=Object.assign({output:o.string,windowStyle:!1,filename:"image.svg"},n);var e,r,u,f,s=function(t,n){for(var e=t.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").split("~::~"),r=e.length,o=!1,i=0,c="",a=null!=n&&"string"==typeof n?n:"\t",u=["\n"],f=0;f<100;f+=1)u.push(u[f]+a);for(var s=0;s<r;s+=1)e[s].search(/<!/)>-1?(c+=u[i]+e[s],o=!0,(e[s].search(/-->/)>-1||e[s].search(/\]>/)>-1||e[s].search(/!DOCTYPE/)>-1)&&(o=!1)):e[s].search(/-->/)>-1||e[s].search(/\]>/)>-1?(c+=e[s],o=!1):/^<\w/.exec(e[s-1])&&/^<\/\w/.exec(e[s])&&/^<[\w:\-\.\,]+/.exec(e[s-1])==/^<\/[\w:\-\.\,]+/.exec(e[s])[0].replace("/","")?(c+=e[s],o||(i-=1)):e[s].search(/<\w/)>-1&&-1===e[s].search(/<\//)&&-1===e[s].search(/\/>/)?c=c+=o?e[s]:u[i++]+e[s]:e[s].search(/<\w/)>-1&&e[s].search(/<\//)>-1?c=c+=o?e[s]:u[i]+e[s]:e[s].search(/<\//)>-1?c=c+=o?e[s]:u[--i]+e[s]:e[s].search(/\/>/)>-1?c=c+=o?e[s]:u[i]+e[s]:e[s].search(/<\?/)>-1||e[s].search(/xmlns\:/)>-1||e[s].search(/xmlns\=/)>-1?c+=u[i]+e[s]:c+=e[s];return"\n"===c[0]?c.slice(1):c}((new a.XMLSerializer).serializeToString(t));return i&&!c&&(e=n.filename,r=s,u=new a.Blob([r],{type:"text/plain"}),(f=a.document.createElement("a")).setAttribute("href",a.URL.createObjectURL(u)),f.setAttribute("download",e),a.document.body.appendChild(f),f.click(),a.document.body.removeChild(f)),"svg"===n.output?t:s},vt=function(t){return(new a.DOMParser).parseFromString(t,"text/xml")},gt=function(t){var n=t.getElementsByTagName("parsererror");if(n.length>0)throw new Error(n[0]);return t.documentElement},mt=function(n){return t(n)===o.string&&/^[\w,\s-]+\.[A-Za-z]{3}$/.test(n)&&n.length<1e4},yt=function(n){return mt&&i?function(n){return new Promise((function(e,r){if(t(n)===o.string||n instanceof String)fetch(n).then((function(t){return t.text()})).then((function(t){return gt(vt(t))})).then((function(t){return"svg"===t.nodeName?t:t.getElementsByTagName("svg")[0]})).then((function(t){return null==t?r("valid XML found, but no SVG element"):e(t)})).catch((function(t){return r(t)}));else if(n instanceof a.Document)return asyncDone(n)}))}(n):function(n){if(t(n)===o.string||n instanceof String)try{return gt(vt(n))}catch(t){return t}if(null!=n.childNodes)return n}(n)},bt="viewBox",At=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=1===e.length&&"string"==typeof e[0]?e[0]:dt.apply(void 0,e);return o&&t.setAttribute(bt,o),t},xt=function(n){var e=function(t){var n=t.getAttribute(bt);return null==n?void 0:n.split(" ").map((function(t){return parseFloat(t)}))}(n);if(void 0!==e)return e;if(t(n.getBoundingClientRect)===o.function){var r=n.getBoundingClientRect();return[r.x,r.y,r.width,r.height]}return[]},Et="svg-background-rectangle",wt=function(t,n){var e=function(t){var n=t.getElementsByTagName(o.style);return 0===n.length?void 0:n[0]}(t);return null==e&&(e=this.Constructor(o.style),t.insertBefore(e,t.firstChild)),e.textContent="",e.appendChild(ut(n)),e},Ct=function(t){Array.from(t.attributes).filter((function(t){return"xmlns"!==t})).forEach((function(n){return t.removeAttribute(n.name)})),pt.removeChildren(t)},jt=function(t,n){Ct(t),Array.from(n.childNodes).forEach((function(e){n.removeChild(e),t.appendChild(e)})),Array.from(n.attributes).forEach((function(n){return t.setAttribute(n.name,n.value)}))},Ot={clear:Ct,size:At,setViewBox:At,background:function(t,n){var e=Array.from(t.childNodes).filter((function(t){return t.getAttribute(o.class)===Et})).shift();if(null==e){var r=xt(t);(e=this.Constructor("rect",r[2],r[3],r[0],r[1])).setAttribute(o.class,Et),t.insertBefore(e,t.firstChild)}return e.setAttribute("fill",n),e},getWidth:function(t){return xt(t)[2]},getHeight:function(t){return xt(t)[3]},stylesheet:function(t){return wt.call(this,t)},load:function(t,n){var e=yt(n);if(null!=e)return"function"==typeof e.then?e.then((function(n){return jt(t,n)})):jt(t,e)},save:ht},kt=(new a.DOMParser).parseFromString("<div />","text/xml").documentElement.constructor,Mt={svg:{args:function(){return[dt(C.apply(void 0,arguments))].filter((function(t){return null!=t}))},methods:Ot,init:function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];var c=r.filter((function(t){return null!=t})).filter((function(t){return t instanceof kt})).shift();null!=c&&t(c.appendChild)===o.function&&c.appendChild(n)}}},Pt=function(){return Math.random().toString(36).replace(/[^a-z]+/g,"").concat("aaaaa").substr(0,5)},St=function(){return Array.from(arguments).filter((function(n){return t(n)===o.string||n instanceof String})).shift()||Pt()},Nt=function(){return[St.apply(void 0,arguments)]},Tt={mask:{args:Nt},clipPath:{args:Nt},symbol:{args:Nt},marker:{args:Nt,methods:{size:At,setViewBox:At}}},Lt=function(t){var n=t.getAttribute("points");return null==n?"":n},zt=function(){var t=arguments;return Array.from(Array(Math.floor(arguments.length/2))).map((function(n,e){return"".concat(t[2*e+0],",").concat(t[2*e+1])})).join(" ")},Ft=function(){return[zt.apply(void 0,n(C.apply(void 0,n(w.apply(void 0,arguments)))))]},Dt=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.setAttribute("points",Ft.apply(void 0,e)[0])},Bt=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.setAttribute("points",[Lt(t),Ft.apply(void 0,e)[0]].filter((function(t){return""!==t})).join(" "))},Gt=function(){return 1===arguments.length&&t(arguments.length<=0?void 0:arguments[0])===o.string?[arguments.length<=0?void 0:arguments[0]]:Ft.apply(void 0,arguments)},Ut={polyline:{args:Gt,methods:{setPoints:Dt,addPoint:Bt}},polygon:{args:Gt,methods:{setPoints:Dt,addPoint:Bt}}},Rt=Object.assign({},V,$,Q,ot,at,ft,st,Mt,Tt,Ut),qt={presentation:["color","color-interpolation","cursor","direction","display","fill","fill-opacity","fill-rule","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","opacity","overflow","paint-order","pointer-events","preserveAspectRatio","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tabindex","transform-origin","user-select","vector-effect","visibility"],animation:["accumulate","additive","attributeName","begin","by","calcMode","dur","end","from","keyPoints","keySplines","keyTimes","max","min","repeatCount","repeatDur","restart","to","values"],effects:["azimuth","baseFrequency","bias","color-interpolation-filters","diffuseConstant","divisor","edgeMode","elevation","exponent","filter","filterRes","filterUnits","flood-color","flood-opacity","in","in2","intercept","k1","k2","k3","k4","kernelMatrix","lighting-color","limitingConeAngle","mode","numOctaves","operator","order","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","primitiveUnits","radius","result","seed","specularConstant","specularExponent","stdDeviation","stitchTiles","surfaceScale","targetX","targetY","type","xChannelSelector","yChannelSelector"],text:["dx","dy","alignment-baseline","baseline-shift","dominant-baseline","lengthAdjust","method","overline-position","overline-thickness","rotate","spacing","startOffset","strikethrough-position","strikethrough-thickness","text-anchor","text-decoration","text-rendering","textLength","underline-position","underline-thickness","word-spacing","writing-mode"],gradient:["gradientTransform","gradientUnits","spreadMethod"]};Object.values(f).reduce((function(t,n){return t.concat(n)}),[]).filter((function(t){return void 0===R[t]})).forEach((function(t){R[t]=[]})),[[["svg","defs","g"].concat(f.v,f.t),qt.presentation],[["filter"],qt.effects],[f.cT.concat("text"),qt.text],[f.cF,qt.effects],[f.cG,qt.gradient]].forEach((function(t){return t[0].forEach((function(n){R[n]=R[n].concat(t[1])}))})),r(R);var Xt=function(t){if(null==t)return[];var n=t.getAttribute(o.class);return null==n?[]:n.split(" ").filter((function(t){return""!==t}))},It={addClass:function(t,n){var e=Xt(t).filter((function(t){return t!==n}));e.push(n),t.setAttributeNS(null,o.class,e.join(" "))},removeClass:function(t,n){var e=Xt(t).filter((function(t){return t!==n}));t.setAttributeNS(null,o.class,e.join(" "))},setClass:function(t,n){t.setAttributeNS(null,o.class,n)},setId:function(t,n){t.setAttributeNS(null,o.id,n)}},Vt=function(t){var n=t.getAttribute(o.transform);return null==n||""===n?void 0:n},Yt={clearTransform:function(t){return t.removeAttribute(o.transform),t}};["translate","rotate","scale","matrix"].forEach((function(t){Yt[t]=function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return n.setAttribute(o.transform,[Vt(n),"".concat(t,"(").concat(r.join(" "),")")].filter((function(t){return void 0!==t})).join(" "))}}));var Zt,$t={};["clip-path","mask","symbol","marker-end","marker-mid","marker-start"].forEach((function(n){$t[B(n)]=function(e,r){return e.setAttribute(n,function(n){if(null==n)return"";if(t(n)===o.string)return"url"===n.slice(0,3)?n:"url(#".concat(n,")");if(null!=n.getAttribute){var e=n.getAttribute(o.id);return"url(#".concat(e,")")}return""}(r))}}));var Ht={};(Zt=f.v).push.apply(Zt,n(Object.keys(N))),Object.keys(N).forEach((function(t){N[t].attributes=void 0===N[t].attributes?n(qt.presentation):N[t].attributes.concat(qt.presentation)})),Object.assign(Ht,Rt,N),Object.keys(f).forEach((function(t){return f[t].filter((function(t){return void 0===Ht[t]})).forEach((function(t){Ht[t]={}}))}));var Qt=function(){return Array.from(arguments)};Object.keys(Ht).forEach((function(t){Ht[t].nodeName||(Ht[t].nodeName=t),Ht[t].init||(Ht[t].init=Qt),Ht[t].args||(Ht[t].args=Qt),Ht[t].methods||(Ht[t].methods={}),Ht[t].attributes||(Ht[t].attributes=R[t]||[])}));var Wt=function(t,n){t.forEach((function(t){return Object.keys(n).forEach((function(e){Ht[t].methods[e]=function(){return n[e].apply(n,arguments),arguments[0]}}))}))};Wt(w(f.t,f.v,f.g,f.s,f.p,f.i,f.h,f.d),It),Wt(w(f.t,f.v,f.g,f.s,f.p,f.i,f.h,f.d),pt),Wt(w(f.v,f.g,f.s),Yt),Wt(w(f.t,f.v,f.g),$t),r(Ht);var _t={svg:{version:"1.1",xmlns:u},style:{type:"text/css"}},Jt=function(t,n){_t[n]&&Object.keys(_t[n]).forEach((function(e){return t.setAttribute(e,_t[n][e])}))},Kt={},tn=function t(n){for(var e,r,o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];var f=a.document.createElementNS(u,Ht[n].nodeName);return Jt(f,n),(e=Ht[n]).init.apply(e,[f].concat(i)),(r=Ht[n]).args.apply(r,i).forEach((function(t,e){null!=Ht[n].attributes[e]&&f.setAttribute(Ht[n].attributes[e],t)})),Ht[n].attributes.forEach((function(t){Object.defineProperty(f,B(t),{value:function(){return f.setAttribute.apply(f,[t].concat(Array.prototype.slice.call(arguments))),f}})})),Object.keys(Ht[n].methods).forEach((function(t){return Object.defineProperty(f,t,{value:function(){var e;return(e=Ht[n].methods[t]).call.apply(e,[Kt,f].concat(Array.prototype.slice.call(arguments)))||f}})})),D[n]&&D[n].forEach((function(n){Object.defineProperty(f,n,{value:function(){var e=t.apply(void 0,[n].concat(Array.prototype.slice.call(arguments)));return f.appendChild(e),e}})})),f};Kt.Constructor=tn;var nn={};Object.keys(f).forEach((function(t){return f[t].forEach((function(t){nn[t]=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return tn.apply(void 0,[t].concat(e))}}))})),r(nn);var en={move:["mousemove","touchmove"],press:["mousedown","touchstart"],release:["mouseup","touchend"]},rn=Object.values(en).reduce((function(t,n){return t.concat(n)}),[]),on=function(t,n,e){return Object.defineProperty(t,n,{get:function(){return e},enumerable:!0,configurable:!0})},cn=function(t){var n=[],e=[];Object.keys(en).forEach((function(t){en[t].forEach((function(t){e[t]=[]}))}));var r={press:function(){},release:function(){},move:function(t,e){t.buttons>0&&void 0===n[0]?n=e:0===t.buttons&&void 0!==n[0]&&(n=[]),["startX","startY"].filter((function(n){return!t.hasOwnProperty(n)})).forEach((function(e,r){return on(t,e,n[r])}))}};Object.keys(en).forEach((function(n){var o="on"+U(n);Object.defineProperty(t,o,{set:function(o){return null==o?function(n){en[n].forEach((function(n){e[n].forEach((function(e){return t.removeEventListener(n,e)}))}))}(n):en[n].forEach((function(i){var c=function(e){var i=null!=e.touches?e.touches[0]:e;if(void 0!==i){var c=function(t,n,e){var r=t.createSVGPoint();r.x=n,r.y=e;var o=r.matrixTransform(t.getScreenCTM().inverse());return[o.x,o.y]}(t,i.clientX,i.clientY).map((function(t){return isNaN(t)?void 0:t}));["x","y"].filter((function(t){return!e.hasOwnProperty(t)})).forEach((function(t,n){return on(e,t,c[n])})),r[n](e,c)}o(e)};e[i].push(c),t.addEventListener(i,c)}))},enumerable:!0})})),Object.defineProperty(t,"off",{value:function(){return function(t,n){return rn.forEach((function(e){n[e].forEach((function(n){return t.removeEventListener(e,n)})),n[e]=[]}))}(t,e)}})},an=function(t){var n,e,r={},o=0,i=function(){a.cancelAnimationFrame(e),Object.keys(r).forEach((function(t){return delete r[t]})),n=void 0,o=0};Object.defineProperty(t,"play",{set:function(t){if(i(),null!=t){var c=Pt();r[c]=function(i){n||(n=i,o=0),t({time:.001*(i-n),frame:o}),o+=1,r[c]&&(e=a.requestAnimationFrame(r[c]))},e=a.requestAnimationFrame(r[c])}},enumerable:!0}),Object.defineProperty(t,"stop",{value:i,enumerable:!0})},un=function(t,n){return[0,1].map((function(e){return t[e]-n[e]})).map((function(t){return Math.pow(t,2)})).reduce((function(t,n){return t+n}),0)},fn=[["cx","cy"],["x","y"]],sn=function(t){var e=[0,0],r={selected:!1,svg:void 0,updatePosition:function(t){return t}},o=function(){r.svg&&(r.svg.parentNode||t.appendChild(r.svg),fn.filter((function(t){return null!=r.svg[t[0]]})).forEach((function(t){return t.forEach((function(t,n){r.svg.setAttribute(t,e[n])}))})))},i=new Proxy(e,{set:function(t,n,e,r){return t[n]=e,o(),!0}}),c=function(){C.apply(void 0,n(w.apply(void 0,arguments))).forEach((function(t,n){e[n]=t})),o(),"function"==typeof e.delegate&&e.delegate.apply(e.pointsContainer,[i,e.pointsContainer])};return e.delegate=void 0,e.setPosition=c,e.onMouseMove=function(t){return r.selected?c(r.updatePosition(t)):void 0},e.onMouseUp=function(){r.selected=!1},e.distance=function(t){return Math.sqrt(un(t,e))},["x","y"].forEach((function(t,n){return Object.defineProperty(e,t,{get:function(){return e[n]},set:function(t){e[n]=t}})})),["svg","updatePosition","selected"].forEach((function(t){Object.defineProperty(e,t,{get:function(){return r[t]},set:function(n){r[t]=n}})})),Object.defineProperty(e,"remove",{value:function(){!function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}(r.svg),e.delegate=void 0}}),i},ln=function(t,n,e){var r,o,i=Array.from(Array(n)).map((function(){return sn(t)})),c=function(t){return"function"==typeof o?o.call(i,i,t):void 0};i.forEach((function(t){t.delegate=c,t.pointsContainer=i}));t.onPress=function(t){i.length>0&&(r=i.map((function(n,e){return{i:e,d:un(n,[t.x,t.y])}})).sort((function(t,n){return t.d-n.d})).shift().i,i[r].selected=!0)},t.onMove=function(t){i.forEach((function(n){return n.onMouseMove(t)}))},t.onRelease=function(){i.forEach((function(t){return t.onMouseUp()})),r=void 0},Object.defineProperty(i,"selectedIndex",{get:function(){return r}}),Object.defineProperty(i,"selected",{get:function(){return i[r]}}),Object.defineProperty(i,"add",{value:function(n){i.push(sn(t))}}),i.removeAll=function(){for(;i.length>0;)i.pop().remove()};var a={onChange:function(t,n){o=t,!0===n&&t.call(i,i,void 0)},position:function(t){return i.forEach((function(n,e){return n.setPosition(t.call(i,e))}))},svg:function(t){return i.forEach((function(n,e){n.svg=t.call(i,e)}))}};return Object.keys(a).forEach((function(t){i[t]=function(){return"function"==typeof arguments[0]&&a[t].apply(a,arguments),i}})),i.parent=function(t){return null!=t&&null!=t.appendChild&&i.forEach((function(n){t.appendChild(n.svg)})),i},i},dn=function(t){t.controls=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return ln.call.apply(ln,[t,t].concat(e))}},pn=function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r.filter((function(n){return t(n)===o.function})).forEach((function(t){return t.call(n,n)}))},hn=function(){var t=arguments,e=tn.apply(void 0,[o.svg].concat(Array.prototype.slice.call(arguments)));return cn(e),an(e),dn(e),"loading"===a.document.readyState?a.document.addEventListener("DOMContentLoaded",(function(){return pn.apply(void 0,[e].concat(n(t)))})):pn.apply(void 0,[e].concat(Array.prototype.slice.call(arguments))),e};return Object.assign(hn,nn),hn.load=yt,hn.save=ht,hn.NS=u,hn.append=function(t){"function"==typeof t.cp&&"function"==typeof t.graph&&"function"==typeof t.origami&&function(t,n){n.svg=t}(this,t)}.bind(hn),hn}));
