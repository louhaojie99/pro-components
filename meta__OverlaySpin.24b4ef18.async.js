"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[447],{4006:function(h,e,n){var l;n.r(e),n.d(e,{demos:function(){return p}});var r=n(90228),i=n.n(r),u=n(87999),E=n.n(u),d=n(75271),A=n(58099),D=n(57038),P=n(60846),p={"overlayspin-demo-demos":{component:d.memo(d.lazy(function(){return n.e(291).then(n.bind(n,58372))})),asset:{type:"BLOCK",id:"overlayspin-demo-demos",refAtomIds:["OverlaySpin"],dependencies:{"index.tsx":{type:"FILE",value:n(46990).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":D,antd:P,react:l||(l=n.t(d,2))},renderOpts:{compile:function(){var C=E()(i()().mark(function s(){var c,I=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(837).then(n.bind(n,57837));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,I));case 3:case"end":return a.stop()}},s)}));function m(){return C.apply(this,arguments)}return m}()}}}},57038:function(h,e,n){n.r(e),n.d(e,{AsyncButton:function(){return S},OverlaySpin:function(){return R}});var l=n(26068),r=n.n(l),i=n(90228),u=n.n(i),E=n(87999),d=n.n(E),A=n(48305),D=n.n(A),P=n(67825),p=n.n(P),C=n(27807),m=n(75271),s=n(52676),c=["onClick"],I=m.memo(function(_){var t=_.onClick,v=p()(_,c),f=(0,m.useState)(void 0),y=D()(f,2),g=y[0],O=y[1],U=function(){var x=d()(u()().mark(function j(B){return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=2;break}return o.abrupt("return");case 2:return o.prev=2,O(!0),o.next=6,t==null?void 0:t(B);case 6:return o.prev=6,O(!1),o.finish(6);case 9:case"end":return o.stop()}},j,null,[[2,,6,9]])}));return function(B){return x.apply(this,arguments)}}();return(0,s.jsx)(C.ZP,r()({loading:g,onClick:U},v))}),S=I,a=n(40023),T=["spinning","background","tip"],M="overlay-spin",L=function(t){var v=t.spinning,f=t.background,y=f===void 0?"#fff":f,g=t.tip,O=p()(t,T);return v?(0,s.jsxs)("div",{className:"".concat(M,"-container"),style:{"--background":y},children:[(0,s.jsx)(a.Z,r()({className:M,spinning:v},O)),g&&(0,s.jsx)("div",{className:"".concat(M,"-tip"),children:g})]}):null},R=L},42884:function(h,e,n){n.r(e),n.d(e,{texts:function(){return r}});var l=n(58099);const r=[{value:"\u81EA\u5B9A\u4E49\u7684\u906E\u7F69\u52A0\u8F7D\uFF08Loading\uFF09\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u89E3\u51B3\u4F7F\u7528 Ant Design \u5E93\u7684 Spin \u7EC4\u4EF6\u901A\u8FC7\u5305\u88F9\u76EE\u6807\u7EC4\u4EF6\u6765\u5B9E\u73B0\u52A0\u8F7D\u6548\u679C\uFF0C\u8FD9\u6709\u65F6\u4F1A\u7834\u574F\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684\u539F\u59CB DOM \u7ED3\u6784\u548C\u6837\u5F0F; \u4E0D\u5E72\u6270 DOM \u7ED3\u6784\u3001\u6837\u5F0F\u72EC\u7ACB; \u8BE5\u7EC4\u4EF6\u91C7\u7528\u906E\u7F69\u7684\u5B9E\u73B0\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4ECE\u800C\u907F\u514D\u8BE5\u95EE\u9898\uFF0C\u56E0\u4E3A\u91C7\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u906E\u7F69\uFF0C\u6240\u4EE5",paraId:1,tocIndex:1},{value:"\u7236\u7EA7\u9700\u8981\u8BBE\u7F6E\u76F8\u5E94\u7684\u5B9A\u4F4D",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u8BE5\u7EC4\u4EF6\u662F\u57FA\u4E8E Ant Design \u7684 Spin \u7EC4\u4EF6\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5\u5B83\u4E5F\u7EE7\u627F\u4E86\u6240\u6709 Spin \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",paraId:2,tocIndex:3},{value:"Ant Design Spin API",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3}]},46990:function(h,e){e.Z=`import { OverlaySpin } from '@louhaojie99/pro-components';
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
