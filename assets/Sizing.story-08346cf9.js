import{j as r}from"./jsx-runtime-9c4ae004.js";import{G as e}from"./RadialMenu-ee3d72fc.js";import"./index-1b03fe98.js";import{s as a,a as o}from"./demo-9c61d665.js";import"./index-27578f8f.esm-24d23efb.js";import"./extends-98964cd2.js";import"./client-449ccf6c.js";import"./index-6fd5a17b.js";const P={title:"Demos/Sizing",component:e},i=()=>r.jsx(e,{sizingType:"none",nodes:a,edges:o}),t=()=>r.jsx(e,{sizingType:"centrality",nodes:a,edges:o}),b=G=>r.jsx(e,{...G,sizingType:"centrality",nodes:a,edges:o}),s=b.bind({});s.args={minNodeSize:10,maxNodeSize:25};const p=()=>r.jsx(e,{sizingType:"pagerank",nodes:a,edges:o}),n=()=>r.jsx(e,{sizingType:"attribute",sizingAttribute:"priority",minNodeSize:2,maxNodeSize:25,nodes:a,edges:o});var d,m,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:'() => <GraphCanvas sizingType="none" nodes={simpleNodes} edges={simpleEdges} />',...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,l,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'() => <GraphCanvas sizingType="centrality" nodes={simpleNodes} edges={simpleEdges} />',...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var z,y,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:'props => <GraphCanvas {...props} sizingType="centrality" nodes={simpleNodes} edges={simpleEdges} />',...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,N,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:'() => <GraphCanvas sizingType="pagerank" nodes={simpleNodes} edges={simpleEdges} />',...(T=(N=p.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var j,C,E;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:'() => <GraphCanvas sizingType="attribute" sizingAttribute="priority" minNodeSize={2} maxNodeSize={25} nodes={simpleNodes} edges={simpleEdges} />',...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};export{n as Attribute,t as Centrality,s as MinMaxSizes,i as None,p as PageRank,P as default};
