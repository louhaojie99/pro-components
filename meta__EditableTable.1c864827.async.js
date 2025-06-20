"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[316],{85831:function(J,C,e){var j;e.r(C),e.d(C,{demos:function(){return Q}});var N=e(90228),l=e.n(N),H=e(87999),A=e.n(H),Z=e(75271),z=e(32923),G=e(43727),S=e(33628),Q={"editabletable-demo-demos":{component:Z.memo(Z.lazy(function(){return e.e(794).then(e.bind(e,47286))})),asset:{type:"BLOCK",id:"editabletable-demo-demos",refAtomIds:["EditableTable"],dependencies:{"index.tsx":{type:"FILE",value:e(61330).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.4"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":G,antd:S,react:j||(j=e.t(Z,2))},renderOpts:{compile:function(){var L=A()(l()().mark(function f(){var a,X=arguments;return l()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,e.e(652).then(e.bind(e,43652));case 2:return I.abrupt("return",(a=I.sent).default.apply(a,X));case 3:case"end":return I.stop()}},f)}));function B(){return L.apply(this,arguments)}return B}()}}}},43727:function(J,C,e){e.r(C),e.d(C,{AsyncButton:function(){return _},DestructibleContainer:function(){return I},EditableTable:function(){return me},IntlProvider:function(){return Oe},LanguageEnum:function(){return K},OverlaySpin:function(){return je},TabsSelect:function(){return Ae},utils:function(){return j}});var j={};e.r(j),e.d(j,{getUrlSearchParams:function(){return Ue},parseJson:function(){return Re}});var N=e(26068),l=e.n(N),H=e(90228),A=e.n(H),Z=e(87999),z=e.n(Z),G=e(48305),S=e.n(G),Q=e(67825),L=e.n(Q),B=e(27807),f=e(75271),a=e(52676),X=["onClick"],_=f.memo(function(u){var n=u.onClick,r=L()(u,X),o=(0,f.useState)(void 0),p=S()(o,2),i=p[0],t=p[1],b=function(){var d=z()(A()().mark(function g(P){var m;return A()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(!n||typeof n!="function")){s.next=2;break}return s.abrupt("return");case 2:if(m=n(P),!(m instanceof Promise)){s.next=11;break}return s.prev=4,t(!0),s.next=8,m;case 8:return s.prev=8,t(!1),s.finish(8);case 11:case"end":return s.stop()}},g,null,[[4,,8,11]])}));return function(P){return d.apply(this,arguments)}}();return(0,a.jsx)(B.ZP,l()({loading:i,onClick:b},r))}),I=function(n){return function(r){var o=r.visible,p=r.open,i=r.afterVisibleChange,t=r.afterOpenChange,b=r.afterClose,d=o!=null?o:p,g=i!=null?i:t,P=(0,f.useState)(d),m=S()(P,2),x=m[0],s=m[1],M=(0,f.useState)(d===!1),V=S()(M,2),y=V[0],O=V[1],E=function(U){g==null||g(U),U||O(!0)},T=function(){b==null||b(),O(!0)};return(0,f.useEffect)(function(){d?(O(!1),setTimeout(function(){return s(d)},0)):s(d)},[d]),y?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(n,l()(l()({},r),{},{open:x,afterOpenChange:E,afterClose:T}))}},le=e(15558),oe=e.n(le),se=e(68474),q=e(72149),ue=e(72774),ie=e(17857),Y=e(90663),de=e(98267),ce=ie.Z.Link,me=function(n){var r=n.className,o=n.style,p=n.bordered,i=p===void 0?!1:p,t=n.columns,b=n.formRef,d=n.options,g=d!=null?d:{},P=g.onlyPreview,m=P===void 0?!1:P,x=g.hideAdd,s=x===void 0?!1:x,M=Y.Z.useForm(),V=S()(M,1),y=V[0],O=(0,q.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),E=S()(O,2),T=E[0],R=E[1];(0,f.useEffect)(function(){y.setFieldsValue({items:T!=null?T:[]})},[T]),(0,f.useImperativeHandle)(b,function(){return y});var U=(0,ue.Z)(function(F){var v=F.remove;return[].concat(oe()(t!=null?t:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(h,D){return(0,a.jsx)(ce,{disabled:!!m,onClick:function(){return v(D.key)},children:"\u5220\u9664"})}}])}),w=function(v){R(v)};return(0,a.jsx)(Y.Z,{className:r,form:y,style:l()({},o),autoComplete:"off",component:!1,disabled:!!m,initialValues:{items:T},onValuesChange:function(v,c){var h=c.items;w(h)},children:(0,a.jsx)(Y.Z.List,{name:"items",children:function(v,c){var h=c.add,D=c.remove;return(0,a.jsx)(de.Z,l()(l()({rowKey:"key",bordered:i,dataSource:v.map(function($){return l()(l()({},y.getFieldValue(["items",$.key])),{},{key:$.name})}),columns:U({remove:D})},!s&&{footer:function(){return(0,a.jsx)(B.ZP,{block:!0,icon:(0,a.jsx)(se.Z,{}),type:"dashed",disabled:!!m,onClick:z()(A()().mark(function Fe(){return A()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,y.validateFields();case 2:h();case 3:case"end":return W.stop()}},Fe)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},ve=e(69417),fe=e(35862),K=function(u){return u.ZH_CN="zh-CN",u.EN_US="en-US",u}({}),pe=e(82092),ee=e.n(pe),ge=e(66262),he=e(21563),Ce=e(83144),ye=e(78843),be={welcome:"hello world"},Pe=be,Ee={welcome:"\u4F60\u597D\u4E16\u754C"},Te=Ee,ne=function(n){var r=ee()(ee()({},K.ZH_CN,{message:Te,antd:he.Z}),K.EN_US,{message:Pe,antd:ge.Z});return r[n]},Se=(0,Ce.Sn)(),Ie=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:K.ZH_CN;return(0,ye.d)({locale:n,messages:ne(n).message},Se)},Oe=f.memo(function(u){var n=u.locale,r=u.children,o=Ie(n);return(0,a.jsx)(fe.zt,{value:o,children:(0,a.jsx)(ve.ZP,{locale:ne(n).antd,children:r})})}),re=e(40023),De=["spinning","background","tip"],k="overlay-spin",je=function(n){var r=n.spinning,o=n.background,p=o===void 0?"#fff":o,i=n.tip,t=L()(n,De);return r?(0,a.jsxs)("div",{className:"".concat(k,"-container"),style:{"--background":p},children:[(0,a.jsx)(re.Z,l()({className:k,spinning:r},t)),i&&(0,a.jsx)("div",{className:"".concat(k,"-tip"),children:i})]}):null},xe=e(44675),Me=e(95627),ae=e(44763),te=e(32699),Ve=["loading","options","defaultValue","tabsProps"],Ae=function(n){var r,o,p=n.loading,i=p===void 0?!1:p,t=n.options,b=n.defaultValue,d=n.tabsProps,g=L()(n,Ve),P=(0,te.omit)(g,["value","onChange"]),m=(r=t==null||(o=t[0])===null||o===void 0?void 0:o.tabKey)!==null&&r!==void 0?r:"",x=(0,q.Z)(n,{defaultValue:b||{activeTab:m,selectValue:void 0},defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),s=S()(x,2),M=s[0],V=s[1],y=M!=null?M:{},O=y.activeTab,E=O===void 0?m:O,T=y.selectValue,R=(0,f.useMemo)(function(){return(0,te.keyBy)(t,"tabKey")},[t]),U=(0,f.useMemo)(function(){var v,c;return E?(v=(c=R[E])===null||c===void 0?void 0:c.tabOptions)!==null&&v!==void 0?v:[]:[]},[R,E]),w=function(c){V(function(h){return l()(l()({},h),{},{activeTab:c})})},F=function(c,h){V(function(D){return l()(l()({},D),{},{selectValue:h})})};return(0,a.jsx)(xe.default,l()({allowClear:!0,loading:i,labelInValue:!0,value:T,options:U,dropdownRender:function(c){var h=(0,a.jsx)(re.Z,{spinning:i,children:c});return t?(0,a.jsx)(Me.Z,l()({style:{padding:"0 8px"},size:"small",items:t==null?void 0:t.map(function(D){return{key:D.tabKey,label:D.tabLabel,children:h,disabled:i}}),activeKey:E,onChange:w},d)):h},notFoundContent:(0,a.jsx)(ae.Z,{image:ae.Z.PRESENTED_IMAGE_SIMPLE}),placeholder:"\u8BF7\u9009\u62E9",onChange:F},P))},Re=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof n!="string")return r;try{return JSON.parse(n)}catch(o){return console.error("parse json error:",o),r}},Ue=function(){var n=window.location.href.split("?")[1],r=new URLSearchParams(n);return Object.fromEntries(r.entries())}},25527:function(J,C,e){e.r(C),e.d(C,{texts:function(){return N}});var j=e(32923);const N=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},61330:function(J,C){C.Z=`import type {\r
  EditableTableProps,\r
  EditableTableRef,\r
} from '@louhaojie99/pro-components';\r
import { EditableTable } from '@louhaojie99/pro-components';\r
import { Button, Divider, Form, Input, Select, Space, Typography } from 'antd';\r
import React, { useRef, useState } from 'react';\r
\r
const { Title, Paragraph } = Typography;\r
\r
type UserInfo = {\r
  name: string;\r
  age: number;\r
  gender: 'male' | 'female';\r
};\r
\r
const App: React.FC = () => {\r
  const formRef = useRef<EditableTableRef<UserInfo>>(null);\r
\r
  const [dataSource, setDataSource] = useState<UserInfo[]>([\r
    { name: '\u5C0F\u9177', age: 20, gender: 'male' },\r
    { name: '\u5C0F\u6A31', age: 18, gender: 'female' },\r
  ]);\r
\r
  const columns: EditableTableProps<UserInfo>['columns'] = [\r
    {\r
      title: '\u59D3\u540D',\r
      dataIndex: 'name',\r
      key: 'name',\r
      render: (_, record) => {\r
        return (\r
          <Form.Item\r
            style={{ padding: 0, margin: 0 }}\r
            name={[record.key, 'name']}\r
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165' }]}\r
          >\r
            <Input allowClear placeholder="\u8BF7\u8F93\u5165" />\r
          </Form.Item>\r
        );\r
      },\r
    },\r
    {\r
      title: '\u5E74\u9F84',\r
      dataIndex: 'age',\r
      key: 'age',\r
      render: (_, record) => {\r
        return (\r
          <Form.Item\r
            style={{ padding: 0, margin: 0 }}\r
            name={[record.key, 'age']}\r
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165' }]}\r
          >\r
            <Input allowClear placeholder="\u8BF7\u8F93\u5165" />\r
          </Form.Item>\r
        );\r
      },\r
    },\r
    {\r
      title: '\u6027\u522B',\r
      dataIndex: 'gender',\r
      key: 'gender',\r
      render: (_, record) => {\r
        return (\r
          <Form.Item\r
            style={{ padding: 0, margin: 0 }}\r
            name={[record.key, 'gender']}\r
            rules={[{ required: true, message: '\u8BF7\u9009\u62E9' }]}\r
          >\r
            <Select\r
              allowClear\r
              options={[\r
                { label: '\u7537\u751F', value: 'male' },\r
                { label: '\u5973\u751F', value: 'female' },\r
              ]}\r
              placeholder="\u8BF7\u9009\u62E9"\r
            />\r
          </Form.Item>\r
        );\r
      },\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Space style={{ width: '100%' }} direction="vertical">\r
        <Title level={5}>\u5B66\u751F\u5217\u8868</Title>\r
\r
        <EditableTable<UserInfo>\r
          formRef={formRef}\r
          columns={columns}\r
          value={dataSource}\r
          onChange={setDataSource}\r
        />\r
      </Space>\r
\r
      <Title level={5}>\u6570\u636E\u9884\u89C8</Title>\r
      <Typography>\r
        <pre>{JSON.stringify(dataSource, null, 2)}</pre>\r
      </Typography>\r
\r
      <Divider />\r
\r
      <Paragraph>\u5982\u679C\u60A8\u60F3\u8C03\u7528\u8868\u5355\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7 ref \u6765\u5B9E\u73B0\uFF1A</Paragraph>\r
      <Button\r
        type="primary"\r
        onClick={async () => {\r
          await formRef.current?.validateFields();\r
          console.log('\u63D0\u4EA4\u7684\u6570\u636E: ', dataSource);\r
        }}\r
      >\r
        \u8868\u5355\u9A8C\u8BC1\r
      </Button>\r
    </>\r
  );\r
};\r
\r
export default App;\r
`}}]);
