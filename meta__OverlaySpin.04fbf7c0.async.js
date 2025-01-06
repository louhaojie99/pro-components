"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[447],{56041:function(W,u,e){var S;e.r(u),e.d(u,{demos:function(){return M}});var l=e(90228),x=e.n(l),D=e(87999),H=e.n(D),I=e(75271),k=e(39513),h=e(84908),$=e(57228),M={"overlayspin-demo-demos":{component:I.memo(I.lazy(function(){return e.e(291).then(e.bind(e,19633))})),asset:{type:"BLOCK",id:"overlayspin-demo-demos",refAtomIds:["OverlaySpin"],dependencies:{"index.tsx":{type:"FILE",value:e(23064).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.2"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":h,antd:$,react:S||(S=e.t(I,2))},renderOpts:{compile:function(){var T=H()(x()().mark(function t(){var b,z=arguments;return x()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(363).then(e.bind(e,71363));case 2:return p.abrupt("return",(b=p.sent).default.apply(b,z));case 3:case"end":return p.stop()}},t)}));function d(){return T.apply(this,arguments)}return d}()}}}},84908:function(W,u,e){e.r(u),e.d(u,{AsyncButton:function(){return _},DestructibleContainer:function(){return re},EditableTable:function(){return Me},IntlProvider:function(){return ye},LanguageEnum:function(){return L},OverlaySpin:function(){return te}});var S=e(26068),l=e.n(S),x=e(90228),D=e.n(x),H=e(87999),I=e.n(H),k=e(48305),h=e.n(k),$=e(67825),M=e.n($),T=e(27807),d=e(75271),t=e(52676),b=["onClick"],z=d.memo(function(r){var n=r.onClick,a=M()(r,b),s=(0,d.useState)(void 0),m=h()(s,2),v=m[0],c=m[1],g=function(){var i=I()(D()().mark(function f(C){return D()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(n){o.next=2;break}return o.abrupt("return");case 2:return o.prev=2,c(!0),o.next=6,n==null?void 0:n(C);case 6:return o.prev=6,c(!1),o.finish(6);case 9:case"end":return o.stop()}},f,null,[[2,,6,9]])}));return function(C){return i.apply(this,arguments)}}();return(0,t.jsx)(T.ZP,l()({loading:v,onClick:g},a))}),_=z,p=e(40023),ee=["spinning","background","tip"],J="overlay-spin",ne=function(n){var a=n.spinning,s=n.background,m=s===void 0?"#fff":s,v=n.tip,c=M()(n,ee);return a?(0,t.jsxs)("div",{className:"".concat(J,"-container"),style:{"--background":m},children:[(0,t.jsx)(p.Z,l()({className:J,spinning:a},c)),v&&(0,t.jsx)("div",{className:"".concat(J,"-tip"),children:v})]}):null},te=ne,ae=function(n){return function(a){var s=a.visible,m=a.open,v=a.afterVisibleChange,c=a.afterOpenChange,g=a.afterClose,i=s!=null?s:m,f=v!=null?v:c,C=(0,d.useState)(i),y=h()(C,2),o=y[0],U=y[1],Q=(0,d.useState)(i===!1),N=h()(Q,2),E=N[0],A=N[1],B=function(Z){f==null||f(Z),Z||A(!0)},P=function(){g==null||g(),A(!0)};return(0,d.useEffect)(function(){i?(A(!1),setTimeout(function(){return U(i)},0)):U(i)},[i]),E?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(n,l()(l()({},a),{},{open:o,afterOpenChange:B,afterClose:P}))}},re=ae,oe=e(69417),le=e(67572),L=function(r){return r.ZH_CN="zh-CN",r.EN_US="en-US",r}({}),se=e(82092),w=e.n(se),ie=e(66262),ue=e(20973),de=e(62230),ve=e(38001),ce={welcome:"hello world"},me=ce,fe={welcome:"\u4F60\u597D\u4E16\u754C"},pe=fe,q=function(n){var a=w()(w()({},L.ZH_CN,{message:pe,antd:ue.Z}),L.EN_US,{message:me,antd:ie.Z});return a[n]},he=(0,de.Sn)(),ge=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L.ZH_CN;return(0,ve.d)({locale:n,messages:q(n).message},he)},Ce=d.memo(function(r){var n=r.locale,a=r.children,s=ge(n);return(0,t.jsx)(le.zt,{value:s,children:(0,t.jsx)(oe.ZP,{locale:q(n).antd,children:a})})}),ye=Ce,Ee=e(15558),Pe=e.n(Ee),De=e(29369),Ie=e(72149),Oe=e(72774),Se=e(63801),G=e(42748),Ae=e(77995),je=Se.Z.Link,xe=function(n){var a=n.className,s=n.style,m=n.bordered,v=m===void 0?!1:m,c=n.columns,g=n.formRef,i=n.options,f=i!=null?i:{},C=f.onlyPreview,y=C===void 0?!1:C,o=f.hideAdd,U=o===void 0?!1:o,Q=G.Z.useForm(),N=h()(Q,1),E=N[0],A=(0,Ie.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),B=h()(A,2),P=B[0],X=B[1];(0,d.useEffect)(function(){E.setFieldsValue({items:P!=null?P:[]})},[P]),(0,d.useImperativeHandle)(g,function(){return{form:E}});var Z=(0,Oe.Z)(function(R){var O=R.remove;return[].concat(Pe()(c!=null?c:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(V,Y){return(0,t.jsx)(je,{disabled:!!y,onClick:function(){return O(Y.key)},children:"\u5220\u9664"})}}])}),Te=function(O){X(O)};return(0,t.jsx)(G.Z,{className:a,form:E,style:l()({},s),autoComplete:"off",component:!1,disabled:!!y,initialValues:{items:P},onValuesChange:function(O,j){var V=j.items;Te(V)},children:(0,t.jsx)(G.Z.List,{name:"items",children:function(O,j){var V=j.add,Y=j.remove;return(0,t.jsx)(Ae.Z,l()(l()({rowKey:"key",bordered:v,dataSource:O.map(function(F){return l()(l()({},E.getFieldValue(["items",F.key])),{},{key:F.name})}),columns:Z({remove:Y})},!U&&{footer:function(){return(0,t.jsx)(T.ZP,{block:!0,icon:(0,t.jsx)(De.Z,{}),type:"dashed",disabled:!!y,onClick:I()(D()().mark(function be(){return D()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,E.validateFields();case 2:V();case 3:case"end":return K.stop()}},be)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},Me=xe},40185:function(W,u,e){e.r(u),e.d(u,{texts:function(){return l}});var S=e(39513);const l=[{value:"\u81EA\u5B9A\u4E49\u7684\u906E\u7F69\u52A0\u8F7D\uFF08Loading\uFF09\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u89E3\u51B3\u4F7F\u7528 Ant Design \u5E93\u7684 Spin \u7EC4\u4EF6\u901A\u8FC7\u5305\u88F9\u76EE\u6807\u7EC4\u4EF6\u6765\u5B9E\u73B0\u52A0\u8F7D\u6548\u679C\uFF0C\u8FD9\u6709\u65F6\u4F1A\u7834\u574F\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684\u539F\u59CB DOM \u7ED3\u6784\u548C\u6837\u5F0F; \u4E0D\u5E72\u6270 DOM \u7ED3\u6784\u3001\u6837\u5F0F\u72EC\u7ACB; \u8BE5\u7EC4\u4EF6\u91C7\u7528\u906E\u7F69\u7684\u5B9E\u73B0\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4ECE\u800C\u907F\u514D\u8BE5\u95EE\u9898\uFF0C\u56E0\u4E3A\u91C7\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u906E\u7F69\uFF0C\u6240\u4EE5",paraId:1,tocIndex:1},{value:"\u7236\u7EA7\u9700\u8981\u8BBE\u7F6E\u76F8\u5E94\u7684\u5B9A\u4F4D",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u8BE5\u7EC4\u4EF6\u662F\u57FA\u4E8E Ant Design \u7684 Spin \u7EC4\u4EF6\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5\u5B83\u4E5F\u7EE7\u627F\u4E86\u6240\u6709 Spin \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",paraId:2,tocIndex:3},{value:"Ant Design Spin API",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3}]},23064:function(W,u){u.Z=`import { OverlaySpin } from '@louhaojie99/pro-components';
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
