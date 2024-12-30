"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[485],{40485:(U,C,P)=>{P.r(C),P.d(C,{s:()=>j});var I=P(94403),S=P(84519),f=Object.defineProperty,A=(g,l)=>f(g,"name",{value:l,configurable:!0});function b(g,l){for(var _=0;_<l.length;_++){const v=l[_];if(typeof v!="string"&&!Array.isArray(v)){for(const L in v)if(L!=="default"&&!(L in g)){const y=Object.getOwnPropertyDescriptor(v,L);y&&Object.defineProperty(g,L,y.get?y:{enumerable:!0,get:()=>v[L]})}}}return Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}A(b,"_mergeNamespaces");var M=(0,S.r)();const F=(0,I.g)(M),j=b({__proto__:null,default:F},[M])},84519:(U,C,P)=>{P.d(C,{r:()=>M});var I=P(94403),S=Object.defineProperty,f=(F,j)=>S(F,"name",{value:j,configurable:!0}),A={exports:{}},b;function M(){return b||(b=1,function(F,j){(function(g){g((0,I.r)())})(function(g){var l=g.Pos;function _(t){var e=t.flags;return e??(t.ignoreCase?"i":"")+(t.global?"g":"")+(t.multiline?"m":"")}f(_,"regexpFlags");function v(t,e){for(var n=_(t),r=n,o=0;o<e.length;o++)r.indexOf(e.charAt(o))==-1&&(r+=e.charAt(o));return n==r?t:new RegExp(t.source,r)}f(v,"ensureFlags");function L(t){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(t.source)}f(L,"maybeMultiline");function y(t,e,n){e=v(e,"g");for(var r=n.line,o=n.ch,i=t.lastLine();r<=i;r++,o=0){e.lastIndex=o;var s=t.getLine(r),c=e.exec(s);if(c)return{from:l(r,c.index),to:l(r,c.index+c[0].length),match:c}}}f(y,"searchRegexpForward");function z(t,e,n){if(!L(e))return y(t,e,n);e=v(e,"gm");for(var r,o=1,i=n.line,s=t.lastLine();i<=s;){for(var c=0;c<o&&!(i>s);c++){var x=t.getLine(i++);r=r==null?x:r+`
`+x}o=o*2,e.lastIndex=n.ch;var h=e.exec(r);if(h){var a=r.slice(0,h.index).split(`
`),u=h[0].split(`
`),d=n.line+a.length-1,p=a[a.length-1].length;return{from:l(d,p),to:l(d+u.length-1,u.length==1?p+u[0].length:u[u.length-1].length),match:h}}}}f(z,"searchRegexpForwardMultiline");function k(t,e,n){for(var r,o=0;o<=t.length;){e.lastIndex=o;var i=e.exec(t);if(!i)break;var s=i.index+i[0].length;if(s>t.length-n)break;(!r||s>r.index+r[0].length)&&(r=i),o=i.index+1}return r}f(k,"lastMatchIn");function B(t,e,n){e=v(e,"g");for(var r=n.line,o=n.ch,i=t.firstLine();r>=i;r--,o=-1){var s=t.getLine(r),c=k(s,e,o<0?0:s.length-o);if(c)return{from:l(r,c.index),to:l(r,c.index+c[0].length),match:c}}}f(B,"searchRegexpBackward");function W(t,e,n){if(!L(e))return B(t,e,n);e=v(e,"gm");for(var r,o=1,i=t.getLine(n.line).length-n.ch,s=n.line,c=t.firstLine();s>=c;){for(var x=0;x<o&&s>=c;x++){var h=t.getLine(s--);r=r==null?h:h+`
`+r}o*=2;var a=k(r,e,i);if(a){var u=r.slice(0,a.index).split(`
`),d=a[0].split(`
`),p=s+u.length,O=u[u.length-1].length;return{from:l(p,O),to:l(p+d.length-1,d.length==1?O+d[0].length:d[d.length-1].length),match:a}}}}f(W,"searchRegexpBackwardMultiline");var w,D;String.prototype.normalize?(w=f(function(t){return t.normalize("NFD").toLowerCase()},"doFold"),D=f(function(t){return t.normalize("NFD")},"noFold")):(w=f(function(t){return t.toLowerCase()},"doFold"),D=f(function(t){return t},"noFold"));function m(t,e,n,r){if(t.length==e.length)return n;for(var o=0,i=n+Math.max(0,t.length-e.length);;){if(o==i)return o;var s=o+i>>1,c=r(t.slice(0,s)).length;if(c==n)return s;c>n?i=s:o=s+1}}f(m,"adjustPos");function K(t,e,n,r){if(!e.length)return null;var o=r?w:D,i=o(e).split(/\r|\n\r?/);e:for(var s=n.line,c=n.ch,x=t.lastLine()+1-i.length;s<=x;s++,c=0){var h=t.getLine(s).slice(c),a=o(h);if(i.length==1){var u=a.indexOf(i[0]);if(u==-1)continue e;var n=m(h,a,u,o)+c;return{from:l(s,m(h,a,u,o)+c),to:l(s,m(h,a,u+i[0].length,o)+c)}}else{var d=a.length-i[0].length;if(a.slice(d)!=i[0])continue e;for(var p=1;p<i.length-1;p++)if(o(t.getLine(s+p))!=i[p])continue e;var O=t.getLine(s+i.length-1),E=o(O),N=i[i.length-1];if(E.slice(0,N.length)!=N)continue e;return{from:l(s,m(h,a,d,o)+c),to:l(s+i.length-1,m(O,E,N.length,o))}}}}f(K,"searchStringForward");function T(t,e,n,r){if(!e.length)return null;var o=r?w:D,i=o(e).split(/\r|\n\r?/);e:for(var s=n.line,c=n.ch,x=t.firstLine()-1+i.length;s>=x;s--,c=-1){var h=t.getLine(s);c>-1&&(h=h.slice(0,c));var a=o(h);if(i.length==1){var u=a.lastIndexOf(i[0]);if(u==-1)continue e;return{from:l(s,m(h,a,u,o)),to:l(s,m(h,a,u+i[0].length,o))}}else{var d=i[i.length-1];if(a.slice(0,d.length)!=d)continue e;for(var p=1,n=s-i.length+1;p<i.length-1;p++)if(o(t.getLine(n+p))!=i[p])continue e;var O=t.getLine(s+1-i.length),E=o(O);if(E.slice(E.length-i[0].length)!=i[0])continue e;return{from:l(s+1-i.length,m(O,E,O.length-i[0].length,o)),to:l(s,m(h,a,d.length,o))}}}}f(T,"searchStringBackward");function R(t,e,n,r){this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=t,n=n?t.clipPos(n):l(0,0),this.pos={from:n,to:n};var o;typeof r=="object"?o=r.caseFold:(o=r,r=null),typeof e=="string"?(o==null&&(o=!1),this.matches=function(i,s){return(i?T:K)(t,e,s,o)}):(e=v(e,"gm"),!r||r.multiline!==!1?this.matches=function(i,s){return(i?W:z)(t,e,s)}:this.matches=function(i,s){return(i?B:y)(t,e,s)})}f(R,"SearchCursor"),R.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var e=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(e=l(e.line,e.ch),t?(e.ch--,e.ch<0&&(e.line--,e.ch=(this.doc.getLine(e.line)||"").length)):(e.ch++,e.ch>(this.doc.getLine(e.line)||"").length&&(e.ch=0,e.line++)),g.cmpPos(e,this.doc.clipPos(e))!=0))return this.atOccurrence=!1;var n=this.matches(t,e);if(this.afterEmptyMatch=n&&g.cmpPos(n.from,n.to)==0,n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0;var r=l(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:r,to:r},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,e){if(this.atOccurrence){var n=g.splitLines(t);this.doc.replaceRange(n,this.pos.from,this.pos.to,e),this.pos.to=l(this.pos.from.line+n.length-1,n[n.length-1].length+(n.length==1?this.pos.from.ch:0))}}},g.defineExtension("getSearchCursor",function(t,e,n){return new R(this.doc,t,e,n)}),g.defineDocExtension("getSearchCursor",function(t,e,n){return new R(this,t,e,n)}),g.defineExtension("selectMatches",function(t,e){for(var n=[],r=this.getSearchCursor(t,this.getCursor("from"),e);r.findNext()&&!(g.cmpPos(r.to(),this.getCursor("to"))>0);)n.push({anchor:r.from(),head:r.to()});n.length&&this.setSelections(n,0)})})}()),A.exports}f(M,"requireSearchcursor")}}]);})();

//# sourceMappingURL=485.a21dade8.chunk.js.map