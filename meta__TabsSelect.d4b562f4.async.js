"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[96],{7810:function(W,g,e){var D;e.r(g),e.d(g,{demos:function(){return E}});var Z=e(90228),o=e.n(Z),H=e(87999),M=e.n(H),N=e(75271),J=e(71122),z=e(43727),E={"tabsselect-demo-demos":{component:N.memo(N.lazy(function(){return e.e(724).then(e.bind(e,64665))})),asset:{type:"BLOCK",id:"tabsselect-demo-demos",refAtomIds:["TabsSelect"],dependencies:{"index.tsx":{type:"FILE",value:e(16122).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":z,react:D||(D=e.t(N,2))},renderOpts:{compile:function(){var G=M()(o()().mark(function K(){var v,a=arguments;return o()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,e.e(652).then(e.bind(e,43652));case 2:return V.abrupt("return",(v=V.sent).default.apply(v,a));case 3:case"end":return V.stop()}},K)}));function L(){return G.apply(this,arguments)}return L}()}}}},43727:function(W,g,e){e.r(g),e.d(g,{AsyncButton:function(){return V},DestructibleContainer:function(){return ae},EditableTable:function(){return ce},IntlProvider:function(){return Ee},LanguageEnum:function(){return F},OverlaySpin:function(){return je},TabsSelect:function(){return Ie},utils:function(){return D}});var D={};e.r(D),e.d(D,{getUrlSearchParams:function(){return Ze},parseJson:function(){return Ue}});var Z=e(26068),o=e.n(Z),H=e(90228),M=e.n(H),N=e(87999),J=e.n(N),z=e(48305),E=e.n(z),G=e(67825),L=e.n(G),K=e(27807),v=e(75271),a=e(52676),w=["onClick"],V=v.memo(function(u){var n=u.onClick,t=L()(u,w),s=(0,v.useState)(void 0),m=E()(s,2),d=m[0],l=m[1],T=function(){var c=J()(M()().mark(function p(b){var f;return M()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(!n||typeof n!="function")){r.next=2;break}return r.abrupt("return");case 2:if(f=n(b),!(f instanceof Promise)){r.next=11;break}return r.prev=4,l(!0),r.next=8,f;case 8:return r.prev=8,l(!1),r.finish(8);case 11:case"end":return r.stop()}},p,null,[[4,,8,11]])}));return function(b){return c.apply(this,arguments)}}();return(0,a.jsx)(K.ZP,o()({loading:d,onClick:T},t))}),ae=function(n){return function(t){var s=t.visible,m=t.open,d=t.afterVisibleChange,l=t.afterOpenChange,T=t.afterClose,c=s!=null?s:m,p=d!=null?d:l,b=(0,v.useState)(c),f=E()(b,2),j=f[0],r=f[1],x=(0,v.useState)(c===!1),A=E()(x,2),y=A[0],P=A[1],I=function(U){p==null||p(U),U||P(!0)},S=function(){T==null||T(),P(!0)};return(0,v.useEffect)(function(){c?(P(!1),setTimeout(function(){return r(c)},0)):r(c)},[c]),y?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(n,o()(o()({},t),{},{open:j,afterOpenChange:I,afterClose:S}))}},le=e(15558),oe=e.n(le),re=e(68474),_=e(72149),se=e(72774),ue=e(17857),Q=e(90663),ie=e(98267),de=ue.Z.Link,ce=function(n){var t=n.className,s=n.style,m=n.bordered,d=m===void 0?!1:m,l=n.columns,T=n.formRef,c=n.options,p=c!=null?c:{},b=p.onlyPreview,f=b===void 0?!1:b,j=p.hideAdd,r=j===void 0?!1:j,x=Q.Z.useForm(),A=E()(x,1),y=A[0],P=(0,_.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),I=E()(P,2),S=I[0],R=I[1];(0,v.useEffect)(function(){y.setFieldsValue({items:S!=null?S:[]})},[S]),(0,v.useImperativeHandle)(T,function(){return y});var U=(0,se.Z)(function(C){var i=C.remove;return[].concat(oe()(l!=null?l:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(O,k){return(0,a.jsx)(de,{disabled:!!f,onClick:function(){return i(k.key)},children:"\u5220\u9664"})}}])}),Y=function(i){R(i)};return(0,a.jsx)(Q.Z,{className:t,form:y,style:o()({},s),autoComplete:"off",component:!1,disabled:!!f,initialValues:{items:S},onValuesChange:function(i,h){var O=h.items;Y(O)},children:(0,a.jsx)(Q.Z.List,{name:"items",children:function(i,h){var O=h.add,k=h.remove;return(0,a.jsx)(ie.Z,o()(o()({rowKey:"key",bordered:d,dataSource:i.map(function($){return o()(o()({},y.getFieldValue(["items",$.key])),{},{key:$.name})}),columns:U({remove:k})},!r&&{footer:function(){return(0,a.jsx)(K.ZP,{block:!0,icon:(0,a.jsx)(re.Z,{}),type:"dashed",disabled:!!f,onClick:J()(M()().mark(function Ne(){return M()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,y.validateFields();case 2:O();case 3:case"end":return B.stop()}},Ne)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},ve=e(69417),me=e(35862),F=function(u){return u.ZH_CN="zh-CN",u.EN_US="en-US",u}({}),fe=e(82092),q=e.n(fe),he=e(66262),pe=e(21563),Ce=e(83144),ge=e(78843),be={welcome:"hello world"},ye=be,Pe={welcome:"\u4F60\u597D\u4E16\u754C"},Se=Pe,ee=function(n){var t=q()(q()({},F.ZH_CN,{message:Se,antd:pe.Z}),F.EN_US,{message:ye,antd:he.Z});return t[n]},Te=(0,Ce.Sn)(),Oe=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:F.ZH_CN;return(0,ge.d)({locale:n,messages:ee(n).message},Te)},Ee=v.memo(function(u){var n=u.locale,t=u.children,s=Oe(n);return(0,a.jsx)(me.zt,{value:s,children:(0,a.jsx)(ve.ZP,{locale:ee(n).antd,children:t})})}),ne=e(40023),Ve=["spinning","background","tip"],X="overlay-spin",je=function(n){var t=n.spinning,s=n.background,m=s===void 0?"#fff":s,d=n.tip,l=L()(n,Ve);return t?(0,a.jsxs)("div",{className:"".concat(X,"-container"),style:{"--background":m},children:[(0,a.jsx)(ne.Z,o()({className:X,spinning:t},l)),d&&(0,a.jsx)("div",{className:"".concat(X,"-tip"),children:d})]}):null},De=e(44675),Ae=e(95627),te=e(44763),Me=e(32699),xe=["loading","options","defaultValue","tabsProps"],Ie=function(n){var t,s,m=n.loading,d=m===void 0?!1:m,l=n.options,T=n.defaultValue,c=n.tabsProps,p=L()(n,xe),b=(t=l==null||(s=l[0])===null||s===void 0?void 0:s.tabKey)!==null&&t!==void 0?t:"",f=(0,_.Z)(n,{defaultValue:T||{activeTab:b,selectValue:void 0},defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),j=E()(f,2),r=j[0],x=j[1],A=r!=null?r:{},y=A.activeTab,P=y===void 0?b:y,I=A.selectValue,S=(0,v.useMemo)(function(){return(0,Me.keyBy)(l,"tabKey")},[l]),R=(0,v.useMemo)(function(){var C,i;return P?(C=(i=S[P])===null||i===void 0?void 0:i.tabOptions)!==null&&C!==void 0?C:[]:[]},[S,P]),U=function(i){x(function(h){return o()(o()({},h),{},{activeTab:i})})},Y=function(i,h){x(function(O){return o()(o()({},O),{},{selectValue:h})})};return(0,a.jsx)(De.default,o()(o()({},p),{},{allowClear:!0,loading:d,labelInValue:!0,value:I,options:R,dropdownRender:function(i){var h=(0,a.jsx)(ne.Z,{spinning:d,children:i});return l?(0,a.jsx)(Ae.Z,o()({style:{padding:"0 8px"},size:"small",items:l==null?void 0:l.map(function(O){return{key:O.tabKey,label:O.tabLabel,children:h,disabled:d}}),activeKey:P,onChange:U},c)):h},notFoundContent:(0,a.jsx)(te.Z,{image:te.Z.PRESENTED_IMAGE_SIMPLE}),placeholder:"\u8BF7\u9009\u62E9",onChange:Y}))},Ue=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof n!="string")return t;try{return JSON.parse(n)}catch(s){return console.error("parse json error:",s),t}},Ze=function(){var n=window.location.href.split("?")[1],t=new URLSearchParams(n);return Object.fromEntries(t.entries())}},96110:function(W,g,e){e.r(g),e.d(g,{texts:function(){return Z}});var D=e(71122);const Z=[]},16122:function(W,g){g.Z=`import { TabsSelect, type TabsSelectProps } from '@louhaojie99/pro-components';
import React, { useState } from 'react';

const selectOptions: TabsSelectProps['options'] = [
  {
    tabKey: 'tab1',
    tabLabel: '\u7537\u751F',
    tabOptions: [
      {
        label: '\u5C0F\u9177',
        value: '1',
        item: {
          id: '1',
          description: '\u8FD9\u91CC\u53EF\u4EE5\u653E\u7F6E\u9009\u4E2D\u540E\u7684\u8DDF\u66F4\u591A\u4FE1\u606F...',
        },
      },
      {
        label: '\u5C0F\u5F20',
        value: '2',
        item: {
          id: '2',
          description: '\u8FD9\u91CC\u53EF\u4EE5\u653E\u7F6E\u9009\u4E2D\u540E\u7684\u8DDF\u66F4\u591A\u4FE1\u606F...',
        },
      },
    ],
  },
  {
    tabKey: 'tab2',
    tabLabel: '\u5973\u751F',
    tabOptions: [
      {
        label: '\u5C0F\u6A31',
        value: '3',
        item: {
          id: '3',
          description: '\u8FD9\u91CC\u53EF\u4EE5\u653E\u7F6E\u9009\u4E2D\u540E\u7684\u8DDF\u66F4\u591A\u4FE1\u606F...',
        },
      },
      {
        label: '\u5C0F\u5218',
        value: '4',
        item: {
          id: '4',
          description: '\u8FD9\u91CC\u53EF\u4EE5\u653E\u7F6E\u9009\u4E2D\u540E\u7684\u8DDF\u66F4\u591A\u4FE1\u606F...',
        },
      },
    ],
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState<TabsSelectProps['value']>({
    activeTab: 'tab1',
    selectValue: { value: '1' },
  });
  const [values, setValues] = useState<TabsSelectProps['value']>({
    activeTab: 'tab1',
    selectValue: [{ value: '1' }],
  });

  console.log('value: ', value);
  console.log('values: ', values);

  return (
    <div>
      <h4>\u5355\u9009\uFF1A</h4>
      <TabsSelect
        style={{ width: 400 }}
        value={value}
        options={selectOptions}
        onChange={setValue}
      />

      <h4>\u591A\u9009\uFF1A</h4>
      <TabsSelect
        style={{ width: 400 }}
        mode="multiple"
        value={values}
        options={selectOptions}
        onChange={setValues}
      />
    </div>
  );
};

export default App;
`}}]);
