webpackJsonp([0],{229:function(e,t,n){"use strict";function r(){return{type:u}}function o(){return{type:f}}function i(e){return{type:p,data:e}}function a(e){return{type:s,error:e}}function c(){return function(e){e(o()),l.a.testAsync().then(function(t){return e(i(t))}).catch(function(t){return e(a(t))})}}n.d(t,"a",function(){return u}),n.d(t,"c",function(){return f}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return p}),t.e=r,t.f=c;var l=n(578),u="TEST_ACTION",f="TEST_ASYNC_ACTION_START",s="TEST_ASYNC_ACTION_ERROR",p="TEST_ASYNC_ACTION_SUCCESS"},239:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(8),o=(n.n(r),n(98)),i=n(607),a=(n(612),n(613)),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),l={DASHBOARD:"/",ABOUT:"/about"};c(o.c,{exact:!0,path:"/",component:i.a}),c(o.c,{path:"*",component:a.a})},240:function(e,t,n){e.exports=n(241)},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=(n.n(r),n(256)),i=n.n(o),a=n(333),c=(n.n(a),n(185)),l=n(363),u=(n.n(l),n(565)),f=n(581),s=n(230),p=n.n(s),d=n(231),v=(n.n(d),n(622)),y=(n.n(v),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}());p.a.polyfill();var h=Object(u.a)(),b=function(e){i.a.render(y(a.AppContainer,{},void 0,y(c.a,{store:h},void 0,y(e,{}))),document.getElementById("root"))};b(f.a)},565:function(e,t,n){"use strict";var r=n(119),o=n(566),i=n.n(o),a=n(567),c=(n.n(a),n(570)),l=n.n(c),u=n(576),f=null;try{f=__MARVIN_DEHYDRATED_STATE}catch(e){}f&&(f=l.a.fromJSON(f)),t.a=function(){var e=null;return e=Object(r.a)(i.a),f?Object(r.e)(u.a,f,e):Object(r.e)(u.a,e)}},567:function(e,t,n){e.exports=null},568:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(569),o=(n.n(r),n(147)),i=(n.n(o),Object(r.createLogger)({stateTransformer:function(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];o.Map.isMap(r)?t[n]=r.toJS():t[n]=r}),t}}));t.default=i},576:function(e,t,n){"use strict";var r=n(119),o=n(577);t.a=Object(r.c)({app:o.a})},577:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u[t.type];return n?n(e,t):e}t.a=o;var i,a=n(147),c=(n.n(a),n(229)),l=Object(a.Map)({counter:0,asyncLoading:!1,asyncError:null,asyncData:null}),u=(i={},r(i,c.a,function(e){var t=e.get("counter")+1;return e.merge(Object(a.Map)({counter:t}))}),r(i,c.c,function(e){return e.merge(Object(a.Map)({asyncLoading:!0,asyncError:null,asyncData:null}))}),r(i,c.b,function(e,t){return e.merge(Object(a.Map)({asyncLoading:!1,asyncError:t.error.message}))}),r(i,c.d,function(e,t){return e.merge(Object(a.Map)({asyncLoading:!1,asyncData:t.data}))}),i)},578:function(e,t,n){"use strict";function r(){return fetch("http://date.jsontest.com/").then(function(e){return e.json()})}var o=n(230),i=n.n(o),a=n(231);n.n(a);i.a.polyfill(),t.a={testAsync:r}},579:function(e,t){},581:function(e,t,n){"use strict";var r=n(8),o=(n.n(r),n(98)),i=n(606),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),c=a(o.a,{},void 0,a(i.a,{}));t.a=function(){return c}},606:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return s});var a=n(8),c=(n.n(a),n(239),n(615),n(617)),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=l("div",{className:"App"},void 0,l(c.a,{})),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return f}}]),t}(a.Component)},607:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return R});var a,c,l=n(8),u=(n.n(l),n(185)),f=n(16),s=(n.n(f),n(229)),p=n(608),d=n(609),v=n(610),y=n(611),h=n.n(y),b=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=b("h1",{},void 0,"Marvin"),w=b("p",{},void 0,"Boilerplate for kicking off React/Redux applications."),_=b("hr",{}),O=b("h2",{},void 0,"Examples"),j=b("h3",{},void 0,"Synchronous action"),k=b("h3",{},void 0,"Async action example"),S=b("br",{}),E=b("br",{}),N=b("p",{},void 0,"Loading..."),A=b("h3",{},void 0,"Background image"),P=b("div",{className:"Example"},void 0,b("div",{className:"BackgroundImgExample"})),C=b("h3",{},void 0,"Image imported to the component"),x=b("div",{className:"Example"},void 0,b("img",{src:h.a,alt:"",className:"ImgExample"})),T=b("h3",{},void 0,"SVGs imported as react components"),M=b(v.a,{}),R=(a=Object(u.b)(function(e){return{asyncData:e.app.get("asyncData"),asyncError:e.app.get("asyncError"),asyncLoading:e.app.get("asyncLoading"),counter:e.app.get("counter")}}))(c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleAsyncButtonClick=e.handleAsyncButtonClick.bind(e),e.handleTestButtonClick=e.handleTestButtonClick.bind(e),e}return i(t,e),m(t,[{key:"handleAsyncButtonClick",value:function(){(0,this.props.dispatch)(Object(s.f)())}},{key:"handleTestButtonClick",value:function(){(0,this.props.dispatch)(Object(s.e)())}},{key:"render",value:function(){var e=this.props,t=e.asyncData,n=e.asyncError,r=e.asyncLoading,o=e.counter;return b("div",{className:"Dashboard"},void 0,g,w,_,O,j,b("div",{className:"Example"},void 0,b("p",{},void 0,"Counter: ",o),b("button",{onClick:this.handleTestButtonClick},void 0,"Increase")),k,b("div",{className:"Example"},void 0,t&&b("p",{},void 0,"Date: ",t.date,S,"Time: ",t.time,E,"Miliseconds since epoch: ",t.milliseconds_since_epoch),r&&N,n&&b("p",{},void 0,"Error: ",n),b("button",{disabled:r,onClick:this.handleAsyncButtonClick},void 0,"Get async data")),A,P,C,x,T,b("div",{className:"Example"},void 0,b(p.a,{style:{marginRight:10}}),b(d.a,{style:{marginRight:10}}),M))}}]),t}(l.Component))||c},608:function(e,t,n){"use strict";function r(e){return i.a.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),l)}n.d(t,"a",function(){return r});var o=n(8),i=n.n(o),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=a("rect",{width:"24",height:"24",rx:"12",fill:"#000",fillRule:"evenodd"})},609:function(e,t,n){"use strict";function r(e){return i.a.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),l)}n.d(t,"a",function(){return r});var o=n(8),i=n.n(o),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=a("path",{d:"M0 0h24v24H0z",fill:"#000",fillRule:"evenodd"})},610:function(e,t,n){"use strict";function r(e){return i.a.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),l)}n.d(t,"a",function(){return r});var o=n(8),i=n.n(o),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=a("path",{d:"M12 0l12 24H0z",fill:"#000",fillRule:"evenodd"})},611:function(e,t,n){e.exports=n.p+"client/assets/book2-1240e90615f6ac37ab2e647e25b64c20.jpg"},612:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return f});var a=n(8),c=(n.n(a),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}()),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=c("div",{className:"About"},void 0,c("h1",{},void 0,"About Marvin"),c("p",{},void 0,"Marvin is internal project by ",c("a",{href:"https://work.co"},void 0,"Work & Co"),". We love React and use it a lot. So Marvin is meant to be a starting point for our React projects. But as we love open source too, it is publicly available for anyone interested in using it."),c("p",{},void 0,"Visit documentation on ",c("a",{href:"https://github.com/workco/react-redux-webpack2-boilerplate"},void 0,"GitHub"))),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return u}}]),t}(a.Component)},613:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return s});var a=n(8),c=(n.n(a),n(614)),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=l(c.a,{code:404},void 0,l("div",{className:"NotFound"},void 0,l("h1",{},void 0,"Not Found"))),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return f}}]),t}(a.Component)},614:function(e,t,n){"use strict";var r=n(8),o=(n.n(r),n(16)),i=(n.n(o),n(98)),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),c=function(e){var t=e.code,n=e.children;return a(i.c,{render:function(e){var r=e.staticContext;return r&&(r.status=t),n}})};t.a=c},615:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(8),c=(n.n(a),n(98)),l=n(239),u=n(616),f=n.n(u),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=s("div",{className:"Menu-logo"},void 0,s("img",{src:f.a,alt:"Work & Co logo"})),v=s(c.b,{activeClassName:"Menu-link--active",className:"Menu-link",to:"/404"},void 0,"404");!function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}i(t,e),p(t,[{key:"render",value:function(){return s("div",{className:"Menu"},void 0,d,s("div",{className:"Menu-links"},void 0,s(c.b,{activeClassName:"Menu-link--active",className:"Menu-link",exact:!0,to:l.a.DASHBOARD},void 0,"Home"),s(c.b,{activeClassName:"Menu-link--active",className:"Menu-link",to:l.a.ABOUT},void 0,"About"),v))}}])}(a.Component)},616:function(e,t,n){e.exports=n.p+"client/assets/workco-logo-21bf196c48a351a30e3c6734931d564f.svg"},617:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(8),c=(n.n(a),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}()),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(618),f=n(619),s=n(620),p=n(621),d=c("div",{id:"left_column"},void 0,c("h1",{className:"left_item",id:"greet"},void 0,"hi, i'm ",c("span",{id:"name"},void 0,"Dave")),c("p",{className:"intro"},void 0,"i'm two parts father, one part engineer"),c("p",{className:"intro"},void 0,"i make my life for my children"),c("p",{className:"intro"},void 0,"my core interests lie within developing minimum viable products for proper market testing"),c("p",{className:"intro",id:"projects"},void 0,"ongoing projects:",c("a",{href:"https://github.com/blooprint",id:"blooprint"},void 0," blooprint"),",",c("span",{id:"ned"},void 0," ned"),",",c("span",{id:"ned"},void 0," zzapp"),",",c("a",{href:"https://www.facebook.com/northchilifamilyrestaurant/",id:"blooprint"},void 0," NCFR"),",",c("a",{href:"http://www.nltk.org/book/"},void 0," nlp"),",",c("a",{href:"https://github.com/off99555/machine-learning-curriculum"},void 0," ml"),",",c("a",{href:"http://www.uppermonroeavenue.org/",id:"umna"},void 0," UMNA"),",",c("span",{className:"blinking-cursor"},void 0," |"),",",c("a",{href:"http://www.xyzline.xyz",id:"xyzline"},void 0," assembly line"))),v=c("img",{className:"media_item",id:"profile_pic",src:u,alt:"profile image"}),y=c("div",{id:"center_content"},void 0,c("iframe",{className:"center_item",id:"video",width:560,height:315,src:"https://www.youtube.com/embed/Cf2nqmQIfxc",frameborder:0,allowfullscreen:!0}),c("div",{className:"center_item",id:"quotes"},void 0,c("p",{className:"quote"},void 0,"\"people think about creativity as if it's all sweetness and light. no. if you're gonna be creative it's because you're tormented by a problem\" - ",c("a",{href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiW4ubb1K3WAhWE8YMKHY4VDzEQtwIIKDAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6G59zsjM2UI&usg=AFQjCNGEf9V3FtTZRRvhjUayxLJuIOeiXg"},void 0,"jbp")),c("p",{className:"quote"},void 0,"why has 'talent' somehow become an actual replacement for 'obsession and practice'",c("a",{href:"https://twitter.com/ddaaggeett/status/909594140048072704"},void 0,"?")))),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return c("div",{className:"body"},void 0,d,c("div",{id:"right_column"},void 0,v,c("div",{className:"media_item",id:"contact_me"},void 0,c("a",{className:"icon",href:"https://david.g.daggett@gmail.com"},void 0,c("img",{src:s,alt:"email",style:{width:40,height:31}})),c("a",{className:"icon",href:"https://github.com/ddaaggeett"},void 0,c("img",{src:p,alt:"software",style:{width:40,height:36}})),c("a",{className:"icon",href:"https://twitter.com/ddaaggeett"},void 0," ",c("img",{src:f,alt:"social",style:{width:40,height:40}})))),y)}}]),t}(a.Component);t.a=h},618:function(e,t,n){e.exports=n.p+"client/assets/profile-3b159a2265e684a3b6f41fe1915b5242.jpg"},619:function(e,t,n){e.exports=n.p+"client/assets/twitter_a-6a570d726385ea07b8e5148040a6526f.png"},620:function(e,t,n){e.exports=n.p+"client/assets/email_c-edec9215a8455b1975f5e9a804602e23.png"},621:function(e,t,n){e.exports=n.p+"client/assets/github_b-c65c039a03410ba0142d6a203b6cc0ec.png"},622:function(e,t){}},[240]);