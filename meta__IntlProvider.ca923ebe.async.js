"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[476],{15064:function(V,f,n){n.r(f),n.d(f,{demos:function(){return gt}});var I={};n.r(I),n.d(I,{FormattedDate:function(){return ft},FormattedDateParts:function(){return Ft},FormattedDateTimeRange:function(){return nt},FormattedDisplayName:function(){return Pt},FormattedList:function(){return It},FormattedListParts:function(){return rt},FormattedMessage:function(){return at.Z},FormattedNumber:function(){return pt},FormattedNumberParts:function(){return N},FormattedPlural:function(){return ot},FormattedRelativeTime:function(){return st},FormattedTime:function(){return ht},FormattedTimeParts:function(){return Tt},IntlContext:function(){return P._y},IntlProvider:function(){return it},InvalidConfigError:function(){return h.OV},MessageFormatError:function(){return h.X9},MissingDataError:function(){return h.gb},MissingTranslationError:function(){return h.$6},RawIntlProvider:function(){return P.zt},ReactIntlError:function(){return h.Rw},ReactIntlErrorCode:function(){return h.bc},UnsupportedFormatterError:function(){return h.wI},createIntl:function(){return R.d},createIntlCache:function(){return z.Sn},defineMessage:function(){return vt},defineMessages:function(){return ct},injectIntl:function(){return P.ZP},useIntl:function(){return c.Z}});var C=n(90228),O=n.n(C),k=n(87999),q=n.n(k),l=n(75271),_=n.t(l,2),Dt=n(45067),tt=n(44526),et=n(33628),s=n(15767),c=n(87693),y;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(y||(y={}));var E;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(E||(E={}));var N=function(t){var e=(0,c.Z)(),r=t.value,o=t.children,a=(0,s._T)(t,["value","children"]);return o(e.formatNumberToParts(r,a))};N.displayName="FormattedNumberParts";var rt=function(t){var e=(0,c.Z)(),r=t.value,o=t.children,a=(0,s._T)(t,["value","children"]);return o(e.formatListToParts(r,a))};N.displayName="FormattedNumberParts";function j(t){var e=function(r){var o=(0,c.Z)(),a=r.value,i=r.children,u=(0,s._T)(r,["value","children"]),m=typeof a=="string"?new Date(a||0):a,d=t==="formatDate"?o.formatDateToParts(m,u):o.formatTimeToParts(m,u);return i(d)};return e.displayName=E[t],e}function p(t){var e=function(r){var o=(0,c.Z)(),a=r.value,i=r.children,u=(0,s._T)(r,["value","children"]),m=o[t](a,u);if(typeof i=="function")return i(m);var d=o.textComponent||l.Fragment;return l.createElement(d,null,m)};return e.displayName=y[t],e}var R=n(78843),A=function(t){var e=(0,c.Z)(),r=t.from,o=t.to,a=t.children,i=(0,s._T)(t,["from","to","children"]),u=e.formatDateTimeRange(r,o,i);if(typeof a=="function")return a(u);var m=e.textComponent||l.Fragment;return l.createElement(m,null,u)};A.displayName="FormattedDateTimeRange";var nt=A,P=n(35862),at=n(77372),b=function(t){var e=(0,c.Z)(),r=e.formatPlural,o=e.textComponent,a=t.value,i=t.other,u=t.children,m=r(a,t),d=t[m]||i;return typeof u=="function"?u(d):o?l.createElement(o,null,d):d};b.displayName="FormattedPlural";var ot=b,z=n(83144),F=n(11765);function x(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var ut=function(t){(0,s.ZT)(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.cache=(0,z.Sn)(),r.state={cache:r.cache,intl:(0,R.d)(x(r.props),r.cache),prevConfig:x(r.props)},r}return e.getDerivedStateFromProps=function(r,o){var a=o.prevConfig,i=o.cache,u=x(r);return(0,F.wU)(a,u)?null:{intl:(0,R.d)(u,i),prevConfig:u}},e.prototype.render=function(){return(0,F.lq)(this.state.intl),l.createElement(P.zt,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=F.Z0,e}(l.PureComponent),it=ut,D=60,S=60*60,G=60*60*24;function H(t){var e=Math.abs(t);return e<D?"second":e<S?"minute":e<G?"hour":"day"}function B(t){switch(t){case"second":return 1;case"minute":return D;case"hour":return S;default:return G}}function lt(t,e){if(!t)return 0;switch(e){case"second":return t;case"minute":return t*D;default:return t*S}}var mt=["second","minute","hour"];function T(t){return t===void 0&&(t="second"),mt.indexOf(t)>-1}var dt=function(t){var e=(0,c.Z)(),r=e.formatRelativeTime,o=e.textComponent,a=t.children,i=t.value,u=t.unit,m=(0,s._T)(t,["children","value","unit"]),d=r(i||0,u,m);return typeof a=="function"?a(d):o?l.createElement(o,null,d):l.createElement(l.Fragment,null,d)},W=function(t){var e=t.value,r=e===void 0?0:e,o=t.unit,a=o===void 0?"second":o,i=t.updateIntervalInSeconds,u=(0,s._T)(t,["value","unit","updateIntervalInSeconds"]);(0,F.kG)(!i||!!(i&&T(a)),"Cannot schedule update with unit longer than hour");var m=l.useState(),d=m[0],Ct=m[1],$=l.useState(0),yt=$[0],Et=$[1],K=l.useState(0),v=K[0],J=K[1],X;(a!==d||r!==yt)&&(Et(r||0),Ct(a),J(T(a)?lt(r,a):0)),l.useEffect(function(){function g(){clearTimeout(X)}if(g(),!i||!T(a))return g;var L=v-i,Q=H(L);if(Q==="day")return g;var w=B(Q),Rt=L%w,Z=L-Rt,U=Z>=v?Z-w:Z,xt=Math.abs(U-v);return v!==U&&(X=setTimeout(function(){return J(U)},xt*1e3)),g},[v,i,a]);var Y=r||0,M=a;if(T(a)&&typeof v=="number"&&i){M=H(v);var Nt=B(M);Y=Math.round(v/Nt)}return l.createElement(dt,(0,s.pi)({value:Y,unit:M},u))};W.displayName="FormattedRelativeTime";var st=W,h=n(91911);function ct(t){return t}function vt(t){return t}var ft=p("formatDate"),ht=p("formatTime"),pt=p("formatNumber"),It=p("formatList"),Pt=p("formatDisplayName"),Ft=j("formatDate"),Tt=j("formatTime"),gt={"intlprovider-demo-demos":{component:l.memo(l.lazy(function(){return n.e(105).then(n.bind(n,19968))})),asset:{type:"BLOCK",id:"intlprovider-demo-demos",refAtomIds:["IntlProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(22638).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.0"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"react-intl":{type:"NPM",value:"7.1.0"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":tt,antd:et,react:_,"react-intl":I},renderOpts:{compile:function(){var t=q()(O()().mark(function r(){var o,a=arguments;return O()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n.e(652).then(n.bind(n,43652));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,a));case 3:case"end":return u.stop()}},r)}));function e(){return t.apply(this,arguments)}return e}()}}}},48967:function(V,f,n){n.r(f),n.d(f,{texts:function(){return C}});var I=n(45067);const C=[{value:"\u56FD\u9645\u5316\u63D0\u4F9B\u5668",paraId:0,tocIndex:0},{value:"\u516C\u53F8\u7684\u4E1A\u52A1\u9879\u76EE\u9700\u8981\u505A\u56FD\u9645\u5316\u65B9\u6848\u65F6\uFF0C\u53EF\u91C7\u7EB3\uFF0C\u5F00\u7BB1\u5373\u7528\uFF01",paraId:1,tocIndex:1},{value:"\u4F7F\u7528\u56FD\u9645\u5316\u63D0\u4F9B\u5668\uFF0C\u9700\u9879\u76EE\u6700\u5916\u5C42\u7684\u6839\u7EC4\u4EF6\u7528 ",paraId:2,tocIndex:3},{value:'<IntlProvider locale="zh-CN">...</IntlProvider>',paraId:2,tocIndex:3},{value:" \u5305\u88F9\uFF0C\u5426\u5219\u7EC4\u4EF6\u7684\u6587\u6848\u56FD\u9645\u5316\u4F1A\u62A5\u9519\u3002",paraId:2,tocIndex:3}]},22638:function(V,f){f.Z=`import { IntlProvider, LanguageEnum } from '@louhaojie99/pro-components';\r
import { Radio } from 'antd';\r
import React, { useState } from 'react';\r
import { FormattedMessage, useIntl } from 'react-intl';\r
\r
const App: React.FC = () => {\r
  const { formatMessage } = useIntl();\r
\r
  return (\r
    <>\r
      <p>{formatMessage({ id: 'welcome' })}</p>\r
      <FormattedMessage id="welcome" />\r
    </>\r
  );\r
};\r
\r
const Root = () => {\r
  const [local, setLocal] = useState(LanguageEnum.ZH_CN);\r
\r
  return (\r
    <>\r
      <Radio.Group\r
        value={local}\r
        options={[\r
          {\r
            label: '\u4E2D\u6587',\r
            value: LanguageEnum.ZH_CN,\r
          },\r
          {\r
            label: 'English',\r
            value: LanguageEnum.EN_US,\r
          },\r
        ]}\r
        onChange={(e) => {\r
          setLocal(e.target.value);\r
        }}\r
      />\r
      <IntlProvider locale={local}>\r
        <App />\r
      </IntlProvider>\r
    </>\r
  );\r
};\r
\r
export default Root;\r
`}}]);
