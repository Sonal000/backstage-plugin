"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2451],{52451:(ge,W,a)=>{a.r(W),a.d(W,{ApiExplorerIndexPage:()=>Ve,DefaultApiExplorerPage:()=>de});var t=a(14041),K=a(18690),T=a(18139),b=a(54195),v=a(77125),w=a(42899),P=a(58837),j=a(71677),E=a(72501),$=a(93285),A=a(99908),U=a(45634),Q=a(58007),Y=a(8109),H=a(55197),L=a(7031);const k=(0,L.A)({root:{textDecoration:"underline",cursor:"pointer"}},{name:"BackstageBreadcrumbsClickableText"})(E.A),S=(0,L.A)({root:{textDecoration:"underline",color:"inherit"}},{name:"BackstageBreadcrumbsStyledBox"})(v.A),J=(0,L.A)({root:{fontStyle:"italic"}},{name:"BreadcrumbsCurrentPage"})(v.A);function V(e){const{children:n,...r}=e,[o,l]=t.useState(null),i=t.Children.toArray(n),[m,g,...p]=i,f=p.length?p.pop():i[i.length-1],N=i.length>3,M=u=>{l(u.currentTarget)},x=()=>{l(null)},B=!!o;return t.createElement(t.Fragment,null,t.createElement(U.A,{"aria-label":"breadcrumb",...r},i.length>1&&t.createElement(S,{clone:!0},m),i.length>2&&t.createElement(S,{clone:!0},g),N&&t.createElement(k,{onClick:M},"..."),t.createElement(J,null,f)),t.createElement(H.Ay,{open:B,anchorEl:o,onClose:x,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},t.createElement(Q.A,null,p.map((u,O)=>t.createElement(Y.A,{key:O,button:!0},t.createElement(S,{clone:!0},u))))))}const X=(0,P.A)(e=>({root:{width:"100%",transition:"padding-left 0.1s ease-out",isolation:"isolate",[e.breakpoints.up("sm")]:{paddingLeft:n=>n.isPinned?n.sidebarConfig.drawerWidthOpen:n.sidebarConfig.drawerWidthClosed},[e.breakpoints.down("xs")]:{paddingBottom:n=>n.sidebarConfig.mobileSidebarHeight},"@media print":{padding:"0px !important"}},content:{zIndex:0,isolation:"isolate","&:focus":{outline:0}}}),{name:"BackstageSidebarPage"}),R=(0,t.createContext)({content:{contentRef:void 0}});function oe(e){const[n,r]=useState(()=>LocalStorage.getSidebarPinState()),{sidebarConfig:o}=useContext(SidebarConfigContext),l=useRef(null),i=useMemo(()=>({content:{contentRef:l}}),[l]);useEffect(()=>{LocalStorage.setSidebarPinState(n)},[n]);const m=useMediaQuery(f=>f.breakpoints.down("xs"),{noSsr:!0}),g=()=>r(!n),p=X({isPinned:n,sidebarConfig:o});return React__default.createElement(SidebarPinStateProvider,{value:{isPinned:n,toggleSidebarPinState:g,isMobile:m}},React__default.createElement(R.Provider,{value:i},React__default.createElement(Box,{className:p.root},e.children)))}function s(){const{content:e}=(0,t.useContext)(R);return{focusContent:(0,t.useCallback)(()=>{e?.contentRef?.current?.focus()},[e]),contentRef:e?.contentRef}}const d=(0,P.A)(e=>({header:{gridArea:"pageHeader",padding:e.spacing(3),width:"100%",boxShadow:e.shadows[4],position:"relative",zIndex:100,display:"flex",flexDirection:"row",alignItems:"center",backgroundImage:e.page.backgroundImage,backgroundPosition:"center",backgroundSize:"cover",[e.breakpoints.down("sm")]:{flexWrap:"wrap"}},leftItemsBox:{maxWidth:"100%",flexGrow:1},rightItemsBox:{width:"auto",alignItems:"center"},title:{color:e.page.fontColor,wordBreak:"break-word",fontSize:e.typography.h3.fontSize,marginBottom:0},subtitle:{color:e.page.fontColor,opacity:.8,display:"inline-block",marginTop:e.spacing(1),maxWidth:"75ch"},type:{textTransform:"uppercase",fontSize:11,opacity:.8,marginBottom:e.spacing(1),color:e.page.fontColor},breadcrumb:{color:e.page.fontColor},breadcrumbType:{fontSize:"inherit",opacity:.7,marginRight:-e.spacing(.3),marginBottom:e.spacing(.3)},breadcrumbTitle:{fontSize:"inherit",marginLeft:-e.spacing(.3),marginBottom:e.spacing(.3)}}),{name:"BackstageHeader"}),c=({type:e,typeLink:n,classes:r,pageTitle:o})=>e?n?t.createElement(V,{className:r.breadcrumb},t.createElement(A.N_,{to:n},e),t.createElement(E.A,null,o)):t.createElement(E.A,{className:r.type},e):null,I=({pageTitle:e,classes:n,tooltip:r})=>{const{contentRef:o}=s(),l=t.createElement(E.A,{ref:o,tabIndex:-1,className:n.title,variant:"h1"},e);return r?t.createElement(j.Ay,{title:r,placement:"top-start"},l):l},D=({classes:e,subtitle:n})=>n?typeof n!="string"?t.createElement(t.Fragment,null,n):t.createElement(E.A,{className:e.subtitle,variant:"subtitle2",component:"span"},n):null;function Z(e){const{children:n,pageTitleOverride:r,style:o,subtitle:l,title:i,tooltip:m,type:g,typeLink:p}=e,f=d(),M=(0,T.gf)(b.U).getOptionalString("app.title")||"Backstage",x=r||i,B=i||r,u=`${x} | %s | ${M}`,O=`${x} | ${M}`;return t.createElement(t.Fragment,null,t.createElement($.m,{titleTemplate:u,defaultTitle:O}),t.createElement("header",{style:o,className:f.header},t.createElement(v.A,{className:f.leftItemsBox},t.createElement(c,{classes:f,type:g,typeLink:p,pageTitle:B}),t.createElement(I,{classes:f,pageTitle:B,tooltip:m}),t.createElement(D,{classes:f,subtitle:l})),t.createElement(w.A,{container:!0,className:f.rightItemsBox,spacing:4},n)))}var C=a(50868);const q=(0,P.A)(e=>({root:{display:"grid",gridTemplateAreas:"'pageHeader pageHeader pageHeader' 'pageSubheader pageSubheader pageSubheader' 'pageNav pageContent pageSidebar'",gridTemplateRows:"max-content auto 1fr",gridTemplateColumns:"auto 1fr auto",overflowY:"auto",height:"100vh",[e.breakpoints.down("xs")]:{height:"100%"},"@media print":{display:"block",height:"auto",overflowY:"inherit"}}}),{name:"BackstagePage"});function z(e){const{themeId:n,children:r}=e,o=q();return t.createElement(C.A,{theme:l=>({...l,page:l.getPageTheme({themeId:n})})},t.createElement("main",{className:o.root},r))}function _(e){const{themeId:n,children:r,...o}=e;return t.createElement(z,{themeId:n},t.createElement(Z,{...o}),r)}var F=a(99870),ee=a.n(F);const pe=(0,P.A)(e=>({root:{gridArea:"pageContent",minWidth:0,paddingTop:e.spacing(3),paddingBottom:e.spacing(3),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},stretch:{display:"flex",flexDirection:"column",flexGrow:1},noPadding:{padding:0}}),{name:"BackstageContent"});function fe(e){const{className:n,stretch:r,noPadding:o,children:l,...i}=e,m=pe();return t.createElement("article",{...i,className:ee()(m.root,n,{[m.stretch]:r,[m.noPadding]:o})},l)}const Ee=e=>(0,P.A)(n=>({container:{width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-end",alignItems:"center",marginBottom:n.spacing(2),textAlign:e.textAlign},leftItemsBox:{flex:"1 1 auto",minWidth:0,overflow:"visible"},rightItemsBox:{flex:"0 1 auto",display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",marginLeft:n.spacing(1),minWidth:0,overflow:"visible"},description:{},title:{display:"inline-flex",marginBottom:0}}),{name:"BackstageContentHeader"}),he=({title:e="Unknown page",className:n})=>t.createElement(E.A,{variant:"h4",component:"h2",className:n,"data-testid":"header-title"},e);function ve(e){const{description:n,title:r,titleComponent:o=void 0,children:l,textAlign:i="left"}=e,m=Ee({textAlign:i})(),g=o||t.createElement(he,{title:r,className:m.title});return t.createElement(t.Fragment,null,t.createElement($.m,{title:r}),t.createElement(v.A,{className:m.container},t.createElement(v.A,{className:m.leftItemsBox},g,n&&t.createElement(E.A,{className:m.description,variant:"body2"},n)),t.createElement(v.A,{className:m.rightItemsBox},l)))}var te=a(64947),le=a(29365),ie=a(5893),se=a(73657),Ae=a(25534);function Ce(e){const{title:n,to:r}=e,o=(0,ie.A)(l=>l.breakpoints.down("xs"));return r?o?t.createElement(le.A,{component:se.N_,color:"primary",title:n,size:"small",to:r},t.createElement(Ae.A,null)):t.createElement(te.A,{component:se.N_,variant:"contained",color:"primary",to:r},n):null}var ce=a(95208),ye=a(93453),Pe=a(46423),Ie=a(5951),ne=a(26343),Se=a(28233),Xe=a(45250),Ze=a(45810),me=a(95581),ue=a(10265);const xe=()=>{const{t:e}=(0,ue.i)(me.O);return{url:"https://github.com/backstage/backstage/issues",items:[{title:e("supportConfig.default.title"),icon:"warning",links:[{title:e("supportConfig.default.linkTitle"),url:"https://github.com/backstage/backstage/blob/master/app-config.yaml"}]}]}};function Be(){const r=(0,T.Q2)().get(b.U)?.getOptionalConfig("app.support"),o=xe();return r?{url:r.getString("url"),items:r.getConfigArray("items").flatMap(l=>({title:l.getString("title"),icon:l.getOptionalString("icon"),links:(l.getOptionalConfigArray("links")??[]).flatMap(i=>({url:i.getString("url"),title:i.getString("title")}))}))}:o}var Oe=a(27799);function h(e){const{id:n,Fallback:r=Oe.A,...o}=e,i=(0,ce.n)().getSystemIcon(n)??r;return t.createElement(i,{...o})}function qe(e){return React__default.createElement(h,{id:"brokenImage",...e})}function _e(e){return React__default.createElement(h,{id:"catalog",...e})}function et(e){return React__default.createElement(h,{id:"chat",...e})}function tt(e){return React__default.createElement(h,{id:"dashboard",...e})}function nt(e){return React__default.createElement(h,{id:"docs",...e})}function at(e){return React__default.createElement(h,{id:"email",...e})}function rt(e){return React__default.createElement(h,{id:"github",...e})}function ot(e){return React__default.createElement(h,{id:"group",...e})}function G(e){return t.createElement(h,{id:"help",...e})}function lt(e){return React__default.createElement(h,{id:"user",...e})}function it(e){return React__default.createElement(h,{id:"warning",...e})}const Te=(0,P.A)({popoverList:{minWidth:260,maxWidth:400},menuItem:{whiteSpace:"normal"}},{name:"BackstageSupportButton"}),be=({icon:e})=>{const n=(0,ce.n)(),r=e?n.getSystemIcon(e)??G:G;return t.createElement(r,null)},Le=({link:e})=>t.createElement(A.N_,{to:e.url},e.title??e.url),Re=({item:e})=>t.createElement(ne.A,null,t.createElement(Pe.A,null,t.createElement(be,{icon:e.icon})),t.createElement(Ie.A,{primary:e.title,secondary:e.links?.reduce((n,r,o)=>[...n,o>0&&t.createElement("br",{key:o}),t.createElement(Le,{link:r,key:r.url})],[])}));function De(e){const{t:n}=(0,ue.i)(me.O),{title:r,items:o,children:l}=e,{items:i}=Be(),[m,g]=(0,t.useState)(!1),[p,f]=(0,t.useState)(null),N=Te(),M=(0,ie.A)(u=>u.breakpoints.down("sm")),x=u=>{f(u.currentTarget),g(!0)},B=()=>{g(!1)};return t.createElement(t.Fragment,null,t.createElement(v.A,{display:"flex",ml:1},M?t.createElement(le.A,{color:"primary",size:"small",onClick:x,"data-testid":"support-button","aria-label":"Support"},t.createElement(G,null)):t.createElement(te.A,{"data-testid":"support-button","aria-label":"Support",color:"primary",onClick:x,startIcon:t.createElement(G,null)},n("supportButton.title"))),t.createElement(H.Ay,{"data-testid":"support-button-popover",open:m,anchorEl:p,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:B},t.createElement(Se.A,{className:N.popoverList,autoFocusItem:!!p},r&&t.createElement(ne.A,{button:!1,alignItems:"flex-start",className:N.menuItem},t.createElement(E.A,{variant:"subtitle1"},r)),t.Children.map(l,(u,O)=>t.createElement(ne.A,{alignItems:"flex-start",key:`child-${O}`,className:N.menuItem},u)),(o??i).map((u,O)=>t.createElement(Re,{item:u,key:`item-${O}`}))),t.createElement(ye.A,null,t.createElement(te.A,{color:"primary",onClick:B,"aria-label":"Close"},n("supportButton.close")))))}var Ne=a(72814),y=a(71787),Me=a(18453),ae=a(77509),We=a(99409),Ue=a(15897),He=a(30117),ke=a(40941),ze=a(75925),Fe=a(56829),Ge=a(48534),Ke=a(28967);const we=(0,Ke.y)({id:"plugin.permission.api"});function st(e,n){return e.name===n.name}function je(e,n){return"resourceType"in e?!n||e.resourceType===n:!1}function ct(e){return e.attributes.action==="create"}function mt(e){return e.attributes.action==="read"}function ut(e){return e.attributes.action==="update"}function dt(e){return e.attributes.action==="delete"}function gt(e){return{authorize:async(n,r)=>await e.authorize(n,r),authorizeConditional(n,r){const o=n;return e.authorize(o,r)}}}var re=(e=>(e.DENY="DENY",e.ALLOW="ALLOW",e.CONDITIONAL="CONDITIONAL",e))(re||{}),$e=a(83209);function Qe(e){const n=(0,T.gf)(we),{data:r,error:o}=(0,$e.Ay)(e,async l=>{if(je(l.permission)&&!l.resourceRef)return re.DENY;const{result:i}=await n.authorize(l);return i});return o?{error:o,loading:!1,allowed:!1}:r===void 0?{loading:!0,allowed:!1}:{loading:!1,allowed:r===re.ALLOW}}var Ye=a(71913);const Je=[y.G.columns.createTitleColumn({hidden:!0}),y.G.columns.createNameColumn({defaultKind:"API"}),y.G.columns.createSystemColumn(),y.G.columns.createOwnerColumn(),y.G.columns.createSpecTypeColumn(),y.G.columns.createSpecLifecycleColumn(),y.G.columns.createMetadataDescriptionColumn(),y.G.columns.createTagsColumn()],de=e=>{const{initiallySelectedFilter:n="all",columns:r,actions:o,ownerPickerMode:l}=e,m=`${(0,T.gf)(b.U).getOptionalString("organization.name")??"Backstage"} API Explorer`,g=(0,Ne.S)(Ge.J),{allowed:p}=Qe({permission:Ye.C4});return t.createElement(_,{themeId:"apis",title:"APIs",subtitle:m,pageTitleOverride:"APIs"},t.createElement(fe,null,t.createElement(ve,{title:""},p&&t.createElement(Ce,{title:"Register Existing API",to:g?.()}),t.createElement(De,null,"All your APIs")),t.createElement(Me.B9,null,t.createElement(ae.GI,null,t.createElement(ae.GI.Filters,null,t.createElement(We.m,{initialFilter:"api",hidden:!0}),t.createElement(Ue.Q,null),t.createElement(He.y,{initialFilter:n}),t.createElement(ke.t,{mode:l}),t.createElement(ze.W,null),t.createElement(Fe.m,null)),t.createElement(ae.GI.Content,null,t.createElement(y.G,{columns:r||Je,actions:o}))))))},Ve=e=>(0,K.P1)()||t.createElement(de,{...e})},99908:(ge,W,a)=>{a.d(W,{N_:()=>oe});var t=a(18139),K=a(54195),T=a(52262),b=a(49203),v=a(58837),w=a(72501),P=a(99870),j=a.n(P),E=a(45250),$=a.n(E),A=a(14041),U=a(18690),Q=a(73657);function Y(){const[s]=(0,U.AV)(A.createElement(U.qh,{index:!0,element:A.createElement("div",null)}));return!s.index}const H=(0,v.A)({visuallyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",overflow:"hidden",position:"absolute",userSelect:"none",whiteSpace:"nowrap",height:1,width:1},externalLink:{position:"relative"}},{name:"Link"}),L=s=>/^([a-z+.-]+):/.test(s),k=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,S=window.open;if(S&&!S.__backstage){const s=function(...c){const I=String(c[0]);if(k.test(I))throw new Error("Rejected window.open() with a javascript: URL as a security precaution");return S.apply(this,c)};s.__backstage=!0,window.open=s}const J=()=>{try{return(0,t.gf)(K.U).getOptionalString("app.baseUrl")}catch{return}},V=()=>{const s="http://sample.dev",d=J()??"/",{pathname:c}=new URL(d,s);return(0,E.trimEnd)(c,"/")},X=s=>{let d=String(s);const c=V(),I=L(d),D=d.startsWith(c);return!I&&!D&&(d=c.concat(d)),d},R=s=>s instanceof Array?s.map(R).join(" ").trim():typeof s=="object"&&s?R(s?.props?.children):["string","number"].includes(typeof s)?String(s):"",oe=A.forwardRef(({onClick:s,noTrack:d,...c},I)=>{const D=H(),Z=(0,T.s)(),C=Y()?X(c.to):c.to,q=R(c.children)||C,z=L(C),_=z&&!!/^https?:/.exec(C);if(k.test(C))throw new Error("Link component rejected javascript: URL as a security precaution");const F=ee=>{s?.(ee),d||Z.captureEvent("click",q,{attributes:{to:C}})};return z?A.createElement(b.A,{..._?{target:"_blank",rel:"noopener"}:{},...c,...c["aria-label"]?{"aria-label":`${c["aria-label"]}, Opens in a new window`}:{},ref:I,href:C,onClick:F,className:j()(D.externalLink,c.className)},c.children,A.createElement(w.A,{component:"span",className:D.visuallyHidden},", Opens in a new window")):A.createElement(b.A,{...c,ref:I,component:Q.N_,to:C,onClick:F})})}}]);})();

//# sourceMappingURL=2451.1424fd2b.chunk.js.map