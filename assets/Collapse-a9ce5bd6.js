import{j as n}from"./jsx-runtime-9c4ae004.js";import{M as d}from"./index-19c753e5.js";import"./RadialMenu-ee3d72fc.js";import"./index-1b03fe98.js";import{u as t}from"./index-2ef8b458.js";import"./iframe-22a3b360.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-6fd5a17b.js";import"./extends-98964cd2.js";import"./index-2749be16.js";import"./index-356e4a49.js";import"./index-27578f8f.esm-24d23efb.js";import"./client-449ccf6c.js";function o(s){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},t(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Docs/Advanced/Collapse"}),`
`,n.jsx(e.h1,{id:"collapse",children:"Collapse"}),`
`,n.jsx(e.p,{children:`reagraph supports the ability to expand and collapse nodes and edges.
To collapse a node and its edges, simply pass a array of node ids to
the graph component like:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const App = () => {
  const nodes = [];
  const edges = [];

  // List of node ids
  const [collapsed, setCollapsed] = useState<string[]>([]);

  return (
    <GraphCanvas
      collapsedNodeIds={collapsed}
      nodes={nodes}
      edges={edges}
    />
  );
};
`})}),`
`,n.jsxs(e.p,{children:["For more complex scenarios, you expose a ",n.jsx(e.code,{children:"useCollapse"})," hook:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`
const App = () => {
  const nodes = [];
  const edges = [];
  const [collapsedNodeIds, setCollapsedNodeIds] = useState<string[]>([]);

  // Helper hook
  const { getExpandPathIds } = useCollapse({
    collapsedNodeIds,
    nodes,
    edges
  });

  function onExpandClick() {
    // Use the helper method to determine the ids to expand
    setCollapsedNodeIds(getExpandPathIds('some node id'))
  }

  return (
    <>
      <button onClick={onExpandClick}>
        Expand Node
      </button>
      <GraphCanvas
        collapsedNodeIds={collapsedNodeIds}
        nodes={nodes}
        edges={edges}
      />
    </>
  );
};
`})})]})}function f(s={}){const{wrapper:e}=Object.assign({},t(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(o,s)})):o(s)}export{f as default};
