"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4936],{54936:(G,R,C)=>{C.r(R),C.d(R,{c:()=>$});var _=C(94403),Q=Object.defineProperty,l=(y,k)=>Q(y,"name",{value:k,configurable:!0});function w(y,k){for(var t=0;t<k.length;t++){const v=k[t];if(typeof v!="string"&&!Array.isArray(v)){for(const s in v)if(s!=="default"&&!(s in y)){const h=Object.getOwnPropertyDescriptor(v,s);h&&Object.defineProperty(y,s,h.get?h:{enumerable:!0,get:()=>v[s]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}l(w,"_mergeNamespaces");var U={exports:{}};(function(y,k){(function(t){t((0,_.r)())})(function(t){var v={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},s=t.Pos;t.defineOption("autoCloseBrackets",!1,function(e,n,r){r&&r!=t.Init&&(e.removeKeyMap(B),e.state.closeBrackets=null),n&&(T(h(n,"pairs")),e.state.closeBrackets=n,e.addKeyMap(B))});function h(e,n){return n=="pairs"&&typeof e=="string"?e:typeof e=="object"&&e[n]!=null?e[n]:v[n]}l(h,"getOption");var B={Backspace:K,Enter:L};function T(e){for(var n=0;n<e.length;n++){var r=e.charAt(n),a="'"+r+"'";B[a]||(B[a]=I(r))}}l(T,"ensureBound"),T(v.pairs+"`");function I(e){return function(n){return z(n,e)}}l(I,"handler");function A(e){var n=e.state.closeBrackets;if(!n||n.override)return n;var r=e.getModeAt(e.getCursor());return r.closeBrackets||n}l(A,"getConfig");function K(e){var n=A(e);if(!n||e.getOption("disableInput"))return t.Pass;for(var r=h(n,"pairs"),a=e.listSelections(),i=0;i<a.length;i++){if(!a[i].empty())return t.Pass;var f=E(e,a[i].head);if(!f||r.indexOf(f)%2!=0)return t.Pass}for(var i=a.length-1;i>=0;i--){var c=a[i].head;e.replaceRange("",s(c.line,c.ch-1),s(c.line,c.ch+1),"+delete")}}l(K,"handleBackspace");function L(e){var n=A(e),r=n&&h(n,"explode");if(!r||e.getOption("disableInput"))return t.Pass;for(var a=e.listSelections(),i=0;i<a.length;i++){if(!a[i].empty())return t.Pass;var f=E(e,a[i].head);if(!f||r.indexOf(f)%2!=0)return t.Pass}e.operation(function(){var c=e.lineSeparator()||`
`;e.replaceSelection(c+c,null),S(e,-1),a=e.listSelections();for(var u=0;u<a.length;u++){var b=a[u].head.line;e.indentLine(b,null,!0),e.indentLine(b+1,null,!0)}})}l(L,"handleEnter");function S(e,n){for(var r=[],a=e.listSelections(),i=0,f=0;f<a.length;f++){var c=a[f];c.head==e.getCursor()&&(i=f);var u=c.head.ch||n>0?{line:c.head.line,ch:c.head.ch+n}:{line:c.head.line-1};r.push({anchor:u,head:u})}e.setSelections(r,i)}l(S,"moveSel");function W(e){var n=t.cmpPos(e.anchor,e.head)>0;return{anchor:new s(e.anchor.line,e.anchor.ch+(n?-1:1)),head:new s(e.head.line,e.head.ch+(n?1:-1))}}l(W,"contractSelection");function z(e,n){var r=A(e);if(!r||e.getOption("disableInput"))return t.Pass;var a=h(r,"pairs"),i=a.indexOf(n);if(i==-1)return t.Pass;for(var f=h(r,"closeBefore"),c=h(r,"triples"),u=a.charAt(i+1)==n,b=e.listSelections(),M=i%2==0,O,j=0;j<b.length;j++){var F=b[j],o=F.head,d,m=e.getRange(o,s(o.line,o.ch+1));if(M&&!F.empty())d="surround";else if((u||!M)&&m==n)u&&N(e,o)?d="both":c.indexOf(n)>=0&&e.getRange(o,s(o.line,o.ch+3))==n+n+n?d="skipThree":d="skip";else if(u&&o.ch>1&&c.indexOf(n)>=0&&e.getRange(s(o.line,o.ch-2),o)==n+n){if(o.ch>2&&/\bstring/.test(e.getTokenTypeAt(s(o.line,o.ch-2))))return t.Pass;d="addFour"}else if(u){var J=o.ch==0?" ":e.getRange(s(o.line,o.ch-1),o);if(!t.isWordChar(m)&&J!=n&&!t.isWordChar(J))d="both";else return t.Pass}else if(M&&(m.length===0||/\s/.test(m)||f.indexOf(m)>-1))d="both";else return t.Pass;if(!O)O=d;else if(O!=d)return t.Pass}var P=i%2?a.charAt(i-1):n,x=i%2?n:a.charAt(i+1);e.operation(function(){if(O=="skip")S(e,1);else if(O=="skipThree")S(e,3);else if(O=="surround"){for(var p=e.getSelections(),g=0;g<p.length;g++)p[g]=P+p[g]+x;e.replaceSelections(p,"around"),p=e.listSelections().slice();for(var g=0;g<p.length;g++)p[g]=W(p[g]);e.setSelections(p)}else O=="both"?(e.replaceSelection(P+x,null),e.triggerElectric(P+x),S(e,-1)):O=="addFour"&&(e.replaceSelection(P+P+P+P,"before"),S(e,1))})}l(z,"handleChar");function E(e,n){var r=e.getRange(s(n.line,n.ch-1),s(n.line,n.ch+1));return r.length==2?r:null}l(E,"charsAround");function N(e,n){var r=e.getTokenAt(s(n.line,n.ch+1));return/\bstring/.test(r.type)&&r.start==n.ch&&(n.ch==0||!/\bstring/.test(e.getTokenTypeAt(n)))}l(N,"stringStartsAfter")})})();var D=U.exports;const X=(0,_.g)(D),$=w({__proto__:null,default:X},[D])}}]);})();

//# sourceMappingURL=4936.85d7828f.chunk.js.map