var e={d:(n,o)=>{for(var r in o)e.o(o,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:o[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)},n={};e.d(n,{H:()=>t,j:()=>r});var o=function(e,n,o){var r,t,i=null===(t=null===(r=window.FileMaker)||void 0===r?void 0:r.mockedScripts)||void 0===t?void 0:t[e.toLowerCase()];if(void 0===i)throw new Error("The script '".concat(e,"' is not registered."));setTimeout((function(){i(n,o)}),1)},r=function(e,n){if("function"!=typeof n)throw new Error("must pass in a real function");"object"==typeof window.FileMaker&&window.FileMaker.isMock||(window.FileMaker={isMock:!0,mockedScripts:{},PerformScriptWithOption:function(e,n,r){return o(e,n,r)},PerformScript:function(e,n){return function(e,n){o(e,n,0)}(e,n)}}),window.FileMaker.mockedScripts[e.toLowerCase()]=n},t=function(e,n,o){r(e,(function(e){var r=JSON.parse(e),t=r.callbackName,i=r.promiseID,c=r.parameter;(null==o?void 0:o.logParams)&&(console.log("callbackName:",t),console.log("promiseID:",i),console.log("parameter:",c)),setTimeout((function(){return e=void 0,r=void 0,l=function(){var e,r;return function(e,n){var o,r,t,i,c={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,r&&(t=2&i[0]?r.return:i[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,i[1])).done)return t;switch(r=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((t=(t=c.trys).length>0&&t[t.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){c.label=i[1];break}if(6===i[0]&&c.label<t[1]){c.label=t[1],t=i;break}if(t&&c.label<t[2]){c.label=t[2],c.ops.push(i);break}t[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{o=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(a){switch(a.label){case 0:return"function"!=typeof n?[3,2]:[4,n(c)];case 1:return r=a.sent(),[3,3];case 2:r=n,a.label=3;case 3:return["object","number"].includes(typeof(e=r))&&(e=JSON.stringify(e)),window[t](i,e,(null==o?void 0:o.returnError)||!1),[2]}}))},new((a=void 0)||(a=Promise))((function(n,o){function t(e){try{c(l.next(e))}catch(e){o(e)}}function i(e){try{c(l.throw(e))}catch(e){o(e)}}function c(e){var o;e.done?n(e.value):(o=e.value,o instanceof a?o:new a((function(e){e(o)}))).then(t,i)}c((l=l.apply(e,r||[])).next())}));var e,r,a,l}),(null==o?void 0:o.delay)||0)}))},i=n.H,c=n.j;export{i as mockGoferScript,c as mockScript};