(window.webpackJsonp=window.webpackJsonp||[]).push([["open_positions"],{629:function(o,e,t){"use strict";t.r(e);var n=t(13),r=t(1),i=t.n(r),a=t(0),c=t.n(a),s=t(32),l=t(3),u=t(33),p=t(595),f=t(19),y=t(118),m=t(94),b=t(589),_=t(590),g=t(594),d=t(596),v=t(11);function h(o){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function w(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function O(o,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(o):e}function j(o){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function E(o,e){return(E=Object.setPrototypeOf||function(o,e){return o.__proto__=e,o})(o,e)}var k=function(o){function e(){var o,t;!function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=O(this,(o=j(e)).call.apply(o,[this].concat(r)))).getRowAction=function(o){return o.is_unsupported?{component:c.a.createElement(f.a,{i18n_default_text:"This trade type is currently not supported on {{website_name}}. Please go to <0>Binary.com</0> for details.",values:{website_name:y.website_name},components:[c.a.createElement("a",{key:0,className:"link link--orange",rel:"noopener noreferrer",target:"_blank",href:Object(u.urlFor)("user/portfoliows",void 0,void 0,!0)})]})}:Object(m.b)(o.id)},t}var t,n,r;return function(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&E(o,e)}(e,c.a.Component),t=e,(n=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var o=this.props,e=o.active_positions,t=o.component_icon,n=o.is_loading,r=o.error,i=o.is_empty,a=o.currency,s=o.totals;return r?c.a.createElement("p",null,r):c.a.createElement(c.a.Fragment,null,c.a.createElement(_.a,{i18n_heading:Object(l.localize)("Open positions"),i18n_message:Object(l.localize)("View all active trades on your account that can still incur a profit or a loss.")}),n&&0===e.length||i?c.a.createElement(d.a,{is_loading:n||!e,is_empty:i,empty_message_component:b.a,component_icon:t,localized_message:Object(l.localize)("You have no open positions yet.")}):a&&e.length>0&&c.a.createElement(p.a,{className:"open-positions",columns:Object(g.a)(a),footer:s,data_source:e,getRowAction:this.getRowAction},c.a.createElement(d.a,{is_loading:n})))}}])&&w(t.prototype,n),r&&w(t,r),e}();k.propTypes={active_positions:n.PropTypes.arrayOrObservableArray,component_icon:i.a.string,currency:i.a.string,error:i.a.string,history:i.a.object,is_empty:i.a.bool,is_loading:i.a.bool,is_mobile:i.a.bool,is_tablet:i.a.bool,onMount:i.a.func,onUnmount:i.a.func,totals:i.a.object},e.default=Object(v.b)(function(o){var e=o.modules;return{currency:o.client.currency,active_positions:e.portfolio.active_positions,error:e.portfolio.error,is_empty:e.portfolio.is_active_empty,is_loading:e.portfolio.is_loading,onMount:e.portfolio.onMount,onUnmount:e.portfolio.onUnmount,totals:e.portfolio.active_positions_totals}})(Object(s.g)(k))}}]);
//# sourceMappingURL=open_positions.7cfb87bc00eee432d9d6.js.map