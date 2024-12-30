(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1472,4253],{67296:(he,z,a)=>{"use strict";a.d(z,{r:()=>g});var e=a(14041),P=a(95208);const U=(0,e.lazy)(()=>Promise.all([a.e(3664),a.e(4533)]).then(a.bind(a,64533)).then(S=>({default:S.RealLogViewer})));function g(S){const{Progress:f}=(0,P.n)().getComponents();return e.createElement(e.Suspense,{fallback:e.createElement(f,null)},e.createElement(U,{...S}))}},70209:(he,z,a)=>{"use strict";a.d(z,{l:()=>f});var e=a(18139),P=a(54195),U=a(89475),g=a(10265);const S=()=>{const{t:w}=(0,g.i)(U.O);return{url:"https://github.com/backstage/backstage/issues",items:[{title:w("supportConfig.default.title"),icon:"warning",links:[{title:w("supportConfig.default.linkTitle"),url:"https://github.com/backstage/backstage/blob/master/app-config.yaml"}]}]}};function f(){const o=(0,e.Q2)().get(P.U)?.getOptionalConfig("app.support"),W=S();return o?{url:o.getString("url"),items:o.getConfigArray("items").flatMap(l=>({title:l.getString("title"),icon:l.getOptionalString("icon"),links:(l.getOptionalConfigArray("links")??[]).flatMap(A=>({url:A.getString("url"),title:A.getOptionalString("title")??""}))}))}:W}},41544:(he,z,a)=>{"use strict";a.d(z,{M:()=>we});var e=a(42899),P=a(58837),U=a(72501),g=a(14041),S=a(18690),f=a(75202),w=a(45250),I=a(45810),o=a(70209);const W=a.p+"static/mic-drop.fe3ef4d0..svg",l=(0,P.A)(F=>({micDrop:{maxWidth:"60%",bottom:F.spacing(2),right:F.spacing(2),[F.breakpoints.down("xs")]:{maxWidth:"96%",bottom:"unset",right:"unset",margin:F.spacing(10,"auto",4)}}}),{name:"BackstageErrorPageMicDrop"}),A=()=>{const F=l();return g.createElement("img",{src:W,className:F.micDrop,alt:"Girl dropping mic from her hands"})};var K=a(10265),x=a(89475),V=a(18846),X=a(62112),O=a(1517),D=a(67991),H=a(12784),_=a(12528),M=a(93285),j=a(16975);const p=(0,P.A)(F=>({title:{paddingBottom:F.spacing(5),[F.breakpoints.down("xs")]:{paddingBottom:F.spacing(4),fontSize:F.typography.h3.fontSize}}}),{name:"BackstageErrorPageStackDetails"});function le(F){const{stack:me}=F,Ee=p(),{t:ye}=(0,K.i)(x.O),[Te,Le]=(0,g.useState)(!1);return Te?g.createElement(g.Fragment,null,g.createElement(U.A,{variant:"h6",className:Ee.title},g.createElement(f.N_,{to:"#",onClick:()=>Le(!1)},ye("errorPage.showLessDetails"))),g.createElement(X.z,{text:me,language:"text",showCopyCodeButton:!0,showLineNumbers:!0})):g.createElement(U.A,{variant:"h6",className:Ee.title},g.createElement(f.N_,{to:"#",onClick:()=>Le(!0)},ye("errorPage.showMoreDetails")))}const ce=(0,P.A)(F=>({container:{padding:F.spacing(8),[F.breakpoints.down("xs")]:{padding:F.spacing(2)}},title:{paddingBottom:F.spacing(5),[F.breakpoints.down("xs")]:{paddingBottom:F.spacing(4),fontSize:F.typography.h3.fontSize}},subtitle:{color:F.palette.textSubtle}}),{name:"BackstageErrorPage"});function we(F){const{status:me="",statusMessage:Ee,additionalInfo:ye,supportUrl:Te,stack:Le}=F,Ae=ce(),be=(0,S.Zp)(),Ne=(0,o.l)(),{t:Me}=(0,K.i)(x.O);return g.createElement(e.A,{container:!0,className:Ae.container},g.createElement(e.A,{item:!0,xs:12,sm:8,md:4},g.createElement(U.A,{"data-testid":"error",variant:"body1",className:Ae.subtitle},Me("errorPage.subtitle",{status:me,statusMessage:Ee})),g.createElement(U.A,{variant:"body1",className:Ae.subtitle},ye),g.createElement(U.A,{variant:"h2",className:Ae.title},Me("errorPage.title")),g.createElement(U.A,{variant:"h6",className:Ae.title},g.createElement(f.N_,{to:"#","data-testid":"go-back-link",onClick:()=>be(-1)},Me("errorPage.goBack")),"... or please"," ",g.createElement(f.N_,{to:Te||Ne.url},"contact support")," if you think this is a bug."),Le&&g.createElement(le,{stack:Le})),g.createElement(A,null))}},64088:(he,z,a)=>{"use strict";a.d(z,{p:()=>Xt});var e=a(14041),P=a(42899),U=a(58837),g=a(22638),S=a(9394),f=a(91360),w=a(22856),I=a(96872);const o="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",W=t=>{(0,e.useEffect)(()=>{if(!t)return()=>{};const r=t.querySelectorAll('head > link[rel="stylesheet"]');let s=r?.length??0;const c=new CustomEvent(o);if(!s)return t.dispatchEvent(c),()=>{};const i=()=>{--s===0&&t.dispatchEvent(c)};return r?.forEach(m=>{m.addEventListener("load",i)}),()=>{r?.forEach(m=>{m.removeEventListener("load",i)})}},[t])},l=t=>{const[r,s]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{if(!t)return()=>{};s(!0);const c=t.style;c.setProperty("opacity","0");const i=()=>{s(!1),c.setProperty("opacity","1")};return t.addEventListener(o,i),()=>{t.removeEventListener(o,i)}},[t]),r},A=t=>{const{element:r,onAppend:s,children:c}=t,[i,m]=(0,e.useState)((0,S.vt)({...(0,w.A)(),insertionPoint:void 0}));W(r);const E=l(r),N=(0,e.useCallback)(k=>{if(!r||!k)return;m((0,S.vt)({...(0,w.A)(),insertionPoint:r.querySelector("head")||void 0}));let B=k.shadowRoot;B||(B=k.attachShadow({mode:"open"})),B.replaceChildren(r),typeof s=="function"&&s(B)},[r,s]);return e.createElement(e.Fragment,null,E&&e.createElement(I.k,null),e.createElement(f.Ay,{jss:i,sheetsManager:new Map},e.createElement("div",{ref:N,"data-testid":"techdocs-native-shadowroot"}),c))};var K=a(12784);const x=()=>{const{shadowRoot:t}=(0,g.V)();return t},V=t=>{const r=x(),[s,c]=(0,e.useState)(r?.firstChild);return(0,e.useEffect)(()=>{let i;return r&&(i=new MutationObserver(()=>{c(r?.firstChild)}),i.observe(r,{attributes:!0,characterData:!0,childList:!0,subtree:!0})),()=>i?.disconnect()},[r]),!s||!(s instanceof HTMLElement)?[]:t.map(i=>s.querySelectorAll(i)).filter(i=>i.length).map(i=>Array.from(i)).flat()},X=t=>t.toString()&&t.rangeCount&&t.getRangeAt(0).getBoundingClientRect().top,O=(t=0)=>{const r=x(),[s,c]=useState(null),i=useMemo(()=>debounce(()=>{const m=r,E=m.getSelection?m.getSelection():document.getSelection();E&&X(E)?c(E):c(null)},t),[r,c,t]);return useEffect(()=>(window.document.addEventListener("selectionchange",i),()=>{i.cancel(),window.document.removeEventListener("selectionchange",i)}),[i]),s};var D=a(41544),H=a(16454),_=a(87437),M=a(78467),j=a(61783),p=a(33986);const le=(0,U.A)(t=>({loading:{right:t.spacing(1),position:"absolute"}})),ce=t=>r=>e.createElement(_.Lt,{inheritParentContextIfAvailable:!0},e.createElement(t,{...r})),we=()=>{const t=le();return e.createElement(M.A,{className:t.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},F=ce(function(r){const{loading:s,value:c,onChange:i=()=>{},options:m=[],getOptionLabel:E=u=>String(u),inputPlaceholder:N,inputDebounceTime:k,freeSolo:B=!0,fullWidth:L=!0,clearOnBlur:G=!1,"data-testid":Y="search-autocomplete",...Oe}=r,{setTerm:Se}=(0,_.SQ)(),ue=(0,e.useCallback)(u=>u?typeof u=="string"?u:E(u):"",[E]),v=(0,e.useMemo)(()=>ue(c),[c,ue]),n=(0,e.useCallback)((u,R,$,J)=>{Se(ue(R)),i(u,R,$,J)},[ue,Se,i]),d=(0,e.useCallback)(({InputProps:{ref:u,className:R,endAdornment:$},InputLabelProps:J,...ae})=>e.createElement(p.I,{...ae,ref:u,clearButton:!1,value:v,placeholder:N,debounceTime:k,endAdornment:s?e.createElement(we,null):$,InputProps:{className:R}}),[s,v,N,k]);return e.createElement(j.Ay,{...Oe,"data-testid":Y,value:c,onChange:n,options:m,getOptionLabel:E,renderInput:d,freeSolo:B,fullWidth:L,clearOnBlur:G})});var me=a(18690),Ee=a(41472);const ye=t=>t?.document,Te=t=>{const{entityId:r,entityTitle:s,debounceTime:c=150}=t,[i,m]=(0,e.useState)(!1),E=(0,me.Zp)(),{setFilters:N,term:k,result:{loading:B,value:L}}=(0,_.SQ)(),[G,Y]=(0,e.useState)([]);(0,e.useEffect)(()=>{let n=!0;if(n&&L){const d=L.results.slice(0,10);Y(d)}return()=>{n=!1}},[B,L]);const{kind:Oe,name:Se,namespace:ue}=r;(0,e.useEffect)(()=>{N(n=>({...n,kind:Oe,namespace:ue,name:Se}))},[Oe,ue,Se,N]);const v=(n,d)=>{if(ye(d)){const{location:u}=d.document;E(u)}};return e.createElement(F,{"data-testid":"techdocs-search-bar",size:"small",open:i&&!!k,getOptionLabel:()=>"",filterOptions:n=>n,onClose:()=>{m(!1)},onOpen:()=>{m(!0)},onChange:v,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:G,renderOption:({document:n,highlight:d})=>e.createElement(Ee.TechDocsSearchResultListItem,{result:n,lineClamp:3,asListItem:!1,asLink:!1,title:n.title,highlight:d}),loading:B,inputDebounceTime:c,inputPlaceholder:`Search ${s||r.name} docs`,freeSolo:!1})},Le=t=>{const r={term:"",types:["techdocs"],pageCursor:"",filters:t.entityId};return e.createElement(_.Lt,{initialState:r},e.createElement(Te,{...t}))};var Ae=a(64947),be=a(74219),Ne=a(67296),Me=a(73845),Ue=a(29365),ft=a(72501),ht=a(99703),gt=a(32881);const ot=(0,U.A)(t=>(0,ht.A)({paper:{width:"100%",[t.breakpoints.up("sm")]:{width:"75%"},[t.breakpoints.up("md")]:{width:"50%"},padding:t.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:t.palette.background.default}})),pt=({buildLog:t,onClose:r})=>{const s=ot(),c=t.length===0?"Waiting for logs...":t.join(`
`);return e.createElement(P.A,{container:!0,direction:"column",className:s.root,spacing:0,wrap:"nowrap"},e.createElement(P.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap"},e.createElement(ft.A,{variant:"h5"},"Build Details"),e.createElement(Ue.A,{key:"dismiss",title:"Close the drawer",onClick:r,color:"inherit"},e.createElement(gt.A,null))),e.createElement(P.A,{item:!0,xs:!0},e.createElement(Ne.r,{text:c,classes:{root:s.logs}})))},Be=({buildLog:t})=>{const r=ot(),[s,c]=(0,e.useState)(!1);return e.createElement(e.Fragment,null,e.createElement(Ae.A,{color:"inherit",onClick:()=>c(!0)},"Show Build Logs"),e.createElement(Me.Ay,{classes:{paper:r.paper},anchor:"right",open:s,onClose:()=>c(!1)},e.createElement(pt,{buildLog:t,onClose:()=>c(!1)})))};var ke=a(18139),Ze=a(54195),$e=a(52262);const vt=({errorMessage:t})=>{const r=(0,ke.gf)(Ze.U).getOptionalString("techdocs.builder"),s=(0,$e.s)(),{entityRef:c}=(0,g.V)(),i=(0,me.zy)();(0,e.useEffect)(()=>{const{pathname:E,search:N,hash:k}=i;s.captureEvent("not-found",`${E}${N}${k}`,{attributes:c})},[s,c,i]);let m="";return[void 0,"local"].includes(r)||(m="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),e.createElement(D.M,{status:"404",statusMessage:t||"Documentation not found",additionalInfo:m})};var rt=a(73466),st=a(28966),je=a(41712);function it({contentLoading:t,content:r,activeSyncState:s}){return t||s==="BUILD_READY_RELOAD"||!r&&s==="CHECKING"?"CHECKING":!r&&s==="BUILDING"?"INITIAL_BUILD":r?s==="BUILDING"?"CONTENT_STALE_REFRESHING":s==="BUILD_READY"?"CONTENT_STALE_READY":s==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function ge(t,r){const s={...t};switch(r.type){case"sync":r.state==="CHECKING"&&(s.buildLog=[]),s.activeSyncState=r.state,s.syncError=r.syncError;break;case"contentLoading":s.contentLoading=!0,s.contentError=void 0;break;case"content":typeof r.path=="string"&&(s.path=r.path),s.contentLoading=!1,s.content=r.content,s.contentError=r.contentError;break;case"buildLog":s.buildLog=s.buildLog.concat(r.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(s.activeSyncState)&&["contentLoading","content"].includes(r.type)&&(s.activeSyncState="UP_TO_DATE",s.buildLog=[]),s}function y(t,r,s,c){const[i,m]=(0,e.useReducer)(ge,{activeSyncState:"CHECKING",path:c,contentLoading:!0,buildLog:[]}),E=(0,ke.gf)(je.s),{retry:N}=(0,st.A)(async()=>{m({type:"contentLoading"});try{const L=await E.getEntityDocs({kind:t,namespace:r,name:s},c);return m({type:"content",content:L,path:c}),L}catch(L){m({type:"content",contentError:L,path:c})}},[E,t,r,s,c]),k=(0,e.useRef)({content:void 0,reload:()=>{}});return k.current={content:i.content,reload:N},(0,rt.A)(async()=>{m({type:"sync",state:"CHECKING"});const L=setTimeout(()=>{m({type:"sync",state:"BUILDING"})},1e3);try{switch(await E.syncEntityDocs({kind:t,namespace:r,name:s},Y=>{m({type:"buildLog",log:Y})})){case"updated":k.current.content?m({type:"sync",state:"BUILD_READY"}):(k.current.reload(),m({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":m({type:"sync",state:"UP_TO_DATE"});break;default:m({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(G){m({type:"sync",state:"ERROR",syncError:G})}finally{clearTimeout(L)}},[t,s,r,E,m,k]),{state:(0,e.useMemo)(()=>it({activeSyncState:i.activeSyncState,contentLoading:i.contentLoading,content:i.content}),[i.activeSyncState,i.content,i.contentLoading]),contentReload:N,path:i.path,content:i.content,contentErrorMessage:i.contentError?.toString(),syncErrorMessage:i.syncError?.toString(),buildLog:i.buildLog}}const h=(0,e.createContext)({}),C=()=>(0,e.useContext)(h),T=t=>{const{children:r}=t,{"*":s=""}=(0,me.g)(),{entityRef:c}=(0,g.V)(),{kind:i,namespace:m,name:E}=c,N=y(i,m,E,s);return e.createElement(h.Provider,{value:N},r instanceof Function?r(N):r)},b=t=>r=>e.createElement(T,null,e.createElement(t,{...r})),Z=(0,U.A)(t=>({root:{marginBottom:t.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),te=()=>{let t=null;const r=Z(),{state:s,contentReload:c,contentErrorMessage:i,syncErrorMessage:m,buildLog:E}=C();return s==="INITIAL_BUILD"&&(t=e.createElement(be.A,{classes:{root:r.root},variant:"outlined",severity:"info",icon:e.createElement(M.A,{size:"24px"}),action:e.createElement(Be,{buildLog:E})},"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster.")),s==="CONTENT_STALE_REFRESHING"&&(t=e.createElement(be.A,{variant:"outlined",severity:"info",icon:e.createElement(M.A,{size:"24px"}),action:e.createElement(Be,{buildLog:E}),classes:{root:r.root}},"A newer version of this documentation is being prepared and will be available shortly.")),s==="CONTENT_STALE_READY"&&(t=e.createElement(be.A,{variant:"outlined",severity:"success",action:e.createElement(Ae.A,{color:"inherit",onClick:()=>c()},"Refresh"),classes:{root:r.root}},"A newer version of this documentation is now available, please refresh to view.")),s==="CONTENT_STALE_ERROR"&&(t=e.createElement(be.A,{variant:"outlined",severity:"error",action:e.createElement(Be,{buildLog:E}),classes:{root:r.root,message:r.message}},"Building a newer version of this documentation failed."," ",m)),s==="CONTENT_NOT_FOUND"&&(t=e.createElement(e.Fragment,null,m&&e.createElement(be.A,{variant:"outlined",severity:"error",action:e.createElement(Be,{buildLog:E}),classes:{root:r.root,message:r.message}},"Building a newer version of this documentation failed."," ",m),e.createElement(vt,{errorMessage:i}))),t};var pe=a(5893),q=a(54917),oe=a(69362),Q=a(71651),ee=a.n(Q);const Re=/main\.[A-Fa-f0-9]{8}\.min\.css$/,Pe=/^https:\/\/fonts\.googleapis\.com/,De=/^https:\/\/fonts\.gstatic\.com/,Et=t=>t.nodeName==="LINK",lt=t=>{const r=t?.getAttribute("href")||"",s=r.match(Re),c=r.match(Pe),i=r.match(De);return s||c||i},ct=t=>(Et(t)&&!lt(t)&&t.remove(),t),Qe=t=>t.nodeName==="IFRAME",de=(t,r)=>{const s=t.getAttribute("src")||"";try{const{host:c}=new URL(s);return r.includes(c)}catch{return!1}},We=t=>r=>(Qe(r)&&!de(r,t)&&r.remove(),r),dt=()=>{const t=(0,ke.gf)(Ze.U);return(0,e.useMemo)(()=>t.getOptionalConfig("techdocs.sanitizer"),[t])},Ve=()=>{const t=dt();return(0,e.useCallback)(async r=>{const s=t?.getOptionalStringArray("allowedIframeHosts");ee().addHook("beforeSanitizeElements",ct);const c=["link","meta"];return s&&(c.push("iframe"),ee().addHook("beforeSanitizeElements",We(s))),ee().addHook("uponSanitizeElement",(i,m)=>{m.tagName==="meta"&&(i.getAttribute("http-equiv")==="refresh"&&i.getAttribute("content")?.includes("url=")||i.parentNode?.removeChild(i))}),ee().addHook("uponSanitizeAttribute",(i,m)=>{i.tagName!=="meta"&&(m.attrName==="http-equiv"||m.attrName==="content")&&i.removeAttribute(m.attrName)}),ee().sanitize(r.outerHTML,{ADD_TAGS:c,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0})},[t])};var jt=a(65901),ve=a(268),Qt=({theme:t})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${t.palette.text.primary};
  --md-default-fg-color--light: ${t.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,ve.a)(t.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,ve.a)(t.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${t.palette.background.default};
  --md-default-bg-color--light: ${t.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,ve.a)(t.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,ve.a)(t.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${t.palette.primary.main};
  --md-primary-fg-color--light: ${t.palette.primary.light};
  --md-primary-fg-color--dark: ${t.palette.primary.dark};
  --md-primary-bg-color: ${t.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,ve.a)(t.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,ve.X4)(t.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${t.shadows[1]};
  --md-shadow-z2: ${t.shadows[2]};
  --md-shadow-z3: ${t.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
  
  --md-status--updated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cellphone-arrow-down</title><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" /></svg>');
  --md-status: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>');
  --md-status--new: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-10 5h-2v-2h2v2m0-4h-2V7h2v6Z"/></svg>');
  --md-status--deprecated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>');
  --md-status--encrypted: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${t.palette.text.primary};
  --md-code-bg-color: ${t.palette.code?.background??t.palette.background.paper};
  --md-code-hl-color: ${(0,ve.X4)(t.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${t.palette.type==="dark"?t.palette.primary.light:t.palette.primary.dark};
  --md-code-hl-function-color: ${t.palette.type==="dark"?t.palette.secondary.light:t.palette.secondary.dark};
  --md-code-hl-string-color: ${t.palette.type==="dark"?t.palette.success.light:t.palette.success.dark};
  --md-code-hl-number-color: ${t.palette.type==="dark"?t.palette.error.light:t.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${t.palette.link};
  --md-typeset-table-color: ${t.palette.text.primary};
  --md-typeset-table-color--light: ${(0,ve.X4)(t.palette.text.primary,.05)};
  --md-typeset-del-color: ${t.palette.type==="dark"?(0,ve.X4)(t.palette.error.dark,.5):(0,ve.X4)(t.palette.error.light,.5)};
  --md-typeset-ins-color: ${t.palette.type==="dark"?(0,ve.X4)(t.palette.success.dark,.5):(0,ve.X4)(t.palette.success.light,.5)};
  --md-typeset-mark-color: ${t.palette.type==="dark"?(0,ve.X4)(t.palette.warning.dark,.5):(0,ve.X4)(t.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,Ce=({theme:t})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${t.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const yt="224px";var At=({theme:t,sidebar:r})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link:not(:has(svg)) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__link:has(svg) > .md-ellipsis {
  flex-grow: 1;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${t.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}
.md-status--updated::after {
  -webkit-mask-image: var(--md-status--updated);
  mask-image: var(--md-status--updated);
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}
.md-nav__link--active > .md-status:after {
  background-color: var(--md-typeset-a-color);
}
.md-nav__link[href]:hover > .md-status:after {
  background-color: var(--md-accent-fg-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(16rem);
  overflow-y: hidden;
}
@supports selector(::-webkit-scrollbar) {
  [dir=ltr] .md-sidebar__inner {
      padding-right: calc(100% - 15.1rem);
  }
}
.md-sidebar--secondary {
  right: ${t.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-content > .md-sidebar {
  left: 16rem;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 16rem !important;
    z-index: 200;
    left: ${r.isPinned?`calc(-16rem + ${yt})`:"calc(-16rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  [data-md-toggle=drawer]:checked~.md-container .md-sidebar--primary {
    transform: translateX(16rem);
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -16rem !important;
    width: 16rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const Tt=["h1","h2","h3","h4","h5","h6"],Pt=/(em)|(rem)/gi,It=/var\(|\)/gi;var Jt=({theme:t})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${Tt.reduce((r,s)=>{const c=t.typography.htmlFontSize??16,i=t.typography[s],{lineHeight:m,fontFamily:E,fontWeight:N,fontSize:k}=i,B=L=>{if(typeof L=="number")return B(`${L/c*.6}rem`);if(typeof L=="string"){if(L.match(It)){const G=window.getComputedStyle(document.body).getPropertyValue(L.replaceAll(It,""));if(G!=="")return B(G)}else if(L.match(Pt))return`calc(${L.replace(Pt,"")} * var(--md-typeset-font-size))`}return L};return r.concat(`
    .md-typeset ${s} {
      color: var(--md-default-fg-color);
      line-height: ${m};
      font-family: ${E};
      font-weight: ${N};
      font-size: ${B(k)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${t.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
  border-radius: ${t.shape.borderRadius}px;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,Nt=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,qt=({theme:t})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${t.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${t.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${t.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${t.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${t.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const Ut={dark:["#only-light","#gh-light-mode-only"],light:["#only-dark","#gh-dark-mode-only"]};var se=({theme:t})=>`
/*==================  Palette  ==================*/
/*
  When color palette toggle is enabled in material theme for Mkdocs, there is a possibility to show conditionally 
  images by adding #only-dark or #only-light to resource hash. Backstage doesn't use mkdocs color palette mechanism,
  so there is a need to add css rules from palette*.css manually.
*/

${Ut[t.palette.type].map(r=>`img[src$="${r}"]`).join(", ")} {
  display: none;
}
`;const Bt=[Qt,Ce,At,Jt,Nt,qt,se],ie=()=>(0,jt.Ut)(),zt=()=>{const t=ie(),r=(0,q.A)();return(0,e.useMemo)(()=>{const s={theme:r,sidebar:t};return Bt.reduce((c,i)=>c+i(s),"")},[r,t])},ne=()=>{const t=zt();return(0,e.useCallback)(r=>(r.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${t}</style>`),r),[t])},Je=(t,r,s)=>{const c=t==="src"&&r.endsWith(".svg"),i=!r.match(/^([a-z]*:)?\/\//i),m=r.startsWith(s);return c&&(i||m)},bt=({techdocsStorageApi:t,entityId:r,path:s})=>async c=>{const i=await t.getApiOrigin(),m=async(E,N)=>{for(const k of E)if(k.hasAttribute(N)){const B=k.getAttribute(N);if(!B)return;const L=await t.getBaseUrl(B,r,s);if(Je(N,B,i))try{const Y=await(await fetch(L,{credentials:"include"})).text();k.setAttribute(N,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(Y)))}`)}catch{k.setAttribute("alt",`Error: ${B}`)}else k.setAttribute(N,L)}};return await Promise.all([m(c.querySelectorAll("img"),"src"),m(c.querySelectorAll("script"),"src"),m(c.querySelectorAll("source"),"src"),m(c.querySelectorAll("link"),"href"),m(c.querySelectorAll("a[download]"),"href")]),c};var Ht=a(78264),St=a(90292),Ft=a(49043),$t=a.n(Ft);let ze;ze=Promise.resolve().then(a.t.bind(a,43144,19));function qe(t,r){ze.then(s=>{"createRoot"in s?s.createRoot(r).render(t):s.render(t,r)})}const He=t=>r=>{const s=r.querySelector('[title="Edit this page"]');if(!s||!s.href)return r;const c=new URL(s.href),i=t.byUrl(c);if(i?.type!=="github"&&i?.type!=="gitlab")return r;const m=r.querySelector("article>h1")?.childNodes[0].textContent||"",E=encodeURIComponent(`Documentation Feedback: ${m}`),N=encodeURIComponent(`Page source:
${s.href}

Feedback:`),k=i?.type==="github"?(0,Ht.F)(c.href,"blob"):c.href,B=$t()(k),L=`/${B.organization}/${B.name}`,G=s.cloneNode();switch(i?.type){case"gitlab":G.href=`${c.origin}${L}/issues/new?issue[title]=${E}&issue[description]=${N}`;break;case"github":G.href=`${c.origin}${L}/issues/new?title=${E}&body=${N}`;break;default:return r}return qe(e.createElement(St.A),G),G.style.paddingLeft="5px",G.title="Leave feedback for this page",G.id="git-feedback-link",s?.insertAdjacentElement("beforebegin",G),r};var wt=a(27326);const Ct=()=>t=>{const r=t.querySelector('.md-header label[for="__drawer"]'),s=t.querySelector("article");if(!r||!s)return t;const c=r.cloneNode();return qe(e.createElement(wt.A),c),c.id="toggle-sidebar",c.title="Toggle Sidebar",c.classList.add("md-content__button"),c.style.setProperty("padding","0 0 0 5px"),c.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),s?.prepend(c),t},_e=()=>t=>(((s,c)=>{Array.from(s).filter(i=>i.hasAttribute(c)).forEach(i=>{const m=i.getAttribute(c);if(m){m.match(/^https?:\/\//i)&&i.setAttribute("target","_blank");try{const E=et(window.location.href);i.setAttribute(c,new URL(m,E).toString())}catch{i.replaceWith(i.textContent||m)}}})})(Array.from(t.getElementsByTagName("a")),"href"),t);function et(t){const r=new URL(t);return!r.pathname.endsWith("/")&&!r.pathname.endsWith(".html")&&(r.pathname+="/"),r.toString()}const mt=({baseUrl:t,onClick:r})=>s=>(Array.from(s.getElementsByTagName("a")).forEach(c=>{c.addEventListener("click",i=>{const E=c.getAttribute("href");E&&E.startsWith(t)&&!c.hasAttribute("download")&&(i.preventDefault(),r(i,E))})}),s);var Wt=a(7031),Vt=a(50868),en=a(10437),Lt=a(71677),tt=a(36338);const Ge=(0,Wt.A)(t=>({tooltip:{fontSize:"inherit",color:t.palette.text.primary,margin:0,padding:t.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(Lt.Ay),Ke=()=>e.createElement(en.A,null,e.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),_t=({text:t})=>{const[r,s]=(0,e.useState)(!1),[,c]=(0,tt.A)(),i=(0,e.useCallback)(()=>{c(t),s(!0)},[t,c]),m=(0,e.useCallback)(()=>{s(!1)},[s]);return e.createElement(Ge,{title:"Copied to clipboard",placement:"left",open:r,onClose:m,leaveDelay:1e3},e.createElement(Ue.A,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:i},e.createElement(Ke,null)))},Gt=t=>r=>{const s=r.querySelectorAll("pre > code");for(const c of s){const i=c.textContent||"",m=document.createElement("div");c?.parentElement?.prepend(m),qe(e.createElement(Vt.A,{theme:t},e.createElement(_t,{text:i})),m)}return r},Kt=()=>t=>(t.querySelector(".md-header")?.remove(),t),Rt=()=>t=>(t.querySelector(".md-footer .md-copyright")?.remove(),t.querySelector(".md-footer-copyright")?.remove(),t),Dt=({onLoading:t,onLoaded:r})=>s=>(t(),s.addEventListener(o,function c(){r(),s.removeEventListener(o,c)}),s),ut=()=>t=>(setTimeout(()=>{const r=t?.querySelectorAll("li.md-nav__item--active");r.length!==0&&(r.forEach(c=>{const i=c?.querySelector("input");i?.checked||i?.click()}),r[r.length-1].scrollIntoView())},200),t),nt=async(t,r)=>{let s;if(typeof t=="string")s=new DOMParser().parseFromString(t,"text/html").documentElement;else if(t instanceof Element)s=t;else throw new Error("dom is not a recognized type");for(const c of r)s=await c(s);return s};var xe=a(38097);const Ye=(0,U.A)(t=>({button:{color:t.palette.primary.light,textDecoration:"underline"}})),xt=({message:t,handleButtonClick:r,autoHideDuration:s})=>{const c=Ye(),[i,m]=(0,e.useState)(!0),E=()=>m(!1);return e.createElement(xe.A,{open:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:s,color:"primary",onClose:E,message:t,action:e.createElement(Ae.A,{classes:{root:c.button},size:"small",onClick:()=>{E(),r()}},"Redirect now")})},Ot=(t,r)=>{const c=i=>{const m=et(window.location.href),E=new URL(i,m);if(E.hostname!==window.location.hostname){const k=window.location.pathname,B=k.indexOf(r),L=k.slice(0,B+r.length);return new URL(L,m).href}return E.href};return i=>{for(const m of Array.from(i.querySelectorAll("meta")))if(m.getAttribute("http-equiv")==="refresh"){const E=m.getAttribute("content")?.split("url=");if(!E||E.length<2)return i;const N=E[1],k=c(N);if(window.location.href===k)return i;const B=document.createElement("div");return qe(e.createElement(xt,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>t(k),autoHideDuration:3e3}),B),document.body.appendChild(B),setTimeout(()=>{t(k)},3e3),i}return i}};function tn(t,r){const s=new URL(r),c=`${s.origin}${s.pathname.replace(/\/$/,"")}`,i=t.replace(c,"").replace(/^\/+/,""),m=new URL(`http://localhost/${i}`);return`${m.pathname}${m.search}${m.hash}`}function at(){const t=(0,e.useRef)((0,me.Zp)()),s=(0,ke.gf)(Ze.U).getOptionalString("app.baseUrl");return(0,e.useCallback)(i=>{let m=i;if(s)try{m=tn(i,s)}catch{}t.current(m)},[s])}const nn="screen and (max-width: 76.1875em)",an=t=>{const r=at(),s=(0,q.A)(),c=(0,pe.A)(nn),i=Ve(),m=ne(),E=(0,$e.s)(),N=(0,ke.gf)(je.s),k=(0,ke.gf)(oe.Y),{state:B,path:L,content:G}=C(),[Y,Oe]=(0,e.useState)(null),Se=l(Y),ue=(0,e.useCallback)(()=>{if(!Y)return;Y.querySelectorAll(".md-sidebar").forEach(R=>{if(c)R.style.top="0px";else{const J=document?.querySelector(".techdocs-reader-page")?.getBoundingClientRect().top??0;let ae=Y.getBoundingClientRect().top??0;const Fe=Y.querySelector(".md-container > .md-tabs")?.getBoundingClientRect().height??0;ae<J&&(ae=J);const fe=Math.max(ae,0)+Fe;R.style.top=`${fe}px`;const Zt=Y.querySelector(".md-container > .md-footer")?.getBoundingClientRect().top??window.innerHeight;R.style.height=`${Zt-fe}px`}R.style.setProperty("opacity","1")})},[Y,c]);(0,e.useEffect)(()=>(window.addEventListener("resize",ue),window.addEventListener("scroll",ue,!0),()=>{window.removeEventListener("resize",ue),window.removeEventListener("scroll",ue,!0)}),[Y,ue]);const v=(0,e.useCallback)(()=>{if(!Y)return;const u=Y.querySelector(".md-footer");u&&(u.style.width=`${Y.getBoundingClientRect().width}px`)},[Y]);(0,e.useEffect)(()=>(window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}),[Y,v]),(0,e.useEffect)(()=>{Se||(v(),ue())},[B,Se,v,ue]);const n=(0,e.useCallback)((u,R)=>nt(u,[i,bt({techdocsStorageApi:N,entityId:t,path:R}),_e(),Ct(),Kt(),Rt(),He(k),m]),[t,k,N,i,m]),d=(0,e.useCallback)(async u=>nt(u,[Ot(r,t.name),ut(),Gt(s),mt({baseUrl:window.location.origin,onClick:(R,$)=>{const J=R.ctrlKey||R.metaKey,ae=new URL($),Ie=R.target?.innerText||$,Fe=$.replace(window.location.origin,"");E.captureEvent("click",Ie,{attributes:{to:Fe}}),ae.hash?J?window.open($,"_blank"):(r($),u?.querySelector(`[id="${ae.hash.slice(1)}"]`)?.scrollIntoView()):J?window.open($,"_blank"):r($)}}),Dt({onLoading:()=>{},onLoaded:()=>{u.querySelector(".md-nav__title")?.removeAttribute("for")}}),Dt({onLoading:()=>{Array.from(u.querySelectorAll(".md-sidebar")).forEach($=>{$.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[s,r,E,t.name]);return(0,e.useEffect)(()=>{if(!G)return()=>{};let u=!0;return n(G,L).then(async R=>{if(!R?.innerHTML||!u)return;window.scroll({top:0});const $=await d(R);Oe($)}),()=>{u=!1}},[G,L,n,d]),Y};var re=a(41883),Xe=a(34399),Mt=a(19817);const Yt=()=>{const t=(0,Xe.YR)(),{shadowRoot:r}=(0,g.V)(),s=r?.querySelector('[data-md-component="content"]'),c=r?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let i=c?.querySelector('[data-techdocs-addons-location="primary sidebar"]');i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","primary sidebar"),c?.prepend(i));const m=r?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let E=m?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return E||(E=document.createElement("div"),E.setAttribute("data-techdocs-addons-location","secondary sidebar"),m?.prepend(E)),e.createElement(e.Fragment,null,e.createElement(re.A,{container:i},t.renderComponentsByLocation(Mt.e.PrimarySidebar)),e.createElement(re.A,{container:s},t.renderComponentsByLocation(Mt.e.Content)),e.createElement(re.A,{container:E},t.renderComponentsByLocation(Mt.e.SecondarySidebar)))},kt=(0,U.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),Xt=b(t=>{const{withSearch:r=!0,onReady:s}=t,c=kt(),{entityMetadata:{value:i,loading:m},entityRef:E,setShadowRoot:N}=(0,g.V)(),k=an(E),B=window.location.pathname,L=window.location.hash,G=l(k),[Y]=V([`[id="${L.slice(1)}"]`]);(0,e.useEffect)(()=>{G||(L?Y&&Y.scrollIntoView():document?.querySelector("header")?.scrollIntoView())},[B,L,Y,G]);const Oe=(0,e.useCallback)(Se=>{N(Se),s instanceof Function&&s()},[N,s]);return m===!1&&!i?e.createElement(D.M,{status:"404",statusMessage:"PAGE NOT FOUND"}):k?e.createElement(H.U,null,e.createElement(P.A,{container:!0},e.createElement(P.A,{xs:12,item:!0},e.createElement(te,null)),r&&e.createElement(P.A,{className:c.search,xs:"auto",item:!0},e.createElement(Le,{entityId:E,entityTitle:i?.metadata?.title})),e.createElement(P.A,{xs:12,item:!0},e.createElement(A,{element:k,onAppend:Oe},e.createElement(Yt,null))))):e.createElement(H.U,null,e.createElement(P.A,{container:!0},e.createElement(P.A,{xs:12,item:!0},e.createElement(te,null))))}),on=null},84893:(he,z,a)=>{"use strict";a.d(z,{Z:()=>K});var e=a(14041),P=a(58837),U=a(29365),g=a(75173),S=a(71677),f=a(37757),w=a(77125),I=a(9684),o=a(22638),W=a(34399),l=a(19817);const A=(0,P.A)(x=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:x.spacing(3,3,0),"@media print":{display:"none"}}})),K=x=>{const V=A(),[X,O]=(0,e.useState)(null),D=(0,e.useCallback)(ce=>{O(ce.currentTarget)},[]),H=(0,e.useCallback)(()=>{O(null)},[]),{entityMetadata:{value:_,loading:M}}=(0,o.V)(),j=(0,W.YR)(),p=j.renderComponentsByLocation(l.e.Subheader),le=j.renderComponentsByLocation(l.e.Settings);return!p&&!le||M===!1&&!_?null:e.createElement(g.A,{classes:V,...x.toolbarProps},e.createElement(w.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap"},p,le?e.createElement(e.Fragment,null,e.createElement(S.Ay,{title:"Settings"},e.createElement(U.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:D},e.createElement(I.A,null))),e.createElement(f.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:X,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!X,onClose:H,keepMounted:!0},e.createElement("div",null,le))):null))}},95403:(he,z,a)=>{"use strict";a.d(z,{b:()=>je,W:()=>it});var e=a(14041),P=a(18690),U=a(82326),g=a(34399),S=a(22638),f=a(64088),w=a(93285),I=a(42899),o=a(89575),W=a(39850),l=a(9546),A=a(268),K=a(7031),x=function(y){return{root:{display:"block",backgroundColor:(0,A.X4)(y.palette.text.primary,y.palette.type==="light"?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:y.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(y.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},V=e.forwardRef(function(y,h){var C=y.animation,T=C===void 0?"pulse":C,b=y.classes,Z=y.className,te=y.component,pe=te===void 0?"span":te,q=y.height,oe=y.variant,Q=oe===void 0?"text":oe,ee=y.width,Re=(0,W.A)(y,["animation","classes","className","component","height","variant","width"]),Pe=!!Re.children;return e.createElement(pe,(0,o.A)({ref:h,className:(0,l.default)(b.root,b[Q],Z,Pe&&[b.withChildren,!ee&&b.fitContent,!q&&b.heightAuto],T!==!1&&b[T])},Re,{style:(0,o.A)({width:ee,height:q},Re.style)}))});const X=(0,K.A)(x,{name:"MuiSkeleton"})(V);var O=a(13660),D=a(19817),H=a(699),_=a(37281),M=a(14158),j=a(97214),p=a(64398),le=a(16654),ce=a(18139),we=a(54195),F=a(72814),me=a(45250),Ee=a(17749);const ye=e.createElement(X,{animation:"wave",variant:"text",height:40}),Te=ge=>{const{children:y}=ge,h=(0,g.YR)(),C=(0,ce.gf)(we.U),{title:T,setTitle:b,subtitle:Z,setSubtitle:te,entityRef:pe,metadata:{value:q,loading:oe},entityMetadata:{value:Q,loading:ee}}=(0,S.V)();(0,e.useEffect)(()=>{q&&(b(q.site_name),te(()=>{let{site_description:Ve}=q;return(!Ve||Ve==="None")&&(Ve=""),Ve}))},[q,b,te]);const Re=C.getOptional("app.title")||"Backstage",Pe=[T,Z,Re].filter(Boolean).join(" | "),{locationMetadata:De,spec:Et}=Q||{},lt=Et?.lifecycle,ct=Q?(0,H.t)(Q,j.vv):[],Qe=(0,F.S)(Ee.rQ)(),de=e.createElement(e.Fragment,null,e.createElement(p.S,{label:(0,me.capitalize)(Q?.kind||"entity"),value:e.createElement(_.z,{color:"inherit",entityRef:pe,title:Q?.metadata.title,defaultKind:"Component"})}),ct.length>0&&e.createElement(p.S,{label:"Owner",value:e.createElement(M.i,{color:"inherit",entityRefs:ct,defaultKind:"group"})}),lt?e.createElement(p.S,{label:"Lifecycle",value:String(lt)}):null,De&&De.type!=="dir"&&De.type!=="file"?e.createElement(p.S,{label:"",value:e.createElement(I.A,{container:!0,direction:"column",alignItems:"center"},e.createElement(I.A,{style:{padding:0},item:!0},e.createElement(O.A,{style:{marginTop:"-25px"}})),e.createElement(I.A,{style:{padding:0},item:!0},"Source")),url:De.target}):null);return!ee&&Q===void 0||!oe&&q===void 0?null:e.createElement(le.Y,{type:"Documentation",typeLink:Qe,title:T||ye,subtitle:Z===""?void 0:Z||ye},e.createElement(w.A,{titleTemplate:"%s"},e.createElement("title",null,Pe)),de,y,h.renderComponentsByLocation(D.e.Header))};var Le=a(84893),Ae=a(76888),be=a(85408),Ne=a(12554),Me=a(95208),Ue=a(64947),ft=a(95159),ht=a(61617),gt=a(91042),ot=a(76842),pt=a(3399);const Be="/.backstage/auth/v1/cookie",ke=365*24*36e5;function Ze(ge){const{pluginId:y}=ge??{},h=(0,ce.gf)(ft.a),C=(0,ce.gf)(ht.I),T=(0,e.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${y}-auth-cookie-expires-at`):null,[y]),[b,Z]=(0,gt.Y)(async()=>{const oe=`${await C.getBaseUrl(y)}${Be}`,Q=await h.fetch(`${oe}`,{credentials:"include"});if(!Q.ok){if(Q.status===404)return{expiresAt:new Date(Date.now()+ke)};throw await pt.o3.fromResponse(Q)}const ee=await Q.json();if(!ee.expiresAt)throw new Error("No expiration date found in response");return ee});(0,ot.u)(Z.execute);const te=(0,e.useCallback)(()=>{Z.execute()},[Z]),pe=(0,e.useCallback)(q=>{const oe=(1+3*Math.random())*6e4,Q=Date.parse(q.expiresAt)-Date.now()-oe,ee=setTimeout(te,Q);return()=>clearTimeout(ee)},[te]);return(0,e.useEffect)(()=>{if(b.status!=="success"||!b.result)return()=>{};T?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:b.result});let q=pe(b.result);const oe=Q=>{const{action:ee,payload:Re}=Q.data;ee==="COOKIE_REFRESH_SUCCESS"&&(q(),q=pe(Re))};return T?.addEventListener("message",oe),()=>{q(),T?.removeEventListener("message",oe)}},[b,pe,T]),b.status==="not-executed"?{status:"loading"}:b.status==="loading"&&!b.result?{status:"loading"}:b.status==="loading"&&b.error?{status:"loading"}:b.status==="error"&&b.error?{status:"error",error:b.error,retry:te}:{status:"success",data:b.result}}function $e(ge){const{children:y,...h}=ge,C=(0,Me.n)(),{Progress:T}=C.getComponents(),b=Ze(h);return b.status==="loading"?e.createElement(T,null):b.status==="error"?e.createElement(Ne.b,{error:b.error},e.createElement(Ue.A,{variant:"outlined",onClick:b.retry},"Retry")):e.createElement(e.Fragment,null,y)}var vt=a(54917),rt=a(98392),st=a(50868);const je=ge=>{const{withSearch:y,withHeader:h=!0}=ge;return e.createElement(U.Y,{themeId:"documentation"},h&&e.createElement(Te,null),e.createElement(Le.Z,null),e.createElement(f.p,{withSearch:y}))},it=ge=>{const y=(0,vt.A)(),h=(0,rt.A)({...y,...ge.overrideThemeOptions||{}}),{kind:C,name:T,namespace:b}=(0,Ae.K)(Ee.Oc),{children:Z,entityRef:te={kind:C,name:T,namespace:b}}=ge,pe=(0,P.P1)();if(!Z){const Q=(pe?e.Children.toArray(pe.props.children):[]).flatMap(ee=>ee?.props?.children??[]).find(ee=>!(0,be.E)(ee,g.AF)&&!(0,be.E)(ee,g.Wm));return e.createElement(st.A,{theme:h},e.createElement($e,{pluginId:"techdocs"},e.createElement(S.R,{entityRef:te},Q||e.createElement(je,null))))}return e.createElement(st.A,{theme:h},e.createElement($e,{pluginId:"techdocs"},e.createElement(S.R,{entityRef:te},({metadata:q,entityMetadata:oe,onReady:Q})=>e.createElement("div",{className:"techdocs-reader-page"},e.createElement(U.Y,{themeId:"documentation"},Z instanceof Function?Z({entityRef:te,techdocsMetadataValue:q.value,entityMetadataValue:oe.value,onReady:Q}):Z)))))}},41472:(he,z,a)=>{"use strict";a.r(z),a.d(z,{TechDocsSearchResultListItem:()=>o});var e=a(14041),P=a(46423),U=a(5951),g=a(58837),S=a(72501),f=a(75202),w=a(51470);const I=(0,g.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),o=W=>{const{result:l,highlight:A,lineClamp:K=5,asListItem:x=!0,asLink:V=!0,title:X,icon:O}=W,D=I(),H=({children:j})=>V?e.createElement(f.N_,{noTrack:!0,to:l.location},j):e.createElement(e.Fragment,null,j),_=()=>{const j=A?.fields.title?e.createElement(w.e,{text:A.fields.title,preTag:A.preTag,postTag:A.postTag}):l.title,p=A?.fields.entityTitle?e.createElement(w.e,{text:A.fields.entityTitle,preTag:A.preTag,postTag:A.postTag}):l.entityTitle,le=A?.fields.name?e.createElement(w.e,{text:A.fields.name,preTag:A.preTag,postTag:A.postTag}):l.name;return l?e.createElement(U.A,{className:D.itemText,primaryTypographyProps:{variant:"h6"},primary:e.createElement(H,null,X||e.createElement(e.Fragment,null,j," | ",p??le," docs")),secondary:e.createElement(S.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:K,overflow:"hidden"},color:"textSecondary",variant:"body2"},A?.fields.text?e.createElement(w.e,{text:A.fields.text,preTag:A.preTag,postTag:A.postTag}):l.text)}):null},M=({children:j})=>x?e.createElement(e.Fragment,null,O&&e.createElement(P.A,null,typeof O=="function"?O(l):O),e.createElement("div",{className:D.flexContainer},j)):e.createElement(e.Fragment,null,j);return e.createElement(M,null,e.createElement(_,null))}},34399:(he,z,a)=>{"use strict";a.d(z,{AF:()=>f,Wm:()=>S,YR:()=>K});var e=a(14041),P=a(18690),U=a(85408),g=a(77026);const S="techdocs.addons.addon.v1",f="techdocs.addons.wrapper.v1",w=()=>null;(0,U.h)(w,f,!0);const I=x=>`${S}.${x.toLocaleLowerCase("en-US")}`;function o(x){const{name:V,component:X}=x;return createReactExtension({name:V,component:{sync:O=>React.createElement(X,{...O})},data:{[S]:x,[I(V)]:!0}})}const W=(x,V)=>x.selectByComponentData({key:V}).getElements()[0],l=x=>x.selectByComponentData({key:f}).selectByComponentData({key:S}),A=x=>x.selectByComponentData({key:f}).findComponentData({key:S}),K=()=>{const x=(0,P.P1)(),V=(0,g.O)(x,l),X=(0,g.O)(x,A),O=(0,e.useCallback)(_=>{if(!V||!_)return null;const M=I(_.name);return W(V,M)??null},[V]),D=(0,e.useCallback)(_=>{const M=X.find(j=>j.name===_);return M?O(M):null},[X,O]),H=(0,e.useCallback)(_=>{const M=X.filter(j=>j.location===_);return M.length?M.map(O):null},[X,O]);return{renderComponentByName:D,renderComponentsByLocation:H}}},22638:(he,z,a)=>{"use strict";a.d(z,{R:()=>V,V:()=>X});var e=a(14041),P=a(73466),U=a(28966),g=a(78560),S=a(54852),f=a(4790),w=a(18139),I=a(54195),o=a(19224),W=a(41712);function l(O,D){return D.getOptionalBoolean("techdocs.legacyUseCaseSensitiveTripletPaths")||(O.kind=O.kind.toLocaleLowerCase(),O.name=O.name.toLocaleLowerCase(),O.namespace=O.namespace.toLocaleLowerCase()),O}const A=(O,D)=>(0,g.U2)(O)===(0,g.U2)(D),K={title:"",subtitle:"",setTitle:()=>{},setSubtitle:()=>{},setShadowRoot:()=>{},metadata:{loading:!0},entityMetadata:{loading:!0},entityRef:{kind:"",name:"",namespace:""}},x=(0,S.tK)("techdocs-reader-page-context"),V=(0,e.memo)(O=>{const{entityRef:D,children:H}=O,_=(0,w.gf)(W.l),M=(0,w.gf)(I.U),j=(0,P.A)(async()=>_.getEntityMetadata(D),[D]),p=(0,U.A)(async()=>_.getTechDocsMetadata(D),[D]),[le,ce]=(0,e.useState)(K.title),[we,F]=(0,e.useState)(K.subtitle),[me,Ee]=(0,e.useState)(K.shadowRoot);(0,e.useEffect)(()=>{me&&!p.value&&!p.loading&&p.retry()},[p.value,p.loading,me,p.retry,p]);const ye={metadata:p,entityRef:l(D,M),entityMetadata:j,shadowRoot:me,setShadowRoot:Ee,title:le,setTitle:ce,subtitle:we,setSubtitle:F},Te=(0,f.B)({1:ye});return e.createElement(o.I,{attributes:{entityRef:(0,g.U2)(D)}},e.createElement(x.Provider,{value:Te},H instanceof Function?H(ye):H))},(O,D)=>A(O.entityRef,D.entityRef)),X=()=>{const O=(0,e.useContext)(x);if(O===void 0)return K;const D=O.atVersion(1);if(D===void 0)throw new Error("No context found for version 1.");return D}},19817:(he,z,a)=>{"use strict";a.d(z,{e:()=>e});const e=Object.freeze({Header:"Header",Subheader:"Subheader",Settings:"Settings",PrimarySidebar:"PrimarySidebar",SecondarySidebar:"SecondarySidebar",Content:"Content"})},49043:(he,z,a)=>{"use strict";var e=a(69608);function P(f,w){if(w=w||[],typeof f!="string")throw new Error("The url must be a string.");if(!w.every(function(le){return typeof le=="string"}))throw new Error("The refs should contain only strings");var I=/^([a-z\d-]{1,39})\/([-\.\w]{1,100})$/i;I.test(f)&&(f="https://github.com/"+f);var o=e(f),W=o.resource.split("."),l=null;switch(o.toString=function(le){return P.stringify(this,le)},o.source=W.length>2?W.slice(1-W.length).join("."):o.source=o.resource,o.git_suffix=/\.git$/.test(o.pathname),o.name=decodeURIComponent((o.pathname||o.href).replace(/(^\/)|(\/$)/g,"").replace(/\.git$/,"")),o.owner=decodeURIComponent(o.user),o.source){case"git.cloudforge.com":o.owner=o.user,o.organization=W[0],o.source="cloudforge.com";break;case"visualstudio.com":if(o.resource==="vs-ssh.visualstudio.com"){l=o.name.split("/"),l.length===4&&(o.organization=l[1],o.owner=l[2],o.name=l[3],o.full_name=l[2]+"/"+l[3]);break}else{l=o.name.split("/"),l.length===2?(o.owner=l[1],o.name=l[1],o.full_name="_git/"+o.name):l.length===3?(o.name=l[2],l[0]==="DefaultCollection"?(o.owner=l[2],o.organization=l[0],o.full_name=o.organization+"/_git/"+o.name):(o.owner=l[0],o.full_name=o.owner+"/_git/"+o.name)):l.length===4&&(o.organization=l[0],o.owner=l[1],o.name=l[3],o.full_name=o.organization+"/"+o.owner+"/_git/"+o.name);break}case"dev.azure.com":case"azure.com":if(o.resource==="ssh.dev.azure.com"){l=o.name.split("/"),l.length===4&&(o.organization=l[1],o.owner=l[2],o.name=l[3]);break}else{l=o.name.split("/"),l.length===5?(o.organization=l[0],o.owner=l[1],o.name=l[4],o.full_name="_git/"+o.name):l.length===3?(o.name=l[2],l[0]==="DefaultCollection"?(o.owner=l[2],o.organization=l[0],o.full_name=o.organization+"/_git/"+o.name):(o.owner=l[0],o.full_name=o.owner+"/_git/"+o.name)):l.length===4&&(o.organization=l[0],o.owner=l[1],o.name=l[3],o.full_name=o.organization+"/"+o.owner+"/_git/"+o.name),o.query&&o.query.path&&(o.filepath=o.query.path.replace(/^\/+/g,"")),o.query&&o.query.version&&(o.ref=o.query.version.replace(/^GB/,""));break}default:l=o.name.split("/");var A=l.length-1;if(l.length>=2){var K=l.indexOf("-",2),x=l.indexOf("blob",2),V=l.indexOf("tree",2),X=l.indexOf("commit",2),O=l.indexOf("issues",2),D=l.indexOf("src",2),H=l.indexOf("raw",2),_=l.indexOf("edit",2);A=K>0?K-1:x>0&&V>0?Math.min(x-1,V-1):x>0?x-1:O>0?O-1:V>0?V-1:X>0?X-1:D>0?D-1:H>0?H-1:_>0?_-1:A,o.owner=l.slice(0,A).join("/"),o.name=l[A],X&&O<0&&(o.commit=l[A+2])}o.ref="",o.filepathtype="",o.filepath="";var M=l.length>A&&l[A+1]==="-"?A+1:A;l.length>M+2&&["raw","src","blob","tree","edit"].indexOf(l[M+1])>=0&&(o.filepathtype=l[M+1],o.ref=l[M+2],l.length>M+3&&(o.filepath=l.slice(M+3).join("/"))),o.organization=o.owner;break}o.full_name||(o.full_name=o.owner,o.name&&(o.full_name&&(o.full_name+="/"),o.full_name+=o.name)),o.owner.startsWith("scm/")&&(o.source="bitbucket-server",o.owner=o.owner.replace("scm/",""),o.organization=o.owner,o.full_name=o.owner+"/"+o.name);var j=/(projects|users)\/(.*?)\/repos\/(.*?)((\/.*$)|$)/,p=j.exec(o.pathname);return p!=null&&(o.source="bitbucket-server",p[1]==="users"?o.owner="~"+p[2]:o.owner=p[2],o.organization=o.owner,o.name=p[3],l=p[4].split("/"),l.length>1&&(["raw","browse"].indexOf(l[1])>=0?(o.filepathtype=l[1],l.length>2&&(o.filepath=l.slice(2).join("/"))):l[1]==="commits"&&l.length>2&&(o.commit=l[2])),o.full_name=o.owner+"/"+o.name,o.query.at?o.ref=o.query.at:o.ref=""),w.length!==0&&o.ref&&(o.ref=S(o.href,w)||o.ref,o.filepath=o.href.split(o.ref+"/")[1]),o}P.stringify=function(f,w){w=w||(f.protocols&&f.protocols.length?f.protocols.join("+"):f.protocol);var I=f.port?":"+f.port:"",o=f.user||"git",W=f.git_suffix?".git":"";switch(w){case"ssh":return I?"ssh://"+o+"@"+f.resource+I+"/"+f.full_name+W:o+"@"+f.resource+":"+f.full_name+W;case"git+ssh":case"ssh+git":case"ftp":case"ftps":return w+"://"+o+"@"+f.resource+I+"/"+f.full_name+W;case"http":case"https":var l=f.token?U(f):f.user&&(f.protocols.includes("http")||f.protocols.includes("https"))?f.user+"@":"";return w+"://"+l+f.resource+I+"/"+g(f)+W;default:return f.href}};/*!
 * buildToken
 * Builds OAuth token prefix (helper function)
 *
 * @name buildToken
 * @function
 * @param {GitUrl} obj The parsed Git url object.
 * @return {String} token prefix
 */function U(f){switch(f.source){case"bitbucket.org":return"x-token-auth:"+f.token+"@";default:return f.token+"@"}}function g(f){switch(f.source){case"bitbucket-server":return"scm/"+f.full_name;default:var w=f.full_name.split("/").map(function(I){return encodeURIComponent(I)}).join("/");return w}}function S(f,w){var I="";return w.forEach(function(o){f.includes(o)&&o.length>I.length&&(I=o)}),I}he.exports=P},13660:(he,z,a)=>{"use strict";var e,P=a(4293),U=a(78920);e={value:!0},z.A=void 0;var g=U(a(14041)),S=P(a(74044)),f=(0,S.default)(g.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");z.A=f},90292:(he,z,a)=>{"use strict";var e,P=a(4293),U=a(78920);e={value:!0},z.A=void 0;var g=U(a(14041)),S=P(a(74044)),f=(0,S.default)(g.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");z.A=f},71651:function(he){/*! @license DOMPurify 3.1.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.0/LICENSE */(function(z,a){he.exports=a()})(this,function(){"use strict";const{entries:z,setPrototypeOf:a,isFrozen:e,getPrototypeOf:P,getOwnPropertyDescriptor:U}=Object;let{freeze:g,seal:S,create:f}=Object,{apply:w,construct:I}=typeof Reflect<"u"&&Reflect;g||(g=function(h){return h}),S||(S=function(h){return h}),w||(w=function(h,C,T){return h.apply(C,T)}),I||(I=function(h,C){return new h(...C)});const o=M(Array.prototype.forEach),W=M(Array.prototype.pop),l=M(Array.prototype.push),A=M(String.prototype.toLowerCase),K=M(String.prototype.toString),x=M(String.prototype.match),V=M(String.prototype.replace),X=M(String.prototype.indexOf),O=M(String.prototype.trim),D=M(Object.prototype.hasOwnProperty),H=M(RegExp.prototype.test),_=j(TypeError);function M(y){return function(h){for(var C=arguments.length,T=new Array(C>1?C-1:0),b=1;b<C;b++)T[b-1]=arguments[b];return w(y,h,T)}}function j(y){return function(){for(var h=arguments.length,C=new Array(h),T=0;T<h;T++)C[T]=arguments[T];return I(y,C)}}function p(y,h){let C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:A;a&&a(y,null);let T=h.length;for(;T--;){let b=h[T];if(typeof b=="string"){const Z=C(b);Z!==b&&(e(h)||(h[T]=Z),b=Z)}y[b]=!0}return y}function le(y){for(let h=0;h<y.length;h++)D(y,h)||(y[h]=null);return y}function ce(y){const h=f(null);for(const[C,T]of z(y))D(y,C)&&(Array.isArray(T)?h[C]=le(T):T&&typeof T=="object"&&T.constructor===Object?h[C]=ce(T):h[C]=T);return h}function we(y,h){for(;y!==null;){const T=U(y,h);if(T){if(T.get)return M(T.get);if(typeof T.value=="function")return M(T.value)}y=P(y)}function C(){return null}return C}const F=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),me=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ee=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ye=g(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Te=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Le=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ae=g(["#text"]),be=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ne=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Me=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ue=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ft=S(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ht=S(/<%[\w\W]*|[\w\W]*%>/gm),gt=S(/\${[\w\W]*}/gm),ot=S(/^data-[\-\w.\u00B7-\uFFFF]/),pt=S(/^aria-[\-\w]+$/),Be=S(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ke=S(/^(?:\w+script|data):/i),Ze=S(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$e=S(/^html$/i),vt=S(/^[a-z][.\w]*(-[.\w]+)+$/i);var rt=Object.freeze({__proto__:null,MUSTACHE_EXPR:ft,ERB_EXPR:ht,TMPLIT_EXPR:gt,DATA_ATTR:ot,ARIA_ATTR:pt,IS_ALLOWED_URI:Be,IS_SCRIPT_OR_DATA:ke,ATTR_WHITESPACE:Ze,DOCTYPE_NAME:$e,CUSTOM_ELEMENT:vt});const st=function(){return typeof window>"u"?null:window},je=function(h,C){if(typeof h!="object"||typeof h.createPolicy!="function")return null;let T=null;const b="data-tt-policy-suffix";C&&C.hasAttribute(b)&&(T=C.getAttribute(b));const Z="dompurify"+(T?"#"+T:"");try{return h.createPolicy(Z,{createHTML(te){return te},createScriptURL(te){return te}})}catch{return console.warn("TrustedTypes policy "+Z+" could not be created."),null}};function it(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:st();const h=v=>it(v);if(h.version="3.1.0",h.removed=[],!y||!y.document||y.document.nodeType!==9)return h.isSupported=!1,h;let{document:C}=y;const T=C,b=T.currentScript,{DocumentFragment:Z,HTMLTemplateElement:te,Node:pe,Element:q,NodeFilter:oe,NamedNodeMap:Q=y.NamedNodeMap||y.MozNamedAttrMap,HTMLFormElement:ee,DOMParser:Re,trustedTypes:Pe}=y,De=q.prototype,Et=we(De,"cloneNode"),lt=we(De,"nextSibling"),ct=we(De,"childNodes"),Qe=we(De,"parentNode");if(typeof te=="function"){const v=C.createElement("template");v.content&&v.content.ownerDocument&&(C=v.content.ownerDocument)}let de,We="";const{implementation:dt,createNodeIterator:Ve,createDocumentFragment:jt,getElementsByTagName:ve}=C,{importNode:Qt}=T;let Ce={};h.isSupported=typeof z=="function"&&typeof Qe=="function"&&dt&&dt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:yt,ERB_EXPR:At,TMPLIT_EXPR:Tt,DATA_ATTR:Pt,ARIA_ATTR:It,IS_SCRIPT_OR_DATA:Jt,ATTR_WHITESPACE:Nt,CUSTOM_ELEMENT:qt}=rt;let{IS_ALLOWED_URI:Ut}=rt,se=null;const Bt=p({},[...F,...me,...Ee,...Te,...Ae]);let ie=null;const zt=p({},[...be,...Ne,...Me,...Ue]);let ne=Object.seal(f(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Je=null,bt=null,Ht=!0,St=!0,Ft=!1,$t=!0,ze=!1,qe=!0,He=!1,wt=!1,Ct=!1,_e=!1,et=!1,mt=!1,Wt=!0,Vt=!1;const en="user-content-";let Lt=!0,tt=!1,Ge={},Ke=null;const _t=p({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Gt=null;const Kt=p({},["audio","video","img","source","image","track"]);let Rt=null;const Dt=p({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ut="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",xe="http://www.w3.org/1999/xhtml";let Ye=xe,xt=!1,Ot=null;const tn=p({},[ut,nt,xe],K);let at=null;const nn=["application/xhtml+xml","text/html"],an="text/html";let re=null,Xe=null;const Mt=C.createElement("form"),Yt=function(n){return n instanceof RegExp||n instanceof Function},kt=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Xe&&Xe===n)){if((!n||typeof n!="object")&&(n={}),n=ce(n),at=nn.indexOf(n.PARSER_MEDIA_TYPE)===-1?an:n.PARSER_MEDIA_TYPE,re=at==="application/xhtml+xml"?K:A,se=D(n,"ALLOWED_TAGS")?p({},n.ALLOWED_TAGS,re):Bt,ie=D(n,"ALLOWED_ATTR")?p({},n.ALLOWED_ATTR,re):zt,Ot=D(n,"ALLOWED_NAMESPACES")?p({},n.ALLOWED_NAMESPACES,K):tn,Rt=D(n,"ADD_URI_SAFE_ATTR")?p(ce(Dt),n.ADD_URI_SAFE_ATTR,re):Dt,Gt=D(n,"ADD_DATA_URI_TAGS")?p(ce(Kt),n.ADD_DATA_URI_TAGS,re):Kt,Ke=D(n,"FORBID_CONTENTS")?p({},n.FORBID_CONTENTS,re):_t,Je=D(n,"FORBID_TAGS")?p({},n.FORBID_TAGS,re):{},bt=D(n,"FORBID_ATTR")?p({},n.FORBID_ATTR,re):{},Ge=D(n,"USE_PROFILES")?n.USE_PROFILES:!1,Ht=n.ALLOW_ARIA_ATTR!==!1,St=n.ALLOW_DATA_ATTR!==!1,Ft=n.ALLOW_UNKNOWN_PROTOCOLS||!1,$t=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ze=n.SAFE_FOR_TEMPLATES||!1,qe=n.SAFE_FOR_XML!==!1,He=n.WHOLE_DOCUMENT||!1,_e=n.RETURN_DOM||!1,et=n.RETURN_DOM_FRAGMENT||!1,mt=n.RETURN_TRUSTED_TYPE||!1,Ct=n.FORCE_BODY||!1,Wt=n.SANITIZE_DOM!==!1,Vt=n.SANITIZE_NAMED_PROPS||!1,Lt=n.KEEP_CONTENT!==!1,tt=n.IN_PLACE||!1,Ut=n.ALLOWED_URI_REGEXP||Be,Ye=n.NAMESPACE||xe,ne=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&Yt(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ne.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&Yt(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ne.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ne.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ze&&(St=!1),et&&(_e=!0),Ge&&(se=p({},Ae),ie=[],Ge.html===!0&&(p(se,F),p(ie,be)),Ge.svg===!0&&(p(se,me),p(ie,Ne),p(ie,Ue)),Ge.svgFilters===!0&&(p(se,Ee),p(ie,Ne),p(ie,Ue)),Ge.mathMl===!0&&(p(se,Te),p(ie,Me),p(ie,Ue))),n.ADD_TAGS&&(se===Bt&&(se=ce(se)),p(se,n.ADD_TAGS,re)),n.ADD_ATTR&&(ie===zt&&(ie=ce(ie)),p(ie,n.ADD_ATTR,re)),n.ADD_URI_SAFE_ATTR&&p(Rt,n.ADD_URI_SAFE_ATTR,re),n.FORBID_CONTENTS&&(Ke===_t&&(Ke=ce(Ke)),p(Ke,n.FORBID_CONTENTS,re)),Lt&&(se["#text"]=!0),He&&p(se,["html","head","body"]),se.table&&(p(se,["tbody"]),delete Je.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');de=n.TRUSTED_TYPES_POLICY,We=de.createHTML("")}else de===void 0&&(de=je(Pe,b)),de!==null&&typeof We=="string"&&(We=de.createHTML(""));g&&g(n),Xe=n}},Xt=p({},["mi","mo","mn","ms","mtext"]),on=p({},["foreignobject","desc","title","annotation-xml"]),t=p({},["title","style","font","a","script"]),r=p({},[...me,...Ee,...ye]),s=p({},[...Te,...Le]),c=function(n){let d=Qe(n);(!d||!d.tagName)&&(d={namespaceURI:Ye,tagName:"template"});const u=A(n.tagName),R=A(d.tagName);return Ot[n.namespaceURI]?n.namespaceURI===nt?d.namespaceURI===xe?u==="svg":d.namespaceURI===ut?u==="svg"&&(R==="annotation-xml"||Xt[R]):!!r[u]:n.namespaceURI===ut?d.namespaceURI===xe?u==="math":d.namespaceURI===nt?u==="math"&&on[R]:!!s[u]:n.namespaceURI===xe?d.namespaceURI===nt&&!on[R]||d.namespaceURI===ut&&!Xt[R]?!1:!s[u]&&(t[u]||!r[u]):!!(at==="application/xhtml+xml"&&Ot[n.namespaceURI]):!1},i=function(n){l(h.removed,{element:n});try{n.parentNode.removeChild(n)}catch{n.remove()}},m=function(n,d){try{l(h.removed,{attribute:d.getAttributeNode(n),from:d})}catch{l(h.removed,{attribute:null,from:d})}if(d.removeAttribute(n),n==="is"&&!ie[n])if(_e||et)try{i(d)}catch{}else try{d.setAttribute(n,"")}catch{}},E=function(n){let d=null,u=null;if(Ct)n="<remove></remove>"+n;else{const J=x(n,/^[\r\n\t ]+/);u=J&&J[0]}at==="application/xhtml+xml"&&Ye===xe&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const R=de?de.createHTML(n):n;if(Ye===xe)try{d=new Re().parseFromString(R,at)}catch{}if(!d||!d.documentElement){d=dt.createDocument(Ye,"template",null);try{d.documentElement.innerHTML=xt?We:R}catch{}}const $=d.body||d.documentElement;return n&&u&&$.insertBefore(C.createTextNode(u),$.childNodes[0]||null),Ye===xe?ve.call(d,He?"html":"body")[0]:He?d.documentElement:$},N=function(n){return Ve.call(n.ownerDocument||n,n,oe.SHOW_ELEMENT|oe.SHOW_COMMENT|oe.SHOW_TEXT|oe.SHOW_PROCESSING_INSTRUCTION|oe.SHOW_CDATA_SECTION,null)},k=function(n){return n instanceof ee&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof Q)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},B=function(n){return typeof pe=="function"&&n instanceof pe},L=function(n,d,u){Ce[n]&&o(Ce[n],R=>{R.call(h,d,u,Xe)})},G=function(n){let d=null;if(L("beforeSanitizeElements",n,null),k(n))return i(n),!0;const u=re(n.nodeName);if(L("uponSanitizeElement",n,{tagName:u,allowedTags:se}),n.hasChildNodes()&&!B(n.firstElementChild)&&H(/<[/\w]/g,n.innerHTML)&&H(/<[/\w]/g,n.textContent)||n.nodeType===7||qe&&n.nodeType===8&&H(/<[/\w]/g,n.data))return i(n),!0;if(!se[u]||Je[u]){if(!Je[u]&&Oe(u)&&(ne.tagNameCheck instanceof RegExp&&H(ne.tagNameCheck,u)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(u)))return!1;if(Lt&&!Ke[u]){const R=Qe(n)||n.parentNode,$=ct(n)||n.childNodes;if($&&R){const J=$.length;for(let ae=J-1;ae>=0;--ae)R.insertBefore(Et($[ae],!0),lt(n))}}return i(n),!0}return n instanceof q&&!c(n)||(u==="noscript"||u==="noembed"||u==="noframes")&&H(/<\/no(script|embed|frames)/i,n.innerHTML)?(i(n),!0):(ze&&n.nodeType===3&&(d=n.textContent,o([yt,At,Tt],R=>{d=V(d,R," ")}),n.textContent!==d&&(l(h.removed,{element:n.cloneNode()}),n.textContent=d)),L("afterSanitizeElements",n,null),!1)},Y=function(n,d,u){if(Wt&&(d==="id"||d==="name")&&(u in C||u in Mt))return!1;if(!(St&&!bt[d]&&H(Pt,d))){if(!(Ht&&H(It,d))){if(!ie[d]||bt[d]){if(!(Oe(n)&&(ne.tagNameCheck instanceof RegExp&&H(ne.tagNameCheck,n)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(n))&&(ne.attributeNameCheck instanceof RegExp&&H(ne.attributeNameCheck,d)||ne.attributeNameCheck instanceof Function&&ne.attributeNameCheck(d))||d==="is"&&ne.allowCustomizedBuiltInElements&&(ne.tagNameCheck instanceof RegExp&&H(ne.tagNameCheck,u)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(u))))return!1}else if(!Rt[d]){if(!H(Ut,V(u,Nt,""))){if(!((d==="src"||d==="xlink:href"||d==="href")&&n!=="script"&&X(u,"data:")===0&&Gt[n])){if(!(Ft&&!H(Jt,V(u,Nt,"")))){if(u)return!1}}}}}}return!0},Oe=function(n){return n!=="annotation-xml"&&x(n,qt)},Se=function(n){L("beforeSanitizeAttributes",n,null);const{attributes:d}=n;if(!d)return;const u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ie};let R=d.length;for(;R--;){const $=d[R],{name:J,namespaceURI:ae,value:Ie}=$,Fe=re(J);let fe=J==="value"?Ie:O(Ie);if(u.attrName=Fe,u.attrValue=fe,u.keepAttr=!0,u.forceKeepAttr=void 0,L("uponSanitizeAttribute",n,u),fe=u.attrValue,u.forceKeepAttr||(m(J,n),!u.keepAttr))continue;if(!$t&&H(/\/>/i,fe)){m(J,n);continue}ze&&o([yt,At,Tt],Zt=>{fe=V(fe,Zt," ")});const rn=re(n.nodeName);if(Y(rn,Fe,fe)){if(Vt&&(Fe==="id"||Fe==="name")&&(m(J,n),fe=en+fe),de&&typeof Pe=="object"&&typeof Pe.getAttributeType=="function"&&!ae)switch(Pe.getAttributeType(rn,Fe)){case"TrustedHTML":{fe=de.createHTML(fe);break}case"TrustedScriptURL":{fe=de.createScriptURL(fe);break}}try{ae?n.setAttributeNS(ae,J,fe):n.setAttribute(J,fe),W(h.removed)}catch{}}}L("afterSanitizeAttributes",n,null)},ue=function v(n){let d=null;const u=N(n);for(L("beforeSanitizeShadowDOM",n,null);d=u.nextNode();)L("uponSanitizeShadowNode",d,null),!G(d)&&(d.content instanceof Z&&v(d.content),Se(d));L("afterSanitizeShadowDOM",n,null)};return h.sanitize=function(v){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=null,u=null,R=null,$=null;if(xt=!v,xt&&(v="<!-->"),typeof v!="string"&&!B(v))if(typeof v.toString=="function"){if(v=v.toString(),typeof v!="string")throw _("dirty is not a string, aborting")}else throw _("toString is not a function");if(!h.isSupported)return v;if(wt||kt(n),h.removed=[],typeof v=="string"&&(tt=!1),tt){if(v.nodeName){const Ie=re(v.nodeName);if(!se[Ie]||Je[Ie])throw _("root node is forbidden and cannot be sanitized in-place")}}else if(v instanceof pe)d=E("<!---->"),u=d.ownerDocument.importNode(v,!0),u.nodeType===1&&u.nodeName==="BODY"||u.nodeName==="HTML"?d=u:d.appendChild(u);else{if(!_e&&!ze&&!He&&v.indexOf("<")===-1)return de&&mt?de.createHTML(v):v;if(d=E(v),!d)return _e?null:mt?We:""}d&&Ct&&i(d.firstChild);const J=N(tt?v:d);for(;R=J.nextNode();)G(R)||(R.content instanceof Z&&ue(R.content),Se(R));if(tt)return v;if(_e){if(et)for($=jt.call(d.ownerDocument);d.firstChild;)$.appendChild(d.firstChild);else $=d;return(ie.shadowroot||ie.shadowrootmode)&&($=Qt.call(T,$,!0)),$}let ae=He?d.outerHTML:d.innerHTML;return He&&se["!doctype"]&&d.ownerDocument&&d.ownerDocument.doctype&&d.ownerDocument.doctype.name&&H($e,d.ownerDocument.doctype.name)&&(ae="<!DOCTYPE "+d.ownerDocument.doctype.name+`>
`+ae),ze&&o([yt,At,Tt],Ie=>{ae=V(ae,Ie," ")}),de&&mt?de.createHTML(ae):ae},h.setConfig=function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};kt(v),wt=!0},h.clearConfig=function(){Xe=null,wt=!1},h.isValidAttribute=function(v,n,d){Xe||kt({});const u=re(v),R=re(n);return Y(u,R,d)},h.addHook=function(v,n){typeof n=="function"&&(Ce[v]=Ce[v]||[],l(Ce[v],n))},h.removeHook=function(v){if(Ce[v])return W(Ce[v])},h.removeHooks=function(v){Ce[v]&&(Ce[v]=[])},h.removeAllHooks=function(){Ce={}},h}var ge=it();return ge})},91042:(he,z,a)=>{"use strict";a.d(z,{Y:()=>U});var e=a(14041),P=a(16261);function U(g,S){const[f,w]=(0,e.useState)({status:"not-executed",error:void 0,result:S}),I=(0,e.useRef)(),o=(0,e.useRef)(),W=(0,P.J)({execute(...l){o.current=l;const A=g(...l);return I.current=A,w(K=>({...K,status:"loading"})),A.then(K=>{A===I.current&&w(x=>({...x,status:"success",error:void 0,result:K}))},K=>{A===I.current&&w(x=>({...x,status:"error",error:K}))}),A},reset(){w({status:"not-executed",error:void 0,result:S}),I.current=void 0,o.current=void 0}});return[f,(0,e.useMemo)(()=>({reset(){W.current.reset()},execute:(...l)=>W.current.execute(...l)}),[]),{promise:I.current,lastArgs:o.current}]}}}]);})();

//# sourceMappingURL=4253.2d089761.chunk.js.map