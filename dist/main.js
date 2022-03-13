!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return U})),n.d(e,"hydrate",(function(){return R})),n.d(e,"createElement",(function(){return h})),n.d(e,"h",(function(){return h})),n.d(e,"Fragment",(function(){return y})),n.d(e,"createRef",(function(){return m})),n.d(e,"isValidElement",(function(){return o})),n.d(e,"Component",(function(){return g})),n.d(e,"cloneElement",(function(){return I})),n.d(e,"createContext",(function(){return F})),n.d(e,"toChildArray",(function(){return x})),n.d(e,"__u",(function(){return D})),n.d(e,"options",(function(){return r}));var r,o,u,i,l,a,c,s={},_=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(t,e){for(var n in e)t[n]=e[n];return t}function p(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n){var r,o=arguments,u={};for(r in e)"key"!==r&&"ref"!==r&&(u[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(u.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===u[r]&&(u[r]=t.defaultProps[r]);return v(t,u,e&&e.key,e&&e.ref,null)}function v(t,e,n,o,u){var i={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:u};return null==u&&(i.__v=i),r.vnode&&r.vnode(i),i}function m(){return{current:null}}function y(t){return t.children}function g(t,e){this.props=t,this.context=e}function b(t,e){if(null==e)return t.__?b(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?b(t):null}function k(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return k(t)}}function w(t){(!t.__d&&(t.__d=!0)&&u.push(t)&&!C.__r++||l!==r.debounceRendering)&&((l=r.debounceRendering)||i)(C)}function C(){for(var t;C.__r=u.length;)t=u.sort((function(t,e){return t.__v.__b-e.__v.__b})),u=[],t.some((function(t){var e,n,r,o,u,i,l;t.__d&&(i=(u=(e=t).__v).__e,(l=e.__P)&&(n=[],(r=d({},u)).__v=r,o=O(l,u,r,e.__n,void 0!==l.ownerSVGElement,null,n,null==i?b(u):i),A(n,u),o!=i&&k(u)))}))}function E(t,e,n,r,o,u,i,l,a,c){var f,d,h,m,g,k,w,C=r&&r.__k||_,E=C.length;for(a==s&&(a=null!=i?i[0]:E?b(r,0):null),n.__k=[],f=0;f<e.length;f++)if(null!=(m=n.__k[f]=null==(m=e[f])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?v(null,m,null,null,m):Array.isArray(m)?v(y,{children:m},null,null,null):null!=m.__e||null!=m.__c?v(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(h=C[f])||h&&m.key==h.key&&m.type===h.type)C[f]=void 0;else for(d=0;d<E;d++){if((h=C[d])&&m.key==h.key&&m.type===h.type){C[d]=void 0;break}h=null}g=O(t,m,h=h||s,o,u,i,l,a,c),(d=m.ref)&&h.ref!=d&&(w||(w=[]),h.ref&&w.push(h.ref,null,m),w.push(d,m.__c||g,m)),null!=g?(null==k&&(k=g),a=M(t,m,h,C,i,g,a),c||"option"!=n.type?"function"==typeof n.type&&(n.__d=a):t.value=""):a&&h.__e==a&&a.parentNode!=t&&(a=b(h))}if(n.__e=k,null!=i&&"function"!=typeof n.type)for(f=i.length;f--;)null!=i[f]&&p(i[f]);for(f=E;f--;)null!=C[f]&&D(C[f],C[f]);if(w)for(f=0;f<w.length;f++)j(w[f],w[++f],w[++f])}function x(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?_.concat.apply([],t.map(x)):[t]}function M(t,e,n,r,o,u,i){var l,a,c;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(o==n||u!=i||null==u.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(u),l=null;else{for(a=i,c=0;(a=a.nextSibling)&&c<r.length;c+=2)if(a==u)break t;t.insertBefore(u,i),l=i}return void 0!==l?l:u.nextSibling}function P(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===f.test(e)?n+"px":null==n?"":n}function S(t,e,n,r,o){var u,i,l,a,c;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(u=t.style,"string"==typeof n)u.cssText=n;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(a in r)n&&a in n||P(u,a,"");if(n)for(c in n)r&&n[c]===r[c]||P(u,c,n[c])}else"o"===e[0]&&"n"===e[1]?(i=e!==(e=e.replace(/Capture$/,"")),l=e.toLowerCase(),e=(l in t?l:e).slice(2),n?(r||t.addEventListener(e,T,i),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,T,i)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function T(t){this.l[t.type](r.event?r.event(t):t)}function L(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&L(o,e,n),e=M(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function O(t,e,n,o,u,i,l,a,c){var s,_,f,p,h,v,m,b,k,w,C,x=e.type;if(void 0!==e.constructor)return null;(s=r.__b)&&s(e);try{t:if("function"==typeof x){if(b=e.props,k=(s=x.contextType)&&o[s.__c],w=s?k?k.props.value:s.__:o,n.__c?m=(_=e.__c=n.__c).__=_.__E:("prototype"in x&&x.prototype.render?e.__c=_=new x(b,w):(e.__c=_=new g(b,w),_.constructor=x,_.render=H),k&&k.sub(_),_.props=b,_.state||(_.state={}),_.context=w,_.__n=o,f=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=x.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=d({},_.__s)),d(_.__s,x.getDerivedStateFromProps(b,_.__s))),p=_.props,h=_.state,f)null==x.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==x.getDerivedStateFromProps&&b!==p&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(b,w),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(b,_.__s,w)||e.__v===n.__v){_.props=b,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,_.__h.length&&l.push(_),L(e,a,t);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(b,_.__s,w),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(p,h,v)}))}_.context=w,_.props=b,_.state=_.__s,(s=r.__r)&&s(e),_.__d=!1,_.__v=e,_.__P=t,s=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=d(d({},o),_.getChildContext())),f||null==_.getSnapshotBeforeUpdate||(v=_.getSnapshotBeforeUpdate(p,h)),C=null!=s&&s.type==y&&null==s.key?s.props.children:s,E(t,Array.isArray(C)?C:[C],e,n,o,u,i,l,a,c),_.base=e.__e,_.__h.length&&l.push(_),m&&(_.__E=_.__=null),_.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=N(n.__e,e,n,o,u,i,l,c);(s=r.diffed)&&s(e)}catch(t){e.__v=null,r.__e(t,e,n)}return e.__e}function A(t,e){r.__c&&r.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){r.__e(t,e.__v)}}))}function N(t,e,n,r,o,u,i,l){var a,c,f,d,p,h=n.props,v=e.props;if(o="svg"===e.type||o,null!=u)for(a=0;a<u.length;a++)if(null!=(c=u[a])&&((null===e.type?3===c.nodeType:c.localName===e.type)||t==c)){t=c,u[a]=null;break}if(null==t){if(null===e.type)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,v.is&&{is:v.is}),u=null,l=!1}if(null===e.type)h!==v&&t.data!==v&&(t.data=v);else{if(null!=u&&(u=_.slice.call(t.childNodes)),f=(h=n.props||s).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!l){if(null!=u)for(h={},p=0;p<t.attributes.length;p++)h[t.attributes[p].name]=t.attributes[p].value;(d||f)&&(d&&f&&d.__html==f.__html||(t.innerHTML=d&&d.__html||""))}(function(t,e,n,r,o){var u;for(u in n)"children"===u||"key"===u||u in e||S(t,u,null,n[u],r);for(u in e)o&&"function"!=typeof e[u]||"children"===u||"key"===u||"value"===u||"checked"===u||n[u]===e[u]||S(t,u,e[u],n[u],r)})(t,v,h,o,l),d?e.__k=[]:(a=e.props.children,E(t,Array.isArray(a)?a:[a],e,n,r,"foreignObject"!==e.type&&o,u,i,s,l)),l||("value"in v&&void 0!==(a=v.value)&&a!==t.value&&S(t,"value",a,h.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==t.checked&&S(t,"checked",a,h.checked,!1))}return t}function j(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){r.__e(t,n)}}function D(t,e,n){var o,u,i;if(r.unmount&&r.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||j(o,null,e)),n||"function"==typeof t.type||(n=null!=(u=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){r.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&D(o[i],e,n);null!=u&&p(u)}function H(t,e,n){return this.constructor(t,n)}function U(t,e,n){var o,u,i;r.__&&r.__(t,e),u=(o=n===a)?null:n&&n.__k||e.__k,t=h(y,null,[t]),i=[],O(e,(o?e:n||e).__k=t,u||s,s,void 0!==e.ownerSVGElement,n&&!o?[n]:u?null:e.childNodes.length?_.slice.call(e.childNodes):null,i,n||s,o),A(i,t)}function R(t,e){U(t,e,a)}function I(t,e){var n,r;for(r in e=d(d({},t.props),e),arguments.length>2&&(e.children=_.slice.call(arguments,2)),n={},e)"key"!==r&&"ref"!==r&&(n[r]=e[r]);return v(t.type,n,e.key||t.key,e.ref||t.ref,null)}function F(t){var e={},n={__c:"__cC"+c++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some((function(e){e.context=t.value,w(e)}))},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}r={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return w(n.__E=n)}catch(e){t=e}throw t}},o=function(t){return null!=t&&void 0===t.constructor},g.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&d(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),w(this))},g.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),w(this))},g.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,C.__r=0,a=s,c=0},function(t,e,n){"use strict";n.r(e),n.d(e,"useState",(function(){return p})),n.d(e,"useReducer",(function(){return h})),n.d(e,"useEffect",(function(){return v})),n.d(e,"useLayoutEffect",(function(){return m})),n.d(e,"useRef",(function(){return y})),n.d(e,"useImperativeHandle",(function(){return g})),n.d(e,"useMemo",(function(){return b})),n.d(e,"useCallback",(function(){return k})),n.d(e,"useContext",(function(){return w})),n.d(e,"useDebugValue",(function(){return C})),n.d(e,"useErrorBoundary",(function(){return E}));var r,o,u,i=n(0),l=0,a=[],c=i.options.__r,s=i.options.diffed,_=i.options.__c,f=i.options.unmount;function d(t,e){i.options.__h&&i.options.__h(o,t,l||e),l=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function p(t){return l=1,h(L,t)}function h(t,e,n){var u=d(r++,2);return u.t=t,u.__c||(u.__c=o,u.__=[n?n(e):L(void 0,e),function(t){var e=u.t(u.__[0],t);u.__[0]!==e&&(u.__=[e,u.__[1]],u.__c.setState({}))}]),u.__}function v(t,e){var n=d(r++,3);!i.options.__s&&T(n.__H,e)&&(n.__=t,n.__H=e,o.__H.__h.push(n))}function m(t,e){var n=d(r++,4);!i.options.__s&&T(n.__H,e)&&(n.__=t,n.__H=e,o.__h.push(n))}function y(t){return l=5,b((function(){return{current:void 0===t?null:t}}),[])}function g(t,e,n){l=6,m((function(){"function"==typeof t?t(e()):t&&(t.current=e())}),null==n?n:n.concat(t))}function b(t,e){var n=d(r++,7);return T(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}function k(t,e){return l=8,b((function(){return t}),e)}function w(t){var e=o.context[t.__c],n=d(r++,9);return n.__c=t,e?(null==n.__&&(n.__=!0,e.sub(o)),e.props.value):t.__}function C(t,e){i.options.useDebugValue&&i.options.useDebugValue(e?e(t):t)}function E(t){var e=d(r++,10),n=p();return e.__=t,o.componentDidCatch||(o.componentDidCatch=function(t){e.__&&e.__(t),n[1](t)}),[n[0],function(){n[1](void 0)}]}function x(){a.some((function(t){if(t.__P)try{t.__H.__h.forEach(P),t.__H.__h.forEach(S),t.__H.__h=[]}catch(e){return t.__H.__h=[],i.options.__e(e,t.__v),!0}})),a=[]}i.options.__r=function(t){c&&c(t),r=0;var e=(o=t.__c).__H;e&&(e.__h.forEach(P),e.__h.forEach(S),e.__h=[])},i.options.diffed=function(t){s&&s(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==a.push(e)&&u===i.options.requestAnimationFrame||((u=i.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),M&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);M&&(e=requestAnimationFrame(n))})(x))},i.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(P),t.__h=t.__h.filter((function(t){return!t.__||S(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],i.options.__e(n,t.__v)}})),_&&_(t,e)},i.options.unmount=function(t){f&&f(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(P)}catch(t){i.options.__e(t,e.__v)}};var M="function"==typeof requestAnimationFrame;function P(t){"function"==typeof t.u&&t.u()}function S(t){t.u=t.__()}function T(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function L(t,e){return"function"==typeof e?e(t):e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={baseUrl:"https://www.louisclais.com",path:{getArticles:"/louis-backend/api/collections/get/articles",getDownloads:"/louis-backend/api/collections/get/downloads",getIntro:"/louis-backend/api/singletons/get/main"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.debounceWithRequestAnimationFrame=e.debounce=void 0,e.debounce=function(t,e){var n;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(n),n=null===window||void 0===window?void 0:window.setTimeout((function(){return t.apply(void 0,r)}),e)}},e.debounceWithRequestAnimationFrame=function(t){var e;return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];cancelAnimationFrame(e),e=null===window||void 0===window?void 0:window.requestAnimationFrame((function(){return t.apply(void 0,n)}))}}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=r(n(12)),i=r(n(13));e.default=function(){return o.h("div",{className:i.default.arrowButton},o.h(u.default,null))}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=r(n(17)),i=r(n(19));e.default=function(t){var e=t._id,n=t.body,r=t.details,l=t.gallery,a=t.title,c={__html:r.replace("\n","<br/>")},s={__html:n};return o.h("article",{className:i.default.article},l.length>0&&o.h(u.default,{images:l}),(a||r||n)&&o.h("div",{className:i.default.articleContent},a&&o.h("h4",{className:i.default.articleContentHeader},o.h("a",{href:"/post/"+e},a)),r&&o.h("p",{className:i.default.articleContentDetails,dangerouslySetInnerHTML:c}),n&&o.h("div",{className:i.default.articleContentBody,dangerouslySetInnerHTML:s})))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loadJson=void 0,e.loadJson=function(t,e,n){return void 0===e&&(e="GET"),void 0===n&&(n={}),new Promise((function(r,o){var u=new XMLHttpRequest;u.open(e,t),u.setRequestHeader("Content-Type","application/json"),u.onload=function(){if(200===u.status)try{var t=JSON.parse(u.responseText);r(t)}catch(t){o("Error parsing JSON: "+t.message)}else o("Error "+u.status+": "+u.statusText)},u.onerror=function(){o("Error: network issue")},u.ontimeout=function(){o("Error: timeout")},u.send(JSON.stringify(n))}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(6);e.default=function(t,e,n,u,i){void 0===u&&(u="GET"),void 0===i&&(i={});var l=r.useState({error:"",isError:!1,isLoading:!0,payload:t}),a=l[0],c=l[1];return r.useEffect((function(){o.loadJson(e,u,i).then((function(t){c((function(){return{error:"",isLoading:!1,isError:!1,payload:n?n(t):t}}))})).catch((function(e){c((function(){return{error:e,isLoading:!1,isError:!0,payload:t}}))}))}),[]),a}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=r(n(9)),i=r(n(10)),l=r(n(16)),a=r(n(23)),c=r(n(26));n(29);var s=document.getElementById("root");s&&o.render(o.h((function(){return o.h(i.default,{childrenLeft:o.h(c.default,null),childrenRight:o.h(u.default,null,o.h(a.default,{path:"/post/:articleId"}),o.h(l.default,{default:!0}))})}),null),s)},function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return d})),n.d(e,"getCurrentUrl",(function(){return h})),n.d(e,"route",(function(){return v})),n.d(e,"Router",(function(){return C})),n.d(e,"Route",(function(){return x})),n.d(e,"Link",(function(){return E})),n.d(e,"exec",(function(){return i}));var r=n(0),o={};function u(t,e){for(var n in e)t[n]=e[n];return t}function i(t,e,n){var r,u=/(?:\?([^#]*))?(#.*)?$/,i=t.match(u),l={};if(i&&i[1])for(var a=i[1].split("&"),s=0;s<a.length;s++){var _=a[s].split("=");l[decodeURIComponent(_[0])]=decodeURIComponent(_.slice(1).join("="))}t=c(t.replace(u,"")),e=c(e||"");for(var f=Math.max(t.length,e.length),d=0;d<f;d++)if(e[d]&&":"===e[d].charAt(0)){var p=e[d].replace(/(^:|[+*?]+$)/g,""),h=(e[d].match(/[+*?]+$/)||o)[0]||"",v=~h.indexOf("+"),m=~h.indexOf("*"),y=t[d]||"";if(!y&&!m&&(h.indexOf("?")<0||v)){r=!1;break}if(l[p]=decodeURIComponent(y),v||m){l[p]=t.slice(d).map(decodeURIComponent).join("/");break}}else if(e[d]!==t[d]){r=!1;break}return(!0===n.default||!1!==r)&&l}function l(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,c(e).map(s).join(""));var e}(t),t.props}function c(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var _=null,f=[],d=[],p={};function h(){var t;return""+((t=_&&_.location?_.location:_&&_.getCurrentLocation?_.getCurrentLocation():"undefined"!=typeof location?location:p).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=f.length;e--;)if(f[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),_&&_[e]?_[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),m(t)}function m(t){for(var e=!1,n=0;n<f.length;n++)!0===f[n].routeTo(t)&&(e=!0);for(var r=d.length;r--;)d[r](t);return e}function y(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(e)}}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return y(t.currentTarget||t.target||this),b(t)}function b(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function k(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(y(e))return b(t)}}while(e=e.parentNode)}}var w=!1;var C=function(t){function e(e){t.call(this,e),e.history&&(_=e.history),this.state={url:e.url||h()},w||("function"==typeof addEventListener&&(_||addEventListener("popstate",(function(){m(h())})),addEventListener("click",k)),w=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){f.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;_&&(this.unlisten=_.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),f.splice(f.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(l).map((function(t){var o=i(e,t.props.path,t.props);if(o){if(!1!==n){var l={url:e,matches:o};return u(l,o),delete l.ref,delete l.key,Object(r.cloneElement)(t,l)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,u=e.url,i=this.getMatchingChildren(Object(r.toChildArray)(n),u,!0),l=i[0]||null,a=this.previousUrl;return u!==a&&(this.previousUrl=u,"function"==typeof o&&o({router:this,url:u,previous:a,active:i,current:l})),l},e}(r.Component),E=function(t){return Object(r.createElement)("a",u({onClick:g},t))},x=function(t){return Object(r.createElement)(t.component,t)};C.subscribers=d,C.getCurrentUrl=h,C.route=v,C.Router=C,C.Route=x,C.Link=E,C.exec=i,e.default=C},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=r(n(11)),i=r(n(15));e.default=function(t){var e=t.childrenLeft,n=t.childrenRight;return o.h("div",{className:i.default.app},o.h("div",{className:i.default.appLeftColumn},o.h("div",{className:i.default.appLeftColumnContent},e)),o.h("div",{className:i.default.appRightColumn},o.h("div",{className:i.default.appRightColumnContent},n)),o.h(u.default,null))}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=n(1),i=n(3),l=r(n(4)),a=r(n(14)),c=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0};e.default=function(){var t=u.useState(!1),e=t[0],n=t[1],r=i.debounceWithRequestAnimationFrame((function(){var t=window.innerHeight,e=(document.body.scrollTop||document.documentElement.scrollTop)>t;n((function(){return!!e}))}));return u.useEffect((function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[]),e?o.h("button",{className:a.default.backToTop,onClick:c},o.h(l.default,null)):null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);e.default=function(){return r.h("svg",{className:"icon-arrow-top",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",xmlSpace:"preserve"},r.h("g",null,r.h("g",{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"},r.h("path",{d:"M2612.1,2633.6L238,259.5L578.5-80.9c186.3-186.4,349.7-338.2,361.2-338.2c13.8,0,823.6,800.6,1799,1776l1778.3,1778.3V-828.6V-4790H5000h483.1v3961.4v3963.7l1778.3-1778.3c975.4-975.4,1785.2-1776,1799-1776c11.5,0,174.8,151.8,361.2,338.2L9762,259.5L7387.9,2633.6C6081.2,3940.3,5006.9,5010,5000,5010S3918.8,3940.3,2612.1,2633.6z"}))))}},function(t,e,n){t.exports={arrowButton:"_1uIYKhFSicPyvQjoDUvnDA"}},function(t,e,n){t.exports={backToTop:"_3auAnGujCb6K3aqhBwZf3A"}},function(t,e,n){t.exports={app:"_2oExzUs-thVdgi5RFS4NHL",appLeftColumn:"_2N4Sa9DTa41nZUc2qco7_7",appLeftColumnContent:"_1EPbDHSiQivc_A8JAxZZ3R",appRightColumn:"h2JL_7eywazogKS5aFPpg",appRightColumnContent:"_2kaEfmW9T9R4MIWJTTVaEc"}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var u=arguments[e],i=0,l=u.length;i<l;i++,o++)r[o]=u[i];return r},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),l=u(n(2)),a=u(n(5)),c=u(n(20)),s=n(1),_=n(6),f=u(n(21)),d=""+l.default.baseUrl+l.default.path.getArticles;e.default=function(){var t=s.useState({error:"",isError:!1,isLoading:!0,payload:[]}),e=t[0],n=t[1],u=s.useState(!1),l=u[0],p=u[1],h=s.useState(0),v=h[0],m=h[1];s.useEffect((function(){n((function(){return r(r({},e),{isLoading:!0})})),_.loadJson(d,"POST",{filter:{published:!0},limit:5,skip:5*v,sort:{_o:1}}).then((function(t){var r,u=function(t){var e;return null!==(e=null==t?void 0:t.entries.map((function(t){var e,n,r,o,u,i,l,a;return{_id:null!==(e=null==t?void 0:t._id)&&void 0!==e?e:"",body:null!==(r=null===(n=null==t?void 0:t.body)||void 0===n?void 0:n.trim())&&void 0!==r?r:"",details:null!==(u=null===(o=null==t?void 0:t.details)||void 0===o?void 0:o.trim())&&void 0!==u?u:"",gallery:null!==(i=null==t?void 0:t.gallery)&&void 0!==i?i:[],title:null!==(a=null===(l=null==t?void 0:t.title)||void 0===l?void 0:l.trim())&&void 0!==a?a:""}})))&&void 0!==e?e:[]}(t),i=o(e.payload,u);p((null!==(r=null==t?void 0:t.total)&&void 0!==r?r:0)<5*v),n((function(){return{error:"",isLoading:!1,isError:!1,payload:i}}))})).catch((function(t){n((function(){return{error:t,isLoading:!1,isError:!0,payload:e.payload}}))}))}),[v]);return i.h("div",null,!e.isError&&e.payload.map((function(t){return i.h(a.default,r({key:t._id},t))})),e.isError&&e.error,e.isLoading&&i.h(f.default,null),!e.isLoading&&!l&&i.h(c.default,{onScrollBottom:function(){m((function(){return v+1}))}}))}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=n(1),i=r(n(2)),l=r(n(18));e.default=function(t){var e,n,r=t.images,a=u.useState(0),c=a[0],s=a[1],_=null!==(n=null===(e=r[c])||void 0===e?void 0:e.path)&&void 0!==n?n:"";return o.h("div",{className:l.default.gallery+" "+(r.length>1?l.default.clickable:""),onClick:function(){if(r.length>1){var t=c+1<r.length?c+1:0;s(t)}}}," ",r.length>1&&o.h("div",{className:l.default.galleryMultiple},r.map((function(t,e){return o.h("img",{className:l.default.galleryMultipleImg,key:t.path,src:""+i.default.baseUrl+t.path,style:{display:e===c?"block":"none"}})}))),1===r.length&&o.h("img",{className:l.default.gallerySingleImg,src:""+i.default.baseUrl+_}),o.h("div",{className:l.default.galleryIcons},r.length>1&&o.h("div",{className:l.default.galleryCounter},c+1," / ",r.length)))}},function(t,e,n){t.exports={gallery:"_2YfUpINXFupHQjM6x0nknV",clickable:"_2vt8a9Aaxg8B0GNiZK-jw",galleryMultiple:"SrhK0yRnlhbXOPNtjWmPs",galleryMultipleImg:"_3Pq78i-sHDaxC5A1q9yPNq",gallerySingleImg:"WYNnf1PduyMpfliAcaqnT",galleryIcons:"_1ZiiI2qQ4n6aPrZ6FHWbK",galleryCounter:"_1BFJ0fpbMqj-K7A_uat3wA",galleryExtend:"vifweg0KFTtvDExla7pHC"}},function(t,e,n){t.exports={article:"_2M86BHVqzjIoRM1XGExSBp",articleContent:"_20HwD2z6MUlKff-oqU8G9f",articleContentHeader:"_3xq6kIyUo5Bf2SdPJtkfAZ",articleContentDetails:"_2QudS9l6Lm_6MFb0xRCQBj",articleContentBody:"_2kgTz0R3wns0WjxRc-w8c7"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(3);e.default=function(t){var e=t.onScrollBottom,n=t.percentage,u=void 0===n?.9:n,i=o.debounceWithRequestAnimationFrame((function(){var t=document.body.scrollTop||document.documentElement.scrollTop,n=document.body.scrollHeight||document.documentElement.scrollHeight,r=document.body.clientHeight||document.documentElement.clientHeight;n*u-r-t<=0&&e()}));return r.useEffect((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[]),null}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=r(n(22));e.default=function(){return o.h("div",{className:u.default.loaderWrapper},"Loading...")}},function(t,e,n){t.exports={loaderWrapper:"oefTyrOIbDeP5XRdn88k6"}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=n(0),i=o(n(2)),l=o(n(7)),a=o(n(5)),c=o(n(24));e.default=function(t){var e=t.articleId,n=l.default(null,""+i.default.baseUrl+i.default.path.getArticles,(function(t){var e,n,r,o,u,i,l,a,c,s=null!==(e=null==t?void 0:t.entries[0])&&void 0!==e?e:null;return{_id:null!==(n=null==s?void 0:s._id)&&void 0!==n?n:"",body:null!==(o=null===(r=null==s?void 0:s.body)||void 0===r?void 0:r.trim())&&void 0!==o?o:"",details:null!==(i=null===(u=null==s?void 0:s.details)||void 0===u?void 0:u.trim())&&void 0!==i?i:"",gallery:null!==(l=null==s?void 0:s.gallery)&&void 0!==l?l:[],title:null!==(c=null===(a=null==s?void 0:s.title)||void 0===a?void 0:a.trim())&&void 0!==c?c:""}}),"POST",{filter:{_id:e}});return u.h("div",null,u.h(c.default,null),!n.isLoading&&!n.isError&&n.payload&&u.h(a.default,r({},n.payload)),!n.isLoading&&n.isError&&n.error)}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=r(n(4)),i=r(n(25));e.default=function(){return o.h("a",{className:i.default.backToMain,href:"/"},o.h(u.default,null))}},function(t,e,n){t.exports={backToMain:"lTTf5EW1ZeMg1421uyVMK"}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=r(n(2)),i=r(n(7)),l=r(n(27));e.default=function(){var t=i.default([],""+u.default.baseUrl+u.default.path.getDownloads,(function(t){var e;return null!==(e=null==t?void 0:t.entries.map((function(t){var e,n;return{path:null!==(e=null==t?void 0:t.path)&&void 0!==e?e:"",title:null!==(n=null==t?void 0:t.title)&&void 0!==n?n:""}})))&&void 0!==e?e:[]})),e=i.default("",""+u.default.baseUrl+u.default.path.getIntro,(function(t){var e;return null!==(e=null==t?void 0:t.intro)&&void 0!==e?e:""}));return o.h(l.default,{downloads:t,intro:e})}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=r(n(2)),i=r(n(28));e.default=function(t){var e=t.intro,n=t.downloads;return o.h("header",null,o.h("h2",{className:i.default.headerTitle},"Louis Clais"),o.h("p",{className:i.default.headerPresentation},!e.isLoading&&!e.isError&&e.payload,!e.isLoading&&e.isError&&e.error),o.h("div",null,!n.isLoading&&!n.isError&&n.payload.map((function(t){return o.h("a",{className:i.default.headerDownloadBtn,key:t.path+t.title,href:u.default.baseUrl+"/"+t.path,rel:"noreferrer",target:"_blank"},t.title)})),!n.isLoading&&n.isError&&n.error))}},function(t,e,n){t.exports={headerTitle:"_3NpU_mMUnGkoF3tOnA3obH",headerPresentation:"_3QjmxXrNGiFzWCV_sy-Yd5",headerDownloadBtn:"TfMPl0uEH4t59AREYOwPI"}},function(t,e,n){}]);