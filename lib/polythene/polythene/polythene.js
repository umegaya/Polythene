"use strict";Object.defineProperty(exports,"__esModule",{value:true});var DEFAULT_ICON_SET="material-design-iconic-font";var polythene=undefined,_iconSet=undefined,transitionEvent=undefined;_iconSet=DEFAULT_ICON_SET;transitionEvent=function(){var a=undefined,el=undefined,animations=undefined;el=document.createElement("fakeelement");animations={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(a in animations){if(el.style[a]!==undefined){return animations[a]}}}.call();if(!Object.assign){Object.assign=function assign(target,source){for(var index=1,key=undefined;index in arguments;++index){source=arguments[index];for(key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target}}polythene={iconSet:function iconSet(){return _iconSet},setIconSet:function setIconSet(newIconSet){_iconSet=newIconSet},whichTransitionEvent:function whichTransitionEvent(){return transitionEvent},insertContent:function insertContent(content){var opts=arguments[1]===undefined?{}:arguments[1];return[].concat(opts.before,content,opts.after)}};exports["default"]=polythene;module.exports=exports["default"];