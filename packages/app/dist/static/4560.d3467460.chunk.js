(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4560],{44560:(s,d,e)=>{"use strict";e.r(d),e.d(d,{LatestWorkflowRunCard:()=>ie,LatestWorkflowsForBranchCard:()=>me,RecentWorkflowRunsCard:()=>Ee});var a=e(16400),o=e(88951),u=e(72501),l=e(58837),c=e(21718),t=e(14041),i=e(26875),x=e(91442),E=e(39053),p=e(28391),A=e(18139),R=e(24453),v=e(99703),b=e(7031),O=e(95479),S=e.n(O),W=e(58007),L=e(8109),T=e(61009),U=e(13677),F=e(54801),X=e(9719);const z=r=>(0,v.A)({root:{fontWeight:r.typography.fontWeightBold,whiteSpace:"nowrap",paddingRight:r.spacing(4),border:"0",verticalAlign:"top"}}),j={root:{border:"0",verticalAlign:"top"}},C=r=>(0,v.A)({root:{margin:r.spacing(0,0,-1,0)}}),Q=r=>(0,v.A)({root:{padding:r.spacing(0,0,1,0)},random:{}}),P=(0,b.A)(z,{name:"BackstageMetadataTableTitleCell"})(F.A),w=(0,b.A)(j,{name:"BackstageMetadataTableCell"})(F.A),Z=({dense:r,children:n})=>t.createElement(T.A,{size:r?"small":"medium"},t.createElement(U.A,null,n)),H=({title:r,children:n,...f})=>t.createElement(X.A,null,r&&t.createElement(P,null,r),t.createElement(w,{colSpan:r?1:2,...f},n)),N=(0,b.A)(C,{name:"BackstageMetadataTableList"})(({classes:r,children:n})=>t.createElement(W.A,{disablePadding:!0,className:r.root},n)),I=(0,b.A)(Q,{name:"BackstageMetadataTableListItem"})(({classes:r,children:n})=>t.createElement(L.A,{className:r.root},n)),D=(0,v.A)({root:{margin:"0 0",listStyleType:"none"}}),q=r=>(0,v.A)({root:{...D.root,paddingLeft:r.spacing(1)}}),$=(0,b.A)(D,{name:"BackstageStructuredMetadataTableList"})(({classes:r,children:n})=>t.createElement(N,{classes:r},n)),V=(0,b.A)(q,{name:"BackstageStructuredMetadataTableNestedList"})(({classes:r,children:n})=>t.createElement(N,{classes:r},n));function _(r,n,f){const m=r.map((g,h)=>t.createElement(I,{key:h},B(g,n,f)));return f?t.createElement(V,null,m):t.createElement($,null,m)}function ee(r,n,f){const m=Object.keys(r).map(g=>{const h=B(r[g],n,!0);return t.createElement(I,{key:g},t.createElement(u.A,{variant:"body2",component:"span"},`${n.titleFormat(g)}: `),h)});return f?t.createElement(V,null,m):t.createElement($,null,m)}function B(r,n,f){return t.isValidElement(r)?t.createElement(t.Fragment,null,r):r!==null&&typeof r=="object"&&!Array.isArray(r)?ee(r,n,f):Array.isArray(r)?_(r,n,f):typeof r=="boolean"?t.createElement(t.Fragment,null,r?"\u2705":"\u274C"):t.createElement(u.A,{variant:"body2",component:"span"},r)}const te=({value:r,options:n})=>t.createElement(t.Fragment,null,B(r,n,!1)),ue=({title:r,value:n,options:f})=>t.createElement(H,{title:f.titleFormat(r)},t.createElement(te,{value:n,options:f}));function le(r,n){return Object.keys(r).map(f=>t.createElement(ue,{key:f,title:f,value:r[f],options:n}))}function ce(r){const{metadata:n,dense:f=!0,options:m={}}=r,g=le(n,{titleFormat:S(),...m});return t.createElement(Z,{dense:f},g)}var re=e(62973),ae=e(45527),se=e(54392),oe=e(77125);const de=(0,l.A)({externalLinkIcon:{fontSize:"inherit",verticalAlign:"bottom"}}),fe=r=>{const{error:n,loading:f,lastRun:m,branch:g}=r,h=de();return n?t.createElement(u.A,null,"Couldn't fetch latest ",g," run"):f?t.createElement(o.A,null):t.createElement(ce,{metadata:{status:t.createElement(oe.A,{display:"flex"},t.createElement(p.Bx,{status:m.status,conclusion:m.conclusion})),message:m.message,url:t.createElement(re.N_,{to:m.githubUrl??""},"See more on GitHub"," ",t.createElement(c.A,{className:h.externalLinkIcon}))}})},ie=r=>{const{branch:n="master",variant:f}=r,{entity:m}=(0,a.tN)(),g=(0,A.gf)(R.m),h=(0,se.P)(m),[G,J]=(m?.metadata.annotations?.[i.M]??"/").split("/"),[{runs:Y,loading:k,error:y}]=(0,x.b)({hostname:h,owner:G,repo:J,branch:n}),ne=Y?.[0]??{};return(0,t.useEffect)(()=>{y&&g.post(y)},[y,g]),t.createElement(ae.n,{title:`Last ${n} build`,variant:f},t.createElement(fe,{error:y,loading:k,branch:n,lastRun:ne}))},me=r=>{const{branch:n="master",variant:f}=r,{entity:m}=(0,a.tN)();return t.createElement(ae.n,{title:`Last ${n} build`,variant:f},t.createElement(E.G,{branch:n,entity:m}))};var xe=e(73657),ge=e(72814),pe=e(94484),Ae=e(89842),be=e(60319);const ve=r=>r.split(`
`)[0],Ee=r=>{const{branch:n,dense:f=!1,limit:m=5,variant:g}=r,{entity:h}=(0,a.tN)(),G=(0,A.gf)(R.m),J=(0,se.P)(h),[Y,k]=(h?.metadata.annotations?.[i.M]??"/").split("/"),[{runs:y=[],loading:ne,error:M}]=(0,x.b)({hostname:J,owner:Y,repo:k,branch:n,initialPageSize:m});(0,t.useEffect)(()=>{M&&G.post(M)},[M,G]);const he=J||"github.com",Ce=(0,ge.S)(be.r);return M?t.createElement(pe.b,{title:M.message,error:M}):t.createElement(ae.n,{title:"Recent Workflow Runs",subheader:n?`Branch: ${n}`:"All Branches",noPadding:!0,variant:g},y.length?t.createElement(Ae.X,{isLoading:ne,options:{search:!1,paging:!1,padding:f?"dense":"default",toolbar:!1},columns:[{title:"Commit Message",field:"message",render:K=>t.createElement(re.N_,{component:xe.N_,to:Ce({id:K.id})},ve(K.message??""))},{title:"Branch",field:"source.branchName"},{title:"Status",field:"status",render:K=>t.createElement(oe.A,{display:"flex"},t.createElement(p.Bx,{...K}))}],data:y}):t.createElement("div",{style:{textAlign:"center"}},t.createElement(u.A,{variant:"body1"},"This component has GitHub Actions enabled, but no workflows were found."),t.createElement(u.A,{variant:"body2"},t.createElement(re.N_,{to:`https://${he}/${Y}/${k}/actions/new`},"Create a new workflow"))))}},52837:s=>{function d(e){return e.split("")}s.exports=d},39546:s=>{var d=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function e(a){return a.match(d)||[]}s.exports=e},51035:s=>{function d(e){return function(a){return e?.[a]}}s.exports=d},73501:s=>{function d(e,a,o){var u=-1,l=e.length;a<0&&(a=-a>l?0:l+a),o=o>l?l:o,o<0&&(o+=l),l=a>o?0:o-a>>>0,a>>>=0;for(var c=Array(l);++u<l;)c[u]=e[u+a];return c}s.exports=d},28931:(s,d,e)=>{var a=e(73501);function o(u,l,c){var t=u.length;return c=c===void 0?t:c,!l&&c>=t?u:a(u,l,c)}s.exports=o},4326:(s,d,e)=>{var a=e(28931),o=e(83417),u=e(82237),l=e(95243);function c(t){return function(i){i=l(i);var x=o(i)?u(i):void 0,E=x?x[0]:i.charAt(0),p=x?a(x,1).join(""):i.slice(1);return E[t]()+p}}s.exports=c},93640:(s,d,e)=>{var a=e(44187),o=e(45881),u=e(17469),l="['\u2019]",c=RegExp(l,"g");function t(i){return function(x){return a(u(o(x).replace(c,"")),i,"")}}s.exports=t},69968:(s,d,e)=>{var a=e(51035),o={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},u=a(o);s.exports=u},15813:s=>{var d=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function e(a){return d.test(a)}s.exports=e},82237:(s,d,e)=>{var a=e(52837),o=e(83417),u=e(92013);function l(c){return o(c)?u(c):a(c)}s.exports=l},92013:s=>{var d="\\ud800-\\udfff",e="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",u=e+a+o,l="\\ufe0e\\ufe0f",c="["+d+"]",t="["+u+"]",i="\\ud83c[\\udffb-\\udfff]",x="(?:"+t+"|"+i+")",E="[^"+d+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",A="[\\ud800-\\udbff][\\udc00-\\udfff]",R="\\u200d",v=x+"?",b="["+l+"]?",O="(?:"+R+"(?:"+[E,p,A].join("|")+")"+b+v+")*",S=b+v+O,W="(?:"+[E+t+"?",t,p,A,c].join("|")+")",L=RegExp(i+"(?="+i+")|"+W+S,"g");function T(U){return U.match(L)||[]}s.exports=T},10482:s=>{var d="\\ud800-\\udfff",e="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",u=e+a+o,l="\\u2700-\\u27bf",c="a-z\\xdf-\\xf6\\xf8-\\xff",t="\\xac\\xb1\\xd7\\xf7",i="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",x="\\u2000-\\u206f",E=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",p="A-Z\\xc0-\\xd6\\xd8-\\xde",A="\\ufe0e\\ufe0f",R=t+i+x+E,v="['\u2019]",b="["+R+"]",O="["+u+"]",S="\\d+",W="["+l+"]",L="["+c+"]",T="[^"+d+R+S+l+c+p+"]",U="\\ud83c[\\udffb-\\udfff]",F="(?:"+O+"|"+U+")",X="[^"+d+"]",z="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",C="["+p+"]",Q="\\u200d",P="(?:"+L+"|"+T+")",w="(?:"+C+"|"+T+")",Z="(?:"+v+"(?:d|ll|m|re|s|t|ve))?",H="(?:"+v+"(?:D|LL|M|RE|S|T|VE))?",N=F+"?",I="["+A+"]?",D="(?:"+Q+"(?:"+[X,z,j].join("|")+")"+I+N+")*",q="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",V=I+N+D,_="(?:"+[W,z,j].join("|")+")"+V,ee=RegExp([C+"?"+L+"+"+Z+"(?="+[b,C,"$"].join("|")+")",w+"+"+H+"(?="+[b,C+P,"$"].join("|")+")",C+"?"+P+"+"+Z,C+"+"+H,$,q,S,_].join("|"),"g");function B(te){return te.match(ee)||[]}s.exports=B},45881:(s,d,e)=>{var a=e(69968),o=e(95243),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\u0300-\\u036f",c="\\ufe20-\\ufe2f",t="\\u20d0-\\u20ff",i=l+c+t,x="["+i+"]",E=RegExp(x,"g");function p(A){return A=o(A),A&&A.replace(u,a).replace(E,"")}s.exports=p},95479:(s,d,e)=>{var a=e(93640),o=e(5485),u=a(function(l,c,t){return l+(t?" ":"")+o(c)});s.exports=u},5485:(s,d,e)=>{var a=e(4326),o=a("toUpperCase");s.exports=o},17469:(s,d,e)=>{var a=e(39546),o=e(15813),u=e(95243),l=e(10482);function c(t,i,x){return t=u(t),i=x?void 0:i,i===void 0?o(t)?l(t):a(t):t.match(i)||[]}s.exports=c}}]);})();

//# sourceMappingURL=4560.d3467460.chunk.js.map