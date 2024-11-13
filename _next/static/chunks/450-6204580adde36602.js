"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{6087:function(e,t,a){a.d(t,{default:function(){return l}});var s=a(7437),r=a(7440),n=a(7138),o=a(6463);function l(e){let{absolute:t,className:a="",activeClassName:l="",disabled:i,children:d,...c}=e,f=(0,o.usePathname)(),u=t?c.href.toString().split("/")[1]==f.split("/")[1]:f===c.href;return(c.href.toString().includes("http")&&(u=!1),i)?(0,s.jsx)("div",{className:(0,r.cn)(a,"cursor-not-allowed"),children:d}):(0,s.jsx)(n.default,{className:(0,r.cn)(a,u&&l),...c,children:d})}},9947:function(e,t,a){a.d(t,{default:function(){return g}});var s=a(7437),r=a(9526),n=a(6087),o=a(882);let l=o.fC,i=o.wy,d=o.Fw;var c=a(7440),f=a(5317),u=a(7592),m=a(2421),p=a(2265),x=a(6463);function h(e){let{title:t,href:a,items:r,noLink:o,level:g,isSheet:b}=e,N=(0,x.usePathname)(),[y,j]=(0,p.useState)(0==g);(0,p.useEffect)(()=>{(N==a||N.includes(a))&&j(!0)},[a,N]);let v=(0,s.jsx)(n.default,{activeClassName:"text-primary font-medium",href:a,children:t}),w=o?(0,s.jsx)("h4",{className:"font-medium sm:text-sm text-primary",children:t}):b?(0,s.jsx)(f.SheetClose,{asChild:!0,children:v}):v;return r?(0,s.jsx)("div",{className:"flex flex-col gap-1 w-full",children:(0,s.jsxs)(l,{open:y,onOpenChange:j,children:[(0,s.jsx)(i,{className:"w-full pr-5",children:(0,s.jsxs)("div",{className:"flex items-center justify-between cursor-pointer w-full",children:[w,(0,s.jsx)("span",{children:y?(0,s.jsx)(m.Z,{className:"h-[0.9rem] w-[0.9rem]"}):(0,s.jsx)(u.Z,{className:"h-[0.9rem] w-[0.9rem]"})})]})}),(0,s.jsx)(d,{children:(0,s.jsx)("div",{className:(0,c.cn)("flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",g>0&&"pl-4 border-l ml-1.5"),children:null==r?void 0:r.map(e=>{let t={...e,href:"".concat(a+e.href),level:g+1,isSheet:b};return(0,s.jsx)(h,{...t},t.href)})})})]})}):(0,s.jsx)("div",{className:"flex flex-col",children:w})}function g(e){let{isSheet:t=!1}=e;return(0,x.usePathname)().startsWith("/docs")?(0,s.jsx)("div",{className:"flex flex-col gap-3.5 mt-5 pr-2 pb-6",children:r.Z.map((e,a)=>{let r={...e,href:"/docs".concat(e.href),level:0,isSheet:t};return(0,s.jsx)(h,{...r},e.title+a)})}):null}},3137:function(e,t,a){a.d(t,{default:function(){return m}});var s=a(7437),r=a(4817),n=a(5764),o=a(9827),l=a(2265),i=a(7440);let d=l.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});d.displayName="Input";var c=a(837),f=a(6087),u=a(4880);function m(){let[e,t]=(0,l.useState)(""),[a,m]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=e=>{e.ctrlKey&&"k"===e.key&&(e.preventDefault(),m(!0))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]);let x=(0,l.useMemo)(()=>(0,i.bp)(e.trim()),[e]);return(0,s.jsx)("div",{children:(0,s.jsxs)(c.Vq,{open:a,onOpenChange:e=>{e||t(""),m(e)},children:[(0,s.jsx)(c.hg,{asChild:!0,children:(0,s.jsxs)("div",{className:"relative flex-1 max-w-md cursor-pointer",children:[(0,s.jsx)(r.Z,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400"}),(0,s.jsx)(d,{className:"md:w-full rounded-md dark:bg-background/95 bg-background border h-9 pl-10 pr-0 sm:pr-4 text-sm shadow-sm overflow-ellipsis",placeholder:"Search documentation...",type:"search"}),(0,s.jsxs)("div",{className:"sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-stone-900 bg-stone-200/65 p-1 rounded-sm",children:[(0,s.jsx)(n.Z,{className:"w-3 h-3"}),(0,s.jsx)("span",{children:"k"})]})]})}),(0,s.jsxs)(c.cZ,{className:"p-0 max-w-[650px] sm:top-[38%] top-[45%] !rounded-md",children:[(0,s.jsx)(c.DialogTitle,{className:"sr-only",children:"Search"}),(0,s.jsx)(c.fK,{children:(0,s.jsx)("input",{value:e,onChange:e=>t(e.target.value),placeholder:"Type something to search...",autoFocus:!0,className:"h-14 px-6 bg-transparent border-b text-[14px] outline-none"})}),0==x.length&&e&&(0,s.jsxs)("p",{className:"text-muted-foreground mx-auto mt-2 text-sm",children:["No results found for"," ",(0,s.jsx)("span",{className:"text-primary",children:'"'.concat(e,'"')})]}),(0,s.jsx)(u.ScrollArea,{className:"max-h-[400px] overflow-y-auto",children:(0,s.jsx)("div",{className:"flex flex-col items-start overflow-y-auto sm:px-2 px-1 pb-4",children:x.map(e=>{let t=e.href.split("/").slice(1).length-1,a=p[t];return(0,s.jsx)(c.GG,{asChild:!0,children:(0,s.jsx)(f.default,{className:(0,i.cn)("dark:hover:bg-stone-900 hover:bg-stone-100 w-full px-3 rounded-sm text-sm flex items-center gap-2.5",a),href:"/docs".concat(e.href),children:(0,s.jsxs)("div",{className:(0,i.cn)("flex items-center w-fit h-full py-3 gap-1.5 px-2",t>1&&"border-l pl-4"),children:[(0,s.jsx)(o.Z,{className:"h-[1.1rem] w-[1.1rem] mr-1"})," ",e.title]})})},e.href)})})})]})]})})}let p={1:"pl-2",2:"pl-4",3:"pl-10"}},8012:function(e,t,a){a.d(t,{ModeToggle:function(){return b}});var s=a(7437),r=a(2265),n=a(8296),o=a(2699),l=a(9512),i=a(495),d=a(6047),c=a(7592),f=a(2468),u=a(8165),m=a(7440);let p=d.fC,x=d.xz;d.ZA,d.Uv,d.Tr,d.Ee,r.forwardRef((e,t)=>{let{className:a,inset:r,children:n,...o}=e;return(0,s.jsxs)(d.fF,{ref:t,className:(0,m.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",r&&"pl-8",a),...o,children:[n,(0,s.jsx)(c.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=d.fF.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(d.tu,{ref:t,className:(0,m.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r})}).displayName=d.tu.displayName;let h=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...n}=e;return(0,s.jsx)(d.Uv,{children:(0,s.jsx)(d.VY,{ref:t,sideOffset:r,className:(0,m.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})})});h.displayName=d.VY.displayName;let g=r.forwardRef((e,t)=>{let{className:a,inset:r,...n}=e;return(0,s.jsx)(d.ck,{ref:t,className:(0,m.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",a),...n})});function b(){let{setTheme:e}=(0,l.F)();return(0,s.jsxs)(p,{children:[(0,s.jsx)(x,{asChild:!0,children:(0,s.jsxs)(i.z,{variant:"ghost",size:"icon",children:[(0,s.jsx)(n.Z,{className:"h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,s.jsx)(o.Z,{className:"absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,s.jsxs)(h,{align:"end",children:[(0,s.jsx)(g,{onClick:()=>e("light"),children:"Light"}),(0,s.jsx)(g,{onClick:()=>e("dark"),children:"Dark"}),(0,s.jsx)(g,{onClick:()=>e("system"),children:"System"})]})]})}g.displayName=d.ck.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,checked:n,...o}=e;return(0,s.jsxs)(d.oC,{ref:t,className:(0,m.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:n,...o,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(d.wU,{children:(0,s.jsx)(f.Z,{className:"h-4 w-4"})})}),r]})}).displayName=d.oC.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(d.Rk,{ref:t,className:(0,m.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(d.wU,{children:(0,s.jsx)(u.Z,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=d.Rk.displayName,r.forwardRef((e,t)=>{let{className:a,inset:r,...n}=e;return(0,s.jsx)(d.__,{ref:t,className:(0,m.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",a),...n})}).displayName=d.__.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(d.Z0,{ref:t,className:(0,m.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=d.Z0.displayName},495:function(e,t,a){a.d(t,{d:function(){return i},z:function(){return d}});var s=a(7437),r=a(2265),n=a(1538),o=a(2218),l=a(7440);let i=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9",xs:"h-7 rounded-md px-2"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:o,asChild:d=!1,...c}=e,f=d?n.g7:"button";return(0,s.jsx)(f,{className:(0,l.cn)(i({variant:r,size:o,className:a})),ref:t,...c})});d.displayName="Button"},837:function(e,t,a){a.d(t,{DialogTitle:function(){return p},GG:function(){return c},Vq:function(){return l},cZ:function(){return u},fK:function(){return m},hg:function(){return i}});var s=a(7437),r=a(2265),n=a(3304),o=a(7440);let l=n.fC,i=n.xz,d=n.h_,c=n.x8,f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});f.displayName=n.aV.displayName;let u=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(f,{}),(0,s.jsxs)(n.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l,children:[r,(0,s.jsxs)(n.x8,{className:"absolute right-3 top-3.5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)("div",{className:"rounded-sm text-xs border py-1 px-2 hover:bg-muted",children:"Esc"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=n.VY.displayName;let m=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};m.displayName="DialogHeader";let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});p.displayName=n.Dx.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...r})}).displayName=n.dk.displayName},4880:function(e,t,a){a.d(t,{ScrollArea:function(){return l}});var s=a(7437),r=a(2265),n=a(8478),o=a(7440);let l=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(n.fC,{ref:t,className:(0,o.cn)("relative overflow-hidden",a),...l,children:[(0,s.jsx)(n.l_,{className:"h-full w-full rounded-[inherit]",children:r}),(0,s.jsx)(i,{}),(0,s.jsx)(n.Ns,{})]})});l.displayName=n.fC.displayName;let i=r.forwardRef((e,t)=>{let{className:a,orientation:r="vertical",...l}=e;return(0,s.jsx)(n.gb,{ref:t,orientation:r,className:(0,o.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a),...l,children:(0,s.jsx)(n.q4,{className:"relative flex-1 rounded-full bg-border"})})});i.displayName=n.gb.displayName},5317:function(e,t,a){a.r(t),a.d(t,{Sheet:function(){return d},SheetClose:function(){return f},SheetContent:function(){return x},SheetDescription:function(){return N},SheetFooter:function(){return g},SheetHeader:function(){return h},SheetOverlay:function(){return m},SheetPortal:function(){return u},SheetTitle:function(){return b},SheetTrigger:function(){return c}});var s=a(7437),r=a(2265),n=a(3304),o=a(2218),l=a(4697),i=a(7440);let d=n.fC,c=n.xz,f=n.x8,u=n.h_,m=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.aV,{className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});m.displayName=n.aV.displayName;let p=(0,o.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),x=r.forwardRef((e,t)=>{let{side:a="right",className:r,children:o,...d}=e;return(0,s.jsxs)(u,{children:[(0,s.jsx)(m,{}),(0,s.jsxs)(n.VY,{ref:t,className:(0,i.cn)(p({side:a}),r),...d,children:[o,(0,s.jsxs)(n.x8,{className:"absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(l.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=n.VY.displayName;let h=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};h.displayName="SheetHeader";let g=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};g.displayName="SheetFooter";let b=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold text-foreground",a),...r})});b.displayName=n.Dx.displayName;let N=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...r})});N.displayName=n.dk.displayName},9526:function(e,t,a){a.d(t,{Z:function(){return s}});let s=[{title:"Getting Started",href:"/getting-started",noLink:!0,items:[{title:"Introduction",href:"/introduction"},{title:"Installation",href:"/installation"},{title:"Quick Start Guide",href:"/quick-start-guide"},{title:"Project Structure",href:"/project-structure"},{title:"Components",href:"/components",items:[{title:"Stepper",href:"/stepper"},{title:"Tabs",href:"/tabs"},{title:"Note",href:"/note"},{title:"Code Block",href:"/code-block"},{title:"Image & Link",href:"/image-link"},{title:"Custom",href:"/custom"}]},{title:"Themes",href:"/themes"},{title:"Customize",href:"/customize"}]}];s.map(e=>(function e(t){var a;let s=[];return t.noLink||s.push({title:t.title,href:t.href}),null===(a=t.items)||void 0===a||a.forEach(a=>{let r={...a,href:"".concat(t.href).concat(a.href)};s.push(...e(r))}),s})(e)).flat()},7440:function(e,t,a){a.d(t,{bp:function(){return l},cn:function(){return o}});var s=a(4839),r=a(6164),n=a(9526);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}function l(e){return n.Z.map(t=>(function e(t,a,s,r,n){var o;let l=[],i=!1,d="".concat(s).concat(a.href);return!a.noLink&&a.title.toLowerCase().includes(t.toLowerCase())&&(l.push({...a,items:void 0,href:d}),i=!0),(!n||r<n)&&(null===(o=a.items)||void 0===o||o.forEach(s=>{let o=e(t,s,d,r+1,n);!o.length||i||a.noLink||(l.push({...a,items:void 0,href:d}),i=!0),l.push(...o)})),l})(e,t,"",1,0==e.length?2:void 0)).flat()}}}]);