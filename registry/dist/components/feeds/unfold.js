!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/unfold"]=t():e["feeds/unfold"]=t()}(self,(function(){return function(){"use strict";var e,t,o={23:function(e){e.exports=coreApis.componentApis.feeds.api}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var f=n[e]={exports:{}};return o[e](f,f.exports,r),f.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var f=Object.create(null);r.r(f);var u={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){u[e]=function(){return o[e]}}));return u.default=function(){return o},r.d(f,u),f},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var f={};return function(){r.d(f,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"unfoldFeeds",displayName:"动态反折叠",tags:[componentsTags.feeds],enabledByDefault:!0,description:{"zh-CN":"自动展开被折叠的动态."},urlInclude:e.feedsUrlsWithoutDetail,entry:async()=>{const{forEachFeedsCard:e}=await Promise.resolve().then(r.t.bind(r,23,23));e({added:e=>{dq(e.element,".fold-hoverable")?.click()}})}}}(),f=f.component}()}));