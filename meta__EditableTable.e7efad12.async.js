"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[316],{32365:function(J,c,e){var g;e.r(c),e.d(c,{demos:function(){return $}});var T=e(90228),i=e.n(T),K=e(87999),I=e.n(K),D=e(75271),W=e(23010),H=e(16458),h=e(57228),$={"editabletable-demo-demos":{component:D.memo(D.lazy(function(){return e.e(794).then(e.bind(e,31765))})),asset:{type:"BLOCK",id:"editabletable-demo-demos",refAtomIds:["EditableTable"],dependencies:{"index.tsx":{type:"FILE",value:e(47838).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":H,antd:h,react:g||(g=e.t(D,2))},renderOpts:{compile:function(){var A=I()(i()().mark(function v(){var t,z=arguments;return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(837).then(e.bind(e,57837));case 2:return p.abrupt("return",(t=p.sent).default.apply(t,z));case 3:case"end":return p.stop()}},v)}));function x(){return A.apply(this,arguments)}return x}()}}}},16458:function(J,c,e){e.r(c),e.d(c,{AsyncButton:function(){return p},DestructibleContainer:function(){return le},EditableTable:function(){return xe},IntlProvider:function(){return be},LanguageEnum:function(){return N},OverlaySpin:function(){return te},utils:function(){return g}});var g={};e.r(g),e.d(g,{parseJSON:function(){return Ne}});var T=e(26068),i=e.n(T),K=e(90228),I=e.n(K),D=e(87999),W=e.n(D),H=e(48305),h=e.n(H),$=e(67825),A=e.n($),x=e(27807),v=e(75271),t=e(52676),z=["onClick"],w=v.memo(function(r){var n=r.onClick,a=A()(r,z),l=(0,v.useState)(void 0),m=h()(l,2),s=m[0],u=m[1],y=function(){var d=W()(I()().mark(function f(C){return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(n){o.next=2;break}return o.abrupt("return");case 2:return o.prev=2,u(!0),o.next=6,n==null?void 0:n(C);case 6:return o.prev=6,u(!1),o.finish(6);case 9:case"end":return o.stop()}},f,null,[[2,,6,9]])}));return function(C){return d.apply(this,arguments)}}();return(0,t.jsx)(x.ZP,i()({loading:s,onClick:y},a))}),p=w,ee=e(40023),ne=["spinning","background","tip"],G="overlay-spin",ae=function(n){var a=n.spinning,l=n.background,m=l===void 0?"#fff":l,s=n.tip,u=A()(n,ne);return a?(0,t.jsxs)("div",{className:"".concat(G,"-container"),style:{"--background":m},children:[(0,t.jsx)(ee.Z,i()({className:G,spinning:a},u)),s&&(0,t.jsx)("div",{className:"".concat(G,"-tip"),children:s})]}):null},te=ae,re=function(n){return function(a){var l=a.visible,m=a.open,s=a.afterVisibleChange,u=a.afterOpenChange,y=a.afterClose,d=l!=null?l:m,f=s!=null?s:u,C=(0,v.useState)(d),b=h()(C,2),o=b[0],R=b[1],X=(0,v.useState)(d===!1),U=h()(X,2),E=U[0],O=U[1],M=function(F){f==null||f(F),F||O(!0)},P=function(){y==null||y(),O(!0)};return(0,v.useEffect)(function(){d?(O(!1),setTimeout(function(){return R(d)},0)):R(d)},[d]),E?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(n,i()(i()({},a),{},{open:o,afterOpenChange:M,afterClose:P}))}},le=re,oe=e(69417),se=e(35862),N=function(r){return r.ZH_CN="zh-CN",r.EN_US="en-US",r}({}),ie=e(82092),_=e.n(ie),ue=e(66262),de=e(20973),me=e(83144),ce=e(78843),ve={welcome:"hello world"},fe=ve,pe={welcome:"\u4F60\u597D\u4E16\u754C"},ge=pe,q=function(n){var a=_()(_()({},N.ZH_CN,{message:ge,antd:de.Z}),N.EN_US,{message:fe,antd:ue.Z});return a[n]},he=(0,me.Sn)(),ye=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:N.ZH_CN;return(0,ce.d)({locale:n,messages:q(n).message},he)},Ce=v.memo(function(r){var n=r.locale,a=r.children,l=ye(n);return(0,t.jsx)(se.zt,{value:l,children:(0,t.jsx)(oe.ZP,{locale:q(n).antd,children:a})})}),be=Ce,Ee=e(15558),Pe=e.n(Ee),Ie=e(29369),Se=e(72149),Te=e(72774),De=e(63801),Q=e(42748),Oe=e(77995),je=De.Z.Link,Ae=function(n){var a=n.className,l=n.style,m=n.bordered,s=m===void 0?!1:m,u=n.columns,y=n.formRef,d=n.options,f=d!=null?d:{},C=f.onlyPreview,b=C===void 0?!1:C,o=f.hideAdd,R=o===void 0?!1:o,X=Q.Z.useForm(),U=h()(X,1),E=U[0],O=(0,Se.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),M=h()(O,2),P=M[0],Y=M[1];(0,v.useEffect)(function(){E.setFieldsValue({items:P!=null?P:[]})},[P]),(0,v.useImperativeHandle)(y,function(){return E});var F=(0,Te.Z)(function(B){var S=B.remove;return[].concat(Pe()(u!=null?u:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(V,k){return(0,t.jsx)(je,{disabled:!!b,onClick:function(){return S(k.key)},children:"\u5220\u9664"})}}])}),Re=function(S){Y(S)};return(0,t.jsx)(Q.Z,{className:a,form:E,style:i()({},l),autoComplete:"off",component:!1,disabled:!!b,initialValues:{items:P},onValuesChange:function(S,j){var V=j.items;Re(V)},children:(0,t.jsx)(Q.Z.List,{name:"items",children:function(S,j){var V=j.add,k=j.remove;return(0,t.jsx)(Oe.Z,i()(i()({rowKey:"key",bordered:s,dataSource:S.map(function(Z){return i()(i()({},E.getFieldValue(["items",Z.key])),{},{key:Z.name})}),columns:F({remove:k})},!R&&{footer:function(){return(0,t.jsx)(x.ZP,{block:!0,icon:(0,t.jsx)(Ie.Z,{}),type:"dashed",disabled:!!b,onClick:W()(I()().mark(function Ue(){return I()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,E.validateFields();case 2:V();case 3:case"end":return L.stop()}},Ue)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},xe=Ae,Ne=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=function(u){return typeof u=="string"};try{if(!l(n))return a;var m=JSON.parse(n!=null?n:"");return m}catch(s){return console.error("Error parsing JSON:",s),a}}},88654:function(J,c,e){e.r(c),e.d(c,{texts:function(){return T}});var g=e(23010);const T=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},47838:function(J,c){c.Z=`import type {
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
