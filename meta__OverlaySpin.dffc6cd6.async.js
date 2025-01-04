"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[447],{4006:function(A,r,n){var f;n.r(r),n.d(r,{demos:function(){return D}});var s=n(90228),y=n.n(s),O=n(87999),I=n.n(O),h=n(75271),L=n(58099),C=n(81085),S=n(69062),D={"overlayspin-demo-demos":{component:h.memo(h.lazy(function(){return n.e(291).then(n.bind(n,58372))})),asset:{type:"BLOCK",id:"overlayspin-demo-demos",refAtomIds:["OverlaySpin"],dependencies:{"index.tsx":{type:"FILE",value:n(46990).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":C,antd:S,react:f||(f=n.t(h,2))},renderOpts:{compile:function(){var M=I()(y()().mark(function o(){var E,j=arguments;return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.e(837).then(n.bind(n,57837));case 2:return i.abrupt("return",(E=i.sent).default.apply(E,j));case 3:case"end":return i.stop()}},o)}));function p(){return M.apply(this,arguments)}return p}()}}}},81085:function(A,r,n){n.r(r),n.d(r,{AsyncButton:function(){return R},DestructibleContainer:function(){return N},OverlaySpin:function(){return H}});var f=n(26068),s=n.n(f),y=n(90228),O=n.n(y),I=n(87999),h=n.n(I),L=n(48305),C=n.n(L),S=n(67825),D=n.n(S),M=n(27807),p=n(75271),o=n(52676),E=["onClick"],j=p.memo(function(_){var e=_.onClick,t=D()(_,E),l=(0,p.useState)(void 0),c=C()(l,2),u=c[0],v=c[1],g=function(){var d=h()(O()().mark(function m(P){return O()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:return a.prev=2,v(!0),a.next=6,e==null?void 0:e(P);case 6:return a.prev=6,v(!1),a.finish(6);case 9:case"end":return a.stop()}},m,null,[[2,,6,9]])}));return function(P){return d.apply(this,arguments)}}();return(0,o.jsx)(M.ZP,s()({loading:u,onClick:g},t))}),R=j,i=n(40023),K=["spinning","background","tip"],T="overlay-spin",V=function(e){var t=e.spinning,l=e.background,c=l===void 0?"#fff":l,u=e.tip,v=D()(e,K);return t?(0,o.jsxs)("div",{className:"".concat(T,"-container"),style:{"--background":c},children:[(0,o.jsx)(i.Z,s()({className:T,spinning:t},v)),u&&(0,o.jsx)("div",{className:"".concat(T,"-tip"),children:u})]}):null},H=V,J=function(e){return function(t){var l=t.visible,c=t.open,u=t.afterVisibleChange,v=t.afterOpenChange,g=t.afterClose,d=l!=null?l:c,m=u!=null?u:v,P=(0,p.useState)(d),B=C()(P,2),a=B[0],U=B[1],F=(0,p.useState)(d===!1),b=C()(F,2),G=b[0],x=b[1],Z=function(W){m==null||m(W),W||x(!0)},$=function(){g==null||g(),x(!0)};return(0,p.useEffect)(function(){d?(x(!1),setTimeout(function(){return U(d)},0)):U(d)},[d]),G?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(e,s()(s()({},t),{},{open:a,afterOpenChange:Z,afterClose:$}))}},N=J},42884:function(A,r,n){n.r(r),n.d(r,{texts:function(){return s}});var f=n(58099);const s=[{value:"\u81EA\u5B9A\u4E49\u7684\u906E\u7F69\u52A0\u8F7D\uFF08Loading\uFF09\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u89E3\u51B3\u4F7F\u7528 Ant Design \u5E93\u7684 Spin \u7EC4\u4EF6\u901A\u8FC7\u5305\u88F9\u76EE\u6807\u7EC4\u4EF6\u6765\u5B9E\u73B0\u52A0\u8F7D\u6548\u679C\uFF0C\u8FD9\u6709\u65F6\u4F1A\u7834\u574F\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684\u539F\u59CB DOM \u7ED3\u6784\u548C\u6837\u5F0F; \u4E0D\u5E72\u6270 DOM \u7ED3\u6784\u3001\u6837\u5F0F\u72EC\u7ACB; \u8BE5\u7EC4\u4EF6\u91C7\u7528\u906E\u7F69\u7684\u5B9E\u73B0\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4ECE\u800C\u907F\u514D\u8BE5\u95EE\u9898\uFF0C\u56E0\u4E3A\u91C7\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u906E\u7F69\uFF0C\u6240\u4EE5",paraId:1,tocIndex:1},{value:"\u7236\u7EA7\u9700\u8981\u8BBE\u7F6E\u76F8\u5E94\u7684\u5B9A\u4F4D",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u8BE5\u7EC4\u4EF6\u662F\u57FA\u4E8E Ant Design \u7684 Spin \u7EC4\u4EF6\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5\u5B83\u4E5F\u7EE7\u627F\u4E86\u6240\u6709 Spin \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",paraId:2,tocIndex:3},{value:"Ant Design Spin API",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3}]},46990:function(A,r){r.Z=`import { OverlaySpin } from '@louhaojie99/pro-components';
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
