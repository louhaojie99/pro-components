"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[447],{4006:function(K,c,n){var h;n.r(c),n.d(c,{demos:function(){return $}});var I=n(90228),i=n.n(I),W=n(87999),S=n.n(W),A=n(75271),H=n(58099),J=n(16458),g=n(57228),$={"overlayspin-demo-demos":{component:A.memo(A.lazy(function(){return n.e(291).then(n.bind(n,58372))})),asset:{type:"BLOCK",id:"overlayspin-demo-demos",refAtomIds:["OverlaySpin"],dependencies:{"index.tsx":{type:"FILE",value:n(46990).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":J,antd:g,react:h||(h=n.t(A,2))},renderOpts:{compile:function(){var M=S()(i()().mark(function m(){var a,z=arguments;return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(837).then(n.bind(n,57837));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,z));case 3:case"end":return p.stop()}},m)}));function T(){return M.apply(this,arguments)}return T}()}}}},16458:function(K,c,n){n.r(c),n.d(c,{AsyncButton:function(){return p},DestructibleContainer:function(){return on},EditableTable:function(){return Nn},IntlProvider:function(){return En},LanguageEnum:function(){return N},OverlaySpin:function(){return an},utils:function(){return h}});var h={};n.r(h),n.d(h,{parseJSON:function(){return bn}});var I=n(26068),i=n.n(I),W=n(90228),S=n.n(W),A=n(87999),H=n.n(A),J=n(48305),g=n.n(J),$=n(67825),M=n.n($),T=n(27807),m=n(75271),a=n(52676),z=["onClick"],_=m.memo(function(r){var e=r.onClick,t=M()(r,z),o=(0,m.useState)(void 0),v=g()(o,2),s=v[0],u=v[1],C=function(){var d=H()(S()().mark(function f(y){return S()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(e){l.next=2;break}return l.abrupt("return");case 2:return l.prev=2,u(!0),l.next=6,e==null?void 0:e(y);case 6:return l.prev=6,u(!1),l.finish(6);case 9:case"end":return l.stop()}},f,null,[[2,,6,9]])}));return function(y){return d.apply(this,arguments)}}();return(0,a.jsx)(T.ZP,i()({loading:s,onClick:C},t))}),p=_,nn=n(40023),en=["spinning","background","tip"],G="overlay-spin",tn=function(e){var t=e.spinning,o=e.background,v=o===void 0?"#fff":o,s=e.tip,u=M()(e,en);return t?(0,a.jsxs)("div",{className:"".concat(G,"-container"),style:{"--background":v},children:[(0,a.jsx)(nn.Z,i()({className:G,spinning:t},u)),s&&(0,a.jsx)("div",{className:"".concat(G,"-tip"),children:s})]}):null},an=tn,rn=function(e){return function(t){var o=t.visible,v=t.open,s=t.afterVisibleChange,u=t.afterOpenChange,C=t.afterClose,d=o!=null?o:v,f=s!=null?s:u,y=(0,m.useState)(d),O=g()(y,2),l=O[0],b=O[1],X=(0,m.useState)(d===!1),L=g()(X,2),E=L[0],j=L[1],U=function(B){f==null||f(B),B||j(!0)},P=function(){C==null||C(),j(!0)};return(0,m.useEffect)(function(){d?(j(!1),setTimeout(function(){return b(d)},0)):b(d)},[d]),E?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(e,i()(i()({},t),{},{open:l,afterOpenChange:U,afterClose:P}))}},on=rn,ln=n(69417),sn=n(35862),N=function(r){return r.ZH_CN="zh-CN",r.EN_US="en-US",r}({}),un=n(82092),w=n.n(un),dn=n(66262),vn=n(20973),cn=n(83144),mn=n(78843),fn={welcome:"hello world"},pn=fn,hn={welcome:"\u4F60\u597D\u4E16\u754C"},gn=hn,q=function(e){var t=w()(w()({},N.ZH_CN,{message:gn,antd:vn.Z}),N.EN_US,{message:pn,antd:dn.Z});return t[e]},Cn=(0,cn.Sn)(),yn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:N.ZH_CN;return(0,mn.d)({locale:e,messages:q(e).message},Cn)},On=m.memo(function(r){var e=r.locale,t=r.children,o=yn(e);return(0,a.jsx)(sn.zt,{value:o,children:(0,a.jsx)(ln.ZP,{locale:q(e).antd,children:t})})}),En=On,Pn=n(15558),Sn=n.n(Pn),Dn=n(29369),In=n(72149),An=n(72774),jn=n(63801),Q=n(42748),xn=n(77995),Mn=jn.Z.Link,Tn=function(e){var t=e.className,o=e.style,v=e.bordered,s=v===void 0?!1:v,u=e.columns,C=e.formRef,d=e.options,f=d!=null?d:{},y=f.onlyPreview,O=y===void 0?!1:y,l=f.hideAdd,b=l===void 0?!1:l,X=Q.Z.useForm(),L=g()(X,1),E=L[0],j=(0,In.Z)(e,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),U=g()(j,2),P=U[0],Y=U[1];(0,m.useEffect)(function(){E.setFieldsValue({items:P!=null?P:[]})},[P]),(0,m.useImperativeHandle)(C,function(){return E});var B=(0,An.Z)(function(V){var D=V.remove;return[].concat(Sn()(u!=null?u:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(Z,k){return(0,a.jsx)(Mn,{disabled:!!O,onClick:function(){return D(k.key)},children:"\u5220\u9664"})}}])}),Ln=function(D){Y(D)};return(0,a.jsx)(Q.Z,{className:t,form:E,style:i()({},o),autoComplete:"off",component:!1,disabled:!!O,initialValues:{items:P},onValuesChange:function(D,x){var Z=x.items;Ln(Z)},children:(0,a.jsx)(Q.Z.List,{name:"items",children:function(D,x){var Z=x.add,k=x.remove;return(0,a.jsx)(xn.Z,i()(i()({rowKey:"key",bordered:s,dataSource:D.map(function(R){return i()(i()({},E.getFieldValue(["items",R.key])),{},{key:R.name})}),columns:B({remove:k})},!b&&{footer:function(){return(0,a.jsx)(T.ZP,{block:!0,icon:(0,a.jsx)(Dn.Z,{}),type:"dashed",disabled:!!O,onClick:H()(S()().mark(function Un(){return S()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,E.validateFields();case 2:Z();case 3:case"end":return F.stop()}},Un)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},Nn=Tn,bn=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(u){return typeof u=="string"};try{if(!o(e))return t;var v=JSON.parse(e!=null?e:"");return v}catch(s){return console.error("Error parsing JSON:",s),t}}},42884:function(K,c,n){n.r(c),n.d(c,{texts:function(){return I}});var h=n(58099);const I=[{value:"\u81EA\u5B9A\u4E49\u7684\u906E\u7F69\u52A0\u8F7D\uFF08Loading\uFF09\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u89E3\u51B3\u4F7F\u7528 Ant Design \u5E93\u7684 Spin \u7EC4\u4EF6\u901A\u8FC7\u5305\u88F9\u76EE\u6807\u7EC4\u4EF6\u6765\u5B9E\u73B0\u52A0\u8F7D\u6548\u679C\uFF0C\u8FD9\u6709\u65F6\u4F1A\u7834\u574F\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684\u539F\u59CB DOM \u7ED3\u6784\u548C\u6837\u5F0F; \u4E0D\u5E72\u6270 DOM \u7ED3\u6784\u3001\u6837\u5F0F\u72EC\u7ACB; \u8BE5\u7EC4\u4EF6\u91C7\u7528\u906E\u7F69\u7684\u5B9E\u73B0\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4ECE\u800C\u907F\u514D\u8BE5\u95EE\u9898\uFF0C\u56E0\u4E3A\u91C7\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u906E\u7F69\uFF0C\u6240\u4EE5",paraId:1,tocIndex:1},{value:"\u7236\u7EA7\u9700\u8981\u8BBE\u7F6E\u76F8\u5E94\u7684\u5B9A\u4F4D",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u8BE5\u7EC4\u4EF6\u662F\u57FA\u4E8E Ant Design \u7684 Spin \u7EC4\u4EF6\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5\u5B83\u4E5F\u7EE7\u627F\u4E86\u6240\u6709 Spin \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",paraId:2,tocIndex:3},{value:"Ant Design Spin API",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3}]},46990:function(K,c){c.Z=`import { OverlaySpin } from '@louhaojie99/pro-components';
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
