"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[447],{56041:function(Z,v,n){var O;n.r(v),n.d(v,{demos:function(){return x}});var i=n(90228),j=n.n(i),E=n(87999),V=n.n(E),D=n(75271),J=n(39513),C=n(91265),R=n(95325),x={"overlayspin-demo-demos":{component:D.memo(D.lazy(function(){return n.e(291).then(n.bind(n,19633))})),asset:{type:"BLOCK",id:"overlayspin-demo-demos",refAtomIds:["OverlaySpin"],dependencies:{"index.tsx":{type:"FILE",value:n(23064).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":C,antd:R,react:O||(O=n.t(D,2))},renderOpts:{compile:function(){var M=V()(j()().mark(function t(){var T,F=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(363).then(n.bind(n,71363));case 2:return p.abrupt("return",(T=p.sent).default.apply(T,F));case 3:case"end":return p.stop()}},t)}));function f(){return M.apply(this,arguments)}return f}()}}}},91265:function(Z,v,n){n.r(v),n.d(v,{AsyncButton:function(){return G},DestructibleContainer:function(){return en},EditableTable:function(){return An},IntlProvider:function(){return gn},LanguageEnum:function(){return b},OverlaySpin:function(){return q}});var O=n(26068),i=n.n(O),j=n(90228),E=n.n(j),V=n(87999),D=n.n(V),J=n(48305),C=n.n(J),R=n(67825),x=n.n(R),M=n(27807),f=n(75271),t=n(52676),T=["onClick"],F=f.memo(function(r){var e=r.onClick,a=x()(r,T),l=(0,f.useState)(void 0),c=C()(l,2),s=c[0],h=c[1],g=function(){var u=D()(E()().mark(function m(y){return E()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(e){o.next=2;break}return o.abrupt("return");case 2:return o.prev=2,h(!0),o.next=6,e==null?void 0:e(y);case 6:return o.prev=6,h(!1),o.finish(6);case 9:case"end":return o.stop()}},m,null,[[2,,6,9]])}));return function(y){return u.apply(this,arguments)}}();return(0,t.jsx)(M.ZP,i()({loading:s,onClick:g},a))}),G=F,p=n(40023),_=["spinning","background","tip"],K="overlay-spin",w=function(e){var a=e.spinning,l=e.background,c=l===void 0?"#fff":l,s=e.tip,h=x()(e,_);return a?(0,t.jsxs)("div",{className:"".concat(K,"-container"),style:{"--background":c},children:[(0,t.jsx)(p.Z,i()({className:K,spinning:a},h)),s&&(0,t.jsx)("div",{className:"".concat(K,"-tip"),children:s})]}):null},q=w,nn=function(e){return function(a){var l=a.visible,c=a.open,s=a.afterVisibleChange,h=a.afterOpenChange,g=a.afterClose,u=l!=null?l:c,m=s!=null?s:h,y=(0,f.useState)(u),I=C()(y,2),o=I[0],L=I[1],S=(0,f.useState)(u===!1),U=C()(S,2),N=U[0],d=U[1],H=function(P){m==null||m(P),P||d(!0)},$=function(){g==null||g(),d(!0)};return(0,f.useEffect)(function(){u?(d(!1),setTimeout(function(){return L(u)},0)):L(u)},[u]),N?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(e,i()(i()({},a),{},{open:o,afterOpenChange:H,afterClose:$}))}},en=nn,tn=n(69417),an=n(67572),b=function(r){return r.ZH_CN="zh-CN",r.EN_US="en-US",r}({}),rn=n(82092),Q=n.n(rn),on=n(66262),ln=n(20973),sn=n(62230),un=n(38001),dn={welcome:"hello world"},vn=dn,cn={welcome:"\u4F60\u597D\u4E16\u754C"},mn=cn,X=function(e){var a=Q()(Q()({},b.ZH_CN,{message:mn,antd:ln.Z}),b.EN_US,{message:vn,antd:on.Z});return a[e]},fn=(0,sn.Sn)(),pn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.ZH_CN;return(0,un.d)({locale:e,messages:X(e).message},fn)},hn=f.memo(function(r){var e=r.locale,a=r.children,l=pn(e);return(0,t.jsx)(an.zt,{value:l,children:(0,t.jsx)(tn.ZP,{locale:X(e).antd,children:a})})}),gn=hn,Cn=n(15558),yn=n.n(Cn),Pn=n(29369),En=n(56630),Dn=n(63801),W=n(42748),On=n(77995),In=Dn.Z.Link,Sn=function(e){var a=e.className,l=e.style,c=e.columns,s=e.options,h=e.tableProps,g=s!=null?s:{},u=g.onlyPreview,m=u===void 0?!1:u,y=g.hideAdd,I=y===void 0?!1:y,o=W.Z.useForm(),L=C()(o,1),S=L[0],U=(0,En.Z)(e,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),N=C()(U,2),d=N[0],H=N[1];return(0,f.useEffect)(function(){S.setFieldsValue({items:d!=null?d:[]})},[d]),(0,t.jsx)(W.Z,{className:a,style:i()({},l),autoComplete:"off",component:!1,form:S,disabled:!!m,initialValues:{items:d!=null?d:[]},onValuesChange:function(B,P){var z=P.items;H(z)},children:(0,t.jsx)(W.Z.List,{name:"items",children:function(B,P){var z=P.add,jn=P.remove;return(0,t.jsx)(On.Z,i()(i()({pagination:!1,scroll:{x:"max-content"}},h),{},{rowKey:"key",dataSource:B,columns:[].concat(yn()(c!=null?c:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",render:function(Y,k){return(0,t.jsx)(In,{disabled:!!m,onClick:function(){return jn(k.key)},children:"\u5220\u9664"})}}])},!I&&{footer:function(){return(0,t.jsx)(M.ZP,{block:!0,icon:(0,t.jsx)(Pn.Z,{}),type:"dashed",disabled:!!m,onClick:D()(E()().mark(function Y(){return E()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,S.validateFields();case 2:z();case 3:case"end":return A.stop()}},Y)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}))}})})},An=Sn},40185:function(Z,v,n){n.r(v),n.d(v,{texts:function(){return i}});var O=n(39513);const i=[{value:"\u81EA\u5B9A\u4E49\u7684\u906E\u7F69\u52A0\u8F7D\uFF08Loading\uFF09\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u89E3\u51B3\u4F7F\u7528 Ant Design \u5E93\u7684 Spin \u7EC4\u4EF6\u901A\u8FC7\u5305\u88F9\u76EE\u6807\u7EC4\u4EF6\u6765\u5B9E\u73B0\u52A0\u8F7D\u6548\u679C\uFF0C\u8FD9\u6709\u65F6\u4F1A\u7834\u574F\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684\u539F\u59CB DOM \u7ED3\u6784\u548C\u6837\u5F0F; \u4E0D\u5E72\u6270 DOM \u7ED3\u6784\u3001\u6837\u5F0F\u72EC\u7ACB; \u8BE5\u7EC4\u4EF6\u91C7\u7528\u906E\u7F69\u7684\u5B9E\u73B0\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4ECE\u800C\u907F\u514D\u8BE5\u95EE\u9898\uFF0C\u56E0\u4E3A\u91C7\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u906E\u7F69\uFF0C\u6240\u4EE5",paraId:1,tocIndex:1},{value:"\u7236\u7EA7\u9700\u8981\u8BBE\u7F6E\u76F8\u5E94\u7684\u5B9A\u4F4D",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u8BE5\u7EC4\u4EF6\u662F\u57FA\u4E8E Ant Design \u7684 Spin \u7EC4\u4EF6\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5\u5B83\u4E5F\u7EE7\u627F\u4E86\u6240\u6709 Spin \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",paraId:2,tocIndex:3},{value:"Ant Design Spin API",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3}]},23064:function(Z,v){v.Z=`import { OverlaySpin } from '@louhaojie99/pro-components';
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
