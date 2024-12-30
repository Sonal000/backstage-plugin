"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9841],{29021:(w,p,n)=>{n.d(p,{X:()=>k});var s=n(25301),g=n(77125),h=n(29365),A=n(7031),j=n(58837),N=n(54917),v=n(72501),C=n(83313),b=n(89019),F=n(62461),L=n(68887),T=n(63798),Q=n(64704),M=n(6774),D=n(75625),B=n(65859),E=n(5416),q=n(33494),G=n(80113),_=n(26229),ee=n(46802),H=n(45250),e=n(14041),te=n(64947),ne=n(81252),ae=n(89475),J=n(10265);const re=(0,j.A)(t=>({root:{height:"100%",width:"315px",display:"flex",flexDirection:"column",marginRight:t.spacing(3)},value:{fontWeight:"bold",fontSize:18},header:{display:"flex",alignItems:"center",height:t.spacing(7.5),justifyContent:"space-between",borderBottom:`1px solid ${t.palette.grey[500]}`},filters:{display:"flex",flexDirection:"column","& > *":{marginTop:t.spacing(2)}}}),{name:"BackstageTableFilters"}),X=t=>{const a=re(),{onChangeFilters:d}=t,{t:m}=(0,J.i)(ae.O),[u,r]=(0,e.useState)({...t.selectedFilters}),[o,l]=(0,e.useState)(!1),i=()=>{r({}),l(c=>!c)};return(0,e.useEffect)(()=>{d(u)},[u,d]),e.createElement(g.A,{className:a.root},e.createElement(g.A,{className:a.header},e.createElement(g.A,{className:a.value},m("table.filter.title")),e.createElement(te.A,{color:"primary",onClick:i},m("table.filter.clearAll"))),e.createElement(g.A,{className:a.filters},t.filters?.length&&t.filters.map(c=>e.createElement(ne.w,{triggerReset:o,key:c.element.label,...c.element,selected:u[c.element.label],onChange:f=>r({...u,[c.element.label]:f})}))))};var Y=n(78467);function Z(t){return e.createElement("tbody",{"data-testid":"loading-indicator"},e.createElement("tr",null,e.createElement("td",{colSpan:t.colSpan},e.createElement(g.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minHeight:"15rem"}},e.createElement(Y.A,{size:"5rem"})))))}const K={Add:(0,e.forwardRef)((t,a)=>e.createElement(C.A,{...t,ref:a})),Check:(0,e.forwardRef)((t,a)=>e.createElement(F.A,{...t,ref:a})),Clear:(0,e.forwardRef)((t,a)=>e.createElement(Q.A,{...t,ref:a})),Delete:(0,e.forwardRef)((t,a)=>e.createElement(M.A,{...t,ref:a})),DetailPanel:(0,e.forwardRef)((t,a)=>e.createElement(T.A,{...t,ref:a})),Edit:(0,e.forwardRef)((t,a)=>e.createElement(D.A,{...t,ref:a})),Export:(0,e.forwardRef)((t,a)=>e.createElement(_.A,{...t,ref:a})),Filter:(0,e.forwardRef)((t,a)=>e.createElement(B.A,{...t,ref:a})),FirstPage:(0,e.forwardRef)((t,a)=>e.createElement(E.A,{...t,ref:a})),LastPage:(0,e.forwardRef)((t,a)=>e.createElement(q.A,{...t,ref:a})),NextPage:(0,e.forwardRef)((t,a)=>e.createElement(T.A,{...t,ref:a})),PreviousPage:(0,e.forwardRef)((t,a)=>e.createElement(L.A,{...t,ref:a})),ResetSearch:(0,e.forwardRef)((t,a)=>e.createElement(Q.A,{...t,ref:a})),Search:(0,e.forwardRef)((t,a)=>e.createElement(B.A,{...t,ref:a})),SortArrow:(0,e.forwardRef)((t,a)=>e.createElement(b.A,{...t,ref:a})),ThirdStateCheck:(0,e.forwardRef)((t,a)=>e.createElement(G.A,{...t,ref:a})),ViewColumn:(0,e.forwardRef)((t,a)=>e.createElement(ee.A,{...t,ref:a}))};function P(t,a){const d=a.split(".");let m=t[d[0]];for(let u=1;u<d.length;++u){if(m===void 0)return m;const r=d[u];m=m[r]}return m}const se=(0,A.A)(t=>({header:{padding:t.spacing(1,2,1,2.5),borderTop:`1px solid ${t.palette.grey.A100}`,borderBottom:`1px solid ${t.palette.grey.A100}`,fontWeight:t.typography.fontWeightBold,position:"static",wordBreak:"normal",textTransform:"uppercase"}}),{name:"BackstageTableHeader"})(s.rV),U=(0,A.A)(t=>({root:{padding:t.spacing(3,0,2.5,2.5)},title:{"& > h6":{fontWeight:t.typography.fontWeightBold}},searchField:{paddingRight:t.spacing(2)}}),{name:"BackstageTableToolbar"})(s.Nb),I=(0,j.A)(t=>({root:{display:"flex",alignItems:"center",justifyContent:"space-between"},title:{fontWeight:t.typography.fontWeightBold,fontSize:18,whiteSpace:"nowrap"}}),{name:"BackstageTableFiltersContainer"}),oe=(0,j.A)(()=>({root:{display:"flex",alignItems:"start"}}),{name:"BackstageTable"});function le(t,a){return t.map(d=>{const m=d.headerStyle??{};let u=d.cellStyle||{};if(d.highlight)if(m.color=a.palette.textContrast,typeof u=="object")u.fontWeight=a.typography.fontWeightBold;else{const r=u;u=(o,l,i)=>({...r(o,l,i),fontWeight:a.typography.fontWeightBold})}return{...d,headerStyle:m,cellStyle:u}})}function ie(t,a){return(0,H.transform)(t,(d,m,u)=>{(0,H.isEqual)(m,a[u])||(d[u]=m)})}const V={search:"",filtersOpen:!1,filters:{}};function ce(t){const{toolbarRef:a,setSearch:d,hasFilters:m,selectedFiltersLength:u,toggleFilters:r}=t,o=I(),l=(0,e.useCallback)(i=>{t.onSearchChanged(i),d(i)},[t,d]);return m?e.createElement(g.A,{className:o.root},e.createElement(g.A,{className:o.root},e.createElement(h.A,{onClick:r,"aria-label":"filter list"},e.createElement(B.A,null)),e.createElement(v.A,{className:o.title},"Filters (",u,")")),e.createElement(U,{...t,ref:a,onSearchChanged:l})):e.createElement(U,{...t,ref:a,onSearchChanged:l})}function k(t){const{data:a,columns:d,emptyContent:m,options:u,title:r,subtitle:o,localization:l,filters:i,initialState:c,onStateChange:f,components:S,isLoading:y,style:x,...O}=t,be=oe(),Fe=(0,N.A)(),fe={...V,...c},[me,ye]=(0,e.useState)(fe.filtersOpen),he=(0,e.useCallback)(()=>ye(R=>!R),[ye]),[z,Ne]=(0,e.useState)(fe.filters),[ve,pe]=(0,e.useState)(fe.search);(0,e.useEffect)(()=>{if(f){const R=ie({search:ve,filtersOpen:me,filters:z},V);f(R)}},[ve,me,z,f]);const Ae=(0,e.useCallback)(R=>d.find(Ce=>Ce.title===R)?.field,[d]),Te=(0,e.useMemo)(()=>{if(typeof a=="function"||!z)return a;const R=Object.values(z);return a&&R.flat().length?a.filter(Be=>!!Object.entries(z).filter(([,ge])=>!!ge.length).every(([ge,$])=>{const W=P(Be,Ae(ge));return Array.isArray(W)&&Array.isArray($)?W.some(Ie=>$.includes(Ie)):Array.isArray(W)?W.includes($):Array.isArray($)?$.includes(W):W===$})):a},[a,z,Ae]),Ee=Object.values(z).flat().length,Se=!!i?.length,Re=(0,e.useCallback)(R=>e.createElement(ce,{setSearch:pe,hasFilters:Se,selectedFiltersLength:Ee,toggleFilters:he,...R}),[he,Se,Ee,pe]),xe=typeof a!="function"&&a.length===0,je=d.length,De=(0,e.useMemo)(()=>de({hasNoRows:xe,emptyContent:m,columnCount:je,loading:y}),[xe,m,je,y]);return e.createElement(g.A,{className:be.root},me&&a&&typeof a!="function"&&i?.length&&e.createElement(X,{filters:ue(i,a,d),selectedFilters:z,onChangeFilters:Ne}),e.createElement(s.Ay,{components:{Header:se,Body:De,Toolbar:Re,...S},options:u,columns:le(d,Fe),icons:K,title:e.createElement(e.Fragment,null,e.createElement(v.A,{variant:"h5",component:"h2"},r),o&&e.createElement(v.A,{color:"textSecondary",variant:"body1"},o)),data:Te,style:{width:"100%",...x},localization:{toolbar:{searchPlaceholder:"Filter",searchTooltip:"Filter"},...l},...O}))}k.icons=Object.freeze(K);function de({columnCount:t,emptyContent:a,hasNoRows:d,loading:m}){return u=>m?e.createElement(Z,{colSpan:t}):a&&d?e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",{colSpan:t},a))):e.createElement(s.C6,{...u})}function ue(t,a,d){const m=r=>{const o=new Set,l=i=>{i!=null&&o.add(i)};return a&&a.forEach(i=>{const c=P(i,d.find(f=>f.title===r)?.field);Array.isArray(c)?c.forEach(l):l(c)}),o},u=r=>({placeholder:"All results",label:r.column,multiple:r.type==="multiple-select",items:[...m(r.column)].sort().map(o=>({label:o,value:o}))});return t.map(r=>({type:r.type,element:u(r)}))}},91638:(w,p,n)=>{var s;s={value:!0};var g=n(85608),h=n(14041),A=g.__importDefault(n(5030));function j(N,v){v===void 0&&(v=[]);var C=A.default(N,v,{loading:!0}),b=C[0],F=C[1];return h.useEffect(function(){F()},[F]),b}p.A=j},5030:(w,p,n)=>{Object.defineProperty(p,"__esModule",{value:!0});var s=n(85608),g=n(14041),h=s.__importDefault(n(10009));function A(j,N,v){N===void 0&&(N=[]),v===void 0&&(v={loading:!1});var C=g.useRef(0),b=h.default(),F=g.useState(v),L=F[0],T=F[1],Q=g.useCallback(function(){for(var M=[],D=0;D<arguments.length;D++)M[D]=arguments[D];var B=++C.current;return L.loading||T(function(E){return s.__assign(s.__assign({},E),{loading:!0})}),j.apply(void 0,M).then(function(E){return b()&&B===C.current&&T({value:E,loading:!1}),E},function(E){return b()&&B===C.current&&T({error:E,loading:!1}),E})},N);return[L,Q]}p.default=A},10009:(w,p,n)=>{Object.defineProperty(p,"__esModule",{value:!0});var s=n(14041);function g(){var h=s.useRef(!1),A=s.useCallback(function(){return h.current},[]);return s.useEffect(function(){return h.current=!0,function(){h.current=!1}},[]),A}p.default=g},11134:(w,p,n)=>{n.r(p),n.d(p,{CatalogInfoQuery:()=>ue,DqlQuery:()=>V,KubernetesDeployments:()=>u});var s=n(31085),g=n(83570),h=n(18139),A=n(94223),j=n(91638);/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=(r,o,l)=>{const i=(0,h.gf)(g.J),c=(0,h.gf)(A.K),{value:f,loading:S,error:y}=(0,j.A)(async()=>{const{token:x}=await c.getCredentials();if(!x)throw new Error("Failed to get identity token");return await i.getData(r,o,l,x)},[i,r,o,l]);return{error:y,loading:S,value:f}},v=n.p+"static/dynatrace.d22209f9..svg";var C=n(28364),b=n(42899),F=n(14041);/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=({content:r})=>(0,s.jsxs)(b.A,{container:!0,spacing:2,children:[(0,s.jsx)(b.A,{item:!0,sm:12,md:6,children:(0,s.jsx)(C.h,{content:r})}),(0,s.jsx)(b.A,{item:!0,sm:12,md:6,children:(0,s.jsx)("img",{src:v,alt:"Dynatrace Logo",style:{width:"60%",display:"block",marginLeft:"auto",marginRight:"auto",opacity:.5}})})]});/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=({componentName:r,queryName:o,queryNamespace:l,additionalInformation:i=""})=>{const c=`# We turned up empty

  Query
  ${l==="catalog"?o?`with the title \`${o}\` defined in catalog-info.yaml`:"defined in catalog-info.yaml":`\`${l}.${o}\``} 
   did not return any data for component 
  \`${r}\`.

  If you recently added the component, it may take a few minutes for
  Dynatrace to start reporting data. If the component has been running
  for a while, it may not be reporting data. Please check that your
  component is indeed reporting data to Dynatrace and, in case you are
  using custom queries, that the query is correct. 
  
  ${i}`;return(0,s.jsx)(L,{content:c})};var Q=n(62112),M=n(99703),D=n(7031),B=n(61477),E=n(72501),q=n(29365),G=n(49203),_=n(76891),ee=n(46805),H=n(32881);/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e=r=>(0,M.A)({root:{margin:0,padding:r.spacing(2)},flex:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:r.spacing(2)},closeButton:{color:r.palette.grey[500]}}),te=(0,D.A)(e)(r=>{const{children:o,classes:l,onClose:i,...c}=r;return(0,s.jsx)(B.A,{disableTypography:!0,className:l.root,...c,children:(0,s.jsxs)("div",{className:l.flex,children:[(0,s.jsx)(E.A,{variant:"h6",children:o}),(0,s.jsx)(q.A,{"aria-label":"close",className:l.closeButton,onClick:()=>i(),children:(0,s.jsx)(H.A,{})})]})})}),ne=({data:r,property:o})=>{const[l,i]=(0,F.useState)(!1),c=()=>{i(!0)},f=()=>{i(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(G.A,{component:"button",variant:"body2",onClick:()=>c(),style:{minWidth:"120px"},children:"Complex record"}),(0,s.jsxs)(_.A,{open:l,onClose:()=>f(),"aria-labelledby":"object-dialog-title",children:[(0,s.jsxs)(te,{id:"object-dialog-title",onClose:f,children:['Complex record of "',o,'"']}),(0,s.jsx)(ee.A,{dividers:!0,children:(0,s.jsx)(Q.z,{text:r,language:"json"})})]})]})};var ae=n(29021),J=n(56310);/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=r=>o=>{const l=o[r];return l===void 0?"":typeof l=="string"?l:l.type===J.s.OBJECT?(0,s.jsx)(ne,{data:l.content,property:r}):l.type===J.s.LINK?(0,s.jsx)(G.A,{href:l.url,target:"_blank",rel:"noopener",children:l.text}):JSON.stringify(l)},X=({title:r,data:o,pageSize:l=10})=>{const i=(0,F.useMemo)(()=>{const c=o.reduce((f,S)=>{for(const y in S)f.add(y);return f},new Set);return Array.from(c).map(f=>({title:f,field:f,render:re(f)}))},[o]);return(0,s.jsx)(ae.X,{title:r,options:{search:!0,paging:!0,pageSize:l},columns:i,data:o})};var Y=n(78560),Z=n(96872),K=n(99424),P=n(16400);/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=({title:r,queryNamespace:o,queryName:l,EmptyState:i=T,pageSize:c})=>{const{entity:f}=(0,P.tN)(),S=f.metadata.name,{error:y,loading:x,value:O}=N(o,l,(0,Y.U2)(f));return x?(0,s.jsx)(Z.k,{}):y?(0,s.jsx)(K._,{error:y}):!O||O.length===0?(0,s.jsx)(i,{componentName:S,queryName:l,queryNamespace:o,additionalInformation:`${o}.${l}`=="dynatrace.srg-validations"?`# No Site Reliability Guardian resources
  No result received. If you don't use Site Reliability Guardians, do not hesitate to integrate them. 
  [View this for more information.](https://docs.dynatrace.com/docs/platform-modules/automations/site-reliability-guardian)
`:""}):(0,s.jsx)(X,{title:r,data:O,pageSize:c})};var U=n(12554),I=n(46195);/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=I.z.enum(["dynatrace","custom"]),le=I.z.string().regex(/^[a-z1-9\-]+$/),ie=I.z.object({title:I.z.string().default("Query Result"),queryId:I.z.string().toLowerCase().refine(r=>{const[o,l]=r.split(".");return oe.safeParse(o).success&&le.safeParse(l).success},{message:"String must be in the format 'namespace.query-name'. Namespace must be 'dynatrace' or 'custom'. Query name may only contain alphanumerics and dashes."})}),V=r=>{try{const{title:o,queryId:l}=ie.parse(r),[i,c]=l.split(".");return(0,s.jsx)(se,{title:o,queryNamespace:i,queryName:c,EmptyState:r.emptyState,pageSize:r.pageSize})}catch(o){if(o instanceof I.G){const l=`${o.issues[0].path.join(".")}: ${o.issues[0].message}`;return(0,s.jsx)(U.b,{error:o,title:l})}return(0,s.jsx)(U.b,{error:new Error(`Unknown error: ${o}`)})}};/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=(r,o)=>{const l=(0,h.gf)(g.J),i=(0,h.gf)(A.K),{value:c,loading:f,error:S}=(0,j.A)(async()=>{const{token:y}=await i.getCredentials();if(!y)throw new Error("Failed to get identity token");return await l.getDataFromQueries(r,o,y)},[l,r,o]);return{error:S,loading:f,value:c}};/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=({queryNamespace:r,EmptyState:o=T,pageSize:l})=>{const{entity:i}=(0,P.tN)(),c=i.metadata.name,{error:f,loading:S,value:y}=ce(r,(0,Y.U2)(i));return S?(0,s.jsx)(Z.k,{}):f?(0,s.jsx)(K._,{error:f}):!y||y.length===0?(0,s.jsx)(o,{componentName:c,queryName:"",queryNamespace:r,additionalInformation:"Please ensure that you have correctly defined queries in the catalog-info.yaml file."}):(0,s.jsx)(s.Fragment,{children:y.map((x,O)=>x.data?.length>0?(0,s.jsx)(X,{data:x.data,title:x.title,pageSize:l},O):(0,s.jsx)(o,{componentName:c,queryName:x.title,queryNamespace:r},O))})};var de=n(65995);/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=r=>{const{entity:o}=(0,P.tN)(),i=o.metadata.dynatrace?.queries??[];return(0,s.jsx)(s.Fragment,{children:i.length>0?(0,s.jsx)(k,{queryNamespace:"catalog",EmptyState:r.emptyState,pageSize:r.pageSize}):(0,s.jsx)(de.p,{title:"No queries defined in catalog-info.yaml for this entity.",missing:"info",description:"You need to add queries for this entity in the catalog-info.yaml file."})})};/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t=({componentName:r})=>{const o=`# No Kubernetes resources
  No resources on any monitored Kubernetes cluster for ${r} found.`;return(0,s.jsx)(L,{content:o})};var a=n(32293);/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d="backstage.io/kubernetes-id",m="backstage.io/kubernetes-label-selector",u=({title:r="Kubernetes Deployments",pageSize:o})=>{const{entity:l}=(0,P.tN)(),i=l.metadata.annotations?.[d],c=l.metadata.annotations?.[m];return!i&&!c?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.o,{annotation:d}),(0,s.jsx)("h1",{children:"Or use a label selector query, which takes precedence over the previous annotation"})]}):(0,s.jsx)(V,{title:r,queryId:"dynatrace.kubernetes-deployments",emptyState:t,pageSize:o})};/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}]);})();

//# sourceMappingURL=9841.4e8a7864.chunk.js.map