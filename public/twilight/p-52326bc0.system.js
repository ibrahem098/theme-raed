var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function l(e){try{$(r.next(e))}catch(e){i(e)}}function o(e){try{$(r["throw"](e))}catch(e){i(e)}}function $(e){e.done?n(e.value):a(e.value).then(l,o)}$((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(t){return $([e,t])}}function $(o){if(r)throw new TypeError("Generator is already executing.");while(l&&(l=0,o[0]&&(n=0)),n)try{if(r=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e];a=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++){if(i||!(r in t)){if(!i)i=Array.prototype.slice.call(t,0,r);i[r]=t[r]}}return e.concat(i||Array.prototype.slice.call(t))};
/*!
 * Crafted with ❤ by Salla
 */System.register([],(function(e,t){"use strict";return{execute:function(){var n=this;var r="twilight";var a;var i;var l=false;var o=false;var $=false;var s=false;var f=false;var u=function(e,t){if(t===void 0){t=""}{return function(){return}}};var c=function(e,t){{return function(){return}}};var v="r";var d="o";var h="s";var p="t";var m="s-id";var g="sty-id";var y="c-id";var b="{visibility:hidden}.hydrated{visibility:inherit}";var w="http://www.w3.org/1999/xlink";var N={};var R="http://www.w3.org/2000/svg";var x="http://www.w3.org/1999/xhtml";var S=function(e){e=typeof e;return e==="object"||e==="function"};function _(e){var t,n,r;return(r=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&r!==void 0?r:undefined}var k=e("h",(function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var i=null;var l=null;var o=false;var $=false;var s=[];var f=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!S(a)){a=String(a)}if(o&&$){s[s.length-1].$text$+=a}else{s.push(o?T(null,a):a)}$=o}}};f(n);if(t){if(t.key){i=t.key}if(t.name){l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=T(e,null);c.$attrs$=t;if(s.length>0){c.$children$=s}{c.$key$=i}{c.$name$=l}return c}));var T=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}{n.$name$=null}return n};var A=e("H",{});var C=function(e){return e&&e.$tag$===A};var I=function(e,t,n,r){var a=u("hydrateClient",t);var i=e.shadowRoot;var l=[];var o=[];var $=null;var s=r.$vnode$=T(t,null);if(!De.$orgLocNodes$){P(We.body,De.$orgLocNodes$=new Map)}e[m]=n;e.removeAttribute(m);L(s,l,o,$,e,e,n);l.map((function(e){var n=e.$hostId$+"."+e.$nodeId$;var r=De.$orgLocNodes$.get(n);var a=e.$elm$;if(r&&Fe&&r["s-en"]===""){r.parentNode.insertBefore(a,r.nextSibling)}if(!i){a["s-hn"]=t;if(r){a["s-ol"]=r;a["s-ol"]["s-nr"]=a}}De.$orgLocNodes$.delete(n)}));a()};var L=function(e,t,n,r,a,i,l){var o;var $;var s;var f;if(i.nodeType===1){o=i.getAttribute(y);if(o){$=o.split(".");if($[0]===l||$[0]==="0"){s={$flags$:0,$hostId$:$[0],$nodeId$:$[1],$depth$:$[2],$index$:$[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push(s);i.removeAttribute(y);if(!e.$children$){e.$children$=[]}e.$children$[s.$index$]=s;e=s;if(r&&s.$depth$==="0"){r[s.$index$]=s.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){L(e,t,n,r,a,i.childNodes[f],l)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){L(e,t,n,r,a,i.shadowRoot.childNodes[f],l)}}}else if(i.nodeType===8){$=i.nodeValue.split(".");if($[1]===l||$[1]==="0"){o=$[0];s={$flags$:0,$hostId$:$[1],$nodeId$:$[2],$depth$:$[3],$index$:$[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(o===p){s.$elm$=i.nextSibling;if(s.$elm$&&s.$elm$.nodeType===3){s.$text$=s.$elm$.textContent;t.push(s);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[s.$index$]=s;if(r&&s.$depth$==="0"){r[s.$index$]=s.$elm$}}}else if(s.$hostId$===l){if(o===h){s.$tag$="slot";if($[5]){i["s-sn"]=s.$name$=$[5]}else{i["s-sn"]=""}i["s-sr"]=true;n.push(s);if(!e.$children$){e.$children$=[]}e.$children$[s.$index$]=s}else if(o===v){{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=T(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var P=function(e,t){if(e.nodeType===1){var n=0;for(;n<e.childNodes.length;n++){P(e.childNodes[n],t)}if(e.shadowRoot){for(n=0;n<e.shadowRoot.childNodes.length;n++){P(e.shadowRoot.childNodes[n],t)}}}else if(e.nodeType===8){var r=e.nodeValue.split(".");if(r[0]===d){t.set(r[1]+"."+r[2],e);e.nodeValue="";e["s-en"]=r[3]}}};var j=function(e,t){if(e!=null&&!S(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var E=e("g",(function(e){return Ee(e).$hostElement$}));var O=e("c",(function(e,t,n){var r=E(e);return{emit:function(e){return M(r,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}}));var M=function(e,t,n){var r=De.ce(t,n);e.dispatchEvent(r);return r};var z=new WeakMap;var B=function(e,t,n){var r=Ve.get(e);if(Je&&n){r=r||new CSSStyleSheet;if(typeof r==="string"){r=t}else{r.replaceSync(t)}}else{r=t}Ve.set(e,r)};var q=function(e,t,n){var r;var a=V(t);var i=Ve.get(a);e=e.nodeType===11?e:We;if(i){if(typeof i==="string"){e=e.head||e;var l=z.get(e);var o=void 0;if(!l){z.set(e,l=new Set)}if(!l.has(a)){if(e.host&&(o=e.querySelector("[".concat(g,'="').concat(a,'"]')))){o.innerHTML=i}else{o=We.createElement("style");o.innerHTML=i;var $=(r=De.$nonce$)!==null&&r!==void 0?r:_(We);if($!=null){o.setAttribute("nonce",$)}e.insertBefore(o,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[i],false)}}return a};var U=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=u("attachStyles",t.$tagName$);q(n.getRootNode(),t);r()};var V=function(e,t){return"sc-"+e.$tagName$};var H=function(e,t,n,r,a,i){if(n!==r){var l=ze(e,t);var o=t.toLowerCase();if(t==="class"){var $=e.classList;var s=D(n);var f=D(r);$.remove.apply($,s.filter((function(e){return e&&!f.includes(e)})));$.add.apply($,f.filter((function(e){return e&&!s.includes(e)})))}else if(t==="style"){{for(var u in n){if(!r||r[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in r){if(!n||r[u]!==n[u]){if(u.includes("-")){e.style.setProperty(u,r[u])}else{e.style[u]=r[u]}}}}else if(t==="key");else if(t==="ref"){if(r){r(e)}}else if(!l&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(ze(He,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(n){De.rel(e,t,n,false)}if(r){De.ael(e,t,r,false)}}else{var c=S(r);if((l||c&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var v=r==null?"":r;if(t==="list"){l=false}else if(n==null||e[t]!=v){e[t]=v}}else{e[t]=r}}catch(e){}}var d=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){t=o;d=true}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){if(d){e.removeAttributeNS(w,t)}else{e.removeAttribute(t)}}}else if((!l||i&4||a)&&!c){r=r===true?"":r;if(d){e.setAttributeNS(w,t,r)}else{e.setAttribute(t,r)}}}}};var W=/\s/;var D=function(e){return!e?[]:e.split(W)};var F=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||N;var l=t.$attrs$||N;{for(r in i){if(!(r in l)){H(a,r,i[r],undefined,n,t.$flags$)}}}for(r in l){H(a,r,i[r],l[r],n,t.$flags$)}};var G=function(e,t,n,r){var o=t.$children$[n];var f=0;var u;var c;var v;if(!l){$=true;if(o.$tag$==="slot"){o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){u=o.$elm$=We.createTextNode(o.$text$)}else if(o.$flags$&1){u=o.$elm$=We.createTextNode("")}else{if(!s){s=o.$tag$==="svg"}u=o.$elm$=We.createElementNS(s?R:x,o.$flags$&2?"slot-fb":o.$tag$);if(s&&o.$tag$==="foreignObject"){s=false}{F(null,o,s)}if(o.$children$){for(f=0;f<o.$children$.length;++f){c=G(e,o,f);if(c){u.appendChild(c)}}}{if(o.$tag$==="svg"){s=false}else if(u.tagName==="foreignObject"){s=true}}}{u["s-hn"]=i;if(o.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=a;u["s-sn"]=o.$name$||"";v=e&&e.$children$&&e.$children$[n];if(v&&v.$tag$===o.$tag$&&e.$elm$){J(e.$elm$,false)}}}return u};var J=function(e,t){De.$flags$|=1;var n=e.childNodes;for(var r=n.length-1;r>=0;r--){var a=n[r];if(a["s-hn"]!==i&&a["s-ol"]){ee(a).insertBefore(a,Z(a));a["s-ol"].remove();a["s-ol"]=undefined;$=true}if(t){J(a,t)}}De.$flags$&=~1};var K=function(e,t,n,r,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var o;for(;a<=i;++a){if(r[a]){o=G(null,n,a);if(o){r[a].$elm$=o;l.insertBefore(o,Z(t))}}}};var Q=function(e,t,n){for(var r=t;r<=n;++r){var a=e[r];if(a){var i=a.$elm$;le(a);if(i){{o=true;if(i["s-ol"]){i["s-ol"].remove()}else{J(i,true)}}i.remove()}}}};var X=function(e,t,n,r){var a=0;var i=0;var l=0;var o=0;var $=t.length-1;var s=t[0];var f=t[$];var u=r.length-1;var c=r[0];var v=r[u];var d;var h;while(a<=$&&i<=u){if(s==null){s=t[++a]}else if(f==null){f=t[--$]}else if(c==null){c=r[++i]}else if(v==null){v=r[--u]}else if(Y(s,c)){te(s,c);s=t[++a];c=r[++i]}else if(Y(f,v)){te(f,v);f=t[--$];v=r[--u]}else if(Y(s,v)){if(s.$tag$==="slot"||v.$tag$==="slot"){J(s.$elm$.parentNode,false)}te(s,v);e.insertBefore(s.$elm$,f.$elm$.nextSibling);s=t[++a];v=r[--u]}else if(Y(f,c)){if(s.$tag$==="slot"||v.$tag$==="slot"){J(f.$elm$.parentNode,false)}te(f,c);e.insertBefore(f.$elm$,s.$elm$);f=t[--$];c=r[++i]}else{l=-1;{for(o=a;o<=$;++o){if(t[o]&&t[o].$key$!==null&&t[o].$key$===c.$key$){l=o;break}}}if(l>=0){h=t[l];if(h.$tag$!==c.$tag$){d=G(t&&t[i],n,l)}else{te(h,c);t[l]=undefined;d=h.$elm$}c=r[++i]}else{d=G(t&&t[i],n,i);c=r[++i]}if(d){{ee(s.$elm$).insertBefore(d,Z(s.$elm$))}}}}if(a>$){K(e,r[u+1]==null?null:r[u+1].$elm$,n,r,i,u)}else if(i>u){Q(t,a,$)}};var Y=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var Z=function(e){return e&&e["s-ol"]||e};var ee=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var te=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var i=t.$tag$;var l=t.$text$;var o;if(l===null){{s=i==="svg"?true:i==="foreignObject"?false:s}{if(i==="slot");else{F(e,t,s)}}if(r!==null&&a!==null){X(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}K(n,null,t,a,0,a.length-1)}else if(r!==null){Q(r,0,r.length-1)}if(s&&i==="svg"){s=false}}else if(o=n["s-cr"]){o.parentNode.textContent=l}else if(e.$text$!==l){n.data=l}};var ne=function(e){var t=e.childNodes;var n;var r;var a;var i;var l;var o;for(r=0,a=t.length;r<a;r++){n=t[r];if(n.nodeType===1){if(n["s-sr"]){l=n["s-sn"];n.hidden=false;for(i=0;i<a;i++){o=t[i].nodeType;if(t[i]["s-hn"]!==n["s-hn"]||l!==""){if(o===1&&l===t[i].getAttribute("slot")){n.hidden=true;break}}else{if(o===1||o===3&&t[i].textContent.trim()!==""){n.hidden=true;break}}}}ne(n)}}};var re=[];var ae=function(e){var t;var n;var r;var a;var i;var l;var $=0;var s=e.childNodes;var f=s.length;for(;$<f;$++){t=s[$];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){r=n.parentNode.childNodes;a=t["s-sn"];for(l=r.length-1;l>=0;l--){n=r[l];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(ie(n,a)){i=re.find((function(e){return e.$nodeToRelocate$===n}));o=true;n["s-sn"]=n["s-sn"]||a;if(i){i.$slotRefNode$=t}else{re.push({$slotRefNode$:t,$nodeToRelocate$:n})}if(n["s-sr"]){re.map((function(e){if(ie(e.$nodeToRelocate$,n["s-sn"])){i=re.find((function(e){return e.$nodeToRelocate$===n}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!re.some((function(e){return e.$nodeToRelocate$===n}))){re.push({$nodeToRelocate$:n})}}}}if(t.nodeType===1){ae(t)}}};var ie=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var le=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(le)}};var oe=function(e,t,n){if(n===void 0){n=false}var r=e.$hostElement$;var s=e.$cmpMeta$;var f=e.$vnode$||T(null,null);var u=C(t)?t:k(null,null,t);i=r.tagName;if(s.$attrsToReflect$){u.$attrs$=u.$attrs$||{};s.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return u.$attrs$[n]=r[t]}))}if(n&&u.$attrs$){for(var c=0,v=Object.keys(u.$attrs$);c<v.length;c++){var d=v[c];if(r.hasAttribute(d)&&!["key","ref","style","class"].includes(d)){u.$attrs$[d]=r[d]}}}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=r;{a=r["s-cr"];l=(s.$flags$&1)!==0;o=false}te(f,u);{De.$flags$|=1;if($){ae(u.$elm$);var h=void 0;var p=void 0;var m=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<re.length;w++){h=re[w];p=h.$nodeToRelocate$;if(!p["s-ol"]){m=We.createTextNode("");m["s-nr"]=p;p.parentNode.insertBefore(p["s-ol"]=m,p)}}for(w=0;w<re.length;w++){h=re[w];p=h.$nodeToRelocate$;if(h.$slotRefNode$){g=h.$slotRefNode$.parentNode;y=h.$slotRefNode$.nextSibling;m=p["s-ol"];while(m=m.previousSibling){b=m["s-nr"];if(b&&b["s-sn"]===p["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==p.parentNode||p.nextSibling!==y){if(p!==y){if(!p["s-hn"]&&p["s-ol"]){p["s-hn"]=p["s-ol"].parentNode.nodeName}g.insertBefore(p,y)}}}else{if(p.nodeType===1){p.hidden=true}}}}if(o){ne(u.$elm$)}De.$flags$&=~1;re.length=0}};var $e=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var se=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}$e(e,e.$ancestorComponent$);var n=function(){return fe(e,t)};return tt(n)};var fe=function(e,t){var n=u("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return me(r,t,n)}));e.$queuedListeners$=undefined}}{a=me(r,"componentWillLoad")}}n();return ue(a,(function(){return ve(e,r,t)}))};var ue=function(e,t){return ce(e)?e.then(t):t()};var ce=function(e){return e instanceof Promise||e&&e.then&&typeof e.then==="function"};var ve=function(e,t,r){return __awaiter(n,void 0,void 0,(function(){var n,a,i,l,o,$,s;return __generator(this,(function(f){a=e.$hostElement$;i=u("update",e.$cmpMeta$.$tagName$);l=a["s-rc"];if(r){U(e)}o=u("render",e.$cmpMeta$.$tagName$);{de(e,t,a,r)}if(l){l.map((function(e){return e()}));a["s-rc"]=undefined}o();i();{$=(n=a["s-p"])!==null&&n!==void 0?n:[];s=function(){return he(e)};if($.length===0){s()}else{Promise.all($).then(s);e.$flags$|=4;$.length=0}}return[2]}))}))};var de=function(e,t,n,r){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{oe(e,t,r)}}}}catch(t){Be(t,e.$hostElement$)}return null};var he=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=u("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{me(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{ge(n)}{me(a,"componentDidLoad")}r();{e.$onReadyResolve$(n);if(!i){pe()}}}else{r()}{e.$onInstanceResolve$(n)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){et((function(){return se(e,false)}))}e.$flags$&=~(4|512)}};var pe=function(e){{ge(We.documentElement)}et((function(){return M(He,"appload",{detail:{namespace:r}})}))};var me=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(e){Be(e)}}return undefined};var ge=function(e){return e.classList.add("hydrated")};var ye=function(e,t){return Ee(e).$instanceValues$.get(t)};var be=function(e,t,n,r){var a=Ee(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(t);var o=a.$flags$;var $=a.$lazyInstance$;n=j(n,r.$members$[t][0]);var s=Number.isNaN(l)&&Number.isNaN(n);var f=n!==l&&!s;if((!(o&8)||l===undefined)&&f){a.$instanceValues$.set(t,n);if($){if(r.$watchers$&&o&128){var u=r.$watchers$[t];if(u){u.map((function(e){try{$[e](n,l,t)}catch(e){Be(e,i)}}))}}if((o&(2|16))===2){if($.componentShouldUpdate){if($.componentShouldUpdate(n,l,t)===false){return}}se(a,false)}}}};var we=function(e,t,n){var r;if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var a=Object.entries(t.$members$);var i=e.prototype;a.map((function(e){var r=e[0],a=e[1][0];if(a&31||n&2&&a&32){Object.defineProperty(i,r,{get:function(){return ye(this,r)},set:function(e){be(this,r,e,t)},configurable:true,enumerable:true})}else if(n&1&&a&64){Object.defineProperty(i,r,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var n=Ee(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})}}));if(n&1){var l=new Map;i.attributeChangedCallback=function(e,n,r){var a=this;De.jmp((function(){var o=l.get(e);if(a.hasOwnProperty(o)){r=a[o];delete a[o]}else if(i.hasOwnProperty(o)&&typeof a[o]==="number"&&a[o]==r){return}else if(o==null){var $=Ee(a);var s=$===null||$===void 0?void 0:$.$flags$;if(!(s&8)&&s&128&&r!==n){var f=$.$lazyInstance$;var u=t.$watchers$[e];u===null||u===void 0?void 0:u.forEach((function(t){if(f[t]!=null){f[t].call(f,r,n,e)}}))}return}a[o]=r===null&&typeof a[o]==="boolean"?false:r}))};e.observedAttributes=Array.from(new Set(__spreadArray(__spreadArray([],Object.keys((r=t.$watchers$)!==null&&r!==void 0?r:{}),true),a.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var n=e[0],r=e[1];var a=r[1]||n;l.set(a,n);if(r[0]&512){t.$attrsToReflect$.push([n,a])}return a})),true)))}}return e};var Ne=function(e,t,r,a,i){return __awaiter(n,void 0,void 0,(function(){var e,n,a,l,o,$,s;return __generator(this,(function(f){switch(f.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=Ue(r);if(!i.then)return[3,2];e=c();return[4,i];case 1:i=f.sent();e();f.label=2;case 2:if(!i.isProxied){{r.$watchers$=i.watchers}we(i,r,2);i.isProxied=true}n=u("createInstance",r.$tagName$);{t.$flags$|=8}try{new i(t)}catch(e){Be(e)}{t.$flags$&=~8}{t.$flags$|=128}n();Re(t.$lazyInstance$);if(i.style){a=i.style;l=V(r);if(!Ve.has(l)){o=u("registerStyles",r.$tagName$);B(l,a,!!(r.$flags$&1));o()}}f.label=3;case 3:$=t.$ancestorComponent$;s=function(){return se(t,true)};if($&&$["s-rc"]){$["s-rc"].push(s)}else{s()}return[2]}}))}))};var Re=function(e){{me(e,"connectedCallback")}};var xe=function(e){if((De.$flags$&1)===0){var t=Ee(e);var n=t.$cmpMeta$;var r=u("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(m);if(a){I(e,n.$tagName$,a,t)}}if(!a){if(n.$flags$&(4|8)){Se(e)}}{var i=e;while(i=i.parentNode||i.host){if(i.nodeType===1&&i.hasAttribute("s-id")&&i["s-p"]||i["s-p"]){$e(t,t.$ancestorComponent$=i);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{Ne(e,t,n)}}else{Ae(e,t,n.$listeners$);if(t===null||t===void 0?void 0:t.$lazyInstance$){Re(t.$lazyInstance$)}else if(t===null||t===void 0?void 0:t.$onReadyPromise$){t.$onReadyPromise$.then((function(){return Re(t.$lazyInstance$)}))}}r()}};var Se=function(e){var t=e["s-cr"]=We.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var _e=function(e){};var ke=function(e){return __awaiter(n,void 0,void 0,(function(){var t;return __generator(this,(function(n){if((De.$flags$&1)===0){t=Ee(e);{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(t===null||t===void 0?void 0:t.$lazyInstance$);else if(t===null||t===void 0?void 0:t.$onReadyPromise$){t.$onReadyPromise$.then((function(){return _e()}))}}return[2]}))}))};var Te=e("b",(function(e,t){if(t===void 0){t={}}var n;var r=u();var a=[];var i=t.exclude||[];var l=He.customElements;var o=We.head;var $=o.querySelector("meta[charset]");var s=We.createElement("style");var f=[];var c;var v=true;Object.assign(De,t);De.$resourcesUrl$=new URL(t.resourcesUrl||"./",We.baseURI).href;{De.$flags$|=2}e.map((function(e){e[1].map((function(t){var n;var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$=(n=t[4])!==null&&n!==void 0?n:{}}var o=r.$tagName$;var $=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;Me(t,r);return n}t.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}if(v){f.push(this)}else{De.jmp((function(){return xe(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;De.jmp((function(){return ke(e)}))};t.prototype.componentOnReady=function(){return Ee(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!i.includes(o)&&!l.get(o)){a.push(o);l.define(o,we($,r,1))}}))}));{s.innerHTML=a+b;s.setAttribute("data-styles","");var d=(n=De.$nonce$)!==null&&n!==void 0?n:_(We);if(d!=null){s.setAttribute("nonce",d)}o.insertBefore(s,$?$.nextSibling:o.firstChild)}v=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{De.jmp((function(){return c=setTimeout(pe,30)}))}}r()}));var Ae=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],i=n[2];var l=Ie(e,r);var o=Ce(t,i);var $=Le(r);De.ael(l,a,o,$);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return De.rel(l,a,o,$)}))}))}};var Ce=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}}}catch(e){Be(e)}}};var Ie=function(e,t){if(t&8)return He;return e};var Le=function(e){return(e&2)!==0};var Pe=e("s",(function(e){return De.$nonce$=e}));var je=new WeakMap;var Ee=function(e){return je.get(e)};var Oe=e("r",(function(e,t){return je.set(t.$lazyInstance$=e,t)}));var Me=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}))}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}Ae(e,n,t.$listeners$);return je.set(e,n)};var ze=function(e,t){return t in e};var Be=function(e,t){return(0,console.error)(e,t)};var qe=new Map;var Ue=function(e,n,r){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=qe.get(i);if(l){return l[a]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return t.import("./".concat(i,".entry.js").concat("")).then((function(e){{qe.set(i,e)}return e[a]}),Be)};var Ve=new Map;var He=typeof window!=="undefined"?window:{};var We=He.document||{head:{}};var De={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var Fe=true;var Ge=e("p",(function(e){return Promise.resolve(e)}));var Je=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false}();var Ke=[];var Qe=[];var Xe=function(e,t){return function(n){e.push(n);if(!f){f=true;if(t&&De.$flags$&4){et(Ze)}else{De.raf(Ze)}}}};var Ye=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Be(e)}}e.length=0};var Ze=function(){Ye(Ke);{Ye(Qe);if(f=Ke.length>0){De.raf(Ze)}}};var et=function(e){return Ge().then(e)};var tt=Xe(Qe,true)}}}));
//# sourceMappingURL=p-52326bc0.system.js.map