/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["web3.js"]=t():e["web3.js"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=329)}([function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(107),o=r(a);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},function(e,t,n){!function(n,r){e.exports=t=r()}(0,function(){var e=e||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},a=r.lib={},o=a.Base=function(){return{extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=a.WordArray=o.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,a=e.sigBytes;if(this.clamp(),r%4)for(var o=0;o<a;o++){var s=n[o>>>2]>>>24-o%4*8&255;t[r+o>>>2]|=s<<24-(r+o)%4*8}else for(var o=0;o<a;o+=4)t[r+o>>>2]=n[o>>>2];return this.sigBytes+=a,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,r=[],a=function(t){var t=t,n=987654321,r=4294967295;return function(){n=36969*(65535&n)+(n>>16)&r,t=18e3*(65535&t)+(t>>16)&r;var a=(n<<16)+t&r;return a/=4294967296,(a+=.5)*(e.random()>.5?1:-1)}},o=0;o<t;o+=4){var i=a(4294967296*(n||e.random()));n=987654071*i(),r.push(4294967296*i()|0)}return new s.init(r,t)}}),i=r.enc={},c=i.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],a=0;a<n;a++){var o=t[a>>>2]>>>24-a%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new s.init(n,t/2)}},u=i.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],a=0;a<n;a++){var o=t[a>>>2]>>>24-a%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new s.init(n,t)}},d=i.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},l=a.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,a=n.sigBytes,o=this.blockSize,i=4*o,c=a/i;c=t?e.ceil(c):e.max((0|c)-this._minBufferSize,0);var u=c*o,d=e.min(4*u,a);if(u){for(var l=0;l<u;l+=o)this._doProcessBlock(r,l);var f=r.splice(0,u);n.sigBytes-=d}return new s.init(f,d)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),f=(a.Hasher=l.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}}),r.algo={});return r}(Math);return e})},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){e.lib.Cipher||function(t){var n=e,r=n.lib,a=r.Base,o=r.WordArray,s=r.BufferedBlockAlgorithm,i=n.enc,c=(i.Utf8,i.Base64),u=n.algo,d=u.EvpKDF,l=r.Cipher=s.extend({cfg:a.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?k:x}return function(t){return{encrypt:function(n,r,a){return e(r).encrypt(t,n,r,a)},decrypt:function(n,r,a){return e(r).decrypt(t,n,r,a)}}}}()}),f=(r.StreamCipher=l.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),n.mode={}),p=r.BlockCipherMode=a.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),h=f.CBC=function(){function e(e,n,r){var a=this._iv;if(a){var o=a;this._iv=t}else var o=this._prevBlock;for(var s=0;s<r;s++)e[n+s]^=o[s]}var n=p.extend();return n.Encryptor=n.extend({processBlock:function(t,n){var r=this._cipher,a=r.blockSize;e.call(this,t,n,a),r.encryptBlock(t,n),this._prevBlock=t.slice(n,n+a)}}),n.Decryptor=n.extend({processBlock:function(t,n){var r=this._cipher,a=r.blockSize,o=t.slice(n,n+a);r.decryptBlock(t,n),e.call(this,t,n,a),this._prevBlock=o}}),n}(),m=n.pad={},b=m.Pkcs7={pad:function(e,t){for(var n=4*t,r=n-e.sigBytes%n,a=r<<24|r<<16|r<<8|r,s=[],i=0;i<r;i+=4)s.push(a);var c=o.create(s,r);e.concat(c)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},y=(r.BlockCipher=l.extend({cfg:l.cfg.extend({mode:h,padding:b}),reset:function(){l.reset.call(this);var e=this.cfg,t=e.iv,n=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=n.createEncryptor;else{var r=n.createDecryptor;this._minBufferSize=1}this._mode=r.call(n,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else{var t=this._process(!0);e.unpad(t)}return t},blockSize:4}),r.CipherParams=a.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),g=n.format={},v=g.OpenSSL={stringify:function(e){var t=e.ciphertext,n=e.salt;if(n)var r=o.create([1398893684,1701076831]).concat(n).concat(t);else var r=t;return r.toString(c)},parse:function(e){var t=c.parse(e),n=t.words;if(1398893684==n[0]&&1701076831==n[1]){var r=o.create(n.slice(2,4));n.splice(0,4),t.sigBytes-=16}return y.create({ciphertext:t,salt:r})}},x=r.SerializableCipher=a.extend({cfg:a.extend({format:v}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var a=e.createEncryptor(n,r),o=a.finalize(t),s=a.cfg;return y.create({ciphertext:o,key:n,iv:s.iv,algorithm:e,mode:s.mode,padding:s.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),w=n.kdf={},_=w.OpenSSL={execute:function(e,t,n,r){r||(r=o.random(8));var a=d.create({keySize:t+n}).compute(e,r),s=o.create(a.words.slice(t),4*n);return a.sigBytes=4*t,y.create({key:a,iv:s,salt:r})}},k=r.PasswordBasedCipher=x.extend({cfg:x.cfg.extend({kdf:_}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var a=r.kdf.execute(n,e.keySize,e.ivSize);r.iv=a.iv;var o=x.encrypt.call(this,e,t,a.key,r);return o.mixIn(a),o},decrypt:function(e,t,n,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var a=r.kdf.execute(n,e.keySize,e.ivSize,t.salt);return r.iv=a.iv,x.decrypt.call(this,e,t,a.key,r)}})}()})},function(e,t,n){var r=n(46),a=n(43),o=n(70),s={noether:"0",wei:"1",kwei:"1000",Kwei:"1000",babbage:"1000",femtoether:"1000",mwei:"1000000",Mwei:"1000000",lovelace:"1000000",picoether:"1000000",gwei:"1000000000",Gwei:"1000000000",shannon:"1000000000",nanoether:"1000000000",nano:"1000000000",szabo:"1000000000000",microether:"1000000000000",micro:"1000000000000",finney:"1000000000000000",milliether:"1000000000000000",milli:"1000000000000000",ether:"1000000000000000000",kether:"1000000000000000000000",grand:"1000000000000000000000",mether:"1000000000000000000000000",gether:"1000000000000000000000000000",tether:"1000000000000000000000000000000"},i=function(e,t,n){return new Array(t-e.length+1).join(n?n:"0")+e},c=function(e,t,n){return e+new Array(t-e.length+1).join(n?n:"0")},u=function(e){var t="",n=0,r=e.length;for("0x"===e.substring(0,2)&&(n=2);n<r;n+=2){var a=parseInt(e.substr(n,2),16);if(0===a)break;t+=String.fromCharCode(a)}return o.decode(t)},d=function(e){var t="",n=0,r=e.length;for("0x"===e.substring(0,2)&&(n=2);n<r;n+=2){var a=parseInt(e.substr(n,2),16);t+=String.fromCharCode(a)}return t},l=function(e){e=o.encode(e);for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);if(0===r)break;var a=r.toString(16);t+=a.length<2?"0"+a:a}return"0x"+t},f=function(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n),a=r.toString(16);t+=a.length<2?"0"+a:a}return"0x"+t},p=function(e){if(e.name.indexOf("(")!==-1)return e.name;var t=e.inputs.map(function(e){return e.type}).join();return e.name+"("+t+")"},h=function(e){var t=e.indexOf("(");return t!==-1?e.substr(0,t):e},m=function(e){var t=e.indexOf("(");return t!==-1?e.substr(t+1,e.length-1-(t+1)).replace(" ",""):""},b=function(e){return _(e).toNumber()},y=function(e){var t=_(e),n=t.toString(16);return t.lessThan(0)?"-0x"+n.substr(1):"0x"+n},g=function(e){if(R(e))return y(+e);if(D(e))return y(e);if(F(e))return l(JSON.stringify(e));if(P(e)){if(0===e.indexOf("-0x"))return y(e);if(0===e.indexOf("0x"))return e;if(!isFinite(e))return f(e)}return y(e)},v=function(e){e=e?e.toLowerCase():"ether";var t=s[e];if(void 0===t)throw new Error("This unit doesn't exists, please use the one of the following units"+JSON.stringify(s,null,2));return new r(t,10)},x=function(e,t){var n=_(e).dividedBy(v(t));return D(e)?n:n.toString(10)},w=function(e,t){var n=_(e).times(v(t));return D(e)?n:n.toString(10)},_=function(e){return e=e||0,D(e)?e:!P(e)||0!==e.indexOf("0x")&&0!==e.indexOf("-0x")?new r(e.toString(10),10):new r(e.replace("0x",""),16)},k=function(e){var t=_(e);return t.lessThan(0)?new r("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16).plus(t).plus(1):t},A=function(e){return/^0x[0-9a-f]{40}$/i.test(e)},B=function(e){return!!/^(0x)?[0-9a-f]{40}$/i.test(e)&&(!(!/^(0x)?[0-9a-f]{40}$/.test(e)&&!/^(0x)?[0-9A-F]{40}$/.test(e))||S(e))},S=function(e){e=e.replace("0x","");for(var t=a(e.toLowerCase()),n=0;n<40;n++)if(parseInt(t[n],16)>7&&e[n].toUpperCase()!==e[n]||parseInt(t[n],16)<=7&&e[n].toLowerCase()!==e[n])return!1;return!0},T=function(e){if(void 0===e)return"";e=e.toLowerCase().replace("0x","");for(var t=a(e),n="0x",r=0;r<e.length;r++)parseInt(t[r],16)>7?n+=e[r].toUpperCase():n+=e[r];return n},C=function(e){return A(e)?e:/^[0-9a-f]{40}$/.test(e)?"0x"+e:"0x"+i(g(e).substr(2),40)},D=function(e){return e instanceof r||e&&e.constructor&&"BigNumber"===e.constructor.name},P=function(e){return"string"==typeof e||e&&e.constructor&&"String"===e.constructor.name},O=function(e){return"function"==typeof e},F=function(e){return"object"==typeof e},R=function(e){return"boolean"==typeof e},I=function(e){return e instanceof Array},N=function(e){try{return!!JSON.parse(e)}catch(e){return!1}};e.exports={padLeft:i,padRight:c,toHex:g,toDecimal:b,fromDecimal:y,toUtf8:u,toAscii:d,fromUtf8:l,fromAscii:f,transformToFullName:p,extractDisplayName:h,extractTypeName:m,toWei:w,fromWei:x,toBigNumber:_,toTwosComplement:k,toAddress:C,isBigNumber:D,isStrictAddress:A,isAddress:B,isChecksumAddress:S,toChecksumAddress:T,isFunction:O,isString:P,isObject:F,isBoolean:R,isArray:I,isJson:N}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},,function(e,t,n){var r=n(46),a=n(5),o=n(66),s=n(133),i=function(e){r.config(o.ETH_BIGNUMBER_ROUNDING_MODE);var t=a.padLeft(a.toTwosComplement(e).round().toString(16),64);return new s(t)},c=function(e){var t=a.toHex(e).substr(2),n=Math.floor((t.length+63)/64);return t=a.padRight(t,64*n),new s(t)},u=function(e){var t=a.toHex(e).substr(2),n=t.length/2,r=Math.floor((t.length+63)/64);return t=a.padRight(t,64*r),new s(i(n).value+t)},d=function(e){var t=a.fromUtf8(e).substr(2),n=t.length/2,r=Math.floor((t.length+63)/64);return t=a.padRight(t,64*r),new s(i(n).value+t)},l=function(e){return new s("000000000000000000000000000000000000000000000000000000000000000"+(e?"1":"0"))},f=function(e){return i(new r(e).times(new r(2).pow(128)))},p=function(e){return"1"===new r(e.substr(0,1),16).toString(2).substr(0,1)},h=function(e){var t=e.staticPart()||"0";return p(t)?new r(t,16).minus(new r("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16)).minus(1):new r(t,16)},m=function(e){var t=e.staticPart()||"0";return new r(t,16)},b=function(e){return h(e).dividedBy(new r(2).pow(128))},y=function(e){return m(e).dividedBy(new r(2).pow(128))},g=function(e){return"0000000000000000000000000000000000000000000000000000000000000001"===e.staticPart()},v=function(e){return"0x"+e.staticPart()},x=function(e){var t=2*new r(e.dynamicPart().slice(0,64),16).toNumber();return"0x"+e.dynamicPart().substr(64,t)},w=function(e){var t=2*new r(e.dynamicPart().slice(0,64),16).toNumber();return a.toUtf8(e.dynamicPart().substr(64,t))},_=function(e){var t=e.staticPart();return"0x"+t.slice(t.length-40,t.length)};e.exports={formatInputInt:i,formatInputBytes:c,formatInputDynamicBytes:u,formatInputString:d,formatInputBool:l,formatInputReal:f,formatOutputInt:h,formatOutputUInt:m,formatOutputReal:b,formatOutputUReal:y,formatOutputBool:g,formatOutputBytes:v,formatOutputDynamicBytes:x,formatOutputString:w,formatOutputAddress:_}},function(e,t,n){e.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(6),a=n(3),o=n(32),s=n(18),i="prototype",c=function(e,t,n){var u,d,l,f=e&c.F,p=e&c.G,h=e&c.S,m=e&c.P,b=e&c.B,y=e&c.W,g=p?a:a[t]||(a[t]={}),v=g[i],x=p?r:h?r[t]:(r[t]||{})[i];p&&(n=t);for(u in n)(d=!f&&x&&void 0!==x[u])&&u in g||(l=d?x[u]:n[u],g[u]=p&&"function"!=typeof x[u]?n[u]:b&&d?o(l,r):y&&x[u]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[i]=e[i],t}(l):m&&"function"==typeof l?o(Function.call,l):l,m&&((g.virtual||(g.virtual={}))[u]=l,e&c.R&&v&&!v[u]&&s(v,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){var r=n(19);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){var r=n(11),a=n(81),o=n(61),s=Object.defineProperty;t.f=n(9)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),a)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(82),a=n(47);e.exports=function(e){return r(a(e))}},function(e,t,n){var r=n(8),a=n(133),o=function(e){this._inputFormatter=e.inputFormatter,this._outputFormatter=e.outputFormatter};o.prototype.isType=function(e){throw"this method should be overrwritten for type "+e},o.prototype.staticPartLength=function(e){throw"this method should be overrwritten for type: "+e},o.prototype.isDynamicArray=function(e){var t=this.nestedTypes(e);return!!t&&!t[t.length-1].match(/[0-9]{1,}/g)},o.prototype.isStaticArray=function(e){var t=this.nestedTypes(e);return!!t&&!!t[t.length-1].match(/[0-9]{1,}/g)},o.prototype.staticArrayLength=function(e){var t=this.nestedTypes(e);return t?parseInt(t[t.length-1].match(/[0-9]{1,}/g)||1):1},o.prototype.nestedName=function(e){var t=this.nestedTypes(e);return t?e.substr(0,e.length-t[t.length-1].length):e},o.prototype.isDynamicType=function(){return!1},o.prototype.nestedTypes=function(e){return e.match(/(\[[0-9]*\])/g)},o.prototype.encode=function(e,t){var n=this;return this.isDynamicArray(t)?function(){var a=e.length,o=n.nestedName(t),s=[];return s.push(r.formatInputInt(a).encode()),e.forEach(function(e){s.push(n.encode(e,o))}),s}():this.isStaticArray(t)?function(){for(var r=n.staticArrayLength(t),a=n.nestedName(t),o=[],s=0;s<r;s++)o.push(n.encode(e[s],a));return o}():this._inputFormatter(e,t).encode()},o.prototype.decode=function(e,t,n){var r=this;if(this.isDynamicArray(n))return function(){for(var a=parseInt("0x"+e.substr(2*t,64)),o=parseInt("0x"+e.substr(2*a,64)),s=a+32,i=r.nestedName(n),c=r.staticPartLength(i),u=32*Math.floor((c+31)/32),d=[],l=0;l<o*u;l+=u)d.push(r.decode(e,s+l,i));return d}();if(this.isStaticArray(n))return function(){for(var a=r.staticArrayLength(n),o=t,s=r.nestedName(n),i=r.staticPartLength(s),c=32*Math.floor((i+31)/32),u=[],d=0;d<a*c;d+=c)u.push(r.decode(e,o+d,s));return u}();if(this.isDynamicType(n))return function(){var n=parseInt("0x"+e.substr(2*t,64)),o=parseInt("0x"+e.substr(2*n,64)),s=Math.floor((o+31)/32);return r._outputFormatter(new a(e.substr(2*n,64*(1+s)),0))}();var o=this.staticPartLength(n);return this._outputFormatter(new a(e.substr(2*t,2*o)))},e.exports=o},function(e,t,n){var r=n(5),a=n(66),o=n(68),s=function(e){return r.toBigNumber(e)},i=function(e){return"latest"===e||"pending"===e||"earliest"===e},c=function(e){return void 0===e?a.defaultBlock:u(e)},u=function(e){if(void 0!==e)return i(e)?e:r.toHex(e)},d=function(e){return e.from=e.from||a.defaultAccount,e.from&&(e.from=g(e.from)),e.to&&(e.to=g(e.to)),["gasPrice","gas","value","nonce"].filter(function(t){return void 0!==e[t]}).forEach(function(t){e[t]=r.fromDecimal(e[t])}),e},l=function(e){return e.from=e.from||a.defaultAccount,e.from=g(e.from),e.to&&(e.to=g(e.to)),["gasPrice","gas","value","nonce"].filter(function(t){return void 0!==e[t]}).forEach(function(t){e[t]=r.fromDecimal(e[t])}),e},f=function(e){return null!==e.blockNumber&&(e.blockNumber=r.toDecimal(e.blockNumber)),null!==e.transactionIndex&&(e.transactionIndex=r.toDecimal(e.transactionIndex)),e.nonce=r.toDecimal(e.nonce),e.gas=r.toDecimal(e.gas),e.gasPrice=r.toBigNumber(e.gasPrice),e.value=r.toBigNumber(e.value),e},p=function(e){return null!==e.blockNumber&&(e.blockNumber=r.toDecimal(e.blockNumber)),null!==e.transactionIndex&&(e.transactionIndex=r.toDecimal(e.transactionIndex)),e.cumulativeGasUsed=r.toDecimal(e.cumulativeGasUsed),e.gasUsed=r.toDecimal(e.gasUsed),r.isArray(e.logs)&&(e.logs=e.logs.map(function(e){return m(e)})),e},h=function(e){return e.gasLimit=r.toDecimal(e.gasLimit),e.gasUsed=r.toDecimal(e.gasUsed),e.size=r.toDecimal(e.size),e.timestamp=r.toDecimal(e.timestamp),null!==e.number&&(e.number=r.toDecimal(e.number)),e.difficulty=r.toBigNumber(e.difficulty),e.totalDifficulty=r.toBigNumber(e.totalDifficulty),r.isArray(e.transactions)&&e.transactions.forEach(function(e){if(!r.isString(e))return f(e)}),e},m=function(e){return null!==e.blockNumber&&(e.blockNumber=r.toDecimal(e.blockNumber)),null!==e.transactionIndex&&(e.transactionIndex=r.toDecimal(e.transactionIndex)),null!==e.logIndex&&(e.logIndex=r.toDecimal(e.logIndex)),e},b=function(e){return e.ttl=r.fromDecimal(e.ttl),e.workToProve=r.fromDecimal(e.workToProve),e.priority=r.fromDecimal(e.priority),r.isArray(e.topics)||(e.topics=e.topics?[e.topics]:[]),e.topics=e.topics.map(function(e){return 0===e.indexOf("0x")?e:r.fromUtf8(e)}),e},y=function(e){return e.expiry=r.toDecimal(e.expiry),e.sent=r.toDecimal(e.sent),e.ttl=r.toDecimal(e.ttl),e.workProved=r.toDecimal(e.workProved),e.topics||(e.topics=[]),e.topics=e.topics.map(function(e){return r.toAscii(e)}),e},g=function(e){var t=new o(e);if(t.isValid()&&t.isDirect())return"0x"+t.address();if(r.isStrictAddress(e))return e;if(r.isAddress(e))return"0x"+e;throw new Error("invalid address")},v=function(e){return e.startingBlock=r.toDecimal(e.startingBlock),e.currentBlock=r.toDecimal(e.currentBlock),e.highestBlock=r.toDecimal(e.highestBlock),e.knownStates&&(e.knownStates=r.toDecimal(e.knownStates),e.pulledStates=r.toDecimal(e.pulledStates)),e};e.exports={inputDefaultBlockNumberFormatter:c,inputBlockNumberFormatter:u,inputCallFormatter:d,inputTransactionFormatter:l,inputAddressFormatter:g,inputPostFormatter:b,outputBigNumberFormatter:s,outputTransactionFormatter:f,outputTransactionReceiptFormatter:p,outputBlockFormatter:h,outputLogFormatter:m,outputPostFormatter:y,outputSyncingFormatter:v}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(12),a=n(40);e.exports=n(9)?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(85),a=n(56);e.exports=Object.keys||function(e){return r(e,a)}},,,,,function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){e.exports={default:n(112),__esModule:!0}},,,,,function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(54);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},,function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){return function(){function t(e,t,n){for(var r=[],o=0,s=0;s<t;s++)if(s%4){var i=n[e.charCodeAt(s-1)]<<s%4*2,c=n[e.charCodeAt(s)]>>>6-s%4*2;r[o>>>2]|=(i|c)<<24-o%4*8,o++}return a.create(r,o)}var n=e,r=n.lib,a=r.WordArray,o=n.enc;o.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var a=[],o=0;o<n;o+=3)for(var s=t[o>>>2]>>>24-o%4*8&255,i=t[o+1>>>2]>>>24-(o+1)%4*8&255,c=t[o+2>>>2]>>>24-(o+2)%4*8&255,u=s<<16|i<<8|c,d=0;d<4&&o+.75*d<n;d++)a.push(r.charAt(u>>>6*(3-d)&63));var l=r.charAt(64);if(l)for(;a.length%4;)a.push(l);return a.join("")},parse:function(e){var n=e.length,r=this._map,a=this._reverseMap;if(!a){a=this._reverseMap=[];for(var o=0;o<r.length;o++)a[r.charCodeAt(o)]=o}var s=r.charAt(64);if(s){var i=e.indexOf(s);i!==-1&&(n=i)}return t(e,n,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(91),n(90))}(0,function(e){return function(){var t=e,n=t.lib,r=n.Base,a=n.WordArray,o=t.algo,s=o.MD5,i=o.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:s,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=n.hasher.create(),o=a.create(),s=o.words,i=n.keySize,c=n.iterations;s.length<i;){u&&r.update(u);var u=r.update(e).finalize(t);r.reset();for(var d=1;d<c;d++)u=r.finalize(u),r.reset();o.concat(u)}return o.sigBytes=4*i,o}});t.EvpKDF=function(e,t,n){return i.create(n).compute(e,t)}}(),e.EvpKDF})},function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){return function(t){function n(e,t,n,r,a,o,s){var i=e+(t&n|~t&r)+a+s;return(i<<o|i>>>32-o)+t}function r(e,t,n,r,a,o,s){var i=e+(t&r|n&~r)+a+s;return(i<<o|i>>>32-o)+t}function a(e,t,n,r,a,o,s){var i=e+(t^n^r)+a+s;return(i<<o|i>>>32-o)+t}function o(e,t,n,r,a,o,s){var i=e+(n^(t|~r))+a+s;return(i<<o|i>>>32-o)+t}var s=e,i=s.lib,c=i.WordArray,u=i.Hasher,d=s.algo,l=[];!function(){for(var e=0;e<64;e++)l[e]=4294967296*t.abs(t.sin(e+1))|0}();var f=d.MD5=u.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var s=0;s<16;s++){var i=t+s,c=e[i];e[i]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var u=this._hash.words,d=e[t+0],f=e[t+1],p=e[t+2],h=e[t+3],m=e[t+4],b=e[t+5],y=e[t+6],g=e[t+7],v=e[t+8],x=e[t+9],w=e[t+10],_=e[t+11],k=e[t+12],A=e[t+13],B=e[t+14],S=e[t+15],T=u[0],C=u[1],D=u[2],P=u[3];T=n(T,C,D,P,d,7,l[0]),P=n(P,T,C,D,f,12,l[1]),D=n(D,P,T,C,p,17,l[2]),C=n(C,D,P,T,h,22,l[3]),T=n(T,C,D,P,m,7,l[4]),P=n(P,T,C,D,b,12,l[5]),D=n(D,P,T,C,y,17,l[6]),C=n(C,D,P,T,g,22,l[7]),T=n(T,C,D,P,v,7,l[8]),P=n(P,T,C,D,x,12,l[9]),D=n(D,P,T,C,w,17,l[10]),C=n(C,D,P,T,_,22,l[11]),T=n(T,C,D,P,k,7,l[12]),P=n(P,T,C,D,A,12,l[13]),D=n(D,P,T,C,B,17,l[14]),C=n(C,D,P,T,S,22,l[15]),T=r(T,C,D,P,f,5,l[16]),P=r(P,T,C,D,y,9,l[17]),D=r(D,P,T,C,_,14,l[18]),C=r(C,D,P,T,d,20,l[19]),T=r(T,C,D,P,b,5,l[20]),P=r(P,T,C,D,w,9,l[21]),D=r(D,P,T,C,S,14,l[22]),C=r(C,D,P,T,m,20,l[23]),T=r(T,C,D,P,x,5,l[24]),P=r(P,T,C,D,B,9,l[25]),D=r(D,P,T,C,h,14,l[26]),C=r(C,D,P,T,v,20,l[27]),T=r(T,C,D,P,A,5,l[28]),P=r(P,T,C,D,p,9,l[29]),D=r(D,P,T,C,g,14,l[30]),C=r(C,D,P,T,k,20,l[31]),T=a(T,C,D,P,b,4,l[32]),P=a(P,T,C,D,v,11,l[33]),D=a(D,P,T,C,_,16,l[34]),C=a(C,D,P,T,B,23,l[35]),T=a(T,C,D,P,f,4,l[36]),P=a(P,T,C,D,m,11,l[37]),D=a(D,P,T,C,g,16,l[38]),C=a(C,D,P,T,w,23,l[39]),T=a(T,C,D,P,A,4,l[40]),P=a(P,T,C,D,d,11,l[41]),D=a(D,P,T,C,h,16,l[42]),C=a(C,D,P,T,y,23,l[43]),T=a(T,C,D,P,x,4,l[44]),P=a(P,T,C,D,k,11,l[45]),D=a(D,P,T,C,S,16,l[46]),C=a(C,D,P,T,p,23,l[47]),T=o(T,C,D,P,d,6,l[48]),P=o(P,T,C,D,g,10,l[49]),D=o(D,P,T,C,B,15,l[50]),C=o(C,D,P,T,b,21,l[51]),T=o(T,C,D,P,k,6,l[52]),P=o(P,T,C,D,h,10,l[53]),D=o(D,P,T,C,w,15,l[54]),C=o(C,D,P,T,f,21,l[55]),T=o(T,C,D,P,v,6,l[56]),P=o(P,T,C,D,S,10,l[57]),D=o(D,P,T,C,y,15,l[58]),C=o(C,D,P,T,A,21,l[59]),T=o(T,C,D,P,m,6,l[60]),P=o(P,T,C,D,_,10,l[61]),D=o(D,P,T,C,p,15,l[62]),C=o(C,D,P,T,x,21,l[63]),u[0]=u[0]+T|0,u[1]=u[1]+C|0,u[2]=u[2]+D|0,u[3]=u[3]+P|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,a=8*e.sigBytes;n[a>>>5]|=128<<24-a%32;var o=t.floor(r/4294967296),s=r;n[15+(a+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[14+(a+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(n.length+1),this._process();for(var i=this._hash,c=i.words,u=0;u<4;u++){var d=c[u];c[u]=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8)}return i},clone:function(){var e=u.clone.call(this);return e._hash=this._hash.clone(),e}});s.MD5=u._createHelper(f),s.HmacMD5=u._createHmacHelper(f)}(Math),e.MD5})},function(e,t,n){var r=n(5),a=n(44),o=function(e){this.name=e.name,this.call=e.call,this.params=e.params||0,this.inputFormatter=e.inputFormatter,this.outputFormatter=e.outputFormatter,this.requestManager=null};o.prototype.setRequestManager=function(e){this.requestManager=e},o.prototype.getCall=function(e){return r.isFunction(this.call)?this.call(e):this.call},o.prototype.extractCallback=function(e){if(r.isFunction(e[e.length-1]))return e.pop()},o.prototype.validateArgs=function(e){if(e.length!==this.params)throw a.InvalidNumberOfParams()},o.prototype.formatInput=function(e){return this.inputFormatter?this.inputFormatter.map(function(t,n){return t?t(e[n]):e[n]}):e},o.prototype.formatOutput=function(e){return this.outputFormatter&&e?this.outputFormatter(e):e},o.prototype.toPayload=function(e){var t=this.getCall(e),n=this.extractCallback(e),r=this.formatInput(e);return this.validateArgs(r),{method:t,params:r,callback:n}},o.prototype.attachToObject=function(e){var t=this.buildCall();t.call=this.call;var n=this.name.split(".");n.length>1?(e[n[0]]=e[n[0]]||{},e[n[0]][n[1]]=t):e[n[0]]=t},o.prototype.buildCall=function(){var e=this,t=function(){var t=e.toPayload(Array.prototype.slice.call(arguments));return t.callback?e.requestManager.sendAsync(t,function(n,r){t.callback(n,e.formatOutput(r))}):e.formatOutput(e.requestManager.send(t))};return t.request=this.request.bind(this),t},o.prototype.request=function(){var e=this.toPayload(Array.prototype.slice.call(arguments));return e.format=this.formatOutput.bind(this),e},e.exports=o},function(e,t,n){e.exports={default:n(110),__esModule:!0}},,function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(47);e.exports=function(e){return Object(r(e))}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(248),a=n(127);e.exports=function(e,t){return t&&"hex"===t.encoding&&(e.length>2&&"0x"===e.substr(0,2)&&(e=e.substr(2)),e=r.enc.Hex.parse(e)),a(e,{outputLength:256}).toString()}},function(e,t){e.exports={InvalidNumberOfParams:function(){return new Error("Invalid number of input parameters")},InvalidConnection:function(e){return new Error("CONNECTION ERROR: Couldn't connect to node "+e+".")},InvalidProvider:function(){return new Error("Provider not set or invalid")},InvalidResponse:function(e){var t=e&&e.error&&e.error.message?e.error.message:"Invalid JSON RPC response: "+JSON.stringify(e);return new Error(t)}}},function(e,t,n){var r=n(5),a=function(e){this.name=e.name,this.getter=e.getter,this.setter=e.setter,this.outputFormatter=e.outputFormatter,this.inputFormatter=e.inputFormatter,this.requestManager=null};a.prototype.setRequestManager=function(e){this.requestManager=e},a.prototype.formatInput=function(e){return this.inputFormatter?this.inputFormatter(e):e},a.prototype.formatOutput=function(e){return this.outputFormatter&&null!==e?this.outputFormatter(e):e},a.prototype.extractCallback=function(e){if(r.isFunction(e[e.length-1]))return e.pop()},a.prototype.attachToObject=function(e){var t={get:this.buildGet(),enumerable:!0},n=this.name.split("."),r=n[0];n.length>1&&(e[n[0]]=e[n[0]]||{},e=e[n[0]],r=n[1]),Object.defineProperty(e,r,t),e[o(r)]=this.buildAsyncGet()};var o=function(e){return"get"+e.charAt(0).toUpperCase()+e.slice(1)};a.prototype.buildGet=function(){var e=this;return function(){return e.formatOutput(e.requestManager.send({method:e.getter}))}},a.prototype.buildAsyncGet=function(){var e=this,t=function(t){e.requestManager.sendAsync({method:e.getter},function(n,r){t(n,e.formatOutput(r))})};return t.request=this.request.bind(this),t},a.prototype.request=function(){var e={method:this.getter,params:[],callback:this.extractCallback(Array.prototype.slice.call(arguments))};return e.format=this.formatOutput.bind(this),e},e.exports=a},function(e,t,n){var r;!function(a){"use strict";function o(e){function t(e,r){var a,o,s,i,c,u,d=this;if(!(d instanceof t))return G&&F(26,"constructor call without new",e),new t(e,r);if(null!=r&&W(r,2,64,N,"base")){if(r|=0,u=e+"",10==r)return d=new t(e instanceof t?e:u),R(d,H+d.e+1,j);if((i="number"==typeof e)&&0*e!=0||!new RegExp("^-?"+(a="["+A.slice(0,r)+"]+")+"(?:\\."+a+")?$",r<37?"i":"").test(u))return y(d,u,i,r);i?(d.s=1/e<0?(u=u.slice(1),-1):1,G&&u.replace(/^0\.0*|\./,"").length>15&&F(N,k,e),i=!1):d.s=45===u.charCodeAt(0)?(u=u.slice(1),-1):1,u=n(u,10,r,d.s)}else{if(e instanceof t)return d.s=e.s,d.e=e.e,d.c=(e=e.c)?e.slice():e,void(N=0);if((i="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,s=e;s>=10;s/=10,o++);return d.e=o,d.c=[e],void(N=0)}u=e+""}else{if(!g.test(u=e+""))return y(d,u,i);d.s=45===u.charCodeAt(0)?(u=u.slice(1),-1):1}}for((o=u.indexOf("."))>-1&&(u=u.replace(".","")),(s=u.search(/e/i))>0?(o<0&&(o=s),o+=+u.slice(s+1),u=u.substring(0,s)):o<0&&(o=u.length),s=0;48===u.charCodeAt(s);s++);for(c=u.length;48===u.charCodeAt(--c););if(u=u.slice(s,c+1))if(c=u.length,i&&G&&c>15&&F(N,k,d.s*e),(o=o-s-1)>z)d.c=d.e=null;else if(o<U)d.c=[d.e=0];else{if(d.e=o,d.c=[],s=(o+1)%S,o<0&&(s+=S),s<c){for(s&&d.c.push(+u.slice(0,s)),c-=S;s<c;)d.c.push(+u.slice(s,s+=S));u=u.slice(s),s=S-u.length}else s-=c;for(;s--;u+="0");d.c.push(+u)}else d.c=[d.e=0];N=0}function n(e,n,r,a){var o,s,c,u,d,f,h,m=e.indexOf("."),b=H,y=j;for(r<37&&(e=e.toLowerCase()),m>=0&&(c=Q,Q=0,e=e.replace(".",""),h=new t(r),d=h.pow(e.length-m),Q=c,h.c=l(p(i(d.c),d.e),10,n),h.e=h.c.length),f=l(e,r,n),s=c=f.length;0==f[--c];f.pop());if(!f[0])return"0";if(m<0?--s:(d.c=f,d.e=s,d.s=a,d=I(d,h,b,y,n),f=d.c,u=d.r,s=d.e),o=s+b+1,m=f[o],c=n/2,u=u||o<0||null!=f[o+1],u=y<4?(null!=m||u)&&(0==y||y==(d.s<0?3:2)):m>c||m==c&&(4==y||u||6==y&&1&f[o-1]||y==(d.s<0?8:7)),o<1||!f[0])e=u?p("1",-b):"0";else{if(f.length=o,u)for(--n;++f[--o]>n;)f[o]=0,o||(++s,f.unshift(1));for(c=f.length;!f[--c];);for(m=0,e="";m<=c;e+=A.charAt(f[m++]));e=p(e,s)}return e}function r(e,n,r,a){var o,s,c,u,d;if(r=null!=r&&W(r,0,8,a,_)?0|r:j,!e.c)return e.toString();if(o=e.c[0],c=e.e,null==n)d=i(e.c),d=19==a||24==a&&c<=q?f(d,c):p(d,c);else if(e=R(new t(e),n,r),s=e.e,d=i(e.c),u=d.length,19==a||24==a&&(n<=s||s<=q)){for(;u<n;d+="0",u++);d=f(d,s)}else if(n-=c,d=p(d,s),s+1>u){if(--n>0)for(d+=".";n--;d+="0");}else if((n+=s-u)>0)for(s+1==u&&(d+=".");n--;d+="0");return e.s<0&&o?"-"+d:d}function a(e,n){var r,a,o=0;for(d(e[0])&&(e=e[0]),r=new t(e[0]);++o<e.length;){if(a=new t(e[o]),!a.s){r=a;break}n.call(r,a)&&(r=a)}return r}function m(e,t,n,r,a){return(e<t||e>n||e!=h(e))&&F(r,(a||"decimal places")+(e<t||e>n?" out of range":" not an integer"),e),!0}function O(e,t,n){for(var r=1,a=t.length;!t[--a];t.pop());for(a=t[0];a>=10;a/=10,r++);return(n=r+n*S-1)>z?e.c=e.e=null:n<U?e.c=[e.e=0]:(e.e=n,e.c=t),e}function F(e,t,n){var r=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][e]+"() "+t+": "+n);throw r.name="BigNumber Error",N=0,r}function R(e,t,n,r){var a,o,s,i,c,u,d,l=e.c,f=C;if(l){e:{for(a=1,i=l[0];i>=10;i/=10,a++);if((o=t-a)<0)o+=S,s=t,c=l[u=0],d=c/f[a-s-1]%10|0;else if((u=v((o+1)/S))>=l.length){if(!r)break e;for(;l.length<=u;l.push(0));c=d=0,a=1,o%=S,s=o-S+1}else{for(c=i=l[u],a=1;i>=10;i/=10,a++);o%=S,s=o-S+a,d=s<0?0:c/f[a-s-1]%10|0}if(r=r||t<0||null!=l[u+1]||(s<0?c:c%f[a-s-1]),r=n<4?(d||r)&&(0==n||n==(e.s<0?3:2)):d>5||5==d&&(4==n||r||6==n&&(o>0?s>0?c/f[a-s]:0:l[u-1])%10&1||n==(e.s<0?8:7)),t<1||!l[0])return l.length=0,r?(t-=e.e+1,l[0]=f[t%S],e.e=-t||0):l[0]=e.e=0,e;if(0==o?(l.length=u,i=1,u--):(l.length=u+1,i=f[S-o],l[u]=s>0?x(c/f[a-s]%f[s])*i:0),r)for(;;){if(0==u){for(o=1,s=l[0];s>=10;s/=10,o++);for(s=l[0]+=i,i=1;s>=10;s/=10,i++);o!=i&&(e.e++,l[0]==B&&(l[0]=1));break}if(l[u]+=i,l[u]!=B)break;l[u--]=0,i=1}for(o=l.length;0===l[--o];l.pop());}e.e>z?e.c=e.e=null:e.e<U&&(e.c=[e.e=0])}return e}var I,N=0,E=t.prototype,M=new t(1),H=20,j=4,q=-7,L=21,U=-1e7,z=1e7,G=!0,W=m,V=!1,J=1,Q=100,K={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};return t.another=o,t.ROUND_UP=0,t.ROUND_DOWN=1,t.ROUND_CEIL=2,t.ROUND_FLOOR=3,t.ROUND_HALF_UP=4,t.ROUND_HALF_DOWN=5,t.ROUND_HALF_EVEN=6,t.ROUND_HALF_CEIL=7,t.ROUND_HALF_FLOOR=8,t.EUCLID=9,t.config=function(){var e,t,n=0,r={},a=arguments,o=a[0],s=o&&"object"==typeof o?function(){if(o.hasOwnProperty(t))return null!=(e=o[t])}:function(){if(a.length>n)return null!=(e=a[n++])};return s(t="DECIMAL_PLACES")&&W(e,0,P,2,t)&&(H=0|e),r[t]=H,s(t="ROUNDING_MODE")&&W(e,0,8,2,t)&&(j=0|e),r[t]=j,s(t="EXPONENTIAL_AT")&&(d(e)?W(e[0],-P,0,2,t)&&W(e[1],0,P,2,t)&&(q=0|e[0],L=0|e[1]):W(e,-P,P,2,t)&&(q=-(L=0|(e<0?-e:e)))),r[t]=[q,L],s(t="RANGE")&&(d(e)?W(e[0],-P,-1,2,t)&&W(e[1],1,P,2,t)&&(U=0|e[0],z=0|e[1]):W(e,-P,P,2,t)&&(0|e?U=-(z=0|(e<0?-e:e)):G&&F(2,t+" cannot be zero",e))),r[t]=[U,z],s(t="ERRORS")&&(e===!!e||1===e||0===e?(N=0,W=(G=!!e)?m:u):G&&F(2,t+w,e)),r[t]=G,s(t="CRYPTO")&&(e===!!e||1===e||0===e?(V=!(!e||!b||"object"!=typeof b),e&&!V&&G&&F(2,"crypto unavailable",b)):G&&F(2,t+w,e)),r[t]=V,s(t="MODULO_MODE")&&W(e,0,9,2,t)&&(J=0|e),r[t]=J,s(t="POW_PRECISION")&&W(e,0,P,2,t)&&(Q=0|e),r[t]=Q,s(t="FORMAT")&&("object"==typeof e?K=e:G&&F(2,t+" not an object",e)),r[t]=K,r},t.max=function(){return a(arguments,E.lt)},t.min=function(){return a(arguments,E.gt)},t.random=function(){var e=9007199254740992,n=Math.random()*e&2097151?function(){return x(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var r,a,o,s,i,c=0,u=[],d=new t(M);if(e=null!=e&&W(e,0,P,14)?0|e:H,s=v(e/S),V)if(b&&b.getRandomValues){for(r=b.getRandomValues(new Uint32Array(s*=2));c<s;)i=131072*r[c]+(r[c+1]>>>11),i>=9e15?(a=b.getRandomValues(new Uint32Array(2)),r[c]=a[0],r[c+1]=a[1]):(u.push(i%1e14),c+=2);c=s/2}else if(b&&b.randomBytes){for(r=b.randomBytes(s*=7);c<s;)i=281474976710656*(31&r[c])+1099511627776*r[c+1]+4294967296*r[c+2]+16777216*r[c+3]+(r[c+4]<<16)+(r[c+5]<<8)+r[c+6],i>=9e15?b.randomBytes(7).copy(r,c):(u.push(i%1e14),c+=7);c=s/7}else G&&F(14,"crypto unavailable",b);if(!c)for(;c<s;)(i=n())<9e15&&(u[c++]=i%1e14);for(s=u[--c],e%=S,s&&e&&(i=C[S-e],u[c]=x(s/i)*i);0===u[c];u.pop(),c--);if(c<0)u=[o=0];else{for(o=-1;0===u[0];u.shift(),o-=S);for(c=1,i=u[0];i>=10;i/=10,c++);c<S&&(o-=S-c)}return d.e=o,d.c=u,d}}(),I=function(){function e(e,t,n){var r,a,o,s,i=0,c=e.length,u=t%D,d=t/D|0;for(e=e.slice();c--;)o=e[c]%D,s=e[c]/D|0,r=d*o+s*u,a=u*o+r%D*D+i,i=(a/n|0)+(r/D|0)+d*s,e[c]=a%n;return i&&e.unshift(i),e}function n(e,t,n,r){var a,o;if(n!=r)o=n>r?1:-1;else for(a=o=0;a<n;a++)if(e[a]!=t[a]){o=e[a]>t[a]?1:-1;break}return o}function r(e,t,n,r){for(var a=0;n--;)e[n]-=a,a=e[n]<t[n]?1:0,e[n]=a*r+e[n]-t[n];for(;!e[0]&&e.length>1;e.shift());}return function(a,o,i,c,u){var d,l,f,p,h,m,b,y,g,v,w,_,k,A,T,C,D,P=a.s==o.s?1:-1,O=a.c,F=o.c;if(!(O&&O[0]&&F&&F[0]))return new t(a.s&&o.s&&(O?!F||O[0]!=F[0]:F)?O&&0==O[0]||!F?0*P:P/0:NaN);for(y=new t(P),g=y.c=[],l=a.e-o.e,P=i+l+1,u||(u=B,l=s(a.e/S)-s(o.e/S),P=P/S|0),f=0;F[f]==(O[f]||0);f++);if(F[f]>(O[f]||0)&&l--,P<0)g.push(1),p=!0;else{for(A=O.length,C=F.length,f=0,P+=2,h=x(u/(F[0]+1)),h>1&&(F=e(F,h,u),O=e(O,h,u),C=F.length,A=O.length),k=C,v=O.slice(0,C),w=v.length;w<C;v[w++]=0);D=F.slice(),D.unshift(0),T=F[0],F[1]>=u/2&&T++;do{if(h=0,(d=n(F,v,C,w))<0){if(_=v[0],C!=w&&(_=_*u+(v[1]||0)),(h=x(_/T))>1)for(h>=u&&(h=u-1),m=e(F,h,u),b=m.length,w=v.length;1==n(m,v,b,w);)h--,r(m,C<b?D:F,b,u),b=m.length,d=1;else 0==h&&(d=h=1),m=F.slice(),b=m.length;if(b<w&&m.unshift(0),r(v,m,w,u),w=v.length,d==-1)for(;n(F,v,C,w)<1;)h++,r(v,C<w?D:F,w,u),w=v.length}else 0===d&&(h++,v=[0]);g[f++]=h,v[0]?v[w++]=O[k]||0:(v=[O[k]],w=1)}while((k++<A||null!=v[0])&&P--);p=null!=v[0],g[0]||g.shift()}if(u==B){for(f=1,P=g[0];P>=10;P/=10,f++);R(y,i+(y.e=f+l*S-1)+1,c,p)}else y.e=l,y.r=+p;return y}}(),y=function(){var e=/^(-?)0([xbo])/i,n=/^([^.]+)\.$/,r=/^\.([^.]+)$/,a=/^-?(Infinity|NaN)$/,o=/^\s*\+|^\s+|\s+$/g;return function(s,i,c,u){var d,l=c?i:i.replace(o,"");if(a.test(l))s.s=isNaN(l)?null:l<0?-1:1;else{if(!c&&(l=l.replace(e,function(e,t,n){return d="x"==(n=n.toLowerCase())?16:"b"==n?2:8,u&&u!=d?e:t}),u&&(d=u,l=l.replace(n,"$1").replace(r,"0.$1")),i!=l))return new t(l,d);G&&F(N,"not a"+(u?" base "+u:"")+" number",i),s.s=null}s.c=s.e=null,N=0}}(),E.absoluteValue=E.abs=function(){var e=new t(this);return e.s<0&&(e.s=1),e},E.ceil=function(){return R(new t(this),this.e+1,2)},E.comparedTo=E.cmp=function(e,n){return N=1,c(this,new t(e,n))},E.decimalPlaces=E.dp=function(){var e,t,n=this.c;if(!n)return null;if(e=((t=n.length-1)-s(this.e/S))*S,t=n[t])for(;t%10==0;t/=10,e--);return e<0&&(e=0),e},E.dividedBy=E.div=function(e,n){return N=3,I(this,new t(e,n),H,j)},E.dividedToIntegerBy=E.divToInt=function(e,n){return N=4,I(this,new t(e,n),0,1)},E.equals=E.eq=function(e,n){return N=5,0===c(this,new t(e,n))},E.floor=function(){return R(new t(this),this.e+1,3)},E.greaterThan=E.gt=function(e,n){return N=6,c(this,new t(e,n))>0},E.greaterThanOrEqualTo=E.gte=function(e,n){return N=7,1===(n=c(this,new t(e,n)))||0===n},E.isFinite=function(){return!!this.c},E.isInteger=E.isInt=function(){return!!this.c&&s(this.e/S)>this.c.length-2},E.isNaN=function(){return!this.s},E.isNegative=E.isNeg=function(){return this.s<0},E.isZero=function(){return!!this.c&&0==this.c[0]},E.lessThan=E.lt=function(e,n){return N=8,c(this,new t(e,n))<0},E.lessThanOrEqualTo=E.lte=function(e,n){return N=9,(n=c(this,new t(e,n)))===-1||0===n},E.minus=E.sub=function(e,n){var r,a,o,i,c=this,u=c.s;if(N=10,e=new t(e,n),n=e.s,!u||!n)return new t(NaN);if(u!=n)return e.s=-n,c.plus(e);var d=c.e/S,l=e.e/S,f=c.c,p=e.c;if(!d||!l){if(!f||!p)return f?(e.s=-n,e):new t(p?c:NaN);if(!f[0]||!p[0])return p[0]?(e.s=-n,e):new t(f[0]?c:3==j?-0:0)}if(d=s(d),l=s(l),f=f.slice(),u=d-l){for((i=u<0)?(u=-u,o=f):(l=d,o=p),o.reverse(),n=u;n--;o.push(0));o.reverse()}else for(a=(i=(u=f.length)<(n=p.length))?u:n,u=n=0;n<a;n++)if(f[n]!=p[n]){i=f[n]<p[n];break}if(i&&(o=f,f=p,p=o,e.s=-e.s),(n=(a=p.length)-(r=f.length))>0)for(;n--;f[r++]=0);for(n=B-1;a>u;){if(f[--a]<p[a]){for(r=a;r&&!f[--r];f[r]=n);--f[r],f[a]+=B}f[a]-=p[a]}for(;0==f[0];f.shift(),--l);return f[0]?O(e,f,l):(e.s=3==j?-1:1,e.c=[e.e=0],e)},E.modulo=E.mod=function(e,n){var r,a,o=this;return N=11,e=new t(e,n),!o.c||!e.s||e.c&&!e.c[0]?new t(NaN):!e.c||o.c&&!o.c[0]?new t(o):(9==J?(a=e.s,e.s=1,r=I(o,e,0,3),e.s=a,r.s*=a):r=I(o,e,0,J),o.minus(r.times(e)))},E.negated=E.neg=function(){var e=new t(this);return e.s=-e.s||null,e},E.plus=E.add=function(e,n){var r,a=this,o=a.s;if(N=12,e=new t(e,n),n=e.s,!o||!n)return new t(NaN);if(o!=n)return e.s=-n,a.minus(e);var i=a.e/S,c=e.e/S,u=a.c,d=e.c;if(!i||!c){if(!u||!d)return new t(o/0);if(!u[0]||!d[0])return d[0]?e:new t(u[0]?a:0*o)}if(i=s(i),c=s(c),u=u.slice(),o=i-c){for(o>0?(c=i,r=d):(o=-o,r=u),r.reverse();o--;r.push(0));r.reverse()}for(o=u.length,n=d.length,o-n<0&&(r=d,d=u,u=r,n=o),o=0;n;)o=(u[--n]=u[n]+d[n]+o)/B|0,u[n]%=B;return o&&(u.unshift(o),++c),O(e,u,c)},E.precision=E.sd=function(e){var t,n,r=this,a=r.c;if(null!=e&&e!==!!e&&1!==e&&0!==e&&(G&&F(13,"argument"+w,e),e!=!!e&&(e=null)),!a)return null;if(n=a.length-1,t=n*S+1,n=a[n]){for(;n%10==0;n/=10,t--);for(n=a[0];n>=10;n/=10,t++);}return e&&r.e+1>t&&(t=r.e+1),t},E.round=function(e,n){var r=new t(this);return(null==e||W(e,0,P,15))&&R(r,~~e+this.e+1,null!=n&&W(n,0,8,15,_)?0|n:j),r},E.shift=function(e){var n=this;return W(e,-T,T,16,"argument")?n.times("1e"+h(e)):new t(n.c&&n.c[0]&&(e<-T||e>T)?n.s*(e<0?0:1/0):n)},E.squareRoot=E.sqrt=function(){var e,n,r,a,o,c=this,u=c.c,d=c.s,l=c.e,f=H+4,p=new t("0.5");if(1!==d||!u||!u[0])return new t(!d||d<0&&(!u||u[0])?NaN:u?c:1/0);if(d=Math.sqrt(+c),0==d||d==1/0?(n=i(u),(n.length+l)%2==0&&(n+="0"),d=Math.sqrt(n),l=s((l+1)/2)-(l<0||l%2),d==1/0?n="1e"+l:(n=d.toExponential(),n=n.slice(0,n.indexOf("e")+1)+l),r=new t(n)):r=new t(d+""),r.c[0])for(l=r.e,d=l+f,d<3&&(d=0);;)if(o=r,r=p.times(o.plus(I(c,o,f,1))),i(o.c).slice(0,d)===(n=i(r.c)).slice(0,d)){if(r.e<l&&--d,"9999"!=(n=n.slice(d-3,d+1))&&(a||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(R(r,r.e+H+2,1),e=!r.times(r).eq(c));break}if(!a&&(R(o,o.e+H+2,0),o.times(o).eq(c))){r=o;break}f+=4,d+=4,a=1}return R(r,r.e+H+1,j,e)},E.times=E.mul=function(e,n){var r,a,o,i,c,u,d,l,f,p,h,m,b,y,g,v=this,x=v.c,w=(N=17,e=new t(e,n)).c;if(!(x&&w&&x[0]&&w[0]))return!v.s||!e.s||x&&!x[0]&&!w||w&&!w[0]&&!x?e.c=e.e=e.s=null:(e.s*=v.s,x&&w?(e.c=[0],e.e=0):e.c=e.e=null),e;for(a=s(v.e/S)+s(e.e/S),e.s*=v.s,d=x.length,p=w.length,d<p&&(b=x,x=w,w=b,o=d,d=p,p=o),o=d+p,b=[];o--;b.push(0));for(y=B,g=D,o=p;--o>=0;){for(r=0,h=w[o]%g,m=w[o]/g|0,c=d,i=o+c;i>o;)l=x[--c]%g,f=x[c]/g|0,u=m*l+f*h,l=h*l+u%g*g+b[i]+r,r=(l/y|0)+(u/g|0)+m*f,b[i--]=l%y;b[i]=r}return r?++a:b.shift(),O(e,b,a)},E.toDigits=function(e,n){var r=new t(this);return e=null!=e&&W(e,1,P,18,"precision")?0|e:null,n=null!=n&&W(n,0,8,18,_)?0|n:j,e?R(r,e,n):r},E.toExponential=function(e,t){return r(this,null!=e&&W(e,0,P,19)?1+~~e:null,t,19)},E.toFixed=function(e,t){return r(this,null!=e&&W(e,0,P,20)?~~e+this.e+1:null,t,20)},E.toFormat=function(e,t){var n=r(this,null!=e&&W(e,0,P,21)?~~e+this.e+1:null,t,21);if(this.c){var a,o=n.split("."),s=+K.groupSize,i=+K.secondaryGroupSize,c=K.groupSeparator,u=o[0],d=o[1],l=this.s<0,f=l?u.slice(1):u,p=f.length;if(i&&(a=s,s=i,i=a,p-=a),s>0&&p>0){for(a=p%s||s,u=f.substr(0,a);a<p;a+=s)u+=c+f.substr(a,s);i>0&&(u+=c+f.slice(a)),l&&(u="-"+u)}n=d?u+K.decimalSeparator+((i=+K.fractionGroupSize)?d.replace(new RegExp("\\d{"+i+"}\\B","g"),"$&"+K.fractionGroupSeparator):d):u}return n},E.toFraction=function(e){var n,r,a,o,s,c,u,d,l,f=G,p=this,h=p.c,m=new t(M),b=r=new t(M),y=u=new t(M);if(null!=e&&(G=!1,c=new t(e),G=f,(f=c.isInt())&&!c.lt(M)||(G&&F(22,"max denominator "+(f?"out of range":"not an integer"),e),e=!f&&c.c&&R(c,c.e+1,1).gte(M)?c:null)),!h)return p.toString();for(l=i(h),o=m.e=l.length-p.e-1,m.c[0]=C[(s=o%S)<0?S+s:s],e=!e||c.cmp(m)>0?o>0?m:b:c,s=z,z=1/0,c=new t(l),u.c[0]=0;d=I(c,m,0,1),a=r.plus(d.times(y)),1!=a.cmp(e);)r=y,y=a,b=u.plus(d.times(a=b)),u=a,m=c.minus(d.times(a=m)),c=a;return a=I(e.minus(r),y,0,1),u=u.plus(a.times(b)),r=r.plus(a.times(y)),u.s=b.s=p.s,o*=2,n=I(b,y,o,j).minus(p).abs().cmp(I(u,r,o,j).minus(p).abs())<1?[b.toString(),y.toString()]:[u.toString(),r.toString()],z=s,n},E.toNumber=function(){var e=this;return+e||(e.s?0*e.s:NaN)},E.toPower=E.pow=function(e){var n,r,a=x(e<0?-e:+e),o=this;if(!W(e,-T,T,23,"exponent")&&(!isFinite(e)||a>T&&(e/=0)||parseFloat(e)!=e&&!(e=NaN)))return new t(Math.pow(+o,e));for(n=Q?v(Q/S+2):0,r=new t(M);;){if(a%2){if(r=r.times(o),!r.c)break;n&&r.c.length>n&&(r.c.length=n)}if(!(a=x(a/2)))break;o=o.times(o),n&&o.c&&o.c.length>n&&(o.c.length=n)}return e<0&&(r=M.div(r)),n?R(r,Q,j):r},E.toPrecision=function(e,t){return r(this,null!=e&&W(e,1,P,24,"precision")?0|e:null,t,24)},E.toString=function(e){var t,r=this,a=r.s,o=r.e;return null===o?a?(t="Infinity",a<0&&(t="-"+t)):t="NaN":(t=i(r.c),t=null!=e&&W(e,2,64,25,"base")?n(p(t,o),0|e,10,a):o<=q||o>=L?f(t,o):p(t,o),a<0&&r.c[0]&&(t="-"+t)),t},E.truncated=E.trunc=function(){return R(new t(this),this.e+1,1)},E.valueOf=E.toJSON=function(){return this.toString()},null!=e&&t.config(e),t}function s(e){var t=0|e;return e>0||e===t?t:t-1}function i(e){for(var t,n,r=1,a=e.length,o=e[0]+"";r<a;){for(t=e[r++]+"",n=S-t.length;n--;t="0"+t);o+=t}for(a=o.length;48===o.charCodeAt(--a););return o.slice(0,a+1||1)}function c(e,t){var n,r,a=e.c,o=t.c,s=e.s,i=t.s,c=e.e,u=t.e;if(!s||!i)return null;if(n=a&&!a[0],r=o&&!o[0],n||r)return n?r?0:-i:s;if(s!=i)return s;if(n=s<0,r=c==u,!a||!o)return r?0:!a^n?1:-1;if(!r)return c>u^n?1:-1;for(i=(c=a.length)<(u=o.length)?c:u,s=0;s<i;s++)if(a[s]!=o[s])return a[s]>o[s]^n?1:-1;return c==u?0:c>u^n?1:-1}function u(e,t,n){return(e=h(e))>=t&&e<=n}function d(e){return"[object Array]"==Object.prototype.toString.call(e)}function l(e,t,n){for(var r,a,o=[0],s=0,i=e.length;s<i;){for(a=o.length;a--;o[a]*=t);for(o[r=0]+=A.indexOf(e.charAt(s++));r<o.length;r++)o[r]>n-1&&(null==o[r+1]&&(o[r+1]=0),o[r+1]+=o[r]/n|0,o[r]%=n)}return o.reverse()}function f(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function p(e,t){var n,r;if(t<0){for(r="0.";++t;r+="0");e=r+e}else if(n=e.length,++t>n){for(r="0",t-=n;--t;r+="0");e+=r}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}function h(e){return e=parseFloat(e),e<0?v(e):x(e)}var m,b,y,g=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,v=Math.ceil,x=Math.floor,w=" not a boolean or binary digit",_="rounding mode",k="number type has more than 15 significant digits",A="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",B=1e14,S=14,T=9007199254740991,C=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],D=1e7,P=1e9;m=o(),void 0!==(r=function(){return m}.call(t,n,t,e))&&(e.exports=r)}()},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},,,,,,function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(19),a=n(6).document,o=r(a)&&r(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},,,function(e,t,n){var r=n(60)("keys"),a=n(42);e.exports=function(e){return r[e]||(r[e]=a(e))}},function(e,t,n){var r=n(6),a="__core-js_shared__",o=r[a]||(r[a]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t,n){var r=n(19);e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},,,function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){return function(t){var n=e,r=n.lib,a=r.Base,o=r.WordArray,s=n.x64={};s.Word=a.extend({init:function(e,t){this.high=e,this.low=t}}),s.WordArray=a.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:8*e.length},toX32:function(){for(var e=this.words,t=e.length,n=[],r=0;r<t;r++){var a=e[r];n.push(a.high),n.push(a.low)}return o.create(n,this.sigBytes)},clone:function(){for(var e=a.clone.call(this),t=e.words=this.words.slice(0),n=t.length,r=0;r<n;r++)t[r]=t[r].clone();return e}})}(),e})},,function(e,t,n){var r=n(46),a=["wei","kwei","Mwei","Gwei","szabo","finney","femtoether","picoether","nanoether","microether","milliether","nano","micro","milli","ether","grand","Mether","Gether","Tether","Pether","Eether","Zether","Yether","Nether","Dether","Vether","Uether"];e.exports={ETH_PADDING:32,ETH_SIGNATURE_LENGTH:4,ETH_UNITS:a,ETH_BIGNUMBER_ROUNDING_MODE:{ROUNDING_MODE:r.ROUND_DOWN},ETH_POLLING_TIMEOUT:500,defaultBlock:"latest",defaultAccount:void 0}},function(e,t,n){var r=n(15),a=n(5),o=function(e){return null===e||void 0===e?null:(e=String(e),0===e.indexOf("0x")?e:a.fromUtf8(e))},s=function(e){return a.isString(e)?e:(e=e||{},e.topics=e.topics||[],e.topics=e.topics.map(function(e){return a.isArray(e)?e.map(o):o(e)}),{topics:e.topics,from:e.from,to:e.to,address:e.address,fromBlock:r.inputBlockNumberFormatter(e.fromBlock),toBlock:r.inputBlockNumberFormatter(e.toBlock)})},i=function(e,t){a.isString(e.options)||e.get(function(e,n){e&&t(e),a.isArray(n)&&n.forEach(function(e){t(null,e)})})},c=function(e){var t=function(t,n){if(t)return e.callbacks.forEach(function(e){e(t)});a.isArray(n)&&n.forEach(function(t){t=e.formatter?e.formatter(t):t,e.callbacks.forEach(function(e){e(null,t)})})};e.requestManager.startPolling({method:e.implementation.poll.call,params:[e.filterId]},e.filterId,t,e.stopWatching.bind(e))},u=function(e,t,n,r,a){var o=this,u={};return n.forEach(function(t){t.setRequestManager(e),t.attachToObject(u)}),this.requestManager=e,this.options=s(t),this.implementation=u,this.filterId=null,this.callbacks=[],this.getLogsCallbacks=[],this.pollFilters=[],this.formatter=r,this.implementation.newFilter(this.options,function(e,t){if(e)o.callbacks.forEach(function(t){t(e)});else if(o.filterId=t,o.getLogsCallbacks.forEach(function(e){o.get(e)}),o.getLogsCallbacks=[],o.callbacks.forEach(function(e){i(o,e)}),o.callbacks.length>0&&c(o),"function"==typeof a)return o.watch(a)}),this};u.prototype.watch=function(e){return this.callbacks.push(e),this.filterId&&(i(this,e),c(this)),this},u.prototype.stopWatching=function(e){if(this.requestManager.stopPolling(this.filterId),this.callbacks=[],!e)return this.implementation.uninstallFilter(this.filterId);this.implementation.uninstallFilter(this.filterId,e)},u.prototype.get=function(e){var t=this;if(!a.isFunction(e)){if(null===this.filterId)throw new Error("Filter ID Error: filter().get() can't be chained synchronous, please provide a callback for the get() method.");return this.implementation.getLogs(this.filterId).map(function(e){return t.formatter?t.formatter(e):e})}return null===this.filterId?this.getLogsCallbacks.push(e):this.implementation.getLogs(this.filterId,function(n,r){n?e(n):e(null,r.map(function(e){return t.formatter?t.formatter(e):e}))}),this},e.exports=u},function(e,t,n){var r=n(46),a=function(e,t){for(var n=e;n.length<2*t;)n="0"+n;return n},o=function(e){var t="A".charCodeAt(0),n="Z".charCodeAt(0);return e=e.toUpperCase(),e=e.substr(4)+e.substr(0,4),e.split("").map(function(e){var r=e.charCodeAt(0);return r>=t&&r<=n?r-t+10:e}).join("")},s=function(e){for(var t,n=e;n.length>2;)t=n.slice(0,9),n=parseInt(t,10)%97+n.slice(t.length);return parseInt(n,10)%97},i=function(e){this._iban=e};i.fromAddress=function(e){var t=new r(e,16),n=t.toString(36),o=a(n,15);return i.fromBban(o.toUpperCase())},i.fromBban=function(e){var t="XE",n=s(o(t+"00"+e)),r=("0"+(98-n)).slice(-2);return new i(t+r+e)},i.createIndirect=function(e){return i.fromBban("ETH"+e.institution+e.identifier)},i.isValid=function(e){return new i(e).isValid()},i.prototype.isValid=function(){return/^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban)&&1===s(o(this._iban))},i.prototype.isDirect=function(){return 34===this._iban.length||35===this._iban.length},i.prototype.isIndirect=function(){return 20===this._iban.length},i.prototype.checksum=function(){return this._iban.substr(2,2)},i.prototype.institution=function(){return this.isIndirect()?this._iban.substr(7,4):""},i.prototype.client=function(){return this.isIndirect()?this._iban.substr(11):""},i.prototype.address=function(){if(this.isDirect()){var e=this._iban.substr(4),t=new r(e,36);return a(t.toString(16),20)}return""},i.prototype.toString=function(){return this._iban},e.exports=i},function(e,t,n){var r=n(37),a=function(){return[new r({name:"newFilter",call:function(e){switch(e[0]){case"latest":return e.shift(),this.params=0,"eth_newBlockFilter";case"pending":return e.shift(),this.params=0,"eth_newPendingTransactionFilter";default:return"eth_newFilter"}},params:1}),new r({name:"uninstallFilter",call:"eth_uninstallFilter",params:1}),new r({name:"getLogs",call:"eth_getFilterLogs",params:1}),new r({name:"poll",call:"eth_getFilterChanges",params:1})]},o=function(){return[new r({name:"newFilter",call:"shh_newFilter",params:1}),new r({name:"uninstallFilter",call:"shh_uninstallFilter",params:1}),new r({name:"getLogs",call:"shh_getMessages",params:1}),new r({name:"poll",call:"shh_getFilterChanges",params:1})]};e.exports={eth:a,shh:o}},function(e,t,n){(function(e,r){var a;!function(o){function s(e){for(var t,n,r=[],a=0,o=e.length;a<o;)t=e.charCodeAt(a++),t>=55296&&t<=56319&&a<o?(n=e.charCodeAt(a++),56320==(64512&n)?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),a--)):r.push(t);return r}function i(e){for(var t,n=e.length,r=-1,a="";++r<n;)t=e[r],t>65535&&(t-=65536,a+=x(t>>>10&1023|55296),t=56320|1023&t),a+=x(t);return a}function c(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function u(e,t){return x(e>>t&63|128)}function d(e){if(0==(4294967168&e))return x(e);var t="";return 0==(4294965248&e)?t=x(e>>6&31|192):0==(4294901760&e)?(c(e),t=x(e>>12&15|224),t+=u(e,6)):0==(4292870144&e)&&(t=x(e>>18&7|240),t+=u(e,12),t+=u(e,6)),t+=x(63&e|128)}function l(e){for(var t,n=s(e),r=n.length,a=-1,o="";++a<r;)t=n[a],o+=d(t);return o}function f(){if(v>=g)throw Error("Invalid byte index");var e=255&y[v];if(v++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function p(){var e,t,n,r,a;if(v>g)throw Error("Invalid byte index");if(v==g)return!1;if(e=255&y[v],v++,0==(128&e))return e;if(192==(224&e)){if(t=f(),(a=(31&e)<<6|t)>=128)return a;throw Error("Invalid continuation byte")}if(224==(240&e)){if(t=f(),n=f(),(a=(15&e)<<12|t<<6|n)>=2048)return c(a),a;throw Error("Invalid continuation byte")}if(240==(248&e)&&(t=f(),n=f(),r=f(),(a=(7&e)<<18|t<<12|n<<6|r)>=65536&&a<=1114111))return a;throw Error("Invalid UTF-8 detected")}function h(e){y=s(e),g=y.length,v=0;for(var t,n=[];(t=p())!==!1;)n.push(t);return i(n)}var m="object"==typeof t&&t,b=("object"==typeof e&&e&&e.exports,"object"==typeof r&&r);b.global!==b&&b.window;var y,g,v,x=String.fromCharCode,w={version:"2.1.2",encode:l,decode:h};void 0!==(a=function(){return w}.call(t,n,t,e))&&(e.exports=a)}()}).call(t,n(136)(e),n(25))},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.defineProperty(t,"_preamble",{value:e.trim(),enumerable:!1}),t}function o(e,t){var n=null==e?null:e.constructor;return n===Object||n===Array?(Object.defineProperty(e,"_comment",{value:t,enumerable:!1}),e):new p(e,t)}function s(e){return o("0x"+e.toString(16),e.toString())}Object.defineProperty(t,"__esModule",{value:!0}),t.Dummy=void 0;var i=n(38),c=r(i),u=n(0),d=r(u),l=n(1),f=r(l);t.withPreamble=a,t.withComment=o,t.fromDecimal=s;var p=(t.Dummy=function(){function e(t){(0,d.default)(this,e),this.value=t}return(0,f.default)(e,[{key:"toString",value:function(){return this.value}},{key:"toJSON",value:function(){return"##"+this.value+"##"}}],[{key:"fixJSON",value:function(e){return e.replace(/"##([^#]+)##"/g,"$1")}},{key:"isDummy",value:function(t){return t instanceof e}},{key:"stringifyJSON",value:function(t){return e.fixJSON((0,c.default)(t))}}]),e}(),function(){function e(t,n){(0,d.default)(this,e),this._value=t,this._comment=n}return(0,f.default)(e,[{key:"toJSON",value:function(){return this._value}}]),e}())},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TransactionResponse=t.TransactionRequest=t.CallRequest=t.BlockNumber=t.Quantity=t.Integer=t.Hash=t.Data=t.Address=void 0;var a,o,s,i,c,u,d,l,f=n(0),p=r(f),h=t.Address=function e(){(0,p.default)(this,e)},m=t.Data=function e(){(0,p.default)(this,e)},b=t.Hash=function e(){(0,p.default)(this,e)},y=(t.Integer=function e(){(0,p.default)(this,e)},t.Quantity=function e(){(0,p.default)(this,e)}),g=t.BlockNumber=(o=a=function e(){(0,p.default)(this,e)},a.print="`Quantity` | `Tag`",o);t.CallRequest=(i=s=function e(){(0,p.default)(this,e)},s.print="`Object`",s.details={from:{type:h,desc:"20 Bytes - The address the transaction is send from.",optional:!0},to:{type:h,desc:"(optional when creating new contract) 20 Bytes - The address the transaction is directed to."},gas:{type:y,desc:"Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.",optional:!0},gasPrice:{type:y,desc:"Integer of the gas price used for each paid gas.",optional:!0},value:{type:y,desc:"Integer of the value sent with this transaction.",optional:!0},data:{type:m,desc:"4 byte hash of the method signature followed by encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI).",optional:!0}},i),t.TransactionRequest=(u=c=function e(){(0,p.default)(this,e)},c.print="`Object`",c.details={from:{type:h,desc:"20 Bytes - The address the transaction is send from."},to:{type:h,desc:"20 Bytes - The address the transaction is directed to.",optional:!0},gas:{type:y,desc:"Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.",optional:!0},gasPrice:{type:y,desc:"Integer of the gas price used for each paid gas.",optional:!0},value:{type:y,desc:"Integer of the value sent with this transaction.",optional:!0},data:{type:m,desc:"4 byte hash of the method signature followed by encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI).",optional:!0},nonce:{type:y,desc:"Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.",optional:!0},condition:{type:Object,desc:"Conditional submission of the transaction. Can be either an integer block number `{ block: 1 }` or UTC timestamp (in seconds) `{ time: 1491290692 }` or `null`.",optional:!0}},u),t.TransactionResponse=(l=d=function e(){(0,p.default)(this,e)},d.print="`Object`",d.details={hash:{type:b,desc:"32 Bytes - hash of the transaction."},nonce:{type:y,desc:"The number of transactions made by the sender prior to this one."},blockHash:{type:b,desc:"32 Bytes - hash of the block where this transaction was in. `null` when its pending."},blockNumber:{type:g,desc:"Block number where this transaction was in. `null` when its pending."},transactionIndex:{type:y,desc:"Integer of the transactions index position in the block. `null` when its pending."},from:{type:h,desc:"20 Bytes - address of the sender."},to:{type:h,desc:"20 Bytes - address of the receiver. `null` when its a contract creation transaction."},value:{type:y,desc:"Value transferred in Wei."},gasPrice:{type:y,desc:"Gas price provided by the sender in Wei."},gas:{type:y,desc:"Gas provided by the sender."},input:{type:m,desc:"The data send along with the transaction."},creates:{type:h,optional:!0,desc:"Address of a created contract or `null`."},raw:{type:m,desc:"Raw transaction data."},publicKey:{type:m,desc:"Public key of the signer."},networkId:{type:y,desc:"The network id of the transaction, if any."},standardV:{type:y,desc:"The standardized V field of the signature (0 or 1)."},v:{type:y,desc:"The V field of the signature."},r:{type:y,desc:"The R field of the signature."},s:{type:y,desc:"The S field of the signature."},condition:{type:Object,optional:!0,desc:"Conditional submission, Block number in `block` or timestamp in `time` or `null`."}},l)},,,,function(e,t,n){e.exports=!n(9)&&!n(16)(function(){return 7!=Object.defineProperty(n(55)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(31);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},,,function(e,t,n){var r=n(17),a=n(13),o=n(113)(!1),s=n(59)("IE_PROTO");e.exports=function(e,t){var n,i=a(e),c=0,u=[];for(n in i)n!=s&&r(i,n)&&u.push(n);for(;t.length>c;)r(i,n=t[c++])&&(~o(u,n)||u.push(n));return u}},function(e,t,n){var r=n(10),a=n(3),o=n(16);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],s={};s[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",s)}},function(e,t,n){var r=n(48),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},,,function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){!function(){var t=e,n=t.lib,r=n.Base,a=t.enc,o=a.Utf8,s=t.algo;s.HMAC=r.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=o.parse(t));var n=e.blockSize,r=4*n;t.sigBytes>r&&(t=e.finalize(t)),t.clamp();for(var a=this._oKey=t.clone(),s=this._iKey=t.clone(),i=a.words,c=s.words,u=0;u<n;u++)i[u]^=1549556828,c[u]^=909522486;a.sigBytes=s.sigBytes=r,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(n))}})}()})},function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){return function(){var t=e,n=t.lib,r=n.WordArray,a=n.Hasher,o=t.algo,s=[],i=o.SHA1=a.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],a=n[1],o=n[2],i=n[3],c=n[4],u=0;u<80;u++){if(u<16)s[u]=0|e[t+u];else{var d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=d<<1|d>>>31}var l=(r<<5|r>>>27)+c+s[u];l+=u<20?1518500249+(a&o|~a&i):u<40?1859775393+(a^o^i):u<60?(a&o|a&i|o&i)-1894007588:(a^o^i)-899497514,c=i,i=o,o=a<<30|a>>>2,a=r,r=l}n[0]=n[0]+r|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+i|0,n[4]=n[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(r+64>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=a._createHelper(i),t.HmacSHA1=a._createHmacHelper(i)}(),e.SHA1})},,function(e,t,n){var r=n(8),a=n(296),o=n(297),s=n(300),i=n(303),c=n(299),u=n(302),d=n(301),l=n(304),f=n(298),p=function(e){this._types=e};p.prototype._requireType=function(e){var t=this._types.filter(function(t){return t.isType(e)})[0];if(!t)throw Error("invalid solidity type!: "+e);return t},p.prototype.encodeParam=function(e,t){return this.encodeParams([e],[t])},p.prototype.encodeParams=function(e,t){var n=this.getSolidityTypes(e),r=n.map(function(n,r){return n.encode(t[r],e[r])}),a=n.reduce(function(t,n,r){var a=n.staticPartLength(e[r]);return t+32*Math.floor((a+31)/32)},0);return this.encodeMultiWithOffset(e,n,r,a)},p.prototype.encodeMultiWithOffset=function(e,t,n,a){var o="",s=this,i=function(n){return t[n].isDynamicArray(e[n])||t[n].isDynamicType(e[n])};return e.forEach(function(c,u){if(i(u)){o+=r.formatInputInt(a).encode();var d=s.encodeWithOffset(e[u],t[u],n[u],a);a+=d.length/2}else o+=s.encodeWithOffset(e[u],t[u],n[u],a)}),e.forEach(function(r,c){if(i(c)){var u=s.encodeWithOffset(e[c],t[c],n[c],a);a+=u.length/2,o+=u}}),o},p.prototype.encodeWithOffset=function(e,t,n,a){var o=this;return t.isDynamicArray(e)?function(){var s=t.nestedName(e),i=t.staticPartLength(s),c=n[0];return function(){var e=2;if(t.isDynamicArray(s))for(var o=1;o<n.length;o++)e+=+n[o-1][0]||0,c+=r.formatInputInt(a+o*i+32*e).encode()}(),function(){for(var e=0;e<n.length-1;e++){var r=c/2;c+=o.encodeWithOffset(s,t,n[e+1],a+r)}}(),c}():t.isStaticArray(e)?function(){var s=t.nestedName(e),i=t.staticPartLength(s),c="";return t.isDynamicArray(s)&&function(){for(var e=0,t=0;t<n.length;t++)e+=+(n[t-1]||[])[0]||0,c+=r.formatInputInt(a+t*i+32*e).encode()}(),function(){for(var e=0;e<n.length;e++){var r=c/2;c+=o.encodeWithOffset(s,t,n[e],a+r)}}(),c}():n},p.prototype.decodeParam=function(e,t){return this.decodeParams([e],t)[0]},p.prototype.decodeParams=function(e,t){var n=this.getSolidityTypes(e),r=this.getOffsets(e,n);return n.map(function(n,a){return n.decode(t,r[a],e[a],a)})},p.prototype.getOffsets=function(e,t){for(var n=t.map(function(t,n){return t.staticPartLength(e[n])}),r=1;r<n.length;r++)n[r]+=n[r-1];return n.map(function(n,r){return n-t[r].staticPartLength(e[r])})},p.prototype.getSolidityTypes=function(e){var t=this;return e.map(function(e){return t._requireType(e)})};var h=new p([new a,new o,new s,new i,new c,new f,new u,new d,new l]);e.exports=h},,,,,,,,,,,,,,function(e,t,n){e.exports={default:n(111),__esModule:!0}},,,function(e,t,n){var r=n(3),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},function(e,t,n){n(123);var r=n(3).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){n(124),e.exports=n(3).Object.keys},function(e,t,n){var r=n(13),a=n(87),o=n(121);e.exports=function(e){return function(t,n,s){var i,c=r(t),u=a(c.length),d=o(s,u);if(e&&n!=n){for(;u>d;)if((i=c[d++])!=i)return!0}else for(;u>d;d++)if((e||d in c)&&c[d]===n)return e||d||0;return!e&&-1}}},,,,,,,,function(e,t,n){var r=n(48),a=Math.max,o=Math.min;e.exports=function(e,t){return e=r(e),e<0?a(e+t,0):o(e,t)}},,function(e,t,n){var r=n(10);r(r.S+r.F*!n(9),"Object",{defineProperty:n(12).f})},function(e,t,n){var r=n(41),a=n(20);n(86)("keys",function(){return function(e){return a(r(e))}})},,function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){return function(t){var n=e,r=n.lib,a=r.WordArray,o=r.Hasher,s=n.algo,i=[],c=[];!function(){function e(e){for(var n=t.sqrt(e),r=2;r<=n;r++)if(!(e%r))return!1;return!0}function n(e){return 4294967296*(e-(0|e))|0}for(var r=2,a=0;a<64;)e(r)&&(a<8&&(i[a]=n(t.pow(r,.5))),c[a]=n(t.pow(r,1/3)),a++),r++}();var u=[],d=s.SHA256=o.extend({_doReset:function(){this._hash=new a.init(i.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],a=n[1],o=n[2],s=n[3],i=n[4],d=n[5],l=n[6],f=n[7],p=0;p<64;p++){if(p<16)u[p]=0|e[t+p];else{var h=u[p-15],m=(h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3,b=u[p-2],y=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;u[p]=m+u[p-7]+y+u[p-16]}var g=i&d^~i&l,v=r&a^r&o^a&o,x=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),w=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),_=f+w+g+c[p]+u[p],k=x+v;f=l,l=d,d=i,i=s+_|0,s=o,o=a,a=r,r=_+k|0}n[0]=n[0]+r|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+i|0,n[5]=n[5]+d|0,n[6]=n[6]+l|0,n[7]=n[7]+f|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,a=8*e.sigBytes;return n[a>>>5]|=128<<24-a%32,n[14+(a+64>>>9<<4)]=t.floor(r/4294967296),n[15+(a+64>>>9<<4)]=r,e.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});n.SHA256=o._createHelper(d),n.HmacSHA256=o._createHmacHelper(d)}(Math),e.SHA256})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(64))}(0,function(e){return function(t){var n=e,r=n.lib,a=r.WordArray,o=r.Hasher,s=n.x64,i=s.Word,c=n.algo,u=[],d=[],l=[];!function(){for(var e=1,t=0,n=0;n<24;n++){u[e+5*t]=(n+1)*(n+2)/2%64;var r=t%5,a=(2*e+3*t)%5;e=r,t=a}for(var e=0;e<5;e++)for(var t=0;t<5;t++)d[e+5*t]=t+(2*e+3*t)%5*5;for(var o=1,s=0;s<24;s++){for(var c=0,f=0,p=0;p<7;p++){if(1&o){var h=(1<<p)-1;h<32?f^=1<<h:c^=1<<h-32}128&o?o=o<<1^113:o<<=1}l[s]=i.create(c,f)}}();var f=[];!function(){for(var e=0;e<25;e++)f[e]=i.create()}();var p=c.SHA3=o.extend({cfg:o.cfg.extend({outputLength:512}),_doReset:function(){for(var e=this._state=[],t=0;t<25;t++)e[t]=new i.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(e,t){for(var n=this._state,r=this.blockSize/2,a=0;a<r;a++){var o=e[t+2*a],s=e[t+2*a+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8);var i=n[a];i.high^=s,i.low^=o}for(var c=0;c<24;c++){for(var p=0;p<5;p++){for(var h=0,m=0,b=0;b<5;b++){var i=n[p+5*b];h^=i.high,m^=i.low}var y=f[p];y.high=h,y.low=m}for(var p=0;p<5;p++)for(var g=f[(p+4)%5],v=f[(p+1)%5],x=v.high,w=v.low,h=g.high^(x<<1|w>>>31),m=g.low^(w<<1|x>>>31),b=0;b<5;b++){var i=n[p+5*b];i.high^=h,i.low^=m}for(var _=1;_<25;_++){var i=n[_],k=i.high,A=i.low,B=u[_];if(B<32)var h=k<<B|A>>>32-B,m=A<<B|k>>>32-B;else var h=A<<B-32|k>>>64-B,m=k<<B-32|A>>>64-B;var S=f[d[_]];S.high=h,S.low=m}var T=f[0],C=n[0];T.high=C.high,T.low=C.low;for(var p=0;p<5;p++)for(var b=0;b<5;b++){var _=p+5*b,i=n[_],D=f[_],P=f[(p+1)%5+5*b],O=f[(p+2)%5+5*b];i.high=D.high^~P.high&O.high,i.low=D.low^~P.low&O.low}var i=n[0],F=l[c];i.high^=F.high,i.low^=F.low}},_doFinalize:function(){var e=this._data,n=e.words,r=(this._nDataBytes,8*e.sigBytes),o=32*this.blockSize;n[r>>>5]|=1<<24-r%32,n[(t.ceil((r+1)/o)*o>>>5)-1]|=128,e.sigBytes=4*n.length,this._process();for(var s=this._state,i=this.cfg.outputLength/8,c=i/8,u=[],d=0;d<c;d++){var l=s[d],f=l.high,p=l.low;f=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),p=16711935&(p<<8|p>>>24)|4278255360&(p<<24|p>>>8),u.push(p),u.push(f)}return new a.init(u,i)},clone:function(){for(var e=o.clone.call(this),t=e._state=this._state.slice(0),n=0;n<25;n++)t[n]=t[n].clone();return e}});n.SHA3=o._createHelper(p),n.HmacSHA3=o._createHmacHelper(p)}(Math),e.SHA3})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(64))}(0,function(e){return function(){function t(){return s.create.apply(s,arguments)}var n=e,r=n.lib,a=r.Hasher,o=n.x64,s=o.Word,i=o.WordArray,c=n.algo,u=[t(1116352408,3609767458),t(1899447441,602891725),t(3049323471,3964484399),t(3921009573,2173295548),t(961987163,4081628472),t(1508970993,3053834265),t(2453635748,2937671579),t(2870763221,3664609560),t(3624381080,2734883394),t(310598401,1164996542),t(607225278,1323610764),t(1426881987,3590304994),t(1925078388,4068182383),t(2162078206,991336113),t(2614888103,633803317),t(3248222580,3479774868),t(3835390401,2666613458),t(4022224774,944711139),t(264347078,2341262773),t(604807628,2007800933),t(770255983,1495990901),t(1249150122,1856431235),t(1555081692,3175218132),t(1996064986,2198950837),t(2554220882,3999719339),t(2821834349,766784016),t(2952996808,2566594879),t(3210313671,3203337956),t(3336571891,1034457026),t(3584528711,2466948901),t(113926993,3758326383),t(338241895,168717936),t(666307205,1188179964),t(773529912,1546045734),t(1294757372,1522805485),t(1396182291,2643833823),t(1695183700,2343527390),t(1986661051,1014477480),t(2177026350,1206759142),t(2456956037,344077627),t(2730485921,1290863460),t(2820302411,3158454273),t(3259730800,3505952657),t(3345764771,106217008),t(3516065817,3606008344),t(3600352804,1432725776),t(4094571909,1467031594),t(275423344,851169720),t(430227734,3100823752),t(506948616,1363258195),t(659060556,3750685593),t(883997877,3785050280),t(958139571,3318307427),t(1322822218,3812723403),t(1537002063,2003034995),t(1747873779,3602036899),t(1955562222,1575990012),t(2024104815,1125592928),t(2227730452,2716904306),t(2361852424,442776044),t(2428436474,593698344),t(2756734187,3733110249),t(3204031479,2999351573),t(3329325298,3815920427),t(3391569614,3928383900),t(3515267271,566280711),t(3940187606,3454069534),t(4118630271,4000239992),t(116418474,1914138554),t(174292421,2731055270),t(289380356,3203993006),t(460393269,320620315),t(685471733,587496836),t(852142971,1086792851),t(1017036298,365543100),t(1126000580,2618297676),t(1288033470,3409855158),t(1501505948,4234509866),t(1607167915,987167468),t(1816402316,1246189591)],d=[];!function(){for(var e=0;e<80;e++)d[e]=t()}();var l=c.SHA512=a.extend({_doReset:function(){this._hash=new i.init([new s.init(1779033703,4089235720),new s.init(3144134277,2227873595),new s.init(1013904242,4271175723),new s.init(2773480762,1595750129),new s.init(1359893119,2917565137),new s.init(2600822924,725511199),new s.init(528734635,4215389547),new s.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],a=n[1],o=n[2],s=n[3],i=n[4],c=n[5],l=n[6],f=n[7],p=r.high,h=r.low,m=a.high,b=a.low,y=o.high,g=o.low,v=s.high,x=s.low,w=i.high,_=i.low,k=c.high,A=c.low,B=l.high,S=l.low,T=f.high,C=f.low,D=p,P=h,O=m,F=b,R=y,I=g,N=v,E=x,M=w,H=_,j=k,q=A,L=B,U=S,z=T,G=C,W=0;W<80;W++){var V=d[W];if(W<16)var J=V.high=0|e[t+2*W],Q=V.low=0|e[t+2*W+1];else{var K=d[W-15],X=K.high,$=K.low,Z=(X>>>1|$<<31)^(X>>>8|$<<24)^X>>>7,Y=($>>>1|X<<31)^($>>>8|X<<24)^($>>>7|X<<25),ee=d[W-2],te=ee.high,ne=ee.low,re=(te>>>19|ne<<13)^(te<<3|ne>>>29)^te>>>6,ae=(ne>>>19|te<<13)^(ne<<3|te>>>29)^(ne>>>6|te<<26),oe=d[W-7],se=oe.high,ie=oe.low,ce=d[W-16],ue=ce.high,de=ce.low,Q=Y+ie,J=Z+se+(Q>>>0<Y>>>0?1:0),Q=Q+ae,J=J+re+(Q>>>0<ae>>>0?1:0),Q=Q+de,J=J+ue+(Q>>>0<de>>>0?1:0);V.high=J,V.low=Q}var le=M&j^~M&L,fe=H&q^~H&U,pe=D&O^D&R^O&R,he=P&F^P&I^F&I,me=(D>>>28|P<<4)^(D<<30|P>>>2)^(D<<25|P>>>7),be=(P>>>28|D<<4)^(P<<30|D>>>2)^(P<<25|D>>>7),ye=(M>>>14|H<<18)^(M>>>18|H<<14)^(M<<23|H>>>9),ge=(H>>>14|M<<18)^(H>>>18|M<<14)^(H<<23|M>>>9),ve=u[W],xe=ve.high,we=ve.low,_e=G+ge,ke=z+ye+(_e>>>0<G>>>0?1:0),_e=_e+fe,ke=ke+le+(_e>>>0<fe>>>0?1:0),_e=_e+we,ke=ke+xe+(_e>>>0<we>>>0?1:0),_e=_e+Q,ke=ke+J+(_e>>>0<Q>>>0?1:0),Ae=be+he,Be=me+pe+(Ae>>>0<be>>>0?1:0);z=L,G=U,L=j,U=q,j=M,q=H,H=E+_e|0,M=N+ke+(H>>>0<E>>>0?1:0)|0,N=R,E=I,R=O,I=F,O=D,F=P,P=_e+Ae|0,D=ke+Be+(P>>>0<_e>>>0?1:0)|0}h=r.low=h+P,r.high=p+D+(h>>>0<P>>>0?1:0),b=a.low=b+F,a.high=m+O+(b>>>0<F>>>0?1:0),g=o.low=g+I,o.high=y+R+(g>>>0<I>>>0?1:0),x=s.low=x+E,s.high=v+N+(x>>>0<E>>>0?1:0),_=i.low=_+H,i.high=w+M+(_>>>0<H>>>0?1:0),A=c.low=A+q,c.high=k+j+(A>>>0<q>>>0?1:0),S=l.low=S+U,l.high=B+L+(S>>>0<U>>>0?1:0),C=f.low=C+G,f.high=T+z+(C>>>0<G>>>0?1:0)},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[30+(r+128>>>10<<5)]=Math.floor(n/4294967296),t[31+(r+128>>>10<<5)]=n,e.sigBytes=4*t.length,this._process(),this._hash.toX32()},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32});n.SHA512=a._createHelper(l),n.HmacSHA512=a._createHmacHelper(l)}(),e.SHA512})},,,,,function(e,t,n){var r=n(5),a=function(e,t){this.value=e||"",this.offset=t};a.prototype.dynamicPartLength=function(){return this.dynamicPart().length/2},a.prototype.withOffset=function(e){return new a(this.value,e)},a.prototype.combine=function(e){return new a(this.value+e.value)},a.prototype.isDynamic=function(){return void 0!==this.offset},a.prototype.offsetAsBytes=function(){return this.isDynamic()?r.padLeft(r.toTwosComplement(this.offset).toString(16),64):""},a.prototype.staticPart=function(){return this.isDynamic()?this.offsetAsBytes():this.value},a.prototype.dynamicPart=function(){return this.isDynamic()?this.value:""},a.prototype.encode=function(){return this.staticPart()+this.dynamicPart()},a.encodeList=function(e){var t=32*e.length,n=e.map(function(e){if(!e.isDynamic())return e;var n=t;return t+=e.dynamicPartLength(),e.withOffset(n)});return n.reduce(function(e,t){return e+t.dynamicPart()},n.reduce(function(e,t){return e+t.staticPart()},""))},e.exports=a},function(e,t,n){var r=n(5),a=n(93),o=n(15),s=n(43),i=n(67),c=n(69),u=function(e,t,n){this._requestManager=e,this._params=t.inputs,this._name=r.transformToFullName(t),this._address=n,this._anonymous=t.anonymous};u.prototype.types=function(e){return this._params.filter(function(t){return t.indexed===e}).map(function(e){return e.type})},u.prototype.displayName=function(){return r.extractDisplayName(this._name)},u.prototype.typeName=function(){return r.extractTypeName(this._name)},u.prototype.signature=function(){return s(this._name)},u.prototype.encode=function(e,t){e=e||{},t=t||{};var n={};["fromBlock","toBlock"].filter(function(e){return void 0!==t[e]}).forEach(function(e){n[e]=o.inputBlockNumberFormatter(t[e])}),n.topics=[],n.address=this._address,this._anonymous||n.topics.push("0x"+this.signature());var s=this._params.filter(function(e){return e.indexed===!0}).map(function(t){var n=e[t.name];return void 0===n||null===n?null:r.isArray(n)?n.map(function(e){return"0x"+a.encodeParam(t.type,e)}):"0x"+a.encodeParam(t.type,n)});return n.topics=n.topics.concat(s),n},u.prototype.decode=function(e){e.data=e.data||"",e.topics=e.topics||[];var t=this._anonymous?e.topics:e.topics.slice(1),n=t.map(function(e){return e.slice(2)}).join(""),r=a.decodeParams(this.types(!0),n),s=e.data.slice(2),i=a.decodeParams(this.types(!1),s),c=o.outputLogFormatter(e);return c.event=this.displayName(),c.address=e.address,c.args=this._params.reduce(function(e,t){return e[t.name]=t.indexed?r.shift():i.shift(),e},{}),delete c.data,delete c.topics,c},u.prototype.execute=function(e,t,n){r.isFunction(arguments[arguments.length-1])&&(n=arguments[arguments.length-1],2===arguments.length&&(t=null),1===arguments.length&&(t=null,e={}));var a=this.encode(e,t),o=this.decode.bind(this);return new i(this._requestManager,a,c.eth(),o,n)},u.prototype.attachToContract=function(e){var t=this.execute.bind(this),n=this.displayName();e[n]||(e[n]=t),e[n][this.typeName()]=this.execute.bind(this,e)},e.exports=u},function(e,t){var n={messageId:0};n.toPayload=function(e,t){return e||console.error("jsonrpc method should be specified!"),n.messageId++,{jsonrpc:"2.0",id:n.messageId,method:e,params:t||[]}},n.isValidResponse=function(e){function t(e){return!!e&&!e.error&&"2.0"===e.jsonrpc&&"number"==typeof e.id&&void 0!==e.result}return Array.isArray(e)?e.every(t):t(e)},n.toBatchPayload=function(e){return e.map(function(e){return n.toPayload(e.method,e.params)})},e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},,function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var r=n(295),a=t(r),o=n(191),s=t(o);n(271);var i=new a.default.providers.HttpProvider("/rpc/"),c=new a.default(i);c.eth.getAccounts(function(e,t){!e&&t&&t[0]&&(c.eth.defaultAccount=t[0])}),(0,s.default)(c).map(function(e){return c._extend(e)}),e.web3=c}).call(t,n(25))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(77),a=n(76),o="Accounts (read-only) and Signatures",s="Development",i='Block Authoring (aka "mining")',c="Network Information",u="Node Settings",d="Account Vaults",l="set",f="accounts";t.default={accountsInfo:{section:o,desc:"Provides metadata for accounts.",params:[],returns:{type:Object,desc:"Maps account address to metadata.",details:{name:{type:String,desc:"Account name"}},example:{"0x0024d0c7ab4c52f723f3aaf0872b9ea4406846a4":{name:"Foo"},"0x004385d8be6140e6f889833f68b51e17b6eacb29":{name:"Bar"},"0x009047ed78fa2be48b62aaf095b64094c934dab0":{name:"Baz"}}}},chainStatus:{section:c,desc:"Returns the information on warp sync blocks",params:[],returns:{type:Object,desc:"The status object",details:{blockGap:{type:Array,desc:"Describes the gap in the blockchain, if there is one: (first, last)",optional:!0}}}},changeVault:{section:d,desc:"Changes the current valut for the account",params:[{type:r.Address,desc:"Account address",example:"0x63Cf90D3f0410092FC0fca41846f596223979195"},{type:String,desc:"Vault name",example:"StrongVault"}],returns:{type:Boolean,desc:"True on success",example:!0}},changeVaultPassword:{section:d,desc:"Changes the password for any given vault",params:[{type:String,desc:"Vault name",example:"StrongVault"},{type:String,desc:"New Password",example:"p@55w0rd"}],returns:{type:Boolean,desc:"True on success",example:!0}},closeVault:{section:d,desc:"Closes a vault with the given name",params:[{type:String,desc:"Vault name",example:"StrongVault"}],returns:{type:Boolean,desc:"True on success",example:!0}},consensusCapability:{desc:"Returns information on current consensus capability.",params:[],returns:{type:Object,desc:'or `String` - Either `"capable"`, `{"capableUntil":N}`, `{"incapableSince":N}` or `"unknown"` (`N` is a block number).',example:"capable"}},dappsList:{subdoc:l,desc:"Returns a list of available local dapps.",params:[],returns:{type:Array,desc:"The list of dapps",example:[{author:"Parity Technologies Ltd",description:"A skeleton dapp",iconUrl:"title.png",id:"skeleton",name:"Skeleton",version:"0.1"}]}},dappsUrl:{section:u,desc:"Returns the hostname and the port of dapps/rpc server, error if not enabled.",params:[],returns:{type:String,desc:"The hostname and port number",example:"localhost:8545"}},defaultAccount:{section:o,desc:"Returns the defaultAccount that is to be used with transactions",params:[],returns:{type:r.Address,desc:"The account address",example:"0x63Cf90D3f0410092FC0fca41846f596223979195"}},defaultExtraData:{section:i,desc:"Returns the default extra data",params:[],returns:{type:r.Data,desc:"Extra data",example:"0xd5830106008650617269747986312e31342e30826c69"}},devLogs:{section:s,desc:"Returns latest stdout logs of your node.",params:[],returns:{type:Array,desc:"Development logs",example:["2017-01-20 18:14:19  Updated conversion rate to Ξ1 = US$10.63 (11199212000 wei/gas)","2017-01-20 18:14:19  Configured for DevelopmentChain using InstantSeal engine","2017-01-20 18:14:19  Operating mode: active","2017-01-20 18:14:19  State DB configuration: fast","2017-01-20 18:14:19  Starting Parity/v1.7.0-unstable-2ae8b4c-20170120/x86_64-linux-gnu/rustc1.14.0"]}},devLogsLevels:{section:s,desc:'Returns current logging level settings. Logging level can be set with `--logging` and be one of: `""` (default), `"info"`, `"debug"`, `"warn"`, `"error"`, `"trace"`.',params:[],returns:{type:String,decs:"Current log level.",example:"debug"}},enode:{section:u,desc:"Returns the node enode URI.",params:[],returns:{type:String,desc:"Enode URI",example:"enode://050929adcfe47dbe0b002cb7ef2bf91ca74f77c4e0f68730e39e717f1ce38908542369ae017148bee4e0d968340885e2ad5adea4acd19c95055080a4b625df6a@172.17.0.1:30303"}},extraData:{section:i,desc:"Returns currently set extra data.",params:[],returns:{type:r.Data,desc:"Extra data.",example:"0xd5830106008650617269747986312e31342e30826c69"}},gasFloorTarget:{section:i,desc:"Returns current target for gas floor.",params:[],returns:{type:r.Quantity,desc:"Gas floor target.",format:"outputBigNumberFormatter",example:(0,a.fromDecimal)(47e5)}},gasCeilTarget:{section:i,desc:"Returns current target for gas ceiling.",params:[],returns:{type:r.Quantity,desc:"Gas ceiling target.",format:"outputBigNumberFormatter",example:(0,a.fromDecimal)(6283184)}},gasPriceHistogram:{section:c,desc:"Returns a snapshot of the historic gas prices.",params:[],returns:{type:Object,desc:"Historic values",details:{bucketBounds:{type:Array,desc:"Array of bound values."},count:{type:Array,desc:"Array of counts."}},example:{bucketBounds:["0x4a817c800","0x525433d01","0x5a26eb202","0x61f9a2703","0x69cc59c04","0x719f11105","0x7971c8606","0x81447fb07","0x891737008","0x90e9ee509","0x98bca5a0a"],counts:[487,9,7,1,8,0,0,0,0,14]}}},generateSecretPhrase:{section:o,desc:"Creates a secret phrase that can be associated with an account.",params:[],returns:{type:String,desc:"The secret phrase.",example:"boasting breeches reshape reputably exit handrail stony jargon moneywise unhinge handed ruby"}},getVaultMeta:{section:d,desc:"Returns the metadata for a specific vault",params:[{type:String,desc:"Vault name",example:"StrongVault"}],returns:{type:String,desc:"The associated JSON metadata for this vault",example:'{"passwordHint":"something"}'}},hardwareAccountsInfo:{section:o,desc:"Provides metadata for attached hardware wallets",params:[],returns:{type:Object,desc:"Maps account address to metadata.",details:{manufacturer:{type:String,desc:"Manufacturer"},name:{type:String,desc:"Account name"}},example:{"0x0024d0c7ab4c52f723f3aaf0872b9ea4406846a4":{manufacturer:"Ledger",name:"Nano S"}}}},listOpenedVaults:{desc:"Returns a list of all opened vaults",params:[],returns:{type:Array,desc:"Names of all opened vaults",example:"['Personal']"}},listVaults:{desc:"Returns a list of all available vaults",params:[],returns:{type:Array,desc:"Names of all available vaults",example:"['Personal','Work']"}},localTransactions:{desc:"Returns an object of current and past local transactions.",params:[],returns:{type:Object,desc:"Mapping of transaction hashes to status objects status object.",example:{"0x09e64eb1ae32bb9ac415ce4ddb3dbad860af72d9377bb5f073c9628ab413c532":{status:"mined",transaction:{from:"0x00a329c0648769a73afac7f9381e08fb43dbea72",to:"0x00a289b43e1e4825dbedf2a78ba60a640634dc40",value:"0xfffff",blockHash:null,blockNumber:null,creates:null,gas:"0xe57e0",gasPrice:"0x2d20cff33",hash:"0x09e64eb1ae32bb9ac415ce4ddb3dbad860af72d9377bb5f073c9628ab413c532",input:"0x",condition:{block:1},networkId:null,nonce:"0x0",publicKey:"0x3fa8c08c65a83f6b4ea3e04e1cc70cbe3cd391499e3e05ab7dedf28aff9afc538200ff93e3f2b2cb5029f03c7ebee820d63a4c5a9541c83acebe293f54cacf0e",raw:"0xf868808502d20cff33830e57e09400a289b43e1e4825dbedf2a78ba60a640634dc40830fffff801ca034c333b0b91cd832a3414d628e3fea29a00055cebf5ba59f7038c188404c0cf3a0524fd9b35be170439b5ffe89694ae0cfc553cb49d1d8b643239e353351531532",standardV:"0x1",v:"0x1c",r:"0x34c333b0b91cd832a3414d628e3fea29a00055cebf5ba59f7038c188404c0cf3",s:"0x524fd9b35be170439b5ffe89694ae0cfc553cb49d1d8b643239e353351531532",transactionIndex:null}},"0x...":new a.Dummy("{ ... }")}}},minGasPrice:{section:i,desc:"Returns currently set minimal gas price",params:[],returns:{type:r.Quantity,desc:"Minimal Gas Price",format:"outputBigNumberFormatter",example:(0,a.fromDecimal)(11262783488)}},mode:{section:u,desc:'Get the mode. Results one of: `"active"`, `"passive"`, `"dark"`, `"offline"`.',params:[],returns:{type:String,desc:"The mode.",example:"active"}},nodeKind:{section:u,desc:"Returns the node type availability and capability",params:[],returns:{type:Object,desc:"Availability and Capability.",details:{availability:{type:String,desc:"Availability, either `personal` or `public`."},capability:{type:String,desc:"Capability, either `full` or `light`."}},example:{availability:"personal",capability:"light"}}},netChain:{section:c,desc:"Returns the name of the connected chain. DEPRECATED use `parity_chain` instead.",params:[],returns:{type:String,desc:"chain name.",example:"homestead"}},chain:{section:c,desc:"Returns the name of the connected chain. ",params:[],returns:{type:String,desc:'chain name, one of: "foundation", "kovan", &c. of a filename.',example:"homestead"}},netPeers:{section:c,desc:"Returns number of peers.",params:[],returns:{type:Object,desc:"Number of peers",details:{active:{type:r.Quantity,desc:"Number of active peers."},connected:{type:r.Quantity,desc:"Number of connected peers."},max:{type:r.Quantity,desc:"Maximum number of connected peers."},peers:{type:Array,desc:"List of all peers with details."}},example:{active:0,connected:25,max:25,peers:[new a.Dummy("{ ... }, { ... }, { ... }, ...")]}}},netPort:{section:c,desc:"Returns network port the node is listening on.",params:[],returns:{type:r.Quantity,desc:"Port number",example:30303}},newVault:{section:d,desc:"Creates a new vault with the given name & password",params:[{type:String,desc:"Vault name",example:"StrongVault"},{type:String,desc:"Password",example:"p@55w0rd"}],returns:{type:Boolean,desc:"True on success",example:!0}},nextNonce:{section:c,desc:"Returns next available nonce for transaction from given account. Includes pending block and transaction queue.",params:[{type:r.Address,desc:"Account",example:"0x00A289B43e1e4825DbEDF2a78ba60a640634DC40"}],returns:{type:r.Quantity,desc:"Next valid nonce",example:(0,a.fromDecimal)(12)}},nodeName:{section:u,desc:"Returns node name, set when starting parity with `--identity NAME`.",params:[],returns:{type:String,desc:"Node name.",example:"Doge"}},openVault:{section:d,desc:"Opens a vault with the given name & password",params:[{type:String,desc:"Vault name",example:"StrongVault"},{type:String,desc:"Password",example:"p@55w0rd"}],returns:{type:Boolean,desc:"True on success",example:!0}},pendingTransactions:{section:c,desc:"Returns a list of transactions currently in the queue.",params:[],returns:{type:Array,desc:"Transactions ordered by priority",details:r.TransactionResponse.details,example:[{blockHash:null,blockNumber:null,creates:null,from:"0xee3ea02840129123d5397f91be0391283a25bc7d",gas:"0x23b58",gasPrice:"0xba43b7400",hash:"0x160b3c30ab1cf5871083f97ee1cee3901cfba3b0a2258eb337dd20a7e816b36e",input:"0x095ea7b3000000000000000000000000bf4ed7b27f1d666546e30d74d50d173d20bca75400000000000000000000000000002643c948210b4bd99244ccd64d5555555555",condition:{block:1},networkId:1,nonce:"0x5",publicKey:"0x96157302dade55a1178581333e57d60ffe6fdf5a99607890456a578b4e6b60e335037d61ed58aa4180f9fd747dc50d44a7924aa026acbfb988b5062b629d6c36",r:"0x92e8beb19af2bad0511d516a86e77fa73004c0811b2173657a55797bdf8558e1",raw:"0xf8aa05850ba43b740083023b5894bb9bc244d798123fde783fcc1c72d3bb8c18941380b844095ea7b3000000000000000000000000bf4ed7b27f1d666546e30d74d50d173d20bca75400000000000000000000000000002643c948210b4bd99244ccd64d555555555526a092e8beb19af2bad0511d516a86e77fa73004c0811b2173657a55797bdf8558e1a062b4d4d125bbcb9c162453bc36ca156537543bb4414d59d1805d37fb63b351b8",s:"0x62b4d4d125bbcb9c162453bc36ca156537543bb4414d59d1805d37fb63b351b8",standardV:"0x1",to:"0xbb9bc244d798123fde783fcc1c72d3bb8c189413",transactionIndex:null,v:"0x26",value:"0x0"},new a.Dummy("{ ... }"),new a.Dummy("{ ... }")]}},pendingTransactionsStats:{section:c,desc:"Returns propagation stats for transactions in the queue.",params:[],returns:{type:Object,desc:"mapping of transaction hashes to stats.",example:{"0xdff37270050bcfba242116c745885ce2656094b2d3a0f855649b4a0ee9b5d15a":{firstSeen:3032066,propagatedTo:{"0x605e04a43b1156966b3a3b66b980c87b7f18522f7f712035f84576016be909a2798a438b2b17b1a8c58db314d88539a77419ca4be36148c086900fba487c9d39":1,"0xbab827781c852ecf52e7c8bf89b806756329f8cbf8d3d011e744a0bc5e3a0b0e1095257af854f3a8415ebe71af11b0c537f8ba797b25972f519e75339d6d1864":1}}}}},removeTransaction:{section:c,desc:"Removes transaction from local transaction pool. Scheduled transactions and not-propagated transactions are safe to remove, removal of other transactions may have no effect though.",params:[{type:r.Hash,desc:"Hash of transaction to remove.",example:"0x2547ea3382099c7c76d33dd468063b32d41016aacb02cbd51ebc14ff5d2b6a43"}],returns:{type:Object,desc:"Removed transaction or `null`.",details:r.TransactionResponse.details,example:[{blockHash:null,blockNumber:null,creates:null,from:"0xee3ea02840129123d5397f91be0391283a25bc7d",gas:"0x23b58",gasPrice:"0xba43b7400",hash:"0x160b3c30ab1cf5871083f97ee1cee3901cfba3b0a2258eb337dd20a7e816b36e",input:"0x095ea7b3000000000000000000000000bf4ed7b27f1d666546e30d74d50d173d20bca75400000000000000000000000000002643c948210b4bd99244ccd64d5555555555",condition:{block:1},networkId:1,nonce:"0x5",publicKey:"0x96157302dade55a1178581333e57d60ffe6fdf5a99607890456a578b4e6b60e335037d61ed58aa4180f9fd747dc50d44a7924aa026acbfb988b5062b629d6c36",r:"0x92e8beb19af2bad0511d516a86e77fa73004c0811b2173657a55797bdf8558e1",raw:"0xf8aa05850ba43b740083023b5894bb9bc244d798123fde783fcc1c72d3bb8c18941380b844095ea7b3000000000000000000000000bf4ed7b27f1d666546e30d74d50d173d20bca75400000000000000000000000000002643c948210b4bd99244ccd64d555555555526a092e8beb19af2bad0511d516a86e77fa73004c0811b2173657a55797bdf8558e1a062b4d4d125bbcb9c162453bc36ca156537543bb4414d59d1805d37fb63b351b8",s:"0x62b4d4d125bbcb9c162453bc36ca156537543bb4414d59d1805d37fb63b351b8",standardV:"0x1",to:"0xbb9bc244d798123fde783fcc1c72d3bb8c189413",transactionIndex:null,v:"0x26",value:"0x0"},new a.Dummy("{ ... }"),new a.Dummy("{ ... }")]}},phraseToAddress:{section:o,desc:"Converts a secret phrase into the corresponding address.",params:[{type:String,desc:"The phrase",example:"stylus outing overhand dime radial seducing harmless uselessly evasive tastiness eradicate imperfect"}],returns:{type:r.Address,desc:"Corresponding address",example:"0x004385d8be6140e6f889833f68b51e17b6eacb29"}},releasesInfo:{desc:"returns a ReleasesInfo object describing the current status of releases",params:[],returns:{type:Object,desc:"Information on current releases, `null` if not available.",details:{fork:{type:r.Quantity,desc:"Block number representing the last known fork for this chain, which may be in the future."},minor:{type:Object,desc:"Information about latest minor update to current version, `null` if this is the latest minor version."},track:{type:Object,desc:"Information about the latest release in this track."}},example:null}},registryAddress:{section:c,desc:"The address for the global registry.",params:[],returns:{type:r.Address,desc:"The registry address.",example:"0x3bb2bb5c6c9c9b7f4ef430b47dc7e026310042ea"}},rpcSettings:{section:c,desc:"Provides current JSON-RPC API settings.",params:[],returns:{type:Object,desc:"JSON-RPC settings.",details:{enabled:{type:Boolean,desc:"`true` if JSON-RPC is enabled (default)."},interface:{type:String,desc:"Interface on which JSON-RPC is running."},port:{type:r.Quantity,desc:"Port on which JSON-RPC is running."}},example:{enabled:!0,interface:"local",port:8545}}},setVaultMeta:{section:d,desc:"Sets the metadata for a specific vault",params:[{type:String,desc:"Vault name",example:"StrongVault"},{type:String,desc:"The metadata as a JSON string",example:'{"passwordHint":"something"}'}],returns:{type:Boolean,desc:"The boolean call result, true on success",example:!0}},transactionsLimit:{section:i,desc:"Changes limit for transactions in queue.",params:[],returns:{type:r.Quantity,desc:"Current max number of transactions in queue.",format:"outputBigNumberFormatter",example:1024}},unsignedTransactionsCount:{section:c,desc:"Returns number of unsigned transactions when running with Trusted Signer. Error otherwise",params:[],returns:{type:r.Quantity,desc:"Number of unsigned transactions",example:0}},versionInfo:{desc:"Provides information about running version of Parity.",params:[],returns:{type:Object,desc:"Information on current version.",details:{hash:{type:r.Hash,desc:"20 Byte hash of the current build."},track:{type:String,desc:'Track on which it was released, one of: `"stable"`, `"beta"`, `"nightly"`, `"testing"`, `"null"` (unknown or self-built).'},version:{type:Object,desc:"Version number composed of `major`, `minor` and `patch` integers."}},example:{hash:"0x2ae8b4ca278dd7b896090366615fef81cbbbc0e0",track:"null",version:{major:1,minor:6,patch:0}}}},listAccounts:{desc:"Returns all addresses if Fat DB is enabled (`--fat-db`), `null` otherwise.",section:o,params:[{type:r.Quantity,desc:"Integer number of addresses to display in a batch.",example:5},{type:r.Address,desc:"20 Bytes - Offset address from which the batch should start in order, or `null`.",example:null},{type:r.BlockNumber,desc:"integer block number, or the string `'latest'`, `'earliest'` or `'pending'`.",format:"inputDefaultBlockNumberFormatter",optional:!0}],returns:{type:Array,desc:"Requested number of `Address`es or `null` if Fat DB is not enabled.",example:["0x7205b1bb42edce6e0ced37d1fd0a9d684f5a860f","0x98a2559a814c300b274325c92df1682ae0d344e3","0x2d7a7d0adf9c5f9073fefbdc18188bd23c68b633","0xd4bb3284201db8b03c06d8a3057dd32538e3dfda","0xa6396904b08aa31300ca54278b8e066ecc38e4a0"]}},listStorageKeys:{desc:"Returns all storage keys of the given address (first parameter) if Fat DB is enabled (`--fat-db`), `null` otherwise.",params:[{type:r.Address,desc:"20 Bytes - Account for which to retrieve the storage keys.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:r.Quantity,desc:"Integer number of addresses to display in a batch.",example:5},{type:r.Hash,desc:"32 Bytes - Offset storage key from which the batch should start in order, or `null`.",example:null},{type:r.BlockNumber,desc:"integer block number, or the string `'latest'`, `'earliest'` or `'pending'`.",format:"inputDefaultBlockNumberFormatter",optional:!0}],returns:{type:Array,desc:"Requested number of 32 byte long storage keys for the given account or `null` if Fat DB is not enabled.",example:["0xaab1a2940583e213f1d57a3ed358d5f5406177c8ff3c94516bfef3ea62d00c22","0xba8469eca5641b186e86cbc5343dfa5352df04feb4564cd3cf784f213aaa0319","0x769d107ba778d90205d7a159e820c41c20bf0783927b426c602561e74b7060e5","0x0289865bcaa58f7f5bf875495ac7af81e3630eb88a3a0358407c7051a850624a","0x32e0536502b9163b0a1ce6e3aabd95fa4a2bf602bbde1b9118015648a7a51178"]}},encryptMessage:{desc:"Encrypt some data with a public key under ECIES.",params:[{type:r.Hash,desc:"Public EC key generated with `secp256k1` curve, truncated to the last 64 bytes.",example:"0xD219959D466D666060284733A80DDF025529FEAA8337169540B3267B8763652A13D878C40830DD0952639A65986DBEC611CF2171A03CFDC37F5A40537068AA4F"},{type:r.Data,desc:"The message to encrypt.",example:(0,a.withComment)("0x68656c6c6f20776f726c64",'"hello world"')}],returns:{type:r.Data,desc:"Encrypted message.",example:"0x0491debeec5e874a453f84114c084c810708ebcb553b02f1b8c05511fa4d1a25fa38eb49a32c815e2b39b7bcd56d66648bf401067f15413dae683084ca7b01e21df89be9ec4bc6c762a657dbd3ba1540f557e366681b53629bb2c02e1443b5c0adc6b68f3442c879456d6a21ec9ed07847fa3c3ecb73ec7ee9f8e32d"}},futureTransactions:{desc:"Returns all future transactions from transaction queue.",params:[],returns:{type:Array,desc:"Transaction list.",details:r.TransactionResponse.details,example:[{hash:"0x80de421cd2e7e46824a91c343ca42b2ff339409eef09e2d9d73882462f8fce31",nonce:"0x1",blockHash:null,blockNumber:null,transactionIndex:null,from:"0xe53e478c072265e2d9a99a4301346700c5fbb406",to:"0xf5d405530dabfbd0c1cab7a5812f008aa5559adf",value:"0x2efc004ac03a4996",gasPrice:"0x4a817c800",gas:"0x5208",input:"0x",creates:null,raw:"0xf86c018504a817c80082520894f5d405530dabfbd0c1cab7a5812f008aa5559adf882efc004ac03a49968025a0b40c6967a7e8bbdfd99a25fd306b9ef23b80e719514aeb7ddd19e2303d6fc139a06bf770ab08119e67dc29817e1412a0e3086f43da308c314db1b3bca9fb6d32bd",publicKey:"0xeba33fd74f06236e17475bc5b6d1bac718eac048350d77d3fc8fbcbd85782a57c821255623c4fd1ebc9d555d07df453b2579ee557b7203fc256ca3b3401e4027",networkId:1,standardV:"0x0",v:"0x25",r:"0xb40c6967a7e8bbdfd99a25fd306b9ef23b80e719514aeb7ddd19e2303d6fc139",s:"0x6bf770ab08119e67dc29817e1412a0e3086f43da308c314db1b3bca9fb6d32bd",condition:{block:1}},new a.Dummy("{ ... }, { ... }, ...")]}},allAccountsInfo:{subdoc:f,desc:"returns a map of accounts as an object.",params:[],returns:{type:Array,desc:"Account metadata.",details:{name:{type:String,desc:"Account name."},meta:{type:String,desc:"Encoded JSON string the defines additional account metadata."},uuid:{type:String,desc:"The account Uuid, or `null` if not available/unknown/not applicable."}},example:{"0x00a289b43e1e4825dbedf2a78ba60a640634dc40":{meta:"{}",name:"Foobar",uuid:"0b9e70e6-235b-682d-a15c-2a98c71b3945"}}}},newAccountFromPhrase:{subdoc:f,desc:"Creates a new account from a recovery phrase.",params:[{type:String,desc:"Recovery phrase.",example:"stylus outing overhand dime radial seducing harmless uselessly evasive tastiness eradicate imperfect"},{type:String,desc:"Password.",example:"hunter2"}],returns:{type:r.Address,desc:"The created address.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}},newAccountFromSecret:{subdoc:f,desc:"Creates a new account from a private ethstore secret key.",params:[{type:r.Data,desc:"Secret, 32-byte hex",example:"0x1db2c0cf57505d0f4a3d589414f0a0025ca97421d2cd596a9486bc7e2cd2bf8b"},{type:String,desc:"Password",example:"hunter2"}],returns:{type:r.Address,desc:"The created address.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}},newAccountFromWallet:{subdoc:f,desc:"Creates a new account from a JSON import",params:[{type:String,desc:"Wallet JSON encoded to a string.",example:'{"id": "9c62e86b-3cf9...", ...}'},{type:String,desc:"Password.",example:"hunter2"}],returns:{type:r.Address,desc:"The created address",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}},setAccountName:{subdoc:f,desc:"Sets a name for the account",params:[{type:r.Address,desc:"Address",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Name",example:"Foobar"}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},setAccountMeta:{subdoc:f,desc:"Sets metadata for the account",params:[{type:r.Address,desc:"Address",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Metadata (JSON encoded)",example:'{"foo":"bar"}'}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},testPassword:{subdoc:f,desc:"Checks if a given password can unlock a given account, without actually unlocking it.",params:[{type:r.Address,desc:"Account to test.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Password to test.",example:"hunter2"}],returns:{type:Boolean,desc:"`true` if the account and password are valid.",example:!0}},changePassword:{subdoc:f,desc:"Change the password for a given account.",params:[{type:r.Address,desc:"Address of the account.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Old password.",example:"hunter2"},{type:String,desc:"New password.",example:"bazqux5"}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},killAccount:{subdoc:f,desc:"Deletes an account.",params:[{type:r.Address,desc:"The account to remove.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Account password.",example:"hunter2"}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},removeAddress:{subdoc:f,desc:"Removes an address from the addressbook.",params:[{type:r.Address,desc:"The address to remove.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}],returns:{type:Boolean,desc:"`true`if the call was successful.",example:!0}},setDappAddresses:{subdoc:f,desc:"Sets the available addresses for a dapp. When provided with non-empty list changes the default account as well.",params:[{type:String,desc:"Dapp Id.",example:"web"},{type:Array,desc:"Array of available accounts available to the dapp or `null` for default list.",example:["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},getDappAddresses:{subdoc:f,desc:"Returns the list of accounts available to a specific dapp.",params:[{type:String,desc:"Dapp Id.",example:"web"}],returns:{type:Array,desc:"The list of available accounts.",example:["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]}},setDappDefaultAddress:{subdoc:f,desc:"Changes dapp default address. Does not affect other accounts exposed for this dapp, but default account will always be retured as the first one.",params:[{type:String,desc:"Dapp Id.",example:"web"},{type:r.Address,desc:"Default Address.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}],returns:{type:Boolean,desc:"`true` if the call was successful",example:!0}},getDappDefaultAddress:{subdoc:f,desc:"Returns a default account available to a specific dapp.",params:[{type:String,desc:"Dapp Id.",example:"web"}],returns:{type:r.Address,desc:"Default Address",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}},setNewDappsAddresses:{subdoc:f,desc:"Sets the list of accounts available to new dapps.",params:[{type:Array,desc:"List of accounts available by default or `null` for all accounts.",example:["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]}],returns:{type:Boolean,desc:"`true` if the call was successful",example:!0}},getNewDappsAddresses:{subdoc:f,desc:"Returns the list of accounts available to a new dapps.",params:[],returns:{type:Array,desc:"The list of available accounts, can be `null`.",example:["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]}},setNewDappsDefaultAddress:{subdoc:f,desc:"Changes global default address. This setting may be overriden for a specific dapp.",params:[{type:r.Address,desc:"Default Address.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}],returns:{type:Boolean,desc:"`true` if the call was successful",example:!0}},getNewDappsDefaultAddress:{subdoc:f,desc:"Returns a default account available to dapps.",params:[],returns:{type:r.Address,desc:"Default Address",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}},listRecentDapps:{subdoc:f,desc:"Returns a list of the most recent active dapps.",params:[],returns:{type:Array,desc:"Array of Dapp Ids.",example:["web"]}},importGethAccounts:{subdoc:f,desc:"Imports a list of accounts from Geth.",params:[{type:Array,desc:"List of the Geth addresses to import.",example:["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]}],returns:{type:Array,desc:"Array of the imported addresses.",example:["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]}},listGethAccounts:{subdoc:f,desc:"Returns a list of the accounts available from Geth.",params:[],returns:{type:Array,desc:"20 Bytes addresses owned by the client.",example:["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]}},deriveAddressHash:{subdoc:f,desc:"Derive new address from given account address using specific hash.",params:[{type:r.Address,desc:"Account address to derive from.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Password to the account.",example:"hunter2"},{type:Object,desc:'Derivation hash and type (`soft` or `hard`). E.g. `{ hash: "0x123..123", type: "hard" }`.',example:{hash:"0x2547ea3382099c7c76d33dd468063b32d41016aacb02cbd51ebc14ff5d2b6a43",type:"hard"}},{type:Boolean,desc:"Flag indicating if the account should be saved.",example:!1}],returns:{type:r.Address,desc:"20 Bytes new derived address.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}},deriveAddressIndex:{subdoc:f,desc:"Derive new address from given account address using hierarchical derivation (sequence of 32-bit integer indices).",params:[{type:r.Address,desc:"Account address to export.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Password to the account.",example:"hunter2"},{type:Array,desc:'Hierarchical derivation sequence of index and type (`soft` or `hard`). E.g. `[{index:1,type:"hard"},{index:2,type:"soft"}]`.',example:[{index:1,type:"hard"},{index:2,type:"soft"}]},{type:Boolean,desc:"Flag indicating if the account should be saved.",example:!1}],returns:{type:r.Address,desc:"20 Bytes new derived address.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}},exportAccount:{subdoc:f,desc:"Returns a standard wallet file for given account if password matches.",params:[{type:r.Address,desc:"Account address to export.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Password to the account.",example:"hunter2"}],returns:{type:Object,desc:"Standard wallet JSON.",example:{address:"0042e5d2a662eeaca8a7e828c174f98f35d8925b",crypto:{cipher:"aes-128-ctr",cipherparams:{iv:"a1c6ff99070f8032ca1c4e8add006373"},ciphertext:"df27e3db64aa18d984b6439443f73660643c2d119a6f0fa2fa9a6456fc802d75",kdf:"pbkdf2",kdfparams:{c:10240,dklen:32,prf:"hmac-sha256",salt:"ddc325335cda5567a1719313e73b4842511f3e4a837c9658eeb78e51ebe8c815"},mac:"3dc888ae79cbb226ff9c455669f6cf2d79be72120f2298f6cb0d444fddc0aa3d"},id:"6a186c80-7797-cff2-bc2e-7c1d6a6cc76e",meta:'{"passwordHint":"parity-export-test","timestamp":1490017814987}',name:"parity-export-test",version:3}}},setMinGasPrice:{subdoc:l,desc:"Changes minimal gas price for transaction to be accepted to the queue.",params:[{type:r.Quantity,desc:"Minimal gas price",format:"utils.toHex",example:(0,a.fromDecimal)(1e3)}],returns:{type:Boolean,desc:"whether the call was successful",example:!0}},setGasFloorTarget:{subdoc:l,desc:"Sets a new gas floor target for mined blocks..",params:[{type:r.Quantity,desc:"(default: `0x0`) Gas floor target.",format:"utils.toHex",example:(0,a.fromDecimal)(1e3)}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},setGasCeilTarget:{subdoc:l,desc:"Sets new gas ceiling target for mined blocks.",params:[{type:r.Quantity,desc:"(default: `0x0`) Gas ceiling target.",format:"utils.toHex",example:(0,a.fromDecimal)(1e10)}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},setExtraData:{subdoc:l,desc:"Changes extra data for newly mined blocks",params:[{type:r.Data,desc:"Extra Data",format:"utils.toHex",example:"0x"}],returns:{type:Boolean,desc:"whether the call was successful",example:!0}},setAuthor:{subdoc:l,desc:"Changes author (coinbase) for mined blocks.",params:[{type:r.Address,desc:"20 Bytes - Address",format:"inputAddressFormatter",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},setMaxTransactionGas:{subdoc:l,desc:"Sets the maximum amount of gas a single transaction may consume.",params:[{type:r.Quantity,desc:"Gas amount",format:"utils.toHex",example:(0,a.fromDecimal)(1e5)}],returns:{type:Boolean,desc:"`true` if the call was successful.",example:!0}},setTransactionsLimit:{subdoc:l,desc:"Changes limit for transactions in queue.",params:[{type:r.Quantity,desc:"New Limit",format:"utils.toHex",example:(0,a.fromDecimal)(1e3)}],returns:{type:Boolean,desc:"whether the call was successful",example:!0}},addReservedPeer:{subdoc:l,desc:"Add a reserved peer.",params:[{type:String,desc:"Enode address",example:"enode://a979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c@22.99.55.44:7770"}],returns:{type:Boolean,desc:"`true` if successful.",example:!0}},removeReservedPeer:{subdoc:l,desc:"Remove a reserved peer.",params:[{type:String,desc:"Encode address",example:"enode://a979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c@22.99.55.44:7770"}],returns:{type:Boolean,desc:"`true` if successful.",example:!0}},dropNonReservedPeers:{subdoc:l,desc:"Set Parity to drop all non-reserved peers. To restore default behavior call [parity_acceptNonReservedPeers](#parity_acceptnonreservedpeers).",params:[],returns:{type:Boolean,desc:"`true` if successful.",example:!0}},acceptNonReservedPeers:{subdoc:l,desc:"Set Parity to accept non-reserved peers (default behavior).",params:[],returns:{type:Boolean,desc:"`true` if successful.",example:!0}},hashContent:{subdoc:l,desc:"Creates a hash of a file at a given URL.",params:[{type:String,desc:"The url of the content.",example:"https://raw.githubusercontent.com/paritytech/parity/master/README.md"}],returns:{type:r.Hash,desc:"The SHA-3 hash of the content.",example:"0x2547ea3382099c7c76d33dd468063b32d41016aacb02cbd51ebc14ff5d2b6a43"}},setChain:{subdoc:l,desc:"Sets the network spec file Parity is using.",params:[{type:String,desc:'Chain spec name, one of: "foundation", "ropsten", "morden", "kovan", "olympic", "classic", "dev", "expanse" or a filename.',example:"foundation"}],returns:{type:Boolean,desc:"`true` if the call succeeded.",example:!0}},setMode:{subdoc:l,desc:"Changes the operating mode of Parity.",params:[{type:String,desc:'The mode to set, one of:\n  * `"active"` - Parity continuously syncs the chain.\n  * `"passive"` - Parity syncs initially, then sleeps and wakes regularly to resync.\n  * `"dark"` - Parity syncs only when the RPC is active.\n  * `"offline"` - Parity doesn\'t sync.\n',example:"passive"}],returns:{type:Boolean,desc:"`true` if the call succeeded.",example:!0}},setEngineSigner:{subdoc:l,desc:"Sets an authority account for signing consensus messages. For more information check the [[Proof of Authority Chains]] page.",params:[{type:r.Address,desc:"Identifier of a valid authority account.",example:"0x407d73d8a49eeb85d32cf465507dd71d507100c1"},{type:String,desc:"Passphrase to unlock the account.",example:"hunter2"}],returns:{type:Boolean,desc:"True if the call succeeded",example:!0}},upgradeReady:{subdoc:l,desc:"Returns a ReleaseInfo object describing the release which is available for upgrade or `null` if none is available.",params:[],returns:{type:Object,desc:"Details or `null` if no new release is available.",details:{version:{type:Object,desc:"Information on the version."},is_critical:{type:Boolean,desc:"Does this release contain critical security updates?"},fork:{type:r.Quantity,desc:"The latest fork that this release can handle."},binary:{type:r.Data,desc:"Keccak-256 checksum of the release parity binary, if known.",optional:!0}},example:null}},executeUpgrade:{subdoc:l,desc:"Attempts to upgrade Parity to the version specified in [parity_upgradeReady](#parity_upgradeready).",params:[],returns:{type:Boolean,desc:"returns `true` if the upgrade to the new release was successfully executed, `false` if not.",example:!0}},postSign:{section:o,desc:"Request an arbitrary transaction to be signed by an account.",params:[{type:r.Address,desc:"Account address.",example:"0xb60e8dd61c5d32be8058bb8eb970870f07233155"},{type:r.Hash,desc:"Transaction hash.",example:"0x8cda01991ae267a539135736132f1f987e76868ce0269b7537d3aab37b7b185e"}],returns:{type:r.Quantity,desc:"The id of the request to the signer. If the account was already unlocked, returns `Hash` of the transaction instead.",example:"0x1"}},postTransaction:{section:o,desc:"Posts a transaction to the signer without waiting for the signer response.",params:[{type:r.TransactionRequest,desc:"see [`eth_sendTransaction`](JSONRPC-eth-module#eth_sendtransaction).",format:"inputCallFormatter",example:{from:"0xb60e8dd61c5d32be8058bb8eb970870f07233155",to:"0xd46e8dd67c5d32be8058bb8eb970870f07244567",gas:(0,a.fromDecimal)(30400),gasPrice:(0,a.fromDecimal)(1e13),value:(0,a.fromDecimal)(2441406250),data:"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",condition:{block:354221,time:new Date}}}],returns:{type:r.Quantity,desc:"The id of the request to the signer. If the account was already unlocked, returns `Hash` of the transaction instead.",format:"utils.toDecimal",example:"0x1"}},checkRequest:{section:o,desc:"Get the the transaction hash of the request previously posted to [`parity_postTransaction`](#parity_posttransaction) or [`parity_postSign`](#parity_postsign). Will return a JSON-RPC error if the request was rejected.",params:[{type:r.Quantity,desc:"The id of the request sent to the signer.",example:"0x1"}],returns:{type:r.Hash,desc:"32 Bytes - the transaction hash or `null` if the request hasn't been signed yet.",example:"0xde8dfd9642f7eeef12402f2a560dbf40921b4f0bda01fb84709b9d71f6c181be"}},decryptMessage:{desc:"Decrypt a message encrypted with a ECIES public key.",params:[{type:r.Address,desc:"Account which can decrypt the message.",example:"0x00a329c0648769a73afac7f9381e08fb43dbea72"},{type:r.Data,desc:"Encrypted message.",example:"0x0405afee7fa2ab3e48c27b00d543389270cb7267fc191ca1311f297255a83cbe8d77a4ba135b51560700a582924fa86d2b19029fcb50d2b68d60a7df1ba81df317a19c8def117f2b9cf8c2618be0e3f146a5272fb9e5528719d2d7a1bd91fa620901cffa756305c79c093e7af30fa3c1587029421351c34a7c1e5a2b"}],returns:{type:r.Data,desc:"Decrypted message.",example:(0,a.withComment)("0x68656c6c6f20776f726c64","hello world")}},signMessage:{desc:"Sign the hashed message bytes with the given account.",params:[{type:r.Address,desc:"Account which signs the message.",example:"0xc171033d5cbff7175f29dfd3a63dda3d6f8f385e"},{type:String,desc:"Passphrase to unlock the account.",example:"password1"},{type:r.Data,desc:"Hashed message.",example:"0xbc36789e7a1e281436464229828f817d6612f7b477d66591ff96a9e064bcc98a"}],returns:{type:r.Data,desc:"Message signature.",example:"0x1d9e33a8cf8bfc089a172bca01da462f9e359c6cb1b0f29398bc884e4d18df4f78588aee4fb5cc067ca62d2abab995e0bba29527be6ac98105b0320020a2efaf00"}},wsUrl:{section:u,desc:"Returns the hostname and the port of WebSockets/Signer server, error if not enabled.",params:[],returns:{type:String,desc:"The hostname and port number",example:"localhost:8546"}},composeTransaction:{desc:"Given partial transaction request produces transaction with all fields filled in. Such transaction can be then signed externally.",params:[{type:r.TransactionRequest,desc:"see [`eth_sendTransaction`](JSONRPC-eth-module#eth_sendtransaction).",format:"inputCallFormatter",example:{from:"0xb60e8dd61c5d32be8058bb8eb970870f07233155",to:"0xd46e8dd67c5d32be8058bb8eb970870f07244567",value:(0,a.fromDecimal)(2441406250)}}],returns:{type:Object,desc:"Transaction object (same as the parameter) with missing optional fields filled in by defaults.",example:{condition:null,data:"0x",from:"0xb60e8dd61c5d32be8058bb8eb970870f07233155",gas:"0xe57e0",gasPrice:"0x4a817c800",nonce:"0x0",to:"0xd46e8dd67c5d32be8058bb8eb970870f07244567",value:"0x9184e72a"}}},getBlockHeaderByNumber:{desc:"Get block header. Same as [`eth_getBlockByNumber`](JSONRPC-eth-module#eth_getblockbynumber) but without uncles and transactions.",params:[{type:r.BlockNumber,desc:"integer of a block number, or the string `'earliest'`, `'latest'` or `'pending'`, as in the [default block parameter](#the-default-block-parameter).",example:(0,a.fromDecimal)(436)}],returns:{type:Object,desc:"Block header",example:{author:"0xbb7b8287f3f0a933474a79eae42cbca977791171",difficulty:"0x4ea3f27bc",extraData:"0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",gasLimit:"0x1388",gasUsed:"0x0",hash:"0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",logsBloom:"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",miner:"0xbb7b8287f3f0a933474a79eae42cbca977791171",mixHash:"0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",nonce:"0x689056015818adbe",number:"0x1b4",parentHash:"0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",receiptsRoot:"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",sealFields:["0xa04fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843","0x88689056015818adbe"],sha3Uncles:"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",size:"0x21b",stateRoot:"0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",timestamp:"0x55ba467c",transactionsRoot:"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"}}},cidV0:{desc:"Compute a v0 IPFS Content ID from protobuf encoded bytes.",params:[{type:r.Data,desc:"to encode.",example:"0x666f6f626172"}],returns:{type:String,desc:"Base58 encoded CID",example:"QmSbFjqjd6nFwNHqsBCC7SK8GShGcayLUEtysJjNGhZAnC"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(77),a=n(76);t.default={generateAuthorizationToken:{desc:"Generates a new authorization token.",params:[],returns:{type:String,desc:"The new authorization token.",example:"bNGY-iIPB-j7zK-RSYZ"}},generateWebProxyAccessToken:{desc:"Generates a new web proxy access token.",params:[],returns:{type:String,desc:"The new web proxy access token.",example:"MOWm0tEJjwthDiTU"}},requestsToConfirm:{desc:"Returns a list of the transactions awaiting authorization.",params:[],returns:{type:Array,desc:"A list of the outstanding transactions.",example:new a.Dummy("[ ... ]")}},confirmRequest:{desc:"Confirm a request in the signer queue",params:[{type:r.Quantity,desc:"The request id.",example:(0,a.fromDecimal)(1)},{type:Object,desc:"Modify the transaction before confirmation.",details:{gasPrice:{type:r.Quantity,desc:"Modify the gas price provided by the sender in Wei.",optional:!0},gas:{type:r.Quantity,desc:"Gas provided by the sender in Wei.",optional:!0},condition:{type:Object,desc:"Condition for scheduled transaction. Can be either an integer block number `{ block: 1 }` or UTC timestamp (in seconds) `{ timestamp: 1491290692 }`.",optional:!0}},example:{}},{type:String,desc:"The account password",example:"hunter2"}],returns:{type:Object,desc:"The status of the confirmation, depending on the request type.",example:{}}},confirmRequestRaw:{desc:"Confirm a request in the signer queue providing signed request.",params:[{type:r.Quantity,desc:"Integer - The request id",example:(0,a.fromDecimal)(1)},{type:r.Data,desc:"Signed request (RLP encoded transaction)",example:"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],returns:{type:Object,desc:"The status of the confirmation, depending on the request type.",example:{}}},confirmRequestWithToken:{desc:"Confirm specific request with rolling token.",params:[{type:r.Quantity,desc:"The request id.",example:(0,a.fromDecimal)(1)},{type:Object,desc:"Modify the transaction before confirmation.",details:{gasPrice:{type:r.Quantity,desc:"Modify the gas price provided by the sender in Wei.",optional:!0},gas:{type:r.Quantity,desc:"Gas provided by the sender in Wei.",optional:!0},condition:{type:Object,desc:"Conditional submission of the transaction. Can be either an integer block number `{ block: 1 }` or UTC timestamp (in seconds) `{ time: 1491290692 }` or `null`.",optional:!0}},example:{}},{type:String,desc:"Password (initially) or a token returned by the previous call.",example:"hunter2"}],returns:{type:Object,desc:"Status.",details:{result:{type:Object,desc:"The status of the confirmation, depending on the request type."},token:{type:String,desc:"Token used to authenticate the next request."}},example:{result:new a.Dummy("{ ... }"),token:"cAF2w5LE7XUZ3v3N"}}},rejectRequest:{desc:"Rejects a request in the signer queue",params:[{type:r.Quantity,desc:"Integer - The request id",example:(0,a.fromDecimal)(1)}],returns:{type:Boolean,desc:"The status of the rejection",example:!0}},signerEnabled:{nodoc:"Not present in Rust code",desc:"Returns whether signer is enabled/disabled.",params:[],returns:{type:Boolean,desc:"`true` when enabled, `false` when disabled.",example:!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(77),a=n(76),o="Transaction-Trace Filtering",s="Ad-hoc Tracing";t.default=(0,a.withPreamble)("\n\nThe trace module is for getting a deeper insight into transaction processing.\nIt includes two sets of calls; the transaction trace filtering API and the ad-hoc tracing API.\n\n**Note:** In order to use these API Parity must be fully synced with flags `$ parity --tracing on`.\n\n## The Ad-hoc Tracing API\n\nThe ad-hoc tracing API allows you to perform a number of different diagnostics on calls or transactions,\neither historical ones from the chain or hypothetical ones not yet mined. The diagnostics include:\n\n- `trace` **Transaction trace**. An equivalent trace to that in the previous section.\n- `vmTrace` **Virtual Machine execution trace**. Provides a full trace of the VM's state throughout the execution of the transaction, including for any subcalls.\n- `stateDiff` **State difference**. Provides information detailing all altered portions of the Ethereum state made due to the execution of the transaction.\n\nThere are three means of providing a transaction to execute; either providing the same information as when making\na call using `eth_call` (see `trace_call`), through providing raw, signed, transaction data as when using\n`eth_sendRawTransaction` (see `trace_rawTransaction`) or simply a transaction hash for a previously mined\ntransaction (see `trace_replayTransaction`). In the latter case, your node must be in archive mode or the\ntransaction should be within the most recent 1000 blocks.\n\n## The Transaction-Trace Filtering API\n\nThese APIs allow you to get a full *externality* trace on any transaction executed throughout the Parity chain.\nUnlike the log filtering API, you are able to search and filter based only upon address information.\nInformation returned includes the execution of all `CREATE`s, `SUICIDE`s and all variants of `CALL` together\nwith input data, output data, gas usage, amount transferred and the success status of each individual action.\n\n### `traceAddress` field\n\nThe `traceAddress` field of all returned traces, gives the exact location in the call trace [index in root,\nindex in first `CALL`, index in second `CALL`, ...].\n\ni.e. if the trace is:\n```\nA\n  CALLs B\n    CALLs G\n  CALLs C\n    CALLs G\n```\nthen it should look something like:\n\n`[ {A: []}, {B: [0]}, {G: [0, 0]}, {C: [1]}, {G: [1, 0]} ]`\n\n",{block:{section:o,desc:"Returns traces created at given block.",params:[{type:r.BlockNumber,desc:"Integer of a block number, or the string `'earliest'`, `'latest'` or `'pending'`.",example:(0,a.fromDecimal)(3068185)}],returns:{type:Array,desc:"Block traces.",example:[{action:{callType:"call",from:"0xaa7b131dc60b80d3cf5e59b5a21a666aa039c951",gas:"0x0",input:"0x",to:"0xd40aba8166a212d6892125f079c33e6f5ca19814",value:"0x4768d7effc3fbe"},blockHash:"0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",blockNumber:3068185,result:{gasUsed:"0x0",output:"0x"},subtraces:0,traceAddress:[],transactionHash:"0x07da28d752aba3b9dd7060005e554719c6205c8a3aea358599fc9b245c52f1f6",transactionPosition:0,type:"call"},new a.Dummy("...")]}},filter:{section:o,desc:"Returns traces matching given filter",params:[{type:Object,desc:"The filter object",details:{fromBlock:{type:r.BlockNumber,desc:"From this block.",optional:!0},toBlock:{type:r.BlockNumber,desc:"To this block.",optional:!0},fromAddress:{type:Array,desc:"Sent from these addresses.",optional:!0},toAddress:{type:r.Address,desc:"Sent to these addresses.",optional:!0}},example:{fromBlock:(0,a.fromDecimal)(3068100),toBlock:(0,a.fromDecimal)(3068200),toAddress:["0x8bbB73BCB5d553B5A556358d27625323Fd781D37"]}}],returns:{type:Array,desc:"Traces matching given filter",example:[{action:{callType:"call",from:"0x32be343b94f860124dc4fee278fdcbd38c102d88",gas:"0x4c40d",input:"0x",to:"0x8bbb73bcb5d553b5a556358d27625323fd781d37",value:"0x3f0650ec47fd240000"},blockHash:"0x86df301bcdd8248d982dbf039f09faf792684e1aeee99d5b58b77d620008b80f",blockNumber:3068183,result:{gasUsed:"0x0",output:"0x"},subtraces:0,traceAddress:[],transactionHash:"0x3321a7708b1083130bd78da0d62ead9f6683033231617c9d268e2c7e3fa6c104",transactionPosition:3,type:"call"},new a.Dummy("...")]}},get:{section:o,desc:"Returns trace at given position.",params:[{type:r.Hash,desc:"Transaction hash.",example:"0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3"},{type:Array,desc:"Index positions of the traces.",example:["0x0"]}],returns:{type:Object,desc:"Trace object",example:{action:{callType:"call",from:"0x1c39ba39e4735cb65978d4db400ddd70a72dc750",gas:"0x13e99",input:"0x16c72721",to:"0x2bd2326c993dfaef84f696526064ff22eba5b362",value:"0x0"},blockHash:"0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",blockNumber:3068185,result:{gasUsed:"0x183",output:"0x0000000000000000000000000000000000000000000000000000000000000001"},subtraces:0,traceAddress:[0],transactionHash:"0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",transactionPosition:2,type:"call"}}},transaction:{section:o,desc:"Returns all traces of given transaction",params:[{type:r.Hash,desc:"Transaction hash",example:"0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3"}],returns:{type:Array,desc:"Traces of given transaction",example:[{action:{callType:"call",from:"0x1c39ba39e4735cb65978d4db400ddd70a72dc750",gas:"0x13e99",input:"0x16c72721",to:"0x2bd2326c993dfaef84f696526064ff22eba5b362",value:"0x0"},blockHash:"0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",blockNumber:3068185,result:{gasUsed:"0x183",output:"0x0000000000000000000000000000000000000000000000000000000000000001"},subtraces:0,traceAddress:[0],transactionHash:"0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",transactionPosition:2,type:"call"},new a.Dummy("...")]}},call:{section:s,desc:"Executes the given call and returns a number of possible traces for it.",params:[{type:r.CallRequest,desc:"Call options, same as `eth_call`.",example:new a.Dummy("{ ... }")},{type:Array,desc:'Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.',example:["trace"]},{type:r.BlockNumber,optional:!0,desc:"Integer of a block number, or the string `'earliest'`, `'latest'` or `'pending'`."}],returns:{type:Array,desc:"Block traces",example:{output:"0x",stateDiff:null,trace:[{action:new a.Dummy("{ ... }"),result:{gasUsed:"0x0",output:"0x"},subtraces:0,traceAddress:[],type:"call"}],vmTrace:null}}},rawTransaction:{section:s,desc:"Traces a call to `eth_sendRawTransaction` without making the call, returning the traces",params:[{type:r.Data,desc:"Raw transaction data.",example:"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"},{type:Array,desc:'Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.',example:["trace"]}],returns:{type:Object,desc:"Block traces.",example:{output:"0x",stateDiff:null,trace:[{action:new a.Dummy("{ ... }"),result:{gasUsed:"0x0",output:"0x"},subtraces:0,traceAddress:[],type:"call"}],vmTrace:null}}},replayTransaction:{section:s,desc:"Replays a transaction, returning the traces.",params:[{type:r.Hash,desc:"Transaction hash.",example:"0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f"},{type:Array,desc:'Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.',example:["trace"]}],returns:{type:Object,desc:"Block traces.",example:{output:"0x",stateDiff:null,trace:[{action:new a.Dummy("{ ... }"),result:{gasUsed:"0x0",output:"0x"},subtraces:0,traceAddress:[],type:"call"}],vmTrace:null}}}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e._extend.Method,n=function(e,n){return(0,s.default)(e).map(function(r){return new t({name:r,call:n+"_{method}",params:e[r].params.length})})};return[{property:"parity",methods:n(c.default,"parity"),properties:[]},{property:"signer",methods:n(d.default,"signer"),properties:[]},{property:"trace",methods:n(f.default,"trace"),properties:[]}]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(26),s=r(o);t.default=a;var i=n(188),c=r(i),u=n(189),d=r(u),l=n(190),f=r(l)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(34),n(36),n(35),n(4))}(0,function(e){return function(){var t=e,n=t.lib,r=n.BlockCipher,a=t.algo,o=[],s=[],i=[],c=[],u=[],d=[],l=[],f=[],p=[],h=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var n=0,r=0,t=0;t<256;t++){var a=r^r<<1^r<<2^r<<3^r<<4;a=a>>>8^255&a^99,o[n]=a,s[a]=n;var m=e[n],b=e[m],y=e[b],g=257*e[a]^16843008*a;i[n]=g<<24|g>>>8,c[n]=g<<16|g>>>16,u[n]=g<<8|g>>>24,d[n]=g;var g=16843009*y^65537*b^257*m^16843008*n;l[a]=g<<24|g>>>8,f[a]=g<<16|g>>>16,p[a]=g<<8|g>>>24,h[a]=g,n?(n=m^e[e[e[y^m]]],r^=e[e[r]]):n=r=1}}();var m=[0,1,2,4,8,16,32,64,128,27,54],b=a.AES=r.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,n=e.sigBytes/4,r=this._nRounds=n+6,a=4*(r+1),s=this._keySchedule=[],i=0;i<a;i++)if(i<n)s[i]=t[i];else{var c=s[i-1];i%n?n>6&&i%n==4&&(c=o[c>>>24]<<24|o[c>>>16&255]<<16|o[c>>>8&255]<<8|o[255&c]):(c=c<<8|c>>>24,c=o[c>>>24]<<24|o[c>>>16&255]<<16|o[c>>>8&255]<<8|o[255&c],c^=m[i/n|0]<<24),s[i]=s[i-n]^c}for(var u=this._invKeySchedule=[],d=0;d<a;d++){var i=a-d;if(d%4)var c=s[i];else var c=s[i-4];u[d]=d<4||i<=4?c:l[o[c>>>24]]^f[o[c>>>16&255]]^p[o[c>>>8&255]]^h[o[255&c]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,i,c,u,d,o)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,l,f,p,h,s);var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,a,o,s,i){for(var c=this._nRounds,u=e[t]^n[0],d=e[t+1]^n[1],l=e[t+2]^n[2],f=e[t+3]^n[3],p=4,h=1;h<c;h++){var m=r[u>>>24]^a[d>>>16&255]^o[l>>>8&255]^s[255&f]^n[p++],b=r[d>>>24]^a[l>>>16&255]^o[f>>>8&255]^s[255&u]^n[p++],y=r[l>>>24]^a[f>>>16&255]^o[u>>>8&255]^s[255&d]^n[p++],g=r[f>>>24]^a[u>>>16&255]^o[d>>>8&255]^s[255&l]^n[p++];u=m,d=b,l=y,f=g}var m=(i[u>>>24]<<24|i[d>>>16&255]<<16|i[l>>>8&255]<<8|i[255&f])^n[p++],b=(i[d>>>24]<<24|i[l>>>16&255]<<16|i[f>>>8&255]<<8|i[255&u])^n[p++],y=(i[l>>>24]<<24|i[f>>>16&255]<<16|i[u>>>8&255]<<8|i[255&d])^n[p++],g=(i[f>>>24]<<24|i[u>>>16&255]<<16|i[d>>>8&255]<<8|i[255&l])^n[p++];e[t]=m,e[t+1]=b,e[t+2]=y,e[t+3]=g},keySize:8});t.AES=r._createHelper(b)}(),e.AES})},function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){return function(){function t(e){return e<<8&4278255360|e>>>8&16711935}var n=e,r=n.lib,a=r.WordArray,o=n.enc;o.Utf16=o.Utf16BE={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],a=0;a<n;a+=2){var o=t[a>>>2]>>>16-a%4*8&65535;r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>1]|=e.charCodeAt(r)<<16-r%2*16;return a.create(n,2*t)}};o.Utf16LE={stringify:function(e){for(var n=e.words,r=e.sigBytes,a=[],o=0;o<r;o+=2){var s=t(n[o>>>2]>>>16-o%4*8&65535);a.push(String.fromCharCode(s))}return a.join("")},parse:function(e){for(var n=e.length,r=[],o=0;o<n;o++)r[o>>>1]|=t(e.charCodeAt(o)<<16-o%2*16);return a.create(r,2*n)}}}(),e.enc.Utf16})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return function(t){var n=e,r=n.lib,a=r.CipherParams,o=n.enc,s=o.Hex,i=n.format;i.Hex={stringify:function(e){return e.ciphertext.toString(s)},parse:function(e){var t=s.parse(e);return a.create({ciphertext:t})}}}(),e.format.Hex})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(64),n(249),n(246),n(34),n(36),n(91),n(126),n(265),n(128),n(266),n(127),n(264),n(90),n(260),n(35),n(4),n(250),n(252),n(251),n(254),n(253),n(255),n(256),n(257),n(259),n(258),n(247),n(245),n(267),n(263),n(262),n(261))}(0,function(e){return e})},function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){return function(){if("function"==typeof ArrayBuffer){var t=e,n=t.lib,r=n.WordArray,a=r.init;(r.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,n=[],r=0;r<t;r++)n[r>>>2]|=e[r]<<24-r%4*8;a.call(this,n,t)}else a.apply(this,arguments)}).prototype=r}}(),e.lib.WordArray})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.mode.CFB=function(){function t(e,t,n,r){var a=this._iv;if(a){var o=a.slice(0);this._iv=void 0}else var o=this._prevBlock;r.encryptBlock(o,0);for(var s=0;s<n;s++)e[t+s]^=o[s]}var n=e.lib.BlockCipherMode.extend();return n.Encryptor=n.extend({processBlock:function(e,n){var r=this._cipher,a=r.blockSize;t.call(this,e,n,a,r),this._prevBlock=e.slice(n,n+a)}}),n.Decryptor=n.extend({processBlock:function(e,n){var r=this._cipher,a=r.blockSize,o=e.slice(n,n+a);t.call(this,e,n,a,r),this._prevBlock=o}}),n}(),e.mode.CFB})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.mode.CTRGladman=function(){function t(e){if(255==(e>>24&255)){var t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}function n(e){return 0===(e[0]=t(e[0]))&&(e[1]=t(e[1])),e}var r=e.lib.BlockCipherMode.extend(),a=r.Encryptor=r.extend({processBlock:function(e,t){var r=this._cipher,a=r.blockSize,o=this._iv,s=this._counter;o&&(s=this._counter=o.slice(0),this._iv=void 0),n(s);var i=s.slice(0);r.encryptBlock(i,0);for(var c=0;c<a;c++)e[t+c]^=i[c]}});return r.Decryptor=a,r}(),e.mode.CTRGladman})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.mode.CTR=function(){var t=e.lib.BlockCipherMode.extend(),n=t.Encryptor=t.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,a=this._iv,o=this._counter;a&&(o=this._counter=a.slice(0),this._iv=void 0);var s=o.slice(0);n.encryptBlock(s,0),o[r-1]=o[r-1]+1|0;for(var i=0;i<r;i++)e[t+i]^=s[i]}});return t.Decryptor=n,t}(),e.mode.CTR})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.mode.ECB=function(){var t=e.lib.BlockCipherMode.extend();return t.Encryptor=t.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),t.Decryptor=t.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),t}(),e.mode.ECB})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.mode.OFB=function(){var t=e.lib.BlockCipherMode.extend(),n=t.Encryptor=t.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,a=this._iv,o=this._keystream;a&&(o=this._keystream=a.slice(0),this._iv=void 0),n.encryptBlock(o,0);for(var s=0;s<r;s++)e[t+s]^=o[s]}});return t.Decryptor=n,t}(),e.mode.OFB})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.pad.AnsiX923={pad:function(e,t){var n=e.sigBytes,r=4*t,a=r-n%r,o=n+a-1;e.clamp(),e.words[o>>>2]|=a<<24-o%4*8,e.sigBytes+=a},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},e.pad.Ansix923})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.pad.Iso10126={pad:function(t,n){var r=4*n,a=r-t.sigBytes%r;t.concat(e.lib.WordArray.random(a-1)).concat(e.lib.WordArray.create([a<<24],1))},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},e.pad.Iso10126})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.pad.Iso97971={pad:function(t,n){t.concat(e.lib.WordArray.create([2147483648],1)),e.pad.ZeroPadding.pad(t,n)},unpad:function(t){e.pad.ZeroPadding.unpad(t),t.sigBytes--}},e.pad.Iso97971})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.pad.NoPadding={pad:function(){},unpad:function(){}},e.pad.NoPadding})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(4))}(0,function(e){return e.pad.ZeroPadding={pad:function(e,t){var n=4*t;e.clamp(),e.sigBytes+=n-(e.sigBytes%n||n)},unpad:function(e){for(var t=e.words,n=e.sigBytes-1;!(t[n>>>2]>>>24-n%4*8&255);)n--;e.sigBytes=n+1}},e.pad.ZeroPadding})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(91),n(90))}(0,function(e){return function(){var t=e,n=t.lib,r=n.Base,a=n.WordArray,o=t.algo,s=o.SHA1,i=o.HMAC,c=o.PBKDF2=r.extend({cfg:r.extend({keySize:4,hasher:s,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=i.create(n.hasher,e),o=a.create(),s=a.create([1]),c=o.words,u=s.words,d=n.keySize,l=n.iterations;c.length<d;){var f=r.update(t).finalize(s);r.reset();for(var p=f.words,h=p.length,m=f,b=1;b<l;b++){m=r.finalize(m),r.reset();for(var y=m.words,g=0;g<h;g++)p[g]^=y[g]}o.concat(f),u[0]++}return o.sigBytes=4*d,o}});t.PBKDF2=function(e,t,n){return c.create(n).compute(e,t)}}(),e.PBKDF2})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(34),n(36),n(35),n(4))}(0,function(e){return function(){function t(){for(var e=this._X,t=this._C,n=0;n<8;n++)i[n]=t[n];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<i[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<i[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<i[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<i[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<i[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<i[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<i[6]>>>0?1:0)|0,this._b=t[7]>>>0<i[7]>>>0?1:0;for(var n=0;n<8;n++){var r=e[n]+t[n],a=65535&r,o=r>>>16,s=((a*a>>>17)+a*o>>>15)+o*o,u=((4294901760&r)*r|0)+((65535&r)*r|0);c[n]=s^u}e[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,e[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,e[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,e[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,e[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,e[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,e[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,e[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}var n=e,r=n.lib,a=r.StreamCipher,o=n.algo,s=[],i=[],c=[],u=o.RabbitLegacy=a.extend({_doReset:function(){var e=this._key.words,n=this.cfg.iv,r=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],a=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];this._b=0;for(var o=0;o<4;o++)t.call(this);for(var o=0;o<8;o++)a[o]^=r[o+4&7];if(n){var s=n.words,i=s[0],c=s[1],u=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),d=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),l=u>>>16|4294901760&d,f=d<<16|65535&u;a[0]^=u,a[1]^=l,a[2]^=d,a[3]^=f,a[4]^=u,a[5]^=l,a[6]^=d,a[7]^=f;for(var o=0;o<4;o++)t.call(this)}},_doProcessBlock:function(e,n){var r=this._X;t.call(this),s[0]=r[0]^r[5]>>>16^r[3]<<16,s[1]=r[2]^r[7]>>>16^r[5]<<16,s[2]=r[4]^r[1]>>>16^r[7]<<16,s[3]=r[6]^r[3]>>>16^r[1]<<16;for(var a=0;a<4;a++)s[a]=16711935&(s[a]<<8|s[a]>>>24)|4278255360&(s[a]<<24|s[a]>>>8),e[n+a]^=s[a]},blockSize:4,ivSize:2});n.RabbitLegacy=a._createHelper(u)}(),e.RabbitLegacy})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(34),n(36),n(35),n(4))}(0,function(e){return function(){function t(){for(var e=this._X,t=this._C,n=0;n<8;n++)i[n]=t[n];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<i[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<i[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<i[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<i[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<i[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<i[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<i[6]>>>0?1:0)|0,this._b=t[7]>>>0<i[7]>>>0?1:0;for(var n=0;n<8;n++){var r=e[n]+t[n],a=65535&r,o=r>>>16,s=((a*a>>>17)+a*o>>>15)+o*o,u=((4294901760&r)*r|0)+((65535&r)*r|0);c[n]=s^u}e[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,e[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,e[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,e[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,e[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,e[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,e[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,e[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}var n=e,r=n.lib,a=r.StreamCipher,o=n.algo,s=[],i=[],c=[],u=o.Rabbit=a.extend({_doReset:function(){for(var e=this._key.words,n=this.cfg.iv,r=0;r<4;r++)e[r]=16711935&(e[r]<<8|e[r]>>>24)|4278255360&(e[r]<<24|e[r]>>>8);var a=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],o=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];this._b=0;for(var r=0;r<4;r++)t.call(this);for(var r=0;r<8;r++)o[r]^=a[r+4&7];if(n){var s=n.words,i=s[0],c=s[1],u=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),d=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),l=u>>>16|4294901760&d,f=d<<16|65535&u;o[0]^=u,o[1]^=l,o[2]^=d,o[3]^=f,o[4]^=u,o[5]^=l,o[6]^=d,o[7]^=f;for(var r=0;r<4;r++)t.call(this)}},_doProcessBlock:function(e,n){var r=this._X;t.call(this),s[0]=r[0]^r[5]>>>16^r[3]<<16,s[1]=r[2]^r[7]>>>16^r[5]<<16,s[2]=r[4]^r[1]>>>16^r[7]<<16,s[3]=r[6]^r[3]>>>16^r[1]<<16;for(var a=0;a<4;a++)s[a]=16711935&(s[a]<<8|s[a]>>>24)|4278255360&(s[a]<<24|s[a]>>>8),e[n+a]^=s[a]},blockSize:4,ivSize:2});n.Rabbit=a._createHelper(u)}(),e.Rabbit})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(34),n(36),n(35),n(4))}(0,function(e){return function(){function t(){for(var e=this._S,t=this._i,n=this._j,r=0,a=0;a<4;a++){t=(t+1)%256,n=(n+e[t])%256;var o=e[t];e[t]=e[n],e[n]=o,r|=e[(e[t]+e[n])%256]<<24-8*a}return this._i=t,this._j=n,r}var n=e,r=n.lib,a=r.StreamCipher,o=n.algo,s=o.RC4=a.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes,r=this._S=[],a=0;a<256;a++)r[a]=a;for(var a=0,o=0;a<256;a++){var s=a%n,i=t[s>>>2]>>>24-s%4*8&255;o=(o+r[a]+i)%256;var c=r[a];r[a]=r[o],r[o]=c}this._i=this._j=0},_doProcessBlock:function(e,n){e[n]^=t.call(this)},keySize:8,ivSize:0});n.RC4=a._createHelper(s);var i=o.RC4Drop=s.extend({cfg:s.cfg.extend({drop:192}),_doReset:function(){s._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)t.call(this)}});n.RC4Drop=a._createHelper(i)}(),e.RC4})},function(e,t,n){!function(r,a){e.exports=t=a(n(2))}(0,function(e){return function(t){function n(e,t,n){return e^t^n}function r(e,t,n){return e&t|~e&n}function a(e,t,n){return(e|~t)^n}function o(e,t,n){return e&n|t&~n}function s(e,t,n){return e^(t|~n)}function i(e,t){return e<<t|e>>>32-t}var c=e,u=c.lib,d=u.WordArray,l=u.Hasher,f=c.algo,p=d.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),h=d.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),m=d.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),b=d.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),y=d.create([0,1518500249,1859775393,2400959708,2840853838]),g=d.create([1352829926,1548603684,1836072691,2053994217,0]),v=f.RIPEMD160=l.extend({_doReset:function(){this._hash=d.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var c=0;c<16;c++){var u=t+c,d=e[u];e[u]=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8)}var l,f,v,x,w,_,k,A,B,S,T=this._hash.words,C=y.words,D=g.words,P=p.words,O=h.words,F=m.words,R=b.words;_=l=T[0],k=f=T[1],A=v=T[2],B=x=T[3],S=w=T[4];for(var I,c=0;c<80;c+=1)I=l+e[t+P[c]]|0,I+=c<16?n(f,v,x)+C[0]:c<32?r(f,v,x)+C[1]:c<48?a(f,v,x)+C[2]:c<64?o(f,v,x)+C[3]:s(f,v,x)+C[4],I|=0,I=i(I,F[c]),I=I+w|0,l=w,w=x,x=i(v,10),v=f,f=I,I=_+e[t+O[c]]|0,I+=c<16?s(k,A,B)+D[0]:c<32?o(k,A,B)+D[1]:c<48?a(k,A,B)+D[2]:c<64?r(k,A,B)+D[3]:n(k,A,B)+D[4],I|=0,I=i(I,R[c]),I=I+S|0,_=S,S=B,B=i(A,10),A=k,k=I;I=T[1]+v+B|0,T[1]=T[2]+x+S|0,T[2]=T[3]+w+_|0,T[3]=T[4]+l+k|0,T[4]=T[0]+f+A|0,T[0]=I},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;t[r>>>5]|=128<<24-r%32,t[14+(r+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),e.sigBytes=4*(t.length+1),this._process();for(var a=this._hash,o=a.words,s=0;s<5;s++){var i=o[s];o[s]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}return a},clone:function(){var e=l.clone.call(this);return e._hash=this._hash.clone(),e}});c.RIPEMD160=l._createHelper(v),c.HmacRIPEMD160=l._createHmacHelper(v)}(Math),e.RIPEMD160})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(126))}(0,function(e){return function(){var t=e,n=t.lib,r=n.WordArray,a=t.algo,o=a.SHA256,s=a.SHA224=o.extend({_doReset:function(){this._hash=new r.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var e=o._doFinalize.call(this);return e.sigBytes-=4,e}});t.SHA224=o._createHelper(s),t.HmacSHA224=o._createHmacHelper(s)}(),e.SHA224})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(64),n(128))}(0,function(e){return function(){var t=e,n=t.x64,r=n.Word,a=n.WordArray,o=t.algo,s=o.SHA512,i=o.SHA384=s.extend({_doReset:function(){this._hash=new a.init([new r.init(3418070365,3238371032),new r.init(1654270250,914150663),new r.init(2438529370,812702999),new r.init(355462360,4144912697),new r.init(1731405415,4290775857),new r.init(2394180231,1750603025),new r.init(3675008525,1694076839),new r.init(1203062813,3204075428)])},_doFinalize:function(){var e=s._doFinalize.call(this);return e.sigBytes-=16,e}});t.SHA384=s._createHelper(i),t.HmacSHA384=s._createHmacHelper(i)}(),e.SHA384})},function(e,t,n){!function(r,a,o){e.exports=t=a(n(2),n(34),n(36),n(35),n(4))}(0,function(e){return function(){function t(e,t){var n=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=n,this._lBlock^=n<<e}function n(e,t){var n=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=n,this._rBlock^=n<<e}var r=e,a=r.lib,o=a.WordArray,s=a.BlockCipher,i=r.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],u=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],d=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],l=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],p=i.DES=s.extend({_doReset:function(){for(var e=this._key,t=e.words,n=[],r=0;r<56;r++){var a=c[r]-1;n[r]=t[a>>>5]>>>31-a%32&1}for(var o=this._subKeys=[],s=0;s<16;s++){for(var i=o[s]=[],l=d[s],r=0;r<24;r++)i[r/6|0]|=n[(u[r]-1+l)%28]<<31-r%6,i[4+(r/6|0)]|=n[28+(u[r+24]-1+l)%28]<<31-r%6;i[0]=i[0]<<1|i[0]>>>31;for(var r=1;r<7;r++)i[r]=i[r]>>>4*(r-1)+3;i[7]=i[7]<<5|i[7]>>>27}for(var f=this._invSubKeys=[],r=0;r<16;r++)f[r]=o[15-r]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._subKeys)},decryptBlock:function(e,t){this._doCryptBlock(e,t,this._invSubKeys)},_doCryptBlock:function(e,r,a){this._lBlock=e[r],this._rBlock=e[r+1],t.call(this,4,252645135),t.call(this,16,65535),n.call(this,2,858993459),n.call(this,8,16711935),t.call(this,1,1431655765);for(var o=0;o<16;o++){for(var s=a[o],i=this._lBlock,c=this._rBlock,u=0,d=0;d<8;d++)u|=l[d][((c^s[d])&f[d])>>>0];this._lBlock=c,this._rBlock=i^u}var p=this._lBlock;this._lBlock=this._rBlock,this._rBlock=p,t.call(this,1,1431655765),n.call(this,8,16711935),n.call(this,2,858993459),t.call(this,16,65535),t.call(this,4,252645135),e[r]=this._lBlock,e[r+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});r.DES=s._createHelper(p);var h=i.TripleDES=s.extend({_doReset:function(){var e=this._key,t=e.words;this._des1=p.createEncryptor(o.create(t.slice(0,2))),this._des2=p.createEncryptor(o.create(t.slice(2,4))),this._des3=p.createEncryptor(o.create(t.slice(4,6)))},encryptBlock:function(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)},decryptBlock:function(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)},keySize:6,ivSize:2,blockSize:2});r.TripleDES=s._createHelper(h)}(),e.TripleDES})},,,,function(e,t,n){e.exports=n.p+"dev.web3.html"},,,function(e,t){e.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},function(e,t){e.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},function(e,t){e.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},function(e,t){e.exports={version:"0.17.0-alpha"}},,,,,,,,,,,,,,,,,,function(e,t,n){var r=n(306);"undefined"!=typeof window&&void 0===window.Web3&&(window.Web3=r),e.exports=r},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputInt,this._outputFormatter=r.formatOutputAddress};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/address(\[([0-9]*)\])?/)},o.prototype.staticPartLength=function(e){return 32*this.staticArrayLength(e)},e.exports=o},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputBool,this._outputFormatter=r.formatOutputBool};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/^bool(\[([0-9]*)\])*$/)},o.prototype.staticPartLength=function(e){return 32*this.staticArrayLength(e)},e.exports=o},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputBytes,this._outputFormatter=r.formatOutputBytes};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/)},o.prototype.staticPartLength=function(e){var t=e.match(/^bytes([0-9]*)/);return parseInt(t[1])*this.staticArrayLength(e)},e.exports=o},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputDynamicBytes,this._outputFormatter=r.formatOutputDynamicBytes};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/^bytes(\[([0-9]*)\])*$/)},o.prototype.staticPartLength=function(e){return 32*this.staticArrayLength(e)},o.prototype.isDynamicType=function(){return!0},e.exports=o},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputInt,this._outputFormatter=r.formatOutputInt};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/^int([0-9]*)?(\[([0-9]*)\])*$/)},o.prototype.staticPartLength=function(e){return 32*this.staticArrayLength(e)},e.exports=o},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputReal,this._outputFormatter=r.formatOutputReal};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/real([0-9]*)?(\[([0-9]*)\])?/)},o.prototype.staticPartLength=function(e){return 32*this.staticArrayLength(e)},e.exports=o},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputString,this._outputFormatter=r.formatOutputString};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/^string(\[([0-9]*)\])*$/)},o.prototype.staticPartLength=function(e){return 32*this.staticArrayLength(e)},o.prototype.isDynamicType=function(){return!0},e.exports=o},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputInt,this._outputFormatter=r.formatOutputUInt};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/)},o.prototype.staticPartLength=function(e){return 32*this.staticArrayLength(e)},e.exports=o},function(e,t,n){var r=n(8),a=n(14),o=function(){this._inputFormatter=r.formatInputReal,this._outputFormatter=r.formatOutputUReal};o.prototype=new a({}),o.prototype.constructor=o,o.prototype.isType=function(e){return!!e.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/)},o.prototype.staticPartLength=function(e){return 32*this.staticArrayLength(e)},e.exports=o},function(e,t,n){"use strict";"undefined"==typeof XMLHttpRequest?t.XMLHttpRequest={}:t.XMLHttpRequest=XMLHttpRequest},function(e,t,n){function r(e){this._requestManager=new a(e),this.currentProvider=e,this.eth=new s(this),this.db=new i(this),this.shh=new c(this),this.net=new u(this),this.personal=new d(this),this.settings=new l,this.version={api:f.version},this.providers={HttpProvider:g,IpcProvider:v},this._extend=m(this),this._extend({properties:w()})}var a=n(320),o=n(68),s=n(315),i=n(314),c=n(318),u=n(316),d=n(317),l=n(321),f=n(277),p=n(5),h=n(43),m=n(310),b=n(308),y=n(45),g=n(312),v=n(313),x=n(46);r.providers={HttpProvider:g,IpcProvider:v},r.prototype.setProvider=function(e){this._requestManager.setProvider(e),this.currentProvider=e},r.prototype.reset=function(e){this._requestManager.reset(e),this.settings=new l},r.prototype.BigNumber=x,r.prototype.toHex=p.toHex,r.prototype.toAscii=p.toAscii,r.prototype.toUtf8=p.toUtf8,r.prototype.fromAscii=p.fromAscii,r.prototype.fromUtf8=p.fromUtf8,r.prototype.toDecimal=p.toDecimal,r.prototype.fromDecimal=p.fromDecimal,r.prototype.toBigNumber=p.toBigNumber,r.prototype.toWei=p.toWei,r.prototype.fromWei=p.fromWei,r.prototype.isAddress=p.isAddress,r.prototype.isChecksumAddress=p.isChecksumAddress,r.prototype.toChecksumAddress=p.toChecksumAddress,r.prototype.isIBAN=p.isIBAN,r.prototype.sha3=function(e,t){return"0x"+h(e,t)},r.prototype.fromICAP=function(e){return new o(e).address()};var w=function(){return[new y({name:"version.node",getter:"web3_clientVersion"}),new y({name:"version.network",getter:"net_version",inputFormatter:p.toDecimal}),new y({name:"version.ethereum",getter:"eth_protocolVersion",inputFormatter:p.toDecimal}),new y({name:"version.whisper",getter:"shh_version",inputFormatter:p.toDecimal})]};r.prototype.isConnected=function(){return this.currentProvider&&this.currentProvider.isConnected()},r.prototype.createBatch=function(){return new b(this)},e.exports=r},function(e,t,n){var r=n(43),a=n(134),o=n(15),s=n(5),i=n(67),c=n(69),u=function(e,t,n){this._requestManager=e,this._json=t,this._address=n};u.prototype.encode=function(e){e=e||{};var t={};return["fromBlock","toBlock"].filter(function(t){return void 0!==e[t]}).forEach(function(n){t[n]=o.inputBlockNumberFormatter(e[n])}),t.address=this._address,t},u.prototype.decode=function(e){e.data=e.data||"",e.topics=e.topics||[];var t=e.topics[0].slice(2),n=this._json.filter(function(e){return t===r(s.transformToFullName(e))})[0];return n?new a(this._requestManager,n,this._address).decode(e):(console.warn("cannot find event for log"),e)},u.prototype.execute=function(e,t){s.isFunction(arguments[arguments.length-1])&&(t=arguments[arguments.length-1],1===arguments.length&&(e=null));var n=this.encode(e),r=this.decode.bind(this);return new i(this._requestManager,n,c.eth(),r,t)},u.prototype.attachToContract=function(e){var t=this.execute.bind(this);e.allEvents=t},e.exports=u},function(e,t,n){var r=n(135),a=n(44),o=function(e){this.requestManager=e._requestManager,this.requests=[]};o.prototype.add=function(e){this.requests.push(e)},o.prototype.execute=function(){var e=this.requests;this.requestManager.sendBatch(e,function(t,n){n=n||[],e.map(function(e,t){return n[t]||{}}).forEach(function(t,n){if(e[n].callback){if(!r.isValidResponse(t))return e[n].callback(a.InvalidResponse(t));e[n].callback(null,e[n].format?e[n].format(t.result):t.result)}})})},e.exports=o},function(e,t,n){var r=n(5),a=n(93),o=n(134),s=n(311),i=n(307),c=function(e,t){return e.filter(function(e){return"constructor"===e.type&&e.inputs.length===t.length}).map(function(e){return e.inputs.map(function(e){return e.type})}).map(function(e){return a.encodeParams(e,t)})[0]||""},u=function(e){e.abi.filter(function(e){return"function"===e.type}).map(function(t){return new s(e._eth,t,e.address)}).forEach(function(t){t.attachToContract(e)})},d=function(e){var t=e.abi.filter(function(e){return"event"===e.type});new i(e._eth._requestManager,t,e.address).attachToContract(e),t.map(function(t){return new o(e._eth._requestManager,t,e.address)}).forEach(function(t){t.attachToContract(e)})},l=function(e,t){var n=0,r=!1,a=e._eth.filter("latest",function(o){if(!o&&!r)if(++n>50){if(a.stopWatching(),r=!0,!t)throw new Error("Contract transaction couldn't be found after 50 blocks");t(new Error("Contract transaction couldn't be found after 50 blocks"))}else e._eth.getTransactionReceipt(e.transactionHash,function(n,o){o&&!r&&e._eth.getCode(o.contractAddress,function(n,s){if(!r&&s)if(a.stopWatching(),r=!0,s.length>3)e.address=o.contractAddress,u(e),d(e),t&&t(null,e);else{if(!t)throw new Error("The contract code couldn't be stored, please check your gas amount.");t(new Error("The contract code couldn't be stored, please check your gas amount."))}})})})},f=function(e,t){this.eth=e,this.abi=t,this.new=function(){var e,t=new p(this.eth,this.abi),n={},a=Array.prototype.slice.call(arguments);r.isFunction(a[a.length-1])&&(e=a.pop());var o=a[a.length-1];r.isObject(o)&&!r.isArray(o)&&(n=a.pop());var s=c(this.abi,a);if(n.data+=s,e)this.eth.sendTransaction(n,function(n,r){n?e(n):(t.transactionHash=r,e(null,t),l(t,e))});else{var i=this.eth.sendTransaction(n);t.transactionHash=i,l(t)}return t},this.new.getData=this.getData.bind(this)};f.prototype.at=function(e,t){var n=new p(this.eth,this.abi,e);return u(n),d(n),t&&t(null,n),n},f.prototype.getData=function(){var e={},t=Array.prototype.slice.call(arguments),n=t[t.length-1];r.isObject(n)&&!r.isArray(n)&&(e=t.pop());var a=c(this.abi,t);return e.data+=a,e.data};var p=function(e,t,n){this._eth=e,this.transactionHash=null,this.address=n,this.abi=t};e.exports=f},function(e,t,n){var r=n(15),a=n(5),o=n(37),s=n(45),i=function(e){var t=function(t){var n;t.property?(e[t.property]||(e[t.property]={}),n=e[t.property]):n=e,t.methods&&t.methods.forEach(function(t){t.attachToObject(n),t.setRequestManager(e._requestManager)}),t.properties&&t.properties.forEach(function(t){t.attachToObject(n),t.setRequestManager(e._requestManager)})};return t.formatters=r,t.utils=a,t.Method=o,t.Property=s,t};e.exports=i},function(e,t,n){var r=n(93),a=n(5),o=n(15),s=n(43),i=function(e,t,n){this._eth=e,this._inputTypes=t.inputs.map(function(e){return e.type}),this._outputTypes=t.outputs.map(function(e){return e.type}),this._constant=t.constant,this._name=a.transformToFullName(t),this._address=n};i.prototype.extractCallback=function(e){if(a.isFunction(e[e.length-1]))return e.pop()},i.prototype.extractDefaultBlock=function(e){if(e.length>this._inputTypes.length&&!a.isObject(e[e.length-1]))return o.inputDefaultBlockNumberFormatter(e.pop())},i.prototype.toPayload=function(e){var t={};return e.length>this._inputTypes.length&&a.isObject(e[e.length-1])&&(t=e[e.length-1]),t.to=this._address,t.data="0x"+this.signature()+r.encodeParams(this._inputTypes,e),t},i.prototype.signature=function(){return s(this._name).slice(0,8)},i.prototype.unpackOutput=function(e){if(e){e=e.length>=2?e.slice(2):e;var t=r.decodeParams(this._outputTypes,e);return 1===t.length?t[0]:t}},i.prototype.call=function(){var e=Array.prototype.slice.call(arguments).filter(function(e){return void 0!==e}),t=this.extractCallback(e),n=this.extractDefaultBlock(e),r=this.toPayload(e);if(!t){var a=this._eth.call(r,n);return this.unpackOutput(a)}var o=this;this._eth.call(r,n,function(e,n){t(e,o.unpackOutput(n))})},i.prototype.sendTransaction=function(){var e=Array.prototype.slice.call(arguments).filter(function(e){return void 0!==e}),t=this.extractCallback(e),n=this.toPayload(e);if(!t)return this._eth.sendTransaction(n);this._eth.sendTransaction(n,t)},i.prototype.estimateGas=function(){var e=Array.prototype.slice.call(arguments),t=this.extractCallback(e),n=this.toPayload(e);if(!t)return this._eth.estimateGas(n);this._eth.estimateGas(n,t)},i.prototype.getData=function(){var e=Array.prototype.slice.call(arguments);return this.toPayload(e).data},i.prototype.displayName=function(){return a.extractDisplayName(this._name)},i.prototype.typeName=function(){return a.extractTypeName(this._name)},i.prototype.request=function(){var e=Array.prototype.slice.call(arguments),t=this.extractCallback(e),n=this.toPayload(e),r=this.unpackOutput.bind(this);return{method:this._constant?"eth_call":"eth_sendTransaction",callback:t,params:[n],format:r}},i.prototype.execute=function(){return this._constant?this.call.apply(this,Array.prototype.slice.call(arguments)):this.sendTransaction.apply(this,Array.prototype.slice.call(arguments))},i.prototype.attachToContract=function(e){var t=this.execute.bind(this);t.request=this.request.bind(this),t.call=this.call.bind(this),t.sendTransaction=this.sendTransaction.bind(this),t.estimateGas=this.estimateGas.bind(this),t.getData=this.getData.bind(this);var n=this.displayName();e[n]||(e[n]=t),e[n][this.typeName()]=t},e.exports=i},function(e,t,n){"use strict";var r,a=n(44);r="undefined"!=typeof window&&window.XMLHttpRequest?window.XMLHttpRequest:n(305).XMLHttpRequest;var o=function(e){this.host=e||"http://localhost:8545"};o.prototype.prepareRequest=function(e){var t=new r;return t.open("POST",this.host,e),t.setRequestHeader("Content-Type","application/json"),t},o.prototype.send=function(e){var t=this.prepareRequest(!1);try{t.send(JSON.stringify(e))}catch(e){throw a.InvalidConnection(this.host)}var n=t.responseText;try{n=JSON.parse(n)}catch(e){throw a.InvalidResponse(t.responseText)}return n},o.prototype.sendAsync=function(e,t){var n=this.prepareRequest(!0);n.onreadystatechange=function(){if(4===n.readyState){var e=n.responseText,r=null;try{e=JSON.parse(e)}catch(e){r=a.InvalidResponse(n.responseText)}t(r,e)}};try{n.send(JSON.stringify(e))}catch(e){t(a.InvalidConnection(this.host))}},o.prototype.isConnected=function(){try{return this.send({id:9999999999,jsonrpc:"2.0",method:"net_listening",params:[]}),!0}catch(e){return!1}},e.exports=o},function(e,t,n){"use strict";var r=n(5),a=n(44),o=function(e,t){var n=this;this.responseCallbacks={},this.path=e,this.connection=t.connect({path:this.path}),this.connection.on("error",function(e){console.error("IPC Connection Error",e),n._timeout()}),this.connection.on("end",function(){n._timeout()}),this.connection.on("data",function(e){n._parseResponse(e.toString()).forEach(function(e){var t=null;r.isArray(e)?e.forEach(function(e){n.responseCallbacks[e.id]&&(t=e.id)}):t=e.id,n.responseCallbacks[t]&&(n.responseCallbacks[t](null,e),delete n.responseCallbacks[t])})})};o.prototype._parseResponse=function(e){var t=this,n=[];return e.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach(function(e){t.lastChunk&&(e=t.lastChunk+e);var r=null;try{r=JSON.parse(e)}catch(n){return t.lastChunk=e,clearTimeout(t.lastChunkTimeout),void(t.lastChunkTimeout=setTimeout(function(){throw t._timeout(),a.InvalidResponse(e)},15e3))}clearTimeout(t.lastChunkTimeout),t.lastChunk=null,r&&n.push(r)}),n},o.prototype._addResponseCallback=function(e,t){var n=e.id||e[0].id,r=e.method||e[0].method;this.responseCallbacks[n]=t,this.responseCallbacks[n].method=r},o.prototype._timeout=function(){for(var e in this.responseCallbacks)this.responseCallbacks.hasOwnProperty(e)&&(this.responseCallbacks[e](a.InvalidConnection("on IPC")),delete this.responseCallbacks[e])},o.prototype.isConnected=function(){var e=this;return e.connection.writable||e.connection.connect({path:e.path}),!!this.connection.writable},o.prototype.send=function(e){if(this.connection.writeSync){var t;this.connection.writable||this.connection.connect({path:this.path});var n=this.connection.writeSync(JSON.stringify(e));try{t=JSON.parse(n)}catch(e){throw a.InvalidResponse(n)}return t}throw new Error('You tried to send "'+e.method+'" synchronously. Synchronous requests are not supported by the IPC provider.')},o.prototype.sendAsync=function(e,t){this.connection.writable||this.connection.connect({path:this.path}),this.connection.write(JSON.stringify(e)),this._addResponseCallback(e,t)},e.exports=o},function(e,t,n){var r=n(37),a=function(e){this._requestManager=e._requestManager;var t=this;o().forEach(function(n){n.attachToObject(t),n.setRequestManager(e._requestManager)})},o=function(){return[new r({name:"putString",call:"db_putString",params:3}),new r({name:"getString",call:"db_getString",params:2}),new r({name:"putHex",call:"db_putHex",params:3}),new r({name:"getHex",call:"db_getHex",params:2})]};e.exports=a},function(e,t,n){"use strict";function r(e){this._requestManager=e._requestManager;var t=this;w().forEach(function(e){e.attachToObject(t),e.setRequestManager(t._requestManager)}),_().forEach(function(e){e.attachToObject(t),e.setRequestManager(t._requestManager)}),this.iban=h,this.sendIBANTransaction=m.bind(null,this)}var a=n(15),o=n(5),s=n(37),i=n(45),c=n(66),u=n(309),d=n(69),l=n(67),f=n(322),p=n(319),h=n(68),m=n(323),b=function(e){return o.isString(e[0])&&0===e[0].indexOf("0x")?"eth_getBlockByHash":"eth_getBlockByNumber"},y=function(e){return o.isString(e[0])&&0===e[0].indexOf("0x")?"eth_getTransactionByBlockHashAndIndex":"eth_getTransactionByBlockNumberAndIndex"},g=function(e){return o.isString(e[0])&&0===e[0].indexOf("0x")?"eth_getUncleByBlockHashAndIndex":"eth_getUncleByBlockNumberAndIndex"},v=function(e){return o.isString(e[0])&&0===e[0].indexOf("0x")?"eth_getBlockTransactionCountByHash":"eth_getBlockTransactionCountByNumber"},x=function(e){return o.isString(e[0])&&0===e[0].indexOf("0x")?"eth_getUncleCountByBlockHash":"eth_getUncleCountByBlockNumber"};Object.defineProperty(r.prototype,"defaultBlock",{get:function(){return c.defaultBlock},set:function(e){return c.defaultBlock=e,e}}),Object.defineProperty(r.prototype,"defaultAccount",{get:function(){return c.defaultAccount},set:function(e){return c.defaultAccount=e,e}});var w=function(){var e=new s({name:"getBalance",call:"eth_getBalance",params:2,inputFormatter:[a.inputAddressFormatter,a.inputDefaultBlockNumberFormatter],outputFormatter:a.outputBigNumberFormatter}),t=new s({name:"getStorageAt",call:"eth_getStorageAt",params:3,inputFormatter:[null,o.toHex,a.inputDefaultBlockNumberFormatter]}),n=new s({name:"getCode",call:"eth_getCode",params:2,inputFormatter:[a.inputAddressFormatter,a.inputDefaultBlockNumberFormatter]}),r=new s({name:"getBlock",call:b,params:2,inputFormatter:[a.inputBlockNumberFormatter,function(e){return!!e}],outputFormatter:a.outputBlockFormatter}),i=new s({name:"getUncle",call:g,params:2,inputFormatter:[a.inputBlockNumberFormatter,o.toHex],outputFormatter:a.outputBlockFormatter}),c=new s({name:"getCompilers",call:"eth_getCompilers",params:0}),u=new s({name:"getBlockTransactionCount",call:v,params:1,inputFormatter:[a.inputBlockNumberFormatter],outputFormatter:o.toDecimal}),d=new s({name:"getBlockUncleCount",call:x,params:1,inputFormatter:[a.inputBlockNumberFormatter],outputFormatter:o.toDecimal}),l=new s({name:"getTransaction",call:"eth_getTransactionByHash",params:1,outputFormatter:a.outputTransactionFormatter}),f=new s({name:"getTransactionFromBlock",call:y,params:2,inputFormatter:[a.inputBlockNumberFormatter,o.toHex],outputFormatter:a.outputTransactionFormatter}),p=new s({name:"getTransactionReceipt",call:"eth_getTransactionReceipt",params:1,outputFormatter:a.outputTransactionReceiptFormatter}),h=new s({name:"getTransactionCount",call:"eth_getTransactionCount",params:2,inputFormatter:[null,a.inputDefaultBlockNumberFormatter],outputFormatter:o.toDecimal}),m=new s({name:"sendRawTransaction",call:"eth_sendRawTransaction",params:1,inputFormatter:[null]}),w=new s({name:"sendTransaction",call:"eth_sendTransaction",params:1,inputFormatter:[a.inputTransactionFormatter]}),_=new s({name:"sign",call:"eth_sign",params:2,inputFormatter:[a.inputAddressFormatter,null]});return[e,t,n,r,i,c,u,d,l,f,p,h,new s({name:"call",call:"eth_call",params:2,inputFormatter:[a.inputCallFormatter,a.inputDefaultBlockNumberFormatter]}),new s({name:"estimateGas",call:"eth_estimateGas",params:1,inputFormatter:[a.inputCallFormatter],outputFormatter:o.toDecimal}),m,w,_,new s({name:"compile.solidity",call:"eth_compileSolidity",params:1}),new s({name:"compile.lll",call:"eth_compileLLL",params:1}),new s({name:"compile.serpent",call:"eth_compileSerpent",params:1}),new s({name:"submitWork",call:"eth_submitWork",params:3}),new s({name:"getWork",call:"eth_getWork",params:0})]},_=function(){return[new i({name:"coinbase",getter:"eth_coinbase"}),new i({name:"mining",getter:"eth_mining"}),new i({name:"hashrate",getter:"eth_hashrate",outputFormatter:o.toDecimal}),new i({name:"syncing",getter:"eth_syncing",outputFormatter:a.outputSyncingFormatter}),new i({name:"gasPrice",getter:"eth_gasPrice",outputFormatter:a.outputBigNumberFormatter}),new i({name:"accounts",getter:"eth_accounts"}),new i({name:"blockNumber",getter:"eth_blockNumber",outputFormatter:o.toDecimal}),new i({name:"protocolVersion",getter:"eth_protocolVersion"})]};r.prototype.contract=function(e){return new u(this,e)},r.prototype.filter=function(e,t){return new l(this._requestManager,e,d.eth(),a.outputLogFormatter,t)},r.prototype.namereg=function(){return this.contract(p.global.abi).at(p.global.address)},r.prototype.icapNamereg=function(){return this.contract(p.icap.abi).at(p.icap.address)},r.prototype.isSyncing=function(e){return new f(this._requestManager,e)},e.exports=r},function(e,t,n){var r=n(5),a=n(45),o=function(e){this._requestManager=e._requestManager;var t=this;s().forEach(function(n){n.attachToObject(t),n.setRequestManager(e._requestManager)})},s=function(){return[new a({name:"listening",getter:"net_listening"}),new a({name:"peerCount",getter:"net_peerCount",outputFormatter:r.toDecimal})]};e.exports=o},function(e,t,n){"use strict";function r(e){this._requestManager=e._requestManager;var t=this;i().forEach(function(e){e.attachToObject(t),e.setRequestManager(t._requestManager)}),c().forEach(function(e){e.attachToObject(t),e.setRequestManager(t._requestManager)})}var a=n(37),o=n(45),s=n(15),i=function(){return[new a({name:"newAccount",call:"personal_newAccount",params:1,inputFormatter:[null]}),new a({name:"unlockAccount",call:"personal_unlockAccount",params:3,inputFormatter:[s.inputAddressFormatter,null,null]}),new a({name:"unlockAccountAndSendTransaction",call:"personal_signAndSendTransaction",params:2,inputFormatter:[s.inputTransactionFormatter,null]}),new a({name:"lockAccount",call:"personal_lockAccount",params:1,inputFormatter:[s.inputAddressFormatter]})]},c=function(){return[new o({name:"listAccounts",getter:"personal_listAccounts"})]};e.exports=r},function(e,t,n){var r=n(37),a=n(15),o=n(67),s=n(69),i=function(e){this._requestManager=e._requestManager;var t=this;c().forEach(function(e){e.attachToObject(t),e.setRequestManager(t._requestManager)})};i.prototype.filter=function(e,t){return new o(this._requestManager,e,s.shh(),a.outputPostFormatter,t)};var c=function(){return[new r({name:"post",call:"shh_post",params:1,inputFormatter:[a.inputPostFormatter]}),new r({name:"newIdentity",call:"shh_newIdentity",params:0}),new r({name:"hasIdentity",call:"shh_hasIdentity",params:1}),new r({name:"newGroup",call:"shh_newGroup",params:0}),new r({name:"addToGroup",call:"shh_addToGroup",params:0})]};e.exports=i},function(e,t,n){var r=n(274),a=n(275);e.exports={global:{abi:r,address:"0xc6d9d2cd449a754c494264e1809c50e34d64562b"},icap:{abi:a,address:"0xa1a111bc074c9cfa781f0c38e63bd51c91b8af00"}}},function(e,t,n){var r=n(135),a=n(5),o=n(66),s=n(44),i=function(e){this.provider=e,this.polls={},this.timeout=null};i.prototype.send=function(e){if(!this.provider)return console.error(s.InvalidProvider()),null;var t=r.toPayload(e.method,e.params),n=this.provider.send(t);if(!r.isValidResponse(n))throw s.InvalidResponse(n);return n.result},i.prototype.sendAsync=function(e,t){if(!this.provider)return t(s.InvalidProvider());var n=r.toPayload(e.method,e.params);this.provider.sendAsync(n,function(e,n){return e?t(e):r.isValidResponse(n)?void t(null,n.result):t(s.InvalidResponse(n))})},i.prototype.sendBatch=function(e,t){if(!this.provider)return t(s.InvalidProvider());var n=r.toBatchPayload(e);this.provider.sendAsync(n,function(e,n){return e?t(e):a.isArray(n)?void t(e,n):t(s.InvalidResponse(n))})},i.prototype.setProvider=function(e){this.provider=e},i.prototype.startPolling=function(e,t,n,r){this.polls[t]={data:e,id:t,callback:n,uninstall:r},this.timeout||this.poll()},i.prototype.stopPolling=function(e){delete this.polls[e],0===Object.keys(this.polls).length&&this.timeout&&(clearTimeout(this.timeout),this.timeout=null)},i.prototype.reset=function(e){for(var t in this.polls)e&&t.indexOf("syncPoll_")!==-1||(this.polls[t].uninstall(),delete this.polls[t]);0===Object.keys(this.polls).length&&this.timeout&&(clearTimeout(this.timeout),this.timeout=null)},i.prototype.poll=function(){if(this.timeout=setTimeout(this.poll.bind(this),o.ETH_POLLING_TIMEOUT),0!==Object.keys(this.polls).length){if(!this.provider)return void console.error(s.InvalidProvider());var e=[],t=[];for(var n in this.polls)e.push(this.polls[n].data),t.push(n);if(0!==e.length){var i=r.toBatchPayload(e),c={};i.forEach(function(e,n){c[e.id]=t[n]});var u=this;this.provider.sendAsync(i,function(e,t){if(!e){if(!a.isArray(t))throw s.InvalidResponse(t);t.map(function(e){var t=c[e.id];return!!u.polls[t]&&(e.callback=u.polls[t].callback,e)}).filter(function(e){return!!e}).filter(function(e){var t=r.isValidResponse(e);return t||e.callback(s.InvalidResponse(e)),t}).forEach(function(e){e.callback(null,e.result)})}})}}},e.exports=i},function(e,t){var n=function(){this.defaultBlock="latest",this.defaultAccount=void 0};e.exports=n},function(e,t,n){var r=n(15),a=n(5),o=1,s=function(e){var t=function(t,n){if(t)return e.callbacks.forEach(function(e){e(t)});a.isObject(n)&&n.startingBlock&&(n=r.outputSyncingFormatter(n)),e.callbacks.forEach(function(t){e.lastSyncState!==n&&(!e.lastSyncState&&a.isObject(n)&&t(null,!0),setTimeout(function(){t(null,n)},0),e.lastSyncState=n)})};e.requestManager.startPolling({method:"eth_syncing",params:[]},e.pollId,t,e.stopWatching.bind(e))},i=function(e,t){return this.requestManager=e,this.pollId="syncPoll_"+o++,this.callbacks=[],this.addCallback(t),this.lastSyncState=!1,s(this),this};i.prototype.addCallback=function(e){return e&&this.callbacks.push(e),this},i.prototype.stopWatching=function(){this.requestManager.stopPolling(this.pollId),this.callbacks=[]},e.exports=i},function(e,t,n){var r=n(68),a=n(276),o=function(e,t,n,a,o){var c=new r(n);if(!c.isValid())throw new Error("invalid iban address");if(c.isDirect())return s(e,t,c.address(),a,o);if(!o){var u=e.icapNamereg().addr(c.institution());return i(e,t,u,a,c.client())}e.icapNamereg().addr(c.institution(),function(n,r){return i(e,t,r,a,c.client(),o)})},s=function(e,t,n,r,a){return e.sendTransaction({address:n,from:t,value:r},a)},i=function(e,t,n,r,o,s){var i=a;return e.contract(i).at(n).deposit(o,{from:t,value:r},s)};e.exports=o},,,,,,function(e,t,n){e.exports=n(138)}])});
/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2009-2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0
 */
(function(window, undefined) {
  "use strict";
  /**
 * Store references to critically important global functions that may be
 * overridden on certain web pages.
 */
  var _window = window, _document = _window.document, _navigator = _window.navigator, _setTimeout = _window.setTimeout, _clearTimeout = _window.clearTimeout, _setInterval = _window.setInterval, _clearInterval = _window.clearInterval, _getComputedStyle = _window.getComputedStyle, _encodeURIComponent = _window.encodeURIComponent, _ActiveXObject = _window.ActiveXObject, _Error = _window.Error, _parseInt = _window.Number.parseInt || _window.parseInt, _parseFloat = _window.Number.parseFloat || _window.parseFloat, _isNaN = _window.Number.isNaN || _window.isNaN, _now = _window.Date.now, _keys = _window.Object.keys, _defineProperty = _window.Object.defineProperty, _hasOwn = _window.Object.prototype.hasOwnProperty, _slice = _window.Array.prototype.slice, _unwrap = function() {
    var unwrapper = function(el) {
      return el;
    };
    if (typeof _window.wrap === "function" && typeof _window.unwrap === "function") {
      try {
        var div = _document.createElement("div");
        var unwrappedDiv = _window.unwrap(div);
        if (div.nodeType === 1 && unwrappedDiv && unwrappedDiv.nodeType === 1) {
          unwrapper = _window.unwrap;
        }
      } catch (e) {}
    }
    return unwrapper;
  }();
  /**
 * Convert an `arguments` object into an Array.
 *
 * @returns The arguments as an Array
 * @private
 */
  var _args = function(argumentsObj) {
    return _slice.call(argumentsObj, 0);
  };
  /**
 * Shallow-copy the owned, enumerable properties of one object over to another, similar to jQuery's `$.extend`.
 *
 * @returns The target object, augmented
 * @private
 */
  var _extend = function() {
    var i, len, arg, prop, src, copy, args = _args(arguments), target = args[0] || {};
    for (i = 1, len = args.length; i < len; i++) {
      if ((arg = args[i]) != null) {
        for (prop in arg) {
          if (_hasOwn.call(arg, prop)) {
            src = target[prop];
            copy = arg[prop];
            if (target !== copy && copy !== undefined) {
              target[prop] = copy;
            }
          }
        }
      }
    }
    return target;
  };
  /**
 * Return a deep copy of the source object or array.
 *
 * @returns Object or Array
 * @private
 */
  var _deepCopy = function(source) {
    var copy, i, len, prop;
    if (typeof source !== "object" || source == null || typeof source.nodeType === "number") {
      copy = source;
    } else if (typeof source.length === "number") {
      copy = [];
      for (i = 0, len = source.length; i < len; i++) {
        if (_hasOwn.call(source, i)) {
          copy[i] = _deepCopy(source[i]);
        }
      }
    } else {
      copy = {};
      for (prop in source) {
        if (_hasOwn.call(source, prop)) {
          copy[prop] = _deepCopy(source[prop]);
        }
      }
    }
    return copy;
  };
  /**
 * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to keep.
 * The inverse of `_omit`, mostly. The big difference is that these properties do NOT need to be enumerable to
 * be kept.
 *
 * @returns A new filtered object.
 * @private
 */
  var _pick = function(obj, keys) {
    var newObj = {};
    for (var i = 0, len = keys.length; i < len; i++) {
      if (keys[i] in obj) {
        newObj[keys[i]] = obj[keys[i]];
      }
    }
    return newObj;
  };
  /**
 * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to omit.
 * The inverse of `_pick`.
 *
 * @returns A new filtered object.
 * @private
 */
  var _omit = function(obj, keys) {
    var newObj = {};
    for (var prop in obj) {
      if (keys.indexOf(prop) === -1) {
        newObj[prop] = obj[prop];
      }
    }
    return newObj;
  };
  /**
 * Remove all owned, enumerable properties from an object.
 *
 * @returns The original object without its owned, enumerable properties.
 * @private
 */
  var _deleteOwnProperties = function(obj) {
    if (obj) {
      for (var prop in obj) {
        if (_hasOwn.call(obj, prop)) {
          delete obj[prop];
        }
      }
    }
    return obj;
  };
  /**
 * Determine if an element is contained within another element.
 *
 * @returns Boolean
 * @private
 */
  var _containedBy = function(el, ancestorEl) {
    if (el && el.nodeType === 1 && el.ownerDocument && ancestorEl && (ancestorEl.nodeType === 1 && ancestorEl.ownerDocument && ancestorEl.ownerDocument === el.ownerDocument || ancestorEl.nodeType === 9 && !ancestorEl.ownerDocument && ancestorEl === el.ownerDocument)) {
      do {
        if (el === ancestorEl) {
          return true;
        }
        el = el.parentNode;
      } while (el);
    }
    return false;
  };
  /**
 * Get the URL path's parent directory.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getDirPathOfUrl = function(url) {
    var dir;
    if (typeof url === "string" && url) {
      dir = url.split("#")[0].split("?")[0];
      dir = url.slice(0, url.lastIndexOf("/") + 1);
    }
    return dir;
  };
  /**
 * Get the current script's URL by throwing an `Error` and analyzing it.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrlFromErrorStack = function(stack) {
    var url, matches;
    if (typeof stack === "string" && stack) {
      matches = stack.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
      if (matches && matches[1]) {
        url = matches[1];
      } else {
        matches = stack.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
        if (matches && matches[1]) {
          url = matches[1];
        }
      }
    }
    return url;
  };
  /**
 * Get the current script's URL by throwing an `Error` and analyzing it.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrlFromError = function() {
    var url, err;
    try {
      throw new _Error();
    } catch (e) {
      err = e;
    }
    if (err) {
      url = err.sourceURL || err.fileName || _getCurrentScriptUrlFromErrorStack(err.stack);
    }
    return url;
  };
  /**
 * Get the current script's URL.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrl = function() {
    var jsPath, scripts, i;
    if (_document.currentScript && (jsPath = _document.currentScript.src)) {
      return jsPath;
    }
    scripts = _document.getElementsByTagName("script");
    if (scripts.length === 1) {
      return scripts[0].src || undefined;
    }
    if ("readyState" in scripts[0]) {
      for (i = scripts.length; i--; ) {
        if (scripts[i].readyState === "interactive" && (jsPath = scripts[i].src)) {
          return jsPath;
        }
      }
    }
    if (_document.readyState === "loading" && (jsPath = scripts[scripts.length - 1].src)) {
      return jsPath;
    }
    if (jsPath = _getCurrentScriptUrlFromError()) {
      return jsPath;
    }
    return undefined;
  };
  /**
 * Get the unanimous parent directory of ALL script tags.
 * If any script tags are either (a) inline or (b) from differing parent
 * directories, this method must return `undefined`.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getUnanimousScriptParentDir = function() {
    var i, jsDir, jsPath, scripts = _document.getElementsByTagName("script");
    for (i = scripts.length; i--; ) {
      if (!(jsPath = scripts[i].src)) {
        jsDir = null;
        break;
      }
      jsPath = _getDirPathOfUrl(jsPath);
      if (jsDir == null) {
        jsDir = jsPath;
      } else if (jsDir !== jsPath) {
        jsDir = null;
        break;
      }
    }
    return jsDir || undefined;
  };
  /**
 * Get the presumed location of the "ZeroClipboard.swf" file, based on the location
 * of the executing JavaScript file (e.g. "ZeroClipboard.js", etc.).
 *
 * @returns String
 * @private
 */
  var _getDefaultSwfPath = function() {
    var jsDir = _getDirPathOfUrl(_getCurrentScriptUrl()) || _getUnanimousScriptParentDir() || "";
    return jsDir + "ZeroClipboard.swf";
  };
  /**
 * Keep track of if the page is framed (in an `iframe`). This can never change.
 * @private
 */
  var _pageIsFramed = function() {
    return window.opener == null && (!!window.top && window != window.top || !!window.parent && window != window.parent);
  }();
  /**
 * Keep track of the state of the Flash object.
 * @private
 */
  var _flashState = {
    bridge: null,
    version: "0.0.0",
    pluginType: "unknown",
    disabled: null,
    outdated: null,
    sandboxed: null,
    unavailable: null,
    degraded: null,
    deactivated: null,
    overdue: null,
    ready: null
  };
  /**
 * The minimum Flash Player version required to use ZeroClipboard completely.
 * @readonly
 * @private
 */
  var _minimumFlashVersion = "11.0.0";
  /**
 * The ZeroClipboard library version number, as reported by Flash, at the time the SWF was compiled.
 */
  var _zcSwfVersion;
  /**
 * Keep track of all event listener registrations.
 * @private
 */
  var _handlers = {};
  /**
 * Keep track of the currently activated element.
 * @private
 */
  var _currentElement;
  /**
 * Keep track of the element that was activated when a `copy` process started.
 * @private
 */
  var _copyTarget;
  /**
 * Keep track of data for the pending clipboard transaction.
 * @private
 */
  var _clipData = {};
  /**
 * Keep track of data formats for the pending clipboard transaction.
 * @private
 */
  var _clipDataFormatMap = null;
  /**
 * Keep track of the Flash availability check timeout.
 * @private
 */
  var _flashCheckTimeout = 0;
  /**
 * Keep track of SWF network errors interval polling.
 * @private
 */
  var _swfFallbackCheckInterval = 0;
  /**
 * The `message` store for events
 * @private
 */
  var _eventMessages = {
    ready: "Flash communication is established",
    error: {
      "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
      "flash-outdated": "Flash is too outdated to support ZeroClipboard",
      "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
      "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
      "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
      "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
      "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
      "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
      "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
      "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
      "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
    }
  };
  /**
 * The `name`s of `error` events that can only occur is Flash has at least
 * been able to load the SWF successfully.
 * @private
 */
  var _errorsThatOnlyOccurAfterFlashLoads = [ "flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error" ];
  /**
 * The `name`s of `error` events that should likely result in the `_flashState`
 * variable's property values being updated.
 * @private
 */
  var _flashStateErrorNames = [ "flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue" ];
  /**
 * A RegExp to match the `name` property of `error` events related to Flash.
 * @private
 */
  var _flashStateErrorNameMatchingRegex = new RegExp("^flash-(" + _flashStateErrorNames.map(function(errorName) {
    return errorName.replace(/^flash-/, "");
  }).join("|") + ")$");
  /**
 * A RegExp to match the `name` property of `error` events related to Flash,
 * which is enabled.
 * @private
 */
  var _flashStateEnabledErrorNameMatchingRegex = new RegExp("^flash-(" + _flashStateErrorNames.slice(1).map(function(errorName) {
    return errorName.replace(/^flash-/, "");
  }).join("|") + ")$");
  /**
 * ZeroClipboard configuration defaults for the Core module.
 * @private
 */
  var _globalConfig = {
    swfPath: _getDefaultSwfPath(),
    trustedDomains: window.location.host ? [ window.location.host ] : [],
    cacheBust: true,
    forceEnhancedClipboard: false,
    flashLoadTimeout: 3e4,
    autoActivate: true,
    bubbleEvents: true,
    containerId: "global-zeroclipboard-html-bridge",
    containerClass: "global-zeroclipboard-container",
    swfObjectId: "global-zeroclipboard-flash-bridge",
    hoverClass: "zeroclipboard-is-hover",
    activeClass: "zeroclipboard-is-active",
    forceHandCursor: false,
    title: null,
    zIndex: 999999999
  };
  /**
 * The underlying implementation of `ZeroClipboard.config`.
 * @private
 */
  var _config = function(options) {
    if (typeof options === "object" && options !== null) {
      for (var prop in options) {
        if (_hasOwn.call(options, prop)) {
          if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(prop)) {
            _globalConfig[prop] = options[prop];
          } else if (_flashState.bridge == null) {
            if (prop === "containerId" || prop === "swfObjectId") {
              if (_isValidHtml4Id(options[prop])) {
                _globalConfig[prop] = options[prop];
              } else {
                throw new Error("The specified `" + prop + "` value is not valid as an HTML4 Element ID");
              }
            } else {
              _globalConfig[prop] = options[prop];
            }
          }
        }
      }
    }
    if (typeof options === "string" && options) {
      if (_hasOwn.call(_globalConfig, options)) {
        return _globalConfig[options];
      }
      return;
    }
    return _deepCopy(_globalConfig);
  };
  /**
 * The underlying implementation of `ZeroClipboard.state`.
 * @private
 */
  var _state = function() {
    _detectSandbox();
    return {
      browser: _pick(_navigator, [ "userAgent", "platform", "appName" ]),
      flash: _omit(_flashState, [ "bridge" ]),
      zeroclipboard: {
        version: ZeroClipboard.version,
        config: ZeroClipboard.config()
      }
    };
  };
  /**
 * The underlying implementation of `ZeroClipboard.isFlashUnusable`.
 * @private
 */
  var _isFlashUnusable = function() {
    return !!(_flashState.disabled || _flashState.outdated || _flashState.sandboxed || _flashState.unavailable || _flashState.degraded || _flashState.deactivated);
  };
  /**
 * The underlying implementation of `ZeroClipboard.on`.
 * @private
 */
  var _on = function(eventType, listener) {
    var i, len, events, added = {};
    if (typeof eventType === "string" && eventType) {
      events = eventType.toLowerCase().split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          ZeroClipboard.on(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].replace(/^on/, "");
        added[eventType] = true;
        if (!_handlers[eventType]) {
          _handlers[eventType] = [];
        }
        _handlers[eventType].push(listener);
      }
      if (added.ready && _flashState.ready) {
        ZeroClipboard.emit({
          type: "ready"
        });
      }
      if (added.error) {
        for (i = 0, len = _flashStateErrorNames.length; i < len; i++) {
          if (_flashState[_flashStateErrorNames[i].replace(/^flash-/, "")] === true) {
            ZeroClipboard.emit({
              type: "error",
              name: _flashStateErrorNames[i]
            });
            break;
          }
        }
        if (_zcSwfVersion !== undefined && ZeroClipboard.version !== _zcSwfVersion) {
          ZeroClipboard.emit({
            type: "error",
            name: "version-mismatch",
            jsVersion: ZeroClipboard.version,
            swfVersion: _zcSwfVersion
          });
        }
      }
    }
    return ZeroClipboard;
  };
  /**
 * The underlying implementation of `ZeroClipboard.off`.
 * @private
 */
  var _off = function(eventType, listener) {
    var i, len, foundIndex, events, perEventHandlers;
    if (arguments.length === 0) {
      events = _keys(_handlers);
    } else if (typeof eventType === "string" && eventType) {
      events = eventType.split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          ZeroClipboard.off(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].toLowerCase().replace(/^on/, "");
        perEventHandlers = _handlers[eventType];
        if (perEventHandlers && perEventHandlers.length) {
          if (listener) {
            foundIndex = perEventHandlers.indexOf(listener);
            while (foundIndex !== -1) {
              perEventHandlers.splice(foundIndex, 1);
              foundIndex = perEventHandlers.indexOf(listener, foundIndex);
            }
          } else {
            perEventHandlers.length = 0;
          }
        }
      }
    }
    return ZeroClipboard;
  };
  /**
 * The underlying implementation of `ZeroClipboard.handlers`.
 * @private
 */
  var _listeners = function(eventType) {
    var copy;
    if (typeof eventType === "string" && eventType) {
      copy = _deepCopy(_handlers[eventType]) || null;
    } else {
      copy = _deepCopy(_handlers);
    }
    return copy;
  };
  /**
 * The underlying implementation of `ZeroClipboard.emit`.
 * @private
 */
  var _emit = function(event) {
    var eventCopy, returnVal, tmp;
    event = _createEvent(event);
    if (!event) {
      return;
    }
    if (_preprocessEvent(event)) {
      return;
    }
    if (event.type === "ready" && _flashState.overdue === true) {
      return ZeroClipboard.emit({
        type: "error",
        name: "flash-overdue"
      });
    }
    eventCopy = _extend({}, event);
    _dispatchCallbacks.call(this, eventCopy);
    if (event.type === "copy") {
      tmp = _mapClipDataToFlash(_clipData);
      returnVal = tmp.data;
      _clipDataFormatMap = tmp.formatMap;
    }
    return returnVal;
  };
  /**
 * The underlying implementation of `ZeroClipboard.create`.
 * @private
 */
  var _create = function() {
    var previousState = _flashState.sandboxed;
    _detectSandbox();
    if (typeof _flashState.ready !== "boolean") {
      _flashState.ready = false;
    }
    if (_flashState.sandboxed !== previousState && _flashState.sandboxed === true) {
      _flashState.ready = false;
      ZeroClipboard.emit({
        type: "error",
        name: "flash-sandboxed"
      });
    } else if (!ZeroClipboard.isFlashUnusable() && _flashState.bridge === null) {
      var maxWait = _globalConfig.flashLoadTimeout;
      if (typeof maxWait === "number" && maxWait >= 0) {
        _flashCheckTimeout = _setTimeout(function() {
          if (typeof _flashState.deactivated !== "boolean") {
            _flashState.deactivated = true;
          }
          if (_flashState.deactivated === true) {
            ZeroClipboard.emit({
              type: "error",
              name: "flash-deactivated"
            });
          }
        }, maxWait);
      }
      _flashState.overdue = false;
      _embedSwf();
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.destroy`.
 * @private
 */
  var _destroy = function() {
    ZeroClipboard.clearData();
    ZeroClipboard.blur();
    ZeroClipboard.emit("destroy");
    _unembedSwf();
    ZeroClipboard.off();
  };
  /**
 * The underlying implementation of `ZeroClipboard.setData`.
 * @private
 */
  var _setData = function(format, data) {
    var dataObj;
    if (typeof format === "object" && format && typeof data === "undefined") {
      dataObj = format;
      ZeroClipboard.clearData();
    } else if (typeof format === "string" && format) {
      dataObj = {};
      dataObj[format] = data;
    } else {
      return;
    }
    for (var dataFormat in dataObj) {
      if (typeof dataFormat === "string" && dataFormat && _hasOwn.call(dataObj, dataFormat) && typeof dataObj[dataFormat] === "string" && dataObj[dataFormat]) {
        _clipData[dataFormat] = dataObj[dataFormat];
      }
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.clearData`.
 * @private
 */
  var _clearData = function(format) {
    if (typeof format === "undefined") {
      _deleteOwnProperties(_clipData);
      _clipDataFormatMap = null;
    } else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
      delete _clipData[format];
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.getData`.
 * @private
 */
  var _getData = function(format) {
    if (typeof format === "undefined") {
      return _deepCopy(_clipData);
    } else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
      return _clipData[format];
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.focus`/`ZeroClipboard.activate`.
 * @private
 */
  var _focus = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    if (_currentElement) {
      _removeClass(_currentElement, _globalConfig.activeClass);
      if (_currentElement !== element) {
        _removeClass(_currentElement, _globalConfig.hoverClass);
      }
    }
    _currentElement = element;
    _addClass(element, _globalConfig.hoverClass);
    var newTitle = element.getAttribute("title") || _globalConfig.title;
    if (typeof newTitle === "string" && newTitle) {
      var htmlBridge = _getHtmlBridge(_flashState.bridge);
      if (htmlBridge) {
        htmlBridge.setAttribute("title", newTitle);
      }
    }
    var useHandCursor = _globalConfig.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
    _setHandCursor(useHandCursor);
    _reposition();
  };
  /**
 * The underlying implementation of `ZeroClipboard.blur`/`ZeroClipboard.deactivate`.
 * @private
 */
  var _blur = function() {
    var htmlBridge = _getHtmlBridge(_flashState.bridge);
    if (htmlBridge) {
      htmlBridge.removeAttribute("title");
      htmlBridge.style.left = "0px";
      htmlBridge.style.top = "-9999px";
      htmlBridge.style.width = "1px";
      htmlBridge.style.height = "1px";
    }
    if (_currentElement) {
      _removeClass(_currentElement, _globalConfig.hoverClass);
      _removeClass(_currentElement, _globalConfig.activeClass);
      _currentElement = null;
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.activeElement`.
 * @private
 */
  var _activeElement = function() {
    return _currentElement || null;
  };
  /**
 * Check if a value is a valid HTML4 `ID` or `Name` token.
 * @private
 */
  var _isValidHtml4Id = function(id) {
    return typeof id === "string" && id && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(id);
  };
  /**
 * Create or update an `event` object, based on the `eventType`.
 * @private
 */
  var _createEvent = function(event) {
    var eventType;
    if (typeof event === "string" && event) {
      eventType = event;
      event = {};
    } else if (typeof event === "object" && event && typeof event.type === "string" && event.type) {
      eventType = event.type;
    }
    if (!eventType) {
      return;
    }
    eventType = eventType.toLowerCase();
    if (!event.target && (/^(copy|aftercopy|_click)$/.test(eventType) || eventType === "error" && event.name === "clipboard-error")) {
      event.target = _copyTarget;
    }
    _extend(event, {
      type: eventType,
      target: event.target || _currentElement || null,
      relatedTarget: event.relatedTarget || null,
      currentTarget: _flashState && _flashState.bridge || null,
      timeStamp: event.timeStamp || _now() || null
    });
    var msg = _eventMessages[event.type];
    if (event.type === "error" && event.name && msg) {
      msg = msg[event.name];
    }
    if (msg) {
      event.message = msg;
    }
    if (event.type === "ready") {
      _extend(event, {
        target: null,
        version: _flashState.version
      });
    }
    if (event.type === "error") {
      if (_flashStateErrorNameMatchingRegex.test(event.name)) {
        _extend(event, {
          target: null,
          minimumVersion: _minimumFlashVersion
        });
      }
      if (_flashStateEnabledErrorNameMatchingRegex.test(event.name)) {
        _extend(event, {
          version: _flashState.version
        });
      }
    }
    if (event.type === "copy") {
      event.clipboardData = {
        setData: ZeroClipboard.setData,
        clearData: ZeroClipboard.clearData
      };
    }
    if (event.type === "aftercopy") {
      event = _mapClipResultsFromFlash(event, _clipDataFormatMap);
    }
    if (event.target && !event.relatedTarget) {
      event.relatedTarget = _getRelatedTarget(event.target);
    }
    return _addMouseData(event);
  };
  /**
 * Get a relatedTarget from the target's `data-clipboard-target` attribute
 * @private
 */
  var _getRelatedTarget = function(targetEl) {
    var relatedTargetId = targetEl && targetEl.getAttribute && targetEl.getAttribute("data-clipboard-target");
    return relatedTargetId ? _document.getElementById(relatedTargetId) : null;
  };
  /**
 * Add element and position data to `MouseEvent` instances
 * @private
 */
  var _addMouseData = function(event) {
    if (event && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
      var srcElement = event.target;
      var fromElement = event.type === "_mouseover" && event.relatedTarget ? event.relatedTarget : undefined;
      var toElement = event.type === "_mouseout" && event.relatedTarget ? event.relatedTarget : undefined;
      var pos = _getElementPosition(srcElement);
      var screenLeft = _window.screenLeft || _window.screenX || 0;
      var screenTop = _window.screenTop || _window.screenY || 0;
      var scrollLeft = _document.body.scrollLeft + _document.documentElement.scrollLeft;
      var scrollTop = _document.body.scrollTop + _document.documentElement.scrollTop;
      var pageX = pos.left + (typeof event._stageX === "number" ? event._stageX : 0);
      var pageY = pos.top + (typeof event._stageY === "number" ? event._stageY : 0);
      var clientX = pageX - scrollLeft;
      var clientY = pageY - scrollTop;
      var screenX = screenLeft + clientX;
      var screenY = screenTop + clientY;
      var moveX = typeof event.movementX === "number" ? event.movementX : 0;
      var moveY = typeof event.movementY === "number" ? event.movementY : 0;
      delete event._stageX;
      delete event._stageY;
      _extend(event, {
        srcElement: srcElement,
        fromElement: fromElement,
        toElement: toElement,
        screenX: screenX,
        screenY: screenY,
        pageX: pageX,
        pageY: pageY,
        clientX: clientX,
        clientY: clientY,
        x: clientX,
        y: clientY,
        movementX: moveX,
        movementY: moveY,
        offsetX: 0,
        offsetY: 0,
        layerX: 0,
        layerY: 0
      });
    }
    return event;
  };
  /**
 * Determine if an event's registered handlers should be execute synchronously or asynchronously.
 *
 * @returns {boolean}
 * @private
 */
  var _shouldPerformAsync = function(event) {
    var eventType = event && typeof event.type === "string" && event.type || "";
    return !/^(?:(?:before)?copy|destroy)$/.test(eventType);
  };
  /**
 * Control if a callback should be executed asynchronously or not.
 *
 * @returns `undefined`
 * @private
 */
  var _dispatchCallback = function(func, context, args, async) {
    if (async) {
      _setTimeout(function() {
        func.apply(context, args);
      }, 0);
    } else {
      func.apply(context, args);
    }
  };
  /**
 * Handle the actual dispatching of events to client instances.
 *
 * @returns `undefined`
 * @private
 */
  var _dispatchCallbacks = function(event) {
    if (!(typeof event === "object" && event && event.type)) {
      return;
    }
    var async = _shouldPerformAsync(event);
    var wildcardTypeHandlers = _handlers["*"] || [];
    var specificTypeHandlers = _handlers[event.type] || [];
    var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
    if (handlers && handlers.length) {
      var i, len, func, context, eventCopy, originalContext = this;
      for (i = 0, len = handlers.length; i < len; i++) {
        func = handlers[i];
        context = originalContext;
        if (typeof func === "string" && typeof _window[func] === "function") {
          func = _window[func];
        }
        if (typeof func === "object" && func && typeof func.handleEvent === "function") {
          context = func;
          func = func.handleEvent;
        }
        if (typeof func === "function") {
          eventCopy = _extend({}, event);
          _dispatchCallback(func, context, [ eventCopy ], async);
        }
      }
    }
    return this;
  };
  /**
 * Check an `error` event's `name` property to see if Flash has
 * already loaded, which rules out possible `iframe` sandboxing.
 * @private
 */
  var _getSandboxStatusFromErrorEvent = function(event) {
    var isSandboxed = null;
    if (_pageIsFramed === false || event && event.type === "error" && event.name && _errorsThatOnlyOccurAfterFlashLoads.indexOf(event.name) !== -1) {
      isSandboxed = false;
    }
    return isSandboxed;
  };
  /**
 * Preprocess any special behaviors, reactions, or state changes after receiving this event.
 * Executes only once per event emitted, NOT once per client.
 * @private
 */
  var _preprocessEvent = function(event) {
    var element = event.target || _currentElement || null;
    var sourceIsSwf = event._source === "swf";
    delete event._source;
    switch (event.type) {
     case "error":
      var isSandboxed = event.name === "flash-sandboxed" || _getSandboxStatusFromErrorEvent(event);
      if (typeof isSandboxed === "boolean") {
        _flashState.sandboxed = isSandboxed;
      }
      if (_flashStateErrorNames.indexOf(event.name) !== -1) {
        _extend(_flashState, {
          disabled: event.name === "flash-disabled",
          outdated: event.name === "flash-outdated",
          unavailable: event.name === "flash-unavailable",
          degraded: event.name === "flash-degraded",
          deactivated: event.name === "flash-deactivated",
          overdue: event.name === "flash-overdue",
          ready: false
        });
      } else if (event.name === "version-mismatch") {
        _zcSwfVersion = event.swfVersion;
        _extend(_flashState, {
          disabled: false,
          outdated: false,
          unavailable: false,
          degraded: false,
          deactivated: false,
          overdue: false,
          ready: false
        });
      }
      _clearTimeoutsAndPolling();
      break;

     case "ready":
      _zcSwfVersion = event.swfVersion;
      var wasDeactivated = _flashState.deactivated === true;
      _extend(_flashState, {
        disabled: false,
        outdated: false,
        sandboxed: false,
        unavailable: false,
        degraded: false,
        deactivated: false,
        overdue: wasDeactivated,
        ready: !wasDeactivated
      });
      _clearTimeoutsAndPolling();
      break;

     case "beforecopy":
      _copyTarget = element;
      break;

     case "copy":
      var textContent, htmlContent, targetEl = event.relatedTarget;
      if (!(_clipData["text/html"] || _clipData["text/plain"]) && targetEl && (htmlContent = targetEl.value || targetEl.outerHTML || targetEl.innerHTML) && (textContent = targetEl.value || targetEl.textContent || targetEl.innerText)) {
        event.clipboardData.clearData();
        event.clipboardData.setData("text/plain", textContent);
        if (htmlContent !== textContent) {
          event.clipboardData.setData("text/html", htmlContent);
        }
      } else if (!_clipData["text/plain"] && event.target && (textContent = event.target.getAttribute("data-clipboard-text"))) {
        event.clipboardData.clearData();
        event.clipboardData.setData("text/plain", textContent);
      }
      break;

     case "aftercopy":
      _queueEmitClipboardErrors(event);
      ZeroClipboard.clearData();
      if (element && element !== _safeActiveElement() && element.focus) {
        element.focus();
      }
      break;

     case "_mouseover":
      ZeroClipboard.focus(element);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
          _fireMouseEvent(_extend({}, event, {
            type: "mouseenter",
            bubbles: false,
            cancelable: false
          }));
        }
        _fireMouseEvent(_extend({}, event, {
          type: "mouseover"
        }));
      }
      break;

     case "_mouseout":
      ZeroClipboard.blur();
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
          _fireMouseEvent(_extend({}, event, {
            type: "mouseleave",
            bubbles: false,
            cancelable: false
          }));
        }
        _fireMouseEvent(_extend({}, event, {
          type: "mouseout"
        }));
      }
      break;

     case "_mousedown":
      _addClass(element, _globalConfig.activeClass);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_mouseup":
      _removeClass(element, _globalConfig.activeClass);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_click":
      _copyTarget = null;
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_mousemove":
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;
    }
    if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
      return true;
    }
  };
  /**
 * Check an "aftercopy" event for clipboard errors and emit a corresponding "error" event.
 * @private
 */
  var _queueEmitClipboardErrors = function(aftercopyEvent) {
    if (aftercopyEvent.errors && aftercopyEvent.errors.length > 0) {
      var errorEvent = _deepCopy(aftercopyEvent);
      _extend(errorEvent, {
        type: "error",
        name: "clipboard-error"
      });
      delete errorEvent.success;
      _setTimeout(function() {
        ZeroClipboard.emit(errorEvent);
      }, 0);
    }
  };
  /**
 * Dispatch a synthetic MouseEvent.
 *
 * @returns `undefined`
 * @private
 */
  var _fireMouseEvent = function(event) {
    if (!(event && typeof event.type === "string" && event)) {
      return;
    }
    var e, target = event.target || null, doc = target && target.ownerDocument || _document, defaults = {
      view: doc.defaultView || _window,
      canBubble: true,
      cancelable: true,
      detail: event.type === "click" ? 1 : 0,
      button: typeof event.which === "number" ? event.which - 1 : typeof event.button === "number" ? event.button : doc.createEvent ? 0 : 1
    }, args = _extend(defaults, event);
    if (!target) {
      return;
    }
    if (doc.createEvent && target.dispatchEvent) {
      args = [ args.type, args.canBubble, args.cancelable, args.view, args.detail, args.screenX, args.screenY, args.clientX, args.clientY, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.button, args.relatedTarget ];
      e = doc.createEvent("MouseEvents");
      if (e.initMouseEvent) {
        e.initMouseEvent.apply(e, args);
        e._source = "js";
        target.dispatchEvent(e);
      }
    }
  };
  /**
 * Continuously poll the DOM until either:
 *  (a) the fallback content becomes visible, or
 *  (b) we receive an event from SWF (handled elsewhere)
 *
 * IMPORTANT:
 * This is NOT a necessary check but it can result in significantly faster
 * detection of bad `swfPath` configuration and/or network/server issues [in
 * supported browsers] than waiting for the entire `flashLoadTimeout` duration
 * to elapse before detecting that the SWF cannot be loaded. The detection
 * duration can be anywhere from 10-30 times faster [in supported browsers] by
 * using this approach.
 *
 * @returns `undefined`
 * @private
 */
  var _watchForSwfFallbackContent = function() {
    var maxWait = _globalConfig.flashLoadTimeout;
    if (typeof maxWait === "number" && maxWait >= 0) {
      var pollWait = Math.min(1e3, maxWait / 10);
      var fallbackContentId = _globalConfig.swfObjectId + "_fallbackContent";
      _swfFallbackCheckInterval = _setInterval(function() {
        var el = _document.getElementById(fallbackContentId);
        if (_isElementVisible(el)) {
          _clearTimeoutsAndPolling();
          _flashState.deactivated = null;
          ZeroClipboard.emit({
            type: "error",
            name: "swf-not-found"
          });
        }
      }, pollWait);
    }
  };
  /**
 * Create the HTML bridge element to embed the Flash object into.
 * @private
 */
  var _createHtmlBridge = function() {
    var container = _document.createElement("div");
    container.id = _globalConfig.containerId;
    container.className = _globalConfig.containerClass;
    container.style.position = "absolute";
    container.style.left = "0px";
    container.style.top = "-9999px";
    container.style.width = "1px";
    container.style.height = "1px";
    container.style.zIndex = "" + _getSafeZIndex(_globalConfig.zIndex);
    return container;
  };
  /**
 * Get the HTML element container that wraps the Flash bridge object/element.
 * @private
 */
  var _getHtmlBridge = function(flashBridge) {
    var htmlBridge = flashBridge && flashBridge.parentNode;
    while (htmlBridge && htmlBridge.nodeName === "OBJECT" && htmlBridge.parentNode) {
      htmlBridge = htmlBridge.parentNode;
    }
    return htmlBridge || null;
  };
  /**
 * Create the SWF object.
 *
 * @returns The SWF object reference.
 * @private
 */
  var _embedSwf = function() {
    var len, flashBridge = _flashState.bridge, container = _getHtmlBridge(flashBridge);
    if (!flashBridge) {
      var allowScriptAccess = _determineScriptAccess(_window.location.host, _globalConfig);
      var allowNetworking = allowScriptAccess === "never" ? "none" : "all";
      var flashvars = _vars(_extend({
        jsVersion: ZeroClipboard.version
      }, _globalConfig));
      var swfUrl = _globalConfig.swfPath + _cacheBust(_globalConfig.swfPath, _globalConfig);
      container = _createHtmlBridge();
      var divToBeReplaced = _document.createElement("div");
      container.appendChild(divToBeReplaced);
      _document.body.appendChild(container);
      var tmpDiv = _document.createElement("div");
      var usingActiveX = _flashState.pluginType === "activex";
      tmpDiv.innerHTML = '<object id="' + _globalConfig.swfObjectId + '" name="' + _globalConfig.swfObjectId + '" ' + 'width="100%" height="100%" ' + (usingActiveX ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + swfUrl + '"') + ">" + (usingActiveX ? '<param name="movie" value="' + swfUrl + '"/>' : "") + '<param name="allowScriptAccess" value="' + allowScriptAccess + '"/>' + '<param name="allowNetworking" value="' + allowNetworking + '"/>' + '<param name="menu" value="false"/>' + '<param name="wmode" value="transparent"/>' + '<param name="flashvars" value="' + flashvars + '"/>' + '<div id="' + _globalConfig.swfObjectId + '_fallbackContent">&nbsp;</div>' + "</object>";
      flashBridge = tmpDiv.firstChild;
      tmpDiv = null;
      _unwrap(flashBridge).ZeroClipboard = ZeroClipboard;
      container.replaceChild(flashBridge, divToBeReplaced);
      _watchForSwfFallbackContent();
    }
    if (!flashBridge) {
      flashBridge = _document[_globalConfig.swfObjectId];
      if (flashBridge && (len = flashBridge.length)) {
        flashBridge = flashBridge[len - 1];
      }
      if (!flashBridge && container) {
        flashBridge = container.firstChild;
      }
    }
    _flashState.bridge = flashBridge || null;
    return flashBridge;
  };
  /**
 * Destroy the SWF object.
 * @private
 */
  var _unembedSwf = function() {
    var flashBridge = _flashState.bridge;
    if (flashBridge) {
      var htmlBridge = _getHtmlBridge(flashBridge);
      if (htmlBridge) {
        if (_flashState.pluginType === "activex" && "readyState" in flashBridge) {
          flashBridge.style.display = "none";
          (function removeSwfFromIE() {
            if (flashBridge.readyState === 4) {
              for (var prop in flashBridge) {
                if (typeof flashBridge[prop] === "function") {
                  flashBridge[prop] = null;
                }
              }
              if (flashBridge.parentNode) {
                flashBridge.parentNode.removeChild(flashBridge);
              }
              if (htmlBridge.parentNode) {
                htmlBridge.parentNode.removeChild(htmlBridge);
              }
            } else {
              _setTimeout(removeSwfFromIE, 10);
            }
          })();
        } else {
          if (flashBridge.parentNode) {
            flashBridge.parentNode.removeChild(flashBridge);
          }
          if (htmlBridge.parentNode) {
            htmlBridge.parentNode.removeChild(htmlBridge);
          }
        }
      }
      _clearTimeoutsAndPolling();
      _flashState.ready = null;
      _flashState.bridge = null;
      _flashState.deactivated = null;
      _zcSwfVersion = undefined;
    }
  };
  /**
 * Map the data format names of the "clipData" to Flash-friendly names.
 *
 * @returns A new transformed object.
 * @private
 */
  var _mapClipDataToFlash = function(clipData) {
    var newClipData = {}, formatMap = {};
    if (!(typeof clipData === "object" && clipData)) {
      return;
    }
    for (var dataFormat in clipData) {
      if (dataFormat && _hasOwn.call(clipData, dataFormat) && typeof clipData[dataFormat] === "string" && clipData[dataFormat]) {
        switch (dataFormat.toLowerCase()) {
         case "text/plain":
         case "text":
         case "air:text":
         case "flash:text":
          newClipData.text = clipData[dataFormat];
          formatMap.text = dataFormat;
          break;

         case "text/html":
         case "html":
         case "air:html":
         case "flash:html":
          newClipData.html = clipData[dataFormat];
          formatMap.html = dataFormat;
          break;

         case "application/rtf":
         case "text/rtf":
         case "rtf":
         case "richtext":
         case "air:rtf":
         case "flash:rtf":
          newClipData.rtf = clipData[dataFormat];
          formatMap.rtf = dataFormat;
          break;

         default:
          break;
        }
      }
    }
    return {
      data: newClipData,
      formatMap: formatMap
    };
  };
  /**
 * Map the data format names from Flash-friendly names back to their original "clipData" names (via a format mapping).
 *
 * @returns A new transformed object.
 * @private
 */
  var _mapClipResultsFromFlash = function(clipResults, formatMap) {
    if (!(typeof clipResults === "object" && clipResults && typeof formatMap === "object" && formatMap)) {
      return clipResults;
    }
    var newResults = {};
    for (var prop in clipResults) {
      if (_hasOwn.call(clipResults, prop)) {
        if (prop === "errors") {
          newResults[prop] = clipResults[prop] ? clipResults[prop].slice() : [];
          for (var i = 0, len = newResults[prop].length; i < len; i++) {
            newResults[prop][i].format = formatMap[newResults[prop][i].format];
          }
        } else if (prop !== "success" && prop !== "data") {
          newResults[prop] = clipResults[prop];
        } else {
          newResults[prop] = {};
          var tmpHash = clipResults[prop];
          for (var dataFormat in tmpHash) {
            if (dataFormat && _hasOwn.call(tmpHash, dataFormat) && _hasOwn.call(formatMap, dataFormat)) {
              newResults[prop][formatMap[dataFormat]] = tmpHash[dataFormat];
            }
          }
        }
      }
    }
    return newResults;
  };
  /**
 * Will look at a path, and will create a "?noCache={time}" or "&noCache={time}"
 * query param string to return. Does NOT append that string to the original path.
 * This is useful because ExternalInterface often breaks when a Flash SWF is cached.
 *
 * @returns The `noCache` query param with necessary "?"/"&" prefix.
 * @private
 */
  var _cacheBust = function(path, options) {
    var cacheBust = options == null || options && options.cacheBust === true;
    if (cacheBust) {
      return (path.indexOf("?") === -1 ? "?" : "&") + "noCache=" + _now();
    } else {
      return "";
    }
  };
  /**
 * Creates a query string for the FlashVars param.
 * Does NOT include the cache-busting query param.
 *
 * @returns FlashVars query string
 * @private
 */
  var _vars = function(options) {
    var i, len, domain, domains, str = "", trustedOriginsExpanded = [];
    if (options.trustedDomains) {
      if (typeof options.trustedDomains === "string") {
        domains = [ options.trustedDomains ];
      } else if (typeof options.trustedDomains === "object" && "length" in options.trustedDomains) {
        domains = options.trustedDomains;
      }
    }
    if (domains && domains.length) {
      for (i = 0, len = domains.length; i < len; i++) {
        if (_hasOwn.call(domains, i) && domains[i] && typeof domains[i] === "string") {
          domain = _extractDomain(domains[i]);
          if (!domain) {
            continue;
          }
          if (domain === "*") {
            trustedOriginsExpanded.length = 0;
            trustedOriginsExpanded.push(domain);
            break;
          }
          trustedOriginsExpanded.push.apply(trustedOriginsExpanded, [ domain, "//" + domain, _window.location.protocol + "//" + domain ]);
        }
      }
    }
    if (trustedOriginsExpanded.length) {
      str += "trustedOrigins=" + _encodeURIComponent(trustedOriginsExpanded.join(","));
    }
    if (options.forceEnhancedClipboard === true) {
      str += (str ? "&" : "") + "forceEnhancedClipboard=true";
    }
    if (typeof options.swfObjectId === "string" && options.swfObjectId) {
      str += (str ? "&" : "") + "swfObjectId=" + _encodeURIComponent(options.swfObjectId);
    }
    if (typeof options.jsVersion === "string" && options.jsVersion) {
      str += (str ? "&" : "") + "jsVersion=" + _encodeURIComponent(options.jsVersion);
    }
    return str;
  };
  /**
 * Extract the domain (e.g. "github.com") from an origin (e.g. "https://github.com") or
 * URL (e.g. "https://github.com/zeroclipboard/zeroclipboard/").
 *
 * @returns the domain
 * @private
 */
  var _extractDomain = function(originOrUrl) {
    if (originOrUrl == null || originOrUrl === "") {
      return null;
    }
    originOrUrl = originOrUrl.replace(/^\s+|\s+$/g, "");
    if (originOrUrl === "") {
      return null;
    }
    var protocolIndex = originOrUrl.indexOf("//");
    originOrUrl = protocolIndex === -1 ? originOrUrl : originOrUrl.slice(protocolIndex + 2);
    var pathIndex = originOrUrl.indexOf("/");
    originOrUrl = pathIndex === -1 ? originOrUrl : protocolIndex === -1 || pathIndex === 0 ? null : originOrUrl.slice(0, pathIndex);
    if (originOrUrl && originOrUrl.slice(-4).toLowerCase() === ".swf") {
      return null;
    }
    return originOrUrl || null;
  };
  /**
 * Set `allowScriptAccess` based on `trustedDomains` and `window.location.host` vs. `swfPath`.
 *
 * @returns The appropriate script access level.
 * @private
 */
  var _determineScriptAccess = function() {
    var _extractAllDomains = function(origins) {
      var i, len, tmp, resultsArray = [];
      if (typeof origins === "string") {
        origins = [ origins ];
      }
      if (!(typeof origins === "object" && origins && typeof origins.length === "number")) {
        return resultsArray;
      }
      for (i = 0, len = origins.length; i < len; i++) {
        if (_hasOwn.call(origins, i) && (tmp = _extractDomain(origins[i]))) {
          if (tmp === "*") {
            resultsArray.length = 0;
            resultsArray.push("*");
            break;
          }
          if (resultsArray.indexOf(tmp) === -1) {
            resultsArray.push(tmp);
          }
        }
      }
      return resultsArray;
    };
    return function(currentDomain, configOptions) {
      var swfDomain = _extractDomain(configOptions.swfPath);
      if (swfDomain === null) {
        swfDomain = currentDomain;
      }
      var trustedDomains = _extractAllDomains(configOptions.trustedDomains);
      var len = trustedDomains.length;
      if (len > 0) {
        if (len === 1 && trustedDomains[0] === "*") {
          return "always";
        }
        if (trustedDomains.indexOf(currentDomain) !== -1) {
          if (len === 1 && currentDomain === swfDomain) {
            return "sameDomain";
          }
          return "always";
        }
      }
      return "never";
    };
  }();
  /**
 * Get the currently active/focused DOM element.
 *
 * @returns the currently active/focused element, or `null`
 * @private
 */
  var _safeActiveElement = function() {
    try {
      return _document.activeElement;
    } catch (err) {
      return null;
    }
  };
  /**
 * Add a class to an element, if it doesn't already have it.
 *
 * @returns The element, with its new class added.
 * @private
 */
  var _addClass = function(element, value) {
    var c, cl, className, classNames = [];
    if (typeof value === "string" && value) {
      classNames = value.split(/\s+/);
    }
    if (element && element.nodeType === 1 && classNames.length > 0) {
      if (element.classList) {
        for (c = 0, cl = classNames.length; c < cl; c++) {
          element.classList.add(classNames[c]);
        }
      } else if (element.hasOwnProperty("className")) {
        className = " " + element.className + " ";
        for (c = 0, cl = classNames.length; c < cl; c++) {
          if (className.indexOf(" " + classNames[c] + " ") === -1) {
            className += classNames[c] + " ";
          }
        }
        element.className = className.replace(/^\s+|\s+$/g, "");
      }
    }
    return element;
  };
  /**
 * Remove a class from an element, if it has it.
 *
 * @returns The element, with its class removed.
 * @private
 */
  var _removeClass = function(element, value) {
    var c, cl, className, classNames = [];
    if (typeof value === "string" && value) {
      classNames = value.split(/\s+/);
    }
    if (element && element.nodeType === 1 && classNames.length > 0) {
      if (element.classList && element.classList.length > 0) {
        for (c = 0, cl = classNames.length; c < cl; c++) {
          element.classList.remove(classNames[c]);
        }
      } else if (element.className) {
        className = (" " + element.className + " ").replace(/[\r\n\t]/g, " ");
        for (c = 0, cl = classNames.length; c < cl; c++) {
          className = className.replace(" " + classNames[c] + " ", " ");
        }
        element.className = className.replace(/^\s+|\s+$/g, "");
      }
    }
    return element;
  };
  /**
 * Attempt to interpret the element's CSS styling. If `prop` is `"cursor"`,
 * then we assume that it should be a hand ("pointer") cursor if the element
 * is an anchor element ("a" tag).
 *
 * @returns The computed style property.
 * @private
 */
  var _getStyle = function(el, prop) {
    var value = _getComputedStyle(el, null).getPropertyValue(prop);
    if (prop === "cursor") {
      if (!value || value === "auto") {
        if (el.nodeName === "A") {
          return "pointer";
        }
      }
    }
    return value;
  };
  /**
 * Get the absolutely positioned coordinates of a DOM element.
 *
 * @returns Object containing the element's position, width, and height.
 * @private
 */
  var _getElementPosition = function(el) {
    var pos = {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
    if (el.getBoundingClientRect) {
      var elRect = el.getBoundingClientRect();
      var pageXOffset = _window.pageXOffset;
      var pageYOffset = _window.pageYOffset;
      var leftBorderWidth = _document.documentElement.clientLeft || 0;
      var topBorderWidth = _document.documentElement.clientTop || 0;
      var leftBodyOffset = 0;
      var topBodyOffset = 0;
      if (_getStyle(_document.body, "position") === "relative") {
        var bodyRect = _document.body.getBoundingClientRect();
        var htmlRect = _document.documentElement.getBoundingClientRect();
        leftBodyOffset = bodyRect.left - htmlRect.left || 0;
        topBodyOffset = bodyRect.top - htmlRect.top || 0;
      }
      pos.left = elRect.left + pageXOffset - leftBorderWidth - leftBodyOffset;
      pos.top = elRect.top + pageYOffset - topBorderWidth - topBodyOffset;
      pos.width = "width" in elRect ? elRect.width : elRect.right - elRect.left;
      pos.height = "height" in elRect ? elRect.height : elRect.bottom - elRect.top;
    }
    return pos;
  };
  /**
 * Determine is an element is visible somewhere within the document (page).
 *
 * @returns Boolean
 * @private
 */
  var _isElementVisible = function(el) {
    if (!el) {
      return false;
    }
    var styles = _getComputedStyle(el, null);
    var hasCssHeight = _parseFloat(styles.height) > 0;
    var hasCssWidth = _parseFloat(styles.width) > 0;
    var hasCssTop = _parseFloat(styles.top) >= 0;
    var hasCssLeft = _parseFloat(styles.left) >= 0;
    var cssKnows = hasCssHeight && hasCssWidth && hasCssTop && hasCssLeft;
    var rect = cssKnows ? null : _getElementPosition(el);
    var isVisible = styles.display !== "none" && styles.visibility !== "collapse" && (cssKnows || !!rect && (hasCssHeight || rect.height > 0) && (hasCssWidth || rect.width > 0) && (hasCssTop || rect.top >= 0) && (hasCssLeft || rect.left >= 0));
    return isVisible;
  };
  /**
 * Clear all existing timeouts and interval polling delegates.
 *
 * @returns `undefined`
 * @private
 */
  var _clearTimeoutsAndPolling = function() {
    _clearTimeout(_flashCheckTimeout);
    _flashCheckTimeout = 0;
    _clearInterval(_swfFallbackCheckInterval);
    _swfFallbackCheckInterval = 0;
  };
  /**
 * Reposition the Flash object to cover the currently activated element.
 *
 * @returns `undefined`
 * @private
 */
  var _reposition = function() {
    var htmlBridge;
    if (_currentElement && (htmlBridge = _getHtmlBridge(_flashState.bridge))) {
      var pos = _getElementPosition(_currentElement);
      _extend(htmlBridge.style, {
        width: pos.width + "px",
        height: pos.height + "px",
        top: pos.top + "px",
        left: pos.left + "px",
        zIndex: "" + _getSafeZIndex(_globalConfig.zIndex)
      });
    }
  };
  /**
 * Sends a signal to the Flash object to display the hand cursor if `true`.
 *
 * @returns `undefined`
 * @private
 */
  var _setHandCursor = function(enabled) {
    if (_flashState.ready === true) {
      if (_flashState.bridge && typeof _flashState.bridge.setHandCursor === "function") {
        _flashState.bridge.setHandCursor(enabled);
      } else {
        _flashState.ready = false;
      }
    }
  };
  /**
 * Get a safe value for `zIndex`
 *
 * @returns an integer, or "auto"
 * @private
 */
  var _getSafeZIndex = function(val) {
    if (/^(?:auto|inherit)$/.test(val)) {
      return val;
    }
    var zIndex;
    if (typeof val === "number" && !_isNaN(val)) {
      zIndex = val;
    } else if (typeof val === "string") {
      zIndex = _getSafeZIndex(_parseInt(val, 10));
    }
    return typeof zIndex === "number" ? zIndex : "auto";
  };
  /**
 * Attempt to detect if ZeroClipboard is executing inside of a sandboxed iframe.
 * If it is, Flash Player cannot be used, so ZeroClipboard is dead in the water.
 *
 * @see {@link http://lists.w3.org/Archives/Public/public-whatwg-archive/2014Dec/0002.html}
 * @see {@link https://github.com/zeroclipboard/zeroclipboard/issues/511}
 * @see {@link http://zeroclipboard.org/test-iframes.html}
 *
 * @returns `true` (is sandboxed), `false` (is not sandboxed), or `null` (uncertain) 
 * @private
 */
  var _detectSandbox = function(doNotReassessFlashSupport) {
    var effectiveScriptOrigin, frame, frameError, previousState = _flashState.sandboxed, isSandboxed = null;
    doNotReassessFlashSupport = doNotReassessFlashSupport === true;
    if (_pageIsFramed === false) {
      isSandboxed = false;
    } else {
      try {
        frame = window.frameElement || null;
      } catch (e) {
        frameError = {
          name: e.name,
          message: e.message
        };
      }
      if (frame && frame.nodeType === 1 && frame.nodeName === "IFRAME") {
        try {
          isSandboxed = frame.hasAttribute("sandbox");
        } catch (e) {
          isSandboxed = null;
        }
      } else {
        try {
          effectiveScriptOrigin = document.domain || null;
        } catch (e) {
          effectiveScriptOrigin = null;
        }
        if (effectiveScriptOrigin === null || frameError && frameError.name === "SecurityError" && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(frameError.message.toLowerCase())) {
          isSandboxed = true;
        }
      }
    }
    _flashState.sandboxed = isSandboxed;
    if (previousState !== isSandboxed && !doNotReassessFlashSupport) {
      _detectFlashSupport(_ActiveXObject);
    }
    return isSandboxed;
  };
  /**
 * Detect the Flash Player status, version, and plugin type.
 *
 * @see {@link https://code.google.com/p/doctype-mirror/wiki/ArticleDetectFlash#The_code}
 * @see {@link http://stackoverflow.com/questions/12866060/detecting-pepper-ppapi-flash-with-javascript}
 *
 * @returns `undefined`
 * @private
 */
  var _detectFlashSupport = function(ActiveXObject) {
    var plugin, ax, mimeType, hasFlash = false, isActiveX = false, isPPAPI = false, flashVersion = "";
    /**
   * Derived from Apple's suggested sniffer.
   * @param {String} desc e.g. "Shockwave Flash 7.0 r61"
   * @returns {String} "7.0.61"
   * @private
   */
    function parseFlashVersion(desc) {
      var matches = desc.match(/[\d]+/g);
      matches.length = 3;
      return matches.join(".");
    }
    function isPepperFlash(flashPlayerFileName) {
      return !!flashPlayerFileName && (flashPlayerFileName = flashPlayerFileName.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(flashPlayerFileName) || flashPlayerFileName.slice(-13) === "chrome.plugin");
    }
    function inspectPlugin(plugin) {
      if (plugin) {
        hasFlash = true;
        if (plugin.version) {
          flashVersion = parseFlashVersion(plugin.version);
        }
        if (!flashVersion && plugin.description) {
          flashVersion = parseFlashVersion(plugin.description);
        }
        if (plugin.filename) {
          isPPAPI = isPepperFlash(plugin.filename);
        }
      }
    }
    if (_navigator.plugins && _navigator.plugins.length) {
      plugin = _navigator.plugins["Shockwave Flash"];
      inspectPlugin(plugin);
      if (_navigator.plugins["Shockwave Flash 2.0"]) {
        hasFlash = true;
        flashVersion = "2.0.0.11";
      }
    } else if (_navigator.mimeTypes && _navigator.mimeTypes.length) {
      mimeType = _navigator.mimeTypes["application/x-shockwave-flash"];
      plugin = mimeType && mimeType.enabledPlugin;
      inspectPlugin(plugin);
    } else if (typeof ActiveXObject !== "undefined") {
      isActiveX = true;
      try {
        ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        hasFlash = true;
        flashVersion = parseFlashVersion(ax.GetVariable("$version"));
      } catch (e1) {
        try {
          ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
          hasFlash = true;
          flashVersion = "6.0.21";
        } catch (e2) {
          try {
            ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            hasFlash = true;
            flashVersion = parseFlashVersion(ax.GetVariable("$version"));
          } catch (e3) {
            isActiveX = false;
          }
        }
      }
    }
    _flashState.disabled = hasFlash !== true;
    _flashState.outdated = flashVersion && _parseFloat(flashVersion) < _parseFloat(_minimumFlashVersion);
    _flashState.version = flashVersion || "0.0.0";
    _flashState.pluginType = isPPAPI ? "pepper" : isActiveX ? "activex" : hasFlash ? "netscape" : "unknown";
  };
  /**
 * Invoke the Flash detection algorithms immediately upon inclusion so we're not waiting later.
 */
  _detectFlashSupport(_ActiveXObject);
  /**
 * Always assess the `sandboxed` state of the page at important Flash-related moments.
 */
  _detectSandbox(true);
  /**
 * A shell constructor for `ZeroClipboard` client instances.
 *
 * @constructor
 */
  var ZeroClipboard = function() {
    if (!(this instanceof ZeroClipboard)) {
      return new ZeroClipboard();
    }
    if (typeof ZeroClipboard._createClient === "function") {
      ZeroClipboard._createClient.apply(this, _args(arguments));
    }
  };
  /**
 * The ZeroClipboard library's version number.
 *
 * @static
 * @readonly
 * @property {string}
 */
  _defineProperty(ZeroClipboard, "version", {
    value: "2.2.0",
    writable: false,
    configurable: true,
    enumerable: true
  });
  /**
 * Update or get a copy of the ZeroClipboard global configuration.
 * Returns a copy of the current/updated configuration.
 *
 * @returns Object
 * @static
 */
  ZeroClipboard.config = function() {
    return _config.apply(this, _args(arguments));
  };
  /**
 * Diagnostic method that describes the state of the browser, Flash Player, and ZeroClipboard.
 *
 * @returns Object
 * @static
 */
  ZeroClipboard.state = function() {
    return _state.apply(this, _args(arguments));
  };
  /**
 * Check if Flash is unusable for any reason: disabled, outdated, deactivated, etc.
 *
 * @returns Boolean
 * @static
 */
  ZeroClipboard.isFlashUnusable = function() {
    return _isFlashUnusable.apply(this, _args(arguments));
  };
  /**
 * Register an event listener.
 *
 * @returns `ZeroClipboard`
 * @static
 */
  ZeroClipboard.on = function() {
    return _on.apply(this, _args(arguments));
  };
  /**
 * Unregister an event listener.
 * If no `listener` function/object is provided, it will unregister all listeners for the provided `eventType`.
 * If no `eventType` is provided, it will unregister all listeners for every event type.
 *
 * @returns `ZeroClipboard`
 * @static
 */
  ZeroClipboard.off = function() {
    return _off.apply(this, _args(arguments));
  };
  /**
 * Retrieve event listeners for an `eventType`.
 * If no `eventType` is provided, it will retrieve all listeners for every event type.
 *
 * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
 */
  ZeroClipboard.handlers = function() {
    return _listeners.apply(this, _args(arguments));
  };
  /**
 * Event emission receiver from the Flash object, forwarding to any registered JavaScript event listeners.
 *
 * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
 * @static
 */
  ZeroClipboard.emit = function() {
    return _emit.apply(this, _args(arguments));
  };
  /**
 * Create and embed the Flash object.
 *
 * @returns The Flash object
 * @static
 */
  ZeroClipboard.create = function() {
    return _create.apply(this, _args(arguments));
  };
  /**
 * Self-destruct and clean up everything, including the embedded Flash object.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.destroy = function() {
    return _destroy.apply(this, _args(arguments));
  };
  /**
 * Set the pending data for clipboard injection.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.setData = function() {
    return _setData.apply(this, _args(arguments));
  };
  /**
 * Clear the pending data for clipboard injection.
 * If no `format` is provided, all pending data formats will be cleared.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.clearData = function() {
    return _clearData.apply(this, _args(arguments));
  };
  /**
 * Get a copy of the pending data for clipboard injection.
 * If no `format` is provided, a copy of ALL pending data formats will be returned.
 *
 * @returns `String` or `Object`
 * @static
 */
  ZeroClipboard.getData = function() {
    return _getData.apply(this, _args(arguments));
  };
  /**
 * Sets the current HTML object that the Flash object should overlay. This will put the global
 * Flash object on top of the current element; depending on the setup, this may also set the
 * pending clipboard text data as well as the Flash object's wrapping element's title attribute
 * based on the underlying HTML element and ZeroClipboard configuration.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.focus = ZeroClipboard.activate = function() {
    return _focus.apply(this, _args(arguments));
  };
  /**
 * Un-overlays the Flash object. This will put the global Flash object off-screen; depending on
 * the setup, this may also unset the Flash object's wrapping element's title attribute based on
 * the underlying HTML element and ZeroClipboard configuration.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.blur = ZeroClipboard.deactivate = function() {
    return _blur.apply(this, _args(arguments));
  };
  /**
 * Returns the currently focused/"activated" HTML element that the Flash object is wrapping.
 *
 * @returns `HTMLElement` or `null`
 * @static
 */
  ZeroClipboard.activeElement = function() {
    return _activeElement.apply(this, _args(arguments));
  };
  /**
 * Keep track of the ZeroClipboard client instance counter.
 */
  var _clientIdCounter = 0;
  /**
 * Keep track of the state of the client instances.
 *
 * Entry structure:
 *   _clientMeta[client.id] = {
 *     instance: client,
 *     elements: [],
 *     handlers: {}
 *   };
 */
  var _clientMeta = {};
  /**
 * Keep track of the ZeroClipboard clipped elements counter.
 */
  var _elementIdCounter = 0;
  /**
 * Keep track of the state of the clipped element relationships to clients.
 *
 * Entry structure:
 *   _elementMeta[element.zcClippingId] = [client1.id, client2.id];
 */
  var _elementMeta = {};
  /**
 * Keep track of the state of the mouse event handlers for clipped elements.
 *
 * Entry structure:
 *   _mouseHandlers[element.zcClippingId] = {
 *     mouseover:  function(event) {},
 *     mouseout:   function(event) {},
 *     mouseenter: function(event) {},
 *     mouseleave: function(event) {},
 *     mousemove:  function(event) {}
 *   };
 */
  var _mouseHandlers = {};
  /**
 * Extending the ZeroClipboard configuration defaults for the Client module.
 */
  _extend(_globalConfig, {
    autoActivate: true
  });
  /**
 * The real constructor for `ZeroClipboard` client instances.
 * @private
 */
  var _clientConstructor = function(elements) {
    var client = this;
    client.id = "" + _clientIdCounter++;
    _clientMeta[client.id] = {
      instance: client,
      elements: [],
      handlers: {}
    };
    if (elements) {
      client.clip(elements);
    }
    ZeroClipboard.on("*", function(event) {
      return client.emit(event);
    });
    ZeroClipboard.on("destroy", function() {
      client.destroy();
    });
    ZeroClipboard.create();
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.on`.
 * @private
 */
  var _clientOn = function(eventType, listener) {
    var i, len, events, added = {}, meta = _clientMeta[this.id], handlers = meta && meta.handlers;
    if (!meta) {
      throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
    }
    if (typeof eventType === "string" && eventType) {
      events = eventType.toLowerCase().split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          this.on(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].replace(/^on/, "");
        added[eventType] = true;
        if (!handlers[eventType]) {
          handlers[eventType] = [];
        }
        handlers[eventType].push(listener);
      }
      if (added.ready && _flashState.ready) {
        this.emit({
          type: "ready",
          client: this
        });
      }
      if (added.error) {
        for (i = 0, len = _flashStateErrorNames.length; i < len; i++) {
          if (_flashState[_flashStateErrorNames[i].replace(/^flash-/, "")]) {
            this.emit({
              type: "error",
              name: _flashStateErrorNames[i],
              client: this
            });
            break;
          }
        }
        if (_zcSwfVersion !== undefined && ZeroClipboard.version !== _zcSwfVersion) {
          this.emit({
            type: "error",
            name: "version-mismatch",
            jsVersion: ZeroClipboard.version,
            swfVersion: _zcSwfVersion
          });
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.off`.
 * @private
 */
  var _clientOff = function(eventType, listener) {
    var i, len, foundIndex, events, perEventHandlers, meta = _clientMeta[this.id], handlers = meta && meta.handlers;
    if (!handlers) {
      return this;
    }
    if (arguments.length === 0) {
      events = _keys(handlers);
    } else if (typeof eventType === "string" && eventType) {
      events = eventType.split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          this.off(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].toLowerCase().replace(/^on/, "");
        perEventHandlers = handlers[eventType];
        if (perEventHandlers && perEventHandlers.length) {
          if (listener) {
            foundIndex = perEventHandlers.indexOf(listener);
            while (foundIndex !== -1) {
              perEventHandlers.splice(foundIndex, 1);
              foundIndex = perEventHandlers.indexOf(listener, foundIndex);
            }
          } else {
            perEventHandlers.length = 0;
          }
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.handlers`.
 * @private
 */
  var _clientListeners = function(eventType) {
    var copy = null, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (handlers) {
      if (typeof eventType === "string" && eventType) {
        copy = handlers[eventType] ? handlers[eventType].slice(0) : [];
      } else {
        copy = _deepCopy(handlers);
      }
    }
    return copy;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.emit`.
 * @private
 */
  var _clientEmit = function(event) {
    if (_clientShouldEmit.call(this, event)) {
      if (typeof event === "object" && event && typeof event.type === "string" && event.type) {
        event = _extend({}, event);
      }
      var eventCopy = _extend({}, _createEvent(event), {
        client: this
      });
      _clientDispatchCallbacks.call(this, eventCopy);
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.clip`.
 * @private
 */
  var _clientClip = function(elements) {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
    }
    elements = _prepClip(elements);
    for (var i = 0; i < elements.length; i++) {
      if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
        if (!elements[i].zcClippingId) {
          elements[i].zcClippingId = "zcClippingId_" + _elementIdCounter++;
          _elementMeta[elements[i].zcClippingId] = [ this.id ];
          if (_globalConfig.autoActivate === true) {
            _addMouseHandlers(elements[i]);
          }
        } else if (_elementMeta[elements[i].zcClippingId].indexOf(this.id) === -1) {
          _elementMeta[elements[i].zcClippingId].push(this.id);
        }
        var clippedElements = _clientMeta[this.id] && _clientMeta[this.id].elements;
        if (clippedElements.indexOf(elements[i]) === -1) {
          clippedElements.push(elements[i]);
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.unclip`.
 * @private
 */
  var _clientUnclip = function(elements) {
    var meta = _clientMeta[this.id];
    if (!meta) {
      return this;
    }
    var clippedElements = meta.elements;
    var arrayIndex;
    if (typeof elements === "undefined") {
      elements = clippedElements.slice(0);
    } else {
      elements = _prepClip(elements);
    }
    for (var i = elements.length; i--; ) {
      if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
        arrayIndex = 0;
        while ((arrayIndex = clippedElements.indexOf(elements[i], arrayIndex)) !== -1) {
          clippedElements.splice(arrayIndex, 1);
        }
        var clientIds = _elementMeta[elements[i].zcClippingId];
        if (clientIds) {
          arrayIndex = 0;
          while ((arrayIndex = clientIds.indexOf(this.id, arrayIndex)) !== -1) {
            clientIds.splice(arrayIndex, 1);
          }
          if (clientIds.length === 0) {
            if (_globalConfig.autoActivate === true) {
              _removeMouseHandlers(elements[i]);
            }
            delete elements[i].zcClippingId;
          }
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.elements`.
 * @private
 */
  var _clientElements = function() {
    var meta = _clientMeta[this.id];
    return meta && meta.elements ? meta.elements.slice(0) : [];
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.destroy`.
 * @private
 */
  var _clientDestroy = function() {
    if (!_clientMeta[this.id]) {
      return;
    }
    this.unclip();
    this.off();
    delete _clientMeta[this.id];
  };
  /**
 * Inspect an Event to see if the Client (`this`) should honor it for emission.
 * @private
 */
  var _clientShouldEmit = function(event) {
    if (!(event && event.type)) {
      return false;
    }
    if (event.client && event.client !== this) {
      return false;
    }
    var meta = _clientMeta[this.id];
    var clippedEls = meta && meta.elements;
    var hasClippedEls = !!clippedEls && clippedEls.length > 0;
    var goodTarget = !event.target || hasClippedEls && clippedEls.indexOf(event.target) !== -1;
    var goodRelTarget = event.relatedTarget && hasClippedEls && clippedEls.indexOf(event.relatedTarget) !== -1;
    var goodClient = event.client && event.client === this;
    if (!meta || !(goodTarget || goodRelTarget || goodClient)) {
      return false;
    }
    return true;
  };
  /**
 * Handle the actual dispatching of events to a client instance.
 *
 * @returns `undefined`
 * @private
 */
  var _clientDispatchCallbacks = function(event) {
    var meta = _clientMeta[this.id];
    if (!(typeof event === "object" && event && event.type && meta)) {
      return;
    }
    var async = _shouldPerformAsync(event);
    var wildcardTypeHandlers = meta && meta.handlers["*"] || [];
    var specificTypeHandlers = meta && meta.handlers[event.type] || [];
    var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
    if (handlers && handlers.length) {
      var i, len, func, context, eventCopy, originalContext = this;
      for (i = 0, len = handlers.length; i < len; i++) {
        func = handlers[i];
        context = originalContext;
        if (typeof func === "string" && typeof _window[func] === "function") {
          func = _window[func];
        }
        if (typeof func === "object" && func && typeof func.handleEvent === "function") {
          context = func;
          func = func.handleEvent;
        }
        if (typeof func === "function") {
          eventCopy = _extend({}, event);
          _dispatchCallback(func, context, [ eventCopy ], async);
        }
      }
    }
  };
  /**
 * Prepares the elements for clipping/unclipping.
 *
 * @returns An Array of elements.
 * @private
 */
  var _prepClip = function(elements) {
    if (typeof elements === "string") {
      elements = [];
    }
    return typeof elements.length !== "number" ? [ elements ] : elements;
  };
  /**
 * Add a `mouseover` handler function for a clipped element.
 *
 * @returns `undefined`
 * @private
 */
  var _addMouseHandlers = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    var _suppressMouseEvents = function(event) {
      if (!(event || (event = _window.event))) {
        return;
      }
      if (event._source !== "js") {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
      delete event._source;
    };
    var _elementMouseOver = function(event) {
      if (!(event || (event = _window.event))) {
        return;
      }
      _suppressMouseEvents(event);
      ZeroClipboard.focus(element);
    };
    element.addEventListener("mouseover", _elementMouseOver, false);
    element.addEventListener("mouseout", _suppressMouseEvents, false);
    element.addEventListener("mouseenter", _suppressMouseEvents, false);
    element.addEventListener("mouseleave", _suppressMouseEvents, false);
    element.addEventListener("mousemove", _suppressMouseEvents, false);
    _mouseHandlers[element.zcClippingId] = {
      mouseover: _elementMouseOver,
      mouseout: _suppressMouseEvents,
      mouseenter: _suppressMouseEvents,
      mouseleave: _suppressMouseEvents,
      mousemove: _suppressMouseEvents
    };
  };
  /**
 * Remove a `mouseover` handler function for a clipped element.
 *
 * @returns `undefined`
 * @private
 */
  var _removeMouseHandlers = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    var mouseHandlers = _mouseHandlers[element.zcClippingId];
    if (!(typeof mouseHandlers === "object" && mouseHandlers)) {
      return;
    }
    var key, val, mouseEvents = [ "move", "leave", "enter", "out", "over" ];
    for (var i = 0, len = mouseEvents.length; i < len; i++) {
      key = "mouse" + mouseEvents[i];
      val = mouseHandlers[key];
      if (typeof val === "function") {
        element.removeEventListener(key, val, false);
      }
    }
    delete _mouseHandlers[element.zcClippingId];
  };
  /**
 * Creates a new ZeroClipboard client instance.
 * Optionally, auto-`clip` an element or collection of elements.
 *
 * @constructor
 */
  ZeroClipboard._createClient = function() {
    _clientConstructor.apply(this, _args(arguments));
  };
  /**
 * Register an event listener to the client.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.on = function() {
    return _clientOn.apply(this, _args(arguments));
  };
  /**
 * Unregister an event handler from the client.
 * If no `listener` function/object is provided, it will unregister all handlers for the provided `eventType`.
 * If no `eventType` is provided, it will unregister all handlers for every event type.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.off = function() {
    return _clientOff.apply(this, _args(arguments));
  };
  /**
 * Retrieve event listeners for an `eventType` from the client.
 * If no `eventType` is provided, it will retrieve all listeners for every event type.
 *
 * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
 */
  ZeroClipboard.prototype.handlers = function() {
    return _clientListeners.apply(this, _args(arguments));
  };
  /**
 * Event emission receiver from the Flash object for this client's registered JavaScript event listeners.
 *
 * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
 */
  ZeroClipboard.prototype.emit = function() {
    return _clientEmit.apply(this, _args(arguments));
  };
  /**
 * Register clipboard actions for new element(s) to the client.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.clip = function() {
    return _clientClip.apply(this, _args(arguments));
  };
  /**
 * Unregister the clipboard actions of previously registered element(s) on the page.
 * If no elements are provided, ALL registered elements will be unregistered.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.unclip = function() {
    return _clientUnclip.apply(this, _args(arguments));
  };
  /**
 * Get all of the elements to which this client is clipped.
 *
 * @returns array of clipped elements
 */
  ZeroClipboard.prototype.elements = function() {
    return _clientElements.apply(this, _args(arguments));
  };
  /**
 * Self-destruct and clean up everything for a single client.
 * This will NOT destroy the embedded Flash object.
 *
 * @returns `undefined`
 */
  ZeroClipboard.prototype.destroy = function() {
    return _clientDestroy.apply(this, _args(arguments));
  };
  /**
 * Stores the pending plain text to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setText = function(text) {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.setData("text/plain", text);
    return this;
  };
  /**
 * Stores the pending HTML text to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setHtml = function(html) {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.setData("text/html", html);
    return this;
  };
  /**
 * Stores the pending rich text (RTF) to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setRichText = function(richText) {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.setData("application/rtf", richText);
    return this;
  };
  /**
 * Stores the pending data to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setData = function() {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.setData.apply(this, _args(arguments));
    return this;
  };
  /**
 * Clears the pending data to inject into the clipboard.
 * If no `format` is provided, all pending data formats will be cleared.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.clearData = function() {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.clearData.apply(this, _args(arguments));
    return this;
  };
  /**
 * Gets a copy of the pending data to inject into the clipboard.
 * If no `format` is provided, a copy of ALL pending data formats will be returned.
 *
 * @returns `String` or `Object`
 */
  ZeroClipboard.prototype.getData = function() {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    return ZeroClipboard.getData.apply(this, _args(arguments));
  };
  if (typeof define === "function" && define.amd) {
    define(function() {
      return ZeroClipboard;
    });
  } else if (typeof module === "object" && module && typeof module.exports === "object" && module.exports) {
    module.exports = ZeroClipboard;
  } else {
    window.ZeroClipboard = ZeroClipboard;
  }
})(function() {
  return this || window;
}());
/*!
 * Materialize v0.97.5 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
if("undefined"==typeof jQuery){var jQuery;jQuery="function"==typeof require?$=require("jQuery"):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";
switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)})),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function aa(){V.apply(this,arguments),this._timer=null,this._input=null}function ba(){Z.apply(this,arguments)}function ca(){Z.apply(this,arguments)}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mb:lb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==ka&&define.amd?define(function(){return ea}):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer"),function(a){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],a):"object"==typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}),function(a){a.Package?Materialize={}:a.Materialize={}}(window),Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){return"fixed"===$(this).css("position")?(d=!0,!1):void 0}),d};var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,function(a){a.fn.collapsible=function(b){var c={accordion:void 0};return b=a.extend(c,b),this.each(function(){function c(b){h=g.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}),h.not(b).removeClass("active").parent().removeClass("active"),h.not(b).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function d(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function e(a){var b=f(a);return b.length>0}function f(a){return a.closest("li > .collapsible-header")}var g=a(this),h=a(this).find("> li > .collapsible-header"),i=g.data("collapsible");g.off("click.collapse","> li > .collapsible-header"),h.off("click.collapse"),g.on("click.collapse","> li > .collapsible-header",function(g){var h=a(this),j=a(g.target);e(j)&&(j=f(j)),j.toggleClass("active"),b.accordion||"accordion"===i||void 0===i?c(j):(d(j),h.hasClass("active")&&d(h))});var h=g.find("> li > .collapsible-header");b.accordion||"accordion"===i||void 0===i?c(h.filter(".active").first()):h.filter(".active").each(function(){d(a(this))})})},a(document).ready(function(){a(".collapsible").collapsible()})}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){function d(){void 0!==g.data("induration")&&(h.inDuration=g.data("inDuration")),void 0!==g.data("outduration")&&(h.outDuration=g.data("outDuration")),void 0!==g.data("constrainwidth")&&(h.constrain_width=g.data("constrainwidth")),void 0!==g.data("hover")&&(h.hover=g.data("hover")),void 0!==g.data("gutter")&&(h.gutter=g.data("gutter")),void 0!==g.data("beloworigin")&&(h.belowOrigin=g.data("beloworigin")),void 0!==g.data("alignment")&&(h.alignment=g.data("alignment"))}function e(b){"focus"===b&&(i=!0),d(),j.addClass("active"),g.addClass("active"),h.constrain_width===!0?j.css("width",g.outerWidth()):j.css("white-space","nowrap");var c,e=window.innerHeight,f=g.innerHeight(),k=g.offset().left,l=g.offset().top-a(window).scrollTop(),m=h.alignment,n=0;if(h.belowOrigin===!0&&(n=f),k+j.innerWidth()>a(window).width()?m="right":k-j.innerWidth()+g.innerWidth()<0&&(m="left"),l+j.innerHeight()>e)if(l+f-j.innerHeight()<0){var o=e-l-n;j.css("max-height",o)}else n||(n+=f),n-=j.innerHeight();if("left"===m)c=h.gutter,leftPosition=g.position().left+c;else if("right"===m){var p=g.position().left+g.outerWidth()-j.outerWidth();c=-h.gutter,leftPosition=p+c}j.css({position:"absolute",top:g.position().top+n,left:leftPosition}),j.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:h.inDuration,easing:"easeOutCubic",complete:function(){a(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:h.inDuration,easing:"easeOutSine"})}function f(){i=!1,j.fadeOut(h.outDuration),j.removeClass("active"),g.removeClass("active"),setTimeout(function(){j.css("max-height","")},h.outDuration)}var g=a(this),h=a.extend({},c,b),i=!1,j=a("#"+g.attr("data-activates"));if(d(),g.after(j),h.hover){var k=!1;g.unbind("click."+g.attr("id")),g.on("mouseenter",function(a){k===!1&&(e(),k=!0)}),g.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(j)||(j.stop(!0,!0),f(),k=!1)}),j.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(g)||(j.stop(!0,!0),f(),k=!1)})}else g.unbind("click."+g.attr("id")),g.bind("click."+g.attr("id"),function(b){i||(g[0]!=b.currentTarget||g.hasClass("active")||0!==a(b.target).closest(".dropdown-content").length?g.hasClass("active")&&(f(),a(document).unbind("click."+j.attr("id")+" touchstart."+j.attr("id"))):(b.preventDefault(),e("click")),j.hasClass("active")&&a(document).bind("click."+j.attr("id")+" touchstart."+j.attr("id"),function(b){j.is(b.target)||g.is(b.target)||g.find(b.target).length||(f(),a(document).unbind("click."+j.attr("id")+" touchstart."+j.attr("id")))}))});g.on("open",function(a,b){e(b)}),g.on("close",f)})},a(document).ready(function(){a(".dropdown-button").dropdown()})}(jQuery),function(a){var b=0,c=0,d=function(){return c++,"materialize-lean-overlay-"+c};a.fn.extend({openModal:function(c){a("body").css("overflow","hidden");var e={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%"},f=d(),g=a(this),h=a('<div class="lean-overlay"></div>'),i=++b;h.attr("id",f).css("z-index",1e3+2*i),g.data("overlay-id",f).css("z-index",1e3+2*i+1),a("body").append(h),c=a.extend(e,c),c.dismissible&&(h.click(function(){g.closeModal(c)}),a(document).on("keyup.leanModal"+f,function(a){27===a.keyCode&&g.closeModal(c)})),g.find(".modal-close").on("click.close",function(a){g.closeModal(c)}),h.css({display:"block",opacity:0}),g.css({display:"block",opacity:0}),h.velocity({opacity:c.opacity},{duration:c.in_duration,queue:!1,ease:"easeOutCubic"}),g.data("associated-overlay",h[0]),g.hasClass("bottom-sheet")?g.velocity({bottom:"0",opacity:1},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}):(a.Velocity.hook(g,"scaleX",.7),g.css({top:c.starting_top}),g.velocity({top:"10%",opacity:1,scaleX:"1"},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}))}}),a.fn.extend({closeModal:function(c){var d={out_duration:250,complete:void 0},e=a(this),f=e.data("overlay-id"),g=a("#"+f);c=a.extend(d,c),a("body").css("overflow",""),e.find(".modal-close").off("click.close"),a(document).off("keyup.leanModal"+f),g.velocity({opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutQuart"}),e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){
g.css({display:"none"}),"function"==typeof c.complete&&c.complete(),g.remove(),b--}}):e.velocity({top:c.starting_top,opacity:0,scaleX:.7},{duration:c.out_duration,complete:function(){a(this).css("display","none"),"function"==typeof c.complete&&c.complete(),g.remove(),b--}})}}),a.fn.extend({leanModal:function(b){return this.each(function(){var c={starting_top:"4%"},d=a.extend(c,b);a(this).click(function(b){d.starting_top=(a(this).offset().top-a(window).scrollTop())/1.15;var c=a(this).attr("href")||"#"+a(this).data("target");a(c).openModal(d),b.preventDefault()})})}})}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){f=!1;var b=i.parent(".material-placeholder"),d=(window.innerWidth,window.innerHeight,i.data("width")),g=i.data("height");i.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){e=!1,a(this).remove()}}),i.velocity({width:d,height:g,left:0,top:0},{duration:h,queue:!1,easing:"easeOutQuad"}),a(".materialbox-caption").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){b.css({height:"",width:"",position:"",top:"",left:""}),i.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),i.removeClass("active"),f=!0,a(this).remove(),c.css("overflow","")}})}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c,d,e=!1,f=!0,g=275,h=200,i=a(this),j=a("<div></div>").addClass("material-placeholder");i.wrap(j),i.on("click",function(){var h=i.parent(".material-placeholder"),j=window.innerWidth,k=window.innerHeight,l=i.width(),m=i.height();if(f===!1)return b(),!1;if(e&&f===!0)return b(),!1;f=!1,i.addClass("active"),e=!0,h.css({width:h[0].getBoundingClientRect().width,height:h[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),c=void 0,d=h[0].parentNode;for(;null!==d&&!a(d).is(document);){var n=a(d);"hidden"===n.css("overflow")&&(n.css("overflow","visible"),c=void 0===c?n:c.add(n)),d=d.parentNode}i.css({position:"absolute","z-index":1e3}).data("width",l).data("height",m);var o=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){f===!0&&b()});if(a("body").append(o),o.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"}),""!==i.data("caption")){var p=a('<div class="materialbox-caption"></div>');p.text(i.data("caption")),a("body").append(p),p.css({display:"inline"}),p.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"})}var q=0,r=l/j,s=m/k,t=0,u=0;r>s?(q=m/l,t=.9*j,u=.9*j*q):(q=l/m,t=.9*k*q,u=.9*k),i.hasClass("responsive-img")?i.velocity({"max-width":t,width:l},{duration:0,queue:!1,complete:function(){i.css({left:0,top:0}).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}}):i.css("left",0).css("top",0).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}),a(window).scroll(function(){e&&b()}),a(document).keyup(function(a){27===a.keyCode&&f===!0&&e&&b()})}})},a(document).ready(function(){a(".materialboxed").materialbox()})}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=601>b?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&k+l>j&&f.css("transform","translate3D(-50%,"+o+"px, 0)")}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0)}).each(function(){this.complete&&a(this).load()}),a(window).scroll(function(){b=a(window).width(),d(!1)}),a(window).resize(function(){b=a(window).width(),d(!1)})})}}(jQuery),function(a){var b={init:function(){return this.each(function(){var b=a(this);a(window).width();b.width("100%");var c,d,e=b.find("li.tab a"),f=b.width(),g=b.find("li").first().outerWidth(),h=0;c=a(e.filter('[href="'+location.hash+'"]')),0===c.length&&(c=a(this).find("li.tab a.active").first()),0===c.length&&(c=a(this).find("li.tab a").first()),c.addClass("active"),h=e.index(c),0>h&&(h=0),d=a(c[0].hash),b.append('<div class="indicator"></div>');var i=b.find(".indicator");b.is(":visible")&&(i.css({right:f-(h+1)*g}),i.css({left:h*g})),a(window).resize(function(){f=b.width(),g=b.find("li").first().outerWidth(),0>h&&(h=0),0!==g&&0!==f&&(i.css({right:f-(h+1)*g}),i.css({left:h*g}))}),e.not(c).each(function(){a(this.hash).hide()}),b.on("click","a",function(j){if(a(this).parent().hasClass("disabled"))return void j.preventDefault();f=b.width(),g=b.find("li").first().outerWidth(),c.removeClass("active"),d.hide(),c=a(this),d=a(this.hash),e=b.find("li.tab a"),c.addClass("active");var k=h;h=e.index(a(this)),0>h&&(h=0),d.show(),h-k>=0?(i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),j.preventDefault()})})},select_tab:function(a){this.find('a[href="#'+a+'"]').trigger("click")}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)},a(document).ready(function(){a("ul.tabs").tabs()})}(jQuery),function(a){a.fn.tooltip=function(c){var d=5,e={delay:350};return"remove"===c?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove(),a(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(c=a.extend(e,c),this.each(function(){var e=Materialize.guid(),f=a(this);f.attr("data-tooltip-id",e);var g=a("<span></span>").text(f.attr("data-tooltip")),h=a("<div></div>");h.addClass("material-tooltip").append(g).appendTo(a("body")).attr("id",e);var i=a("<div></div>").addClass("backdrop");i.appendTo(h),i.css({top:0,left:0}),f.off("mouseenter.tooltip mouseleave.tooltip");var j,k=!1;f.on({"mouseenter.tooltip":function(a){var e=f.attr("data-delay");e=void 0===e||""===e?c.delay:e,j=setTimeout(function(){k=!0,h.velocity("stop"),i.velocity("stop"),h.css({display:"block",left:"0px",top:"0px"}),h.children("span").text(f.attr("data-tooltip"));var a,c,e,g=f.outerWidth(),j=f.outerHeight(),l=f.attr("data-position"),m=h.outerHeight(),n=h.outerWidth(),o="0px",p="0px",q=8;"top"===l?(a=f.offset().top-m-d,c=f.offset().left+g/2-n/2,e=b(c,a,n,m),o="-10px",i.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:m,marginLeft:n/2-i.width()/2})):"left"===l?(a=f.offset().top+j/2-m/2,c=f.offset().left-n-d,e=b(c,a,n,m),p="-10px",i.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:m/2,marginLeft:n})):"right"===l?(a=f.offset().top+j/2-m/2,c=f.offset().left+g+d,e=b(c,a,n,m),p="+10px",i.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:m/2,marginLeft:"0px"})):(a=f.offset().top+f.outerHeight()+d,c=f.offset().left+g/2-n/2,e=b(c,a,n,m),o="+10px",i.css({marginLeft:n/2-i.width()/2})),h.css({top:e.y,left:e.x}),q=n/8,8>q&&(q=8),("right"===l||"left"===l)&&(q=n/10,6>q&&(q=6)),h.velocity({marginTop:o,marginLeft:p},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),i.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:q},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},e)},"mouseleave.tooltip":function(){k=!1,clearTimeout(j),setTimeout(function(){1!=k&&(h.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),i.velocity({opacity:0,scale:1},{duration:225,queue:!1,complete:function(){i.css("display","none"),h.css("display","none"),k=!1}}))},225)}})}))};var b=function(b,c,d,e){var f=b,g=c;return 0>f?f=4:f+d>window.innerWidth&&(f-=f+d-window.innerWidth),0>g?g=4:g+e>window.innerHeight+a(window).scrollTop&&(g-=g+e-window.innerHeight),{x:f,y:g}};a(document).ready(function(){a(".tooltipped").tooltip()})}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect()},!1)}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;g>f;f++)b.classList.add(e[f]);("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);0>e&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"})}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),b.parentNode.removeChild(b)}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),b}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.top="35px",g.style.opacity=0,Vel(g,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h=b,i=setInterval(function(){null===g.parentNode&&window.clearInterval(i),g.classList.contains("panning")||(h-=20),0>=h&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(i))},20)},function(a){var b={init:function(b){var c={menuWidth:240,edge:"left",closeOnClick:!1};b=a.extend(c,b),a(this).each(function(){function c(c){g=!1,h=!1,a("body").css("overflow",""),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===b.edge?(f.css({width:"",right:"",left:"0"}),e.velocity({left:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}})):(f.css({width:"",right:"0",left:""}),e.velocity({right:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}}))}var d=a(this),e=a("#"+d.attr("data-activates"));240!=b.menuWidth&&e.css("width",b.menuWidth);var f=a('<div class="drag-target"></div>');a("body").append(f),"left"==b.edge?(e.css("left",-1*(b.menuWidth+10)),f.css({left:0})):(e.addClass("right-aligned").css("right",-1*(b.menuWidth+10)).css("left",""),f.css({right:0})),e.hasClass("fixed")&&window.innerWidth>992&&e.css("left",0),e.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").css("opacity")&&h?c(!0):(e.removeAttr("style"),e.css("width",b.menuWidth)):h===!1&&("left"===b.edge?e.css("left",-1*(b.menuWidth+10)):e.css("right",-1*(b.menuWidth+10)))}),b.closeOnClick===!0&&e.on("click.itemclick","a:not(.collapsible-header)",function(){c()});var g=!1,h=!1;f.on("click",function(){c()}),f.hammer({prevent_default:!1}).bind("pan",function(d){if("touch"==d.gesture.pointerType){var f=(d.gesture.direction,d.gesture.center.x);d.gesture.center.y,d.gesture.velocityX;if(a("body").css("overflow","hidden"),0===a("#sidenav-overlay").length){var g=a('<div id="sidenav-overlay"></div>');g.css("opacity",0).click(function(){c()}),a("body").append(g)}if("left"===b.edge&&(f>b.menuWidth?f=b.menuWidth:0>f&&(f=0)),"left"===b.edge)f<b.menuWidth/2?h=!1:f>=b.menuWidth/2&&(h=!0),e.css("left",f-b.menuWidth);else{f<window.innerWidth-b.menuWidth/2?h=!0:f>=window.innerWidth-b.menuWidth/2&&(h=!1);var i=-1*(f-b.menuWidth/2);i>0&&(i=0),e.css("right",i)}var j;"left"===b.edge?(j=f/b.menuWidth,a("#sidenav-overlay").velocity({opacity:j},{duration:50,queue:!1,easing:"easeOutQuad"})):(j=Math.abs((f-window.innerWidth)/b.menuWidth),a("#sidenav-overlay").velocity({opacity:j},{duration:50,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var d=c.gesture.velocityX;g=!1,"left"===b.edge?h&&.3>=d||-.5>d?(e.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:0,left:""})):(!h||d>.3)&&(a("body").css("overflow",""),e.velocity({left:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:"",left:0})):h&&d>=-.3||d>.5?(e.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:"",left:0})):(!h||-.3>d)&&(a("body").css("overflow",""),e.velocity({right:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:0,left:""}))}}),d.click(function(){if(h===!0)h=!1,g=!1,c();else{a("body").css("overflow","hidden"),a("body").append(f),"left"===b.edge?(f.css({width:"50%",right:0,left:""}),e.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"})):(f.css({width:"50%",right:"",left:0}),e.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),e.css("left",""));var d=a('<div id="sidenav-overlay"></div>');d.css("opacity",0).click(function(){h=!1,g=!1,c(),d.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),a("body").append(d),d.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){h=!0,g=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments)}}(jQuery),function(a){function b(b,c,d,e){var f=a();return a.each(g,function(a,g){if(g.height()>0){var h=g.offset().top,i=g.offset().left,j=i+g.width(),k=h+g.height(),l=!(i>c||e>j||h>d||b>k);l&&f.push(g)}}),f}function c(){++j;var c=f.scrollTop(),d=f.scrollLeft(),e=d+f.width(),g=c+f.height(),i=b(c+k.top+200,e+k.right,g+k.bottom,d+k.left);a.each(i,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",j)}),a.each(h,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==j&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null))}),h=i}function d(){f.trigger("scrollSpy:winSize")}function e(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:l(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=l();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}}var f=a(window),g=[],h=[],i=!1,j=0,k={top:0,right:0,bottom:0,left:0},l=Date.now||function(){return(new Date).getTime()};a.scrollSpy=function(b,d){var h=[];b=a(b),b.each(function(b,c){g.push(a(c)),a(c).data("scrollSpy:id",b),a("a[href=#"+a(c).attr("id")+"]").click(function(b){b.preventDefault();var c=a(this.hash).offset().top+1;a("html, body").animate({scrollTop:c-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),d=d||{throttle:100},k.top=d.offsetTop||0,k.right=d.offsetRight||0,k.bottom=d.offsetBottom||0,k.left=d.offsetLeft||0;var j=e(c,d.throttle||100),l=function(){a(document).ready(j)};return i||(f.on("scroll",l),f.on("resize",l),i=!0),setTimeout(l,0),b.on("scrollSpy:enter",function(){h=a.grep(h,function(a){return 0!=a.height()});var b=a(this);h[0]?(a("a[href=#"+h[0].attr("id")+"]").removeClass("active"),b.data("scrollSpy:id")<h[0].data("scrollSpy:id")?h.unshift(a(this)):h.push(a(this))):h.push(a(this)),a("a[href=#"+h[0].attr("id")+"]").addClass("active")}),b.on("scrollSpy:exit",function(){if(h=a.grep(h,function(a){return 0!=a.height()}),h[0]){a("a[href=#"+h[0].attr("id")+"]").removeClass("active");var b=a(this);h=a.grep(h,function(a){return a.attr("id")!=b.attr("id")}),h[0]&&a("a[href=#"+h[0].attr("id")+"]").addClass("active")}}),b},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return f},b=b||{throttle:100},f.on("resize",e(d,b.throttle||100))},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b)}}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),e=b.css("font-size");e&&d.css("font-size",e),c&&d.css("font-family",c),"off"===b.attr("wrap")&&d.css("overflow-wrap","normal").css("white-space","pre"),d.text(b.val()+"\n");var f=d.html().replace(/\n/g,"<br>");d.html(f),b.is(":visible")?d.css("width",b.width()):d.css("width",a(window).width()/2),b.css("height",d.height())}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||c.autofocus||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label, i").addClass("active"):a(this).siblings("label, i").removeClass("active")})};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(document).on("change",c,function(){(0!==a(this).val().length||void 0!==a(this).attr("placeholder"))&&a(this).siblings("label").addClass("active"),validate_field(a(this))}),a(document).ready(function(){Materialize.updateTextFields()}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label, i").removeClass("active")}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),a(document).on("focus",c,function(){a(this).siblings("label, i").addClass("active")}),a(document).on("blur",c,function(){var b=a(this);0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&b.siblings("label, i").removeClass("active"),0===b.val().length&&b[0].validity.badInput!==!0&&void 0!==b.attr("placeholder")&&b.siblings("i").removeClass("active"),validate_field(b)}),window.validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&c>=d||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};var d=a(".hiddendiv").first();d.length||(d=a('<div class="hiddendiv common"></div>'),a("body").append(d));var e=".materialize-textarea";a(e).each(function(){var c=a(this);c.val().length&&b(c)}),a("body").on("keyup keydown autoresize",e,function(){b(a(this))}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++)e.push(d[f].name);c.val(e.join(", ")),c.trigger("change")});var f,g="input[type=range]",h=!1;a(g).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b)});var i=".range-field";a(document).on("change",g,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val())}),a(document).on("input mousedown touchstart",g,function(b){var c=a(this).siblings(".thumb"),d=a(this).outerWidth();c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).after(c)),c.find(".value").html(a(this).val()),h=!0,a(this).addClass("active"),c.hasClass("active")||c.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==b.type&&(f=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left,0>f?f=0:f>d&&(f=d),c.addClass("active").css("left",f)),c.find(".value").html(a(this).val())}),a(document).on("mouseup touchend",i,function(){h=!1,a(this).removeClass("active")}),a(document).on("mousemove touchmove",i,function(b){var c,d=a(this).children(".thumb");if(h){d.hasClass("active")||d.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),c=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var e=a(this).outerWidth();0>c?c=0:c>e&&(c=e),d.addClass("active").css("left",c),d.find(".value").html(d.siblings(g).val())}}),a(document).on("mouseout touchleave",i,function(){if(!h){var b=a(this).children(".thumb");b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),b.removeClass("active")}})}),a.fn.material_select=function(b){function c(a,b,c){var e=a.indexOf(b),f=-1===e;return f?a.push(b):a.splice(e,1),c.siblings("ul.dropdown-content").find("li").eq(b).toggleClass("active"),c.find("option").eq(b).prop("selected",f),d(a,c),f}function d(a,b){for(var c="",d=0,e=a.length;e>d;d++){var f=b.find("option").eq(a[d]).text();c+=0===d?f:", "+f}""===c&&(c=b.find("option:disabled").eq(0).text()),b.siblings("input.select-dropdown").val(c)}a(this).each(function(){var d=a(this);if(!d.hasClass("browser-default")){var e=d.attr("multiple")?!0:!1,f=d.data("select-id");if(f&&(d.parent().find("span.caret").remove(),d.parent().find("input").remove(),d.unwrap(),a("ul#select-options-"+f).remove()),"destroy"===b)return void d.data("select-id",null).removeClass("initialized");var g=Materialize.guid();d.data("select-id",g);var h=a('<div class="select-wrapper"></div>');h.addClass(d.attr("class"));var i=a('<ul id="select-options-'+g+'" class="dropdown-content select-dropdown '+(e?"multiple-select-dropdown":"")+'"></ul>'),j=d.children("option, optgroup"),k=[],l=!1,m=d.find("option:selected").html()||d.find("option:first").html()||"",n=function(b,c,d){var e=c.is(":disabled")?"disabled ":"",f=c.data("icon"),g=c.attr("class");if(f){var h="";return g&&(h=' class="'+g+'"'),"multiple"===d?i.append(a('<li class="'+e+'"><img src="'+f+'"'+h+'><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+'"><img src="'+f+'"'+h+"><span>"+c.html()+"</span></li>")),!0}"multiple"===d?i.append(a('<li class="'+e+'"><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+'"><span>'+c.html()+"</span></li>"))};j.length&&j.each(function(){if(a(this).is("option"))e?n(d,a(this),"multiple"):n(d,a(this));else if(a(this).is("optgroup")){var b=a(this).children("option");i.append(a('<li class="optgroup"><span>'+a(this).attr("label")+"</span></li>")),b.each(function(){n(d,a(this))})}}),i.find("li:not(.optgroup)").each(function(f){a(this).click(function(g){if(!a(this).hasClass("disabled")&&!a(this).hasClass("optgroup")){var h=!0;e?(a('input[type="checkbox"]',this).prop("checked",function(a,b){return!b}),h=c(k,a(this).index(),d),q.trigger("focus")):(i.find("li").removeClass("active"),a(this).toggleClass("active"),q.val(a(this).text())),activateOption(i,a(this)),d.find("option").eq(f).prop("selected",h),d.trigger("change"),"undefined"!=typeof b&&b()}g.stopPropagation()})}),d.wrap(h);var o=a('<span class="caret">&#9660;</span>');d.is(":disabled")&&o.addClass("disabled");var p=m.replace(/"/g,"&quot;"),q=a('<input type="text" class="select-dropdown" readonly="true" '+(d.is(":disabled")?"disabled":"")+' data-activates="select-options-'+g+'" value="'+p+'"/>');d.before(q),q.before(o),q.after(i),d.is(":disabled")||q.dropdown({hover:!1,closeOnClick:!1}),d.attr("tabindex")&&a(q[0]).attr("tabindex",d.attr("tabindex")),d.addClass("initialized"),q.on({focus:function(){if(a("ul.select-dropdown").not(i[0]).is(":visible")&&a("input.select-dropdown").trigger("close"),!i.is(":visible")){a(this).trigger("open",["focus"]);var b=a(this).val(),c=i.find("li").filter(function(){return a(this).text().toLowerCase()===b.toLowerCase()})[0];activateOption(i,c)}},click:function(a){a.stopPropagation()}}),q.on("blur",function(){e||a(this).trigger("close"),i.find("li.selected").removeClass("selected")}),i.hover(function(){l=!0},function(){l=!1}),a(window).on({click:function(){e&&(l||q.trigger("close"))}}),e&&d.find("option:selected:not(:disabled)").each(function(){var b=a(this).index();c(k,b,d),i.find("li").eq(b).find(":checkbox").prop("checked",!0)}),activateOption=function(b,c){if(c){b.find("li.selected").removeClass("selected");var d=a(c);d.addClass("selected"),i.scrollTo(d)}};var r=[],s=function(b){if(9==b.which)return void q.trigger("close");if(40==b.which&&!i.is(":visible"))return void q.trigger("open");if(13!=b.which||i.is(":visible")){b.preventDefault();var c=String.fromCharCode(b.which).toLowerCase(),d=[9,13,27,38,40];if(c&&-1===d.indexOf(b.which)){r.push(c);var f=r.join(""),g=i.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(f)})[0];g&&activateOption(i,g)}if(13==b.which){var h=i.find("li.selected:not(.disabled)")[0];h&&(a(h).trigger("click"),e||q.trigger("close"))}40==b.which&&(g=i.find("li.selected").length?i.find("li.selected").next("li:not(.disabled)")[0]:i.find("li:not(.disabled)")[0],activateOption(i,g)),27==b.which&&q.trigger("close"),38==b.which&&(g=i.find("li.selected").prev("li:not(.disabled)")[0],g&&activateOption(i,g)),setTimeout(function(){r=[]},1e3)}};q.on("keydown",s)}})}}(jQuery),function(a){var b={init:function(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1})}function d(a){a>=j.length?a=0:0>a&&(a=j.length-1),k=i.find(".active").index(),k!=a&&(e=j.eq(k),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function(){j.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),c($caption,b.transition),b.indicators&&f.eq(k).removeClass("active"),j.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).addClass("active"),b.indicators&&f.eq(a).addClass("active"))}var e,f,g,h=a(this),i=h.find("ul.slides").first(),j=i.find("li"),k=i.find(".active").index();-1!=k&&(e=j.eq(k)),h.hasClass("fullscreen")||(b.indicators?h.height(b.height+40):h.height(b.height),i.height(b.height)),j.find(".caption").each(function(){c(a(this),0)}),j.find("img").each(function(){var b="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
a(this).attr("src")!==b&&(a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src",b))}),b.indicators&&(f=a('<ul class="indicators"></ul>'),j.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=i.parent(),e=c.find(a(this)).index();d(e),clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),f.append(e)}),h.append(f),f=h.find("ul.indicators").find("li.indicator-item")),e?e.show():(j.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),k=0,e=j.eq(k),b.indicators&&f.eq(k).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"})}),g=setInterval(function(){k=i.find(".active").index(),d(k+1)},b.transition+b.interval);var l=!1,m=!1,n=!1;h.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval(g);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX;$curr_slide=i.find(".active"),$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>h.innerWidth()/2||-.65>d)?n=!0:2===b&&(c<-1*h.innerWidth()/2||d>.65)&&(m=!0);var e;m&&(e=$curr_slide.next(),0===e.length&&(e=j.first()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),n&&(e=$curr_slide.prev(),0===e.length&&(e=j.last()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=i.find(".active"),l=!1,curr_index=i.find(".active").index(),n||m?m?(d(curr_index+1),$curr_slide.velocity({translateX:-1*h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):n&&(d(curr_index-1),$curr_slide.velocity({translateX:h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}),m=!1,n=!1,clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval))}),h.on("sliderPause",function(){clearInterval(g)}),h.on("sliderStart",function(){clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),h.on("sliderNext",function(){k=i.find(".active").index(),d(k+1)}),h.on("sliderPrev",function(){k=i.find(".active").index(),d(k-1)})})},pause:function(){a(this).trigger("sliderPause")},start:function(){a(this).trigger("sliderStart")},next:function(){a(this).trigger("sliderNext")},prev:function(){a(this).trigger("sliderPrev")}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)}}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"})}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&(a(b.target).closest(".card").css("overflow","hidden"),a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))),a(".card-reveal").closest(".card").css("overflow","hidden")})})}(jQuery),function(a){a(document).ready(function(){a(document).on("click.chip",".chip .material-icons",function(b){a(this).parent().remove()})})}(jQuery),function(a){a(document).ready(function(){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom")}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g))})}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c)})})}})}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(c){var d=a(this);b(d)}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(b){var d=a(this);c(d)}),a(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(d){var e=a(this),f=e.parent();f.hasClass("active")?c(f):b(f)})}),a.fn.extend({openFAB:function(){b(a(this))},closeFAB:function(){c(a(this))}});var b=function(b){if($this=b,$this.hasClass("active")===!1){var c,d,e=$this.hasClass("horizontal");e===!0?d=40:c=40,$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:c+"px",translateX:d+"px"},{duration:0});var f=0;$this.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:f}),f+=40})}},c=function(a){$this=a;var b,c,d=$this.hasClass("horizontal");d===!0?c=40:b=40,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:b+"px",translateX:c+"px"},{duration:80})}}(jQuery),function(a){Materialize.fadeInImage=function(b){var c=a(b);c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;100>e&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"})}})},Materialize.showStaggeredList=function(b){var c=0;a(b).find("li").velocity({translateX:"-100px"},{duration:0}),a(b).find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:c,easing:[60,10]}),c+=120})},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||-.75>h)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0)}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e.remove()}})}})}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1}})})})}(jQuery),function(a){Materialize.scrollFire=function(a){var b=!1;window.addEventListener("scroll",function(){b=!0}),setInterval(function(){if(b){b=!1;for(var c=window.pageYOffset+window.innerHeight,d=0;d<a.length;d++){var e=a[d],f=e.selector,g=e.offset,h=e.callback,i=document.querySelector(f);if(null!==i){var j=i.getBoundingClientRect().top+window.pageYOffset;if(c>j+g&&e.done!==!0){var k=new Function(h);k(),e.done=!0}}}}},100)}}(jQuery),function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder)}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root[0].focus()}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function o(){y.$root.on({keydown:q,focusin:function(a){y.$root.removeClass(v.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root[0].focus()))}}).on({focus:function(){w.addClass(v.target)},blur:function(){w.removeClass(v.target)}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root[0].focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0)}),e(y.$root[0],"hidden",!0)}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):""}),u.container?a(u.container).append(y._hidden):w.after(y._hidden)}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()))}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open()}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function(){return this.start()},y=x.prototype={constructor:x,$node:w,start:function(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render")},stop:function(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id)},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y},open:function(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1)},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root[0].focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0])}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(a){return a&&(y.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){y.$root.on("focus.toOpen",r)},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0)},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y},clear:function(a){return y.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),("select"==e||"clear"==e)&&w.val("clear"==e?"":y.get(e,u.format)).trigger("change");y.render()}return d.muted?y:y.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value"}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):""}return y.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f)}return y},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in t.methods&&delete t.methods[b];return y},trigger:function(a,c){var d=function(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c])})};return d("_"+a),d(a),y}};return new x}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month)},r=function(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(e==a?" selected":"")]}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year)};return createDayLabel=function(){return null!=i?f.node("div",i.date):f.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)}),function(a){function b(){var b=+a(this).attr("length"),c=+a(this).val().length,d=b>=c;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this))}function c(b){var c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);b.parent().append(c)}function d(){a(this).parent().find('span[class="character-counter"]').html("")}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"))}a.fn.characterCounter=function(){return this.each(function(){var e=void 0!==a(this).attr("length");e&&(a(this).on("input",b),a(this).on("focus",b),a(this).on("blur",d),c(a(this)))})},a(document).ready(function(){a("input, textarea").characterCounter()})}(jQuery),function(a){var b={init:function(b){var c={time_constant:200,dist:-100,shift:0,padding:0,full_width:!1};return b=a.extend(c,b),this.each(function(){function c(){"undefined"!=typeof window.ontouchstart&&(F[0].addEventListener("touchstart",k),F[0].addEventListener("touchmove",l),F[0].addEventListener("touchend",m)),F[0].addEventListener("mousedown",k),F[0].addEventListener("mousemove",l),F[0].addEventListener("mouseup",m),F[0].addEventListener("click",j)}function d(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientX:a.clientX}function e(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientY:a.clientY}function f(a){return a>=s?a%s:0>a?f(s+a%s):a}function g(a){var c,d,e,g,h,i,j;for(o="number"==typeof a?a:o,p=Math.floor((o+r/2)/r),e=o-p*r,g=0>e?1:-1,h=-g*e*2/r,b.full_width?j="translateX(0)":(j="translateX("+(F[0].clientWidth-item_width)/2+"px) ",j+="translateY("+(F[0].clientHeight-item_width)/2+"px)"),i=n[f(p)],i.style[z]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h*c+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,d=s>>1,c=1;d>=c;++c)b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&0>e?1-h:1):(zTranslation=b.dist*(2*c+h*g),tweenedOpacity=1-.2*(2*c+h*g)),i=n[f(p+c)],i.style[z]=j+" translateX("+(b.shift+(r*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&e>0?1-h:1):(zTranslation=b.dist*(2*c-h*g),tweenedOpacity=1-.2*(2*c-h*g)),i=n[f(p-c)],i.style[z]=j+" translateX("+(-b.shift+(-r*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity;i=n[f(p)],i.style[z]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,
i.style.opacity=tweenedOpacity}function h(){var a,b,c,d;a=Date.now(),b=a-B,B=a,c=o-A,A=o,d=1e3*c/(1+b),x=.8*d+.2*x}function i(){var a,c;v&&(a=Date.now()-B,c=v*Math.exp(-a/b.time_constant),c>2||-2>c?(g(w-c),requestAnimationFrame(i)):g(w))}function j(c){if(D)return c.preventDefault(),c.stopPropagation(),!1;if(!b.full_width){var d=a(c.target).closest(".carousel-item").index(),e=p%s-d;0>e?Math.abs(e+s)<Math.abs(e)&&(e+=s):e>0&&Math.abs(e-s)<e&&(e-=s),0>e?a(this).trigger("carouselNext",[Math.abs(e)]):e>0&&a(this).trigger("carouselPrev",[e])}}function k(a){q=!0,D=!1,E=!1,t=d(a),u=e(a),x=v=0,A=o,B=Date.now(),clearInterval(C),C=setInterval(h,100)}function l(a){var b,c,f;if(q)if(b=d(a),y=e(a),c=t-b,f=Math.abs(u-y),30>f&&!E)(c>2||-2>c)&&(D=!0,t=b,g(o+c));else{if(D)return a.preventDefault(),a.stopPropagation(),!1;E=!0}return D?(a.preventDefault(),a.stopPropagation(),!1):void 0}function m(a){return q=!1,clearInterval(C),w=o,(x>10||-10>x)&&(v=.9*x,w=o+v),w=Math.round(w/r)*r,v=w-o,B=Date.now(),requestAnimationFrame(i),a.preventDefault(),a.stopPropagation(),!1}var n,o,p,q,r,s,t,u,v,w,x,z,A,B,C,D,E,F=a(this);return F.hasClass("initialized")?!0:(b.full_width&&(b.dist=0,imageHeight=F.find(".carousel-item img").first().load(function(){F.css("height",a(this).height())})),F.addClass("initialized"),q=!1,o=w=0,n=[],item_width=F.find(".carousel-item").first().innerWidth(),r=2*item_width+b.padding,F.find(".carousel-item").each(function(){n.push(a(this)[0])}),s=n.length,z="transform",["webkit","Moz","O","ms"].every(function(a){var b=a+"Transform";return"undefined"!=typeof document.body.style[b]?(z=b,!1):!0}),window.onresize=g,c(),g(o),a(this).on("carouselNext",function(a,b){void 0===b&&(b=1),w=o+r*b,o!==w&&(v=w-o,B=Date.now(),requestAnimationFrame(i))}),void a(this).on("carouselPrev",function(a,b){void 0===b&&(b=1),w=o-r*b,o!==w&&(v=w-o,B=Date.now(),requestAnimationFrame(i))}))})},next:function(b){a(this).trigger("carouselNext",[b])},prev:function(b){a(this).trigger("carouselPrev",[b])}};a.fn.carousel=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.carousel"):b.init.apply(this,arguments)}}(jQuery);
function addToken(web3, config, sender, phoneNumber, token, cb) {
	console.log(web3);
	attachToContract(web3, config, function(err, contract) {
		newTokenTX(web3, contract, sender, phoneNumber, token, function(err, txHash) {
			//console.log("newTokenTX:");
			//console.log("result: " + txHash);
			cb(err, txHash);
		});

	});
}

function newTokenTX(web3, contract, sender, phoneNumber, token, cb) {
	if (!web3.isConnected()) return cb({code: 500, title: "Error", message: "check RPC"}, null);

	contract.newToken.sendTransaction(phoneNumber, token, {gas: 800000, from: sender}, function(err, result) {
		cb(err, result);
	});
}
function showAlert(err, msg) {
	if (!err) {
		swal({
		  title: "Error",
		  text: msg,
		  type: "error"
		});
	}
	else {
		if (err.type != "REQUEST_REJECTED") {
			swal({
			  title: "Error",
			  text: msg,
			  type: "error"
			});
		}
	}
}
function attachToContract(web3, config, cb) {
  if(!web3.isConnected()) {
    if (cb) cb({code: 200, title: "Error", message: "check RPC"}, null);
    return;
  }

  console.log(web3.eth.accounts);
  web3.eth.defaultAccount = web3.eth.accounts[0];
  console.log("web3.eth.defaultAccount:");
  console.log(web3.eth.defaultAccount);
  
  var MyContract = web3.eth.contract(config.Ethereum.contracts.ProofOfPhone.abi);

  contract = MyContract.at(config.Ethereum[config.environment].contractAddress);
  
  if (cb) cb(null, contract);
}

function getTxCallBack(txHash, cb) {
  web3.eth.getTransaction(txHash, function(err, txDetails) {
    if (err) console.log(err);
    if (!txDetails) {
      setTimeout(function() {
        getTxCallBack(txHash, cb);
      }, 2000);
    } else if (!txDetails.blockNumber) {
      setTimeout(function() {
        getTxCallBack(txHash, cb);
      }, 2000)
    } else cb();
  });
};
//check current network page is connected to. Alerts, if not Oracles network
function checkNetworkVersion(web3, cb) {
  var msgNotOracles = "You aren't connected to Oracles network. Please, switch on Oracles plugin and choose Oracles network. Check Oracles network <a href='https://github.com/oraclesorg/oracles-wiki' target='blank'>wiki</a> for more info.";
  web3.version.getNetwork(function(err, netId) {
    if (err)
      console.log(err);
    console.log("netId: " + netId);
    switch (netId) {
      case "1": {
        console.log('This is mainnet');
        swal("Warning", msgNotOracles, "warning"); 
        cb(false);
      } break;
      case "2": {
        console.log('This is the deprecated Morden test network.');
        swal("Warning", msgNotOracles, "warning");
        cb(false);
      } break;
      case "3": {
        console.log('This is the ropsten test network.');
        swal("Warning", msgNotOracles, "warning");
        cb(false);
      }  break;
       case "12648430": {
         console.log('This is Oracles from Metamask');
         cb(true);
      }  break;
      default: {
        console.log('This is an unknown network.');
        swal("Warning", msgNotOracles, "warning");
        cb(false);
      } break;
    }
  })
}
function deployContract(web3, config, sender) {
	var contractABI = config.Ethereum.contracts.ProofOfPhone.abi;
	var compiled = config.Ethereum.contracts.ProofOfPhone.bin;

	console.log(web3.eth.accounts);
	web3.eth.defaultAccount = web3.eth.accounts[0];

	var gasWillUsed = web3.eth.estimateGas({
	    from: web3.eth.defaultAccount, 
	    data: compiled
	}, function(err, gasWillUsed) {
		console.log(gasWillUsed);
		gasWillUsed += 30000;

		var proofOfPhoneContract = web3.eth.contract(contractABI);
		proofOfPhoneContract.new(
		{
		   	data: compiled,
		   	gas: gasWillUsed,
		    from: sender
		}, function(err, contract) {
		   	if (!err) {
		       if (typeof contract.address != 'undefined') {
		           	console.log("contract:");
			    	console.log(contract);

			    	console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
		       } else {
		       		console.log(contract.transactionHash);
		       }
		    } else {
		    	console.log("error:");
		    	console.log(err);
		    }
		});
	});
}
//get current account chosen in MetaMask or opened at Parity
function getAccounts(cb) {
	web3.eth.getAccounts(function(err, accounts) {
		if (err) {
			$(".loading-container").hide();
			showAlert(err, err.message);
			return;
		}

		cb(accounts);
	});
}
function getAddressByPhone(web3, config, sender, phoneNumber, cb) {
	attachToContract(web3, config, function(err, contract) {
		getAddressByPhoneCall(web3, contract, sender, phoneNumber, function(err, addr) {
			if (err) {
				console.log("error: " + err);
				cb(err);
				return;
			}
			console.log("getAddressByPhoneCall:");
			console.log("addr: " + addr);
			cb(null, addr);
		});

	});
}

function getAddressByPhoneCall(web3, contract, sender, phoneNumber, cb) {
	if (!web3.isConnected()) cb({code: 500, title: "Error", message: "check RPC"}, null);

	contract.getAddressByPhone.call(phoneNumber, {from: sender}, function(err, result) {
		cb(err, result);
	});
}
//gets config file with address of Oracles contract
function getConfig(cb) {
  $.getJSON("./javascripts/config.json", function(config) {
    cb(config);
  });
}
function getPhoneByAddress(web3, config, sender, addr, cb) {
	attachToContract(web3, config, function(err, contract) {
		getPhoneByAddressCall(web3, contract, sender, addr, function(err, phone) {
			if (err) {
				console.log("error: " + err);
				cb(err);
				return;
			}
			console.log("getPhoneByAddressCall:");
			console.log("phone: " + phone);
			cb(null, phone);
		});

	});
}

function getPhoneByAddressCall(web3, contract, sender, addr, cb) {
	if (!web3.isConnected()) cb({code: 500, title: "Error", message: "check RPC"}, null);

	contract.getPhoneByAddress.call(addr, {from: sender}, function(err, result) {
		cb(err, result);
	});
}
var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();
//gets web3 object from MetaMask or Parity
function getWeb3(callback) {
  if (typeof window.web3 === 'undefined') {
    // no web3, use fallback
    console.error("Please use a web3 browser");
    var msgNotEthereum = "You aren't connected to Oracles Network. Please, switch on Oracles plugin and refresh the page. Check Oracles network <a href='https://github.com/oraclesorg/oracles-wiki' target='blank'>wiki</a> for more info.";
    swal("Warning", msgNotEthereum, "warning");
    callback(myWeb3, false);
  } else {
    // window.web3 == web3 most of the time. Don't override the provided,
    // web3, just wrap it in your Web3.
    var myWeb3 = new Web3(window.web3.currentProvider); 

    // the default account doesn't seem to be persisted, copy it to our
    // new instance
    myWeb3.eth.defaultAccount = window.web3.eth.defaultAccount;

    checkNetworkVersion(myWeb3, function(isOraclesNetwork) {
      callback(myWeb3, isOraclesNetwork);
    });
  }
}
//launches main application
function startDapp(web3, isOraclesNetwork) {
	console.log(web3);
	var sender;
	$(function() {
		if (!isOraclesNetwork) return;
		getAccounts(function(accounts) {
			getConfig(function(config) {
				getConfigCallBack(web3, accounts, config);	
			});
		});

		var stepNum = $('#stepNum');
		var stepLabel = $('.POPLabel');
		var stepTitle = $('.POPTitle');

		var inputContainer = $('.inputContainer');
		var POPInputPhone = $('.POPInputPhone');
		var POPInputSMS = $('.POPInputSMS');
		var POPInputWallet = $('.POPInputWallet');
		var POPSubmit = $('#POPSubmit');

		var radioContainer = $('.radioContainer');
		var POPradios = $('.POPradio');
		var phoneRadio = $('#phoneRadio');
		var walletRadio = $('#walletRadio');

		var POPBottomDescriptionContainer = $('.POPBottomDescriptionContainer');
		var successContainer = $('.successContainer');
		var successTableCellWalletValue = $('.successTableCellWalletValue');
		var successTableCellPhoneValue = $('.successTableCellPhoneValue');
		var token = $('#token');
		var loader = $('.loader');
		var middleMainContainerInner = $('.middleMainContainerInner');
		var bottomDesc = $('#bottomDesc');
		var bottomDescAddition = $('#bottomDescAddition');
		var bottomDescAddition2 = $('#bottomDescAddition2');
		var githubRibbon = $('.githubRibbon');
		var copyTable = $('.copyTable');
		var copyTableCellWalletValue1 = $('.copyTableCellWalletValue1');
		copyTableCellWalletValue1.text("0xf7e9626dbaeb1a6c8b3d02379eb54b81f16e785f");
		var copyTableCellWalletValue2 = $('.copyTableCellWalletValue2');

		var POPTitleContainer = $('.POPTitleContainer');
		var POPTitleContainerShortend = $('.POPTitleContainerShortend');
		var POPDescContainer = $('.POPDescContainer');
		var POPDescContainerShortend = $('.POPDescContainerShortend');

		var step1CopyTable = $('#step1CopyTable');
		var step3CopyTable = $('#step3CopyTable');
		
		var checkButton = $('#verifyButton');

		var topLabel = $('.topLabel');
		var bottomLabelRight = $('.bottomLabelRight');
		var homeButton = $('.homeButton');
		
		var shareButton = $('.shareButton');
		
		var copyHashTable = $('#copyHashTable');
		
		var checkboxContainer = $(".checkboxContainer");
		var POPcheckbox = $(".POPcheckbox");
		var privacyPolicyCheckbox = $("#privacyPolicyCheckbox");

		var addressVal = $("#addressVal");

		function getConfigCallBack(web3, accounts, config) {
			console.log(accounts);
			if (accounts.length == 1) {
				sender = accounts[0];
				POPInputWallet.val(sender);
			} else {
				swal("Warning", "You haven't chosen any account in Oracles plugin. Please, choose your account in Oracles plugin and reload the page. Check Oracles network <a href='https://github.com/oraclesorg/oracles-wiki' target='blank'>wiki</a> for more info.", "warning");
			}

			var wallet = QueryString.wallet;
			if (wallet) {
				POPInputWallet.val(wallet);
				changeStepNumber(null, 4);
				walletRadioCheck();
				getPhoneByAddress(web3, config, sender, POPInputWallet.val(), function(err, phone) {
					middleMainContainerInner.fadeIn(500);
					loader.addClass('hide');
					if (!err) {
						if (phone != 0) {
							POPInputPhone.val(phone);
							changeStepNumber(null, 3);
						}
					}
				});
			}

			var clientCopyWallet = new ZeroClipboard( document.getElementById("copyWallet") );

			clientCopyWallet.on( "ready", function( readyEvent ) {
				clientCopyWallet.on( "beforecopy", function( event ) {
					var addr = addressVal.text();
					$("#copyWallet").attr("data-clipboard-text",addr);
			    });
			    clientCopyWallet.on( "aftercopy", function( event ) {
			      Materialize.toast('Address copied to buffer', 3000, 'rounded');
			    });
		  	});

		  	var clientShare = new ZeroClipboard( document.getElementById("POPShare") );

			clientShare.on( "ready", function( readyEvent ) {
				clientShare.on( "beforecopy", function( event ) {
					var host = "https://"+window.location.hostname;
					var newUrl = host + "/?wallet=" + successTableCellWalletValue.text().trim();
			      	$("#POPShare").attr("data-clipboard-text",newUrl);
			    });
			    clientShare.on( "aftercopy", function( event ) {
			      Materialize.toast('url copied to buffer', 3000, 'rounded');
			    });
		  	});

		  	phoneRadio.click(function(e) {
		  		phoneRadioCheck();
		  	});

		  	POPcheckbox.click(function(e) {
		  		if ($(this).find(".POPcheckboxSelected")[0]) {
		  			$(this).find(".POPcheckboxSelected").addClass("POPcheckboxUnselected");
		  			$(this).find(".POPcheckboxSelected").removeClass("POPcheckboxSelected");
		  			privacyPolicyCheckbox.prop( "checked", false );
		  		} else {
		  			$(this).find(".POPcheckboxUnselected").addClass("POPcheckboxSelected");
		  			$(this).find(".POPcheckboxUnselected").removeClass("POPcheckboxUnselected");
		  			privacyPolicyCheckbox.prop( "checked", true );
		  		}
		  	});

		  	walletRadio.click(function(e) {
		  		walletRadioCheck();
		  	});

		  	topLabel.click(function(e) {
		  		location.reload();
		  	});

		  	bottomLabelRight.click(function(e) {
		  		location.reload();
		  	});

			githubRibbon.click(function(e) {
				window.open("https://github.com/blocknotary/proofofphone", "_blank");
			});

			homeButton.click(function(e) {
				location.reload();
			});

			checkButton.click(function(e) {
				changeStepNumber(null, 4);
			});

			POPSubmit.click(function(e) {
				submit(config, sender);
			});

			POPInputPhone.keypress(function (e) {
			 var key = e.which;
			 	if (key == 13) { // the enter key code
			    	POPSubmit.click();
			    	return false;  
				}
			});

			POPInputSMS.keypress(function (e) {
			 	var key = e.which;
			 	if (key == 13) { // the enter key code
			    	POPSubmit.click();
			    	return false;  
				}
			});

			POPInputWallet.keypress(function (e) {
			 	var key = e.which;
			 	if (key == 13) { // the enter key code
			    	POPSubmit.click();
			    	return false;  
			  	}
			});
		}

		function phoneRadioCheck() {
	  		POPradios.each(function(e) {
	  			$(this).find('.POPRadioInner').removeClass('POPradioSelected');
	  			$(this).find('.POPRadioInner').addClass('POPradioUnselected');
	  		});
	  		phoneRadio.find('.POPRadioInner').removeClass('POPradioUnselected');
	  		phoneRadio.find('.POPRadioInner').addClass('POPradioSelected');
	  		POPInputPhone.removeClass('hide');
	  		POPInputPhone.focus();
	  		POPInputWallet.addClass('hide');
	  		$("#radioCheckPhone").prop("checked", true);
	  	}

	  	function walletRadioCheck() {
	  		POPradios.each(function(e) {
	  			$(this).find('.POPRadioInner').removeClass('POPradioSelected');
	  			$(this).find('.POPRadioInner').addClass('POPradioUnselected');
	  		});
	  		walletRadio.find('.POPRadioInner').removeClass('POPradioUnselected');
	  		walletRadio.find('.POPRadioInner').addClass('POPradioSelected');
	  		POPInputWallet.removeClass('hide');
	  		POPInputWallet.focus();
	  		POPInputPhone.addClass('hide');
	  		$("#radioCheckWallet").prop("checked", true);
	  	}

	  	function submit(config, sender) {
			var visibleInput = $('input:visible');
			var curStepNum = parseInt(stepNum.val());
			if (visibleInput.val() != "") {
				middleMainContainerInner.fadeOut(500);
				loader.removeClass('hide');
				switch(curStepNum) {
					case 1: {
						var phoneNumber = parseInt(visibleInput.val());
						sendCodeBySMS(phoneNumber, function(err, token) {
							if (err) {
								middleMainContainerInner.fadeIn(500);
								loader.addClass('hide');
								return showAlert(err, err.message);
							}
							addToken(web3, config, sender, phoneNumber, token, function(err, txHash) {
								if (err) {
									if (err.type != "REQUEST_REJECTED") showAlert(err, err.message);
									middleMainContainerInner.fadeIn(500);
									loader.addClass('hide');
									return;
								}
								if (txHash) {
									getTxCallBack(txHash, function() {
										changeStepNumber(+1, null);
										middleMainContainerInner.fadeIn(500);
										loader.addClass('hide');
										swal({   
											title: "Success",   
											text: "Code successfully sent by SMS",   
											type: "success"
										});
									});
								}
							});
						});
					} break;
					case 2: {
						var code = POPInputSMS.val();
						var token = web3.sha3(code);
						verifyCodeFromSMS(web3, config, sender, token, function(err, txHash) {
							if (err) {
								if (err.type != "REQUEST_REJECTED") showAlert(null, "Invalid code entered");
								middleMainContainerInner.fadeIn(500);
								loader.addClass('hide');
								return;
							}
							if (txHash) {
								getTxCallBack(txHash, function() {
									changeStepNumber(+1, null);
									middleMainContainerInner.fadeIn(500);
									loader.addClass('hide');
								});
							}
						});
					} break;
					case 4:
						{
							var radioVal = $('input[name=radioCheck]:checked').val();
							if (radioVal == "wallet") {
								getPhoneByAddress(web3, config, sender, POPInputWallet.val(), function(err, phone) {
									if (err) return showAlert(err, err.message);
									console.log(phone);
									if (phone != 0) {
										POPInputPhone.val(phone);
										changeStepNumber(null, 3);
									} else {
										swal({   
											title: "Warning",   
											text: "Phone wasn't set for this wallet yet",   
											type: "warning"
										});
									}
									middleMainContainerInner.fadeIn(500);
									loader.addClass('hide');
								});
							} else {
								getAddressByPhone(web3, config, sender, POPInputPhone.val(), function(err, addr) {
									if (err) return showAlert(err, err.message);
									if (addr != "0x0000000000000000000000000000000000000000" && addr != "0x") {
										POPInputWallet.val(addr);
										changeStepNumber(null, 3);
									} else {
										swal({   
											title: "Warning",   
											text: "This phone wasn't set for any wallet yet",   
											type: "warning"
										});
									}
									middleMainContainerInner.fadeIn(500);
									loader.addClass('hide');
								});
							}
						}
						break;
					default:
						{
							middleMainContainerInner.fadeIn(500);
							loader.addClass('hide');
						}
						break;
				}
			} else visibleInput.focus();
		}

		function changeStepNumber(addition, absolute) {
			var newStepVal = 0;
			if (addition) newStepVal = parseInt(stepNum.val()) + addition;
			else newStepVal = absolute;
			stepNum.val(newStepVal);
			var newStepNum = parseInt(stepNum.val());

			stepLabel.text("Step " + newStepNum);
			switch(newStepNum) {
				case 1:
					{
						stepTitle.text("Submit your phone number");
						bottomDesc.text("Enter a phone number you'd like to join with your Ethereum address. We will send you an SMS. After verification, we will ask you to deposit  a service fee of 0.1 ether to a smart contract at the address");
						stepLabel.removeClass("hide");
						radioContainer.addClass("hide");
						inputContainer.show();
						POPBottomDescriptionContainer.show();
						POPInputPhone.removeClass('hide');
						POPInputPhone.focus();
						POPInputSMS.addClass('hide');
						POPInputWallet.addClass('hide');
						POPBottomDescriptionContainer.removeClass("hide");
						copyTable.show();
						step1CopyTable.removeClass("hide");
						step3CopyTable.addClass("hide");
						bottomDescAddition.addClass("hide");
						copyHashTable.addClass("hide");
						successContainer.addClass("hide");
						POPTitleContainerShortend.addClass("POPTitleContainer");
						POPTitleContainerShortend.removeClass("POPTitleContainerShortend");
						POPDescContainerShortend.addClass("POPDescContainer");
						POPDescContainerShortend.removeClass("POPDescContainerShortend");
						checkboxContainer.removeClass("hide");
					}
					break;
				case 2:
					{
						stepTitle.text("Submit received code");
						bottomDesc.text("Copy the code from the SMS to continue");
						stepLabel.removeClass("hide");
						radioContainer.addClass("hide");
						inputContainer.show();
						POPBottomDescriptionContainer.show();
						POPInputPhone.addClass('hide');
						POPInputSMS.removeClass('hide');
						POPInputSMS.focus();
						POPInputWallet.addClass('hide');
						POPBottomDescriptionContainer.removeClass("hide");
						step1CopyTable.addClass("hide");
						step3CopyTable.addClass("hide");
						bottomDescAddition.addClass("hide");
						copyHashTable.addClass("hide");
						successContainer.addClass("hide");
						POPTitleContainerShortend.addClass("POPTitleContainer");
						POPTitleContainerShortend.removeClass("POPTitleContainerShortend");
						POPDescContainerShortend.addClass("POPDescContainer");
						POPDescContainerShortend.removeClass("POPDescContainerShortend");
						checkboxContainer.addClass("hide");
					}
					break;
				case 3:
					{
						stepTitle.text("Success");
						stepLabel.addClass("hide");
						POPBottomDescriptionContainer.hide();
						bottomDescAddition2.html('There is a smart contract deployed to the Oracles network. You can find it here:\
							<table cellspacing="0" cellpadding="0" class="copyTable nomargin" style="display: table;"><tbody class="copyTableBody"><tr><td class="copyTableCellWalletValue2">' 
							+ copyTableCellWalletValue1.text() + 
							'</td><td id="copyWallet3" data-clipboard-text="'+ copyTableCellWalletValue1.text() + '" class="copyTableCellCopyButton"></td></tr></tbody></table>This contract has the following public method signature:\
							hasPhone (address _addr).<br/>\
							If the _addr is registered in the contract\'s Phone Registry, the hasPhone method returns true. Otherwise it returns false.');

						successTableCellWalletValue.text(POPInputWallet.val());
						successTableCellPhoneValue.text(POPInputPhone.val());
						radioContainer.addClass("hide");
						inputContainer.hide();
						POPBottomDescriptionContainer.addClass("hide");
						step1CopyTable.addClass("hide");
						step3CopyTable.addClass("hide");
						bottomDescAddition.addClass("hide");
						bottomDescAddition2.removeClass("hide");
						copyHashTable.addClass("hide");
						successContainer.removeClass("hide");
						POPTitleContainerShortend.addClass("POPTitleContainer");
						POPTitleContainerShortend.removeClass("POPTitleContainerShortend");
						POPDescContainerShortend.addClass("POPDescContainer");
						POPDescContainerShortend.removeClass("POPDescContainerShortend");
						checkboxContainer.addClass("hide");

						var clientCopyWallet3 = new ZeroClipboard( $("#copyWallet3")[0] );

						clientCopyWallet3.on( "ready", function( readyEvent ) {
						    clientCopyWallet3.on( "aftercopy", function( event ) {
						      Materialize.toast('Address copied to buffer', 3000, 'rounded');
						    });
					  	});
					}
					break;
				case 4:
					{
						stepTitle.text("Check");
						bottomDesc.html('Enter a phone number or an Ethereum address to continue. <br/>\
							There is a smart contract deployed to the Oracles network. You can find it here:\
							<table cellspacing="0" cellpadding="0" class="copyTable nomargin" style="display: table;"><tbody class="copyTableBody"><tr><td class="copyTableCellWalletValue2">' 
							+ copyTableCellWalletValue1.text() + 
							'</td><td id="copyWallet2" data-clipboard-text="'+ copyTableCellWalletValue1.text() + '" class="copyTableCellCopyButton"></td></tr></tbody></table>This contract has the following public method signature:\
							hasPhone (address _addr).<br/>\
							If the _addr is registered in the contract\'s Phone Registry, the hasPhone method returns true. Otherwise it returns false.');

						POPBottomDescriptionContainer.show();
						stepLabel.addClass("hide");
						phoneRadioCheck();
						radioContainer.removeClass("hide");
						inputContainer.show();
						POPBottomDescriptionContainer.show();
						POPInputPhone.removeClass('hide');
						POPInputPhone.focus();
						POPInputSMS.addClass('hide');
						POPInputWallet.addClass('hide');
						POPBottomDescriptionContainer.removeClass("hide");
						step1CopyTable.addClass("hide");
						step3CopyTable.addClass("hide");
						bottomDescAddition.addClass("hide");
						bottomDescAddition2.addClass("hide");
						copyHashTable.addClass("hide");
						successContainer.addClass("hide");
						POPTitleContainer.addClass("POPTitleContainerShortend");
						POPTitleContainer.removeClass("POPTitleContainer");
						POPDescContainer.addClass("POPDescContainerShortend");
						POPDescContainer.removeClass("POPDescContainer");

						var clientCopyWallet2 = new ZeroClipboard( $("#copyWallet2")[0] );

						console.log(clientCopyWallet2);

						clientCopyWallet2.on( "ready", function( readyEvent ) {
							clientCopyWallet2.on( "aftercopy", function( event ) {
						      Materialize.toast('Address copied to buffer', 3000, 'rounded');
						    });
					  	});
					  	checkboxContainer.addClass("hide");
					}
					break;
				default:
					{
						stepTitle.text("Submit your phone number");
						stepLabel.removeClass("hide");
						POPBottomDescriptionContainer.removeClass("hide");
						step1CopyTable.addClass("hide");
						step3CopyTable.addClass("hide");
						bottomDescAddition.addClass("hide");
						bottomDescAddition2.addClass("hide");
						copyHashTable.addClass("hide");
						successContainer.addClass("hide");
					}
					break;
			}
		}
	});
}

window.addEventListener('load', function() {
	getWeb3(startDapp);
});
function sendCodeBySMS(phone, cb) {
	//cb(null, "0xc888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a");
	$.post("/sendCodeBySMS", {
		"globalToken": "cba2c691-47df-41e7-bc97-a0818103ed14",
		"to": phone
	}, function( data ) {
		console.log( data );
        if (data.success) cb(null, data.success.token);
        else cb(data.error, null);
	});
}
function verifyCodeFromSMS(web3, config, sender, token, cb) {
	activatePair(web3, config, sender, token, function(err, txHash) {
		cb(err, txHash);
	});
}

function activatePair(web3, config, sender, token, cb) {
	attachToContract(web3, config, function(err, contract) {
		activatePairTX(web3, contract, sender, token, function(err, txHash) {
			//console.log("activatePairTX:");
			//console.log("result: " + txHash);
			cb(err, txHash);
		});

	});
}

function activatePairTX(web3, contract, sender, token, cb) {
	if (!web3.isConnected()) cb({code: 500, title: "Error", message: "check RPC"}, null);

	contract.activatePair.sendTransaction(token, {gas: 800000, from: sender}, function(err, result) {
		cb(err, result);
	});
}