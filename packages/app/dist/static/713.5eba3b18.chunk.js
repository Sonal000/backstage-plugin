"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[713,6393],{66393:(g,i,n)=>{n.r(i),n.d(i,{C:()=>a,c:()=>t});var o=n(94403),e=Object.defineProperty,c=(r,l)=>e(r,"name",{value:l,configurable:!0});function s(r,l){for(var _=0;_<l.length;_++){const d=l[_];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in r)){const f=Object.getOwnPropertyDescriptor(d,p);f&&Object.defineProperty(r,p,f.get?f:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}c(s,"_mergeNamespaces");var u=(0,o.r)();const a=(0,o.g)(u),t=s({__proto__:null,default:a},[u])},11511:(g,i,n)=>{n.d(i,{i:()=>c});var o=Object.defineProperty,e=(s,u)=>o(s,"name",{value:u,configurable:!0});function c(s,u){var a,t;const{levels:r,indentLevel:l}=s;return((!r||r.length===0?l:r.at(-1)-(!((a=this.electricInput)===null||a===void 0)&&a.test(u)?1:0))||0)*(((t=this.config)===null||t===void 0?void 0:t.indentUnit)||0)}e(c,"indent")},713:(g,i,n)=>{n.r(i);var o=n(66393),e=n(66889),c=n(11511),s=n(94403);o.C.defineMode("graphql-results",t=>{const r=(0,e.r5)({eatWhitespace:l=>l.eatSpace(),lexRules:u,parseRules:a,editorConfig:{tabSize:t.tabSize}});return{config:t,startState:r.startState,token:r.token,indent:c.i,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});const u={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},a={Document:[(0,e.p)("{"),(0,e.p_)("Entry",(0,e.p)(",")),(0,e.p)("}")],Entry:[(0,e.t)("String","def"),(0,e.p)(":"),"Value"],Value(t){switch(t.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(t.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(t.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[(0,e.t)("Number","number")],StringValue:[(0,e.t)("String","string")],BooleanValue:[(0,e.t)("Keyword","builtin")],NullValue:[(0,e.t)("Keyword","keyword")],ListValue:[(0,e.p)("["),(0,e.p_)("Value",(0,e.p)(",")),(0,e.p)("]")],ObjectValue:[(0,e.p)("{"),(0,e.p_)("ObjectField",(0,e.p)(",")),(0,e.p)("}")],ObjectField:[(0,e.t)("String","property"),(0,e.p)(":"),"Value"]}}}]);})();

//# sourceMappingURL=713.5eba3b18.chunk.js.map