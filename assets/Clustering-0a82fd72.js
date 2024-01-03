import{j as e}from"./jsx-runtime-9c4ae004.js";import{M as s,b as i}from"./index-19c753e5.js";import"./RadialMenu-ee3d72fc.js";import"./index-1b03fe98.js";import{u as o}from"./index-2ef8b458.js";import"./iframe-22a3b360.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-6fd5a17b.js";import"./extends-98964cd2.js";import"./index-2749be16.js";import"./index-356e4a49.js";import"./index-27578f8f.esm-24d23efb.js";import"./client-449ccf6c.js";function r(t){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",pre:"pre"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Advanced/Clustering"}),`
`,e.jsx(n.h1,{id:"clustering",children:"Clustering"}),`
`,e.jsx(n.p,{children:`reagraph supports the ability to cluster nodes in a graph. This is useful for visualizing large graphs
where the number of nodes is too large to display on the screen at once.`}),`
`,e.jsxs(n.p,{children:[`Clustering is only available on the force directed layout and under the hood
uses `,e.jsx(n.a,{href:"https://github.com/vasturiano/d3-force-cluster-3d",target:"_blank",rel:"nofollow noopener noreferrer",children:"d3-force-cluster-3d"}),"."]}),`
`,e.jsx(n.h2,{id:"useage",children:"Useage"}),`
`,e.jsxs(n.p,{children:["In order to cluster nodes, you must provide a ",e.jsx(n.code,{children:"clusterAttribute"})," property on the ",e.jsx(n.code,{children:"GraphCanvas"})," component. For example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const nodes = [
  { id: '1', label: 'Tesla', data: { category: 'EV' }},
  { id: '2', label: 'C8', data: { category: 'ICE' }}
];

const App = () => (
  <GraphCanvas
    nodes={nodes}
    edges={[]}
    clusterAttribute="category"
  />
)
`})}),`
`,e.jsx(n.p,{children:`Below you can see an example of the clustered graph where each node is color
coded to better show the clustering.`}),`
`,e.jsx("div",{style:{height:400,width:"100%",position:"relative",margin:"0 auto",background:"white",borderRadius:4,border:"1px solid rgba(0,0,0,.1)",boxShadow:"rgb(0 0 0 / 10%) 0 1px 3px 0",overflow:"hidden"},children:e.jsx(i,{id:"demos-cluster--simple"})}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:[`You can change the style of the clustering ( or turn it off completely ) by setting
the `,e.jsx(n.code,{children:"Theme"})," properties. For example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Theme } from 'reagraph';

export const darkTheme: Theme = {
  // ...Rest of your theme...
  cluster: {

    // Pass \`null\` to hide the stroke
    stroke: '#474B56',

    // Pass \`null\` to hide the labels
    label: {
      stroke: '#1E2026',
      color: '#ACBAC7'
    }
  }
};
`})})]})}function C(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{C as default};
