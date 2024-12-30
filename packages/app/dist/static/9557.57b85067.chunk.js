"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9557],{56420:(U,i,t)=>{t.d(i,{Y:()=>_});var l=t(95208),s=t(77125),u=t(64947),f=t(93453),m=t(29365),E=t(46423),v=t(5951),g=t(26343),d=t(28233),r=t(55197),p=t(58837),P=t(72501),T=t(5893),o=t(14041),G=t(45250),X=t.n(G),b=t(45810),nt=t.n(b),Q=t(70209),H=t(92483),J=t(75202),Z=t(89475),e=t(10265);const w=(0,p.A)({popoverList:{minWidth:260,maxWidth:400},menuItem:{whiteSpace:"normal"}},{name:"BackstageSupportButton"}),q=({icon:y})=>{const K=(0,l.n)(),F=y?K.getSystemIcon(y)??H.NT:H.NT;return o.createElement(F,null)},tt=({link:y})=>o.createElement(J.N_,{to:y.url},y.title??y.url),z=({item:y})=>o.createElement(g.A,{button:!1},o.createElement(E.A,null,o.createElement(q,{icon:y.icon})),o.createElement(v.A,{primary:y.title,secondary:y.links?.reduce((K,F,M)=>[...K,M>0&&o.createElement("br",{key:M}),o.createElement(tt,{link:F,key:F.url})],[])}));function _(y){const{t:K}=(0,e.i)(Z.O),{title:F,items:M,children:V}=y,{items:et}=(0,Q.l)(),[lt,ot]=(0,o.useState)(!1),[O,L]=(0,o.useState)(null),R=w(),N=(0,T.A)(I=>I.breakpoints.down("sm")),h=I=>{L(I.currentTarget),ot(!0)},W=()=>{ot(!1)};return o.createElement(o.Fragment,null,o.createElement(s.A,{display:"flex",ml:1},N?o.createElement(m.A,{color:"primary",size:"small",onClick:h,"data-testid":"support-button","aria-label":"Support"},o.createElement(H.NT,null)):o.createElement(u.A,{"data-testid":"support-button","aria-label":"Support",color:"primary",onClick:h,startIcon:o.createElement(H.NT,null)},K("supportButton.title"))),o.createElement(r.Ay,{"data-testid":"support-button-popover",open:lt,anchorEl:O,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:W},o.createElement(d.A,{className:R.popoverList,autoFocusItem:!!O},F&&o.createElement(g.A,{button:!1,alignItems:"flex-start",className:R.menuItem},o.createElement(P.A,{variant:"subtitle1"},F)),o.Children.map(V,(I,j)=>o.createElement(g.A,{button:!1,alignItems:"flex-start",key:`child-${j}`,className:R.menuItem},I)),(M??et).map((I,j)=>o.createElement(z,{item:I,key:`item-${j}`}))),o.createElement(f.A,null,o.createElement(u.A,{color:"primary",onClick:W,"aria-label":"Close"},K("supportButton.close")))))}},29021:(U,i,t)=>{t.d(i,{X:()=>W});var l=t(25301),s=t(77125),u=t(29365),f=t(7031),m=t(58837),E=t(54917),v=t(72501),g=t(83313),d=t(89019),r=t(62461),p=t(68887),P=t(63798),T=t(64704),o=t(6774),G=t(75625),X=t(65859),b=t(5416),nt=t(33494),Q=t(80113),H=t(26229),J=t(46802),Z=t(45250),e=t(14041),w=t(64947),q=t(81252),tt=t(89475),z=t(10265);const _=(0,m.A)(a=>({root:{height:"100%",width:"315px",display:"flex",flexDirection:"column",marginRight:a.spacing(3)},value:{fontWeight:"bold",fontSize:18},header:{display:"flex",alignItems:"center",height:a.spacing(7.5),justifyContent:"space-between",borderBottom:`1px solid ${a.palette.grey[500]}`},filters:{display:"flex",flexDirection:"column","& > *":{marginTop:a.spacing(2)}}}),{name:"BackstageTableFilters"}),y=a=>{const n=_(),{onChangeFilters:c}=a,{t:C}=(0,z.i)(tt.O),[A,D]=(0,e.useState)({...a.selectedFilters}),[B,$]=(0,e.useState)(!1),S=()=>{D({}),$(x=>!x)};return(0,e.useEffect)(()=>{c(A)},[A,c]),e.createElement(s.A,{className:n.root},e.createElement(s.A,{className:n.header},e.createElement(s.A,{className:n.value},C("table.filter.title")),e.createElement(w.A,{color:"primary",onClick:S},C("table.filter.clearAll"))),e.createElement(s.A,{className:n.filters},a.filters?.length&&a.filters.map(x=>e.createElement(q.w,{triggerReset:B,key:x.element.label,...x.element,selected:A[x.element.label],onChange:at=>D({...A,[x.element.label]:at})}))))};var K=t(78467);function F(a){return e.createElement("tbody",{"data-testid":"loading-indicator"},e.createElement("tr",null,e.createElement("td",{colSpan:a.colSpan},e.createElement(s.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minHeight:"15rem"}},e.createElement(K.A,{size:"5rem"})))))}const M={Add:(0,e.forwardRef)((a,n)=>e.createElement(g.A,{...a,ref:n})),Check:(0,e.forwardRef)((a,n)=>e.createElement(r.A,{...a,ref:n})),Clear:(0,e.forwardRef)((a,n)=>e.createElement(T.A,{...a,ref:n})),Delete:(0,e.forwardRef)((a,n)=>e.createElement(o.A,{...a,ref:n})),DetailPanel:(0,e.forwardRef)((a,n)=>e.createElement(P.A,{...a,ref:n})),Edit:(0,e.forwardRef)((a,n)=>e.createElement(G.A,{...a,ref:n})),Export:(0,e.forwardRef)((a,n)=>e.createElement(H.A,{...a,ref:n})),Filter:(0,e.forwardRef)((a,n)=>e.createElement(X.A,{...a,ref:n})),FirstPage:(0,e.forwardRef)((a,n)=>e.createElement(b.A,{...a,ref:n})),LastPage:(0,e.forwardRef)((a,n)=>e.createElement(nt.A,{...a,ref:n})),NextPage:(0,e.forwardRef)((a,n)=>e.createElement(P.A,{...a,ref:n})),PreviousPage:(0,e.forwardRef)((a,n)=>e.createElement(p.A,{...a,ref:n})),ResetSearch:(0,e.forwardRef)((a,n)=>e.createElement(T.A,{...a,ref:n})),Search:(0,e.forwardRef)((a,n)=>e.createElement(X.A,{...a,ref:n})),SortArrow:(0,e.forwardRef)((a,n)=>e.createElement(d.A,{...a,ref:n})),ThirdStateCheck:(0,e.forwardRef)((a,n)=>e.createElement(Q.A,{...a,ref:n})),ViewColumn:(0,e.forwardRef)((a,n)=>e.createElement(J.A,{...a,ref:n}))};function V(a,n){const c=n.split(".");let C=a[c[0]];for(let A=1;A<c.length;++A){if(C===void 0)return C;const D=c[A];C=C[D]}return C}const et=(0,f.A)(a=>({header:{padding:a.spacing(1,2,1,2.5),borderTop:`1px solid ${a.palette.grey.A100}`,borderBottom:`1px solid ${a.palette.grey.A100}`,fontWeight:a.typography.fontWeightBold,position:"static",wordBreak:"normal",textTransform:"uppercase"}}),{name:"BackstageTableHeader"})(l.rV),lt=(0,f.A)(a=>({root:{padding:a.spacing(3,0,2.5,2.5)},title:{"& > h6":{fontWeight:a.typography.fontWeightBold}},searchField:{paddingRight:a.spacing(2)}}),{name:"BackstageTableToolbar"})(l.Nb),ot=(0,m.A)(a=>({root:{display:"flex",alignItems:"center",justifyContent:"space-between"},title:{fontWeight:a.typography.fontWeightBold,fontSize:18,whiteSpace:"nowrap"}}),{name:"BackstageTableFiltersContainer"}),O=(0,m.A)(()=>({root:{display:"flex",alignItems:"start"}}),{name:"BackstageTable"});function L(a,n){return a.map(c=>{const C=c.headerStyle??{};let A=c.cellStyle||{};if(c.highlight)if(C.color=n.palette.textContrast,typeof A=="object")A.fontWeight=n.typography.fontWeightBold;else{const D=A;A=(B,$,S)=>({...D(B,$,S),fontWeight:n.typography.fontWeightBold})}return{...c,headerStyle:C,cellStyle:A}})}function R(a,n){return(0,Z.transform)(a,(c,C,A)=>{(0,Z.isEqual)(C,n[A])||(c[A]=C)})}const N={search:"",filtersOpen:!1,filters:{}};function h(a){const{toolbarRef:n,setSearch:c,hasFilters:C,selectedFiltersLength:A,toggleFilters:D}=a,B=ot(),$=(0,e.useCallback)(S=>{a.onSearchChanged(S),c(S)},[a,c]);return C?e.createElement(s.A,{className:B.root},e.createElement(s.A,{className:B.root},e.createElement(u.A,{onClick:D,"aria-label":"filter list"},e.createElement(X.A,null)),e.createElement(v.A,{className:B.title},"Filters (",A,")")),e.createElement(lt,{...a,ref:n,onSearchChanged:$})):e.createElement(lt,{...a,ref:n,onSearchChanged:$})}function W(a){const{data:n,columns:c,emptyContent:C,options:A,title:D,subtitle:B,localization:$,filters:S,initialState:x,onStateChange:at,components:Dt,isLoading:dt,style:yt,...Pt}=a,Mt=O(),Tt=(0,E.A)(),ct={...N,...x},[it,Et]=(0,e.useState)(ct.filtersOpen),ut=(0,e.useCallback)(()=>Et(Y=>!Y),[Et]),[k,Bt]=(0,e.useState)(ct.filters),[gt,ft]=(0,e.useState)(ct.search);(0,e.useEffect)(()=>{if(at){const Y=R({search:gt,filtersOpen:it,filters:k},N);at(Y)}},[gt,it,k,at]);const vt=(0,e.useCallback)(Y=>c.find(ht=>ht.title===Y)?.field,[c]),St=(0,e.useMemo)(()=>{if(typeof n=="function"||!k)return n;const Y=Object.values(k);return n&&Y.flat().length?n.filter(Lt=>!!Object.entries(k).filter(([,mt])=>!!mt.length).every(([mt,st])=>{const rt=V(Lt,vt(mt));return Array.isArray(rt)&&Array.isArray(st)?rt.some(Wt=>st.includes(Wt)):Array.isArray(rt)?rt.includes(st):Array.isArray(st)?st.includes(rt):rt===st})):n},[n,k,vt]),At=Object.values(k).flat().length,Ct=!!S?.length,Rt=(0,e.useCallback)(Y=>e.createElement(h,{setSearch:ft,hasFilters:Ct,selectedFiltersLength:At,toggleFilters:ut,...Y}),[ut,Ct,At,ft]),pt=typeof n!="function"&&n.length===0,Ot=c.length,It=(0,e.useMemo)(()=>I({hasNoRows:pt,emptyContent:C,columnCount:Ot,loading:dt}),[pt,C,Ot,dt]);return e.createElement(s.A,{className:Mt.root},it&&n&&typeof n!="function"&&S?.length&&e.createElement(y,{filters:j(S,n,c),selectedFilters:k,onChangeFilters:Bt}),e.createElement(l.Ay,{components:{Header:et,Body:It,Toolbar:Rt,...Dt},options:A,columns:L(c,Tt),icons:M,title:e.createElement(e.Fragment,null,e.createElement(v.A,{variant:"h5",component:"h2"},D),B&&e.createElement(v.A,{color:"textSecondary",variant:"body1"},B)),data:St,style:{width:"100%",...yt},localization:{toolbar:{searchPlaceholder:"Filter",searchTooltip:"Filter"},...$},...Pt}))}W.icons=Object.freeze(M);function I({columnCount:a,emptyContent:n,hasNoRows:c,loading:C}){return A=>C?e.createElement(F,{colSpan:a}):n&&c?e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",{colSpan:a},n))):e.createElement(l.C6,{...A})}function j(a,n,c){const C=D=>{const B=new Set,$=S=>{S!=null&&B.add(S)};return n&&n.forEach(S=>{const x=V(S,c.find(at=>at.title===D)?.field);Array.isArray(x)?x.forEach($):$(x)}),B},A=D=>({placeholder:"All results",label:D.column,multiple:D.type==="multiple-select",items:[...C(D.column)].sort().map(B=>({label:B,value:B}))});return a.map(D=>({type:D.type,element:A(D)}))}},70209:(U,i,t)=>{t.d(i,{l:()=>E});var l=t(18139),s=t(54195),u=t(89475),f=t(10265);const m=()=>{const{t:v}=(0,f.i)(u.O);return{url:"https://github.com/backstage/backstage/issues",items:[{title:v("supportConfig.default.title"),icon:"warning",links:[{title:v("supportConfig.default.linkTitle"),url:"https://github.com/backstage/backstage/blob/master/app-config.yaml"}]}]}};function E(){const d=(0,l.Q2)().get(s.U)?.getOptionalConfig("app.support"),r=m();return d?{url:d.getString("url"),items:d.getConfigArray("items").flatMap(p=>({title:p.getString("title"),icon:p.getOptionalString("icon"),links:(p.getOptionalConfigArray("links")??[]).flatMap(P=>({url:P.getString("url"),title:P.getOptionalString("title")??""}))}))}:r}},17174:(U,i,t)=>{t.d(i,{s:()=>v});var l=t(77125),s=t(99703),u=t(58837),f=t(14041);const m=g=>(0,s.A)({root:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(22em, 1fr))",gridAutoRows:"1fr",gridGap:g.spacing(2)}}),E=(0,u.A)(m,{name:"BackstageItemCardGrid"});function v(g){const{children:d,...r}=g,p=E(r);return f.createElement(l.A,{className:p.root,...r},d)}},45575:(U,i,t)=>{t.d(i,{f:()=>g});var l=t(77125),s=t(99703),u=t(58837),f=t(72501),m=t(14041);const E=d=>(0,s.A)({root:{color:d.palette.common.white,padding:d.spacing(2,2,3),backgroundImage:d.getPageTheme({themeId:"card"}).backgroundImage,backgroundPosition:0,backgroundSize:"inherit"}}),v=(0,u.A)(E,{name:"BackstageItemCardHeader"});function g(d){const{title:r,subtitle:p,children:P}=d,T=v(d);return m.createElement(l.A,{className:T.root},p&&m.createElement(f.A,{variant:"subtitle2",component:"h3"},p),r&&m.createElement(f.A,{variant:"h6",component:"h4"},r),P)}},92303:(U,i,t)=>{t.d(i,{d:()=>f});var l=t(14041),s=t(16654),u=t(82326);function f(m){const{themeId:E,children:v,...g}=m;return l.createElement(u.Y,{themeId:E},l.createElement(s.Y,{...g}),v)}},19108:(U,i,t)=>{t.d(i,{A:()=>l,G:()=>s});const l="backstage.io/techdocs-ref",s="backstage.io/techdocs-entity"},4348:(U,i,t)=>{t.d(i,{V:()=>l});function l(s,u){return u.getOptionalBoolean("techdocs.legacyUseCaseSensitiveTripletPaths")?s:s.toLocaleLowerCase("en-US")}},67633:(U,i,t)=>{t.d(i,{o:()=>b});var l=t(14041),s=t(36338),u=t(72814),f=t(18139),m=t(54195),E=t(97214),v=t(699),g=t(53318),d=t(17749),r=t(29021),p=t(65995),P=t(87318),T=t(143),o=t(48751),G=t(4348);const X=[o.B.createTitleColumn({hidden:!0}),o.B.createNameColumn(),o.B.createOwnerColumn(),o.B.createKindColumn(),o.B.createTypeColumn()],b=nt=>{const{entities:Q,title:H,loading:J,columns:Z,actions:e,options:w}=nt,[,q]=(0,s.A)(),tt=(0,u.S)(d.Oc),z=(0,f.gf)(m.U);if(!Q)return null;const _=Q.map(M=>{const V=(0,v.t)(M,E.vv);return{entity:M,resolved:{docsUrl:tt({namespace:(0,G.V)(M.metadata.namespace??"default",z),kind:(0,G.V)(M.kind,z),name:(0,G.V)(M.metadata.name,z)}),ownedByRelations:V,ownedByRelationsTitle:V.map(et=>(0,g.S)(et,{defaultKind:"group"})).join(", ")}}}),y=[T.f.createCopyDocsUrlAction(q)],K=20,F=_&&_.length>K;return l.createElement(l.Fragment,null,J||_&&_.length>0?l.createElement(r.X,{isLoading:J,options:{paging:F,pageSize:K,search:!0,actionsColumnIndex:-1,...w},data:_,columns:Z||X,actions:e||y,title:H?`${H} (${_.length})`:`All (${_.length})`}):l.createElement(p.p,{missing:"data",title:"No documents to show",description:"Create your own document. Check out our Getting Started Information",action:l.createElement(P.z,{color:"primary",to:"https://backstage.io/docs/features/techdocs/getting-started",variant:"contained"},"DOCS")}))};b.columns=o.B,b.actions=T.f},143:(U,i,t)=>{t.d(i,{f:()=>f});var l=t(14041),s=t(55290),u=t(23730);const f={createCopyDocsUrlAction(m){return E=>({icon:()=>l.createElement(s.A,{fontSize:"small"}),tooltip:"Click to copy documentation link to clipboard",onClick:()=>m(`${window.location.origin}${E.resolved.docsUrl}`)})},createStarEntityAction(m,E){return v=>{const g=v.entity,d=m(g);return{cellStyle:{paddingLeft:"1em"},icon:()=>l.createElement(u.m,{isFavorite:d}),tooltip:d?"Remove from favorites":"Add to favorites",onClick:()=>E(g)}}}}},48751:(U,i,t)=>{t.d(i,{B:()=>d});var l=t(14041),s=t(77125),u=t(58837);const f=(0,u.A)(r=>({value:{marginBottom:r.spacing(.75)},subvalue:{color:r.palette.textSubtle,fontWeight:"normal"}}),{name:"BackstageSubvalueCell"});function m(r){const{value:p,subvalue:P}=r,T=f();return l.createElement(l.Fragment,null,l.createElement(s.A,{className:T.value},p),l.createElement(s.A,{className:T.subvalue},P))}var E=t(75202),v=t(14158);function g(r){return r.metadata.title||r.metadata.name}const d={createTitleColumn(r){return{...d.createNameColumn(),field:"entity.metadata.title",hidden:r?.hidden}},createNameColumn(){return{title:"Document",field:"entity.metadata.name",highlight:!0,searchable:!0,defaultSort:"asc",customSort:(r,p)=>{const P=g(r.entity).toLocaleLowerCase(),T=g(p.entity).toLocaleLowerCase();return P.localeCompare(T)},render:r=>l.createElement(m,{value:l.createElement(E.N_,{to:r.resolved.docsUrl},g(r.entity)),subvalue:r.entity.metadata.description})}},createOwnerColumn(){return{title:"Owner",field:"resolved.ownedByRelationsTitle",render:({resolved:r})=>l.createElement(v.i,{entityRefs:r.ownedByRelations,defaultKind:"group"})}},createKindColumn(){return{title:"Kind",field:"entity.kind"}},createTypeColumn(){return{title:"Type",field:"entity.spec.type"}}}},59557:(U,i,t)=>{t.r(i),t.d(i,{TechDocsCustomHome:()=>ot});var l=t(14041),s=t(73466),u=t(58837),f=t(97214),m=t(78560),E=t(18139),v=t(94223),g=t(699);function d(){const O=(0,E.gf)(v.K),{loading:L,value:R}=(0,s.A)(async()=>{const{ownershipEntityRefs:h}=await O.getBackstageIdentity();return h},[]),N=(0,l.useMemo)(()=>{const h=new Set(R??[]);return W=>{const I=(0,g.t)(W,f.vv).map(m.U2);for(const j of I)if(h.has(j))return!0;return!1}},[R]);return{loading:L,isOwnedEntity:N}}var r=t(30043),p=t(24259),P=t(67633),T=t(17749),o=t(4348),G=t(72814),X=t(54195),b=t(17174),nt=t(45575),Q=t(87318),H=t(40703),J=t(59469),Z=t(48653),e=t(57369);const w=O=>{const{entities:L}=O,R=(0,G.S)(T.Oc),N=(0,E.gf)(X.U);return L?l.createElement(b.s,{"data-testid":"docs-explore"},L?.length?L.map((h,W)=>l.createElement(H.A,{key:W},l.createElement(e.A,null,l.createElement(nt.f,{title:h.metadata.title??h.metadata.name})),l.createElement(Z.A,null,h.metadata.description),l.createElement(J.A,null,l.createElement(Q.z,{to:R({namespace:(0,o.V)(h.metadata.namespace??"default",N),kind:(0,o.V)(h.kind,N),name:(0,o.V)(h.metadata.name,N)}),color:"primary","data-testid":"read_docs"},"Read Docs")))):null):null};var q=t(17138),tt=t(56420),z=t(16454),_=t(96872),y=t(99338),K=t(62112),F=t(44390),M=t(88461),V=t(19108);const et={DocsTable:P.o,DocsCardGrid:w},lt=({config:O,entities:L,index:R})=>{const h=(0,u.A)({panelContainer:{marginBottom:"2rem",...O.panelCSS?O.panelCSS:{}}})(),{loading:W,isOwnedEntity:I}=d(),j=et[O.panelType],a=L.filter(n=>O.filterPredicate==="ownedByUser"?W?!1:I(n):typeof O.filterPredicate=="function"&&O.filterPredicate(n));return l.createElement(l.Fragment,null,l.createElement(q.d,{title:O.title,description:O.description},R===0?l.createElement(tt.Y,null,"Discover documentation in your ecosystem."):null),l.createElement("div",{className:h.panelContainer},l.createElement(j,{"data-testid":"techdocs-custom-panel",entities:a})))},ot=O=>{const{tabsConfig:L}=O,[R,N]=(0,l.useState)(0),h=(0,E.gf)(r.v),{value:W,loading:I,error:j}=(0,s.A)(async()=>(await h.getEntities({filter:{[`metadata.annotations.${V.A}`]:p.c},fields:["apiVersion","kind","metadata","relations","spec.owner","spec.type"]})).items.filter(c=>!!c.metadata.annotations?.[V.A])),a=L[R];return I?l.createElement(M.S,null,l.createElement(z.U,null,l.createElement(_.k,null))):j?l.createElement(M.S,null,l.createElement(z.U,null,l.createElement(y.B,{severity:"error",title:"Could not load available documentation."},l.createElement(K.z,{language:"text",text:j.toString()})))):l.createElement(M.S,null,l.createElement(F.o,{selectedIndex:R,onChange:n=>N(n),tabs:L.map(({label:n},c)=>({id:c.toString(),label:n}))}),l.createElement(z.U,{"data-testid":"techdocs-content"},a.panels.map((n,c)=>l.createElement(lt,{key:c,config:n,entities:W||[],index:c}))))}},88461:(U,i,t)=>{t.d(i,{S:()=>m});var l=t(14041),s=t(92303),u=t(18139),f=t(54195);const m=E=>{const{children:v}=E,d=`Documentation available in ${(0,u.gf)(f.U).getOptionalString("organization.name")??"Backstage"}`;return l.createElement(s.d,{title:"Documentation",subtitle:d,themeId:"documentation"},v)}},55290:(U,i,t)=>{var l,s=t(4293),u=t(78920);l={value:!0},i.A=void 0;var f=u(t(14041)),m=s(t(74044)),E=(0,m.default)(f.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");i.A=E}}]);})();

//# sourceMappingURL=9557.57b85067.chunk.js.map