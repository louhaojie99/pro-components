"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[316],{32365:function(W,d,e){var D;e.r(d),e.d(d,{demos:function(){return A}});var o=e(90228),j=e.n(o),P=e(87999),H=e.n(P),I=e(75271),k=e(23010),h=e(85722),$=e(57228),A={"editabletable-demo-demos":{component:I.memo(I.lazy(function(){return e.e(794).then(e.bind(e,31765))})),asset:{type:"BLOCK",id:"editabletable-demo-demos",refAtomIds:["EditableTable"],dependencies:{"index.tsx":{type:"FILE",value:e(47838).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":h,antd:$,react:D||(D=e.t(I,2))},renderOpts:{compile:function(){var x=H()(j()().mark(function a(){var R,z=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(837).then(e.bind(e,57837));case 2:return p.abrupt("return",(R=p.sent).default.apply(R,z));case 3:case"end":return p.stop()}},a)}));function u(){return x.apply(this,arguments)}return u}()}}}},85722:function(W,d,e){e.r(d),e.d(d,{AsyncButton:function(){return _},DestructibleContainer:function(){return re},EditableTable:function(){return Ae},IntlProvider:function(){return ye},LanguageEnum:function(){return U},OverlaySpin:function(){return ae}});var D=e(26068),o=e.n(D),j=e(90228),P=e.n(j),H=e(87999),I=e.n(H),k=e(48305),h=e.n(k),$=e(67825),A=e.n($),x=e(27807),u=e(75271),a=e(52676),R=["onClick"],z=u.memo(function(r){var n=r.onClick,t=A()(r,R),s=(0,u.useState)(void 0),v=h()(s,2),m=v[0],c=v[1],g=function(){var i=I()(P()().mark(function f(C){return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(n){l.next=2;break}return l.abrupt("return");case 2:return l.prev=2,c(!0),l.next=6,n==null?void 0:n(C);case 6:return l.prev=6,c(!1),l.finish(6);case 9:case"end":return l.stop()}},f,null,[[2,,6,9]])}));return function(C){return i.apply(this,arguments)}}();return(0,a.jsx)(x.ZP,o()({loading:m,onClick:g},t))}),_=z,p=e(40023),ee=["spinning","background","tip"],J="overlay-spin",ne=function(n){var t=n.spinning,s=n.background,v=s===void 0?"#fff":s,m=n.tip,c=A()(n,ee);return t?(0,a.jsxs)("div",{className:"".concat(J,"-container"),style:{"--background":v},children:[(0,a.jsx)(p.Z,o()({className:J,spinning:t},c)),m&&(0,a.jsx)("div",{className:"".concat(J,"-tip"),children:m})]}):null},ae=ne,te=function(n){return function(t){var s=t.visible,v=t.open,m=t.afterVisibleChange,c=t.afterOpenChange,g=t.afterClose,i=s!=null?s:v,f=m!=null?m:c,C=(0,u.useState)(i),y=h()(C,2),l=y[0],M=y[1],Q=(0,u.useState)(i===!1),F=h()(Q,2),b=F[0],S=F[1],N=function(B){f==null||f(B),B||S(!0)},E=function(){g==null||g(),S(!0)};return(0,u.useEffect)(function(){i?(S(!1),setTimeout(function(){return M(i)},0)):M(i)},[i]),b?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(n,o()(o()({},t),{},{open:l,afterOpenChange:N,afterClose:E}))}},re=te,le=e(69417),oe=e(35862),U=function(r){return r.ZH_CN="zh-CN",r.EN_US="en-US",r}({}),se=e(82092),w=e.n(se),ie=e(66262),de=e(20973),ue=e(83144),me=e(78843),ce={welcome:"hello world"},ve=ce,fe={welcome:"\u4F60\u597D\u4E16\u754C"},pe=fe,q=function(n){var t=w()(w()({},U.ZH_CN,{message:pe,antd:de.Z}),U.EN_US,{message:ve,antd:ie.Z});return t[n]},he=(0,ue.Sn)(),ge=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:U.ZH_CN;return(0,me.d)({locale:n,messages:q(n).message},he)},Ce=u.memo(function(r){var n=r.locale,t=r.children,s=ge(n);return(0,a.jsx)(oe.zt,{value:s,children:(0,a.jsx)(le.ZP,{locale:q(n).antd,children:t})})}),ye=Ce,be=e(15558),Ee=e.n(be),Pe=e(29369),Ie=e(72149),Te=e(72774),De=e(63801),G=e(42748),Se=e(77995),Oe=De.Z.Link,je=function(n){var t=n.className,s=n.style,v=n.bordered,m=v===void 0?!1:v,c=n.columns,g=n.formRef,i=n.options,f=i!=null?i:{},C=f.onlyPreview,y=C===void 0?!1:C,l=f.hideAdd,M=l===void 0?!1:l,Q=G.Z.useForm(),F=h()(Q,1),b=F[0],S=(0,Ie.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),N=h()(S,2),E=N[0],X=N[1];(0,u.useEffect)(function(){b.setFieldsValue({items:E!=null?E:[]})},[E]),(0,u.useImperativeHandle)(g,function(){return b});var B=(0,Te.Z)(function(Z){var T=Z.remove;return[].concat(Ee()(c!=null?c:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(L,Y){return(0,a.jsx)(Oe,{disabled:!!y,onClick:function(){return T(Y.key)},children:"\u5220\u9664"})}}])}),xe=function(T){X(T)};return(0,a.jsx)(G.Z,{className:t,form:b,style:o()({},s),autoComplete:"off",component:!1,disabled:!!y,initialValues:{items:E},onValuesChange:function(T,O){var L=O.items;xe(L)},children:(0,a.jsx)(G.Z.List,{name:"items",children:function(T,O){var L=O.add,Y=O.remove;return(0,a.jsx)(Se.Z,o()(o()({rowKey:"key",bordered:m,dataSource:T.map(function(V){return o()(o()({},b.getFieldValue(["items",V.key])),{},{key:V.name})}),columns:B({remove:Y})},!M&&{footer:function(){return(0,a.jsx)(x.ZP,{block:!0,icon:(0,a.jsx)(Pe.Z,{}),type:"dashed",disabled:!!y,onClick:I()(P()().mark(function Re(){return P()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,b.validateFields();case 2:L();case 3:case"end":return K.stop()}},Re)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},Ae=je},88654:function(W,d,e){e.r(d),e.d(d,{texts:function(){return o}});var D=e(23010);const o=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},47838:function(W,d){d.Z=`import type {
  EditableTableProps,
  EditableTableRef,
} from '@louhaojie99/pro-components';
import { EditableTable } from '@louhaojie99/pro-components';
import { Button, Divider, Form, Input, Select, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';

const { Title, Paragraph } = Typography;

type UserInfo = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};

const App: React.FC = () => {
  const formRef = useRef<EditableTableRef<UserInfo>>(null);

  const [dataSource, setDataSource] = useState<UserInfo[]>([
    { name: '\u5C0F\u9177', age: 20, gender: 'male' },
    { name: '\u5C0F\u6A31', age: 18, gender: 'female' },
  ]);

  const columns: EditableTableProps<UserInfo>['columns'] = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'name']}
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165' }]}
          >
            <Input allowClear placeholder="\u8BF7\u8F93\u5165" />
          </Form.Item>
        );
      },
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'age']}
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165' }]}
          >
            <Input allowClear placeholder="\u8BF7\u8F93\u5165" />
          </Form.Item>
        );
      },
    },
    {
      title: '\u6027\u522B',
      dataIndex: 'gender',
      key: 'gender',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'gender']}
            rules={[{ required: true, message: '\u8BF7\u9009\u62E9' }]}
          >
            <Select
              allowClear
              options={[
                { label: '\u7537\u751F', value: 'male' },
                { label: '\u5973\u751F', value: 'female' },
              ]}
              placeholder="\u8BF7\u9009\u62E9"
            />
          </Form.Item>
        );
      },
    },
  ];

  return (
    <>
      <Space style={{ width: '100%' }} direction="vertical">
        <Title level={5}>\u5B66\u751F\u5217\u8868</Title>

        <EditableTable<UserInfo>
          formRef={formRef}
          columns={columns}
          value={dataSource}
          onChange={setDataSource}
        />
      </Space>

      <Title level={5}>\u6570\u636E\u9884\u89C8</Title>
      <Typography>
        <pre>{JSON.stringify(dataSource, null, 2)}</pre>
      </Typography>

      <Divider />

      <Paragraph>\u5982\u679C\u60A8\u60F3\u8C03\u7528\u8868\u5355\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7 ref \u6765\u5B9E\u73B0\uFF1A</Paragraph>
      <Button
        type="primary"
        onClick={async () => {
          await formRef.current?.validateFields();
          console.log('\u63D0\u4EA4\u7684\u6570\u636E: ', dataSource);
        }}
      >
        \u8868\u5355\u9A8C\u8BC1
      </Button>
    </>
  );
};

export default App;
`}}]);
