"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[96],{7810:function(H,C,e){var D;e.r(C),e.d(C,{demos:function(){return O}});var L=e(90228),l=e.n(L),J=e(87999),I=e.n(J),R=e(75271),z=e(71122),G=e(43727),O={"tabsselect-demo-demos":{component:R.memo(R.lazy(function(){return e.e(724).then(e.bind(e,64665))})),asset:{type:"BLOCK",id:"tabsselect-demo-demos",refAtomIds:["TabsSelect"],dependencies:{"index.tsx":{type:"FILE",value:e(16122).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":G,react:D||(D=e.t(R,2))},renderOpts:{compile:function(){var Q=I()(l()().mark(function F(){var v,t=arguments;return l()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(652).then(e.bind(e,43652));case 2:return E.abrupt("return",(v=E.sent).default.apply(v,t));case 3:case"end":return E.stop()}},F)}));function K(){return Q.apply(this,arguments)}return K}()}}}},43727:function(H,C,e){e.r(C),e.d(C,{AsyncButton:function(){return E},DestructibleContainer:function(){return re},EditableTable:function(){return ve},IntlProvider:function(){return Ve},LanguageEnum:function(){return $},OverlaySpin:function(){return De},TabsSelect:function(){return Ie},utils:function(){return D}});var D={};e.r(D),e.d(D,{getUrlSearchParams:function(){return Ze},parseJson:function(){return Ue}});var L=e(26068),l=e.n(L),J=e(90228),I=e.n(J),R=e(87999),z=e.n(R),G=e(48305),O=e.n(G),Q=e(67825),K=e.n(Q),F=e(27807),v=e(75271),t=e(52676),w=["onClick"],E=v.memo(function(i){var n=i.onClick,a=K()(i,w),o=(0,v.useState)(void 0),h=O()(o,2),u=h[0],r=h[1],y=function(){var d=z()(I()().mark(function p(P){var m;return I()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(!n||typeof n!="function")){s.next=2;break}return s.abrupt("return");case 2:if(m=n(P),!(m instanceof Promise)){s.next=11;break}return s.prev=4,r(!0),s.next=8,m;case 8:return s.prev=8,r(!1),s.finish(8);case 11:case"end":return s.stop()}},p,null,[[4,,8,11]])}));return function(P){return d.apply(this,arguments)}}();return(0,t.jsx)(F.ZP,l()({loading:u,onClick:y},a))}),re=function(n){return function(a){var o=a.visible,h=a.open,u=a.afterVisibleChange,r=a.afterOpenChange,y=a.afterClose,d=o!=null?o:h,p=u!=null?u:r,P=(0,v.useState)(d),m=O()(P,2),A=m[0],s=m[1],M=(0,v.useState)(d===!1),x=O()(M,2),b=x[0],V=x[1],S=function(Z){p==null||p(Z),Z||V(!0)},T=function(){y==null||y(),V(!0)};return(0,v.useEffect)(function(){d?(V(!1),setTimeout(function(){return s(d)},0)):s(d)},[d]),b?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(n,l()(l()({},a),{},{open:A,afterOpenChange:S,afterClose:T}))}},le=e(15558),oe=e.n(le),se=e(68474),_=e(72149),ie=e(72774),ue=e(17857),X=e(90663),de=e(98267),ce=ue.Z.Link,ve=function(n){var a=n.className,o=n.style,h=n.bordered,u=h===void 0?!1:h,r=n.columns,y=n.formRef,d=n.options,p=d!=null?d:{},P=p.onlyPreview,m=P===void 0?!1:P,A=p.hideAdd,s=A===void 0?!1:A,M=X.Z.useForm(),x=O()(M,1),b=x[0],V=(0,_.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),S=O()(V,2),T=S[0],U=S[1];(0,v.useEffect)(function(){b.setFieldsValue({items:T!=null?T:[]})},[T]),(0,v.useImperativeHandle)(y,function(){return b});var Z=(0,ie.Z)(function(N){var f=N.remove;return[].concat(oe()(r!=null?r:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(g,j){return(0,t.jsx)(ce,{disabled:!!m,onClick:function(){return f(j.key)},children:"\u5220\u9664"})}}])}),k=function(f){U(f)};return(0,t.jsx)(X.Z,{className:a,form:b,style:l()({},o),autoComplete:"off",component:!1,disabled:!!m,initialValues:{items:T},onValuesChange:function(f,c){var g=c.items;k(g)},children:(0,t.jsx)(X.Z.List,{name:"items",children:function(f,c){var g=c.add,j=c.remove;return(0,t.jsx)(de.Z,l()(l()({rowKey:"key",bordered:u,dataSource:f.map(function(B){return l()(l()({},b.getFieldValue(["items",B.key])),{},{key:B.name})}),columns:Z({remove:j})},!s&&{footer:function(){return(0,t.jsx)(F.ZP,{block:!0,icon:(0,t.jsx)(se.Z,{}),type:"dashed",disabled:!!m,onClick:z()(I()().mark(function Ne(){return I()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,b.validateFields();case 2:g();case 3:case"end":return W.stop()}},Ne)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},me=e(69417),fe=e(35862),$=function(i){return i.ZH_CN="zh-CN",i.EN_US="en-US",i}({}),he=e(82092),q=e.n(he),pe=e(66262),ge=e(21563),Ce=e(83144),be=e(78843),ye={welcome:"hello world"},Pe=ye,Se={welcome:"\u4F60\u597D\u4E16\u754C"},Te=Se,ee=function(n){var a=q()(q()({},$.ZH_CN,{message:Te,antd:ge.Z}),$.EN_US,{message:Pe,antd:pe.Z});return a[n]},Oe=(0,Ce.Sn)(),Ee=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$.ZH_CN;return(0,be.d)({locale:n,messages:ee(n).message},Oe)},Ve=v.memo(function(i){var n=i.locale,a=i.children,o=Ee(n);return(0,t.jsx)(fe.zt,{value:o,children:(0,t.jsx)(me.ZP,{locale:ee(n).antd,children:a})})}),ne=e(40023),je=["spinning","background","tip"],Y="overlay-spin",De=function(n){var a=n.spinning,o=n.background,h=o===void 0?"#fff":o,u=n.tip,r=K()(n,je);return a?(0,t.jsxs)("div",{className:"".concat(Y,"-container"),style:{"--background":h},children:[(0,t.jsx)(ne.Z,l()({className:Y,spinning:a},r)),u&&(0,t.jsx)("div",{className:"".concat(Y,"-tip"),children:u})]}):null},Ae=e(44675),Me=e(95627),ae=e(44763),te=e(32699),xe=["loading","options","defaultValue","tabsProps"],Ie=function(n){var a,o,h=n.loading,u=h===void 0?!1:h,r=n.options,y=n.defaultValue,d=n.tabsProps,p=K()(n,xe),P=(0,te.omit)(p,["value","onChange"]),m=(a=r==null||(o=r[0])===null||o===void 0?void 0:o.tabKey)!==null&&a!==void 0?a:"",A=(0,_.Z)(n,{defaultValue:y||{activeTab:m,selectValue:void 0},defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),s=O()(A,2),M=s[0],x=s[1],b=M!=null?M:{},V=b.activeTab,S=V===void 0?m:V,T=b.selectValue,U=(0,v.useMemo)(function(){return(0,te.keyBy)(r,"tabKey")},[r]),Z=(0,v.useMemo)(function(){var f,c;return S?(f=(c=U[S])===null||c===void 0?void 0:c.tabOptions)!==null&&f!==void 0?f:[]:[]},[U,S]),k=function(c){x(function(g){return l()(l()({},g),{},{activeTab:c})})},N=function(c,g){x(function(j){return l()(l()({},j),{},{selectValue:g})})};return(0,t.jsx)(Ae.default,l()({allowClear:!0,loading:u,labelInValue:!0,value:T,options:Z,dropdownRender:function(c){var g=(0,t.jsx)(ne.Z,{spinning:u,children:c});return r?(0,t.jsx)(Me.Z,l()({style:{padding:"0 8px"},size:"small",items:r==null?void 0:r.map(function(j){return{key:j.tabKey,label:j.tabLabel,children:g,disabled:u}}),activeKey:S,onChange:k},d)):g},notFoundContent:(0,t.jsx)(ae.Z,{image:ae.Z.PRESENTED_IMAGE_SIMPLE}),placeholder:"\u8BF7\u9009\u62E9",onChange:N},P))},Ue=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof n!="string")return a;try{return JSON.parse(n)}catch(o){return console.error("parse json error:",o),a}},Ze=function(){var n=window.location.href.split("?")[1],a=new URLSearchParams(n);return Object.fromEntries(a.entries())}},96110:function(H,C,e){e.r(C),e.d(C,{texts:function(){return L}});var D=e(71122);const L=[]},16122:function(H,C){C.Z=`import { TabsSelect, type TabsSelectProps } from '@louhaojie99/pro-components';\r
import React, { useState } from 'react';\r
\r
const selectOptions: TabsSelectProps['options'] = [\r
  {\r
    tabKey: 'fanren',\r
    tabLabel: '\u51E1\u4EBA\u4FEE\u4ED9\u4F20',\r
    tabOptions: [\r
      {\r
        label: '\u97E9\u7ACB\uFF08\u97E9\u8DD1\u8DD1\uFF09',\r
        value: '1',\r
        item: {\r
          id: '1',\r
          description: '\u4E3B\u89D2\uFF0C\u7075\u6839\u666E\u901A\u4F46\u5FC3\u667A\u575A\u97E7\uFF0C\u64C5\u957F\u70BC\u4E39\u3001\u9635\u6CD5\uFF0C\u4EBA\u79F0"\u97E9\u8001\u9B54"',\r
          cultivation: '\u5927\u4E58\u671F',\r
          specialSkills: ['\u9752\u5143\u5251\u8BC0', '\u7384\u5929\u65A9\u7075\u5251', '\u65F6\u95F4\u6CD5\u5219'],\r
          nickname: '\u97E9\u8DD1\u8DD1',\r
        },\r
      },\r
      {\r
        label: '\u5357\u5BAB\u5A49',\r
        value: '2',\r
        item: {\r
          id: '2',\r
          description: '\u97E9\u7ACB\u9053\u4FA3\uFF0C\u63A9\u6708\u5B97\u5929\u624D\u4FEE\u58EB\uFF0C\u51B0\u7075\u6839',\r
          cultivation: '\u5143\u5A74\u671F',\r
          specialSkills: ['\u51B0\u7CFB\u795E\u901A', '\u53CC\u4FEE\u529F\u6CD5'],\r
          nickname: '\u5357\u5BAB\u4ED9\u5B50',\r
        },\r
      },\r
    ],\r
  },\r
  {\r
    tabKey: 'xianni',\r
    tabLabel: '\u4ED9\u9006',\r
    tabOptions: [\r
      {\r
        label: '\u738B\u6797',\r
        value: '4',\r
        item: {\r
          id: '4',\r
          description: '\u4E3B\u89D2\uFF0C\u56E0\u5BB6\u65CF\u88AB\u706D\u8E0F\u4E0A\u4FEE\u4ED9\u8DEF\uFF0C\u6027\u683C\u51B7\u9177\u679C\u65AD',\r
          cultivation: '\u8E0F\u5929\u5883',\r
          specialSkills: ['\u6740\u622E\u4ED9\u8BC0', '\u53E4\u795E\u4E4B\u4F53', '\u56E0\u679C\u4E4B\u9053'],\r
          nickname: '\u738B\u8001\u9B54',\r
        },\r
      },\r
      {\r
        label: '\u674E\u6155\u5A49',\r
        value: '5',\r
        item: {\r
          id: '5',\r
          description: '\u738B\u6797\u631A\u7231\uFF0C\u6E29\u67D4\u5584\u826F\uFF0C\u56E0\u7279\u6B8A\u4F53\u8D28\u88AB\u5404\u65B9\u89CA\u89CE',\r
          cultivation: '\u5316\u795E\u671F',\r
          specialSkills: ['\u70BC\u4E39\u672F'],\r
          nickname: '\u5A49\u513F',\r
        },\r
      },\r
    ],\r
  },\r
];\r
\r
const App: React.FC = () => {\r
  const [value, setValue] = useState<TabsSelectProps['value']>({\r
    activeTab: 'fanren',\r
    selectValue: { value: '1' },\r
  });\r
  const [values, setValues] = useState<TabsSelectProps['value']>({\r
    activeTab: 'fanren',\r
    selectValue: [{ value: '1' }],\r
  });\r
\r
  console.log('value: ', value);\r
  console.log('values: ', values);\r
\r
  return (\r
    <div>\r
      <h4>\u5355\u9009\uFF1A</h4>\r
      <TabsSelect\r
        style={{ width: 400 }}\r
        value={value}\r
        options={selectOptions}\r
        onChange={setValue}\r
      />\r
\r
      <h4>\u591A\u9009\uFF1A</h4>\r
      <TabsSelect\r
        style={{ width: 400 }}\r
        mode="multiple"\r
        value={values}\r
        options={selectOptions}\r
        onChange={setValues}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default App;\r
`}}]);
