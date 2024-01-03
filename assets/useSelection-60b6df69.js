import{r}from"./index-1b03fe98.js";import{d as Q,e as D,u as V}from"./RadialMenu-ee3d72fc.js";function W(b,v,N){return Q(b,v,N)}const $=({selections:b=[],nodes:v=[],actives:N=[],focusOnSelect:g=!0,type:h="single",pathHoverType:k="out",pathSelectionType:w="direct",ref:c,hotkeys:y=["selectAll","deselect","delete"],disabled:o,onSelection:a})=>{const[M,K]=r.useState([]),[A,C]=r.useState(N),[n,u]=r.useState(b),[p,L]=r.useState(!1),E=h==="multi"||h==="multiModifier",d=r.useCallback(s=>{if(!o&&s){s=Array.isArray(s)?s:[s];const e=s.filter(t=>!n.includes(t));if(e.length){const t=[...n,...e];a==null||a(t),u(t)}}},[o,n,a]),m=r.useCallback(s=>{if(!o&&s){s=Array.isArray(s)?s:[s];const e=n.filter(t=>!s.includes(t));a==null||a(e),u(e)}},[o,n,a]),l=r.useCallback((s=[])=>{o||(s=Array.isArray(s)?s:[s],C([]),u(s),a==null||a(s))},[o,a]),I=r.useCallback(s=>{n.includes(s)?m(s):E?d(s):l(s)},[d,l,n,E,m]),z=r.useCallback(s=>{var e;if(E?h==="multiModifier"?p?d(s.id):l(s.id):d(s.id):l(s.id),g===!0||g==="singleOnly"&&!p){if(!c.current)throw new Error("No ref found for the graph canvas.");const t=c.current.getGraph(),{nodes:i}=D(t,[s.id],w);(e=c.current)==null||e.centerGraph([s.id,...i])}},[d,l,g,E,p,w,c,h]),R=r.useCallback((s,e)=>{const t=c.current.getGraph();if(!t)throw new Error("Graph is not initialized");const i=W(t,s,e);l([s,e]);const P=[];for(let f=0;f<i.length-1;f++){const F=i[f],J=i[f+1],j=t.getEdgeAttributes(F,J);j&&P.push(j.id)}C([...i.map(f=>f),...P])},[l,c]),G=r.useCallback(s=>{const e=s.target,t=e.tagName!=="INPUT"&&e.tagName!=="SELECT"&&e.tagName!=="TEXTAREA"&&!e.isContentEditable,i=s.metaKey||s.ctrlKey;t&&i&&(s.preventDefault(),L(!0))},[]);r.useEffect(()=>(window.addEventListener("keydown",G),()=>{window.removeEventListener("keydown",G)}),[G]);const U=r.useCallback(s=>{var e;if(s.button!==2&&(n.length||A.length)&&(l(),L(!1),g&&n.length===1)){if(!c.current)throw new Error("No ref found for the graph canvas.");(e=c.current)==null||e.centerGraph()}},[l,g,A.length,n.length,c]),X=r.useCallback(s=>{C(s)},[]),q=r.useCallback(s=>{l(s)},[l]),x=r.useCallback(s=>{if(k){const e=c.current.getGraph();if(!e)throw new Error("No ref found for the graph canvas.");const{nodes:t,edges:i}=D(e,[s.id],k);K([...t,...i])}},[k,c]),B=r.useCallback(()=>{k&&K([])},[k]);return r.useEffect(()=>{var s;if(w!=="direct"&&n.length>0){const e=(s=c.current)==null?void 0:s.getGraph();if(e){const{nodes:t,edges:i}=D(e,n,w);C([...t,...i])}}},[n,w,c]),V([{name:"Select All",keys:"mod+a",disabled:!y.includes("selectAll"),category:"Graph",description:"Select all nodes and edges",callback:s=>{if(s.preventDefault(),!o&&h!=="single"){const e=v.map(t=>t.id);a==null||a(e),u(e)}}},{name:"Deselect Selections",category:"Graph",disabled:!y.includes("deselect"),description:"Deselect selected nodes and edges",keys:"escape",callback:s=>{o||(s.preventDefault(),a==null||a([]),u([]))}}]),{actives:r.useMemo(()=>[...A,...M],[A,M]),onNodeClick:z,onNodePointerOver:x,onNodePointerOut:B,onLasso:X,onLassoEnd:q,selectNodePaths:R,onCanvasClick:U,selections:n,clearSelections:l,addSelection:d,removeSelection:m,toggleSelection:I,setSelections:u}};export{$ as u};
