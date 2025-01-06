"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[316],{32785:function(W,i,e){var S;e.r(i),e.d(i,{demos:function(){return A}});var o=e(90228),j=e.n(o),P=e(87999),H=e.n(P),I=e(75271),k=e(64328),h=e(84908),$=e(57228),A={"editabletable-demo-demos":{component:I.memo(I.lazy(function(){return e.e(794).then(e.bind(e,45709))})),asset:{type:"BLOCK",id:"editabletable-demo-demos",refAtomIds:["EditableTable"],dependencies:{"index.tsx":{type:"FILE",value:e(10833).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.2"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":h,antd:$,react:S||(S=e.t(I,2))},renderOpts:{compile:function(){var x=H()(j()().mark(function r(){var R,z=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(363).then(e.bind(e,71363));case 2:return p.abrupt("return",(R=p.sent).default.apply(R,z));case 3:case"end":return p.stop()}},r)}));function u(){return x.apply(this,arguments)}return u}()}}}},84908:function(W,i,e){e.r(i),e.d(i,{AsyncButton:function(){return _},DestructibleContainer:function(){return ae},EditableTable:function(){return Ae},IntlProvider:function(){return ye},LanguageEnum:function(){return M},OverlaySpin:function(){return re}});var S=e(26068),o=e.n(S),j=e(90228),P=e.n(j),H=e(87999),I=e.n(H),k=e(48305),h=e.n(k),$=e(67825),A=e.n($),x=e(27807),u=e(75271),r=e(52676),R=["onClick"],z=u.memo(function(a){var n=a.onClick,t=A()(a,R),s=(0,u.useState)(void 0),v=h()(s,2),m=v[0],c=v[1],g=function(){var d=I()(P()().mark(function f(C){return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(n){l.next=2;break}return l.abrupt("return");case 2:return l.prev=2,c(!0),l.next=6,n==null?void 0:n(C);case 6:return l.prev=6,c(!1),l.finish(6);case 9:case"end":return l.stop()}},f,null,[[2,,6,9]])}));return function(C){return d.apply(this,arguments)}}();return(0,r.jsx)(x.ZP,o()({loading:m,onClick:g},t))}),_=z,p=e(40023),ee=["spinning","background","tip"],J="overlay-spin",ne=function(n){var t=n.spinning,s=n.background,v=s===void 0?"#fff":s,m=n.tip,c=A()(n,ee);return t?(0,r.jsxs)("div",{className:"".concat(J,"-container"),style:{"--background":v},children:[(0,r.jsx)(p.Z,o()({className:J,spinning:t},c)),m&&(0,r.jsx)("div",{className:"".concat(J,"-tip"),children:m})]}):null},re=ne,te=function(n){return function(t){var s=t.visible,v=t.open,m=t.afterVisibleChange,c=t.afterOpenChange,g=t.afterClose,d=s!=null?s:v,f=m!=null?m:c,C=(0,u.useState)(d),y=h()(C,2),l=y[0],F=y[1],Q=(0,u.useState)(d===!1),N=h()(Q,2),b=N[0],D=N[1],U=function(B){f==null||f(B),B||D(!0)},E=function(){g==null||g(),D(!0)};return(0,u.useEffect)(function(){d?(D(!1),setTimeout(function(){return F(d)},0)):F(d)},[d]),b?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(n,o()(o()({},t),{},{open:l,afterOpenChange:U,afterClose:E}))}},ae=te,le=e(69417),oe=e(67572),M=function(a){return a.ZH_CN="zh-CN",a.EN_US="en-US",a}({}),se=e(82092),w=e.n(se),de=e(66262),ie=e(20973),ue=e(62230),me=e(38001),ce={welcome:"hello world"},ve=ce,fe={welcome:"\u4F60\u597D\u4E16\u754C"},pe=fe,q=function(n){var t=w()(w()({},M.ZH_CN,{message:pe,antd:ie.Z}),M.EN_US,{message:ve,antd:de.Z});return t[n]},he=(0,ue.Sn)(),ge=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M.ZH_CN;return(0,me.d)({locale:n,messages:q(n).message},he)},Ce=u.memo(function(a){var n=a.locale,t=a.children,s=ge(n);return(0,r.jsx)(oe.zt,{value:s,children:(0,r.jsx)(le.ZP,{locale:q(n).antd,children:t})})}),ye=Ce,be=e(15558),Ee=e.n(be),Pe=e(29369),Ie=e(72149),Te=e(72774),Se=e(63801),G=e(42748),De=e(77995),Oe=Se.Z.Link,je=function(n){var t=n.className,s=n.style,v=n.bordered,m=v===void 0?!1:v,c=n.columns,g=n.formRef,d=n.options,f=d!=null?d:{},C=f.onlyPreview,y=C===void 0?!1:C,l=f.hideAdd,F=l===void 0?!1:l,Q=G.Z.useForm(),N=h()(Q,1),b=N[0],D=(0,Ie.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),U=h()(D,2),E=U[0],X=U[1];(0,u.useEffect)(function(){b.setFieldsValue({items:E!=null?E:[]})},[E]),(0,u.useImperativeHandle)(g,function(){return{form:b}});var B=(0,Te.Z)(function(Z){var T=Z.remove;return[].concat(Ee()(c!=null?c:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(L,Y){return(0,r.jsx)(Oe,{disabled:!!y,onClick:function(){return T(Y.key)},children:"\u5220\u9664"})}}])}),xe=function(T){X(T)};return(0,r.jsx)(G.Z,{className:t,form:b,style:o()({},s),autoComplete:"off",component:!1,disabled:!!y,initialValues:{items:E},onValuesChange:function(T,O){var L=O.items;xe(L)},children:(0,r.jsx)(G.Z.List,{name:"items",children:function(T,O){var L=O.add,Y=O.remove;return(0,r.jsx)(De.Z,o()(o()({rowKey:"key",bordered:m,dataSource:T.map(function(V){return o()(o()({},b.getFieldValue(["items",V.key])),{},{key:V.name})}),columns:B({remove:Y})},!F&&{footer:function(){return(0,r.jsx)(x.ZP,{block:!0,icon:(0,r.jsx)(Pe.Z,{}),type:"dashed",disabled:!!y,onClick:I()(P()().mark(function Re(){return P()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,b.validateFields();case 2:L();case 3:case"end":return K.stop()}},Re)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},Ae=je},71485:function(W,i,e){e.r(i),e.d(i,{texts:function(){return o}});var S=e(64328);const o=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},10833:function(W,i){i.Z=`import type {\r
  EditableTableProps,\r
  EditableTableRef,\r
} from '@louhaojie99/pro-components';\r
import { EditableTable } from '@louhaojie99/pro-components';\r
import { Button, Divider, Form, Input, Select, Space, Typography } from 'antd';\r
import React, { useRef, useState } from 'react';\r
\r
const { Title, Paragraph } = Typography;\r
\r
type StudentInfo = {\r
  name: string;\r
  age: number;\r
  gender: 'male' | 'female';\r
};\r
\r
const App: React.FC = () => {\r
  const formRef = useRef<EditableTableRef<StudentInfo[]>>(null);\r
\r
  const [dataSource, setDataSource] = useState<StudentInfo[]>([\r
    { name: '\u5C0F\u9177', age: 20, gender: 'male' },\r
    { name: '\u5C0F\u6A31', age: 18, gender: 'female' },\r
  ]);\r
\r
  const columns: EditableTableProps<StudentInfo>['columns'] = [\r
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
        <EditableTable<StudentInfo>\r
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
          await formRef.current?.form?.validateFields();\r
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
