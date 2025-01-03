"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[237],{90171:function(M,a,n){var d;n.r(a),n.d(a,{demos:function(){return B}});var c=n(90228),s=n.n(c),P=n(87999),v=n.n(P),f=n(75271),_=n(45236),I=n(59284),B={"asyncbutton-demo-0":{component:f.memo(f.lazy(v()(s()().mark(function y(){var i,u,l,m,h,e;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return h=function(o){return new Promise(function(C){setTimeout(C,o)})},t.next=3,Promise.resolve().then(n.t.bind(n,75271,19));case 3:return i=t.sent,u=i.default,t.next=7,Promise.resolve().then(n.bind(n,59284));case 7:return l=t.sent,m=l.AsyncButton,e=function(){var o=function(){var C=v()(s()().mark(function E(){return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,h(2e3);case 2:case"end":return p.stop()}},E)}));return function(){return C.apply(this,arguments)}}();return u.createElement("div",null,u.createElement(m,{type:"primary",onClick:o},"AsyncButton"))},t.abrupt("return",{default:e});case 11:case"end":return t.stop()}},y)})))),asset:{type:"BLOCK",id:"asyncbutton-demo-0",refAtomIds:["AsyncButton"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { AsyncButton } from '@louhaojie99/pro-components';
import type { AsyncButtonProps } from '@louhaojie99/pro-components';

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const App: React.FC = () => {
  const handleClick: AsyncButton['onClick'] = async () => {
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

export default App;`},react:{type:"NPM",value:"18.3.1"},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=n.t(f,2)),"@louhaojie99/pro-components":I},renderOpts:{compile:function(){var y=v()(s()().mark(function u(){var l,m=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(837).then(n.bind(n,57837));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,m));case 3:case"end":return e.stop()}},u)}));function i(){return y.apply(this,arguments)}return i}()}}}},59284:function(M,a,n){n.r(a),n.d(a,{AsyncButton:function(){return t},Foo:function(){return P}});var d=n(75271),c=n(52676),s=function(o){return(0,c.jsx)("h4",{children:o.title})},P=s,v=n(26068),f=n.n(v),_=n(90228),I=n.n(_),B=n(87999),y=n.n(B),i=n(48305),u=n.n(i),l=n(67825),m=n.n(l),h=n(7936),e=["onClick"],O=d.memo(function(A){var o=A.onClick,C=m()(A,e),E=(0,d.useState)(void 0),D=u()(E,2),p=D[0],j=D[1],g=function(){var U=y()(I()().mark(function T(R){return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,j(!0),r.next=6,o==null?void 0:o(R);case 6:return r.prev=6,j(!1),r.finish(6);case 9:case"end":return r.stop()}},T,null,[[2,,6,9]])}));return function(R){return U.apply(this,arguments)}}();return(0,c.jsx)(h.ZP,f()({loading:p,onClick:g},C))}),t=O},38439:function(M,a,n){n.r(a),n.d(a,{texts:function(){return c}});var d=n(45236);const c=[{value:"\u4E00\u4E2A\u652F\u6301\u5F02\u6B65\u7684\u6309\u94AE\uFF0ConClick \u4F20\u5165\u5F02\u6B65\u51FD\u6570\u5219\u81EA\u52A8\u663E\u793A loading",paraId:0,tocIndex:0},{value:"AsyncButton \u662F\u4E00\u4E2A\u4E13\u95E8\u8BBE\u8BA1\u7528\u4E8E\u5904\u7406\u5F02\u6B65\u64CD\u4F5C\u7684\u6309\u94AE\u7EC4\u4EF6\u3002\u5F53\u4F60\u9700\u8981\u5728\u7528\u6237\u70B9\u51FB\u6309\u94AE\u540E\u6267\u884C\u4E00\u4E9B\u8017\u65F6\u7684\u64CD\u4F5C\uFF08\u5982\u7F51\u7EDC\u8BF7\u6C42\u3001\u6587\u4EF6\u4E0A\u4F20\u7B49\uFF09\uFF0C\u5E76\u4E14\u5E0C\u671B\u5728\u6B64\u671F\u95F4\u7ED9\u7528\u6237\u63D0\u4F9B\u89C6\u89C9\u4E0A\u7684\u53CD\u9988\uFF08\u6BD4\u5982\u663E\u793A\u52A0\u8F7D\u72B6\u6001\uFF09\uFF0C\u90A3\u4E48 AsyncButton \u5C31\u975E\u5E38\u9002\u5408\u4F60\u7684\u9700\u6C42\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"onClick",paraId:2,tocIndex:3},{value:"\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u6309\u94AE\u5C06\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\u3002",paraId:2,tocIndex:3},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<any>",paraId:2,tocIndex:3},{value:"\u8BE5\u7EC4\u4EF6\u662F\u57FA\u4E8E Ant Design \u7684 Button \u7EC4\u4EF6\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5\u5B83\u4E5F\u7EE7\u627F\u4E86\u6240\u6709 Button \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",paraId:3,tocIndex:3},{value:"Ant Design Button API",paraId:3,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]}}]);
