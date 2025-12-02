"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[9476],{79750:function(U,f,a){a.r(f),a.d(f,{demos:function(){return gt}});var p={};a.r(p),a.d(p,{FormattedDate:function(){return ft},FormattedDateParts:function(){return Tt},FormattedDateTimeRange:function(){return nt},FormattedDisplayName:function(){return Ft},FormattedList:function(){return It},FormattedListParts:function(){return rt},FormattedMessage:function(){return at.Z},FormattedNumber:function(){return pt},FormattedNumberParts:function(){return N},FormattedPlural:function(){return ot},FormattedRelativeTime:function(){return st},FormattedTime:function(){return ht},FormattedTimeParts:function(){return Pt},IntlContext:function(){return F._y},IntlProvider:function(){return it},InvalidConfigError:function(){return h.OV},MessageFormatError:function(){return h.X9},MissingDataError:function(){return h.gb},MissingTranslationError:function(){return h.$6},RawIntlProvider:function(){return F.zt},ReactIntlError:function(){return h.Rw},ReactIntlErrorCode:function(){return h.bc},UnsupportedFormatterError:function(){return h.wI},createIntl:function(){return R.d},createIntlCache:function(){return A.Sn},defineMessage:function(){return vt},defineMessages:function(){return ct},injectIntl:function(){return F.ZP},useIntl:function(){return c.Z}});var w=a(90228),V=a.n(w),k=a(87999),q=a.n(k),l=a(75271),_=a.t(l,2),tt=a(65850),et=a(43489),s=a(15767),c=a(63530),y;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(y||(y={}));var C;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(C||(C={}));var N=function(t){var e=(0,c.Z)(),r=t.value,o=t.children,n=(0,s._T)(t,["value","children"]);return o(e.formatNumberToParts(r,n))};N.displayName="FormattedNumberParts";var rt=function(t){var e=(0,c.Z)(),r=t.value,o=t.children,n=(0,s._T)(t,["value","children"]);return o(e.formatListToParts(r,n))};N.displayName="FormattedNumberParts";function j(t){var e=function(r){var o=(0,c.Z)(),n=r.value,i=r.children,u=(0,s._T)(r,["value","children"]),m=typeof n=="string"?new Date(n||0):n,d=t==="formatDate"?o.formatDateToParts(m,u):o.formatTimeToParts(m,u);return i(d)};return e.displayName=C[t],e}function I(t){var e=function(r){var o=(0,c.Z)(),n=r.value,i=r.children,u=(0,s._T)(r,["value","children"]),m=o[t](n,u);if(typeof i=="function")return i(m);var d=o.textComponent||l.Fragment;return l.createElement(d,null,m)};return e.displayName=y[t],e}var R=a(6076),O=function(t){var e=(0,c.Z)(),r=t.from,o=t.to,n=t.children,i=(0,s._T)(t,["from","to","children"]),u=e.formatDateTimeRange(r,o,i);if(typeof n=="function")return n(u);var m=e.textComponent||l.Fragment;return l.createElement(m,null,u)};O.displayName="FormattedDateTimeRange";var nt=O,F=a(64556),at=a(36511),b=function(t){var e=(0,c.Z)(),r=e.formatPlural,o=e.textComponent,n=t.value,i=t.other,u=t.children,m=r(n,t),d=t[m]||i;return typeof u=="function"?u(d):o?l.createElement(o,null,d):d};b.displayName="FormattedPlural";var ot=b,A=a(75414),T=a(20349);function E(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var ut=function(t){(0,s.ZT)(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.cache=(0,A.Sn)(),r.state={cache:r.cache,intl:(0,R.d)(E(r.props),r.cache),prevConfig:E(r.props)},r}return e.getDerivedStateFromProps=function(r,o){var n=o.prevConfig,i=o.cache,u=E(r);return(0,T.wU)(n,u)?null:{intl:(0,R.d)(u,i),prevConfig:u}},e.prototype.render=function(){return(0,T.lq)(this.state.intl),l.createElement(F.zt,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=T.Z0,e}(l.PureComponent),it=ut,x=60,S=60*60,z=60*60*24;function G(t){var e=Math.abs(t);return e<x?"second":e<S?"minute":e<z?"hour":"day"}function H(t){switch(t){case"second":return 1;case"minute":return x;case"hour":return S;default:return z}}function lt(t,e){if(!t)return 0;switch(e){case"second":return t;case"minute":return t*x;default:return t*S}}var mt=["second","minute","hour"];function P(t){return t===void 0&&(t="second"),mt.indexOf(t)>-1}var dt=function(t){var e=(0,c.Z)(),r=e.formatRelativeTime,o=e.textComponent,n=t.children,i=t.value,u=t.unit,m=(0,s._T)(t,["children","value","unit"]),d=r(i||0,u,m);return typeof n=="function"?n(d):o?l.createElement(o,null,d):l.createElement(l.Fragment,null,d)},$=function(t){var e=t.value,r=e===void 0?0:e,o=t.unit,n=o===void 0?"second":o,i=t.updateIntervalInSeconds,u=(0,s._T)(t,["value","unit","updateIntervalInSeconds"]);(0,T.kG)(!i||!!(i&&P(n)),"Cannot schedule update with unit longer than hour");var m=l.useState(),d=m[0],yt=m[1],B=l.useState(0),Ct=B[0],Nt=B[1],W=l.useState(0),v=W[0],K=W[1],X;(n!==d||r!==Ct)&&(Nt(r||0),yt(n),K(P(n)?lt(r,n):0)),l.useEffect(function(){function g(){clearTimeout(X)}if(g(),!i||!P(n))return g;var L=v-i,J=G(L);if(J==="day")return g;var Q=H(J),Et=L%Q,M=L-Et,Z=M>=v?M-Q:M,xt=Math.abs(Z-v);return v!==Z&&(X=setTimeout(function(){return K(Z)},xt*1e3)),g},[v,i,n]);var Y=r||0,D=n;if(P(n)&&typeof v=="number"&&i){D=G(v);var Rt=H(D);Y=Math.round(v/Rt)}return l.createElement(dt,(0,s.pi)({value:Y,unit:D},u))};$.displayName="FormattedRelativeTime";var st=$,h=a(6425);function ct(t){return t}function vt(t){return t}var ft=I("formatDate"),ht=I("formatTime"),pt=I("formatNumber"),It=I("formatList"),Ft=I("formatDisplayName"),Tt=j("formatDate"),Pt=j("formatTime"),gt={"intlprovider-demo-demos":{component:l.memo(l.lazy(function(){return a.e(5105).then(a.bind(a,70620))})),asset:{type:"BLOCK",id:"intlprovider-demo-demos",refAtomIds:["IntlProvider"],dependencies:{"index.tsx":{type:"FILE",value:a(66431).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.3"},antd:{type:"NPM",value:"5.29.1"},react:{type:"NPM",value:"18.3.1"},"react-intl":{type:"NPM",value:"7.1.14"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":tt,antd:et,react:_,"react-intl":p},renderOpts:{compile:function(){var t=q()(V()().mark(function r(){var o,n=arguments;return V()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,a.e(7457).then(a.bind(a,77457));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},r)}));function e(){return t.apply(this,arguments)}return e}()}}}},33115:function(U,f,a){a.r(f),a.d(f,{texts:function(){return p}});const p=[{value:"\u56FD\u9645\u5316\u63D0\u4F9B\u5668",paraId:0,tocIndex:0},{value:"\u516C\u53F8\u7684\u4E1A\u52A1\u9879\u76EE\u9700\u8981\u505A\u56FD\u9645\u5316\u65B9\u6848\u65F6\uFF0C\u53EF\u91C7\u7EB3\uFF0C\u5F00\u7BB1\u5373\u7528\uFF01",paraId:1,tocIndex:1},{value:"\u4F7F\u7528\u56FD\u9645\u5316\u63D0\u4F9B\u5668\uFF0C\u9700\u9879\u76EE\u6700\u5916\u5C42\u7684\u6839\u7EC4\u4EF6\u7528 ",paraId:2,tocIndex:3},{value:'<IntlProvider locale="zh-CN">...</IntlProvider>',paraId:2,tocIndex:3},{value:" \u5305\u88F9\uFF0C\u5426\u5219\u7EC4\u4EF6\u7684\u6587\u6848\u56FD\u9645\u5316\u4F1A\u62A5\u9519\u3002",paraId:2,tocIndex:3}]},66431:function(U,f){f.Z=`import { IntlProvider, Language } from '@louhaojie99/pro-components';
import { Radio } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const App: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <p>{formatMessage({ id: 'welcome' })}</p>
      <FormattedMessage id="welcome" />
    </>
  );
};

const Root = () => {
  const [local, setLocal] = useState(Language.ZH_CN);

  return (
    <>
      <Radio.Group
        value={local}
        options={[
          {
            label: '\u4E2D\u6587',
            value: Language.ZH_CN,
          },
          {
            label: 'English',
            value: Language.EN_US,
          },
        ]}
        onChange={(e) => {
          setLocal(e.target.value);
        }}
      />
      <IntlProvider locale={local}>
        <App />
      </IntlProvider>
    </>
  );
};

export default Root;
`}}]);
