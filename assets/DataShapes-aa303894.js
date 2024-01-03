import{j as e}from"./jsx-runtime-9c4ae004.js";import{M as a}from"./index-19c753e5.js";import{u as s}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-22a3b360.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-6fd5a17b.js";import"./extends-98964cd2.js";import"./index-2749be16.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/API/Data Shapes"}),`
`,e.jsx(n.h1,{id:"data-shapes",children:"Data Shapes"}),`
`,e.jsx(n.p,{children:"The graph is made up of 2 basic data shape objects you can pass to the graph."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"GraphNode"})," - The sphere element-like object that represents an entity in the graph"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"GraphEdge"})," - The link between Nodes"]}),`
`]}),`
`,e.jsx(n.h2,{id:"graphelementbaseattributes",children:"GraphElementBaseAttributes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export interface GraphElementBaseAttributes<T = any> {
  /**
   * ID of the element.
   */
  id: string;

  /**
   * Extra data associated with the element.
   */
  data?: T;

  /**
   * Label for the element.
   */
  label?: string;

  /**
   * Size of the element.
   */
  size?: number;

  /**
   * Force label visible or not.
   */
  labelVisible?: boolean;
}
`})}),`
`,e.jsx(n.h2,{id:"graphnode",children:"GraphNode"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export interface GraphNode extends GraphElementBaseAttributes {
  /**
   * Icon URL for the node.
   */
  icon?: string;

  /**
   * Fill color for the node.
   */
  fill?: string;
}
`})}),`
`,e.jsx(n.h2,{id:"graphedge",children:"GraphEdge"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export interface GraphEdge extends GraphElementBaseAttributes {
  /**
   * Source ID of the node.
   */
  source: string;

  /**
   * Target ID of the node.
   */
  target: string;
}
`})})]})}function u(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{u as default};
