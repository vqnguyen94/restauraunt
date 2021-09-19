(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(645),r=t.n(o),i=t(667),a=t.n(i),c=new URL(t(865),t.b),d=r()((function(e){return e[1]}));d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Montserrat&family=Philosopher:ital@1&display=swap);"]);var s=a()(c);d.push([e.id,"body, html {\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nh1, p {\n    text-align: center;\n    font-size: 2em;\n}\n\nh2 {\n    font-size: 2em;\n}\n\n\n#navbar {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 2vw;\n    margin-top: 2vh;\n}\n\n#tabs {\n    display: flex;\n    justify-content: space-around;\n    width: 45vw;\n    align-items: center;\n    \n}\n\n\n#logo {\n    width: 10vw;\n}\n\n\n/* Fade transition when navigation through pages */\n.fade {\n    animation-duration: 1s;\n    animation-name: fade;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n@keyframes fade {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n#home-content {\n    margin-top: 2vh;\n    background-image: url("+s+");\n    height: 87vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;  \n    justify-content: center;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#order-now {\n    background: #72c630;\n    color: white;\n    text-decoration: none;\n    border: none;\n    transition-duration: 0.4s;\n    border: solid 3px transparent;\n    width: 10vw;\n    font-size: 1.2vw;\n    padding-top: 0.6em;\n    padding-bottom: 0.3em;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n#order-now:hover {\n    background: white;\n    color: #72c630;\n    border: 3px #72c630 solid;\n    \n}\n\n#slogan {\n    font-size: 5vw;\n    margin-bottom: 5vh;\n    font-family: 'Philosopher', sans-serif;\n}\n\n#home, #menu, #contact {\n    transition-duration: 0.2s;\n    cursor: pointer;\n    font-size: 1.5vw;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n#home:hover, #menu:hover, #contact:hover {\n    color: #72c630;\n    \n}\n\n#location-img {\n    width: 30%;\n    height: auto;\n}\n\n#contact-content {\n    margin-top: 2vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    text-align: center;\n    \n}\n\n#location-area {\n    font-size: 3.5em;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n#location-address {\n    font-size: 2em;\n}\n\n#menu-content {\n    display: flex;\n    justify-content: center;\n    height: 75vh;\n}\n\n#left-menu, #right-menu, #item-img {\n    padding: 3em;\n}\n\n#left-menu {\n    width: 30%;\n}\n\n#right-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    width: 30%;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    column-count: 2;\n    font-size: 1em;\n}\n\nli {\n    padding-bottom: .2em;\n    font-weight: bold;\n}\n\n/* Image on menu page */\n#item-img {\n    height: auto;\n}\n\n.menu-category {\n    border-bottom: solid 0.1em black;\n}\n\n.menu-title {\n    text-align: left;\n    font-size: 3em;\n    font-weight: bold;\n    margin-bottom: 0;\n    margin-left: 1.4em;\n}",""]);const l=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==m?(n[m].references++,n[m].updater(p)):n.push({identifier:u,updater:r(p,o),references:1}),a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},865:(e,n,t)=>{e.exports=t.p+"7ef9dfb3299cd17e6236.jpg"},140:(e,n,t)=>{e.exports=t.p+"940170fa0a9447052969.jpg"},682:(e,n,t)=>{e.exports=t.p+"547aaa3579feda9d0cf4.png"},279:(e,n,t)=>{e.exports=t.p+"907170b79aaeb6963370.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(865);function n(){const n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("button");return(new Image).src=e,n.setAttribute("id","home-content"),t.setAttribute("id","slogan"),o.setAttribute("id","order-now"),t.textContent="Freshly made teas and sweets",o.textContent="ORDER NOW",n.appendChild(t),n.appendChild(o),n.classList.toggle("fade"),n}var o=t(279);const r={"Milk Tea":["Bobar Classic","Coconut","Taro","Wintermelon","Honeydew","Brown Sugar","Matcha","Mango"],"Fruit Tea":["Lemon","Strawberry","Lychee","Peach","Mango","Grapefruit","Tropical","Kumquat"],Smoothie:["Banana","Avocado","Coconut","Taro","Mango","Lychee","Strawberry","Pineapple"],Toppings:["Brown sugar boba","Egg pudding","Red bean","Sea salt foam","Cheese foam","Passionfruit popping","Strawberry popping","Mango popping"],"Sweetness level":["Sugar free: 0%","Half sugar: 50%","Regular sugar: 100%"]};function i(e){const n=document.createElement("div"),t=document.createElement("h2");return t.textContent=e,t.classList.toggle("menu-category"),n.appendChild(t),n.appendChild(function(e){const n=r[e],t=document.createElement("ul");for(let e=0;e<n.length;e++){const o=document.createElement("li");o.textContent=n[e],t.appendChild(o)}return t}(e)),n}var a=t(140),c=t(682),d=t(379),s=t.n(d),l=t(795),u=t.n(l),m=t(569),p=t.n(m),f=t(565),h=t.n(f),g=t(216),v=t.n(g),b=t(589),y=t.n(b),C=t(426),w={};w.styleTagTransform=y(),w.setAttributes=h(),w.insert=p().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=v(),s()(C.Z,w),C.Z&&C.Z.locals&&C.Z.locals;const E=document.querySelector("#content");E.appendChild(function(){const e=document.createElement("div"),n=document.createElement("div"),t=new Image,o=document.createElement("div");t.src=c,n.appendChild(t),e.setAttribute("id","navbar"),t.setAttribute("id","logo"),o.setAttribute("id","tabs");const r=document.createElement("div");r.textContent="HOME",r.setAttribute("id","home");const i=document.createElement("div");i.textContent="MENU",i.setAttribute("id","menu");const a=document.createElement("div");return a.textContent="CONTACT",a.setAttribute("id","contact"),o.appendChild(r),o.appendChild(i),o.appendChild(a),e.appendChild(n),e.appendChild(o),e}()),E.appendChild(n());const x=document.querySelector("#logo"),S=document.querySelector("#home"),A=document.querySelector("#menu"),T=document.querySelector("#contact");function M(){E.lastElementChild.remove(),E.appendChild(n()),document.title="Bobar | Home"}x.addEventListener("click",M),S.addEventListener("click",M),A.addEventListener("click",(()=>{E.lastElementChild.remove(),E.appendChild(function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("h1"),r=document.createElement("div"),a=document.createElement("div"),c=new Image;return t.textContent="DRINKS",t.classList.toggle("menu-title"),n.setAttribute("id","menu-content"),r.setAttribute("id","left-menu"),a.setAttribute("id","right-menu"),c.setAttribute("id","item-img"),c.src=o,r.appendChild(i("Milk Tea")),r.appendChild(i("Fruit Tea")),r.appendChild(i("Smoothie")),a.appendChild(i("Toppings")),a.appendChild(i("Sweetness level")),e.appendChild(t),n.appendChild(r),n.appendChild(c),n.appendChild(a),e.appendChild(n),e.classList.toggle("fade"),e}()),document.title="Bobar | Menu"})),T.addEventListener("click",(()=>{E.lastElementChild.remove(),E.appendChild(function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("h1"),o=document.createElement("h2"),r=new Image;return r.src=a,r.setAttribute("id","location-img"),e.setAttribute("id","contact-content"),t.setAttribute("id","location-area"),o.setAttribute("id","location-address"),t.innerHTML="Bobar Elk Grove Village - <br>Strawberry Hill Plaza",o.innerHTML="621 Meacham Rd <br> Elk Grove Village, 60007 <br> (773) 744-4284",n.appendChild(t),n.appendChild(o),n.setAttribute("id","location-info"),e.appendChild(r),e.appendChild(n),e.classList.toggle("fade"),e}()),document.title="Bobar | Contact"}))})()})();