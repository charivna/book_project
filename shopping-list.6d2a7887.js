!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},t.parcelRequired7c6=i),i.register("iE7OH",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,t){var o;e(n.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=n),n}})),i("iE7OH").register(JSON.parse('{"l20mf":"shopping-list.6d2a7887.js","aaLHb":"amazon.b69db657.png","dvAvr":"apple.7b1baefc.png","hOrlG":"bookshops.25303dcf.png"}'));var s;s=i("aNJCr").getBundleURL("l20mf")+i("iE7OH").resolve("aaLHb");var c;c=i("aNJCr").getBundleURL("l20mf")+i("iE7OH").resolve("dvAvr");var l;l=i("aNJCr").getBundleURL("l20mf")+i("iE7OH").resolve("hOrlG");var a=document.querySelectorAll(".burger-mobile-header-link"),u=document.querySelector(".burger-header-link-second"),d=document.querySelector(".burger-menu_shopping-list");a.forEach((function(e){u.classList.add("active"),d.classList.add("active")}));var p=document.querySelector(".conteiner-hidden"),h=document.querySelector(".burger-button");document.querySelector(".header");h.addEventListener("click",(function(){if(p.hasAttribute("hidden")){p.hidden=!1,h.innerHTML='\n<svg class="svg-button-close svg-button-hover" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">\n<path  stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M16 2 2 16M2 2l14 14"/>\n</svg>';var e=window.scrollY;return document.body.style.position="fixed",void(document.body.style.top="-".concat(e,"px"))}var n=parseInt(document.body.style.top,10);document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*n),p.hidden=!0,h.innerHTML='\n    <svg class="svg-button svg-button-hover" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">\n            <path d="M19.8333 11.6667H3.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n            <path d="M24.5 7H3.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n            <path d="M24.5 16.3333H3.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n            <path d="M19.8333 21H3.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n          </svg>'}));var f={container:document.querySelector(".js-list"),empty:document.querySelector(".shopping-empty"),removeBook:document.querySelector(".js-removeBook")},g="checkout",v=JSON.parse(localStorage.getItem(g))||[];f.empty.style.visibility="visible",function e(){console.log(v.length<1),v.length<1&&(f.empty.style.visibility="visible",f.container.innerHTML="");f.empty.style.visibility="hidden",v.map((function(e){var t;(t=e,fetch("https://books-backend.p.goit.global/books/".concat(t)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((function(e){var t,o,r,i,a,u,d,p;o=(t=e)._id,r=t.list_name,i=t.title,a=t.author,u=t.description,d=t.book_image,p=t.buy_links,f.container.insertAdjacentHTML("beforeend",'   <li data-id="'.concat(o,'" class="js-product shop-product trigger" data-modal-open="">\n        <img class="shop-img" src="').concat(d,'" alt="').concat(i,'" />\n        <div class="book-info">\n        <h2 class="shop-title">').concat(i,'</h2>\n        <p class="shop-category">').concat(r,'</p>\n        <p class="shop-description">').concat(u,'</p>\n\n        <button class="js-removeBook shop-dlt-btn" type="button" id="').concat(o,'">\n        <svg class="js-clear icon-trash">\n         <use href="./images/icons_by_one/close.svg"></use>\n      </svg>\n        </button>\n\n        <div class="shop-wrap">\n        <p class="shop-author">').concat(a,'</p>  \n       <ul class="shop-link-list">\n         <li>\n             <a href="').concat(p[0].url,'" target="_blank" rel="noreferrer noopener" class="link shop-link-amz">\n            <img class="icon-shop-amz" src="').concat(n(s),'" alt="').concat(p[0].name,'" />\n             </a>\n         </li>\n         <li>\n             <a href="').concat(p[1].url,'" target="_blank" rel="noreferrer noopener" class="link shop-link">\n            <img class="icon-shop" src="').concat(n(c),'" alt="').concat(p[1].name,'" />\n             </a>\n         </li>\n         <li>\n             <a href="').concat(p[3].url,'" target="_blank" rel="noreferrer noopener" class="link shop-link">\n                 <img class="icon-shop" src="').concat(n(l),'" alt="').concat(p[3].name,'" />\n             </a>\n         </li>\n        </ul>\n        </div>\n        \n        </div>\n  </li>'))}))})),f.container.addEventListener("click",(function(n){if("BUTTON"===n.target.nodeName){var t=v.indexOf(n.target.id);v.splice(t,1),localStorage.setItem(g,JSON.stringify(v)),f.container.innerHTML="",e()}}))}()}();
//# sourceMappingURL=shopping-list.6d2a7887.js.map
