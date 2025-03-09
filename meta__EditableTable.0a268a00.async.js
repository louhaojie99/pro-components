"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[316],{32365:function(K,u,e){var g;e.r(u),e.d(u,{demos:function(){return $}});var S=e(90228),s=e.n(S),W=e(87999),I=e.n(W),D=e(75271),J=e(23010),H=e(16458),y=e(57228),$={"editabletable-demo-demos":{component:D.memo(D.lazy(function(){return e.e(794).then(e.bind(e,31765))})),asset:{type:"BLOCK",id:"editabletable-demo-demos",refAtomIds:["EditableTable"],dependencies:{"index.tsx":{type:"FILE",value:e(47838).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.4"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":H,antd:y,react:g||(g=e.t(D,2))},renderOpts:{compile:function(){var A=I()(s()().mark(function d(){var a,z=arguments;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(837).then(e.bind(e,57837));case 2:return h.abrupt("return",(a=h.sent).default.apply(a,z));case 3:case"end":return h.stop()}},d)}));function R(){return A.apply(this,arguments)}return R}()}}}},16458:function(K,u,e){e.r(u),e.d(u,{AsyncButton:function(){return w},DestructibleContainer:function(){return h},EditableTable:function(){return ie},IntlProvider:function(){return Ee},LanguageEnum:function(){return x},OverlaySpin:function(){return Se},utils:function(){return g}});var g={};e.r(g),e.d(g,{getUrlSearchParams:function(){return Oe},parseJson:function(){return De}});var S=e(26068),s=e.n(S),W=e(90228),I=e.n(W),D=e(87999),J=e.n(D),H=e(48305),y=e.n(H),$=e(67825),A=e.n($),R=e(27807),d=e(75271),a=e(52676),z=["onClick"],w=d.memo(function(t){var n=t.onClick,r=A()(t,z),l=(0,d.useState)(void 0),v=y()(l,2),m=v[0],c=v[1],C=function(){var i=J()(I()().mark(function p(P){var f;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(!n||typeof n!="function")){o.next=2;break}return o.abrupt("return");case 2:if(f=n(P),!(f instanceof Promise)){o.next=11;break}return o.prev=4,c(!0),o.next=8,f;case 8:return o.prev=8,c(!1),o.finish(8);case 11:case"end":return o.stop()}},p,null,[[4,,8,11]])}));return function(P){return i.apply(this,arguments)}}();return(0,a.jsx)(R.ZP,s()({loading:m,onClick:C},r))}),h=function(n){return function(r){var l=r.visible,v=r.open,m=r.afterVisibleChange,c=r.afterOpenChange,C=r.afterClose,i=l!=null?l:v,p=m!=null?m:c,P=(0,d.useState)(i),f=y()(P,2),O=f[0],o=f[1],X=(0,d.useState)(i===!1),M=y()(X,2),b=M[0],j=M[1],F=function(N){p==null||p(N),N||j(!0)},E=function(){C==null||C(),j(!0)};return(0,d.useEffect)(function(){i?(j(!1),setTimeout(function(){return o(i)},0)):o(i)},[i]),b?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(n,s()(s()({},r),{},{open:O,afterOpenChange:F,afterClose:E}))}},ee=e(15558),ne=e.n(ee),re=e(29369),ae=e(72149),te=e(72774),oe=e(63801),G=e(42748),le=e(77995),se=oe.Z.Link,ie=function(n){var r=n.className,l=n.style,v=n.bordered,m=v===void 0?!1:v,c=n.columns,C=n.formRef,i=n.options,p=i!=null?i:{},P=p.onlyPreview,f=P===void 0?!1:P,O=p.hideAdd,o=O===void 0?!1:O,X=G.Z.useForm(),M=y()(X,1),b=M[0],j=(0,ae.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),F=y()(j,2),E=F[0],Y=F[1];(0,d.useEffect)(function(){b.setFieldsValue({items:E!=null?E:[]})},[E]),(0,d.useImperativeHandle)(C,function(){return b});var N=(0,te.Z)(function(L){var T=L.remove;return[].concat(ne()(c!=null?c:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(V,k){return(0,a.jsx)(se,{disabled:!!f,onClick:function(){return T(k.key)},children:"\u5220\u9664"})}}])}),je=function(T){Y(T)};return(0,a.jsx)(G.Z,{className:r,form:b,style:s()({},l),autoComplete:"off",component:!1,disabled:!!f,initialValues:{items:E},onValuesChange:function(T,U){var V=U.items;je(V)},children:(0,a.jsx)(G.Z.List,{name:"items",children:function(T,U){var V=U.add,k=U.remove;return(0,a.jsx)(le.Z,s()(s()({rowKey:"key",bordered:m,dataSource:T.map(function(Z){return s()(s()({},b.getFieldValue(["items",Z.key])),{},{key:Z.name})}),columns:N({remove:k})},!o&&{footer:function(){return(0,a.jsx)(R.ZP,{block:!0,icon:(0,a.jsx)(re.Z,{}),type:"dashed",disabled:!!f,onClick:J()(I()().mark(function Ue(){return I()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,b.validateFields();case 2:V();case 3:case"end":return B.stop()}},Ue)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},ue=e(69417),de=e(35862),x=function(t){return t.ZH_CN="zh-CN",t.EN_US="en-US",t}({}),me=e(82092),_=e.n(me),ce=e(66262),fe=e(20973),ve=e(83144),pe=e(78843),he={welcome:"hello world"},ge=he,ye={welcome:"\u4F60\u597D\u4E16\u754C"},Ce=ye,q=function(n){var r=_()(_()({},x.ZH_CN,{message:Ce,antd:fe.Z}),x.EN_US,{message:ge,antd:ce.Z});return r[n]},Pe=(0,ve.Sn)(),be=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x.ZH_CN;return(0,pe.d)({locale:n,messages:q(n).message},Pe)},Ee=d.memo(function(t){var n=t.locale,r=t.children,l=be(n);return(0,a.jsx)(de.zt,{value:l,children:(0,a.jsx)(ue.ZP,{locale:q(n).antd,children:r})})}),Ie=e(40023),Te=["spinning","background","tip"],Q="overlay-spin",Se=function(n){var r=n.spinning,l=n.background,v=l===void 0?"#fff":l,m=n.tip,c=A()(n,Te);return r?(0,a.jsxs)("div",{className:"".concat(Q,"-container"),style:{"--background":v},children:[(0,a.jsx)(Ie.Z,s()({className:Q,spinning:r},c)),m&&(0,a.jsx)("div",{className:"".concat(Q,"-tip"),children:m})]}):null},De=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof n!="string")return r;try{return JSON.parse(n)}catch(l){return console.error("parse json error:",l),r}},Oe=function(){var n=window.location.href.split("?")[1],r=new URLSearchParams(n);return Object.fromEntries(r.entries())}},88654:function(K,u,e){e.r(u),e.d(u,{texts:function(){return S}});var g=e(23010);const S=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},47838:function(K,u){u.Z=`import type {\r
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
