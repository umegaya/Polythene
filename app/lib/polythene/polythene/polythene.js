define([],function(){"use strict";var n,t,e;return n="material-design-iconic-font",t=function(){var n,t,e;t=document.createElement("fakeelement"),e={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(n in e)if(void 0!==t.style[n])return e[n]}.call(),e=function(){var n={};return{register:function(n,t){return function(){var i=new t,o=t.bind(i);return e.on(n,o),i.onunload=function(){e.off(o)},i}},on:function(t,e){t.forEach(function(t){n[t]||(n[t]=[]),n[t].push(e)})},off:function(t){for(var e in n){var i=n[e].indexOf(t);i>-1&&n[e].splice(i,1)}},trigger:function(t,e){console.log("channels",n),n[t].map(function(n){n(e)})}}}.call(),{iconSet:n,componentProps:function(n,t){var e,i;return n.props=n.props||{},n.classList=n.classList||[],e=n.classList,e.push(t.className||null),i=this.assign(n.props,{"class":e.join(" ")},t.props)},assign:function(n){if(void 0===n||null===n)throw new TypeError("Cannot convert first argument to object");for(var t=Object(n),e=1;e<arguments.length;e++){var i=arguments[e];if(void 0!==i&&null!==i){i=Object(i);for(var o=Object.keys(Object(i)),r=0,a=o.length;a>r;r++){var s=o[r],c=Object.getOwnPropertyDescriptor(i,s);void 0!==c&&c.enumerable&&(t[s]=i[s])}}}return t},whichTransitionEvent:function(){return t},embellish:function(n,t){return t=t||{},t.before&&n.unshift(t.before),t.after&&n.push(t.after),n},observable:e}});