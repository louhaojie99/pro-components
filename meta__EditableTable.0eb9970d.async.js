"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[316],{85831:function(W,C,e){var j;e.r(C),e.d(C,{demos:function(){return G}});var U=e(90228),o=e.n(U),J=e(87999),M=e.n(J),F=e(75271),H=e(32923),z=e(43727),I=e(33628),G={"editabletable-demo-demos":{component:F.memo(F.lazy(function(){return e.e(794).then(e.bind(e,47286))})),asset:{type:"BLOCK",id:"editabletable-demo-demos",refAtomIds:["EditableTable"],dependencies:{"index.tsx":{type:"FILE",value:e(61330).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.4"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":z,antd:I,react:j||(j=e.t(F,2))},renderOpts:{compile:function(){var N=M()(o()().mark(function m(){var a,Q=arguments;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,e.e(652).then(e.bind(e,43652));case 2:return O.abrupt("return",(a=O.sent).default.apply(a,Q));case 3:case"end":return O.stop()}},m)}));function L(){return N.apply(this,arguments)}return L}()}}}},43727:function(W,C,e){e.r(C),e.d(C,{AsyncButton:function(){return _},DestructibleContainer:function(){return O},EditableTable:function(){return ce},IntlProvider:function(){return Ie},LanguageEnum:function(){return B},OverlaySpin:function(){return De},TabsSelect:function(){return Ae},utils:function(){return j}});var j={};e.r(j),e.d(j,{getUrlSearchParams:function(){return Ue},parseJson:function(){return Re}});var U=e(26068),o=e.n(U),J=e(90228),M=e.n(J),F=e(87999),H=e.n(F),z=e(48305),I=e.n(z),G=e(67825),N=e.n(G),L=e(27807),m=e(75271),a=e(52676),Q=["onClick"],_=m.memo(function(u){var n=u.onClick,r=N()(u,Q),s=(0,m.useState)(void 0),v=I()(s,2),d=v[0],t=v[1],T=function(){var c=H()(M()().mark(function g(y){var f;return M()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(!n||typeof n!="function")){l.next=2;break}return l.abrupt("return");case 2:if(f=n(y),!(f instanceof Promise)){l.next=11;break}return l.prev=4,t(!0),l.next=8,f;case 8:return l.prev=8,t(!1),l.finish(8);case 11:case"end":return l.stop()}},g,null,[[4,,8,11]])}));return function(y){return c.apply(this,arguments)}}();return(0,a.jsx)(L.ZP,o()({loading:d,onClick:T},r))}),O=function(n){return function(r){var s=r.visible,v=r.open,d=r.afterVisibleChange,t=r.afterOpenChange,T=r.afterClose,c=s!=null?s:v,g=d!=null?d:t,y=(0,m.useState)(c),f=I()(y,2),D=f[0],l=f[1],V=(0,m.useState)(c===!1),x=I()(V,2),b=x[0],P=x[1],A=function(R){g==null||g(R),R||P(!0)},E=function(){T==null||T(),P(!0)};return(0,m.useEffect)(function(){c?(P(!1),setTimeout(function(){return l(c)},0)):l(c)},[c]),b?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(n,o()(o()({},r),{},{open:D,afterOpenChange:A,afterClose:E}))}},te=e(15558),oe=e.n(te),le=e(68474),q=e(72149),se=e(72774),ue=e(17857),X=e(90663),ie=e(98267),de=ue.Z.Link,ce=function(n){var r=n.className,s=n.style,v=n.bordered,d=v===void 0?!1:v,t=n.columns,T=n.formRef,c=n.options,g=c!=null?c:{},y=g.onlyPreview,f=y===void 0?!1:y,D=g.hideAdd,l=D===void 0?!1:D,V=X.Z.useForm(),x=I()(V,1),b=x[0],P=(0,q.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),A=I()(P,2),E=A[0],Z=A[1];(0,m.useEffect)(function(){b.setFieldsValue({items:E!=null?E:[]})},[E]),(0,m.useImperativeHandle)(T,function(){return b});var R=(0,se.Z)(function(h){var i=h.remove;return[].concat(oe()(t!=null?t:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(S,w){return(0,a.jsx)(de,{disabled:!!f,onClick:function(){return i(w.key)},children:"\u5220\u9664"})}}])}),k=function(i){Z(i)};return(0,a.jsx)(X.Z,{className:r,form:b,style:o()({},s),autoComplete:"off",component:!1,disabled:!!f,initialValues:{items:E},onValuesChange:function(i,p){var S=p.items;k(S)},children:(0,a.jsx)(X.Z.List,{name:"items",children:function(i,p){var S=p.add,w=p.remove;return(0,a.jsx)(ie.Z,o()(o()({rowKey:"key",bordered:d,dataSource:i.map(function(K){return o()(o()({},b.getFieldValue(["items",K.key])),{},{key:K.name})}),columns:R({remove:w})},!l&&{footer:function(){return(0,a.jsx)(L.ZP,{block:!0,icon:(0,a.jsx)(le.Z,{}),type:"dashed",disabled:!!f,onClick:H()(M()().mark(function Fe(){return M()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,b.validateFields();case 2:S();case 3:case"end":return $.stop()}},Fe)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},me=e(69417),ve=e(35862),B=function(u){return u.ZH_CN="zh-CN",u.EN_US="en-US",u}({}),fe=e(82092),ee=e.n(fe),pe=e(66262),ge=e(21563),he=e(83144),Ce=e(78843),ye={welcome:"hello world"},be=ye,Pe={welcome:"\u4F60\u597D\u4E16\u754C"},Ee=Pe,ne=function(n){var r=ee()(ee()({},B.ZH_CN,{message:Ee,antd:ge.Z}),B.EN_US,{message:be,antd:pe.Z});return r[n]},Te=(0,he.Sn)(),Se=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:B.ZH_CN;return(0,Ce.d)({locale:n,messages:ne(n).message},Te)},Ie=m.memo(function(u){var n=u.locale,r=u.children,s=Se(n);return(0,a.jsx)(ve.zt,{value:s,children:(0,a.jsx)(me.ZP,{locale:ne(n).antd,children:r})})}),re=e(40023),Oe=["spinning","background","tip"],Y="overlay-spin",De=function(n){var r=n.spinning,s=n.background,v=s===void 0?"#fff":s,d=n.tip,t=N()(n,Oe);return r?(0,a.jsxs)("div",{className:"".concat(Y,"-container"),style:{"--background":v},children:[(0,a.jsx)(re.Z,o()({className:Y,spinning:r},t)),d&&(0,a.jsx)("div",{className:"".concat(Y,"-tip"),children:d})]}):null},je=e(44675),xe=e(95627),ae=e(44763),Me=e(32699),Ve=["loading","options","defaultValue","tabsProps"],Ae=function(n){var r,s,v=n.loading,d=v===void 0?!1:v,t=n.options,T=n.defaultValue,c=n.tabsProps,g=N()(n,Ve),y=(r=t==null||(s=t[0])===null||s===void 0?void 0:s.tabKey)!==null&&r!==void 0?r:"",f=(0,q.Z)(n,{defaultValue:T||{activeTab:y,selectValue:void 0},defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),D=I()(f,2),l=D[0],V=D[1],x=l!=null?l:{},b=x.activeTab,P=b===void 0?y:b,A=x.selectValue,E=(0,m.useMemo)(function(){return(0,Me.keyBy)(t,"tabKey")},[t]),Z=(0,m.useMemo)(function(){var h,i;return P?(h=(i=E[P])===null||i===void 0?void 0:i.tabOptions)!==null&&h!==void 0?h:[]:[]},[E,P]),R=function(i){V(function(p){return o()(o()({},p),{},{activeTab:i})})},k=function(i,p){V(function(S){return o()(o()({},S),{},{selectValue:p})})};return(0,a.jsx)(je.default,o()(o()({},g),{},{allowClear:!0,loading:d,labelInValue:!0,value:A,options:Z,dropdownRender:function(i){var p=(0,a.jsx)(re.Z,{spinning:d,children:i});return t?(0,a.jsx)(xe.Z,o()({style:{padding:"0 8px"},size:"small",items:t==null?void 0:t.map(function(S){return{key:S.tabKey,label:S.tabLabel,children:p,disabled:d}}),activeKey:P,onChange:R},c)):p},notFoundContent:(0,a.jsx)(ae.Z,{image:ae.Z.PRESENTED_IMAGE_SIMPLE}),placeholder:"\u8BF7\u9009\u62E9",onChange:k}))},Re=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof n!="string")return r;try{return JSON.parse(n)}catch(s){return console.error("parse json error:",s),r}},Ue=function(){var n=window.location.href.split("?")[1],r=new URLSearchParams(n);return Object.fromEntries(r.entries())}},25527:function(W,C,e){e.r(C),e.d(C,{texts:function(){return U}});var j=e(32923);const U=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},61330:function(W,C){C.Z=`import type {\r
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
