var Af=Object.defineProperty;var Cf=(r,t,e)=>t in r?Af(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var q=(r,t,e)=>Cf(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function oi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ou(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fr={duration:.5,overwrite:!1,delay:0},ic,Be,xe,Rn=1e8,fe=1/Rn,tl=Math.PI*2,Rf=tl/4,Pf=0,zu=Math.sqrt,Df=Math.cos,If=Math.sin,Oe=function(t){return typeof t=="string"},Ae=function(t){return typeof t=="function"},di=function(t){return typeof t=="number"},sc=function(t){return typeof t>"u"},Kn=function(t){return typeof t=="object"},ln=function(t){return t!==!1},rc=function(){return typeof window<"u"},jr=function(t){return Ae(t)||Oe(t)},Bu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ke=Array.isArray,Lf=/random\([^)]+\)/g,Uf=/,\s*/g,Yc=/(?:-?\.?\d|\.)+/gi,ku=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ca=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gu=/[+-]=-?[.\d]+/,Nf=/[^,'"\[\]\s]+/gi,Ff=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,Hn,el,oc,wn={},Bo={},Hu,Vu=function(t){return(Bo=Ws(t,wn))&&dn},ac=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Or=function(t,e){return!e&&console.warn(t)},Wu=function(t,e){return t&&(wn[t]=e)&&Bo&&(Bo[t]=e)||wn},zr=function(){return 0},Of={suppressEvents:!0,isStart:!0,kill:!1},Co={suppressEvents:!0,kill:!1},zf={suppressEvents:!0},lc={},Ii=[],nl={},Xu,gn={},ha={},$c=30,Ro=[],cc="",hc=function(t){var e=t[0],n,i;if(Kn(e)||Ae(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ro.length;i--&&!Ro[i].targetTest(e););n=Ro[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new fd(t[i],n)))||t.splice(i,1);return t},rs=function(t){return t._gsap||hc(Pn(t))[0]._gsap},qu=function(t,e,n){return(n=t[e])&&Ae(n)?t[e]():sc(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ce=function(t){return Math.round(t*1e5)/1e5||0},Me=function(t){return Math.round(t*1e7)/1e7||0},zs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Bf=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ko=function(){var t=Ii.length,e=Ii.slice(0),n,i;for(nl={},Ii.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},uc=function(t){return!!(t._initted||t._startAt||t.add)},Yu=function(t,e,n,i){Ii.length&&!Be&&ko(),t.render(e,n,!!(Be&&e<0&&uc(t))),Ii.length&&!Be&&ko()},$u=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Nf).length<2?e:Oe(t)?t.trim():t},Zu=function(t){return t},Tn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},kf=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ws=function(t,e){for(var n in e)t[n]=e[n];return t},Zc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Kn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Go=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ar=function(t){var e=t.parent||ye,n=t.keyframes?kf(Ke(t.keyframes)):Tn;if(ln(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Gf=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ku=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Qo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Oi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},os=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Hf=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},il=function(t,e,n,i){return t._startAt&&(Be?t._startAt.revert(Co):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Vf=function r(t){return!t||t._ts&&r(t.parent)},Kc=function(t){return t._repeat?Xs(t._tTime,t=t.duration()+t._rDelay)*t:0},Xs=function(t,e){var n=Math.floor(t=Me(t/e));return t&&n===t?n-1:n},Ho=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ta=function(t){return t._end=Me(t._start+(t._tDur/Math.abs(t._ts||t._rts||fe)||0))},ea=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ta(t),n._dirty||os(n,t)),t},ju=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ho(t.rawTime(),e),(!e._dur||$r(0,e.totalDuration(),n)-e._tTime>fe)&&e.render(n,!0)),os(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-fe}},Wn=function(t,e,n,i){return e.parent&&Oi(e),e._start=Me((di(n)?n:n||t!==ye?Cn(t,n,e):t._time)+e._delay),e._end=Me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ku(t,e,"_first","_last",t._sort?"_start":0),sl(e)||(t._recent=e),i||ju(t,e),t._ts<0&&ea(t,t._tTime),t},Ju=function(t,e){return(wn.ScrollTrigger||ac("scrollTrigger",e))&&wn.ScrollTrigger.create(e,t)},Qu=function(t,e,n,i,s){if(fc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xu!==vn.frame)return Ii.push(t),t._lazy=[s,i],1},Wf=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},sl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Xf=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Wf(t)&&!(!t._initted&&sl(t))||(t._ts<0||t._dp._ts<0)&&!sl(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=$r(0,t._tDur,e),h=Xs(l,a),t._yoyo&&h&1&&(o=1-o),h!==Xs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Be||i||t._zTime===fe||!e&&t._zTime){if(!t._initted&&Qu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?fe:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&il(t,e,n,!0),t._onUpdate&&!n&&xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Oi(t,1),!n&&!Be&&(xn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qf=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},qs=function(t,e,n,i){var s=t._repeat,o=Me(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Me(o*(s+1)+t._rDelay*s):o,a>0&&!i&&ea(t,t._tTime=t._tDur*a),t.parent&&ta(t),n||os(t.parent,t),t},jc=function(t){return t instanceof an?os(t):qs(t,t._dur)},Yf={_start:0,endTime:zr,totalDuration:zr},Cn=function r(t,e,n){var i=t.labels,s=t._recent||Yf,o=t.duration()>=Rn?s.endTime(!1):t._dur,a,l,c;return Oe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ke(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Cr=function(t,e,n){var i=di(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;o.immediateRender=ln(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new De(e[0],o,e[s+1])},Gi=function(t,e){return t||t===0?e(t):e},$r=function(t,e,n){return n<t?t:n>e?e:n},Ze=function(t,e){return!Oe(t)||!(e=Ff.exec(t))?"":e[1]},$f=function(t,e,n){return Gi(n,function(i){return $r(t,e,i)})},rl=[].slice,td=function(t,e){return t&&Kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Kn(t[0]))&&!t.nodeType&&t!==Hn},Zf=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Oe(i)&&!e||td(i,1)?(s=n).push.apply(s,Pn(i)):n.push(i)})||n},Pn=function(t,e,n){return xe&&!e&&xe.selector?xe.selector(t):Oe(t)&&!n&&(el||!Ys())?rl.call((e||oc).querySelectorAll(t),0):Ke(t)?Zf(t,n):td(t)?rl.call(t,0):t?[t]:[]},ol=function(t){return t=Pn(t)[0]||Or("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Pn(e,n.querySelectorAll?n:n===t?Or("Invalid scope")||oc.createElement("div"):t)}},ed=function(t){return t.sort(function(){return .5-Math.random()})},nd=function(t){if(Ae(t))return t;var e=Kn(t)?t:{each:t},n=as(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Oe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,x,M,v,w,T,E,b,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Rn])[1],!y){for(E=-Rn;E<(E=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*h-.5:i%y,x=y===Rn?0:l?g*u/y-.5:i/y|0,E=0,b=Rn,T=0;T<g;T++)M=T%y-p,v=x-(T/y|0),m[T]=w=c?Math.abs(c==="y"?v:M):zu(M*M+v*v),w>E&&(E=w),w<b&&(b=w);i==="random"&&ed(m),m.max=E-b,m.min=b,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ze(e.amount||e.each)||0,n=n&&g<0?lp(n):n}return g=(m[d]-m.min)/m.max||0,Me(m.b+(n?n(g):g)*m.v)+m.u}},al=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(di(n)?0:Ze(n))}},id=function(t,e){var n=Ke(t),i,s;return!n&&Kn(t)&&(i=n=t.radius||Rn,t.values?(t=Pn(t.values),(s=!di(t[0]))&&(i*=i)):t=al(t.increment)),Gi(e,n?Ae(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Rn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||di(o)?h:h+Ze(o)}:al(t))},sd=function(t,e,n,i){return Gi(Ke(t)?!e:n===!0?!!(n=0):!i,function(){return Ke(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Kf=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},jf=function(t,e){return function(n){return t(parseFloat(n))+(e||Ze(n))}},Jf=function(t,e,n){return od(t,e,0,1,n)},rd=function(t,e,n){return Gi(n,function(i){return t[~~e(i)]})},Qf=function r(t,e,n){var i=e-t;return Ke(t)?rd(t,r(0,t.length),e):Gi(n,function(s){return(i+(s-t)%i)%i+t})},tp=function r(t,e,n){var i=e-t,s=i*2;return Ke(t)?rd(t,r(0,t.length-1),e):Gi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Br=function(t){return t.replace(Lf,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Uf);return sd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},od=function(t,e,n,i,s){var o=e-t,a=i-n;return Gi(s,function(l){return n+((l-t)/o*a||0)})},ep=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Oe(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ke(t)&&!Ke(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Ws(Ke(t)?[]:{},t));if(!h){for(l in e)dc.call(a,t,l,"get",e[l]);s=function(_){return gc(_,a)||(o?t.p:t)}}}return Gi(n,s)},Jc=function(t,e,n){var i=t.labels,s=Rn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xn=function(t,e,n){var i=t.vars,s=i[e],o=xe,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ii.length&&ko(),a&&(xe=a),h=l?s.apply(c,l):s.call(c),xe=o,h},Mr=function(t){return Oi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Be),t.progress()<1&&xn(t,"onInterrupt"),t},Us,ad=[],ld=function(t){if(t)if(t=!t.name&&t.default||t,rc()||t.headless){var e=t.name,n=Ae(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:zr,render:gc,add:dc,kill:vp,modifier:_p,rawVars:0},o={targetTest:0,get:0,getSetter:mc,aliases:{},register:0};if(Ys(),t!==i){if(gn[e])return;Tn(i,Tn(Go(t,s),o)),Ws(i.prototype,Ws(s,Go(t,o))),gn[i.prop=e]=i,t.targetTest&&(Ro.push(i),lc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wu(e,i),t.register&&t.register(dn,i,hn)}else ad.push(t)},ue=255,yr={aqua:[0,ue,ue],lime:[0,ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ue],navy:[0,0,128],white:[ue,ue,ue],olive:[128,128,0],yellow:[ue,ue,0],orange:[ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ue,0,0],pink:[ue,192,203],cyan:[0,ue,ue],transparent:[ue,ue,ue,0]},ua=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ue+.5|0},cd=function(t,e,n){var i=t?di(t)?[t>>16,t>>8&ue,t&ue]:0:yr.black,s,o,a,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),yr[t])i=yr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ue,i&ue,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ue,t&ue]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Yc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ua(l+1/3,s,o),i[1]=ua(l,s,o),i[2]=ua(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(ku),n&&i.length<4&&(i[3]=1),i}else i=t.match(Yc)||yr.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ue,o=i[1]/ue,a=i[2]/ue,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},hd=function(t){var e=[],n=[],i=-1;return t.split(Li).forEach(function(s){var o=s.match(Ls)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Qc=function(t,e,n){var i="",s=(t+i).match(Li),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=cd(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=hd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Li,"1").split(Ls),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Li),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Li=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in yr)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),np=/hsl[a]?\(/,ud=function(t){var e=t.join(" "),n;if(Li.lastIndex=0,Li.test(e))return n=np.test(e),t[1]=Qc(t[1],n),t[0]=Qc(t[0],n,hd(t[1])),!0},kr,vn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,_=function g(m){var p=r()-i,x=m===!0,M,v,w,T;if((p>t||p<0)&&(n+=p-e),i+=p,w=i-n,M=w-o,(M>0||x)&&(T=++u.frame,d=w-u.time*1e3,u.time=w=w/1e3,o+=M+(M>=s?4:s-M),v=1),x||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](w,d,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hu&&(!el&&rc()&&(Hn=el=window,oc=Hn.document||{},wn.gsap=dn,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(dn.version),Vu(Bo||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),ad.forEach(ld)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},kr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),kr=0,c=zr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,x){var M=p?function(v,w,T,E){m(v,w,T,E),u.remove(M)}:m;return u.remove(m),a[x?"unshift":"push"](M),Ys(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),Ys=function(){return!kr&&vn.wake()},Kt={},ip=/^[\d.\-M][\d.\-,\s]/,sp=/["']/g,rp=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(sp,"").trim():+c,i=l.substr(a+1).trim();return e},op=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ap=function(t){var e=(t+"").split("("),n=Kt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[rp(e[1])]:op(t).split(",").map($u)):Kt._CE&&ip.test(t)?Kt._CE("",t):n},lp=function(t){return function(e){return 1-t(1-e)}},as=function(t,e){return t&&(Ae(t)?t:Kt[t]||ap(t))||e},us=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return cn(t,function(a){Kt[a]=wn[a]=s,Kt[o=a.toLowerCase()]=n;for(var l in s)Kt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Kt[a+"."+l]=s[l]}),s},dd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},da=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/tl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*If((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:dd(a);return s=tl/s,l.config=function(c,h){return r(t,c,h)},l},fa=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:dd(n);return i.config=function(s){return r(t,s)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;us(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Kt.Linear.easeNone=Kt.none=Kt.Linear.easeIn;us("Elastic",da("in"),da("out"),da());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};us("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});us("Circ",function(r){return-(zu(1-r*r)-1)});us("Sine",function(r){return r===1?1:-Df(r*Rf)+1});us("Back",fa("in"),fa("out"),fa());Kt.SteppedEase=Kt.steps=wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-fe;return function(a){return((i*$r(0,o,a)|0)+s)*n}}};Fr.ease=Kt["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return cc+=r+","+r+"Params,"});var fd=function(t,e){this.id=Pf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:qu,this.set=e?e.getSetter:mc},Gr=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,qs(this,+e.duration,1,1),this.data=e.data,xe&&(this._ctx=xe,xe.data.push(this)),kr||vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ea(this,n),!s._dp||s.parent||ju(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===fe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Xs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-fe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ho(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-fe?0:this._rts,this.totalTime($r(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ta(this),Hf(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fe&&(this._tTime-=fe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Me(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ho(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zf);var i=Be;return Be=n,uc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Be=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Cn(this,n),ln(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-fe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-fe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-fe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-fe)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ae(n)?n:Zu,l=function(){var h=i.then;i.then=null,s&&s(),Ae(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Mr(this)},r})();Tn(Gr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fe,_prom:0,_ps:!1,_rts:1});var an=(function(r){Ou(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ln(n.sortChildren),ye&&Wn(n.parent||ye,oi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ju(oi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Cr(0,arguments,this),this},e.from=function(i,s,o){return Cr(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Cr(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Ar(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new De(i,s,Cn(this,o),1),this},e.call=function(i,s,o){return Wn(this,De.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new De(i,o,Cn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ar(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Ar(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Me(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,x,M,v,w,T,E;if(this!==ye&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,M=this._ts,p=!M,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Me(h%m),h===l?(g=this._repeat,d=c):(w=Me(h/m),g=~~w,g&&g===w&&(d=c,g--),d>c&&(d=c)),w=Xs(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),T&&g&1&&(d=c-d,E=1),g!==w&&!this._lock){var b=T&&w&1,y=b===(T&&g&1);if(g<w&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Me(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=qf(this,Me(a),Me(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!w&&(xn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){x=0,_&&(h+=this._zTime=-fe);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,o||Be&&uc(f)),d!==this._time||!this._ts&&!p){x=0,_&&(h+=this._zTime=S?-fe:fe);break}}f=_}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-fe)._zTime=d>=a?1:-1,this._ts))return this._start=v,ta(this),this.render(i,s,o);this._onUpdate&&!s&&xn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Oi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(xn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(di(s)||(s=Cn(this,s,i)),!(i instanceof Gr)){if(Ke(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Oe(i))return this.addLabel(i,s);if(Ae(i))i=De.delayedCall(0,i);else return this}return this!==i?Wn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Rn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof De?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Oe(i)?this.removeLabel(i):Ae(i)?this.killTweensOf(i):(i.parent===this&&Qo(this,i),i===this._recent&&(this._recent=this._last),os(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me(vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Cn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=De.delayedCall(0,s||zr,o);return a.data="isPause",this._hasPause=1,Wn(this,a,Cn(this,i))},e.removePause=function(i){var s=this._first;for(i=Cn(this,i);s;)s._start===i&&s.data==="isPause"&&Oi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ri!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Pn(i),l=this._first,c=di(s),h;l;)l instanceof De?Bf(l._targets,a)&&(c?(!Ri||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Cn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=De.to(o,Tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||fe,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&qs(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Tn({startAt:{time:Cn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Jc(this,Cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Jc(this,Cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+fe)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Me(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return os(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),os(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Rn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Me(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;qs(o,o===ye&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ye._ts&&(Yu(ye,Ho(i,ye)),Xu=vn.frame),vn.frame>=$c){$c+=yn.autoSleep||120;var s=ye._first;if((!s||!s._ts)&&yn.autoSleep&&vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vn.sleep()}}},t})(Gr);Tn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var cp=function(t,e,n,i,s,o,a){var l=new hn(this._pt,t,e,0,1,xd,null,s),c=0,h=0,u,d,f,_,g,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Br(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),d=n.match(ca)||[];u=ca.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?zs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=ca.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Gu.test(i)||p)&&(l.e=0),this._pt=l,l},dc=function(t,e,n,i,s,o,a,l,c,h){Ae(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:Ae(u)?c?t[e.indexOf("set")||!Ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ae(u)?c?pp:_d:pc,_;if(Oe(i)&&(~i.indexOf("random(")&&(i=Br(i)),i.charAt(1)==="="&&(_=zs(d,i)+(Ze(d)||0),(_||_===0)&&(i=_))),!h||d!==i||ll)return!isNaN(d*i)&&i!==""?(_=new hn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?gp:vd,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&ac(e,i),cp.call(this,t,e,d,i,f,l||yn.stringFilter,c))},hp=function(t,e,n,i,s){if(Ae(t)&&(t=Rr(t,s,e,n,i)),!Kn(t)||t.style&&t.nodeType||Ke(t)||Bu(t))return Oe(t)?Rr(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Rr(t[a],s,e,n,i);return o},pd=function(t,e,n,i,s,o){var a,l,c,h;if(gn[t]&&(a=new gn[t]).init(s,a.rawVars?e[t]:hp(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new hn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Us))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ri,ll,fc=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!ic,v=t.timeline,w=i.easeReverse||u,T,E,b,y,S,C,I,L,U,B,k,X,G;if(v&&(!d||!s)&&(s="none"),t._ease=as(s,Fr.ease),t._rEase=w&&(as(w)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||d&&!i.stagger){if(L=m[0]?rs(m[0]).harness:0,X=L&&i[L.prop],T=Go(i,lc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Co:Of),g._lazy=0),o){if(Oi(t._startAt=De.set(m,Tn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&ln(l),startAt:null,delay:0,onUpdate:c&&function(){return xn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be||!a&&!f)&&t._startAt.revert(Co),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),b=Tn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ln(l),immediateRender:a,stagger:0,parent:p},T),X&&(b[L.prop]=X),Oi(t._startAt=De.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be?t._startAt.revert(Co):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,fe,fe);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&ln(l)||l&&!_,E=0;E<m.length;E++){if(S=m[E],I=S._gsap||hc(m)[E]._gsap,t._ptLookup[E]=B={},nl[I.id]&&Ii.length&&ko(),k=x===m?E:x.indexOf(S),L&&(U=new L).init(S,X||T,t,k,x)!==!1&&(t._pt=y=new hn(t._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(et){B[et]=y}),U.priority&&(C=1)),!L||X)for(b in T)gn[b]&&(U=pd(b,T,t,k,S,x))?U.priority&&(C=1):B[b]=y=dc.call(t,S,b,"get",T[b],k,x,0,i.stringFilter);t._op&&t._op[E]&&t.kill(S,t._op[E]),M&&t._pt&&(Ri=t,ye.killTweensOf(S,B,t.globalTime(e)),G=!t.parent,Ri=0),t._pt&&l&&(nl[I.id]=1)}C&&Md(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,d&&e<=0&&v.render(Rn,!0,!0)},up=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ll=1,t.vars[e]="+=0",fc(t,a),ll=0,l?Or(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ce(n)+Ze(u.e)),u.b&&(u.b=h.s+Ze(u.b))},dp=function(t,e){var n=t[0]?rs(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ws({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},fp=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Ke(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Rr=function(t,e,n,i,s){return Ae(t)?t.call(e,n,i,s):Oe(t)&&~t.indexOf("random(")?Br(t):t},md=cc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",gd={};cn(md+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return gd[r]=1});var De=(function(r){Ou(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ar(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||ye,x=(Ke(n)||Bu(n)?di(n[0]):"length"in i)?[n]:Pn(n),M,v,w,T,E,b,y,S;if(a._targets=x.length?hc(x):Or("GSAP target "+n+" not found. https://gsap.com",!yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||jr(c)||jr(h)){i=a.vars;var C=i.easeReverse||i.yoyoEase;if(M=a.timeline=new an({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:x}),M.kill(),M.parent=M._dp=oi(a),M._start=0,d||jr(c)||jr(h)){if(T=x.length,y=d&&nd(d),Kn(d))for(E in d)~md.indexOf(E)&&(S||(S={}),S[E]=d[E]);for(v=0;v<T;v++)w=Go(i,gd),w.stagger=0,C&&(w.easeReverse=C),S&&Ws(w,S),b=x[v],w.duration=+Rr(c,oi(a),v,b,x),w.delay=(+Rr(h,oi(a),v,b,x)||0)-a._delay,!d&&T===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),M.to(b,w,y?y(v,b,x):0),M._ease=Kt.none;M.duration()?c=h=0:a.timeline=0}else if(_){Ar(Tn(M.vars.defaults,{ease:"none"})),M._ease=as(_.ease||i.ease||"none");var I=0,L,U,B;if(Ke(_))_.forEach(function(k){return M.to(x,k,">")}),M.duration();else{w={};for(E in _)E==="ease"||E==="easeEach"||fp(E,_[E],w,_.easeEach);for(E in w)for(L=w[E].sort(function(k,X){return k.t-X.t}),I=0,v=0;v<L.length;v++)U=L[v],B={ease:U.e,duration:(U.t-(v?L[v-1].t:0))/100*c},B[E]=U.v,M.to(x,B,I),I+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!ic&&(Ri=oi(a),ye.killTweensOf(x),Ri=0),Wn(p,oi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===Me(p._time)&&ln(u)&&Vf(oi(a))&&p.data!=="nested")&&(a._tTime=-fe,a.render(Math.max(0,-h)||0)),m&&Ju(oi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-fe&&!h?l:i<fe?0:i,d,f,_,g,m,p,x,M;if(!c)Xf(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(d=Me(u%g),u===l?(_=this._repeat,d=c):(m=Me(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=Xs(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Me(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Qu(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var w=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(v?-1:1)/w:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!m&&(xn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&il(this,i,s,o),xn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&xn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&il(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Oi(this,1),!s&&!(h&&!a)&&(u||a||p)&&(xn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){kr||vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||fc(this,c),h=this._ease(c/this._dur),up(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(ea(this,0),this.parent||Ku(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Mr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Be),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ri&&Ri.vars.overwrite!==!0)._first||Mr(this),this.parent&&o!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Pn(i):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&Gf(a,l))return s==="all"&&(this._pt=0),Mr(this);for(u=this._op=this._op||[],s!=="all"&&(Oe(s)&&(g={},cn(s,function(x){return g[x]=1}),s=g),s=dp(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Qo(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Mr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Cr(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Cr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return ye.killTweensOf(i,s,o)},t})(Gr);Tn(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(r){De[r]=function(){var t=new an,e=rl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var pc=function(t,e,n){return t[e]=n},_d=function(t,e,n){return t[e](n)},pp=function(t,e,n,i){return t[e](i.fp,n)},mp=function(t,e,n){return t.setAttribute(e,n)},mc=function(t,e){return Ae(t[e])?_d:sc(t[e])&&t.setAttribute?mp:pc},vd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gp=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},xd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},gc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},_p=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},vp=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Qo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},xp=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Md=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},hn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||vd,this.d=l||this,this.set=c||pc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=xp,this.m=n,this.mt=s,this.tween=i},r})();cn(cc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return lc[r]=1});wn.TweenMax=wn.TweenLite=De;wn.TimelineLite=wn.TimelineMax=an;ye=new an({sortChildren:!1,defaults:Fr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yn.stringFilter=ud;var ls=[],Po={},Mp=[],th=0,yp=0,pa=function(t){return(Po[t]||Mp).map(function(e){return e()})},cl=function(){var t=Date.now(),e=[];t-th>2&&(pa("matchMediaInit"),ls.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Hn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),pa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),th=t,pa("matchMedia"))},yd=(function(){function r(e,n){this.selector=n&&ol(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yp++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ae(n)&&(s=i,i=n,n=Ae);var o=this,a=function(){var c=xe,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=ol(s)),xe=o,u=i.apply(o,arguments),Ae(u)&&o._r.push(u),xe=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ae?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=xe;xe=null,n(this),xe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof De&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof an?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof De)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ls.length;o--;)ls[o].id===this.id&&ls.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Sp=(function(){function r(e){this.contexts=[],this.scope=e,xe&&xe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Kn(n)||(n={matches:n});var o=new yd(0,s||this.scope),a=o.conditions={},l,c,h;xe&&!o.selector&&(o.selector=xe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Hn.matchMedia(n[c]),l&&(ls.indexOf(o)<0&&ls.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(cl):l.addEventListener("change",cl)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Vo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ld(i)})},timeline:function(t){return new an(t)},getTweensOf:function(t,e){return ye.getTweensOf(t,e)},getProperty:function(t,e,n,i){Oe(t)&&(t=Pn(t)[0]);var s=rs(t||{}).get,o=n?Zu:$u;return n==="native"&&(n=""),t&&(e?o((gn[e]&&gn[e].get||s)(t,e,n,i)):function(a,l,c){return o((gn[a]&&gn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Pn(t),t.length>1){var i=t.map(function(h){return dn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=gn[e],a=rs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Us._pt=0,u.init(t,n?h+n:h,Us,0,[t]),u.render(1,u),Us._pt&&gc(1,Us)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=dn.to(t,Tn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=as(t.ease,Fr.ease)),Zc(Fr,t||{})},config:function(t){return Zc(yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!gn[a]&&!wn[a]&&Or(e+" effect requires "+a+" plugin.")}),ha[e]=function(a,l,c){return n(Pn(a),Tn(l||{},s),c)},o&&(an.prototype[e]=function(a,l,c){return this.add(ha[e](a,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Kt[t]=as(e)},parseEase:function(t,e){return arguments.length?as(t,e):Kt},getById:function(t){return ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new an(t),i,s;for(n.smoothChildTiming=ln(t.smoothChildTiming),ye.remove(n),n._dp=0,n._time=n._tTime=ye._time,i=ye._first;i;)s=i._next,(e||!(!i._dur&&i instanceof De&&i.vars.onComplete===i._targets[0]))&&Wn(n,i,i._start-i._delay),i=s;return Wn(ye,n,0),n},context:function(t,e){return t?new yd(t,e):xe},matchMedia:function(t){return new Sp(t)},matchMediaRefresh:function(){return ls.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||cl()},addEventListener:function(t,e){var n=Po[t]||(Po[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Po[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Qf,wrapYoyo:tp,distribute:nd,random:sd,snap:id,normalize:Jf,getUnit:Ze,clamp:$f,splitColor:cd,toArray:Pn,selector:ol,mapRange:od,pipe:Kf,unitize:jf,interpolate:ep,shuffle:ed},install:Vu,effects:ha,ticker:vn,updateRoot:an.updateRoot,plugins:gn,globalTimeline:ye,core:{PropTween:hn,globals:Wu,Tween:De,Timeline:an,Animation:Gr,getCache:rs,_removeLinkedListItem:Qo,reverting:function(){return Be},context:function(t){return t&&xe&&(xe.data.push(t),t._ctx=xe),xe},suppressOverwrites:function(t){return ic=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vo[r]=De[r]});vn.add(an.updateRoot);Us=Vo.to({},{duration:0});var wp=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Tp=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=wp(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},ma=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Oe(s)&&(l={},cn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Tp(a,s)}}}},dn=Vo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Be?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ma("roundProps",al),ma("modifiers"),ma("snap",id))||Vo;De.version=an.version=dn.version="3.15.0";Hu=1;rc()&&Ys();Kt.Power0;Kt.Power1;Kt.Power2;Kt.Power3;Kt.Power4;Kt.Linear;Kt.Quad;Kt.Cubic;Kt.Quart;Kt.Quint;Kt.Strong;Kt.Elastic;Kt.Back;Kt.SteppedEase;Kt.Bounce;Kt.Sine;Kt.Expo;Kt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var eh,Pi,Bs,_c,ns,nh,vc,Ep=function(){return typeof window<"u"},fi={},ji=180/Math.PI,ks=Math.PI/180,gs=Math.atan2,ih=1e8,xc=/([A-Z])/g,bp=/(left|right|width|margin|padding|x)/i,Ap=/[\s,\(]\S/,Xn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cp=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rp=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pp=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Dp=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Sd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},wd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ip=function(t,e,n){return t.style[e]=n},Lp=function(t,e,n){return t.style.setProperty(e,n)},Up=function(t,e,n){return t._gsap[e]=n},Np=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Fp=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Op=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Se="transform",un=Se+"Origin",zp=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in fi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Xn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ai(i,a)}):this.tfm[t]=o.x?o[t]:ai(i,t),t===un&&(this.tfm.zOrigin=o.zOrigin);else return Xn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Se)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=Se}(s||e)&&this.props.push(t,e,s[t])},Td=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Bp=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(xc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=vc(),(!s||!s.isStart)&&!n[Se]&&(Td(n),i.zOrigin&&n[un]&&(n[un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ed=function(t,e){var n={target:t,props:[],revert:Bp,save:zp};return t._gsap||dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},bd,ul=function(t,e){var n=Pi.createElementNS?Pi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Pi.createElement(t);return n&&n.style?n:Pi.createElement(t)},Mn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(xc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,$s(e)||e,1)||""},sh="O,Moz,ms,Ms,Webkit".split(","),$s=function(t,e,n){var i=e||ns,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(sh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?sh[o]:"")+t},dl=function(){Ep()&&window.document&&(eh=window,Pi=eh.document,Bs=Pi.documentElement,ns=ul("div")||{style:{}},ul("div"),Se=$s(Se),un=Se+"Origin",ns.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bd=!!$s("perspective"),vc=dn.core.reverting,_c=1)},rh=function(t){var e=t.ownerSVGElement,n=ul("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Bs.removeChild(n),s},oh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ad=function(t){var e,n;try{e=t.getBBox()}catch{e=rh(t),n=1}return e&&(e.width||e.height)||n||(e=rh(t)),e&&!e.width&&!e.x&&!e.y?{x:+oh(t,["x","cx","x1"])||0,y:+oh(t,["y","cy","y1"])||0,width:0,height:0}:e},Cd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ad(t))},zi=function(t,e){if(e){var n=t.style,i;e in fi&&e!==un&&(e=Se),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(xc,"-$1").toLowerCase())):n.removeAttribute(e)}},Di=function(t,e,n,i,s,o){var a=new hn(t._pt,e,n,0,1,o?wd:Sd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},ah={deg:1,rad:1,turn:1},kp={grid:1,flex:1},Bi=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ns.style,l=bp.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||ah[i]||ah[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&Cd(t),(f||o==="%")&&(fi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Ce(f?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Pi||!g.appendChild)&&(g=Pi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===vn.time&&!m.uncache)return Ce(s/m.width*u);if(f&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,_=t[h],x?t.style[e]=x:zi(t,e)}else(f||o==="%")&&!kp[Mn(g,"display")]&&(a.position=Mn(t,"position")),g===t&&(a.position="static"),g.appendChild(ns),_=ns[h],g.removeChild(ns),a.position="absolute";return l&&f&&(m=rs(g),m.time=vn.time,m.width=g[h]),Ce(d?_*s/u:_&&s?u/_*s:0)},ai=function(t,e,n,i){var s;return _c||dl(),e in Xn&&e!=="transform"&&(e=Xn[e],~e.indexOf(",")&&(e=e.split(",")[0])),fi[e]&&e!=="transform"?(s=Vr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Xo(Mn(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wo[e]&&Wo[e](t,e,n)||Mn(t,e)||qu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Bi(t,e,s,n)+n:s},Gp=function(t,e,n,i){if(!n||n==="none"){var s=$s(e,t,1),o=s&&Mn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Mn(t,"borderTopColor"))}var a=new hn(this._pt,t.style,e,0,1,xd),l=0,c=0,h,u,d,f,_,g,m,p,x,M,v,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Mn(t,e)||i,g?t.style[e]=g:zi(t,e)),h=[n,i],ud(h),n=h[0],i=h[1],d=n.match(Ls)||[],w=i.match(Ls)||[],w.length){for(;u=Ls.exec(i);)m=u[0],x=i.substring(l,u.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=zs(f,m)+v),p=parseFloat(m),M=m.substr((p+"").length),l=Ls.lastIndex-M.length,M||(M=M||yn.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(f=Bi(t,e,g,M)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?wd:Sd;return Gu.test(i)&&(a.e=0),this._pt=a,a},lh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hp=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=lh[n]||n,e[1]=lh[i]||i,e.join(" ")},Vp=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],fi[a]&&(l=1,a=a==="transformOrigin"?un:Se),zi(n,a);l&&(zi(n,Se),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Vr(n,1),o.uncache=1,Td(i)))}},Wo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new hn(t._pt,e,n,0,0,Vp);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Hr=[1,0,0,1,0,0],Rd={},Pd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ch=function(t){var e=Mn(t,Se);return Pd(e)?Hr:e.substr(7).match(ku).map(Ce)},Mc=function(t,e){var n=t._gsap||rs(t),i=t.style,s=ch(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hr:s):(s===Hr&&!t.offsetParent&&t!==Bs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Bs.appendChild(t)),s=ch(t),l?i.display=l:zi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Bs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fl=function(t,e,n,i,s,o){var a=t._gsap,l=s||Mc(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],x=l[5],M=e.split(" "),v=parseFloat(M[0])||0,w=parseFloat(M[1])||0,T,E,b,y;n?l!==Hr&&(E=f*m-_*g)&&(b=v*(m/E)+w*(-g/E)+(g*x-m*p)/E,y=v*(-_/E)+w*(f/E)-(f*x-_*p)/E,v=b,w=y):(T=Ad(t),v=T.x+(~M[0].indexOf("%")?v/100*T.width:v),w=T.y+(~(M[1]||M[0]).indexOf("%")?w/100*T.height:w)),i||i!==!1&&a.smooth?(p=v-c,x=w-h,a.xOffset=u+(p*f+x*g)-p,a.yOffset=d+(p*_+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[un]="0px 0px",o&&(Di(o,a,"xOrigin",c,v),Di(o,a,"yOrigin",h,w),Di(o,a,"xOffset",u,a.xOffset),Di(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+w)},Vr=function(t,e){var n=t._gsap||new fd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Mn(t,un)||"0",h,u,d,f,_,g,m,p,x,M,v,w,T,E,b,y,S,C,I,L,U,B,k,X,G,et,at,_t,Pt,$t,Y,K;return h=u=d=g=m=p=x=M=v=0,f=_=1,n.svg=!!(t.getCTM&&Cd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Se]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Se]!=="none"?l[Se]:"")),i.scale=i.rotate=i.translate="none"),E=Mc(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),fl(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,T=n.yOrigin||0,E!==Hr&&(C=E[0],I=E[1],L=E[2],U=E[3],h=B=E[4],u=k=E[5],E.length===6?(f=Math.sqrt(C*C+I*I),_=Math.sqrt(U*U+L*L),g=C||I?gs(I,C)*ji:0,x=L||U?gs(L,U)*ji+g:0,x&&(_*=Math.abs(Math.cos(x*ks))),n.svg&&(h-=w-(w*C+T*L),u-=T-(w*I+T*U))):(K=E[6],$t=E[7],at=E[8],_t=E[9],Pt=E[10],Y=E[11],h=E[12],u=E[13],d=E[14],b=gs(K,Pt),m=b*ji,b&&(y=Math.cos(-b),S=Math.sin(-b),X=B*y+at*S,G=k*y+_t*S,et=K*y+Pt*S,at=B*-S+at*y,_t=k*-S+_t*y,Pt=K*-S+Pt*y,Y=$t*-S+Y*y,B=X,k=G,K=et),b=gs(-L,Pt),p=b*ji,b&&(y=Math.cos(-b),S=Math.sin(-b),X=C*y-at*S,G=I*y-_t*S,et=L*y-Pt*S,Y=U*S+Y*y,C=X,I=G,L=et),b=gs(I,C),g=b*ji,b&&(y=Math.cos(b),S=Math.sin(b),X=C*y+I*S,G=B*y+k*S,I=I*y-C*S,k=k*y-B*S,C=X,B=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ce(Math.sqrt(C*C+I*I+L*L)),_=Ce(Math.sqrt(k*k+K*K)),b=gs(B,k),x=Math.abs(b)>2e-4?b*ji:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Pd(Mn(t,Se)),X&&t.setAttribute("transform",X))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ce(f),n.scaleY=Ce(_),n.rotation=Ce(g)+a,n.rotationX=Ce(m)+a,n.rotationY=Ce(p)+a,n.skewX=x+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[un]=Xo(c)),n.xOffset=n.yOffset=0,n.force3D=yn.force3D,n.renderTransform=n.svg?Xp:bd?Dd:Wp,n.uncache=0,n},Xo=function(t){return(t=t.split(" "))[0]+" "+t[1]},ga=function(t,e,n){var i=Ze(e);return Ce(parseFloat(e)+parseFloat(Bi(t,"x",n+"px",i)))+i},Wp=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Dd(t,e)},Vi="0deg",hr="0px",Wi=") ",Dd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,M=n.zOrigin,v="",w=p==="auto"&&t&&t!==1||p===!0;if(M&&(u!==Vi||h!==Vi)){var T=parseFloat(h)*ks,E=Math.sin(T),b=Math.cos(T),y;T=parseFloat(u)*ks,y=Math.cos(T),o=ga(x,o,E*y*-M),a=ga(x,a,-Math.sin(T)*-M),l=ga(x,l,b*y*-M+M)}m!==hr&&(v+="perspective("+m+Wi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(w||o!==hr||a!==hr||l!==hr)&&(v+=l!==hr||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Wi),c!==Vi&&(v+="rotate("+c+Wi),h!==Vi&&(v+="rotateY("+h+Wi),u!==Vi&&(v+="rotateX("+u+Wi),(d!==Vi||f!==Vi)&&(v+="skew("+d+", "+f+Wi),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Wi),x.style[Se]=v||"translate(0, 0)"},Xp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,M=parseFloat(o),v=parseFloat(a),w,T,E,b,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ks,c*=ks,w=Math.cos(l)*u,T=Math.sin(l)*u,E=Math.sin(l-c)*-d,b=Math.cos(l-c)*d,c&&(h*=ks,y=Math.tan(c-h),y=Math.sqrt(1+y*y),E*=y,b*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),w*=y,T*=y)),w=Ce(w),T=Ce(T),E=Ce(E),b=Ce(b)):(w=u,b=d,T=E=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Bi(f,"x",o,"px"),v=Bi(f,"y",a,"px")),(_||g||m||p)&&(M=Ce(M+_-(_*w+g*E)+m),v=Ce(v+g-(_*T+g*b)+p)),(i||s)&&(y=f.getBBox(),M=Ce(M+i/100*y.width),v=Ce(v+s/100*y.height)),y="matrix("+w+","+T+","+E+","+b+","+M+","+v+")",f.setAttribute("transform",y),x&&(f.style[Se]=y)},qp=function(t,e,n,i,s){var o=360,a=Oe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ji:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*ih)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*ih)%o-~~(c/o)*o)),t._pt=d=new hn(t._pt,e,n,i,c,Cp),d.e=h,d.u="deg",t._props.push(n),d},hh=function(t,e){for(var n in e)t[n]=e[n];return t},Yp=function(t,e,n){var i=hh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Se]=e,a=Vr(n,1),zi(n,Se),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Se],o[Se]=e,a=Vr(n,1),o[Se]=c);for(l in fi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Ze(c),_=Ze(h),u=f!==_?Bi(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new hn(t._pt,a,l,u,d-u,hl),t._pt.u=_||0,t._props.push(l));hh(a,i)};cn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Wo[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return ai(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var Id={name:"css",register:dl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,x,M,v,w,T,E,b,y;_c||dl(),this.styles=this.styles||Ed(t),b=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(gn[g]&&pd(g,e,n,i,t,s)))){if(f=typeof h,_=Wo[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Br(h)),_)_(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Li.lastIndex=0,Li.test(c)||(m=Ze(c),p=Ze(h),p?m!==p&&(c=Bi(t,g,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),b.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Oe(c)&&~c.indexOf("random(")&&(c=Br(c)),Ze(c+"")||c==="auto"||(c+=yn.units[g]||Ze(ai(t,g))||""),(c+"").charAt(1)==="="&&(c=ai(t,g))):c=ai(t,g),d=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in Xn&&(g==="autoAlpha"&&(d===1&&ai(t,"visibility")==="hidden"&&u&&(d=0),b.push("visibility",0,a.visibility),Di(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Xn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in fi,M){if(this.styles.save(g),y=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Mn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=Mn(t,"perspective"),S?t.style.perspective=S:zi(t,"perspective")}u=parseFloat(h)}if(v||(w=t._gsap,w.renderTransform&&!e.parseTransform||Vr(t,e.parseTransform),T=e.smoothOrigin!==!1&&w.smooth,v=this._pt=new hn(this._pt,a,Se,0,1,w.renderTransform,w,0,-1),v.dep=1),g==="scale")this._pt=new hn(this._pt,w,"scaleY",w.scaleY,(x?zs(w.scaleY,x+u):u)-w.scaleY||0,hl),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(un,0,a[un]),h=Hp(h),w.svg?fl(t,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&Di(this,w,"zOrigin",w.zOrigin,p),Di(this,a,g,Xo(c),Xo(h)));continue}else if(g==="svgOrigin"){fl(t,h,1,T,0,this);continue}else if(g in Rd){qp(this,w,g,d,x?zs(d,x+h):h);continue}else if(g==="smoothOrigin"){Di(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){Yp(this,h,t);continue}}else g in a||(g=$s(g)||g);if(M||(u||u===0)&&(d||d===0)&&!Ap.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=Ze(h)||(g in yn.units?yn.units[g]:m),m!==p&&(d=Bi(t,g,c,p)),this._pt=new hn(this._pt,M?w:a,g,d,(x?zs(d,x+u):u)-d,!M&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Dp:hl),this._pt.u=p||0,M&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=Pp):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Rp);else if(g in a)Gp.call(this,t,g,c,x?x+h:h);else if(g in t)this.add(t,g,c||t[g],x?x+h:h,i,s);else if(g!=="parseTransform"){ac(g,h);continue}M||(g in a?b.push(g,0,a[g]):typeof t[g]=="function"?b.push(g,2,t[g]()):b.push(g,1,c||t[g])),o.push(g)}}E&&Md(this)},render:function(t,e){if(e.tween._time||!vc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ai,aliases:Xn,getSetter:function(t,e,n){var i=Xn[e];return i&&i.indexOf(",")<0&&(e=i),e in fi&&e!==un&&(t._gsap.x||ai(t,"x"))?n&&nh===n?e==="scale"?Np:Up:(nh=n||{})&&(e==="scale"?Fp:Op):t.style&&!sc(t.style[e])?Ip:~e.indexOf("-")?Lp:mc(t,e)},core:{_removeProperty:zi,_getMatrix:Mc}};dn.utils.checkPrefix=$s;dn.core.getStyleSaver=Ed;(function(r,t,e,n){var i=cn(r+","+t+","+e,function(s){fi[s]=1});cn(t,function(s){yn.units[s]="deg",Rd[s]=1}),Xn[i[13]]=r+","+t,cn(n,function(s){var o=s.split(":");Xn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){yn.units[r]="px"});dn.registerPlugin(Id);var de=dn.registerPlugin(Id)||dn;de.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="170",$p=0,uh=1,Zp=2,Ld=1,Ud=2,ri=3,ki=0,sn=1,Ee=2,hi=0,Gs=1,qn=2,dh=3,fh=4,Kp=5,ts=100,jp=101,Jp=102,Qp=103,tm=104,em=200,nm=201,im=202,sm=203,pl=204,ml=205,rm=206,om=207,am=208,lm=209,cm=210,hm=211,um=212,dm=213,fm=214,gl=0,_l=1,vl=2,Zs=3,xl=4,Ml=5,yl=6,Sl=7,Nd=0,pm=1,mm=2,Ui=0,Fd=1,Od=2,zd=3,Sc=4,gm=5,Bd=6,kd=7,Gd=300,Ks=301,js=302,qo=303,wl=304,na=306,Yo=1e3,is=1001,Tl=1002,Sn=1003,_m=1004,Jr=1005,Yn=1006,_a=1007,ss=1008,pi=1009,Hd=1010,Vd=1011,Wr=1012,wc=1013,hs=1014,$n=1015,Zn=1016,Tc=1017,Ec=1018,Js=1020,Wd=35902,Xd=1021,qd=1022,kn=1023,Yd=1024,$d=1025,Hs=1026,Qs=1027,bc=1028,Ac=1029,Zd=1030,Cc=1031,Rc=1033,Do=33776,Io=33777,Lo=33778,Uo=33779,El=35840,bl=35841,Al=35842,Cl=35843,Rl=36196,Pl=37492,Dl=37496,Il=37808,Ll=37809,Ul=37810,Nl=37811,Fl=37812,Ol=37813,zl=37814,Bl=37815,kl=37816,Gl=37817,Hl=37818,Vl=37819,Wl=37820,Xl=37821,No=36492,ql=36494,Yl=36495,Kd=36283,$l=36284,Zl=36285,Kl=36286,vm=3200,xm=3201,jd=0,Mm=1,Ai="",$e="srgb",nr="srgb-linear",ia="linear",oe="srgb",_s=7680,ph=519,ym=512,Sm=513,wm=514,Jd=515,Tm=516,Em=517,bm=518,Am=519,mh=35044,gh="300 es",li=2e3,$o=2001;class ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const Pr=Math.PI/180,Xr=180/Math.PI;function sr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[r&255]+He[r>>8&255]+He[r>>16&255]+He[r>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function ze(r,t,e){return Math.max(t,Math.min(e,r))}function Pc(r,t){return(r%t+t)%t}function Cm(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Rm(r,t,e){return r!==t?(e-r)/(t-r):0}function Dr(r,t,e){return(1-e)*r+e*t}function Pm(r,t,e,n){return Dr(r,t,1-Math.exp(-e*n))}function Dm(r,t=1){return t-Math.abs(Pc(r,t*2)-t)}function Im(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Lm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Um(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Nm(r,t){return r+Math.random()*(t-r)}function Fm(r){return r*(.5-Math.random())}function Om(r){r!==void 0&&(_h=r);let t=_h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zm(r){return r*Pr}function Bm(r){return r*Xr}function km(r){return(r&r-1)===0&&r!==0}function Gm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Hm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vm(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Is(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ae={DEG2RAD:Pr,RAD2DEG:Xr,generateUUID:sr,clamp:ze,euclideanModulo:Pc,mapLinear:Cm,inverseLerp:Rm,lerp:Dr,damp:Pm,pingpong:Dm,smoothstep:Im,smootherstep:Lm,randInt:Um,randFloat:Nm,randFloatSpread:Fm,seededRandom:Om,degToRad:zm,radToDeg:Bm,isPowerOfTwo:km,ceilPowerOfTwo:Gm,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:Vm,normalize:Qe,denormalize:Is};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],x=i[1],M=i[4],v=i[7],w=i[2],T=i[5],E=i[8];return s[0]=o*g+a*x+l*w,s[3]=o*m+a*M+l*T,s[6]=o*p+a*v+l*E,s[1]=c*g+h*x+u*w,s[4]=c*m+h*M+u*T,s[7]=c*p+h*v+u*E,s[2]=d*g+f*x+_*w,s[5]=d*m+f*M+_*T,s[8]=d*p+f*v+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Vt;function Qd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wm(){const r=Zo("canvas");return r.style.display="block",r}const vh={};function Sr(r){r in vh||(vh[r]=!0,console.warn(r))}function Xm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function qm(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ym(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?ia:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ui(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const xh=[.64,.33,.3,.6,.15,.06],Mh=[.2126,.7152,.0722],yh=[.3127,.329],Sh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[nr]:{primaries:xh,whitePoint:yh,transfer:ia,toXYZ:Sh,fromXYZ:wh,luminanceCoefficients:Mh,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:xh,whitePoint:yh,transfer:oe,toXYZ:Sh,fromXYZ:wh,luminanceCoefficients:Mh,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});let vs;class $m{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vs===void 0&&(vs=Zo("canvas")),vs.width=t.width,vs.height=t.height;const n=vs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zm=0;class tf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(xa(i[o].image)):s.push(xa(i[o]))}else s=xa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function xa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$m.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Km=0;class je extends ir{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=is,i=is,s=Yn,o=ss,a=kn,l=pi,c=je.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=sr(),this.name="",this.source=new tf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yo:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yo:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Gd;je.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,w=(p+1)/2,T=(h+d)/4,E=(u+g)/4,b=(_+m)/4;return M>v&&M>w?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=T/n,s=E/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=b/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jm extends ir{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends jm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ef extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class he{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const w=Math.sqrt(M),T=Math.atan2(w,p*x);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,h=h*m+_*v,u=u*m+g*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new P,Th=new he;class ds{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),to.subVectors(this.max,ur),xs.subVectors(t.a,ur),Ms.subVectors(t.b,ur),ys.subVectors(t.c,ur),vi.subVectors(Ms,xs),xi.subVectors(ys,Ms),Xi.subVectors(xs,ys);let e=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Xi.z,Xi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Xi.z,0,-Xi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Xi.y,Xi.x,0];return!ya(e,xs,Ms,ys,to)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,xs,Ms,ys,to))?!1:(eo.crossVectors(vi,xi),e=[eo.x,eo.y,eo.z],ya(e,xs,Ms,ys,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,Qr=new ds,xs=new P,Ms=new P,ys=new P,vi=new P,xi=new P,Xi=new P,ur=new P,to=new P,eo=new P,qi=new P;function ya(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){qi.fromArray(r,s);const a=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qm=new ds,dr=new P,Sa=new P;class fs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Sa)),this.expandByPoint(dr.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new P,wa=new P,no=new P,Mi=new P,Ta=new P,io=new P,Ea=new P;class sa{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wa.copy(t).add(e).multiplyScalar(.5),no.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(wa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(no),a=Mi.dot(this.direction),l=-Mi.dot(no),c=Mi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wa).addScaledVector(no,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,s){Ta.subVectors(e,t),io.subVectors(n,t),Ea.crossVectors(Ta,io);let o=this.direction.dot(Ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const l=a*this.direction.dot(io.crossVectors(Mi,io));if(l<0)return null;const c=a*this.direction.dot(Ta.cross(Mi));if(c<0||l+c>o)return null;const h=-a*Mi.dot(Ea);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ss.setFromMatrixColumn(t,0).length(),s=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(t0,t,e0)}lookAt(t,e,n){const i=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),yi.crossVectors(n,pn),yi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),yi.crossVectors(n,pn)),yi.normalize(),so.crossVectors(pn,yi),i[0]=yi.x,i[4]=so.x,i[8]=pn.x,i[1]=yi.y,i[5]=so.y,i[9]=pn.y,i[2]=yi.z,i[6]=so.z,i[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],w=n[15],T=i[0],E=i[4],b=i[8],y=i[12],S=i[1],C=i[5],I=i[9],L=i[13],U=i[2],B=i[6],k=i[10],X=i[14],G=i[3],et=i[7],at=i[11],_t=i[15];return s[0]=o*T+a*S+l*U+c*G,s[4]=o*E+a*C+l*B+c*et,s[8]=o*b+a*I+l*k+c*at,s[12]=o*y+a*L+l*X+c*_t,s[1]=h*T+u*S+d*U+f*G,s[5]=h*E+u*C+d*B+f*et,s[9]=h*b+u*I+d*k+f*at,s[13]=h*y+u*L+d*X+f*_t,s[2]=_*T+g*S+m*U+p*G,s[6]=_*E+g*C+m*B+p*et,s[10]=_*b+g*I+m*k+p*at,s[14]=_*y+g*L+m*X+p*_t,s[3]=x*T+M*S+v*U+w*G,s[7]=x*E+M*C+v*B+w*et,s[11]=x*b+M*I+v*k+w*at,s[15]=x*y+M*L+v*X+w*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],x=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,M=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,v=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,w=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,T=e*x+n*M+i*v+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=x*E,t[1]=(g*d*s-u*m*s-g*i*f+n*m*f+u*i*p-n*d*p)*E,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*E,t[4]=M*E,t[5]=(h*m*s-_*d*s+_*i*f-e*m*f-h*i*p+e*d*p)*E,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*E,t[8]=v*E,t[9]=(_*u*s-h*g*s-_*n*f+e*g*f+h*n*p-e*u*p)*E,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*E,t[12]=w*E,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,_=s*u,g=o*h,m=o*u,p=a*u,x=l*c,M=l*h,v=l*u,w=n.x,T=n.y,E=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+v)*w,i[2]=(_-M)*w,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+p))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(_+M)*E,i[9]=(m-x)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ss.set(i[0],i[1],i[2]).length();const o=Ss.set(i[4],i[5],i[6]).length(),a=Ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Nn.copy(this);const c=1/s,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=li){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,_;if(a===li)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===$o)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=li){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h;let _,g;if(a===li)_=(o+s)*u,g=-2*u;else if(a===$o)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ss=new P,Nn=new Ut,t0=new P(0,0,0),e0=new P(1,1,1),yi=new P,so=new P,pn=new P,Eh=new Ut,bh=new he;class Te{constructor(t=0,e=0,n=0,i=Te.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Te.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let n0=0;const Ah=new P,ws=new he,ei=new Ut,ro=new P,fr=new P,i0=new P,s0=new he,Ch=new P(1,0,0),Rh=new P(0,1,0),Ph=new P(0,0,1),Dh={type:"added"},r0={type:"removed"},Ts={type:"childadded",child:null},ba={type:"childremoved",child:null};class Le extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new P,e=new Te,n=new he,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Vt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Rh,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Ah.copy(t).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Rh,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ro.copy(t):ro.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(fr,ro,this.up):ei.lookAt(ro,fr,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(ei),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(r0),ba.child=t,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,i0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,s0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new P,ni=new P,Aa=new P,ii=new P,Es=new P,bs=new P,Ih=new P,Ca=new P,Ra=new P,Pa=new P,Da=new ce,Ia=new ce,La=new ce;class Bn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fn.subVectors(t,e),i.cross(Fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Fn.subVectors(i,e),ni.subVectors(n,e),Aa.subVectors(t,e);const o=Fn.dot(Fn),a=Fn.dot(ni),l=Fn.dot(Aa),c=ni.dot(ni),h=ni.dot(Aa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Da.setScalar(0),Ia.setScalar(0),La.setScalar(0),Da.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),La.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Da,s.x),o.addScaledVector(Ia,s.y),o.addScaledVector(La,s.z),o}static isFrontFacing(t,e,n,i){return Fn.subVectors(n,e),ni.subVectors(t,e),Fn.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Fn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Es.subVectors(i,n),bs.subVectors(s,n),Ca.subVectors(t,n);const l=Es.dot(Ca),c=bs.dot(Ca);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,i);const h=Es.dot(Ra),u=bs.dot(Ra);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Es,o);Pa.subVectors(t,s);const f=Es.dot(Pa),_=bs.dot(Pa);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(bs,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Ih.subVectors(s,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(Ih,a);const p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Es,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Ua(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Pc(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ua(o,s,t+1/3),this.g=Ua(o,s,t),this.b=Ua(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Jt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ze(Ve.r*255,0,255))*65536+Math.round(ze(Ve.g*255,0,255))*256+Math.round(ze(Ve.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,s=Ve.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=$e){Jt.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(oo);const n=Dr(Si.h,oo.h,e),i=Dr(Si.s,oo.s,e),s=Dr(Si.l,oo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new St;St.NAMES=nf;let o0=0;class ps extends ir{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=sr(),this.name="",this.blending=Gs,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pl&&(n.blendSrc=this.blendSrc),this.blendDst!==ml&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ni extends ps{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new P,ao=new ot;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mh&&(t.usage=this.usage),t}}class sf extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rf extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ot extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let a0=0;const bn=new Ut,Na=new Le,As=new P,mn=new ds,pr=new ds,Fe=new P;class ie extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qd(t)?rf:sf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(mn.min,pr.min),mn.expandByPoint(Fe),Fe.addVectors(mn.max,pr.max),mn.expandByPoint(Fe)):(mn.expandByPoint(pr.min),mn.expandByPoint(pr.max))}mn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(t,c),Fe.add(As)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new P,l[b]=new P;const c=new P,h=new P,u=new P,d=new ot,f=new ot,_=new ot,g=new P,m=new P;function p(b,y,S){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,b),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const C=1/(f.x*_.y-_.x*f.y);isFinite(C)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(C),a[b].add(g),a[y].add(g),a[S].add(g),l[b].add(m),l[y].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let b=0,y=x.length;b<y;++b){const S=x[b],C=S.start,I=S.count;for(let L=C,U=C+I;L<U;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const M=new P,v=new P,w=new P,T=new P;function E(b){w.fromBufferAttribute(i,b),T.copy(w);const y=a[b];M.copy(y),M.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(T,y);const C=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,C)}for(let b=0,y=x.length;b<y;++b){const S=x[b],C=S.start,I=S.count;for(let L=C,U=C+I;L<U;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ie,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Ut,Yi=new sa,lo=new fs,Uh=new P,co=new P,ho=new P,uo=new P,Fa=new P,fo=new P,Nh=new P,po=new P;class $ extends Le{constructor(t=new ie,e=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Fa.fromBufferAttribute(u,t),o?fo.addScaledVector(Fa,h):fo.addScaledVector(Fa.sub(e),h))}e.add(fo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),Yi.copy(t.ray).recast(t.near),!(lo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(lo,Uh)===null||Yi.origin.distanceToSquared(Uh)>(t.far-t.near)**2))&&(Lh.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=M;v<w;v+=3){const T=a.getX(v),E=a.getX(v+1),b=a.getX(v+2);i=mo(this,p,t,n,c,h,u,T,E,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=mo(this,o,t,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=M;v<w;v+=3){const T=v,E=v+1,b=v+2;i=mo(this,p,t,n,c,h,u,T,E,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=m,M=m+1,v=m+2;i=mo(this,o,t,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function l0(r,t,e,n,i,s,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ki,a),l===null)return null;po.copy(a),po.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:r}}function mo(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,co),r.getVertexPosition(l,ho),r.getVertexPosition(c,uo);const h=l0(r,t,e,n,co,ho,uo,Nh);if(h){const u=new P;Bn.getBarycoord(Nh,co,ho,uo,u),i&&(h.uv=Bn.getInterpolatedAttribute(i,a,l,c,u,new ot)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,a,l,c,u,new ot)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Bn.getNormal(co,ho,uo,d.normal),h.face=d,h.barycoord=u}return h}class yt extends ie{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function _(g,m,p,x,M,v,w,T,E,b,y){const S=v/E,C=w/b,I=v/2,L=w/2,U=T/2,B=E+1,k=b+1;let X=0,G=0;const et=new P;for(let at=0;at<k;at++){const _t=at*C-L;for(let Pt=0;Pt<B;Pt++){const $t=Pt*S-I;et[g]=$t*x,et[m]=_t*M,et[p]=U,c.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[p]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(Pt/E),u.push(1-at/b),X+=1}}for(let at=0;at<b;at++)for(let _t=0;_t<E;_t++){const Pt=d+_t+B*at,$t=d+_t+B*(at+1),Y=d+(_t+1)+B*(at+1),K=d+(_t+1)+B*at;l.push(Pt,$t,K),l.push($t,Y,K),G+=6}a.addGroup(f,G,y),f+=G,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function tn(r){const t={};for(let e=0;e<r.length;e++){const n=tr(r[e]);for(const i in n)t[i]=n[i]}return t}function c0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function of(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const qr={clone:tr,merge:tn};var h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends ps{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=c0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class af extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new P,Fh=new ot,Oh=new ot;class _n extends af{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Fh,Oh),e.subVectors(Oh,Fh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Rs=1;class d0 extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(Cs,Rs,t,e);i.layers=this.layers,this.add(i);const s=new _n(Cs,Rs,t,e);s.layers=this.layers,this.add(s);const o=new _n(Cs,Rs,t,e);o.layers=this.layers,this.add(o);const a=new _n(Cs,Rs,t,e);a.layers=this.layers,this.add(a);const l=new _n(Cs,Rs,t,e);l.layers=this.layers,this.add(l);const c=new _n(Cs,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class lf extends je{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ks,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class f0 extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yt(5,5,5),s=new be({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:hi});s.uniforms.tEquirect.value=e;const o=new $(i,s),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Yn),new d0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Oa=new P,p0=new P,m0=new Vt;class Ji{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Oa.subVectors(n,e).cross(p0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||m0.getNormalMatrix(t),i=this.coplanarPoint(Oa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new fs,go=new P;class Ic{constructor(t=new Ji,e=new Ji,n=new Ji,i=new Ji,s=new Ji,o=new Ji){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],x=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+h,m+_,v+x).normalize(),n[3].setComponents(l-o,d-h,m-_,v-x).normalize(),n[4].setComponents(l-a,d-u,m-g,v-M).normalize(),e===li)n[5].setComponents(l+a,d+u,m+g,v+M).normalize();else if(e===$o)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(go.x=i.normal.x>0?t.max.x:t.min.x,go.y=i.normal.y>0?t.max.y:t.min.y,go.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cf(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function g0(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class cs extends ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let M=0;M<c;M++){const v=M*u-s;_.push(v,-x,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,v=x+c*(p+1),w=x+1+c*(p+1),T=x+1+c*p;f.push(M,v,T),f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,__=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:_0,alphahash_pars_fragment:v0,alphamap_fragment:x0,alphamap_pars_fragment:M0,alphatest_fragment:y0,alphatest_pars_fragment:S0,aomap_fragment:w0,aomap_pars_fragment:T0,batching_pars_vertex:E0,batching_vertex:b0,begin_vertex:A0,beginnormal_vertex:C0,bsdfs:R0,iridescence_fragment:P0,bumpmap_pars_fragment:D0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:N0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:z0,color_vertex:B0,common:k0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:H0,displacementmap_pars_vertex:V0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:Y0,colorspace_pars_fragment:$0,envmap_fragment:Z0,envmap_common_pars_fragment:K0,envmap_pars_fragment:j0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:cg,envmap_vertex:Q0,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:_g,lights_fragment_end:vg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:Mg,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:Sg,map_fragment:wg,map_pars_fragment:Tg,map_particle_fragment:Eg,map_particle_pars_fragment:bg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Rg,morphcolor_vertex:Pg,morphnormal_vertex:Dg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Lg,normal_fragment_begin:Ug,normal_fragment_maps:Ng,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:zg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Vg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:$g,dithering_pars_fragment:Zg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:t_,shadowmask_pars_fragment:e_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:o_,specularmap_pars_fragment:a_,tonemapping_fragment:l_,tonemapping_pars_fragment:c_,transmission_fragment:h_,transmission_pars_fragment:u_,uv_pars_fragment:d_,uv_pars_vertex:f_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:__,backgroundCube_vert:v_,backgroundCube_frag:x_,cube_vert:M_,cube_frag:y_,depth_vert:S_,depth_frag:w_,distanceRGBA_vert:T_,distanceRGBA_frag:E_,equirect_vert:b_,equirect_frag:A_,linedashed_vert:C_,linedashed_frag:R_,meshbasic_vert:P_,meshbasic_frag:D_,meshlambert_vert:I_,meshlambert_frag:L_,meshmatcap_vert:U_,meshmatcap_frag:N_,meshnormal_vert:F_,meshnormal_frag:O_,meshphong_vert:z_,meshphong_frag:B_,meshphysical_vert:k_,meshphysical_frag:G_,meshtoon_vert:H_,meshtoon_frag:V_,points_vert:W_,points_frag:X_,shadow_vert:q_,shadow_frag:Y_,sprite_vert:$_,sprite_frag:Z_},ht={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:tn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new St(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:tn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:tn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:tn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new St(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:tn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:tn([ht.points,ht.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:tn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:tn([ht.common,ht.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:tn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:tn([ht.sprite,ht.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:tn([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:tn([ht.lights,ht.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const _o={r:0,b:0,g:0},Zi=new Te,K_=new Ut;function j_(r,t,e,n,i,s,o){const a=new St(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function g(x){let M=!1;const v=_(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,M){const v=_(M);v&&(v.isCubeTexture||v.mapping===na)?(h===void 0&&(h=new $(new yt(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:tr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Zi.copy(M.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(Zi)),h.material.toneMapped=Jt.getTransfer(v.colorSpace)!==oe,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $(new cs(2,2),new be({name:"BackgroundMaterial",uniforms:tr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(_o,of(r)),n.buffers.color.setClear(_o.r,_o.g,_o.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:g,addToRenderList:m}}function J_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,C,I,L,U){let B=!1;const k=u(L,I,C);s!==k&&(s=k,c(s.object)),B=f(S,L,I,U),B&&_(S,L,I,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(S,C,I,L),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,C,I){const L=I.wireframe===!0;let U=n[S.id];U===void 0&&(U={},n[S.id]=U);let B=U[C.id];B===void 0&&(B={},U[C.id]=B);let k=B[L];return k===void 0&&(k=d(l()),B[L]=k),k}function d(S){const C=[],I=[],L=[];for(let U=0;U<e;U++)C[U]=0,I[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,C,I,L){const U=s.attributes,B=C.attributes;let k=0;const X=I.getAttributes();for(const G in X)if(X[G].location>=0){const at=U[G];let _t=B[G];if(_t===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function _(S,C,I,L){const U={},B=C.attributes;let k=0;const X=I.getAttributes();for(const G in X)if(X[G].location>=0){let at=B[G];at===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),U[G]=_t,k++}s.attributes=U,s.attributesNum=k,s.index=L}function g(){const S=s.newAttributes;for(let C=0,I=S.length;C<I;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const I=s.newAttributes,L=s.enabledAttributes,U=s.attributeDivisors;I[S]=1,L[S]===0&&(r.enableVertexAttribArray(S),L[S]=1),U[S]!==C&&(r.vertexAttribDivisor(S,C),U[S]=C)}function x(){const S=s.newAttributes,C=s.enabledAttributes;for(let I=0,L=C.length;I<L;I++)C[I]!==S[I]&&(r.disableVertexAttribArray(I),C[I]=0)}function M(S,C,I,L,U,B,k){k===!0?r.vertexAttribIPointer(S,C,I,U,B):r.vertexAttribPointer(S,C,I,L,U,B)}function v(S,C,I,L){g();const U=L.attributes,B=I.getAttributes(),k=C.defaultAttributeValues;for(const X in B){const G=B[X];if(G.location>=0){let et=U[X];if(et===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const at=et.normalized,_t=et.itemSize,Pt=t.get(et);if(Pt===void 0)continue;const $t=Pt.buffer,Y=Pt.type,K=Pt.bytesPerElement,st=Y===r.INT||Y===r.UNSIGNED_INT||et.gpuType===wc;if(et.isInterleavedBufferAttribute){const J=et.data,wt=J.stride,Rt=et.offset;if(J.isInstancedInterleavedBuffer){for(let nt=0;nt<G.locationSize;nt++)p(G.location+nt,J.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let nt=0;nt<G.locationSize;nt++)m(G.location+nt);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let nt=0;nt<G.locationSize;nt++)M(G.location+nt,_t/G.locationSize,Y,at,wt*K,(Rt+_t/G.locationSize*nt)*K,st)}else{if(et.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)p(G.location+J,et.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let J=0;J<G.locationSize;J++)M(G.location+J,_t/G.locationSize,Y,at,_t*K,_t/G.locationSize*J*K,st)}}else if(k!==void 0){const at=k[X];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(G.location,at);break;case 3:r.vertexAttrib3fv(G.location,at);break;case 4:r.vertexAttrib4fv(G.location,at);break;default:r.vertexAttrib1fv(G.location,at)}}}}x()}function w(){b();for(const S in n){const C=n[S];for(const I in C){const L=C[I];for(const U in L)h(L[U].object),delete L[U];delete C[I]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const I in C){const L=C[I];for(const U in L)h(L[U].object),delete L[U];delete C[I]}delete n[S.id]}function E(S){for(const C in n){const I=n[C];if(I[S.id]===void 0)continue;const L=I[S.id];for(const U in L)h(L[U].object),delete L[U];delete I[S.id]}}function b(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Q_(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==kn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==pi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$n&&!b)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:T}}function ev(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ji,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=h(_,d,M,f);for(let w=0;w!==M;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==g;++M,v+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function nv(r){let t=new WeakMap;function e(o,a){return a===qo?o.mapping=Ks:a===wl&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qo||a===wl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new f0(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Lc extends af{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,zh=[.125,.215,.35,.446,.526,.582],es=20,za=new Lc,Bh=new St;let Ba=null,ka=0,Ga=0,Ha=!1;const Qi=(1+Math.sqrt(5))/2,Ps=1/Qi,kh=[new P(-Qi,Ps,0),new P(Qi,Ps,0),new P(-Ps,0,Qi),new P(Ps,0,Qi),new P(0,Qi,-Ps),new P(0,Qi,Ps),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,ka,Ga),this._renderer.xr.enabled=Ha,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Zn,format:kn,colorSpace:nr,depthBuffer:!1},i=Hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(s)),this._blurMaterial=sv(s,t,e)}return i}_compileMaterial(t){const e=new $(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,i){const a=new _n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Ui,h.autoClear=!1;const f=new Ni({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new $(new yt,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Bh),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;vo(i,x*M,p>2?M:0,M,M),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ks||t.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;vo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=kh[(i-s-1)%kh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*es-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):es;m>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const p=[];let x=0;for(let E=0;E<es;++E){const b=E/g,y=Math.exp(-b*b/2);p.push(y),E===0?x+=y:E<m&&(x+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const v=this._sizeLods[i],w=3*v*(i>M-Ns?i-M+Ns:0),T=4*(this._cubeSize-v);vo(e,w,T,3*v,2*v),l.setRenderTarget(e),l.render(u,za)}}function iv(r){const t=[],e=[],n=[];let i=r;const s=r-Ns+1+zh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ns?l=zh[o-r+Ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*f),M=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,b=T>2?0:-1,y=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];x.set(y,g*_*T),M.set(d,m*_*T);const S=[T,T,T,T,T,T];v.set(S,p*_*T)}const w=new ie;w.setAttribute("position",new Ie(x,g)),w.setAttribute("uv",new Ie(M,m)),w.setAttribute("faceIndex",new Ie(v,p)),t.push(w),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hh(r,t,e){const n=new Dn(r,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function sv(r,t,e){const n=new Float32Array(es),i=new P(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Vh(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Wh(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rv(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qo||l===wl,h=l===Ks||l===js;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Gh(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Gh(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ov(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function av(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let M=0,v=x.length;M<v;M+=3){const w=x[M+0],T=x[M+1],E=x[M+2];d.push(w,T,T,E,E,w)}}else if(_!==void 0){const x=_.array;g=_.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const w=M+0,T=M+1,E=M+2;d.push(w,T,T,E,E,w)}}else return;const m=new(Qd(d)?rf:sf)(d,1);m.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lv(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=f[x]*g[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hv(r,t,e){const n=new WeakMap,i=new ce;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const E=new Float32Array(w*T*4*u),b=new ef(E,w,T,u);b.type=$n,b.needsUpdate=!0;const y=v*4;for(let C=0;C<u;C++){const I=p[C],L=x[C],U=M[C],B=w*T*4*C;for(let k=0;k<I.count;k++){const X=k*y;_===!0&&(i.fromBufferAttribute(I,k),E[B+X+0]=i.x,E[B+X+1]=i.y,E[B+X+2]=i.z,E[B+X+3]=0),g===!0&&(i.fromBufferAttribute(L,k),E[B+X+4]=i.x,E[B+X+5]=i.y,E[B+X+6]=i.z,E[B+X+7]=0),m===!0&&(i.fromBufferAttribute(U,k),E[B+X+8]=i.x,E[B+X+9]=i.y,E[B+X+10]=i.z,E[B+X+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:b,size:new ot(w,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function uv(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class hf extends je{constructor(t,e,n,i,s,o,a,l,c,h=Hs){if(h!==Hs&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hs&&(n=hs),n===void 0&&h===Qs&&(n=Js),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uf=new je,Xh=new hf(1,1),df=new ef,ff=new Jm,pf=new lf,qh=[],Yh=[],$h=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);function rr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=qh[i];if(s===void 0&&(s=new Float32Array(i),qh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ue(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ne(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ra(r,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function dv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function fv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2fv(this.addr,t),Ne(e,t)}}function pv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;r.uniform3fv(this.addr,t),Ne(e,t)}}function mv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4fv(this.addr,t),Ne(e,t)}}function gv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Kh.set(n),r.uniformMatrix2fv(this.addr,!1,Kh),Ne(e,n)}}function _v(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Zh.set(n),r.uniformMatrix3fv(this.addr,!1,Zh),Ne(e,n)}}function vv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;$h.set(n),r.uniformMatrix4fv(this.addr,!1,$h),Ne(e,n)}}function xv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Mv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2iv(this.addr,t),Ne(e,t)}}function yv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;r.uniform3iv(this.addr,t),Ne(e,t)}}function Sv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4iv(this.addr,t),Ne(e,t)}}function wv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Tv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2uiv(this.addr,t),Ne(e,t)}}function Ev(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;r.uniform3uiv(this.addr,t),Ne(e,t)}}function bv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4uiv(this.addr,t),Ne(e,t)}}function Av(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Xh.compareFunction=Jd,s=Xh):s=uf,e.setTexture2D(t||s,i)}function Cv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ff,i)}function Rv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pf,i)}function Pv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||df,i)}function Dv(r){switch(r){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return _v;case 35676:return vv;case 5124:case 35670:return xv;case 35667:case 35671:return Mv;case 35668:case 35672:return yv;case 35669:case 35673:return Sv;case 5125:return wv;case 36294:return Tv;case 36295:return Ev;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Iv(r,t){r.uniform1fv(this.addr,t)}function Lv(r,t){const e=rr(t,this.size,2);r.uniform2fv(this.addr,e)}function Uv(r,t){const e=rr(t,this.size,3);r.uniform3fv(this.addr,e)}function Nv(r,t){const e=rr(t,this.size,4);r.uniform4fv(this.addr,e)}function Fv(r,t){const e=rr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Ov(r,t){const e=rr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function zv(r,t){const e=rr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Bv(r,t){r.uniform1iv(this.addr,t)}function kv(r,t){r.uniform2iv(this.addr,t)}function Gv(r,t){r.uniform3iv(this.addr,t)}function Hv(r,t){r.uniform4iv(this.addr,t)}function Vv(r,t){r.uniform1uiv(this.addr,t)}function Wv(r,t){r.uniform2uiv(this.addr,t)}function Xv(r,t){r.uniform3uiv(this.addr,t)}function qv(r,t){r.uniform4uiv(this.addr,t)}function Yv(r,t,e){const n=this.cache,i=t.length,s=ra(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uf,s[o])}function $v(r,t,e){const n=this.cache,i=t.length,s=ra(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ff,s[o])}function Zv(r,t,e){const n=this.cache,i=t.length,s=ra(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pf,s[o])}function Kv(r,t,e){const n=this.cache,i=t.length,s=ra(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||df,s[o])}function jv(r){switch(r){case 5126:return Iv;case 35664:return Lv;case 35665:return Uv;case 35666:return Nv;case 35674:return Fv;case 35675:return Ov;case 35676:return zv;case 5124:case 35670:return Bv;case 35667:case 35671:return kv;case 35668:case 35672:return Gv;case 35669:case 35673:return Hv;case 5125:return Vv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Kv}}class Jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dv(e.type)}}class Qv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jv(e.type)}}class tx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function jh(r,t){r.seq.push(t),r.map[t.id]=t}function ex(r,t,e){const n=r.name,i=n.length;for(Va.lastIndex=0;;){const s=Va.exec(n),o=Va.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jh(e,c===void 0?new Jv(a,r,t):new Qv(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new tx(a),jh(e,u)),e=u}}}class Fo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ex(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Jh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const nx=37297;let ix=0;function sx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qh=new Vt;function rx(r){Jt._getMatrix(Qh,Jt.workingColorSpace,r);const t=`mat3( ${Qh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(r)){case ia:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function tu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+sx(r.getShaderSource(t),o)}else return i}function ox(r,t){const e=rx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ax(r,t){let e;switch(t){case Fd:e="Linear";break;case Od:e="Reinhard";break;case zd:e="Cineon";break;case Sc:e="ACESFilmic";break;case Bd:e="AgX";break;case kd:e="Neutral";break;case gm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xo=new P;function lx(){Jt.getLuminanceCoefficients(xo);const r=xo.x.toFixed(4),t=xo.y.toFixed(4),e=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function hx(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ux(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function wr(r){return r!==""}function eu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(r){return r.replace(dx,px)}const fx=new Map;function px(r,t){let e=qt[t];if(e===void 0){const n=fx.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}const mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(r){return r.replace(mx,gx)}function gx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function su(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _x(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function vx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ks:case js:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function Mx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Nd:t="ENVMAP_BLENDING_MULTIPLY";break;case pm:t="ENVMAP_BLENDING_MIX";break;case mm:t="ENVMAP_BLENDING_ADD";break}return t}function yx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sx(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=_x(e),c=vx(e),h=xx(e),u=Mx(e),d=yx(e),f=cx(e),_=hx(s),g=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ui?ax("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,ox("linearToOutputTexel",e.outputColorSpace),lx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),o=jl(o),o=eu(o,e),o=nu(o,e),a=jl(a),a=eu(a,e),a=nu(a,e),o=iu(o),a=iu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,v=x+p+a,w=Jh(i,i.VERTEX_SHADER,M),T=Jh(i,i.FRAGMENT_SHADER,v);i.attachShader(g,w),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(C){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(T).trim();let B=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,T);else{const X=tu(i,w,"vertex"),G=tu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+X+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||U==="")&&(k=!1);k&&(C.diagnostics={runnable:B,programLog:I,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(w),i.deleteShader(T),b=new Fo(i,g),y=ux(i,g)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,nx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ix++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=T,this}let wx=0;class Tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ex(t),e.set(t,n)),n}}class Ex{constructor(t){this.id=wx++,this.code=t,this.usedTimes=0}}function bx(r,t,e,n,i,s,o){const a=new Dc,l=new Tx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,C,I,L){const U=I.fog,B=L.geometry,k=y.isMeshStandardMaterial?I.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),G=X&&X.mapping===na?X.image.height:null,et=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const at=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=at!==void 0?at.length:0;let Pt=0;B.morphAttributes.position!==void 0&&(Pt=1),B.morphAttributes.normal!==void 0&&(Pt=2),B.morphAttributes.color!==void 0&&(Pt=3);let $t,Y,K,st;if(et){const se=Vn[et];$t=se.vertexShader,Y=se.fragmentShader}else $t=y.vertexShader,Y=y.fragmentShader,l.update(y),K=l.getVertexShaderID(y),st=l.getFragmentShaderID(y);const J=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Rt=L.isInstancedMesh===!0,nt=L.isBatchedMesh===!0,ct=!!y.map,mt=!!y.matcap,Wt=!!X,N=!!y.aoMap,ke=!!y.lightMap,Bt=!!y.bumpMap,Zt=!!y.normalMap,Dt=!!y.displacementMap,le=!!y.emissiveMap,It=!!y.metalnessMap,D=!!y.roughnessMap,A=y.anisotropy>0,H=y.clearcoat>0,Q=y.dispersion>0,it=y.iridescence>0,j=y.sheen>0,At=y.transmission>0,dt=A&&!!y.anisotropyMap,vt=H&&!!y.clearcoatMap,Qt=H&&!!y.clearcoatNormalMap,rt=H&&!!y.clearcoatRoughnessMap,xt=it&&!!y.iridescenceMap,Lt=it&&!!y.iridescenceThicknessMap,Nt=j&&!!y.sheenColorMap,Mt=j&&!!y.sheenRoughnessMap,jt=!!y.specularMap,Xt=!!y.specularColorMap,pe=!!y.specularIntensityMap,F=At&&!!y.transmissionMap,ut=At&&!!y.thicknessMap,Z=!!y.gradientMap,tt=!!y.alphaMap,gt=y.alphaTest>0,ft=!!y.alphaHash,kt=!!y.extensions;let we=Ui;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(we=r.toneMapping);const Ge={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:Y,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:st,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:nt,batchingColor:nt&&L._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&L.instanceColor!==null,instancingMorph:Rt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:nr,alphaToCoverage:!!y.alphaToCoverage,map:ct,matcap:mt,envMap:Wt,envMapMode:Wt&&X.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:ke,bumpMap:Bt,normalMap:Zt,displacementMap:d&&Dt,emissiveMap:le,normalMapObjectSpace:Zt&&y.normalMapType===Mm,normalMapTangentSpace:Zt&&y.normalMapType===jd,metalnessMap:It,roughnessMap:D,anisotropy:A,anisotropyMap:dt,clearcoat:H,clearcoatMap:vt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:it,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:j,sheenColorMap:Nt,sheenRoughnessMap:Mt,specularMap:jt,specularColorMap:Xt,specularIntensityMap:pe,transmission:At,transmissionMap:F,thicknessMap:ut,gradientMap:Z,opaque:y.transparent===!1&&y.blending===Gs&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:ft,combine:y.combine,mapUv:ct&&g(y.map.channel),aoMapUv:N&&g(y.aoMap.channel),lightMapUv:ke&&g(y.lightMap.channel),bumpMapUv:Bt&&g(y.bumpMap.channel),normalMapUv:Zt&&g(y.normalMap.channel),displacementMapUv:Dt&&g(y.displacementMap.channel),emissiveMapUv:le&&g(y.emissiveMap.channel),metalnessMapUv:It&&g(y.metalnessMap.channel),roughnessMapUv:D&&g(y.roughnessMap.channel),anisotropyMapUv:dt&&g(y.anisotropyMap.channel),clearcoatMapUv:vt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(y.sheenRoughnessMap.channel),specularMapUv:jt&&g(y.specularMap.channel),specularColorMapUv:Xt&&g(y.specularColorMap.channel),specularIntensityMapUv:pe&&g(y.specularIntensityMap.channel),transmissionMapUv:F&&g(y.transmissionMap.channel),thicknessMapUv:ut&&g(y.thicknessMap.channel),alphaMapUv:tt&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Zt||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(ct||tt),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:ct&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===oe,decodeVideoTextureEmissive:le&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ee,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&y.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(x(S,y),M(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const S=_[y.type];let C;if(S){const I=Vn[S];C=qr.clone(I.uniforms)}else C=y.uniforms;return C}function w(y,S){let C;for(let I=0,L=h.length;I<L;I++){const U=h[I];if(U.cacheKey===S){C=U,++C.usedTimes;break}}return C===void 0&&(C=new Sx(r,S,y,s),h.push(C)),C}function T(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:b}}function Ax(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Cx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ru(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ou(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Cx),n.length>1&&n.sort(d||ru),i.length>1&&i.sort(d||ru)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Rx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ou,r.set(n,[o])):i>=s.length?(o=new ou,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Px(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new St};break;case"SpotLight":e={position:new P,direction:new P,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function Dx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Ix=0;function Lx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ux(r){const t=new Px,e=Dx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new Ut,o=new Ut;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,x=0,M=0,v=0,w=0,T=0,E=0;c.sort(Lx);for(let y=0,S=c.length;y<S;y++){const C=c[y],I=C.color,L=C.intensity,U=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*L,u+=I.g*L,d+=I.b*L;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],L);E++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,G=e.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=C.shadow.matrix,x++}n.directional[f]=k,f++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(I).multiplyScalar(L),k.distance=U,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[g]=k;const X=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,X.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[g]=X.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=B,v++}g++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(I).multiplyScalar(L),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const X=C.shadow,G=e.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=C.shadow.matrix,M++}n.point[_]=k,_++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(L),k.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==f||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==x||b.numPointShadows!==M||b.numSpotShadows!==v||b.numSpotMaps!==w||b.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,b.directionalLength=f,b.pointLength=_,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=x,b.numPointShadows=M,b.numSpotShadows=v,b.numSpotMaps=w,b.numLightProbes=E,n.version=Ix++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function au(r){const t=new Ux(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Nx(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new au(r),t.set(i,[a])):s>=o.length?(a=new au(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Fx extends ps{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ox extends ps{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kx(r,t,e){let n=new Ic;const i=new ot,s=new ot,o=new ce,a=new Fx({depthPacking:xm}),l=new Ox,c={},h=e.maxTextureSize,u={[ki]:sn,[sn]:ki,[Ee]:Ee},d=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:zx,fragmentShader:Bx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ie;_.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let p=this.type;this.render=function(T,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=r.getRenderTarget(),S=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),I=r.state;I.setBlending(hi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=p!==ri&&this.type===ri,U=p===ri&&this.type!==ri;for(let B=0,k=T.length;B<k;B++){const X=T[B],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const et=G.getFrameExtents();if(i.multiply(et),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,G.mapSize.y=s.y)),G.map===null||L===!0||U===!0){const _t=this.type!==ri?{minFilter:Sn,magFilter:Sn}:{};G.map!==null&&G.map.dispose(),G.map=new Dn(i.x,i.y,_t),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const at=G.getViewportCount();for(let _t=0;_t<at;_t++){const Pt=G.getViewport(_t);o.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),I.viewport(o),G.updateMatrices(X,_t),n=G.getFrustum(),v(E,b,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===ri&&x(G,b),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,S,C)};function x(T,E){const b=t.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Dn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,b,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,b,f,g,null)}function M(T,E,b,y){let S=null;const C=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=b.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=S.uuid,L=E.uuid;let U=c[I];U===void 0&&(U={},c[I]=U);let B=U[L];B===void 0&&(B=S.clone(),U[L]=B,E.addEventListener("dispose",w)),S=B}if(S.visible=E.visible,S.wireframe=E.wireframe,y===ri?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=r.properties.get(S);I.light=b}return S}function v(T,E,b,y,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const L=t.update(T),U=T.material;if(Array.isArray(U)){const B=L.groups;for(let k=0,X=B.length;k<X;k++){const G=B[k],et=U[G.materialIndex];if(et&&et.visible){const at=M(T,et,y,S);T.onBeforeShadow(r,T,E,b,L,at,G),r.renderBufferDirect(b,null,L,at,T,G),T.onAfterShadow(r,T,E,b,L,at,G)}}}else if(U.visible){const B=M(T,U,y,S);T.onBeforeShadow(r,T,E,b,L,B,null),r.renderBufferDirect(b,null,L,B,T,null),T.onAfterShadow(r,T,E,b,L,B,null)}}const I=T.children;for(let L=0,U=I.length;L<U;L++)v(I[L],E,b,y,S)}function w(T){T.target.removeEventListener("dispose",w);for(const b in c){const y=c[b],S=T.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Gx={[gl]:_l,[vl]:yl,[xl]:Sl,[Zs]:Ml,[_l]:gl,[yl]:vl,[Sl]:xl,[Ml]:Zs};function Hx(r,t){function e(){let F=!1;const ut=new ce;let Z=null;const tt=new ce(0,0,0,0);return{setMask:function(gt){Z!==gt&&!F&&(r.colorMask(gt,gt,gt,gt),Z=gt)},setLocked:function(gt){F=gt},setClear:function(gt,ft,kt,we,Ge){Ge===!0&&(gt*=we,ft*=we,kt*=we),ut.set(gt,ft,kt,we),tt.equals(ut)===!1&&(r.clearColor(gt,ft,kt,we),tt.copy(ut))},reset:function(){F=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let F=!1,ut=!1,Z=null,tt=null,gt=null;return{setReversed:function(ft){if(ut!==ft){const kt=t.get("EXT_clip_control");ut?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const we=gt;gt=null,this.setClear(we)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?J(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(ft){Z!==ft&&!F&&(r.depthMask(ft),Z=ft)},setFunc:function(ft){if(ut&&(ft=Gx[ft]),tt!==ft){switch(ft){case gl:r.depthFunc(r.NEVER);break;case _l:r.depthFunc(r.ALWAYS);break;case vl:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case xl:r.depthFunc(r.EQUAL);break;case Ml:r.depthFunc(r.GEQUAL);break;case yl:r.depthFunc(r.GREATER);break;case Sl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=ft}},setLocked:function(ft){F=ft},setClear:function(ft){gt!==ft&&(ut&&(ft=1-ft),r.clearDepth(ft),gt=ft)},reset:function(){F=!1,Z=null,tt=null,gt=null,ut=!1}}}function i(){let F=!1,ut=null,Z=null,tt=null,gt=null,ft=null,kt=null,we=null,Ge=null;return{setTest:function(se){F||(se?J(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(se){ut!==se&&!F&&(r.stencilMask(se),ut=se)},setFunc:function(se,In,jn){(Z!==se||tt!==In||gt!==jn)&&(r.stencilFunc(se,In,jn),Z=se,tt=In,gt=jn)},setOp:function(se,In,jn){(ft!==se||kt!==In||we!==jn)&&(r.stencilOp(se,In,jn),ft=se,kt=In,we=jn)},setLocked:function(se){F=se},setClear:function(se){Ge!==se&&(r.clearStencil(se),Ge=se)},reset:function(){F=!1,ut=null,Z=null,tt=null,gt=null,ft=null,kt=null,we=null,Ge=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,M=null,v=null,w=null,T=null,E=new St(0,0,0),b=0,y=!1,S=null,C=null,I=null,L=null,U=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=X>=2);let et=null,at={};const _t=r.getParameter(r.SCISSOR_BOX),Pt=r.getParameter(r.VIEWPORT),$t=new ce().fromArray(_t),Y=new ce().fromArray(Pt);function K(F,ut,Z,tt){const gt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(F,ft),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<Z;kt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,gt):r.texImage2D(ut+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,gt);return ft}const st={};st[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(Zs),Bt(!1),Zt(uh),J(r.CULL_FACE),N(hi);function J(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function wt(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Rt(F,ut){return u[F]!==ut?(r.bindFramebuffer(F,ut),u[F]=ut,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function nt(F,ut){let Z=f,tt=!1;if(F){Z=d.get(ut),Z===void 0&&(Z=[],d.set(ut,Z));const gt=F.textures;if(Z.length!==gt.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,kt=gt.length;ft<kt;ft++)Z[ft]=r.COLOR_ATTACHMENT0+ft;Z.length=gt.length,tt=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,tt=!0);tt&&r.drawBuffers(Z)}function ct(F){return _!==F?(r.useProgram(F),_=F,!0):!1}const mt={[ts]:r.FUNC_ADD,[jp]:r.FUNC_SUBTRACT,[Jp]:r.FUNC_REVERSE_SUBTRACT};mt[Qp]=r.MIN,mt[tm]=r.MAX;const Wt={[em]:r.ZERO,[nm]:r.ONE,[im]:r.SRC_COLOR,[pl]:r.SRC_ALPHA,[cm]:r.SRC_ALPHA_SATURATE,[am]:r.DST_COLOR,[rm]:r.DST_ALPHA,[sm]:r.ONE_MINUS_SRC_COLOR,[ml]:r.ONE_MINUS_SRC_ALPHA,[lm]:r.ONE_MINUS_DST_COLOR,[om]:r.ONE_MINUS_DST_ALPHA,[hm]:r.CONSTANT_COLOR,[um]:r.ONE_MINUS_CONSTANT_COLOR,[dm]:r.CONSTANT_ALPHA,[fm]:r.ONE_MINUS_CONSTANT_ALPHA};function N(F,ut,Z,tt,gt,ft,kt,we,Ge,se){if(F===hi){g===!0&&(wt(r.BLEND),g=!1);return}if(g===!1&&(J(r.BLEND),g=!0),F!==Kp){if(F!==m||se!==y){if((p!==ts||v!==ts)&&(r.blendEquation(r.FUNC_ADD),p=ts,v=ts),se)switch(F){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qn:r.blendFunc(r.ONE,r.ONE);break;case dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,M=null,w=null,T=null,E.set(0,0,0),b=0,m=F,y=se}return}gt=gt||ut,ft=ft||Z,kt=kt||tt,(ut!==p||gt!==v)&&(r.blendEquationSeparate(mt[ut],mt[gt]),p=ut,v=gt),(Z!==x||tt!==M||ft!==w||kt!==T)&&(r.blendFuncSeparate(Wt[Z],Wt[tt],Wt[ft],Wt[kt]),x=Z,M=tt,w=ft,T=kt),(we.equals(E)===!1||Ge!==b)&&(r.blendColor(we.r,we.g,we.b,Ge),E.copy(we),b=Ge),m=F,y=!1}function ke(F,ut){F.side===Ee?wt(r.CULL_FACE):J(r.CULL_FACE);let Z=F.side===sn;ut&&(Z=!Z),Bt(Z),F.blending===Gs&&F.transparent===!1?N(hi):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const tt=F.stencilWrite;a.setTest(tt),tt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(F){S!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),S=F)}function Zt(F){F!==$p?(J(r.CULL_FACE),F!==C&&(F===uh?r.cullFace(r.BACK):F===Zp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),C=F}function Dt(F){F!==I&&(k&&r.lineWidth(F),I=F)}function le(F,ut,Z){F?(J(r.POLYGON_OFFSET_FILL),(L!==ut||U!==Z)&&(r.polygonOffset(ut,Z),L=ut,U=Z)):wt(r.POLYGON_OFFSET_FILL)}function It(F){F?J(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function D(F){F===void 0&&(F=r.TEXTURE0+B-1),et!==F&&(r.activeTexture(F),et=F)}function A(F,ut,Z){Z===void 0&&(et===null?Z=r.TEXTURE0+B-1:Z=et);let tt=at[Z];tt===void 0&&(tt={type:void 0,texture:void 0},at[Z]=tt),(tt.type!==F||tt.texture!==ut)&&(et!==Z&&(r.activeTexture(Z),et=Z),r.bindTexture(F,ut||st[F]),tt.type=F,tt.texture=ut)}function H(){const F=at[et];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qt(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(F){$t.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),$t.copy(F))}function Mt(F){Y.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function jt(F,ut){let Z=c.get(ut);Z===void 0&&(Z=new WeakMap,c.set(ut,Z));let tt=Z.get(F);tt===void 0&&(tt=r.getUniformBlockIndex(ut,F.name),Z.set(F,tt))}function Xt(F,ut){const tt=c.get(ut).get(F);l.get(ut)!==tt&&(r.uniformBlockBinding(ut,tt,F.__bindingPointIndex),l.set(ut,tt))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,at={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,M=null,v=null,w=null,T=null,E=new St(0,0,0),b=0,y=!1,S=null,C=null,I=null,L=null,U=null,$t.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:wt,bindFramebuffer:Rt,drawBuffers:nt,useProgram:ct,setBlending:N,setMaterial:ke,setFlipSided:Bt,setCullFace:Zt,setLineWidth:Dt,setPolygonOffset:le,setScissorTest:It,activeTexture:D,bindTexture:A,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:xt,texImage3D:Lt,updateUBOMapping:jt,uniformBlockBinding:Xt,texStorage2D:Qt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Nt,viewport:Mt,reset:pe}}function lu(r,t,e,n){const i=Vx(n);switch(e){case Xd:return r*t;case Yd:return r*t;case $d:return r*t*2;case bc:return r*t/i.components*i.byteLength;case Ac:return r*t/i.components*i.byteLength;case Zd:return r*t*2/i.components*i.byteLength;case Cc:return r*t*2/i.components*i.byteLength;case qd:return r*t*3/i.components*i.byteLength;case kn:return r*t*4/i.components*i.byteLength;case Rc:return r*t*4/i.components*i.byteLength;case Do:case Io:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bl:case Cl:return Math.max(r,16)*Math.max(t,8)/4;case El:case Al:return Math.max(r,8)*Math.max(t,8)/2;case Rl:case Pl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Dl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case No:case ql:case Yl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kd:case $l:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Zl:case Kl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vx(r){switch(r){case pi:case Hd:return{byteLength:1,components:1};case Wr:case Vd:case Zn:return{byteLength:2,components:1};case Tc:case Ec:return{byteLength:2,components:4};case hs:case wc:case $n:return{byteLength:4,components:1};case Wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Wx(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,A){return f?new OffscreenCanvas(D,A):Zo("canvas")}function g(D,A,H){let Q=1;const it=It(D);if((it.width>H||it.height>H)&&(Q=H/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(Q*it.width),At=Math.floor(Q*it.height);u===void 0&&(u=_(j,At));const dt=A?_(j,At):u;return dt.width=j,dt.height=At,dt.getContext("2d").drawImage(D,0,0,j,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+At+")."),dt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(D,A,H,Q,it=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=A;if(A===r.RED&&(H===r.FLOAT&&(j=r.R32F),H===r.HALF_FLOAT&&(j=r.R16F),H===r.UNSIGNED_BYTE&&(j=r.R8)),A===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.R8UI),H===r.UNSIGNED_SHORT&&(j=r.R16UI),H===r.UNSIGNED_INT&&(j=r.R32UI),H===r.BYTE&&(j=r.R8I),H===r.SHORT&&(j=r.R16I),H===r.INT&&(j=r.R32I)),A===r.RG&&(H===r.FLOAT&&(j=r.RG32F),H===r.HALF_FLOAT&&(j=r.RG16F),H===r.UNSIGNED_BYTE&&(j=r.RG8)),A===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RG8UI),H===r.UNSIGNED_SHORT&&(j=r.RG16UI),H===r.UNSIGNED_INT&&(j=r.RG32UI),H===r.BYTE&&(j=r.RG8I),H===r.SHORT&&(j=r.RG16I),H===r.INT&&(j=r.RG32I)),A===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGB8UI),H===r.UNSIGNED_SHORT&&(j=r.RGB16UI),H===r.UNSIGNED_INT&&(j=r.RGB32UI),H===r.BYTE&&(j=r.RGB8I),H===r.SHORT&&(j=r.RGB16I),H===r.INT&&(j=r.RGB32I)),A===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),H===r.UNSIGNED_INT&&(j=r.RGBA32UI),H===r.BYTE&&(j=r.RGBA8I),H===r.SHORT&&(j=r.RGBA16I),H===r.INT&&(j=r.RGBA32I)),A===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),A===r.RGBA){const At=it?ia:Jt.getTransfer(Q);H===r.FLOAT&&(j=r.RGBA32F),H===r.HALF_FLOAT&&(j=r.RGBA16F),H===r.UNSIGNED_BYTE&&(j=At===oe?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(D,A){let H;return D?A===null||A===hs||A===Js?H=r.DEPTH24_STENCIL8:A===$n?H=r.DEPTH32F_STENCIL8:A===Wr&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===hs||A===Js?H=r.DEPTH_COMPONENT24:A===$n?H=r.DEPTH_COMPONENT32F:A===Wr&&(H=r.DEPTH_COMPONENT16),H}function w(D,A){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Sn&&D.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){const A=D.target;A.removeEventListener("dispose",T),b(A),A.isVideoTexture&&h.delete(A)}function E(D){const A=D.target;A.removeEventListener("dispose",E),S(A)}function b(D){const A=n.get(D);if(A.__webglInit===void 0)return;const H=D.source,Q=d.get(H);if(Q){const it=Q[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(D),Object.keys(Q).length===0&&d.delete(H)}n.remove(D)}function y(D){const A=n.get(D);r.deleteTexture(A.__webglTexture);const H=D.source,Q=d.get(H);delete Q[A.__cacheKey],o.memory.textures--}function S(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let it=0;it<A.__webglFramebuffer[Q].length;it++)r.deleteFramebuffer(A.__webglFramebuffer[Q][it]);else r.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)r.deleteFramebuffer(A.__webglFramebuffer[Q]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const H=D.textures;for(let Q=0,it=H.length;Q<it;Q++){const j=n.get(H[Q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(D)}let C=0;function I(){C=0}function L(){const D=C;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),C+=1,D}function U(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function B(D,A){const H=n.get(D);if(D.isVideoTexture&&Dt(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,D,A);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+A)}function k(D,A){const H=n.get(D);if(D.version>0&&H.__version!==D.version){Y(H,D,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+A)}function X(D,A){const H=n.get(D);if(D.version>0&&H.__version!==D.version){Y(H,D,A);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+A)}function G(D,A){const H=n.get(D);if(D.version>0&&H.__version!==D.version){K(H,D,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+A)}const et={[Yo]:r.REPEAT,[is]:r.CLAMP_TO_EDGE,[Tl]:r.MIRRORED_REPEAT},at={[Sn]:r.NEAREST,[_m]:r.NEAREST_MIPMAP_NEAREST,[Jr]:r.NEAREST_MIPMAP_LINEAR,[Yn]:r.LINEAR,[_a]:r.LINEAR_MIPMAP_NEAREST,[ss]:r.LINEAR_MIPMAP_LINEAR},_t={[ym]:r.NEVER,[Am]:r.ALWAYS,[Sm]:r.LESS,[Jd]:r.LEQUAL,[wm]:r.EQUAL,[bm]:r.GEQUAL,[Tm]:r.GREATER,[Em]:r.NOTEQUAL};function Pt(D,A){if(A.type===$n&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===_a||A.magFilter===Jr||A.magFilter===ss||A.minFilter===Yn||A.minFilter===_a||A.minFilter===Jr||A.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,et[A.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,et[A.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,et[A.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,at[A.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,at[A.minFilter]),A.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,_t[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Sn||A.minFilter!==Jr&&A.minFilter!==ss||A.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function $t(D,A){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));const Q=A.source;let it=d.get(Q);it===void 0&&(it={},d.set(Q,it));const j=U(A);if(j!==D.__cacheKey){it[j]===void 0&&(it[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[j].usedTimes++;const At=it[D.__cacheKey];At!==void 0&&(it[D.__cacheKey].usedTimes--,At.usedTimes===0&&y(A)),D.__cacheKey=j,D.__webglTexture=it[j].texture}return H}function Y(D,A,H){let Q=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=r.TEXTURE_3D);const it=$t(D,A),j=A.source;e.bindTexture(Q,D.__webglTexture,r.TEXTURE0+H);const At=n.get(j);if(j.version!==At.__version||it===!0){e.activeTexture(r.TEXTURE0+H);const dt=Jt.getPrimaries(Jt.workingColorSpace),vt=A.colorSpace===Ai?null:Jt.getPrimaries(A.colorSpace),Qt=A.colorSpace===Ai||dt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let rt=g(A.image,!1,i.maxTextureSize);rt=le(A,rt);const xt=s.convert(A.format,A.colorSpace),Lt=s.convert(A.type);let Nt=M(A.internalFormat,xt,Lt,A.colorSpace,A.isVideoTexture);Pt(Q,A);let Mt;const jt=A.mipmaps,Xt=A.isVideoTexture!==!0,pe=At.__version===void 0||it===!0,F=j.dataReady,ut=w(A,rt);if(A.isDepthTexture)Nt=v(A.format===Qs,A.type),pe&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Nt,rt.width,rt.height,0,xt,Lt,null));else if(A.isDataTexture)if(jt.length>0){Xt&&pe&&e.texStorage2D(r.TEXTURE_2D,ut,Nt,jt[0].width,jt[0].height);for(let Z=0,tt=jt.length;Z<tt;Z++)Mt=jt[Z],Xt?F&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,xt,Lt,Mt.data):e.texImage2D(r.TEXTURE_2D,Z,Nt,Mt.width,Mt.height,0,xt,Lt,Mt.data);A.generateMipmaps=!1}else Xt?(pe&&e.texStorage2D(r.TEXTURE_2D,ut,Nt,rt.width,rt.height),F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,xt,Lt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Nt,rt.width,rt.height,0,xt,Lt,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Xt&&pe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Nt,jt[0].width,jt[0].height,rt.depth);for(let Z=0,tt=jt.length;Z<tt;Z++)if(Mt=jt[Z],A.format!==kn)if(xt!==null)if(Xt){if(F)if(A.layerUpdates.size>0){const gt=lu(Mt.width,Mt.height,A.format,A.type);for(const ft of A.layerUpdates){const kt=Mt.data.subarray(ft*gt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,ft,Mt.width,Mt.height,1,xt,kt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,rt.depth,xt,Mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Nt,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?F&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,rt.depth,xt,Lt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,Nt,Mt.width,Mt.height,rt.depth,0,xt,Lt,Mt.data)}else{Xt&&pe&&e.texStorage2D(r.TEXTURE_2D,ut,Nt,jt[0].width,jt[0].height);for(let Z=0,tt=jt.length;Z<tt;Z++)Mt=jt[Z],A.format!==kn?xt!==null?Xt?F&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?F&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,xt,Lt,Mt.data):e.texImage2D(r.TEXTURE_2D,Z,Nt,Mt.width,Mt.height,0,xt,Lt,Mt.data)}else if(A.isDataArrayTexture)if(Xt){if(pe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Nt,rt.width,rt.height,rt.depth),F)if(A.layerUpdates.size>0){const Z=lu(rt.width,rt.height,A.format,A.type);for(const tt of A.layerUpdates){const gt=rt.data.subarray(tt*Z/rt.data.BYTES_PER_ELEMENT,(tt+1)*Z/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,xt,Lt,gt)}A.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Lt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,xt,Lt,rt.data);else if(A.isData3DTexture)Xt?(pe&&e.texStorage3D(r.TEXTURE_3D,ut,Nt,rt.width,rt.height,rt.depth),F&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Lt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,xt,Lt,rt.data);else if(A.isFramebufferTexture){if(pe)if(Xt)e.texStorage2D(r.TEXTURE_2D,ut,Nt,rt.width,rt.height);else{let Z=rt.width,tt=rt.height;for(let gt=0;gt<ut;gt++)e.texImage2D(r.TEXTURE_2D,gt,Nt,Z,tt,0,xt,Lt,null),Z>>=1,tt>>=1}}else if(jt.length>0){if(Xt&&pe){const Z=It(jt[0]);e.texStorage2D(r.TEXTURE_2D,ut,Nt,Z.width,Z.height)}for(let Z=0,tt=jt.length;Z<tt;Z++)Mt=jt[Z],Xt?F&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,xt,Lt,Mt):e.texImage2D(r.TEXTURE_2D,Z,Nt,xt,Lt,Mt);A.generateMipmaps=!1}else if(Xt){if(pe){const Z=It(rt);e.texStorage2D(r.TEXTURE_2D,ut,Nt,Z.width,Z.height)}F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Lt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Nt,xt,Lt,rt);m(A)&&p(Q),At.__version=j.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function K(D,A,H){if(A.image.length!==6)return;const Q=$t(D,A),it=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+H);const j=n.get(it);if(it.version!==j.__version||Q===!0){e.activeTexture(r.TEXTURE0+H);const At=Jt.getPrimaries(Jt.workingColorSpace),dt=A.colorSpace===Ai?null:Jt.getPrimaries(A.colorSpace),vt=A.colorSpace===Ai||At===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Qt=A.isCompressedTexture||A.image[0].isCompressedTexture,rt=A.image[0]&&A.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Qt&&!rt?xt[tt]=g(A.image[tt],!0,i.maxCubemapSize):xt[tt]=rt?A.image[tt].image:A.image[tt],xt[tt]=le(A,xt[tt]);const Lt=xt[0],Nt=s.convert(A.format,A.colorSpace),Mt=s.convert(A.type),jt=M(A.internalFormat,Nt,Mt,A.colorSpace),Xt=A.isVideoTexture!==!0,pe=j.__version===void 0||Q===!0,F=it.dataReady;let ut=w(A,Lt);Pt(r.TEXTURE_CUBE_MAP,A);let Z;if(Qt){Xt&&pe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,jt,Lt.width,Lt.height);for(let tt=0;tt<6;tt++){Z=xt[tt].mipmaps;for(let gt=0;gt<Z.length;gt++){const ft=Z[gt];A.format!==kn?Nt!==null?Xt?F&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,ft.width,ft.height,Nt,Mt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,jt,ft.width,ft.height,0,Nt,Mt,ft.data)}}}else{if(Z=A.mipmaps,Xt&&pe){Z.length>0&&ut++;const tt=It(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,Nt,Mt,xt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,xt[tt].width,xt[tt].height,0,Nt,Mt,xt[tt].data);for(let gt=0;gt<Z.length;gt++){const kt=Z[gt].image[tt].image;Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,kt.width,kt.height,Nt,Mt,kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,jt,kt.width,kt.height,0,Nt,Mt,kt.data)}}else{Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Nt,Mt,xt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,Nt,Mt,xt[tt]);for(let gt=0;gt<Z.length;gt++){const ft=Z[gt];Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Nt,Mt,ft.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,jt,Nt,Mt,ft.image[tt])}}}m(A)&&p(r.TEXTURE_CUBE_MAP),j.__version=it.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function st(D,A,H,Q,it,j){const At=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),vt=M(H.internalFormat,At,dt,H.colorSpace),Qt=n.get(A),rt=n.get(H);if(rt.__renderTarget=A,!Qt.__hasExternalTextures){const xt=Math.max(1,A.width>>j),Lt=Math.max(1,A.height>>j);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,j,vt,xt,Lt,A.depth,0,At,dt,null):e.texImage2D(it,j,vt,xt,Lt,0,At,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),Zt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,it,rt.__webglTexture,0,Bt(A)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,it,rt.__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function J(D,A,H){if(r.bindRenderbuffer(r.RENDERBUFFER,D),A.depthBuffer){const Q=A.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,j=v(A.stencilBuffer,it),At=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=Bt(A);Zt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,j,A.width,A.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,j,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,j,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,D)}else{const Q=A.textures;for(let it=0;it<Q.length;it++){const j=Q[it],At=s.convert(j.format,j.colorSpace),dt=s.convert(j.type),vt=M(j.internalFormat,At,dt,j.colorSpace),Qt=Bt(A);H&&Zt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,vt,A.width,A.height):Zt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt,vt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,vt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(A.depthTexture);Q.__renderTarget=A,(!Q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const it=Q.__webglTexture,j=Bt(A);if(A.depthTexture.format===Hs)Zt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(A.depthTexture.format===Qs)Zt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Rt(D){const A=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){const it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=Q}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");wt(A.__webglFramebuffer,D)}else if(H){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=r.createRenderbuffer(),J(A.__webglDepthbuffer[Q],D,!1);else{const it=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,j)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),J(A.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,it)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(D,A,H){const Q=n.get(D);A!==void 0&&st(Q.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Rt(D)}function ct(D){const A=D.texture,H=n.get(D),Q=n.get(A);D.addEventListener("dispose",E);const it=D.textures,j=D.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=A.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let vt=0;vt<A.mipmaps.length;vt++)H.__webglFramebuffer[dt][vt]=r.createFramebuffer()}else H.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<A.mipmaps.length;dt++)H.__webglFramebuffer[dt]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(At)for(let dt=0,vt=it.length;dt<vt;dt++){const Qt=n.get(it[dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&Zt(D)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){const vt=it[dt];H.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const Qt=s.convert(vt.format,vt.colorSpace),rt=s.convert(vt.type),xt=M(vt.internalFormat,Qt,rt,vt.colorSpace,D.isXRRenderTarget===!0),Lt=Bt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,xt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),J(H.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,A);for(let dt=0;dt<6;dt++)if(A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)st(H.__webglFramebuffer[dt][vt],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else st(H.__webglFramebuffer[dt],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(A)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,vt=it.length;dt<vt;dt++){const Qt=it[dt],rt=n.get(Qt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),Pt(r.TEXTURE_2D,Qt),st(H.__webglFramebuffer,D,Qt,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,0),m(Qt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(dt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),Pt(dt,A),A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)st(H.__webglFramebuffer[vt],D,A,r.COLOR_ATTACHMENT0,dt,vt);else st(H.__webglFramebuffer,D,A,r.COLOR_ATTACHMENT0,dt,0);m(A)&&p(dt),e.unbindTexture()}D.depthBuffer&&Rt(D)}function mt(D){const A=D.textures;for(let H=0,Q=A.length;H<Q;H++){const it=A[H];if(m(it)){const j=x(D),At=n.get(it).__webglTexture;e.bindTexture(j,At),p(j),e.unbindTexture()}}}const Wt=[],N=[];function ke(D){if(D.samples>0){if(Zt(D)===!1){const A=D.textures,H=D.width,Q=D.height;let it=r.COLOR_BUFFER_BIT;const j=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=n.get(D),dt=A.length>1;if(dt)for(let vt=0;vt<A.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let vt=0;vt<A.length;vt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,At.__webglColorRenderbuffer[vt]);const Qt=n.get(A[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Qt,0)}r.blitFramebuffer(0,0,H,Q,0,0,H,Q,it,r.NEAREST),l===!0&&(Wt.length=0,N.length=0,Wt.push(r.COLOR_ATTACHMENT0+vt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Wt.push(j),N.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<A.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,At.__webglColorRenderbuffer[vt]);const Qt=n.get(A[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Bt(D){return Math.min(i.maxSamples,D.samples)}function Zt(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Dt(D){const A=o.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function le(D,A){const H=D.colorSpace,Q=D.format,it=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==nr&&H!==Ai&&(Jt.getTransfer(H)===oe?(Q!==kn||it!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=nt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Zt}function Xx(r,t){function e(n,i=Ai){let s;const o=Jt.getTransfer(i);if(n===pi)return r.UNSIGNED_BYTE;if(n===Tc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Hd)return r.BYTE;if(n===Vd)return r.SHORT;if(n===Wr)return r.UNSIGNED_SHORT;if(n===wc)return r.INT;if(n===hs)return r.UNSIGNED_INT;if(n===$n)return r.FLOAT;if(n===Zn)return r.HALF_FLOAT;if(n===Xd)return r.ALPHA;if(n===qd)return r.RGB;if(n===kn)return r.RGBA;if(n===Yd)return r.LUMINANCE;if(n===$d)return r.LUMINANCE_ALPHA;if(n===Hs)return r.DEPTH_COMPONENT;if(n===Qs)return r.DEPTH_STENCIL;if(n===bc)return r.RED;if(n===Ac)return r.RED_INTEGER;if(n===Zd)return r.RG;if(n===Cc)return r.RG_INTEGER;if(n===Rc)return r.RGBA_INTEGER;if(n===Do||n===Io||n===Lo||n===Uo)if(o===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Do)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Do)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===bl||n===Al||n===Cl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===El)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Pl||n===Dl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rl||n===Pl)return o===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Dl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Il||n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===zl||n===Bl||n===kl||n===Gl||n===Hl||n===Vl||n===Wl||n===Xl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Il)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===ql||n===Yl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===No)return o===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kd||n===$l||n===Zl||n===Kl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===No)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class qx extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yt extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yx={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new je,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new be({vertexShader:$x,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jx extends ir{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new Kx,m=e.getContextAttributes();let p=null,x=null;const M=[],v=[],w=new ot;let T=null;const E=new _n;E.viewport=new ce;const b=new _n;b.viewport=new ce;const y=[E,b],S=new qx;let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=M[Y];return K===void 0&&(K=new Wa,M[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=M[Y];return K===void 0&&(K=new Wa,M[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=M[Y];return K===void 0&&(K=new Wa,M[Y]=K),K.getHandSpace()};function L(Y){const K=v.indexOf(Y.inputSource);if(K===-1)return;const st=M[K];st!==void 0&&(st.update(Y.inputSource,Y.frame,c||o),st.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",B);for(let Y=0;Y<M.length;Y++){const K=v[Y];K!==null&&(v[Y]=null,M[Y].disconnect(K))}C=null,I=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,x=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",U),i.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Dn(f.framebufferWidth,f.framebufferHeight,{format:kn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,st=null,J=null;m.depth&&(J=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?Qs:Hs,st=m.stencil?Js:hs);const wt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(wt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Dn(d.textureWidth,d.textureHeight,{format:kn,type:pi,depthTexture:new hf(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(Y){for(let K=0;K<Y.removed.length;K++){const st=Y.removed[K],J=v.indexOf(st);J>=0&&(v[J]=null,M[J].disconnect(st))}for(let K=0;K<Y.added.length;K++){const st=Y.added[K];let J=v.indexOf(st);if(J===-1){for(let Rt=0;Rt<M.length;Rt++)if(Rt>=v.length){v.push(st),J=Rt;break}else if(v[Rt]===null){v[Rt]=st,J=Rt;break}if(J===-1)break}const wt=M[J];wt&&wt.connect(st)}}const k=new P,X=new P;function G(Y,K,st){k.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(st.matrixWorld);const J=k.distanceTo(X),wt=K.projectionMatrix.elements,Rt=st.projectionMatrix.elements,nt=wt[14]/(wt[10]-1),ct=wt[14]/(wt[10]+1),mt=(wt[9]+1)/wt[5],Wt=(wt[9]-1)/wt[5],N=(wt[8]-1)/wt[0],ke=(Rt[8]+1)/Rt[0],Bt=nt*N,Zt=nt*ke,Dt=J/(-N+ke),le=Dt*-N;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(le),Y.translateZ(Dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const It=nt+Dt,D=ct+Dt,A=Bt-le,H=Zt+(J-le),Q=mt*ct/D*It,it=Wt*ct/D*It;Y.projectionMatrix.makePerspective(A,H,Q,it,It,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,st=Y.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(st=g.depthFar)),S.near=b.near=E.near=K,S.far=b.far=E.far=st,(C!==S.near||I!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,I=S.far),E.layers.mask=Y.layers.mask|2,b.layers.mask=Y.layers.mask|4,S.layers.mask=E.layers.mask|b.layers.mask;const J=Y.parent,wt=S.cameras;et(S,J);for(let Rt=0;Rt<wt.length;Rt++)et(wt[Rt],J);wt.length===2?G(S,E,b):S.projectionMatrix.copy(E.projectionMatrix),at(Y,S,J)};function at(Y,K,st){st===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(st.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let _t=null;function Pt(Y,K){if(h=K.getViewerPose(c||o),_=K,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let J=!1;st.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let Rt=0;Rt<st.length;Rt++){const nt=st[Rt];let ct=null;if(f!==null)ct=f.getViewport(nt);else{const Wt=u.getViewSubImage(d,nt);ct=Wt.viewport,Rt===0&&(t.setRenderTargetTextures(x,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(x))}let mt=y[Rt];mt===void 0&&(mt=new _n,mt.layers.enable(Rt),mt.viewport=new ce,y[Rt]=mt),mt.matrix.fromArray(nt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(nt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(ct.x,ct.y,ct.width,ct.height),Rt===0&&(S.matrix.copy(mt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),J===!0&&S.cameras.push(mt)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Rt=u.getDepthInformation(st[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(t,Rt,i.renderState)}}for(let st=0;st<M.length;st++){const J=v[st],wt=M[st];J!==null&&wt!==void 0&&wt.update(J,K,c||o)}_t&&_t(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const $t=new cf;$t.setAnimationLoop(Pt),this.setAnimationLoop=function(Y){_t=Y},this.dispose=function(){}}}const Ki=new Te,Jx=new Ut;function Qx(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,of(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Ki.copy(v),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(Ki)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tM(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=i[x.id];v===void 0&&(_(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(x,w);const T=t.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function h(x){const M=u();x.__bindingPointIndex=M;const v=r.createBuffer(),w=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=i[x.id],v=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let T=0,E=v.length;T<E;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,S=b.length;y<S;y++){const C=b[y];if(f(C,T,y,w)===!0){const I=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let B=0;B<L.length;B++){const k=L[B],X=g(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+U,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,M,v,w){const T=x.value,E=M+"_"+v;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:w[E]=T.clone(),!0;{const b=w[E];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return w[E]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function _(x){const M=x.uniforms;let v=0;const w=16;for(let E=0,b=M.length;E<b;E++){const y=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,C=y.length;S<C;S++){const I=y[S],L=Array.isArray(I.value)?I.value:[I.value];for(let U=0,B=L.length;U<B;U++){const k=L[U],X=g(k),G=v%w,et=G%X.boundary,at=G+et;v+=et,at!==0&&w-at<X.storage&&(v+=w-at),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=X.storage}}}const T=v%w;return T>0&&(v+=w-T),x.__size=v,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class eM{constructor(t={}){const{canvas:e=Wm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Ui,this.toneMappingExposure=1;const v=this;let w=!1,T=0,E=0,b=null,y=-1,S=null;const C=new ce,I=new ce;let L=null;const U=new St(0);let B=0,k=e.width,X=e.height,G=1,et=null,at=null;const _t=new ce(0,0,k,X),Pt=new ce(0,0,k,X);let $t=!1;const Y=new Ic;let K=!1,st=!1;const J=new Ut,wt=new Ut,Rt=new P,nt=new ce,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Wt(){return b===null?G:1}let N=n;function ke(R,O){return e.getContext(R,O)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const O="webgl2";if(N=ke(O,R),N===null)throw ke(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Bt,Zt,Dt,le,It,D,A,H,Q,it,j,At,dt,vt,Qt,rt,xt,Lt,Nt,Mt,jt,Xt,pe,F;function ut(){Bt=new ov(N),Bt.init(),Xt=new Xx(N,Bt),Zt=new tv(N,Bt,t,Xt),Dt=new Hx(N,Bt),Zt.reverseDepthBuffer&&d&&Dt.buffers.depth.setReversed(!0),le=new cv(N),It=new Ax,D=new Wx(N,Bt,Dt,It,Zt,Xt,le),A=new nv(v),H=new rv(v),Q=new g0(N),pe=new J_(N,Q),it=new av(N,Q,le,pe),j=new uv(N,it,Q,le),Nt=new hv(N,Zt,D),rt=new ev(It),At=new bx(v,A,H,Bt,Zt,pe,rt),dt=new Qx(v,It),vt=new Rx,Qt=new Nx(Bt),Lt=new j_(v,A,H,Dt,j,f,l),xt=new kx(v,j,Zt),F=new tM(N,le,Zt,Dt),Mt=new Q_(N,Bt,le),jt=new lv(N,Bt,le),le.programs=At.programs,v.capabilities=Zt,v.extensions=Bt,v.properties=It,v.renderLists=vt,v.shadowMap=xt,v.state=Dt,v.info=le}ut();const Z=new jx(v,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(k,X,!1))},this.getSize=function(R){return R.set(k,X)},this.setSize=function(R,O,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,X=O,e.width=Math.floor(R*G),e.height=Math.floor(O*G),V===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(k*G,X*G).floor()},this.setDrawingBufferSize=function(R,O,V){k=R,X=O,G=V,e.width=Math.floor(R*V),e.height=Math.floor(O*V),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(_t)},this.setViewport=function(R,O,V,W){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,O,V,W),Dt.viewport(C.copy(_t).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(Pt)},this.setScissor=function(R,O,V,W){R.isVector4?Pt.set(R.x,R.y,R.z,R.w):Pt.set(R,O,V,W),Dt.scissor(I.copy(Pt).multiplyScalar(G).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(R){Dt.setScissorTest($t=R)},this.setOpaqueSort=function(R){et=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(R=!0,O=!0,V=!0){let W=0;if(R){let z=!1;if(b!==null){const lt=b.texture.format;z=lt===Rc||lt===Cc||lt===Ac}if(z){const lt=b.texture.type,pt=lt===pi||lt===hs||lt===Wr||lt===Js||lt===Tc||lt===Ec,Tt=Lt.getClearColor(),Et=Lt.getClearAlpha(),Ft=Tt.r,Gt=Tt.g,bt=Tt.b;pt?(_[0]=Ft,_[1]=Gt,_[2]=bt,_[3]=Et,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Ft,g[1]=Gt,g[2]=bt,g[3]=Et,N.clearBufferiv(N.COLOR,0,g))}else W|=N.COLOR_BUFFER_BIT}O&&(W|=N.DEPTH_BUFFER_BIT),V&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),Qt.dispose(),It.dispose(),A.dispose(),H.dispose(),j.dispose(),pe.dispose(),F.dispose(),At.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Bc),Z.removeEventListener("sessionend",kc),Hi.stop()};function tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=le.autoReset,O=xt.enabled,V=xt.autoUpdate,W=xt.needsUpdate,z=xt.type;ut(),le.autoReset=R,xt.enabled=O,xt.autoUpdate=V,xt.needsUpdate=W,xt.type=z}function ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function kt(R){const O=R.target;O.removeEventListener("dispose",kt),we(O)}function we(R){Ge(R),It.remove(R)}function Ge(R){const O=It.get(R).programs;O!==void 0&&(O.forEach(function(V){At.releaseProgram(V)}),R.isShaderMaterial&&At.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,V,W,z,lt){O===null&&(O=ct);const pt=z.isMesh&&z.matrixWorld.determinant()<0,Tt=Tf(R,O,V,W,z);Dt.setMaterial(W,pt);let Et=V.index,Ft=1;if(W.wireframe===!0){if(Et=it.getWireframeAttribute(V),Et===void 0)return;Ft=2}const Gt=V.drawRange,bt=V.attributes.position;let te=Gt.start*Ft,me=(Gt.start+Gt.count)*Ft;lt!==null&&(te=Math.max(te,lt.start*Ft),me=Math.min(me,(lt.start+lt.count)*Ft)),Et!==null?(te=Math.max(te,0),me=Math.min(me,Et.count)):bt!=null&&(te=Math.max(te,0),me=Math.min(me,bt.count));const _e=me-te;if(_e<0||_e===1/0)return;pe.setup(z,W,Tt,V,Et);let rn,ee=Mt;if(Et!==null&&(rn=Q.get(Et),ee=jt,ee.setIndex(rn)),z.isMesh)W.wireframe===!0?(Dt.setLineWidth(W.wireframeLinewidth*Wt()),ee.setMode(N.LINES)):ee.setMode(N.TRIANGLES);else if(z.isLine){let Ct=W.linewidth;Ct===void 0&&(Ct=1),Dt.setLineWidth(Ct*Wt()),z.isLineSegments?ee.setMode(N.LINES):z.isLineLoop?ee.setMode(N.LINE_LOOP):ee.setMode(N.LINE_STRIP)}else z.isPoints?ee.setMode(N.POINTS):z.isSprite&&ee.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ee.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ct=z._multiDrawStarts,Jn=z._multiDrawCounts,ne=z._multiDrawCount,Ln=Et?Q.get(Et).bytesPerElement:1,ms=It.get(W).currentProgram.getUniforms();for(let fn=0;fn<ne;fn++)ms.setValue(N,"_gl_DrawID",fn),ee.render(Ct[fn]/Ln,Jn[fn])}else if(z.isInstancedMesh)ee.renderInstances(te,_e,z.count);else if(V.isInstancedBufferGeometry){const Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Jn=Math.min(V.instanceCount,Ct);ee.renderInstances(te,_e,Jn)}else ee.render(te,_e)};function se(R,O,V){R.transparent===!0&&R.side===Ee&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,Kr(R,O,V),R.side=ki,R.needsUpdate=!0,Kr(R,O,V),R.side=Ee):Kr(R,O,V)}this.compile=function(R,O,V=null){V===null&&(V=R),p=Qt.get(V),p.init(O),M.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),R!==V&&R.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const W=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const lt=z.material;if(lt)if(Array.isArray(lt))for(let pt=0;pt<lt.length;pt++){const Tt=lt[pt];se(Tt,V,z),W.add(Tt)}else se(lt,V,z),W.add(lt)}),M.pop(),p=null,W},this.compileAsync=function(R,O,V=null){const W=this.compile(R,O,V);return new Promise(z=>{function lt(){if(W.forEach(function(pt){It.get(pt).currentProgram.isReady()&&W.delete(pt)}),W.size===0){z(R);return}setTimeout(lt,10)}Bt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let In=null;function jn(R){In&&In(R)}function Bc(){Hi.stop()}function kc(){Hi.start()}const Hi=new cf;Hi.setAnimationLoop(jn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(R){In=R,Z.setAnimationLoop(R),R===null?Hi.stop():Hi.start()},Z.addEventListener("sessionstart",Bc),Z.addEventListener("sessionend",kc),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,O,b),p=Qt.get(R,M.length),p.init(O),M.push(p),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(wt),st=this.localClippingEnabled,K=rt.init(this.clippingPlanes,st),m=vt.get(R,x.length),m.init(),x.push(m),Z.enabled===!0&&Z.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&la(lt,O,-1/0,v.sortObjects)}la(R,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,at),mt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,mt&&Lt.addToRenderList(m,R),this.info.render.frame++,K===!0&&rt.beginShadows();const V=p.state.shadowsArray;xt.render(V,R,O),K===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const lt=O.cameras;if(z.length>0)for(let pt=0,Tt=lt.length;pt<Tt;pt++){const Et=lt[pt];Hc(W,z,R,Et)}mt&&Lt.render(R);for(let pt=0,Tt=lt.length;pt<Tt;pt++){const Et=lt[pt];Gc(m,R,Et,Et.viewport)}}else z.length>0&&Hc(W,z,R,O),mt&&Lt.render(R),Gc(m,R,O);b!==null&&(D.updateMultisampleRenderTarget(b),D.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,O),pe.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],K===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function la(R,O,V,W){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){W&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const pt=j.update(R),Tt=R.material;Tt.visible&&m.push(R,pt,Tt,V,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const pt=j.update(R),Tt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),nt.copy(pt.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Tt)){const Et=pt.groups;for(let Ft=0,Gt=Et.length;Ft<Gt;Ft++){const bt=Et[Ft],te=Tt[bt.materialIndex];te&&te.visible&&m.push(R,pt,te,V,nt.z,bt)}}else Tt.visible&&m.push(R,pt,Tt,V,nt.z,null)}}const lt=R.children;for(let pt=0,Tt=lt.length;pt<Tt;pt++)la(lt[pt],O,V,W)}function Gc(R,O,V,W){const z=R.opaque,lt=R.transmissive,pt=R.transparent;p.setupLightsView(V),K===!0&&rt.setGlobalState(v.clippingPlanes,V),W&&Dt.viewport(C.copy(W)),z.length>0&&Zr(z,O,V),lt.length>0&&Zr(lt,O,V),pt.length>0&&Zr(pt,O,V),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Hc(R,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Dn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Zn:pi,minFilter:ss,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const lt=p.state.transmissionRenderTarget[W.id],pt=W.viewport||C;lt.setSize(pt.z,pt.w);const Tt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(U),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),mt&&Lt.render(V);const Et=v.toneMapping;v.toneMapping=Ui;const Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),K===!0&&rt.setGlobalState(v.clippingPlanes,W),Zr(R,V,W),D.updateMultisampleRenderTarget(lt),D.updateRenderTargetMipmap(lt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let bt=0,te=O.length;bt<te;bt++){const me=O[bt],_e=me.object,rn=me.geometry,ee=me.material,Ct=me.group;if(ee.side===Ee&&_e.layers.test(W.layers)){const Jn=ee.side;ee.side=sn,ee.needsUpdate=!0,Vc(_e,V,W,rn,ee,Ct),ee.side=Jn,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(D.updateMultisampleRenderTarget(lt),D.updateRenderTargetMipmap(lt))}v.setRenderTarget(Tt),v.setClearColor(U,B),Ft!==void 0&&(W.viewport=Ft),v.toneMapping=Et}function Zr(R,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,lt=R.length;z<lt;z++){const pt=R[z],Tt=pt.object,Et=pt.geometry,Ft=W===null?pt.material:W,Gt=pt.group;Tt.layers.test(V.layers)&&Vc(Tt,O,V,Et,Ft,Gt)}}function Vc(R,O,V,W,z,lt){R.onBeforeRender(v,O,V,W,z,lt),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(v,O,V,W,R,lt),z.transparent===!0&&z.side===Ee&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,v.renderBufferDirect(V,O,W,z,R,lt),z.side=ki,z.needsUpdate=!0,v.renderBufferDirect(V,O,W,z,R,lt),z.side=Ee):v.renderBufferDirect(V,O,W,z,R,lt),R.onAfterRender(v,O,V,W,z,lt)}function Kr(R,O,V){O.isScene!==!0&&(O=ct);const W=It.get(R),z=p.state.lights,lt=p.state.shadowsArray,pt=z.state.version,Tt=At.getParameters(R,z.state,lt,O,V),Et=At.getProgramCacheKey(Tt);let Ft=W.programs;W.environment=R.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(R.isMeshStandardMaterial?H:A).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",kt),Ft=new Map,W.programs=Ft);let Gt=Ft.get(Et);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===pt)return Xc(R,Tt),Gt}else Tt.uniforms=At.getUniforms(R),R.onBeforeCompile(Tt,v),Gt=At.acquireProgram(Tt,Et),Ft.set(Et,Gt),W.uniforms=Tt.uniforms;const bt=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(bt.clippingPlanes=rt.uniform),Xc(R,Tt),W.needsLights=bf(R),W.lightsStateVersion=pt,W.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.directionalShadowMap.value=z.state.directionalShadowMap,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotShadowMap.value=z.state.spotShadowMap,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMap.value=z.state.pointShadowMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Wc(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=Fo.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Xc(R,O){const V=It.get(R);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Tf(R,O,V,W,z){O.isScene!==!0&&(O=ct),D.resetTextureUnits();const lt=O.fog,pt=W.isMeshStandardMaterial?O.environment:null,Tt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:nr,Et=(W.isMeshStandardMaterial?H:A).get(W.envMap||pt),Ft=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),bt=!!V.morphAttributes.position,te=!!V.morphAttributes.normal,me=!!V.morphAttributes.color;let _e=Ui;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(_e=v.toneMapping);const rn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=rn!==void 0?rn.length:0,Ct=It.get(W),Jn=p.state.lights;if(K===!0&&(st===!0||R!==S)){const En=R===S&&W.id===y;rt.setState(W,R,En)}let ne=!1;W.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Jn.state.version||Ct.outputColorSpace!==Tt||z.isBatchedMesh&&Ct.batching===!1||!z.isBatchedMesh&&Ct.batching===!0||z.isBatchedMesh&&Ct.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ct.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ct.instancing===!1||!z.isInstancedMesh&&Ct.instancing===!0||z.isSkinnedMesh&&Ct.skinning===!1||!z.isSkinnedMesh&&Ct.skinning===!0||z.isInstancedMesh&&Ct.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ct.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ct.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ct.instancingMorph===!1&&z.morphTexture!==null||Ct.envMap!==Et||W.fog===!0&&Ct.fog!==lt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==rt.numPlanes||Ct.numIntersection!==rt.numIntersection)||Ct.vertexAlphas!==Ft||Ct.vertexTangents!==Gt||Ct.morphTargets!==bt||Ct.morphNormals!==te||Ct.morphColors!==me||Ct.toneMapping!==_e||Ct.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Ct.__version=W.version);let Ln=Ct.currentProgram;ne===!0&&(Ln=Kr(W,O,z));let ms=!1,fn=!1,lr=!1;const ve=Ln.getUniforms(),Gn=Ct.uniforms;if(Dt.useProgram(Ln.program)&&(ms=!0,fn=!0,lr=!0),W.id!==y&&(y=W.id,fn=!0),ms||S!==R){Dt.buffers.depth.getReversed()?(J.copy(R.projectionMatrix),qm(J),Ym(J),ve.setValue(N,"projectionMatrix",J)):ve.setValue(N,"projectionMatrix",R.projectionMatrix),ve.setValue(N,"viewMatrix",R.matrixWorldInverse);const gi=ve.map.cameraPosition;gi!==void 0&&gi.setValue(N,Rt.setFromMatrixPosition(R.matrixWorld)),Zt.logarithmicDepthBuffer&&ve.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,fn=!0,lr=!0)}if(z.isSkinnedMesh){ve.setOptional(N,z,"bindMatrix"),ve.setOptional(N,z,"bindMatrixInverse");const En=z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),ve.setValue(N,"boneTexture",En.boneTexture,D))}z.isBatchedMesh&&(ve.setOptional(N,z,"batchingTexture"),ve.setValue(N,"batchingTexture",z._matricesTexture,D),ve.setOptional(N,z,"batchingIdTexture"),ve.setValue(N,"batchingIdTexture",z._indirectTexture,D),ve.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&ve.setValue(N,"batchingColorTexture",z._colorsTexture,D));const cr=V.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&Nt.update(z,V,Ln),(fn||Ct.receiveShadow!==z.receiveShadow)&&(Ct.receiveShadow=z.receiveShadow,ve.setValue(N,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gn.envMap.value=Et,Gn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Gn.envMapIntensity.value=O.environmentIntensity),fn&&(ve.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&Ef(Gn,lr),lt&&W.fog===!0&&dt.refreshFogUniforms(Gn,lt),dt.refreshMaterialUniforms(Gn,W,G,X,p.state.transmissionRenderTarget[R.id]),Fo.upload(N,Wc(Ct),Gn,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fo.upload(N,Wc(Ct),Gn,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(N,"center",z.center),ve.setValue(N,"modelViewMatrix",z.modelViewMatrix),ve.setValue(N,"normalMatrix",z.normalMatrix),ve.setValue(N,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const En=W.uniformsGroups;for(let gi=0,_i=En.length;gi<_i;gi++){const qc=En[gi];F.update(qc,Ln),F.bind(qc,Ln)}}return Ln}function Ef(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function bf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,O,V){It.get(R.texture).__webglTexture=O,It.get(R.depthTexture).__webglTexture=V;const W=It.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const V=It.get(R);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,V=0){b=R,T=O,E=V;let W=!0,z=null,lt=!1,pt=!1;if(R){const Et=It.get(R);if(Et.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Et.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Et.__hasExternalTextures)D.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const bt=R.depthTexture;if(Et.__boundDepthTexture!==bt){if(bt!==null&&It.has(bt)&&(R.width!==bt.image.width||R.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);const Gt=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?z=Gt[O][V]:z=Gt[O],lt=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?z=It.get(R).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[V]:z=Gt,C.copy(R.viewport),I.copy(R.scissor),L=R.scissorTest}else C.copy(_t).multiplyScalar(G).floor(),I.copy(Pt).multiplyScalar(G).floor(),L=$t;if(Dt.bindFramebuffer(N.FRAMEBUFFER,z)&&W&&Dt.drawBuffers(R,z),Dt.viewport(C),Dt.scissor(I),Dt.setScissorTest(L),lt){const Et=It.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,V)}else if(pt){const Et=It.get(R.texture),Ft=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,V||0,Ft)}y=-1},this.readRenderTargetPixels=function(R,O,V,W,z,lt,pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){Dt.bindFramebuffer(N.FRAMEBUFFER,Tt);try{const Et=R.texture,Ft=Et.format,Gt=Et.type;if(!Zt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-W&&V>=0&&V<=R.height-z&&N.readPixels(O,V,W,z,Xt.convert(Ft),Xt.convert(Gt),lt)}finally{const Et=b!==null?It.get(b).__webglFramebuffer:null;Dt.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(R,O,V,W,z,lt,pt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){const Et=R.texture,Ft=Et.format,Gt=Et.type;if(!Zt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-W&&V>=0&&V<=R.height-z){Dt.bindFramebuffer(N.FRAMEBUFFER,Tt);const bt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.bufferData(N.PIXEL_PACK_BUFFER,lt.byteLength,N.STREAM_READ),N.readPixels(O,V,W,z,Xt.convert(Ft),Xt.convert(Gt),0);const te=b!==null?It.get(b).__webglFramebuffer:null;Dt.bindFramebuffer(N.FRAMEBUFFER,te);const me=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xm(N,me,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,lt),N.deleteBuffer(bt),N.deleteSync(me),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,V=0){R.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);const W=Math.pow(2,-V),z=Math.floor(R.image.width*W),lt=Math.floor(R.image.height*W),pt=O!==null?O.x:0,Tt=O!==null?O.y:0;D.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,pt,Tt,z,lt),Dt.unbindTexture()},this.copyTextureToTexture=function(R,O,V=null,W=null,z=0){R.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],O=arguments[2],z=arguments[3]||0,V=null);let lt,pt,Tt,Et,Ft,Gt,bt,te,me;const _e=R.isCompressedTexture?R.mipmaps[z]:R.image;V!==null?(lt=V.max.x-V.min.x,pt=V.max.y-V.min.y,Tt=V.isBox3?V.max.z-V.min.z:1,Et=V.min.x,Ft=V.min.y,Gt=V.isBox3?V.min.z:0):(lt=_e.width,pt=_e.height,Tt=_e.depth||1,Et=0,Ft=0,Gt=0),W!==null?(bt=W.x,te=W.y,me=W.z):(bt=0,te=0,me=0);const rn=Xt.convert(O.format),ee=Xt.convert(O.type);let Ct;O.isData3DTexture?(D.setTexture3D(O,0),Ct=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),Ct=N.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),Ct=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Jn=N.getParameter(N.UNPACK_ROW_LENGTH),ne=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ln=N.getParameter(N.UNPACK_SKIP_PIXELS),ms=N.getParameter(N.UNPACK_SKIP_ROWS),fn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_e.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Et),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);const lr=R.isDataArrayTexture||R.isData3DTexture,ve=O.isDataArrayTexture||O.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Gn=It.get(R),cr=It.get(O),En=It.get(Gn.__renderTarget),gi=It.get(cr.__renderTarget);Dt.bindFramebuffer(N.READ_FRAMEBUFFER,En.__webglFramebuffer),Dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let _i=0;_i<Tt;_i++)lr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(R).__webglTexture,z,Gt+_i),R.isDepthTexture?(ve&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(O).__webglTexture,z,me+_i),N.blitFramebuffer(Et,Ft,lt,pt,bt,te,lt,pt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ve?N.copyTexSubImage3D(Ct,z,bt,te,me+_i,Et,Ft,lt,pt):N.copyTexSubImage2D(Ct,z,bt,te,me+_i,Et,Ft,lt,pt);Dt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ve?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Ct,z,bt,te,me,lt,pt,Tt,rn,ee,_e.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,z,bt,te,me,lt,pt,Tt,rn,_e.data):N.texSubImage3D(Ct,z,bt,te,me,lt,pt,Tt,rn,ee,_e):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,bt,te,lt,pt,rn,ee,_e.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,bt,te,_e.width,_e.height,rn,_e.data):N.texSubImage2D(N.TEXTURE_2D,z,bt,te,lt,pt,rn,ee,_e);N.pixelStorei(N.UNPACK_ROW_LENGTH,Jn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,ms),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fn),z===0&&O.generateMipmaps&&N.generateMipmap(Ct),Dt.unbindTexture()},this.copyTextureToTexture3D=function(R,O,V=null,W=null,z=0){return R.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,R=arguments[2],O=arguments[3],z=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,V,W,z)},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Dt.unbindTexture()},this.resetState=function(){T=0,E=0,b=null,Dt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class Nc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new Nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nM extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Te,this.environmentIntensity=1,this.environmentRotation=new Te,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class iM extends je{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Sn,h=Sn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cu extends Ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new Ut,hu=new Ut,Mo=[],uu=new ds,sM=new Ut,mr=new $,gr=new fs;class Ht extends ${constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ds),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),uu.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(uu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),gr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ds),hu.multiplyMatrices(n,Ds),mr.matrixWorld=hu,mr.raycast(t,Mo);for(let o=0,a=Mo.length;o<a;o++){const l=Mo[o];l.instanceId=s,l.object=this,e.push(l)}Mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new iM(new Float32Array(i*this.count),i,this.count,bc,$n));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class mf extends ps{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ko=new P,jo=new P,du=new Ut,_r=new sa,yo=new fs,Xa=new P,fu=new P;class rM extends Le{constructor(t=new ie,e=new mf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ko.fromBufferAttribute(e,i-1),jo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ko.distanceTo(jo);t.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=s,t.ray.intersectsSphere(yo)===!1)return;du.copy(i).invert(),_r.copy(t.ray).applyMatrix4(du);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=h.getX(g),x=h.getX(g+1),M=So(this,t,_r,l,p,x);M&&e.push(M)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),p=So(this,t,_r,l,g,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=So(this,t,_r,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=So(this,t,_r,l,_-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function So(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Ko.fromBufferAttribute(o,i),jo.fromBufferAttribute(o,s),e.distanceSqToSegment(Ko,jo,Xa,fu)>n)return;Xa.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Xa);if(!(l<t.near||l>t.far))return{distance:l,point:fu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}class Fs extends ps{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pu=new Ut,Jl=new sa,wo=new fs,To=new P;class Tr extends Le{constructor(t=new ie,e=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=s,t.ray.intersectsSphere(wo)===!1)return;pu.copy(i).invert(),Jl.copy(t.ray).applyMatrix4(pu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);To.fromBufferAttribute(u,m),mu(To,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)To.fromBufferAttribute(u,_),mu(To,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function mu(r,t,e,n,i,s,o){const a=Jl.distanceSqToPoint(r);if(a<e){const l=new P;Jl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ir extends je{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ot:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],o=[],a=new P,l=new Ut;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ze(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ze(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gf extends mi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class oM extends gf{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Eo=new P,qa=new Fc,Ya=new Fc,$a=new Fc;class ci extends mi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Eo.subVectors(i[0],i[1]).add(i[0]),c=Eo);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Eo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),qa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),Ya.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),$a.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ya.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$a.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(qa.calc(l),Ya.calc(l),$a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gu(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function aM(r,t){const e=1-r;return e*e*t}function lM(r,t){return 2*(1-r)*r*t}function cM(r,t){return r*r*t}function Lr(r,t,e,n){return aM(r,t)+lM(r,e)+cM(r,n)}function hM(r,t){const e=1-r;return e*e*e*t}function uM(r,t){const e=1-r;return 3*e*e*r*t}function dM(r,t){return 3*(1-r)*r*r*t}function fM(r,t){return r*r*r*t}function Ur(r,t,e,n,i){return hM(r,t)+uM(r,e)+dM(r,n)+fM(r,i)}class pM extends mi{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,i.x,s.x,o.x,a.x),Ur(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mM extends mi{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,i.x,s.x,o.x,a.x),Ur(t,i.y,s.y,o.y,a.y),Ur(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gM extends mi{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _M extends mi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vM extends mi{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Lr(t,i.x,s.x,o.x),Lr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends mi{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Lr(t,i.x,s.x,o.x),Lr(t,i.y,s.y,o.y),Lr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xM extends mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(gu(a,l.x,c.x,h.x,u.x),gu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var MM=Object.freeze({__proto__:null,ArcCurve:oM,CatmullRomCurve3:ci,CubicBezierCurve:pM,CubicBezierCurve3:mM,EllipseCurve:gf,LineCurve:gM,LineCurve3:_M,QuadraticBezierCurve:vM,QuadraticBezierCurve3:_f,SplineCurve:xM});class bi extends ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new P,h=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zt extends ie{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function x(){const v=new P,w=new P;let T=0;const E=(e-t)/n;for(let b=0;b<=s;b++){const y=[],S=b/s,C=S*(e-t)+t;for(let I=0;I<=i;I++){const L=I/i,U=L*l+a,B=Math.sin(U),k=Math.cos(U);w.x=C*B,w.y=-S*n+m,w.z=C*k,u.push(w.x,w.y,w.z),v.set(B,E,k).normalize(),d.push(v.x,v.y,v.z),f.push(L,1-S),y.push(_++)}g.push(y)}for(let b=0;b<i;b++)for(let y=0;y<s;y++){const S=g[y][b],C=g[y+1][b],I=g[y+1][b+1],L=g[y][b+1];(t>0||y!==0)&&(h.push(S,C,L),T+=3),(e>0||y!==s-1)&&(h.push(C,I,L),T+=3)}c.addGroup(p,T,0),p+=T}function M(v){const w=_,T=new ot,E=new P;let b=0;const y=v===!0?t:e,S=v===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),_++;const C=_;for(let I=0;I<=i;I++){const U=I/i*l+a,B=Math.cos(U),k=Math.sin(U);E.x=y*k,E.y=m*S,E.z=y*B,u.push(E.x,E.y,E.z),d.push(0,S,0),T.x=B*.5+.5,T.y=k*.5*S+.5,f.push(T.x,T.y),_++}for(let I=0;I<i;I++){const L=w+I,U=C+I;v===!0?h.push(U,U+1,L):h.push(U+1,U,L),b+=3}c.addGroup(p,b,v===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class en extends zt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new en(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oa extends ie{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(s.slice(),3)),this.setAttribute("uv",new Ot(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new P,v=new P,w=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],M),f(e[T+1],v),f(e[T+2],w),l(M,v,w,x)}function l(x,M,v,w){const T=w+1,E=[];for(let b=0;b<=T;b++){E[b]=[];const y=x.clone().lerp(v,b/T),S=M.clone().lerp(v,b/T),C=T-b;for(let I=0;I<=C;I++)I===0&&b===T?E[b][I]=y:E[b][I]=y.clone().lerp(S,I/C)}for(let b=0;b<T;b++)for(let y=0;y<2*(T-b)-1;y++){const S=Math.floor(y/2);y%2===0?(d(E[b][S+1]),d(E[b+1][S]),d(E[b][S])):(d(E[b][S+1]),d(E[b+1][S+1]),d(E[b+1][S]))}}function c(x){const M=new P;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(x),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function h(){const x=new P;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const v=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;o.push(v,1-w)}_(),u()}function u(){for(let x=0;x<o.length;x+=6){const M=o[x+0],v=o[x+2],w=o[x+4],T=Math.max(M,v,w),E=Math.min(M,v,w);T>.9&&E<.1&&(M<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function _(){const x=new P,M=new P,v=new P,w=new P,T=new ot,E=new ot,b=new ot;for(let y=0,S=0;y<s.length;y+=9,S+=6){x.set(s[y+0],s[y+1],s[y+2]),M.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),T.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),b.set(o[S+4],o[S+5]),w.copy(x).add(M).add(v).divideScalar(3);const C=m(w);g(T,S+0,x,C),g(E,S+2,M,C),g(b,S+4,v,C)}}function g(x,M,v,w){w<0&&x.x===1&&(o[M]=x.x-1),v.x===0&&v.z===0&&(o[M]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.vertices,t.indices,t.radius,t.details)}}class Xe extends oa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xe(t.radius,t.detail)}}class Ci extends oa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ci(t.radius,t.detail)}}class Jo extends ie{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new P,_=new ot;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,v=x+n+1,w=x+n+2,T=x+1;a.push(M,v,T),a.push(v,w,T)}}this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ye extends ie{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const T=w/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(T+v,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],w=h[p+1][x],T=h[p+1][x+1];(p!==0||o>0)&&f.push(M,v,T),(p!==n-1||l<Math.PI)&&f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class On extends ie{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,x=(i+1)*f+_;o.push(g,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nr extends ie{constructor(t=new _f(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new ot;let h=new P;const u=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function g(){for(let M=0;M<e;M++)m(M);m(s===!1?e:0),x(),p()}function m(M){h=t.getPointAt(M/e,h);const v=o.normals[M],w=o.binormals[M];for(let T=0;T<=i;T++){const E=T/i*Math.PI*2,b=Math.sin(E),y=-Math.cos(E);l.x=y*v.x+b*w.x,l.y=y*v.y+b*w.y,l.z=y*v.z+b*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=i;v++){const w=(i+1)*(M-1)+(v-1),T=(i+1)*M+(v-1),E=(i+1)*M+v,b=(i+1)*(M-1)+v;_.push(w,T,b),_.push(T,E,b)}}function x(){for(let M=0;M<=e;M++)for(let v=0;v<=i;v++)c.x=M/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Nr(new MM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class yM extends be{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class nn extends ps{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aa extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class SM extends aa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Za=new Ut,_u=new P,vu=new P;class vf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_u.setFromMatrixPosition(t.matrixWorld),e.position.copy(_u),vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vu),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xu=new Ut,vr=new P,Ka=new P;class wM extends vf{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vr.setFromMatrixPosition(t.matrixWorld),n.position.copy(vr),Ka.copy(n.position),Ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ka),n.updateMatrixWorld(),i.makeTranslation(-vr.x,-vr.y,-vr.z),xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu)}}class Ql extends aa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class TM extends vf{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mu extends aa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new TM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class EM extends aa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class xf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yu(){return performance.now()}const Su=new Ut;class wu{constructor(t,e,n=0,i=1/0){this.ray=new sa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Su.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Su),this}intersectObject(t,e=!0,n=[]){return tc(t,this,n,e),n.sort(Tu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)tc(t[i],this,n,e);return n.sort(Tu),n}}function Tu(r,t){return r.distance-t.distance}function tc(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)tc(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);const zn=1.55,Eu=1.4,Mf=70*zn,Oo=[[-18,18],[-14,24],[-6,26],[1,31],[0,39],[8,45],[18,44],[26,49],[31,57],[40,61]],Oc=[-.42,.2,-.6],yf=.0015,ge={x:32,z:8},bu=12.5,bo=18.5,qe={x:16,z:24},Os={x:-38,z:10};function Er(r,t){let e=1/0;for(let n=1;n<Oo.length;n++){const[i,s]=Oo[n-1],[o,a]=Oo[n],l=o-i,c=a-s,h=Math.max(0,Math.min(1,((r-i)*l+(t-s)*c)/(l*l+c*c)));e=Math.min(e,Math.hypot(r-i-l*h,t-s-c*h))}return e}const bM=[{id:1,name:"Vương Trần Thiên Ái"},{id:2,name:"Nguyễn Hải Anh"},{id:3,name:"Nguyễn Phạm Minh Anh"},{id:4,name:"Nguyễn Ngọc Minh Châu"},{id:5,name:"Nguyễn Trần Diễm Chi"},{id:6,name:"Nguyễn Khải Hoàn"},{id:7,name:"A Se Kinl"},{id:8,name:"Trình Nhã Kỳ"},{id:9,name:"Nguyễn Ngọc Bảo Linh"},{id:10,name:"Phạm Hoàng Trúc Linh"},{id:11,name:"Bành Gia Mẫn"},{id:12,name:"Trần Thục Bảo Nghi"},{id:13,name:"Thiên Ngọc"},{id:14,name:"Bùi Hoàng Nhân"},{id:15,name:"Vũ Nguyễn Yến Nhi"},{id:16,name:"Ngô Tâm Như"},{id:17,name:"Nguyễn Ngọc Thảo Như"},{id:18,name:"Bùi Nguyễn Phúc Ni"},{id:19,name:"Hoàng Phúc"},{id:20,name:"Lê Ngọc Thuận"},{id:21,name:"Nguyễn Minh Thư"},{id:22,name:"Trần Ngọc Anh Thư"},{id:23,name:"Hồ Ngọc Bảo Thy"},{id:24,name:"Nguyễn Ngọc Phương Trang"},{id:25,name:"Nguyễn Minh Triết"},{id:26,name:"Huỳnh Ngọc Thanh Vy"},{id:27,name:"Lê Ngọc Tường Vy"},{id:28,name:"Đặng Thanh Xuân"}],AM={beachRadius:Mf-9,volcanoRadius:16*zn,spiralTurns:2.4,totalChests:28,beachHeight:1.8,volcanoHeight:22};class CM{constructor(t=AM){q(this,"chests",[]);q(this,"winningChest",null);q(this,"usedChestIds",new Set);q(this,"config");this.config=t}generateChests(t,e){const n=t&&t.length>=this.config.totalChests?t.slice(0,this.config.totalChests):bM;this.chests=[];const i=this.config.totalChests,s=-Math.PI/4;for(let o=0;o<i;o++){const a=3-Math.floor(o/7),l=o%7,c=this.config.beachRadius,h=this.config.volcanoRadius,u=Math.sqrt(h*h+(a+.5)/4*(c*c-h*h)),d=s+l*Math.PI*2/7+a*.41;let f=Math.cos(d)*u,_=Math.sin(d)*u;for(let M=0;M<18;M++){const v=f/zn,w=_/zn;if(Er(v,w)>6.8&&Math.hypot(v+18,w-18)>11&&Math.hypot(v-31,w+28)>10&&Math.hypot(v,w)>14.5&&Math.hypot(v+44,w+36)>15&&Math.hypot(v-48,w+24)>14&&Math.hypot(v-31,w-55)>12&&Math.hypot(v-ge.x,w-ge.z)>22&&Math.hypot(v-qe.x,w-qe.z)>9&&Math.hypot(v-Os.x,w-Os.z)>20)break;const E=d+(M+1)*.17;f=Math.cos(E)*u,_=Math.sin(E)*u}const m=(e?e(f,_):2+Math.pow(Math.cos(ae.clamp(u/Mf,0,1)*(Math.PI/2)),1.35)*27)+.02,p=Math.atan2(-f,-_)+(o%2-.5)*.25,x={id:n[o].id,index:o,student:n[o],position:new P(f,m,_),rotationY:p,isWinner:!1};this.chests.push(x)}return this.chests}updateElevations(t){this.chests.forEach(e=>{e.position.y=t(e.position.x,e.position.z)+.02})}getAllChests(){return this.chests}getChest(t){return this.chests.find(e=>e.id===t||e.index===t)}markUsed(t){t.forEach(e=>this.usedChestIds.add(e))}isUsed(t){return this.usedChestIds.has(t)}getUsedIds(){return Array.from(this.usedChestIds).sort((t,e)=>t-e)}getAvailableChests(){return this.chests.filter(t=>!this.usedChestIds.has(t.id))}selectWinner(t){this.chests.length===0&&this.generateChests(),this.chests.forEach(i=>i.isWinner=!1);const e=this.getAvailableChests();if(e.length===0)return this.winningChest=null,null;let n;if(t!==void 0){const i=this.getChest(t);i&&!this.usedChestIds.has(i.id)&&(n=i)}return n||(n=e[Math.floor(Math.random()*e.length)]),n.isWinner=!0,this.winningChest=n,n}getWinningChest(){return this.winningChest}}class RM{constructor(){q(this,"listeners",new Map)}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.off(t,e)}off(t,e){const n=this.listeners.get(t);n&&n.delete(e)}emit(t,e){const n=this.listeners.get(t);n&&n.forEach(i=>{try{i(e)}catch(s){console.error(`[EventBus] Lỗi trong handler của sự kiện "${t}":`,s)}})}once(t,e){const n=i=>{this.off(t,n),e(i)};return this.on(t,n)}clear(){this.listeners.clear()}}const Fi=new RM,PM={overviewPosition:new P(0,76,163),overviewLookAt:new P(0,14,0),flightDuration:11.6},DM=new P(0,1,0),Au=2.4,ja=2.4,Cu=2.7,on=64,Ru=220,IM=6,LM=2,UM=52;class NM{constructor(t,e=PM){q(this,"camera");q(this,"config");q(this,"currentCurve",null);q(this,"currentTween",null);q(this,"currentLookAt");q(this,"isFlying",!1);q(this,"heightSampler");q(this,"obstacleSampler");q(this,"sightBlockedSampler");this.camera=t,this.config=e,this.currentLookAt=e.overviewLookAt.clone(),this.resetToOverview()}setHeightSampler(t){this.heightSampler=t}setObstacleSampler(t){this.obstacleSampler=t}setSightBlockedSampler(t){this.sightBlockedSampler=t}isCameraFlying(){return this.isFlying}resetToOverview(t=!0){this.currentTween&&(this.currentTween.kill(),this.currentTween=null),this.isFlying=!1,t?(this.camera.position.copy(this.config.overviewPosition),this.currentLookAt.copy(this.config.overviewLookAt),this.camera.lookAt(this.currentLookAt)):(de.to(this.camera.position,{x:this.config.overviewPosition.x,y:this.config.overviewPosition.y,z:this.config.overviewPosition.z,duration:1.8,ease:"power2.out"}),de.to(this.currentLookAt,{x:this.config.overviewLookAt.x,y:this.config.overviewLookAt.y,z:this.config.overviewLookAt.z,duration:1.8,ease:"power2.out",onUpdate:()=>{this.camera.lookAt(this.currentLookAt)}}))}groundAt(t,e){return this.heightSampler?this.heightSampler(t,e):0}obstacleAt(t,e,n){if(!this.obstacleSampler)return Number.NEGATIVE_INFINITY;const i=`${Math.round(t*2)}:${Math.round(e*2)}`,s=n.get(i);if(s!==void 0)return s;const o=this.obstacleSampler(t,e);return n.set(i,o),o}requiredFlightY(t,e,n,i=Number.NEGATIVE_INFINITY){const s=this.groundAt(t,e)+Au;if(i>UM)return s;const o=this.obstacleAt(t,e,n);return Number.isFinite(o)?Math.max(s,o+ja):s}chooseLandingPosition(t,e){const n=t.position,i=new P(Math.sin(t.rotationY),0,Math.cos(t.rotationY)).normalize(),s=new P(i.z,0,-i.x).normalize(),o=i.clone().multiplyScalar(4.6).add(s.clone().multiplyScalar(2.1)).normalize(),a=n.y+Cu,l=n.clone().add(new P(0,.55,0)),c=new P,h=[0,22,-22,44,-44,66,-66,90,-90,115,-115,140,-140,160,-160,180],u=[4.4,5.5,6.6],d=[];for(const p of u)for(const x of h){const M=o.clone().applyAxisAngle(DM,ae.degToRad(x)),v=n.clone().addScaledVector(M,p),w=this.groundAt(v.x,v.z),T=this.obstacleAt(v.x,v.z,e);let E=Math.max(a,w+Au+.2),b=Math.abs(x)*.04+(p-u[0])*.7;if(Number.isFinite(T)&&E-T<ja+1.2){const y=T+ja+.6;b+=5+(y-E)*.6,E=y}if(b+=Math.max(0,E-a)*.25,c.set(v.x,E,v.z),this.sightBlockedSampler)this.sightBlockedSampler(c,l)&&(b+=24);else for(let y=1;y<=3;y++){const S=y/4,C=ae.lerp(v.x,l.x,S),I=ae.lerp(v.z,l.z,S),L=ae.lerp(E,l.y,S),U=this.obstacleAt(C,I,e);Number.isFinite(U)&&U>L-.25&&(b+=(U-L+.25)*2)}for(let y=1;y<=4;y++){const S=y/5,C=ae.lerp(v.x,l.x,S),I=ae.lerp(v.z,l.z,S),L=ae.lerp(E,l.y,S),U=this.groundAt(C,I);U>L-.35&&(b+=(U-L+.35)*2)}d.push({position:new P(v.x,E,v.z),score:b,degrees:x})}d.sort((p,x)=>p.score-x.score);const f=[],_=new Set;for(const p of d)_.has(p.degrees)||(_.add(p.degrees),f.push(p));let g=f[0],m=1/0;for(const p of f){let x=Number.NEGATIVE_INFINITY;for(let v=0;v<6;v++){const w=v/6*Math.PI*2,T=p.position.x+Math.cos(w)*2,E=p.position.z+Math.sin(w)*2,b=this.obstacleAt(T,E,e);Number.isFinite(b)&&(x=Math.max(x,b))}let M=p.score;if(Number.isFinite(x)){const v=x-p.position.y;v>-1.5&&(M+=12+Math.max(0,v+1.5)*1.6)}M<m&&(m=M,g=p)}return g?g.position.clone():n.clone().addScaledVector(i,4.6).add(new P(0,Cu,0))}approachControlPoints(t,e,n){const i=this.camera.position.clone(),s=t.x-i.x,o=t.z-i.z,a=new P(-o,0,s);a.lengthSq()<1e-6?a.set(1,0,0):a.normalize();const l=i.clone().lerp(t,.33).addScaledVector(a,n*13),c=i.clone().lerp(t,.68).addScaledVector(a,n*6),h=t.clone().addScaledVector(e,2.4);return[i,l,c,h,t.clone()]}sideLiftCost(t,e,n,i){const s=new P(e.x-t.position.x,0,e.z-t.position.z);s.lengthSq()<1e-6?s.set(1,0,0):s.normalize();const o=this.approachControlPoints(e,s,n),a=new ci(o.map(h=>new P(h.x,0,h.z)),!1,"centripetal",.5),l=this.camera.position.y;let c=0;for(let h=1;h<26;h++){const u=h/26,d=a.getPointAt(u),f=u*u*(3-2*u),_=ae.lerp(l,e.y,f);c+=Math.max(0,this.requiredFlightY(d.x,d.z,i,_)+.2-_)}return c}buildAvoidingCurve(t,e,n,i){const s=new P(e.x-t.position.x,0,e.z-t.position.z);s.lengthSq()<1e-6?s.set(1,0,0):s.normalize();const o=this.approachControlPoints(e,s,n),a=new ci(o.map(_=>new P(_.x,0,_.z)),!1,"centripetal",.5);a.arcLengthDivisions=400,a.updateArcLengths();const l=this.camera.position,c=[];for(let _=0;_<on;_++)c.push(a.getPointAt(_/(on-1)));c[0].set(l.x,0,l.z),c[on-1].set(e.x,0,e.z);const h=c.map((_,g)=>{const m=g/(on-1),p=m*m*(3-2*m);return ae.lerp(l.y,e.y,p)}),u=(_,g)=>this.requiredFlightY(_,g,i,Number.NEGATIVE_INFINITY)+.2;for(let _=0;_<4;_++){const g=new Float32Array(on);let m=!1;for(let p=0;p<on;p++){const M=u(c[p].x,c[p].z)-h[p];if(M<=.06)continue;m=!0;const v=10;for(let w=Math.max(0,p-v);w<=Math.min(on-1,p+v);w++){const T=.5+.5*Math.cos((w-p)/v*Math.PI);g[w]=Math.max(g[w],M*T)}}for(let p=0;p<on;p++)h[p]+=g[p];if(h[0]=l.y,h[on-1]=e.y,!m)break}const d=c.map((_,g)=>new P(_.x,h[g],_.z));let f=new ci(d,!1,"centripetal",.5);for(let _=0;_<IM;_++){const g=new Float32Array(on);let m=0;for(let p=0;p<=Ru;p++){const x=p/Ru,M=f.getPointAt(x);if(Math.hypot(M.x-e.x,M.z-e.z)<LM)continue;const w=u(M.x,M.z)-M.y;if(w<=.08)continue;m=Math.max(m,w);const T=Math.round(x*(on-1)),E=14;for(let b=Math.max(0,T-E);b<=Math.min(on-1,T+E);b++){const y=.5+.5*Math.cos((b-T)/E*Math.PI);g[b]=Math.max(g[b],w*y)}}if(m<=.1)break;for(let p=0;p<on;p++)g[p]>0&&(d[p].y+=g[p]+.1);d[0].y=l.y,d[on-1].y=e.y,f=new ci(d,!1,"centripetal",.5)}return f.arcLengthDivisions=1600,f.updateArcLengths(),f}buildCinematicPath(t,e){const n=new Map,i=this.chooseLandingPosition(t,n),s=this.sideLiftCost(t,i,1,n),o=this.sideLiftCost(t,i,-1,n),a=s<=o?1:-1;return this.currentCurve=this.buildAvoidingCurve(t,i,a,n),this.currentCurve}flyToChest(t,e,n){this.isFlying=!0;const i=new P(0,14,0),s=t.position.clone().add(new P(0,.55,0)),o=this.config.overviewPosition.clone(),a=Math.atan2(o.z,o.x),l=Math.sqrt(o.x*o.x+o.z*o.z)||110*zn,c=o.y||56,h=new P(Math.cos(a)*l,c,Math.sin(a)*l);this.camera.position.copy(h);const u=this.buildCinematicPath(t,e),d={progress:0};this.currentTween&&this.currentTween.kill();const f=.44;this.currentTween=de.to(d,{progress:1,duration:this.config.flightDuration,ease:"none",onUpdate:()=>{const _=d.progress;if(_<=f){const g=_/f,m=de.parseEase("power1.inOut")(g),p=Math.sin(m*Math.PI*2),x=a+m*Math.PI*2,M=l+p*4,v=c+p*3.5;this.camera.position.set(Math.cos(x)*M,v,Math.sin(x)*M),this.currentLookAt.copy(i),this.camera.lookAt(this.currentLookAt)}else{const g=(_-f)/(1-f),m=de.parseEase("power1.inOut")(g),p=u.getPointAt(m);this.camera.position.copy(p);const x=u.getPointAt(Math.min(1,m+.045)),M=ae.smoothstep(m,.1,.62),v=x.lerp(s,M),w=ae.smoothstep(m,0,.3);this.currentLookAt.copy(i).lerp(v,w),this.camera.lookAt(this.currentLookAt)}Fi.emit("CAMERA_PROGRESS",{progress:_})},onComplete:()=>{this.isFlying=!1,this.currentLookAt.copy(s),this.camera.lookAt(s),Fi.emit("CHEST_ARRIVED",{chestId:t.id,studentName:t.student.name,position:t.position}),de.delayedCall(.35,()=>{Fi.emit("CHEST_OPENED",{chestId:t.id,studentName:t.student.name})}),n&&n()}})}createTrajectoryLineMesh(t){const e=new ie,n=new mf({visible:!1,transparent:!0,opacity:0});return new rM(e,n)}}function zo(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ie;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let _=0;_<f.count;++_)u.push(f.getX(_)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Pu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][d]);const _=Pu(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function Pu(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Ie(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let _=0;_<e;_++){const g=h.getComponent(d,_);a.setComponent(d+u,_,g)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const Ao=(r,t,e)=>{const n=Math.max(0,Math.min(1,(e-r)/(t-r)));return n*n*(3-2*n)};function ec(r,t,e){let n=Math.imul(r,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function si(r,t,e,n){const i=Math.floor(r),s=Math.floor(t),o=r-i,a=t-s,l=o*o*(3-2*o),c=a*a*(3-2*a),h=(f,_)=>ec((f+e)%e,(_+e)%e,n),u=h(i,s)*(1-l)+h(i+1,s)*l,d=h(i,s+1)*(1-l)+h(i+1,s+1)*l;return u*(1-c)+d*c}function FM(r,t,e,n){const i=t/n,s=e/n,o=si(i*8,s*8,8,12),a=si(i*48,s*48,48,42),l=ec(t,e,83);if(r==="wood"){const h=Math.sin(s*Math.PI*48+o*4+Math.sin(i*Math.PI*8)*.6),u=o*.22+a*.17+h*.12;return{color:[87+u*100,46+u*65,24+u*38],height:u+h*.12,roughness:.65+a*.16}}if(r==="chestWood"){const h=Math.pow(Math.abs(Math.sin(s*Math.PI*3)),26),u=si(i*8,s*64,8,21)*.62+a*.28,d=o*.18+u*.5,f=1-h*.78;return{color:[(168+d*76)*f,(112+d*60)*f,(52+d*36)*f],height:d*.55-h*1.1,roughness:.5+d*.24+h*.3}}if(r==="rock"){const h=Math.abs(Math.sin((i+s*.65)*Math.PI*18+o*7)),u=o*.48+a*.32+l*.12;return{color:[83+u*52-h*11,94+u*47+o*12,89+u*44],height:u+h*.16,roughness:.79+a*.13}}if(r==="sand"){const h=o*.27+a*.16+l*.22;return{color:[197+h*63,160+h*69,106+h*68],height:h,roughness:.83+l*.13}}if(r==="grass"){const h=Math.sin(i*Math.PI*96+a*3)*Math.sin(s*Math.PI*72),u=o*.25+a*.24+h*.06;return{color:[160+u*52,174+u*44,132+u*50],height:u+l*.1,roughness:.86+a*.1}}if(r==="limWood"){const h=Math.sin(s*Math.PI*112+o*2.4+Math.sin(i*Math.PI*5)*.5),u=si(i*96,s*26,96,31),d=o*.2+u*.26+h*.05;return{color:[62+d*74,34+d*48,24+d*34],height:d+h*.08,roughness:.5+u*.2}}if(r==="lacquer"){const h=si(i*6+Math.sin(s*7)*.45,s*6,6,77),u=si(i*20,s*20,20,13),d=h*.45+u*.18;return{color:[104+d*74,15+d*24,13+d*20],height:d*.2,roughness:.16+u*.14+(1-h)*.12}}if(r==="patina"){const h=si(i*7+Math.sin(s*5)*.6,s*7,7,91),u=si(i*26,s*26,26,57),d=Ao(.36,.7,h*.72+u*.28),f=[104+a*46,70+a*30,34+a*18],_=[46+a*34,96+a*40,76+a*30];return{color:[f[0]+(_[0]-f[0])*d,f[1]+(_[1]-f[1])*d,f[2]+(_[2]-f[2])*d],height:d*.7+u*.22,roughness:.34+d*.42+a*.1}}if(r==="roofTile"){const h=i*8,u=h-Math.floor(h),d=Math.sin(u*Math.PI),f=s*10,_=Math.pow(Math.abs(Math.cos(f*Math.PI)),34),g=o*.2+a*.18,m=Math.pow(d,1.4),p=1-_*.52,x=Ao(.62,.86,o);return{color:[(64+m*40+g*14-x*6)*p,(72+m*42+g*14+x*10)*p,(80+m*44+g*16+x*2)*p],height:d*.85-_*.55+g*.15,roughness:.58+a*.16+_*.18}}if(r==="laterite"){const h=si(i*34,s*34,34,17),u=Ao(.6,.82,h),d=o*.42+a*.3;return{color:[(132+d*44)*(1-u*.46),(86+d*32)*(1-u*.42),(62+d*26)*(1-u*.4)],height:d-u*.95,roughness:.82+a*.14}}if(r==="brick"){const u=s*8,d=Math.floor(u),f=d%2*.5,_=i*4+f,g=Math.floor(_),m=_-g,p=u-d,x=1-Ao(.015,.085,Math.min(Math.min(m,1-m),Math.min(p,1-p))),M=ec(g,d,61)*34,v=o*.18+a*.16;return{color:[(112+v*38+M*.8)*(1-x*.42),(72+v*26+M*.5)*(1-x*.34),(56+v*20+M*.35)*(1-x*.3)],height:(1-x)*.35-x*.6,roughness:.78+a*.14+x*.08}}const c=Math.sin(s*Math.PI*96)*.05+l*.08;return{color:[202+o*36+c*25,148+o*36+c*20,54+o*27],height:c+a*.12,roughness:.32+o*.18}}function Yr(r){const e=document.createElement("canvas"),n=document.createElement("canvas"),i=document.createElement("canvas");for(const p of[e,n,i])p.width=p.height=256;const s=e.getContext("2d"),o=n.getContext("2d"),a=i.getContext("2d"),l=s.createImageData(256,256),c=o.createImageData(256,256),h=a.createImageData(256,256),u=new Float32Array(256*256),d=p=>Math.max(0,Math.min(255,Math.round(p)));for(let p=0;p<256;p++)for(let x=0;x<256;x++){const M=p*256+x,v=M*4,w=FM(r,x,p,256);u[M]=w.height,l.data[v]=d(w.color[0]),l.data[v+1]=d(w.color[1]),l.data[v+2]=d(w.color[2]),l.data[v+3]=255;const T=d(w.roughness*255);c.data[v]=c.data[v+1]=c.data[v+2]=T,c.data[v+3]=255}const f=r==="rock"?2.2:r==="sand"?1.2:r==="roofTile"?2:r==="laterite"?2.6:r==="brick"?2.2:r==="patina"?1.8:r==="lacquer"?.8:1.5;for(let p=0;p<256;p++)for(let x=0;x<256;x++){const M=(p*256+x)*4,v=(u[p*256+(x+1)%256]-u[p*256+(x+256-1)%256])*f,w=(u[(p+1)%256*256+x]-u[(p+256-1)%256*256+x])*f,T=Math.hypot(v,w,1);h.data[M]=d(128-v/T*127),h.data[M+1]=d(128-w/T*127),h.data[M+2]=d(128+127/T),h.data[M+3]=255}s.putImageData(l,0,0),o.putImageData(c,0,0),a.putImageData(h,0,0);const _=new Ir(e),g=new Ir(n),m=new Ir(i);_.colorSpace=$e;for(const p of[_,g,m])p.wrapS=p.wrapT=Yo,p.anisotropy=4;return{map:_,roughnessMap:g,normalMap:m}}function OM(r,t=!0){const e=Yr("grass");for(const i of Object.values(e))i.repeat.set(7,7);const n=new nn({map:e.map,roughnessMap:e.roughnessMap,normalMap:e.normalMap,roughness:.95,normalScale:new ot(.35,.35),vertexColors:t,flatShading:!0});return r.push(n,e.map,e.roughnessMap,e.normalMap),n}function zM(r){const t=Yr("rock"),e=new nn({map:t.map,roughnessMap:t.roughnessMap,normalMap:t.normalMap,roughness:.9,normalScale:new ot(.55,.55),flatShading:!0});return r.push(e,t.map,t.roughnessMap,t.normalMap),e}function or(r,t,e,n){const i=Yr(t);if(n)for(const o of Object.values(i))o.repeat.set(n[0],n[1]);const s=new nn({map:i.map,roughnessMap:i.roughnessMap,normalMap:i.normalMap,roughness:1,...e});return r.push(s,i.map,i.roughnessMap,i.normalMap),s}function BM(r){return or(r,"limWood",{normalScale:new ot(.4,.4)},[1.4,1.4])}function kM(r){return or(r,"lacquer",{metalness:.06,normalScale:new ot(.18,.18)})}function GM(r){return or(r,"patina",{metalness:.82,normalScale:new ot(.7,.7)})}function HM(r){return or(r,"roofTile",{normalScale:new ot(1,1),side:Ee})}function VM(r){return or(r,"laterite",{normalScale:new ot(.85,.85)},[2,2])}function WM(r){return or(r,"brick",{normalScale:new ot(.55,.55)},[6,4])}function br(r){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,0.85)"),i.addColorStop(.4,"rgba(255,255,255,0.32)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new Ir(e);return s.colorSpace=$e,r.push(s),s}function XM(){const e=document.createElement("canvas");e.width=128,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,64);i.addColorStop(0,"#101a33"),i.addColorStop(.32,"#2c3c58"),i.addColorStop(.47,"#a8663a"),i.addColorStop(.53,"#8a5535"),i.addColorStop(.62,"#55432f"),i.addColorStop(1,"#241f1a"),n.fillStyle=i,n.fillRect(0,0,128,64);const s=n.createRadialGradient(128*.27,64*.36,0,128*.27,64*.36,128*.2);s.addColorStop(0,"rgba(255,240,208,1)"),s.addColorStop(1,"rgba(255,198,130,0)"),n.fillStyle=s,n.fillRect(0,0,128,64);const o=new Ir(e);return o.mapping=qo,o.colorSpace=$e,o}const qM=`
  uniform float uTime;
  uniform float uWind;
  uniform vec3 uColor;
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;

  void main() {
    vec3 p = position;

    // Use the instanced transform for a different wind phase on every tree.
    vec3 origin = vec3(0.0);
    #ifdef USE_INSTANCING
      origin = vec3(instanceMatrix[3].xyz);
    #endif
    float heightFactor = max(0.0, position.y + 0.5);
    float sway1 = sin(uTime * 1.2 + origin.x * 0.37 + origin.z * 0.19 + position.y * 0.6) * uWind * heightFactor;
    float sway2 = cos(uTime * 1.6 + origin.z * 0.27 + position.y) * uWind * 0.35 * heightFactor;
    p.x += sway1;
    p.z += sway2;

    vec4 localPos = vec4(p, 1.0);
    vec3 localNormal = normal;
    #ifdef USE_INSTANCING
      localPos = instanceMatrix * localPos;
      localNormal = mat3(instanceMatrix) * localNormal;
    #endif
    vec4 worldPos = modelMatrix * localPos;
    vec4 viewPos = viewMatrix * worldPos;
    vNormal = normalize(mat3(modelMatrix) * localNormal);
    vFogDepth = -viewPos.z;

    vColor = uColor;

    gl_Position = projectionMatrix * viewPos;
  }
`,YM=`
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;
  uniform vec3 uSunDirection;
  uniform vec3 uFogColor;
  uniform float uFogDensity;

  void main() {
    vec3 n = normalize(vNormal);
    vec3 sun = normalize(uSunDirection);
    float diffuse = max(dot(n, sun), 0.0);
    float sky = clamp(n.y * 0.5 + 0.5, 0.0, 1.0);

    // Tán lá: bóng ngả lam ngọc, mặt đón nắng ngả vàng son.
    vec3 shadowTint = vColor * vec3(0.24, 0.33, 0.37);
    vec3 sunTint = vColor * vec3(1.20, 1.04, 0.76);
    vec3 color = mix(shadowTint, sunTint, diffuse * 0.84 + sky * 0.16);
    color += vColor * vec3(0.85, 0.52, 0.20) * pow(diffuse, 3.0) * 0.10;
    // Mặt dưới tán tối hẳn để khối lá tròn trịa thay vì một quả cầu phẳng.
    color *= 0.72 + 0.28 * smoothstep(-0.6, 0.7, n.y);

    // Sương ấm: cây ở xa tan vào chân trời thay vì đứng neon trên nền mờ.
    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    color = mix(color, uFogColor, fogFactor);

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Ja=`
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    // Sóng lừng chỉ nhìn thấy ở vòng ngoài; phần trong được giữ phẳng để không hở mép.
    float rim = smoothstep(120.0, 260.0, length(w.xz));
    w.y += sin(w.x * 0.055 + uTime * 0.8) * cos(w.z * 0.048 - uTime * 0.62) * 0.55 * rim;
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,Qa=`
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uPool;
  uniform vec3 uSunDirection;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
               mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float value = 0.0, amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * vnoise(p);
      p = p * 2.11 + 5.2;
      amplitude *= 0.5;
    }
    return value;
  }

  // Ba lớp sóng chồng nhau theo hướng lệch nhau -> gợn trải dài, không còn chấm tròn đều tăm tắp.
  float waveField(vec2 q, float t) {
    float swell = sin(q.x * 0.052 + t * 0.85) * 0.62
                + sin((q.x * 0.031 - q.y * 0.046) + t * 0.6) * 0.55;
    float mid = sin((q.x * 0.12 + q.y * 0.09) - t * 1.5 + swell * 0.9) * 0.42;
    float chop = fbm(q * 0.16 + vec2(t * 0.06, -t * 0.045)) * 1.9;
    return swell + mid + chop;
  }

  void main() {
    float t = uTime * mix(1.0, 0.35, uPool);
    vec2 q = vWorld.xz;

    float e = 1.5;
    float h0 = waveField(q, t);
    float hx = waveField(q + vec2(e, 0.0), t);
    float hy = waveField(q + vec2(0.0, e), t);
    float steep = mix(0.30, 0.08, uPool);
    vec3 normal = normalize(vec3(-(hx - h0) / e * steep, 1.0, -(hy - h0) / e * steep));

    float dist = length(q);
    float depth = smoothstep(112.0, 235.0, dist);
    vec3 shallow = vec3(0.015, 0.105, 0.120);
    vec3 deep = vec3(0.003, 0.022, 0.060);
    vec3 color = mix(shallow, deep, depth);
    color = mix(color, vec3(0.010, 0.065, 0.075), uPool * 0.8);
    color *= 0.92 + smoothstep(-1.0, 1.8, h0) * 0.16;

    // Đường bọt mép bờ bám theo hình dạng thật của hòn đảo và thở theo nhịp sóng vỗ.
    float angle = atan(q.y, q.x);
    float shore = 110.0 + sin(angle * 5.0) * 2.6 + cos(angle * 11.0 + 1.7) * 1.4;
    float runup = (dist - shore) - sin(t * 1.1 + angle * 3.0) * 1.7;
    float foam = (1.0 - smoothstep(0.3, 3.8, abs(runup)))
               * (0.5 + fbm(q * 0.11 + vec2(t * 0.22, -t * 0.17)));
    foam = clamp(foam, 0.0, 1.0) * (1.0 - uPool);
    float whitecap = smoothstep(2.35, 2.95, h0) * depth * 0.42 * (1.0 - uPool);
    color = mix(color, vec3(0.82, 0.70, 0.45), max(foam, whitecap) * 0.70);

    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.2);
    color = mix(color, vec3(0.300, 0.180, 0.085), fresnel * mix(0.30, 0.45, uPool));
    float glint = pow(max(dot(reflect(-normalize(uSunDirection), normal), viewDir), 0.0), 120.0);
    color += vec3(1.0, 0.76, 0.42) * glint * mix(0.65, 0.40, uPool) * (1.0 - max(foam, whitecap));

    // Sương mù khí quyển: mặt biển nhạt dần rồi hòa đúng sắc chân trời hoàng hôn.
    color = mix(color, vec3(0.500, 0.265, 0.105), smoothstep(180.0, 520.0, dist) * (1.0 - uPool));

    gl_FragColor = vec4(color, mix(1.0, 0.9, uPool));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,$M=`
  varying vec2 vUv;
  varying vec3 vWorld;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 p = position;
    // Mặt nước gợn nhẹ theo thời gian thay vì phẳng lì như tấm băng dính.
    p.y += sin(p.x * 1.7 + uTime * 2.1) * 0.03 + cos(p.z * 1.9 - uTime * 1.6) * 0.025;
    vec4 w = modelMatrix * vec4(p, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,ZM=`
  varying vec2 vUv;
  varying vec3 vWorld;
  uniform float uTime;
  uniform float uFlowSpeed;
  uniform float uFoam;
  uniform float uInvert;
  uniform float uRadial;
  uniform float uWhiteness;
  uniform float uSideFade;
  uniform vec3 uSunDirection;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
               mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float value = 0.0, amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * vnoise(p);
      p = p * 2.03 + 7.7;
      amplitude *= 0.5;
    }
    return value;
  }

  // Trường cao độ mặt nước: gợn dài theo hạ lưu, nhiễu loạn ngang do xoáy đá.
  float waterField(vec2 p, float t) {
    float warp = fbm(vec2(p.x * 4.2 + 1.7, p.y * 2.4 - t * 0.55));
    float swells = sin(p.y * 15.0 - t * 2.4 + warp * 3.6 + p.x * 2.1);
    float chop = sin(p.y * 31.0 - t * 4.1 + p.x * 8.0 - warp * 2.2) * 0.45;
    float cross = sin(p.x * 11.0 + t * 0.9) * 0.3;
    return swells + chop + cross + warp * 1.5;
  }

  void main() {
    float t = uTime * uFlowSpeed;
    vec2 p = vec2(vUv.x, mix(vUv.y, 1.0 - vUv.y, uInvert));
    // Thác đứng là mesh duy nhất đặt uInvert = 1, nên p.y cũng chính là quãng nước đã rơi.
    float fall = uInvert;

    float e = 0.01;
    float h0 = waterField(p, t);
    float hx = waterField(p + vec2(e, 0.0), t);
    float hy = waterField(p + vec2(0.0, e), t);
    vec3 normal = normalize(vec3((hx - h0) / e * 0.045, 1.0, (hy - h0) / e * 0.045));

    // Bờ: chỉ dải ngoài cùng có bọt, trong lòng suối giữ màu nước để không thành dải băng trắng.
    float edge = mix(abs(vUv.x - 0.5) * 2.0, length(vUv - 0.5) * 2.0, uRadial);
    float bank = smoothstep(0.92, 1.14, edge + h0 * 0.04 - 0.06);
    float crest = smoothstep(1.25, 2.3, h0);
    float streak = fbm(vec2(p.x * 7.0, p.y * 3.0 - t * 0.8));
    float plunge = uRadial * (1.0 - smoothstep(0.02, 0.34, edge));

    // Tấm thác: các cột nước dựng chạy song song, càng rơi càng tơi thành bọt trắng.
    float filament = smoothstep(0.34, 0.76, fbm(vec2(vUv.x * 21.0, p.y * 1.3 - t * 0.45)));
    float aeration = mix(0.10, 1.0, smoothstep(0.0, 1.15, p.y + filament * 0.25));
    float veil = filament * aeration;

    float foam = clamp(bank * (0.30 + streak * 0.5) + crest * (0.14 + uFoam * 0.30)
                     + plunge * 0.34 + fall * veil * (0.30 + uFoam * 0.55), 0.0, 1.0);

    vec3 deep = vec3(0.018, 0.100, 0.125);
    vec3 mid = vec3(0.040, 0.230, 0.245);
    vec3 color = mix(deep, mid, smoothstep(-1.2, 1.8, h0));
    color = mix(color, vec3(0.085, 0.330, 0.345), uRadial * 0.6);
    // Thân thác chỉ trắng ở các cột bọt, phần giữa vẫn còn sắc ngọc để nhìn ra khối nước.
    color = mix(color, vec3(0.78, 0.82, 0.745), uWhiteness * (0.22 + streak * 0.22 + veil * 0.62));
    color = mix(color, vec3(0.90, 0.87, 0.74), foam * 0.72);

    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
    color = mix(color, vec3(0.30, 0.17, 0.085), fresnel * 0.26);
    float glint = pow(max(dot(reflect(-normalize(uSunDirection), normal), viewDir), 0.0), 80.0);
    color += vec3(1.0, 0.82, 0.55) * glint * 0.5 * (1.0 - foam);

    float alpha = mix(0.93, 0.985, 1.0 - bank) + foam * 0.015;
    // Vạt thác tan thành bụi nước: hai bên mép không còn là đường cắt thẳng của một tấm bảng.
    float sheet = smoothstep(1.04, 0.52, edge + (0.55 - filament) * 0.34);
    alpha *= mix(1.0, (0.62 + 0.34 * p.y) * sheet, uSideFade);
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Sf=12622450,KM=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,jM=`
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
               mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float value = 0.0, amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * vnoise(p);
      p = p * 2.07 + 11.3;
      amplitude *= 0.5;
    }
    return value;
  }
`,JM=`
  varying vec3 vDirection;
  uniform vec3 uSunDirection;
  uniform float uTime;
  ${jM}

  void main() {
    vec3 dir = normalize(vDirection);
    vec3 sun = normalize(uSunDirection);

    float up = clamp(dir.y, 0.0, 1.0);
    float cosSun = dot(dir, sun);
    float sunSide = max(cosSun, 0.0);
    float azimuth = atan(dir.z, dir.x);
    float sunAzimuth = atan(sun.z, sun.x);

    vec3 zenith = vec3(0.012, 0.028, 0.100);
    vec3 upperSky = vec3(0.055, 0.115, 0.300);
    vec3 horizonWarm = vec3(0.700, 0.300, 0.085);
    vec3 horizonCool = vec3(0.075, 0.050, 0.060);

    // Chân trời đổi màu theo phương vị: phía mặt trời là vàng son, phía khuất là tím lam.
    vec3 horizon = mix(horizonCool, horizonWarm, pow(sunSide, 1.3));

    // Gradient dốc gần chân trời: vàng son tích tụ ở dải thấp rồi mới chùng lên chàm.
    vec3 sky = mix(horizon, upperSky, smoothstep(0.06, 0.45, up));
    sky = mix(sky, zenith, smoothstep(0.30, 0.90, up));

    // Dải mây ti bám chân trời, nhuộm ấm theo hướng mặt trời.
    float band = smoothstep(-0.005, 0.04, dir.y) * (1.0 - smoothstep(0.09, 0.32, dir.y));
    if (band > 0.001) {
      vec2 cuv = dir.xz / max(dir.y, 0.06) * 0.40;
      float body = fbm(cuv * 1.1 + vec2(uTime * 0.0035, uTime * 0.0012));
      float detail = fbm(cuv * 3.0 - vec2(uTime * 0.006, uTime * 0.002));
      float cover = smoothstep(0.56, 0.80, body * 0.78 + detail * 0.26);
      vec3 tint = mix(vec3(0.24, 0.17, 0.19), vec3(0.72, 0.42, 0.20), detail);
      tint = mix(tint, vec3(1.00, 0.62, 0.26), pow(sunSide, 3.0) * 0.45);
      sky = mix(sky, tint, cover * band * 0.40);
    }

    // Núi xa lam sơn: hai lớp silhouette ở chân trời, gợn theo phương vị.
    // Dùng toạ độ vòng tròn để đường chân trời không bị seam tại ±π.
    vec2 azDir = vec2(cos(azimuth), sin(azimuth));
    float rangeMask = smoothstep(0.28, 0.72, fbm(azDir * 1.6 + vec2(2.7, 0.8)));
    float ridgeFar = (0.008 + fbm(azDir * 2.6 + vec2(4.1, 2.3)) * 0.020) * (0.30 + 0.70 * rangeMask);
    float ridgeNear = (0.004 + fbm(azDir * 4.3 + vec2(9.2, 6.7)) * 0.010) * (0.22 + 0.78 * rangeMask);
    float aboveHorizon = step(-0.015, dir.y);

    float farMask = (1.0 - smoothstep(ridgeFar - 0.004, ridgeFar, dir.y)) * aboveHorizon;
    if (farMask > 0.001) {
      float h = clamp(dir.y / max(ridgeFar, 0.001), 0.0, 1.0);
      vec3 farColor = mix(vec3(0.210, 0.125, 0.105), vec3(0.075, 0.080, 0.130), h);
      farColor = mix(farColor, vec3(0.78, 0.40, 0.15), pow(sunSide, 2.0) * 0.45);
      // Phối sương khí quyển: núi xa không còn là dải đen cứng mà mờ dần vào nền trời.
      farColor = mix(farColor, sky, 0.40);
      sky = mix(sky, farColor, farMask * 0.82);
    }

    float nearMask = (1.0 - smoothstep(ridgeNear - 0.003, ridgeNear, dir.y)) * aboveHorizon;
    if (nearMask > 0.001) {
      float h = clamp(dir.y / max(ridgeNear, 0.001), 0.0, 1.0);
      vec3 nearColor = mix(vec3(0.120, 0.072, 0.065), vec3(0.032, 0.040, 0.070), h);
      nearColor = mix(nearColor, vec3(0.58, 0.28, 0.10), pow(sunSide, 4.0) * 0.30);
      nearColor = mix(nearColor, sky, 0.20);
      sky = mix(sky, nearColor, nearMask * 0.88);
    }

    // Tia nắng xuyên mây (crepuscular rays) tỏa ra từ mặt trời thấp.
    float azDelta = azimuth - sunAzimuth;
    float rayField = fbm(vec2(azDelta * 5.5 + 3.1, up * 1.6 + uTime * 0.004));
    float rayBand = pow(sunSide, 6.0) * smoothstep(0.0, 0.035, up) * (1.0 - smoothstep(0.14, 0.46, up));
    float shafts = smoothstep(0.56, 0.86, rayField) * rayBand;
    sky += vec3(1.0, 0.60, 0.26) * shafts * 0.20;

    // Tán xạ quanh mặt trời + đĩa mặt trời HDR để bloom bắt được.
    sky += vec3(0.50, 0.24, 0.07) * pow(sunSide, 3.0) * (1.0 - up * 0.65) * 0.30;
    sky += vec3(1.05, 0.60, 0.22) * pow(sunSide, 26.0) * 0.42;
    sky += vec3(4.20, 3.00, 1.80) * smoothstep(0.99955, 0.99985, cosSun);
    sky += vec3(1.50, 0.92, 0.48) * pow(sunSide, 160.0) * 0.50;

    // Lấy nét màu (dither) để loại bỏ hiện tượng dải gradient bậc thang.
    sky += (hash21(gl_FragCoord.xy) - 0.5) * 0.007;

    gl_FragColor = vec4(sky, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,QM=`
  uniform float uTime;
  varying vec3 vNormalWorld;
  varying vec3 vWorld;

  void main() {
    vec4 local = vec4(position, 1.0);
    vec3 localNormal = normal;
    #ifdef USE_INSTANCING
      local = instanceMatrix * local;
      localNormal = mat3(instanceMatrix) * localNormal;
    #endif
    vec4 w = modelMatrix * local;
    w.y += sin(uTime * 0.16 + w.x * 0.045 + w.z * 0.03) * 0.4;
    vWorld = w.xyz;
    vNormalWorld = normalize(mat3(modelMatrix) * localNormal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,t1=`
  varying vec3 vNormalWorld;
  varying vec3 vWorld;
  uniform vec3 uSunDirection;

  void main() {
    vec3 n = normalize(vNormalWorld);
    vec3 viewDir = normalize(cameraPosition - vWorld);
    vec3 sunDir = normalize(uSunDirection);
    float sun = max(dot(n, sunDir), 0.0);

    // Mây ngà: bóng phía khuất chuyển tím than, đỉnh đón nắng chuyển vàng son.
    vec3 shade = vec3(0.24, 0.17, 0.18);
    vec3 lit = vec3(1.00, 0.74, 0.50);
    vec3 color = mix(shade, lit, smoothstep(-0.20, 0.68, sun));
    color *= mix(0.78, 1.02, smoothstep(-0.45, 0.45, n.y));
    color += vec3(0.30, 0.14, 0.04) * pow(sun, 4.0);

    // Viền mỗi khối cầu tan dần vào nền trời -> cụm mây mềm như thật.
    float rim = 1.0 - abs(dot(n, viewDir));
    float alpha = 0.78 * (1.0 - smoothstep(0.26, 0.88, rim));
    alpha *= mix(0.64, 1.0, sun);

    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,e1=13.5;class n1{constructor(t={}){q(this,"opts");q(this,"geometries",[]);q(this,"materials",[]);q(this,"foliageMaterials",[]);q(this,"sunDirection",new P(...Oc).normalize());q(this,"riverCurve",new ci(Oo.map(([t,e])=>new P(t,0,e)),!1,"catmullrom",.5));q(this,"chestClearings",[]);q(this,"root",new Yt);q(this,"clouds",null);q(this,"spray",null);q(this,"incense",null);q(this,"fallMist",null);q(this,"cranes",null);q(this,"craneBodies",null);q(this,"craneWings",null);q(this,"fireflies",null);q(this,"leaves",null);q(this,"craneFlock",[{angle:0,radius:50,height:30,speed:.03,phase:0,scale:1},{angle:.5,radius:53,height:31.4,speed:.028,phase:.7,scale:.92},{angle:.95,radius:47,height:29,speed:.033,phase:1.9,scale:.86},{angle:1.6,radius:56,height:32.2,speed:.026,phase:3.1,scale:1.05},{angle:2.3,radius:44,height:27.6,speed:.035,phase:4.4,scale:.8},{angle:3.1,radius:58,height:33.5,speed:.025,phase:5.2,scale:.95},{angle:4,radius:49,height:28.4,speed:.031,phase:2.5,scale:.9}]);q(this,"leafState",[]);q(this,"fireflyOrigin",new Float32Array(270));q(this,"stoneMaterial",null);q(this,"wetStoneMaterial",null);q(this,"gravelMaterial",null);q(this,"limWoodMat",null);q(this,"lacquerMat",null);q(this,"patinaMat",null);q(this,"roofTileMat",null);q(this,"lateriteMat",null);q(this,"brickMat",null);q(this,"villagePadY",0);q(this,"reserved",[{x:0,z:0,r:13.2},{x:0,z:14.6,r:5.4},{x:ge.x,z:ge.z,r:21.5},{x:qe.x,z:qe.z,r:8.5},{x:Os.x,z:Os.z,r:20}]);q(this,"random");let e=t.seed??88;this.random=()=>(e=e*1664525+1013904223>>>0,e/4294967296),this.opts={seed:t.seed??88,treeCount:t.treeCount??125,palmCount:t.palmCount??42,shrubCount:t.shrubCount??65,rockCount:t.rockCount??55,cloudCount:t.cloudCount??18},this.villagePadY=this.rawTerrainHeight(ge.x,ge.z)}setChestClearings(t){this.chestClearings=t.map(e=>new ot(e.position.x/zn,e.position.z/zn))}clearOfChests(t,e,n){return this.chestClearings.every(i=>Math.hypot(t-i.x,e-i.y)>n)}clearOfStructures(t,e,n){return this.reserved.every(i=>Math.hypot(t-i.x,e-i.z)>i.r+n*.5)}randomClearing(t,e,n){for(let i=0;i<40;i++){const s=this.random()*Math.PI*2,o=t+this.random()*(e-t),a=Math.cos(s)*o,l=Math.sin(s)*o;if(this.clearOfChests(a,l,n)&&this.clearOfStructures(a,l,n)&&Er(a,l)>5)return new ot(a,l)}throw new Error("Unable to place decoration safely on the island")}build(){return this.root=new Yt,this.root.name="MajesticTropicalIsland",this.root.scale.set(zn,Eu,zn),this.root.add(this.createOcean()),this.root.add(this.createSeaCliffs()),this.root.add(this.createTerrainSurface()),this.root.add(this.createSummitAltar()),this.root.add(this.createSummitBackdrop()),this.root.add(this.createGrandWaterfalls()),this.root.add(this.createMeanderingRiver()),this.root.add(this.createRiceTerraces()),this.root.add(this.createLotusPond()),this.root.add(this.createVillage()),this.root.add(this.createCoveredBridge()),this.root.add(this.createPier()),this.root.add(this.createBeachPalms()),this.root.add(this.createCanopyForest()),this.root.add(this.createArecaPalms()),this.root.add(this.createBananaPlants()),this.root.add(this.createBambooGroves()),this.root.add(this.createBanyanTrees()),this.root.add(this.createHighlandTrees()),this.root.add(this.createTropicalShrubs()),this.root.add(this.createMossyBoulders()),this.root.add(this.createCoastalMonuments()),this.clouds=this.createClouds(),this.root.add(this.clouds),this.root.add(this.createCranes()),this.root.add(this.createFireflies()),this.root.add(this.createFallingLeaves()),this.root.add(this.createWaterfallMist()),this.root}noise(t,e){return Math.sin(t*.23+this.opts.seed)*Math.cos(e*.19)*.55+Math.sin(t*.48+e*.34)*.23}getTerrainHeightAt(t,e){return this.localTerrainHeightAt(t/zn,e/zn)*Eu}rawTerrainHeight(t,e){const n=Math.sqrt(t*t+e*e);if(n>=74)return-2.8;const i=ae.clamp(n/66,0,1),s=Math.cos(i*(Math.PI/2)),o=1.4+Math.pow(s,1.35)*20,a=Math.sin(t*.07)*Math.cos(e*.07)*2.6,l=-Math.exp(-Math.pow(Er(t,e)/4.2,2))*2.8,c=Math.hypot(t+18,e-18),h=-Math.exp(-Math.pow(c/6.8,4))*2.3,u=Math.hypot(t-qe.x,e-qe.z),d=-Math.exp(-Math.pow(u/5.4,4))*1.25,f=this.noise(t,e)*(n<18?.4:.85),_=ae.clamp(o+a+l+h+d+f,.5,25.5),g=ae.smoothstep(n,68,74);let m=ae.lerp(_,-2.8,g);const p=Math.hypot(t-qe.x,e-qe.z);if(p<9.5){const x=1-ae.smoothstep(p,6.4,9.5);m=ae.lerp(m,e1+d,x)}return m}localTerrainHeightAt(t,e){const n=this.rawTerrainHeight(t,e),i=Math.hypot(t-ge.x,e-ge.z);if(i>=bo)return n;const s=1-ae.smoothstep(i,bu,bo);return ae.lerp(n,this.villagePadY,s)}getTerrainNormalAt(t,e){const i=this.getTerrainHeightAt(t+.25,e)-this.getTerrainHeightAt(t-.25,e),s=this.getTerrainHeightAt(t,e+.25)-this.getTerrainHeightAt(t,e-.25);return new P(-i/(2*.25),1,-s/(2*.25)).normalize()}mat(t,e=.82,n=0){const i=new nn({color:t,roughness:e,metalness:n,flatShading:!0});return this.materials.push(i),i}geo(t){return this.geometries.push(t),t}sharedStone(){return this.stoneMaterial||(this.stoneMaterial=zM(this.materials)),this.stoneMaterial}wetStone(){if(!this.wetStoneMaterial){const t=this.sharedStone().clone();t.roughness=.5,t.color=new St(11121582),this.wetStoneMaterial=t,this.materials.push(t)}return this.wetStoneMaterial}gravelStone(){if(!this.gravelMaterial){const t=this.sharedStone().clone();t.map=null,t.roughnessMap=null,t.normalMap=null,t.color=new St(9411223),t.roughness=.62,this.gravelMaterial=t,this.materials.push(t)}return this.gravelMaterial}limWood(){return this.limWoodMat||(this.limWoodMat=BM(this.materials)),this.limWoodMat}lacquer(){return this.lacquerMat||(this.lacquerMat=kM(this.materials)),this.lacquerMat}patina(){return this.patinaMat||(this.patinaMat=GM(this.materials)),this.patinaMat}roofTile(){return this.roofTileMat||(this.roofTileMat=HM(this.materials)),this.roofTileMat}laterite(){return this.lateriteMat||(this.lateriteMat=VM(this.materials)),this.lateriteMat}brick(){return this.brickMat||(this.brickMat=WM(this.materials)),this.brickMat}streamMaterial(t){const e={uTime:{value:0},uFlowSpeed:{value:1},uFoam:{value:.35},uInvert:{value:0},uRadial:{value:0},uWhiteness:{value:0},uSideFade:{value:0},uSunDirection:{value:this.sunDirection}};for(const[i,s]of Object.entries(t))e[i]={value:s};const n=new be({vertexShader:$M,fragmentShader:ZM,uniforms:e,transparent:!0,side:Ee,depthWrite:!1});return this.materials.push(n),n}riverHalfWidth(t){return 2+t*1.65+Math.sin(t*9.4)*.26}riverSurfaceLift(t){return .34-t*t*.52}addStone(t,e,n,i,s,o,a){if(t.index>=t.mesh.count)return;const l=a??.42+this.random()*.3,c=new Te((this.random()-.5)*.45,this.random()*Math.PI*2,(this.random()-.5)*.45),h=new Ut().compose(new P(e,i-s*o,n),new he().setFromEuler(c),new P(s*(.85+this.random()*.55),s*l,s*(.85+this.random()*.55)));t.mesh.setMatrixAt(t.index++,h)}stoneSlots(...t){return t.map(e=>({mesh:e,index:0}))}finishStones(...t){return t.map(({mesh:e,index:n})=>(e.count=n,e.instanceMatrix.needsUpdate=!0,e.castShadow=!0,e.receiveShadow=!0,e))}createOcean(){const t=this.geo(new bi(4200,160));t.rotateX(-Math.PI/2);const e=new be({vertexShader:Ja,fragmentShader:Qa,uniforms:{uTime:{value:0},uPool:{value:0},uSunDirection:{value:this.sunDirection}},transparent:!0,side:Ee});this.materials.push(e);const n=new $(t,e);return n.name="MajesticLagoonOcean",n.position.y=.2,n}createSeaCliffs(){const t=this.geo(new zt(36,68,16,36,8)),e=t.attributes.position;for(let i=0;i<e.count;i++){const s=e.getX(i),o=e.getZ(i),a=1+this.noise(s,o)*.12;e.setX(i,s*a),e.setZ(i,o*a)}t.translate(0,-6.5,0);const n=new $(t,this.sharedStone());return n.name="IslandSeaCliffs",n.castShadow=!0,n.receiveShadow=!0,n}createTerrainSurface(){const n=this.geo(new cs(160,160,160,160));n.rotateX(-Math.PI/2);const i=n.attributes.position,s=new Float32Array(i.count*3),o=new St(14922872),a=new St(11055202),l=new St(5211460),c=new St(3105337),h=new St(8295503),u=new St(11051889);for(let f=0;f<i.count;f++){const _=i.getX(f),g=i.getZ(f),m=this.localTerrainHeightAt(_,g);i.setY(f,m);let p=l;if(m<2.4)p=o;else if(m<5){const v=(m-2.4)/2.6;p=o.clone().lerp(a,v)}else if(m<11.5){const v=(m-5)/6.5;p=a.clone().lerp(l,v)}else if(m<18){const v=(m-11.5)/6.5;p=l.clone().lerp(c,v)}else if(m<22.5){const v=(m-18)/4.5;p=c.clone().lerp(h,v)}else{const v=Math.min(1,(m-22.5)/3);p=h.clone().lerp(u,v)}const x=Math.hypot(_-ge.x,g-ge.z);if(x<bo){const v=1-ae.smoothstep(x,bu*.7,bo);p=p.clone().lerp(new St(8230226),v*.55)}const M=Er(_,g);if(M<4.2){const v=new St(9141606),w=new St(4867126);p=p.clone().lerp(v,ae.smoothstep(4.2-M,0,2)*.8),p=p.clone().lerp(w,ae.smoothstep(2.6-M,0,1.4)*.88)}s[f*3]=p.r,s[f*3+1]=p.g,s[f*3+2]=p.b}n.setAttribute("color",new Ie(s,3)),n.computeVertexNormals();const d=new $(n,OM(this.materials,!0));return d.name="MajesticTerrainSurface",d.receiveShadow=!0,d}createSummitAltar(){const t=new Yt;t.name="SummitAltar";const e=this.localTerrainHeightAt(0,0),n=this.laterite(),i=this.brick(),s=this.patina(),o=this.lacquer(),a=this.mat(7897978,.74),l=this.mat(14265170,.3,.8),c=new nn({color:16758903,emissive:16741416,emissiveIntensity:.9,roughness:.5});this.materials.push(c);const h=new nn({color:12618318,roughness:.4,metalness:.72,emissive:3809288,emissiveIntensity:.55});this.materials.push(h);const u=e+.95,d=e+1.95,f=e+2.95,_=new $(this.geo(new zt(11.9,13,2.6,72)),n);_.position.y=e-.85,_.castShadow=!0,_.receiveShadow=!0,t.add(_);const g=new $(this.geo(new zt(11.2,11.8,1.5,72)),a);g.position.y=e+.2,g.castShadow=!0,g.receiveShadow=!0,t.add(g);const m=new $(this.geo(new zt(9.7,10.4,1,56)),i);m.position.y=e+1.45,m.castShadow=!0,m.receiveShadow=!0,t.add(m);const p=new $(this.geo(new zt(6.9,7.6,1,56)),i);p.position.y=e+2.45,p.castShadow=!0,p.receiveShadow=!0,t.add(p);for(const[K,st]of[[11.16,u+.02],[9.92,d+.02],[7.12,f+.02]]){const J=new $(this.geo(new On(K,.14,8,64)),a);J.rotation.x=Math.PI/2,J.position.y=st,J.receiveShadow=!0,t.add(J)}const x=new $(this.geo(new bi(6.88,64)),i);x.rotation.x=-Math.PI/2,x.position.y=f+.02,x.receiveShadow=!0,t.add(x);const M=e-2,v=this.localTerrainHeightAt(0,16.2),w=(K,st,J,wt,Rt)=>{const nt=Math.max(2,Math.round((K-st)/.72)),ct=(K-st)/nt,mt=(wt-J)/nt,Wt=[];for(let Bt=0;Bt<nt;Bt++){const Dt=J+mt*(Bt+1)-M,le=new yt(Rt-Bt*.09,Dt,ct+.06);le.translate(0,M+Dt/2,K-ct*(Bt+.5)),Wt.push(le)}const N=zo(Wt,!1);if(Wt.forEach(Bt=>Bt.dispose()),!N)return;const ke=new $(this.geo(N),n);ke.castShadow=!0,ke.receiveShadow=!0,t.add(ke)};w(16.4,11,v+.12,u,6.2),w(11.6,9.35,u,d,4.9),w(8.3,5.7,d,f,4.2);const T=f+.19,E=new $(this.geo(new zt(2.3,2.4,.16,64)),s);E.position.y=f+.1,E.receiveShadow=!0,t.add(E);const b=[];for(const K of[2.12,1.56,.96]){const st=new On(K,.045,6,64);st.rotateX(Math.PI/2),st.translate(0,T,0),b.push(st)}for(let K=0;K<12;K++){const st=K/12*Math.PI*2,J=new yt(.98,.05,.13);J.rotateY(-st),J.translate(Math.cos(st)*.99,T,Math.sin(st)*.99),b.push(J)}for(let K=0;K<8;K++){const st=K/8*Math.PI*2+Math.PI/8,J=new Ye(.06,6,5);J.translate(Math.cos(st)*1.86,T,Math.sin(st)*1.86),b.push(J)}const y=zo(b,!1);b.forEach(K=>K.dispose()),y&&t.add(new $(this.geo(y),l));const S=new $(this.geo(new zt(.34,.4,.12,20)),s);S.position.y=T+.02,t.add(S);const C=new Yt;C.position.set(0,f+.03,-3.7);const I=new $(this.geo(new Ye(1,20,12)),a);I.scale.set(.95,.4,1.3),I.position.y=.36,I.castShadow=!0,C.add(I);const L=new $(this.geo(new zt(.15,.21,.46,8)),a);L.rotation.x=Math.PI/2,L.position.set(0,.26,1.02),C.add(L);const U=new $(this.geo(new Ye(.24,12,10)),a);U.scale.set(1,.85,1.15),U.position.set(0,.32,1.28),C.add(U);for(const K of[-1,1])for(const st of[-1,1]){const J=new $(this.geo(new Ye(.22,8,6)),a);J.scale.set(.7,.55,1.1),J.position.set(K*.66,.1,st*.8),C.add(J)}const B=new $(this.geo(new en(.1,.42,5)),a);B.position.set(0,.16,-1.4),B.rotation.x=-Math.PI*.4,C.add(B);const k=new $(this.geo(new yt(1.6,2,.32)),a);k.position.set(0,1.55,0),k.castShadow=!0,C.add(k);const X=new $(this.geo(new zt(.8,.8,.32,24)),a);X.rotation.x=Math.PI/2,X.position.set(0,2.55,0),C.add(X);const G=new $(this.geo(new yt(1.16,1.5,.05)),o);G.position.set(0,1.72,.19),C.add(G);for(const[K,st,J,wt]of[[1.32,.08,0,2.53],[1.32,.08,0,.91],[.08,1.7,-.62,1.72],[.08,1.7,.62,1.72]]){const Rt=new $(this.geo(new yt(K,st,.04)),l);Rt.position.set(J,wt,.21),C.add(Rt)}for(const K of[-.3,.3])for(const st of[1.25,1.55,1.85,2.15]){const J=new $(this.geo(new yt(.13,.13,.035)),l);J.position.set(K,st,.225),C.add(J)}t.add(C);const et=this.createBronzeCenser(h);et.position.set(-3.6,f,3.4),et.rotation.y=.3,et.scale.setScalar(.82),t.add(et);const at=26,_t=this.geo(new ie);_t.setAttribute("position",new Ie(new Float32Array(at*3),3));const Pt=new Fs({color:14470582,size:.92,map:br(this.materials),transparent:!0,opacity:.3,depthWrite:!1});this.materials.push(Pt),this.incense=new Tr(_t,Pt),this.incense.position.set(-3.6,f+1.35,3.4),this.incense.frustumCulled=!1,t.add(this.incense);const $t=(K,st)=>{const J=new Yt;J.position.set(K,f,st),J.scale.setScalar(.8);const wt=new $(this.geo(new yt(.62,.22,.62)),a);wt.position.y=.11,wt.receiveShadow=!0,J.add(wt);const Rt=new $(this.geo(new zt(.14,.19,1.05,6)),a);Rt.position.y=.74,J.add(Rt);const nt=new $(this.geo(new yt(.5,.46,.5)),c);nt.position.y=1.5,J.add(nt);for(const Wt of[0,Math.PI/2]){const N=new $(this.geo(new yt(.58,.56,.08)),a);N.position.y=1.5,N.rotation.y=Wt,J.add(N)}const ct=new $(this.geo(new en(.52,.36,4)),a);ct.position.y=1.96,ct.rotation.y=Math.PI/4,J.add(ct);const mt=new $(this.geo(new Ye(.07,6,5)),l);mt.position.y=2.18,J.add(mt),t.add(J)};for(const K of[-1,1])for(const st of[-1,1])$t(K*4.3,st*4.3);for(const K of[-1,1]){const st=K*4.85,J=15.2,wt=this.createStoneDragon(.85);wt.position.set(st,this.localTerrainHeightAt(st,J),J),wt.rotation.y=K*.22,t.add(wt)}const Y=new Ql(16753500,16,24,2);return Y.position.set(-1.8,f+2.4,5.4),t.add(Y),t}createSummitBackdrop(){const t=new Yt;t.name="SummitBackdrop";const e=this.foliageMaterial(4535081,.03),n=this.foliageMaterial(2448698,.09),i=this.foliageMaterial(6060602,.12),s=this.sharedStone(),o=18,a=new Ht(this.geo(new zt(.24,.4,3.8,6)),e,o),l=new Ht(this.geo(new en(2,5,7)),n,o*2),c=new Ut;for(let g=0;g<o;g++){const m=Math.PI*1.06+g/(o-1)*Math.PI*.88,p=15.5+this.random()*5.5,x=Math.cos(m)*p,M=Math.sin(m)*p,v=this.localTerrainHeightAt(x,M),w=.85+this.random()*.5;c.makeTranslation(x,v+1.9*w,M).scale(new P(w,w,w)),a.setMatrixAt(g,c),c.makeTranslation(x,v+4.5*w,M).scale(new P(w,w,w)),l.setMatrixAt(g*2,c),c.makeTranslation(x,v+6.2*w,M).scale(new P(w*.66,w*.8,w*.66)),l.setMatrixAt(g*2+1,c)}const h=16,u=new Ht(this.geo(new Ci(1,1)),i,h);let d=0;for(let g=0;g<h;g++){const m=g/h*Math.PI*2+.12,p=13.2+this.random()*1.6,x=Math.cos(m)*p,M=Math.sin(m)*p;if(M>9&&Math.abs(x)<4.2)continue;const v=this.localTerrainHeightAt(x,M),w=.45+this.random()*.35;c.makeTranslation(x,v+.4*w,M).scale(new P(w*1.4,w*.8,w*1.3)),u.setMatrixAt(d++,c)}u.count=d;const f=7,_=new Ht(this.geo(new Xe(1.4,0)),s,f);for(let g=0;g<f;g++){const m=Math.PI*1.1+this.random()*Math.PI*.8,p=13+this.random()*5,x=Math.cos(m)*p,M=Math.sin(m)*p,v=this.localTerrainHeightAt(x,M),w=.45+this.random()*.6;c.makeTranslation(x,v+.3*w,M).scale(new P(w*1.2,w*.8,w)),_.setMatrixAt(g,c)}return a.castShadow=l.castShadow=!0,_.castShadow=_.receiveShadow=!0,t.add(a,l,u,_),t}createGrandWaterfalls(){const t=new Yt;t.name="GrandWaterfalls";const e=this.streamMaterial({uFlowSpeed:3.4,uFoam:.9,uInvert:1,uWhiteness:.9,uSideFade:1}),n=this.streamMaterial({uFlowSpeed:1.15,uFoam:.8,uRadial:1,uWhiteness:.14}),i=this.sharedStone(),s=this.wetStone(),o=this.geo(new Xe(1,1)),a=this.stoneSlots(new Ht(this.geo(new Xe(1,0)),s,90),new Ht(o,i,110)),l=1.1;for(const[b,y,S]of[[-21,4.5,10],[-15,3.6,8.4]]){const C=this.localTerrainHeightAt(b,18),I=new $(this.geo(new cs(y,S+l,8,26)),e);I.position.set(b,C+.25+(S-l)*.5,16.2),t.add(I);for(let U=0;U<13;U++){const B=b+(U-6)*(y/11)+(this.random()-.5)*.5,k=12.2+this.random()*2.8,X=U%3,G=this.localTerrainHeightAt(B,k)+S*(.24+X*.3)+.5;this.addStone(a[1],B,k,G,1+this.random()*.55,.12,1.45)}const L=new $(this.geo(new yt(y+1.2,.65,2.2)),i);L.position.set(b,C+S+.45,14.9),L.castShadow=!0,t.add(L);for(let U=0;U<4;U++){const B=b-y*.45+U*y/3.2;this.addStone(a[0],B,15.1,C+S+.55,.24+this.random()*.16,-.1)}for(let U=0;U<7;U++){const B=b+(this.random()-.5)*(y+3.2),k=17.4+this.random()*3.4;this.addStone(a[0],B,k,this.localTerrainHeightAt(B,k)+.34,.3+this.random()*.3,.32)}}const c=this.geo(new bi(7,48));c.rotateX(-Math.PI/2);const h=c.attributes.position;for(let b=0;b<h.count;b++){const y=h.getX(b)-18,S=h.getZ(b)+18,C=ae.smoothstep(Math.hypot(h.getX(b),h.getZ(b)),4.9,6.9);h.setY(b,this.localTerrainHeightAt(y,S)+.32-C*.5)}c.computeVertexNormals();const u=new $(c,n);u.position.set(-18,0,18),t.add(u);for(let b=0;b<34;b++){const y=b/34*Math.PI*2+this.random()*.12,S=6.5+this.random()*1.9,C=-18+Math.cos(y)*S,I=18+Math.sin(y)*S,L=this.random()>.7;this.addStone(L?a[1]:a[0],C,I,this.localTerrainHeightAt(C,I)+.3,L?.45+this.random()*.3:.2+this.random()*.22,.3)}for(let b=0;b<6;b++){const y=this.random()*Math.PI*2,S=1.4+this.random()*3.4,C=-18+Math.cos(y)*S,I=18+Math.sin(y)*S;this.addStone(a[0],C,I,this.localTerrainHeightAt(C,I)+.36,.16+this.random()*.18,-.2)}const d=[[13.4,19.8,2],[12.2,19.1,2.4],[11,18.3,2.4],[9.8,17.3,2.5],[8.6,16.1,2.5]];for(const[b,y,S]of d)for(let C=0;C<11;C++){const I=-27+C/10*18+(this.random()-.5)*.8,L=S*(.85+this.random()*.35);this.addStone(a[1],I,b+(this.random()-.5)*.7,y+(this.random()-.5)*.45,L,0,.62)}const f=this.foliageMaterial(4535081,.04),_=this.foliageMaterial(2580283,.1),g=[[-25.6,11.6],[-23.2,10.2],[-20.6,11.4],[-18,10],[-15.4,11.2],[-12.8,10.2],[-10.6,11.8],[-24,13],[-12,13.2]],m=new Ht(this.geo(new zt(.22,.4,4.4,6)),f,g.length),p=new Ht(this.geo(new en(1.9,4.8,7)),_,g.length*2),x=new Ut;for(let b=0;b<g.length;b++){const[y,S]=g[b],C=19.9+this.random()*.4,I=.85+this.random()*.4;x.makeTranslation(y,C+2.2*I,S).scale(new P(I,I,I)),m.setMatrixAt(b,x),x.makeTranslation(y,C+4.1*I,S).scale(new P(I,I,I)),p.setMatrixAt(b*2,x),x.makeTranslation(y,C+5.5*I,S).scale(new P(I*.66,I*.8,I*.66)),p.setMatrixAt(b*2+1,x)}m.castShadow=p.castShadow=!0,t.add(m,p);const M=this.foliageMaterial(5206072,.14),v=[[-26.8,16.2],[-25.9,18.4],[-24.6,20.6],[-11.2,16],[-10.2,18.2],[-11.4,21],[-24.5,22.8],[-11,22.4],[-26,13.2]],w=new Ht(this.geo(new Ci(1,1)),M,v.length);for(let b=0;b<v.length;b++){const[y,S]=v[b],C=.5+this.random()*.4;x.makeTranslation(y,this.localTerrainHeightAt(y,S)+.42*C,S).scale(new P(C*1.45,C*.8,C*1.35)),w.setMatrixAt(b,x)}w.castShadow=!0,t.add(w);for(const b of this.finishStones(...a))t.add(b);const T=this.geo(new ie);T.setAttribute("position",new Ot(new Float32Array(270),3));const E=new Fs({color:15335418,size:1.6,map:br(this.materials),transparent:!0,opacity:.5,depthWrite:!1,sizeAttenuation:!0,blending:qn});return this.materials.push(E),this.spray=new Tr(T,E),this.spray.frustumCulled=!1,t.add(this.spray),t}createMeanderingRiver(){const t=new Yt;t.name="MeanderingRiver";const e=this.streamMaterial({uFlowSpeed:1.35,uFoam:.4}),n=[],i=[],s=[],o=170,a=8;for(let c=0;c<=o;c++){const h=c/o,u=this.riverCurve.getPoint(h),d=this.riverCurve.getTangent(h),f=new ot(-d.z,d.x).normalize(),_=this.riverHalfWidth(h)*(1+Math.sin(h*23)*.07);for(let g=0;g<=a;g++){const m=g/(a/2)-1,p=u.x+f.x*m*_,x=u.z+f.y*m*_,M=this.localTerrainHeightAt(p,x)+this.riverSurfaceLift(Math.abs(m));n.push(p,M,x),i.push(g/a,h*7)}if(c<o)for(let g=0;g<a;g++){const m=c*(a+1)+g,p=a+1;s.push(m,m+1,m+p,m+1,m+p+1,m+p)}}const l=this.geo(new ie);return l.setAttribute("position",new Ot(n,3)),l.setAttribute("uv",new Ot(i,2)),l.setIndex(s),l.computeVertexNormals(),t.add(new $(l,e)),t.add(this.createRiverStones()),t}createRiverStones(){const t=new Yt;t.name="RiverStones";const e=new Ht(this.geo(new Ci(1,1)),this.gravelStone(),320),n=new Ht(this.geo(new Xe(1,0)),this.gravelStone(),150),i=new Ht(this.geo(new Xe(1,1)),this.sharedStone(),34),s=this.stoneSlots(e,n,i),o=l=>{const c=this.riverCurve.getPoint(l),h=this.riverCurve.getTangent(l);return{point:c,normal:new ot(-h.z,h.x).normalize(),halfWidth:this.riverHalfWidth(l)}};for(let l=0;l<210;l++){const c=.03+this.random()*.94,{point:h,normal:u,halfWidth:d}=o(c),f=this.random()>.84,_=f?(this.random()-.5)*.7:(this.random()>.5?1:-1)*(.55+this.random()*.5),g=h.x+u.x*_*d,m=h.z+u.y*_*d,p=this.localTerrainHeightAt(g,m)+this.riverSurfaceLift(Math.abs(_)),x=this.random(),M=x>.93?s[2]:x>.55?s[1]:s[0],v=M===s[2],w=M===s[1],T=v?.45+this.random()*.35:w?.28+this.random()*.22:.14+this.random()*.12;this.addStone(M,g,m,p+.05,T,f?-.5:.45,v?.62:w?.46:.34)}for(let l=0;l<12;l++){const c=.06+l/12*.9+this.random()*.03,{point:h,normal:u,halfWidth:d}=o(c),f=(l%2===0?1:-1)*(.68+this.random()*.22),_=h.x+u.x*f*d,g=h.z+u.y*f*d,m=new ot(h.x-_,h.z-g).normalize();for(let p=0;p<14;p++){const x=this.random(),M=_+m.x*(this.random()-.5)*4.2+u.x*(x-.5)*1.9,v=g+m.y*(this.random()-.5)*4.2+u.y*(x-.5)*1.9,w=this.localTerrainHeightAt(M,v);this.addStone(s[0],M,v,w+.14,.12+this.random()*.14,.28,.3)}}const a=this.riverCurve.getPoint(.985);for(let l=0;l<16;l++){const c=a.x+(this.random()-.5)*7.5,h=a.z+(this.random()-.5)*6,u=this.localTerrainHeightAt(c,h);this.addStone(this.random()>.55?s[1]:s[0],c,h,u+.2,.2+this.random()*.3,.22)}for(const l of this.finishStones(...s))l.frustumCulled=!1,l===e&&(l.castShadow=!1),t.add(l);return t}createCoveredBridge(){const t=new Yt;t.name="CoveredBridge";const e=.34,n=this.riverCurve.getPoint(e),i=this.riverCurve.getTangent(e),s=Math.atan2(-i.z,i.x),a=this.riverHalfWidth(e)*2+3.4,c=this.localTerrainHeightAt(n.x,n.z)+this.riverSurfaceLift(0)+1.55;t.position.set(n.x,0,n.z),t.rotation.y=s;const h=this.limWood(),u=this.roofTile(),d=(x,M)=>new ot(n.x+Math.cos(s)*x+Math.sin(s)*M,n.z-Math.sin(s)*x+Math.cos(s)*M),f=new $(this.geo(new yt(2.9,.3,a+1.8)),h);f.position.set(0,c,0),f.castShadow=!0,f.receiveShadow=!0,t.add(f);for(const x of[-1.05,1.05]){const M=new $(this.geo(new yt(.28,.34,a+1.2)),h);M.position.set(x,c-.3,0),t.add(M)}for(const x of[-1.3,1.3]){const M=new $(this.geo(new yt(a,.16,.16)),h);M.position.set(0,c+1.02,x),t.add(M);const v=new $(this.geo(new yt(a,.1,.1)),h);v.position.set(0,c+.55,x),t.add(v);const w=Math.max(4,Math.round(a/1.7));for(let T=0;T<=w;T++){const E=(T/w-.5)*(a-.4),b=new $(this.geo(new yt(.16,1.1,.16)),h);b.position.set(E,c+.55,x),t.add(b)}}for(const x of[-1.55,1.55])for(const M of[-a*.4,0,a*.4]){const v=new $(this.geo(new zt(.16,.19,3.1,7)),h);v.position.set(M,c+1.55,x),v.castShadow=!0,t.add(v)}for(const x of[-a*.4,0,a*.4]){const M=new $(this.geo(new yt(.22,.22,3.5)),h);M.position.set(x,c+3.05,0),t.add(M)}const _=new $(this.geo(this.curvedRoofGeometry(a+2,4.6,2.1,.8)),u);_.rotation.y=Math.PI/2,_.position.set(0,c+3.12,0),_.castShadow=!0,t.add(_);const g=new $(this.geo(new yt(.3,.3,a+2.3)),h);g.position.set(0,c+5.24,0),t.add(g);const m=this.geo(new Xe(1,0)),p={mesh:new Ht(m,this.laterite(),16),index:0};for(const x of[-1,1])for(let M=0;M<8;M++){const v=x*(a*.5+.35+this.random()*.5),w=(M/7-.5)*3.4,T=d(w,v);this.addStone(p,w,v,this.localTerrainHeightAt(T.x,T.y)+.5,.3+this.random()*.22,.3)}for(const x of this.finishStones(p))t.add(x);return t}curvedRoofGeometry(t,e,n,i){const o=t*.2,a=[],l=[],c=[],h=[1,-1,-1,1],u=[1,1,-1,-1],d=[0,t,t+e,t*2+e],f=Math.hypot(n,e*.5);for(let g=0;g<=12;g++){const m=g/12,p=ae.lerp(o,t*.5,Math.pow(m,.8)),x=ae.lerp(e*.05,e*.5,m),M=n*(1-Math.pow(m,1.3))+i*Math.pow(m,5);for(let v=0;v<4;v++)a.push(h[v]*p,M,u[v]*x),l.push(d[v]/2.2,m*f/2.2)}for(let g=0;g<12;g++)for(let m=0;m<4;m++){const p=(m+1)%4,x=g*4+m,M=g*4+p,v=(g+1)*4+m,w=(g+1)*4+p;c.push(x,v,M,M,v,w)}const _=new ie;return _.setAttribute("position",new Ot(a,3)),_.setAttribute("uv",new Ot(l,2)),_.setIndex(c),_.computeVertexNormals(),_}addCurvedRoof(t,e,n,i,s,o,a,l,c=0,h=!0){const u=new $(this.geo(this.curvedRoofGeometry(e,n,i,s)),this.roofTile());u.position.set(o,a,l),u.rotation.y=c,u.castShadow=!0,u.receiveShadow=!0,t.add(u);const d=this.mat(2957592,.72),f=Math.cos(c),_=Math.sin(c),g=[{sx:e+.35,sz:.2,px:0,pz:n*.5+.02},{sx:e+.35,sz:.2,px:0,pz:-n*.5-.02},{sx:.2,sz:n+.35,px:e*.5+.02,pz:0},{sx:.2,sz:n+.35,px:-e*.5-.02,pz:0}];for(const x of g){const M=new $(this.geo(new yt(x.sx,.24,x.sz)),d);M.position.set(o+x.px*f+x.pz*_,a+s-.12,l-x.px*_+x.pz*f),M.rotation.y=c,t.add(M)}if(!h)return;const m=this.geo(new Nr(new ci([new P(0,0,0),new P(.16,.42,.1),new P(.06,.82,.24)]),5,.09,5,!1)),p=[{px:e*.5,pz:n*.5,yaw:Math.PI*.25},{px:-e*.5,pz:n*.5,yaw:Math.PI*.75},{px:-e*.5,pz:-n*.5,yaw:Math.PI*1.25},{px:e*.5,pz:-n*.5,yaw:Math.PI*1.75}];for(const x of p){const M=new $(m,d);M.position.set(o+x.px*f+x.pz*_,a+s-.05,l-x.px*_+x.pz*f),M.rotation.y=x.yaw+c,M.scale.setScalar(1+Math.abs(e)*.02),t.add(M)}}createRiceTerraces(){const t=new Yt;t.name="RiceTerraces";const e=Os.x,n=Os.z,i=this.rawTerrainHeight(e,n)+1.1,s=.85,o=8,a=48,l=Math.atan2(n,e),c=2.2,h=l-c*.5,u=(w,T)=>{const E=Math.cos(w),b=Math.sin(w);let y=.7,S=this.rawTerrainHeight(e+E*y,n+b*y);for(let C=1;C<=60;C++){const I=.7+C/60*18.5,L=this.rawTerrainHeight(e+E*I,n+b*I);if(S>=T&&L<T){const U=(S-T)/Math.max(1e-4,S-L);return y+(I-y)*U}y=I,S=L}return S>=T?18.5:.9},d={position:[],color:[],uv:[],index:[]},f={position:[],uv:[],index:[]},_=[new St(5210164),new St(4684335),new St(4156969)];for(let w=0;w<o;w++){const T=i-w*s,E=[],b=[];for(let C=0;C<=a;C++){const I=h+C/a*c;E.push(u(I,T)),b.push(u(I,T-s))}const y=d.position.length/3;for(let C=0;C<=a;C++){const I=h+C/a*c,L=Math.cos(I),U=Math.sin(I),B=e+L*E[C],k=n+U*E[C],X=e+L*b[C],G=n+U*b[C];d.position.push(B,T,k,X,T,G),d.uv.push(B*.2,k*.2,X*.2,G*.2);const et=_[(w+(C>>3))%_.length],at=.92+this.random()*.14;d.color.push(et.r*at,et.g*at,et.b*at,et.r*at,et.g*at,et.b*at)}for(let C=0;C<a;C++){const I=y+C*2,L=y+C*2+1,U=y+(C+1)*2,B=y+(C+1)*2+1;d.index.push(I,U,L,L,U,B)}const S=f.position.length/3;for(let C=0;C<=a;C++){const I=h+C/a*c,L=Math.cos(I),U=Math.sin(I),B=e+L*b[C],k=n+U*b[C];f.position.push(B,T,k,B,T-s,k),f.uv.push(B*.25,T*.45,B*.25,(T-s)*.45)}for(let C=0;C<a;C++){const I=S+C*2,L=S+C*2+1,U=S+(C+1)*2,B=S+(C+1)*2+1;f.index.push(I,U,L,L,U,B)}for(const C of[0,a]){const I=h+C/a*c,L=Math.cos(I),U=Math.sin(I),B=e+L*E[C],k=n+U*E[C],X=e+L*b[C],G=n+U*b[C],et=f.position.length/3;f.position.push(B,T,k,X,T,G,B,T-s,k,X,T-s,G),f.uv.push(B*.25,T*.45,X*.25,T*.45),f.index.push(et,et+1,et+2,et+1,et+3,et+2)}}const g=this.geo(new ie);g.setAttribute("position",new Ot(d.position,3)),g.setAttribute("color",new Ot(d.color,3)),g.setAttribute("uv",new Ot(d.uv,2)),g.setIndex(d.index),g.computeVertexNormals();const m=new nn({vertexColors:!0,roughness:.96,metalness:0});this.materials.push(m);const p=new $(g,m);p.receiveShadow=!0,t.add(p);const x=this.geo(new ie);x.setAttribute("position",new Ot(f.position,3)),x.setAttribute("uv",new Ot(f.uv,2)),x.setIndex(f.index),x.computeVertexNormals();const M=this.laterite().clone();M.side=Ee,this.materials.push(M);const v=new $(x,M);return v.castShadow=!0,v.receiveShadow=!0,t.add(v),t}createLotusPond(){const t=new Yt;t.name="LotusPond";const e=qe.x,n=qe.z,i=this.localTerrainHeightAt(e,n)+.56,s=new be({vertexShader:Ja,fragmentShader:Qa,uniforms:{uTime:{value:0},uPool:{value:1},uSunDirection:{value:this.sunDirection}},transparent:!0});this.materials.push(s);const o=new $(this.geo(new bi(4.85,48)),s);o.rotation.x=-Math.PI/2,o.position.set(e,i,n),t.add(o);const a={mesh:new Ht(this.geo(new Xe(1,0)),this.laterite(),84),index:0};for(let m=0;m<52;m++){const p=m/52*Math.PI*2+this.random()*.05,x=4.45+this.random()*.55,M=e+Math.cos(p)*x,v=n+Math.sin(p)*x;this.addStone(a,M,v,this.localTerrainHeightAt(M,v)+.12,.3+this.random()*.18,.3)}for(let m=0;m<22;m++){const p=m/22*Math.PI*2+this.random()*.14,x=4+this.random()*.35,M=e+Math.cos(p)*x,v=n+Math.sin(p)*x;this.addStone(a,M,v,i+.04,.16+this.random()*.12,.25)}for(const m of this.finishStones(a))t.add(m);const l=this.geo(new bi(.42,9));l.rotateX(-Math.PI/2);const c=new nn({color:3699007,roughness:.74,metalness:0,side:Ee});this.materials.push(c);const h=new Ht(l,c,40),u=new Ut,d=new he,f=new Te;for(let m=0;m<40;m++){const p=this.random()*Math.PI*2,x=Math.sqrt(this.random())*3.6;f.set(0,this.random()*Math.PI*2,0),d.setFromEuler(f),u.compose(new P(e+Math.cos(p)*x,i+.03,n+Math.sin(p)*x),d,new P(.62+this.random()*.6,1,.62+this.random()*.6)),h.setMatrixAt(m,u)}h.instanceMatrix.needsUpdate=!0,t.add(h);const _=new nn({color:15306660,roughness:.6,flatShading:!0});this.materials.push(_);const g=new Ht(this.geo(new en(.19,.58,6)),_,9);for(let m=0;m<9;m++){const p=this.random()*Math.PI*2,x=.8+this.random()*2.2;u.compose(new P(e+Math.cos(p)*x,i+.3,n+Math.sin(p)*x),new he,new P(1,1,1)),g.setMatrixAt(m,u)}return g.instanceMatrix.needsUpdate=!0,t.add(g),t}createVillage(){const t=new Yt;t.name="VietVillage";const e=ge.x,n=ge.z,i=this.villagePadY,s=i+.34,o=this.limWood(),a=this.brick(),l=this.lacquer(),c=this.patina(),h=this.laterite(),u=this.mat(13081407,.32,.82),d=new $(this.geo(new yt(18,.34,12)),a);d.position.set(e,i+.17,n+1),d.receiveShadow=!0,d.castShadow=!0,t.add(d);for(const[nt,ct,mt,Wt]of[[0,-5,18.4,.4],[0,7,18.4,.4],[-9,1,.4,12.4],[9,1,.4,12.4]]){const N=new $(this.geo(new yt(mt,.5,Wt)),h);N.position.set(e+nt,i+.25,n+1+ct),N.receiveShadow=!0,t.add(N)}const f=n-2.6,_=s+.7,g=new $(this.geo(new yt(11.8,.7,8)),h);g.position.set(e,s+.35,f),g.receiveShadow=!0,g.castShadow=!0,t.add(g);for(let nt=0;nt<3;nt++){const ct=new $(this.geo(new yt(4.2-nt*.3,.24,.6)),h);ct.position.set(e,s+.5-nt*.18,f+4.4+nt*.55),ct.receiveShadow=!0,t.add(ct)}const m=_+3.9,p=[-4.6,-1.55,1.55,4.6];for(const nt of p)for(const ct of[-1.55,1.55]){const mt=new $(this.geo(new zt(.44,.52,.32,8)),h);mt.position.set(e+nt,_+.16,f+ct),t.add(mt);const Wt=new $(this.geo(new zt(.26,.31,3.9,8)),o);Wt.position.set(e+nt,_+1.95,f+ct),Wt.castShadow=!0,t.add(Wt)}for(const nt of[-1.55,1.55]){const ct=new $(this.geo(new yt(10.4,.36,.34)),o);ct.position.set(e,m-.18,f+nt),t.add(ct)}for(const nt of[-4.6,4.6]){const ct=new $(this.geo(new yt(.34,.36,3.5)),o);ct.position.set(e+nt,m-.18,f),t.add(ct)}const x=new $(this.geo(new yt(.3,.32,3.4)),o);x.position.set(e,m-.2,f),t.add(x);const M=new $(this.geo(new yt(9.9,3.1,.2)),o);M.position.set(e,_+1.55,f-3.35),M.castShadow=!0,t.add(M);for(const nt of[-3.2,0,3.2]){const ct=new $(this.geo(new yt(2.4,2.4,.1)),l);ct.position.set(e+nt,_+1.5,f-3.22),t.add(ct)}for(const nt of[-5,5]){const ct=new $(this.geo(new yt(.2,1.5,3.6)),o);ct.position.set(e+nt,_+.75,f),t.add(ct)}const v=new $(this.geo(new yt(2.8,.85,.14)),l);v.position.set(e,_+3.35,f+1.66),t.add(v);for(const nt of[-.5,.5]){const ct=new $(this.geo(new yt(3,.09,.18)),u);ct.position.set(e,_+3.35+nt,f+1.67),t.add(ct)}this.addCurvedRoof(t,13.6,9.4,3.3,.95,e,m,f,0,!0);const w=m+3.3,T=new $(this.geo(new Ye(.34,10,8)),u);T.position.set(e,w+.48,f),t.add(T);for(const nt of[-1,1]){const ct=new ci([new P(e+nt*2.2,w-.02,f),new P(e+nt*1.45,w+.44,f),new P(e+nt*.42,w+.34,f)]),mt=new $(this.geo(new Nr(ct,8,.075,5,!1)),u);t.add(mt)}const E=new nn({color:9052694,emissive:16738863,emissiveIntensity:1.15,roughness:.48});this.materials.push(E);const b=this.mat(2759698,.9);for(const nt of[-1,1]){const ct=e+nt*3.1,mt=new $(this.geo(new Ye(.34,12,10)),E);mt.scale.set(1,1.22,1),mt.position.set(ct,m-.92,f+3.1),t.add(mt);const Wt=new $(this.geo(new zt(.15,.19,.1,8)),u);Wt.position.set(ct,m-.48,f+3.1),t.add(Wt);const N=new $(this.geo(new zt(.014,.014,.4,4)),b);N.position.set(ct,m-.25,f+3.1),t.add(N)}const y=new Ql(16753244,22,24,2);y.position.set(e,m-.35,f+3.4),t.add(y);const S=n+9.3,C=i+3.96,I=new $(this.geo(new yt(10.8,.36,3.4)),a);I.position.set(e,i+.18,S),I.receiveShadow=!0,t.add(I);for(const nt of[-4.1,-1.55,1.55,4.1]){const ct=new $(this.geo(new yt(.85,3.6,.85)),h);ct.position.set(e+nt,i+2.16,S),ct.castShadow=!0,t.add(ct);const mt=new $(this.geo(new yt(1.1,.22,1.1)),o);mt.position.set(e+nt,C+.08,S),t.add(mt)}for(const nt of[-2.82,2.82]){const ct=new $(this.geo(new yt(2.2,.95,.6)),o);ct.position.set(e+nt,C-.52,S),t.add(ct);const mt=new $(this.geo(new zt(.33,.33,.08,12)),l);mt.rotation.x=Math.PI/2,mt.position.set(e+nt,C-.52,S+.33),t.add(mt)}const L=new $(this.geo(new yt(2.5,.72,.14)),l);L.position.set(e,C-.45,S+.36),t.add(L),this.addCurvedRoof(t,4.9,3,1.55,.6,e,C+.24,S,0,!0);for(const nt of[-2.82,2.82])this.addCurvedRoof(t,3.3,2.5,1,.45,e+nt,C-1.05,S,0,!1);for(let nt=0;nt<2;nt++){const ct=new $(this.geo(new yt(4.4,.22,.8)),h);ct.position.set(e,i+.11+nt*.22,S+2-nt*.55),ct.receiveShadow=!0,t.add(ct)}const U=e-7.4,B=n+4.8,k=Math.min(this.localTerrainHeightAt(U,B),i),X=i-k+.7,G=new $(this.geo(new yt(4.8,X,4.8)),h);G.position.set(U,i-X*.5+.12,B),G.receiveShadow=!0,G.castShadow=!0,t.add(G);const et=i+.12;for(const nt of[-1.55,1.55])for(const ct of[-1.55,1.55]){const mt=new $(this.geo(new zt(.19,.23,3.2,7)),o);mt.position.set(U+nt,et+1.6,B+ct),mt.castShadow=!0,t.add(mt)}for(const nt of[-1.55,1.55]){const ct=new $(this.geo(new yt(3.5,.28,.26)),o);ct.position.set(U,et+3.15,B+nt),t.add(ct)}this.addCurvedRoof(t,5.2,5.2,1.7,.65,U,et+3.22,B,0,!0);const at=et+4;for(const nt of[-1,1])for(const ct of[-1,1]){const mt=new $(this.geo(new zt(.14,.17,2.4,6)),o);mt.position.set(U+nt,at+1.2,B+ct),t.add(mt)}const _t=new $(this.geo(new yt(1.5,.55,.12)),l);_t.position.set(U,at+1.5,B+1.02),t.add(_t),this.addCurvedRoof(t,3.7,3.7,1.3,.5,U,at+2.45,B,0,!0);const Pt=new $(this.geo(new zt(.3,.56,1,12)),c);Pt.position.set(U,at+1.85,B),Pt.castShadow=!0,t.add(Pt);const $t=new $(this.geo(new On(.18,.05,5,10)),c);$t.position.set(U,at+2.4,B),t.add($t);for(const nt of[-1,1]){const ct=new $(this.geo(new yt(2.3,.55,1.7)),h);ct.position.set(e+nt*4.9,s+.275,n+6.2),ct.receiveShadow=!0,t.add(ct);const mt=this.createStoneDragon(.95);mt.position.set(e+nt*4.9,s+.55,n+6.2),mt.rotation.y=nt*-.2,t.add(mt)}const Y=this.createBronzeCenser();Y.position.set(e,s,n+3.1),t.add(Y);const K=S+2.7,st=n+19.6,J=i+.08,wt=this.localTerrainHeightAt(e,st)+.1,Rt=10;for(let nt=0;nt<Rt;nt++){const ct=ae.lerp(J,wt,(nt+1)/Rt),mt=ae.lerp(K,st,(nt+.5)/Rt),Wt=new $(this.geo(new yt(3.4,.62,(st-K)/Rt+.12)),a);Wt.position.set(e,ct-.31,mt),Wt.receiveShadow=!0,t.add(Wt)}return t}createStoneDragon(t){const e=new Yt,n=this.sharedStone(),i=this.patina(),s=new ci([new P(0,.26,-.62),new P(.18,.5,-.24),new P(-.14,.86,.06),new P(.14,1.3,.38),new P(.02,1.52,.72)]),o=new $(this.geo(new Nr(s,16,.19,6,!1)),n);o.castShadow=!0,e.add(o);const a=new $(this.geo(new Xe(.33,0)),n);a.position.set(.02,1.58,.82),a.castShadow=!0,e.add(a);const l=new $(this.geo(new yt(.3,.19,.38)),n);l.position.set(.02,1.5,1.05),e.add(l);for(const h of[-1,1]){const u=new $(this.geo(new en(.06,.34,5)),n);u.position.set(.02+h*.14,1.86,.74),u.rotation.x=-.55,e.add(u);const d=new $(this.geo(new Ye(.055,6,5)),i);d.position.set(.02+h*.17,1.64,1.02),e.add(d);for(const f of[-.28,.34]){const _=new $(this.geo(new zt(.055,.075,.42,5)),n);_.position.set(.02+h*.17,.24,f),_.rotation.z=h*.35,e.add(_)}}const c=new $(this.geo(new en(.11,.5,5)),n);return c.position.set(0,.24,-.9),c.rotation.x=Math.PI*.62,e.add(c),e.scale.setScalar(t),e}createBronzeCenser(t){const e=new Yt,n=t??this.patina();for(let l=0;l<3;l++){const c=l/3*Math.PI*2,h=new $(this.geo(new zt(.08,.14,.55,6)),n);h.position.set(Math.cos(c)*.4,.27,Math.sin(c)*.4),e.add(h)}const i=new $(this.geo(new zt(.62,.44,.6,12)),n);i.position.y=.85,i.castShadow=!0,e.add(i);const s=new $(this.geo(new On(.62,.055,5,16)),n);s.rotation.x=Math.PI/2,s.position.y=1.15,e.add(s);const o=new $(this.geo(new en(.54,.36,12)),n);o.position.y=1.36,e.add(o);const a=new $(this.geo(new Ye(.09,6,5)),n);a.position.y=1.57,e.add(a);for(const l of[-1,1]){const c=new $(this.geo(new On(.16,.04,5,10)),n);c.position.set(l*.62,1,0),c.rotation.y=Math.PI/2,e.add(c)}return e}createPier(){const t=new Yt;t.name="OceanPier";const e=this.mat(9065525,.72);for(let s=0;s<11;s++){const o=new $(this.geo(new zt(.26,.32,3.8,6)),e);o.position.set(-52+s*1.5,1.9,-16),t.add(o)}const n=new $(this.geo(new yt(17.5,.42,2.8)),e);n.position.set(-45,3.4,-16),n.rotation.y=.12,n.castShadow=!0,t.add(n);const i=new $(this.geo(new Xe(.5)),this.mat(16707722,.2));return i.position.set(-53.5,4.3,-16),t.add(i),t}createBeachPalms(){const t=new Yt;t.name="CurvedCoconutPalms";const e=this.foliageMaterial(8016438,.05),n=this.foliageMaterial(3505986,.2);n.side=Ee;const i=this.mat(5913378,.72),s=Math.round(this.opts.palmCount*.66),o=this.curvedTrunkGeometry(),a=this.geo(o.geometry),l=this.geo(this.bladeGeometry(3.2,.52,.62)),c=this.geo(new Xe(.22,0)),h=new Ht(a,e,s),u=9,d=new Ht(l,n,s*u),f=new Ht(c,i,s*3),_=new Ut,g=new he,m=new Te,p=new P,x=new P(0,1,0),M=new P(0,0,1);for(let v=0;v<s;v++){const w=this.randomClearing(48,64,4),T=w.x,E=w.y,b=this.localTerrainHeightAt(T,E),y=this.random()*Math.PI*2,S=.85+this.random()*.35;m.set(0,y,0),g.setFromEuler(m),_.compose(new P(T,b,E),g,new P(S,S,S)),h.setMatrixAt(v,_),p.copy(o.crown).multiplyScalar(S).applyQuaternion(g),p.x+=T,p.y+=b,p.z+=E;for(let C=0;C<u;C++){const I=y+C/u*Math.PI*2+(this.random()-.5)*.22,L=new he().setFromAxisAngle(x,I),U=new he().setFromAxisAngle(M,.24+this.random()*.3),B=L.multiply(U),k=S*(.82+this.random()*.26);_.compose(p,B,new P(k,k,k)),d.setMatrixAt(v*u+C,_)}for(let C=0;C<3;C++){const I=this.random()*Math.PI*2;_.compose(new P(p.x+Math.cos(I)*.38*S,p.y-.3*S,p.z+Math.sin(I)*.38*S),g,new P(S,S,S)),f.setMatrixAt(v*3+C,_)}}return h.castShadow=!0,d.castShadow=!0,t.add(h,d,f),t}createCanopyForest(){const t=new Yt;t.name="CanopyForest";const e=this.foliageMaterial(5192236,.04),n=this.foliageMaterial(3107644,.14),i=this.foliageMaterial(4685637,.16),s=this.geo(new zt(.28,.5,4.6,6)),o=this.geo(new Xe(2.2,1)),a=this.opts.treeCount,l=new Ht(s,e,a),c=new Ht(o,n,a*2),h=new Ht(o,i,a),u=new Ut,d=new he,f=new Te;for(let _=0;_<a;_++){const g=this.randomClearing(18,50,4.5),m=g.x,p=g.y,x=this.localTerrainHeightAt(m,p),M=.8+this.random()*.7,v=this.random()*Math.PI*2;u.makeTranslation(m,x+2.3*M,p).scale(new P(M,M,M)),l.setMatrixAt(_,u);for(let w=0;w<2;w++){const T=v+w*Math.PI+(this.random()-.5)*.6,E=(.9+this.random()*.7)*M;f.set(this.random()*.25,this.random()*Math.PI,this.random()*.25),d.setFromEuler(f),u.compose(new P(m+Math.cos(T)*E,x+(4.4+this.random()*.5)*M,p+Math.sin(T)*E),d,new P(M*(.85+this.random()*.35),M*(.7+this.random()*.25),M*(.85+this.random()*.35))),c.setMatrixAt(_*2+w,u)}f.set(0,this.random()*Math.PI,0),d.setFromEuler(f),u.compose(new P(m,x+5.8*M,p),d,new P(M*.8,M*.72,M*.8)),h.setMatrixAt(_,u)}return l.castShadow=!0,c.castShadow=!0,h.castShadow=!0,t.add(l,c,h),t}createArecaPalms(){const t=new Yt;t.name="ArecaPalms";const e=this.foliageMaterial(9144947,.05),n=this.foliageMaterial(3963452,.24);n.side=Ee;const i=34,s=7,o=this.geo(new zt(.1,.16,8.2,5)),a=this.geo(this.bladeGeometry(1.9,.3,.35)),l=new Ht(o,e,i),c=new Ht(a,n,i*s),h=new Ut,u=new he,d=new Te,f=new P(0,1,0),_=new P(0,0,1);for(let g=0;g<i;g++){const m=this.randomClearing(13,56,3),p=m.x,x=m.y,M=this.localTerrainHeightAt(p,x),v=.78+this.random()*.38,w=this.random()*Math.PI*2;d.set(0,w,0),u.setFromEuler(d),h.compose(new P(p,M+4.1*v,x),u,new P(v,v,v)),l.setMatrixAt(g,h);const T=M+8.2*v-.15;for(let E=0;E<s;E++){const b=w+E/s*Math.PI*2+(this.random()-.5)*.18,y=new he().setFromAxisAngle(f,b),S=new he().setFromAxisAngle(_,.5+this.random()*.35),C=y.multiply(S);h.compose(new P(p,T,x),C,new P(v,v,v)),c.setMatrixAt(g*s+E,h)}}return l.castShadow=!0,c.castShadow=!0,t.add(l,c),t}createBananaPlants(){const t=new Yt;t.name="BananaGarden";const e=this.foliageMaterial(8359749,.08),n=this.foliageMaterial(5016126,.3);n.side=Ee;const i=[];for(let g=0;g<14;g++)i.push(this.randomClearing(13,52,2.4));for(const[g,m]of[[ge.x-14,ge.z+12],[ge.x+13,ge.z+10],[ge.x-12,ge.z-12],[qe.x-6,qe.z+6],[qe.x+6,qe.z-7],[ge.x+8,ge.z+15]])Er(g,m)>5.5&&i.push(new ot(g,m));const s=7,o=this.geo(new zt(.17,.27,2.2,6)),a=this.geo(this.bladeGeometry(2.6,.78,.42)),l=new Ht(o,e,i.length),c=new Ht(a,n,i.length*s),h=new Ut,u=new he,d=new Te,f=new P(0,1,0),_=new P(0,0,1);for(let g=0;g<i.length;g++){const{x:m,y:p}=i[g],x=this.localTerrainHeightAt(m,p),M=.9+this.random()*.4,v=this.random()*Math.PI*2;d.set(0,v,0),u.setFromEuler(d),h.compose(new P(m,x+1.1*M,p),u,new P(M,M,M)),l.setMatrixAt(g,h);const w=x+2.15*M;for(let T=0;T<s;T++){const E=v+T/s*Math.PI*2+(this.random()-.5)*.3,b=new he().setFromAxisAngle(f,E),y=new he().setFromAxisAngle(_,.18+this.random()*.5),S=b.multiply(y),C=M*(.86+this.random()*.26);h.compose(new P(m,w,p),S,new P(C,C,C)),c.setMatrixAt(g*s+T,h)}}return l.castShadow=!0,c.castShadow=!0,t.add(l,c),t}createBambooGroves(){const t=new Yt;t.name="BambooGroves";const e=this.foliageMaterial(8361024,.22),n=this.foliageMaterial(5012536,.45),i=[];for(let _=0;_<46;_++){const g=_/46*Math.PI*2;if(Math.abs(g-Math.PI/2)<.26)continue;const m=18.2+_%3*.6+this.random()*.8;i.push({x:ge.x+Math.cos(g)*m,z:ge.z+Math.sin(g)*m,s:.85+this.random()*.45})}for(let _=0;_<14;_++){const g=this.randomClearing(14,60,6);i.push({x:g.x,z:g.y,s:.75+this.random()*.6})}const s=[],o=[],a=new Ut,l=new he,c=new Te;for(const _ of i){const g=this.localTerrainHeightAt(_.x,_.z),m=14+Math.floor(this.random()*7);for(let p=0;p<m;p++){const x=this.random()*Math.PI*2,M=Math.sqrt(this.random())*1.1*_.s,v=_.x+Math.cos(x)*M,w=_.z+Math.sin(x)*M,T=(3.6+this.random()*1.8)*_.s;c.set((this.random()-.5)*.12,this.random()*Math.PI,(this.random()-.5)*.12),l.setFromEuler(c),a.compose(new P(v,g,w),l,new P(_.s,T,_.s)),s.push(a.clone());const E=3+Math.floor(this.random()*2);for(let b=0;b<E;b++){const y=this.random()*Math.PI*2,S=.55+this.random()*.7;c.set(Math.sin(y)*S,y,Math.cos(y)*S),l.setFromEuler(c);const C=(.5+this.random()*.34)*_.s;a.compose(new P(v+Math.cos(y)*.32*_.s,g+T*(.44+this.random()*.5),w+Math.sin(y)*.32*_.s),l,new P(C*1.5,C*1.15,C*1.5)),o.push(a.clone())}}}const h=this.geo(new zt(.055,.078,1,5));h.translate(0,.5,0);const u=new Ht(h,e,s.length);s.forEach((_,g)=>u.setMatrixAt(g,_)),u.instanceMatrix.needsUpdate=!0,u.castShadow=!0,t.add(u);const d=this.geo(new en(.42,1.15,6)),f=new Ht(d,n,o.length);return o.forEach((_,g)=>f.setMatrixAt(g,_)),f.instanceMatrix.needsUpdate=!0,f.castShadow=!0,t.add(f),t}createBanyanTrees(){const t=new Yt;t.name="BanyanTrees";const e=this.foliageMaterial(6113845,.04),n=this.foliageMaterial(3042107,.12),i=[{x:ge.x-17,z:ge.z+6},{x:qe.x-9.5,z:qe.z+4.5},{x:ge.x+13,z:ge.z-14}],s=new Ht(this.geo(new zt(.55,.95,4.8,7)),e,i.length),o=new Ht(this.geo(new en(.42,2.2,6)),e,i.length*4),a=new Ht(this.geo(new Xe(2.4,1)),n,i.length*6),l=new Ht(this.geo(new zt(.045,.07,1,4)),e,i.length*5),c=new Ut,h=new he,u=new Te;for(let d=0;d<i.length;d++){const{x:f,z:_}=i[d],g=this.localTerrainHeightAt(f,_),m=.9+this.random()*.25;c.compose(new P(f,g+2.4*m,_),new he,new P(m,m,m)),s.setMatrixAt(d,c);for(let p=0;p<4;p++){const x=p/4*Math.PI*2+.4;u.set(Math.sin(x)*.42,x,Math.cos(x)*.42),h.setFromEuler(u),c.compose(new P(f+Math.cos(x)*.7,g+.8,_+Math.sin(x)*.7),h,new P(m,m,m)),o.setMatrixAt(d*4+p,c)}for(let p=0;p<6;p++){const x=p/6*Math.PI*2+this.random()*.5,M=(p===0?0:1.6+this.random()*1.4)*m;u.set(this.random()*.3,this.random()*Math.PI,this.random()*.3),h.setFromEuler(u),c.compose(new P(f+Math.cos(x)*M,g+(5+this.random()*1.2)*m,_+Math.sin(x)*M),h,new P(m*(1.2+this.random()*.5),m*(.9+this.random()*.3),m*(1.2+this.random()*.5))),a.setMatrixAt(d*6+p,c)}for(let p=0;p<5;p++){const x=p/5*Math.PI*2+.25,M=(1.6+this.random()*1.2)*m,v=(3+this.random()*1.8)*m;c.compose(new P(f+Math.cos(x)*M,g+v*.5+.1,_+Math.sin(x)*M),new he,new P(1,v,1)),l.setMatrixAt(d*5+p,c)}}for(const d of[s,o,a,l])d.instanceMatrix.needsUpdate=!0,d.castShadow=!0;return t.add(s,o,a,l),t}curvedTrunkGeometry(){const t=[];let i=0,s=0,o=0;for(let l=0;l<7;l++){const c=new zt(.3-(l+1)*.012,.3-l*.012,.95,6);c.translate(0,.95*.5,0),c.applyMatrix4(new Ut().makeRotationZ(-o)),c.translate(i,s,0),t.push(c),i+=Math.sin(o)*.95,s+=Math.cos(o)*.95,o+=.115}const a=zo(t,!1);return t.forEach(l=>l.dispose()),{geometry:a,crown:new P(i,s+.05,0)}}bladeGeometry(t,e,n){const s=[],o=[],a=[];for(let c=0;c<=8;c++){const h=c/8,u=Math.sin(Math.PI*Math.min(1,h*.9+.1)),d=e*u*(.8+.2*Math.abs(Math.sin(h*Math.PI*7))),f=h*t,_=-n*h*h+.1*Math.sin(h*Math.PI)*e,g=d*.16;s.push(f,_+g,-d,f,_,0,f,_+g,d),o.push(h,0,h,.5,h,1)}for(let c=0;c<8;c++){const h=c*3,u=(c+1)*3;a.push(h,u,h+1,h+1,u,u+1,h+1,u+1,h+2,h+2,u+1,u+2)}const l=new ie;return l.setAttribute("position",new Ot(s,3)),l.setAttribute("uv",new Ot(o,2)),l.setIndex(a),l.computeVertexNormals(),l}createHighlandTrees(){const t=new Yt;t.name="HighlandTrees";const e=45,n=this.foliageMaterial(4535081,.03),i=this.foliageMaterial(2448698,.1),s=this.geo(new zt(.22,.38,3.8,6)),o=this.geo(new en(1.9,4.4,7)),a=new Ht(s,n,e),l=new Ht(o,i,e),c=new Ut;for(let h=0;h<e;h++){const u=this.randomClearing(10,30,3.4),d=u.x,f=u.y,_=this.localTerrainHeightAt(d,f),g=.7+this.random()*.55;c.makeTranslation(d,_+1.8*g,f).scale(new P(g,g,g)),a.setMatrixAt(h,c),c.makeTranslation(d,_+4.2*g,f).scale(new P(g,g,g)),l.setMatrixAt(h,c)}return a.castShadow=l.castShadow=!0,t.add(a,l),t}createTropicalShrubs(){const t=new Yt;t.name="TropicalShrubs";const e=this.foliageMaterial(8232006,.18),n=this.mat(14240575,.4),i=this.geo(new Ci(1.1,1)),s=this.geo(new Xe(.4)),o=this.opts.shrubCount,a=new Ht(i,e,o),l=new Ht(s,n,o),c=new Ut;for(let h=0;h<o;h++){const u=this.randomClearing(12,57,2.8),d=u.x,f=u.y,_=this.localTerrainHeightAt(d,f),g=.55+this.random()*.7;c.makeTranslation(d,_+.5*g,f).scale(new P(g*1.3,g*.75,g*1.3)),a.setMatrixAt(h,c),c.makeTranslation(d,_+1*g,f).scale(new P(g,g,g)),l.setMatrixAt(h,c)}return t.add(a,l),t}createMossyBoulders(){const t=this.opts.rockCount,e=new Ht(this.geo(new Xe(1.5,1)),this.sharedStone(),t);e.name="MossyBoulders";const n=new Ut;for(let i=0;i<t;i++){const s=this.randomClearing(14,62,3.5),o=s.x,a=s.y,l=this.localTerrainHeightAt(o,a),c=.6+this.random()*1.3;n.makeTranslation(o,l+.5*c,a).scale(new P(c*1.25,c*.8,c*1.2)),e.setMatrixAt(i,n)}return e.castShadow=!0,e.receiveShadow=!0,e}createCoastalMonuments(){const t=new Yt;t.name="CoastalStoneMonuments";const e=this.sharedStone(),n=this.mat(4945491),i=this.geo(new en(1,1,7));for(const[h,u,d]of[[-44,-36,7],[48,-24,6],[31,55,5]])for(let f=0;f<d;f++){const _=f*2.39996,g=h+Math.cos(_)*(1.5+f*1.15),m=u+Math.sin(_)*(1.5+f*1.15),p=3.5+f*17%11,x=new $(i,f%4===0?n:e);x.scale.set(1.8+f%3*.5,p,1.8+f%3*.5),x.position.set(g,this.localTerrainHeightAt(g,m)+p*.47,m),x.rotation.z=Math.sin(_)*.12,x.castShadow=!0,t.add(x)}const s=31,o=-28,a=this.localTerrainHeightAt(s,o);for(const[h,u,d]of[[8,.8,.4],[6.4,.65,1.1]]){const f=new $(this.geo(new zt(h,h+.3,u,12)),e);f.position.set(s,a+d,o),f.receiveShadow=!0,t.add(f)}const l=new $(this.geo(new On(5.5,.55,7,32)),n);l.position.set(s,a+1.68,o),l.rotation.x=Math.PI/2,t.add(l);const c=new $(this.geo(new bi(5.4,32)),new be({vertexShader:Ja,fragmentShader:Qa,uniforms:{uTime:{value:0},uPool:{value:1},uSunDirection:{value:this.sunDirection}},transparent:!0}));return this.materials.push(c.material),c.rotation.x=-Math.PI/2,c.position.set(s,a+1.55,o),t.add(c),t}createClouds(){const t=new Yt,e=new be({vertexShader:QM,fragmentShader:t1,uniforms:{uTime:{value:0},uSunDirection:{value:this.sunDirection}},transparent:!0,depthWrite:!1});this.materials.push(e);const n=11,i=this.opts.cloudCount,s=new Ht(this.geo(new Ci(1,2)),e,i*n);s.frustumCulled=!1;const o=new Ut,a=new P,l=new he,c=new Te,h=new P;let u=0;for(let d=0;d<i;d++){const f=d/i*Math.PI*2+(this.random()-.5)*.5,_=96+this.random()*130,g=Math.cos(f)*_,m=Math.sin(f)*_,p=96+this.random()*42,x=4.2+this.random()*6,M=this.random()*Math.PI,v=6+Math.floor(this.random()*5);for(let w=0;w<v&&u<s.count;w++){const T=v===1?0:w/(v-1)*2-1,E=(1-Math.abs(T)*.6)*(.8+this.random()*.5);a.set(g+Math.cos(M)*T*x+(this.random()-.5)*1.8,p+E*1.35+(this.random()-.5)*.8,m+Math.sin(M)*T*x+(this.random()-.5)*1.8),h.set(E*2.35+.8,E*1.25+.45,E*1.95+.7),c.set(0,this.random()*Math.PI,0),l.setFromEuler(c),o.compose(a,l,h),s.setMatrixAt(u++,o)}}return s.count=u,s.instanceMatrix.needsUpdate=!0,t.add(s),t.name="CumulusClouds",t}createCranes(){const t=new Yt;t.name="CraneFlock";const e=new Ni({color:16050902,side:Ee,transparent:!0,opacity:.94});this.materials.push(e);const n=this.geo(new en(.2,1.35,5));n.rotateX(Math.PI/2);const i=this.geo(new ie);i.setAttribute("position",new Ot([0,0,.34,0,0,-.34,1.85,0,-.5],3)),i.setIndex([0,1,2]),i.computeVertexNormals();const s=this.craneFlock.length;return this.craneBodies=new Ht(n,e,s),this.craneWings=new Ht(i,e,s*2),this.craneBodies.frustumCulled=!1,this.craneWings.frustumCulled=!1,this.cranes=t,t.add(this.craneBodies,this.craneWings),t}createFireflies(){const t=new Yt;t.name="Fireflies";const e=this.fireflyOrigin.length/3,n=new Float32Array(e*3);for(let o=0;o<e;o++){const a=this.random()*Math.PI*2,l=15+this.random()*38,c=Math.cos(a)*l,h=Math.sin(a)*l,u=this.localTerrainHeightAt(c,h)+1.2+this.random()*3.6;this.fireflyOrigin[o*3]=c,this.fireflyOrigin[o*3+1]=u,this.fireflyOrigin[o*3+2]=h,n[o*3]=c,n[o*3+1]=u,n[o*3+2]=h}const i=this.geo(new ie);i.setAttribute("position",new Ie(n,3));const s=new Fs({color:16765562,size:1,map:br(this.materials),transparent:!0,opacity:.85,depthWrite:!1,blending:qn});return this.materials.push(s),this.fireflies=new Tr(i,s),this.fireflies.frustumCulled=!1,t.add(this.fireflies),t}createFallingLeaves(){const t=new Yt;t.name="FallingLeaves";const e=64,n=new Ni({color:16777215,side:Ee});this.materials.push(n),this.leaves=new Ht(this.geo(new cs(.17,.34)),n,e),this.leaves.frustumCulled=!1;const i=[11891246,13605445,9399091,7179322,11031850];for(let s=0;s<e;s++){const o=this.random()*Math.PI*2,a=13+this.random()*45,l=Math.cos(o)*a,c=Math.sin(o)*a,h=this.localTerrainHeightAt(l,c);this.leafState.push({x:l,z:c,ground:h,fall:.9+this.random()*.9,sway:.5+this.random()*.9,phase:this.random(),spin:(this.random()-.5)*2.4}),this.leaves.setColorAt(s,new St(i[s%i.length]))}return this.leaves.instanceColor&&(this.leaves.instanceColor.needsUpdate=!0),t.add(this.leaves),t}createWaterfallMist(){const t=new Yt;t.name="WaterfallMist";const e=34,n=new Float32Array(e*3),i=this.geo(new ie);i.setAttribute("position",new Ie(n,3));const s=new Fs({color:15130575,size:4.2,map:br(this.materials),transparent:!0,opacity:.16,depthWrite:!1,sizeAttenuation:!0,blending:qn});return this.materials.push(s),this.fallMist=new Tr(i,s),this.fallMist.frustumCulled=!1,t.add(this.fallMist),t}foliageMaterial(t,e=.12){const n=new be({vertexShader:qM,fragmentShader:YM,uniforms:{uTime:{value:0},uWind:{value:e},uColor:{value:new St(t)},uSunDirection:{value:this.sunDirection},uFogColor:{value:new St(Sf)},uFogDensity:{value:yf}}});return this.foliageMaterials.push(n),this.materials.push(n),n}update(t){if(this.foliageMaterials.forEach(e=>{e.uniforms.uTime.value=t}),this.root.traverse(e=>{var i;const n=e;if(n.material&&!Array.isArray(n.material)){const s=n.material;(i=s.uniforms)!=null&&i.uTime&&(s.uniforms.uTime.value=t)}}),this.clouds&&(this.clouds.rotation.y=t*.0016),this.incense){const e=this.incense.geometry.getAttribute("position");for(let n=0;n<e.count;n++){const i=(t*.17+n/e.count)%1,s=n*2.39996+i*2.4,o=.08+i*.55;e.setXYZ(n,Math.cos(s)*o,i*2.7,Math.sin(s)*o)}e.needsUpdate=!0}if(this.spray){const e=this.spray.geometry.getAttribute("position");for(let n=0;n<e.count;n++){const i=(t*(.36+n%7*.035)+n*.619)%1,s=n*2.39996,o=1+i*5,a=-18+Math.cos(s)*o,l=18+Math.sin(s)*o;e.setXYZ(n,a,this.localTerrainHeightAt(a,l)+.4+i*(2+n%4),l)}e.needsUpdate=!0}if(this.fallMist){const e=this.fallMist.geometry.getAttribute("position");for(let n=0;n<e.count;n++){const i=(t*(.12+n%5*.014)+n*.37)%1,s=n%2===0?-21:-15,o=1.1+i*1.9,a=s+Math.cos(n*2.39996)*o,l=16+Math.sin(n*2.39996)*o*.55;e.setXYZ(n,a,this.localTerrainHeightAt(a,l)+.6+i*6.5,l)}e.needsUpdate=!0}if(this.craneBodies&&this.craneWings&&this.cranes){const e=new Ut,n=new P,i=new he,s=new he,o=new Te,a=new P;for(let l=0;l<this.craneFlock.length;l++){const c=this.craneFlock[l],h=c.angle+t*c.speed,u=Math.sin(t*.45+c.phase)*.7;n.set(Math.cos(h)*c.radius,c.height+u,Math.sin(h)*c.radius),o.set(0,-h,0),i.setFromEuler(o);const d=c.scale*1.5;e.compose(n,i,a.set(d,d,d)),this.craneBodies.setMatrixAt(l,e);const f=Math.sin(t*5.2+c.phase)*.55;for(let _=0;_<2;_++)o.set(0,-h,_===0?f:-f),s.setFromEuler(o),e.compose(n,s,a.set(_===0?d:-d,d,d)),this.craneWings.setMatrixAt(l*2+_,e)}this.craneBodies.instanceMatrix.needsUpdate=!0,this.craneWings.instanceMatrix.needsUpdate=!0}if(this.fireflies){const e=this.fireflies.geometry.getAttribute("position");for(let n=0;n<e.count;n++){const i=t*.6+n*1.7,s=this.fireflyOrigin[n*3],o=this.fireflyOrigin[n*3+1],a=this.fireflyOrigin[n*3+2];e.setXYZ(n,s+Math.sin(i*.9+n)*.9,o+Math.sin(i*1.4+n*.7)*.55,a+Math.cos(i*.75+n*1.3)*.9)}e.needsUpdate=!0}if(this.leaves){const e=new Ut,n=new P,i=new he,s=new Te,o=new P(1,1,1),a=14;for(let l=0;l<this.leafState.length;l++){const c=this.leafState[l],h=(t*c.fall/a+c.phase)%1;n.set(c.x+Math.sin(t*1.1+c.phase*6.2)*c.sway,c.ground+a-h*a,c.z+Math.cos(t*.9+c.phase*4.1)*c.sway*.7),s.set(t*c.spin,c.phase*6.28+t*1.2,t*c.spin*.7),i.setFromEuler(s),e.compose(n,i,o),this.leaves.setMatrixAt(l,e)}this.leaves.instanceMatrix.needsUpdate=!0}}dispose(){this.geometries.forEach(t=>t.dispose()),this.materials.forEach(t=>t.dispose())}}const Je=2,Pe=1.26,Ti=.7,We=Pe/2,An=.075,xr=.6,i1=-2.16,s1=-1.98,Du=new P,r1=new Te,Iu=new he,Lu=new P;function re(r,t,e,n=0,i=0,s=0,o=1,a=1,l=1){return Du.set(r,t,e),Iu.setFromEuler(r1.set(n,i,s)),Lu.set(o,a,l),new Ut().compose(Du,Iu,Lu)}function Ei(r){const t=r.some(i=>i.tint!==void 0),e=r.map(i=>{const s=i.geometry.clone().applyMatrix4(i.matrix),o=s.attributes.position.count;if(!s.index){const a=new Uint32Array(o);for(let l=0;l<o;l++)a[l]=l;s.setIndex(new Ie(a,1))}if(t){const a=i.tint??new St(1,1,1),l=new Float32Array(o*3);for(let c=0;c<o;c++)l[c*3]=a.r,l[c*3+1]=a.g,l[c*3+2]=a.b;s.setAttribute("color",new Ie(l,3))}return s}),n=zo(e,!1);return e.forEach(i=>i.dispose()),n.computeBoundingSphere(),n}function o1(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class a1{constructor(){q(this,"effects",new Yt);q(this,"geometries",[]);q(this,"materials",[]);q(this,"textures",[]);q(this,"entries",new Map);q(this,"model");q(this,"lacquerMaterial");q(this,"goldMaterial");q(this,"bronzeMaterial");q(this,"silkMaterial");q(this,"treasureMaterial");q(this,"ripples",[]);q(this,"highlightRing");q(this,"highlightMaterial");q(this,"shaft");q(this,"shaftMaterial");q(this,"sparks");q(this,"sparkMaterial");q(this,"sparkPositions");q(this,"sparkVelocities");q(this,"light");q(this,"sparkCount",140);q(this,"sparkLife",0);q(this,"sparkDuration",2.6);q(this,"lightState",{intensity:0});this.initMaterials(),this.initModel(),this.initEffects()}remember(t){return this.geometries.push(t),t}initMaterials(){const t=Yr("lacquer"),e=Yr("metal");this.textures.push(t.map,t.normalMap,t.roughnessMap),this.textures.push(e.map,e.normalMap,e.roughnessMap),this.lacquerMaterial=new nn({map:t.map,normalMap:t.normalMap,roughnessMap:t.roughnessMap,color:16757404,roughness:.34,metalness:.04,normalScale:new ot(.18,.18)}),this.goldMaterial=new nn({map:e.map,normalMap:e.normalMap,roughnessMap:e.roughnessMap,color:16773320,roughness:.38,metalness:.72,emissive:3810826,emissiveIntensity:.5,normalScale:new ot(.22,.22)}),this.bronzeMaterial=new nn({map:e.map,normalMap:e.normalMap,roughnessMap:e.roughnessMap,color:14260829,roughness:.46,metalness:.66,emissive:3021064,emissiveIntensity:.5,normalScale:new ot(.4,.4)}),this.silkMaterial=new nn({color:6033944,roughness:.96,metalness:0}),this.treasureMaterial=new nn({vertexColors:!0,color:16777215,roughness:.22,metalness:.86,emissive:11561492,emissiveIntensity:.24}),this.materials.push(this.lacquerMaterial,this.goldMaterial,this.bronzeMaterial,this.silkMaterial,this.treasureMaterial)}initModel(){const t=Ti-An,e=[],n=[],i=[],s=[],o=[],a=[],l=[],c=[],h=new Ye(.046,9,7),u=(w,T,E,b)=>{w.push({geometry:h,matrix:re(T,E,b)})};e.push({geometry:new yt(Je,An,Pe),matrix:re(0,An/2,0)});for(const w of[-1,1])e.push({geometry:new yt(Je,t,An),matrix:re(0,An+t/2,w*(Pe/2-An/2))}),e.push({geometry:new yt(.16,t,.02),matrix:re(0,An+t/2,w*(Pe/2+.006))});for(const w of[-1,1])e.push({geometry:new yt(An,t,Pe-An*2),matrix:re(w*(Je/2-An/2),An+t/2,0)});n.push({geometry:new yt(Je+.07,.15,Pe+.07),matrix:re(0,.075,0)}),n.push({geometry:new yt(Je+.05,.11,Pe+.05),matrix:re(0,Ti-.055,0)});for(const w of[-1,1])n.push({geometry:new yt(.13,Ti+.02,Pe+.04),matrix:re(w*xr,Ti/2,0)}),n.push({geometry:new yt(.075,.22,.26),matrix:re(w*(Je/2+.03),.44,0)});for(const w of[-1,1])for(const T of[-1,1])n.push({geometry:new yt(.15,Ti+.02,.15),matrix:re(w*(Je/2-.06),Ti/2,T*(Pe/2-.06))});const d=Pe/2+.055;i.push({geometry:new zt(.33,.33,.07,40),matrix:re(0,.34,d,Math.PI/2)});for(const w of[.275,.2,.13])n.push({geometry:new On(w,.011,6,40),matrix:re(0,.34,d+.036)});for(let w=0;w<8;w++){const T=w/8*Math.PI*2;n.push({geometry:new yt(.13,.026,.012),matrix:re(Math.cos(T)*.19,.34+Math.sin(T)*.19,d+.037,0,0,T)}),n.push({geometry:new Ye(.013,6,5),matrix:re(Math.cos(T+Math.PI/8)*.235,.34+Math.sin(T+Math.PI/8)*.235,d+.037)})}n.push({geometry:new zt(.055,.065,.028,14),matrix:re(0,.34,d+.05,Math.PI/2)});for(const w of[-1,1])i.push({geometry:new On(.16,.036,8,18),matrix:re(w*(Je/2+.085),.29,0,.2,Math.PI/2)});for(const w of[-1,1]){for(const T of[-.86,-.43,0,.43,.86])u(i,T,.075,w*(Pe/2+.048));for(const T of[-.86,0,.86])u(i,T,Ti-.055,w*(Pe/2+.032));for(const T of[-xr,xr])for(const E of[.2,.52])u(i,T,E,w*(Pe/2+.026));for(const T of[-.94,.94])for(const E of[.26,.56])u(i,T,E,w*(Pe/2+.018))}for(const w of[-1,1])for(const T of[-.42,0,.42])u(i,w*(Je/2+.048),.075,T);s.push({geometry:new yt(Je-.2,.07,Pe-.2),matrix:re(0,An+.035,0)});const f=new zt(We,We,Je-.02,26,1,!1,0,Math.PI);f.rotateZ(Math.PI/2),o.push({geometry:f,matrix:re(0,0,We)});const _=new zt(We+.032,We+.032,1,26,1,!1,0,Math.PI);_.rotateZ(Math.PI/2);for(const w of[-1,1])a.push({geometry:_,matrix:re(w*(Je/2-.075),0,We,0,0,0,.15,1,1)}),a.push({geometry:_,matrix:re(w*xr,0,We,0,0,0,.13,1,1)});for(const w of[-1,1])a.push({geometry:new yt(Je+.06,.11,.06),matrix:re(0,-.02,We+w*(We-.02))});for(const w of[-1,1])a.push({geometry:new yt(.06,.11,Pe-.04),matrix:re(w*(Je/2+.005),-.02,We)});a.push({geometry:new yt(.17,.28,.05),matrix:re(0,-.09,Pe+.12)}),l.push({geometry:new On(.055,.018,8,16),matrix:re(0,-.24,Pe+.125)});for(const w of[-1,1]){for(let T=0;T<5;T++){const E=(T+.5)*(Math.PI/5);u(l,w*(Je/2-.075),Math.sin(E)*(We+.038),We-Math.cos(E)*(We+.038))}for(let T=0;T<4;T++){const E=(T+.6)*(Math.PI/4.8);u(l,w*xr,Math.sin(E)*(We+.038),We-Math.cos(E)*(We+.038))}u(l,w*.07,-.14,Pe+.125)}const g=new St(16764749),m=new St(14196774),p=new St(16773288);c.push({geometry:new Ye(.5,18,9,0,Math.PI*2,0,Math.PI*.52),matrix:re(0,.06,0,0,0,0,1.55,.66,1),tint:m});const x=new zt(.112,.112,.026,12),M=o1(20261031);for(let w=0;w<30;w++){const T=M()*Math.PI*2,E=.25+M()*.7;c.push({geometry:x,matrix:re(Math.cos(T)*E*.78,.1+Math.max(0,.42-E*.3)+M()*.08,Math.sin(T)*E*.5,M()*.9-.45,M()*Math.PI,M()*.8-.4),tint:M()>.55?p:g})}for(let w=0;w<4;w++)c.push({geometry:new yt(.32,.08,.14),matrix:re((M()-.5)*1.1,.17+w*.035,(M()-.5)*.55,0,(M()-.5)*.8,(M()-.5)*.16),tint:m});const v=[3116906,14255659,12728875,2846632,14729562];for(let w=0;w<v.length;w++)c.push({geometry:new Ci(.078,0),matrix:re((M()-.5)*1.5,.2+M()*.12,(M()-.5)*.7,M()*Math.PI,M()*Math.PI,0),tint:new St(v[w])});for(let w=0;w<3;w++)c.push({geometry:new Ye(.072,10,8),matrix:re((M()-.5)*1.3,.21+M()*.1,(M()-.5)*.6),tint:new St(16184298)});this.model={baseBody:this.remember(Ei(e)),baseGold:this.remember(Ei(n)),baseBronze:this.remember(Ei(i)),baseSilk:this.remember(Ei(s)),lidBody:this.remember(Ei(o)),lidGold:this.remember(Ei(a)),lidBronze:this.remember(Ei(l)),treasure:this.remember(Ei(c))}}initEffects(){const t=new Jo(.92,1,72,1);t.rotateX(-Math.PI/2),this.remember(t);for(let a=0;a<3;a++){const l=new Ni({color:16761962,transparent:!0,opacity:0,blending:qn,depthWrite:!1,side:Ee}),c=new $(t,l);c.position.y=.06+a*.012,c.visible=!1,c.renderOrder=3,this.ripples.push({mesh:c,material:l}),this.materials.push(l),this.effects.add(c)}const e=new Jo(.82,.94,64);e.rotateX(-Math.PI/2),this.highlightMaterial=new Ni({color:16769187,transparent:!0,opacity:0,blending:qn,depthWrite:!1,side:Ee}),this.highlightRing=new $(this.remember(e),this.highlightMaterial),this.highlightRing.position.y=.05,this.highlightRing.visible=!1,this.highlightRing.renderOrder=3;const n=new zt(1.05,.5,7.2,28,1,!0),i=n.attributes.position,s=new Float32Array(i.count*4);for(let a=0;a<i.count;a++){const l=ae.clamp((i.getY(a)+3.6)/7.2,0,1);s[a*4]=1,s[a*4+1]=.72-l*.14,s[a*4+2]=.34-l*.16,s[a*4+3]=(1-l)*(1-l)*.75}n.setAttribute("color",new Ie(s,4)),this.shaftMaterial=new Ni({vertexColors:!0,transparent:!0,opacity:0,blending:qn,depthWrite:!1,side:Ee}),this.shaft=new $(this.remember(n),this.shaftMaterial),this.shaft.position.y=4,this.shaft.visible=!1,this.shaft.renderOrder=4,this.sparkPositions=new Float32Array(this.sparkCount*3),this.sparkVelocities=new Float32Array(this.sparkCount*3);const o=new ie;o.setAttribute("position",new Ie(this.sparkPositions,3)),this.sparkMaterial=new Fs({color:16761446,size:.11,map:br(this.textures),transparent:!0,opacity:0,depthWrite:!1,blending:qn}),this.sparks=new Tr(o,this.sparkMaterial),this.sparks.frustumCulled=!1,this.sparks.visible=!1,this.sparks.renderOrder=5,this.geometries.push(o),this.light=new Ql(16756838,0,20,2),this.light.position.set(0,.62,0),this.effects.name="ChestRevealEffects",this.effects.add(this.highlightRing,this.shaft,this.sparks,this.light),this.materials.push(this.highlightMaterial,this.shaftMaterial,this.sparkMaterial)}build(t){const e=new Yt;e.name=`TreasureChest_${t.id}`,e.position.copy(t.position),e.rotation.y=t.rotationY;const n=new Yt,i=new $(this.model.baseBody,this.lacquerMaterial);i.castShadow=!0,i.receiveShadow=!0;const s=new $(this.model.baseGold,this.goldMaterial);s.castShadow=!0,s.receiveShadow=!0;const o=new $(this.model.baseBronze,this.bronzeMaterial);o.receiveShadow=!0;const a=new $(this.model.baseSilk,this.silkMaterial),l=new $(this.model.treasure,this.treasureMaterial);l.position.set(0,.04,0),n.add(i,s,o,a,l);const c=new Yt;c.position.set(0,Ti,-Pe/2);const h=new $(this.model.lidBody,this.lacquerMaterial);h.castShadow=!0;const u=new $(this.model.lidGold,this.goldMaterial);u.castShadow=!0;const d=new $(this.model.lidBronze,this.bronzeMaterial);c.add(h,u,d),e.add(n,c);const f={root:e,base:n,lid:c,treasure:l};return this.entries.set(t.id,f),f}focusOn(t){this.effects.position.copy(t.root.position),this.effects.rotation.y=t.root.rotation.y}open(t){const e=this.entries.get(t);if(!e)return;this.focusOn(e);const n=de.timeline();n.to(e.lid.rotation,{x:i1,duration:.62,ease:"power3.out"},0),n.to(e.lid.rotation,{x:s1,duration:.4,ease:"sine.inOut"},.62),n.to(e.treasure.position,{y:.34,duration:1,ease:"back.out(1.5)"},.08),n.to(e.treasure.rotation,{y:.32,duration:2.4,ease:"power1.out"},.08),n.to(e.treasure.scale,{x:1.1,y:1.06,z:1.1,duration:1,ease:"power2.out"},.08),n.to(this.treasureMaterial,{emissiveIntensity:.45,duration:.5,ease:"power2.out"},.12),n.to(this.treasureMaterial,{emissiveIntensity:.32,duration:1.6,ease:"power1.inOut"},.7),this.ripples.forEach(({mesh:i,material:s},o)=>{i.visible=!0,i.scale.set(.35,1,.35);const a=.06+o*.18;n.fromTo(s,{opacity:0},{opacity:.9,duration:.22,ease:"power2.out"},a),n.to(i.scale,{x:4.4,y:1,z:4.4,duration:1.35,ease:"power2.out"},a),n.to(s,{opacity:0,duration:1.05,ease:"power1.in"},a+.3)}),this.shaft.visible=!0,this.shaft.scale.set(.55,.35,.55),this.shaft.position.y=1.55,n.to(this.shaftMaterial,{opacity:.32,duration:.34,ease:"power2.out"},.06),n.to(this.shaft.scale,{x:1.1,y:1,z:1.1,duration:.9,ease:"power2.out"},.06),n.to(this.shaft.position,{y:4,duration:.9,ease:"power2.out"},.06),n.to(this.shaftMaterial,{opacity:.08,duration:1.5,ease:"power1.inOut"},.75),n.to(this.lightState,{intensity:18,duration:.26,ease:"power2.out"},.06),n.to(this.lightState,{intensity:6.5,duration:1.7,ease:"power1.inOut"},.4),n.add(()=>this.emitSparks(),.1)}emitSparks(){for(let t=0;t<this.sparkCount;t++){const e=Math.random()*Math.PI*2,n=.2+Math.random()*.7;this.sparkPositions[t*3]=Math.cos(e)*n*.8,this.sparkPositions[t*3+1]=.24+Math.random()*.2,this.sparkPositions[t*3+2]=Math.sin(e)*n*.5;const i=.6+Math.random()*1.5;this.sparkVelocities[t*3]=Math.cos(e)*i,this.sparkVelocities[t*3+1]=2.2+Math.random()*3.2,this.sparkVelocities[t*3+2]=Math.sin(e)*i}this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.visible=!0,this.sparkMaterial.opacity=1,this.sparkLife=this.sparkDuration}highlight(t,e){const n=this.entries.get(t);n&&(this.focusOn(n),de.killTweensOf(this.highlightMaterial),e?(this.highlightRing.visible=!0,this.highlightRing.scale.set(1,1,1),de.to(this.highlightMaterial,{opacity:.55,duration:.45})):de.to(this.highlightMaterial,{opacity:0,duration:.4}))}update(t,e){if(this.light.intensity=this.lightState.intensity*(.9+.1*Math.sin(e*3.1)),this.sparkLife>0){this.sparkLife=Math.max(0,this.sparkLife-t);for(let i=0;i<this.sparkCount;i++){const s=i*3;this.sparkVelocities[s+1]-=7.2*t,this.sparkPositions[s]+=this.sparkVelocities[s]*t,this.sparkPositions[s+1]+=this.sparkVelocities[s+1]*t,this.sparkPositions[s+2]+=this.sparkVelocities[s+2]*t,this.sparkPositions[s+1]<.04&&(this.sparkPositions[s+1]=.04,this.sparkVelocities[s+1]*=-.34,this.sparkVelocities[s]*=.7,this.sparkVelocities[s+2]*=.7)}this.sparks.geometry.attributes.position.needsUpdate=!0;const n=this.sparkLife/this.sparkDuration;this.sparkMaterial.opacity=n<.45?n/.45:1,this.sparkLife===0&&(this.sparks.visible=!1)}this.shaft.visible&&(this.shaft.rotation.y+=t*.4)}resetAll(){this.entries.forEach(t=>{de.killTweensOf(t.lid.rotation),de.killTweensOf(t.treasure.position),de.killTweensOf(t.treasure.rotation),de.killTweensOf(t.treasure.scale),t.lid.rotation.set(0,0,0),t.treasure.position.set(0,.04,0),t.treasure.rotation.set(0,0,0),t.treasure.scale.set(1,1,1)}),de.killTweensOf(this.treasureMaterial),de.killTweensOf(this.highlightMaterial),de.killTweensOf(this.shaftMaterial),de.killTweensOf(this.shaft.scale),de.killTweensOf(this.shaft.position),de.killTweensOf(this.lightState),this.ripples.forEach(({mesh:t,material:e})=>{de.killTweensOf(e),de.killTweensOf(t.scale),e.opacity=0,t.visible=!1,t.scale.set(1,1,1)}),this.treasureMaterial.emissiveIntensity=.24,this.highlightMaterial.opacity=0,this.shaftMaterial.opacity=0,this.highlightRing.visible=!1,this.shaft.visible=!1,this.shaft.scale.set(1,1,1),this.shaft.position.y=4,this.sparks.visible=!1,this.sparkMaterial.opacity=0,this.sparkLife=0,this.lightState.intensity=0,this.light.intensity=0}dispose(){this.geometries.forEach(t=>t.dispose()),this.textures.forEach(t=>t.dispose()),this.materials.forEach(t=>t.dispose()),this.entries.clear()}}const l1=new Set(["IslandSeaCliffs","SummitAltar","SummitBackdrop","GrandWaterfalls","RiverStones","RiceTerraces","VietVillage","CoveredBridge","OceanPier","CurvedCoconutPalms","ArecaPalms","BananaGarden","BambooGroves","BanyanTrees","CanopyForest","HighlandTrees","TropicalShrubs","MossyBoulders","CoastalStoneMonuments"]);class c1{constructor(){q(this,"scene");q(this,"camera");q(this,"renderer");q(this,"environment",new n1({seed:88,treeCount:135,palmCount:50,shrubCount:90,rockCount:85,cloudCount:24}));q(this,"chestBuilder",new a1);q(this,"island",new Yt);q(this,"chests",new Yt);q(this,"trajectory",null);q(this,"unsubs",[]);q(this,"sky",null);q(this,"skyMaterial",null);q(this,"environmentTexture",null);q(this,"sunDirection",new P(...Oc).normalize());q(this,"obstacleRoots",null);q(this,"obstacleRaycaster",new wu);q(this,"obstacleDown",new P(0,-1,0));q(this,"obstacleOrigin",new P);q(this,"sightRaycaster",new wu);q(this,"sightDirection",new P)}init(t,e,n,i){this.scene=t,this.camera=e,this.renderer=n,this.setupSky(),t.add(this.island,this.chests,this.chestBuilder.effects),this.setupLighting(),this.environment.setChestClearings(i),this.island.add(this.environment.build()),i.forEach(s=>this.chests.add(this.chestBuilder.build(s).root)),this.setupEvents()}setupSky(){const t=new Ye(4500,48,24),e=new be({vertexShader:KM,fragmentShader:JM,uniforms:{uSunDirection:{value:this.sunDirection},uTime:{value:0}},side:sn,depthWrite:!1,fog:!1});this.skyMaterial=e,this.sky=new $(t,e),this.sky.name="TropicalAtmosphere",this.sky.frustumCulled=!1,this.sky.renderOrder=-1,this.scene.add(this.sky)}setupLighting(){this.environmentTexture=XM(),this.scene.environment=this.environmentTexture,this.scene.environmentIntensity=.24;const t=new Mu(16761220,2.9);t.position.copy(this.sunDirection).multiplyScalar(150),t.castShadow=!0,t.shadow.mapSize.set(4096,4096),t.shadow.camera.near=.5,t.shadow.camera.far=340,t.shadow.camera.left=-150,t.shadow.camera.right=150,t.shadow.camera.top=150,t.shadow.camera.bottom=-150,t.shadow.bias=-35e-5,t.shadow.normalBias=.03,t.shadow.radius=2.5,this.scene.add(t);const e=new Mu(16762778,1);e.position.copy(this.sunDirection).multiplyScalar(-110),e.position.y=70,this.scene.add(e);const n=new SM(10336476,6048300,1.05),i=new EM(16767408,.26);this.scene.add(n,i)}setupEvents(){this.unsubs.push(Fi.on("CHEST_OPENED",t=>{this.openChest(t.chestId)}),Fi.on("CHEST_ARRIVED",t=>{this.highlightChest(t.chestId,!0)}))}update(t,e){this.sky&&this.sky.position.copy(this.camera.position),this.skyMaterial&&(this.skyMaterial.uniforms.uTime.value=e),this.environment.update(e),this.chestBuilder.update(t,e)}openChest(t){this.chestBuilder.open(t)}highlightChest(t,e){this.chestBuilder.highlight(t,e)}setBeamTarget(t,e=1){}setTrajectoryLine(t){this.trajectory&&this.scene.remove(this.trajectory),this.trajectory=t,this.scene.add(t)}setTrajectoryVisible(t){this.trajectory&&(this.trajectory.visible=t)}resetAll(){this.chestBuilder.resetAll()}dispose(){var t;this.unsubs.forEach(e=>e()),this.environment.dispose(),this.chestBuilder.dispose(),(t=this.environmentTexture)==null||t.dispose(),this.scene.environment=null,this.sky&&(this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose(),this.sky=null)}getTerrainHeightAt(t,e){return this.environment.getTerrainHeightAt(t,e)}getTerrainNormalAt(t,e){return this.environment.getTerrainNormalAt(t,e)}getObstacleRoots(){if(!this.obstacleRoots){const t=[];this.island.traverse(e=>{l1.has(e.name)&&t.push(e)}),this.obstacleRoots=t}return this.obstacleRoots}getCameraObstacleTopAt(t,e,n=140){const i=this.getObstacleRoots();if(i.length===0)return Number.NEGATIVE_INFINITY;this.obstacleRaycaster.set(this.obstacleOrigin.set(t,n,e),this.obstacleDown),this.obstacleRaycaster.far=n+20;const s=this.obstacleRaycaster.intersectObjects(i,!0);return s.length>0?s[0].point.y:Number.NEGATIVE_INFINITY}isCameraPathBlocked(t,e){const n=this.getObstacleRoots();if(n.length===0)return!1;const i=t.distanceTo(e);return i<1e-4?!1:(this.sightDirection.copy(e).sub(t).divideScalar(i),this.sightRaycaster.set(t,this.sightDirection),this.sightRaycaster.near=0,this.sightRaycaster.far=i,this.sightRaycaster.intersectObjects(n,!0).length>0)}}const wf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ar{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h1=new Lc(-1,1,1,-1,0,1);class u1 extends ie{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}}const d1=new u1;class zc{constructor(t){this._mesh=new $(d1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,h1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class nc extends ar{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qr.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new zc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Uu extends ar{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class f1 extends ar{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class p1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nc(wf),this.copyPass.material.blending=hi,this.clock=new xf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uu!==void 0&&(o instanceof Uu?n=!0:o instanceof f1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class m1 extends ar{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new St}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const g1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class er extends ar{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new St(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(s,o,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Dn(s,o,{type:Zn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Dn(s,o,{type:Zn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=g1;this.highPassUniforms=qr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ot(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=wf;this.copyUniforms=qr.clone(h.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new St,this.oldClearAlpha=1,this.basic=new Ni,this.fsQuad=new zc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ot(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=er.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=er.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}er.BlurDirectionX=new ot(1,0);er.BlurDirectionY=new ot(0,1);const _1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class v1 extends ar{constructor(){super();const t=_1;this.uniforms=qr.clone(t.uniforms),this.material=new yM({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new zc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Od?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const x1={name:"GodRaysShader",uniforms:{tDiffuse:{value:null},uSunScreen:{value:new ot(.5,.5)},uIntensity:{value:.5},uEnabled:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uSunScreen;
    uniform float uIntensity;
    uniform float uEnabled;
    varying vec2 vUv;

    void main() {
      vec4 base = texture2D(tDiffuse, vUv);
      if (uEnabled < 0.5) {
        gl_FragColor = base;
        return;
      }

      vec2 delta = uSunScreen - vUv;
      float dist = length(delta);
      vec2 stepSize = delta * (0.95 / 48.0);
      vec2 uv = vUv;
      vec3 shafts = vec3(0.0);
      float decay = 1.0;
      float total = 0.0;

      for (int i = 0; i < 48; i++) {
        uv += stepSize;
        vec3 sampleColor = texture2D(tDiffuse, clamp(uv, 0.001, 0.999)).rgb;
        float luminance = dot(sampleColor, vec3(0.2126, 0.7152, 0.0722));
        float mask = smoothstep(1.05, 3.10, luminance);
        shafts += sampleColor * mask * decay;
        total += decay;
        decay *= 0.955;
      }
      shafts /= max(total, 0.0001);

      // Tia đậm gần mặt trời, tan dần khi xa nguồn sáng.
      float edgeFade = 1.0 - smoothstep(0.25, 1.25, dist);
      gl_FragColor = vec4(base.rgb + shafts * uIntensity * (0.30 + 0.70 * edgeFade), base.a);
    }
  `},M1={name:"ColorGradeShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new ot(1,1)},uSaturation:{value:1.2},uContrast:{value:1.14},uVignette:{value:.34},uGrain:{value:.028}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uVignette;
    uniform float uGrain;
    varying vec2 vUv;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec3 color = texture2D(tDiffuse, vUv).rgb;
      float luma = dot(color, vec3(0.299, 0.587, 0.114));

      color = mix(vec3(luma), color, uSaturation);
      color = (color - 0.5) * uContrast + 0.5;

      // Vùng sáng ngả vàng son, vùng tối ngả lam ngọc.
      color += vec3(0.042, 0.018, -0.014) * smoothstep(0.45, 1.0, luma);
      color += vec3(-0.010, 0.003, 0.018) * (1.0 - smoothstep(0.0, 0.45, luma));

      vec2 q = vUv - 0.5;
      q.x *= uResolution.x / max(uResolution.y, 1.0);
      color *= 1.0 - uVignette * smoothstep(0.35, 1.05, length(q));

      float grain = hash21(vUv * uResolution + fract(uTime) * 91.7) - 0.5;
      color += grain * uGrain * (0.55 + 0.45 * (1.0 - luma));

      gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }
  `};class y1{constructor(t,e,n,i={}){q(this,"renderer");q(this,"composer");q(this,"bloomPass");q(this,"godRaysPass");q(this,"gradePass");q(this,"outputPass");q(this,"scene");q(this,"camera");q(this,"sunWorld",new P);q(this,"cameraDirection",new P);q(this,"postProcessingEnabled");this.scene=t,this.camera=e,this.postProcessingEnabled=i.enablePostProcessing??!0,this.renderer=new eM({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=$e,this.renderer.toneMapping=Sc,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ud,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=n.clientWidth||window.innerWidth,o=n.clientHeight||window.innerHeight;this.renderer.setSize(s,o),n.appendChild(this.renderer.domElement);const a=new Dn(s,o,{type:Zn,samples:4});this.composer=new p1(this.renderer,a),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(s,o),this.composer.addPass(new m1(this.scene,this.camera)),this.godRaysPass=new nc(x1),this.godRaysPass.uniforms.uIntensity.value=i.godRayStrength??.55,this.composer.addPass(this.godRaysPass),this.bloomPass=new er(new ot(s,o),i.bloomStrength??.3,i.bloomRadius??.55,i.bloomThreshold??1.55),this.composer.addPass(this.bloomPass),this.outputPass=new v1,this.composer.addPass(this.outputPass),this.gradePass=new nc(M1),this.gradePass.uniforms.uResolution.value.set(s*this.renderer.getPixelRatio(),o*this.renderer.getPixelRatio()),this.composer.addPass(this.gradePass)}updateSun(t){if(this.camera.getWorldDirection(this.cameraDirection),this.cameraDirection.dot(t)<=.02){this.godRaysPass.uniforms.uEnabled.value=0;return}this.sunWorld.copy(this.camera.position).addScaledVector(t,420).project(this.camera);const n=this.sunWorld.z<1&&Math.abs(this.sunWorld.x)<1.5&&Math.abs(this.sunWorld.y)<1.5;this.godRaysPass.uniforms.uEnabled.value=n?1:0,this.godRaysPass.uniforms.uSunScreen.value.set(this.sunWorld.x*.5+.5,this.sunWorld.y*.5+.5)}setPostProcessingEnabled(t){this.postProcessingEnabled=t}resize(t,e,n=Math.min(window.devicePixelRatio,2)){this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.gradePass.uniforms.uResolution.value.set(t*n,e*n)}render(t){this.gradePass.uniforms.uTime.value=t,this.postProcessingEnabled?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){this.composer.dispose(),this.bloomPass.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}class S1{constructor(){q(this,"ctx",null);q(this,"master",null);q(this,"muted",!1);try{this.muted=localStorage.getItem("sound_muted")==="1"}catch{this.muted=!1}}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}isMuted(){return this.muted}toggle(){return this.setMuted(!this.muted),this.muted}setMuted(t){this.muted=t;try{localStorage.setItem("sound_muted",t?"1":"0")}catch{}if(this.master&&this.ctx){const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?0:.5,e,.02)}}tone(t,e,n={}){if(!this.ctx||!this.master||this.muted)return;const{type:i="sine",gain:s=.12,delay:o=0,slideTo:a}=n,l=this.ctx.currentTime+o,c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=i,c.frequency.setValueAtTime(t,l),a!==void 0&&c.frequency.exponentialRampToValueAtTime(Math.max(20,a),l+e);const u=Math.min(.02,e*.2);h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),l+u),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h).connect(this.master),c.start(l),c.stop(l+e+.05)}noise(t,e,n=.12,i=0){if(!this.ctx||!this.master||this.muted)return;const s=this.ctx.currentTime+i,o=Math.max(1,Math.floor(this.ctx.sampleRate*t)),a=this.ctx.createBuffer(1,o,this.ctx.sampleRate),l=a.getChannelData(0);for(let d=0;d<o;d++){const f=d/o;l[d]=(Math.random()*2-1)*Math.pow(1-f,2.2)}const c=this.ctx.createBufferSource();c.buffer=a;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.value=e,h.Q.value=.7;const u=this.ctx.createGain();u.gain.value=n,c.connect(h).connect(u).connect(this.master),c.start(s)}click(){this.tone(620,.07,{type:"triangle",gain:.07})}start(){this.unlock(),this.tone(112,.55,{type:"sine",gain:.3,slideTo:58}),this.noise(.7,900,.1),this.tone(320,.8,{type:"sawtooth",gain:.045,slideTo:760,delay:.08})}arrive(){this.tone(784,1.1,{type:"sine",gain:.1}),this.tone(1175,.9,{type:"sine",gain:.06,delay:.05}),this.tone(1568,.7,{type:"sine",gain:.035,delay:.1})}open(){this.tone(98,1.6,{type:"sine",gain:.26,slideTo:92}),this.tone(147,1.5,{type:"sine",gain:.14}),this.tone(196,1.4,{type:"triangle",gain:.1}),this.noise(1.2,2600,.08),[523.25,659.25,783.99,1046.5].forEach((t,e)=>{this.tone(t,.6,{type:"triangle",gain:.075,delay:.18+e*.1})})}win(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>{this.tone(t,.9,{type:"sine",gain:.09,delay:e*.12})})}reset(){this.tone(440,.18,{type:"triangle",gain:.07,slideTo:330}),this.tone(330,.3,{type:"triangle",gain:.06,delay:.12,slideTo:220})}allUsed(){this.tone(220,.25,{type:"triangle",gain:.07}),this.tone(184,.35,{type:"triangle",gain:.06,delay:.14})}}class Nu{constructor(){q(this,"rendererManager");q(this,"scene");q(this,"camera");q(this,"clock",new xf);q(this,"sunDirection",new P(...Oc).normalize());q(this,"chestManager");q(this,"cameraDirector");q(this,"graphicsEngine");q(this,"allChests",[]);q(this,"sound",new S1);q(this,"btnStart");q(this,"startContainer");q(this,"startEyebrow");q(this,"btnSettings");q(this,"settingsPopover");q(this,"btnCloseSettings");q(this,"selectChest");q(this,"btnResetCam");q(this,"btnSound");q(this,"studentsPreview");q(this,"winnerBanner");q(this,"winnerNameEl");q(this,"winnerChestIdEl");q(this,"btnCloseWinner");q(this,"btnOpenQuiz");q(this,"goldenFlash");q(this,"animate",()=>{requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.graphicsEngine.update(t,e),this.rendererManager.updateSun(this.sunDirection),this.rendererManager.render(e)});this.initDOM(),this.initThree(),this.initCore(),this.initUIEvents(),this.initGameEvents(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("pointerdown",()=>this.sound.unlock(),{once:!0}),window.__gameApp=this,this.animate()}initDOM(){this.btnStart=document.getElementById("btn-start"),this.startContainer=document.getElementById("start-container"),this.startEyebrow=this.startContainer.querySelector(".start-eyebrow"),this.btnSettings=document.getElementById("btn-settings"),this.settingsPopover=document.getElementById("settings-popover"),this.btnCloseSettings=document.getElementById("btn-close-settings"),this.selectChest=document.getElementById("select-chest"),this.btnResetCam=document.getElementById("btn-reset-cam"),this.btnSound=document.getElementById("btn-sound"),this.studentsPreview=document.getElementById("students-preview"),this.winnerBanner=document.getElementById("winner-banner"),this.winnerNameEl=document.getElementById("winner-name"),this.winnerChestIdEl=document.getElementById("winner-chest-id"),this.btnCloseWinner=document.getElementById("btn-close-winner"),this.btnOpenQuiz=document.getElementById("btn-open-quiz"),this.goldenFlash=document.getElementById("golden-flash"),this.syncSoundButton(),this.resetWinnerBanner()}resetWinnerBanner(){this.winnerBanner.classList.add("hidden"),this.winnerNameEl.textContent="",this.winnerChestIdEl.textContent="",de.killTweensOf(this.goldenFlash),this.goldenFlash.style.opacity="0"}initThree(){const t=document.getElementById("app");this.scene=new nM,this.scene.background=null,this.scene.fog=new Nc(Sf,yf),this.camera=new _n(48,window.innerWidth/window.innerHeight,.1,15e3),this.camera.position.set(0,76,163),this.camera.lookAt(0,14,0),t.innerHTML="",this.rendererManager=new y1(this.scene,this.camera,t,{bloomStrength:.3,bloomRadius:.55,bloomThreshold:1.55,godRayStrength:.55})}initCore(){this.graphicsEngine=new c1;const t=(e,n)=>this.graphicsEngine.getTerrainHeightAt(e,n);this.chestManager=new CM,this.allChests=this.chestManager.generateChests(void 0,t),this.chestManager.markUsed(this.takeUsedIdsFromUrl()),this.updateStartAvailability(),this.graphicsEngine.init(this.scene,this.camera,this.rendererManager.renderer,this.allChests),this.cameraDirector=new NM(this.camera),this.cameraDirector.setHeightSampler(t),this.cameraDirector.setObstacleSampler((e,n,i)=>this.graphicsEngine.getCameraObstacleTopAt(e,n,i)),this.cameraDirector.setSightBlockedSampler((e,n)=>this.graphicsEngine.isCameraPathBlocked(e,n)),this.rebuildChestLists()}rebuildChestLists(){const t=new Set(this.chestManager.getUsedIds());this.selectChest.innerHTML='<option value="">-- Ngẫu nhiên --</option>',this.studentsPreview.innerHTML="",this.allChests.forEach(e=>{const n=t.has(e.id),i=document.createElement("option");i.value=e.id.toString(),i.textContent=`#${e.id} - ${e.student.name}${n?" (đã gọi)":""}`,i.disabled=n,this.selectChest.appendChild(i);const s=document.createElement("div");s.className=n?"student-item used":"student-item";const o=e.index<7?"Bãi biển & Cột đá":e.index<14?"Ven rừng & Suối":e.index<21?"Rừng cây & Đàn tế":"Cao nguyên & Đài cổ";s.innerHTML=n?`<span>#${e.id} ${e.student.name}</span> <span style="color:#a98563;">Đã gọi</span>`:`<span>#${e.id} ${e.student.name}</span> <span style="color:#34d399;">${o}</span>`,this.studentsPreview.appendChild(s)})}updateStartAvailability(){const t=this.chestManager.getAvailableChests().length===0;this.btnStart.disabled=t,this.startEyebrow.textContent=t?"Đã gọi hết 28 rương — hãy làm mới trang":"Hòn đảo kho báu"}takeUsedIdsFromUrl(){const t=new URLSearchParams(window.location.search),e=t.get("used");if(e===null)return[];t.delete("used");const n=t.toString();return window.history.replaceState(null,"",window.location.pathname+(n?`?${n}`:"")+window.location.hash),e.split(",").map(i=>parseInt(i,10)).filter(i=>!isNaN(i))}syncSoundButton(){this.btnSound.textContent=this.sound.isMuted()?"🔇 Âm thanh: Tắt":"🔊 Âm thanh: Bật"}initUIEvents(){this.btnStart.addEventListener("click",()=>{if(this.cameraDirector.isCameraFlying())return;this.sound.unlock(),this.sound.click();const t=parseInt(this.selectChest.value,10),e=isNaN(t)?this.chestManager.selectWinner():this.chestManager.selectWinner(t);if(!e){this.sound.allUsed(),this.updateStartAvailability();return}this.chestManager.markUsed([e.id]),this.rebuildChestLists(),this.updateStartAvailability();try{localStorage.setItem("selectedStudent",e.student.name),localStorage.setItem("selectedChestId",e.id.toString())}catch{}this.startContainer.classList.add("hidden"),this.settingsPopover.classList.add("hidden"),this.sound.start(),this.startFlight(e)}),this.btnSettings.addEventListener("click",t=>{t.stopPropagation(),this.sound.unlock(),this.sound.click(),this.settingsPopover.classList.toggle("hidden")}),this.btnCloseSettings.addEventListener("click",()=>{this.sound.click(),this.settingsPopover.classList.add("hidden")}),document.addEventListener("click",t=>{const e=t.target;!this.settingsPopover.contains(e)&&e!==this.btnSettings&&this.settingsPopover.classList.add("hidden")}),this.btnSound.addEventListener("click",()=>{this.sound.unlock();const t=this.sound.toggle();this.syncSoundButton(),t||this.sound.click()}),this.btnResetCam.addEventListener("click",()=>{this.sound.click(),this.returnToOverview()}),this.btnCloseWinner.addEventListener("click",()=>{this.sound.click(),this.returnToOverview()}),this.btnOpenQuiz.addEventListener("click",()=>{this.sound.click(),this.openQuizGame()})}returnToOverview(){this.sound.reset(),this.cameraDirector.resetToOverview(!1),this.resetWinnerBanner(),this.startContainer.classList.remove("hidden"),this.settingsPopover.classList.add("hidden"),this.graphicsEngine.resetAll(),this.rebuildChestLists(),this.updateStartAvailability()}openQuizGame(){var i;const t=new URL("./tracnghiem_1003/index.html",window.location.href),e=(i=this.winnerNameEl.textContent)==null?void 0:i.trim(),n=this.chestManager.getUsedIds().join(",");e&&t.searchParams.set("student",e),n&&t.searchParams.set("used",n),window.location.href=t.toString()}initGameEvents(){Fi.on("CHEST_ARRIVED",({chestId:t,studentName:e})=>{this.winnerNameEl.textContent=e,this.winnerChestIdEl.textContent=`Rương May Mắn #${t}`,this.sound.arrive()}),Fi.on("CHEST_OPENED",()=>{this.sound.open(),de.to(this.goldenFlash,{opacity:1,duration:.2,ease:"power2.in",onComplete:()=>{de.delayedCall(.9,()=>{de.to(this.goldenFlash,{opacity:0,duration:.9,ease:"power2.out"}),this.winnerBanner.classList.remove("hidden"),this.sound.win()})}})})}startFlight(t){this.resetWinnerBanner();const e=this.allChests.map(n=>n.student);Fi.emit("GAME_START",{students:e}),this.cameraDirector.flyToChest(t,this.allChests)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.rendererManager.resize(window.innerWidth,window.innerHeight)}}function Fu(){var o,a;const r=navigator.userAgent||navigator.vendor||"";if(!/FBAN|FBAV|FB_IAB|FBIOS|Messenger|Zalo|Instagram|TikTok|Line/i.test(r))return;const e=window.location.href,n=/Android/i.test(r),i=e.replace(/^https?:\/\//,"");n?window.location.href=`intent://${i}#Intent;scheme=https;package=com.android.chrome;end;`:window.location.href=`googlechrome://${i}`;const s=document.createElement("div");s.id="inapp-browser-prompt",s.className="inapp-prompt",s.innerHTML=`
    <div class="inapp-prompt-content">
      <span>🚀 Đang mở trong Messenger. Bấm để mở bằng <b>Google Chrome</b> cho trải nghiệm 3D mượt nhất!</span>
      <button id="btn-open-external" class="inapp-btn">Mở bằng Google</button>
      <button id="btn-close-inapp" class="inapp-close" aria-label="Đóng">✕</button>
    </div>
  `,document.body.prepend(s),(o=document.getElementById("btn-open-external"))==null||o.addEventListener("click",()=>{n?window.location.href=`intent://${i}#Intent;scheme=https;package=com.android.chrome;end;`:window.location.href=`googlechrome://${i}`}),(a=document.getElementById("btn-close-inapp"))==null||a.addEventListener("click",()=>{s.remove()})}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{Fu(),new Nu}):(Fu(),new Nu);
