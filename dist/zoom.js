/*
 zoom.ts v7.5.0
 https://www.michael-bull.com/projects/zoom.ts

 Copyright (c) 2017 Michael Bull (https://www.michael-bull.com)
 @license ISC
*/
function B(){function L(a){return[a.clientWidth,a.clientHeight]}function M(a,b){a=a.getAttribute("data-"+b);return null===a?Infinity:Number(a)}function ba(a){"function"!==typeof a.preventDefault&&(a.preventDefault=function(){a.returnValue=!1});"function"!==typeof a.stopPropagation&&(a.stopPropagation=function(){a.cancelBubble=!0});if("mouseover"===a.type){var b=a;void 0===b.relatedTarget&&void 0!==b.fromElement&&(b.relatedTarget=b.fromElement)}else"mouseout"===a.type&&(b=a,void 0===b.relatedTarget&&
void 0!==b.toElement&&(b.relatedTarget=b.toElement));return a}function N(a,b){"function"===typeof a?a(b):a.handleEvent(b)}function t(a,b,d,c){function e(b){var a;void 0===a&&(a=window);if(void 0===b)if(void 0!==a.event)b=a.event;else throw Error("No current event to handle.");N(d,ba(b))}void 0===c&&(c=!1);var f=a.addEventListener,g=a.attachEvent;if("function"===typeof f)return f.call(a,b,e,c),e;if("function"===typeof g&&g.call(a,"on"+b,e))return e}function y(a,b,d){var c;void 0===c&&(c=!1);var e=
t(a,b,function(c){void 0!==e&&l(a,b,e);N(d,c)},c);return e}function l(a,b,d){var c=a.removeEventListener,e=a.detachEvent;"function"===typeof c?c.call(a,b,d):"function"===typeof e&&e.call(a,b,d)}function C(a){return"CSS1Compat"===a.compatMode?a.documentElement:a.body}function O(a,b){a=a.createElement("div");a.className=b;return a}function D(a){return[a.left,a.top]}function E(a,b){return[a[0]/b,a[1]/b]}function F(a,b){return[a[0]-b[0],a[1]-b[1]]}function P(a,b){a=[a[0]/b[0],a[1]/b[1]];return Math.min(a[0],
a[1])}function Q(a,b){return F(E(F(a,b.size),2),b.position)}function u(a,b){return{position:a,size:b}}function R(a){a=a.getBoundingClientRect();return u(D(a),[a.width,a.height])}function G(a,b,d,c,e){a.left=b;a.top=d;a.width=c;a.maxWidth=c;a.height=e}function z(a,b){var d=b.position;b=b.size;G(a,d[0]+"px",d[1]+"px",b[0]+"px",b[1]+"px")}function A(a,b){var d=L(C(document)),c;c=b.size;a=P([Math.min(d[0],a[0]),Math.min(d[1],a[1])],b.size);c=[c[0]*a,c[1]*a];return{position:Q(d,u(b.position,c)),size:c}}
function S(a){return 0<a.length}function q(a,b){return-1!==a.className.indexOf(b)}function p(a,b){a.className=a.className.split(" ").concat(b).filter(S).join(" ")}function k(a,b){a.className=a.className.split(" ").filter(function(a){return S(a)&&a!==b}).join(" ")}function T(a){p(a,"zoom__element--hidden")}function U(a){p(a,"zoom__element--active")}function H(a,b){a=a.getAttribute("data-src");return null===a?b.src:a}function ca(a){var b=document.createElement("img");b.className="zoom__clone";b.src=
a;y(b,"load",function(){return p(b,"zoom__clone--loaded")});return b}function I(a,b){p(b,"zoom__clone--visible");T(a)}function da(a,b){k(a,"zoom__element--hidden");k(b,"zoom__clone--visible")}function x(a){return q(a,"zoom__clone--loaded")}function J(a,b,d,c){var e;e=L(C(document));d=P([Math.min(e[0],d[0]),Math.min(e[1],d[1])],c.size);var f;f=c.size;f=[f[0]*d,f[1]*d];var g=c.position;c=E(F(c.size,f),2);e=E(Q(e,u([g[0]+c[0],g[1]+c[1]],f)),d);b.style[a.g]=a.l?"scale("+d+") "+("translate3d("+e[0]+"px, "+
e[1]+"px, 0)"):"scale("+d+") "+("translate("+e[0]+"px, "+e[1]+"px)")}function V(a,b,d){a.style[b]="initial";d();a.offsetHeight;a.style[b]=""}function ea(a){return function(b){27===b.keyCode&&(b.preventDefault(),a())}}function fa(a,b,d,c){return function(){Math.abs(a-d())>=b&&c()}}function ga(a){return function(){void 0!==a.clone&&q(a.b,"zoom--expanded")&&!q(a.clone,"zoom__clone--visible")&&(p(a.clone,"zoom__clone--visible"),T(a.c))}}function W(){var a=window;return void 0===a.pageYOffset?C(a.document).scrollTop:
a.pageYOffset}function ha(a){var b=""+a.charAt(0).toUpperCase()+a.substr(1),d=ia.map(function(a){return""+a+b});return[a].concat(d)}function X(a,b){var d=0;for(b=ha(b);d<b.length;d++){var c=b[d];if(c in a)return c}}function K(a,b){void 0!==b.clone&&da(b.c,b.clone);k(b.c,"zoom__element--active");document.body.removeChild(b.h);k(b.b,"zoom--collapsing");b.b.style.height="";setTimeout(function(){return Y(a)},1)}function Z(a,b,d){var c=t(window,"scroll",fa(W(),a.m,function(){return W()},function(){return d()})),
e=t(document,"keyup",ea(d)),f=t(b,"click",function(){return d()});return function(){l(document,"keyup",e);l(b,"click",f);l(window,"scroll",c)}}function ja(a,b,d,c){var e=R(b.c),f=t(window,"resize",function(){var a=D(b.b.getBoundingClientRect());e=u(a,e.size);z(b.a.style,A(d,e))}),g;g=Z(a,b.a,function(){g();l(window,"resize",f);void 0===b.clone||void 0===c||x(b.clone)||l(b.clone,"load",c);k(b.b,"zoom--expanded");G(b.a.style,"","","","");K(a,b)});p(b.b,"zoom--expanded");b.b.style.height=b.c.height+
"px";U(b.c);z(b.a.style,A(d,e))}function ka(a,b,d,c,e){function f(){void 0!==b.clone&&x(b.clone)&&!q(b.clone,"zoom__clone--visible")&&(void 0!==c&&l(b.clone,e.f,c),I(b.c,b.clone));k(b.b,"zoom--expanding");p(b.b,"zoom--expanded");V(b.a,e.transitionProperty,function(){b.a.style[e.g]="";z(b.a.style,A(d,g))})}var g=R(b.c),m=t(window,"resize",function(){var a=D(b.b.getBoundingClientRect());g=u(a,g.size);a=b.b;q(a,"zoom--expanding")||q(a,"zoom--collapsing")?J(e,b.a,d,g):z(b.a.style,A(d,g))}),n,aa;aa=Z(a,
b.a,function(){aa();l(window,"resize",m);void 0===b.clone||void 0===c||x(b.clone)||l(b.clone,"load",c);k(b.h,"zoom__overlay--visible");p(b.b,"zoom--collapsing");var f=y(b.a,e.f,function(){K(a,b)});q(b.b,"zoom--expanding")?(void 0!==n&&l(b.a,e.f,n),b.a.style[e.g]="",k(b.b,"zoom--expanding")):(V(b.a,e.transitionProperty,function(){J(e,b.a,d,g)}),b.a.style[e.g]="",G(b.a.style,"","","",""),k(b.b,"zoom--expanded"));void 0===f&&K(a,b)});p(b.b,"zoom--expanding");b.b.style.height=b.c.height+"px";U(b.c);n=
y(b.a,e.f,function(){return f()});void 0===n?f():J(e,b.a,d,g)}function Y(a){var b=t(document.body,"click",function(d){var c=d.target;if(c instanceof HTMLImageElement&&null!==c.parentElement&&q(c,"zoom__element")){d.preventDefault();d.stopPropagation();var e=b,c=d.target,f=c.parentElement,g=q(f,"zoom__container"),f=g?f.parentElement:f;if(d.metaKey||d.ctrlKey)window.open(H(f,c),"_blank");else{void 0!==e&&l(document.body,"click",e);var m,n=window,e=document.body.style;d=X(e,"transform");e=X(e,"transition");
f=!1;void 0!==d&&(f=!0);var k=!1;void 0!==e&&(m=la[e],k=null!==m);var r=!1;if(void 0!==d){var r=n.getComputedStyle,u=ma[d];if("function"===typeof r&&void 0!==u){var w=n.document,n=w.body,w=w.createElement("p");w.style[d]="translate3d(1px,1px,1px)";n.appendChild(w);r=r(w).getPropertyValue(u);n.removeChild(w);r=0<r.length&&"none"!==r}else r=!1}m={g:d,transitionProperty:e,f:m,i:f,j:k,l:r};d=m.i&&m.j&&void 0!==m.f;var h,f=document,e=O(f,"zoom__overlay");f.body.appendChild(e);e.offsetHeight;p(e,"zoom__overlay--visible");
if(g){h=c.parentElement;var g=h.parentElement,v;H(g,c)!==c.src&&(v=h.children.item(1));h={h:e,b:g,a:h,c:c,clone:v};void 0!==h.clone&&x(h.clone)&&I(c,h.clone)}else v=O(document,"zoom__container"),g=c.parentElement,f=H(g,c),f!==c.src&&(h=ca(f)),h={h:e,b:g,a:v,c:c,clone:h},h.b.replaceChild(h.a,c),h.a.appendChild(c),void 0!==h.clone&&h.a.appendChild(h.clone);v=void 0;void 0!==h.clone&&(x(h.clone)?I(c,h.clone):v=t(h.clone,"load",ga(h)));c=h.b;c=[M(c,"width"),M(c,"height")];d?ka(a,h,c,v,m):ja(a,h,c,v)}}})}
var ma={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform",msTransform:"-ms-transform",o:"-o-transform",transform:"transform"},la={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",s:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},ia=["Webkit","Moz","ms","O"],na={m:50};(function(a,b){"complete"===a.readyState?b():y(a,"DOMContentLoaded",function(){return b()})})(document,function(){return Y(na)})}
"undefined"!==typeof module?B():"function"===typeof define&&define.u?define(B):B();
