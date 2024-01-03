import{j as e}from"./jsx-runtime-9c4ae004.js";import{M as s,b as r}from"./index-19c753e5.js";import{u as i}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-22a3b360.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-6fd5a17b.js";import"./extends-98964cd2.js";import"./index-2749be16.js";import"./index-356e4a49.js";function o(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Getting Started/FAQ"}),`
`,e.jsx(n.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(n.h2,{id:"resizing-the-graphcanvas",children:"Resizing the GraphCanvas"}),`
`,e.jsxs(n.p,{children:[`If you are having trouble resizing the canvas such that it does not take up the whole page, you can
use wrap the `,e.jsx(n.code,{children:"<GraphCanvas/>"})," component with a fixed position div and adjust the size. For example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div style={{ position: "fixed", width: '75%', height: '75%'}}>
  <GraphCanvas nodes={n} edges={e} />
</div>
`})}),`
`,e.jsx(n.h2,{id:"font-support",children:"Font Support"}),`
`,e.jsxs(n.p,{children:["By default, regraph uses ",e.jsx(n.code,{children:"troika-three-text"}),` which uses the Roboto font
loaded by Google Fonts CDN. You can override this by passing `,e.jsx(n.code,{children:"labelFontUrl"}),`.
The supported font formats are:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ttf"}),`
`,e.jsx(n.li,{children:"otf"}),`
`,e.jsx(n.li,{children:"woff"}),`
`]}),`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:"woff2"})," is not supported."]}),`
`,e.jsx("div",{style:{height:300,width:300,position:"relative",margin:"0 auto",background:"white",borderRadius:4,border:"1px solid rgba(0,0,0,.1)",boxShadow:"rgb(0 0 0 / 10%) 0 1px 3px 0",overflow:"hidden"},children:e.jsx(r,{id:"demos-basic--special-characters"})})]})}function g(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{g as default};
