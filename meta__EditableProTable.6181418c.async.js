"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[218],{92382:function(Z,m,e){var I;e.r(m),e.d(m,{demos:function(){return j}});var d=e(90228),T=e.n(d),P=e(87999),V=e.n(P),E=e(75271),z=e(85314),C=e(91265),B=e(95325),j={"editableprotable-demo-demos":{component:E.memo(E.lazy(function(){return e.e(569).then(e.bind(e,69899))})),asset:{type:"BLOCK",id:"editableprotable-demo-demos",refAtomIds:["EditableProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(29597).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":C,antd:B,react:I||(I=e.t(E,2))},renderOpts:{compile:function(){var A=V()(T()().mark(function t(){var x,R=arguments;return T()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(363).then(e.bind(e,71363));case 2:return p.abrupt("return",(x=p.sent).default.apply(x,R));case 3:case"end":return p.stop()}},t)}));function f(){return A.apply(this,arguments)}return f}()}}}},91265:function(Z,m,e){e.r(m),e.d(m,{AsyncButton:function(){return G},DestructibleContainer:function(){return ne},EditableTable:function(){return De},IntlProvider:function(){return he},LanguageEnum:function(){return M},OverlaySpin:function(){return q}});var I=e(26068),d=e.n(I),T=e(90228),P=e.n(T),V=e(87999),E=e.n(V),z=e(48305),C=e.n(z),B=e(67825),j=e.n(B),A=e(27807),f=e(75271),t=e(52676),x=["onClick"],R=f.memo(function(r){var n=r.onClick,a=j()(r,x),o=(0,f.useState)(void 0),c=C()(o,2),s=c[0],h=c[1],g=function(){var u=E()(P()().mark(function v(y){return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(n){l.next=2;break}return l.abrupt("return");case 2:return l.prev=2,h(!0),l.next=6,n==null?void 0:n(y);case 6:return l.prev=6,h(!1),l.finish(6);case 9:case"end":return l.stop()}},v,null,[[2,,6,9]])}));return function(y){return u.apply(this,arguments)}}();return(0,t.jsx)(A.ZP,d()({loading:s,onClick:g},a))}),G=R,p=e(40023),_=["spinning","background","tip"],K="overlay-spin",w=function(n){var a=n.spinning,o=n.background,c=o===void 0?"#fff":o,s=n.tip,h=j()(n,_);return a?(0,t.jsxs)("div",{className:"".concat(K,"-container"),style:{"--background":c},children:[(0,t.jsx)(p.Z,d()({className:K,spinning:a},h)),s&&(0,t.jsx)("div",{className:"".concat(K,"-tip"),children:s})]}):null},q=w,ee=function(n){return function(a){var o=a.visible,c=a.open,s=a.afterVisibleChange,h=a.afterOpenChange,g=a.afterClose,u=o!=null?o:c,v=s!=null?s:h,y=(0,f.useState)(u),S=C()(y,2),l=S[0],N=S[1],D=(0,f.useState)(u===!1),U=C()(D,2),F=U[0],i=U[1],H=function(b){v==null||v(b),b||i(!0)},$=function(){g==null||g(),i(!0)};return(0,f.useEffect)(function(){u?(i(!1),setTimeout(function(){return N(u)},0)):N(u)},[u]),F?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(n,d()(d()({},a),{},{open:l,afterOpenChange:H,afterClose:$}))}},ne=ee,te=e(69417),ae=e(67572),M=function(r){return r.ZH_CN="zh-CN",r.EN_US="en-US",r}({}),re=e(82092),Q=e.n(re),le=e(66262),oe=e(20973),se=e(62230),de=e(38001),ue={welcome:"hello world"},ie=ue,me={welcome:"\u4F60\u597D\u4E16\u754C"},ce=me,X=function(n){var a=Q()(Q()({},M.ZH_CN,{message:ce,antd:oe.Z}),M.EN_US,{message:ie,antd:le.Z});return a[n]},ve=(0,se.Sn)(),fe=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M.ZH_CN;return(0,de.d)({locale:n,messages:X(n).message},ve)},pe=f.memo(function(r){var n=r.locale,a=r.children,o=fe(n);return(0,t.jsx)(ae.zt,{value:o,children:(0,t.jsx)(te.ZP,{locale:X(n).antd,children:a})})}),he=pe,ge=e(15558),Ce=e.n(ge),ye=e(29369),be=e(56630),Pe=e(63801),W=e(42748),Ee=e(77995),Ie=Pe.Z.Link,Se=function(n){var a=n.className,o=n.style,c=n.columns,s=n.options,h=n.tableProps,g=s!=null?s:{},u=g.onlyPreview,v=u===void 0?!1:u,y=g.hideAdd,S=y===void 0?!1:y,l=W.Z.useForm(),N=C()(l,1),D=N[0],U=(0,be.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),F=C()(U,2),i=F[0],H=F[1];return(0,f.useEffect)(function(){D.setFieldsValue({items:i!=null?i:[]})},[i]),(0,t.jsx)(W.Z,{className:a,style:d()({},o),autoComplete:"off",component:!1,form:D,disabled:!!v,initialValues:{items:i!=null?i:[]},onValuesChange:function(L,b){var J=b.items;H(J)},children:(0,t.jsx)(W.Z.List,{name:"items",children:function(L,b){var J=b.add,Oe=b.remove;return(0,t.jsx)(Ee.Z,d()(d()({pagination:!1,scroll:{x:"max-content"}},h),{},{rowKey:"key",dataSource:L,columns:[].concat(Ce()(c!=null?c:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",render:function(Y,k){return(0,t.jsx)(Ie,{disabled:!!v,onClick:function(){return Oe(k.key)},children:"\u5220\u9664"})}}])},!S&&{footer:function(){return(0,t.jsx)(A.ZP,{block:!0,icon:(0,t.jsx)(ye.Z,{}),type:"dashed",disabled:!!v,onClick:E()(P()().mark(function Y(){return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,D.validateFields();case 2:J();case 3:case"end":return O.stop()}},Y)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}))}})})},De=Se},94255:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return d}});var I=e(85314);const d=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},29597:function(Z,m){m.Z=`import type { EditableTableProps } from '@louhaojie99/pro-components';
import { EditableTable } from '@louhaojie99/pro-components';
import { Form, Input, Select, Space } from 'antd';
import React, { useState } from 'react';

type StudentInfo = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<StudentInfo[] | undefined>([
    { name: '\u5C0F\u9177', age: 20, gender: 'male' },
    { name: '\u5C0F\u6A31', age: 18, gender: 'female' },
  ]);

  const columns: EditableTableProps<StudentInfo>['columns'] = [
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
        <b>\u5B66\u751F\u5217\u8868</b>
        <EditableTable<StudentInfo>
          columns={columns}
          value={dataSource}
          onChange={setDataSource}
        />
      </Space>

      <Space style={{ width: '100%', marginTop: '24px' }} direction="vertical">
        <b>\u6570\u636E\u4EA7\u51FA</b>
        <p>{JSON.stringify(dataSource, null, 2)}</p>
      </Space>
    </>
  );
};

export default App;
`}}]);
