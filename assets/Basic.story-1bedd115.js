import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as f}from"./index-1b03fe98.js";import{G as a,l as Z}from"./RadialMenu-ee3d72fc.js";import{s as n,a as r,r as ee,b as N}from"./demo-9c61d665.js";import"./index-27578f8f.esm-24d23efb.js";import"./extends-98964cd2.js";import"./client-449ccf6c.js";import"./index-6fd5a17b.js";const ce={title:"Demos/Basic",component:a},se=s=>e.jsx(a,{...s}),d=se.bind({});d.args={nodes:n,edges:r,cameraMode:"pan",theme:Z,layoutType:"forceDirected2d",sizingType:"none",labelType:"auto"};const t=()=>e.jsx(a,{nodes:[{id:"1",label:"1"},{id:"2",label:"2"}],edges:[{source:"1",target:"2",id:"1-2",label:"1-2"},{source:"2",target:"1",id:"2-1",label:"2-1"}]}),i=()=>e.jsx(a,{labelType:"all",labelFontUrl:"https://ey2pz3.csb.app/NotoSansSC-Regular.ttf",nodes:[{id:"1",label:"牡"},{id:"2",label:"牡"}],edges:[{source:"1",target:"2",id:"1-2",label:"牡 - 牡"},{source:"2",target:"1",id:"2-1",label:"牡 - 牡"}]}),l=()=>e.jsx(a,{nodes:n,edges:r,disabled:!0}),c=()=>e.jsx(a,{nodes:n,edges:r,layoutType:"forceDirected3d",children:e.jsx("directionalLight",{position:[0,5,-4],intensity:1})}),p=()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:ee(10).map(s=>e.jsx("div",{style:{border:"solid 1px red",height:350,width:350,margin:15,position:"relative"},children:e.jsx(a,{disabled:!0,nodes:n,edges:r,animated:!1})},s))}),m=()=>{var v;const[s,h]=f.useState(n),[y,Y]=f.useState(r);return e.jsxs("div",{children:[e.jsxs("div",{style:{zIndex:9,position:"absolute",top:15,right:15,background:"rgba(0, 0, 0, .5)",padding:1,color:"white"},children:[e.jsx("button",{style:{display:"block",width:"100%"},onClick:()=>{const o=N(0,1e3);h([...s,{id:`n-${o}`,label:`Node ${o}`}]),N(0,2)!==2&&Y([...y,{id:`e-${o}`,source:s[s.length-1].id,target:`n-${o}`}])},children:"Add Node"}),e.jsxs("button",{style:{display:"block",width:"100%"},onClick:()=>{h(s.filter(o=>{var x;return o.id!==((x=s[0])==null?void 0:x.id)}))},children:["Remove Node ",(v=s[0])==null?void 0:v.id]})]}),e.jsx(a,{nodes:s,edges:y})]})},u=()=>e.jsx(a,{animated:!1,nodes:n,edges:r}),g=()=>e.jsx(a,{animated:!1,nodes:n,edges:r,glOptions:{preserveDrawingBuffer:!0}}),b=()=>e.jsx(a,{nodes:[{id:"1",label:"Node 1"},{id:"2",label:"Node 2"}],edges:[{source:"1",target:"2",id:"1-2",label:"1-2"},{source:"2",target:"1",id:"2-1",label:"2-1"}],onNodeDoubleClick:s=>alert(s.label)});var C,S,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"args => <GraphCanvas {...args} />",...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,G,w;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => <GraphCanvas nodes={[{
  id: '1',
  label: '1'
}, {
  id: '2',
  label: '2'
}]} edges={[{
  source: '1',
  target: '2',
  id: '1-2',
  label: '1-2'
}, {
  source: '2',
  target: '1',
  id: '2-1',
  label: '2-1'
}]} />`,...(w=(G=t.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var E,D,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => <GraphCanvas labelType="all" labelFontUrl="https://ey2pz3.csb.app/NotoSansSC-Regular.ttf" nodes={[{
  id: '1',
  label: '牡'
}, {
  id: '2',
  label: '牡'
}]} edges={[{
  source: '1',
  target: '2',
  id: '1-2',
  label: '牡 - 牡'
}, {
  source: '2',
  target: '1',
  id: '2-1',
  label: '牡 - 牡'
}]} />`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var $,z,L;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:"() => <GraphCanvas nodes={simpleNodes} edges={simpleEdges} disabled />",...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var R,B,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => <GraphCanvas nodes={simpleNodes} edges={simpleEdges} layoutType="forceDirected3d">
    <directionalLight position={[0, 5, -4]} intensity={1} />
  </GraphCanvas>`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,U,W;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexWrap: 'wrap'
}}>
    {range(10).map(i => <div key={i} style={{
    border: 'solid 1px red',
    height: 350,
    width: 350,
    margin: 15,
    position: 'relative'
  }}>
        <GraphCanvas disabled nodes={simpleNodes} edges={simpleEdges} animated={false} />
      </div>)}
  </div>`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var F,I,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [nodes, setNodes] = useState(simpleNodes);
  const [edges, setEdges] = useState(simpleEdges);
  return <div>
      <div style={{
      zIndex: 9,
      position: 'absolute',
      top: 15,
      right: 15,
      background: 'rgba(0, 0, 0, .5)',
      padding: 1,
      color: 'white'
    }}>
        <button style={{
        display: 'block',
        width: '100%'
      }} onClick={() => {
        const num = random(0, 1000);
        setNodes([...nodes, {
          id: \`n-\${num}\`,
          label: \`Node \${num}\`
        }]);
        if (random(0, 2) !== 2) {
          setEdges([...edges, {
            id: \`e-\${num}\`,
            source: nodes[nodes.length - 1].id,
            target: \`n-\${num}\`
          }]);
        }
      }}>
          Add Node
        </button>
        <button style={{
        display: 'block',
        width: '100%'
      }} onClick={() => {
        setNodes(nodes.filter(n => n.id !== nodes[0]?.id));
      }}>
          Remove Node {nodes[0]?.id}
        </button>
      </div>
      <GraphCanvas nodes={nodes} edges={edges} />
    </div>;
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var _,q,H;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:"() => <GraphCanvas animated={false} nodes={simpleNodes} edges={simpleEdges} />",...(H=(q=u.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,P;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`() => <GraphCanvas animated={false} nodes={simpleNodes} edges={simpleEdges} glOptions={{
  preserveDrawingBuffer: true
}} />`,...(P=(K=g.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,V,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <GraphCanvas nodes={[{
  id: '1',
  label: 'Node 1'
}, {
  id: '2',
  label: 'Node 2'
}]} edges={[{
  source: '1',
  target: '2',
  id: '1-2',
  label: '1-2'
}, {
  source: '2',
  target: '1',
  id: '2-1',
  label: '2-1'
}]} onNodeDoubleClick={node => alert(node.label)} />`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};export{c as CustomLighting,l as Disabled,g as ExtraGlOptions,m as LiveUpdates,p as Many,u as NoAnimation,b as NodeDoubleClick,d as Simple,i as SpecialCharacters,t as TwoWayLink,ce as default};
