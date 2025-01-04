"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[237],{90171:function(I,e,n){var u;n.r(e),n.d(e,{demos:function(){return E}});var s=n(90228),d=n.n(s),c=n(87999),C=n.n(c),l=n(75271),_=n(45236),A=n(57038),E={"asyncbutton-demo-demos":{component:l.memo(l.lazy(function(){return n.e(290).then(n.bind(n,27117))})),asset:{type:"BLOCK",id:"asyncbutton-demo-demos",refAtomIds:["AsyncButton"],dependencies:{"index.tsx":{type:"FILE",value:n(98966).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":A,react:u||(u=n.t(l,2))},renderOpts:{compile:function(){var i=C()(d()().mark(function m(){var r,B=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(837).then(n.bind(n,57837));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,B));case 3:case"end":return a.stop()}},m)}));function P(){return i.apply(this,arguments)}return P}()}}}},57038:function(I,e,n){n.r(e),n.d(e,{AsyncButton:function(){return a},OverlaySpin:function(){return U}});var u=n(26068),s=n.n(u),d=n(90228),c=n.n(d),C=n(87999),l=n.n(C),_=n(48305),A=n.n(_),E=n(67825),i=n.n(E),P=n(27807),m=n(75271),r=n(52676),B=["onClick"],g=m.memo(function(O){var t=O.onClick,p=i()(O,B),v=(0,m.useState)(void 0),f=A()(v,2),y=f[0],h=f[1],L=function(){var W=l()(c()().mark(function M(j){return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=2;break}return o.abrupt("return");case 2:return o.prev=2,h(!0),o.next=6,t==null?void 0:t(j);case 6:return o.prev=6,h(!1),o.finish(6);case 9:case"end":return o.stop()}},M,null,[[2,,6,9]])}));return function(j){return W.apply(this,arguments)}}();return(0,r.jsx)(P.ZP,s()({loading:y,onClick:L},p))}),a=g,x=n(40023),T=["spinning","background","tip"],D="overlay-spin",R=function(t){var p=t.spinning,v=t.background,f=v===void 0?"#fff":v,y=t.tip,h=i()(t,T);return p?(0,r.jsxs)("div",{className:"".concat(D,"-container"),style:{"--background":f},children:[(0,r.jsx)(x.Z,s()({className:D,spinning:p},h)),y&&(0,r.jsx)("div",{className:"".concat(D,"-tip"),children:y})]}):null},U=R},38439:function(I,e,n){n.r(e),n.d(e,{texts:function(){return s}});var u=n(45236);const s=[{value:"\u4E00\u4E2A\u652F\u6301\u5F02\u6B65\u7684\u6309\u94AE\uFF0ConClick \u4F20\u5165\u5F02\u6B65\u51FD\u6570\u5219\u81EA\u52A8\u663E\u793A loading",paraId:0,tocIndex:0},{value:"AsyncButton \u662F\u4E00\u4E2A\u4E13\u95E8\u8BBE\u8BA1\u7528\u4E8E\u5904\u7406\u5F02\u6B65\u64CD\u4F5C\u7684\u6309\u94AE\u7EC4\u4EF6\u3002\u5F53\u4F60\u9700\u8981\u5728\u7528\u6237\u70B9\u51FB\u6309\u94AE\u540E\u6267\u884C\u4E00\u4E9B\u8017\u65F6\u7684\u64CD\u4F5C\uFF08\u5982\u7F51\u7EDC\u8BF7\u6C42\u3001\u6587\u4EF6\u4E0A\u4F20\u7B49\uFF09\uFF0C\u5E76\u4E14\u5E0C\u671B\u5728\u6B64\u671F\u95F4\u7ED9\u7528\u6237\u63D0\u4F9B\u89C6\u89C9\u4E0A\u7684\u53CD\u9988\uFF08\u6BD4\u5982\u663E\u793A\u52A0\u8F7D\u72B6\u6001\uFF09\uFF0C\u90A3\u4E48 AsyncButton \u5C31\u975E\u5E38\u9002\u5408\u4F60\u7684\u9700\u6C42\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"onClick",paraId:2,tocIndex:3},{value:"\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u6309\u94AE\u5C06\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\u3002",paraId:2,tocIndex:3},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<any>",paraId:2,tocIndex:3},{value:"\u8BE5\u7EC4\u4EF6\u662F\u57FA\u4E8E Ant Design \u7684 Button \u7EC4\u4EF6\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5\u5B83\u4E5F\u7EE7\u627F\u4E86\u6240\u6709 Button \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",paraId:3,tocIndex:3},{value:"Ant Design Button API",paraId:3,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]},98966:function(I,e){e.Z=`import type { AsyncButtonProps } from '@louhaojie99/pro-components';
import { AsyncButton } from '@louhaojie99/pro-components';
import React from 'react';

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const App: React.FC = () => {
  const handleClick: AsyncButtonProps['onClick'] = async () => {
    await sleep(2000);
  };

  return (
    <div>
      <AsyncButton type="primary" onClick={handleClick}>
        AsyncButton
      </AsyncButton>
    </div>
  );
};

export default App;
`}}]);
