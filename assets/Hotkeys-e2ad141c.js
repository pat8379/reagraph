import{j as e}from"./jsx-runtime-9c4ae004.js";import{M as r}from"./index-19c753e5.js";import{u as s}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-22a3b360.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-6fd5a17b.js";import"./extends-98964cd2.js";import"./index-2749be16.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",pre:"pre",code:"code"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Advanced/Hotkeys"}),`
`,e.jsx(n.h1,{id:"hotkeys",children:"Hotkeys"}),`
`,e.jsxs(n.p,{children:["Under the hood the library uses ",e.jsx(n.a,{href:"https://github.com/reaviz/reakeys",target:"_blank",rel:"nofollow noopener noreferrer",children:"reakeys"}),` for
binding hotkeys.`]}),`
`,e.jsx(n.h3,{id:"camera-controls",children:"Camera Controls"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  name: 'Zoom In',
  keys: 'command+shift+i'
},
{
  name: 'Zoom Out',
  keys: 'command+shift+o'
},
{
  name: 'Center',
  keys: ['command+shift+c']
}
`})}),`
`,e.jsx(n.h3,{id:"selection",children:"Selection"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  name: 'Select All',
  keys: 'mod+a',
},
{
  name: 'Deselect Selections',
  keys: 'escape'
}
`})})]})}function f(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{f as default};
