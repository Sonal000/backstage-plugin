"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4517],{34517:(le,O,n)=>{n.r(O),n.d(O,{CatalogGraphCard:()=>re});var $=n(78560),tt=n(40703),z=n(59469),et=n(48653),at=n(45685),V=n(37197),u=n(58837),nt=n(7031),rt=n(99870),K=n.n(rt),a=n(14041),E=n(77125),C=n(72501),ot=n(52235),Q=n(94202);const lt=(0,u.A)(t=>({root:{maxWidth:"fit-content",padding:t.spacing(2,2,2,2.5)},boxTitle:{margin:0,color:t.palette.textSubtle},arrow:{color:t.palette.textSubtle}}),{name:"BackstageBottomLink"});function st(t){const{link:e,title:r,onClick:l}=t,o=lt();return a.createElement(E.A,null,a.createElement(V.A,null),a.createElement(Q.N_,{to:e,onClick:l,underline:"none"},a.createElement(E.A,{display:"flex",alignItems:"center",className:o.root},a.createElement(E.A,{className:o.boxTitle,fontWeight:"fontWeightBold",m:1},a.createElement(C.A,null,a.createElement("strong",null,r))),a.createElement(ot.A,{className:o.arrow}))))}var ct=n(64947);const it=a.forwardRef((t,e)=>a.createElement(Q.N_,{ref:e,...t,color:"initial"})),dt=a.forwardRef((t,e)=>a.createElement(ct.A,{ref:e,component:it,...t})),se=null;var mt=n(58007),D=n(8109),G=n(5951),gt=n(18139),ut=n(24453),pt=n(29365),yt=n(71677),ht=n(99594),ft=n(36338),X=n(43979),Y=n(10265);function S(t){const{t:e}=(0,Y.i)(X.O),{text:r,tooltipDelay:l=1e3,tooltipText:o=e("copyTextButton.tooltipText"),"aria-label":s="Copy text"}=t,i=(0,gt.gf)(ut.m),[c,m]=(0,a.useState)(!1),[{error:g},p]=(0,ft.A)();(0,a.useEffect)(()=>{g&&i.post(g)},[g,i]);const v=f=>{f.stopPropagation(),m(!0),p(r)};return a.createElement(a.Fragment,null,a.createElement(yt.Ay,{id:"copy-test-tooltip",title:o,placement:"top",leaveDelay:l,onClose:()=>m(!1),open:c},a.createElement(pt.A,{onClick:v,"aria-label":s},a.createElement(ht.A,null))))}var B=n(268),Et=n(8973),Ct=n(29655),vt=n(91567),b=n(42899),At=n(9181),xt=n(6924),St=n(36108),Bt=n(28138),Nt=n(54917),Tt=n(20279),Lt=n(40697),kt=n(25577);function Pt(t){const{text:e,language:r,showLineNumbers:l=!1,highlightedNumbers:o,customStyle:s,showCopyCodeButton:i=!1}=t,c=(0,Nt.A)(),m=c.palette.type==="dark"?Lt.A:kt.A,g=c.palette.type==="dark"?"#256bf3":"#e6ffed";return a.createElement(E.A,{position:"relative"},a.createElement(Tt.A,{customStyle:s,language:r,style:m,showLineNumbers:l,wrapLines:!0,lineNumberStyle:{color:c.palette.textVerySubtle},lineProps:p=>o?.includes(p)?{style:{backgroundColor:g}}:{}},e),i&&a.createElement(E.A,{position:"absolute",top:0,right:0},a.createElement(S,{text:e})))}const It=(0,u.A)(t=>({markdown:{"& table":{borderCollapse:"collapse",border:`1px solid ${t.palette.border}`},"& th, & td":{border:`1px solid ${t.palette.border}`,padding:t.spacing(1)},"& td":{wordBreak:"break-word",overflow:"hidden",verticalAlign:"middle",lineHeight:"1",margin:0,padding:t.spacing(3,2,3,2.5),borderBottom:0},"& th":{backgroundColor:t.palette.background.paper},"& tr":{backgroundColor:t.palette.background.paper},"& tr:nth-child(odd)":{backgroundColor:t.palette.background.default},"& a":{color:t.palette.link},"& img":{maxWidth:"100%"}}}),{name:"BackstageMarkdownContent"}),Z=(t,e)=>e?typeof e=="string"?t+e:a.Children.toArray(e.props.children).reduce(Z,t):t,h=({level:t,children:e})=>{const o=a.Children.toArray(e).reduce(Z,"").toLocaleLowerCase("en-US").replace(/\W/g,"-");return a.createElement(`h${t}`,{id:o},e)},Rt={code:({inline:t,className:e,children:r,...l})=>{const o=String(r).replace(/\n+$/,""),s=/language-(\w+)/.exec(e||"");return!t&&s?a.createElement(Pt,{language:s[1],text:o}):a.createElement("code",{className:e,...l},r)},h1:h,h2:h,h3:h,h4:h,h5:h,h6:h};function Wt(t){const{content:e,dialect:r="gfm",linkTarget:l,transformLinkUri:o,transformImageUri:s,className:i}=t,c=It();return a.createElement(St.$,{remarkPlugins:r==="gfm"?[Bt.A]:[],className:`${c.markdown} ${i??""}`.trim(),children:e,components:Rt,linkTarget:l,transformLinkUri:o,transformImageUri:s})}const N=(t,e)=>(e.palette.type==="light"?B.e$:B.a)(e.palette[t].light,.6),j=(t,e)=>(e.palette.type==="light"?B.a:B.e$)(e.palette[t].light,.9),J=(0,u.A)(t=>({root:{marginRight:t.spacing(1),fill:({severity:e})=>N(e,t)}})),$t=({severity:t})=>{const e=J({severity:t});return a.createElement(At.A,{classes:e})},Dt=({severity:t})=>{const e=J({severity:t});return a.createElement(xt.A,{classes:e})},Gt=(0,u.A)(t=>({panel:{backgroundColor:({severity:e})=>j(e,t),color:({severity:e})=>N(e,t),verticalAlign:"middle"},summary:{display:"flex",flexDirection:"row"},summaryText:{color:({severity:e})=>N(e,t),fontWeight:t.typography.fontWeightBold},markdownContent:{"& p":{display:"inline"}},message:{width:"100%",display:"block",color:({severity:e})=>N(e,t),backgroundColor:({severity:e})=>j(e,t)},details:{width:"100%",display:"block",color:t.palette.textContrast,backgroundColor:t.palette.background.default,border:`1px solid ${t.palette.border}`,padding:t.spacing(2),fontFamily:"sans-serif"}}),{name:"BackstageWarningPanel"}),bt=t=>t.charAt(0).toLocaleUpperCase("en-US")+t.slice(1);function Ft(t){const{severity:e="warning",title:r,titleFormat:l,message:o,children:s,defaultExpanded:i}=t,c=Gt({severity:e}),m=bt(e)+(r?`: ${r}`:"");return a.createElement(Et.A,{defaultExpanded:i??!1,className:c.panel,role:"alert"},a.createElement(Ct.A,{expandIcon:a.createElement(Dt,{severity:e}),className:c.summary},a.createElement($t,{severity:e}),a.createElement(C.A,{className:c.summaryText,variant:"subtitle1"},l==="markdown"?a.createElement(Wt,{content:m,className:c.markdownContent}):m)),(o||s)&&a.createElement(vt.A,null,a.createElement(b.A,{container:!0},o&&a.createElement(b.A,{item:!0,xs:12},a.createElement(C.A,{className:c.message,variant:"body1"},o)),s&&a.createElement(b.A,{item:!0,xs:12,className:c.details},s))))}const Ut=(0,u.A)(t=>({text:{fontFamily:"monospace",whiteSpace:"pre",overflowX:"auto",marginRight:t.spacing(2)},divider:{margin:t.spacing(2)}}),{name:"BackstageErrorPanel"}),Ht=({error:t,message:e,stack:r,children:l})=>{const o=Ut();return a.createElement(mt.A,{dense:!0},a.createElement(D.A,{alignItems:"flex-start"},a.createElement(G.A,{classes:{secondary:o.text},primary:"Error",secondary:t}),a.createElement(S,{text:t})),a.createElement(D.A,{alignItems:"flex-start"},a.createElement(G.A,{classes:{secondary:o.text},primary:"Message",secondary:e}),a.createElement(S,{text:e})),r&&a.createElement(D.A,{alignItems:"flex-start"},a.createElement(G.A,{classes:{secondary:o.text},primary:"Stack Trace",secondary:r}),a.createElement(S,{text:r})),l)};function Mt(t){const{title:e,error:r,defaultExpanded:l,titleFormat:o,children:s}=t;return a.createElement(Ft,{severity:"error",title:e??r.message,defaultExpanded:l,titleFormat:o},a.createElement(Ht,{error:r.name,message:r.message,stack:r.stack,children:s}))}const Ot=t=>{const{slackChannel:e}=t,{t:r}=(0,Y.i)(X.O);if(e){if(typeof e=="string")return a.createElement(C.A,null,r("errorBoundary.title",{slackChannel:e}));if(!e.href)return a.createElement(C.A,null,r("errorBoundary.title",{slackChannel:e.name}))}else return null;return a.createElement(dt,{to:e.href,variant:"contained"},e.name)},zt=class extends a.Component{constructor(e){super(e),this.state={error:void 0,errorInfo:void 0}}componentDidCatch(e,r){console.error(`ErrorBoundary, error: ${e}`,{error:e,errorInfo:r}),this.setState({error:e,errorInfo:r})}render(){const{slackChannel:e,children:r}=this.props,{error:l}=this.state;return l?a.createElement(Mt,{title:"Something Went Wrong",error:l},a.createElement(Ot,{slackChannel:e})):r}},Vt=(0,u.A)(t=>({noPadding:{padding:0,"&:last-child":{paddingBottom:0}},contentAlignBottom:{display:"flex",alignItems:"self-end"},header:{padding:t.spacing(2,2,2,2.5)},headerTitle:{fontWeight:t.typography.fontWeightBold},headerSubheader:{paddingTop:t.spacing(1)},headerAvatar:{},headerAction:{},headerContent:{},subheader:{display:"flex"}}),{name:"BackstageInfoCard"}),Kt=(0,nt.A)(t=>({root:{display:"inline-block",padding:t.spacing(8,8,0,0),float:"right"}}),{name:"BackstageInfoCardCardActionsTopRight"})(z.A),w={card:{flex:{display:"flex",flexDirection:"column"},fullHeight:{display:"flex",flexDirection:"column",height:"100%"},gridItem:{display:"flex",flexDirection:"column",height:"calc(100% - 10px)",marginBottom:"10px",breakInside:"avoid-page","@media print":{height:"auto"}}},cardContent:{fullHeight:{flex:1},gridItem:{flex:1}}};function Qt(t){const{title:e,subheader:r,divider:l=!0,deepLink:o,slackChannel:s,errorBoundaryProps:i,variant:c,alignContent:m="normal",children:g,headerStyle:p,headerProps:v,icon:f,action:F,actionsClassName:U,actions:T,cardClassName:L,actionsTopRight:k,className:P,noPadding:H,titleTypographyProps:I,subheaderTypographyProps:R}=t,d=Vt();let A={},x={};c&&c.split(/[\s]+/g).forEach(y=>{A={...A,...w.card[y]},x={...x,...w.cardContent[y]}});const M=()=>!r&&!f?null:a.createElement("div",{"data-testid":"info-card-subheader"},r&&a.createElement("div",{className:d.subheader},r),f),W=i||(s?{slackChannel:s}:{});return a.createElement(tt.A,{style:A,className:P},a.createElement(zt,{...W},e&&a.createElement(at.A,{classes:{root:K()(d.header),title:d.headerTitle,subheader:d.headerSubheader,avatar:d.headerAvatar,action:d.headerAction,content:d.headerContent},title:e,subheader:M(),action:F,style:{...p},titleTypographyProps:I,subheaderTypographyProps:R,...v}),k&&a.createElement(Kt,null,k),l&&a.createElement(V.A,null),a.createElement(et.A,{className:K()(L,{[d.noPadding]:H,[d.contentAlignBottom]:m==="bottom"}),style:x},g),T&&a.createElement(z.A,{className:U},T),o&&a.createElement(st,{...o})))}var q=n(72814),Xt=n(52262),Yt=n(16400),Zt=n(20987),jt=n(53318),Jt=n(45810),wt=n.n(Jt),qt=n(18690),_t=n(15496),te=n(42316),ee=n(54361),ae=n(60241);const ne=(0,u.A)({card:({height:t})=>({display:"flex",flexDirection:"column",maxHeight:t,minHeight:t}),graph:{flex:1,minHeight:0}},{name:"PluginCatalogGraphCatalogGraphCard"}),re=t=>{const{variant:e="gridItem",relationPairs:r=ee.b,maxDepth:l=1,unidirectional:o=!0,mergeRelations:s=!0,direction:i=ae.O.LEFT_RIGHT,kinds:c,relations:m,entityFilter:g,height:p,className:v,rootEntityNames:f,onNodeClick:F,title:U="Relations",zoom:T="enable-on-click"}=t,{entity:L}=(0,Yt.tN)(),k=(0,$.sM)(L),P=(0,q.S)(Zt.s),H=(0,q.S)(_t.c),I=(0,qt.Zp)(),R=ne({height:p}),d=(0,Xt.s)(),A=(0,a.useCallback)((W,oe)=>{const y=(0,$.KU)(W.id),_=P({kind:y.kind.toLocaleLowerCase("en-US"),namespace:y.namespace.toLocaleLowerCase("en-US"),name:y.name});d.captureEvent("click",W.entity.metadata.title??(0,jt.S)(y),{attributes:{to:_}}),I(_)},[P,I,d]),x=wt().stringify({rootEntityRefs:[(0,$.U2)(L)],maxDepth:l,unidirectional:o,mergeRelations:s,selectedKinds:c,selectedRelations:m,direction:i},{arrayFormat:"brackets",addQueryPrefix:!0}),M=`${H()}${x}`;return a.createElement(Qt,{title:U,cardClassName:R.card,variant:e,noPadding:!0,deepLink:{title:"View graph",link:M}},a.createElement(te.L,{...t,rootEntityNames:f||k,onNodeClick:F||A,className:v||R.graph,maxDepth:l,unidirectional:o,mergeRelations:s,direction:i,relationPairs:r,entityFilter:g,zoom:T}))}}}]);})();

//# sourceMappingURL=4517.25a28ce3.chunk.js.map