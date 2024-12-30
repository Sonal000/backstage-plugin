"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2754],{99908:(N,M,t)=>{t.d(M,{N_:()=>i});var u=t(18139),r=t(54195),x=t(52262),_=t(49203),L=t(58837),m=t(72501),T=t(99870),W=t.n(T),B=t(45250),a=t.n(B),E=t(14041),P=t(18690),R=t(73657);function O(){const[l]=(0,P.AV)(E.createElement(P.qh,{index:!0,element:E.createElement("div",null)}));return!l.index}const I=(0,L.A)({visuallyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",overflow:"hidden",position:"absolute",userSelect:"none",whiteSpace:"nowrap",height:1,width:1},externalLink:{position:"relative"}},{name:"Link"}),v=l=>/^([a-z+.-]+):/.test(l),h=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,D=window.open;if(D&&!D.__backstage){const l=function(...s){const e=String(s[0]);if(h.test(e))throw new Error("Rejected window.open() with a javascript: URL as a security precaution");return D.apply(this,s)};l.__backstage=!0,window.open=l}const C=()=>{try{return(0,u.gf)(r.U).getOptionalString("app.baseUrl")}catch{return}},S=()=>{const l="http://sample.dev",d=C()??"/",{pathname:s}=new URL(d,l);return(0,B.trimEnd)(s,"/")},c=l=>{let d=String(l);const s=S(),e=v(d),n=d.startsWith(s);return!e&&!n&&(d=s.concat(d)),d},o=l=>l instanceof Array?l.map(o).join(" ").trim():typeof l=="object"&&l?o(l?.props?.children):["string","number"].includes(typeof l)?String(l):"",i=E.forwardRef(({onClick:l,noTrack:d,...s},e)=>{const n=I(),p=(0,x.s)(),g=O()?c(s.to):s.to,y=o(s.children)||g,A=v(g),K=A&&!!/^https?:/.exec(g);if(h.test(g))throw new Error("Link component rejected javascript: URL as a security precaution");const f=k=>{l?.(k),d||p.captureEvent("click",y,{attributes:{to:g}})};return A?E.createElement(_.A,{...K?{target:"_blank",rel:"noopener"}:{},...s,...s["aria-label"]?{"aria-label":`${s["aria-label"]}, Opens in a new window`}:{},ref:e,href:g,onClick:f,className:W()(n.externalLink,s.className)},s.children,E.createElement(m.A,{component:"span",className:n.visuallyHidden},", Opens in a new window")):E.createElement(_.A,{...s,ref:e,component:R.N_,to:g,onClick:f})})},70405:(N,M,t)=>{t.d(M,{B:()=>s});var u=t(268),r=t(58837),x=t(8973),_=t(29655),L=t(91567),m=t(42899),T=t(72501),W=t(9181),B=t(6924),a=t(14041),E=t(36108),P=t(28138),R=t(66210);const O=(0,r.A)(e=>({markdown:{"& table":{borderCollapse:"collapse",border:`1px solid ${e.palette.border}`},"& th, & td":{border:`1px solid ${e.palette.border}`,padding:e.spacing(1)},"& td":{wordBreak:"break-word",overflow:"hidden",verticalAlign:"middle",lineHeight:"1",margin:0,padding:e.spacing(3,2,3,2.5),borderBottom:0},"& th":{backgroundColor:e.palette.background.paper},"& tr":{backgroundColor:e.palette.background.paper},"& tr:nth-child(odd)":{backgroundColor:e.palette.background.default},"& a":{color:e.palette.link},"& img":{maxWidth:"100%"}}}),{name:"BackstageMarkdownContent"}),I=(e,n)=>n?typeof n=="string"?e+n:a.Children.toArray(n.props.children).reduce(I,e):e,v=({level:e,children:n})=>{const y=a.Children.toArray(n).reduce(I,"").toLocaleLowerCase("en-US").replace(/\W/g,"-");return a.createElement(`h${e}`,{id:y},n)},h={code:({inline:e,className:n,children:p,...g})=>{const y=String(p).replace(/\n+$/,""),A=/language-(\w+)/.exec(n||"");return!e&&A?a.createElement(R.z,{language:A[1],text:y}):a.createElement("code",{className:n,...g},p)},h1:v,h2:v,h3:v,h4:v,h5:v,h6:v};function D(e){const{content:n,dialect:p="gfm",linkTarget:g,transformLinkUri:y,transformImageUri:A,className:K}=e,f=O();return a.createElement(E.$,{remarkPlugins:p==="gfm"?[P.A]:[],className:`${f.markdown} ${K??""}`.trim(),children:n,components:h,linkTarget:g,transformLinkUri:y,transformImageUri:A})}const C=(e,n)=>(n.palette.type==="light"?u.e$:u.a)(n.palette[e].light,.6),S=(e,n)=>(n.palette.type==="light"?u.a:u.e$)(n.palette[e].light,.9),c=(0,r.A)(e=>({root:{marginRight:e.spacing(1),fill:({severity:n})=>C(n,e)}})),o=({severity:e})=>{const n=c({severity:e});return a.createElement(W.A,{classes:n})},i=({severity:e})=>{const n=c({severity:e});return a.createElement(B.A,{classes:n})},l=(0,r.A)(e=>({panel:{backgroundColor:({severity:n})=>S(n,e),color:({severity:n})=>C(n,e),verticalAlign:"middle"},summary:{display:"flex",flexDirection:"row"},summaryText:{color:({severity:n})=>C(n,e),fontWeight:e.typography.fontWeightBold},markdownContent:{"& p":{display:"inline"}},message:{width:"100%",display:"block",color:({severity:n})=>C(n,e),backgroundColor:({severity:n})=>S(n,e)},details:{width:"100%",display:"block",color:e.palette.textContrast,backgroundColor:e.palette.background.default,border:`1px solid ${e.palette.border}`,padding:e.spacing(2),fontFamily:"sans-serif"}}),{name:"BackstageWarningPanel"}),d=e=>e.charAt(0).toLocaleUpperCase("en-US")+e.slice(1);function s(e){const{severity:n="warning",title:p,titleFormat:g,message:y,children:A,defaultExpanded:K}=e,f=l({severity:n}),k=d(n)+(p?`: ${p}`:"");return a.createElement(x.A,{defaultExpanded:K??!1,className:f.panel,role:"alert"},a.createElement(_.A,{expandIcon:a.createElement(i,{severity:n}),className:f.summary},a.createElement(o,{severity:n}),a.createElement(T.A,{className:f.summaryText,variant:"subtitle1"},g==="markdown"?a.createElement(D,{content:k,className:f.markdownContent}):k)),(y||A)&&a.createElement(L.A,null,a.createElement(m.A,{container:!0},y&&a.createElement(m.A,{item:!0,xs:12},a.createElement(T.A,{className:f.message,variant:"body1"},y)),A&&a.createElement(m.A,{item:!0,xs:12,className:f.details},A))))}},48804:(N,M,t)=>{t.d(M,{O:()=>B});var u=t(77125),r=t(37197),x=t(58837),_=t(72501),L=t(52235),m=t(14041),T=t(99908);const W=(0,x.A)(a=>({root:{maxWidth:"fit-content",padding:a.spacing(2,2,2,2.5)},boxTitle:{margin:0,color:a.palette.textSubtle},arrow:{color:a.palette.textSubtle}}),{name:"BackstageBottomLink"});function B(a){const{link:E,title:P,onClick:R}=a,O=W();return m.createElement(u.A,null,m.createElement(r.A,null),m.createElement(T.N_,{to:E,onClick:R,underline:"none"},m.createElement(u.A,{display:"flex",alignItems:"center",className:O.root},m.createElement(u.A,{className:O.boxTitle,fontWeight:"fontWeightBold",m:1},m.createElement(_.A,null,m.createElement("strong",null,P))),m.createElement(L.A,{className:O.arrow}))))}},47317:(N,M,t)=>{t.d(M,{t:()=>S});var u=t(72501),r=t(14041),x=t(64947),_=t(99908);const L=r.forwardRef((c,o)=>r.createElement(_.N_,{ref:o,...c,color:"initial"})),m=r.forwardRef((c,o)=>r.createElement(x.A,{ref:o,component:L,...c})),T=null;var W=t(58837),B=t(58007),a=t(8109),E=t(5951),P=t(21108),R=t(70405);const O=(0,W.A)(c=>({text:{fontFamily:"monospace",whiteSpace:"pre",overflowX:"auto",marginRight:c.spacing(2)},divider:{margin:c.spacing(2)}}),{name:"BackstageErrorPanel"}),I=({error:c,message:o,stack:i,children:l})=>{const d=O();return r.createElement(B.A,{dense:!0},r.createElement(a.A,{alignItems:"flex-start"},r.createElement(E.A,{classes:{secondary:d.text},primary:"Error",secondary:c}),r.createElement(P.l,{text:c})),r.createElement(a.A,{alignItems:"flex-start"},r.createElement(E.A,{classes:{secondary:d.text},primary:"Message",secondary:o}),r.createElement(P.l,{text:o})),i&&r.createElement(a.A,{alignItems:"flex-start"},r.createElement(E.A,{classes:{secondary:d.text},primary:"Stack Trace",secondary:i}),r.createElement(P.l,{text:i})),l)};function v(c){const{title:o,error:i,defaultExpanded:l,titleFormat:d,children:s}=c;return r.createElement(R.B,{severity:"error",title:o??i.message,defaultExpanded:l,titleFormat:d},r.createElement(I,{error:i.name,message:i.message,stack:i.stack,children:s}))}var h=t(95581),D=t(10265);const C=c=>{const{slackChannel:o}=c,{t:i}=(0,D.i)(h.O);if(o){if(typeof o=="string")return r.createElement(u.A,null,i("errorBoundary.title",{slackChannel:o}));if(!o.href)return r.createElement(u.A,null,i("errorBoundary.title",{slackChannel:o.name}))}else return null;return r.createElement(m,{to:o.href,variant:"contained"},o.name)},S=class extends r.Component{constructor(o){super(o),this.state={error:void 0,errorInfo:void 0}}componentDidCatch(o,i){console.error(`ErrorBoundary, error: ${o}`,{error:o,errorInfo:i}),this.setState({error:o,errorInfo:i})}render(){const{slackChannel:o,children:i}=this.props,{error:l}=this.state;return l?r.createElement(v,{title:"Something Went Wrong",error:l},r.createElement(C,{slackChannel:o})):i}}},32754:(N,M,t)=>{t.d(M,{n:()=>v});var u=t(40703),r=t(59469),x=t(48653),_=t(45685),L=t(37197),m=t(58837),T=t(7031),W=t(99870),B=t.n(W),a=t(14041),E=t(48804),P=t(47317);const R=(0,m.A)(h=>({noPadding:{padding:0,"&:last-child":{paddingBottom:0}},contentAlignBottom:{display:"flex",alignItems:"self-end"},header:{padding:h.spacing(2,2,2,2.5)},headerTitle:{fontWeight:h.typography.fontWeightBold},headerSubheader:{paddingTop:h.spacing(1)},headerAvatar:{},headerAction:{},headerContent:{},subheader:{display:"flex"}}),{name:"BackstageInfoCard"}),O=(0,T.A)(h=>({root:{display:"inline-block",padding:h.spacing(8,8,0,0),float:"right"}}),{name:"BackstageInfoCardCardActionsTopRight"})(r.A),I={card:{flex:{display:"flex",flexDirection:"column"},fullHeight:{display:"flex",flexDirection:"column",height:"100%"},gridItem:{display:"flex",flexDirection:"column",height:"calc(100% - 10px)",marginBottom:"10px",breakInside:"avoid-page","@media print":{height:"auto"}}},cardContent:{fullHeight:{flex:1},gridItem:{flex:1}}};function v(h){const{title:D,subheader:C,divider:S=!0,deepLink:c,slackChannel:o,errorBoundaryProps:i,variant:l,alignContent:d="normal",children:s,headerStyle:e,headerProps:n,icon:p,action:g,actionsClassName:y,actions:A,cardClassName:K,actionsTopRight:f,className:k,noPadding:F,titleTypographyProps:H,subheaderTypographyProps:z}=h,U=R();let $={},j={};l&&l.split(/[\s]+/g).forEach(b=>{$={...$,...I.card[b]},j={...j,...I.cardContent[b]}});const w=()=>!C&&!p?null:a.createElement("div",{"data-testid":"info-card-subheader"},C&&a.createElement("div",{className:U.subheader},C),p),V=i||(o?{slackChannel:o}:{});return a.createElement(u.A,{style:$,className:k},a.createElement(P.t,{...V},D&&a.createElement(_.A,{classes:{root:B()(U.header),title:U.headerTitle,subheader:U.headerSubheader,avatar:U.headerAvatar,action:U.headerAction,content:U.headerContent},title:D,subheader:w(),action:g,style:{...e},titleTypographyProps:H,subheaderTypographyProps:z,...n}),f&&a.createElement(O,null,f),S&&a.createElement(L.A,null),a.createElement(x.A,{className:B()(K,{[U.noPadding]:F,[U.contentAlignBottom]:d==="bottom"}),style:j},s),A&&a.createElement(r.A,{className:y},A),c&&a.createElement(E.O,{...c})))}}}]);})();

//# sourceMappingURL=2754.57a1d846.chunk.js.map