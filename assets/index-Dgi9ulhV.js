var kf=Object.defineProperty;var Hf=(r,t,e)=>t in r?kf(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var et=(r,t,e)=>Hf(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gs={duration:.5,overwrite:!1,delay:0},Dl,Le,ue,Sn=1e8,ie=1/Sn,La=Math.PI*2,Vf=La/4,Gf=0,tu=Math.sqrt,Wf=Math.cos,Xf=Math.sin,Pe=function(t){return typeof t=="string"},ve=function(t){return typeof t=="function"},Qn=function(t){return typeof t=="number"},Ll=function(t){return typeof t>"u"},kn=function(t){return typeof t=="object"},je=function(t){return t!==!1},Il=function(){return typeof window<"u"},Ds=function(t){return ve(t)||Pe(t)},eu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ke=Array.isArray,qf=/random\([^)]+\)/g,Yf=/,\s*/g,xc=/(?:-?\.?\d|\.)+/gi,nu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ho=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,iu=/[+-]=-?[.\d]+/,$f=/[^,'"\[\]\s]+/gi,Zf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,me,In,Ia,Ul,pn={},go={},ru,su=function(t){return(go=Lr(t,pn))&&en},Nl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},vs=function(t,e){return!e&&console.warn(t)},ou=function(t,e){return t&&(pn[t]=e)&&go&&(go[t]=e)||pn},xs=function(){return 0},jf={suppressEvents:!0,isStart:!0,kill:!1},so={suppressEvents:!0,kill:!1},Kf={suppressEvents:!0},Fl={},gi=[],Ua={},au,on={},Vo={},Mc=30,oo=[],Ol="",Bl=function(t){var e=t[0],n,i;if(kn(e)||ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=oo.length;i--&&!oo[i].targetTest(e););n=oo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ru(t[i],n)))||t.splice(i,1);return t},qi=function(t){return t._gsap||Bl(yn(t))[0]._gsap},lu=function(t,e,n){return(n=t[e])&&ve(n)?t[e]():Ll(n)&&t.getAttribute&&t.getAttribute(e)||n},Ke=function(t,e){return(t=t.split(",")).forEach(e)||t},Me=function(t){return Math.round(t*1e5)/1e5||0},pe=function(t){return Math.round(t*1e7)/1e7||0},Tr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Jf=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},vo=function(){var t=gi.length,e=gi.slice(0),n,i;for(Ua={},gi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zl=function(t){return!!(t._initted||t._startAt||t.add)},cu=function(t,e,n,i){gi.length&&!Le&&vo(),t.render(e,n,!!(Le&&e<0&&zl(t))),gi.length&&!Le&&vo()},hu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match($f).length<2?e:Pe(t)?t.trim():t},uu=function(t){return t},mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Qf=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Lr=function(t,e){for(var n in e)t[n]=e[n];return t},Sc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=kn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},xo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},hs=function(t){var e=t.parent||me,n=t.keyframes?Qf(ke(t.keyframes)):mn;if(je(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},td=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},fu=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Lo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},yi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ed=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Na=function(t,e,n,i){return t._startAt&&(Le?t._startAt.revert(so):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},nd=function r(t){return!t||t._ts&&r(t.parent)},yc=function(t){return t._repeat?Ir(t._tTime,t=t.duration()+t._rDelay)*t:0},Ir=function(t,e){var n=Math.floor(t=pe(t/e));return t&&n===t?n-1:n},Mo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Io=function(t){return t._end=pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ie)||0))},Uo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Io(t),n._dirty||Yi(n,t)),t},du=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Mo(t.rawTime(),e),(!e._dur||As(0,e.totalDuration(),n)-e._tTime>ie)&&e.render(n,!0)),Yi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ie}},Nn=function(t,e,n,i){return e.parent&&yi(e),e._start=pe((Qn(n)?n:n||t!==me?Mn(t,n,e):t._time)+e._delay),e._end=pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),fu(t,e,"_first","_last",t._sort?"_start":0),Fa(e)||(t._recent=e),i||du(t,e),t._ts<0&&Uo(t,t._tTime),t},pu=function(t,e){return(pn.ScrollTrigger||Nl("scrollTrigger",e))&&pn.ScrollTrigger.create(e,t)},mu=function(t,e,n,i,s){if(Hl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Le&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&au!==ln.frame)return gi.push(t),t._lazy=[s,i],1},id=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Fa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},rd=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&id(t)&&!(!t._initted&&Fa(t))||(t._ts<0||t._dp._ts<0)&&!Fa(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=As(0,t._tDur,e),h=Ir(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ir(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Le||i||t._zTime===ie||!e&&t._zTime){if(!t._initted&&mu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ie:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Na(t,e,n,!0),t._onUpdate&&!n&&hn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&hn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&yi(t,1),!n&&!Le&&(hn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},sd=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ur=function(t,e,n,i){var s=t._repeat,o=pe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:pe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Uo(t,t._tTime=t._tDur*a),t.parent&&Io(t),n||Yi(t.parent,t),t},Ec=function(t){return t instanceof Ze?Yi(t):Ur(t,t._dur)},od={_start:0,endTime:xs,totalDuration:xs},Mn=function r(t,e,n){var i=t.labels,s=t._recent||od,o=t.duration()>=Sn?s.endTime(!1):t._dur,a,l,c;return Pe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(ke(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},us=function(t,e,n){var i=Qn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=je(l.vars.inherit)&&l.parent;o.immediateRender=je(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ye(e[0],o,e[s+1])},bi=function(t,e){return t||t===0?e(t):e},As=function(t,e,n){return n<t?t:n>e?e:n},ze=function(t,e){return!Pe(t)||!(e=Zf.exec(t))?"":e[1]},ad=function(t,e,n){return bi(n,function(i){return As(t,e,i)})},Oa=[].slice,_u=function(t,e){return t&&kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&kn(t[0]))&&!t.nodeType&&t!==In},ld=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Pe(i)&&!e||_u(i,1)?(s=n).push.apply(s,yn(i)):n.push(i)})||n},yn=function(t,e,n){return ue&&!e&&ue.selector?ue.selector(t):Pe(t)&&!n&&(Ia||!Nr())?Oa.call((e||Ul).querySelectorAll(t),0):ke(t)?ld(t,n):_u(t)?Oa.call(t,0):t?[t]:[]},Ba=function(t){return t=yn(t)[0]||vs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yn(e,n.querySelectorAll?n:n===t?vs("Invalid scope")||Ul.createElement("div"):t)}},gu=function(t){return t.sort(function(){return .5-Math.random()})},vu=function(t){if(ve(t))return t;var e=kn(t)?t:{each:t},n=$i(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Pe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=o[_],p,x,M,v,T,A,b,C,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,Sn])[1],!S){for(b=-Sn;b<(b=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*h-.5:i%S,x=S===Sn?0:l?_*u/S-.5:i/S|0,b=0,C=Sn,A=0;A<_;A++)M=A%S-p,v=x-(A/S|0),m[A]=T=c?Math.abs(c==="y"?v:M):tu(M*M+v*v),T>b&&(b=T),T<C&&(C=T);i==="random"&&gu(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ze(e.amount||e.each)||0,n=n&&_<0?Sd(n):n}return _=(m[d]-m.min)/m.max||0,pe(m.b+(n?n(_):_)*m.v)+m.u}},za=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Qn(n)?0:ze(n))}},xu=function(t,e){var n=ke(t),i,s;return!n&&kn(t)&&(i=n=t.radius||Sn,t.values?(t=yn(t.values),(s=!Qn(t[0]))&&(i*=i)):t=za(t.increment)),bi(e,n?ve(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Sn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Qn(o)?h:h+ze(o)}:za(t))},Mu=function(t,e,n,i){return bi(ke(t)?!e:n===!0?!!(n=0):!i,function(){return ke(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},cd=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},hd=function(t,e){return function(n){return t(parseFloat(n))+(e||ze(n))}},ud=function(t,e,n){return yu(t,e,0,1,n)},Su=function(t,e,n){return bi(n,function(i){return t[~~e(i)]})},fd=function r(t,e,n){var i=e-t;return ke(t)?Su(t,r(0,t.length),e):bi(n,function(s){return(i+(s-t)%i)%i+t})},dd=function r(t,e,n){var i=e-t,s=i*2;return ke(t)?Su(t,r(0,t.length-1),e):bi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ms=function(t){return t.replace(qf,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Yf);return Mu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},yu=function(t,e,n,i,s){var o=e-t,a=i-n;return bi(s,function(l){return n+((l-t)/o*a||0)})},pd=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Pe(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(ke(t)&&!ke(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=Lr(ke(t)?[]:{},t));if(!h){for(l in e)kl.call(a,t,l,"get",e[l]);s=function(g){return Wl(g,a)||(o?t.p:t)}}}return bi(n,s)},Tc=function(t,e,n){var i=t.labels,s=Sn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hn=function(t,e,n){var i=t.vars,s=i[e],o=ue,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&gi.length&&vo(),a&&(ue=a),h=l?s.apply(c,l):s.call(c),ue=o,h},os=function(t){return yi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Le),t.progress()<1&&hn(t,"onInterrupt"),t},Sr,Eu=[],Tu=function(t){if(t)if(t=!t.name&&t.default||t,Il()||t.headless){var e=t.name,n=ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:xs,render:Wl,add:kl,kill:Dd,modifier:Pd,rawVars:0},o={targetTest:0,get:0,getSetter:Gl,aliases:{},register:0};if(Nr(),t!==i){if(on[e])return;mn(i,mn(xo(t,s),o)),Lr(i.prototype,Lr(s,xo(t,o))),on[i.prop=e]=i,t.targetTest&&(oo.push(i),Fl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ou(e,i),t.register&&t.register(en,i,Je)}else Eu.push(t)},ee=255,as={aqua:[0,ee,ee],lime:[0,ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ee],navy:[0,0,128],white:[ee,ee,ee],olive:[128,128,0],yellow:[ee,ee,0],orange:[ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ee,0,0],pink:[ee,192,203],cyan:[0,ee,ee],transparent:[ee,ee,ee,0]},Go=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ee+.5|0},wu=function(t,e,n){var i=t?Qn(t)?[t>>16,t>>8&ee,t&ee]:0:as.black,s,o,a,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),as[t])i=as[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ee,i&ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ee,t&ee]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(xc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Go(l+1/3,s,o),i[1]=Go(l,s,o),i[2]=Go(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(nu),n&&i.length<4&&(i[3]=1),i}else i=t.match(xc)||as.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ee,o=i[1]/ee,a=i[2]/ee,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bu=function(t){var e=[],n=[],i=-1;return t.split(vi).forEach(function(s){var o=s.match(Mr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},wc=function(t,e,n){var i="",s=(t+i).match(vi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=wu(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=bu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(vi,"1").split(Mr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(vi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},vi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in as)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),md=/hsl[a]?\(/,Au=function(t){var e=t.join(" "),n;if(vi.lastIndex=0,vi.test(e))return n=md.test(e),t[1]=wc(t[1],n),t[0]=wc(t[0],n,bu(t[1])),!0},Ss,ln=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,x=m===!0,M,v,T,A;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,M=T-o,(M>0||x)&&(A=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=M+(M>=s?4:s-M),v=1),x||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](T,d,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){ru&&(!Ia&&Il()&&(In=Ia=window,Ul=In.document||{},pn.gsap=en,(In.gsapVersions||(In.gsapVersions=[])).push(en.version),su(go||In.GreenSockGlobals||!In.gsap&&In||{}),Eu.forEach(Tu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Ss=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ss=0,c=xs},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,x){var M=p?function(v,T,A,b){m(v,T,A,b),u.remove(M)}:m;return u.remove(m),a[x?"unshift":"push"](M),Nr(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),Nr=function(){return!Ss&&ln.wake()},zt={},_d=/^[\d.\-M][\d.\-,\s]/,gd=/["']/g,vd=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(gd,"").trim():+c,i=l.substr(a+1).trim();return e},xd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Md=function(t){var e=(t+"").split("("),n=zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[vd(e[1])]:xd(t).split(",").map(hu)):zt._CE&&_d.test(t)?zt._CE("",t):n},Sd=function(t){return function(e){return 1-t(1-e)}},$i=function(t,e){return t&&(ve(t)?t:zt[t]||Md(t))||e},Ji=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ke(t,function(a){zt[a]=pn[a]=s,zt[o=a.toLowerCase()]=n;for(var l in s)zt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=zt[a+"."+l]=s[l]}),s},Cu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Wo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/La*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Xf((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Cu(a);return s=La/s,l.config=function(c,h){return r(t,c,h)},l},Xo=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Cu(n);return i.config=function(s){return r(t,s)},i};Ke("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ji(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});zt.Linear.easeNone=zt.none=zt.Linear.easeIn;Ji("Elastic",Wo("in"),Wo("out"),Wo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Ji("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ji("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ji("Circ",function(r){return-(tu(1-r*r)-1)});Ji("Sine",function(r){return r===1?1:-Wf(r*Vf)+1});Ji("Back",Xo("in"),Xo("out"),Xo());zt.SteppedEase=zt.steps=pn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ie;return function(a){return((i*As(0,o,a)|0)+s)*n}}};gs.ease=zt["quad.out"];Ke("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ol+=r+","+r+"Params,"});var Ru=function(t,e){this.id=Gf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:lu,this.set=e?e.getSetter:Gl},ys=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ur(this,+e.duration,1,1),this.data=e.data,ue&&(this._ctx=ue,ue.data.push(this)),Ss||ln.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Nr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uo(this,n),!s._dp||s.parent||du(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ie||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),cu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ir(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ie?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Mo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ie?0:this._rts,this.totalTime(As(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Io(this),ed(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Nr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ie&&(this._tTime-=ie)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(je(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Kf);var i=Le;return Le=n,zl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Le=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ec(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ec(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Mn(this,n),je(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,je(i)),this._dur||(this._zTime=-ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ie)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ve(n)?n:uu,l=function(){var h=i.then;i.then=null,s&&s(),ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){os(this)},r})();mn(ys.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ie,_prom:0,_ps:!1,_rts:1});var Ze=(function(r){Qh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=je(n.sortChildren),me&&Nn(n.parent||me,Zn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&pu(Zn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return us(0,arguments,this),this},e.from=function(i,s,o){return us(1,arguments,this),this},e.fromTo=function(i,s,o,a){return us(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,hs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ye(i,s,Mn(this,o),1),this},e.call=function(i,s,o){return Nn(this,ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ye(i,o,Mn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,hs(o).immediateRender=je(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,hs(a).immediateRender=je(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:pe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,x,M,v,T,A,b;if(this!==me&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,M=this._ts,p=!M,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=pe(h%m),h===l?(_=this._repeat,d=c):(T=pe(h/m),_=~~T,_&&_===T&&(d=c,_--),d>c&&(d=c)),T=Ir(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),A&&_&1&&(d=c-d,b=1),_!==T&&!this._lock){var C=A&&T&1,S=C===(A&&_&1);if(_<T&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(b?0:pe(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&hn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=sd(this,pe(a),pe(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!T&&(hn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=-ie);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||Le&&zl(f)),d!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=y?-ie:ie);break}}f=g}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-ie)._zTime=d>=a?1:-1,this._ts))return this._start=v,Io(this),this.render(i,s,o);this._onUpdate&&!s&&hn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&yi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(hn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Qn(s)||(s=Mn(this,s,i)),!(i instanceof ys)){if(ke(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Pe(i))return this.addLabel(i,s);if(ve(i))i=ye.delayedCall(0,i);else return this}return this!==i?Nn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Sn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Pe(i)?this.removeLabel(i):ve(i)?this.killTweensOf(i):(i.parent===this&&Lo(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pe(ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Mn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ye.delayedCall(0,s||xs,o);return a.data="isPause",this._hasPause=1,Nn(this,a,Mn(this,i))},e.removePause=function(i){var s=this._first;for(i=Mn(this,i);s;)s._start===i&&s.data==="isPause"&&yi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)pi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=yn(i),l=this._first,c=Qn(s),h;l;)l instanceof ye?Jf(l._targets,a)&&(c?(!pi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Mn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=ye.to(o,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ie,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ur(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,mn({startAt:{time:Mn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Tc(this,Mn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Tc(this,Mn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ie)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=pe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Yi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Sn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Nn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=pe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ur(o,o===me&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(me._ts&&(cu(me,Mo(i,me)),au=ln.frame),ln.frame>=Mc){Mc+=fn.autoSleep||120;var s=me._first;if((!s||!s._ts)&&fn.autoSleep&&ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ln.sleep()}}},t})(ys);mn(Ze.prototype,{_lock:0,_hasPause:0,_forcing:0});var yd=function(t,e,n,i,s,o,a){var l=new Je(this._pt,t,e,0,1,Nu,null,s),c=0,h=0,u,d,f,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ms(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),d=n.match(Ho)||[];u=Ho.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Tr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Ho.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(iu.test(i)||p)&&(l.e=0),this._pt=l,l},kl=function(t,e,n,i,s,o,a,l,c,h){ve(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:ve(u)?c?t[e.indexOf("set")||!ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=ve(u)?c?Ad:Iu:Vl,g;if(Pe(i)&&(~i.indexOf("random(")&&(i=Ms(i)),i.charAt(1)==="="&&(g=Tr(d,i)+(ze(d)||0),(g||g===0)&&(i=g))),!h||d!==i||ka)return!isNaN(d*i)&&i!==""?(g=new Je(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Rd:Uu,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&Nl(e,i),yd.call(this,t,e,d,i,f,l||fn.stringFilter,c))},Ed=function(t,e,n,i,s){if(ve(t)&&(t=fs(t,s,e,n,i)),!kn(t)||t.style&&t.nodeType||ke(t)||eu(t))return Pe(t)?fs(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=fs(t[a],s,e,n,i);return o},Pu=function(t,e,n,i,s,o){var a,l,c,h;if(on[t]&&(a=new on[t]).init(s,a.rawVars?e[t]:Ed(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Je(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Sr))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},pi,ka,Hl=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!Dl,v=t.timeline,T=i.easeReverse||u,A,b,C,S,y,P,O,F,V,X,G,Y,H;if(v&&(!d||!s)&&(s="none"),t._ease=$i(s,gs.ease),t._rEase=T&&($i(T)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||d&&!i.stagger){if(F=m[0]?qi(m[0]).harness:0,Y=F&&i[F.prop],A=xo(i,Fl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?so:jf),_._lazy=0),o){if(yi(t._startAt=ye.set(m,mn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&je(l),startAt:null,delay:0,onUpdate:c&&function(){return hn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le||!a&&!f)&&t._startAt.revert(so),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),C=mn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&je(l),immediateRender:a,stagger:0,parent:p},A),Y&&(C[F.prop]=Y),yi(t._startAt=ye.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le?t._startAt.revert(so):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ie,ie);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&je(l)||l&&!g,b=0;b<m.length;b++){if(y=m[b],O=y._gsap||Bl(m)[b]._gsap,t._ptLookup[b]=X={},Ua[O.id]&&gi.length&&vo(),G=x===m?b:x.indexOf(y),F&&(V=new F).init(y,Y||A,t,G,x)!==!1&&(t._pt=S=new Je(t._pt,y,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(nt){X[nt]=S}),V.priority&&(P=1)),!F||Y)for(C in A)on[C]&&(V=Pu(C,A,t,G,y,x))?V.priority&&(P=1):X[C]=S=kl.call(t,y,C,"get",A[C],G,x,0,i.stringFilter);t._op&&t._op[b]&&t.kill(y,t._op[b]),M&&t._pt&&(pi=t,me.killTweensOf(y,X,t.globalTime(e)),H=!t.parent,pi=0),t._pt&&l&&(Ua[O.id]=1)}P&&Fu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,d&&e<=0&&v.render(Sn,!0,!0)},Td=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ka=1,t.vars[e]="+=0",Hl(t,a),ka=0,l?vs(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Me(n)+ze(u.e)),u.b&&(u.b=h.s+ze(u.b))},wd=function(t,e){var n=t[0]?qi(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Lr({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},bd=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(ke(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},fs=function(t,e,n,i,s){return ve(t)?t.call(e,n,i,s):Pe(t)&&~t.indexOf("random(")?Ms(t):t},Du=Ol+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Lu={};Ke(Du+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Lu[r]=1});var ye=(function(r){Qh(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:hs(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||me,x=(ke(n)||eu(n)?Qn(n[0]):"length"in i)?[n]:yn(n),M,v,T,A,b,C,S,y;if(a._targets=x.length?Bl(x):vs("GSAP target "+n+" not found. https://gsap.com",!fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Ds(c)||Ds(h)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(M=a.timeline=new Ze({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),M.kill(),M.parent=M._dp=Zn(a),M._start=0,d||Ds(c)||Ds(h)){if(A=x.length,S=d&&vu(d),kn(d))for(b in d)~Du.indexOf(b)&&(y||(y={}),y[b]=d[b]);for(v=0;v<A;v++)T=xo(i,Lu),T.stagger=0,P&&(T.easeReverse=P),y&&Lr(T,y),C=x[v],T.duration=+fs(c,Zn(a),v,C,x),T.delay=(+fs(h,Zn(a),v,C,x)||0)-a._delay,!d&&A===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),M.to(C,T,S?S(v,C,x):0),M._ease=zt.none;M.duration()?c=h=0:a.timeline=0}else if(g){hs(mn(M.vars.defaults,{ease:"none"})),M._ease=$i(g.ease||i.ease||"none");var O=0,F,V,X;if(ke(g))g.forEach(function(G){return M.to(x,G,">")}),M.duration();else{T={};for(b in g)b==="ease"||b==="easeEach"||bd(b,g[b],T,g.easeEach);for(b in T)for(F=T[b].sort(function(G,Y){return G.t-Y.t}),O=0,v=0;v<F.length;v++)V=F[v],X={ease:V.e,duration:(V.t-(v?F[v-1].t:0))/100*c},X[b]=V.v,M.to(x,X,O),O+=X.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!Dl&&(pi=Zn(a),me.killTweensOf(x),pi=0),Nn(p,Zn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===pe(p._time)&&je(u)&&nd(Zn(a))&&p.data!=="nested")&&(a._tTime=-ie,a.render(Math.max(0,-h)||0)),m&&pu(Zn(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ie&&!h?l:i<ie?0:i,d,f,g,_,m,p,x,M;if(!c)rd(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=pe(u%_),u===l?(g=this._repeat,d=c):(m=pe(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=Ir(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(pe(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(mu(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var T=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!m&&(hn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Na(this,i,s,o),hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&hn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Na(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&yi(this,1),!s&&!(h&&!a)&&(u||a||p)&&(hn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Ss||ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Hl(this,c),h=this._ease(c/this._dur),Td(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Uo(this,0),this.parent||fu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?os(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Le),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,pi&&pi.vars.overwrite!==!0)._first||os(this),this.parent&&o!==this.timeline.totalDuration()&&Ur(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yn(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&td(a,l))return s==="all"&&(this._pt=0),os(this);for(u=this._op=this._op||[],s!=="all"&&(Pe(s)&&(_={},Ke(s,function(x){return _[x]=1}),s=_),s=wd(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Lo(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&os(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return us(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return us(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return me.killTweensOf(i,s,o)},t})(ys);mn(ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ke("staggerTo,staggerFrom,staggerFromTo",function(r){ye[r]=function(){var t=new Ze,e=Oa.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Vl=function(t,e,n){return t[e]=n},Iu=function(t,e,n){return t[e](n)},Ad=function(t,e,n,i){return t[e](i.fp,n)},Cd=function(t,e,n){return t.setAttribute(e,n)},Gl=function(t,e){return ve(t[e])?Iu:Ll(t[e])&&t.setAttribute?Cd:Vl},Uu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Rd=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Nu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Wl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Pd=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Dd=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Lo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Ld=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Fu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Je=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Uu,this.d=l||this,this.set=c||Vl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ld,this.m=n,this.mt=s,this.tween=i},r})();Ke(Ol+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Fl[r]=1});pn.TweenMax=pn.TweenLite=ye;pn.TimelineLite=pn.TimelineMax=Ze;me=new Ze({sortChildren:!1,defaults:gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fn.stringFilter=Au;var Zi=[],ao={},Id=[],bc=0,Ud=0,qo=function(t){return(ao[t]||Id).map(function(e){return e()})},Ha=function(){var t=Date.now(),e=[];t-bc>2&&(qo("matchMediaInit"),Zi.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=In.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),qo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bc=t,qo("matchMedia"))},Ou=(function(){function r(e,n){this.selector=n&&Ba(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ud++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ve(n)&&(s=i,i=n,n=ve);var o=this,a=function(){var c=ue,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ba(s)),ue=o,u=i.apply(o,arguments),ve(u)&&o._r.push(u),ue=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===ve?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=ue;ue=null,n(this),ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ze?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Zi.length;o--;)Zi[o].id===this.id&&Zi.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Nd=(function(){function r(e){this.contexts=[],this.scope=e,ue&&ue.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){kn(n)||(n={matches:n});var o=new Ou(0,s||this.scope),a=o.conditions={},l,c,h;ue&&!o.selector&&(o.selector=ue.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=In.matchMedia(n[c]),l&&(Zi.indexOf(o)<0&&Zi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ha):l.addEventListener("change",Ha)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),So={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Tu(i)})},timeline:function(t){return new Ze(t)},getTweensOf:function(t,e){return me.getTweensOf(t,e)},getProperty:function(t,e,n,i){Pe(t)&&(t=yn(t)[0]);var s=qi(t||{}).get,o=n?uu:hu;return n==="native"&&(n=""),t&&(e?o((on[e]&&on[e].get||s)(t,e,n,i)):function(a,l,c){return o((on[a]&&on[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=yn(t),t.length>1){var i=t.map(function(h){return en.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=on[e],a=qi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Sr._pt=0,u.init(t,n?h+n:h,Sr,0,[t]),u.render(1,u),Sr._pt&&Wl(1,Sr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=en.to(t,mn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=$i(t.ease,gs.ease)),Sc(gs,t||{})},config:function(t){return Sc(fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!on[a]&&!pn[a]&&vs(e+" effect requires "+a+" plugin.")}),Vo[e]=function(a,l,c){return n(yn(a),mn(l||{},s),c)},o&&(Ze.prototype[e]=function(a,l,c){return this.add(Vo[e](a,kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){zt[t]=$i(e)},parseEase:function(t,e){return arguments.length?$i(t,e):zt},getById:function(t){return me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ze(t),i,s;for(n.smoothChildTiming=je(t.smoothChildTiming),me.remove(n),n._dp=0,n._time=n._tTime=me._time,i=me._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ye&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=s;return Nn(me,n,0),n},context:function(t,e){return t?new Ou(t,e):ue},matchMedia:function(t){return new Nd(t)},matchMediaRefresh:function(){return Zi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ha()},addEventListener:function(t,e){var n=ao[t]||(ao[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ao[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:fd,wrapYoyo:dd,distribute:vu,random:Mu,snap:xu,normalize:ud,getUnit:ze,clamp:ad,splitColor:wu,toArray:yn,selector:Ba,mapRange:yu,pipe:cd,unitize:hd,interpolate:pd,shuffle:gu},install:su,effects:Vo,ticker:ln,updateRoot:Ze.updateRoot,plugins:on,globalTimeline:me,core:{PropTween:Je,globals:ou,Tween:ye,Timeline:Ze,Animation:ys,getCache:qi,_removeLinkedListItem:Lo,reverting:function(){return Le},context:function(t){return t&&ue&&(ue.data.push(t),t._ctx=ue),ue},suppressOverwrites:function(t){return Dl=t}}};Ke("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return So[r]=ye[r]});ln.add(Ze.updateRoot);Sr=So.to({},{duration:0});var Fd=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Od=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Fd(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Yo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Pe(s)&&(l={},Ke(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Od(a,s)}}}},en=So.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Le?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Yo("roundProps",za),Yo("modifiers"),Yo("snap",xu))||So;ye.version=Ze.version=en.version="3.15.0";ru=1;Il()&&Nr();zt.Power0;zt.Power1;zt.Power2;zt.Power3;zt.Power4;zt.Linear;zt.Quad;zt.Cubic;zt.Quart;zt.Quint;zt.Strong;zt.Elastic;zt.Back;zt.SteppedEase;zt.Bounce;zt.Sine;zt.Expo;zt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ac,mi,wr,Xl,Hi,Cc,ql,Bd=function(){return typeof window<"u"},ti={},Fi=180/Math.PI,br=Math.PI/180,ir=Math.atan2,Rc=1e8,Yl=/([A-Z])/g,zd=/(left|right|width|margin|padding|x)/i,kd=/[\s,\(]\S/,Fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Va=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Hd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Gd=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Wd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Bu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},zu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Xd=function(t,e,n){return t.style[e]=n},qd=function(t,e,n){return t.style.setProperty(e,n)},Yd=function(t,e,n){return t._gsap[e]=n},$d=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Zd=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},jd=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},_e="transform",Qe=_e+"Origin",Kd=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in ti&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Fn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=jn(i,a)}):this.tfm[t]=o.x?o[t]:jn(i,t),t===Qe&&(this.tfm.zOrigin=o.zOrigin);else return Fn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(_e)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qe,e,"")),t=_e}(s||e)&&this.props.push(t,e,s[t])},ku=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Jd=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ql(),(!s||!s.isStart)&&!n[_e]&&(ku(n),i.zOrigin&&n[Qe]&&(n[Qe]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Hu=function(t,e){var n={target:t,props:[],revert:Jd,save:Kd};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Vu,Ga=function(t,e){var n=mi.createElementNS?mi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):mi.createElement(t);return n&&n.style?n:mi.createElement(t)},un=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fr(e)||e,1)||""},Pc="O,Moz,ms,Ms,Webkit".split(","),Fr=function(t,e,n){var i=e||Hi,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Pc[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Pc[o]:"")+t},Wa=function(){Bd()&&window.document&&(Ac=window,mi=Ac.document,wr=mi.documentElement,Hi=Ga("div")||{style:{}},Ga("div"),_e=Fr(_e),Qe=_e+"Origin",Hi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vu=!!Fr("perspective"),ql=en.core.reverting,Xl=1)},Dc=function(t){var e=t.ownerSVGElement,n=Ga("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),wr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),wr.removeChild(n),s},Lc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Gu=function(t){var e,n;try{e=t.getBBox()}catch{e=Dc(t),n=1}return e&&(e.width||e.height)||n||(e=Dc(t)),e&&!e.width&&!e.x&&!e.y?{x:+Lc(t,["x","cx","x1"])||0,y:+Lc(t,["y","cy","y1"])||0,width:0,height:0}:e},Wu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Gu(t))},Ei=function(t,e){if(e){var n=t.style,i;e in ti&&e!==Qe&&(e=_e),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yl,"-$1").toLowerCase())):n.removeAttribute(e)}},_i=function(t,e,n,i,s,o){var a=new Je(t._pt,e,n,0,1,o?zu:Bu);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Ic={deg:1,rad:1,turn:1},Qd={grid:1,flex:1},Ti=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Hi.style,l=zd.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||Ic[i]||Ic[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&Wu(t),(f||o==="%")&&(ti[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Me(f?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===mi||!_.appendChild)&&(_=mi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===ln.time&&!m.uncache)return Me(s/m.width*u);if(f&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,g=t[h],x?t.style[e]=x:Ei(t,e)}else(f||o==="%")&&!Qd[un(_,"display")]&&(a.position=un(t,"position")),_===t&&(a.position="static"),_.appendChild(Hi),g=Hi[h],_.removeChild(Hi),a.position="absolute";return l&&f&&(m=qi(_),m.time=ln.time,m.width=_[h]),Me(d?g*s/u:g&&s?u/g*s:0)},jn=function(t,e,n,i){var s;return Xl||Wa(),e in Fn&&e!=="transform"&&(e=Fn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ti[e]&&e!=="transform"?(s=Ts(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Eo(un(t,Qe))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=yo[e]&&yo[e](t,e,n)||un(t,e)||lu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ti(t,e,s,n)+n:s},tp=function(t,e,n,i){if(!n||n==="none"){var s=Fr(e,t,1),o=s&&un(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=un(t,"borderTopColor"))}var a=new Je(this._pt,t.style,e,0,1,Nu),l=0,c=0,h,u,d,f,g,_,m,p,x,M,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=un(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=un(t,e)||i,_?t.style[e]=_:Ei(t,e)),h=[n,i],Au(h),n=h[0],i=h[1],d=n.match(Mr)||[],T=i.match(Mr)||[],T.length){for(;u=Mr.exec(i);)m=u[0],x=i.substring(l,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=Tr(f,m)+v),p=parseFloat(m),M=m.substr((p+"").length),l=Mr.lastIndex-M.length,M||(M=M||fn.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(f=Ti(t,e,_,M)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?zu:Bu;return iu.test(i)&&(a.e=0),this._pt=a,a},Uc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ep=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Uc[n]||n,e[1]=Uc[i]||i,e.join(" ")},np=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ti[a]&&(l=1,a=a==="transformOrigin"?Qe:_e),Ei(n,a);l&&(Ei(n,_e),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ts(n,1),o.uncache=1,ku(i)))}},yo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Je(t._pt,e,n,0,0,np);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Es=[1,0,0,1,0,0],Xu={},qu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Nc=function(t){var e=un(t,_e);return qu(e)?Es:e.substr(7).match(nu).map(Me)},$l=function(t,e){var n=t._gsap||qi(t),i=t.style,s=Nc(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Es:s):(s===Es&&!t.offsetParent&&t!==wr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,wr.appendChild(t)),s=Nc(t),l?i.display=l:Ei(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):wr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xa=function(t,e,n,i,s,o){var a=t._gsap,l=s||$l(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],M=e.split(" "),v=parseFloat(M[0])||0,T=parseFloat(M[1])||0,A,b,C,S;n?l!==Es&&(b=f*m-g*_)&&(C=v*(m/b)+T*(-_/b)+(_*x-m*p)/b,S=v*(-g/b)+T*(f/b)-(f*x-g*p)/b,v=C,T=S):(A=Gu(t),v=A.x+(~M[0].indexOf("%")?v/100*A.width:v),T=A.y+(~(M[1]||M[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&a.smooth?(p=v-c,x=T-h,a.xOffset=u+(p*f+x*_)-p,a.yOffset=d+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Qe]="0px 0px",o&&(_i(o,a,"xOrigin",c,v),_i(o,a,"yOrigin",h,T),_i(o,a,"xOffset",u,a.xOffset),_i(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+T)},Ts=function(t,e){var n=t._gsap||new Ru(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=un(t,Qe)||"0",h,u,d,f,g,_,m,p,x,M,v,T,A,b,C,S,y,P,O,F,V,X,G,Y,H,nt,at,pt,Ct,Yt,q,J;return h=u=d=_=m=p=x=M=v=0,f=g=1,n.svg=!!(t.getCTM&&Wu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[_e]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_e]!=="none"?l[_e]:"")),i.scale=i.rotate=i.translate="none"),b=$l(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Xa(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),T=n.xOrigin||0,A=n.yOrigin||0,b!==Es&&(P=b[0],O=b[1],F=b[2],V=b[3],h=X=b[4],u=G=b[5],b.length===6?(f=Math.sqrt(P*P+O*O),g=Math.sqrt(V*V+F*F),_=P||O?ir(O,P)*Fi:0,x=F||V?ir(F,V)*Fi+_:0,x&&(g*=Math.abs(Math.cos(x*br))),n.svg&&(h-=T-(T*P+A*F),u-=A-(T*O+A*V))):(J=b[6],Yt=b[7],at=b[8],pt=b[9],Ct=b[10],q=b[11],h=b[12],u=b[13],d=b[14],C=ir(J,Ct),m=C*Fi,C&&(S=Math.cos(-C),y=Math.sin(-C),Y=X*S+at*y,H=G*S+pt*y,nt=J*S+Ct*y,at=X*-y+at*S,pt=G*-y+pt*S,Ct=J*-y+Ct*S,q=Yt*-y+q*S,X=Y,G=H,J=nt),C=ir(-F,Ct),p=C*Fi,C&&(S=Math.cos(-C),y=Math.sin(-C),Y=P*S-at*y,H=O*S-pt*y,nt=F*S-Ct*y,q=V*y+q*S,P=Y,O=H,F=nt),C=ir(O,P),_=C*Fi,C&&(S=Math.cos(C),y=Math.sin(C),Y=P*S+O*y,H=X*S+G*y,O=O*S-P*y,G=G*S-X*y,P=Y,X=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Me(Math.sqrt(P*P+O*O+F*F)),g=Me(Math.sqrt(G*G+J*J)),C=ir(X,G),x=Math.abs(C)>2e-4?C*Fi:0,v=q?1/(q<0?-q:q):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!qu(un(t,_e)),Y&&t.setAttribute("transform",Y))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Me(f),n.scaleY=Me(g),n.rotation=Me(_)+a,n.rotationX=Me(m)+a,n.rotationY=Me(p)+a,n.skewX=x+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Qe]=Eo(c)),n.xOffset=n.yOffset=0,n.force3D=fn.force3D,n.renderTransform=n.svg?rp:Vu?Yu:ip,n.uncache=0,n},Eo=function(t){return(t=t.split(" "))[0]+" "+t[1]},$o=function(t,e,n){var i=ze(e);return Me(parseFloat(e)+parseFloat(Ti(t,"x",n+"px",i)))+i},ip=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Yu(t,e)},Ci="0deg",jr="0px",Ri=") ",Yu=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,M=n.zOrigin,v="",T=p==="auto"&&t&&t!==1||p===!0;if(M&&(u!==Ci||h!==Ci)){var A=parseFloat(h)*br,b=Math.sin(A),C=Math.cos(A),S;A=parseFloat(u)*br,S=Math.cos(A),o=$o(x,o,b*S*-M),a=$o(x,a,-Math.sin(A)*-M),l=$o(x,l,C*S*-M+M)}m!==jr&&(v+="perspective("+m+Ri),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(T||o!==jr||a!==jr||l!==jr)&&(v+=l!==jr||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ri),c!==Ci&&(v+="rotate("+c+Ri),h!==Ci&&(v+="rotateY("+h+Ri),u!==Ci&&(v+="rotateX("+u+Ri),(d!==Ci||f!==Ci)&&(v+="skew("+d+", "+f+Ri),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Ri),x.style[_e]=v||"translate(0, 0)"},rp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,M=parseFloat(o),v=parseFloat(a),T,A,b,C,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=br,c*=br,T=Math.cos(l)*u,A=Math.sin(l)*u,b=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=br,S=Math.tan(c-h),S=Math.sqrt(1+S*S),b*=S,C*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),T*=S,A*=S)),T=Me(T),A=Me(A),b=Me(b),C=Me(C)):(T=u,C=d,A=b=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Ti(f,"x",o,"px"),v=Ti(f,"y",a,"px")),(g||_||m||p)&&(M=Me(M+g-(g*T+_*b)+m),v=Me(v+_-(g*A+_*C)+p)),(i||s)&&(S=f.getBBox(),M=Me(M+i/100*S.width),v=Me(v+s/100*S.height)),S="matrix("+T+","+A+","+b+","+C+","+M+","+v+")",f.setAttribute("transform",S),x&&(f.style[_e]=S)},sp=function(t,e,n,i,s){var o=360,a=Pe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fi:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Rc)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Rc)%o-~~(c/o)*o)),t._pt=d=new Je(t._pt,e,n,i,c,Hd),d.e=h,d.u="deg",t._props.push(n),d},Fc=function(t,e){for(var n in e)t[n]=e[n];return t},op=function(t,e,n){var i=Fc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[_e]=e,a=Ts(n,1),Ei(n,_e),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_e],o[_e]=e,a=Ts(n,1),o[_e]=c);for(l in ti)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=ze(c),g=ze(h),u=f!==g?Ti(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new Je(t._pt,a,l,u,d-u,Va),t._pt.u=g||0,t._props.push(l));Fc(a,i)};Ke("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});yo[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return jn(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var $u={name:"css",register:Wa,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,x,M,v,T,A,b,C,S;Xl||Wa(),this.styles=this.styles||Hu(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(on[_]&&Pu(_,e,n,i,t,s)))){if(f=typeof h,g=yo[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ms(h)),g)g(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",vi.lastIndex=0,vi.test(c)||(m=ze(c),p=ze(h),p?m!==p&&(c=Ti(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Pe(c)&&~c.indexOf("random(")&&(c=Ms(c)),ze(c+"")||c==="auto"||(c+=fn.units[_]||ze(jn(t,_))||""),(c+"").charAt(1)==="="&&(c=jn(t,_))):c=jn(t,_),d=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Fn&&(_==="autoAlpha"&&(d===1&&jn(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),_i(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Fn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ti,M){if(this.styles.save(_),S=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=un(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=h,h=un(t,"perspective"),y?t.style.perspective=y:Ei(t,"perspective")}u=parseFloat(h)}if(v||(T=t._gsap,T.renderTransform&&!e.parseTransform||Ts(t,e.parseTransform),A=e.smoothOrigin!==!1&&T.smooth,v=this._pt=new Je(this._pt,a,_e,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new Je(this._pt,T,"scaleY",T.scaleY,(x?Tr(T.scaleY,x+u):u)-T.scaleY||0,Va),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Qe,0,a[Qe]),h=ep(h),T.svg?Xa(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&_i(this,T,"zOrigin",T.zOrigin,p),_i(this,a,_,Eo(c),Eo(h)));continue}else if(_==="svgOrigin"){Xa(t,h,1,A,0,this);continue}else if(_ in Xu){sp(this,T,_,d,x?Tr(d,x+h):h);continue}else if(_==="smoothOrigin"){_i(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){op(this,h,t);continue}}else _ in a||(_=Fr(_)||_);if(M||(u||u===0)&&(d||d===0)&&!kd.test(h)&&_ in a)m=(c+"").substr((d+"").length),u||(u=0),p=ze(h)||(_ in fn.units?fn.units[_]:m),m!==p&&(d=Ti(t,_,c,p)),this._pt=new Je(this._pt,M?T:a,_,d,(x?Tr(d,x+u):u)-d,!M&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Wd:Va),this._pt.u=p||0,M&&S!==h?(this._pt.b=c,this._pt.e=S,this._pt.r=Gd):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Vd);else if(_ in a)tp.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,s);else if(_!=="parseTransform"){Nl(_,h);continue}M||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),o.push(_)}}b&&Fu(this)},render:function(t,e){if(e.tween._time||!ql())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:jn,aliases:Fn,getSetter:function(t,e,n){var i=Fn[e];return i&&i.indexOf(",")<0&&(e=i),e in ti&&e!==Qe&&(t._gsap.x||jn(t,"x"))?n&&Cc===n?e==="scale"?$d:Yd:(Cc=n||{})&&(e==="scale"?Zd:jd):t.style&&!Ll(t.style[e])?Xd:~e.indexOf("-")?qd:Gl(t,e)},core:{_removeProperty:Ei,_getMatrix:$l}};en.utils.checkPrefix=Fr;en.core.getStyleSaver=Hu;(function(r,t,e,n){var i=Ke(r+","+t+","+e,function(s){ti[s]=1});Ke(t,function(s){fn.units[s]="deg",Xu[s]=1}),Fn[i[13]]=r+","+t,Ke(n,function(s){var o=s.split(":");Fn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ke("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){fn.units[r]="px"});en.registerPlugin($u);var ce=en.registerPlugin($u)||en;ce.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zl="170",ap=0,Oc=1,lp=2,Zu=1,ju=2,$n=3,wi=0,qe=1,cn=2,xi=0,Ar=1,Cr=2,Bc=3,zc=4,cp=5,zi=100,hp=101,up=102,fp=103,dp=104,pp=200,mp=201,_p=202,gp=203,qa=204,Ya=205,vp=206,xp=207,Mp=208,Sp=209,yp=210,Ep=211,Tp=212,wp=213,bp=214,$a=0,Za=1,ja=2,Or=3,Ka=4,Ja=5,Qa=6,tl=7,Ku=0,Ap=1,Cp=2,Mi=0,Rp=1,Pp=2,Dp=3,Ju=4,Lp=5,Ip=6,Up=7,Qu=300,Br=301,zr=302,To=303,el=304,No=306,wo=1e3,Vi=1001,nl=1002,dn=1003,Np=1004,Ls=1005,On=1006,Zo=1007,Gi=1008,ei=1009,tf=1010,ef=1011,ws=1012,jl=1013,ji=1014,Bn=1015,Cs=1016,Kl=1017,Jl=1018,kr=1020,nf=35902,rf=1021,sf=1022,Dn=1023,of=1024,af=1025,Rr=1026,Hr=1027,Ql=1028,tc=1029,lf=1030,ec=1031,nc=1033,lo=33776,co=33777,ho=33778,uo=33779,il=35840,rl=35841,sl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37808,ul=37809,fl=37810,dl=37811,pl=37812,ml=37813,_l=37814,gl=37815,vl=37816,xl=37817,Ml=37818,Sl=37819,yl=37820,El=37821,fo=36492,Tl=36494,wl=36495,cf=36283,bl=36284,Al=36285,Cl=36286,Fp=3200,Op=3201,hf=0,Bp=1,fi="",Be="srgb",Wr="srgb-linear",Fo="linear",Qt="srgb",rr=7680,kc=519,zp=512,kp=513,Hp=514,uf=515,Vp=516,Gp=517,Wp=518,Xp=519,Hc=35044,Vc="300 es",Kn=2e3,bo=2001;class Xr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gc=1234567;const ds=Math.PI/180,bs=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[r&255]+Ue[r>>8&255]+Ue[r>>16&255]+Ue[r>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function De(r,t,e){return Math.max(t,Math.min(e,r))}function ic(r,t){return(r%t+t)%t}function qp(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Yp(r,t,e){return r!==t?(e-r)/(t-r):0}function ps(r,t,e){return(1-e)*r+e*t}function $p(r,t,e,n){return ps(r,t,1-Math.exp(-e*n))}function Zp(r,t=1){return t-Math.abs(ic(r,t*2)-t)}function jp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Kp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Jp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Qp(r,t){return r+Math.random()*(t-r)}function tm(r){return r*(.5-Math.random())}function em(r){r!==void 0&&(Gc=r);let t=Gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nm(r){return r*ds}function im(r){return r*bs}function rm(r){return(r&r-1)===0&&r!==0}function sm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function om(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function am(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $e={DEG2RAD:ds,RAD2DEG:bs,generateUUID:qr,clamp:De,euclideanModulo:ic,mapLinear:qp,inverseLerp:Yp,lerp:ps,damp:$p,pingpong:Zp,smoothstep:jp,smootherstep:Kp,randInt:Jp,randFloat:Qp,randFloatSpread:tm,seededRandom:em,degToRad:nm,radToDeg:im,isPowerOfTwo:rm,ceilPowerOfTwo:sm,floorPowerOfTwo:om,setQuaternionFromProperEuler:am,normalize:Ge,denormalize:xr};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,s,o,a,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],M=i[4],v=i[7],T=i[2],A=i[5],b=i[8];return s[0]=o*_+a*x+l*T,s[3]=o*m+a*M+l*A,s[6]=o*p+a*v+l*b,s[1]=c*_+h*x+u*T,s[4]=c*m+h*M+u*A,s[7]=c*p+h*v+u*b,s[2]=d*_+f*x+g*T,s[5]=d*m+f*M+g*A,s[8]=d*p+f*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new Ut;function ff(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lm(){const r=Ao("canvas");return r.style.display="block",r}const Wc={};function ls(r){r in Wc||(Wc[r]=!0,console.warn(r))}function cm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function hm(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function um(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?Fo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Xc=[.64,.33,.3,.6,.15,.06],qc=[.2126,.7152,.0722],Yc=[.3127,.329],$c=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Wr]:{primaries:Xc,whitePoint:Yc,transfer:Fo,toXYZ:$c,fromXYZ:Zc,luminanceCoefficients:qc,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Xc,whitePoint:Yc,transfer:Qt,toXYZ:$c,fromXYZ:Zc,luminanceCoefficients:qc,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let sr;class fm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{sr===void 0&&(sr=Ao("canvas")),sr.width=t.width,sr.height=t.height;const n=sr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=sr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dm=0;class df{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ko(i[o].image)):s.push(Ko(i[o]))}else s=Ko(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ko(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pm=0;class He extends Xr{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Vi,i=Vi,s=On,o=Gi,a=Dn,l=ei,c=He.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=qr(),this.name="",this.source=new df(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wo:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wo:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Qu;He.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,T=(p+1)/2,A=(h+d)/4,b=(u+_)/4,C=(g+m)/4;return M>v&&M>T?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=b/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=b/s,i=C/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mm extends Xr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new df(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends mm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pf extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _m extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),A=Math.atan2(T,p*x);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new D,jc=new zn;class Qi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),Us.subVectors(this.max,Kr),or.subVectors(t.a,Kr),ar.subVectors(t.b,Kr),lr.subVectors(t.c,Kr),ri.subVectors(ar,or),si.subVectors(lr,ar),Pi.subVectors(or,lr);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,si.z,0,-si.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-si.y,si.x,0,-Pi.y,Pi.x,0];return!Qo(e,or,ar,lr,Us)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,or,ar,lr,Us))?!1:(Ns.crossVectors(ri,si),e=[Ns.x,Ns.y,Ns.z],Qo(e,or,ar,lr,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new D,new D,new D,new D,new D,new D,new D,new D],wn=new D,Is=new Qi,or=new D,ar=new D,lr=new D,ri=new D,si=new D,Pi=new D,Kr=new D,Us=new D,Ns=new D,Di=new D;function Qo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Di.fromArray(r,s);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gm=new Qi,Jr=new D,ta=new D;class tr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);const e=Jr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Jr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(ta)),this.expandByPoint(Jr.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new D,ea=new D,Fs=new D,oi=new D,na=new D,Os=new D,ia=new D;class rc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ea.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(ea);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Fs),a=oi.dot(this.direction),l=-oi.dot(Fs),c=oi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ea).addScaledVector(Fs,d),f}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,i,s){na.subVectors(e,t),Os.subVectors(n,t),ia.crossVectors(na,Os);let o=this.direction.dot(ia),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const l=a*this.direction.dot(Os.crossVectors(oi,Os));if(l<0)return null;const c=a*this.direction.dot(na.cross(oi));if(c<0||l+c>o)return null;const h=-a*oi.dot(ia);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/cr.setFromMatrixColumn(t,0).length(),s=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vm,t,xm)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ai.crossVectors(n,rn),ai.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ai.crossVectors(n,rn)),ai.normalize(),Bs.crossVectors(rn,ai),i[0]=ai.x,i[4]=Bs.x,i[8]=rn.x,i[1]=ai.y,i[5]=Bs.y,i[9]=rn.y,i[2]=ai.z,i[6]=Bs.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],T=n[15],A=i[0],b=i[4],C=i[8],S=i[12],y=i[1],P=i[5],O=i[9],F=i[13],V=i[2],X=i[6],G=i[10],Y=i[14],H=i[3],nt=i[7],at=i[11],pt=i[15];return s[0]=o*A+a*y+l*V+c*H,s[4]=o*b+a*P+l*X+c*nt,s[8]=o*C+a*O+l*G+c*at,s[12]=o*S+a*F+l*Y+c*pt,s[1]=h*A+u*y+d*V+f*H,s[5]=h*b+u*P+d*X+f*nt,s[9]=h*C+u*O+d*G+f*at,s[13]=h*S+u*F+d*Y+f*pt,s[2]=g*A+_*y+m*V+p*H,s[6]=g*b+_*P+m*X+p*nt,s[10]=g*C+_*O+m*G+p*at,s[14]=g*S+_*F+m*Y+p*pt,s[3]=x*A+M*y+v*V+T*H,s[7]=x*b+M*P+v*X+T*nt,s[11]=x*C+M*O+v*G+T*at,s[15]=x*S+M*F+v*Y+T*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,T=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*x+n*M+i*v+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=x*b,t[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*b,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*b,t[4]=M*b,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*b,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*b,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*b,t[8]=v*b,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*p-e*u*p)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*b,t[12]=T*b,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,x=l*c,M=l*h,v=l*u,T=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+v)*T,i[2]=(g-M)*T,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+M)*b,i[9]=(m-x)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=cr.set(i[0],i[1],i[2]).length();const o=cr.set(i[4],i[5],i[6]).length(),a=cr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);const c=1/s,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Kn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Kn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===bo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Kn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h;let g,_;if(a===Kn)g=(o+s)*u,_=-2*u;else if(a===bo)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cr=new D,bn=new Bt,vm=new D(0,0,0),xm=new D(1,1,1),ai=new D,Bs=new D,rn=new D,Kc=new Bt,Jc=new zn;class tn{constructor(t=0,e=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mm=0;const Qc=new D,hr=new zn,Xn=new Bt,zs=new D,Qr=new D,Sm=new D,ym=new zn,th=new D(1,0,0),eh=new D(0,1,0),nh=new D(0,0,1),ih={type:"added"},Em={type:"removed"},ur={type:"childadded",child:null},ra={type:"childremoved",child:null};class Te extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new D,e=new tn,n=new zn,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ut}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Qr,zs,this.up):Xn.lookAt(zs,Qr,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Xn),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,Sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,ym,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new D(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new D,qn=new D,sa=new D,Yn=new D,fr=new D,dr=new D,rh=new D,oa=new D,aa=new D,la=new D,ca=new te,ha=new te,ua=new te;class Pn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),An.subVectors(t,e),i.cross(An);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){An.subVectors(i,e),qn.subVectors(n,e),sa.subVectors(t,e);const o=An.dot(An),a=An.dot(qn),l=An.dot(sa),c=qn.dot(qn),h=qn.dot(sa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ca,s.x),o.addScaledVector(ha,s.y),o.addScaledVector(ua,s.z),o}static isFrontFacing(t,e,n,i){return An.subVectors(n,e),qn.subVectors(t,e),An.cross(qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),An.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;fr.subVectors(i,n),dr.subVectors(s,n),oa.subVectors(t,n);const l=fr.dot(oa),c=dr.dot(oa);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,i);const h=fr.dot(aa),u=dr.dot(aa);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(fr,o);la.subVectors(t,s);const f=fr.dot(la),g=dr.dot(la);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(dr,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return rh.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(rh,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(fr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ks={h:0,s:0,l:0};function fa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=ic(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=fa(o,s,t+1/3),this.g=fa(o,s,t),this.b=fa(o,s,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Be){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=_f[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Xt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(De(Ne.r*255,0,255))*65536+Math.round(De(Ne.g*255,0,255))*256+Math.round(De(Ne.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,s=Ne.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Be){Xt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(ks);const n=ps(li.h,ks.h,e),i=ps(li.s,ks.s,e),s=ps(li.l,ks.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new St;St.NAMES=_f;let Tm=0;class er extends Xr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=qr(),this.name="",this.blending=Ar,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Co extends er{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new D,Hs=new Tt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}}class gf extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vf extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wm=0;const vn=new Bt,da=new Te,pr=new D,sn=new Qi,ts=new Qi,Ae=new D;class Ee extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ff(t)?vf:gf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ut().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(sn.min,ts.min),sn.expandByPoint(Ae),Ae.addVectors(sn.max,ts.max),sn.expandByPoint(Ae)):(sn.expandByPoint(ts.min),sn.expandByPoint(ts.max))}sn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(t,c),Ae.add(pr)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new D,l[C]=new D;const c=new D,h=new D,u=new D,d=new Tt,f=new Tt,g=new Tt,_=new D,m=new D;function p(C,S,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[y].add(_),l[C].add(m),l[S].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){const y=x[C],P=y.start,O=y.count;for(let F=P,V=P+O;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new D,v=new D,T=new D,A=new D;function b(C){T.fromBufferAttribute(i,C),A.copy(T);const S=a[C];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(A,S);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,S=x.length;C<S;++C){const y=x[C],P=y.start,O=y.count;for(let F=P,V=P+O;F<V;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new Bt,Li=new rc,Vs=new tr,oh=new D,Gs=new D,Ws=new D,Xs=new D,pa=new D,qs=new D,ah=new D,Ys=new D;class At extends Te{constructor(t=new Ee,e=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(pa.fromBufferAttribute(u,t),o?qs.addScaledVector(pa,h):qs.addScaledVector(pa.sub(e),h))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Li.copy(t.ray).recast(t.near),!(Vs.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Vs,oh)===null||Li.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(sh.copy(s).invert(),Li.copy(t.ray).applyMatrix4(sh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=M;v<T;v+=3){const A=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=$s(this,p,t,n,c,h,u,A,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=$s(this,o,t,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=M;v<T;v+=3){const A=v,b=v+1,C=v+2;i=$s(this,p,t,n,c,h,u,A,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,v=m+2;i=$s(this,o,t,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function bm(r,t,e,n,i,s,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===wi,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:r}}function $s(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Gs),r.getVertexPosition(l,Ws),r.getVertexPosition(c,Xs);const h=bm(r,t,e,n,Gs,Ws,Xs,ah);if(h){const u=new D;Pn.getBarycoord(ah,Gs,Ws,Xs,u),i&&(h.uv=Pn.getInterpolatedAttribute(i,a,l,c,u,new Tt)),s&&(h.uv1=Pn.getInterpolatedAttribute(s,a,l,c,u,new Tt)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Pn.getNormal(Gs,Ws,Xs,d.normal),h.face=d,h.barycoord=u}return h}class ne extends Ee{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,p,x,M,v,T,A,b,C,S){const y=v/b,P=T/C,O=v/2,F=T/2,V=A/2,X=b+1,G=C+1;let Y=0,H=0;const nt=new D;for(let at=0;at<G;at++){const pt=at*P-F;for(let Ct=0;Ct<X;Ct++){const Yt=Ct*y-O;nt[_]=Yt*x,nt[m]=pt*M,nt[p]=V,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Ct/b),u.push(1-at/C),Y+=1}}for(let at=0;at<C;at++)for(let pt=0;pt<b;pt++){const Ct=d+pt+X*at,Yt=d+pt+X*(at+1),q=d+(pt+1)+X*(at+1),J=d+(pt+1)+X*at;l.push(Ct,Yt,J),l.push(Yt,q,J),H+=6}a.addGroup(f,H,S),f+=H,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function We(r){const t={};for(let e=0;e<r.length;e++){const n=Vr(r[e]);for(const i in n)t[i]=n[i]}return t}function Am(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function xf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Cm={clone:Vr,merge:We};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends er{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=Am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mf extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new D,lh=new Tt,ch=new Tt;class an extends Mf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mr=-90,_r=1;class Dm extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(mr,_r,t,e);i.layers=this.layers,this.add(i);const s=new an(mr,_r,t,e);s.layers=this.layers,this.add(s);const o=new an(mr,_r,t,e);o.layers=this.layers,this.add(o);const a=new an(mr,_r,t,e);a.layers=this.layers,this.add(a);const l=new an(mr,_r,t,e);l.layers=this.layers,this.add(l);const c=new an(mr,_r,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sf extends He{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Br,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lm extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Sf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ne(5,5,5),s=new Xe({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:xi});s.uniforms.tEquirect.value=e;const o=new At(i,s),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=On),new Dm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ma=new D,Im=new D,Um=new Ut;class Oi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ma.subVectors(n,e).cross(Im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Um.getNormalMatrix(t),i=this.coplanarPoint(ma).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new tr,Zs=new D;class sc{constructor(t=new Oi,e=new Oi,n=new Oi,i=new Oi,s=new Oi,o=new Oi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+h,m+g,v+x).normalize(),n[3].setComponents(l-o,d-h,m-g,v-x).normalize(),n[4].setComponents(l-a,d-u,m-_,v-M).normalize(),e===Kn)n[5].setComponents(l+a,d+u,m+_,v+M).normalize();else if(e===bo)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zs.x=i.normal.x>0?t.max.x:t.min.x,Zs.y=i.normal.y>0?t.max.y:t.min.y,Zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yf(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Nm(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Gr extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let M=0;M<c;M++){const v=M*u-s;g.push(v,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,v=x+c*(p+1),T=x+1+c*(p+1),A=x+1+c*p;f.push(M,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,jm=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,s_=`#define PI 3.141592653589793
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
} // validated`,o_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a_=`vec3 transformedNormal = objectNormal;
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
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",d_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E_=`#ifdef USE_GRADIENTMAP
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
}`,T_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A_=`uniform bool receiveShadow;
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
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,R_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I_=`PhysicalMaterial material;
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
#endif`,U_=`struct PhysicalMaterial {
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
}`,N_=`
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
#endif`,F_=`#if defined( RE_IndirectDiffuse )
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
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X_=`#if defined( USE_POINTS_UV )
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
#endif`,q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K_=`#ifdef USE_MORPHTARGETS
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
#endif`,J_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Vg=`#if DEPTH_PACKING == 3200
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
}`,Gg=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,Jg=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,t0=`#define MATCAP
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
}`,e0=`#define NORMAL
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
}`,n0=`#define NORMAL
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
}`,i0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,s0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
}`,a0=`#define TOON
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
}`,l0=`#define TOON
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
}`,c0=`uniform float size;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,d0=`uniform float rotation;
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
}`,p0=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Fm,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:km,alphatest_pars_fragment:Hm,aomap_fragment:Vm,aomap_pars_fragment:Gm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:$m,iridescence_fragment:Zm,bumpmap_pars_fragment:jm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:t_,color_fragment:e_,color_pars_fragment:n_,color_pars_vertex:i_,color_vertex:r_,common:s_,cube_uv_reflection_fragment:o_,defaultnormal_vertex:a_,displacementmap_pars_vertex:l_,displacementmap_vertex:c_,emissivemap_fragment:h_,emissivemap_pars_fragment:u_,colorspace_fragment:f_,colorspace_pars_fragment:d_,envmap_fragment:p_,envmap_common_pars_fragment:m_,envmap_pars_fragment:__,envmap_pars_vertex:g_,envmap_physical_pars_fragment:C_,envmap_vertex:v_,fog_vertex:x_,fog_pars_vertex:M_,fog_fragment:S_,fog_pars_fragment:y_,gradientmap_pars_fragment:E_,lightmap_pars_fragment:T_,lights_lambert_fragment:w_,lights_lambert_pars_fragment:b_,lights_pars_begin:A_,lights_toon_fragment:R_,lights_toon_pars_fragment:P_,lights_phong_fragment:D_,lights_phong_pars_fragment:L_,lights_physical_fragment:I_,lights_physical_pars_fragment:U_,lights_fragment_begin:N_,lights_fragment_maps:F_,lights_fragment_end:O_,logdepthbuf_fragment:B_,logdepthbuf_pars_fragment:z_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:H_,map_fragment:V_,map_pars_fragment:G_,map_particle_fragment:W_,map_particle_pars_fragment:X_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:Y_,morphinstance_vertex:$_,morphcolor_vertex:Z_,morphnormal_vertex:j_,morphtarget_pars_vertex:K_,morphtarget_vertex:J_,normal_fragment_begin:Q_,normal_fragment_maps:tg,normal_pars_fragment:eg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:fg,dithering_fragment:dg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:vg,shadowmap_vertex:xg,shadowmask_pars_fragment:Mg,skinbase_vertex:Sg,skinning_pars_vertex:yg,skinning_vertex:Eg,skinnormal_vertex:Tg,specularmap_fragment:wg,specularmap_pars_fragment:bg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Cg,transmission_fragment:Rg,transmission_pars_fragment:Pg,uv_pars_fragment:Dg,uv_pars_vertex:Lg,uv_vertex:Ig,worldpos_vertex:Ug,background_vert:Ng,background_frag:Fg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:kg,depth_vert:Hg,depth_frag:Vg,distanceRGBA_vert:Gg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:$g,meshbasic_vert:Zg,meshbasic_frag:jg,meshlambert_vert:Kg,meshlambert_frag:Jg,meshmatcap_vert:Qg,meshmatcap_frag:t0,meshnormal_vert:e0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:r0,meshphysical_vert:s0,meshphysical_frag:o0,meshtoon_vert:a0,meshtoon_frag:l0,points_vert:c0,points_frag:h0,shadow_vert:u0,shadow_frag:f0,sprite_vert:d0,sprite_frag:p0},it={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Un={basic:{uniforms:We([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:We([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new St(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:We([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:We([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:We([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new St(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:We([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:We([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:We([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:We([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:We([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:We([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:We([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:We([it.lights,it.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Un.physical={uniforms:We([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const js={r:0,b:0,g:0},Ui=new tn,m0=new Bt;function _0(r,t,e,n,i,s,o){const a=new St(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=g(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===No)?(h===void 0&&(h=new At(new ne(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Vr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ui.copy(M.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(Ui)),h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new At(new Gr(2,2),new Xe({name:"BackgroundMaterial",uniforms:Vr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(js,xf(r)),n.buffers.color.setClear(js.r,js.g,js.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function g0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(y,P,O,F,V){let X=!1;const G=u(F,O,P);s!==G&&(s=G,c(s.object)),X=f(y,F,O,V),X&&g(y,F,O,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(y,P,O,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,P,O){const F=O.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let G=X[F];return G===void 0&&(G=d(l()),X[F]=G),G}function d(y){const P=[],O=[],F=[];for(let V=0;V<e;V++)P[V]=0,O[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,P,O,F){const V=s.attributes,X=P.attributes;let G=0;const Y=O.getAttributes();for(const H in Y)if(Y[H].location>=0){const at=V[H];let pt=X[H];if(pt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),at===void 0||at.attribute!==pt||pt&&at.data!==pt.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function g(y,P,O,F){const V={},X=P.attributes;let G=0;const Y=O.getAttributes();for(const H in Y)if(Y[H].location>=0){let at=X[H];at===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const pt={};pt.attribute=at,at&&at.data&&(pt.data=at.data),V[H]=pt,G++}s.attributes=V,s.attributesNum=G,s.index=F}function _(){const y=s.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const O=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;O[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),V[y]!==P&&(r.vertexAttribDivisor(y,P),V[y]=P)}function x(){const y=s.newAttributes,P=s.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==y[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function M(y,P,O,F,V,X,G){G===!0?r.vertexAttribIPointer(y,P,O,V,X):r.vertexAttribPointer(y,P,O,F,V,X)}function v(y,P,O,F){_();const V=F.attributes,X=O.getAttributes(),G=P.defaultAttributeValues;for(const Y in X){const H=X[Y];if(H.location>=0){let nt=V[Y];if(nt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const at=nt.normalized,pt=nt.itemSize,Ct=t.get(nt);if(Ct===void 0)continue;const Yt=Ct.buffer,q=Ct.type,J=Ct.bytesPerElement,vt=q===r.INT||q===r.UNSIGNED_INT||nt.gpuType===jl;if(nt.isInterleavedBufferAttribute){const st=nt.data,bt=st.stride,Dt=nt.offset;if(st.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)p(H.location+Ot,st.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)m(H.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let Ot=0;Ot<H.locationSize;Ot++)M(H.location+Ot,pt/H.locationSize,q,at,bt*J,(Dt+pt/H.locationSize*Ot)*J,vt)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)p(H.location+st,nt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<H.locationSize;st++)m(H.location+st);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let st=0;st<H.locationSize;st++)M(H.location+st,pt/H.locationSize,q,at,pt*J,pt/H.locationSize*st*J,vt)}}else if(G!==void 0){const at=G[Y];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(H.location,at);break;case 3:r.vertexAttrib3fv(H.location,at);break;case 4:r.vertexAttrib4fv(H.location,at);break;default:r.vertexAttrib1fv(H.location,at)}}}}x()}function T(){C();for(const y in n){const P=n[y];for(const O in P){const F=P[O];for(const V in F)h(F[V].object),delete F[V];delete P[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const O in P){const F=P[O];for(const V in F)h(F[V].object),delete F[V];delete P[O]}delete n[y.id]}function b(y){for(const P in n){const O=n[P];if(O[y.id]===void 0)continue;const F=O[y.id];for(const V in F)h(F[V].object),delete F[V];delete O[y.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function v0(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function x0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Dn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===Cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ei&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Bn&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function M0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Oi,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=h(g,d,M,f);for(let T=0;T!==M;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function S0(r){let t=new WeakMap;function e(o,a){return a===To?o.mapping=Br:a===el&&(o.mapping=zr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===el)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lm(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ef extends Mf{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yr=4,hh=[.125,.215,.35,.446,.526,.582],ki=20,_a=new Ef,uh=new St;let ga=null,va=0,xa=0,Ma=!1;const Bi=(1+Math.sqrt(5))/2,gr=1/Bi,fh=[new D(-Bi,gr,0),new D(Bi,gr,0),new D(-gr,0,Bi),new D(gr,0,Bi),new D(0,Bi,-gr),new D(0,Bi,gr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ga=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,va,xa),this._renderer.xr.enabled=Ma,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Br||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Cs,format:Dn,colorSpace:Wr,depthBuffer:!1},i=ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y0(s)),this._blurMaterial=E0(s,t,e)}return i}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,n,i){const a=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(uh),h.toneMapping=Mi,h.autoClear=!1;const f=new Co({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new At(new ne,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(uh),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Ks(i,x*M,p>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Br||t.mapping===zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fh[(i-s-1)%fh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ki-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let x=0;for(let b=0;b<ki;++b){const C=b/_,S=Math.exp(-C*C/2);p.push(S),b===0?x+=S:b<m&&(x+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[i],T=3*v*(i>M-yr?i-M+yr:0),A=4*(this._cubeSize-v);Ks(e,T,A,3*v,2*v),l.setRenderTarget(e),l.render(u,_a)}}function y0(r){const t=[],e=[],n=[];let i=r;const s=r-yr+1+hh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-yr?l=hh[o-r+yr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,C=A>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];x.set(S,_*g*A),M.set(d,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const T=new Ee;T.setAttribute("position",new Re(x,_)),T.setAttribute("uv",new Re(M,m)),T.setAttribute("faceIndex",new Re(v,p)),t.push(T),i>yr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ph(r,t,e){const n=new Ki(r,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function E0(r,t,e){const n=new Float32Array(ki),i=new D(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function mh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function _h(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function T0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===To||l===el,h=l===Br||l===zr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new dh(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new dh(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function w0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function b0(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){const T=x[M+0],A=x[M+1],b=x[M+2];d.push(T,A,A,b,b,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const T=M+0,A=M+1,b=M+2;d.push(T,A,A,b,b,T)}}else return;const m=new(ff(d)?vf:gf)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function A0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function C0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function R0(r,t,e){const n=new WeakMap,i=new te;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const b=new Float32Array(T*A*4*u),C=new pf(b,T,A,u);C.type=Bn,C.needsUpdate=!0;const S=v*4;for(let P=0;P<u;P++){const O=p[P],F=x[P],V=M[P],X=T*A*4*P;for(let G=0;G<O.count;G++){const Y=G*S;g===!0&&(i.fromBufferAttribute(O,G),b[X+Y+0]=i.x,b[X+Y+1]=i.y,b[X+Y+2]=i.z,b[X+Y+3]=0),_===!0&&(i.fromBufferAttribute(F,G),b[X+Y+4]=i.x,b[X+Y+5]=i.y,b[X+Y+6]=i.z,b[X+Y+7]=0),m===!0&&(i.fromBufferAttribute(V,G),b[X+Y+8]=i.x,b[X+Y+9]=i.y,b[X+Y+10]=i.z,b[X+Y+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Tt(T,A)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function P0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Tf extends He{constructor(t,e,n,i,s,o,a,l,c,h=Rr){if(h!==Rr&&h!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rr&&(n=ji),n===void 0&&h===Hr&&(n=kr),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wf=new He,gh=new Tf(1,1),bf=new pf,Af=new _m,Cf=new Sf,vh=[],xh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),yh=new Float32Array(4);function Yr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=vh[i];if(s===void 0&&(s=new Float32Array(i),vh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function we(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Oo(r,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function D0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function L0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2fv(this.addr,t),be(e,t)}}function I0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;r.uniform3fv(this.addr,t),be(e,t)}}function U0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4fv(this.addr,t),be(e,t)}}function N0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;yh.set(n),r.uniformMatrix2fv(this.addr,!1,yh),be(e,n)}}function F0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;Sh.set(n),r.uniformMatrix3fv(this.addr,!1,Sh),be(e,n)}}function O0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;Mh.set(n),r.uniformMatrix4fv(this.addr,!1,Mh),be(e,n)}}function B0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2iv(this.addr,t),be(e,t)}}function k0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3iv(this.addr,t),be(e,t)}}function H0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4iv(this.addr,t),be(e,t)}}function V0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function G0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2uiv(this.addr,t),be(e,t)}}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3uiv(this.addr,t),be(e,t)}}function X0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4uiv(this.addr,t),be(e,t)}}function q0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gh.compareFunction=uf,s=gh):s=wf,e.setTexture2D(t||s,i)}function Y0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Af,i)}function $0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cf,i)}function Z0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bf,i)}function j0(r){switch(r){case 5126:return D0;case 35664:return L0;case 35665:return I0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return B0;case 35667:case 35671:return z0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return G0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Z0}}function K0(r,t){r.uniform1fv(this.addr,t)}function J0(r,t){const e=Yr(t,this.size,2);r.uniform2fv(this.addr,e)}function Q0(r,t){const e=Yr(t,this.size,3);r.uniform3fv(this.addr,e)}function tv(r,t){const e=Yr(t,this.size,4);r.uniform4fv(this.addr,e)}function ev(r,t){const e=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function nv(r,t){const e=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function iv(r,t){const e=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function rv(r,t){r.uniform1iv(this.addr,t)}function sv(r,t){r.uniform2iv(this.addr,t)}function ov(r,t){r.uniform3iv(this.addr,t)}function av(r,t){r.uniform4iv(this.addr,t)}function lv(r,t){r.uniform1uiv(this.addr,t)}function cv(r,t){r.uniform2uiv(this.addr,t)}function hv(r,t){r.uniform3uiv(this.addr,t)}function uv(r,t){r.uniform4uiv(this.addr,t)}function fv(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);we(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||wf,s[o])}function dv(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);we(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Af,s[o])}function pv(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);we(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Cf,s[o])}function mv(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);we(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||bf,s[o])}function _v(r){switch(r){case 5126:return K0;case 35664:return J0;case 35665:return Q0;case 35666:return tv;case 35674:return ev;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}class gv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j0(e.type)}}class vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_v(e.type)}}class xv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Eh(r,t){r.seq.push(t),r.map[t.id]=t}function Mv(r,t,e){const n=r.name,i=n.length;for(Sa.lastIndex=0;;){const s=Sa.exec(n),o=Sa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Eh(e,c===void 0?new gv(a,r,t):new vv(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new xv(a),Eh(e,u)),e=u}}}class po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Mv(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Th(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Sv=37297;let yv=0;function Ev(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const wh=new Ut;function Tv(r){Xt._getMatrix(wh,Xt.workingColorSpace,r);const t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(r)){case Fo:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function bh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Ev(r.getShaderSource(t),o)}else return i}function wv(r,t){const e=Tv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bv(r,t){let e;switch(t){case Rp:e="Linear";break;case Pp:e="Reinhard";break;case Dp:e="Cineon";break;case Ju:e="ACESFilmic";break;case Ip:e="AgX";break;case Up:e="Neutral";break;case Lp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Js=new D;function Av(){Xt.getLuminanceCoefficients(Js);const r=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Rv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function cs(r){return r!==""}function Ah(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ch(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(r){return r.replace(Dv,Iv)}const Lv=new Map;function Iv(r,t){let e=Ft[t];if(e===void 0){const n=Lv.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}const Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(r){return r.replace(Uv,Nv)}function Nv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ph(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Fv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function Ov(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Br:case zr:t="ENVMAP_TYPE_CUBE";break;case No:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:t="ENVMAP_MODE_REFRACTION";break}return t}function zv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ku:t="ENVMAP_BLENDING_MULTIPLY";break;case Ap:t="ENVMAP_BLENDING_MIX";break;case Cp:t="ENVMAP_BLENDING_ADD";break}return t}function kv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hv(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Fv(e),c=Ov(e),h=Bv(e),u=zv(e),d=kv(e),f=Cv(e),g=Rv(s),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Mi?bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,wv("linearToOutputTexel",e.outputColorSpace),Av(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=Rl(o),o=Ah(o,e),o=Ch(o,e),a=Rl(a),a=Ah(a,e),a=Ch(a,e),o=Rh(o),a=Rh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,v=x+p+a,T=Th(i,i.VERTEX_SHADER,M),A=Th(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(T).trim(),V=i.getShaderInfoLog(A).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,A);else{const Y=bh(i,T,"vertex"),H=bh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Y+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(T),i.deleteShader(A),C=new po(i,_),S=Pv(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Sv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let Vv=0;class Gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wv(t),e.set(t,n)),n}}class Wv{constructor(t){this.id=Vv++,this.code=t,this.usedTimes=0}}function Xv(r,t,e,n,i,s,o){const a=new mf,l=new Gv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,O,F){const V=O.fog,X=F.geometry,G=S.isMeshStandardMaterial?O.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),H=Y&&Y.mapping===No?Y.image.height:null,nt=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=at!==void 0?at.length:0;let Ct=0;X.morphAttributes.position!==void 0&&(Ct=1),X.morphAttributes.normal!==void 0&&(Ct=2),X.morphAttributes.color!==void 0&&(Ct=3);let Yt,q,J,vt;if(nt){const jt=Un[nt];Yt=jt.vertexShader,q=jt.fragmentShader}else Yt=S.vertexShader,q=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);const st=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,Ot=F.isBatchedMesh===!0,fe=!!S.map,Gt=!!S.matcap,xe=!!Y,N=!!S.aoMap,_n=!!S.lightMap,kt=!!S.bumpMap,Ht=!!S.normalMap,Et=!!S.displacementMap,oe=!!S.emissiveMap,yt=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,B=S.clearcoat>0,Z=S.dispersion>0,K=S.iridescence>0,$=S.sheen>0,xt=S.transmission>0,ot=E&&!!S.anisotropyMap,ut=B&&!!S.clearcoatMap,Wt=B&&!!S.clearcoatNormalMap,Q=B&&!!S.clearcoatRoughnessMap,ft=K&&!!S.iridescenceMap,wt=K&&!!S.iridescenceThicknessMap,Rt=$&&!!S.sheenColorMap,dt=$&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,Nt=!!S.specularColorMap,re=!!S.specularIntensityMap,L=xt&&!!S.transmissionMap,rt=xt&&!!S.thicknessMap,W=!!S.gradientMap,j=!!S.alphaMap,ht=S.alphaTest>0,lt=!!S.alphaHash,Lt=!!S.extensions;let ge=Mi;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ge=r.toneMapping);const Ie={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Yt,fragmentShader:q,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Wr,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:Gt,envMap:xe,envMapMode:xe&&Y.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:_n,bumpMap:kt,normalMap:Ht,displacementMap:d&&Et,emissiveMap:oe,normalMapObjectSpace:Ht&&S.normalMapType===Bp,normalMapTangentSpace:Ht&&S.normalMapType===hf,metalnessMap:yt,roughnessMap:R,anisotropy:E,anisotropyMap:ot,clearcoat:B,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:K,iridescenceMap:ft,iridescenceThicknessMap:wt,sheen:$,sheenColorMap:Rt,sheenRoughnessMap:dt,specularMap:Vt,specularColorMap:Nt,specularIntensityMap:re,transmission:xt,transmissionMap:L,thicknessMap:rt,gradientMap:W,opaque:S.transparent===!1&&S.blending===Ar&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:lt,combine:S.combine,mapUv:fe&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:_n&&_(S.lightMap.channel),bumpMapUv:kt&&_(S.bumpMap.channel),normalMapUv:Ht&&_(S.normalMap.channel),displacementMapUv:Et&&_(S.displacementMap.channel),emissiveMapUv:oe&&_(S.emissiveMap.channel),metalnessMapUv:yt&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:ut&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(S.sheenRoughnessMap.channel),specularMapUv:Vt&&_(S.specularMap.channel),specularColorMapUv:Nt&&_(S.specularColorMap.channel),specularIntensityMapUv:re&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:rt&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ht||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(fe||j),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&Xt.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(y,S),M(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let P;if(y){const O=Un[y];P=Cm.clone(O.uniforms)}else P=S.uniforms;return P}function T(S,y){let P;for(let O=0,F=h.length;O<F;O++){const V=h[O];if(V.cacheKey===y){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Hv(r,y,S,s),h.push(P)),P}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:C}}function qv(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Yv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Dh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Yv),n.length>1&&n.sort(d||Dh),i.length>1&&i.sort(d||Dh)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function $v(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Lh,r.set(n,[o])):i>=s.length?(o=new Lh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Zv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new St};break;case"SpotLight":e={position:new D,direction:new D,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function jv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Kv=0;function Jv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Qv(r){const t=new Zv,e=jv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Bt,o=new Bt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,v=0,T=0,A=0,b=0;c.sort(Jv);for(let S=0,y=c.length;S<y;S++){const P=c[S],O=P.color,F=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],F);b++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(O).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const Y=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,v++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(O).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=b,n.version=Kv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ih(r){const t=new Qv(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tx(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Ih(r),t.set(i,[a])):s>=o.length?(a=new Ih(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ex extends er{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nx extends er{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function sx(r,t,e){let n=new sc;const i=new Tt,s=new Tt,o=new te,a=new ex({depthPacking:Op}),l=new nx,c={},h=e.maxTextureSize,u={[wi]:qe,[qe]:wi,[cn]:cn},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:ix,fragmentShader:rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let p=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(xi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==$n&&this.type===$n,V=p===$n&&this.type!==$n;for(let X=0,G=A.length;X<G;X++){const Y=A[X],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const nt=H.getFrameExtents();if(i.multiply(nt),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,H.mapSize.y=s.y)),H.map===null||F===!0||V===!0){const pt=this.type!==$n?{minFilter:dn,magFilter:dn}:{};H.map!==null&&H.map.dispose(),H.map=new Ki(i.x,i.y,pt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const at=H.getViewportCount();for(let pt=0;pt<at;pt++){const Ct=H.getViewport(pt);o.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),O.viewport(o),H.updateMatrices(Y,pt),n=H.getFrustum(),v(b,C,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===$n&&x(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,y,P)};function x(A,b){const C=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ki(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,C,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,C,f,_,null)}function M(A,b,C,S){let y=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=y.uuid,F=b.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let X=V[F];X===void 0&&(X=y.clone(),V[F]=X,b.addEventListener("dispose",T)),y=X}if(y.visible=b.visible,y.wireframe=b.wireframe,S===$n?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=r.properties.get(y);O.light=C}return y}function v(A,b,C,S,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===$n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=t.update(A),V=A.material;if(Array.isArray(V)){const X=F.groups;for(let G=0,Y=X.length;G<Y;G++){const H=X[G],nt=V[H.materialIndex];if(nt&&nt.visible){const at=M(A,nt,S,y);A.onBeforeShadow(r,A,b,C,F,at,H),r.renderBufferDirect(C,null,F,at,A,H),A.onAfterShadow(r,A,b,C,F,at,H)}}}else if(V.visible){const X=M(A,V,S,y);A.onBeforeShadow(r,A,b,C,F,X,null),r.renderBufferDirect(C,null,F,X,A,null),A.onAfterShadow(r,A,b,C,F,X,null)}}const O=A.children;for(let F=0,V=O.length;F<V;F++)v(O[F],b,C,S,y)}function T(A){A.target.removeEventListener("dispose",T);for(const C in c){const S=c[C],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const ox={[$a]:Za,[ja]:Qa,[Ka]:tl,[Or]:Ja,[Za]:$a,[Qa]:ja,[tl]:Ka,[Ja]:Or};function ax(r,t){function e(){let L=!1;const rt=new te;let W=null;const j=new te(0,0,0,0);return{setMask:function(ht){W!==ht&&!L&&(r.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){L=ht},setClear:function(ht,lt,Lt,ge,Ie){Ie===!0&&(ht*=ge,lt*=ge,Lt*=ge),rt.set(ht,lt,Lt,ge),j.equals(rt)===!1&&(r.clearColor(ht,lt,Lt,ge),j.copy(rt))},reset:function(){L=!1,W=null,j.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,W=null,j=null,ht=null;return{setReversed:function(lt){if(rt!==lt){const Lt=t.get("EXT_clip_control");rt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ge=ht;ht=null,this.setClear(ge)}rt=lt},getReversed:function(){return rt},setTest:function(lt){lt?st(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(lt){W!==lt&&!L&&(r.depthMask(lt),W=lt)},setFunc:function(lt){if(rt&&(lt=ox[lt]),j!==lt){switch(lt){case $a:r.depthFunc(r.NEVER);break;case Za:r.depthFunc(r.ALWAYS);break;case ja:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case Ka:r.depthFunc(r.EQUAL);break;case Ja:r.depthFunc(r.GEQUAL);break;case Qa:r.depthFunc(r.GREATER);break;case tl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ht!==lt&&(rt&&(lt=1-lt),r.clearDepth(lt),ht=lt)},reset:function(){L=!1,W=null,j=null,ht=null,rt=!1}}}function i(){let L=!1,rt=null,W=null,j=null,ht=null,lt=null,Lt=null,ge=null,Ie=null;return{setTest:function(jt){L||(jt?st(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(jt){rt!==jt&&!L&&(r.stencilMask(jt),rt=jt)},setFunc:function(jt,En,Hn){(W!==jt||j!==En||ht!==Hn)&&(r.stencilFunc(jt,En,Hn),W=jt,j=En,ht=Hn)},setOp:function(jt,En,Hn){(lt!==jt||Lt!==En||ge!==Hn)&&(r.stencilOp(jt,En,Hn),lt=jt,Lt=En,ge=Hn)},setLocked:function(jt){L=jt},setClear:function(jt){Ie!==jt&&(r.clearStencil(jt),Ie=jt)},reset:function(){L=!1,rt=null,W=null,j=null,ht=null,lt=null,Lt=null,ge=null,Ie=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,T=null,A=null,b=new St(0,0,0),C=0,S=!1,y=null,P=null,O=null,F=null,V=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=Y>=2);let nt=null,at={};const pt=r.getParameter(r.SCISSOR_BOX),Ct=r.getParameter(r.VIEWPORT),Yt=new te().fromArray(pt),q=new te().fromArray(Ct);function J(L,rt,W,j){const ht=new Uint8Array(4),lt=r.createTexture();r.bindTexture(L,lt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<W;Lt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(rt+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return lt}const vt={};vt[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(Or),kt(!1),Ht(Oc),st(r.CULL_FACE),N(xi);function st(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function bt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Dt(L,rt){return u[L]!==rt?(r.bindFramebuffer(L,rt),u[L]=rt,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=rt),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ot(L,rt){let W=f,j=!1;if(L){W=d.get(rt),W===void 0&&(W=[],d.set(rt,W));const ht=L.textures;if(W.length!==ht.length||W[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,Lt=ht.length;lt<Lt;lt++)W[lt]=r.COLOR_ATTACHMENT0+lt;W.length=ht.length,j=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,j=!0);j&&r.drawBuffers(W)}function fe(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Gt={[zi]:r.FUNC_ADD,[hp]:r.FUNC_SUBTRACT,[up]:r.FUNC_REVERSE_SUBTRACT};Gt[fp]=r.MIN,Gt[dp]=r.MAX;const xe={[pp]:r.ZERO,[mp]:r.ONE,[_p]:r.SRC_COLOR,[qa]:r.SRC_ALPHA,[yp]:r.SRC_ALPHA_SATURATE,[Mp]:r.DST_COLOR,[vp]:r.DST_ALPHA,[gp]:r.ONE_MINUS_SRC_COLOR,[Ya]:r.ONE_MINUS_SRC_ALPHA,[Sp]:r.ONE_MINUS_DST_COLOR,[xp]:r.ONE_MINUS_DST_ALPHA,[Ep]:r.CONSTANT_COLOR,[Tp]:r.ONE_MINUS_CONSTANT_COLOR,[wp]:r.CONSTANT_ALPHA,[bp]:r.ONE_MINUS_CONSTANT_ALPHA};function N(L,rt,W,j,ht,lt,Lt,ge,Ie,jt){if(L===xi){_===!0&&(bt(r.BLEND),_=!1);return}if(_===!1&&(st(r.BLEND),_=!0),L!==cp){if(L!==m||jt!==S){if((p!==zi||v!==zi)&&(r.blendEquation(r.FUNC_ADD),p=zi,v=zi),jt)switch(L){case Ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cr:r.blendFunc(r.ONE,r.ONE);break;case Bc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Bc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,M=null,T=null,A=null,b.set(0,0,0),C=0,m=L,S=jt}return}ht=ht||rt,lt=lt||W,Lt=Lt||j,(rt!==p||ht!==v)&&(r.blendEquationSeparate(Gt[rt],Gt[ht]),p=rt,v=ht),(W!==x||j!==M||lt!==T||Lt!==A)&&(r.blendFuncSeparate(xe[W],xe[j],xe[lt],xe[Lt]),x=W,M=j,T=lt,A=Lt),(ge.equals(b)===!1||Ie!==C)&&(r.blendColor(ge.r,ge.g,ge.b,Ie),b.copy(ge),C=Ie),m=L,S=!1}function _n(L,rt){L.side===cn?bt(r.CULL_FACE):st(r.CULL_FACE);let W=L.side===qe;rt&&(W=!W),kt(W),L.blending===Ar&&L.transparent===!1?N(xi):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){y!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),y=L)}function Ht(L){L!==ap?(st(r.CULL_FACE),L!==P&&(L===Oc?r.cullFace(r.BACK):L===lp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),P=L}function Et(L){L!==O&&(G&&r.lineWidth(L),O=L)}function oe(L,rt,W){L?(st(r.POLYGON_OFFSET_FILL),(F!==rt||V!==W)&&(r.polygonOffset(rt,W),F=rt,V=W)):bt(r.POLYGON_OFFSET_FILL)}function yt(L){L?st(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function R(L){L===void 0&&(L=r.TEXTURE0+X-1),nt!==L&&(r.activeTexture(L),nt=L)}function E(L,rt,W){W===void 0&&(nt===null?W=r.TEXTURE0+X-1:W=nt);let j=at[W];j===void 0&&(j={type:void 0,texture:void 0},at[W]=j),(j.type!==L||j.texture!==rt)&&(nt!==W&&(r.activeTexture(W),nt=W),r.bindTexture(L,rt||vt[L]),j.type=L,j.texture=rt)}function B(){const L=at[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){Yt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Yt.copy(L))}function dt(L){q.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Vt(L,rt){let W=c.get(rt);W===void 0&&(W=new WeakMap,c.set(rt,W));let j=W.get(L);j===void 0&&(j=r.getUniformBlockIndex(rt,L.name),W.set(L,j))}function Nt(L,rt){const j=c.get(rt).get(L);l.get(rt)!==j&&(r.uniformBlockBinding(rt,j,L.__bindingPointIndex),l.set(rt,j))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,at={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,T=null,A=null,b=new St(0,0,0),C=0,S=!1,y=null,P=null,O=null,F=null,V=null,Yt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:bt,bindFramebuffer:Dt,drawBuffers:Ot,useProgram:fe,setBlending:N,setMaterial:_n,setFlipSided:kt,setCullFace:Ht,setLineWidth:Et,setPolygonOffset:oe,setScissorTest:yt,activeTexture:R,bindTexture:E,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:ft,texImage3D:wt,updateUBOMapping:Vt,uniformBlockBinding:Nt,texStorage2D:Wt,texStorage3D:Q,texSubImage2D:$,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Rt,viewport:dt,reset:re}}function Uh(r,t,e,n){const i=lx(n);switch(e){case rf:return r*t;case of:return r*t;case af:return r*t*2;case Ql:return r*t/i.components*i.byteLength;case tc:return r*t/i.components*i.byteLength;case lf:return r*t*2/i.components*i.byteLength;case ec:return r*t*2/i.components*i.byteLength;case sf:return r*t*3/i.components*i.byteLength;case Dn:return r*t*4/i.components*i.byteLength;case nc:return r*t*4/i.components*i.byteLength;case lo:case co:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rl:case ol:return Math.max(r,16)*Math.max(t,8)/4;case il:case sl:return Math.max(r,8)*Math.max(t,8)/2;case al:case ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case fl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case pl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ml:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case _l:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fo:case Tl:case wl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case cf:case bl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Al:case Cl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lx(r){switch(r){case ei:case tf:return{byteLength:1,components:1};case ws:case ef:case Cs:return{byteLength:2,components:1};case Kl:case Jl:return{byteLength:2,components:4};case ji:case jl:case Bn:return{byteLength:4,components:1};case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function cx(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return f?new OffscreenCanvas(R,E):Ao("canvas")}function _(R,E,B){let Z=1;const K=yt(R);if((K.width>B||K.height>B)&&(Z=B/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Z*K.width),xt=Math.floor(Z*K.height);u===void 0&&(u=g($,xt));const ot=E?g($,xt):u;return ot.width=$,ot.height=xt,ot.getContext("2d").drawImage(R,0,0,$,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+xt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,E,B,Z,K=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8)),E===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),E===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8)),E===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),E===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),E===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),E===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),E===r.RGBA){const xt=K?Fo:Xt.getTransfer(Z);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=xt===Qt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(R,E){let B;return R?E===null||E===ji||E===kr?B=r.DEPTH24_STENCIL8:E===Bn?B=r.DEPTH32F_STENCIL8:E===ws&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===kr?B=r.DEPTH_COMPONENT24:E===Bn?B=r.DEPTH_COMPONENT32F:E===ws&&(B=r.DEPTH_COMPONENT16),B}function T(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),C(E),E.isVideoTexture&&h.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),y(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const B=R.source,Z=d.get(B);if(Z){const K=Z[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(R),Object.keys(Z).length===0&&d.delete(B)}n.remove(R)}function S(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const B=R.source,Z=d.get(B);delete Z[E.__cacheKey],o.memory.textures--}function y(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let K=0;K<E.__webglFramebuffer[Z].length;K++)r.deleteFramebuffer(E.__webglFramebuffer[Z][K]);else r.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[Z]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=R.textures;for(let Z=0,K=B.length;Z<K;Z++){const $=n.get(B[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(R)}let P=0;function O(){P=0}function F(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function X(R,E){const B=n.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,E);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+E)}function G(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+E)}function Y(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,E);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+E)}function H(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){J(B,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+E)}const nt={[wo]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[nl]:r.MIRRORED_REPEAT},at={[dn]:r.NEAREST,[Np]:r.NEAREST_MIPMAP_NEAREST,[Ls]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Zo]:r.LINEAR_MIPMAP_NEAREST,[Gi]:r.LINEAR_MIPMAP_LINEAR},pt={[zp]:r.NEVER,[Xp]:r.ALWAYS,[kp]:r.LESS,[uf]:r.LEQUAL,[Hp]:r.EQUAL,[Wp]:r.GEQUAL,[Vp]:r.GREATER,[Gp]:r.NOTEQUAL};function Ct(R,E){if(E.type===Bn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Zo||E.magFilter===Ls||E.magFilter===Gi||E.minFilter===On||E.minFilter===Zo||E.minFilter===Ls||E.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,nt[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,nt[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,nt[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,at[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,at[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===dn||E.minFilter!==Ls&&E.minFilter!==Gi||E.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Yt(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const Z=E.source;let K=d.get(Z);K===void 0&&(K={},d.set(Z,K));const $=V(E);if($!==R.__cacheKey){K[$]===void 0&&(K[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[$].usedTimes++;const xt=K[R.__cacheKey];xt!==void 0&&(K[R.__cacheKey].usedTimes--,xt.usedTimes===0&&S(E)),R.__cacheKey=$,R.__webglTexture=K[$].texture}return B}function q(R,E,B){let Z=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=r.TEXTURE_3D);const K=Yt(R,E),$=E.source;e.bindTexture(Z,R.__webglTexture,r.TEXTURE0+B);const xt=n.get($);if($.version!==xt.__version||K===!0){e.activeTexture(r.TEXTURE0+B);const ot=Xt.getPrimaries(Xt.workingColorSpace),ut=E.colorSpace===fi?null:Xt.getPrimaries(E.colorSpace),Wt=E.colorSpace===fi||ot===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Q=_(E.image,!1,i.maxTextureSize);Q=oe(E,Q);const ft=s.convert(E.format,E.colorSpace),wt=s.convert(E.type);let Rt=M(E.internalFormat,ft,wt,E.colorSpace,E.isVideoTexture);Ct(Z,E);let dt;const Vt=E.mipmaps,Nt=E.isVideoTexture!==!0,re=xt.__version===void 0||K===!0,L=$.dataReady,rt=T(E,Q);if(E.isDepthTexture)Rt=v(E.format===Hr,E.type),re&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,wt,null));else if(E.isDataTexture)if(Vt.length>0){Nt&&re&&e.texStorage2D(r.TEXTURE_2D,rt,Rt,Vt[0].width,Vt[0].height);for(let W=0,j=Vt.length;W<j;W++)dt=Vt[W],Nt?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,dt.width,dt.height,ft,wt,dt.data):e.texImage2D(r.TEXTURE_2D,W,Rt,dt.width,dt.height,0,ft,wt,dt.data);E.generateMipmaps=!1}else Nt?(re&&e.texStorage2D(r.TEXTURE_2D,rt,Rt,Q.width,Q.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,wt,Q.data)):e.texImage2D(r.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,wt,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Nt&&re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,Rt,Vt[0].width,Vt[0].height,Q.depth);for(let W=0,j=Vt.length;W<j;W++)if(dt=Vt[W],E.format!==Dn)if(ft!==null)if(Nt){if(L)if(E.layerUpdates.size>0){const ht=Uh(dt.width,dt.height,E.format,E.type);for(const lt of E.layerUpdates){const Lt=dt.data.subarray(lt*ht/dt.data.BYTES_PER_ELEMENT,(lt+1)*ht/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,lt,dt.width,dt.height,1,ft,Lt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,dt.width,dt.height,Q.depth,ft,dt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Rt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,dt.width,dt.height,Q.depth,ft,wt,dt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,Rt,dt.width,dt.height,Q.depth,0,ft,wt,dt.data)}else{Nt&&re&&e.texStorage2D(r.TEXTURE_2D,rt,Rt,Vt[0].width,Vt[0].height);for(let W=0,j=Vt.length;W<j;W++)dt=Vt[W],E.format!==Dn?ft!==null?Nt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(r.TEXTURE_2D,W,Rt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,dt.width,dt.height,ft,wt,dt.data):e.texImage2D(r.TEXTURE_2D,W,Rt,dt.width,dt.height,0,ft,wt,dt.data)}else if(E.isDataArrayTexture)if(Nt){if(re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,Rt,Q.width,Q.height,Q.depth),L)if(E.layerUpdates.size>0){const W=Uh(Q.width,Q.height,E.format,E.type);for(const j of E.layerUpdates){const ht=Q.data.subarray(j*W/Q.data.BYTES_PER_ELEMENT,(j+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,ft,wt,ht)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,wt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,ft,wt,Q.data);else if(E.isData3DTexture)Nt?(re&&e.texStorage3D(r.TEXTURE_3D,rt,Rt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,wt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,ft,wt,Q.data);else if(E.isFramebufferTexture){if(re)if(Nt)e.texStorage2D(r.TEXTURE_2D,rt,Rt,Q.width,Q.height);else{let W=Q.width,j=Q.height;for(let ht=0;ht<rt;ht++)e.texImage2D(r.TEXTURE_2D,ht,Rt,W,j,0,ft,wt,null),W>>=1,j>>=1}}else if(Vt.length>0){if(Nt&&re){const W=yt(Vt[0]);e.texStorage2D(r.TEXTURE_2D,rt,Rt,W.width,W.height)}for(let W=0,j=Vt.length;W<j;W++)dt=Vt[W],Nt?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,ft,wt,dt):e.texImage2D(r.TEXTURE_2D,W,Rt,ft,wt,dt);E.generateMipmaps=!1}else if(Nt){if(re){const W=yt(Q);e.texStorage2D(r.TEXTURE_2D,rt,Rt,W.width,W.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,wt,Q)}else e.texImage2D(r.TEXTURE_2D,0,Rt,ft,wt,Q);m(E)&&p(Z),xt.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function J(R,E,B){if(E.image.length!==6)return;const Z=Yt(R,E),K=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const $=n.get(K);if(K.version!==$.__version||Z===!0){e.activeTexture(r.TEXTURE0+B);const xt=Xt.getPrimaries(Xt.workingColorSpace),ot=E.colorSpace===fi?null:Xt.getPrimaries(E.colorSpace),ut=E.colorSpace===fi||xt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,Q=E.image[0]&&E.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!Wt&&!Q?ft[j]=_(E.image[j],!0,i.maxCubemapSize):ft[j]=Q?E.image[j].image:E.image[j],ft[j]=oe(E,ft[j]);const wt=ft[0],Rt=s.convert(E.format,E.colorSpace),dt=s.convert(E.type),Vt=M(E.internalFormat,Rt,dt,E.colorSpace),Nt=E.isVideoTexture!==!0,re=$.__version===void 0||Z===!0,L=K.dataReady;let rt=T(E,wt);Ct(r.TEXTURE_CUBE_MAP,E);let W;if(Wt){Nt&&re&&e.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Vt,wt.width,wt.height);for(let j=0;j<6;j++){W=ft[j].mipmaps;for(let ht=0;ht<W.length;ht++){const lt=W[ht];E.format!==Dn?Rt!==null?Nt?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Vt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,Rt,dt,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Vt,lt.width,lt.height,0,Rt,dt,lt.data)}}}else{if(W=E.mipmaps,Nt&&re){W.length>0&&rt++;const j=yt(ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Vt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,Rt,dt,ft[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,ft[j].width,ft[j].height,0,Rt,dt,ft[j].data);for(let ht=0;ht<W.length;ht++){const Lt=W[ht].image[j].image;Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Lt.width,Lt.height,Rt,dt,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Vt,Lt.width,Lt.height,0,Rt,dt,Lt.data)}}else{Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,dt,ft[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,Rt,dt,ft[j]);for(let ht=0;ht<W.length;ht++){const lt=W[ht];Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Rt,dt,lt.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Vt,Rt,dt,lt.image[j])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),$.__version=K.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function vt(R,E,B,Z,K,$){const xt=s.convert(B.format,B.colorSpace),ot=s.convert(B.type),ut=M(B.internalFormat,xt,ot,B.colorSpace),Wt=n.get(E),Q=n.get(B);if(Q.__renderTarget=E,!Wt.__hasExternalTextures){const ft=Math.max(1,E.width>>$),wt=Math.max(1,E.height>>$);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,$,ut,ft,wt,E.depth,0,xt,ot,null):e.texImage2D(K,$,ut,ft,wt,0,xt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Ht(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,K,Q.__webglTexture,0,kt(E)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,K,Q.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(R,E,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const Z=E.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,$=v(E.stencilBuffer,K),xt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=kt(E);Ht(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,$,E.width,E.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,$,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,$,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,R)}else{const Z=E.textures;for(let K=0;K<Z.length;K++){const $=Z[K],xt=s.convert($.format,$.colorSpace),ot=s.convert($.type),ut=M($.internalFormat,xt,ot,$.colorSpace),Wt=kt(E);B&&Ht(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,ut,E.width,E.height):Ht(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,ut,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ut,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const K=Z.__webglTexture,$=kt(E);if(E.depthTexture.format===Rr)Ht(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(E.depthTexture.format===Hr)Ht(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Dt(R){const E=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=Z}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");bt(E.__webglFramebuffer,R)}else if(B){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=r.createRenderbuffer(),st(E.__webglDepthbuffer[Z],R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),st(E.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,K)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(R,E,B){const Z=n.get(R);E!==void 0&&vt(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Dt(R)}function fe(R){const E=R.texture,B=n.get(R),Z=n.get(E);R.addEventListener("dispose",b);const K=R.textures,$=R.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=E.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let ut=0;ut<E.mipmaps.length;ut++)B.__webglFramebuffer[ot][ut]=r.createFramebuffer()}else B.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<E.mipmaps.length;ot++)B.__webglFramebuffer[ot]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(xt)for(let ot=0,ut=K.length;ot<ut;ot++){const Wt=n.get(K[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Ht(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){const ut=K[ot];B.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const Wt=s.convert(ut.format,ut.colorSpace),Q=s.convert(ut.type),ft=M(ut.internalFormat,Wt,Q,ut.colorSpace,R.isXRRenderTarget===!0),wt=kt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,ft,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),st(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,E);for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)vt(B.__webglFramebuffer[ot][ut],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else vt(B.__webglFramebuffer[ot],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ut=K.length;ot<ut;ot++){const Wt=K[ot],Q=n.get(Wt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Ct(r.TEXTURE_2D,Wt),vt(B.__webglFramebuffer,R,Wt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),m(Wt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Ct(ot,E),E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)vt(B.__webglFramebuffer[ut],R,E,r.COLOR_ATTACHMENT0,ot,ut);else vt(B.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ot,0);m(E)&&p(ot),e.unbindTexture()}R.depthBuffer&&Dt(R)}function Gt(R){const E=R.textures;for(let B=0,Z=E.length;B<Z;B++){const K=E[B];if(m(K)){const $=x(R),xt=n.get(K).__webglTexture;e.bindTexture($,xt),p($),e.unbindTexture()}}}const xe=[],N=[];function _n(R){if(R.samples>0){if(Ht(R)===!1){const E=R.textures,B=R.width,Z=R.height;let K=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(R),ot=E.length>1;if(ot)for(let ut=0;ut<E.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<E.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Wt=n.get(E[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,B,Z,0,0,B,Z,K,r.NEAREST),l===!0&&(xe.length=0,N.length=0,xe.push(r.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(xe.push($),N.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<E.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Wt=n.get(E[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function kt(R){return Math.min(i.maxSamples,R.samples)}function Ht(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function oe(R,E){const B=R.colorSpace,Z=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Wr&&B!==fi&&(Xt.getTransfer(B)===Qt?(Z!==Dn||K!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ht}function hx(r,t){function e(n,i=fi){let s;const o=Xt.getTransfer(i);if(n===ei)return r.UNSIGNED_BYTE;if(n===Kl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===tf)return r.BYTE;if(n===ef)return r.SHORT;if(n===ws)return r.UNSIGNED_SHORT;if(n===jl)return r.INT;if(n===ji)return r.UNSIGNED_INT;if(n===Bn)return r.FLOAT;if(n===Cs)return r.HALF_FLOAT;if(n===rf)return r.ALPHA;if(n===sf)return r.RGB;if(n===Dn)return r.RGBA;if(n===of)return r.LUMINANCE;if(n===af)return r.LUMINANCE_ALPHA;if(n===Rr)return r.DEPTH_COMPONENT;if(n===Hr)return r.DEPTH_STENCIL;if(n===Ql)return r.RED;if(n===tc)return r.RED_INTEGER;if(n===lf)return r.RG;if(n===ec)return r.RG_INTEGER;if(n===nc)return r.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(o===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===rl||n===sl||n===ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ll||n===cl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===al||n===ll)return o===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===_l||n===gl||n===vl||n===xl||n===Ml||n===Sl||n===yl||n===El)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===Tl||n===wl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===fo)return o===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cf||n===bl||n===Al||n===Cl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===fo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class ux extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class he extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`;class mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new He,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:dx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends Xr{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new mx,m=e.getContextAttributes();let p=null,x=null;const M=[],v=[],T=new Tt;let A=null;const b=new an;b.viewport=new te;const C=new an;C.viewport=new te;const S=[b,C],y=new ux;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=M[q];return J===void 0&&(J=new ya,M[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=M[q];return J===void 0&&(J=new ya,M[q]=J),J.getGripSpace()},this.getHand=function(q){let J=M[q];return J===void 0&&(J=new ya,M[q]=J),J.getHandSpace()};function F(q){const J=v.indexOf(q.inputSource);if(J===-1)return;const vt=M[J];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||o),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let q=0;q<M.length;q++){const J=v[q];J!==null&&(v[q]=null,M[q].disconnect(J))}P=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,x=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ki(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,vt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Hr:Rr,vt=m.stencil?kr:ji);const bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ki(d.textureWidth,d.textureHeight,{format:Dn,type:ei,depthTexture:new Tf(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let J=0;J<q.removed.length;J++){const vt=q.removed[J],st=v.indexOf(vt);st>=0&&(v[st]=null,M[st].disconnect(vt))}for(let J=0;J<q.added.length;J++){const vt=q.added[J];let st=v.indexOf(vt);if(st===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=v.length){v.push(vt),st=Dt;break}else if(v[Dt]===null){v[Dt]=vt,st=Dt;break}if(st===-1)break}const bt=M[st];bt&&bt.connect(vt)}}const G=new D,Y=new D;function H(q,J,vt){G.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(vt.matrixWorld);const st=G.distanceTo(Y),bt=J.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),fe=bt[14]/(bt[10]+1),Gt=(bt[9]+1)/bt[5],xe=(bt[9]-1)/bt[5],N=(bt[8]-1)/bt[0],_n=(Dt[8]+1)/Dt[0],kt=Ot*N,Ht=Ot*_n,Et=st/(-N+_n),oe=Et*-N;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(oe),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const yt=Ot+Et,R=fe+Et,E=kt-oe,B=Ht+(st-oe),Z=Gt*fe/R*yt,K=xe*fe/R*yt;q.projectionMatrix.makePerspective(E,B,Z,K,yt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let J=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),y.near=C.near=b.near=J,y.far=C.far=b.far=vt,(P!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,O=y.far),b.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,y.layers.mask=b.layers.mask|C.layers.mask;const st=q.parent,bt=y.cameras;nt(y,st);for(let Dt=0;Dt<bt.length;Dt++)nt(bt[Dt],st);bt.length===2?H(y,b,C):y.projectionMatrix.copy(b.projectionMatrix),at(q,y,st)};function at(q,J,vt){vt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let pt=null;function Ct(q,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let st=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let Dt=0;Dt<vt.length;Dt++){const Ot=vt[Dt];let fe=null;if(f!==null)fe=f.getViewport(Ot);else{const xe=u.getViewSubImage(d,Ot);fe=xe.viewport,Dt===0&&(t.setRenderTargetTextures(x,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(x))}let Gt=S[Dt];Gt===void 0&&(Gt=new an,Gt.layers.enable(Dt),Gt.viewport=new te,S[Dt]=Gt),Gt.matrix.fromArray(Ot.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ot.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(fe.x,fe.y,fe.width,fe.height),Dt===0&&(y.matrix.copy(Gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(Gt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Dt=u.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let vt=0;vt<M.length;vt++){const st=v[vt],bt=M[vt];st!==null&&bt!==void 0&&bt.update(st,J,c||o)}pt&&pt(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Yt=new yf;Yt.setAnimationLoop(Ct),this.setAnimationLoop=function(q){pt=q},this.dispose=function(){}}}const Ni=new tn,gx=new Bt;function vx(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Ni.copy(v),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(Ni)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xx(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const A=t.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function h(x){const M=u();x.__bindingPointIndex=M;const v=r.createBuffer(),T=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=i[x.id],v=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,b=v.length;A<b;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,y=C.length;S<y;S++){const P=C[S];if(f(P,A,S,T)===!0){const O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let X=0;X<F.length;X++){const G=F[X],Y=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,O+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,M,v,T){const A=x.value,b=M+"_"+v;if(T[b]===void 0)return typeof A=="number"||typeof A=="boolean"?T[b]=A:T[b]=A.clone(),!0;{const C=T[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(x){const M=x.uniforms;let v=0;const T=16;for(let b=0,C=M.length;b<C;b++){const S=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,P=S.length;y<P;y++){const O=S[y],F=Array.isArray(O.value)?O.value:[O.value];for(let V=0,X=F.length;V<X;V++){const G=F[V],Y=_(G),H=v%T,nt=H%Y.boundary,at=H+nt;v+=nt,at!==0&&T-at<Y.storage&&(v+=T-at),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Y.storage}}}const A=v%T;return A>0&&(v+=T-A),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Mx{constructor(t={}){const{canvas:e=lm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Mi,this.toneMappingExposure=1;const v=this;let T=!1,A=0,b=0,C=null,S=-1,y=null;const P=new te,O=new te;let F=null;const V=new St(0);let X=0,G=e.width,Y=e.height,H=1,nt=null,at=null;const pt=new te(0,0,G,Y),Ct=new te(0,0,G,Y);let Yt=!1;const q=new sc;let J=!1,vt=!1;const st=new Bt,bt=new Bt,Dt=new D,Ot=new te,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function xe(){return C===null?H:1}let N=n;function _n(w,I){return e.getContext(w,I)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),N===null){const I="webgl2";if(N=_n(I,w),N===null)throw _n(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Ht,Et,oe,yt,R,E,B,Z,K,$,xt,ot,ut,Wt,Q,ft,wt,Rt,dt,Vt,Nt,re,L;function rt(){kt=new w0(N),kt.init(),Nt=new hx(N,kt),Ht=new x0(N,kt,t,Nt),Et=new ax(N,kt),Ht.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),oe=new C0(N),yt=new qv,R=new cx(N,kt,Et,yt,Ht,Nt,oe),E=new S0(v),B=new T0(v),Z=new Nm(N),re=new g0(N,Z),K=new b0(N,Z,oe,re),$=new P0(N,K,Z,oe),Rt=new R0(N,Ht,R),Q=new M0(yt),xt=new Xv(v,E,B,kt,Ht,re,Q),ot=new vx(v,yt),ut=new $v,Wt=new tx(kt),wt=new _0(v,E,B,Et,$,f,l),ft=new sx(v,$,Ht),L=new xx(N,oe,Ht,Et),dt=new v0(N,kt,oe),Vt=new A0(N,kt,oe),oe.programs=xt.programs,v.capabilities=Ht,v.extensions=kt,v.properties=yt,v.renderLists=ut,v.shadowMap=ft,v.state=Et,v.info=oe}rt();const W=new _x(v,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(G,Y,!1))},this.getSize=function(w){return w.set(G,Y)},this.setSize=function(w,I,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Y=I,e.width=Math.floor(w*H),e.height=Math.floor(I*H),z===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(G*H,Y*H).floor()},this.setDrawingBufferSize=function(w,I,z){G=w,Y=I,H=z,e.width=Math.floor(w*z),e.height=Math.floor(I*z),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(pt)},this.setViewport=function(w,I,z,k){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,I,z,k),Et.viewport(P.copy(pt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Ct)},this.setScissor=function(w,I,z,k){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,I,z,k),Et.scissor(O.copy(Ct).multiplyScalar(H).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){Et.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(w=!0,I=!0,z=!0){let k=0;if(w){let U=!1;if(C!==null){const tt=C.texture.format;U=tt===nc||tt===ec||tt===tc}if(U){const tt=C.texture.type,ct=tt===ei||tt===ji||tt===ws||tt===kr||tt===Kl||tt===Jl,mt=wt.getClearColor(),_t=wt.getClearAlpha(),Pt=mt.r,It=mt.g,gt=mt.b;ct?(g[0]=Pt,g[1]=It,g[2]=gt,g[3]=_t,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Pt,_[1]=It,_[2]=gt,_[3]=_t,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}I&&(k|=N.DEPTH_BUFFER_BIT),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),Wt.dispose(),yt.dispose(),E.dispose(),B.dispose(),$.dispose(),re.dispose(),L.dispose(),xt.dispose(),W.dispose(),W.removeEventListener("sessionstart",uc),W.removeEventListener("sessionend",fc),Ai.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=oe.autoReset,I=ft.enabled,z=ft.autoUpdate,k=ft.needsUpdate,U=ft.type;rt(),oe.autoReset=w,ft.enabled=I,ft.autoUpdate=z,ft.needsUpdate=k,ft.type=U}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Lt(w){const I=w.target;I.removeEventListener("dispose",Lt),ge(I)}function ge(w){Ie(w),yt.remove(w)}function Ie(w){const I=yt.get(w).programs;I!==void 0&&(I.forEach(function(z){xt.releaseProgram(z)}),w.isShaderMaterial&&xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,z,k,U,tt){I===null&&(I=fe);const ct=U.isMesh&&U.matrixWorld.determinant()<0,mt=Of(w,I,z,k,U);Et.setMaterial(k,ct);let _t=z.index,Pt=1;if(k.wireframe===!0){if(_t=K.getWireframeAttribute(z),_t===void 0)return;Pt=2}const It=z.drawRange,gt=z.attributes.position;let qt=It.start*Pt,se=(It.start+It.count)*Pt;tt!==null&&(qt=Math.max(qt,tt.start*Pt),se=Math.min(se,(tt.start+tt.count)*Pt)),_t!==null?(qt=Math.max(qt,0),se=Math.min(se,_t.count)):gt!=null&&(qt=Math.max(qt,0),se=Math.min(se,gt.count));const ae=se-qt;if(ae<0||ae===1/0)return;re.setup(U,k,mt,z,_t);let Ye,$t=dt;if(_t!==null&&(Ye=Z.get(_t),$t=Vt,$t.setIndex(Ye)),U.isMesh)k.wireframe===!0?(Et.setLineWidth(k.wireframeLinewidth*xe()),$t.setMode(N.LINES)):$t.setMode(N.TRIANGLES);else if(U.isLine){let Mt=k.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*xe()),U.isLineSegments?$t.setMode(N.LINES):U.isLineLoop?$t.setMode(N.LINE_LOOP):$t.setMode(N.LINE_STRIP)}else U.isPoints?$t.setMode(N.POINTS):U.isSprite&&$t.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))$t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Mt=U._multiDrawStarts,Vn=U._multiDrawCounts,Zt=U._multiDrawCount,Tn=_t?Z.get(_t).bytesPerElement:1,nr=yt.get(k).currentProgram.getUniforms();for(let nn=0;nn<Zt;nn++)nr.setValue(N,"_gl_DrawID",nn),$t.render(Mt[nn]/Tn,Vn[nn])}else if(U.isInstancedMesh)$t.renderInstances(qt,ae,U.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vn=Math.min(z.instanceCount,Mt);$t.renderInstances(qt,ae,Vn)}else $t.render(qt,ae)};function jt(w,I,z){w.transparent===!0&&w.side===cn&&w.forceSinglePass===!1?(w.side=qe,w.needsUpdate=!0,Ps(w,I,z),w.side=wi,w.needsUpdate=!0,Ps(w,I,z),w.side=cn):Ps(w,I,z)}this.compile=function(w,I,z=null){z===null&&(z=w),p=Wt.get(z),p.init(I),M.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const mt=tt[ct];jt(mt,z,U),k.add(mt)}else jt(tt,z,U),k.add(tt)}),M.pop(),p=null,k},this.compileAsync=function(w,I,z=null){const k=this.compile(w,I,z);return new Promise(U=>{function tt(){if(k.forEach(function(ct){yt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){U(w);return}setTimeout(tt,10)}kt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let En=null;function Hn(w){En&&En(w)}function uc(){Ai.stop()}function fc(){Ai.start()}const Ai=new yf;Ai.setAnimationLoop(Hn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(w){En=w,W.setAnimationLoop(w),w===null?Ai.stop():Ai.start()},W.addEventListener("sessionstart",uc),W.addEventListener("sessionend",fc),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,I,C),p=Wt.get(w,M.length),p.init(I),M.push(p),bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(bt),vt=this.localClippingEnabled,J=Q.init(this.clippingPlanes,vt),m=ut.get(w,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&ko(tt,I,-1/0,v.sortObjects)}ko(w,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,at),Gt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Gt&&wt.addToRenderList(m,w),this.info.render.frame++,J===!0&&Q.beginShadows();const z=p.state.shadowsArray;ft.render(z,w,I),J===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(p.setupLights(),I.isArrayCamera){const tt=I.cameras;if(U.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){const _t=tt[ct];pc(k,U,w,_t)}Gt&&wt.render(w);for(let ct=0,mt=tt.length;ct<mt;ct++){const _t=tt[ct];dc(m,w,_t,_t.viewport)}}else U.length>0&&pc(k,U,w,I),Gt&&wt.render(w),dc(m,w,I);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,I),re.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&Q.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ko(w,I,z,k){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){k&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);const ct=$.update(w),mt=w.material;mt.visible&&m.push(w,ct,mt,z,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ct=$.update(w),mt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ot.copy(ct.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(mt)){const _t=ct.groups;for(let Pt=0,It=_t.length;Pt<It;Pt++){const gt=_t[Pt],qt=mt[gt.materialIndex];qt&&qt.visible&&m.push(w,ct,qt,z,Ot.z,gt)}}else mt.visible&&m.push(w,ct,mt,z,Ot.z,null)}}const tt=w.children;for(let ct=0,mt=tt.length;ct<mt;ct++)ko(tt[ct],I,z,k)}function dc(w,I,z,k){const U=w.opaque,tt=w.transmissive,ct=w.transparent;p.setupLightsView(z),J===!0&&Q.setGlobalState(v.clippingPlanes,z),k&&Et.viewport(P.copy(k)),U.length>0&&Rs(U,I,z),tt.length>0&&Rs(tt,I,z),ct.length>0&&Rs(ct,I,z),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function pc(w,I,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ki(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Cs:ei,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[k.id],ct=k.viewport||P;tt.setSize(ct.z,ct.w);const mt=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(V),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&wt.render(z);const _t=v.toneMapping;v.toneMapping=Mi;const Pt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),J===!0&&Q.setGlobalState(v.clippingPlanes,k),Rs(w,z,k),R.updateMultisampleRenderTarget(tt),R.updateRenderTargetMipmap(tt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let gt=0,qt=I.length;gt<qt;gt++){const se=I[gt],ae=se.object,Ye=se.geometry,$t=se.material,Mt=se.group;if($t.side===cn&&ae.layers.test(k.layers)){const Vn=$t.side;$t.side=qe,$t.needsUpdate=!0,mc(ae,z,k,Ye,$t,Mt),$t.side=Vn,$t.needsUpdate=!0,It=!0}}It===!0&&(R.updateMultisampleRenderTarget(tt),R.updateRenderTargetMipmap(tt))}v.setRenderTarget(mt),v.setClearColor(V,X),Pt!==void 0&&(k.viewport=Pt),v.toneMapping=_t}function Rs(w,I,z){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,tt=w.length;U<tt;U++){const ct=w[U],mt=ct.object,_t=ct.geometry,Pt=k===null?ct.material:k,It=ct.group;mt.layers.test(z.layers)&&mc(mt,I,z,_t,Pt,It)}}function mc(w,I,z,k,U,tt){w.onBeforeRender(v,I,z,k,U,tt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,I,z,k,w,tt),U.transparent===!0&&U.side===cn&&U.forceSinglePass===!1?(U.side=qe,U.needsUpdate=!0,v.renderBufferDirect(z,I,k,U,w,tt),U.side=wi,U.needsUpdate=!0,v.renderBufferDirect(z,I,k,U,w,tt),U.side=cn):v.renderBufferDirect(z,I,k,U,w,tt),w.onAfterRender(v,I,z,k,U,tt)}function Ps(w,I,z){I.isScene!==!0&&(I=fe);const k=yt.get(w),U=p.state.lights,tt=p.state.shadowsArray,ct=U.state.version,mt=xt.getParameters(w,U.state,tt,I,z),_t=xt.getProgramCacheKey(mt);let Pt=k.programs;k.environment=w.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(w.isMeshStandardMaterial?B:E).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",Lt),Pt=new Map,k.programs=Pt);let It=Pt.get(_t);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===ct)return gc(w,mt),It}else mt.uniforms=xt.getUniforms(w),w.onBeforeCompile(mt,v),It=xt.acquireProgram(mt,_t),Pt.set(_t,It),k.uniforms=mt.uniforms;const gt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(gt.clippingPlanes=Q.uniform),gc(w,mt),k.needsLights=zf(w),k.lightsStateVersion=ct,k.needsLights&&(gt.ambientLightColor.value=U.state.ambient,gt.lightProbe.value=U.state.probe,gt.directionalLights.value=U.state.directional,gt.directionalLightShadows.value=U.state.directionalShadow,gt.spotLights.value=U.state.spot,gt.spotLightShadows.value=U.state.spotShadow,gt.rectAreaLights.value=U.state.rectArea,gt.ltc_1.value=U.state.rectAreaLTC1,gt.ltc_2.value=U.state.rectAreaLTC2,gt.pointLights.value=U.state.point,gt.pointLightShadows.value=U.state.pointShadow,gt.hemisphereLights.value=U.state.hemi,gt.directionalShadowMap.value=U.state.directionalShadowMap,gt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,gt.spotShadowMap.value=U.state.spotShadowMap,gt.spotLightMatrix.value=U.state.spotLightMatrix,gt.spotLightMap.value=U.state.spotLightMap,gt.pointShadowMap.value=U.state.pointShadowMap,gt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function _c(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=po.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function gc(w,I){const z=yt.get(w);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Of(w,I,z,k,U){I.isScene!==!0&&(I=fe),R.resetTextureUnits();const tt=I.fog,ct=k.isMeshStandardMaterial?I.environment:null,mt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Wr,_t=(k.isMeshStandardMaterial?B:E).get(k.envMap||ct),Pt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),gt=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,se=!!z.morphAttributes.color;let ae=Mi;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ae=v.toneMapping);const Ye=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$t=Ye!==void 0?Ye.length:0,Mt=yt.get(k),Vn=p.state.lights;if(J===!0&&(vt===!0||w!==y)){const gn=w===y&&k.id===S;Q.setState(k,w,gn)}let Zt=!1;k.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Vn.state.version||Mt.outputColorSpace!==mt||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==_t||k.fog===!0&&Mt.fog!==tt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Pt||Mt.vertexTangents!==It||Mt.morphTargets!==gt||Mt.morphNormals!==qt||Mt.morphColors!==se||Mt.toneMapping!==ae||Mt.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,Mt.__version=k.version);let Tn=Mt.currentProgram;Zt===!0&&(Tn=Ps(k,I,U));let nr=!1,nn=!1,$r=!1;const le=Tn.getUniforms(),Ln=Mt.uniforms;if(Et.useProgram(Tn.program)&&(nr=!0,nn=!0,$r=!0),k.id!==S&&(S=k.id,nn=!0),nr||y!==w){Et.buffers.depth.getReversed()?(st.copy(w.projectionMatrix),hm(st),um(st),le.setValue(N,"projectionMatrix",st)):le.setValue(N,"projectionMatrix",w.projectionMatrix),le.setValue(N,"viewMatrix",w.matrixWorldInverse);const ni=le.map.cameraPosition;ni!==void 0&&ni.setValue(N,Dt.setFromMatrixPosition(w.matrixWorld)),Ht.logarithmicDepthBuffer&&le.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&le.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,nn=!0,$r=!0)}if(U.isSkinnedMesh){le.setOptional(N,U,"bindMatrix"),le.setOptional(N,U,"bindMatrixInverse");const gn=U.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),le.setValue(N,"boneTexture",gn.boneTexture,R))}U.isBatchedMesh&&(le.setOptional(N,U,"batchingTexture"),le.setValue(N,"batchingTexture",U._matricesTexture,R),le.setOptional(N,U,"batchingIdTexture"),le.setValue(N,"batchingIdTexture",U._indirectTexture,R),le.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&le.setValue(N,"batchingColorTexture",U._colorsTexture,R));const Zr=z.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&Rt.update(U,z,Tn),(nn||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,le.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ln.envMap.value=_t,Ln.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Ln.envMapIntensity.value=I.environmentIntensity),nn&&(le.setValue(N,"toneMappingExposure",v.toneMappingExposure),Mt.needsLights&&Bf(Ln,$r),tt&&k.fog===!0&&ot.refreshFogUniforms(Ln,tt),ot.refreshMaterialUniforms(Ln,k,H,Y,p.state.transmissionRenderTarget[w.id]),po.upload(N,_c(Mt),Ln,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(po.upload(N,_c(Mt),Ln,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&le.setValue(N,"center",U.center),le.setValue(N,"modelViewMatrix",U.modelViewMatrix),le.setValue(N,"normalMatrix",U.normalMatrix),le.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const gn=k.uniformsGroups;for(let ni=0,ii=gn.length;ni<ii;ni++){const vc=gn[ni];L.update(vc,Tn),L.bind(vc,Tn)}}return Tn}function Bf(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function zf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,I,z){yt.get(w.texture).__webglTexture=I,yt.get(w.depthTexture).__webglTexture=z;const k=yt.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const z=yt.get(w);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,z=0){C=w,A=I,b=z;let k=!0,U=null,tt=!1,ct=!1;if(w){const _t=yt.get(w);if(_t.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(_t.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(_t.__hasExternalTextures)R.rebindTextures(w,yt.get(w.texture).__webglTexture,yt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const gt=w.depthTexture;if(_t.__boundDepthTexture!==gt){if(gt!==null&&yt.has(gt)&&(w.width!==gt.image.width||w.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);const It=yt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[I])?U=It[I][z]:U=It[I],tt=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?U=yt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[z]:U=It,P.copy(w.viewport),O.copy(w.scissor),F=w.scissorTest}else P.copy(pt).multiplyScalar(H).floor(),O.copy(Ct).multiplyScalar(H).floor(),F=Yt;if(Et.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&Et.drawBuffers(w,U),Et.viewport(P),Et.scissor(O),Et.setScissorTest(F),tt){const _t=yt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,z)}else if(ct){const _t=yt.get(w.texture),Pt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_t.__webglTexture,z||0,Pt)}S=-1},this.readRenderTargetPixels=function(w,I,z,k,U,tt,ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){Et.bindFramebuffer(N.FRAMEBUFFER,mt);try{const _t=w.texture,Pt=_t.format,It=_t.type;if(!Ht.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-k&&z>=0&&z<=w.height-U&&N.readPixels(I,z,k,U,Nt.convert(Pt),Nt.convert(It),tt)}finally{const _t=C!==null?yt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(w,I,z,k,U,tt,ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){const _t=w.texture,Pt=_t.format,It=_t.type;if(!Ht.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-k&&z>=0&&z<=w.height-U){Et.bindFramebuffer(N.FRAMEBUFFER,mt);const gt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,gt),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),N.readPixels(I,z,k,U,Nt.convert(Pt),Nt.convert(It),0);const qt=C!==null?yt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,qt);const se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await cm(N,se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,gt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(gt),N.deleteSync(se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,z=0){w.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-z),U=Math.floor(w.image.width*k),tt=Math.floor(w.image.height*k),ct=I!==null?I.x:0,mt=I!==null?I.y:0;R.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ct,mt,U,tt),Et.unbindTexture()},this.copyTextureToTexture=function(w,I,z=null,k=null,U=0){w.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let tt,ct,mt,_t,Pt,It,gt,qt,se;const ae=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(tt=z.max.x-z.min.x,ct=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,_t=z.min.x,Pt=z.min.y,It=z.isBox3?z.min.z:0):(tt=ae.width,ct=ae.height,mt=ae.depth||1,_t=0,Pt=0,It=0),k!==null?(gt=k.x,qt=k.y,se=k.z):(gt=0,qt=0,se=0);const Ye=Nt.convert(I.format),$t=Nt.convert(I.type);let Mt;I.isData3DTexture?(R.setTexture3D(I,0),Mt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(R.setTexture2DArray(I,0),Mt=N.TEXTURE_2D_ARRAY):(R.setTexture2D(I,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Vn=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=N.getParameter(N.UNPACK_SKIP_PIXELS),nr=N.getParameter(N.UNPACK_SKIP_ROWS),nn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_t),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,It);const $r=w.isDataArrayTexture||w.isData3DTexture,le=I.isDataArrayTexture||I.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Ln=yt.get(w),Zr=yt.get(I),gn=yt.get(Ln.__renderTarget),ni=yt.get(Zr.__renderTarget);Et.bindFramebuffer(N.READ_FRAMEBUFFER,gn.__webglFramebuffer),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<mt;ii++)$r&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(w).__webglTexture,U,It+ii),w.isDepthTexture?(le&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(I).__webglTexture,U,se+ii),N.blitFramebuffer(_t,Pt,tt,ct,gt,qt,tt,ct,N.DEPTH_BUFFER_BIT,N.NEAREST)):le?N.copyTexSubImage3D(Mt,U,gt,qt,se+ii,_t,Pt,tt,ct):N.copyTexSubImage2D(Mt,U,gt,qt,se+ii,_t,Pt,tt,ct);Et.bindFramebuffer(N.READ_FRAMEBUFFER,null),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Mt,U,gt,qt,se,tt,ct,mt,Ye,$t,ae.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,U,gt,qt,se,tt,ct,mt,Ye,ae.data):N.texSubImage3D(Mt,U,gt,qt,se,tt,ct,mt,Ye,$t,ae):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,gt,qt,tt,ct,Ye,$t,ae.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,gt,qt,ae.width,ae.height,Ye,ae.data):N.texSubImage2D(N.TEXTURE_2D,U,gt,qt,tt,ct,Ye,$t,ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,Vn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,nr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,nn),U===0&&I.generateMipmaps&&N.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,I,z=null,k=null,U=0){return w.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,I,z,k,U)},this.initRenderTarget=function(w){yt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,Et.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class ac{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sx extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yx extends He{constructor(t=null,e=1,n=1,i,s,o,a,l,c=dn,h=dn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nh extends Re{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vr=new Bt,Fh=new Bt,Qs=[],Oh=new Qi,Ex=new Bt,es=new At,ns=new tr;class Fe extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ex)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),Oh.copy(t.boundingBox).applyMatrix4(vr),this.boundingBox.union(Oh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),ns.copy(t.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,vr),Fh.multiplyMatrices(n,vr),es.matrixWorld=Fh,es.raycast(t,Qs);for(let o=0,a=Qs.length;o<a;o++){const l=Qs[o];l.instanceId=s,l.object=this,e.push(l)}Qs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yx(new Float32Array(i*this.count),i,this.count,Ql,Bn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Rf extends er{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ro=new D,Po=new D,Bh=new Bt,is=new rc,to=new tr,Ea=new D,zh=new D;class Tx extends Te{constructor(t=new Ee,e=new Rf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ro.fromBufferAttribute(e,i-1),Po.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ro.distanceTo(Po);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=s,t.ray.intersectsSphere(to)===!1)return;Bh.copy(i).invert(),is.copy(t.ray).applyMatrix4(Bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),M=eo(this,t,is,l,p,x);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=eo(this,t,is,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=eo(this,t,is,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=eo(this,t,is,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eo(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Ro.fromBufferAttribute(o,i),Po.fromBufferAttribute(o,s),e.distanceSqToSegment(Ro,Po,Ea,zh)>n)return;Ea.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ea);if(!(l<t.near||l>t.far))return{distance:l,point:zh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}class lc extends er{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kh=new Bt,Pl=new rc,no=new tr,io=new D;class Pf extends Te{constructor(t=new Ee,e=new lc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,t.ray.intersectsSphere(no)===!1)return;kh.copy(i).invert(),Pl.copy(t.ray).applyMatrix4(kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);io.fromBufferAttribute(u,m),Hh(io,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)io.fromBufferAttribute(u,g),Hh(io,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hh(r,t,e,n,i,s,o){const a=Pl.distanceSqToPoint(r);if(a<e){const l=new D;Pl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ms extends He{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wx{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Tt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],s=[],o=[],a=new D,l=new Bt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(De(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(De(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function cc(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const ro=new D,Ta=new cc,wa=new cc,ba=new cc;class Df extends wx{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(ro.subVectors(i[0],i[1]).add(i[0]),c=ro);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ro.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ta.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),wa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ba.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ba.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ta.calc(l),wa.calc(l),ba.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Er extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new D,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ce extends Ee{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function x(){const v=new D,T=new D;let A=0;const b=(e-t)/n;for(let C=0;C<=s;C++){const S=[],y=C/s,P=y*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,V=F*l+a,X=Math.sin(V),G=Math.cos(V);T.x=P*X,T.y=-y*n+m,T.z=P*G,u.push(T.x,T.y,T.z),v.set(X,b,G).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-y),S.push(g++)}_.push(S)}for(let C=0;C<i;C++)for(let S=0;S<s;S++){const y=_[S][C],P=_[S+1][C],O=_[S+1][C+1],F=_[S][C+1];(t>0||S!==0)&&(h.push(y,P,F),A+=3),(e>0||S!==s-1)&&(h.push(P,O,F),A+=3)}c.addGroup(p,A,0),p+=A}function M(v){const T=g,A=new Tt,b=new D;let C=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const V=O/i*l+a,X=Math.cos(V),G=Math.sin(V);b.x=S*G,b.y=m*y,b.z=S*X,u.push(b.x,b.y,b.z),d.push(0,y,0),A.x=X*.5+.5,A.y=G*.5*y+.5,f.push(A.x,A.y),g++}for(let O=0;O<i;O++){const F=T+O,V=P+O;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _s extends Ce{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends Ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new D,v=new D,T=new D;for(let A=0;A<e.length;A+=3)f(e[A+0],M),f(e[A+1],v),f(e[A+2],T),l(M,v,T,x)}function l(x,M,v,T){const A=T+1,b=[];for(let C=0;C<=A;C++){b[C]=[];const S=x.clone().lerp(v,C/A),y=M.clone().lerp(v,C/A),P=A-C;for(let O=0;O<=P;O++)O===0&&C===A?b[C][O]=S:b[C][O]=S.clone().lerp(y,O/P)}for(let C=0;C<A;C++)for(let S=0;S<2*(A-C)-1;S++){const y=Math.floor(S/2);S%2===0?(d(b[C][y+1]),d(b[C+1][y]),d(b[C][y])):(d(b[C][y+1]),d(b[C+1][y+1]),d(b[C+1][y]))}}function c(x){const M=new D;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(x),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function h(){const x=new D;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const v=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(v,1-T)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const M=o[x+0],v=o[x+2],T=o[x+4],A=Math.max(M,v,T),b=Math.min(M,v,T);A>.9&&b<.1&&(M<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const x=new D,M=new D,v=new D,T=new D,A=new Tt,b=new Tt,C=new Tt;for(let S=0,y=0;S<s.length;S+=9,y+=6){x.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),A.set(o[y+0],o[y+1]),b.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),T.copy(x).add(M).add(v).divideScalar(3);const P=m(T);_(A,y+0,x,P),_(b,y+2,M,P),_(C,y+4,v,P)}}function _(x,M,v,T){T<0&&x.x===1&&(o[M]=x.x-1),v.x===0&&v.z===0&&(o[M]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.details)}}class Cn extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cn(t.radius,t.detail)}}class Wi extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wi(t.radius,t.detail)}}class hc extends Ee{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new D,g=new Tt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,v=x+n+1,T=x+n+2,A=x+1;a.push(M,v,A),a.push(v,T,A)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Dr extends Ee{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const A=T/e;u.x=-t*Math.cos(i+A*s)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+A*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],T=h[p+1][x],A=h[p+1][x+1];(p!==0||o>0)&&f.push(M,v,A),(p!==n-1||l<Math.PI)&&f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xi extends Ee{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class di extends er{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hf,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zo extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class bx extends zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Aa=new Bt,Vh=new D,Gh=new D;class Lf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vh),Gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gh),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wh=new Bt,rs=new D,Ca=new D;class Ax extends Lf{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(rs),Ca.copy(n.position),Ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ca),n.updateMatrixWorld(),i.makeTranslation(-rs.x,-rs.y,-rs.z),Wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh)}}class Cx extends zo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ax}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rx extends Lf{constructor(){super(new Ef(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Px extends zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Rx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dx extends zo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Xh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Xh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);const Rn=1.55,qh=1.4,If=70*Rn,mo=[[-18,18],[-14,24],[-6,26],[1,31],[0,39],[8,45],[18,44],[26,49],[31,57],[40,61]],Uf=[-.45,.82,.37];function _o(r,t){let e=1/0;for(let n=1;n<mo.length;n++){const[i,s]=mo[n-1],[o,a]=mo[n],l=o-i,c=a-s,h=Math.max(0,Math.min(1,((r-i)*l+(t-s)*c)/(l*l+c*c)));e=Math.min(e,Math.hypot(r-i-l*h,t-s-c*h))}return e}const Ix=[{id:1,name:"Vương Trần Thiên Ái"},{id:2,name:"Nguyễn Hải Anh"},{id:3,name:"Nguyễn Phạm Minh Anh"},{id:4,name:"Nguyễn Ngọc Minh Châu"},{id:5,name:"Nguyễn Trần Diễm Chi"},{id:6,name:"Nguyễn Khải Hoàn"},{id:7,name:"A Se Kinl"},{id:8,name:"Trình Nhã Kỳ"},{id:9,name:"Nguyễn Ngọc Bảo Linh"},{id:10,name:"Phạm Hoàng Trúc Linh"},{id:11,name:"Bành Gia Mẫn"},{id:12,name:"Trần Thục Bảo Nghi"},{id:13,name:"Thiên Ngọc"},{id:14,name:"Bùi Hoàng Nhân"},{id:15,name:"Vũ Nguyễn Yến Nhi"},{id:16,name:"Ngô Tâm Như"},{id:17,name:"Nguyễn Ngọc Thảo Như"},{id:18,name:"Bùi Nguyễn Phúc Ni"},{id:19,name:"Hoàng Phúc"},{id:20,name:"Lê Ngọc Thuận"},{id:21,name:"Nguyễn Minh Thư"},{id:22,name:"Trần Ngọc Anh Thư"},{id:23,name:"Hồ Ngọc Bảo Thy"},{id:24,name:"Nguyễn Ngọc Phương Trang"},{id:25,name:"Nguyễn Minh Triết"},{id:26,name:"Huỳnh Ngọc Thanh Vy"},{id:27,name:"Lê Ngọc Tường Vy"},{id:28,name:"Đặng Thanh Xuân"}],Ux={beachRadius:If-9,volcanoRadius:16*Rn,spiralTurns:2.4,totalChests:28,beachHeight:1.8,volcanoHeight:22};class Nx{constructor(t=Ux){et(this,"chests",[]);et(this,"winningChest",null);et(this,"config");this.config=t}generateChests(t,e){const n=t&&t.length>=this.config.totalChests?t.slice(0,this.config.totalChests):Ix;this.chests=[];const i=this.config.totalChests,s=-Math.PI/4;for(let o=0;o<i;o++){const a=3-Math.floor(o/7),l=o%7,c=this.config.beachRadius,h=this.config.volcanoRadius,u=Math.sqrt(h*h+(a+.5)/4*(c*c-h*h)),d=s+l*Math.PI*2/7+a*.41;let f=Math.cos(d)*u,g=Math.sin(d)*u;for(let M=0;M<18;M++){const v=f/Rn,T=g/Rn;if(_o(v,T)>6.8&&Math.hypot(v+18,T-18)>11&&Math.hypot(v-31,T+28)>10&&Math.hypot(v,T)>14.5&&Math.hypot(v+44,T+36)>15&&Math.hypot(v-48,T+24)>14&&Math.hypot(v-31,T-55)>12)break;const b=d+(M+1)*.17;f=Math.cos(b)*u,g=Math.sin(b)*u}const m=(e?e(f,g):2+Math.pow(Math.cos($e.clamp(u/If,0,1)*(Math.PI/2)),1.35)*27)+.02,p=Math.atan2(-f,-g)+(o%2-.5)*.25,x={id:n[o].id,index:o,student:n[o],position:new D(f,m,g),rotationY:p,isWinner:!1};this.chests.push(x)}return this.chests}updateElevations(t){this.chests.forEach(e=>{e.position.y=t(e.position.x,e.position.z)+.02})}getAllChests(){return this.chests}getChest(t){return this.chests.find(e=>e.id===t||e.index===t)}selectWinner(t){this.chests.length===0&&this.generateChests(),this.chests.forEach(n=>n.isWinner=!1);let e;return t!==void 0?e=this.getChest(t)||this.chests[Math.floor(Math.random()*this.chests.length)]:e=this.chests[Math.floor(Math.random()*this.chests.length)],e.isWinner=!0,this.winningChest=e,e}getWinningChest(){return this.winningChest}}class Fx{constructor(){et(this,"listeners",new Map)}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.off(t,e)}off(t,e){const n=this.listeners.get(t);n&&n.delete(e)}emit(t,e){const n=this.listeners.get(t);n&&n.forEach(i=>{try{i(e)}catch(s){console.error(`[EventBus] Lỗi trong handler của sự kiện "${t}":`,s)}})}once(t,e){const n=i=>{this.off(t,n),e(i)};return this.on(t,n)}clear(){this.listeners.clear()}}const Si=new Fx,Ox={overviewPosition:new D(0,76,163),overviewLookAt:new D(0,14,0),flightDuration:9.8};class Bx{constructor(t,e=Ox){et(this,"camera");et(this,"config");et(this,"currentCurve",null);et(this,"currentTween",null);et(this,"currentLookAt");et(this,"isFlying",!1);et(this,"heightSampler");this.camera=t,this.config=e,this.currentLookAt=e.overviewLookAt.clone(),this.resetToOverview()}setHeightSampler(t){this.heightSampler=t}isCameraFlying(){return this.isFlying}resetToOverview(t=!0){this.currentTween&&(this.currentTween.kill(),this.currentTween=null),this.isFlying=!1,t?(this.camera.position.copy(this.config.overviewPosition),this.currentLookAt.copy(this.config.overviewLookAt),this.camera.lookAt(this.currentLookAt)):(ce.to(this.camera.position,{x:this.config.overviewPosition.x,y:this.config.overviewPosition.y,z:this.config.overviewPosition.z,duration:1.8,ease:"power2.out"}),ce.to(this.currentLookAt,{x:this.config.overviewLookAt.x,y:this.config.overviewLookAt.y,z:this.config.overviewLookAt.z,duration:1.8,ease:"power2.out",onUpdate:()=>{this.camera.lookAt(this.currentLookAt)}}))}buildCinematicPath(t,e){const n=[],i=this.heightSampler,s=this.camera.position.clone();n.push(s);const o=new D(Math.sin(t.rotationY),0,Math.cos(t.rotationY)).normalize(),a=new D(o.z,0,-o.x).normalize(),l=t.position.clone().add(o.clone().multiplyScalar(4.6)).add(a.clone().multiplyScalar(2.1)).add(new D(0,2.7,0)),c=l.clone().sub(s),h=new D(-c.z,0,c.x).normalize(),u=h.dot(o)>=0?1:-1,d=h.multiplyScalar(u*12),f=s.clone().lerp(l,.32).add(d.clone().multiplyScalar(.7));i?f.y=Math.max(f.y,i(f.x,f.z)+14):f.y=Math.max(f.y,24),n.push(f);const g=s.clone().lerp(l,.65).add(d.clone().multiplyScalar(.4));i?g.y=Math.max(g.y,i(g.x,g.z)+7.5):g.y=Math.max(g.y,14),n.push(g);const _=t.position.clone().add(o.clone().multiplyScalar(6.5)).add(a.clone().multiplyScalar(2.6)).add(new D(0,3.2,0));if(i&&(_.y=Math.max(_.y,i(_.x,_.z)+2)),n.push(_),i){const m=i(l.x,l.z);l.y=Math.max(l.y,m+1.25);for(const p of[.3,.5,.7]){const x=$e.lerp(l.x,t.position.x,p),M=$e.lerp(l.z,t.position.z,p),v=i(x,M),T=$e.lerp(l.y,t.position.y+.55,p);v>T-.35&&(l.y+=v-T+.6)}}return n.push(l),this.currentCurve=new Df(n,!1,"centripetal",.5),this.currentCurve}flyToChest(t,e,n){this.isFlying=!0;const i=new D(0,14,0),s=t.position.clone().add(new D(0,.55,0)),o=this.config.overviewPosition.clone(),a=Math.atan2(o.z,o.x),l=Math.sqrt(o.x*o.x+o.z*o.z)||110*Rn,c=o.y||56,h=new D(Math.cos(a)*l,c,Math.sin(a)*l);this.camera.position.copy(h);const u=this.buildCinematicPath(t,e),d={progress:0};this.currentTween&&this.currentTween.kill();const f=.48;this.currentTween=ce.to(d,{progress:1,duration:this.config.flightDuration,ease:"none",onUpdate:()=>{const g=d.progress;if(g<=f){const _=g/f,m=ce.parseEase("power1.inOut")(_),p=Math.sin(m*Math.PI*2),x=a+m*Math.PI*2,M=l+p*4,v=c+p*3.5;this.camera.position.set(Math.cos(x)*M,v,Math.sin(x)*M),this.currentLookAt.copy(i),this.camera.lookAt(this.currentLookAt)}else{const _=(g-f)/(1-f),m=ce.parseEase("power2.inOut")(_),p=u.getPointAt(m);this.camera.position.copy(p);const x=u.getPointAt(Math.min(1,m+.045)),M=$e.smoothstep(m,.1,.62),v=x.lerp(s,M),T=$e.smoothstep(m,0,.3);this.currentLookAt.copy(i).lerp(v,T),this.camera.lookAt(this.currentLookAt)}Si.emit("CAMERA_PROGRESS",{progress:g})},onComplete:()=>{this.isFlying=!1,this.currentLookAt.copy(s),this.camera.lookAt(s),Si.emit("CHEST_ARRIVED",{chestId:t.id,studentName:t.student.name,position:t.position}),ce.delayedCall(.35,()=>{Si.emit("CHEST_OPENED",{chestId:t.id,studentName:t.student.name})}),n&&n()}})}createTrajectoryLineMesh(t){const e=new Ee,n=new Rf({visible:!1,transparent:!0,opacity:0});return new Tx(e,n)}}function Nf(r,t,e){let n=Math.imul(r,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Ra(r,t,e,n){const i=Math.floor(r),s=Math.floor(t),o=r-i,a=t-s,l=o*o*(3-2*o),c=a*a*(3-2*a),h=(f,g)=>Nf((f+e)%e,(g+e)%e,n),u=h(i,s)*(1-l)+h(i+1,s)*l,d=h(i,s+1)*(1-l)+h(i+1,s+1)*l;return u*(1-c)+d*c}function zx(r,t,e,n){const i=t/n,s=e/n,o=Ra(i*8,s*8,8,12),a=Ra(i*48,s*48,48,42),l=Nf(t,e,83);if(r==="wood"){const h=Math.sin(s*Math.PI*48+o*4+Math.sin(i*Math.PI*8)*.6),u=o*.22+a*.17+h*.12;return{color:[87+u*100,46+u*65,24+u*38],height:u+h*.12,roughness:.65+a*.16}}if(r==="chestWood"){const h=Math.pow(Math.abs(Math.sin(s*Math.PI*3)),26),u=Ra(i*8,s*64,8,21)*.62+a*.28,d=o*.18+u*.5,f=1-h*.78;return{color:[(168+d*76)*f,(112+d*60)*f,(52+d*36)*f],height:d*.55-h*1.1,roughness:.5+d*.24+h*.3}}if(r==="rock"){const h=Math.abs(Math.sin((i+s*.65)*Math.PI*18+o*7)),u=o*.48+a*.32+l*.12;return{color:[83+u*52-h*11,94+u*47+o*12,89+u*44],height:u+h*.16,roughness:.79+a*.13}}if(r==="sand"){const h=o*.27+a*.16+l*.22;return{color:[197+h*63,160+h*69,106+h*68],height:h,roughness:.83+l*.13}}if(r==="grass"){const h=Math.sin(i*Math.PI*96+a*3)*Math.sin(s*Math.PI*72),u=o*.25+a*.24+h*.06;return{color:[190+u*52,202+u*44,167+u*52],height:u+l*.1,roughness:.86+a*.1}}const c=Math.sin(s*Math.PI*96)*.05+l*.08;return{color:[202+o*36+c*25,148+o*36+c*20,54+o*27],height:c+a*.12,roughness:.32+o*.18}}function Do(r){const e=document.createElement("canvas"),n=document.createElement("canvas"),i=document.createElement("canvas");for(const p of[e,n,i])p.width=p.height=256;const s=e.getContext("2d"),o=n.getContext("2d"),a=i.getContext("2d"),l=s.createImageData(256,256),c=o.createImageData(256,256),h=a.createImageData(256,256),u=new Float32Array(256*256),d=p=>Math.max(0,Math.min(255,Math.round(p)));for(let p=0;p<256;p++)for(let x=0;x<256;x++){const M=p*256+x,v=M*4,T=zx(r,x,p,256);u[M]=T.height,l.data[v]=d(T.color[0]),l.data[v+1]=d(T.color[1]),l.data[v+2]=d(T.color[2]),l.data[v+3]=255;const A=d(T.roughness*255);c.data[v]=c.data[v+1]=c.data[v+2]=A,c.data[v+3]=255}const f=r==="rock"?2.2:r==="sand"?1.2:1.5;for(let p=0;p<256;p++)for(let x=0;x<256;x++){const M=(p*256+x)*4,v=(u[p*256+(x+1)%256]-u[p*256+(x+256-1)%256])*f,T=(u[(p+1)%256*256+x]-u[(p+256-1)%256*256+x])*f,A=Math.hypot(v,T,1);h.data[M]=d(128-v/A*127),h.data[M+1]=d(128-T/A*127),h.data[M+2]=d(128+127/A),h.data[M+3]=255}s.putImageData(l,0,0),o.putImageData(c,0,0),a.putImageData(h,0,0);const g=new ms(e),_=new ms(n),m=new ms(i);g.colorSpace=Be;for(const p of[g,_,m])p.wrapS=p.wrapT=wo,p.anisotropy=4;return{map:g,roughnessMap:_,normalMap:m}}function kx(r,t=!0){const e=Do("grass");for(const i of Object.values(e))i.repeat.set(7,7);const n=new di({map:e.map,roughnessMap:e.roughnessMap,normalMap:e.normalMap,roughness:.95,normalScale:new Tt(.35,.35),vertexColors:t,flatShading:!0});return r.push(n,e.map,e.roughnessMap,e.normalMap),n}function Hx(r){const t=Do("rock"),e=new di({map:t.map,roughnessMap:t.roughnessMap,normalMap:t.normalMap,roughness:.9,normalScale:new Tt(.55,.55),flatShading:!0});return r.push(e,t.map,t.roughnessMap,t.normalMap),e}function Ff(r){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,0.85)"),i.addColorStop(.4,"rgba(255,255,255,0.32)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new ms(e);return s.colorSpace=Be,r.push(s),s}function Vx(){const e=document.createElement("canvas");e.width=128,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,64);i.addColorStop(0,"#1f5fbf"),i.addColorStop(.42,"#9cc4e8"),i.addColorStop(.5,"#e9f2f6"),i.addColorStop(.58,"#8fae74"),i.addColorStop(1,"#3d5738"),n.fillStyle=i,n.fillRect(0,0,128,64);const s=n.createRadialGradient(128*.27,64*.28,0,128*.27,64*.28,128*.17);s.addColorStop(0,"rgba(255,252,238,1)"),s.addColorStop(1,"rgba(255,244,214,0)"),n.fillStyle=s,n.fillRect(0,0,128,64);const o=new ms(e);return o.mapping=To,o.colorSpace=Be,o}const Gx=`
  uniform float uTime;
  uniform float uWind;
  uniform vec3 uColor;
  varying vec3 vColor;
  varying vec3 vNormal;

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
    vNormal = normalize(mat3(modelMatrix) * localNormal);

    // Hiệu ứng ánh nắng nhiệt đới chiếu rọi lên ngọn lá (Sunlit Foliage Highlight)
    vColor = uColor;

    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`,Wx=`
  varying vec3 vColor;
  varying vec3 vNormal;

  void main() {
    float diffuse = max(dot(normalize(vNormal), normalize(vec3(-0.45, 0.82, 0.37))), 0.0);
    vec3 color = vColor * (0.55 + diffuse * 0.53);
    color = mix(color, color * vec3(1.15, 1.08, 0.84), diffuse * 0.24);
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Pa=`
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
`,Da=`
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
    vec3 shallow = vec3(0.10, 0.60, 0.62);
    vec3 deep = vec3(0.025, 0.185, 0.40);
    vec3 color = mix(shallow, deep, depth);
    color = mix(color, vec3(0.06, 0.42, 0.50), uPool * 0.8);
    color *= 0.92 + smoothstep(-1.0, 1.8, h0) * 0.16;

    // Đường bọt mép bờ bám theo hình dạng thật của hòn đảo và thở theo nhịp sóng vỗ.
    float angle = atan(q.y, q.x);
    float shore = 110.0 + sin(angle * 5.0) * 2.6 + cos(angle * 11.0 + 1.7) * 1.4;
    float runup = (dist - shore) - sin(t * 1.1 + angle * 3.0) * 1.7;
    float foam = (1.0 - smoothstep(0.3, 3.8, abs(runup)))
               * (0.5 + fbm(q * 0.11 + vec2(t * 0.22, -t * 0.17)));
    foam = clamp(foam, 0.0, 1.0) * (1.0 - uPool);
    float whitecap = smoothstep(2.35, 2.95, h0) * depth * 0.42 * (1.0 - uPool);
    color = mix(color, vec3(0.90, 0.97, 0.97), max(foam, whitecap) * 0.8);

    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.2);
    color = mix(color, vec3(0.60, 0.79, 0.92), fresnel * mix(0.30, 0.45, uPool));
    float glint = pow(max(dot(reflect(-normalize(uSunDirection), normal), viewDir), 0.0), 120.0);
    color += vec3(1.0, 0.93, 0.78) * glint * mix(0.55, 0.35, uPool) * (1.0 - max(foam, whitecap));

    // Sương mù khí quyển: mặt biển nhạt dần rồi hòa đúng sắc chân trời của sky shader.
    color = mix(color, vec3(0.62, 0.78, 0.92), smoothstep(150.0, 430.0, dist) * (1.0 - uPool));

    gl_FragColor = vec4(color, mix(1.0, 0.9, uPool));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Xx=`
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
`,qx=`
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

    vec3 deep = vec3(0.022, 0.155, 0.195);
    vec3 mid = vec3(0.055, 0.33, 0.375);
    vec3 color = mix(deep, mid, smoothstep(-1.2, 1.8, h0));
    color = mix(color, vec3(0.14, 0.48, 0.50), uRadial * 0.6);
    // Thân thác chỉ trắng ở các cột bọt, phần giữa vẫn còn sắc ngọc để nhìn ra khối nước.
    color = mix(color, vec3(0.82, 0.93, 0.95), uWhiteness * (0.22 + streak * 0.22 + veil * 0.62));
    color = mix(color, vec3(0.90, 0.98, 0.98), foam * 0.8);

    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
    color = mix(color, vec3(0.63, 0.80, 0.91), fresnel * 0.26);
    float glint = pow(max(dot(reflect(-normalize(uSunDirection), normal), viewDir), 0.0), 80.0);
    color += vec3(1.0, 0.94, 0.80) * glint * 0.5 * (1.0 - foam);

    float alpha = mix(0.93, 0.985, 1.0 - bank) + foam * 0.015;
    // Vạt thác tan thành bụi nước: hai bên mép không còn là đường cắt thẳng của một tấm bảng.
    float sheet = smoothstep(1.04, 0.52, edge + (0.55 - filament) * 0.34);
    alpha *= mix(1.0, (0.62 + 0.34 * p.y) * sheet, uSideFade);
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Yx=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,$x=`
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
`,Zx=`
  varying vec3 vDirection;
  uniform vec3 uSunDirection;
  uniform float uTime;
  ${$x}

  void main() {
    vec3 dir = normalize(vDirection);
    vec3 sun = normalize(uSunDirection);
    float up = clamp(dir.y, 0.0, 1.0);
    float cosSun = dot(dir, sun);
    float sunSide = max(cosSun, 0.0);

    vec3 zenith = vec3(0.045, 0.185, 0.58);
    vec3 midSky = vec3(0.165, 0.375, 0.79);
    // Sắc chân trời dùng chung với lớp sương của mặt biển -> không còn đường nối cứng.
    vec3 horizon = vec3(0.62, 0.78, 0.92);

    // Gradient cong: đổi màu mạnh trong ~25 độ đầu rồi mới chùng dần, giống tán xạ Rayleigh thật.
    vec3 sky = mix(horizon, midSky, smoothstep(0.015, 0.42, up));
    sky = mix(sky, zenith, smoothstep(0.28, 0.95, up));

    // Ánh sáng mặt trời bị khí quyển tán xạ: ấm dần về phía mặt trời, nhạt dần lên đỉnh trời.
    sky += vec3(0.42, 0.26, 0.10) * pow(sunSide, 4.0) * (1.0 - up) * 0.22;
    sky += vec3(1.0, 0.87, 0.66) * pow(sunSide, 10.0) * 0.10;
    sky += vec3(1.0, 0.94, 0.80) * pow(sunSide, 160.0) * 0.42;
    sky += vec3(1.35, 1.28, 1.12) * smoothstep(0.99968, 0.99982, cosSun);

    // Dải mây ti mỏng bám sát chân trời, trôi chậm theo thời gian.
    float band = smoothstep(-0.01, 0.05, dir.y) * (1.0 - smoothstep(0.09, 0.40, dir.y));
    if (band > 0.001) {
      vec2 cuv = dir.xz / max(dir.y, 0.05) * 0.42;
      float body = fbm(cuv * 1.25 + vec2(uTime * 0.0035, uTime * 0.0018));
      float detail = fbm(cuv * 3.4 - vec2(uTime * 0.006, uTime * 0.0025));
      float cover = smoothstep(0.50, 0.74, body * 0.75 + detail * 0.28);
      vec3 tint = mix(vec3(0.72, 0.78, 0.86), vec3(1.02, 1.0, 0.98), detail);
      sky = mix(sky, tint, cover * band * 0.9);
    }

    // Lấy nét màu (dither) để loại bỏ hiện tượng dải gradient bậc thang.
    sky += (hash21(gl_FragCoord.xy) - 0.5) * 0.008;

    gl_FragColor = vec4(sky, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,jx=`
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
`,Kx=`
  varying vec3 vNormalWorld;
  varying vec3 vWorld;
  uniform vec3 uSunDirection;

  void main() {
    vec3 n = normalize(vNormalWorld);
    vec3 viewDir = normalize(cameraPosition - vWorld);
    float sun = max(dot(n, normalize(uSunDirection)), 0.0);

    vec3 color = mix(vec3(0.74, 0.80, 0.90), vec3(1.06, 1.04, 1.0), sun);
    color *= mix(0.70, 1.0, smoothstep(-0.45, 0.45, n.y));

    // Viền mỗi khối cầu tan dần vào nền trời -> cụm mây mềm như thật.
    float rim = 1.0 - abs(dot(n, viewDir));
    float alpha = 0.96 * (1.0 - smoothstep(0.30, 0.92, rim));
    alpha *= mix(0.72, 1.0, sun);

    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class Jx{constructor(t={}){et(this,"opts");et(this,"geometries",[]);et(this,"materials",[]);et(this,"foliageMaterials",[]);et(this,"sunDirection",new D(...Uf).normalize());et(this,"riverCurve",new Df(mo.map(([t,e])=>new D(t,0,e)),!1,"catmullrom",.5));et(this,"chestClearings",[]);et(this,"root",new he);et(this,"clouds",null);et(this,"spray",null);et(this,"stoneMaterial",null);et(this,"wetStoneMaterial",null);et(this,"gravelMaterial",null);et(this,"random");let e=t.seed??88;this.random=()=>(e=e*1664525+1013904223>>>0,e/4294967296),this.opts={seed:t.seed??88,treeCount:t.treeCount??125,palmCount:t.palmCount??42,shrubCount:t.shrubCount??65,rockCount:t.rockCount??55,cloudCount:t.cloudCount??18}}setChestClearings(t){this.chestClearings=t.map(e=>new Tt(e.position.x/Rn,e.position.z/Rn))}clearOfChests(t,e,n){return this.chestClearings.every(i=>Math.hypot(t-i.x,e-i.y)>n)}randomClearing(t,e,n){for(let i=0;i<40;i++){const s=this.random()*Math.PI*2,o=t+this.random()*(e-t),a=Math.cos(s)*o,l=Math.sin(s)*o;if(this.clearOfChests(a,l,n)&&_o(a,l)>5)return new Tt(a,l)}throw new Error("Unable to place decoration safely on the island")}build(){return this.root=new he,this.root.name="MajesticTropicalIsland",this.root.scale.set(Rn,qh,Rn),this.root.add(this.createOcean()),this.root.add(this.createSeaCliffs()),this.root.add(this.createTerrainSurface()),this.root.add(this.createAncientStoneBaths()),this.root.add(this.createGrandWaterfalls()),this.root.add(this.createMeanderingRiver()),this.root.add(this.createTimberBridge()),this.root.add(this.createPier()),this.root.add(this.createBeachPalms()),this.root.add(this.createCanopyForest()),this.root.add(this.createHighlandTrees()),this.root.add(this.createTropicalShrubs()),this.root.add(this.createMossyBoulders()),this.root.add(this.createCoastalMonuments()),this.clouds=this.createClouds(),this.root.add(this.clouds),this.root}noise(t,e){return Math.sin(t*.23+this.opts.seed)*Math.cos(e*.19)*.55+Math.sin(t*.48+e*.34)*.23}getTerrainHeightAt(t,e){return this.localTerrainHeightAt(t/Rn,e/Rn)*qh}localTerrainHeightAt(t,e){const n=Math.sqrt(t*t+e*e);if(n>=74)return-2.8;const i=$e.clamp(n/66,0,1),s=Math.cos(i*(Math.PI/2)),o=1.4+Math.pow(s,1.35)*20,a=Math.sin(t*.07)*Math.cos(e*.07)*2.6,l=-Math.exp(-Math.pow(_o(t,e)/4.2,2))*2.8,c=Math.hypot(t+18,e-18),h=-Math.exp(-Math.pow(c/6.8,4))*2.3,u=this.noise(t,e)*(n<18?.4:.85),d=$e.clamp(o+a+l+h+u,.5,25.5),f=$e.smoothstep(n,68,74);return $e.lerp(d,-2.8,f)}getTerrainNormalAt(t,e){const i=this.getTerrainHeightAt(t+.25,e)-this.getTerrainHeightAt(t-.25,e),s=this.getTerrainHeightAt(t,e+.25)-this.getTerrainHeightAt(t,e-.25);return new D(-i/(2*.25),1,-s/(2*.25)).normalize()}mat(t,e=.82,n=0){const i=new di({color:t,roughness:e,metalness:n,flatShading:!0});return this.materials.push(i),i}geo(t){return this.geometries.push(t),t}sharedStone(){return this.stoneMaterial||(this.stoneMaterial=Hx(this.materials)),this.stoneMaterial}wetStone(){if(!this.wetStoneMaterial){const t=this.sharedStone().clone();t.roughness=.5,t.color=new St(11121582),this.wetStoneMaterial=t,this.materials.push(t)}return this.wetStoneMaterial}gravelStone(){if(!this.gravelMaterial){const t=this.sharedStone().clone();t.map=null,t.roughnessMap=null,t.normalMap=null,t.color=new St(9411223),t.roughness=.62,this.gravelMaterial=t,this.materials.push(t)}return this.gravelMaterial}streamMaterial(t){const e={uTime:{value:0},uFlowSpeed:{value:1},uFoam:{value:.35},uInvert:{value:0},uRadial:{value:0},uWhiteness:{value:0},uSideFade:{value:0},uSunDirection:{value:this.sunDirection}};for(const[i,s]of Object.entries(t))e[i]={value:s};const n=new Xe({vertexShader:Xx,fragmentShader:qx,uniforms:e,transparent:!0,side:cn,depthWrite:!1});return this.materials.push(n),n}riverHalfWidth(t){return 2+t*1.65+Math.sin(t*9.4)*.26}riverSurfaceLift(t){return .36-t*t*.26}addStone(t,e,n,i,s,o,a){if(t.index>=t.mesh.count)return;const l=a??.42+this.random()*.3,c=new tn((this.random()-.5)*.45,this.random()*Math.PI*2,(this.random()-.5)*.45),h=new Bt().compose(new D(e,i-s*o,n),new zn().setFromEuler(c),new D(s*(.85+this.random()*.55),s*l,s*(.85+this.random()*.55)));t.mesh.setMatrixAt(t.index++,h)}stoneSlots(...t){return t.map(e=>({mesh:e,index:0}))}finishStones(...t){return t.map(({mesh:e,index:n})=>(e.count=n,e.instanceMatrix.needsUpdate=!0,e.castShadow=!0,e.receiveShadow=!0,e))}createOcean(){const t=this.geo(new Er(430,160));t.rotateX(-Math.PI/2);const e=new Xe({vertexShader:Pa,fragmentShader:Da,uniforms:{uTime:{value:0},uPool:{value:0},uSunDirection:{value:this.sunDirection}},transparent:!0,side:cn});this.materials.push(e);const n=new At(t,e);return n.name="MajesticLagoonOcean",n.position.y=.2,n}createSeaCliffs(){const t=this.geo(new Ce(36,68,16,36,8)),e=t.attributes.position;for(let i=0;i<e.count;i++){const s=e.getX(i),o=e.getZ(i),a=1+this.noise(s,o)*.12;e.setX(i,s*a),e.setZ(i,o*a)}t.translate(0,-6.5,0);const n=new At(t,this.sharedStone());return n.name="IslandSeaCliffs",n.castShadow=!0,n.receiveShadow=!0,n}createTerrainSurface(){const n=this.geo(new Gr(160,160,160,160));n.rotateX(-Math.PI/2);const i=n.attributes.position,s=new Float32Array(i.count*3),o=new St(16177307),a=new St(10741301),l=new St(2278750),c=new St(1483594),h=new St(4906624),u=new St(8843180);for(let f=0;f<i.count;f++){const g=i.getX(f),_=i.getZ(f),m=this.localTerrainHeightAt(g,_);i.setY(f,m);let p=l;if(m<2.4)p=o;else if(m<5){const M=(m-2.4)/2.6;p=o.clone().lerp(a,M)}else if(m<11.5){const M=(m-5)/6.5;p=a.clone().lerp(l,M)}else if(m<18){const M=(m-11.5)/6.5;p=l.clone().lerp(c,M)}else if(m<22.5){const M=(m-18)/4.5;p=c.clone().lerp(h,M)}else{const M=Math.min(1,(m-22.5)/3);p=h.clone().lerp(u,M)}const x=_o(g,_);if(x<4.2){const M=new St(9274740),v=new St(4934207);p=p.clone().lerp(M,$e.smoothstep(4.2-x,0,2)*.8),p=p.clone().lerp(v,$e.smoothstep(2.6-x,0,1.4)*.88)}s[f*3]=p.r,s[f*3+1]=p.g,s[f*3+2]=p.b}n.setAttribute("color",new Re(s,3)),n.computeVertexNormals();const d=new At(n,kx(this.materials,!0));return d.name="MajesticTerrainSurface",d.receiveShadow=!0,d}createAncientStoneBaths(){const t=new he;t.name="AncientStoneBaths";const e=this.mat(10265519,.88),n=this.mat(16498468,.25,.75),i=this.localTerrainHeightAt(0,0),s=new At(this.geo(new Ce(11.5,12.8,1.1,32)),e);s.position.set(0,i+.55,0),s.receiveShadow=!0,t.add(s);const o=new At(this.geo(new Ce(8.2,9.4,1.2,28)),e);o.position.set(0,i+1.6,0),o.receiveShadow=!0,t.add(o);const a=new At(this.geo(new Er(7.6,40)),new Xe({vertexShader:Pa,fragmentShader:Da,uniforms:{uTime:{value:0},uPool:{value:1},uSunDirection:{value:this.sunDirection}},transparent:!0}));a.rotation.x=-Math.PI/2,a.position.set(0,i+2.31,0),this.materials.push(a.material),t.add(a);for(let h=0;h<6;h++){const u=h*Math.PI/3,d=Math.cos(u)*7.8,f=Math.sin(u)*7.8,g=new At(this.geo(new Ce(.5,.65,5.2,8)),e);g.position.set(d,i+3.8,f),g.castShadow=!0,t.add(g);const _=new At(this.geo(new ne(1.2,.45,1.2)),e);_.position.set(d,i+6.3,f),t.add(_)}const l=new At(this.geo(new Ce(1.4,1.8,2.2,16)),e);l.position.set(0,i+2.5,0),t.add(l);const c=new At(this.geo(new Wi(1.2,2)),n);c.position.set(0,i+4.2,0),t.add(c);for(let h=0;h<4;h++){const u=new At(this.geo(new ne(4.2-h*.4,.35,1.2)),e);u.position.set(0,i+h*.35+.18,12.2-h*.9),u.receiveShadow=!0,t.add(u)}return t}createGrandWaterfalls(){const t=new he;t.name="GrandWaterfalls";const e=this.streamMaterial({uFlowSpeed:3.4,uFoam:.9,uInvert:1,uWhiteness:.9,uSideFade:1}),n=this.streamMaterial({uFlowSpeed:1.15,uFoam:.8,uRadial:1,uWhiteness:.14}),i=this.sharedStone(),s=this.wetStone(),o=this.geo(new Cn(1,1)),a=this.stoneSlots(new Fe(this.geo(new Cn(1,0)),s,90),new Fe(o,i,26));for(const[f,g,_]of[[-21,4.5,9],[-15,3.6,7.5]]){const m=this.localTerrainHeightAt(f,18),p=new At(this.geo(new Gr(g,_,8,24)),e);p.position.set(f,m+_*.5+.25,16.2),t.add(p);for(let M=0;M<13;M++){const v=f+(M-6)*(g/11)+(this.random()-.5)*.5,T=12.2+this.random()*2.8,A=M%3,b=this.localTerrainHeightAt(v,T)+_*(.24+A*.3)+.5;this.addStone(a[1],v,T,b,1+this.random()*.55,.12,1.45)}const x=new At(this.geo(new ne(g+1.2,.65,2.2)),i);x.position.set(f,m+_+.45,14.9),x.castShadow=!0,t.add(x);for(let M=0;M<4;M++){const v=f-g*.45+M*g/3.2;this.addStone(a[0],v,15.1,m+_+.55,.24+this.random()*.16,-.1)}for(let M=0;M<7;M++){const v=f+(this.random()-.5)*(g+3.2),T=17.4+this.random()*3.4;this.addStone(a[0],v,T,this.localTerrainHeightAt(v,T)+.34,.3+this.random()*.3,.32)}}const l=this.geo(new Er(7,48));l.rotateX(-Math.PI/2);const c=l.attributes.position;for(let f=0;f<c.count;f++){const g=c.getX(f)-18,_=c.getZ(f)+18;c.setY(f,this.localTerrainHeightAt(g,_)+.3)}l.computeVertexNormals();const h=new At(l,n);h.position.set(-18,0,18),t.add(h);for(let f=0;f<34;f++){const g=f/34*Math.PI*2+this.random()*.12,_=6.5+this.random()*1.9,m=-18+Math.cos(g)*_,p=18+Math.sin(g)*_,x=this.random()>.7;this.addStone(x?a[1]:a[0],m,p,this.localTerrainHeightAt(m,p)+.3,x?.45+this.random()*.3:.2+this.random()*.22,.3)}for(let f=0;f<6;f++){const g=this.random()*Math.PI*2,_=1.4+this.random()*3.4,m=-18+Math.cos(g)*_,p=18+Math.sin(g)*_;this.addStone(a[0],m,p,this.localTerrainHeightAt(m,p)+.36,.16+this.random()*.18,-.2)}for(const f of this.finishStones(...a))t.add(f);const u=this.geo(new Ee);u.setAttribute("position",new Kt(new Float32Array(270),3));const d=new lc({color:15335418,size:1.6,map:Ff(this.materials),transparent:!0,opacity:.5,depthWrite:!1,sizeAttenuation:!0,blending:Cr});return this.materials.push(d),this.spray=new Pf(u,d),this.spray.frustumCulled=!1,t.add(this.spray),t}createMeanderingRiver(){const t=new he;t.name="MeanderingRiver";const e=this.streamMaterial({uFlowSpeed:1.35,uFoam:.4}),n=[],i=[],s=[],o=170,a=8;for(let c=0;c<=o;c++){const h=c/o,u=this.riverCurve.getPoint(h),d=this.riverCurve.getTangent(h),f=new Tt(-d.z,d.x).normalize(),g=this.riverHalfWidth(h)*(1+Math.sin(h*23)*.07);for(let _=0;_<=a;_++){const m=_/(a/2)-1,p=u.x+f.x*m*g,x=u.z+f.y*m*g,M=this.localTerrainHeightAt(p,x)+this.riverSurfaceLift(Math.abs(m));n.push(p,M,x),i.push(_/a,h*7)}if(c<o)for(let _=0;_<a;_++){const m=c*(a+1)+_,p=a+1;s.push(m,m+1,m+p,m+1,m+p+1,m+p)}}const l=this.geo(new Ee);return l.setAttribute("position",new Kt(n,3)),l.setAttribute("uv",new Kt(i,2)),l.setIndex(s),l.computeVertexNormals(),t.add(new At(l,e)),t.add(this.createRiverStones()),t}createRiverStones(){const t=new he;t.name="RiverStones";const e=new Fe(this.geo(new Wi(1,1)),this.gravelStone(),320),n=new Fe(this.geo(new Cn(1,0)),this.gravelStone(),150),i=new Fe(this.geo(new Cn(1,1)),this.sharedStone(),34),s=this.stoneSlots(e,n,i),o=l=>{const c=this.riverCurve.getPoint(l),h=this.riverCurve.getTangent(l);return{point:c,normal:new Tt(-h.z,h.x).normalize(),halfWidth:this.riverHalfWidth(l)}};for(let l=0;l<210;l++){const c=.03+this.random()*.94,{point:h,normal:u,halfWidth:d}=o(c),f=this.random()>.84,g=f?(this.random()-.5)*.7:(this.random()>.5?1:-1)*(.55+this.random()*.5),_=h.x+u.x*g*d,m=h.z+u.y*g*d,p=this.localTerrainHeightAt(_,m)+this.riverSurfaceLift(Math.abs(g)),x=this.random(),M=x>.93?s[2]:x>.55?s[1]:s[0],v=M===s[2],T=M===s[1],A=v?.45+this.random()*.35:T?.28+this.random()*.22:.14+this.random()*.12;this.addStone(M,_,m,p+.05,A,f?-.5:.45,v?.62:T?.46:.34)}for(let l=0;l<12;l++){const c=.06+l/12*.9+this.random()*.03,{point:h,normal:u,halfWidth:d}=o(c),f=(l%2===0?1:-1)*(.68+this.random()*.22),g=h.x+u.x*f*d,_=h.z+u.y*f*d,m=new Tt(h.x-g,h.z-_).normalize();for(let p=0;p<14;p++){const x=this.random(),M=g+m.x*(this.random()-.5)*4.2+u.x*(x-.5)*1.9,v=_+m.y*(this.random()-.5)*4.2+u.y*(x-.5)*1.9,T=this.localTerrainHeightAt(M,v);this.addStone(s[0],M,v,T+.14,.12+this.random()*.14,.28,.3)}}const a=this.riverCurve.getPoint(.985);for(let l=0;l<16;l++){const c=a.x+(this.random()-.5)*7.5,h=a.z+(this.random()-.5)*6,u=this.localTerrainHeightAt(c,h);this.addStone(this.random()>.55?s[1]:s[0],c,h,u+.2,.2+this.random()*.3,.22)}for(const l of this.finishStones(...s))l.frustumCulled=!1,l===e&&(l.castShadow=!1),t.add(l);return t}createTimberBridge(){const t=new he;t.name="TimberBridge";const e=this.mat(7877903,.75),n=.34,i=this.riverCurve.getPoint(n),s=this.riverCurve.getTangent(n),o=Math.atan2(-s.z,s.x),a=this.riverHalfWidth(n),l=a*2+3.4,h=this.localTerrainHeightAt(i.x,i.z)+this.riverSurfaceLift(0)+1.55,u=(_,m)=>new Tt(i.x+Math.sin(o)*_+Math.cos(o)*m,i.z+Math.cos(o)*_-Math.sin(o)*m),d=new At(this.geo(new ne(2.6,.32,l)),e);d.position.set(i.x,h,i.z),d.rotation.y=o,d.castShadow=!0,t.add(d);for(const _ of[-1.2,1.2]){const m=new At(this.geo(new ne(.14,.85,l)),e),p=u(0,_);m.position.set(p.x,h+.5,p.y),m.rotation.y=o,t.add(m)}for(const _ of[-a*.62,a*.62])for(const m of[-.9,.9]){const p=new At(this.geo(new Ce(.22,.28,3.4,6)),e),x=u(_,m);p.position.set(x.x,h-1.25,x.y),p.castShadow=!0,t.add(p)}const f=this.geo(new Cn(1,0)),g={mesh:new Fe(f,this.sharedStone(),12),index:0};for(const _ of[-1,1])for(let m=0;m<6;m++){const p=u(_*(a+.7),(m/5-.5)*2.6);this.addStone(g,p.x,p.y,this.localTerrainHeightAt(p.x,p.y)+.42,.26+this.random()*.2,.3)}for(const _ of this.finishStones(g))t.add(_);return t}createPier(){const t=new he;t.name="OceanPier";const e=this.mat(9065525,.72);for(let s=0;s<11;s++){const o=new At(this.geo(new Ce(.26,.32,3.8,6)),e);o.position.set(-52+s*1.5,1.9,-16),t.add(o)}const n=new At(this.geo(new ne(17.5,.42,2.8)),e);n.position.set(-45,3.4,-16),n.rotation.y=.12,n.castShadow=!0,t.add(n);const i=new At(this.geo(new Cn(.5)),this.mat(16707722,.2));return i.position.set(-53.5,4.3,-16),t.add(i),t}createBeachPalms(){const t=new he,e=this.foliageMaterial(7885624,.05),n=this.foliageMaterial(1483594,.16),i=this.geo(new Ce(.24,.42,5.8,7)),s=this.geo(new _s(2.8,1.3,7)),o=this.opts.palmCount,a=new Fe(i,e,o),l=new Fe(s,n,o),c=new Bt,h=new zn,u=new tn;for(let d=0;d<o;d++){const f=this.randomClearing(48,64,4),g=f.x,_=f.y,m=Math.atan2(_,g),p=this.localTerrainHeightAt(g,_),x=.2+this.random()*.18;u.set(Math.sin(m)*x,m,Math.cos(m)*x),h.setFromEuler(u),c.compose(new D(g,p+2.6,_),h,new D(1,1+this.random()*.35,1)),a.setMatrixAt(d,c),c.compose(new D(g,p+5.5,_),new zn,new D(1.3+this.random()*.4,1,1.3+this.random()*.4)),l.setMatrixAt(d,c)}return a.castShadow=l.castShadow=!0,t.add(a,l),t}createCanopyForest(){const t=new he,e=this.foliageMaterial(6045747,.04),n=this.foliageMaterial(2278750,.14),i=this.geo(new Ce(.3,.52,4.2,6)),s=this.geo(new Cn(2.5,1)),o=this.opts.treeCount,a=new Fe(i,e,o),l=new Fe(s,n,o),c=new Bt;for(let h=0;h<o;h++){const u=this.randomClearing(18,50,4.5),d=u.x,f=u.y,g=this.localTerrainHeightAt(d,f),_=.8+this.random()*.65;c.makeTranslation(d,g+2.1*_,f).scale(new D(_,_,_)),a.setMatrixAt(h,c),c.makeTranslation(d,g+4.5*_,f).scale(new D(_*1.15,_*.95,_*1.15)),l.setMatrixAt(h,c)}return a.castShadow=l.castShadow=!0,t.add(a,l),t}createHighlandTrees(){const t=new he,e=45,n=this.foliageMaterial(4863784,.03),i=this.foliageMaterial(1467700,.1),s=this.geo(new Ce(.22,.38,3.8,6)),o=this.geo(new _s(1.9,4.4,7)),a=new Fe(s,n,e),l=new Fe(o,i,e),c=new Bt;for(let h=0;h<e;h++){const u=this.randomClearing(10,30,3.4),d=u.x,f=u.y,g=this.localTerrainHeightAt(d,f),_=.7+this.random()*.55;c.makeTranslation(d,g+1.8*_,f).scale(new D(_,_,_)),a.setMatrixAt(h,c),c.makeTranslation(d,g+4.2*_,f).scale(new D(_,_,_)),l.setMatrixAt(h,c)}return a.castShadow=l.castShadow=!0,t.add(a,l),t}createTropicalShrubs(){const t=new he,e=this.foliageMaterial(8702998,.18),n=this.mat(16007006,.4),i=this.geo(new Wi(1.1,1)),s=this.geo(new Cn(.4)),o=this.opts.shrubCount,a=new Fe(i,e,o),l=new Fe(s,n,o),c=new Bt;for(let h=0;h<o;h++){const u=this.randomClearing(12,57,2.8),d=u.x,f=u.y,g=this.localTerrainHeightAt(d,f),_=.55+this.random()*.7;c.makeTranslation(d,g+.5*_,f).scale(new D(_*1.3,_*.75,_*1.3)),a.setMatrixAt(h,c),c.makeTranslation(d,g+1*_,f).scale(new D(_,_,_)),l.setMatrixAt(h,c)}return t.add(a,l),t}createMossyBoulders(){const t=this.opts.rockCount,e=new Fe(this.geo(new Cn(1.5,1)),this.sharedStone(),t),n=new Bt;for(let i=0;i<t;i++){const s=this.randomClearing(14,62,3.5),o=s.x,a=s.y,l=this.localTerrainHeightAt(o,a),c=.6+this.random()*1.3;n.makeTranslation(o,l+.5*c,a).scale(new D(c*1.25,c*.8,c*1.2)),e.setMatrixAt(i,n)}return e.castShadow=!0,e.receiveShadow=!0,e}createCoastalMonuments(){const t=new he;t.name="CoastalStoneMonuments";const e=this.sharedStone(),n=this.mat(4945491),i=this.geo(new _s(1,1,7));for(const[h,u,d]of[[-44,-36,7],[48,-24,6],[31,55,5]])for(let f=0;f<d;f++){const g=f*2.39996,_=h+Math.cos(g)*(1.5+f*1.15),m=u+Math.sin(g)*(1.5+f*1.15),p=3.5+f*17%11,x=new At(i,f%4===0?n:e);x.scale.set(1.8+f%3*.5,p,1.8+f%3*.5),x.position.set(_,this.localTerrainHeightAt(_,m)+p*.47,m),x.rotation.z=Math.sin(g)*.12,x.castShadow=!0,t.add(x)}const s=31,o=-28,a=this.localTerrainHeightAt(s,o);for(const[h,u,d]of[[8,.8,.4],[6.4,.65,1.1]]){const f=new At(this.geo(new Ce(h,h+.3,u,12)),e);f.position.set(s,a+d,o),f.receiveShadow=!0,t.add(f)}const l=new At(this.geo(new Xi(5.5,.55,7,32)),n);l.position.set(s,a+1.68,o),l.rotation.x=Math.PI/2,t.add(l);const c=new At(this.geo(new Er(5.4,32)),new Xe({vertexShader:Pa,fragmentShader:Da,uniforms:{uTime:{value:0},uPool:{value:1},uSunDirection:{value:this.sunDirection}},transparent:!0}));return this.materials.push(c.material),c.rotation.x=-Math.PI/2,c.position.set(s,a+1.55,o),t.add(c),t}createClouds(){const t=new he,e=new Xe({vertexShader:jx,fragmentShader:Kx,uniforms:{uTime:{value:0},uSunDirection:{value:this.sunDirection}},transparent:!0,depthWrite:!1});this.materials.push(e);const n=11,i=this.opts.cloudCount,s=new Fe(this.geo(new Wi(1,2)),e,i*n);s.frustumCulled=!1;const o=new Bt,a=new D,l=new zn,c=new tn,h=new D;let u=0;for(let d=0;d<i;d++){const f=d/i*Math.PI*2+(this.random()-.5)*.5,g=74+this.random()*112,_=Math.cos(f)*g,m=Math.sin(f)*g,p=31+this.random()*27,x=4.2+this.random()*6,M=this.random()*Math.PI,v=6+Math.floor(this.random()*5);for(let T=0;T<v&&u<s.count;T++){const A=v===1?0:T/(v-1)*2-1,b=(1-Math.abs(A)*.6)*(.8+this.random()*.5);a.set(_+Math.cos(M)*A*x+(this.random()-.5)*1.8,p+b*1.35+(this.random()-.5)*.8,m+Math.sin(M)*A*x+(this.random()-.5)*1.8),h.set(b*2.9+.9,b*1.5+.5,b*2.4+.8),c.set(0,this.random()*Math.PI,0),l.setFromEuler(c),o.compose(a,l,h),s.setMatrixAt(u++,o)}}return s.count=u,s.instanceMatrix.needsUpdate=!0,t.add(s),t.name="CumulusClouds",t}foliageMaterial(t,e=.12){const n=new Xe({vertexShader:Gx,fragmentShader:Wx,uniforms:{uTime:{value:0},uWind:{value:e},uColor:{value:new St(t)}}});return this.foliageMaterials.push(n),this.materials.push(n),n}update(t){if(this.foliageMaterials.forEach(e=>{e.uniforms.uTime.value=t}),this.root.traverse(e=>{var i;const n=e;if(n.material&&!Array.isArray(n.material)){const s=n.material;(i=s.uniforms)!=null&&i.uTime&&(s.uniforms.uTime.value=t)}}),this.clouds&&(this.clouds.rotation.y=t*.0016),this.spray){const e=this.spray.geometry.getAttribute("position");for(let n=0;n<e.count;n++){const i=(t*(.36+n%7*.035)+n*.619)%1,s=n*2.39996,o=1+i*5,a=-18+Math.cos(s)*o,l=18+Math.sin(s)*o;e.setXYZ(n,a,this.localTerrainHeightAt(a,l)+.4+i*(2+n%4),l)}e.needsUpdate=!0}}dispose(){this.geometries.forEach(t=>t.dispose()),this.materials.forEach(t=>t.dispose())}}function Qx(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Ee;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Yh(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Yh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Yh(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Re(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const Ve=2,de=1.26,hi=.7,Oe=de/2,xn=.075,ss=.6,tM=-2.16,eM=-1.98,$h=new D,nM=new tn,Zh=new zn,jh=new D;function Jt(r,t,e,n=0,i=0,s=0,o=1,a=1,l=1){return $h.set(r,t,e),Zh.setFromEuler(nM.set(n,i,s)),jh.set(o,a,l),new Bt().compose($h,Zh,jh)}function ui(r){const t=r.some(i=>i.tint!==void 0),e=r.map(i=>{const s=i.geometry.clone().applyMatrix4(i.matrix),o=s.attributes.position.count;if(!s.index){const a=new Uint32Array(o);for(let l=0;l<o;l++)a[l]=l;s.setIndex(new Re(a,1))}if(t){const a=i.tint??new St(1,1,1),l=new Float32Array(o*3);for(let c=0;c<o;c++)l[c*3]=a.r,l[c*3+1]=a.g,l[c*3+2]=a.b;s.setAttribute("color",new Re(l,3))}return s}),n=Qx(e,!1);return e.forEach(i=>i.dispose()),n.computeBoundingSphere(),n}function iM(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class rM{constructor(){et(this,"effects",new he);et(this,"geometries",[]);et(this,"materials",[]);et(this,"textures",[]);et(this,"entries",new Map);et(this,"model");et(this,"woodMaterial");et(this,"steelMaterial");et(this,"brightMaterial");et(this,"velvetMaterial");et(this,"treasureMaterial");et(this,"halo");et(this,"haloMaterial");et(this,"shaft");et(this,"shaftMaterial");et(this,"sparks");et(this,"sparkMaterial");et(this,"sparkPositions");et(this,"sparkVelocities");et(this,"light");et(this,"sparkCount",170);et(this,"sparkLife",0);et(this,"sparkDuration",2.6);et(this,"lightState",{intensity:0});this.initMaterials(),this.initModel(),this.initEffects()}remember(t){return this.geometries.push(t),t}initMaterials(){const t=Do("chestWood"),e=Do("metal");this.textures.push(t.map,t.normalMap,t.roughnessMap),this.textures.push(e.map,e.normalMap,e.roughnessMap),this.woodMaterial=new di({map:t.map,normalMap:t.normalMap,roughnessMap:t.roughnessMap,color:15979430,roughness:.72,metalness:.04,normalScale:new Tt(.6,.6)}),this.steelMaterial=new di({normalMap:e.normalMap,roughnessMap:e.roughnessMap,color:3753050,roughness:.38,metalness:.9,normalScale:new Tt(.3,.3)}),this.brightMaterial=new di({map:e.map,normalMap:e.normalMap,roughnessMap:e.roughnessMap,color:16767375,roughness:.26,metalness:.95,normalScale:new Tt(.24,.24)}),this.velvetMaterial=new di({color:7150118,roughness:.96,metalness:0}),this.treasureMaterial=new di({vertexColors:!0,color:16777215,roughness:.22,metalness:.86,emissive:10116107,emissiveIntensity:.22}),this.materials.push(this.woodMaterial,this.steelMaterial,this.brightMaterial,this.velvetMaterial,this.treasureMaterial)}initModel(){const t=hi-xn,e=[],n=[],i=[],s=[],o=[],a=[],l=[],c=[],h=new Dr(.046,9,7),u=(v,T,A,b)=>{v.push({geometry:h,matrix:Jt(T,A,b)})};e.push({geometry:new ne(Ve,xn,de),matrix:Jt(0,xn/2,0)});for(const v of[-1,1])e.push({geometry:new ne(Ve,t,xn),matrix:Jt(0,xn+t/2,v*(de/2-xn/2))}),e.push({geometry:new ne(.16,t,.02),matrix:Jt(0,xn+t/2,v*(de/2+.006))});for(const v of[-1,1])e.push({geometry:new ne(xn,t,de-xn*2),matrix:Jt(v*(Ve/2-xn/2),xn+t/2,0)});n.push({geometry:new ne(Ve+.07,.15,de+.07),matrix:Jt(0,.075,0)}),n.push({geometry:new ne(Ve+.05,.11,de+.05),matrix:Jt(0,hi-.055,0)});for(const v of[-1,1])n.push({geometry:new ne(.13,hi+.02,de+.04),matrix:Jt(v*ss,hi/2,0)}),n.push({geometry:new ne(.075,.22,.26),matrix:Jt(v*(Ve/2+.03),.44,0)});for(const v of[-1,1])for(const T of[-1,1])n.push({geometry:new ne(.15,hi+.02,.15),matrix:Jt(v*(Ve/2-.06),hi/2,T*(de/2-.06))});n.push({geometry:new ne(.36,.32,.06),matrix:Jt(0,.3,de/2+.075)}),i.push({geometry:new ne(.19,.17,.11),matrix:Jt(0,.2,de/2+.11)}),i.push({geometry:new Xi(.062,.019,8,16),matrix:Jt(0,.3,de/2+.11)}),i.push({geometry:new Xi(.078,.02,9,18),matrix:Jt(0,.39,de/2+.108,Math.PI/2)});for(const v of[-1,1])i.push({geometry:new Xi(.16,.036,8,18),matrix:Jt(v*(Ve/2+.085),.29,0,.2,Math.PI/2)});for(const v of[-1,1]){for(const T of[-.86,-.43,0,.43,.86])u(i,T,.075,v*(de/2+.048));for(const T of[-.86,0,.86])u(i,T,hi-.055,v*(de/2+.032));for(const T of[-ss,ss])for(const A of[.2,.52])u(i,T,A,v*(de/2+.026));for(const T of[-.94,.94])for(const A of[.26,.56])u(i,T,A,v*(de/2+.018))}for(const v of[-1,1])for(const T of[-.42,0,.42])u(i,v*(Ve/2+.048),.075,T);s.push({geometry:new ne(Ve-.2,.07,de-.2),matrix:Jt(0,xn+.035,0)});const d=new Ce(Oe,Oe,Ve-.02,26,1,!1,0,Math.PI);d.rotateZ(Math.PI/2),o.push({geometry:d,matrix:Jt(0,0,Oe)});const f=new Ce(Oe+.032,Oe+.032,1,26,1,!1,0,Math.PI);f.rotateZ(Math.PI/2);for(const v of[-1,1])a.push({geometry:f,matrix:Jt(v*(Ve/2-.075),0,Oe,0,0,0,.15,1,1)}),a.push({geometry:f,matrix:Jt(v*ss,0,Oe,0,0,0,.13,1,1)});for(const v of[-1,1])a.push({geometry:new ne(Ve+.06,.11,.06),matrix:Jt(0,-.02,Oe+v*(Oe-.02))});for(const v of[-1,1])a.push({geometry:new ne(.06,.11,de-.04),matrix:Jt(v*(Ve/2+.005),-.02,Oe)});a.push({geometry:new ne(.21,.44,.05),matrix:Jt(0,-.19,de+.02)}),l.push({geometry:new Xi(.052,.018,8,14),matrix:Jt(0,-.34,de+.055,0,Math.PI/2)});for(const v of[-1,1]){for(let T=0;T<5;T++){const A=(T+.5)*(Math.PI/5);u(l,v*(Ve/2-.075),Math.sin(A)*(Oe+.038),Oe-Math.cos(A)*(Oe+.038))}for(let T=0;T<4;T++){const A=(T+.6)*(Math.PI/4.8);u(l,v*ss,Math.sin(A)*(Oe+.038),Oe-Math.cos(A)*(Oe+.038))}u(l,v*.075,-.12,de+.05)}const g=new St(16764749),_=new St(14196774),m=new St(16773288);c.push({geometry:new Dr(.5,18,9,0,Math.PI*2,0,Math.PI*.52),matrix:Jt(0,.06,0,0,0,0,1.55,.66,1),tint:_});const p=new Ce(.112,.112,.026,12),x=iM(20261031);for(let v=0;v<30;v++){const T=x()*Math.PI*2,A=.25+x()*.7;c.push({geometry:p,matrix:Jt(Math.cos(T)*A*.78,.1+Math.max(0,.42-A*.3)+x()*.08,Math.sin(T)*A*.5,x()*.9-.45,x()*Math.PI,x()*.8-.4),tint:x()>.55?m:g})}for(let v=0;v<4;v++)c.push({geometry:new ne(.32,.08,.14),matrix:Jt((x()-.5)*1.1,.17+v*.035,(x()-.5)*.55,0,(x()-.5)*.8,(x()-.5)*.16),tint:_});const M=[1096065,3108845,15680580,11032055,2282478];for(let v=0;v<M.length;v++)c.push({geometry:new Wi(.078,0),matrix:Jt((x()-.5)*1.5,.2+x()*.12,(x()-.5)*.7,x()*Math.PI,x()*Math.PI,0),tint:new St(M[v])});for(let v=0;v<3;v++)c.push({geometry:new Dr(.072,10,8),matrix:Jt((x()-.5)*1.3,.21+x()*.1,(x()-.5)*.6),tint:new St(16184298)});this.model={baseWood:this.remember(ui(e)),baseSteel:this.remember(ui(n)),baseBright:this.remember(ui(i)),baseVelvet:this.remember(ui(s)),lidWood:this.remember(ui(o)),lidSteel:this.remember(ui(a)),lidBright:this.remember(ui(l)),treasure:this.remember(ui(c))}}initEffects(){const t=new hc(.6,1.85,44,2);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=new Float32Array(e.count*4);for(let l=0;l<e.count;l++){const c=Math.hypot(e.getX(l),e.getZ(l)),h=1-$e.smoothstep(c,.58,1.85);n[l*4]=1,n[l*4+1]=.82,n[l*4+2]=.4,n[l*4+3]=h*h}t.setAttribute("color",new Re(n,4)),this.haloMaterial=new Co({vertexColors:!0,transparent:!0,opacity:0,blending:Cr,depthWrite:!1,side:cn}),this.halo=new At(this.remember(t),this.haloMaterial),this.halo.position.y=.05,this.halo.visible=!1,this.halo.renderOrder=3;const i=new Ce(1,.32,5.2,24,1,!0),s=i.attributes.position,o=new Float32Array(s.count*4);for(let l=0;l<s.count;l++){const c=$e.clamp((s.getY(l)+2.6)/5.2,0,1);o[l*4]=1,o[l*4+1]=.87-c*.1,o[l*4+2]=.55-c*.2,o[l*4+3]=(1-c)*(1-c)*.9}i.setAttribute("color",new Re(o,4)),this.shaftMaterial=new Co({vertexColors:!0,transparent:!0,opacity:0,blending:Cr,depthWrite:!1,side:cn}),this.shaft=new At(this.remember(i),this.shaftMaterial),this.shaft.position.y=2.9,this.shaft.visible=!1,this.shaft.renderOrder=4,this.sparkPositions=new Float32Array(this.sparkCount*3),this.sparkVelocities=new Float32Array(this.sparkCount*3);const a=new Ee;a.setAttribute("position",new Re(this.sparkPositions,3)),this.sparkMaterial=new lc({color:16771496,size:.17,map:Ff(this.textures),transparent:!0,opacity:0,depthWrite:!1,blending:Cr}),this.sparks=new Pf(a,this.sparkMaterial),this.sparks.frustumCulled=!1,this.sparks.visible=!1,this.sparks.renderOrder=5,this.geometries.push(a),this.light=new Cx(16762995,0,18,2),this.light.position.set(0,.62,0),this.effects.name="ChestRevealEffects",this.effects.add(this.halo,this.shaft,this.sparks,this.light),this.materials.push(this.haloMaterial,this.shaftMaterial,this.sparkMaterial)}build(t){const e=new he;e.name=`TreasureChest_${t.id}`,e.position.copy(t.position),e.rotation.y=t.rotationY;const n=new he,i=new At(this.model.baseWood,this.woodMaterial);i.castShadow=!0,i.receiveShadow=!0;const s=new At(this.model.baseSteel,this.steelMaterial);s.castShadow=!0,s.receiveShadow=!0;const o=new At(this.model.baseBright,this.brightMaterial);o.receiveShadow=!0;const a=new At(this.model.baseVelvet,this.velvetMaterial),l=new At(this.model.treasure,this.treasureMaterial);l.position.set(0,.04,0),n.add(i,s,o,a,l);const c=new he;c.position.set(0,hi,-de/2);const h=new At(this.model.lidWood,this.woodMaterial);h.castShadow=!0;const u=new At(this.model.lidSteel,this.steelMaterial);u.castShadow=!0;const d=new At(this.model.lidBright,this.brightMaterial);c.add(h,u,d),e.add(n,c);const f={root:e,base:n,lid:c,treasure:l};return this.entries.set(t.id,f),f}focusOn(t){this.effects.position.copy(t.root.position),this.effects.rotation.y=t.root.rotation.y}open(t){const e=this.entries.get(t);if(!e)return;this.focusOn(e);const n=ce.timeline();n.to(e.lid.rotation,{x:tM,duration:.62,ease:"power3.out"},0),n.to(e.lid.rotation,{x:eM,duration:.4,ease:"sine.inOut"},.62),n.to(e.treasure.position,{y:.34,duration:1,ease:"back.out(1.5)"},.08),n.to(e.treasure.rotation,{y:.32,duration:2.4,ease:"power1.out"},.08),n.to(e.treasure.scale,{x:1.1,y:1.06,z:1.1,duration:1,ease:"power2.out"},.08),n.to(this.treasureMaterial,{emissiveIntensity:1.05,duration:.5,ease:"power2.out"},.12),n.to(this.treasureMaterial,{emissiveIntensity:.5,duration:1.6,ease:"power1.inOut"},.7),this.halo.visible=!0,this.halo.scale.set(.45,.45,.45),n.fromTo(this.haloMaterial,{opacity:0},{opacity:.95,duration:.3,ease:"power2.out"},.05),n.to(this.halo.scale,{x:1.35,y:1.1,z:1.35,duration:1.1,ease:"power2.out"},.05),n.to(this.haloMaterial,{opacity:.42,duration:1.4,ease:"power1.inOut"},.5),this.shaft.visible=!0,this.shaft.scale.set(.7,.35,.7),n.to(this.shaftMaterial,{opacity:.85,duration:.34,ease:"power2.out"},.06),n.to(this.shaft.scale,{x:1.1,y:1,z:1.1,duration:.9,ease:"power2.out"},.06),n.to(this.shaftMaterial,{opacity:.3,duration:1.5,ease:"power1.inOut"},.75),n.to(this.lightState,{intensity:30,duration:.26,ease:"power2.out"},.06),n.to(this.lightState,{intensity:11,duration:1.7,ease:"power1.inOut"},.4),n.add(()=>this.emitSparks(),.1)}emitSparks(){for(let t=0;t<this.sparkCount;t++){const e=Math.random()*Math.PI*2,n=.2+Math.random()*.7;this.sparkPositions[t*3]=Math.cos(e)*n*.8,this.sparkPositions[t*3+1]=.24+Math.random()*.2,this.sparkPositions[t*3+2]=Math.sin(e)*n*.5;const i=.6+Math.random()*1.5;this.sparkVelocities[t*3]=Math.cos(e)*i,this.sparkVelocities[t*3+1]=2.2+Math.random()*3.2,this.sparkVelocities[t*3+2]=Math.sin(e)*i}this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.visible=!0,this.sparkMaterial.opacity=1,this.sparkLife=this.sparkDuration}highlight(t,e){const n=this.entries.get(t);n&&(this.focusOn(n),ce.killTweensOf(this.haloMaterial),e?(this.halo.visible=!0,this.halo.scale.set(1,1,1),ce.to(this.haloMaterial,{opacity:.5,duration:.45})):ce.to(this.haloMaterial,{opacity:0,duration:.4}))}update(t,e){if(this.light.intensity=this.lightState.intensity*(.9+.1*Math.sin(e*3.1)),this.sparkLife>0){this.sparkLife=Math.max(0,this.sparkLife-t);for(let i=0;i<this.sparkCount;i++){const s=i*3;this.sparkVelocities[s+1]-=7.2*t,this.sparkPositions[s]+=this.sparkVelocities[s]*t,this.sparkPositions[s+1]+=this.sparkVelocities[s+1]*t,this.sparkPositions[s+2]+=this.sparkVelocities[s+2]*t,this.sparkPositions[s+1]<.04&&(this.sparkPositions[s+1]=.04,this.sparkVelocities[s+1]*=-.34,this.sparkVelocities[s]*=.7,this.sparkVelocities[s+2]*=.7)}this.sparks.geometry.attributes.position.needsUpdate=!0;const n=this.sparkLife/this.sparkDuration;this.sparkMaterial.opacity=n<.45?n/.45:1,this.sparkLife===0&&(this.sparks.visible=!1)}this.shaft.visible&&(this.shaft.rotation.y+=t*.4)}resetAll(){this.entries.forEach(t=>{ce.killTweensOf(t.lid.rotation),ce.killTweensOf(t.treasure.position),ce.killTweensOf(t.treasure.rotation),ce.killTweensOf(t.treasure.scale),t.lid.rotation.set(0,0,0),t.treasure.position.set(0,.04,0),t.treasure.rotation.set(0,0,0),t.treasure.scale.set(1,1,1)}),ce.killTweensOf(this.treasureMaterial),ce.killTweensOf(this.haloMaterial),ce.killTweensOf(this.shaftMaterial),ce.killTweensOf(this.halo.scale),ce.killTweensOf(this.shaft.scale),ce.killTweensOf(this.lightState),this.treasureMaterial.emissiveIntensity=.22,this.haloMaterial.opacity=0,this.shaftMaterial.opacity=0,this.halo.visible=!1,this.shaft.visible=!1,this.sparks.visible=!1,this.sparkMaterial.opacity=0,this.sparkLife=0,this.lightState.intensity=0,this.light.intensity=0}dispose(){this.geometries.forEach(t=>t.dispose()),this.textures.forEach(t=>t.dispose()),this.materials.forEach(t=>t.dispose()),this.entries.clear()}}class sM{constructor(){et(this,"scene");et(this,"camera");et(this,"renderer");et(this,"environment",new Jx({seed:88,treeCount:135,palmCount:50,shrubCount:90,rockCount:85,cloudCount:24}));et(this,"chestBuilder",new rM);et(this,"island",new he);et(this,"chests",new he);et(this,"trajectory",null);et(this,"unsubs",[]);et(this,"sky",null);et(this,"skyMaterial",null);et(this,"environmentTexture",null);et(this,"sunDirection",new D(...Uf).normalize())}init(t,e,n,i){this.scene=t,this.camera=e,this.renderer=n,this.setupSky(),t.add(this.island,this.chests,this.chestBuilder.effects),this.setupLighting(),this.environment.setChestClearings(i),this.island.add(this.environment.build()),i.forEach(s=>this.chests.add(this.chestBuilder.build(s).root)),this.setupEvents()}setupSky(){const t=new Dr(700,48,24),e=new Xe({vertexShader:Yx,fragmentShader:Zx,uniforms:{uSunDirection:{value:this.sunDirection},uTime:{value:0}},side:qe,depthWrite:!1,fog:!1});this.skyMaterial=e,this.sky=new At(t,e),this.sky.name="TropicalAtmosphere",this.sky.frustumCulled=!1,this.sky.renderOrder=-1,this.scene.add(this.sky)}setupLighting(){this.environmentTexture=Vx(),this.scene.environment=this.environmentTexture,this.scene.environmentIntensity=.5;const t=new Px(16773592,2.8);t.position.copy(this.sunDirection).multiplyScalar(112),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.5,t.shadow.camera.far=240,t.shadow.camera.left=-135,t.shadow.camera.right=135,t.shadow.camera.top=135,t.shadow.camera.bottom=-135,t.shadow.bias=-4e-4,t.shadow.normalBias=.025,t.shadow.radius=2,this.scene.add(t);const e=new bx(12837111,5797723,1.5),n=new Dx(15923711,.25);this.scene.add(e,n)}setupEvents(){this.unsubs.push(Si.on("CHEST_OPENED",t=>{this.openChest(t.chestId)}),Si.on("CHEST_ARRIVED",t=>{this.highlightChest(t.chestId,!0)}))}update(t,e){this.sky&&this.sky.position.copy(this.camera.position),this.skyMaterial&&(this.skyMaterial.uniforms.uTime.value=e),this.environment.update(e),this.chestBuilder.update(t,e)}openChest(t){this.chestBuilder.open(t)}highlightChest(t,e){this.chestBuilder.highlight(t,e)}setBeamTarget(t,e=1){}setTrajectoryLine(t){this.trajectory&&this.scene.remove(this.trajectory),this.trajectory=t,this.scene.add(t)}setTrajectoryVisible(t){this.trajectory&&(this.trajectory.visible=t)}resetAll(){this.chestBuilder.resetAll()}dispose(){var t;this.unsubs.forEach(e=>e()),this.environment.dispose(),this.chestBuilder.dispose(),(t=this.environmentTexture)==null||t.dispose(),this.scene.environment=null,this.sky&&(this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose(),this.sky=null)}getTerrainHeightAt(t,e){return this.environment.getTerrainHeightAt(t,e)}getTerrainNormalAt(t,e){return this.environment.getTerrainNormalAt(t,e)}}class Kh{constructor(){et(this,"renderer");et(this,"scene");et(this,"camera");et(this,"clock",new Lx);et(this,"chestManager");et(this,"cameraDirector");et(this,"graphicsEngine");et(this,"allChests",[]);et(this,"btnStart");et(this,"startContainer");et(this,"btnSettings");et(this,"settingsPopover");et(this,"btnCloseSettings");et(this,"selectChest");et(this,"btnResetCam");et(this,"studentsPreview");et(this,"winnerBanner");et(this,"winnerNameEl");et(this,"winnerChestIdEl");et(this,"btnCloseWinner");et(this,"goldenFlash");et(this,"animate",()=>{requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.graphicsEngine.update(t,e),this.renderer.render(this.scene,this.camera)});this.initDOM(),this.initThree(),this.initCore(),this.initUIEvents(),this.initGameEvents(),window.addEventListener("resize",()=>this.onResize()),window.__gameApp=this,this.animate()}initDOM(){this.btnStart=document.getElementById("btn-start"),this.startContainer=document.getElementById("start-container"),this.btnSettings=document.getElementById("btn-settings"),this.settingsPopover=document.getElementById("settings-popover"),this.btnCloseSettings=document.getElementById("btn-close-settings"),this.selectChest=document.getElementById("select-chest"),this.btnResetCam=document.getElementById("btn-reset-cam"),this.studentsPreview=document.getElementById("students-preview"),this.winnerBanner=document.getElementById("winner-banner"),this.winnerNameEl=document.getElementById("winner-name"),this.winnerChestIdEl=document.getElementById("winner-chest-id"),this.btnCloseWinner=document.getElementById("btn-close-winner"),this.goldenFlash=document.getElementById("golden-flash")}initThree(){const t=document.getElementById("app");this.scene=new Sx,this.scene.background=null,this.scene.fog=new ac(11193808,.0025),this.camera=new an(48,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,76,163),this.camera.lookAt(0,14,0),this.renderer=new Mx({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Ju,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=Be,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ju,t.innerHTML="",t.appendChild(this.renderer.domElement)}initCore(){this.graphicsEngine=new sM;const t=(e,n)=>this.graphicsEngine.getTerrainHeightAt(e,n);this.chestManager=new Nx,this.allChests=this.chestManager.generateChests(void 0,t),this.graphicsEngine.init(this.scene,this.camera,this.renderer,this.allChests),this.cameraDirector=new Bx(this.camera),this.cameraDirector.setHeightSampler(t),this.allChests.forEach(e=>{const n=document.createElement("option");n.value=e.id.toString(),n.textContent=`#${e.id} - ${e.student.name}`,this.selectChest.appendChild(n);const i=document.createElement("div");i.className="student-item";const s=e.index<7?"Bãi biển & Cột đá":e.index<14?"Ven rừng & Suối":e.index<21?"Rừng cây & Bể đá":"Cao nguyên & Đài cổ";i.innerHTML=`<span>#${e.id} ${e.student.name}</span> <span style="color:#34d399;">${s}</span>`,this.studentsPreview.appendChild(i)})}initUIEvents(){this.btnStart.addEventListener("click",()=>{if(this.cameraDirector.isCameraFlying())return;this.startContainer.classList.add("hidden"),this.settingsPopover.classList.add("hidden");const t=parseInt(this.selectChest.value,10),e=isNaN(t)?this.chestManager.selectWinner():this.chestManager.selectWinner(t);this.startFlight(e)}),this.btnSettings.addEventListener("click",t=>{t.stopPropagation(),this.settingsPopover.classList.toggle("hidden")}),this.btnCloseSettings.addEventListener("click",()=>{this.settingsPopover.classList.add("hidden")}),document.addEventListener("click",t=>{const e=t.target;!this.settingsPopover.contains(e)&&e!==this.btnSettings&&this.settingsPopover.classList.add("hidden")}),this.btnResetCam.addEventListener("click",()=>{this.cameraDirector.resetToOverview(!1),this.winnerBanner.classList.add("hidden"),this.startContainer.classList.remove("hidden"),this.settingsPopover.classList.add("hidden"),this.graphicsEngine.resetAll()}),this.btnCloseWinner.addEventListener("click",()=>{this.winnerBanner.classList.add("hidden"),this.cameraDirector.resetToOverview(!1),this.startContainer.classList.remove("hidden"),this.graphicsEngine.resetAll()})}initGameEvents(){Si.on("CHEST_ARRIVED",({chestId:t,studentName:e})=>{this.winnerNameEl.textContent=e,this.winnerChestIdEl.textContent=`Rương May Mắn #${t}`}),Si.on("CHEST_OPENED",()=>{ce.to(this.goldenFlash,{opacity:1,duration:.2,ease:"power2.in",onComplete:()=>{ce.delayedCall(.9,()=>{ce.to(this.goldenFlash,{opacity:0,duration:.9,ease:"power2.out"}),this.winnerBanner.classList.remove("hidden")})}})})}startFlight(t){this.winnerBanner.classList.add("hidden");const e=this.allChests.map(n=>n.student);Si.emit("GAME_START",{students:e}),this.cameraDirector.flyToChest(t,this.allChests)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}function Jh(){var o,a;const r=navigator.userAgent||navigator.vendor||"";if(!/FBAN|FBAV|FB_IAB|FBIOS|Messenger|Zalo|Instagram|TikTok|Line/i.test(r))return;const e=window.location.href,n=/Android/i.test(r),i=e.replace(/^https?:\/\//,"");n?window.location.href=`intent://${i}#Intent;scheme=https;package=com.android.chrome;end;`:window.location.href=`googlechrome://${i}`;const s=document.createElement("div");s.id="inapp-browser-prompt",s.className="inapp-prompt",s.innerHTML=`
    <div class="inapp-prompt-content">
      <span>🚀 Đang mở trong Messenger. Bấm để mở bằng <b>Google Chrome</b> cho trải nghiệm 3D mượt nhất!</span>
      <button id="btn-open-external" class="inapp-btn">Mở bằng Google</button>
      <button id="btn-close-inapp" class="inapp-close" aria-label="Đóng">✕</button>
    </div>
  `,document.body.prepend(s),(o=document.getElementById("btn-open-external"))==null||o.addEventListener("click",()=>{n?window.location.href=`intent://${i}#Intent;scheme=https;package=com.android.chrome;end;`:window.location.href=`googlechrome://${i}`}),(a=document.getElementById("btn-close-inapp"))==null||a.addEventListener("click",()=>{s.remove()})}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{Jh(),new Kh}):(Jh(),new Kh);
