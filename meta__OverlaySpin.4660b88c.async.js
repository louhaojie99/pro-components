"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[447],{4006:function(A,s,n){var g;n.r(s),n.d(s,{demos:function(){return I}});var i=n(90228),O=n.n(i),D=n(87999),M=n.n(D),h=n(75271),R=n(58099),C=n(25826),j=n(65639),I={"overlayspin-demo-demos":{component:h.memo(h.lazy(function(){return n.e(291).then(n.bind(n,58372))})),asset:{type:"BLOCK",id:"overlayspin-demo-demos",refAtomIds:["OverlaySpin"],dependencies:{"index.tsx":{type:"FILE",value:n(46990).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":C,antd:j,react:g||(g=n.t(h,2))},renderOpts:{compile:function(){var U=M()(O()().mark(function r(){var E,x=arguments;return O()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(837).then(n.bind(n,57837));case 2:return d.abrupt("return",(E=d.sent).default.apply(E,x));case 3:case"end":return d.stop()}},r)}));function u(){return U.apply(this,arguments)}return u}()}}}},25826:function(A,s,n){n.r(s),n.d(s,{AsyncButton:function(){return N},DestructibleContainer:function(){return F},IntlProvider:function(){return sn},LanguageEnum:function(){return P},OverlaySpin:function(){return z}});var g=n(26068),i=n.n(g),O=n(90228),D=n.n(O),M=n(87999),h=n.n(M),R=n(48305),C=n.n(R),j=n(67825),I=n.n(j),U=n(27807),u=n(75271),r=n(52676),E=["onClick"],x=u.memo(function(a){var e=a.onClick,t=I()(a,E),l=(0,u.useState)(void 0),m=C()(l,2),v=m[0],f=m[1],y=function(){var c=h()(D()().mark(function p(S){return D()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(e){o.next=2;break}return o.abrupt("return");case 2:return o.prev=2,f(!0),o.next=6,e==null?void 0:e(S);case 6:return o.prev=6,f(!1),o.finish(6);case 9:case"end":return o.stop()}},p,null,[[2,,6,9]])}));return function(S){return c.apply(this,arguments)}}();return(0,r.jsx)(U.ZP,i()({loading:v,onClick:y},t))}),N=x,d=n(40023),_=["spinning","background","tip"],L="overlay-spin",b=function(e){var t=e.spinning,l=e.background,m=l===void 0?"#fff":l,v=e.tip,f=I()(e,_);return t?(0,r.jsxs)("div",{className:"".concat(L,"-container"),style:{"--background":m},children:[(0,r.jsx)(d.Z,i()({className:L,spinning:t},f)),v&&(0,r.jsx)("div",{className:"".concat(L,"-tip"),children:v})]}):null},z=b,J=function(e){return function(t){var l=t.visible,m=t.open,v=t.afterVisibleChange,f=t.afterOpenChange,y=t.afterClose,c=l!=null?l:m,p=v!=null?v:f,S=(0,u.useState)(c),T=C()(S,2),o=T[0],H=T[1],ln=(0,u.useState)(c===!1),Z=C()(ln,2),un=Z[0],B=Z[1],dn=function(V){p==null||p(V),V||B(!0)},vn=function(){y==null||y(),B(!0)};return(0,u.useEffect)(function(){c?(B(!1),setTimeout(function(){return H(c)},0)):H(c)},[c]),un?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(e,i()(i()({},t),{},{open:o,afterOpenChange:dn,afterClose:vn}))}},F=J,G=n(69417),$=n(35862),P=function(a){return a.ZH_CN="zh-CN",a.EN_US="en-US",a}({}),Q=n(82092),W=n.n(Q),X=n(66262),Y=n(20973),k=n(83144),w=n(78843),q={welcome:"hello world"},nn=q,en={welcome:"\u4F60\u597D\u4E16\u754C"},tn=en,K=function(e){var t=W()(W()({},P.ZH_CN,{message:tn,antd:Y.Z}),P.EN_US,{message:nn,antd:X.Z});return t[e]},an=(0,k.Sn)(),rn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:P.ZH_CN;return(0,w.d)({locale:e,messages:K(e).message},an)},on=u.memo(function(a){var e=a.locale,t=a.children,l=rn(e);return(0,r.jsx)($.zt,{value:l,children:(0,r.jsx)(G.ZP,{locale:K(e).antd,children:t})})}),sn=on},42884:function(A,s,n){n.r(s),n.d(s,{texts:function(){return i}});var g=n(58099);const i=[{value:"\u81EA\u5B9A\u4E49\u7684\u906E\u7F69\u52A0\u8F7D\uFF08Loading\uFF09\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u89E3\u51B3\u4F7F\u7528 Ant Design \u5E93\u7684 Spin \u7EC4\u4EF6\u901A\u8FC7\u5305\u88F9\u76EE\u6807\u7EC4\u4EF6\u6765\u5B9E\u73B0\u52A0\u8F7D\u6548\u679C\uFF0C\u8FD9\u6709\u65F6\u4F1A\u7834\u574F\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684\u539F\u59CB DOM \u7ED3\u6784\u548C\u6837\u5F0F; \u4E0D\u5E72\u6270 DOM \u7ED3\u6784\u3001\u6837\u5F0F\u72EC\u7ACB; \u8BE5\u7EC4\u4EF6\u91C7\u7528\u906E\u7F69\u7684\u5B9E\u73B0\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4ECE\u800C\u907F\u514D\u8BE5\u95EE\u9898\uFF0C\u56E0\u4E3A\u91C7\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u906E\u7F69\uFF0C\u6240\u4EE5",paraId:1,tocIndex:1},{value:"\u7236\u7EA7\u9700\u8981\u8BBE\u7F6E\u76F8\u5E94\u7684\u5B9A\u4F4D",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u8BE5\u7EC4\u4EF6\u662F\u57FA\u4E8E Ant Design \u7684 Spin \u7EC4\u4EF6\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5\u5B83\u4E5F\u7EE7\u627F\u4E86\u6240\u6709 Spin \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",paraId:2,tocIndex:3},{value:"Ant Design Spin API",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3}]},46990:function(A,s){s.Z=`import { OverlaySpin } from '@louhaojie99/pro-components';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div style={{ position: 'relative' }}>
      <OverlaySpin spinning={loading} tip="\u6570\u636E\u52A0\u8F7D\u4E2D..." />

      <Button
        type="primary"
        loading={loading}
        onClick={() => {
          setLoading(true);
        }}
      >
        \u8BF7\u6C42\u6570\u636E
      </Button>

      <header>Header</header>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
`}}]);
