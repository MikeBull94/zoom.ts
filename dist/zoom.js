/*!
 * zoom.ts v7.5.0
 * https://www.michael-bull.com/projects/zoom.ts
 * 
 * Copyright (c) 2017 Michael Bull (https://www.michael-bull.com)
 * @license ISC
 */
!function(e){function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="dist/",n(n.s=19)}([function(e,n,t){"use strict";function i(e){e.offsetHeight}function r(e){return[e.clientWidth,e.clientHeight]}function o(e,n){var t=e.getAttribute("data-"+n);return null===t?1/0:+t}function s(e){return[o(e,"width"),o(e,"height")]}function a(e,n){return e.className.indexOf(n)!==-1}function l(e,n){0===e.className.length?e.className=n:e.className+=" "+n}function u(e,n){var t,i,r=e.className;r.indexOf(" ")!==-1?(t=r.split(" "),(i=t.indexOf(n))!==-1&&(t.splice(i,1),e.className=t.join(" "))):r===n&&(e.className="")}Object.defineProperty(n,"__esModule",{value:!0}),n.repaint=i,n.clientDimensions=r,n.targetDimensions=s,n.hasClass=a,n.addClass=l,n.removeClass=u},function(e,n,t){"use strict";function i(e,n,t,i,r){var o=e[i],s=e[r];return"function"==typeof o?(o.call(e,n,t),!0):"function"==typeof s&&(s.call(e,"on"+n,t),!0)}function r(e){if("function"==typeof Event)return new Event(e);var n=document.createEvent("Event");return n.initEvent(e,!1,!1),n}function o(e,n,t){i(e,n,t,"addEventListener","attachEvent")||a(n,t)}function s(e,n,t){i(e,n,t,"removeEventListener","detachEvent")}function a(e,n){n(r(e))}Object.defineProperty(n,"__esModule",{value:!0}),n.addEventListener=o,n.removeEventListener=s,n.fireEventListener=a},function(e,n,t){"use strict";function i(e){return e.compatMode===n.STANDARDS_MODE}function r(e){return i(e)?e.documentElement:e.body}function o(e,n){if("complete"===e.readyState)return n();u.addEventListener(e,"DOMContentLoaded",function(){return n()})}function s(e){return l.clientDimensions(r(e))}function a(e,n){var t=e.createElement("div");return t.className=n,t}var l,u;Object.defineProperty(n,"__esModule",{value:!0}),l=t(0),u=t(1),n.QUIRKS_MODE="BackCompat",n.STANDARDS_MODE="CSS1Compat",n.isStandardsMode=i,n.rootElement=r,n.ready=o,n.viewportDimensions=s,n.createDiv=a},function(e,n,t){"use strict";function i(e){var t,i,r,o=[e],s=""+e.charAt(0).toUpperCase()+e.substr(1);for(t=0,i=n.vendorPrefixes;t<i.length;t++)r=i[t],o.push(""+r+s);return o}function r(e,n){var t,r,o;for(t=0,r=i(n);t<r.length;t++)if((o=r[t])in e)return o;return null}Object.defineProperty(n,"__esModule",{value:!0}),n.vendorPrefixes=["Webkit","Moz","ms","O"],n.vendorProperties=i,n.vendorProperty=r},function(e,n,t){"use strict";function i(e){l=o.createZoomInListener(e,a),s.addEventListener(e.document.body,"click",l)}function r(e){s.removeEventListener(e.document.body,"click",l)}var o,s,a,l;Object.defineProperty(n,"__esModule",{value:!0}),o=t(14),s=t(1),a=50,n.addZoomListener=i,n.removeZoomListener=r},function(e,n,t){"use strict";function i(e,n){var t,i,r,o;return void 0!==e.getComputedStyle&&(null!==(t=a.vendorProperty(n.style,"transitionDuration"))&&(i=e.getComputedStyle(n),""!==(r=i[t])&&(o=parseFloat(r),!isNaN(o)&&0!==o)))}function r(e,n){var t,i,r,o,s;return"function"==typeof e.getComputedStyle&&(t={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform",msTransform:"-ms-transform",OTransform:"-o-transform",transform:"transform"},n in t&&(i=e.document.createElement("div"),r=i.style,r[n]="translate3d(1px,1px,1px)",e.document.body.appendChild(i),o=e.getComputedStyle(i),s=o.getPropertyValue(t[n]),e.document.body.removeChild(i),s.length>0&&"none"!==s))}function o(e){return void 0===e.pageYOffset?s.rootElement(e.document).scrollTop:e.pageYOffset}var s,a;Object.defineProperty(n,"__esModule",{value:!0}),s=t(2),a=t(3),n.hasTransitions=i,n.hasTranslate3d=r,n.pageScrollY=o},function(e,n,t){var i=t(16);"string"==typeof i&&(i=[[e.i,i,""]]),t(18)(i,{}),i.locals&&(e.exports=i.locals)},function(e,n,t){"use strict";function i(e){return[e.left,e.top]}function r(e){return[e.width,e.height]}function o(e,n){return[e[0]*n,e[1]*n]}function s(e,n){return[e[0]/n,e[1]/n]}function a(e,n){return[e[0]+n[0],e[1]+n[1]]}function l(e,n){return[e[0]-n[0],e[1]-n[1]]}function u(e,n){return[e[0]/n[0],e[1]/n[1]]}function c(e,n){return[Math.min(e[0],n[0]),Math.min(e[1],n[1])]}function d(e,n,t){return Math.min(e,n)/t}function f(e,n,t){var i=d(e[0],n[0],t[0]),r=d(e[1],n[1],t[1]);return Math.min(i,r)}function p(e,n){return s(l(e,n),2)}function m(e,n,t){return l(p(e,n),t)}function v(e,n,t,i){var r=o(n,i);return s(m(e,r,a(t,p(n,r))),i)}Object.defineProperty(n,"__esModule",{value:!0}),n.positionOf=i,n.sizeOf=r,n.multiplyMatrix=o,n.divideMatrix=s,n.addMatrices=a,n.subtractMatrices=l,n.divideMatrices=u,n.minimizeMatrices=c,n.calculateScale=f,n.centrePadding=p,n.centrePosition=m,n.translateToCentre=v},function(e,n,t){"use strict";function i(e,n){var t,i=e.createElement("img");return i.className="zoom__clone",i.src=n,t=function(){u.removeEventListener(i,"load",t),a(i)},u.addEventListener(i,"load",t),i}function r(e){c.addClass(e,"zoom__clone--visible")}function o(e){c.removeClass(e,"zoom__clone--visible")}function s(e){return c.hasClass(e,"zoom__clone--visible")}function a(e){c.addClass(e,"zoom__clone--loaded")}function l(e){return c.hasClass(e,"zoom__clone--loaded")}var u,c;Object.defineProperty(n,"__esModule",{value:!0}),u=t(1),c=t(0),n.createClone=i,n.setCloneVisible=r,n.unsetCloneVisible=o,n.isCloneVisible=s,n.setCloneLoaded=a,n.isCloneLoaded=l},function(e,n,t){"use strict";function i(e){return o.hasClass(e,"zoom__container")}function r(e,n){e.style.transition="initial",n(),o.repaint(e),e.style.transition=""}Object.defineProperty(n,"__esModule",{value:!0});var o=t(0);n.isContainer=i,n.refreshContainer=r},function(e,n,t){"use strict";function i(e){c.addClass(e,"zoom__element--hidden")}function r(e){c.removeClass(e,"zoom__element--hidden")}function o(e){return c.hasClass(e,"zoom__element--hidden")}function s(e){c.addClass(e,"zoom__element--active")}function a(e){c.removeClass(e,"zoom__element--active")}function l(e){return c.hasClass(e,"zoom__element--active")}function u(e){return e instanceof HTMLImageElement&&c.hasClass(e,"zoom__element")}Object.defineProperty(n,"__esModule",{value:!0});var c=t(0);n.setImageHidden=i,n.unsetImageHidden=r,n.isImageHidden=o,n.setImageActive=s,n.unsetImageActive=a,n.isImageActive=l,n.isZoomable=u},function(e,n,t){"use strict";function i(e){var n=s.createDiv(e,"zoom__overlay");return e.body.appendChild(n),a.repaint(n),a.addClass(n,"zoom__overlay--visible"),n}function r(e){a.removeClass(e,"zoom__overlay--visible")}function o(e){return a.hasClass(e,"zoom__overlay--visible")}var s,a;Object.defineProperty(n,"__esModule",{value:!0}),s=t(2),a=t(0),n.createOverlay=i,n.hideOverlay=r,n.isOverlayVisible=o},function(e,n,t){"use strict";function i(e,n){var t=f.vendorProperty(e,"transform");null!==t&&(e[t]=n)}function r(e){i(e,"")}function o(e,n,t,i,r){e.left=n,e.top=t,e.width=i,e.maxWidth=i,e.height=r}function s(e){o(e,"","","","")}function a(e,n,t){o(e,n[0]+"px",n[1]+"px",t[0]+"px",t[1]+"px")}function l(e,n){e.height=n+"px"}function u(e){e.height=""}function c(e,n){return n?"translate3d("+e[0]+"px, "+e[1]+"px, 0)":"translate("+e[0]+"px, "+e[1]+"px)"}function d(e,n,t){return"scale("+e+") "+c(n,t)}Object.defineProperty(n,"__esModule",{value:!0});var f=t(3);n.transform=i,n.resetTransformation=r,n.resetBounds=s,n.setBoundsPx=a,n.setHeightPx=l,n.unsetHeight=u,n.translate=c,n.scaleAndTranslate=d},function(e,n,t){"use strict";function i(e,n){var t=e.getAttribute("data-src");return null!==t?t:n.src}function r(e){m.addClass(e,"zoom--expanded")}function o(e){m.removeClass(e,"zoom--expanded")}function s(e){return m.hasClass(e,"zoom--expanded")}function a(e){m.addClass(e,"zoom--expanding")}function l(e){m.removeClass(e,"zoom--expanding")}function u(e){return m.hasClass(e,"zoom--expanding")}function c(e){m.addClass(e,"zoom--collapsing")}function d(e){m.removeClass(e,"zoom--collapsing")}function f(e){return m.hasClass(e,"zoom--collapsing")}function p(e){return u(e)||f(e)}Object.defineProperty(n,"__esModule",{value:!0});var m=t(0);n.resolveSrc=i,n.setWrapperExpanded=r,n.unsetWrapperExpanded=o,n.isWrapperExpanded=s,n.setWrapperExpanding=a,n.unsetWrapperExpanding=l,n.isWrapperExpanding=u,n.setWrapperCollapsing=c,n.unsetWrapperCollapsing=d,n.isWrapperCollapsing=f,n.isWrapperTransitioning=p},function(e,n,t){"use strict";function i(e){return function(t){t.keyCode===n.ESCAPE_KEY_CODE&&(t.preventDefault(),e())}}function r(e,n,t,i){return function(){Math.abs(e-i())>=n&&t()}}function o(e,n,t){var i=function(){g.removeEventListener(t,"load",i),m.isWrapperExpanded(e)&&!l.isCloneVisible(t)&&(d.setImageHidden(n),l.setCloneVisible(t))};return i}function s(e,n){return function(t){var s,C,E,x,z,L,M,O,P,T,w,S,j,k,D,W,A,N,I,R,U,B,H,V,Z,Y,K,G;if(d.isZoomable(t.target)&&(t.preventDefault(),s=t.target,null!==(C=s.parentElement))){if(E=u.isContainer(C),x=C,E){if(null===(z=C.parentElement))return;x=z}if(L=m.resolveSrc(x,s),M=e.document,O=M.body,null===(P=h.vendorProperty(O.style,"transform"))||t.metaKey||t.ctrlKey)return void e.open(L,"_blank");S=null,E?(T=C,w=T.children.item(1)):(T=a.createDiv(M,"zoom__container"),w=l.createClone(M,L),S=o(x,s,w),g.addEventListener(w,"load",S),x.replaceChild(T,s),T.appendChild(s),T.appendChild(w)),j=!1,null!==P&&(j=y.hasTranslate3d(e,P)),k=f.createOverlay(e.document),D=c.targetDimensions(x),W=s.getBoundingClientRect(),A=v.positionOf(W),N=v.sizeOf(W),I=function(){var e=a.viewportDimensions(M),n=v.minimizeMatrices(e,D),t=v.divideMatrices(n,N),i=Math.min(t[0],t[1]),r=v.multiplyMatrix(N,i),o=v.centrePosition(e,r,A);p.resetTransformation(T.style),p.setBoundsPx(T.style,o,r)},R=function(){var e=a.viewportDimensions(M),n=v.calculateScale(e,D,N),t=v.translateToCentre(e,N,A,n),i=p.scaleAndTranslate(n,t,j);p.transform(T.style,i)},U=function(){m.isWrapperTransitioning(x)?R():I()},B=function(){_.removeTransitionEndListener(T,B),m.unsetWrapperExpanding(x),m.setWrapperExpanded(x),u.refreshContainer(T,function(){return I()}),l.isCloneLoaded(w)&&!l.isCloneVisible(w)&&(null!==S&&_.removeTransitionEndListener(T,S),d.setImageHidden(s),l.setCloneVisible(w))},V=function(){H(),m.isWrapperExpanding(x)&&(_.removeTransitionEndListener(T,B),m.unsetWrapperExpanding(x)),l.isCloneLoaded(w)||null===S||g.removeEventListener(w,"load",S),m.unsetWrapperExpanded(x),m.setWrapperCollapsing(x);var n=function(){_.removeTransitionEndListener(T,n),e.document.body.removeChild(k),m.unsetWrapperCollapsing(x),p.unsetHeight(x.style),d.unsetImageHidden(s),d.unsetImageActive(s),l.isCloneVisible(w)&&l.unsetCloneVisible(w),b.addZoomListener(e)};_.addTransitionEndListener(e,T,n),u.refreshContainer(T,function(){return U()}),p.resetTransformation(T.style),p.resetBounds(T.style),f.hideOverlay(k)},Z=i(V),Y=function(){return V()},K=function(){return U()},G=r(y.pageScrollY(e),n,V,function(){return y.pageScrollY(e)}),H=function(){g.removeEventListener(e.document,"keyup",Z),g.removeEventListener(T,"click",Y),g.removeEventListener(e,"scroll",G),g.removeEventListener(e,"resize",K)},b.removeZoomListener(e),m.setWrapperExpanding(x),d.setImageActive(s),p.setHeightPx(x.style,s.height),_.addTransitionEndListener(e,T,B),R(),g.addEventListener(e.document,"keyup",Z),g.addEventListener(T,"click",Y),g.addEventListener(e,"scroll",G),g.addEventListener(e,"resize",K)}}}var a,l,u,c,d,f,p,m,v,h,y,b,g,_;Object.defineProperty(n,"__esModule",{value:!0}),a=t(2),l=t(8),u=t(9),c=t(0),d=t(10),f=t(11),p=t(12),m=t(13),v=t(7),h=t(3),y=t(5),b=t(4),g=t(1),_=t(15),n.ESCAPE_KEY_CODE=27,n.escKeyPressed=i,n.scrolled=r,n.cloneLoaded=o,n.createZoomInListener=s},function(e,n,t){"use strict";function i(e,n,t){var i,r,o;if(s.hasTransitions(e,n))for(i=0,r=l;i<r.length;i++)o=r[i],a.addEventListener(n,o,t);else a.fireEventListener(l[0],t)}function r(e,n){var t,i,r;for(t=0,i=l;t<i.length;t++)r=i[t],a.removeEventListener(e,r,n)}var o,s,a,l,u,c,d;for(Object.defineProperty(n,"__esModule",{value:!0}),o=t(3),s=t(5),a=t(1),l=["transitionend"],u=0,c=o.vendorPrefixes;u<c.length;u++)d=c[u],l.push(d+"TransitionEnd");n.addTransitionEndListener=i,n.removeTransitionEndListener=r},function(e,n,t){n=e.exports=t(17)(),n.push([e.i,'.zoom{display:block;position:relative;margin:0;width:100%;line-height:0;text-align:center}.zoom--collapsing,.zoom--expanded,.zoom--expanding{z-index:2}.zoom__container{position:relative;-webkit-transition:-webkit-transform .3s cubic-bezier(.2,0,.2,1);transition:-webkit-transform .3s cubic-bezier(.2,0,.2,1);transition:transform .3s cubic-bezier(.2,0,.2,1);transition:transform .3s cubic-bezier(.2,0,.2,1),-webkit-transform .3s cubic-bezier(.2,0,.2,1);will-change:transform}.zoom__element{visibility:visible;opacity:1;-webkit-transition:visibility 0s linear 0s,opacity .4s 0s;transition:visibility 0s linear 0s,opacity .4s 0s;will-change:visibility,opacity;max-width:100%;cursor:pointer;cursor:-moz-zoom-in;cursor:-webkit-zoom-in}.zoom__element--active{width:100%}.zoom__clone,.zoom__element--hidden{visibility:hidden;opacity:0;-webkit-transition:visibility 0s linear .5s,opacity .1s .4s;transition:visibility 0s linear .5s,opacity .1s .4s}.zoom__clone{will-change:visibility,opacity;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;cursor:pointer;cursor:-moz-zoom-out;cursor:-webkit-zoom-out}.zoom__clone--visible{visibility:visible;opacity:1;-webkit-transition:visibility 0s linear 0s,opacity .4s 0s;transition:visibility 0s linear 0s,opacity .4s 0s}.zoom__overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background:#fff;opacity:0;filter:"alpha(opacity=0)";-webkit-transition:opacity .3s;transition:opacity .3s;will-change:opacity,filter}.zoom__overlay--visible{opacity:1;filter:"alpha(opacity=100)"}',""])},function(e,n){e.exports=function(){var e=[];return e.toString=function(){var e,n,t=[];for(e=0;e<this.length;e++)n=this[e],n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1]);return t.join("")},e.i=function(n,t){var i,r,o,s;for("string"==typeof n&&(n=[[null,n,""]]),i={},r=0;r<this.length;r++)"number"==typeof(o=this[r][0])&&(i[o]=!0);for(r=0;r<n.length;r++)s=n[r],"number"==typeof s[0]&&i[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))},e}},function(e,n){function t(e,n){var t,i,r,o,s;for(t=0;t<e.length;t++)if(i=e[t],r=p[i.id]){for(r.refs++,o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(i.parts[o],n))}else{for(s=[],o=0;o<i.parts.length;o++)s.push(l(i.parts[o],n));p[i.id]={id:i.id,refs:1,parts:s}}}function i(e){var n,t,i,r,o,s,a,l=[],u={};for(n=0;n<e.length;n++)t=e[n],i=t[0],r=t[1],o=t[2],s=t[3],a={css:r,media:o,sourceMap:s},u[i]?u[i].parts.push(a):l.push(u[i]={id:i,parts:[a]});return l}function r(e,n){var t=h(),i=g[g.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),g.push(n);else{if("bottom"!==e.insertAt)throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function o(e){e.parentNode.removeChild(e);var n=g.indexOf(e);n>=0&&g.splice(n,1)}function s(e){var n=document.createElement("style");return n.type="text/css",r(e,n),n}function a(e){var n=document.createElement("link");return n.rel="stylesheet",r(e,n),n}function l(e,n){var t,i,r,l;return n.singleton?(l=b++,t=y||(y=s(n)),i=u.bind(null,t,l,!1),r=u.bind(null,t,l,!0)):e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=a(n),i=d.bind(null,t),r=function(){o(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(n),i=c.bind(null,t),r=function(){o(t)}),i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}function u(e,n,t,i){var r,o,s=t?"":i.css;e.styleSheet?e.styleSheet.cssText=f(n,s):(r=document.createTextNode(s),o=e.childNodes,o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r))}function c(e,n){var t=n.css,i=n.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function d(e,n){var t,i,r=n.css,o=n.sourceMap;o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t=new Blob([r],{type:"text/css"}),i=e.href,e.href=URL.createObjectURL(t),i&&URL.revokeObjectURL(i)}var f,p={},m=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}},v=m(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,b=0,g=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw Error("The style-loader cannot be used in a non-browser environment");n=n||{},void 0===n.singleton&&(n.singleton=v()),void 0===n.insertAt&&(n.insertAt="bottom");var r=i(e);return t(r,n),function(e){var o,s,a,l,u,c=[];for(o=0;o<r.length;o++)s=r[o],a=p[s.id],a.refs--,c.push(a);for(e&&(l=i(e),t(l,n)),o=0;o<c.length;o++)if(a=c[o],0===a.refs){for(u=0;u<a.parts.length;u++)a.parts[u]();delete p[a.id]}}},f=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n,t){"use strict";var i,r;Object.defineProperty(n,"__esModule",{value:!0}),t(6),i=t(2),r=t(4),i.ready(document,function(){return r.addZoomListener(window)})}]);