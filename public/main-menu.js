(()=>{"use strict";function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}function e(n){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},e(n)}function o(n,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},o(n,t)}function r(n,t,e){return r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}()?Reflect.construct.bind():function(n,t,e){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(n,r));return e&&o(c,e.prototype),c},r.apply(null,arguments)}function c(n){var t="function"==typeof Map?new Map:void 0;return c=function(n){if(null===n||(c=n,-1===Function.toString.call(c).indexOf("[native code]")))return n;var c;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,a)}function a(){return r(n,arguments,e(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o(a,n)},c(n)}function a(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(a=function(){return!!n})()}var l=function(r){function c(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),n=this,r=arguments,o=e(o=c),function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(n,a()?Reflect.construct(o,r||[],e(n).constructor):o.apply(n,r));var n,o,r}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&o(n,t)}(c,r),l=c,(u=[{key:"connectedCallback",value:function(){var n=this;salla.onReady().then((function(){return salla.lang.onLoaded()})).then((function(){return n.menus=[],n.displayAllText=salla.lang.get("blocks.home.display_all"),salla.api.component.getMenus().then((function(t){var e=t.data;return n.menus=e,n.render()})).catch((function(n){return salla.logger.error("salla-menu::Error fetching menus",n)}))}))}},{key:"hasChildren",value:function(n){var t;return(null==n||null===(t=n.children)||void 0===t?void 0:t.length)>0}},{key:"hasProducts",value:function(n){var t;return(null==n||null===(t=n.products)||void 0===t?void 0:t.length)>0}},{key:"getDesktopClasses",value:function(n,t){return"!hidden lg:!block ".concat(t?"root-level lg:!inline-block":"relative"," ").concat(n.products?" mega-menu":"","\n        ").concat(this.hasChildren(n)?" has-children":"")}},{key:"getMobileMenu",value:function(n,t){var e=this,o=n.image?'<img src="'.concat(n.image,'" class="rounded-full" width="48" height="48" alt="').concat(n.title,'" />'):"";return'\n        <li class="lg:hidden text-sm font-bold" '.concat(n.attrs,">\n            ").concat(this.hasChildren(n)?'\n                <span class="'.concat(n.image?"!py-3":"",'">\n                    ').concat(o,"\n                    ").concat(n.title,'\n                </span>\n                <ul>\n                    <li class="text-sm font-bold">\n                        <a href="').concat(n.url,'" class="text-gray-500">').concat(t,"</a>\n                    </li>\n                    ").concat(n.children.map((function(n){return e.getMobileMenu(n,t)})).join(""),"\n                </ul>\n            "):'\n                <a href="'.concat(n.url,'" aria-label="').concat(n.title||"category",'" class="text-gray-500 ').concat(n.image?"!py-3":"",'" ').concat(n.link_attrs,">\n                    ").concat(o,"\n                    <span>").concat(n.title||"","</span>\n                </a>"),"\n        </li>")}},{key:"getDesktopMenu",value:function(n,t){var e=this;return'\n        <li class="'.concat(this.getDesktopClasses(n,t),'" ').concat(n.attrs,'>\n            <a href="').concat(n.url,'" aria-label="').concat(n.title||"category",'" ').concat(n.link_attrs,">\n                <span>").concat(n.title,"</span>\n            </a>\n            ").concat(this.hasChildren(n)?'\n                <div class="sub-menu '.concat(this.hasProducts(n)?"w-full left-0 flex":"w-56",'">\n                    <ul class="').concat(this.hasProducts(n)?"w-56 shrink-0 m-8 rtl:ml-0 ltr:mr-0":"",'">\n                        ').concat(n.children.map((function(n){return e.getDesktopMenu(n,!1)})).join("\n"),"\n                    </ul>\n                    ").concat(this.hasProducts(n)?'\n                    <salla-products-list\n                    source="selected"\n                    shadow-on-hover\n                    source-value="['.concat(n.products,']" />'):"","\n                </div>"):"","\n        </li>")}},{key:"getMenus",value:function(){var n=this;return this.menus.map((function(t){return"\n            ".concat(n.getMobileMenu(t,n.displayAllText),"\n            ").concat(n.getDesktopMenu(t,!0),"\n        ")})).join("\n")}},{key:"render",value:function(){this.innerHTML='\n        <nav id="mobile-menu" class="mobile-menu">\n            <ul class="main-menu">'.concat(this.getMenus(),'</ul>\n            <button class="btn--close close-mobile-menu sicon-cancel lg:hidden"></button>\n        </nav>\n        <button class="btn--close-sm close-mobile-menu sicon-cancel hidden"></button>')}}])&&n(l.prototype,u),Object.defineProperty(l,"prototype",{writable:!1}),l;var l,u}(c(HTMLElement));customElements.define("custom-main-menu",l)})();