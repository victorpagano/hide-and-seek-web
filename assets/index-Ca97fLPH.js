var Fu=i=>{throw TypeError(i)};var ws=(i,e,t)=>e.has(i)?Fu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function Ou(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="170",Bu=0,Cc=1,zu=2,Zl=1,Hu=2,qn=3,_i=0,tn=1,$n=2,fi=0,us=1,Ac=2,wc=3,Rc=4,Gu=5,Ri=100,Vu=101,Wu=102,Xu=103,qu=104,$u=200,Yu=201,ju=202,Ku=203,Yo=204,jo=205,Zu=206,Ju=207,Qu=208,ed=209,td=210,nd=211,id=212,sd=213,rd=214,Ko=0,Zo=1,Jo=2,ms=3,Qo=4,ea=5,ta=6,na=7,Ka=0,od=1,ad=2,pi=0,cd=1,ld=2,hd=3,Jl=4,ud=5,dd=6,fd=7,Ql=300,gs=301,_s=302,ia=303,sa=304,Qr=306,qr=1e3,Ui=1001,ra=1002,Pn=1003,pd=1004,ar=1005,kn=1006,co=1007,ui=1008,Jn=1009,eh=1010,th=1011,Zs=1012,Za=1013,ki=1014,Yn=1015,tr=1016,Ja=1017,Qa=1018,vs=1020,nh=35902,ih=1021,sh=1022,An=1023,rh=1024,oh=1025,ds=1026,xs=1027,ah=1028,ec=1029,ch=1030,tc=1031,nc=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,oa=35840,aa=35841,ca=35842,la=35843,ha=36196,ua=37492,da=37496,fa=37808,pa=37809,ma=37810,ga=37811,_a=37812,va=37813,xa=37814,ya=37815,Sa=37816,Ma=37817,ba=37818,Ea=37819,Ta=37820,Ca=37821,kr=36492,Aa=36494,wa=36495,lh=36283,Ra=36284,Pa=36285,La=36286,md=3200,gd=3201,hh=0,_d=1,hi="",Gt="srgb",Ss="srgb-linear",eo="linear",lt="srgb",Hi=7680,Pc=519,vd=512,xd=513,yd=514,uh=515,Sd=516,Md=517,bd=518,Ed=519,Da=35044,Lc="300 es",jn=2e3,$r=2001;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lo=Math.PI/180,Ia=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function Td(i,e){return(i%e+e)%e}function ho(i,e,t){return(1-t)*i+t*e}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,s,r,o,a,c,h){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,h)}set(e,t,n,s,r,o,a,c,h){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],T=s[1],E=s[4],S=s[7],D=s[2],w=s[5],R=s[8];return r[0]=o*_+a*T+c*D,r[3]=o*m+a*E+c*w,r[6]=o*p+a*S+c*R,r[1]=h*_+l*T+u*D,r[4]=h*m+l*E+u*w,r[7]=h*p+l*S+u*R,r[2]=d*_+f*T+g*D,r[5]=d*m+f*E+g*w,r[8]=d*p+f*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8];return t*o*l-t*a*h-n*r*l+n*a*c+s*r*h-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8],u=l*o-a*h,d=a*c-l*r,f=h*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*h-l*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(l*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-h*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+e,-s*h,s*c,-s*(-h*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new ze;function dh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cd(){const i=Js("canvas");return i.style.display="block",i}const Dc={};function Bs(i){i in Dc||(Dc[i]=!0,console.warn(i))}function Ad(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function wd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ic=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],kc=[.3127,.329],Nc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Ss]:{primaries:Ic,whitePoint:kc,transfer:eo,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:Ic,whitePoint:kc,transfer:lt,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});let Gi;class Pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=Js("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ld=0;class fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fo(s[o].image)):r.push(fo(s[o]))}else r=fo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dd=0;class Xt extends Ms{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=Ui,s=Ui,r=kn,o=ui,a=An,c=Jn,h=Xt.DEFAULT_ANISOTROPY,l=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=mi(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Ql;Xt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,h=c[0],l=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,S=(f+1)/2,D=(p+1)/2,w=(l+d)/4,R=(u+_)/4,L=(g+m)/4;return E>S&&E>D?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):S>D?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=L/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-l)*(d-l));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-l)/T,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Id extends Ms{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Id{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ph extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],h=n[s+1],l=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||h!==f||l!==g){let m=1-a;const p=c*d+h*f+l*g+u*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const D=Math.sqrt(E),w=Math.atan2(D,p*T);m=Math.sin(m*w)/D,a=Math.sin(a*w)/D}const S=a*T;if(c=c*m+d*S,h=h*m+f*S,l=l*m+g*S,u=u*m+_*S,m===1-a){const D=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=D,h*=D,l*=D,u*=D}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],h=n[s+2],l=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+l*u+c*f-h*d,e[t+1]=c*g+l*d+h*u-a*f,e[t+2]=h*g+l*f+a*d-c*u,e[t+3]=l*g-a*u-c*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"YXZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"ZXY":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"ZYX":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"YZX":this._x=d*l*u+h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u-d*f*g;break;case"XZY":this._x=d*l*u-h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],h=t[2],l=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(l-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,h=t._z,l=t._w;return this._x=n*l+o*a+s*h-r*c,this._y=s*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-s*a,this._w=o*l-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-t)*l)/h,d=Math.sin(t*l)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,h=2*(o*s-a*n),l=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*h+o*u-a*l,this.y=n+c*l+a*h-r*u,this.z=s+c*u+r*l-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new U,Oc=new nr;class ir{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),lr.subVectors(this.max,Rs),Vi.subVectors(e.a,Rs),Wi.subVectors(e.b,Rs),Xi.subVectors(e.c,Rs),ti.subVectors(Wi,Vi),ni.subVectors(Xi,Wi),yi.subVectors(Vi,Xi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-yi.z,yi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,yi.z,0,-yi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-yi.y,yi.x,0];return!mo(t,Vi,Wi,Xi,lr)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Vi,Wi,Xi,lr))?!1:(hr.crossVectors(ti,ni),t=[hr.x,hr.y,hr.z],mo(t,Vi,Wi,Xi,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new U,new U,new U,new U,new U,new U,new U,new U],Sn=new U,cr=new ir,Vi=new U,Wi=new U,Xi=new U,ti=new U,ni=new U,yi=new U,Rs=new U,lr=new U,hr=new U,Si=new U;function mo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=e.dot(Si),h=t.dot(Si),l=n.dot(Si);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}const kd=new ir,Ps=new U,go=new U;class ic{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(go)),this.expandByPoint(Ps.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new U,_o=new U,ur=new U,ii=new U,vo=new U,dr=new U,xo=new U;class Nd{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_o.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(_o);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ur),a=ii.dot(this.direction),c=-ii.dot(ur),h=ii.lengthSq(),l=Math.abs(1-o*o);let u,d,f,g;if(l>0)if(u=o*c-a,d=o*a-c,g=r*l,u>=0)if(d>=-g)if(d<=g){const _=1/l;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_o).addScaledVector(ur,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),l>=0?(r=(e.min.y-d.y)*l,o=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,o=(e.min.y-d.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){vo.subVectors(t,e),dr.subVectors(n,e),xo.crossVectors(vo,dr);let o=this.direction.dot(xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const c=a*this.direction.dot(dr.crossVectors(ii,dr));if(c<0)return null;const h=a*this.direction.dot(vo.cross(ii));if(h<0||c+h>o)return null;const l=-a*ii.dot(xo);return l<0?null:this.at(l/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,s,r,o,a,c,h,l,u,d,f,g,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,h,l,u,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,h,l,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*l,f=o*u,g=a*l,_=a*u;t[0]=c*l,t[4]=-c*u,t[8]=h,t[1]=f+g*h,t[5]=d-_*h,t[9]=-a*c,t[2]=_-d*h,t[6]=g+f*h,t[10]=o*c}else if(e.order==="YXZ"){const d=c*l,f=c*u,g=h*l,_=h*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*h,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*l,f=c*u,g=h*l,_=h*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*l,t[9]=_-d*a,t[2]=-o*h,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*l,f=o*u,g=a*l,_=a*u;t[0]=c*l,t[4]=g*h-f,t[8]=d*h+_,t[1]=c*u,t[5]=_*h+d,t[9]=f*h-g,t[2]=-h,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*h,g=a*c,_=a*h;t[0]=c*l,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-h*l,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*h,g=a*c,_=a*h;t[0]=c*l,t[4]=-u,t[8]=h*l,t[1]=d*u+_,t[5]=o*l,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*l,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),si.crossVectors(n,sn),si.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),si.crossVectors(n,sn)),si.normalize(),fr.crossVectors(sn,si),s[0]=si.x,s[4]=fr.x,s[8]=sn.x,s[1]=si.y,s[5]=fr.y,s[9]=sn.y,s[2]=si.z,s[6]=fr.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],S=n[11],D=n[15],w=s[0],R=s[4],L=s[8],M=s[12],y=s[1],P=s[5],V=s[9],B=s[13],q=s[2],K=s[6],$=s[10],te=s[14],X=s[3],ce=s[7],ge=s[11],we=s[15];return r[0]=o*w+a*y+c*q+h*X,r[4]=o*R+a*P+c*K+h*ce,r[8]=o*L+a*V+c*$+h*ge,r[12]=o*M+a*B+c*te+h*we,r[1]=l*w+u*y+d*q+f*X,r[5]=l*R+u*P+d*K+f*ce,r[9]=l*L+u*V+d*$+f*ge,r[13]=l*M+u*B+d*te+f*we,r[2]=g*w+_*y+m*q+p*X,r[6]=g*R+_*P+m*K+p*ce,r[10]=g*L+_*V+m*$+p*ge,r[14]=g*M+_*B+m*te+p*we,r[3]=T*w+E*y+S*q+D*X,r[7]=T*R+E*P+S*K+D*ce,r[11]=T*L+E*V+S*$+D*ge,r[15]=T*M+E*B+S*te+D*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],h=e[13],l=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*h*u-r*a*d+n*h*d+s*a*f-n*c*f)+_*(+t*c*f-t*h*d+r*o*d-s*o*f+s*h*l-r*c*l)+m*(+t*h*u-t*a*f-r*o*u+n*o*f+r*a*l-n*h*l)+p*(-s*a*l-t*c*u+t*a*d+s*o*u-n*o*d+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*h-_*d*h+_*c*f-a*m*f-u*c*p+a*d*p,E=g*d*h-l*m*h-g*c*f+o*m*f+l*c*p-o*d*p,S=l*_*h-g*u*h+g*a*f-o*_*f-l*a*p+o*u*p,D=g*u*c-l*_*c-g*a*d+o*_*d+l*a*m-o*u*m,w=t*T+n*E+s*S+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=T*R,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(a*m*r-_*c*r+_*s*h-n*m*h-a*s*p+n*c*p)*R,e[3]=(u*c*r-a*d*r-u*s*h+n*d*h+a*s*f-n*c*f)*R,e[4]=E*R,e[5]=(l*m*r-g*d*r+g*s*f-t*m*f-l*s*p+t*d*p)*R,e[6]=(g*c*r-o*m*r-g*s*h+t*m*h+o*s*p-t*c*p)*R,e[7]=(o*d*r-l*c*r+l*s*h-t*d*h-o*s*f+t*c*f)*R,e[8]=S*R,e[9]=(g*u*r-l*_*r-g*n*f+t*_*f+l*n*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*n*h-t*_*h-o*n*p+t*a*p)*R,e[11]=(l*a*r-o*u*r-l*n*h+t*u*h+o*n*f-t*a*f)*R,e[12]=D*R,e[13]=(l*_*s-g*u*s+g*n*d-t*_*d-l*n*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*s-l*a*s+l*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+n,l*c-s*o,0,h*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,h=r+r,l=o+o,u=a+a,d=r*h,f=r*l,g=r*u,_=o*l,m=o*u,p=a*u,T=c*h,E=c*l,S=c*u,D=n.x,w=n.y,R=n.z;return s[0]=(1-(_+p))*D,s[1]=(f+S)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+p))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+E)*R,s[9]=(m-T)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);const h=1/r,l=1/o,u=1/a;return Mn.elements[0]*=h,Mn.elements[1]*=h,Mn.elements[2]*=h,Mn.elements[4]*=l,Mn.elements[5]*=l,Mn.elements[6]*=l,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=jn){const c=this.elements,h=2*r/(t-e),l=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$r)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=jn){const c=this.elements,h=1/(t-e),l=1/(n-s),u=1/(o-r),d=(t+e)*h,f=(n+s)*l;let g,_;if(a===jn)g=(o+r)*u,_=-2*u;else if(a===$r)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new U,Mn=new yt,Fd=new U(0,0,0),Od=new U(1,1,1),si=new U,fr=new U,sn=new U,Bc=new yt,zc=new nr;class On{constructor(e=0,t=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],l=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bd=0;const Hc=new U,$i=new nr,Vn=new yt,pr=new U,Ls=new U,zd=new U,Hd=new nr,Gc=new U(1,0,0),Vc=new U(0,1,0),Wc=new U(0,0,1),Xc={type:"added"},Gd={type:"removed"},Yi={type:"childadded",child:null},yo={type:"childremoved",child:null};class Dt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new U,t=new On,n=new nr,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new ze}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Gc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pr.copy(e):pr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ls,pr,this.up):Vn.lookAt(pr,Ls,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Vn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),h=o(e.textures),l=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const h in a){const l=a[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new U(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new U,Wn=new U,So=new U,Xn=new U,ji=new U,Ki=new U,qc=new U,Mo=new U,bo=new U,Eo=new U,To=new dt,Co=new dt,Ao=new dt;class gn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),Wn.subVectors(n,t),So.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Wn),c=bn.dot(So),h=Wn.dot(Wn),l=Wn.dot(So),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return To.setScalar(0),Co.setScalar(0),Ao.setScalar(0),To.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Ao.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(To,r.x),o.addScaledVector(Co,r.y),o.addScaledVector(Ao,r.z),o}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),Wn.subVectors(e,t),bn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),bn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ji.subVectors(s,n),Ki.subVectors(r,n),Mo.subVectors(e,n);const c=ji.dot(Mo),h=Ki.dot(Mo);if(c<=0&&h<=0)return t.copy(n);bo.subVectors(e,s);const l=ji.dot(bo),u=Ki.dot(bo);if(l>=0&&u<=l)return t.copy(s);const d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(ji,o);Eo.subVectors(e,r);const f=ji.dot(Eo),g=Ki.dot(Eo);if(g>=0&&f<=g)return t.copy(r);const _=f*h-c*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(n).addScaledVector(Ki,a);const m=l*g-f*u;if(m<=0&&u-l>=0&&f-g>=0)return qc.subVectors(r,s),a=(u-l)/(u-l+(f-g)),t.copy(s).addScaledVector(qc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},mr={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Td(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wo(o,r,e+1/3),this.g=wo(o,r,e),this.b=wo(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return et.fromWorkingColorSpace(zt.copy(this),e),Math.round(Qt(zt.r*255,0,255))*65536+Math.round(Qt(zt.g*255,0,255))*256+Math.round(Qt(zt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,h;const l=(a+o)/2;if(a===o)c=0,h=0;else{const u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Gt){et.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(mr);const n=ho(ri.h,mr.h,t),s=ho(ri.s,mr.s,t),r=ho(ri.l,mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new $e;$e.NAMES=gh;let Vd=0;class bs extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=mi(),this.name="",this.blending=us,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=jo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qs extends bs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,gr=new We;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}}class _h extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vh extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wd=0;const un=new yt,Ro=new Dt,Zi=new U,rn=new ir,Ds=new ir,Nt=new U;class Ln extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dh(e)?vh:_h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cn(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(rn.min,Ds.min),rn.expandByPoint(Nt),Nt.addVectors(rn.max,Ds.max),rn.expandByPoint(Nt)):(rn.expandByPoint(Ds.min),rn.expandByPoint(Ds.max))}rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Nt.fromBufferAttribute(a,h),c&&(Zi.fromBufferAttribute(e,h),Nt.add(Zi)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new U,c[L]=new U;const h=new U,l=new U,u=new U,d=new We,f=new We,g=new We,_=new U,m=new U;function p(L,M,y){h.fromBufferAttribute(n,L),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),l.sub(h),u.sub(h),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(P),a[L].add(_),a[M].add(_),a[y].add(_),c[L].add(m),c[M].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){const y=T[L],P=y.start,V=y.count;for(let B=P,q=P+V;B<q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new U,S=new U,D=new U,w=new U;function R(L){D.fromBufferAttribute(s,L),w.copy(D);const M=a[L];E.copy(M),E.sub(D.multiplyScalar(D.dot(M))).normalize(),S.crossVectors(w,M);const P=S.dot(c[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,P)}for(let L=0,M=T.length;L<M;++L){const y=T[L],P=y.start,V=y.count;for(let B=P,q=P+V;B<q;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,h=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const h=a.array,l=a.itemSize,u=a.normalized,d=new h.constructor(c.length*l);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*l;for(let p=0;p<l;p++)d[g++]=h[f++]}return new an(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],h=e(c,n);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const c=[],h=r[a];for(let l=0,u=h.length;l<u;l++){const d=h[l],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];l.push(f.toJSON(e.data))}l.length>0&&(s[c]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(t))}const r=e.morphAttributes;for(const h in r){const l=[],u=r[h];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,l=o.length;h<l;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new yt,Mi=new Nd,_r=new ic,Yc=new U,vr=new U,xr=new U,yr=new U,Po=new U,Sr=new U,jc=new U,Mr=new U;class Tt extends Dt{constructor(e=new Ln,t=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=a[c],u=r[c];l!==0&&(Po.fromBufferAttribute(u,e),o?Sr.addScaledVector(Po,l):Sr.addScaledVector(Po.sub(t),l))}t.add(Sr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(_r.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(_r,Yc)===null||Mi.origin.distanceToSquared(Yc)>(e.far-e.near)**2))&&($c.copy(r).invert(),Mi.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,D=E;S<D;S+=3){const w=a.getX(S),R=a.getX(S+1),L=a.getX(S+2);s=br(this,p,e,n,h,l,u,w,R,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);s=br(this,o,e,n,h,l,u,T,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,D=E;S<D;S+=3){const w=S,R=S+1,L=S+2;s=br(this,p,e,n,h,l,u,w,R,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,S=m+2;s=br(this,o,e,n,h,l,u,T,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Xd(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===_i,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Mr);return h<t.near||h>t.far?null:{distance:h,point:Mr.clone(),object:i}}function br(i,e,t,n,s,r,o,a,c,h){i.getVertexPosition(a,vr),i.getVertexPosition(c,xr),i.getVertexPosition(h,yr);const l=Xd(i,e,t,n,vr,xr,yr,jc);if(l){const u=new U;gn.getBarycoord(jc,vr,xr,yr,u),s&&(l.uv=gn.getInterpolatedAttribute(s,a,c,h,u,new We)),r&&(l.uv1=gn.getInterpolatedAttribute(r,a,c,h,u,new We)),o&&(l.normal=gn.getInterpolatedAttribute(o,a,c,h,u,new U),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a,b:c,c:h,normal:new U,materialIndex:0};gn.getNormal(vr,xr,yr,d.normal),l.face=d,l.barycoord=u}return l}class _n extends Ln{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],l=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(l,3)),this.setAttribute("uv",new cn(u,2));function g(_,m,p,T,E,S,D,w,R,L,M){const y=S/R,P=D/L,V=S/2,B=D/2,q=w/2,K=R+1,$=L+1;let te=0,X=0;const ce=new U;for(let ge=0;ge<$;ge++){const we=ge*P-B;for(let Xe=0;Xe<K;Xe++){const ft=Xe*y-V;ce[_]=ft*T,ce[m]=we*E,ce[p]=q,h.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=w>0?1:-1,l.push(ce.x,ce.y,ce.z),u.push(Xe/R),u.push(1-ge/L),te+=1}}for(let ge=0;ge<L;ge++)for(let we=0;we<R;we++){const Xe=d+we+K*ge,ft=d+we+K*(ge+1),j=d+(we+1)+K*(ge+1),se=d+(we+1)+K*ge;c.push(Xe,ft,se),c.push(ft,j,se),X+=6}a.addGroup(f,X,M),f+=X,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=ys(i[t]);for(const s in n)e[s]=n[s]}return e}function qd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const $d={clone:ys,merge:Yt};var Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends bs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yh extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new U,Kc=new We,Zc=new We;class on extends yh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,Zc),t.subVectors(Zc,Kc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class Kd extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const r=new on(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const o=new on(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const a=new on(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const c=new on(Ji,Qi,e,t);c.layers=this.layers,this.add(c);const h=new on(Ji,Qi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const h of t)this.remove(h);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,h,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sh extends Xt{constructor(e,t,n,s,r,o,a,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,n,s,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zd extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:fi});r.uniforms.tEquirect.value=t;const o=new Tt(s,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=kn),new Kd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Lo=new U,Jd=new U,Qd=new ze;class Ai{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Lo.subVectors(n,t).cross(Jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qd.getNormalMatrix(e),s=this.coplanarPoint(Lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new ic,Er=new U;class sc{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],l=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],E=s[14],S=s[15];if(n[0].setComponents(c-r,d-h,m-f,S-p).normalize(),n[1].setComponents(c+r,d+h,m+f,S+p).normalize(),n[2].setComponents(c+o,d+l,m+g,S+T).normalize(),n[3].setComponents(c-o,d-l,m-g,S-T).normalize(),n[4].setComponents(c-a,d-u,m-_,S-E).normalize(),t===jn)n[5].setComponents(c+a,d+u,m+_,S+E).normalize();else if(t===$r)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Er.x=s.normal.x>0?e.max.x:e.min.x,Er.y=s.normal.y>0?e.max.y:e.min.y,Er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ef(i){const e=new WeakMap;function t(a,c){const h=a.array,l=a.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,l),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,h){const l=c.array,u=c.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,l);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,t(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}class to extends Ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),h=a+1,l=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<l;p++){const T=p*d-o;for(let E=0;E<h;E++){const S=E*u-r;g.push(S,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const E=T+h*p,S=T+h*(p+1),D=T+1+h*(p+1),w=T+1+h*p;f.push(E,S,w),f.push(S,D,w)}this.setIndex(f),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}var tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
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
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
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
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tf=`#define PI 3.141592653589793
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Af=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
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
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,ep=`struct PhysicalMaterial {
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
}`,tp=`
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,cm=`#if DEPTH_PACKING == 3200
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
}`,lm=`#define DISTANCE
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
}`,hm=`#define DISTANCE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,xm=`#define MATCAP
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
}`,ym=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,Mm=`#define NORMAL
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
}`,bm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,Tm=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Am=`#define TOON
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
}`,wm=`#define TOON
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
}`,Rm=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Im=`uniform float rotation;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:tf,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:of,alphatest_pars_fragment:af,aomap_fragment:cf,aomap_pars_fragment:lf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:yf,color_fragment:Sf,color_pars_fragment:Mf,color_pars_vertex:bf,color_vertex:Ef,common:Tf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Af,displacementmap_pars_vertex:wf,displacementmap_vertex:Rf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:Df,colorspace_pars_fragment:If,envmap_fragment:Uf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Nf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:Yf,envmap_vertex:Of,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:qf,lights_pars_begin:$f,lights_toon_fragment:jf,lights_toon_pars_fragment:Kf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:ep,lights_fragment_begin:tp,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:ap,map_fragment:cp,map_pars_fragment:lp,map_particle_fragment:hp,map_particle_pars_fragment:up,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:vp,normal_fragment_begin:xp,normal_fragment_maps:yp,normal_pars_fragment:Sp,normal_pars_vertex:Mp,normal_vertex:bp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:wp,opaque_fragment:Rp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Ip,dithering_pars_fragment:Up,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Vp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:$p,tonemapping_pars_fragment:Yp,transmission_fragment:jp,transmission_pars_fragment:Kp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:em,background_vert:tm,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:om,depth_vert:am,depth_frag:cm,distanceRGBA_vert:lm,distanceRGBA_frag:hm,equirect_vert:um,equirect_frag:dm,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:vm,meshmatcap_vert:xm,meshmatcap_frag:ym,meshnormal_vert:Sm,meshnormal_frag:Mm,meshphong_vert:bm,meshphong_frag:Em,meshphysical_vert:Tm,meshphysical_frag:Cm,meshtoon_vert:Am,meshtoon_frag:wm,points_vert:Rm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Im,sprite_frag:Um},oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},In={basic:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Yt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Yt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Yt([oe.points,oe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Yt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Yt([oe.common,oe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Yt([oe.sprite,oe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Yt([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Yt([oe.lights,oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};In.physical={uniforms:Yt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Tr={r:0,b:0,g:0},Ei=new On,km=new yt;function Nm(i,e,t,n,s,r,o){const a=new $e(0);let c=r===!0?0:1,h,l,u=null,d=0,f=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function _(T){let E=!1;const S=g(T);S===null?p(a,c):S&&S.isColor&&(p(S,1),E=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){const S=g(E);S&&(S.isCubeTexture||S.mapping===Qr)?(l===void 0&&(l=new Tt(new _n(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ys(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(D,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Ei.copy(E.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(km.makeRotationFromEuler(Ei)),l.material.toneMapped=et.getTransfer(S.colorSpace)!==lt,(u!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Tt(new to(2,2),new vi({name:"BackgroundMaterial",uniforms:ys(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=et.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function p(T,E){T.getRGB(Tr,xh(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m}}function Fm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,P,V,B,q){let K=!1;const $=u(B,V,P);r!==$&&(r=$,h(r.object)),K=f(y,B,V,q),K&&g(y,B,V,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(y,P,V,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function l(y){return i.deleteVertexArray(y)}function u(y,P,V){const B=V.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let K=q[P.id];K===void 0&&(K={},q[P.id]=K);let $=K[B];return $===void 0&&($=d(c()),K[B]=$),$}function d(y){const P=[],V=[],B=[];for(let q=0;q<t;q++)P[q]=0,V[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,P,V,B){const q=r.attributes,K=P.attributes;let $=0;const te=V.getAttributes();for(const X in te)if(te[X].location>=0){const ge=q[X];let we=K[X];if(we===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),ge===void 0||ge.attribute!==we||we&&ge.data!==we.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function g(y,P,V,B){const q={},K=P.attributes;let $=0;const te=V.getAttributes();for(const X in te)if(te[X].location>=0){let ge=K[X];ge===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor));const we={};we.attribute=ge,ge&&ge.data&&(we.data=ge.data),q[X]=we,$++}r.attributes=q,r.attributesNum=$,r.index=B}function _(){const y=r.newAttributes;for(let P=0,V=y.length;P<V;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const V=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;V[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),q[y]!==P&&(i.vertexAttribDivisor(y,P),q[y]=P)}function T(){const y=r.newAttributes,P=r.enabledAttributes;for(let V=0,B=P.length;V<B;V++)P[V]!==y[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function E(y,P,V,B,q,K,$){$===!0?i.vertexAttribIPointer(y,P,V,q,K):i.vertexAttribPointer(y,P,V,B,q,K)}function S(y,P,V,B){_();const q=B.attributes,K=V.getAttributes(),$=P.defaultAttributeValues;for(const te in K){const X=K[te];if(X.location>=0){let ce=q[te];if(ce===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const ge=ce.normalized,we=ce.itemSize,Xe=e.get(ce);if(Xe===void 0)continue;const ft=Xe.buffer,j=Xe.type,se=Xe.bytesPerElement,Te=j===i.INT||j===i.UNSIGNED_INT||ce.gpuType===Za;if(ce.isInterleavedBufferAttribute){const le=ce.data,Ie=le.stride,Ne=ce.offset;if(le.isInstancedInterleavedBuffer){for(let qe=0;qe<X.locationSize;qe++)p(X.location+qe,le.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let qe=0;qe<X.locationSize;qe++)m(X.location+qe);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let qe=0;qe<X.locationSize;qe++)E(X.location+qe,we/X.locationSize,j,ge,Ie*se,(Ne+we/X.locationSize*qe)*se,Te)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)p(X.location+le,ce.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let le=0;le<X.locationSize;le++)E(X.location+le,we/X.locationSize,j,ge,we*se,we/X.locationSize*le*se,Te)}}else if($!==void 0){const ge=$[te];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(X.location,ge);break;case 3:i.vertexAttrib3fv(X.location,ge);break;case 4:i.vertexAttrib4fv(X.location,ge);break;default:i.vertexAttrib1fv(X.location,ge)}}}}T()}function D(){L();for(const y in n){const P=n[y];for(const V in P){const B=P[V];for(const q in B)l(B[q].object),delete B[q];delete P[V]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const V in P){const B=P[V];for(const q in B)l(B[q].object),delete B[q];delete P[V]}delete n[y.id]}function R(y){for(const P in n){const V=n[P];if(V[y.id]===void 0)continue;const B=V[y.id];for(const q in B)l(B[q].object),delete B[q];delete V[y.id]}}function L(){M(),o=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Om(i,e,t){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),t.update(l,n,1)}function o(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),t.update(l,n,u))}function a(h,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let f=0;for(let g=0;g<u;g++)f+=l[g];t.update(f,n,1)}function c(h,l,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=l[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Bm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==An&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:D,maxSamples:w}}function zm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ai,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=l(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{const T=r?0:n,E=T*4;let S=p.clippingState||null;c.value=S,S=l(g,d,E,f);for(let D=0;D!==E;++D)S[D]=t[D];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=f;E!==_;++E,S+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Hm(i){let e=new WeakMap;function t(o,a){return a===ia?o.mapping=gs:a===sa&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ia||a===sa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new Zd(c.height);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",s),t(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class bh extends yh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=4,Jc=[.125,.215,.35,.446,.526,.582],Pi=20,Do=new bh,Qc=new $e;let Io=null,Uo=0,ko=0,No=!1;const wi=(1+Math.sqrt(5))/2,es=1/wi,el=[new U(-wi,es,0),new U(wi,es,0),new U(-es,0,wi),new U(es,0,wi),new U(0,wi,-es),new U(0,wi,es),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Uo,ko),this._renderer.xr.enabled=No,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:tr,format:An,colorSpace:Ss,depthBuffer:!1},s=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Vm(r,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,n,s){const a=new on(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(Qc),l.toneMapping=pi,l.autoClear=!1;const f=new Qs({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Tt(new _n,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Qc),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(h[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,h[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,h[p]));const E=this._cubeSize;Cr(s,T*E,p>2?E:0,E,E),l.setRenderTarget(s),_&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===gs||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Cr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Do)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=el[(s-r-1)%el.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Tt(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),_=r/g,m=isFinite(r)?1+Math.floor(l*_):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const p=[];let T=0;for(let R=0;R<Pi;++R){const L=R/_,M=Math.exp(-L*L/2);p.push(M),R===0?T+=M:R<m&&(T+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const S=this._sizeLods[s],D=3*S*(s>E-cs?s-E+cs:0),w=4*(this._cubeSize-S);Cr(t,D,w,3*S,2*S),c.setRenderTarget(t),c.render(u,Do)}}function Gm(i){const e=[],t=[],n=[];let s=i;const r=i-cs+1+Jc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-cs?c=Jc[o-i+cs-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),l=-h,u=1+h,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),E=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,L=w>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];T.set(M,_*g*w),E.set(d,m*g*w);const y=[w,w,w,w,w,w];S.set(y,p*g*w)}const D=new Ln;D.setAttribute("position",new an(T,_)),D.setAttribute("uv",new an(E,m)),D.setAttribute("faceIndex",new an(S,p)),e.push(D),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nl(i,e,t){const n=new Ni(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Vm(i,e,t){const n=new Float32Array(Pi),s=new U(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function il(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function sl(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Wm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===ia||c===sa,l=c===gs||c===_s;if(h||l){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new tl(i)),u=h?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return h&&f&&f.height>0||l&&f&&s(f)?(t===null&&(t=new tl(i)),u=h?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function h(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,S=T.length;E<S;E+=3){const D=T[E+0],w=T[E+1],R=T[E+2];d.push(D,w,w,R,R,D)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const D=E+0,w=E+1,R=E+2;d.push(D,w,w,R,R,D)}}else return;const m=new(dh(d)?vh:_h)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function l(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function $m(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function l(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jm(i,e,t){const n=new WeakMap,s=new dt;function r(o,a,c){const h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let D=a.attributes.position.count*S,w=1;D>e.maxTextureSize&&(w=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const R=new Float32Array(D*w*4*u),L=new ph(R,D,w,u);L.type=Yn,L.needsUpdate=!0;const M=S*4;for(let P=0;P<u;P++){const V=p[P],B=T[P],q=E[P],K=D*w*4*P;for(let $=0;$<V.count;$++){const te=$*M;g===!0&&(s.fromBufferAttribute(V,$),R[K+te+0]=s.x,R[K+te+1]=s.y,R[K+te+2]=s.z,R[K+te+3]=0),_===!0&&(s.fromBufferAttribute(B,$),R[K+te+4]=s.x,R[K+te+5]=s.y,R[K+te+6]=s.z,R[K+te+7]=0),m===!0&&(s.fromBufferAttribute(q,$),R[K+te+8]=s.x,R[K+te+9]=s.y,R[K+te+10]=s.z,R[K+te+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new We(D,w)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Km(i,e,t,n){let s=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,u=e.get(c,l);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class Eh extends Xt{constructor(e,t,n,s,r,o,a,c,h,l=ds){if(l!==ds&&l!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ds&&(n=ki),n===void 0&&l===xs&&(n=vs),super(null,s,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Th=new Xt,rl=new Eh(1,1),Ch=new ph,Ah=new Ud,wh=new Sh,ol=[],al=[],cl=new Float32Array(16),ll=new Float32Array(9),hl=new Float32Array(4);function Es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function no(i,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function t0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),kt(t,n)}}function n0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),kt(t,n)}}function i0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),kt(t,n)}}function s0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function c0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function d0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rl.compareFunction=uh,r=rl):r=Th,t.setTexture2D(e||r,s)}function f0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ah,s)}function p0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wh,s)}function m0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ch,s)}function g0(i){switch(i){case 5126:return Zm;case 35664:return Jm;case 35665:return Qm;case 35666:return e0;case 35674:return t0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return o0;case 35669:case 35673:return a0;case 5125:return c0;case 36294:return l0;case 36295:return h0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}function _0(i,e){i.uniform1fv(this.addr,e)}function v0(i,e){const t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function x0(i,e){const t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function y0(i,e){const t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function S0(i,e){const t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function M0(i,e){const t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b0(i,e){const t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function E0(i,e){i.uniform1iv(this.addr,e)}function T0(i,e){i.uniform2iv(this.addr,e)}function C0(i,e){i.uniform3iv(this.addr,e)}function A0(i,e){i.uniform4iv(this.addr,e)}function w0(i,e){i.uniform1uiv(this.addr,e)}function R0(i,e){i.uniform2uiv(this.addr,e)}function P0(i,e){i.uniform3uiv(this.addr,e)}function L0(i,e){i.uniform4uiv(this.addr,e)}function D0(i,e,t){const n=this.cache,s=e.length,r=no(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Th,r[o])}function I0(i,e,t){const n=this.cache,s=e.length,r=no(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ah,r[o])}function U0(i,e,t){const n=this.cache,s=e.length,r=no(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wh,r[o])}function k0(i,e,t){const n=this.cache,s=e.length,r=no(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ch,r[o])}function N0(i){switch(i){case 5126:return _0;case 35664:return v0;case 35665:return x0;case 35666:return y0;case 35674:return S0;case 35675:return M0;case 35676:return b0;case 5124:case 35670:return E0;case 35667:case 35671:return T0;case 35668:case 35672:return C0;case 35669:case 35673:return A0;case 5125:return w0;case 36294:return R0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return k0}}class F0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g0(t.type)}}class O0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}}class B0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function ul(i,e){i.seq.push(e),i.map[e.id]=e}function z0(i,e,t){const n=i.name,s=n.length;for(Fo.lastIndex=0;;){const r=Fo.exec(n),o=Fo.lastIndex;let a=r[1];const c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){ul(t,h===void 0?new F0(a,i,e):new O0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new B0(a),ul(t,u)),t=u}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);z0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function dl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const H0=37297;let G0=0;function V0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const fl=new ze;function W0(i){et._getMatrix(fl,et.workingColorSpace,i);const e=`mat3( ${fl.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case eo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+V0(i.getShaderSource(e),o)}else return s}function X0(i,e){const t=W0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function q0(i,e){let t;switch(e){case cd:t="Linear";break;case ld:t="Reinhard";break;case hd:t="Cineon";break;case Jl:t="ACESFilmic";break;case dd:t="AgX";break;case fd:t="Neutral";break;case ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new U;function $0(){et.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function j0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zs(i){return i!==""}function ml(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(Z0,Q0)}const J0=new Map;function Q0(i,e){let t=Ge[e];if(t===void 0){const n=J0.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ua(t)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(eg,tg)}function tg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ng(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function ig(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case Qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function rg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ka:e="ENVMAP_BLENDING_MULTIPLY";break;case od:e="ENVMAP_BLENDING_MIX";break;case ad:e="ENVMAP_BLENDING_ADD";break}return e}function og(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ag(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ng(t),h=ig(t),l=sg(t),u=rg(t),d=og(t),f=Y0(t),g=j0(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==pi?q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,X0("linearToOutputTexel",t.outputColorSpace),$0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=Ua(o),o=ml(o,t),o=gl(o,t),a=Ua(a),a=ml(a,t),a=gl(a,t),o=_l(o),a=_l(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,S=T+p+a,D=dl(s,s.VERTEX_SHADER,E),w=dl(s,s.FRAGMENT_SHADER,S);s.attachShader(_,D),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(w).trim();let K=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,w);else{const te=pl(s,D,"vertex"),X=pl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+te+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||q==="")&&($=!1);$&&(P.diagnostics={runnable:K,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(D),s.deleteShader(w),L=new Nr(s,_),M=K0(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,H0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=w,this}let cg=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hg(e),t.set(e,n)),n}}class hg{constructor(e){this.id=cg++,this.code=e,this.usedTimes=0}}function ug(i,e,t,n,s,r,o){const a=new mh,c=new lg,h=new Set,l=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,V,B){const q=V.fog,K=B.geometry,$=M.isMeshStandardMaterial?V.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),X=te&&te.mapping===Qr?te.image.height:null,ce=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,we=ge!==void 0?ge.length:0;let Xe=0;K.morphAttributes.position!==void 0&&(Xe=1),K.morphAttributes.normal!==void 0&&(Xe=2),K.morphAttributes.color!==void 0&&(Xe=3);let ft,j,se,Te;if(ce){const at=In[ce];ft=at.vertexShader,j=at.fragmentShader}else ft=M.vertexShader,j=M.fragmentShader,c.update(M),se=c.getVertexShaderID(M),Te=c.getFragmentShaderID(M);const le=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Ne=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,St=!!M.map,Je=!!M.matcap,Ct=!!te,F=!!M.aoMap,ln=!!M.lightMap,je=!!M.bumpMap,Ke=!!M.normalMap,Le=!!M.displacementMap,gt=!!M.emissiveMap,Re=!!M.metalnessMap,C=!!M.roughnessMap,v=M.anisotropy>0,z=M.clearcoat>0,Z=M.dispersion>0,ee=M.iridescence>0,Y=M.sheen>0,Ce=M.transmission>0,he=v&&!!M.anisotropyMap,_e=z&&!!M.clearcoatMap,Qe=z&&!!M.clearcoatNormalMap,ne=z&&!!M.clearcoatRoughnessMap,ve=ee&&!!M.iridescenceMap,De=ee&&!!M.iridescenceThicknessMap,Ue=Y&&!!M.sheenColorMap,xe=Y&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,He=!!M.specularColorMap,pt=!!M.specularIntensityMap,I=Ce&&!!M.transmissionMap,ae=Ce&&!!M.thicknessMap,W=!!M.gradientMap,J=!!M.alphaMap,me=M.alphaTest>0,de=!!M.alphaHash,Oe=!!M.extensions;let Et=pi;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Et=i.toneMapping);const Ot={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:ft,fragmentShader:j,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,instancingMorph:Ne&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ss,alphaToCoverage:!!M.alphaToCoverage,map:St,matcap:Je,envMap:Ct,envMapMode:Ct&&te.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:ln,bumpMap:je,normalMap:Ke,displacementMap:d&&Le,emissiveMap:gt,normalMapObjectSpace:Ke&&M.normalMapType===_d,normalMapTangentSpace:Ke&&M.normalMapType===hh,metalnessMap:Re,roughnessMap:C,anisotropy:v,anisotropyMap:he,clearcoat:z,clearcoatMap:_e,clearcoatNormalMap:Qe,clearcoatRoughnessMap:ne,dispersion:Z,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:De,sheen:Y,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:Ze,specularColorMap:He,specularIntensityMap:pt,transmission:Ce,transmissionMap:I,thicknessMap:ae,gradientMap:W,opaque:M.transparent===!1&&M.blending===us&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:de,combine:M.combine,mapUv:St&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:ln&&_(M.lightMap.channel),bumpMapUv:je&&_(M.bumpMap.channel),normalMapUv:Ke&&_(M.normalMap.channel),displacementMapUv:Le&&_(M.displacementMap.channel),emissiveMapUv:gt&&_(M.emissiveMap.channel),metalnessMapUv:Re&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:_e&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ze&&_(M.specularMap.channel),specularColorMapUv:He&&_(M.specularColorMap.channel),specularIntensityMapUv:pt&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ae&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ke||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(St||J),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:gt&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$n,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ot.vertexUv1s=h.has(1),Ot.vertexUv2s=h.has(2),Ot.vertexUv3s=h.has(3),h.clear(),Ot}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(y,M),E(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const y=g[M.type];let P;if(y){const V=In[y];P=$d.clone(V.uniforms)}else P=M.uniforms;return P}function D(M,y){let P;for(let V=0,B=l.length;V<B;V++){const q=l[V];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new ag(i,y,M,r),l.push(P)),P}function w(M){if(--M.usedTimes===0){const y=l.indexOf(M);l[y]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:D,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:L}}function dg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function fg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function h(u,d){t.length>1&&t.sort(u||fg),n.length>1&&n.sort(d||xl),s.length>1&&s.sort(d||xl)}function l(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:l,sort:h}}function pg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new yl,i.set(n,[o])):s>=r.length?(o=new yl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new $e};break;case"SpotLight":t={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function gg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _g=0;function vg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xg(i){const e=new mg,t=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const s=new U,r=new yt,o=new yt;function a(h){let l=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,E=0,S=0,D=0,w=0,R=0;h.sort(vg);for(let M=0,y=h.length;M<y;M++){const P=h[M],V=P.color,B=P.intensity,q=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=V.r*B,u+=V.g*B,d+=V.b*B;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],B);R++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,X=t.get(P);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=P.shadow.matrix,T++}n.directional[f]=$,f++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(V).multiplyScalar(B),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[_]=$;const te=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,te.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=te.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=K,S++}_++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(V).multiplyScalar(B),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=$,m++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const te=P.shadow,X=t.get(P);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=$,g++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(B),$.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==D||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+D-w,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=D,L.numLightProbes=R,n.version=_g++)}function c(h,l){let u=0,d=0,f=0,g=0,_=0;const m=l.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){const E=h[p];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Sl(i){const e=new xg(i),t=[],n=[];function s(l){h.camera=l,t.length=0,n.length=0}function r(l){t.push(l)}function o(l){n.push(l)}function a(){e.setup(t)}function c(l){e.setupView(t,l)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function yg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Sl(i),e.set(s,[a])):r>=o.length?(a=new Sl(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Sg extends bs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mg extends bs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function Tg(i,e,t){let n=new sc;const s=new We,r=new We,o=new dt,a=new Sg({depthPacking:gd}),c=new Mg,h={},l=t.maxTextureSize,u={[_i]:tn,[tn]:_i,[$n]:$n},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:bg,fragmentShader:Eg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let p=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(fi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==qn&&this.type===qn,q=p===qn&&this.type!==qn;for(let K=0,$=w.length;K<$;K++){const te=w[K],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ce=X.getFrameExtents();if(s.multiply(ce),r.copy(X.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/ce.x),s.x=r.x*ce.x,X.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/ce.y),s.y=r.y*ce.y,X.mapSize.y=r.y)),X.map===null||B===!0||q===!0){const we=this.type!==qn?{minFilter:Pn,magFilter:Pn}:{};X.map!==null&&X.map.dispose(),X.map=new Ni(s.x,s.y,we),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ge=X.getViewportCount();for(let we=0;we<ge;we++){const Xe=X.getViewport(we);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),V.viewport(o),X.updateMatrices(te,we),n=X.getFrustum(),S(R,L,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===qn&&T(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,P)};function T(w,R){const L=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,L,f,_,null)}function E(w,R,L,M){let y=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=y.uuid,B=R.uuid;let q=h[V];q===void 0&&(q={},h[V]=q);let K=q[B];K===void 0&&(K=y.clone(),q[B]=K,R.addEventListener("dispose",D)),y=K}if(y.visible=R.visible,y.wireframe=R.wireframe,M===qn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=L}return y}function S(w,R,L,M,y){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const B=e.update(w),q=w.material;if(Array.isArray(q)){const K=B.groups;for(let $=0,te=K.length;$<te;$++){const X=K[$],ce=q[X.materialIndex];if(ce&&ce.visible){const ge=E(w,ce,M,y);w.onBeforeShadow(i,w,R,L,B,ge,X),i.renderBufferDirect(L,null,B,ge,w,X),w.onAfterShadow(i,w,R,L,B,ge,X)}}}else if(q.visible){const K=E(w,q,M,y);w.onBeforeShadow(i,w,R,L,B,K,null),i.renderBufferDirect(L,null,B,K,w,null),w.onAfterShadow(i,w,R,L,B,K,null)}}const V=w.children;for(let B=0,q=V.length;B<q;B++)S(V[B],R,L,M,y)}function D(w){w.target.removeEventListener("dispose",D);for(const L in h){const M=h[L],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Cg={[Ko]:Zo,[Jo]:ta,[Qo]:na,[ms]:ea,[Zo]:Ko,[ta]:Jo,[na]:Qo,[ea]:ms};function Ag(i,e){function t(){let I=!1;const ae=new dt;let W=null;const J=new dt(0,0,0,0);return{setMask:function(me){W!==me&&!I&&(i.colorMask(me,me,me,me),W=me)},setLocked:function(me){I=me},setClear:function(me,de,Oe,Et,Ot){Ot===!0&&(me*=Et,de*=Et,Oe*=Et),ae.set(me,de,Oe,Et),J.equals(ae)===!1&&(i.clearColor(me,de,Oe,Et),J.copy(ae))},reset:function(){I=!1,W=null,J.set(-1,0,0,0)}}}function n(){let I=!1,ae=!1,W=null,J=null,me=null;return{setReversed:function(de){if(ae!==de){const Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const Et=me;me=null,this.setClear(Et)}ae=de},getReversed:function(){return ae},setTest:function(de){de?le(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(de){W!==de&&!I&&(i.depthMask(de),W=de)},setFunc:function(de){if(ae&&(de=Cg[de]),J!==de){switch(de){case Ko:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=de}},setLocked:function(de){I=de},setClear:function(de){me!==de&&(ae&&(de=1-de),i.clearDepth(de),me=de)},reset:function(){I=!1,W=null,J=null,me=null,ae=!1}}}function s(){let I=!1,ae=null,W=null,J=null,me=null,de=null,Oe=null,Et=null,Ot=null;return{setTest:function(at){I||(at?le(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(at){ae!==at&&!I&&(i.stencilMask(at),ae=at)},setFunc:function(at,xn,Bn){(W!==at||J!==xn||me!==Bn)&&(i.stencilFunc(at,xn,Bn),W=at,J=xn,me=Bn)},setOp:function(at,xn,Bn){(de!==at||Oe!==xn||Et!==Bn)&&(i.stencilOp(at,xn,Bn),de=at,Oe=xn,Et=Bn)},setLocked:function(at){I=at},setClear:function(at){Ot!==at&&(i.clearStencil(at),Ot=at)},reset:function(){I=!1,ae=null,W=null,J=null,me=null,de=null,Oe=null,Et=null,Ot=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,h=new WeakMap;let l={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,S=null,D=null,w=null,R=new $e(0,0,0),L=0,M=!1,y=null,P=null,V=null,B=null,q=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=te>=2);let ce=null,ge={};const we=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),ft=new dt().fromArray(we),j=new dt().fromArray(Xe);function se(I,ae,W,J){const me=new Uint8Array(4),de=i.createTexture();i.bindTexture(I,de),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<W;Oe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ae+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return de}const Te={};Te[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(ms),je(!1),Ke(Cc),le(i.CULL_FACE),F(fi);function le(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function Ie(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function Ne(I,ae){return u[I]!==ae?(i.bindFramebuffer(I,ae),u[I]=ae,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function qe(I,ae){let W=f,J=!1;if(I){W=d.get(ae),W===void 0&&(W=[],d.set(ae,W));const me=I.textures;if(W.length!==me.length||W[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Oe=me.length;de<Oe;de++)W[de]=i.COLOR_ATTACHMENT0+de;W.length=me.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function St(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Je={[Ri]:i.FUNC_ADD,[Vu]:i.FUNC_SUBTRACT,[Wu]:i.FUNC_REVERSE_SUBTRACT};Je[Xu]=i.MIN,Je[qu]=i.MAX;const Ct={[$u]:i.ZERO,[Yu]:i.ONE,[ju]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[td]:i.SRC_ALPHA_SATURATE,[Qu]:i.DST_COLOR,[Zu]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[Ju]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[sd]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(I,ae,W,J,me,de,Oe,Et,Ot,at){if(I===fi){_===!0&&(Ie(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),I!==Gu){if(I!==m||at!==M){if((p!==Ri||S!==Ri)&&(i.blendEquation(i.FUNC_ADD),p=Ri,S=Ri),at)switch(I){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.ONE,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,D=null,w=null,R.set(0,0,0),L=0,m=I,M=at}return}me=me||ae,de=de||W,Oe=Oe||J,(ae!==p||me!==S)&&(i.blendEquationSeparate(Je[ae],Je[me]),p=ae,S=me),(W!==T||J!==E||de!==D||Oe!==w)&&(i.blendFuncSeparate(Ct[W],Ct[J],Ct[de],Ct[Oe]),T=W,E=J,D=de,w=Oe),(Et.equals(R)===!1||Ot!==L)&&(i.blendColor(Et.r,Et.g,Et.b,Ot),R.copy(Et),L=Ot),m=I,M=!1}function ln(I,ae){I.side===$n?Ie(i.CULL_FACE):le(i.CULL_FACE);let W=I.side===tn;ae&&(W=!W),je(W),I.blending===us&&I.transparent===!1?F(fi):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),gt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function Ke(I){I!==Bu?(le(i.CULL_FACE),I!==P&&(I===Cc?i.cullFace(i.BACK):I===zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),P=I}function Le(I){I!==V&&($&&i.lineWidth(I),V=I)}function gt(I,ae,W){I?(le(i.POLYGON_OFFSET_FILL),(B!==ae||q!==W)&&(i.polygonOffset(ae,W),B=ae,q=W)):Ie(i.POLYGON_OFFSET_FILL)}function Re(I){I?le(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function C(I){I===void 0&&(I=i.TEXTURE0+K-1),ce!==I&&(i.activeTexture(I),ce=I)}function v(I,ae,W){W===void 0&&(ce===null?W=i.TEXTURE0+K-1:W=ce);let J=ge[W];J===void 0&&(J={type:void 0,texture:void 0},ge[W]=J),(J.type!==I||J.texture!==ae)&&(ce!==W&&(i.activeTexture(W),ce=W),i.bindTexture(I,ae||Te[I]),J.type=I,J.texture=ae)}function z(){const I=ge[ce];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(I){ft.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function xe(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Ze(I,ae){let W=h.get(ae);W===void 0&&(W=new WeakMap,h.set(ae,W));let J=W.get(I);J===void 0&&(J=i.getUniformBlockIndex(ae,I.name),W.set(I,J))}function He(I,ae){const J=h.get(ae).get(I);c.get(ae)!==J&&(i.uniformBlockBinding(ae,J,I.__bindingPointIndex),c.set(ae,J))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},ce=null,ge={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,S=null,D=null,w=null,R=new $e(0,0,0),L=0,M=!1,y=null,P=null,V=null,B=null,q=null,ft.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Ie,bindFramebuffer:Ne,drawBuffers:qe,useProgram:St,setBlending:F,setMaterial:ln,setFlipSided:je,setCullFace:Ke,setLineWidth:Le,setPolygonOffset:gt,setScissorTest:Re,activeTexture:C,bindTexture:v,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ve,texImage3D:De,updateUBOMapping:Ze,uniformBlockBinding:He,texStorage2D:Qe,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:Ce,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Ue,viewport:xe,reset:pt}}function Ml(i,e,t,n){const s=wg(n);switch(t){case ih:return i*e;case rh:return i*e;case oh:return i*e*2;case ah:return i*e/s.components*s.byteLength;case ec:return i*e/s.components*s.byteLength;case ch:return i*e*2/s.components*s.byteLength;case tc:return i*e*2/s.components*s.byteLength;case sh:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case nc:return i*e*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:case la:return Math.max(i,16)*Math.max(e,8)/4;case oa:case ca:return Math.max(i,8)*Math.max(e,8)/2;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kr:case Aa:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lh:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pa:case La:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wg(i){switch(i){case Jn:case eh:return{byteLength:1,components:1};case Zs:case th:case tr:return{byteLength:2,components:1};case Ja:case Qa:return{byteLength:2,components:4};case ki:case Za:case Yn:return{byteLength:4,components:1};case nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new We,l=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return f?new OffscreenCanvas(C,v):Js("canvas")}function _(C,v,z){let Z=1;const ee=Re(C);if((ee.width>z||ee.height>z)&&(Z=z/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(Z*ee.width),Ce=Math.floor(Z*ee.height);u===void 0&&(u=g(Y,Ce));const he=v?g(Y,Ce):u;return he.width=Y,he.height=Ce,he.getContext("2d").drawImage(C,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Ce+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,v,z,Z,ee=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=v;if(v===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),v===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),v===i.RGBA){const Ce=ee?eo:et.getTransfer(Z);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Ce===lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(C,v){let z;return C?v===null||v===ki||v===vs?z=i.DEPTH24_STENCIL8:v===Yn?z=i.DEPTH32F_STENCIL8:v===Zs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ki||v===vs?z=i.DEPTH_COMPONENT24:v===Yn?z=i.DEPTH_COMPONENT32F:v===Zs&&(z=i.DEPTH_COMPONENT16),z}function D(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pn&&C.minFilter!==kn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){const v=C.target;v.removeEventListener("dispose",w),L(v),v.isVideoTexture&&l.delete(v)}function R(C){const v=C.target;v.removeEventListener("dispose",R),y(v)}function L(C){const v=n.get(C);if(v.__webglInit===void 0)return;const z=C.source,Z=d.get(z);if(Z){const ee=Z[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(C),Object.keys(Z).length===0&&d.delete(z)}n.remove(C)}function M(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const z=C.source,Z=d.get(z);delete Z[v.__cacheKey],o.memory.textures--}function y(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let ee=0;ee<v.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=C.textures;for(let Z=0,ee=z.length;Z<ee;Z++){const Y=n.get(z[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(C)}let P=0;function V(){P=0}function B(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function q(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function K(C,v){const z=n.get(C);if(C.isVideoTexture&&Le(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,C,v);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function $(C,v){const z=n.get(C);if(C.version>0&&z.__version!==C.version){j(z,C,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function te(C,v){const z=n.get(C);if(C.version>0&&z.__version!==C.version){j(z,C,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function X(C,v){const z=n.get(C);if(C.version>0&&z.__version!==C.version){se(z,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const ce={[qr]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},ge={[Pn]:i.NEAREST,[pd]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},we={[vd]:i.NEVER,[Ed]:i.ALWAYS,[xd]:i.LESS,[uh]:i.LEQUAL,[yd]:i.EQUAL,[bd]:i.GEQUAL,[Sd]:i.GREATER,[Md]:i.NOTEQUAL};function Xe(C,v){if(v.type===Yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===kn||v.magFilter===co||v.magFilter===ar||v.magFilter===ui||v.minFilter===kn||v.minFilter===co||v.minFilter===ar||v.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ce[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ce[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ce[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ge[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pn||v.minFilter!==ar&&v.minFilter!==ui||v.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ft(C,v){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));const Z=v.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const Y=q(v);if(Y!==C.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[Y].usedTimes++;const Ce=ee[C.__cacheKey];Ce!==void 0&&(ee[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(v)),C.__cacheKey=Y,C.__webglTexture=ee[Y].texture}return z}function j(C,v,z){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const ee=ft(C,v),Y=v.source;t.bindTexture(Z,C.__webglTexture,i.TEXTURE0+z);const Ce=n.get(Y);if(Y.version!==Ce.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);const he=et.getPrimaries(et.workingColorSpace),_e=v.colorSpace===hi?null:et.getPrimaries(v.colorSpace),Qe=v.colorSpace===hi||he===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let ne=_(v.image,!1,s.maxTextureSize);ne=gt(v,ne);const ve=r.convert(v.format,v.colorSpace),De=r.convert(v.type);let Ue=E(v.internalFormat,ve,De,v.colorSpace,v.isVideoTexture);Xe(Z,v);let xe;const Ze=v.mipmaps,He=v.isVideoTexture!==!0,pt=Ce.__version===void 0||ee===!0,I=Y.dataReady,ae=D(v,ne);if(v.isDepthTexture)Ue=S(v.format===xs,v.type),pt&&(He?t.texStorage2D(i.TEXTURE_2D,1,Ue,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ne.width,ne.height,0,ve,De,null));else if(v.isDataTexture)if(Ze.length>0){He&&pt&&t.texStorage2D(i.TEXTURE_2D,ae,Ue,Ze[0].width,Ze[0].height);for(let W=0,J=Ze.length;W<J;W++)xe=Ze[W],He?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,xe.width,xe.height,ve,De,xe.data):t.texImage2D(i.TEXTURE_2D,W,Ue,xe.width,xe.height,0,ve,De,xe.data);v.generateMipmaps=!1}else He?(pt&&t.texStorage2D(i.TEXTURE_2D,ae,Ue,ne.width,ne.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,De,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,ne.width,ne.height,0,ve,De,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ue,Ze[0].width,Ze[0].height,ne.depth);for(let W=0,J=Ze.length;W<J;W++)if(xe=Ze[W],v.format!==An)if(ve!==null)if(He){if(I)if(v.layerUpdates.size>0){const me=Ml(xe.width,xe.height,v.format,v.type);for(const de of v.layerUpdates){const Oe=xe.data.subarray(de*me/xe.data.BYTES_PER_ELEMENT,(de+1)*me/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,de,xe.width,xe.height,1,ve,Oe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xe.width,xe.height,ne.depth,ve,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ue,xe.width,xe.height,ne.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xe.width,xe.height,ne.depth,ve,De,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ue,xe.width,xe.height,ne.depth,0,ve,De,xe.data)}else{He&&pt&&t.texStorage2D(i.TEXTURE_2D,ae,Ue,Ze[0].width,Ze[0].height);for(let W=0,J=Ze.length;W<J;W++)xe=Ze[W],v.format!==An?ve!==null?He?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,xe.width,xe.height,ve,De,xe.data):t.texImage2D(i.TEXTURE_2D,W,Ue,xe.width,xe.height,0,ve,De,xe.data)}else if(v.isDataArrayTexture)if(He){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ue,ne.width,ne.height,ne.depth),I)if(v.layerUpdates.size>0){const W=Ml(ne.width,ne.height,v.format,v.type);for(const J of v.layerUpdates){const me=ne.data.subarray(J*W/ne.data.BYTES_PER_ELEMENT,(J+1)*W/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ve,De,me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,De,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ne.width,ne.height,ne.depth,0,ve,De,ne.data);else if(v.isData3DTexture)He?(pt&&t.texStorage3D(i.TEXTURE_3D,ae,Ue,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,De,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ne.width,ne.height,ne.depth,0,ve,De,ne.data);else if(v.isFramebufferTexture){if(pt)if(He)t.texStorage2D(i.TEXTURE_2D,ae,Ue,ne.width,ne.height);else{let W=ne.width,J=ne.height;for(let me=0;me<ae;me++)t.texImage2D(i.TEXTURE_2D,me,Ue,W,J,0,ve,De,null),W>>=1,J>>=1}}else if(Ze.length>0){if(He&&pt){const W=Re(Ze[0]);t.texStorage2D(i.TEXTURE_2D,ae,Ue,W.width,W.height)}for(let W=0,J=Ze.length;W<J;W++)xe=Ze[W],He?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ve,De,xe):t.texImage2D(i.TEXTURE_2D,W,Ue,ve,De,xe);v.generateMipmaps=!1}else if(He){if(pt){const W=Re(ne);t.texStorage2D(i.TEXTURE_2D,ae,Ue,W.width,W.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,De,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ue,ve,De,ne);m(v)&&p(Z),Ce.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function se(C,v,z){if(v.image.length!==6)return;const Z=ft(C,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const Y=n.get(ee);if(ee.version!==Y.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const Ce=et.getPrimaries(et.workingColorSpace),he=v.colorSpace===hi?null:et.getPrimaries(v.colorSpace),_e=v.colorSpace===hi||Ce===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Qe=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Qe&&!ne?ve[J]=_(v.image[J],!0,s.maxCubemapSize):ve[J]=ne?v.image[J].image:v.image[J],ve[J]=gt(v,ve[J]);const De=ve[0],Ue=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),Ze=E(v.internalFormat,Ue,xe,v.colorSpace),He=v.isVideoTexture!==!0,pt=Y.__version===void 0||Z===!0,I=ee.dataReady;let ae=D(v,De);Xe(i.TEXTURE_CUBE_MAP,v);let W;if(Qe){He&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ze,De.width,De.height);for(let J=0;J<6;J++){W=ve[J].mipmaps;for(let me=0;me<W.length;me++){const de=W[me];v.format!==An?Ue!==null?He?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,de.width,de.height,Ue,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Ze,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,de.width,de.height,Ue,xe,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Ze,de.width,de.height,0,Ue,xe,de.data)}}}else{if(W=v.mipmaps,He&&pt){W.length>0&&ae++;const J=Re(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ze,J.width,J.height)}for(let J=0;J<6;J++)if(ne){He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ue,xe,ve[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,ve[J].width,ve[J].height,0,Ue,xe,ve[J].data);for(let me=0;me<W.length;me++){const Oe=W[me].image[J].image;He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Oe.width,Oe.height,Ue,xe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Ze,Oe.width,Oe.height,0,Ue,xe,Oe.data)}}else{He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,xe,ve[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,Ue,xe,ve[J]);for(let me=0;me<W.length;me++){const de=W[me];He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Ue,xe,de.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Ze,Ue,xe,de.image[J])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ee.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Te(C,v,z,Z,ee,Y){const Ce=r.convert(z.format,z.colorSpace),he=r.convert(z.type),_e=E(z.internalFormat,Ce,he,z.colorSpace),Qe=n.get(v),ne=n.get(z);if(ne.__renderTarget=v,!Qe.__hasExternalTextures){const ve=Math.max(1,v.width>>Y),De=Math.max(1,v.height>>Y);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,_e,ve,De,v.depth,0,Ce,he,null):t.texImage2D(ee,Y,_e,ve,De,0,Ce,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ke(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,ne.__webglTexture,0,je(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,ne.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(C,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const Z=v.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,Y=S(v.stencilBuffer,ee),Ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=je(v);Ke(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Y,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,C)}else{const Z=v.textures;for(let ee=0;ee<Z.length;ee++){const Y=Z[ee],Ce=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),_e=E(Y.internalFormat,Ce,he,Y.colorSpace),Qe=je(v);z&&Ke(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,_e,v.width,v.height):Ke(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,_e,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_e,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const ee=Z.__webglTexture,Y=je(v);if(v.depthTexture.format===ds)Ke(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===xs)Ke(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const v=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=Z}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(v.__webglFramebuffer,C)}else if(z){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),le(v.__webglDepthbuffer[Z],C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),le(v.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(C,v,z){const Z=n.get(C);v!==void 0&&Te(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ne(C)}function St(C){const v=C.texture,z=n.get(C),Z=n.get(v);C.addEventListener("dispose",R);const ee=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let _e=0;_e<v.mipmaps.length;_e++)z.__webglFramebuffer[he][_e]=i.createFramebuffer()}else z.__webglFramebuffer[he]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)z.__webglFramebuffer[he]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let he=0,_e=ee.length;he<_e;he++){const Qe=n.get(ee[he]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ke(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const _e=ee[he];z.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[he]);const Qe=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),ve=E(_e.internalFormat,Qe,ne,_e.colorSpace,C.isXRRenderTarget===!0),De=je(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,ve,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,z.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),le(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)Te(z.__webglFramebuffer[he][_e],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else Te(z.__webglFramebuffer[he],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let he=0,_e=ee.length;he<_e;he++){const Qe=ee[he],ne=n.get(Qe);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Xe(i.TEXTURE_2D,Qe),Te(z.__webglFramebuffer,C,Qe,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),Xe(he,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)Te(z.__webglFramebuffer[_e],C,v,i.COLOR_ATTACHMENT0,he,_e);else Te(z.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),t.unbindTexture()}C.depthBuffer&&Ne(C)}function Je(C){const v=C.textures;for(let z=0,Z=v.length;z<Z;z++){const ee=v[z];if(m(ee)){const Y=T(C),Ce=n.get(ee).__webglTexture;t.bindTexture(Y,Ce),p(Y),t.unbindTexture()}}}const Ct=[],F=[];function ln(C){if(C.samples>0){if(Ke(C)===!1){const v=C.textures,z=C.width,Z=C.height;let ee=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(C),he=v.length>1;if(he)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const Qe=n.get(v[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,ee,i.NEAREST),c===!0&&(Ct.length=0,F.length=0,Ct.push(i.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ct.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const Qe=n.get(v[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function je(C){return Math.min(s.maxSamples,C.samples)}function Ke(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Le(C){const v=o.render.frame;l.get(C)!==v&&(l.set(C,v),C.update())}function gt(C,v){const z=C.colorSpace,Z=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ss&&z!==hi&&(et.getTransfer(z)===lt?(Z!==An||ee!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=qe,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ke}function Pg(i,e){function t(n,s=hi){let r;const o=et.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eh)return i.BYTE;if(n===th)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Za)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===tr)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===sh)return i.RGB;if(n===An)return i.RGBA;if(n===rh)return i.LUMINANCE;if(n===oh)return i.LUMINANCE_ALPHA;if(n===ds)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===ah)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===ch)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ir||n===Ur)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oa||n===aa||n===ca||n===la)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===ua||n===da)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ha||n===ua)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===da)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Sa||n===Ma||n===ba||n===Ea||n===Ta||n===Ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ga)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===Aa||n===wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===kr)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lh||n===Ra||n===Pa||n===La)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===kr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Lg extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ls extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
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

}`;class kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:Ig,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends Ms{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,u=null,d=null,f=null,g=null;const _=new kg,m=t.getContextAttributes();let p=null,T=null;const E=[],S=[],D=new We;let w=null;const R=new on;R.viewport=new dt;const L=new on;L.viewport=new dt;const M=[R,L],y=new Lg;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=E[j];return se===void 0&&(se=new Oo,E[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=E[j];return se===void 0&&(se=new Oo,E[j]=se),se.getGripSpace()},this.getHand=function(j){let se=E[j];return se===void 0&&(se=new Oo,E[j]=se),se.getHandSpace()};function B(j){const se=S.indexOf(j.inputSource);if(se===-1)return;const Te=E[se];Te!==void 0&&(Te.update(j.inputSource,j.frame,h||o),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",K);for(let j=0;j<E.length;j++){const se=S[j];se!==null&&(S[j]=null,E[j].disconnect(se))}P=null,V=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Ni(f.framebufferWidth,f.framebufferHeight,{format:An,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,Te=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?xs:ds,Te=m.stencil?vs:ki);const Ie={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Ni(d.textureWidth,d.textureHeight,{format:An,type:Jn,depthTexture:new Eh(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(j){for(let se=0;se<j.removed.length;se++){const Te=j.removed[se],le=S.indexOf(Te);le>=0&&(S[le]=null,E[le].disconnect(Te))}for(let se=0;se<j.added.length;se++){const Te=j.added[se];let le=S.indexOf(Te);if(le===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=S.length){S.push(Te),le=Ne;break}else if(S[Ne]===null){S[Ne]=Te,le=Ne;break}if(le===-1)break}const Ie=E[le];Ie&&Ie.connect(Te)}}const $=new U,te=new U;function X(j,se,Te){$.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);const le=$.distanceTo(te),Ie=se.projectionMatrix.elements,Ne=Te.projectionMatrix.elements,qe=Ie[14]/(Ie[10]-1),St=Ie[14]/(Ie[10]+1),Je=(Ie[9]+1)/Ie[5],Ct=(Ie[9]-1)/Ie[5],F=(Ie[8]-1)/Ie[0],ln=(Ne[8]+1)/Ne[0],je=qe*F,Ke=qe*ln,Le=le/(-F+ln),gt=Le*-F;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(gt),j.translateZ(Le),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Re=qe+Le,C=St+Le,v=je-gt,z=Ke+(le-gt),Z=Je*St/C*Re,ee=Ct*St/C*Re;j.projectionMatrix.makePerspective(v,z,Z,ee,Re,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let se=j.near,Te=j.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),y.near=L.near=R.near=se,y.far=L.far=R.far=Te,(P!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,V=y.far),R.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,y.layers.mask=R.layers.mask|L.layers.mask;const le=j.parent,Ie=y.cameras;ce(y,le);for(let Ne=0;Ne<Ie.length;Ne++)ce(Ie[Ne],le);Ie.length===2?X(y,R,L):y.projectionMatrix.copy(R.projectionMatrix),ge(j,y,le)};function ge(j,se,Te){Te===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ia*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let we=null;function Xe(j,se){if(l=se.getViewerPose(h||o),g=se,l!==null){const Te=l.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let le=!1;Te.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Ne=0;Ne<Te.length;Ne++){const qe=Te[Ne];let St=null;if(f!==null)St=f.getViewport(qe);else{const Ct=u.getViewSubImage(d,qe);St=Ct.viewport,Ne===0&&(e.setRenderTargetTextures(T,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(T))}let Je=M[Ne];Je===void 0&&(Je=new on,Je.layers.enable(Ne),Je.viewport=new dt,M[Ne]=Je),Je.matrix.fromArray(qe.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(qe.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(St.x,St.y,St.width,St.height),Ne===0&&(y.matrix.copy(Je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Je)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ne=u.getDepthInformation(Te[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let Te=0;Te<E.length;Te++){const le=S[Te],Ie=E[Te];le!==null&&Ie!==void 0&&Ie.update(le,se,h||o)}we&&we(j,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const ft=new Mh;ft.setAnimationLoop(Xe),this.setAnimationLoop=function(j){we=j},this.dispose=function(){}}}const Ti=new On,Fg=new yt;function Og(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,E):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,S=T.envMapRotation;E&&(m.envMap.value=E,Ti.copy(S),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(Ti)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const S=E.program;n.uniformBlockBinding(T,S)}function h(T,E){let S=s[T.id];S===void 0&&(g(T),S=l(T),s[T.id]=S,T.addEventListener("dispose",m));const D=E.program;n.updateUBOMapping(T,D);const w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function l(T){const E=u();T.__bindingPointIndex=E;const S=i.createBuffer(),D=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=s[T.id],S=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,R=S.length;w<R;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,y=L.length;M<y;M++){const P=L[M];if(f(P,w,M,D)===!0){const V=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let K=0;K<B.length;K++){const $=B[K],te=_($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,V+q,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,q),q+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,E,S,D){const w=T.value,R=E+"_"+S;if(D[R]===void 0)return typeof w=="number"||typeof w=="boolean"?D[R]=w:D[R]=w.clone(),!0;{const L=D[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return D[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(T){const E=T.uniforms;let S=0;const D=16;for(let R=0,L=E.length;R<L;R++){const M=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,P=M.length;y<P;y++){const V=M[y],B=Array.isArray(V.value)?V.value:[V.value];for(let q=0,K=B.length;q<K;q++){const $=B[q],te=_($),X=S%D,ce=X%te.boundary,ge=X+ce;S+=ce,ge!==0&&D-ge<te.storage&&(S+=D-ge),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=te.storage}}}const w=S%D;return w>0&&(S+=D-w),T.__size=S,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:h,dispose:p}}class zg{constructor(e={}){const{canvas:t=Cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=pi,this.toneMappingExposure=1;const S=this;let D=!1,w=0,R=0,L=null,M=-1,y=null;const P=new dt,V=new dt;let B=null;const q=new $e(0);let K=0,$=t.width,te=t.height,X=1,ce=null,ge=null;const we=new dt(0,0,$,te),Xe=new dt(0,0,$,te);let ft=!1;const j=new sc;let se=!1,Te=!1;const le=new yt,Ie=new yt,Ne=new U,qe=new dt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Ct(){return L===null?X:1}let F=n;function ln(x,k){return t.getContext(x,k)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",de,!1),F===null){const k="webgl2";if(F=ln(k,x),F===null)throw ln(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let je,Ke,Le,gt,Re,C,v,z,Z,ee,Y,Ce,he,_e,Qe,ne,ve,De,Ue,xe,Ze,He,pt,I;function ae(){je=new Xm(F),je.init(),He=new Pg(F,je),Ke=new Bm(F,je,e,He),Le=new Ag(F,je),Ke.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),gt=new Ym(F),Re=new dg,C=new Rg(F,je,Le,Re,Ke,He,gt),v=new Hm(S),z=new Wm(S),Z=new ef(F),pt=new Fm(F,Z),ee=new qm(F,Z,gt,pt),Y=new Km(F,ee,Z,gt),Ue=new jm(F,Ke,C),ne=new zm(Re),Ce=new ug(S,v,z,je,Ke,pt,ne),he=new Og(S,Re),_e=new pg,Qe=new yg(je),De=new Nm(S,v,z,Le,Y,f,c),ve=new Tg(S,Y,Ke),I=new Bg(F,gt,Ke,Le),xe=new Om(F,je,gt),Ze=new $m(F,je,gt),gt.programs=Ce.programs,S.capabilities=Ke,S.extensions=je,S.properties=Re,S.renderLists=_e,S.shadowMap=ve,S.state=Le,S.info=gt}ae();const W=new Ng(S,F);this.xr=W,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize($,te,!1))},this.getSize=function(x){return x.set($,te)},this.setSize=function(x,k,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,te=k,t.width=Math.floor(x*X),t.height=Math.floor(k*X),H===!0&&(t.style.width=x+"px",t.style.height=k+"px"),this.setViewport(0,0,x,k)},this.getDrawingBufferSize=function(x){return x.set($*X,te*X).floor()},this.setDrawingBufferSize=function(x,k,H){$=x,te=k,X=H,t.width=Math.floor(x*H),t.height=Math.floor(k*H),this.setViewport(0,0,x,k)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(we)},this.setViewport=function(x,k,H,G){x.isVector4?we.set(x.x,x.y,x.z,x.w):we.set(x,k,H,G),Le.viewport(P.copy(we).multiplyScalar(X).round())},this.getScissor=function(x){return x.copy(Xe)},this.setScissor=function(x,k,H,G){x.isVector4?Xe.set(x.x,x.y,x.z,x.w):Xe.set(x,k,H,G),Le.scissor(V.copy(Xe).multiplyScalar(X).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(x){Le.setScissorTest(ft=x)},this.setOpaqueSort=function(x){ce=x},this.setTransparentSort=function(x){ge=x},this.getClearColor=function(x){return x.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(x=!0,k=!0,H=!0){let G=0;if(x){let N=!1;if(L!==null){const ie=L.texture.format;N=ie===nc||ie===tc||ie===ec}if(N){const ie=L.texture.type,fe=ie===Jn||ie===ki||ie===Zs||ie===vs||ie===Ja||ie===Qa,Me=De.getClearColor(),be=De.getClearAlpha(),ke=Me.r,Be=Me.g,Ee=Me.b;fe?(g[0]=ke,g[1]=Be,g[2]=Ee,g[3]=be,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=ke,_[1]=Be,_[2]=Ee,_[3]=be,F.clearBufferiv(F.COLOR,0,_))}else G|=F.COLOR_BUFFER_BIT}k&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",de,!1),_e.dispose(),Qe.dispose(),Re.dispose(),v.dispose(),z.dispose(),Y.dispose(),pt.dispose(),I.dispose(),Ce.dispose(),W.dispose(),W.removeEventListener("sessionstart",vc),W.removeEventListener("sessionend",xc),xi.stop()};function J(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const x=gt.autoReset,k=ve.enabled,H=ve.autoUpdate,G=ve.needsUpdate,N=ve.type;ae(),gt.autoReset=x,ve.enabled=k,ve.autoUpdate=H,ve.needsUpdate=G,ve.type=N}function de(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Oe(x){const k=x.target;k.removeEventListener("dispose",Oe),Et(k)}function Et(x){Ot(x),Re.remove(x)}function Ot(x){const k=Re.get(x).programs;k!==void 0&&(k.forEach(function(H){Ce.releaseProgram(H)}),x.isShaderMaterial&&Ce.releaseShaderCache(x))}this.renderBufferDirect=function(x,k,H,G,N,ie){k===null&&(k=St);const fe=N.isMesh&&N.matrixWorld.determinant()<0,Me=Uu(x,k,H,G,N);Le.setMaterial(G,fe);let be=H.index,ke=1;if(G.wireframe===!0){if(be=ee.getWireframeAttribute(H),be===void 0)return;ke=2}const Be=H.drawRange,Ee=H.attributes.position;let nt=Be.start*ke,mt=(Be.start+Be.count)*ke;ie!==null&&(nt=Math.max(nt,ie.start*ke),mt=Math.min(mt,(ie.start+ie.count)*ke)),be!==null?(nt=Math.max(nt,0),mt=Math.min(mt,be.count)):Ee!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,Ee.count));const _t=mt-nt;if(_t<0||_t===1/0)return;pt.setup(N,G,Me,H,be);let Kt,it=xe;if(be!==null&&(Kt=Z.get(be),it=Ze,it.setIndex(Kt)),N.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*Ct()),it.setMode(F.LINES)):it.setMode(F.TRIANGLES);else if(N.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),Le.setLineWidth(Ae*Ct()),N.isLineSegments?it.setMode(F.LINES):N.isLineLoop?it.setMode(F.LINE_LOOP):it.setMode(F.LINE_STRIP)}else N.isPoints?it.setMode(F.POINTS):N.isSprite&&it.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,zn=N._multiDrawCounts,st=N._multiDrawCount,yn=be?Z.get(be).bytesPerElement:1,zi=Re.get(G).currentProgram.getUniforms();for(let nn=0;nn<st;nn++)zi.setValue(F,"_gl_DrawID",nn),it.render(Ae[nn]/yn,zn[nn])}else if(N.isInstancedMesh)it.renderInstances(nt,_t,N.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,zn=Math.min(H.instanceCount,Ae);it.renderInstances(nt,_t,zn)}else it.render(nt,_t)};function at(x,k,H){x.transparent===!0&&x.side===$n&&x.forceSinglePass===!1?(x.side=tn,x.needsUpdate=!0,or(x,k,H),x.side=_i,x.needsUpdate=!0,or(x,k,H),x.side=$n):or(x,k,H)}this.compile=function(x,k,H=null){H===null&&(H=x),p=Qe.get(H),p.init(k),E.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==H&&x.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ie=N.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const Me=ie[fe];at(Me,H,N),G.add(Me)}else at(ie,H,N),G.add(ie)}),E.pop(),p=null,G},this.compileAsync=function(x,k,H=null){const G=this.compile(x,k,H);return new Promise(N=>{function ie(){if(G.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){N(x);return}setTimeout(ie,10)}je.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let xn=null;function Bn(x){xn&&xn(x)}function vc(){xi.stop()}function xc(){xi.start()}const xi=new Mh;xi.setAnimationLoop(Bn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(x){xn=x,W.setAnimationLoop(x),x===null?xi.stop():xi.start()},W.addEventListener("sessionstart",vc),W.addEventListener("sessionend",xc),this.render=function(x,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(k),k=W.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,k,L),p=Qe.get(x,E.length),p.init(k),E.push(p),Ie.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Ie),Te=this.localClippingEnabled,se=ne.init(this.clippingPlanes,Te),m=_e.get(x,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){const ie=S.xr.getDepthSensingMesh();ie!==null&&ao(ie,k,-1/0,S.sortObjects)}ao(x,k,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ce,ge),Je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Je&&De.addToRenderList(m,x),this.info.render.frame++,se===!0&&ne.beginShadows();const H=p.state.shadowsArray;ve.render(H,x,k),se===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ie=k.cameras;if(N.length>0)for(let fe=0,Me=ie.length;fe<Me;fe++){const be=ie[fe];Sc(G,N,x,be)}Je&&De.render(x);for(let fe=0,Me=ie.length;fe<Me;fe++){const be=ie[fe];yc(m,x,be,be.viewport)}}else N.length>0&&Sc(G,N,x,k),Je&&De.render(x),yc(m,x,k);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(S,x,k),pt.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],se===!0&&ne.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ao(x,k,H,G){if(x.visible===!1)return;if(x.layers.test(k.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(k);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||j.intersectsSprite(x)){G&&qe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ie);const fe=Y.update(x),Me=x.material;Me.visible&&m.push(x,fe,Me,H,qe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||j.intersectsObject(x))){const fe=Y.update(x),Me=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),qe.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),qe.copy(fe.boundingSphere.center)),qe.applyMatrix4(x.matrixWorld).applyMatrix4(Ie)),Array.isArray(Me)){const be=fe.groups;for(let ke=0,Be=be.length;ke<Be;ke++){const Ee=be[ke],nt=Me[Ee.materialIndex];nt&&nt.visible&&m.push(x,fe,nt,H,qe.z,Ee)}}else Me.visible&&m.push(x,fe,Me,H,qe.z,null)}}const ie=x.children;for(let fe=0,Me=ie.length;fe<Me;fe++)ao(ie[fe],k,H,G)}function yc(x,k,H,G){const N=x.opaque,ie=x.transmissive,fe=x.transparent;p.setupLightsView(H),se===!0&&ne.setGlobalState(S.clippingPlanes,H),G&&Le.viewport(P.copy(G)),N.length>0&&rr(N,k,H),ie.length>0&&rr(ie,k,H),fe.length>0&&rr(fe,k,H),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Sc(x,k,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Ni(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?tr:Jn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ie=p.state.transmissionRenderTarget[G.id],fe=G.viewport||P;ie.setSize(fe.z,fe.w);const Me=S.getRenderTarget();S.setRenderTarget(ie),S.getClearColor(q),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Je&&De.render(H);const be=S.toneMapping;S.toneMapping=pi;const ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),se===!0&&ne.setGlobalState(S.clippingPlanes,G),rr(x,H,G),C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie),je.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ee=0,nt=k.length;Ee<nt;Ee++){const mt=k[Ee],_t=mt.object,Kt=mt.geometry,it=mt.material,Ae=mt.group;if(it.side===$n&&_t.layers.test(G.layers)){const zn=it.side;it.side=tn,it.needsUpdate=!0,Mc(_t,H,G,Kt,it,Ae),it.side=zn,it.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie))}S.setRenderTarget(Me),S.setClearColor(q,K),ke!==void 0&&(G.viewport=ke),S.toneMapping=be}function rr(x,k,H){const G=k.isScene===!0?k.overrideMaterial:null;for(let N=0,ie=x.length;N<ie;N++){const fe=x[N],Me=fe.object,be=fe.geometry,ke=G===null?fe.material:G,Be=fe.group;Me.layers.test(H.layers)&&Mc(Me,k,H,be,ke,Be)}}function Mc(x,k,H,G,N,ie){x.onBeforeRender(S,k,H,G,N,ie),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,k,H,G,x,ie),N.transparent===!0&&N.side===$n&&N.forceSinglePass===!1?(N.side=tn,N.needsUpdate=!0,S.renderBufferDirect(H,k,G,N,x,ie),N.side=_i,N.needsUpdate=!0,S.renderBufferDirect(H,k,G,N,x,ie),N.side=$n):S.renderBufferDirect(H,k,G,N,x,ie),x.onAfterRender(S,k,H,G,N,ie)}function or(x,k,H){k.isScene!==!0&&(k=St);const G=Re.get(x),N=p.state.lights,ie=p.state.shadowsArray,fe=N.state.version,Me=Ce.getParameters(x,N.state,ie,k,H),be=Ce.getProgramCacheKey(Me);let ke=G.programs;G.environment=x.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(x.isMeshStandardMaterial?z:v).get(x.envMap||G.environment),G.envMapRotation=G.environment!==null&&x.envMap===null?k.environmentRotation:x.envMapRotation,ke===void 0&&(x.addEventListener("dispose",Oe),ke=new Map,G.programs=ke);let Be=ke.get(be);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===fe)return Ec(x,Me),Be}else Me.uniforms=Ce.getUniforms(x),x.onBeforeCompile(Me,S),Be=Ce.acquireProgram(Me,be),ke.set(be,Be),G.uniforms=Me.uniforms;const Ee=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Ec(x,Me),G.needsLights=Nu(x),G.lightsStateVersion=fe,G.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function bc(x){if(x.uniformsList===null){const k=x.currentProgram.getUniforms();x.uniformsList=Nr.seqWithValue(k.seq,x.uniforms)}return x.uniformsList}function Ec(x,k){const H=Re.get(x);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Uu(x,k,H,G,N){k.isScene!==!0&&(k=St),C.resetTextureUnits();const ie=k.fog,fe=G.isMeshStandardMaterial?k.environment:null,Me=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ss,be=(G.isMeshStandardMaterial?z:v).get(G.envMap||fe),ke=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let _t=pi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_t=S.toneMapping);const Kt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=Kt!==void 0?Kt.length:0,Ae=Re.get(G),zn=p.state.lights;if(se===!0&&(Te===!0||x!==y)){const hn=x===y&&G.id===M;ne.setState(G,x,hn)}let st=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==zn.state.version||Ae.outputColorSpace!==Me||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==be||G.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==ke||Ae.vertexTangents!==Be||Ae.morphTargets!==Ee||Ae.morphNormals!==nt||Ae.morphColors!==mt||Ae.toneMapping!==_t||Ae.morphTargetsCount!==it)&&(st=!0):(st=!0,Ae.__version=G.version);let yn=Ae.currentProgram;st===!0&&(yn=or(G,k,N));let zi=!1,nn=!1,Cs=!1;const vt=yn.getUniforms(),Dn=Ae.uniforms;if(Le.useProgram(yn.program)&&(zi=!0,nn=!0,Cs=!0),G.id!==M&&(M=G.id,nn=!0),zi||y!==x){Le.buffers.depth.getReversed()?(le.copy(x.projectionMatrix),wd(le),Rd(le),vt.setValue(F,"projectionMatrix",le)):vt.setValue(F,"projectionMatrix",x.projectionMatrix),vt.setValue(F,"viewMatrix",x.matrixWorldInverse);const Qn=vt.map.cameraPosition;Qn!==void 0&&Qn.setValue(F,Ne.setFromMatrixPosition(x.matrixWorld)),Ke.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,nn=!0,Cs=!0)}if(N.isSkinnedMesh){vt.setOptional(F,N,"bindMatrix"),vt.setOptional(F,N,"bindMatrixInverse");const hn=N.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),vt.setValue(F,"boneTexture",hn.boneTexture,C))}N.isBatchedMesh&&(vt.setOptional(F,N,"batchingTexture"),vt.setValue(F,"batchingTexture",N._matricesTexture,C),vt.setOptional(F,N,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",N._indirectTexture,C),vt.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",N._colorsTexture,C));const As=H.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Ue.update(N,H,yn),(nn||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,vt.setValue(F,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Dn.envMap.value=be,Dn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&(Dn.envMapIntensity.value=k.environmentIntensity),nn&&(vt.setValue(F,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&ku(Dn,Cs),ie&&G.fog===!0&&he.refreshFogUniforms(Dn,ie),he.refreshMaterialUniforms(Dn,G,X,te,p.state.transmissionRenderTarget[x.id]),Nr.upload(F,bc(Ae),Dn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Nr.upload(F,bc(Ae),Dn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(F,"center",N.center),vt.setValue(F,"modelViewMatrix",N.modelViewMatrix),vt.setValue(F,"normalMatrix",N.normalMatrix),vt.setValue(F,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const hn=G.uniformsGroups;for(let Qn=0,ei=hn.length;Qn<ei;Qn++){const Tc=hn[Qn];I.update(Tc,yn),I.bind(Tc,yn)}}return yn}function ku(x,k){x.ambientLightColor.needsUpdate=k,x.lightProbe.needsUpdate=k,x.directionalLights.needsUpdate=k,x.directionalLightShadows.needsUpdate=k,x.pointLights.needsUpdate=k,x.pointLightShadows.needsUpdate=k,x.spotLights.needsUpdate=k,x.spotLightShadows.needsUpdate=k,x.rectAreaLights.needsUpdate=k,x.hemisphereLights.needsUpdate=k}function Nu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,k,H){Re.get(x.texture).__webglTexture=k,Re.get(x.depthTexture).__webglTexture=H;const G=Re.get(x);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,k){const H=Re.get(x);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(x,k=0,H=0){L=x,w=k,R=H;let G=!0,N=null,ie=!1,fe=!1;if(x){const be=Re.get(x);if(be.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)C.setupRenderTarget(x);else if(be.__hasExternalTextures)C.rebindTextures(x,Re.get(x.texture).__webglTexture,Re.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ee=x.depthTexture;if(be.__boundDepthTexture!==Ee){if(Ee!==null&&Re.has(Ee)&&(x.width!==Ee.image.width||x.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(x)}}const ke=x.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(fe=!0);const Be=Re.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?N=Be[k][H]:N=Be[k],ie=!0):x.samples>0&&C.useMultisampledRTT(x)===!1?N=Re.get(x).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[H]:N=Be,P.copy(x.viewport),V.copy(x.scissor),B=x.scissorTest}else P.copy(we).multiplyScalar(X).floor(),V.copy(Xe).multiplyScalar(X).floor(),B=ft;if(Le.bindFramebuffer(F.FRAMEBUFFER,N)&&G&&Le.drawBuffers(x,N),Le.viewport(P),Le.scissor(V),Le.setScissorTest(B),ie){const be=Re.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,H)}else if(fe){const be=Re.get(x.texture),ke=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,H||0,ke)}M=-1},this.readRenderTargetPixels=function(x,k,H,G,N,ie,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){Le.bindFramebuffer(F.FRAMEBUFFER,Me);try{const be=x.texture,ke=be.format,Be=be.type;if(!Ke.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=x.width-G&&H>=0&&H<=x.height-N&&F.readPixels(k,H,G,N,He.convert(ke),He.convert(Be),ie)}finally{const be=L!==null?Re.get(L).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,k,H,G,N,ie,fe){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){const be=x.texture,ke=be.format,Be=be.type;if(!Ke.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=x.width-G&&H>=0&&H<=x.height-N){Le.bindFramebuffer(F.FRAMEBUFFER,Me);const Ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.bufferData(F.PIXEL_PACK_BUFFER,ie.byteLength,F.STREAM_READ),F.readPixels(k,H,G,N,He.convert(ke),He.convert(Be),0);const nt=L!==null?Re.get(L).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,nt);const mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ad(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ie),F.deleteBuffer(Ee),F.deleteSync(mt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,k=null,H=0){x.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1]);const G=Math.pow(2,-H),N=Math.floor(x.image.width*G),ie=Math.floor(x.image.height*G),fe=k!==null?k.x:0,Me=k!==null?k.y:0;C.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,fe,Me,N,ie),Le.unbindTexture()},this.copyTextureToTexture=function(x,k,H=null,G=null,N=0){x.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,x=arguments[1],k=arguments[2],N=arguments[3]||0,H=null);let ie,fe,Me,be,ke,Be,Ee,nt,mt;const _t=x.isCompressedTexture?x.mipmaps[N]:x.image;H!==null?(ie=H.max.x-H.min.x,fe=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,be=H.min.x,ke=H.min.y,Be=H.isBox3?H.min.z:0):(ie=_t.width,fe=_t.height,Me=_t.depth||1,be=0,ke=0,Be=0),G!==null?(Ee=G.x,nt=G.y,mt=G.z):(Ee=0,nt=0,mt=0);const Kt=He.convert(k.format),it=He.convert(k.type);let Ae;k.isData3DTexture?(C.setTexture3D(k,0),Ae=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Ae=F.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Ae=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const zn=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=F.getParameter(F.UNPACK_SKIP_PIXELS),zi=F.getParameter(F.UNPACK_SKIP_ROWS),nn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,be),F.pixelStorei(F.UNPACK_SKIP_ROWS,ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Be);const Cs=x.isDataArrayTexture||x.isData3DTexture,vt=k.isDataArrayTexture||k.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const Dn=Re.get(x),As=Re.get(k),hn=Re.get(Dn.__renderTarget),Qn=Re.get(As.__renderTarget);Le.bindFramebuffer(F.READ_FRAMEBUFFER,hn.__webglFramebuffer),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ei=0;ei<Me;ei++)Cs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(x).__webglTexture,N,Be+ei),x.isDepthTexture?(vt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(k).__webglTexture,N,mt+ei),F.blitFramebuffer(be,ke,ie,fe,Ee,nt,ie,fe,F.DEPTH_BUFFER_BIT,F.NEAREST)):vt?F.copyTexSubImage3D(Ae,N,Ee,nt,mt+ei,be,ke,ie,fe):F.copyTexSubImage2D(Ae,N,Ee,nt,mt+ei,be,ke,ie,fe);Le.bindFramebuffer(F.READ_FRAMEBUFFER,null),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vt?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(Ae,N,Ee,nt,mt,ie,fe,Me,Kt,it,_t.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,N,Ee,nt,mt,ie,fe,Me,Kt,_t.data):F.texSubImage3D(Ae,N,Ee,nt,mt,ie,fe,Me,Kt,it,_t):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,Ee,nt,ie,fe,Kt,it,_t.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,Ee,nt,_t.width,_t.height,Kt,_t.data):F.texSubImage2D(F.TEXTURE_2D,N,Ee,nt,ie,fe,Kt,it,_t);F.pixelStorei(F.UNPACK_ROW_LENGTH,zn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),F.pixelStorei(F.UNPACK_SKIP_ROWS,zi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,nn),N===0&&k.generateMipmaps&&F.generateMipmap(Ae),Le.unbindTexture()},this.copyTextureToTexture3D=function(x,k,H=null,G=null,N=0){return x.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,x=arguments[2],k=arguments[3],N=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,k,H,G,N)},this.initRenderTarget=function(x){Re.get(x).__webglFramebuffer===void 0&&C.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?C.setTextureCube(x,0):x.isData3DTexture?C.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?C.setTexture2DArray(x,0):C.setTexture2D(x,0),Le.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,Le.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class oc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new oc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hg extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Da,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new U;class Yr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ka extends bs{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ts;const Is=new U,ns=new U,is=new U,ss=new We,Us=new We,Rh=new yt,wr=new U,ks=new U,Rr=new U,bl=new We,Bo=new We,El=new We;class Tl extends Dt{constructor(e=new ka){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new Ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gg(t,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new Yr(n,3,0,!1)),ts.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=ts,this.material=e,this.center=new We(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Rh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Pr(wr.set(-.5,-.5,0),is,o,ns,s,r),Pr(ks.set(.5,-.5,0),is,o,ns,s,r),Pr(Rr.set(.5,.5,0),is,o,ns,s,r),bl.set(0,0),Bo.set(1,0),El.set(1,1);let a=e.ray.intersectTriangle(wr,ks,Rr,!1,Is);if(a===null&&(Pr(ks.set(-.5,.5,0),is,o,ns,s,r),Bo.set(0,1),a=e.ray.intersectTriangle(wr,Rr,ks,!1,Is),a===null))return;const c=e.ray.origin.distanceTo(Is);c<e.near||c>e.far||t.push({distance:c,point:Is.clone(),uv:gn.getInterpolation(Is,wr,ks,Rr,bl,Bo,El,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pr(i,e,t,n,s,r){ss.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*ss.x-s*ss.y,Us.y=s*ss.x+r*ss.y):Us.copy(ss),i.copy(e),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(Rh)}class Ph extends Xt{constructor(e,t,n,s,r,o,a,c,h){super(e,t,n,s,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class io extends Ln{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;T(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(l),this.setAttribute("position",new cn(u,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(f,2));function T(){const S=new U,D=new U;let w=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const M=[],y=L/r,P=y*(t-e)+e;for(let V=0;V<=s;V++){const B=V/s,q=B*c+a,K=Math.sin(q),$=Math.cos(q);D.x=P*K,D.y=-y*n+m,D.z=P*$,u.push(D.x,D.y,D.z),S.set(K,R,$).normalize(),d.push(S.x,S.y,S.z),f.push(B,1-y),M.push(g++)}_.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const y=_[M][L],P=_[M+1][L],V=_[M+1][L+1],B=_[M][L+1];(e>0||M!==0)&&(l.push(y,P,B),w+=3),(t>0||M!==r-1)&&(l.push(P,V,B),w+=3)}h.addGroup(p,w,0),p+=w}function E(S){const D=g,w=new We,R=new U;let L=0;const M=S===!0?e:t,y=S===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let V=0;V<=s;V++){const q=V/s*c+a,K=Math.cos(q),$=Math.sin(q);R.x=M*$,R.y=m*y,R.z=M*K,u.push(R.x,R.y,R.z),d.push(0,y,0),w.x=K*.5+.5,w.y=$*.5*y+.5,f.push(w.x,w.y),g++}for(let V=0;V<s;V++){const B=D+V,q=P+V;S===!0?l.push(q,q+1,B):l.push(q+1,q,B),L+=3}h.addGroup(p,L,S===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class so extends Ln{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let h=0;const l=[],u=new U,d=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],E=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let D=0;D<=t;D++){const w=D/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+S,1-E),T.push(h++)}l.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const E=l[p][T+1],S=l[p][T],D=l[p+1][T],w=l[p+1][T+1];(p!==0||o>0)&&f.push(E,S,w),(p!==n-1||c<Math.PI)&&f.push(S,D,w)}this.setIndex(f),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hs extends bs{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Cl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vg{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){const u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=h.length;u<d;u+=2){const f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null}}}const Wg=new Vg;class ac{constructor(e){this.manager=e!==void 0?e:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ac.DEFAULT_MATERIAL_NAME="__DEFAULT";class Xg extends ac{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Cl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Js("img");function c(){l(),Cl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(u){l(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){a.removeEventListener("load",c,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class qg extends ac{constructor(e){super(e)}load(e,t,n,s){const r=new Xt,o=new Xg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class cc extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $g extends cc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zo=new yt,Al=new U,wl=new U;class Lh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wl),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rl=new yt,Ns=new U,Ho=new U;class Yg extends Lh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),Ho.copy(n.position),Ho.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ho),n.updateMatrixWorld(),s.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl)}}class Dh extends cc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jg extends Lh{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kg extends cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new jg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);const rt=1.3,Mt=32,bt=24,mn=Mt*rt,rs=bt*rt,pe=4,$s=.25,vn=.25,Fe=-.6,Ih=2.6,Zg=1.6,Jg=3.2,Qg=2,e_=1,t_=.2,n_=.32,lc=2.6,Pl=1.1,Zt=2.2,Fr={x:8,y:.6,z:-10},Tn=pe,Or=2*pe,as=-pe,Ht=Fe,Ve={x0:-2.3,z0:-18,x1:46,z1:40},Nn={x0:36.5,z0:-18,x1:41.5,z1:26},Pe={x0:34,z0:26,x1:44,z1:34},b={wall:[.74,.72,.68],floor:[.42,.4,.38],wood:[.42,.27,.16],woodLight:[.63,.48,.31],dark:[.07,.07,.08],metal:[.62,.64,.67],fabric:[.33,.36,.43],porcelain:[.92,.92,.9],accent:[.48,.22,.22],grass:[.36,.52,.3],roof:[.22,.2,.22],concrete:[.42,.42,.42],drape:[.45,.14,.16],leaf:[.22,.4,.2],plastic:[.2,.28,.24],paper:[.78,.72,.58],rug:[.35,.25,.22],tile:[.7,.82,.85],sheet:[.82,.8,.74],tarp:[.2,.3,.42],lattice:[.55,.42,.28]},A=(i,e,t)=>({x:i,y:e,z:t}),Cn=(i,e)=>A(i.x+e.x,i.y+e.y,i.z+e.z),Br=(i,e)=>A(i.x*e,i.y*e,i.z*e),wn=A(0,0,1),pn=A(0,0,-1),ci=A(-1,0,0),fn=A(1,0,0),Se=(i,e,t)=>A(i*rt,e,t*rt);function Rt(i){const e=A(i.z,0,-i.x);return{fwd:i,right:e,up:A(0,1,0)}}function Q(i,e,t,n,s){return Cn(e,Cn(Cn(Br(i.right,t),Br(i.up,n)),Br(i.fwd,s)))}function ue(i,e,t,n){return Math.abs(i.fwd.x)>.5?A(n,t,e):A(e,t,n)}class i_{constructor(){this.boxes=[],this.covers=[],this.spots=[],this.rooms=[],this.lights=[],this.points={},this.removed=new Set}box(e,t,n,s,r={}){const o={name:e,shape:r.shape||"box",c:t,s:n,color:s,solid:r.solid!==!1,rotX:r.rotX||0};return this.boxes.push(o),o}prop(e,t,n,s,r,o){return this.box(e,Se(t[0],n,t[1]),s,r,o)}remove(e){const t=this.boxes.findIndex(n=>n.name===e);t>=0&&this.boxes.splice(t,1)}legs(e,t,n,s,r,o,a){for(const c of[-1,1])for(const h of[-1,1])this.box(e+"_Leg",A(t.x+c*(r/2-.08),n+s/2,t.z+h*(o/2-.08)),A(.12,s,.12),a)}bed(e,t,n,s,r){const a=Se(t[0],0,t[1]),c=Math.max(.35,s.y-.45);this.box(e,A(a.x,n+.45+c/2,a.z),A(s.x,c,s.z),r),this.box(e+"_Frame",A(a.x,n+.45-.04,a.z),A(s.x+.1,.08,s.z+.1),b.wood),this.legs(e,a,n,.45,s.x,s.z,b.dark),this.box(e+"_Head",A(a.x,n+.6,a.z-s.z/2-.09),A(s.x+.1,1.2,.08),b.wood)}table(e,t,n,s,r,o=.1){const a=Se(t[0],0,t[1]);this.box(e,A(a.x,n+s.y-o/2,a.z),A(s.x,o,s.z),r),this.legs(e,a,n,s.y-o,s.x,s.z,r)}basin(e,t,n,s,r){const o=Se(t[0],0,t[1]),a=.08;this.box(e,A(o.x,n+a/2,o.z),A(s.x,a,s.z),r),this.box(e+"_W",A(o.x-s.x/2+a/2,n+s.y/2,o.z),A(a,s.y,s.z),r),this.box(e+"_E",A(o.x+s.x/2-a/2,n+s.y/2,o.z),A(a,s.y,s.z),r),this.box(e+"_S",A(o.x,n+s.y/2,o.z-s.z/2+a/2),A(s.x,s.y,a),r),this.box(e+"_N",A(o.x,n+s.y/2,o.z+s.z/2-a/2),A(s.x,s.y,a),r)}wall(e,t,n,s,r,o,...a){const c=t[0]*rt,h=t[1]*rt,l=n[0]*rt,u=n[1]*rt,d=l-c,f=u-h,g=Math.hypot(d,f),_=d/g,m=f/g,p=(L,M,y,P,V)=>{if(M-L<.01||P-y<.01)return;const B=c+_*(L+M)/2,q=h+m*(L+M)/2,K=A(Math.abs(_)*(M-L)+Math.abs(m)*$s,P-y,Math.abs(m)*(M-L)+Math.abs(_)*$s);this.box(e+"_"+V,A(B,(y+P)/2,q),K,o)},T=Math.abs(_)>.5,E=T?c:h,S=Math.sign(T?_:m);let D=0,w=0;const R=a.slice().sort((L,M)=>(L.at*rt-E)*S-(M.at*rt-E)*S);for(const L of R){const M=(L.at*rt-E)*S,y=M-L.width/2,P=M+L.width/2;p(D,y,s,s+r,"S"+w),p(y,P,s,s+L.bottom,"Sill"+w),p(y,P,s+L.top,s+r,"Hdr"+w),D=P,w++}p(D,g,s,s+r,"S"+w)}rail(e,t,n,s){const r=t[0]*rt,o=t[1]*rt,a=n[0]*rt,c=n[1]*rt;this.box(e,A((r+a)/2,s+Pl/2,(o+c)/2),A(Math.max(Math.abs(a-r),.1),Pl,Math.max(Math.abs(c-o),.1)),b.wood)}floor(e,t,n,s,r,...o){const a=h=>({x0:h[0]*rt,z0:h[1]*rt,x1:h[2]*rt,z1:h[3]*rt}),c=[];Hs(a(t),o.map(a),0,c),c.forEach((h,l)=>this.box(e+"_"+l,A((h.x0+h.x1)/2,n-s/2,(h.z0+h.z1)/2),A(h.x1-h.x0,s,h.z1-h.z0),r))}stairs(e,t,n,s,r,o,a,c=t_,h=n_){const l=Se(t[0],n,t[1]);r*=rt,h*=rt;const u=Math.round(o/c);for(let d=0;d<u;d++){const f=(d+1)*c,g=Cn(Cn(l,Br(s,(d+.5)*h)),A(0,f/2,0)),_=A(Math.abs(s.x)*h+Math.abs(s.z)*r,f,Math.abs(s.z)*h+Math.abs(s.x)*r);this.box(e+"_"+d,g,_,a)}}light(e,t,n,s,r,o=1.8){this.lights.push({name:e,p:Se(t[0],n,t[1]),color:s,range:r*rt,intensity:o})}room(e,t,n,s,r,o,a,c){this.rooms.push({name:e,min:Se(t,o-.3,s),max:Se(n,o+3.2,r),scan:Se(a,o,c),floorY:o})}chair(e,t,n,s,r){const o=Se(t[0],0,t[1]);if(this.box(e+"_Seat",A(o.x,n+.42,o.z),A(r?.9:.5,.12,r?.9:.5),s),this.box(e+"_Back",A(o.x,n+.75,o.z-(r?.38:.2)),A(r?.9:.5,.7,.12),s),r)for(const a of[-1,1])this.box(e+"_Arm",A(o.x+a*.4,n+.55,o.z),A(.12,.6,.9),s);else this.legs(e,o,n,.36,.5,.5,s)}rug(e,t,n,s){this.box(e,Se(t[0],n+.01,t[1]),A(s[0],.02,s[1]),b.rug,{solid:!1})}picture(e,t,n,s,r){const o=Se(t[0],n,t[1]),a=Math.abs(s.x)>.5?A(.04,r[1],r[0]):A(r[0],r[1],.04);this.box(e,o,a,b.accent,{solid:!1})}lamp(e,t,n,s=1.6){const r=Se(t[0],0,t[1]);this.box(e+"_Pole",A(r.x,n+s/2,r.z),A(.06,s,.06),b.metal,{shape:"cyl"}),this.box(e+"_Shade",A(r.x,n+s,r.z),A(.36,.28,.36),b.paper,{shape:"cyl",solid:!1})}nightstands(e,t,n,s){for(const r of[-1,1]){const o=Se(t[0],0,t[1]);this.box("Nightstand_"+e,A(o.x+r*(s/2+.35),n+.28,o.z-.6),A(.5,.56,.45),b.wood)}}cover(e,t,n,s,r){const o=this.covers.length;return this.covers.push({id:o,name:e,pivot:t,fwd:n.fwd,parts:s,motion:r}),o}spot(e,t,n,s,r,o,a,c,h){const l=this.spots.length;this.spots.push({id:l,key:e,label:t,room:n,entry:s,hidden:r,dir:o,pose:a,coverId:c,eye:h??(a==="lie"?.35:a==="crouch"?.85:1.5)})}closet(e,t,n,s,r,o,a,c=!0){const h=Rt(r),l=Se(t[0],n,t[1]),u=.06,[d,f,g]=[s.x,s.y,s.z],_=b.woodLight;this.box(e+"_Back",Q(h,l,0,f/2,-g/2+u/2),ue(h,d,f,u),_),this.box(e+"_L",Q(h,l,-d/2+u/2,f/2,0),ue(h,u,f,g),_),this.box(e+"_R",Q(h,l,d/2-u/2,f/2,0),ue(h,u,f,g),_),this.box(e+"_Top",Q(h,l,0,f-u/2,0),ue(h,d,u,g),_,{solid:!1}),this.box(e+"_Plinth",Q(h,l,0,.05,0),ue(h,d,.1,g),_,{solid:!1});const m=[];for(const T of[-1,1])m.push({hinge:[T*(d/2-u/2),0,g/2],leaf:[-T*(d/4-u/2),f/2+.03,0,d/2-u,f-.1,.035],color:b.wood,slats:c,openAngle:-T*1.75});const p=this.cover(e+"_Doors",l,h,m,"hinge");this.spot(e,o,a,Q(h,l,0,0,g/2+.75),Q(h,l,0,0,-.05),h.fwd,"stand",p)}drape(e,t,n,s,r){const o=Rt(s),a=Se(t[0],n,t[1]),c=2.5,h=2.85,l=.55,u=.035,d=$s/2;this.box(e+"_Rod",Q(o,a,0,h+.08,l),ue(o,c+.2,.05,.05),b.metal,{solid:!1,shape:"cyl"});for(const g of[-1,1])this.box(e+"_Return",Q(o,a,g*(c/2-u/2),h/2,l/2+d/2),ue(o,u,h,l-d),b.drape,{solid:!1});this.box(e+"_Net",Q(o,a,0,1.8,d+.02),ue(o,c,1.7,.02),b.sheet,{solid:!1});const f=this.cover(e+"_Panel",a,o,[{hinge:[0,0,l],leaf:[0,h/2,0,c,h,u],color:b.drape}],"slide");this.spot(e,"hide behind the curtains",r,Q(o,a,0,0,l+.7),Q(o,a,0,0,d+(l-d)/2),o.fwd,"stand",f)}bedSkirt(e,t,n,s,r){const o=Se(t[0],n,t[1]),a=.1,c=.41,h=2.2,l=1.8,u=c-a,d=n+a+u/2;this.box(e+"_SkirtW",A(o.x-h/2,d,o.z),A(.02,u,l),b.sheet,{solid:!1}),this.box(e+"_SkirtE",A(o.x+h/2,d,o.z),A(.02,u,l),b.sheet,{solid:!1}),this.box(e+"_SkirtS",A(o.x,d,o.z-l/2),A(h,u,.02),b.sheet,{solid:!1}),this.box(e+"_SkirtN",A(o.x,d,o.z+l/2),A(h,u,.02),b.sheet,{solid:!1});const f=Se(s[0],n,s[1]),g=Ci(A(f.x-o.x,0,f.z-o.z));this.spot(e,"hide under the bed",r,f,o,g,"lie",-1,.3)}tableApron(e,t,n,s,r,o,a,c,h){const l=Se(t[0],n,t[1]),u=.12,d=n+u,f=n+s.y-r+.04,g=f-d,_=(f+d)/2;this.box(e+"_ApronW",A(l.x-s.x/2,_,l.z),A(.02,g,s.z),h,{solid:!1}),this.box(e+"_ApronE",A(l.x+s.x/2,_,l.z),A(.02,g,s.z),h,{solid:!1}),this.box(e+"_ApronS",A(l.x,_,l.z-s.z/2),A(s.x,g,.02),h,{solid:!1}),this.box(e+"_ApronN",A(l.x,_,l.z+s.z/2),A(s.x,g,.02),h,{solid:!1});const m=Se(o[0],n,o[1]);this.spot(e,a,c,m,l,Ci(A(m.x-l.x,0,m.z-l.z)),"lie",-1,.3)}islandPanels(e,t,n,s,r,o){const a=Se(t[0],n,t[1]),c=Se(r[0],n,r[1]),h=Rt(Ci(A(c.x-a.x,0,c.z-a.z))),l=Math.abs(h.fwd.x)>.5?s.z:s.x,u=Math.abs(h.fwd.x)>.5?s.x:s.z,d=s.y-.1,f=.03;this.box(e+"_PanelBack",Q(h,a,0,d/2,-u/2),ue(h,l,d,f),b.woodLight,{solid:!1}),this.box(e+"_PanelL",Q(h,a,-l/2,d/2,0),ue(h,f,d,u),b.woodLight,{solid:!1}),this.box(e+"_PanelR",Q(h,a,l/2,d/2,0),ue(h,f,d,u),b.woodLight,{solid:!1});const g=this.cover(e+"_Curtain",a,h,[{hinge:[0,0,u/2],leaf:[0,d/2,0,l,d-.05,f],color:b.sheet}],"slide");this.spot(e,"hide under the island",o,Q(h,a,0,0,u/2+.8),a,h.fwd,"lie",g,.3)}deskPanels(e,t,n,s,r,o){const a=Se(t[0],n,t[1]),c=Se(r[0],n,r[1]),h=Rt(Ci(A(c.x-a.x,0,c.z-a.z))),l=s.x,u=s.z,d=s.y-.1,f=.03;this.box(e+"_Modesty",Q(h,a,0,d/2,-u/2),ue(h,l,d,f),b.wood,{solid:!1}),this.box(e+"_SideL",Q(h,a,-l/2,d/2,0),ue(h,f,d,u),b.wood,{solid:!1}),this.box(e+"_SideR",Q(h,a,l/2,d/2,0),ue(h,f,d,u),b.wood,{solid:!1}),this.spot(e,"hide under the desk",o,Q(h,a,0,0,u/2+.7),Q(h,a,-.2,0,0),h.fwd,"lie",-1,.3)}wardrobe(e,t,n,s,r,o,a,c=b.dark){const h=Rt(r),l=Se(t[0],n,t[1]),u=.06,[d,f,g]=[s.x,s.y,s.z];this.box(e+"_Back",Q(h,l,0,f/2,-g/2+u/2),ue(h,d,f,u),c),this.box(e+"_L",Q(h,l,-d/2+u/2,f/2,0),ue(h,u,f,g),c),this.box(e+"_R",Q(h,l,d/2-u/2,f/2,0),ue(h,u,f,g),c),this.box(e+"_Top",Q(h,l,0,f-u/2,0),ue(h,d,u,g),c,{solid:!1}),this.box(e+"_Plinth",Q(h,l,0,.05,0),ue(h,d,.1,g),c,{solid:!1});const _=this.cover(e+"_Door",l,h,[{hinge:[-d/2+u/2,0,g/2],leaf:[d/2-u/2,f/2+.03,0,d-u,f-.1,.035],color:b.wood,openAngle:1.75}],"hinge");this.spot(e,o,a,Q(h,l,0,0,g/2+.75),Q(h,l,0,0,-.05),h.fwd,"stand",_)}showerStall(e,t,n,s,r,o,a,c){const h=Rt(r),l=Se(t[0],n,t[1]),u=2.1,d=.04,f=Math.abs(h.fwd.x)>.5?s.z:s.x,g=Math.abs(h.fwd.x)>.5?s.x:s.z;this.box(e+"_StallBack",Q(h,l,0,u/2,-g/2-.05),ue(h,f+.2,u,d),b.tile),this.box(e+"_StallL",Q(h,l,-f/2-.05,u/2,0),ue(h,d,u,g+.1),b.tile),this.box(e+"_StallR",Q(h,l,f/2+.05,u/2,0),ue(h,d,u,g+.1),b.tile),this.box(e+"_StallRod",Q(h,l,0,u,g/2+.05),ue(h,f+.2,.04,.04),b.metal,{solid:!1,shape:"cyl"});const _=this.cover(e+"_Curtain",l,h,[{hinge:[0,0,g/2+.05],leaf:[0,u/2+.02,0,f+.2,u-.08,.02],color:b.plastic}],"slide"),m=Se(o[0],n,o[1]);this.spot(e,a,c,m,Cn(l,A(0,.08,0)),h.fwd,"lie",_,.5)}freezerLid(e,t,n,s,r,o,a){const c=Se(t[0],n,t[1]),h=Se(r[0],n,r[1]),l=Rt(Ci(A(h.x-c.x,0,h.z-c.z))),u=Math.abs(l.fwd.x)>.5?s.z:s.x,d=Math.abs(l.fwd.x)>.5?s.x:s.z,f=this.cover(e+"_Lid",c,l,[{hinge:[0,s.y,-d/2],leaf:[0,.03,d/2,u,.06,d],color:b.metal,openAngle:-1.3,axis:"x"}],"lid");this.spot(e,o,a,h,Cn(c,A(0,.08,0)),l.fwd,"lie",f,.5)}chest(e,t,n,s,r,o,a,c){const h=Se(t[0],n,t[1]),l=Se(o[0],n,o[1]),u=Rt(Ci(A(l.x-h.x,0,l.z-h.z))),d=.05,f=Math.abs(u.fwd.x)>.5?s.z:s.x,g=Math.abs(u.fwd.x)>.5?s.x:s.z,_=s.y;this.box(e+"_Floor",Q(u,h,0,d/2,0),ue(u,f,d,g),r),this.box(e+"_Back",Q(u,h,0,_/2,-g/2+d/2),ue(u,f,_,d),r),this.box(e+"_Front",Q(u,h,0,_/2,g/2-d/2),ue(u,f,_,d),r),this.box(e+"_L",Q(u,h,-f/2+d/2,_/2,0),ue(u,d,_,g),r),this.box(e+"_R",Q(u,h,f/2-d/2,_/2,0),ue(u,d,_,g),r);const m=this.cover(e+"_Lid",h,u,[{hinge:[0,_,-g/2],leaf:[0,.03,g/2,f,.06,g],color:b.wood,openAngle:-1.4,axis:"x"}],"lid");this.spot(e,a,c,l,Cn(h,A(0,.06,0)),u.fwd,"lie",m,.45)}bar(e,t,n,s){const r=Se(t[0],n,t[1]),o=Rt(wn),a=3.2;this.box(e+"_Counter",Q(o,r,0,.55,-.35),ue(o,a,1.1,.5),b.wood),this.box(e+"_Worktop",Q(o,r,0,1.12,-.1),ue(o,a+.1,.05,1),b.dark,{solid:!1}),this.box(e+"_ShelfBack",Q(o,r,0,.9,1.05),ue(o,a,1.8,.3),b.woodLight);for(let c=0;c<3;c++)this.box(e+"_Stool",Q(o,r,-1+c,.35,-.9),A(.35,.7,.35),b.dark,{shape:"cyl"});this.spot(e,"hide behind the bar",s,Q(o,r,1.9,0,.15),Q(o,r,-.3,0,.2),A(1,0,0),"crouch",-1,.85)}locker(e,t,n,s,r){this.closet(e,t,n,A(.7,2,.65),wn,s,r,!1)}workbenchTarp(e,t,n,s,r,o,a){const c=Rt(r),h=Se(t[0],n,t[1]),l=.02,u=Math.abs(c.fwd.x)>.5?s.z:s.x,d=Math.abs(c.fwd.x)>.5?s.x:s.z,f=s.y-.08;this.box(e+"_TarpBack",Q(c,h,0,f/2,-d/2),ue(c,u,f,l),b.tarp,{solid:!1}),this.box(e+"_TarpL",Q(c,h,-u/2,f/2,0),ue(c,l,f,d),b.tarp,{solid:!1}),this.box(e+"_TarpR",Q(c,h,u/2,f/2,0),ue(c,l,f,d),b.tarp,{solid:!1});const g=this.cover(e+"_Tarp",h,c,[{hinge:[0,f,d/2],leaf:[0,-f/2,0,u,f,l],color:b.tarp,openAngle:-1.2,axis:"x"}],"lid");this.spot(e,o,a,Q(c,h,0,0,d/2+.75),Q(c,h,0,0,-.05),c.fwd,"lie",g,.3)}crateFort(e){for(const r of["OldCrates_A","OldCrates_A2","OldCrates_B"])this.remove(r);const t=Se(20.1,e,10),n=Rt(wn);for(const r of[-1,1])this.box("CrateStack_"+r,Q(n,t,r*.8,.5,0),A(1,1,1),b.wood),this.box("CrateStack_"+r+"_2",Q(n,t,r*.8,1.5,0),A(1,1,1),b.wood);this.box("CrateBoard",Q(n,t,0,1,-.5),ue(n,.6,2,.05),b.woodLight);const s=this.cover("CrateFront",t,n,[{hinge:[0,0,.55],leaf:[0,.5,0,.7,1,.5],color:b.wood,slideDir:"y",slideAmount:1.2}],"slide");this.spot("OldCrates","hide between the crates","Cellar",Q(n,t,0,0,1.4),t,n.fwd,"stand",s)}dustSheetSofa(e,t,n,s,r,o){const a=Se(t[0],n,t[1]),c=Se(s[0],n,s[1]),h=Rt(Ci(A(c.x-a.x,0,c.z-a.z))),l=1.1,u=1.05,d=2.3,f=.02;this.box(e+"_Seat",Q(h,a,0,.25,0),ue(h,d,.5,l),b.fabric),this.box(e+"_Back",Q(h,a,0,.55,-l/2+.12),ue(h,d,u,.24),b.fabric),this.box(e+"_SheetTop",Q(h,a,0,u+.05,0),ue(h,d+.2,f,l+.2),b.sheet,{solid:!1}),this.box(e+"_SheetBack",Q(h,a,0,u/2,-l/2-.1),ue(h,d+.2,u+.1,f),b.sheet,{solid:!1});for(const _ of[-1,1])this.box(e+"_SheetEnd",Q(h,a,_*(d/2+.1),u/2,0),ue(h,f,u+.1,l+.2),b.sheet,{solid:!1});const g=this.cover(e+"_Sheet",a,h,[{hinge:[0,u+.05,l/2+.1],leaf:[0,-u/2,0,d+.2,u,f],color:b.sheet,openAngle:-1.3,axis:"x"}],"lid");this.spot(e,r,o,Q(h,a,0,0,l/2+.7),Q(h,a,.15,.4,0),h.fwd,"lie",g,.75)}kneewall(e,t,n,s,r){const o=Se(t[0],n,t[1]),a=Rt(wn),c=3,h=1.15,l=1,u=.04;this.box(e+"_Top",Q(a,o,0,h,0),ue(a,c,u,l),b.wall,{solid:!1}),this.box(e+"_Front",Q(a,o,.9,h/2,l/2),ue(a,1.2,h,u),b.wall),this.box(e+"_Front2",Q(a,o,-1.2,h/2,l/2),ue(a,.6,h,u),b.wall);for(const f of[-1,1])this.box(e+"_End",Q(a,o,f*c/2,h/2,0),ue(a,u,h,l),b.wall);const d=this.cover(e+"_Hatch",o,a,[{hinge:[-.9,0,l/2],leaf:[.45,h/2,0,.9,h-.05,.03],color:b.woodLight,openAngle:1.6}],"hinge");this.spot(e,s,r,Q(a,o,0,0,l/2+.7),Q(a,o,.6,0,-.1),a.fwd,"lie",d,.45)}shed(e,t,n,s,r){const o=Se(t[0],n,t[1]),a=Rt(pn),c=3,h=2.5,l=2.4,u=.08;this.box(e+"_Back",Q(a,o,0,h/2,-l/2),ue(a,c,h,u),b.woodLight),this.box(e+"_L",Q(a,o,-c/2,h/2,0),ue(a,u,h,l),b.woodLight),this.box(e+"_R",Q(a,o,c/2,h/2,0),ue(a,u,h,l),b.woodLight),this.box(e+"_Roof",Q(a,o,0,h,0),ue(a,c+.3,u,l+.3),b.roof,{solid:!1}),this.box(e+"_FrontL",Q(a,o,-.95,h/2,l/2),ue(a,1.1,h,u),b.woodLight),this.box(e+"_FrontR",Q(a,o,.95,h/2,l/2),ue(a,1.1,h,u),b.woodLight),this.box(e+"_Lintel",Q(a,o,0,h-.2,l/2),ue(a,1,.4,u),b.woodLight,{solid:!1}),this.box(e+"_Mower",Q(a,o,-.9,.3,-.6),A(.6,.6,.9),b.accent);const d=this.cover(e+"_Door",o,a,[{hinge:[-.45,0,l/2],leaf:[.45,h/2-.1,0,.9,h-.4,.04],color:b.wood,openAngle:1.7}],"hinge");this.spot(e,s,r,Q(a,o,0,0,l/2+.8),Q(a,o,.3,.08,-.3),a.fwd,"stand",d)}dogHouse(e,t,n,s,r){const o=Se(t[0],n,t[1]),a=Rt(pn),c=1.2,h=1.1,l=1.5,u=.05;this.box(e+"_Floor",Q(a,o,0,u/2,0),ue(a,c,u,l),b.woodLight),this.box(e+"_Back",Q(a,o,0,h/2,-l/2),ue(a,c,h,u),b.woodLight),this.box(e+"_L",Q(a,o,-c/2,h/2,0),ue(a,u,h,l),b.woodLight),this.box(e+"_R",Q(a,o,c/2,h/2,0),ue(a,u,h,l),b.woodLight),this.box(e+"_Roof",Q(a,o,0,h,0),ue(a,c+.2,u,l+.2),b.roof,{solid:!1}),this.box(e+"_FrontTop",Q(a,o,0,h-.15,l/2),ue(a,c,.3,u),b.woodLight,{solid:!1});const d=this.cover(e+"_Flap",o,a,[{hinge:[0,h-.3,l/2],leaf:[0,-.8/2,0,c-.1,h-.3,.02],color:b.plastic,openAngle:-1.2,axis:"x"}],"lid");this.spot(e,s,r,Q(a,o,0,0,l/2+.8),Q(a,o,0,.06,-.25),a.fwd,"lie",d,.4)}wheelieBins(e,t,n,s){const r=Se(e[0],t,e[1]),o=Rt(fn),a=.8,c=1.3,h=.9,l=.03;this.box("Bin2",Q(o,r,-1,c/2,0),ue(o,a,c,h),b.plastic),this.box("Bin_Floor",Q(o,r,0,l/2,0),ue(o,a,l,h),b.plastic),this.box("Bin_Back",Q(o,r,0,c/2,-h/2),ue(o,a,c,l),b.plastic),this.box("Bin_L",Q(o,r,-a/2,c/2,0),ue(o,l,c,h),b.plastic),this.box("Bin_R",Q(o,r,a/2,c/2,0),ue(o,l,c,h),b.plastic),this.box("Bin_Front",Q(o,r,0,c/2,h/2),ue(o,a,c,l),b.plastic);const u=this.cover("Bin_Lid",r,o,[{hinge:[0,c,-h/2],leaf:[0,.02,h/2,a+.04,.04,h+.04],color:b.plastic,openAngle:-1.6,axis:"x"}],"lid");this.spot("Bin",n,s,Q(o,r,0,0,h/2+.7),Q(o,r,0,.05,0),o.fwd,"crouch",u,.6)}carTrunk(e,t){this.remove("Car");const n=(Pe.x0+2.6)*rt,s=(Pe.z0+4)*rt,r=Fe,o=Rt(pn),a=A(n,r,s-2.4);this.box("Car_Body",A(n,r+.8,s+.7),A(2.2,1.5,3.4),b.dark),this.box("Car_Cab",A(n,r+1.55,s+.4),A(1.9,.5,2.2),b.metal);const c=2,h=1.3;this.box("Car_TrunkFloor",Q(o,a,0,.32,-h/2),ue(o,c,.05,h),b.dark),this.box("Car_TrunkBumper",Q(o,a,0,.55,0),ue(o,2.2,.5,.1),b.dark),this.box("Car_TrunkL",Q(o,a,-c/2,.65,-h/2),ue(o,.1,.7,h),b.dark),this.box("Car_TrunkR",Q(o,a,c/2,.65,-h/2),ue(o,.1,.7,h),b.dark);const u=this.cover("Car_TrunkLid",a,o,[{hinge:[0,1,-h],leaf:[0,.03,h/2,c+.2,.06,h],color:b.dark,openAngle:-1.2,axis:"x"}],"lid");this.spot("CarTrunk",e,t,Q(o,a,0,0,.8),Q(o,a,0,.36,-h/2),o.fwd,"lie",u,.5)}hedge(e,t,n,s,r){const o=Se(t[0],n,t[1]),a=Rt(fn),c=5,h=2.2,l=1.4;this.box(e+"_A",Q(a,o,-c/4-.4,h/2,0),ue(a,c/2-.8,h,l),b.leaf),this.box(e+"_B",Q(a,o,c/4+.4,h/2,0),ue(a,c/2-.8,h,l),b.leaf),this.box(e+"_Top",Q(a,o,0,h-.25,-.2),ue(a,1.8,.5,l-.4),b.leaf,{solid:!1}),this.box(e+"_Back",Q(a,o,0,h/2,-l/2+.15),ue(a,1.8,h,.3),b.leaf);const u=this.cover(e+"_Branches",o,a,[{hinge:[0,0,l/2-.2],leaf:[0,h/2,0,1.6,h,.4],color:b.leaf,slideDir:"y",slideAmount:1.9}],"slide");this.spot(e,s,r,Q(a,o,0,0,l/2+.8),Q(a,o,0,0,-.1),a.fwd,"stand",u)}porchCrawlspace(e,t,n){const s=Fe,r=-vn-s,o=Rt(pn),a=-4.55,c=16*rt+3.2,h=1.2;this.box(e+"_SkirtW",A((c-h/2-1)/2,s+r/2,a),A(c-h/2+1,r,.05),b.lattice,{solid:!1}),this.box(e+"_SkirtE",A((c+h/2+mn+1)/2,s+r/2,a),A(mn+1-c-h/2,r,.05),b.lattice,{solid:!1});const l=A(c,s,a),u=this.cover(e+"_Lattice",l,o,[{hinge:[-h/2,0,0],leaf:[h/2,r/2,0,h,r,.05],color:b.lattice,openAngle:1.5}],"hinge");this.spot(e,t,n,A(c,s,a-.9),A(c,s,a+1.1),o.fwd,"lie",u,.18)}}function Ci(i){const e=Math.hypot(i.x,i.y,i.z)||1;return A(i.x/e,i.y/e,i.z/e)}function Hs(i,e,t,n){for(;t<e.length;t++){const s=e[t];if(!(i.x0<s.x1&&s.x0<i.x1&&i.z0<s.z1&&s.z0<i.z1))continue;const r=Math.max(s.x0,i.x0),o=Math.min(s.x1,i.x1),a=Math.max(s.z0,i.z0),c=Math.min(s.z1,i.z1);r>i.x0&&Hs({x0:i.x0,z0:i.z0,x1:r,z1:i.z1},e,t+1,n),o<i.x1&&Hs({x0:o,z0:i.z0,x1:i.x1,z1:i.z1},e,t+1,n),a>i.z0&&Hs({x0:r,z0:i.z0,x1:o,z1:a},e,t+1,n),c<i.z1&&Hs({x0:r,z0:c,x1:o,z1:i.z1},e,t+1,n);return}n.push(i)}const Lt=(i,e=Zg)=>({at:i,width:e,bottom:0,top:Ih}),Ye=(i,e=Qg)=>({at:i,width:e,bottom:e_,top:Ih}),Go=(i,e=3)=>({at:i,width:e,bottom:0,top:Jg}),jr=(i,e,t,n)=>({at:i,width:e,bottom:t,top:n});function s_(){const i=new i_;return r_(i),o_(i),a_(i),c_(i),l_(i),h_(i),u_(i),d_(i),f_(i),p_(i),m_(i),g_(i)}function r_(i){i.floor("Lawn",[Ve.x0,Ve.z0,Ve.x1,Ve.z1],Fe,.4,b.grass,[0,0,Mt,bt]),i.floor("Street",[Ve.x0-6,Ve.z0-12,Ve.x1+14,Ve.z0],Fe-.02,.4,b.concrete),i.floor("Driveway",[Nn.x0,Nn.z0,Nn.x1,Nn.z1],Fe+.04,.1,b.concrete),i.floor("FrontPath",[14.4,-6.2,36.5,-4.4],Fe+.04,.1,b.concrete),[[6,-12],[26,-13],[-1,10],[44,12],[30,32],[10,34],[20,37],[44,38]].forEach((t,n)=>{const s=Se(t[0],0,t[1]);i.box("Tree"+n+"_Trunk",A(s.x,Fe+2.5,s.z),A(.6,2.5,.6),b.wood,{shape:"cyl"}),i.box("Tree"+n+"_Canopy",A(s.x,Fe+6.5,s.z),A(6,5,6),b.grass,{shape:"sphere",solid:!1})})}function o_(i){const e=-pe;i.floor("CellarFloor",[0,0,Mt,bt],e,vn,b.floor),i.wall("B_South",[0,0],[Mt,0],e,pe,b.wall,jr(6,1.2,3.2,3.8),jr(26,1.2,3.2,3.8)),i.wall("B_North",[0,bt],[Mt,bt],e,pe,b.wall),i.wall("B_West",[0,0],[0,bt],e,pe,b.wall),i.wall("B_East",[Mt,0],[Mt,bt],e,pe,b.wall),i.wall("Furnace-East",[10,0],[10,8],e,pe,b.wall,Lt(4)),i.wall("Furnace-North",[0,8],[10,8],e,pe,b.wall),i.wall("Wine-West",[22,0],[22,8],e,pe,b.wall,Lt(4)),i.wall("Wine-North",[22,8],[Mt,8],e,pe,b.wall),i.wall("Storage-East",[10,16],[10,bt],e,pe,b.wall,Lt(20)),i.wall("Storage-South",[0,16],[10,16],e,pe,b.wall);for(const t of[[16,4],[16,12],[26,12],[10.5,12],[21,20]])i.prop("Pillar",t,e+pe/2,A(.4,pe,.4),b.metal);i.prop("Furnace",[3,3],e+1.2,A(1.6,2.4,1.6),b.metal),i.prop("WaterHeater",[6,1.5],e+1,A(.8,2,.8),b.metal,{shape:"cyl"}),i.prop("Workbench",[16,23.4],e+.45,A(2.4,.9,.8),b.wood),i.basin("ChestFreezer",[28,21],e,A(1.6,1,.8),b.metal),i.prop("StorageShelf",[.3,20],e+1.2,A(.6,2.4,4),b.wood),i.prop("WineRack",[31.7,4],e+1.2,A(.6,2.4,6),b.wood),i.prop("OldCrates_A",[19.4,10],e+.5,A(1,1,1),b.wood),i.prop("OldCrates_A2",[19.4,10],e+1.5,A(1,1,1),b.wood),i.prop("OldCrates_B",[20.8,10],e+.5,A(1,1,1),b.wood),i.stairs("CellarStairs",[19.6,18.6],e,ci,lc,pe,b.wood)}function a_(i){i.floor("GroundFloor",[0,0,Mt,bt],0,vn,b.floor,[13.2,17.3,18.2,19.9]),i.wall("G_South",[0,0],[Mt,0],0,pe,b.wall,jr(16,2.2,0,2.8),Ye(3),Ye(8),Ye(23),Ye(28)),i.wall("G_North",[0,bt],[Mt,bt],0,pe,b.wall,Ye(4),Ye(9),Lt(16),Ye(30)),i.wall("G_West",[0,0],[0,bt],0,pe,b.wall,Ye(4),Ye(8),Ye(15),Ye(21)),i.wall("G_East",[Mt,0],[Mt,bt],0,pe,b.wall,Ye(3),Ye(7),Ye(12),Ye(16),Ye(21)),i.wall("Living-Foyer",[12,0],[12,12],0,pe,b.wall,Go(6)),i.wall("Living-Den",[0,12],[12,12],0,pe,b.wall,Lt(6)),i.wall("Den-Rec",[0,18],[12,18],0,pe,b.wall,Lt(3)),i.wall("WestWing-Hall",[12,12],[12,bt],0,pe,b.wall,Lt(14.5),Lt(22)),i.wall("Foyer-BackHall",[12,12],[20,12],0,pe,b.wall,Go(17)),i.wall("BackHall-Mudroom",[12,17],[20,17],0,pe,b.wall,Lt(19)),i.wall("Foyer-Dining",[20,0],[20,12],0,pe,b.wall,Go(5)),i.wall("Dining-Kitchen",[20,10],[Mt,10],0,pe,b.wall,Lt(26,2)),i.wall("BackHall-Kitchen",[20,12],[20,17],0,pe,b.wall,Lt(14.5)),i.wall("Mudroom-Service",[20,17],[20,bt],0,pe,b.wall,Lt(19.5)),i.wall("Kitchen-Service",[20,18],[Mt,18],0,pe,b.wall,Lt(30)),i.stairs("GrandStairs",[13.3,2.4],0,wn,lc,pe,b.wood),i.stairs("ServiceStairs",[21,22.5],0,fn,3,pe,b.wood),i.prop("Couch_1",[6,3.8],0+.45,A(3,.9,1.1),b.fabric),i.prop("Couch_2",[6,8.2],0+.45,A(3,.9,1.1),b.fabric),i.prop("CoffeeTable",[6,6],0+.25,A(1.6,.5,.9),b.wood),i.prop("Fireplace",[.3,6],0+.8,A(.8,1.6,2.2),b.accent),i.table("Desk",[3,15],0,A(2,.8,1),b.wood),i.prop("Bookshelf",[7,17.7],0+1.2,A(4,2.4,.5),b.wood),i.table("PoolTable",[6,21],0,A(2.7,.9,1.5),b.fabric,.3),i.prop("Washer",[13,23.5],0+.5,A(1.4,1,.7),b.metal),i.table("DiningTable",[26,5],0,A(4.5,.8,1.5),b.wood),i.table("KitchenIsland",[26,14],0,A(3,.95,1.3),b.porcelain,.12),i.prop("Counter_East",[31.7,14],0+.475,A(.8,.95,9),b.porcelain),i.prop("Fridge",[21,17.6],1,A(1,2,.9),b.metal),i.prop("PantryShelf",[31.75,21],0+1.2,A(.6,2.4,3),b.wood)}function c_(i){const e=pe;i.floor("SecondFloor",[0,0,Mt,bt],e,vn,b.floor,[12,0,17,8.8],[22.4,21,27.4,24]),i.wall("U_South",[0,0],[Mt,0],e,pe,b.wall,Ye(3),Ye(8),Ye(18.5),Ye(23),Ye(28)),i.wall("U_North",[0,bt],[Mt,bt],e,pe,b.wall,Ye(3),Ye(8),Ye(16),Ye(30)),i.wall("U_West",[0,0],[0,bt],e,pe,b.wall,Ye(4),Ye(8),Ye(15),Ye(21)),i.wall("U_East",[Mt,0],[Mt,bt],e,pe,b.wall,Ye(3),Ye(7),Ye(12),Ye(16),Ye(22)),i.wall("U_WestWing-Hall",[12,0],[12,bt],e,pe,b.wall,Lt(10.4),Lt(17),Lt(21)),i.wall("Master-Bed2",[0,12],[12,12],e,pe,b.wall),i.wall("Bed2-Bed3",[0,18],[12,18],e,pe,b.wall),i.wall("MasterBath-East",[5,8],[5,12],e,pe,b.wall),i.wall("MasterBath-South",[0,8],[5,8],e,pe,b.wall,Lt(2.5)),i.wall("EastWing-Hall",[20,0],[20,14],e,pe,b.wall,Lt(5),Lt(10)),i.wall("Bed4-South",[20,9],[Mt,9],e,pe,b.wall),i.wall("Bath-Arm",[20,14],[26,14],e,pe,b.wall),i.wall("Bath-Bed5",[26,9],[26,18],e,pe,b.wall,Lt(16)),i.wall("Bed5-Corridor",[26,18],[Mt,18],e,pe,b.wall),i.rail("BalconyRail",[17,.25],[17,8.8],e),i.rail("LandingRail",[14.6,8.8],[17,8.8],e),i.rail("ServiceRail_West",[22.4,21],[22.4,24],e),i.rail("ServiceRail_South",[22.4,21],[27.4,21],e),i.stairs("AtticStairs",[13,14.3],e,fn,lc,pe,b.wood);const t=A(2.2,.6,1.8);i.bed("Bed_Master",[4,3],e,t,b.fabric),i.bed("Bed_2",[4,15],e,t,b.fabric),i.bed("Bed_3",[4,21],e,t,b.fabric),i.bed("Bed_4",[27,3],e,t,b.fabric),i.bed("Bed_5",[29,13.5],e,t,b.fabric),i.table("Desk_2",[9,15],e,A(1.6,.8,.8),b.wood),i.basin("Tub_Master",[.6,10],e,A(.9,.7,2),b.porcelain),i.basin("Tub",[25.5,11.5],e,A(.9,.7,2),b.porcelain)}function l_(i){const e=2*pe;i.floor("AtticFloor",[0,0,Mt,bt],e,vn,b.floor,[14.4,13,19.4,15.6]),i.rail("StairRail_North",[14.4,15.6],[19.4,15.6],e),i.rail("StairRail_South",[14.4,13],[19.4,13],e);const t=.5,n=rs/2+t,s=6.5,r=Math.atan2(s,n),o=Math.hypot(n,s);i.box("Roof_South",A(mn/2,e+s/2,(rs/2-t)/2),A(mn+2*t,vn,o),b.roof,{rotX:-r,solid:!1}),i.box("Roof_North",A(mn/2,e+s/2,(rs/2+rs+t)/2),A(mn+2*t,vn,o),b.roof,{rotX:r,solid:!1});const a=s/n;for(let l=0;l<Math.floor(s);l++){const u=n-(l+1)/a;if(u<=.5)break;for(const d of[0,mn])i.box("Gable_"+l,A(d,e+l+.5,rs/2),A($s,1,u*2),b.wall)}for(const l of[.25,.5,.75])i.box("RidgePost",A(l*mn,e+s/2,rs/2),A(.25,s,.25),b.wood);const c=Se(.5,0,6),h=e+(c.z+t)*a-.6;i.box("Chimney",A(c.x,h+1.5,c.z),A(1,3,1),b.accent,{solid:!1}),i.prop("Crate_1",[5,11],e+.4,A(.8,.8,.8),b.wood),i.prop("Crate_2",[5.7,11.5],e+.4,A(.8,.8,.8),b.wood),i.prop("Crate_3",[5.3,11.2],e+1.2,A(.8,.8,.8),b.wood),i.prop("Crate_4",[26,13],e+.4,A(.8,.8,.8),b.wood),i.prop("Trunk",[12,9],e+.3,A(1.2,.6,.6),b.accent),i.prop("Mattress",[27,10],e+.15,A(1.8,.3,2.2),b.fabric)}function h_(i){const e=3.5*rt;i.box("PorchDeck",A(mn/2,-vn/2,-e/2),A(mn+2,vn,e),b.woodLight),i.box("PorchRoof",A(mn/2,pe,-e/2-.15),A(mn+2.6,vn,e+.3),b.roof,{solid:!1});for(const t of[-.65,3.4,7.6,11.8,14.2,17.8,20.2,24.4,28.6,32.65])i.box("PorchPost",A(t*rt,(Fe+pe-.1)/2,-e+.15),A(.2,pe-.1-Fe,.2),b.woodLight);i.stairs("PorchSteps",[16,-4.4],Fe,wn,3.2,-Fe,b.woodLight,.2,.3),i.stairs("BackSteps",[16,bt+1.1],Fe,pn,2.4,-Fe,b.woodLight,.2,.3)}function u_(i){const e=(Nn.x0+Nn.x1)/2,t=(Nn.x1-Nn.x0)*rt+.6;i.wall("Fence_South",[Ve.x0,Ve.z0],[Ve.x1,Ve.z0],Fe,Zt,b.woodLight,jr(e,t,0,Zt)),i.wall("Fence_North",[Ve.x0,Ve.z1],[Ve.x1,Ve.z1],Fe,Zt,b.woodLight),i.wall("Fence_West",[Ve.x0,Ve.z0],[Ve.x0,Ve.z1],Fe,Zt,b.woodLight),i.wall("Fence_East",[Ve.x1,Ve.z0],[Ve.x1,Ve.z1],Fe,Zt,b.woodLight);const n=[];for(let a=Ve.x0;a<Ve.x1;a+=8)n.push([a,Ve.z0]),n.push([a,Ve.z1]);for(let a=Ve.z0;a<Ve.z1;a+=8)n.push([Ve.x0,a]),n.push([Ve.x1,a]);n.push([Ve.x1,Ve.z1]),n.push([Ve.x1,Ve.z0]);for(const a of n)(Math.abs(a[0]-e)*rt>t/2+.6||a[1]!==Ve.z0)&&i.prop("FencePillar",a,Fe+(Zt+.4)/2,A(.6,Zt+.4,.6),b.accent);const s=Se(e,0,Ve.z0),r=t/2-.35;i.points.gateLeaves=[];for(const a of[-1,1]){i.box("GatePier",Cn(s,A(a*t/2,Fe+(Zt+.6)/2,0)),A(.6,Zt+.6,.6),b.accent);const c=Cn(s,A(a*(t/2-.3),Fe,0)),h=-a*(r/2+.02),l=Rt(wn),u=i.cover(a<0?"GateLeaf_L":"GateLeaf_R",c,l,[{hinge:[0,0,0],leaf:[h,Zt/2,0,r,Zt,.12],color:b.metal,openAngle:a*1.5,bars:!0},{hinge:[0,0,0],leaf:[h,Zt+.05,0,r,.15,.2],color:b.dark,openAngle:a*1.5},{hinge:[0,0,0],leaf:[h,.3,0,r,.6,.16],color:b.dark,openAngle:a*1.5}],"hinge");i.points.gateLeaves.push(u)}i.points.gateBlocker={c:Cn(s,A(0,Fe+Zt/2,0)),s:A(t,Zt,.3)};const o=3.4;i.floor("GarageFloor",[Pe.x0,Pe.z0,Pe.x1,Pe.z1],Fe+.04,.1,b.concrete),i.wall("Garage_West",[Pe.x0,Pe.z0],[Pe.x0,Pe.z1],Fe,o,b.wall),i.wall("Garage_North",[Pe.x0,Pe.z1],[Pe.x1,Pe.z1],Fe,o,b.wall,Ye((Pe.x0+Pe.x1)/2,1.6)),i.wall("Garage_East",[Pe.x1,Pe.z0],[Pe.x1,Pe.z1],Fe,o,b.wall),i.floor("GarageRoof",[Pe.x0-.3,Pe.z0-.6,Pe.x1+.3,Pe.z1+.3],Fe+o+vn,vn,b.roof),i.box("GarageHeader",Se((Pe.x0+Pe.x1)/2,Fe+o-.3,Pe.z0),A((Pe.x1-Pe.x0)*rt,.6,$s),b.wall,{solid:!1}),i.prop("GaragePost",[(Pe.x0+Pe.x1)/2,Pe.z0],Fe+o/2,A(.3,o,.3),b.wood),i.prop("Car",[Pe.x0+2.6,Pe.z0+4],Fe+.8,A(2.2,1.5,4.8),b.dark),i.prop("Garage_Workbench",[Pe.x1-1.2,Pe.z1-.6],Fe+.5,A(2.6,.9,.9),b.wood),i.prop("Garage_Shelf",[Pe.x1-.3,Pe.z0+3],Fe+1.2,A(.5,2.4,3),b.wood),i.prop("OilDrum_1",[Pe.x0+.6,Pe.z1-.7],Fe+.45,A(.6,.9,.6),b.metal,{shape:"cyl"}),i.prop("OilDrum_2",[Pe.x0+1.3,Pe.z1-.7],Fe+.45,A(.6,.9,.6),b.metal,{shape:"cyl"}),i.prop("Mower",[Pe.x0+1,Pe.z0+1],Fe+.35,A(.6,.7,1),b.accent),i.prop("Shed",[8,37.5],Fe+1.3,A(3,2.6,2.4),b.woodLight),i.prop("WoodPile",[12,37.8],Fe+.5,A(2,1,1),b.wood),i.prop("SwingFrame",[26,34],Fe+1.25,A(3,2.5,.2),b.metal)}function d_(i){const e=[1,.88,.72],t=[.78,.88,1],n=pe-.4;i.light("Foyer",[16,6],2*pe-1,e,16,2.4),i.light("Living",[6,6],n,e,12),i.light("Den",[6,15],n,e,10),i.light("RecRoom",[6,21],n,e,10),i.light("BackHall",[16,14.5],n,e,9),i.light("Mudroom",[16,21],n,e,9),i.light("Dining",[26,5],n,e,11),i.light("Kitchen",[26,14],n,e,11),i.light("Service",[26,20.5],n,e,9),i.light("Gallery",[16,14],pe+n,e,12),i.light("RearHall",[16,21],pe+n,e,9),i.light("Master",[6,5],pe+n,e,11),i.light("MasterBath",[2.5,10],pe+n,t,6),i.light("Bedroom2",[6,15],pe+n,e,9),i.light("Bedroom3",[6,21],pe+n,e,9),i.light("Bedroom4",[26,4.5],pe+n,e,10),i.light("Bathroom",[23,11.5],pe+n,t,7),i.light("Bedroom5",[29,13.5],pe+n,e,9),i.light("Corridor",[26,20],pe+n,e,9),i.light("Attic_West",[6,12],2*pe+2,e,11,1.1),i.light("Attic_Centre",[16,12],2*pe+2.5,e,14,1.1),i.light("Attic_East",[26,12],2*pe+2,e,11,1.1),i.light("Furnace",[5,4],-.5,t,10),i.light("WineCellar",[27,4],-.5,t,10),i.light("Cellar_South",[16,8],-.5,t,14),i.light("Cellar_North",[16,18],-.5,t,14),i.light("Storage",[5,20],-.5,t,10),i.light("Porch",[16,-1.8],pe-.6,e,10),i.light("Garage",[(Pe.x0+Pe.x1)/2,(Pe.z0+Pe.z1)/2],Fe+3,t,10),i.light("Gate",[(Nn.x0+Nn.x1)/2,Ve.z0+1],Fe+3,e,9),i.light("Backyard",[16,30],Fe+3.5,t,12,1)}function f_(i){let e=0;i.rug("Rug_Living",[6,6],e,[4.5,3.4]),i.prop("TvStand",[9.2,11.6],e+.3,A(1.6,.6,.5),b.dark),i.prop("Tv",[9.2,11.6],e+1.05,A(1.3,.8,.1),b.metal),i.chair("Armchair_1",[2.6,3.5],e,b.fabric,!0),i.chair("Armchair_2",[2.6,8.5],e,b.fabric,!0),i.prop("SideTable",[2.6,6],e+.3,A(.5,.6,.5),b.wood),i.lamp("FloorLamp_Living",[10.8,9.6],e),i.prop("Mantel",[.9,6],e+1.62,A(.5,.08,2.6),b.wood,{solid:!1}),i.picture("Picture_Living",[6,.15],e+1.9,wn,[1.2,.8]),i.drape("Drape_Living_W",[0,8],e,fn,"Living room"),i.drape("Drape_Living_S",[8,0],e,wn,"Living room"),i.prop("Console",[18.6,1.2],e+.42,A(1.4,.84,.45),b.wood),i.prop("CoatRack",[19.4,8.4],e+.9,A(.12,1.8,.12),b.dark,{shape:"cyl"}),i.prop("UmbrellaStand",[14.6,.7],e+.3,A(.3,.6,.3),b.metal,{shape:"cyl"}),i.prop("Chandelier",[16,6],2*Tn-1.4,A(1.2,.5,1.2),b.accent,{shape:"sphere",solid:!1}),i.rug("Runner_Foyer",[17.5,6],e,[1.6,6]),i.closet("CoatCloset",[19.25,11.2],e,A(1.8,2.4,1.5),pn,"hide in the coat closet","Foyer"),i.chair("OfficeChair",[3,13.4],e,b.dark,!1),i.prop("FilingCabinet",[.5,13],e+.65,A(.5,1.3,.6),b.metal),i.prop("Bookshelf_Den2",[.3,17],e+1.1,A(.4,2.2,2.2),b.wood),i.rug("Rug_Den",[6,15],e,[3,2.4]),i.deskPanels("Desk",[3,15],e,A(2,.8,1),[3,13.8],"Den"),i.drape("Drape_Den",[0,15],e,fn,"Den"),i.prop("CueRack",[.25,21],e+1.2,A(.1,1.4,1.2),b.wood,{solid:!1}),i.prop("Arcade",[11.6,19.2],e+.9,A(.7,1.8,.8),b.accent),i.prop("Jukebox",[11.6,20.3],e+.75,A(.9,1.5,.6),b.dark),i.bar("Bar",[6.5,23.05],e,"Rec room"),i.closet("RecCloset",[.9,19.2],e,A(1.4,2.4,1.3),fn,"hide in the storage closet","Rec room"),i.tableApron("PoolTable",[6,21],e,A(2.7,.9,1.5),.3,[6,19.4],"hide under the pool table","Rec room",b.dark),i.prop("HallBench",[16,16.6],e+.25,A(1.4,.5,.45),b.wood),i.closet("HallCloset",[12.6,12.8],e,A(1.4,2.4,1.3),fn,"hide in the hall closet","Back hall"),i.prop("Dryer",[14.2,23.5],e+.5,A(1.4,1,.7),b.metal),i.prop("BootBench",[12.4,20],e+.22,A(.45,.44,1.2),b.wood),i.closet("UtilityCloset",[19.25,23.15],e,A(1.5,2.4,1.5),ci,"hide in the utility closet","Mudroom");for(let n=0;n<3;n++)i.chair("DiningChair_S"+n,[24.6+n*1.4,4.05],e,b.wood,!1),i.chair("DiningChair_N"+n,[24.6+n*1.4,5.95],e,b.wood,!1);i.prop("Sideboard",[25.5,.45],e+.5,A(2.4,1,.55),b.wood),i.prop("Chandelier_Dining",[26,5],Tn-1.2,A(1,.4,1),b.accent,{shape:"sphere",solid:!1}),i.rug("Rug_Dining",[26,5],e,[6,3.2]),i.tableApron("DiningTable",[26,5],e,A(4.5,.8,1.5),.1,[26,6.6],"hide under the tablecloth","Dining room",b.sheet),i.drape("Drape_Dining",[32,7],e,ci,"Dining room"),i.prop("Counter_South",[23.4,10.45],e+.475,A(3.6,.95,.65),b.porcelain),i.prop("Stove",[24.4,10.45],e+.475,A(.8,.95,.65),b.metal),i.prop("Hood",[24.4,10.45],e+2.05,A(.9,.4,.55),b.metal,{solid:!1}),i.prop("Uppers_South",[23.4,10.4],e+1.95,A(3.6,.8,.4),b.woodLight,{solid:!1}),i.prop("Uppers_East",[31.75,14],e+1.95,A(.4,.8,6),b.woodLight,{solid:!1}),i.prop("Microwave",[22.2,10.5],e+1.15,A(.5,.3,.4),b.metal,{solid:!1}),i.islandPanels("KitchenIsland",[26,14],e,A(3,.95,1.3),[26,12.5],"Kitchen"),i.closet("Pantry",[20.95,11.3],e,A(2,2.4,2),fn,"hide in the pantry","Kitchen",!1),i.prop("Boiler",[30.8,23],e+.9,A(.9,1.8,.9),b.metal,{shape:"cyl"}),i.prop("ServiceShelf",[28.5,23.7],e+1.1,A(2.4,2.2,.4),b.metal),i.closet("BroomCloset",[28.1,18.75],e,A(1.2,2.4,1.1),wn,"hide in the broom closet","Service room"),e=Tn,i.nightstands("Master",[4,3],e,2.2),i.prop("Dresser_Master",[6,.5],e+.55,A(1.6,1.1,.55),b.wood),i.chair("Armchair_Master",[9.6,7.5],e,b.fabric,!0),i.lamp("FloorLamp_Master",[10.5,8.8],e),i.rug("Rug_Master",[4,5],e,[3.6,3]),i.bedSkirt("Bed_Master",[4,3],e,[5.6,3],"Master bedroom"),i.wardrobe("Wardrobe_Master",[11.6,4],e,A(2,2.2,.9),ci,"hide in the wardrobe","Master bedroom"),i.drape("Drape_Master",[0,4],e,fn,"Master bedroom"),i.prop("Toilet_Master",[3.8,11.4],e+.25,A(.45,.5,.7),b.porcelain),i.prop("Vanity_Master",[3.8,8.55],e+.45,A(1.2,.9,.55),b.porcelain),i.showerStall("Tub_Master",[.6,10],e,A(.9,.7,2),fn,[1.7,10],"hide in the shower","Master bathroom"),i.nightstands("Bed2",[4,15],e,2.2),i.prop("Dresser_2",[1,17.6],e+.55,A(1.4,1.1,.5),b.wood),i.chair("DeskChair_2",[9,13.9],e,b.dark,!1),i.rug("Rug_2",[4,16],e,[3,2]),i.bedSkirt("Bed_2",[4,15],e,[5.6,15],"Bedroom 2"),i.closet("Closet_2",[10.4,17.3],e,A(2.2,2.4,1.5),pn,"hide in the closet","Bedroom 2"),i.drape("Drape_2",[0,15],e,fn,"Bedroom 2"),i.nightstands("Bed3",[4,21],e,2.2),i.prop("ToyShelf",[.3,22.5],e+.8,A(.4,1.6,1.4),b.woodLight),i.prop("KidTable",[8.5,22],e+.3,A(.9,.6,.9),b.accent),i.rug("Rug_3",[6,21],e,[3,2.4]),i.bedSkirt("Bed_3",[4,21],e,[5.6,21],"Bedroom 3"),i.chest("ToyChest",[8.2,19.3],e,A(1.5,.7,.9),b.accent,[8.2,20.4],"hide in the toy chest","Bedroom 3"),i.closet("Closet_3",[10.6,23.25],e,A(1.8,2.4,1.4),pn,"hide in the closet","Bedroom 3"),i.prop("HallTable",[18.6,11],e+.42,A(1.2,.84,.4),b.wood),i.prop("PlantPot",[19.3,2],e+.3,A(.5,.6,.5),b.accent,{shape:"cyl"}),i.prop("Plant",[19.3,2],e+1.1,A(.9,1,.9),b.leaf,{shape:"sphere",solid:!1}),i.rug("Runner_Gallery",[18.3,20.5],e,[1.4,7]),i.closet("LinenCloset",[21,23.25],e,A(1.6,2.4,1.4),pn,"hide in the linen closet","Rear hall"),i.nightstands("Bed4",[27,3],e,2.2),i.prop("Dresser_4",[25.5,.5],e+.55,A(1.6,1.1,.55),b.wood),i.prop("Bookcase_4",[20.3,7.5],e+1,A(.4,2,1.6),b.wood),i.rug("Rug_4",[27,5.5],e,[3.4,2.6]),i.bedSkirt("Bed_4",[27,3],e,[25.4,3],"Bedroom 4"),i.wardrobe("Wardrobe_4",[31.6,5],e,A(2,2.2,.9),ci,"hide in the wardrobe","Bedroom 4"),i.drape("Drape_4",[32,3],e,ci,"Bedroom 4"),i.prop("Toilet",[21,13.2],e+.25,A(.45,.5,.7),b.porcelain),i.prop("Vanity",[23,9.5],e+.45,A(1.2,.9,.55),b.porcelain),i.prop("LinenCabinet",[24.6,9.45],e+1,A(.6,2,.5),b.woodLight),i.showerStall("Tub",[25.5,11.5],e,A(.9,.7,2),ci,[24.4,11.5],"hide in the shower","Bathroom"),i.nightstands("Bed5",[29,13.5],e,2.2),i.prop("Dresser_5",[31.5,17.3],e+.55,A(.55,1.1,1.4),b.wood),i.prop("Desk_5",[28,17.4],e+.4,A(1.4,.8,.6),b.wood),i.chair("DeskChair_5",[28,16.6],e,b.dark,!1),i.rug("Rug_5",[29,11.5],e,[3,2.2]),i.bedSkirt("Bed_5",[29,13.5],e,[27.4,13.5],"Bedroom 5"),i.closet("Closet_5",[28,9.75],e,A(2,2.4,1.5),wn,"hide in the closet","Bedroom 5"),i.drape("Drape_5",[32,12],e,ci,"Bedroom 5"),e=Or,i.prop("RolledCarpet_1",[9,16],e+.2,A(.4,.4,2.4),b.rug,{shape:"cyl"}),i.prop("RolledCarpet_2",[9.5,16.3],e+.55,A(.35,.35,2.2),b.drape,{shape:"cyl",solid:!1}),i.prop("DressForm_Post",[20,17],e+.7,A(.08,1.4,.08),b.metal,{shape:"cyl"}),i.prop("DressForm",[20,17],e+1.6,A(.45,.7,.3),b.fabric,{shape:"sphere",solid:!1}),i.chair("RockingChair",[17,8],e,b.wood,!0);for(let n=0;n<5;n++)i.prop("BoxStack_"+n,[14+n*.9,19.5],e+.35+n%2*.7,A(.75,.7,.75),b.paper);i.prop("OldLamp",[23,15.5],e+.6,A(.4,1.2,.4),b.metal,{shape:"cyl"}),i.remove("Trunk"),i.chest("SteamerTrunk",[12,9],e,A(1.5,.75,.85),b.accent,[12,10.2],"hide in the trunk","Attic"),i.wardrobe("OldWardrobe",[22,10],e,A(1.2,2,.7),pn,"hide in the old wardrobe","Attic"),i.kneewall("Kneewall",[9,3.3],e,"hide in the crawlspace","Attic"),e=as,i.prop("CoalBin",[7.5,6.5],e+.4,A(1.4,.8,1),b.dark),i.prop("Ducting",[3,6],e+3.2,A(.5,.5,4),b.metal,{solid:!1});for(let n=0;n<4;n++)i.prop("Barrel_"+n,[24+n*1.3,1.2],e+.55,A(.9,1.1,.9),b.wood,{shape:"cyl"});i.prop("TastingTable",[27,5.5],e+.45,A(1.2,.9,.7),b.wood),i.prop("JarShelf",[9.7,22.6],e+1,A(.4,2,3),b.metal),i.prop("OldBike",[3,17],e+.45,A(.2,.9,1.7),b.metal),i.locker("Locker_A",[24.2,8.6],e,"hide in the locker","Cellar"),i.locker("Locker_B",[24.9,8.6],e,"hide in the locker","Cellar"),i.remove("Workbench"),i.table("Workbench",[16,23.4],e,A(2.4,.9,.8),b.wood,.08),i.workbenchTarp("Workbench",[16,23.4],e,A(2.4,.9,.8),pn,"hide under the workbench","Cellar"),i.crateFort(e),i.freezerLid("ChestFreezer",[28,21],e,A(1.6,1,.8),[28,19.6],"hide in the freezer","Cellar"),i.dustSheetSofa("SheetSofa",[5,19.5],e,[7.2,19.5],"hide under the dust sheet","Storage"),e=Ht,i.chair("PorchChair_1",[6,-2.2],0,b.woodLight,!0),i.chair("PorchChair_2",[26,-2.2],0,b.woodLight,!0),i.prop("PorchSwing",[10.5,-3],.55,A(1.8,.5,.6),b.woodLight),i.porchCrawlspace("UnderPorch","hide under the porch","Porch"),i.hedge("Hedge",[-1.6,12],e,"hide in the hedge","West yard");for(let n=0;n<6;n++)i.prop("Bush_"+n,[-1.3,2+n*1.6],e+.6,A(1.3,1.2,1.3),b.leaf,{shape:"sphere"});for(let n=0;n<5;n++)i.prop("Bush_N"+n,[3+n*1.5,39.2],e+.6,A(1.3,1.2,1.3),b.leaf,{shape:"sphere"});i.dogHouse("DogHouse",[30,36.5],e,"hide in the dog house","Back yard"),i.wheelieBins([35.4,23.5],e,"hide in the bin","East yard"),i.remove("Shed"),i.shed("Shed",[8,37.5],e,"hide in the shed","Back yard"),i.carTrunk("hide in the trunk","Garage"),i.remove("Garage_Workbench");const t=[Pe.x1-1.2,Pe.z1-.6];i.table("Garage_Workbench",t,e,A(2.6,.9,.9),b.wood,.08),i.workbenchTarp("Garage_Workbench",t,e,A(2.6,.9,.9),pn,"hide under the workbench","Garage"),i.prop("Trampoline",[20,30],e+.45,A(3,.15,3),b.dark,{shape:"cyl"}),i.prop("BirdBath",[6,30],e+.5,A(.7,1,.7),b.porcelain,{shape:"cyl"})}function p_(i){i.room("Living room",0,12,0,12,0,9,6),i.room("Den",0,12,12,18,0,6,14),i.room("Rec room",0,12,18,24,0,9.5,21),i.room("Foyer",12,20,0,12,0,17,9),i.room("Back hall",12,20,12,17,0,16,14.5),i.room("Mudroom",12,20,17,24,0,16,21),i.room("Dining room",20,32,0,10,0,23,7.5),i.room("Kitchen",20,32,10,18,0,23.5,16),i.room("Service room",20,32,18,24,0,29,20),i.room("Master bedroom",0,12,0,12,Tn,7,6),i.room("Bedroom 2",0,12,12,18,Tn,6,13.5),i.room("Bedroom 3",0,12,18,24,Tn,7,22),i.room("Gallery",12,20,0,24,Tn,18,11),i.room("Bedroom 4",20,32,0,9,Tn,24,6),i.room("Bathroom",20,26,9,14,Tn,22.5,12),i.room("Bedroom 5",26,32,9,18,Tn,28,11),i.room("Rear hall",20,32,14,24,Tn,23,19),i.room("Attic west",0,12,3,21,Or,7,14),i.room("Attic centre",12,20,3,21,Or,16,9),i.room("Attic east",20,32,3,21,Or,24,15),i.room("Furnace room",0,10,0,8,as,6,5.5),i.room("Wine cellar",22,32,0,8,as,26,4),i.room("Storage",0,10,16,24,as,5,21),i.room("Cellar",10,22,0,24,as,15,12),i.room("Cellar east",22,32,8,24,as,26,15),i.room("Garage",34,44,26,34,Ht,39,30),i.room("Porch",-1,33,-4.6,0,Ht,16,-2),i.room("Front yard",-2.3,46,-18,-4.6,Ht,28,-10),i.room("West yard",-2.3,0,0,24,Ht,-1,12),i.room("East yard",32,46,0,26,Ht,39,12),i.room("Back yard",-2.3,46,24,40,Ht,20,32)}function m_(i){const e=i.points;e.killerWait=Se(39,Ht+.1,-24),e.killerSpawn=Se(16,.1,-2.2),e.huddle=[Se(4.5,0,5.1),Se(4.5,0,7),Se(7.5,0,7.2),Se(7.6,0,4.9),Se(6,0,4.1)],e.meetingCam={pos:Se(10.2,1.9,1.9),look:Se(6,1.1,6)},e.cruiserStart=Se(62,Ht,-25),e.arrivePath=[Se(48,Ht,-24.5),Se(39,Ht,-22)],e.leavePath=[Se(39,Ht,-27),Se(-6,Ht,-27)],e.exit=Se(39,Ht,-20.5),e.rescueCam={pos:Se(46,Ht+2.4,-27.5),look:Se(38.5,Ht+1.2,-17)},e.cruiserSize=A(2.1,1.5,4.9)}function wt(i){return[Fr.x+i.x,Fr.y+i.y,-(Fr.z+i.z)]}function Ll(i){return[i.x,i.y,-i.z]}function g_(i){const e=i.boxes.map(c=>({name:c.name,shape:c.shape,c:wt(c.c),s:[c.s.x,c.s.y,c.s.z],color:c.color,solid:c.solid,rotX:-c.rotX})),t=i.covers.map(c=>({id:c.id,name:c.name,motion:c.motion,pivot:wt(c.pivot),fwd:Ll(c.fwd),parts:c.parts.map(h=>({...h}))})),n=i.spots.map(c=>({...c,entry:wt(c.entry),hidden:wt(c.hidden),dir:Ll(c.dir)})),s=i.rooms.map(c=>{const h=wt(c.min),l=wt(c.max);return{name:c.name,min:[Math.min(h[0],l[0]),Math.min(h[1],l[1]),Math.min(h[2],l[2])],max:[Math.max(h[0],l[0]),Math.max(h[1],l[1]),Math.max(h[2],l[2])],scan:wt(c.scan),floorY:c.floorY+Fr.y}}),r=i.lights.map(c=>({...c,p:wt(c.p)})),o=i.points,a={killerWait:wt(o.killerWait),killerSpawn:wt(o.killerSpawn),huddle:o.huddle.map(wt),meetingCam:{pos:wt(o.meetingCam.pos),look:wt(o.meetingCam.look)},cruiserStart:wt(o.cruiserStart),arrivePath:o.arrivePath.map(wt),leavePath:o.leavePath.map(wt),exit:wt(o.exit),rescueCam:{pos:wt(o.rescueCam.pos),look:wt(o.rescueCam.look)},cruiserSize:[o.cruiserSize.x,o.cruiserSize.y,o.cruiserSize.z],gateLeaves:o.gateLeaves,gateBlocker:{c:wt(o.gateBlocker.c),s:[o.gateBlocker.s.x,o.gateBlocker.s.y,o.gateBlocker.s.z]}};return{boxes:e,covers:t,spots:n,rooms:s,lights:r,points:a}}function __(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ln;let h=0;for(let l=0;l<i.length;++l){const u=i[l];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,l),h+=f}}if(t){let l=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+l);l+=i[d].attributes.position.count}c.setIndex(u)}for(const l in r){const u=Dl(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(const l in o){const u=o[l][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[l].length;++_)f.push(o[l][_][d]);const g=Dl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Dl(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){const l=i[h];if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*t}const o=new e(r),a=new an(o,t,n);let c=0;for(let h=0;h<i.length;++h){const l=i[h];if(l.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=l.count;d<f;d++)for(let g=0;g<t;g++){const _=l.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(l.array,c);c+=l.count*t}return s!==void 0&&(a.gpuType=s),a}const ai=4;class sr{constructor(){this.boxes=[],this.cells=new Map,this.stamp=new Int32Array(0),this.stampValue=1}addAABB(e,t,n=null){const s=this.boxes.length;if(this.boxes.push({min:e,max:t,id:s,tag:n}),this._insert(s),this.stamp.length<this.boxes.length){const r=new Int32Array(this.boxes.length+512);r.set(this.stamp),this.stamp=r}return s}addBox(e,t,n){return this.addAABB([e[0]-t[0]/2,e[1]-t[1]/2,e[2]-t[2]/2],[e[0]+t[0]/2,e[1]+t[1]/2,e[2]+t[2]/2],n)}removeById(e){const t=this.boxes[e];t&&(this._forCells(t.min,t.max,n=>{const s=this.cells.get(n);if(!s)return;const r=s.indexOf(e);r>=0&&s.splice(r,1)}),this.boxes[e]=null)}_forCells(e,t,n){const s=Math.floor(e[0]/ai),r=Math.floor(t[0]/ai),o=Math.floor(e[2]/ai),a=Math.floor(t[2]/ai);for(let c=s;c<=r;c++)for(let h=o;h<=a;h++)n(c+","+h)}_insert(e){const t=this.boxes[e];this._forCells(t.min,t.max,n=>{let s=this.cells.get(n);s||(s=[],this.cells.set(n,s)),s.push(e)})}query(e,t,n,s,r,o,a=[]){a.length=0;const c=++this.stampValue,h=Math.floor(e/ai),l=Math.floor(s/ai),u=Math.floor(n/ai),d=Math.floor(o/ai);for(let f=h;f<=l;f++)for(let g=u;g<=d;g++){const _=this.cells.get(f+","+g);if(_)for(let m=0;m<_.length;m++){const p=_[m];if(this.stamp[p]===c)continue;this.stamp[p]=c;const T=this.boxes[p];T&&T.min[0]<s&&T.max[0]>e&&T.min[1]<r&&T.max[1]>t&&T.min[2]<o&&T.max[2]>n&&a.push(T)}}return a}groundAt(e,t,n,s=6){const r=this.query(e-.05,n-s,t-.05,e+.05,n+.1,t+.05,this._tmp);let o=null;for(const a of r)a.max[1]<=n+.1&&(o===null||a.max[1]>o)&&(o=a.max[1]);return o}rayT(e,t,n=null){const s=Math.min(e[0],t[0]),r=Math.max(e[0],t[0]),o=Math.min(e[1],t[1]),a=Math.max(e[1],t[1]),c=Math.min(e[2],t[2]),h=Math.max(e[2],t[2]),l=this.query(s,o,c,r,a,h,this._tmp2),u=t[0]-e[0],d=t[1]-e[1],f=t[2]-e[2];let g=1;for(const _ of l){if(n&&_.tag===n)continue;let m=0,p=1,T=!0;for(let E=0;E<3;E++){const S=E===0?u:E===1?d:f,D=e[E];if(Math.abs(S)<1e-9){if(D<_.min[E]||D>_.max[E]){T=!1;break}continue}let w=(_.min[E]-D)/S,R=(_.max[E]-D)/S;if(w>R){const L=w;w=R,R=L}if(w>m&&(m=w),R<p&&(p=R),m>p){T=!1;break}}T&&m<g&&(g=m)}return g}blocked(e,t,n=null){const s=Math.min(e[0],t[0]),r=Math.max(e[0],t[0]),o=Math.min(e[1],t[1]),a=Math.max(e[1],t[1]),c=Math.min(e[2],t[2]),h=Math.max(e[2],t[2]),l=this.query(s,o,c,r,a,h,this._tmp2),u=t[0]-e[0],d=t[1]-e[1],f=t[2]-e[2];for(const g of l){if(n&&g.tag===n)continue;let _=0,m=1,p=!0;for(let T=0;T<3;T++){const E=T===0?u:T===1?d:f,S=e[T];if(Math.abs(E)<1e-9){if(S<g.min[T]||S>g.max[T]){p=!1;break}continue}let D=(g.min[T]-S)/E,w=(g.max[T]-S)/E;if(D>w){const R=D;D=w,w=R}if(D>_&&(_=D),w<m&&(m=w),_>m){p=!1;break}}if(p)return!0}return!1}moveCharacter(e,t,n,s,r,o=.45,a=-20){let h=!1;const l=this._tmp3;for(const g of[0,2]){const _=t[g]*r;if(!(Math.abs(_)<1e-7)){e[g]+=_;for(let m=0;m<3;m++){const p=this.query(e[0]-n,e[1]+.02,e[2]-n,e[0]+n,e[1]+s,e[2]+n,l);if(p.length===0)break;let T=-1,E=!1;for(const S of p){const D=S.max[1]-e[1];if(D>0&&D<=o){D>T&&(T=D);continue}e[g]=_>0?S.min[g]-n-.02:S.max[g]+n+.02,E=!0,h=!0}if(!E&&T>0){const S=e[1]+T;if(this.query(e[0]-n,S+.02,e[2]-n,e[0]+n,S+s,e[2]+n,this._tmp4).length===0){e[1]=S;break}for(const w of p)e[g]=_>0?w.min[g]-n-.02:w.max[g]+n+.02;h=!0}}}}t[1]+=a*r;const u=t[1]*r;e[1]+=u;let d=!1;const f=this.query(e[0]-n+.05,e[1]-.01,e[2]-n+.05,e[0]+n-.05,e[1]+s,e[2]+n-.05,l);for(const g of f)u<=0&&g.max[1]>=e[1]-.01&&g.max[1]<=e[1]-u+o?(e[1]=g.max[1],t[1]=0,d=!0):u>0&&g.min[1]<=e[1]+s&&g.min[1]>=e[1]+s-u-.05&&(e[1]=g.min[1]-s-.02,t[1]=0);if(!d){const g=this.groundAt(e[0],e[2],e[1],.3);g!==null&&e[1]-g<.3&&t[1]<=0&&(e[1]=g,t[1]=0,d=!0)}return{grounded:d,blocked:h}}}sr.prototype._tmp=[];sr.prototype._tmp2=[];sr.prototype._tmp3=[];sr.prototype._tmp4=[];function v_(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,0.10)",t.lineWidth=1;for(let s=1;s<4;s++)t.beginPath(),t.moveTo(s*256/4,0),t.lineTo(s*256/4,256),t.stroke(),t.beginPath(),t.moveTo(0,s*256/4),t.lineTo(256,s*256/4),t.stroke();t.strokeStyle="rgba(0,0,0,0.28)",t.lineWidth=3,t.strokeRect(1.5,1.5,253,253);const n=new Ph(e);return n.wrapS=n.wrapT=qr,n.anisotropy=4,n.colorSpace=Gt,n}function Gs(i){const e=new _n(i[0],i[1],i[2]),t=e.attributes.uv,n=[[i[2],i[1]],[i[2],i[1]],[i[0],i[2]],[i[0],i[2]],[i[0],i[1]],[i[0],i[1]]];for(let s=0;s<6;s++)for(let r=0;r<4;r++){const o=s*4+r;t.setXY(o,t.getX(o)*n[s][0],t.getY(o)*n[s][1])}return e}function x_(i,e){if(i==="cyl"){const t=new io(e[0]/2,e[0]/2,e[1],14,1);return e[2]!==e[0]&&t.scale(1,1,e[2]/e[0]),t}if(i==="sphere"){const t=new so(.5,12,8);return t.scale(e[0],e[1],e[2]),t}return Gs(e)}function Vs(i,e){const t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=e[0],n[s*3+1]=e[1],n[s*3+2]=e[2];return i.setAttribute("color",new an(n,3)),i}function y_(i,e){const t=v_(),n=new hs({map:t,vertexColors:!0}),s=new sr,r=[];for(const l of i.boxes){const u=Vs(x_(l.shape,l.s),l.color);l.rotX&&u.rotateX(l.rotX),u.translate(l.c[0],l.c[1],l.c[2]),r.push(u),l.solid&&s.addBox(l.c,l.s,l.name)}const o=__(r,!1);for(const l of r)l.dispose();const a=new Tt(o,n);a.frustumCulled=!1,e.add(a);const c=i.covers.map(l=>M_(l,n,e)),h=[];for(const l of i.lights){const u=new Dh(new $e(l.color[0],l.color[1],l.color[2]),l.intensity*8,l.range,1.6);u.position.set(l.p[0],l.p[1],l.p[2]),e.add(u),h.push(u);const d=new Tt(new so(.09,8,6),new Qs({color:new $e(l.color[0],l.color[1],l.color[2])}));d.position.copy(u.position),e.add(d)}return{mesh:a,world:s,covers:c,lights:h,material:n}}function S_(i){const e=new U(i[0],i[1],i[2]),t=new U(-i[2],0,i[0]);return{f:e,r:t,u:new U(0,1,0)}}function M_(i,e,t){const n=new ls,{f:s,r,u:o}=S_(i.fwd),a=new U(i.pivot[0],i.pivot[1],i.pivot[2]),c=[];for(const l of i.parts){const u=a.clone().addScaledVector(r,l.hinge[0]).addScaledVector(o,l.hinge[1]).addScaledVector(s,l.hinge[2]),d=new Dt;d.position.copy(u);const[f,g,_,m,p,T]=l.leaf,E=Math.abs(s.x)>.5,S=E?[T,p,m]:[m,p,T],D=new U().addScaledVector(r,f).addScaledVector(o,g).addScaledVector(s,_);let w;if(l.slats){w=new Dt,w.position.copy(D);const R=e,L=V=>{const B=new Tt(Vs(Gs(E?[T,p,.08]:[.08,p,T]),l.color),R);return B.position.addScaledVector(r,V),B},M=V=>{const B=new Tt(Vs(Gs(E?[T,.12,m]:[m,.12,T]),l.color),R);return B.position.addScaledVector(o,V),B};w.add(L(-m/2+.04),L(m/2-.04),M(p/2-.06),M(-p/2+.06));const y=Vs(Gs(E?[.13,.012,m-.16]:[m-.16,.012,.13]),[.42,.34,.24]),P=Math.floor((p-.24)/.1);for(let V=0;V<P;V++){const B=new Tt(y,R);B.position.addScaledVector(o,-p/2+.12+.05+V*.1),B.quaternion.setFromAxisAngle(r,-.78),w.add(B)}}else w=new Tt(Vs(Gs(S),l.color),e),w.position.copy(D);if(d.add(w),l.bars){const R=new hs({color:1710622});for(let L=0;L<6;L++){const M=new Tt(new _n(.05,p,.05),R);M.position.copy(w.position).addScaledVector(r,-m/2+.2+L*(m-.4)/5).addScaledVector(s,.08),d.add(M)}}n.add(d),c.push({hinge:d,pt:l,r,f:s,u:o})}return t.add(n),{id:i.id,name:i.name,motion:i.motion,root:n,parts:c,open:0,set(l){this.open=l;for(const{hinge:u,pt:d,r:f,f:g,u:_}of c)if(i.motion==="hinge")u.rotation.set(0,(d.openAngle??1.6)*l,0);else if(i.motion==="lid")u.quaternion.setFromAxisAngle(f,Math.abs(d.openAngle??1.3)*l);else if(i.motion==="slide"){const m=d.slideAmount??d.leaf[3]*.85;d.slideDir==="y"?u.position.copy(Il(u)).addScaledVector(_,m*l):u.position.copy(Il(u)).addScaledVector(f,m*l)}}}}function Il(i){return i.userData.base||(i.userData.base=i.position.clone()),i.userData.base}const Kn=(i,e)=>Math.hypot(i[0]-e[0],i[2]-e[2]),tt=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2]),Ys=(i,e,t)=>i+(e-i)*t,xt=(i,e,t)=>Math.max(e,Math.min(t,i)),Uh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Kr=(i,e,t)=>i+Uh(e-i)*t,Ws=(i,e)=>Math.atan2(e[0]-i[0],-(e[2]-i[2])),kh=i=>[Math.sin(i),0,-Math.cos(i)],Li=(i,e)=>i+Math.random()*(e-i);function b_(i){for(let e=i.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}const Ul=(i,e)=>e[0]>=i.min[0]&&e[0]<=i.max[0]&&e[1]>=i.min[1]&&e[1]<=i.max[1]&&e[2]>=i.min[2]&&e[2]<=i.max[2],Nh=()=>"ontouchstart"in window||navigator.maxTouchPoints>1,Vo={kevin:"kevin-idle",killer:"killer",bots:["final-girl","jockey","pop-girl"]},E_=["Final Girl","Jock","Popular Girl"],T_=4,C_=1.5,A_=.55;class w_{constructor(e,t){this.plan=t,this.mobile=Nh(),this.renderer=new zg({canvas:e,antialias:!this.mobile,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.mobile?1.25:1.5)),this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=Jl,this.renderer.toneMappingExposure=1.1,this.scene=new Hg,this.scene.background=new $e(329228),this.scene.fog=new oc(329228,.016),this.camera=new on(62,1,.08,220),this.scene.add(new $g(2766162,723472,.55));const n=new Kg(8425664,.45);n.position.set(-30,60,20),this.scene.add(n),this.house=y_(t,this.scene),this.world=this.house.world,this.covers=this.house.covers,this.chars=new Map,this.textures=new Map,this.loader=new qg,this.cruiser=this.makeCruiser(),this.blink=0,this.camMode={type:"fixed",pos:t.points.meetingCam.pos,look:t.points.meetingCam.look},this.camPos=new U,this.camLook=new U,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}texture(e){if(!this.textures.has(e)){const t=this.loader.load(`./sprites/${e}.png`);t.colorSpace=Gt,t.minFilter=ui,this.textures.set(e,t)}return this.textures.get(e)}makeCruiser(){const e=new ls,t=this.plan.points.cruiserSize,n=new Tt(new _n(t[0],t[1]*.6,t[2]),new hs({color:1777454}));n.position.y=t[1]*.3+.25;const s=new Tt(new _n(t[0]*.9,t[1]*.45,t[2]*.45),new hs({color:15263982}));s.position.set(0,t[1]*.6+.25+t[1]*.2,.1);const r=new Tt(new _n(t[0]+.02,t[1]*.3,t[2]*.4),new hs({color:15263982}));r.position.y=t[1]*.45,this.lightRed=new Tt(new _n(.4,.15,.25),new Qs({color:16719904})),this.lightBlue=new Tt(new _n(.4,.15,.25),new Qs({color:2113791})),this.lightRed.position.set(-.35,s.position.y+t[1]*.3,.1),this.lightBlue.position.set(.35,s.position.y+t[1]*.3,.1),this.cruiserLight=new Dh(16724016,0,18,1.5),this.cruiserLight.position.set(0,2.2,0);for(let a=0;a<4;a++){const c=new Tt(new io(.35,.35,.25,12),new hs({color:1118481}));c.rotation.z=Math.PI/2,c.position.set((a%2?1:-1)*t[0]/2,.35,(a<2?1:-1)*t[2]*.32),e.add(c)}e.add(n,s,r,this.lightRed,this.lightBlue,this.cruiserLight);const o=this.plan.points.cruiserStart;return e.position.set(o[0],o[1],o[2]),this.scene.add(e),e}setCruiser(e,t,n,s,r,o){this.cruiser.position.set(e,t,n),this.cruiser.rotation.y=s,this.blink+=o*6;const a=r&&Math.sin(this.blink)>0,c=r&&Math.sin(this.blink)<=0;this.lightRed.material.color.setHex(a?16724016:4194304),this.lightBlue.material.color.setHex(c?3166463:64),this.cruiserLight.intensity=r?10:0,this.cruiserLight.color.setHex(a?16724016:3166463)}addChar(e){if(this.chars.has(e.id))return this.chars.get(e.id);const t=e.sprite==="killer"?["killer-walk-1","killer-walk-2","killer-walk-3","killer-walk-4"]:e.sprite==="kevin-idle"?["kevin-idle","kevin-walk-1","kevin-idle","kevin-walk-2"]:[e.sprite],n=new ka({map:this.texture(t[0]),transparent:!0,alphaTest:.35,depthWrite:!0,fog:!0}),s=new Tl(n),r=e.sprite==="killer"?2:1.78;s.scale.set(r*(288/512),r,1),this.scene.add(s);const o=this.makeLabel(e.name);this.scene.add(o);const a={e,sprite:s,frames:t,height:r,phase:0,bob:0,label:o,lastPos:[...e.pos]};return this.chars.set(e.id,a),a}makeLabel(e){const t=document.createElement("canvas");t.width=256,t.height=48;const n=t.getContext("2d");n.font='600 26px "Segoe UI", system-ui, sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#000",n.shadowBlur=6,n.fillStyle="#efe6d8",n.fillText(e,128,24);const s=new Ph(t);s.colorSpace=Gt;const r=new ka({map:s,transparent:!0,depthTest:!0,depthWrite:!1}),o=new Tl(r);return o.scale.set(1.6,.3,1),o}removeChar(e){const t=this.chars.get(e);t&&(this.scene.remove(t.sprite),this.scene.remove(t.label),this.chars.delete(e))}updateChar(e,t,n,s,r,o,a,c,h=!0){const l=e.sprite,u=e.height;if(r){l.visible=!0,l.material.rotation=1.35,l.material.color.setRGB(.45,.2,.2),l.position.set(t[0],t[1]+.45,t[2]),l.scale.set(u*(288/512),u,1),e.label.visible=!1;return}l.material.rotation=0,l.material.color.setRGB(1,1,1),l.visible=o,e.label.visible=h&&o&&!c;const d=Math.hypot(t[0]-e.lastPos[0],t[2]-e.lastPos[2]);e.lastPos=[...t],e.phase+=d*.9;const f=Math.abs(Math.sin(e.phase*Math.PI))*.05*xt(s*2,0,1);if(l.position.set(t[0],t[1]+u/2+f,t[2]),e.label.position.set(t[0],t[1]+u+.2,t[2]),e.frames.length>1){const g=s>.05?Math.floor(e.phase*.55%e.frames.length):0,_=this.texture(e.frames[g]);l.material.map!==_&&(l.material.map=_,l.material.needsUpdate=!0)}}thirdPerson(e,t,n,s,r=!1){const o=new U(e[0],e[1]+C_,e[2]),a=new U(Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n)),c=new U(Math.cos(t),0,Math.sin(t)),h=o.clone().addScaledVector(c,A_),l=h.clone().addScaledVector(a,-2.8),u=this.world.rayT([h.x,h.y,h.z],[l.x,l.y,l.z]),d=h.clone().lerp(l,Math.max(.12,u-.06)),f=h.clone().addScaledVector(a,10);r?(this.camPos.copy(d),this.camLook.copy(f)):(this.camPos.lerp(d,Math.min(1,s*22)),this.camLook.lerp(f,Math.min(1,s*30))),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.camera.fov=62,this.camera.updateProjectionMatrix()}peek(e,t,n,s){this.camera.position.set(e[0],e[1]+t,e[2]);const r=new U(Math.sin(n)*Math.cos(s),Math.sin(s),-Math.cos(n)*Math.cos(s));this.camera.lookAt(this.camera.position.clone().add(r)),this.camPos.copy(this.camera.position),this.camLook.copy(this.camera.position).add(r.multiplyScalar(10)),this.camera.fov=70,this.camera.updateProjectionMatrix()}fixed(e,t,n=50){this.camera.position.set(e[0],e[1],e[2]),this.camera.lookAt(t[0],t[1],t[2]),this.camPos.copy(this.camera.position),this.camLook.set(t[0],t[1],t[2]),this.camera.fov=n,this.camera.updateProjectionMatrix()}orbit(e,t,n){const s=new U(e[0],e[1]+1.3,e[2]),r=s.clone().add(new U(Math.sin(t)*4.5,2.2,Math.cos(t)*4.5)),o=this.world.rayT([s.x,s.y,s.z],[r.x,r.y,r.z]),a=s.clone().lerp(r,Math.max(.15,o-.05));this.camPos.lerp(a,Math.min(1,n*6)),this.camLook.lerp(s,Math.min(1,n*8)),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.camera.fov=58,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}}class R_{constructor(e){this.canvas=e,this.keys=new Set,this.move=[0,0],this.lookDelta=[0,0],this.use=!1,this.attack=!1,this.cycle=!1,this.menu=!1,this.pointerX=0,this.touch=Nh(),this.enabled=!1,this.sensitivity=.0022,this.touchSensitivity=.006,this._bindKeyboard(),this._bindMouse(),this.touch&&this._bindTouch()}_bindKeyboard(){window.addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")||(this.keys.add(e.code),e.code==="KeyE"&&(this.use=!0),e.code==="Tab"&&(this.cycle=!0,e.preventDefault()),e.code==="Space"&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear())}_bindMouse(){const e=this.canvas;e.addEventListener("mousedown",t=>{if(this.enabled){if(document.pointerLockElement!==e&&!this.touch){this.requestLock();return}t.button===0&&(this.attack=!0)}}),document.addEventListener("mousemove",t=>{document.pointerLockElement===e&&(this.lookDelta[0]+=t.movementX,this.lookDelta[1]+=t.movementY),this.pointerX=t.clientX/window.innerWidth})}get locked(){return this.touch||document.pointerLockElement===this.canvas}requestLock(){if(!(this.touch||!this.canvas.requestPointerLock))try{const e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}releaseLock(){document.exitPointerLock&&document.pointerLockElement&&document.exitPointerLock()}_bindTouch(){const e=document.getElementById("stick"),t=e.querySelector("i"),n=document.getElementById("lookzone");let s=null,r=[0,0];const o=55;e.addEventListener("touchstart",f=>{const g=f.changedTouches[0];s=g.identifier,r=[g.clientX,g.clientY],f.preventDefault()},{passive:!1});const a=f=>{for(const g of f.changedTouches)if(g.identifier===s){let _=g.clientX-r[0],m=g.clientY-r[1];const p=Math.hypot(_,m);p>o&&(_*=o/p,m*=o/p),t.style.transform=`translate(${_}px, ${m}px)`,this.move=[_/o,-m/o]}f.preventDefault()},c=f=>{for(const g of f.changedTouches)g.identifier===s&&(s=null,this.move=[0,0],t.style.transform="")};e.addEventListener("touchmove",a,{passive:!1}),e.addEventListener("touchend",c),e.addEventListener("touchcancel",c);let h=null,l=[0,0];n.addEventListener("touchstart",f=>{if(h!==null)return;const g=f.changedTouches[0];h=g.identifier,l=[g.clientX,g.clientY],this.pointerX=g.clientX/window.innerWidth,f.preventDefault()},{passive:!1}),n.addEventListener("touchmove",f=>{for(const g of f.changedTouches)g.identifier===h&&(this.lookDelta[0]+=(g.clientX-l[0])*(this.touchSensitivity/this.sensitivity),this.lookDelta[1]+=(g.clientY-l[1])*(this.touchSensitivity/this.sensitivity),l=[g.clientX,g.clientY],this.pointerX=g.clientX/window.innerWidth);f.preventDefault()},{passive:!1});const u=f=>{for(const g of f.changedTouches)g.identifier===h&&(h=null)};n.addEventListener("touchend",u),n.addEventListener("touchcancel",u);const d=(f,g)=>{document.getElementById(f).addEventListener("touchstart",m=>{this[g]=!0,m.preventDefault()},{passive:!1})};d("btnUse","use"),d("btnAttack","attack"),d("btnCycle","cycle"),d("btnMenu","menu"),window.addEventListener("touchmove",f=>{f.touches.length&&(this.pointerX=f.touches[f.touches.length-1].clientX/window.innerWidth)},{passive:!0})}poll(){if(!this.touch){let n=0,s=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(s+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(s-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(n-=1);const r=Math.hypot(n,s);this.move=r>1?[n/r,s/r]:[n,s]}const e=[this.lookDelta[0]*this.sensitivity,this.lookDelta[1]*this.sensitivity];this.lookDelta[0]=0,this.lookDelta[1]=0;const t={move:this.move,look:e,use:this.use,attack:this.attack,cycle:this.cycle,menu:this.menu,enabled:this.enabled};return this.use=!1,this.attack=!1,this.cycle=!1,this.menu=!1,t}}const P_={ambience:"ambience.mp3",chichi:"chichi.mp3",walk1:"walk-1.mp3",walk2:"walk-2.mp3",walk3:"walk-3.mp3",scream1:"scream-1.mp3",scream2:"scream-2.mp3",scream3:"scream-3.mp3"};class L_{constructor(){this.ctx=null,this.master=null,this.sirenNodes=null,this.heartTimer=0,this.heartRate=0,this.buffers={},this.ambienceNode=null,this.listenerPos=[0,0,0]}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.7,this.master.connect(this.ctx.destination),this.loadClips())}async loadClips(){for(const[e,t]of Object.entries(P_))try{const s=await(await fetch("./audio/"+t)).arrayBuffer();this.buffers[e]=await new Promise((r,o)=>this.ctx.decodeAudioData(s,r,o)),e==="ambience"&&this.wantAmbience&&this.ambience(!0)}catch(n){console.warn("audio clip failed",t,n)}}setListener(e,t){if(this.listenerPos=e,!this.ctx)return;const n=this.ctx.listener,s=this.ctx.currentTime;n.positionX?(n.positionX.setValueAtTime(e[0],s),n.positionY.setValueAtTime(e[1],s),n.positionZ.setValueAtTime(e[2],s),n.forwardX.setValueAtTime(t[0],s),n.forwardY.setValueAtTime(t[1],s),n.forwardZ.setValueAtTime(t[2],s),n.upX.setValueAtTime(0,s),n.upY.setValueAtTime(1,s),n.upZ.setValueAtTime(0,s)):n.setPosition&&(n.setPosition(e[0],e[1],e[2]),n.setOrientation(t[0],t[1],t[2],0,1,0))}playClip(e,{volume:t=1,pitch:n=1,at:s=null,minDist:r=3,maxDist:o=25}={}){if(!this.ctx)return null;const a=this.buffers[e];if(!a)return null;const c=this.ctx.createBufferSource();c.buffer=a,c.playbackRate.value=n;const h=this.ctx.createGain();if(h.gain.value=t,s){if(Math.hypot(s[0]-this.listenerPos[0],s[1]-this.listenerPos[1],s[2]-this.listenerPos[2])>o)return null;const l=this.ctx.createPanner();l.panningModel="equalpower",l.distanceModel="linear",l.refDistance=r,l.maxDistance=o,l.rolloffFactor=1,l.positionX?(l.positionX.value=s[0],l.positionY.value=s[1],l.positionZ.value=s[2]):l.setPosition(s[0],s[1],s[2]),c.connect(h).connect(l).connect(this.master)}else c.connect(h).connect(this.master);return c.start(),c}ambience(e){if(this.wantAmbience=e,!!this.ctx){if(e&&!this.ambienceNode&&this.buffers.ambience){const t=this.ctx.createBufferSource();t.buffer=this.buffers.ambience,t.loop=!0;const n=this.ctx.createGain();n.gain.value=.45,t.connect(n).connect(this.master),t.start(),this.ambienceNode={src:t,g:n}}else if(!e&&this.ambienceNode){const{src:t,g:n}=this.ambienceNode;n.gain.linearRampToValueAtTime(1e-4,this.ctx.currentTime+1.5),setTimeout(()=>{try{t.stop()}catch{}},1600),this.ambienceNode=null}}}footstep(e,t,n=!1){const s=1+Math.floor(Math.random()*3);this.playClip("walk"+s,{volume:(n?.8:.55)*(t?1:.72),pitch:n?.78:.95+Math.random()*.1,at:e,minDist:2,maxDist:22})}screamAt(e){const t=1+Math.floor(Math.random()*3);this.playClip("scream"+t,{volume:.9,at:e,minDist:4,maxDist:45})||this.scream()}encounter(e){this.playClip("chichi",{volume:.7,at:e,minDist:3,maxDist:25})}noiseBuffer(e){const t=Math.floor(this.ctx.sampleRate*e),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}env(e,t,n,s,r=1){e.gain.cancelScheduledValues(t),e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(r,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+s)}tone(e,t,n,s,r,o=null){if(!this.ctx)return;const a=this.ctx.currentTime,c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=t,c.frequency.setValueAtTime(e,a),o&&c.frequency.exponentialRampToValueAtTime(o,a+n+s),this.env(h,a,n,s,r),c.connect(h).connect(this.master),c.start(a),c.stop(a+n+s+.05)}noise(e,t,n,s=1200,r="bandpass"){if(!this.ctx)return;const o=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer(e+t+.1);const c=this.ctx.createBiquadFilter();c.type=r,c.frequency.value=s,c.Q.value=.8;const h=this.ctx.createGain();this.env(h,o,e,t,n),a.connect(c).connect(h).connect(this.master),a.start(o),a.stop(o+e+t+.1)}thump(e=.5){this.tone(58,"sine",.01,.22,e,38)}breath(e=.35){this.noise(.12,.35,e,900)}gasp(e=.6){this.noise(.03,.25,e,1800),this.tone(420,"triangle",.02,.15,e*.3,260)}creak(){this.tone(220,"sawtooth",.15,.35,.12,160),this.noise(.05,.3,.08,500)}whoosh(){this.noise(.05,.2,.35,2200,"highpass")}hit(){this.noise(.005,.18,.7,700,"lowpass"),this.tone(90,"square",.005,.12,.4,50)}tick(){this.tone(1600,"square",.002,.03,.12)}sting(){this.tone(110,"sawtooth",.02,1.4,.5,55),this.noise(.02,1.2,.3,300,"lowpass")}scream(){this.tone(700,"sawtooth",.05,.6,.35,380),this.noise(.05,.5,.25,2500)}door(){this.noise(.01,.12,.25,400,"lowpass")}siren(e){if(this.ctx){if(e&&!this.sirenNodes){const t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="square",t.frequency.value=700,s.frequency.value=.9,r.gain.value=250,s.connect(r).connect(t.frequency),n.gain.value=.05,t.connect(n).connect(this.master),t.start(),s.start(),this.sirenNodes={o:t,g:n,lfo:s}}else if(!e&&this.sirenNodes){const{o:t,g:n,lfo:s}=this.sirenNodes;n.gain.linearRampToValueAtTime(1e-4,this.ctx.currentTime+1),setTimeout(()=>{try{t.stop(),s.stop()}catch{}},1100),this.sirenNodes=null}}}heartbeat(e,t){if(!this.ctx||t<=0){this.heartTimer=0;return}const n=1.1-t*.6;this.heartTimer+=e,this.heartTimer>=n&&(this.heartTimer=0,this.thump(.25+t*.5),setTimeout(()=>this.thump(.15+t*.35),160))}}const En=.5,Fs=.45,os=.37,D_=1.6;class I_{constructor(e,t){this.world=e,this.minx=t.minx,this.minz=t.minz,this.cols=Math.ceil((t.maxx-t.minx)/En),this.rows=Math.ceil((t.maxz-t.minz)/En),this.columns=new Array(this.cols*this.rows),this.nx=[],this.ny=[],this.nz=[],this.ncol=[],this.adj=[],this._build()}_build(){const e=this.world,t=[];for(let s=0;s<this.rows;s++)for(let r=0;r<this.cols;r++){const o=this.minx+(r+.5)*En,a=this.minz+(s+.5)*En,c=e.query(o-.05,-100,a-.05,o+.05,100,a+.05,t),h=[];for(const u of c){if(Math.min(u.max[0]-u.min[0],u.max[2]-u.min[2])<.35)continue;const d=u.max[1];h.some(f=>Math.abs(f-d)<.05)||h.push(d)}h.sort((u,d)=>u-d);let l=null;for(const u of h){if(e.query(o-os,u+.06,a-os,o+os,u+D_,a+os,[]).some(g=>g.max[1]>u+Fs))continue;const f=this.nx.length;this.nx.push(o),this.ny.push(u),this.nz.push(a),this.ncol.push(s*this.cols+r),(l||(l=[])).push(f)}this.columns[s*this.cols+r]=l}const n=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(let s=0;s<this.nx.length;s++){const r=this.ncol[s],o=r%this.cols,a=(r-o)/this.cols,c=this.ny[s],h=[],l=(u,d)=>{const f=o+u,g=a+d;if(f<0||g<0||f>=this.cols||g>=this.rows)return-1;const _=this.columns[g*this.cols+f];if(!_)return-1;let m=-1,p=Fs;for(const T of _){const E=Math.abs(this.ny[T]-c);E<=p&&(p=E,m=T)}return m};for(let u=0;u<8;u++){const[d,f]=n[u],g=l(d,f);g<0||u>=4&&(l(d,0)<0||l(0,f)<0)||h.push(g)}this.adj.push(h)}this.nodeCount=this.nx.length}nearest(e,t=2.5){const n=Math.floor((e[0]-this.minx)/En),s=Math.floor((e[2]-this.minz)/En),r=Math.ceil(t/En);let o=-1,a=1/0;for(let c=s-r;c<=s+r;c++)for(let h=n-r;h<=n+r;h++){if(h<0||c<0||h>=this.cols||c>=this.rows)continue;const l=this.columns[c*this.cols+h];if(l)for(const u of l){const d=this.nx[u]-e[0],f=this.nz[u]-e[2],g=this.ny[u]-e[1],_=d*d+f*f+g*g*4;_<a&&(a=_,o=u)}}return o}findPath(e,t){const n=this.nearest(e),s=this.nearest(t);if(n<0||s<0)return null;if(n===s)return[[this.nx[s],this.ny[s],this.nz[s]]];const r=this.nodeCount,o=this._g||(this._g=new Float32Array(r)),a=this._came||(this._came=new Int32Array(r)),c=this._closed||(this._closed=new Uint8Array(r)),h=this._stampArr||(this._stampArr=new Int32Array(r)),l=this._stamp=(this._stamp||0)+1,u=this.nx[s],d=this.ny[s],f=this.nz[s],g=E=>{const S=Math.abs(this.nx[E]-u),D=Math.abs(this.nz[E]-f);return Math.max(S,D)+.41*Math.min(S,D)+Math.abs(this.ny[E]-d)*2},_=new U_;h[n]=l,o[n]=0,a[n]=-1,c[n]=0,_.push(n,g(n));let m=!1,p=0;for(;_.size>0;){const E=_.pop();if(E===s){m=!0;break}if(c[E]===l)continue;if(c[E]=l,++p>6e4)break;const S=this.ny[E];for(const D of this.adj[E]){if(c[D]===l)continue;const w=this.nx[D]-this.nx[E],R=this.nz[D]-this.nz[E],L=Math.hypot(w,R)+Math.abs(this.ny[D]-S)*1.5,M=o[E]+L;(h[D]!==l||M<o[D])&&(h[D]=l,o[D]=M,a[D]=E,c[D]=0,_.push(D,M+g(D)))}}if(!m)return null;const T=[];for(let E=s;E!==-1;E=a[E])T.push(E);return T.reverse(),this._smooth(T)}_smooth(e){const t=e.map(r=>[this.nx[r],this.ny[r],this.nz[r]]),n=[];let s=0;for(;s<t.length-1;){let r=t.length-1;for(;r>s+1&&!this._clear(t[s],t[r]);)r--;n.push(t[r]),s=r}return n.length?n:[t[t.length-1]]}_clear(e,t){const n=t[0]-e[0],s=t[2]-e[2],r=t[1]-e[1],o=Math.hypot(n,s);if(Math.abs(r)>Fs&&o>.01)return!1;const a=Math.ceil(o/.25);let c=e[1];for(let h=1;h<=a;h++){const l=h/a,u=e[0]+n*l,d=e[2]+s*l,f=Math.floor((u-this.minx)/En),g=Math.floor((d-this.minz)/En);if(f<0||g<0||f>=this.cols||g>=this.rows)return!1;const _=this.columns[g*this.cols+f];if(!_)return!1;let m=!1,p=c;for(const S of _)if(Math.abs(this.ny[S]-c)<=Fs){m=!0,p=this.ny[S];break}if(!m)return!1;const T=-s/o*os,E=n/o*os;if(!this._hasNodeNear(u+T,d+E,p)||!this._hasNodeNear(u-T,d-E,p))return!1;c=p}return!0}_hasNodeNear(e,t,n){const s=Math.floor((e-this.minx)/En),r=Math.floor((t-this.minz)/En);if(s<0||r<0||s>=this.cols||r>=this.rows)return!1;const o=this.columns[r*this.cols+s];if(!o)return!1;for(const a of o)if(Math.abs(this.ny[a]-n)<=Fs)return!0;return!1}randomNear(e,t,n=Math.random){for(let s=0;s<12;s++){const r=n()*Math.PI*2,o=t*(.4+.6*n()),a=this.nearest([e[0]+Math.cos(r)*o,e[1],e[2]+Math.sin(r)*o],1.2);if(a>=0&&Math.abs(this.ny[a]-e[1])<1.5)return[this.nx[a],this.ny[a],this.nz[a]]}return null}node(e){return[this.nx[e],this.ny[e],this.nz[e]]}}class U_{constructor(){this.items=[],this.keys=[]}get size(){return this.items.length}push(e,t){const n=this.items,s=this.keys;n.push(e),s.push(t);let r=n.length-1;for(;r>0;){const o=r-1>>1;if(s[o]<=s[r])break;[n[o],n[r]]=[n[r],n[o]],[s[o],s[r]]=[s[r],s[o]],r=o}}pop(){const e=this.items,t=this.keys,n=e[0],s=e.pop(),r=t.pop();if(e.length>0){e[0]=s,t[0]=r;let o=0;for(;;){const a=2*o+1,c=a+1;let h=o;if(a<e.length&&t[a]<t[h]&&(h=a),c<e.length&&t[c]<t[h]&&(h=c),h===o)break;[e[h],e[o]]=[e[o],e[h]],[t[h],t[o]]=[t[o],t[h]],o=h}}return n}}const k_=30,N_=300,F_=5,kl=11,Nl=25,ct={moveSpeed:2.65,chaseSpeed:3.9,senseRadius:22,eyeHeight:1.7,searchSeconds:4,hidingSpotCheckRadius:6,checkPause:1.2,checkOpen:3,noiseSpotRadius:4.5,checkReach:2.2,attackRange:1.4,damage:20,attackInterval:1,hearingRadius:13,checkChance:.7,scanSeconds:[1.2,2.4],revisitAfter:60,floorPenalty:4,stuckSeconds:6},dn={walk:2.15,run:3.65,detect:14,tooClose:5,gone:14,safeSeconds:4,nerveRange:9,nerveChance:.12},O_=.35,B_=1.7;class z_{constructor(e,t,n,s){this.plan=e,this.world=t,this.nav=n,this.send=s,this.phase="lobby",this.players=new Map,this.entities=[],this.spots=e.spots.map(r=>({...r,open:!1,occupant:-1,openUntil:0,reserved:-1})),this.rooms=e.rooms.map(r=>({...r,lastVisited:-1e3,spots:[]})),this.assignSpotsToRooms(),this.time=0,this.events=[],this.spotDirty=new Set,this.acc=0,this.snapTimer=0,this.cruiser={pos:[...e.points.cruiserStart],yaw:0,t:0,siren:!1},this.gate=0,this.gateBlockerId=t.addBox(e.points.gateBlocker.c,e.points.gateBlocker.s,"gate"),this.matchNo=0}assignSpotsToRooms(){for(const e of this.spots){let t=null,n=1/0;for(const s of this.rooms){if(Ul(s,e.hidden)){t=s;break}const r=xt(e.hidden[0],s.min[0],s.max[0]),o=xt(e.hidden[1],s.min[1],s.max[1]),a=xt(e.hidden[2],s.min[2],s.max[2]),c=tt([r,o,a],e.hidden)+Math.abs(s.floorY-e.hidden[1])*3;c<n&&(n=c,t=s)}t&&(t.spots.push(e),e.roomRef=t)}}roomAt(e){for(const s of this.rooms)if(Ul(s,e))return s;let t=null,n=1/0;for(const s of this.rooms){const r=xt(e[0],s.min[0],s.max[0]),o=xt(e[1],s.min[1],s.max[1]),a=xt(e[2],s.min[2],s.max[2]),c=tt([r,o,a],e);c<n&&(n=c,t=s)}return t}addPlayer(e,t){this.players.has(e)?this.players.get(e).name=t||"Player":this.players.set(e,{id:e,name:t||"Player",role:"survivor",entity:null}),this.broadcastLobby()}removePlayer(e){const t=this.players.get(e);t&&(this.players.delete(e),t.entity&&this.phase!=="lobby"&&(t.entity.bot=!0,t.entity.owner=null,t.entity.name+=" (bot)",t.entity.brain=t.entity.kind==="killer"?new Fl(this,t.entity):new Wo(this,t.entity),t.entity.kind==="killer"&&this.phase==="hunt"&&(t.entity.brain.armed=!0),this.event({t:"banner",text:t.name+" left - a bot takes over"})),this.broadcastLobby())}setRole(e,t){const n=this.players.get(e);if(!(!n||this.phase!=="lobby")){if(t==="killer")for(const s of this.players.values())s.role==="killer"&&(s.role="survivor");n.role=t,this.broadcastLobby()}}lobbyState(){return{t:"lobby",players:[...this.players.values()].map(e=>({id:e.id,name:e.name,role:e.role})),phase:this.phase}}broadcastLobby(){this.send("all",this.lobbyState())}startMatch(){if(this.phase!=="lobby")return;this.matchNo++,this.entities=[];for(const l of this.spots)l.open=!1,l.occupant=-1,l.openUntil=0,l.reserved=-1;for(const l of this.rooms)l.lastVisited=-1e3;this.spotDirty=new Set(this.spots.map(l=>l.id)),this.gate=0,this.gateBlockerId===null&&(this.gateBlockerId=this.world.addBox(this.plan.points.gateBlocker.c,this.plan.points.gateBlocker.s,"gate")),this.cruiser={pos:[...this.plan.points.cruiserStart],yaw:Math.PI/2,t:0,siren:!1};const e=this.plan.points,t=[...this.players.values()],n=t.find(l=>l.role==="killer")||null,s=t.filter(l=>l!==n);let r=0;const o=(l,u,d,f,g,_)=>{const m={id:r++,kind:l,name:u,bot:d,owner:f,sprite:g,pos:[..._],vel:[0,0,0],yaw:0,pitch:0,hp:100,dead:!1,hidden:-1,escaped:!1,hostDriven:d,spd:0,tpSeq:0,frozen:!1,state:"",lastHit:0,deathTime:0,brain:null};return this.entities.push(m),m},a=o("killer",n?n.name:"The Killer",!n,n?n.id:null,Vo.killer,e.killerWait);a.yaw=Ws(e.killerWait,e.exit),a.frozen=!0,n&&(n.entity=a),a.bot&&(a.brain=new Fl(this,a));let c=0;for(const l of s){const u=o("survivor",l.name,!1,l.id,Vo.kevin,e.huddle[c%e.huddle.length]);u.yaw=Ws(u.pos,e.huddle[(c+2)%e.huddle.length]),l.entity=u,c++}let h=0;for(;this.entities.filter(l=>l.kind==="survivor").length<T_;){const l=o("survivor",E_[h%3]+(h>=3?" "+(h+1):""),!0,null,Vo.bots[h%3],e.huddle[c%e.huddle.length]);l.yaw=Ws(l.pos,e.huddle[(c+2)%e.huddle.length]),l.brain=new Wo(this,l),h++,c++}this.killer=a,this.setPhase("briefing",F_),this.send("all",{t:"start",match:this.matchNo,entities:this.entities.map(l=>this.fullEntity(l)),phase:this.phase,timeLeft:this.timeLeft,players:this.lobbyState().players})}fullEntity(e){return{id:e.id,kind:e.kind,name:e.name,bot:e.bot,owner:e.owner,sprite:e.sprite,pos:e.pos,yaw:e.yaw,hp:e.hp,dead:e.dead,hidden:e.hidden,escaped:e.escaped,hostDriven:e.hostDriven,frozen:e.frozen}}resetToLobby(){this.phase="lobby";for(const e of this.players.values())e.entity=null;this.entities=[],this.send("all",{t:"reset"}),this.broadcastLobby()}setPhase(e,t){this.phase=e,this.phaseEnds=this.time+(t||0),this.event({t:"phase",phase:e,timeLeft:t||0})}get timeLeft(){return Math.max(0,this.phaseEnds-this.time)}event(e){this.events.push(e)}survivors(){return this.entities.filter(e=>e.kind==="survivor")}inPlay(e){return e&&!e.dead&&!e.escaped}onClient(e,t){const n=this.players.get(e);switch(t.t){case"join":this.addPlayer(e,t.name),this.phase!=="lobby"&&this.send(e,{t:"lobby",players:this.lobbyState().players,phase:this.phase,spectateOnly:!0});break;case"role":this.setRole(e,t.role);break;case"pose":{const s=n&&n.entity;if(!s||s.hostDriven||s.dead||s.hidden>=0||s.frozen)break;s.pos[0]=t.p[0],s.pos[1]=t.p[1],s.pos[2]=t.p[2],s.yaw=t.yaw,s.pitch=t.pitch||0,s.spd=t.spd||0;break}case"act":this.onAct(n,t);break;case"start":e==="host"&&this.startMatch();break;case"again":e==="host"&&this.resetToLobby();break;case"skip":this.phase==="briefing"&&(this.phaseEnds=this.time);break}}onAct(e,t){const n=e&&e.entity;if(!(!n||n.dead))switch(t.a){case"hide":{if(n.kind!=="survivor"||n.hidden>=0||n.escaped||n.hostDriven)return;const s=this.spots[t.spot];if(!s||s.occupant>=0||s.open||tt(n.pos,s.entry)>3.2)return;this.enterSpot(n,s);break}case"unhide":n.hidden>=0&&this.leaveSpot(n,!1);break;case"check":{if(n.kind!=="killer"||n.frozen)return;const s=this.spots[t.spot];if(!s||tt(n.pos,s.entry)>ct.checkReach+1.2)return;this.checkSpot(n,s);break}case"attack":n.kind==="killer"&&!n.frozen&&this.killerAttack(n);break;case"gasp":n.kind==="survivor"&&n.hidden>=0&&this.noise(n.pos,1,"a gasp",n);break;case"noise":{if(n.kind!=="survivor"||n.escaped||this.phase!=="hunt"||this.time<(n.nextMicClue||0))return;n.nextMicClue=this.time+2,this.noise(n.pos,xt(+t.loudness||.7,.5,1.4),"breathing",n);break}}}enterSpot(e,t){e.hidden=t.id,t.occupant=e.id,t.reserved=-1,e.pos=[...t.hidden],e.vel=[0,0,0],e.spd=0,e.tpSeq++,e.yaw=Math.atan2(t.dir[0],-t.dir[2]),this.spotDirty.add(t.id),this.event({t:"hide",id:e.id,spot:t.id})}leaveSpot(e,t){const n=this.spots[e.hidden];if(!n){e.hidden=-1;return}e.hidden=-1,n.occupant===e.id&&(n.occupant=-1),e.pos=[...n.entry],e.vel=[0,0,0],e.tpSeq++,e.yaw=Math.atan2(n.dir[0],-n.dir[2]),this.spotDirty.add(n.id),this.event({t:"unhide",id:e.id,spot:n.id,forced:t}),e.brain&&e.brain.onForcedOut&&t&&e.brain.onForcedOut()}checkSpot(e,t){t.open=!0,t.openUntil=this.time+ct.checkOpen,this.spotDirty.add(t.id);const n=t.occupant>=0?this.entities[t.occupant]:null;let s=null;return n&&this.inPlay(n)&&(s=n,this.leaveSpot(n,!0),this.damage(n,ct.damage,e),this.event({t:"found",id:n.id,spot:t.id,by:e.id})),this.event({t:"check",spot:t.id,found:!!s,by:e.id,room:t.room}),e.brain&&e.brain.onSpotChecked(t,s),s}killerAttack(e){if(this.time<(e.nextAttack||0))return!1;e.nextAttack=this.time+ct.attackInterval;let t=null,n=ct.attackRange;const s=kh(e.yaw);for(const r of this.survivors()){if(!this.inPlay(r)||r.hidden>=0)continue;const o=r.pos[0]-e.pos[0],a=r.pos[2]-e.pos[2],c=Math.hypot(o,a);c>n||Math.abs(r.pos[1]-e.pos[1])>1.5||c>.3&&o/c*s[0]+a/c*s[2]<.2||(t=r,n=c)}return this.event({t:"swing",id:e.id,hit:!!t}),t&&this.damage(t,ct.damage,e),!!t}damage(e,t,n){e.dead||(e.hp=Math.max(0,e.hp-t),e.lastHit=this.time,this.event({t:"hit",id:e.id,hp:e.hp,at:[...e.pos]}),e.brain&&e.brain.onDamaged&&e.brain.onDamaged(n),e.hp<=0&&(e.dead=!0,e.deathTime=this.time,e.spd=0,e.hidden>=0&&this.leaveSpot(e,!0),this.event({t:"died",id:e.id,name:e.name,at:[...e.pos]}),this.killer&&this.killer.brain&&this.killer.brain.onKilled(e)))}noise(e,t,n,s){this.event({t:"noise",at:[...e],loudness:t,label:n,id:s?s.id:-1,room:(this.roomAt(e)||{}).name}),this.killer&&this.killer.brain&&this.phase==="hunt"&&this.killer.brain.onNoise(e,t,n)}update(e){if(this.phase==="lobby")return;this.acc+=Math.min(e,.25);const t=1/30;for(;this.acc>=t;)this.acc-=t,this.step(t);this.snapTimer+=e,this.snapTimer>=.05&&(this.snapTimer=0,this.sendSnapshot())}step(e){this.time+=e;const t=this.plan.points;switch(this.phase){case"briefing":if(this.time>=this.phaseEnds){this.setPhase("hiding",k_);for(const n of this.entities)n.brain&&n.brain.onHidingStarted&&n.brain.onHidingStarted();this.event({t:"banner",text:"Hide! He is on his way.",who:"survivor"}),this.event({t:"banner",text:"They are hiding. Wait for your moment.",who:"killer"})}break;case"hiding":if(this.time>=this.phaseEnds){this.setPhase("hunt",N_);const n=this.killer;n.pos=[...t.killerSpawn],n.vel=[0,0,0],n.yaw=0,n.tpSeq++,n.frozen=!1,n.brain&&(n.brain.armed=!0),this.event({t:"banner",text:"He is in the house. Don't make a sound.",who:"survivor"}),this.event({t:"banner",text:"Go. Find them all before the cops come.",who:"killer"}),this.event({t:"sting"})}break;case"hunt":if(this.survivors().every(n=>n.dead)){this.finish(!1);break}if(this.time>=this.phaseEnds){this.startRescue();break}this.updateNerves(e),this.updateEncounters(e);break;case"rescue":this.updateRescue(e);break;case"over":this.updateCruiserLeave(e);break}this.survivors().every(n=>n.dead)&&this.phase!=="over"&&this.phase!=="briefing"&&this.finish(!1);for(const n of this.spots)n.open&&this.time>=n.openUntil&&(n.open=!1,this.spotDirty.add(n.id));for(const n of this.entities)n.brain&&!n.dead&&n.brain.update(e),n.hostDriven&&!n.dead&&n.hidden<0&&this.moveBody(n,e)}updateNerves(e){const t=this.killer;for(const n of this.survivors()){if(!n.bot||!this.inPlay(n)||n.hidden<0)continue;const s=tt(n.pos,t.pos);if(s>dn.nerveRange)continue;const r=dn.nerveChance*(1-s/dn.nerveRange)*e;Math.random()<r&&this.noise(n.pos,.6,"a breath",n)}}updateEncounters(e){if(this.encounterTimer=(this.encounterTimer||0)-e,this.encounterTimer>0)return;this.encounterTimer=.2;const t=this.killer;this.encounterLast||(this.encounterLast=new Map);for(const n of this.survivors()){if(!this.inPlay(n)||n.hidden>=0||tt(n.pos,t.pos)>12||this.world.blocked([t.pos[0],t.pos[1]+1.7,t.pos[2]],[n.pos[0],n.pos[1]+1,n.pos[2]]))continue;const s=this.encounterLast.get(n.id);(s===void 0||this.time-s>=7)&&this.event({t:"encounter",id:n.id,at:[...n.pos]}),this.encounterLast.set(n.id,this.time)}}startRescue(){this.setPhase("rescue",kl+Nl+5),this.rescueArrived=!1,this.cruiser.siren=!0,this.cruiser.t=0;const e=this.killer;e.frozen=!0,e.brain&&(e.brain.armed=!1),this.event({t:"banner",text:"Sirens. The cops are here!"}),this.event({t:"siren",on:!0})}updateRescue(e){const t=this.plan.points,n=this.cruiser;n.t+=e;const s=xt(n.t/kl,0,1);if(this.driveCruiser([t.cruiserStart,...t.arrivePath],s),this.gate=xt((n.t-3)/3,0,1),this.gate>.3&&this.gateBlockerId!==null&&(this.world.removeById(this.gateBlockerId),this.gateBlockerId=null),!this.rescueArrived&&s>=1){this.rescueArrived=!0,this.arrivedAt=this.time,this.event({t:"rescueArrived"});for(const r of this.survivors())this.inPlay(r)&&(r.hidden>=0&&this.leaveSpot(r,!1),r.hostDriven=!0,r.brain||(r.brain=new Wo(this,r)),r.brain.escape())}this.rescueArrived&&(this.survivors().filter(o=>this.inPlay(o)).length===0||this.time-this.arrivedAt>=Nl)&&this.finish(!0)}driveCruiser(e,t){let n=0;const s=[];for(let o=0;o+1<e.length;o++){const a=Kn(e[o],e[o+1]);s.push(a),n+=a}let r=t*n;for(let o=0;o<s.length;o++){if(r<=s[o]||o===s.length-1){const a=s[o]>0?xt(r/s[o],0,1):1,c=e[o],h=e[o+1];this.cruiser.pos=[c[0]+(h[0]-c[0])*a,c[1]+(h[1]-c[1])*a,c[2]+(h[2]-c[2])*a],this.cruiser.yaw=Ws(c,h);return}r-=s[o]}}updateCruiserLeave(e){if(!this.leaving)return;this.cruiser.t+=e;const t=this.plan.points;this.driveCruiser([t.arrivePath[t.arrivePath.length-1],...t.leavePath],xt(this.cruiser.t/9,0,1))}finish(e){if(this.phase==="over")return;this.setPhase("over",0);const t=this.killer;t.frozen=!0,t.brain&&(t.brain.armed=!1);for(const r of this.survivors())!r.escaped&&r.brain&&r.brain.state!=="escape"&&(r.brain.paused=!0);e&&(this.leaving=!0,this.cruiser.t=0,this.event({t:"siren",on:!1}));const n=this.survivors().filter(r=>!r.dead).length,s=this.survivors().filter(r=>r.dead).length;this.event({t:"result",survivorsWon:e,alive:n,dead:s}),this.sendSnapshot()}moveBody(e,t){const n=e.wishVel||[0,0,0],s=e.wishSpeed||0,r=12;e.vel[0]+=xt(n[0]-e.vel[0],-r*t,r*t),e.vel[2]+=xt(n[2]-e.vel[2],-r*t,r*t);const o=this.world.moveCharacter(e.pos,e.vel,O_,B_,t,.45),a=Math.hypot(e.vel[0],e.vel[2]);e.spd=s>0?xt(a/3.9,0,1):0,a>.2&&(e.yaw=Kr(e.yaw,Math.atan2(e.vel[0],-e.vel[2]),Math.min(1,t*10))),e.blocked=o.blocked,e.pos[1]<-20&&(e.pos[1]=1,e.vel[1]=0)}sendSnapshot(){const e=this.entities.map(s=>[s.id,+s.pos[0].toFixed(3),+s.pos[1].toFixed(3),+s.pos[2].toFixed(3),+s.yaw.toFixed(3),+s.spd.toFixed(2),s.hp,s.hidden,s.dead?1:0,s.escaped?1:0,s.hostDriven?1:0,s.frozen?1:0,s.tpSeq,s.state||""]),t=[...this.spotDirty].map(s=>[s,this.spots[s].open?1:0,this.spots[s].occupant]);this.spotDirty.clear();const n={t:"snap",ph:this.phase,tl:+this.timeLeft.toFixed(2),e,sp:t,ev:this.events,car:[+this.cruiser.pos[0].toFixed(2),+this.cruiser.pos[1].toFixed(2),+this.cruiser.pos[2].toFixed(2),+this.cruiser.yaw.toFixed(2),this.cruiser.siren?1:0],gate:+this.gate.toFixed(2)};this.events=[],this.send("all",n)}fullState(){return{t:"start",match:this.matchNo,entities:this.entities.map(e=>this.fullEntity(e)),phase:this.phase,timeLeft:this.timeLeft,players:this.lobbyState().players,spots:this.spots.map(e=>[e.id,e.open?1:0,e.occupant])}}}class Fh{constructor(e,t){this.sim=e,this.e=t,this.path=null,this.goal=null,this.repathAt=0,this.stuckTimer=0,this.progressTimer=0,this.bestDist=1/0,this.arriveDist=.6,this.blockedFor=0,this.nudge=0}setGoal(e,t,n=!1){if(!e)return;const s=!this.goal||tt(this.goal,e)>.5;if(this.speed=t,s&&!n&&this.path&&this.sim.time<this.repathAt-1.1){this.goal=[...e];return}if((s||n||!this.path)&&(this.goal=[...e],this.path=this.sim.nav.findPath(this.e.pos,e),this.repathAt=this.sim.time+1.5,this.bestDist=1/0,this.stuckTimer=0,this.progressTimer=0,this.blockedFor=0,this.path&&this.path.length))for(;this.path.length>1&&Kn(this.e.pos,this.path[0])<.4;)this.path.shift()}clear(){this.goal=null,this.path=null,this.e.wishVel=[0,0,0],this.e.wishSpeed=0}get arrived(){return this.goal&&Kn(this.e.pos,this.goal)<this.arriveDist&&Math.abs(this.e.pos[1]-this.goal[1])<1.2}update(e){const t=this.e;if(!this.goal){t.wishVel=[0,0,0],t.wishSpeed=0;return}if(this.arrived){t.wishVel=[0,0,0],t.wishSpeed=0;return}(this.sim.time>=this.repathAt||!this.path&&this.sim.time>=this.repathAt-1)&&(this.path=this.sim.nav.findPath(t.pos,this.goal),this.repathAt=this.sim.time+1.5);let n=this.goal;if(this.path&&this.path.length){for(;this.path.length>1&&Kn(t.pos,this.path[0])<.45&&Math.abs(t.pos[1]-this.path[0][1])<.8;)this.path.shift();n=this.path[0],this.path.length===1&&Kn(t.pos,n)<.45&&(n=this.goal)}const s=n[0]-t.pos[0],r=n[2]-t.pos[2],o=Math.hypot(s,r)||1;let a=s/o,c=r/o;if(this.blockedFor=t.blocked?this.blockedFor+e:0,this.blockedFor>.35){(this.nudge===0||this.blockedFor>1.2)&&(this.nudge=this.nudge>=0?-1:1,this.blockedFor=.36),a+=-c*this.nudge*1.2,c+=a*this.nudge*1.2;const l=Math.hypot(a,c)||1;a/=l,c/=l}else t.blocked||(this.nudge=0);t.wishVel=[a*this.speed,0,c*this.speed],t.wishSpeed=this.speed;const h=tt(t.pos,this.goal);h<this.bestDist-.15?(this.bestDist=h,this.stuckTimer=0,this.progressTimer=0):(this.stuckTimer+=e,this.progressTimer+=e),this.progressTimer>2.5&&(this.path=this.sim.nav.findPath(t.pos,this.goal),this.progressTimer=0)}}class Wo{constructor(e,t){this.sim=e,this.e=t,this.walker=new Fh(e,t),this.state="idle",this.spot=null,this.lastSpot=null,this.paused=!1,this.restlessAt=1/0,this.fleeUntil=0,this.lastSeenKiller=-100,this.rethinkAt=0,this.variation=Li(.9,1.04)}onHidingStarted(){this.rethinkAt=this.sim.time+Li(.2,1.5)}onForcedOut(){this.lastSpot=this.spot,this.spot=null,this.flee()}onDamaged(e){this.state!=="escape"&&this.flee()}escape(){this.state="escape",this.walker.setGoal(this.sim.plan.points.exit,dn.run*this.variation,!0),this.e.state="escaping"}flee(){this.state="flee",this.fleeUntil=this.sim.time+Li(3,5),this.e.state="fleeing",this.pickFleePoint()}pickFleePoint(){const e=this.sim.killer;let t=null,n=-1;for(let s=0;s<8;s++){const r=this.sim.nav.randomNear(this.e.pos,12);if(!r)continue;const o=tt(r,e.pos);o>n&&(n=o,t=r)}t&&this.walker.setGoal(t,dn.run*this.variation,!0)}killerVisible(){const e=this.sim.killer,t=this.e;return tt(t.pos,e.pos)>dn.detect?!1:!this.sim.world.blocked([t.pos[0],t.pos[1]+1.5,t.pos[2]],[e.pos[0],e.pos[1]+1.4,e.pos[2]])}chooseSpot(){const e=this.e,t=this.sim.killer,n=this.sim.phase==="hunt";let s=null,r=1/0;for(const o of this.sim.spots){if(o.occupant>=0||o.open||o.reserved>=0&&o.reserved!==e.id||o===this.lastSpot)continue;let a=Kn(e.pos,o.entry)+Math.abs(e.pos[1]-o.entry[1])*5+Li(0,3);if(n){const c=tt(o.entry,t.pos);c<10&&(a+=(10-c)*3)}o.entry[1]<.3&&o.entry[1]>-1&&(a+=6),a<r&&(r=a,s=o)}return s}goHide(){const e=this.chooseSpot();if(!e){this.flee();return}this.spot=e,e.reserved=this.e.id,this.state="goHide",this.e.state="hiding",this.walker.arriveDist=.7,this.walker.setGoal(e.entry,(this.sim.phase==="hunt"&&this.killerVisible()?dn.run:dn.walk)*this.variation,!0)}update(e){const t=this.sim,n=this.e;if(this.paused||n.dead){this.walker.clear();return}if(this.state==="escape"){this.walker.update(e),Kn(n.pos,t.plan.points.exit)<2.2&&(n.escaped=!0,n.state="escaped",this.walker.clear());return}if(t.phase==="briefing"){this.walker.clear();return}if(t.phase==="rescue"){this.walker.clear();return}const s=t.phase==="hunt"&&this.killerVisible();switch(s&&(this.lastSeenKiller=t.time),this.state){case"idle":t.time>=this.rethinkAt&&this.goHide();break;case"goHide":{if(!this.spot||this.spot.occupant>=0||this.spot.open){this.spot&&(this.spot.reserved=-1),this.spot=null,this.goHide();break}const r=t.killer;if(s&&tt(r.pos,n.pos)<dn.tooClose){this.spot.reserved=-1,this.spot=null,this.flee();break}s&&(this.walker.speed=dn.run*this.variation),this.walker.update(e),this.walker.arrived||tt(n.pos,this.spot.entry)<1?(t.enterSpot(n,this.spot),this.state="hidden",n.state="hidden",this.restlessAt=t.time+Li(60,150),this.walker.clear()):this.walker.stuckTimer>6&&(this.spot.reserved=-1,this.lastSpot=this.spot,this.spot=null,this.goHide());break}case"hidden":{if(n.hidden<0){this.state="idle",this.rethinkAt=t.time+.5;break}const r=t.killer;t.phase==="hunt"&&t.time>this.restlessAt&&tt(r.pos,n.pos)>22&&(t.leaveSpot(n,!1),this.lastSpot=this.spot,this.spot=null,this.goHide());break}case"flee":{this.walker.update(e);const r=t.killer,o=tt(r.pos,n.pos);(this.walker.arrived||this.walker.stuckTimer>3)&&this.pickFleePoint(),t.time>this.fleeUntil&&(o>dn.gone||t.time-this.lastSeenKiller>dn.safeSeconds)?this.goHide():t.time>this.fleeUntil+6&&this.goHide();break}}}}class Fl{constructor(e,t){this.sim=e,this.e=t,this.walker=new Fh(e,t),this.armed=!1,this.mode="patrol",this.target=null,this.lastSeen=null,this.searchTimer=0,this.scanTimer=0,this.step="pickRoom",this.room=null,this.priorityRoom=null,this.thorough=!1,this.plan=[],this.spot=null,this.waitUntil=0,this.emptyRooms=0,this.spotQueue=[],this.loseTimer=0,this.checkingSpot=null,this.checkedAt=0}onSpotChecked(e,t){t&&(this.emptyRooms=0,this.thorough=!1)}onKilled(e){this.target===e&&(this.target=null,this.mode="patrol",this.step="pickRoom")}onNoise(e,t,n){const s=this.e;if(tt(e,s.pos)>ct.hearingRadius*t)return;const r=this.sim.roomAt(e);r&&(this.priorityRoom=r,this.thorough=!0);const o=this.sim.spots.filter(a=>tt(a.hidden,e)<ct.noiseSpotRadius&&!a.open).sort((a,c)=>tt(a.hidden,e)-tt(c.hidden,e)).slice(0,3);this.spotQueue=o,this.mode!=="chase"&&(this.mode="search",this.lastSeen=[...e],this.searchTimer=ct.searchSeconds,this.walker.setGoal(e,ct.moveSpeed,!0),this.e.state="heard "+n),this.sim.event({t:"killerHeard",label:n,room:r?r.name:""})}canSee(e){const t=this.e;return tt(t.pos,e.pos)>ct.senseRadius?!1:!this.sim.world.blocked([t.pos[0],t.pos[1]+ct.eyeHeight,t.pos[2]],[e.pos[0],e.pos[1]+1.2,e.pos[2]])}perceive(){const e=this.sim;let t=null,n=1/0;for(const s of e.survivors()){if(!e.inPlay(s)||s.hidden>=0||!this.canSee(s))continue;const r=tt(s.pos,this.e.pos);r<n&&(n=r,t=s)}return t}update(e){const t=this.sim,n=this.e;if(!this.armed||n.frozen){this.walker.clear();return}if(this.perceiveTimer=(this.perceiveTimer||0)-e,this.perceiveTimer<=0){this.perceiveTimer=.3;const s=this.perceive();if(s)this.target!==s&&(this.target=s,this.mode="chase",n.state="chasing "+s.name),this.lastSeen=[...s.pos],this.loseTimer=0;else if(this.mode==="chase"&&this.target){if(this.target.hidden>=0){const r=t.spots[this.target.hidden];if(tt(r.entry,n.pos)<ct.hidingSpotCheckRadius){this.checkSpotNow(r),this.target=null;return}}this.loseTimer+=.3,(this.loseTimer>.6||!t.inPlay(this.target)||this.target.hidden>=0)&&(this.target=null,this.mode="search",this.searchTimer=ct.searchSeconds,this.lastSeen&&this.walker.setGoal(this.lastSeen,ct.moveSpeed,!0),n.state="searching")}}switch(this.mode){case"chase":{const s=this.target;if(!s||!t.inPlay(s)){this.mode="patrol",this.step="pickRoom",this.target=null;break}this.walker.arriveDist=.9,this.walker.setGoal(s.pos,ct.chaseSpeed),this.walker.update(e),Kn(n.pos,s.pos)<=ct.attackRange+.1&&(n.yaw=Kr(n.yaw,Ws(n.pos,s.pos),Math.min(1,e*12)),n.wishVel=[0,0,0],t.killerAttack(n));break}case"search":{if(this.walker.update(e),this.walker.arrived||!this.walker.goal||this.walker.stuckTimer>4){if(this.searchTimer-=e,n.yaw+=e*1.2,n.wishVel=[0,0,0],this.spotQueue.length){const s=this.spotQueue.shift();if(!s.open){this.checkSpotNow(s);break}}this.searchTimer<=0&&(this.mode="patrol",this.step="pickRoom",n.state="searching the house")}break}case"check":{const s=this.checkingSpot;if(!s){this.mode="patrol";break}if(this.walker.arriveDist=.8,this.walker.setGoal(s.entry,ct.moveSpeed),this.walker.update(e),this.walker.arrived||tt(n.pos,s.entry)<1.4)if(n.wishVel=[0,0,0],n.yaw=Kr(n.yaw,Math.atan2(-s.dir[0],s.dir[2]),Math.min(1,e*10)),this.checkedAt)t.time-this.checkedAt>ct.checkPause&&(this.checkingSpot=null,this.checkedAt=0,this.mode=this.afterCheck,this.afterCheck=null,this.mode==="director"&&(this.mode="patrol"));else{const r=t.checkSpot(n,s);if(this.checkedAt=t.time,r){this.target=r,this.mode="chase",this.checkingSpot=null,this.checkedAt=0,n.state="chasing "+r.name;break}}else this.walker.stuckTimer>ct.stuckSeconds&&(this.checkingSpot=null,this.mode="patrol",this.step="nextSpot");break}case"patrol":this.director(e);break}}checkSpotNow(e){this.afterCheck=this.mode==="check"||this.mode==="chase"?"patrol":this.mode,this.mode="check",this.checkingSpot=e,this.checkedAt=0,this.walker.setGoal(e.entry,ct.moveSpeed,!0),this.e.state="checking "+e.room}pickRoom(){const e=this.sim,t=this.e;if(this.priorityRoom){const r=this.priorityRoom;return this.priorityRoom=null,r}let n=null,s=1/0;for(const r of e.rooms){if(r===this.room)continue;const o=e.time-r.lastVisited<ct.revisitAfter;let a=Kn(t.pos,r.scan)+Math.abs(t.pos[1]-r.scan[1])*ct.floorPenalty+Li(0,6)+(o?60:0);r.spots.length===0&&(a+=25),a<s&&(s=a,n=r)}return n}director(e){const t=this.sim,n=this.e;switch(this.step){case"pickRoom":{if(this.room=this.pickRoom(),!this.room)break;this.step="travel",this.walker.arriveDist=1.2,this.walker.setGoal(this.room.scan,ct.moveSpeed,!0),n.state="heading to the "+this.room.name.toLowerCase();break}case"travel":if(this.walker.update(e),this.walker.arrived||this.walker.stuckTimer>ct.stuckSeconds){this.room.lastVisited=t.time,this.scanTimer=Li(ct.scanSeconds[0],ct.scanSeconds[1]),this.step="scan",n.state="searching the "+this.room.name.toLowerCase();const s=this.thorough?1:Math.min(1,ct.checkChance+this.emptyRooms*.08);this.plan=b_(this.room.spots.filter(r=>Math.random()<s)),this.plan.sort((r,o)=>tt(r.entry,n.pos)-tt(o.entry,n.pos))}break;case"scan":n.wishVel=[0,0,0],n.yaw+=e*1,this.scanTimer-=e,this.scanTimer<=0&&(this.step="nextSpot");break;case"nextSpot":{const s=this.plan.shift();if(!s){this.emptyRooms++,this.thorough&&this.room&&this.room!==this.priorityRoom&&(this.thorough=!1),this.step="pickRoom";break}if(s.open)break;this.checkSpotNow(s),this.afterCheck="patrol",this.step="nextSpot";break}}}}class H_{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return G_(e).buffer}}function G_(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function Oh(i){return new V_(i).unpack()}function Bh(i){const e=new W_,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class V_{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class W_{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new H_,this._textEncoder=new TextEncoder}}let zh=!0,Hh=!0;function Xs(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Fi(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){hc("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const h=l=>{const u=t(l);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,h),r.apply(this,[a,h])};const o=s.removeEventListener;s.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const h=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,h])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function X_(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(zh=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function q_(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Hh=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function hc(){if(typeof window=="object"){if(zh)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function uc(i,e){Hh&&console.warn(i+" is deprecated, please use "+e+" instead.")}function $_(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Xs(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Xs(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Xs(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Xs(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Ol(i){return Object.prototype.toString.call(i)==="[object Object]"}function Gh(i){return Ol(i)?Object.keys(i).reduce(function(e,t){const n=Ol(i[t]),s=n?Gh(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Na(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Na(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Na(i,i.get(s),t)})}))}function Bl(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&Na(i,a,s)})}),s}const zl=hc;function Vh(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(h=>{if(h==="require"||h==="advanced"||h==="mediaSource")return;const l=typeof a[h]=="object"?a[h]:{ideal:a[h]};l.exact!==void 0&&typeof l.exact=="number"&&(l.min=l.max=l.exact);const u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(l.ideal!==void 0){c.optional=c.optional||[];let d={};typeof l.ideal=="number"?(d[u("min",h)]=l.ideal,c.optional.push(d),d={},d[u("max",h)]=l.ideal,c.optional.push(d)):(d[u("",h)]=l.ideal,c.optional.push(d))}l.exact!==void 0&&typeof l.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",h)]=l.exact):["min","max"].forEach(d=>{l[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,h)]=l[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},s=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const h=function(l,u,d){u in l&&!(d in l)&&(l[d]=l[u],delete l[u])};a=JSON.parse(JSON.stringify(a)),h(a.audio,"autoGainControl","googAutoGainControl"),h(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let h=a.video.facingMode;h=h&&(typeof h=="object"?h:{ideal:h});const l=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!l)){delete a.video.facingMode;let u;if(h.exact==="environment"||h.ideal==="environment"?u=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let f=d.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(a.video.deviceId=h.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),zl("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return zl("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,h){s(a,l=>{t.webkitGetUserMedia(l,c,u=>{h&&h(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,h=>a(h).then(l=>{if(h.audio&&!l.getAudioTracks().length||h.video&&!l.getVideoTracks().length)throw l.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return l},l=>Promise.reject(r(l))))}}}function Wh(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Xh(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Fi(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function qh(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,c){let h=s.apply(this,arguments);return h||(h=e(this,a),this._senders.push(h)),h};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function $h(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const o=s.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>Bl(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),Fi(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>Bl(o,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===s&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(o?a=!0:o=c),c.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Yh(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(h=>{if(this.getSenders().find(u=>u.track===h))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(h=>a.indexOf(h)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function jh(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Yh(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const l=t.apply(this);return this._reverseStreams=this._reverseStreams||{},l.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(l){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},l.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[l.id]){const u=new i.MediaStream(l.getTracks());this._streams[l.id]=u,this._reverseStreams[u.id]=l,l=u}n.apply(this,[l])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(l){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[l.id]||l]),delete this._reverseStreams[this._streams[l.id]?this._streams[l.id].id:l.id],delete this._streams[l.id]},i.RTCPeerConnection.prototype.addTrack=function(l,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(_=>_===l))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===l))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(l),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([l]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===l)};function r(h,l){let u=l.sdp;return Object.keys(h._reverseStreams||[]).forEach(d=>{const f=h._reverseStreams[d],g=h._streams[f.id];u=u.replace(new RegExp(g.id,"g"),f.id)}),new RTCSessionDescription({type:l.type,sdp:u})}function o(h,l){let u=l.sdp;return Object.keys(h._reverseStreams||[]).forEach(d=>{const f=h._reverseStreams[d],g=h._streams[f.id];u=u.replace(new RegExp(f.id,"g"),g.id)}),new RTCSessionDescription({type:l.type,sdp:u})}["createOffer","createAnswer"].forEach(function(h){const l=i.RTCPeerConnection.prototype[h],u={[h](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?l.apply(this,[g=>{const _=r(this,g);d[0].apply(null,[_])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):l.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[h]=u[h]});const a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const h=c.get.apply(this);return h.type===""?h:r(this,h)}}),i.RTCPeerConnection.prototype.removeTrack=function(l){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!l._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(l._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(_=>l.track===_)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(l.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Fa(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Kh(i,e){e.version>102||Fi(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Hl=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Kh,shimAddTrackRemoveTrack:jh,shimAddTrackRemoveTrackWithNative:Yh,shimGetSendersWithDtmf:qh,shimGetUserMedia:Vh,shimMediaStream:Wh,shimOnTrack:Xh,shimPeerConnection:Fa,shimSenderReceiverGetStats:$h},Symbol.toStringTag,{value:"Module"}));function Zh(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){uc("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function Y_(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Jh(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Oa(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function Qh(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(h=>{h.type=t[h.type]||h.type})}catch(h){if(h.name!=="TypeError")throw h;c.forEach((l,u)=>{c.set(u,Object.assign({},l,{type:t[l.type]||l.type}))})}return c}).then(o,a)}}function eu(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function tu(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),Fi(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function nu(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){uc("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function iu(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function su(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function ru(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function ou(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function au(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Gl=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:su,shimCreateAnswer:au,shimCreateOffer:ou,shimGetDisplayMedia:Y_,shimGetParameters:ru,shimGetStats:Qh,shimGetUserMedia:Zh,shimOnTrack:Jh,shimPeerConnection:Oa,shimRTCDataChannel:iu,shimReceiverGetStats:tu,shimRemoveStream:nu,shimSenderGetStats:eu},Symbol.toStringTag,{value:"Module"}));function cu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function lu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function hu(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(h,l){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return l?(d.then(h,l),Promise.resolve()):d},e.createAnswer=function(h,l){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return l?(d.then(h,l),Promise.resolve()):d};let a=function(c,h,l){const u=s.apply(this,[c]);return l?(u.then(h,l),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,h,l){const u=r.apply(this,[c]);return l?(u.then(h,l),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,h,l){const u=o.apply(this,[c]);return l?(u.then(h,l),Promise.resolve()):u},e.addIceCandidate=a}function uu(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(du(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}.bind(e))}function du(i){return i&&i.video!==void 0?Object.assign({},i,{video:Gh(i.video)}):i}function fu(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(uc("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function pu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function mu(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function gu(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Vl=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:gu,shimCallbacksAPI:hu,shimConstraints:du,shimCreateOfferLegacy:mu,shimGetUserMedia:uu,shimLocalStreamsAPI:cu,shimRTCIceServerUrls:fu,shimRemoteStreamsAPI:lu,shimTrackEventTransceiver:pu},Symbol.toStringTag,{value:"Module"}));function j_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Xo={exports:{}},Wl;function K_(){return Wl||(Wl=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let s;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)s=r[o].trim().split("="),n[s[0].trim()]=s[1];return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],h=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(h){const l=e.parseRtpMap(h),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(l.parameters=u.length?e.parseFmtp(u[0]):{},l.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(l),l.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(l.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(l=>l.type===c.type&&l.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{s+=e.writeRtpMap(o),s+=e.writeFmtp(o),s+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{s+=e.writeExtmap(o)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,o=s.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let h;const l=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(g=>parseInt(g,10)));l.length>0&&l[0].length>1&&l[0][0]===c&&(h=l[0][1]),s.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&h&&(f.rtx={ssrc:h}),n.push(f),r&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(d=>{d.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(Xo)),Xo.exports}var _u=K_();const ps=j_(_u),Z_=Ou({__proto__:null,default:ps},[_u]);function zr(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=ps.parseCandidate(n.candidate);for(const o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,Fi(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Ba(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||Fi(i,"icecandidate",e=>{if(e.candidate){const t=ps.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Hr(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=ps.splitSections(a.sdp);return c.shift(),c.some(h=>{const l=ps.parseMLine(h);return l&&l.kind==="application"&&l.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const h=parseInt(c[1],10);return h!==h?-1:h},s=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let h=65536;e.browser==="firefox"&&e.version===57&&(h=65535);const l=ps.matchPrefix(a.sdp,"a=max-message-size:");return l.length>0?h=parseInt(l[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(h=2147483637),h},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),h=s(c),l=r(arguments[0],c);let u;h===0&&l===0?u=Number.POSITIVE_INFINITY:h===0||l===0?u=Math.max(h,l):u=Math.min(h,l);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return o.apply(this,arguments)}}function Gr(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const o=s.send;s.send=function(){const c=arguments[0],h=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&h>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Fi(i,"datachannel",s=>(t(s.channel,s.target),s))}function za(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Ha(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Vr(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Wr(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const J_=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Ha,shimAddIceCandidateNullOrEmpty:Vr,shimConnectionState:za,shimMaxMessageSize:Hr,shimParameterlessSetLocalDescription:Wr,shimRTCIceCandidate:zr,shimRTCIceCandidateRelayProtocol:Ba,shimSendThrowTypeError:Gr},Symbol.toStringTag,{value:"Module"}));function Q_({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=hc,n=$_(i),s={browserDetails:n,commonShim:J_,extractVersion:Xs,disableLog:X_,disableWarnings:q_,sdp:Z_};switch(n.browser){case"chrome":if(!Hl||!Fa||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=Hl,Vr(i,n),Wr(i),Vh(i,n),Wh(i),Fa(i,n),Xh(i,n),jh(i,n),qh(i),$h(i,n),Kh(i,n),zr(i),Ba(i),za(i),Hr(i,n),Gr(i,n),Ha(i,n);break;case"firefox":if(!Gl||!Oa||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=Gl,Vr(i,n),Wr(i),Zh(i,n),Oa(i,n),Qh(i,n),Jh(i),nu(i),eu(i),tu(i),iu(i),su(i,n),ru(i,n),ou(i,n),au(i,n),zr(i),za(i),Hr(i,n),Gr(i,n);break;case"safari":if(!Vl||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Vl,Vr(i,n),Wr(i),fu(i),mu(i),hu(i),cu(i),lu(i),pu(i),uu(i),gu(i),zr(i),Ba(i),Hr(i,n),Gr(i,n),Ha(i,n);break;default:t("Unsupported browser!");break}return s}const Xl=Q_({window:typeof window>"u"?void 0:window});function Oi(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class vu{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),h={__peerData:this._dataCount,n:r,data:c,total:s};t.push(h),o=a,r++}return this._dataCount++,t}}}function ev(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const qo=Xl.default||Xl,Os=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return qo.browserDetails.browser}getVersion(){return qo.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=qo.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},tv=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),xu=()=>Math.random().toString(36).slice(2),ql={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class nv extends vu{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=ql,this.browser=Os.getBrowser(),this.browserVersion=Os.getVersion(),this.pack=Bh,this.unpack=Oh,this.supports=(function(){const t={browser:Os.isBrowserSupported(),webRTC:Os.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(ql),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!Os.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=tv,this.randomToken=xu}}const Jt=new nv,iv="PeerJS: ";class sv{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[iv,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var ye=new sv,dc={},rv=Object.prototype.hasOwnProperty,jt="~";function er(){}Object.create&&(er.prototype=Object.create(null),new er().__proto__||(jt=!1));function ov(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function yu(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new ov(t,n||i,s),o=jt?jt+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function Xr(i,e){--i._eventsCount===0?i._events=new er:delete i._events[e]}function qt(){this._events=new er,this._eventsCount=0}qt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)rv.call(t,n)&&e.push(jt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};qt.prototype.listeners=function(e){var t=jt?jt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};qt.prototype.listenerCount=function(e){var t=jt?jt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};qt.prototype.emit=function(e,t,n,s,r,o){var a=jt?jt+e:e;if(!this._events[a])return!1;var c=this._events[a],h=arguments.length,l,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),h){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,o),!0}for(u=1,l=new Array(h-1);u<h;u++)l[u-1]=arguments[u];c.fn.apply(c.context,l)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),h){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!l)for(f=1,l=new Array(h-1);f<h;f++)l[f-1]=arguments[f];c[u].fn.apply(c[u].context,l)}}return!0};qt.prototype.on=function(e,t,n){return yu(this,e,t,n,!1)};qt.prototype.once=function(e,t,n){return yu(this,e,t,n,!0)};qt.prototype.removeListener=function(e,t,n,s){var r=jt?jt+e:e;if(!this._events[r])return this;if(!t)return Xr(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&Xr(this,r);else{for(var a=0,c=[],h=o.length;a<h;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:Xr(this,r)}return this};qt.prototype.removeAllListeners=function(e){var t;return e?(t=jt?jt+e:e,this._events[t]&&Xr(this,t)):(this._events=new er,this._eventsCount=0),this};qt.prototype.off=qt.prototype.removeListener;qt.prototype.addListener=qt.prototype.on;qt.prefixed=jt;qt.EventEmitter=qt;dc=qt;var Bi={};Oi(Bi,"ConnectionType",()=>gi);Oi(Bi,"PeerErrorType",()=>Pt);Oi(Bi,"BaseConnectionErrorType",()=>Ga);Oi(Bi,"DataConnectionErrorType",()=>fc);Oi(Bi,"SerializationType",()=>ro);Oi(Bi,"SocketEventType",()=>di);Oi(Bi,"ServerMessageType",()=>Vt);var gi=(function(i){return i.Data="data",i.Media="media",i})({}),Pt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Ga=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),fc=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),ro=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),di=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),Vt=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const Su="1.5.5";class av extends dc.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Su),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),ye.log("Server message received:",r)}catch{ye.log("Invalid server message",s.data);return}this.emit(di.Message,r)},this._socket.onclose=s=>{this._disconnected||(ye.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(di.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ye.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ye.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Vt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(di.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Mu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===gi.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ye.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;ye.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(ye.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:Vt.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ye.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Ga.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ye.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Ga.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ye.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ye.log("Listening for data channel"),e.ondatachannel=o=>{ye.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},ye.log("Listening for remote stream"),e.ontrack=o=>{ye.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===gi.Media){const h=c;this._addStreamToMediaConnection(a,h)}}}cleanup(){ye.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);ye.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ye.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===gi.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Vt.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Pt.WebRTC,s),ye.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Pt.WebRTC,n),ye.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();ye.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ye.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Vt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Pt.WebRTC,s),ye.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Pt.WebRTC,n),ye.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;ye.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),ye.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(Pt.WebRTC,o),ye.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){ye.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ye.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Pt.WebRTC,t),ye.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ye.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ye.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){ye.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class bu extends dc.EventEmitter{emitError(e,t){ye.error("Error:",t),this.emit("error",new cv(`${e}`,t))}}class cv extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Eu extends bu{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Xa;const js=class js extends Eu{get type(){return gi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||js.ID_PREFIX+Jt.randomToken(),this._negotiator=new Mu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ye.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ye.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ye.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Vt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Vt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:ye.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ye.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Xa=new WeakMap,ws(js,Xa,js.ID_PREFIX="mc_");let Zr=js;class lv{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Su),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ye.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Jt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Jt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ye.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var qa,$a;const Ii=class Ii extends Eu{get type(){return gi.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Ii.ID_PREFIX+xu(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Mu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ye.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ye.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ye.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(fc.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Vt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Vt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ye.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};qa=new WeakMap,$a=new WeakMap,ws(Ii,qa,Ii.ID_PREFIX="dc_"),ws(Ii,$a,Ii.MAX_BUFFERED_AMOUNT=8388608);let Jr=Ii;class pc extends Jr{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Jr.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ye.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class $o extends pc{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new vu,this.serialization=ro.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Oh(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=ev(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=Bh(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);ye.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class hv extends pc{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=ro.None}}class uv extends pc{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Jt.chunkedMTU){this.emitError(fc.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=ro.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Ya;const Ks=class Ks extends bu{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:hv,json:uv,binary:$o,"binary-utf8":$o,default:$o},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Jt.CLOUD_HOST,port:Jt.CLOUD_PORT,path:"/",key:Ks.DEFAULT_KEY,token:Jt.randomToken(),config:Jt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Jt.CLOUD_HOST?this._options.secure=Jt.isSecure():this._options.host==Jt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ye.setLogFunction(this._options.logFunction),ye.logLevel=this._options.debug||0,this._api=new lv(t),this._socket=this._createServerConnection(),!Jt.supports.audioVideo&&!Jt.supports.data){this._delayedAbort(Pt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Jt.validateId(n)){this._delayedAbort(Pt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Pt.ServerError,s))}_createServerConnection(){const e=new av(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(di.Message,t=>{this._handleMessage(t)}),e.on(di.Error,t=>{this._abort(Pt.SocketError,t)}),e.on(di.Disconnected,()=>{this.disconnected||(this.emitError(Pt.Network,"Lost connection to server."),this.disconnect())}),e.on(di.Close,()=>{this.disconnected||this._abort(Pt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Vt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Vt.Error:this._abort(Pt.ServerError,n.msg);break;case Vt.IdTaken:this._abort(Pt.UnavailableID,`ID "${this.id}" is taken`);break;case Vt.InvalidKey:this._abort(Pt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Vt.Leave:ye.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Vt.Expire:this.emitError(Pt.PeerUnavailable,`Could not connect to peer ${s}`);break;case Vt.Offer:{const r=n.connectionId;let o=this.getConnection(s,r);if(o&&(o.close(),ye.warn(`Offer received for existing Connection ID:${r}`)),n.type===gi.Media){const c=new Zr(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(s,o),this.emit("call",c)}else if(n.type===gi.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(s,o),this.emit("connection",c)}else{ye.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){ye.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):ye.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ye.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Pt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){ye.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Pt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ye.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Zr(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){ye.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ye.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ye.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;ye.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ye.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ye.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Pt.ServerError,t))}};Ya=new WeakMap,ws(Ks,Ya,Ks.DEFAULT_KEY="peerjs");let Va=Ks;var Tu=Va;const Cu="hs-house-",$l="ABCDEFGHJKLMNPQRSTUVWXYZ",dv=()=>Array.from({length:4},()=>$l[Math.floor(Math.random()*$l.length)]).join(""),Au={debug:1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]}};class fv{constructor(e){this.code=e,this.conns=new Map,this.onMessage=null,this.onLeave=null,this.localHandler=null,this.peer=null}open(){return new Promise((e,t)=>{const n=new Tu(Cu+this.code,Au);this.peer=n;let s=!1;n.on("open",()=>{s=!0,e(this.code)}),n.on("error",r=>{s?console.warn("peer error",r):(s=!0,t(r))}),n.on("connection",r=>{r.on("open",()=>{this.conns.set(r.peer,r),r.on("data",o=>{this.onMessage&&this.onMessage(r.peer,o)}),r.on("close",()=>{this.conns.delete(r.peer),this.onLeave&&this.onLeave(r.peer)}),r.on("error",()=>{this.conns.delete(r.peer),this.onLeave&&this.onLeave(r.peer)})})})})}send(e,t){if(e==="all"){this.localHandler&&this.localHandler(t);for(const n of this.conns.values())Wa(n,t)}else if(e==="host")this.localHandler&&this.localHandler(t);else{const n=this.conns.get(e);n&&Wa(n,t)}}localSend(e){this.onMessage&&this.onMessage("host",e)}close(){try{this.peer&&this.peer.destroy()}catch{}}}class pv{constructor(e){this.code=e,this.onMessage=null,this.onClose=null,this.conn=null,this.peer=null}open(){return new Promise((e,t)=>{const n=new Tu(void 0,Au);this.peer=n;let s=!1;const r=o=>{s||(s=!0,t(o))};n.on("error",o=>{r(o),s&&this.onClose&&this.onClose(o)}),n.on("open",()=>{const o=n.connect(Cu+this.code,{reliable:!0,serialization:"json"});this.conn=o;const a=setTimeout(()=>r(new Error("No lobby with that code (timed out).")),12e3);o.on("open",()=>{clearTimeout(a),s=!0,e()}),o.on("data",c=>{this.onMessage&&this.onMessage(c)}),o.on("close",()=>{this.onClose&&this.onClose()}),o.on("error",c=>{clearTimeout(a),r(c)})})})}send(e){this.conn&&this.conn.open&&Wa(this.conn,e)}close(){try{this.peer&&this.peer.destroy()}catch{}}}function Wa(i,e){try{i.send(e)}catch{}}class mv{constructor(e,t){this.input=e,this.onResult=t,this.el=document.getElementById("breath"),this.canvas=this.el.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.active=!1,this.nextAt=0}start(){this.active=!0,this.el.hidden=!1,this.t=0,this.duration=4.5,this.blocks=[],this.spawnAt=.3,this.failed=!1,this.barX=.5,this.barW=.16}finish(e){this.active=!1,this.el.hidden=!0,this.onResult(e)}update(e,t=0){if(!this.active)return;this.t+=e;const n=this.canvas.width,s=this.canvas.height;let r=this.input.pointerX;this.input.touch?this.barX+=(r-this.barX)*Math.min(1,e*14):((this.input.keys.has("KeyA")||this.input.keys.has("ArrowLeft"))&&(this.barX-=e*1.4),(this.input.keys.has("KeyD")||this.input.keys.has("ArrowRight"))&&(this.barX+=e*1.4),this.input.locked?this.barX+=t*.7:this.barX+=(r-this.barX)*Math.min(1,e*14)),this.barX=Math.max(this.barW/2,Math.min(1-this.barW/2,this.barX)),this.t>=this.spawnAt&&this.t<this.duration-1.2&&(this.spawnAt=this.t+.45+Math.random()*.4,this.blocks.push({x:Math.random(),y:-.1,w:.1+Math.random()*.12,v:.55+Math.random()*.3}));for(const c of this.blocks)c.y+=c.v*e;const o=.84;for(const c of this.blocks)c.y>o-.1&&c.y<o+.1&&Math.abs(c.x-this.barX)<(c.w+this.barW)/2&&(this.failed=!0);this.blocks=this.blocks.filter(c=>c.y<1.2);const a=this.ctx;a.clearRect(0,0,n,s),a.fillStyle="rgba(255,255,255,0.06)",a.fillRect(0,0,n*(1-this.t/this.duration),4);for(const c of this.blocks)a.fillStyle="#c8352c",a.fillRect((c.x-c.w/2)*n,c.y*s-8,c.w*n,16);a.fillStyle=this.failed?"#ff6f66":"#efe6d8",a.fillRect((this.barX-this.barW/2)*n,o*s-6,this.barW*n,12),this.failed?this.finish(!0):this.t>=this.duration&&this.finish(!1)}}class gv{constructor(e){this.audio=e,this.stream=null,this.analyser=null,this.buf=null,this.gain=6,this.threshold=.4,this.cooldown=2.5,this.decay=2.5,this.raw=0,this.level=0,this.nextClue=0,this.armed=!1,this.error=null,this.onClue=null}get enabled(){return!!this.stream}async enable(){if(this.stream)return!0;if(this.error=null,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return this.error="This browser cannot use the microphone (needs https).",!1;try{this.audio.unlock(),this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0},video:!1});const e=this.audio.ctx;e.state==="suspended"&&await e.resume();const t=e.createMediaStreamSource(this.stream);this.analyser=e.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=0,t.connect(this.analyser),this.buf=new Float32Array(this.analyser.fftSize);try{localStorage.setItem("hs-mic","1")}catch{}return!0}catch(e){return this.error=e&&e.name==="NotAllowedError"?"Microphone permission was refused.":"Microphone unavailable: "+(e&&e.message),this.stream=null,!1}}disable(){if(this.stream)for(const e of this.stream.getTracks())e.stop();this.stream=null,this.analyser=null,this.raw=0,this.level=0;try{localStorage.setItem("hs-mic","0")}catch{}}update(e,t){if(!this.analyser){this.raw=0,this.level=Math.max(0,this.level-this.decay*e);return}this.analyser.getFloatTimeDomainData(this.buf);let n=0;for(let r=0;r<this.buf.length;r++)n+=this.buf[r]*this.buf[r];const s=Math.sqrt(n/this.buf.length);if(this.raw=Math.min(1,s*this.gain),this.level=Math.max(this.raw,this.level-this.decay*e),this.armed&&this.raw>=this.threshold&&t>=this.nextClue){this.nextClue=t+this.cooldown*1e3;const r=(this.raw-this.threshold)/(1-this.threshold),o=.7+.7*Math.max(0,Math.min(1,r));this.onClue&&this.onClue(o)}}get isLoud(){return this.raw>=this.threshold}}const re=i=>document.getElementById(i),mc=re("view"),Ft=s_(),ut=new w_(mc,Ft),It=new R_(mc);It.touch&&document.body.classList.add("touch");const ot=new L_,_v=.35,vv=1.7,xv=4,yv=3.7,O={mode:"menu",isHost:!1,net:null,sim:null,nav:null,myId:null,myName:"Kevin",players:[],entities:new Map,phase:"lobby",timeLeft:0,spots:Ft.spots.map(i=>({open:0,occ:-1})),cruiser:[...Ft.points.cruiserStart,0,0],gate:0,match:0,poseTimer:0,banner:{until:0},spectate:{active:!1,index:0,angle:0,since:0},result:null,minigame:null,breathTimer:0,lastPhase:"lobby",flash:0,clue:"",clueUntil:0,killerStatus:"",spectateOnly:!1,dialogUntil:0};window.app=O;window.plan=Ft;window.view=ut;window.input=It;const Wt=new gv(ot);Wt.onClue=i=>{en({t:"act",a:"noise",loudness:i}),Di("Shh! He can hear you.",2)};function Sv(){const i=re("mic"),e=Wt.enabled&&O.mode==="game"&&!O.spectate.active&&Fn()&&Fn().kind==="survivor"&&!Fn().dead;i.hidden=!e,e&&(i.querySelector("i").style.width=(Wt.level*100).toFixed(0)+"%",i.classList.toggle("loud",Wt.isLoud&&Wt.armed),i.classList.toggle("armed",Wt.armed))}async function wu(){Wt.enabled?Wt.disable():await Wt.enable()||(re("lobbyErr").textContent=Wt.error||"",re("menuErr").textContent=Wt.error||""),gc()}function gc(){for(const i of["btnMicMenu","btnMicLobby"]){const e=re(i);e&&(e.textContent=Wt.enabled?"🎤 Microphone on":"🎤 Enable microphone")}}O.minigame=new mv(It,i=>{i&&(en({t:"act",a:"gasp"}),ot.gasp(),Di("You gasped!"))});function Ts(i){for(const e of["menu","lobby","result"])re(e).hidden=e!==i;re("hud").hidden=i!==null||O.mode!=="game",re("touch").hidden=!(It.touch&&i===null&&O.mode==="game")}function Di(i,e=4){re("banner").textContent=i,re("banner").classList.add("show"),O.banner.until=performance.now()+e*1e3}function li(i){re("prompt").textContent=i||""}function Mv(i){return i=Math.max(0,Math.ceil(i)),Math.floor(i/60)+":"+String(i%60).padStart(2,"0")}function Fn(){for(const i of O.entities.values())if(i.owner===O.myId)return i;return null}function Ru(){for(const i of O.entities.values())if(i.kind==="killer")return i;return null}function Rn(){const i=Fn();return i&&i.kind==="killer"}function qs(i){return i&&i.hidden>=0?Ft.spots[i.hidden]:null}function en(i){O.net&&(O.isHost?O.net.localSend(i):O.net.send(i))}function Pu(i){switch(i.t){case"lobby":O.players=i.players,i.spectateOnly&&(O.spectateOnly=!0),Av();break;case"start":bv(i);break;case"snap":Ev(i);break;case"reset":O.mode="lobby",O.entities.clear(),O.result=null,O.spectate.active=!1;for(const e of[...ut.chars.keys()])ut.removeChar(e);It.enabled=!1,It.releaseLock(),Ts("lobby");break}}function bv(i){O.mode="game",O.match=i.match,O.phase=i.phase,O.timeLeft=i.timeLeft,O.players=i.players,O.entities.clear();for(const t of[...ut.chars.keys()])ut.removeChar(t);for(const t of i.entities){const n={...t,pos:[...t.pos],rpos:[...t.pos],ryaw:t.yaw,pitch:0,vel:[0,0,0],spd:0,lastTp:0,state:""};O.entities.set(t.id,n),ut.addChar(n)}if(i.spots)for(const[t,n,s]of i.spots)O.spots[t]={open:n,occ:s};else O.spots=Ft.spots.map(()=>({open:0,occ:-1}));O.result=null,O.spectate.active=!1,O.spectateOnly=!Fn(),O.lastPhase="",Ts(null),It.enabled=!0,It.touch||It.requestLock(),ot.unlock(),ot.ambience(!0);const e=Fn();e&&ut.thirdPerson(e.pos,e.yaw,0,0,!0),re("btnAttack").hidden=!Rn(),re("btnUse").textContent=Rn()?"Open":"Hide",re("crosshair").hidden=!Rn()}function Ev(i){O.phase,O.phase=i.ph,O.timeLeft=i.tl,O.cruiser=i.car,O.gate=i.gate;for(const e of i.e){const[t,n,s,r,o,a,c,h,l,u,d,f,g,_]=e,m=O.entities.get(t);if(!m)continue;const p=m.owner===O.myId,T=m.hidden;m.hp=c,m.hidden=h,m.dead=!!l,m.escaped=!!u,m.hostDriven=!!d,m.frozen=!!f,m.state=_;const E=g!==m.lastTp;if(m.lastTp=g,p&&!m.hostDriven&&!m.dead&&m.hidden<0&&!m.frozen&&!E){m.spd=m.spd;continue}m.pos=[n,s,r],m.yaw=o,m.spd=a,(E||tt(m.rpos,m.pos)>3)&&(m.rpos=[n,s,r],m.ryaw=o,m.vel=[0,0,0],p&&(m.pitch=0)),p&&E&&m.hidden>=0&&T<0}for(const[e,t,n]of i.sp)O.spots[e]={open:t,occ:n};for(const e of i.ev)Tv(e)}function Tv(i){const e=Fn();switch(i.t){case"phase":i.phase==="briefing"&&(O.dialogUntil=performance.now()+5e3),i.phase==="hiding"&&ot.tick(),i.phase==="hunt"&&ot.sting();break;case"banner":(!i.who||i.who==="killer"===Rn())&&Di(i.text,4);break;case"sting":ot.sting();break;case"siren":ot.siren(i.on);break;case"hit":e&&i.id===e.id?(O.flash=.6,ot.hit()):e&&tt(i.at,e.pos)<25&&ot.hit();break;case"encounter":ot.encounter(i.at);break;case"died":{ot.screamAt(i.at),e&&i.id===e.id?(O.spectate.since=performance.now(),Di("YOU DIED",3)):Di(i.name+" was found",3);break}case"check":{const t=Ft.spots[i.spot];e&&tt(t.entry,e.pos)<30&&ot.creak();break}case"found":e&&i.id===e.id&&(Di("He found you! RUN!",3),O.flash=.8);break;case"swing":e&&(i.id,e.id),ot.whoosh();break;case"noise":{e&&e.kind==="survivor"&&tt(i.at,e.pos)<14&&(i.loudness>.8?ot.gasp(.4):ot.breath(.3));break}case"killerHeard":Rn()&&(O.clue="You heard "+i.label+(i.room?" from the "+i.room.toLowerCase():""),O.clueUntil=performance.now()+6e3,ot.breath(.5));break;case"hide":e&&i.id===e.id&&(ot.door(),O.breathTimer=0);break;case"unhide":e&&i.id===e.id&&ot.door();break;case"rescueArrived":Di("Run for the car!",4);break;case"result":Cv(i);break}}function Cv(i){O.result=i;const e=Rn(),t=Fn();let n,s;i.survivorsWon?(n=e?"THEY GOT AWAY":t&&!t.dead?"RESCUED":"THE OTHERS MADE IT",s=e?"lose":"win"):(n=e?"YOU GOT THEM ALL":"NOBODY SURVIVED",s=e?"win":"lose"),re("resultTitle").textContent=n,re("resultTitle").className=s,re("resultTally").textContent=i.alive+" rescued, "+i.dead+" found.",re("btnAgain").hidden=!O.isHost,re("resultWait").textContent=O.isHost?"":"Waiting for the host to start another round…",It.releaseLock(),It.enabled=!1,setTimeout(()=>{Ts("result"),re("hud").hidden=!1},1800)}function Av(){const i=re("players");i.innerHTML="";for(const o of O.players){const a=document.createElement("li"),c=document.createElement("span");c.textContent=o.name+(o.id==="host"?" (host)":"")+(o.id===O.myId?" – you":"");const h=document.createElement("span");h.className="role "+o.role,h.textContent=o.role,a.append(c,h),i.append(a)}const e=O.players.filter(o=>o.role!=="killer").length,t=Math.max(0,4-e),n=!O.players.some(o=>o.role==="killer"),s=document.createElement("li");s.className="muted",s.textContent=(t>0?t+" survivor bot"+(t>1?"s":""):"no survivor bots")+(n?" · the killer will be a bot":""),i.append(s);const r=O.players.find(o=>o.id===O.myId);re("roleSurvivor").classList.toggle("active",!!r&&r.role==="survivor"),re("roleKiller").classList.toggle("active",!!r&&r.role==="killer"),re("btnStart").hidden=!O.isHost,O.spectateOnly&&(re("lobbyErr").textContent="A match is running - you join when the host starts the next one.")}async function Lu(i){const e=re("name").value.trim()||"Kevin";O.myName=e,O.isHost=!0,O.myId="host";const t=dv(),n=new fv(t);O.net=n,re("connecting").hidden=!1;try{i||await n.open()}catch(r){re("connecting").hidden=!0,re("menuErr").textContent="Could not reach the PeerJS signalling server ("+(r.type||r.message)+"). Try again, or play solo.",O.net=null;return}re("connecting").hidden=!0,O.nav||(O.nav=new I_(ut.world,{minx:-6,minz:-46,maxx:90,maxz:54}));const s=new z_(Ft,ut.world,O.nav,(r,o)=>n.send(r,o));O.sim=s,n.onMessage=(r,o)=>s.onClient(r,o),n.onLeave=r=>s.removePlayer(r),n.localHandler=r=>Pu(r),s.addPlayer("host",e),re("lobbyCodeWrap").hidden=i,re("lobbyCode").textContent=t,re("lobbyUrl").textContent=i?"":"Same page, code "+t+" · "+location.origin+location.pathname+"?code="+t,O.mode="lobby",Ts("lobby")}async function Du(){const i=re("name").value.trim()||"Player",e=re("code").value.trim().toUpperCase();if(e.length!==4){re("menuErr").textContent="Enter the 4-letter code from the host.";return}O.myName=i,O.isHost=!1;const t=new pv(e);re("connecting").hidden=!1;try{await t.open()}catch(n){re("connecting").hidden=!0,re("menuErr").textContent="Could not join: "+(n.type||n.message||n);return}re("connecting").hidden=!0,O.net=t,O.myId=t.peer.id,t.onMessage=Pu,t.onClose=()=>{re("menuErr").textContent="Connection to the host was lost.",oo()},t.send({t:"join",name:i}),O.mode="lobby",re("lobbyCodeWrap").hidden=!0,Ts("lobby")}function oo(){O.net&&O.net.close(),O.net=null,O.sim=null,O.mode="menu",O.entities.clear(),O.players=[],O.result=null,O.spectateOnly=!1;for(const i of[...ut.chars.keys()])ut.removeChar(i);It.enabled=!1,It.releaseLock(),ot.siren(!1),ot.ambience(!1),Ts("menu")}for(const i of["touchstart","pointerdown","keydown"])document.addEventListener(i,()=>ot.unlock(),{passive:!0});re("btnMicMenu").onclick=wu;re("btnMicLobby").onclick=wu;gc();const _c=()=>{try{localStorage.getItem("hs-mic")==="1"&&!Wt.enabled&&Wt.enable().then(gc)}catch{}};re("btnHost").onclick=()=>{ot.unlock(),_c(),Lu(!1)};re("btnSolo").onclick=()=>{ot.unlock(),_c(),Lu(!0)};re("btnJoin").onclick=()=>{ot.unlock(),_c(),Du()};re("btnLeave").onclick=oo;re("btnQuit").onclick=oo;re("roleSurvivor").onclick=()=>en({t:"role",role:"survivor"});re("roleKiller").onclick=()=>en({t:"role",role:"killer"});re("btnStart").onclick=()=>en({t:"start"});re("btnAgain").onclick=()=>en({t:"again"});re("code").addEventListener("keydown",i=>{i.key==="Enter"&&Du()});const Yl=new URLSearchParams(location.search).get("code");Yl&&(re("code").value=Yl.toUpperCase());re("name").value=localStorage.getItem("hs-name")||"";re("name").addEventListener("change",()=>localStorage.setItem("hs-name",re("name").value));mc.addEventListener("click",()=>{O.mode==="game"&&O.phase==="briefing"&&O.isHost&&en({t:"skip"})});window.addEventListener("keydown",i=>{O.mode==="game"&&(i.code==="KeyR"&&O.result&&O.isHost&&en({t:"again"}),O.phase==="briefing"&&O.isHost&&(i.code==="Space"||i.code==="Enter")&&en({t:"skip"}))});let jl=performance.now();function Iu(i){requestAnimationFrame(Iu);const e=Math.min(.1,(i-jl)/1e3);if(jl=i,O.mode==="game")wv(e,i);else if(O.mode==="lobby"||O.mode==="menu"){const t=i*5e-5;ut.fixed([28+Math.sin(t)*6,6,44+Math.cos(t)*2],[29,3,8],55)}for(const t of Ft.spots){if(t.coverId<0)continue;const n=ut.covers[t.coverId],s=O.spots[t.id]&&O.spots[t.id].open?1:0;Math.abs(n.open-s)>.001&&n.set(Ys(n.open,s,Math.min(1,e*6)))}for(const t of Ft.points.gateLeaves){const n=ut.covers[t];Math.abs(n.open-O.gate)>.001&&n.set(Ys(n.open,O.gate,Math.min(1,e*3)))}ut.setCruiser(O.cruiser[0],O.cruiser[1],O.cruiser[2],O.cruiser[3],!!O.cruiser[4],e),O.banner.until&&i>O.banner.until&&(re("banner").classList.remove("show"),O.banner.until=0),ut.render()}requestAnimationFrame(Iu);let Kl=performance.now();setInterval(()=>{const i=performance.now(),e=(i-Kl)/1e3;Kl=i,O.sim&&O.sim.update(e)},33);function wv(i,e){const t=It.poll(),n=Fn(),s=Ru(),r=O.phase==="hunt";if(t.menu){oo();return}let o=t.look;if(O.minigame.active&&(O.minigame.update(i,o[0]),o=[0,0]),n&&!n.dead){n.yaw+=o[0],n.pitch=xt(n.pitch-o[1],-1.1,1.1);const l=!n.hostDriven&&!n.frozen&&!n.escaped&&O.phase!=="briefing"&&O.phase!=="over"&&!O.result,u=qs(n);if(u){const d=Math.atan2(u.dir[0],-u.dir[2]);n.yaw=d+xt(Uh(n.yaw-d),-1.22,1.22);const f=u.pose==="lie"?.45:0;n.pitch=xt(n.pitch,-.8-f,.35-f),n.rpos=[...n.pos],n.spd=0,li(""),t.use&&l&&en({t:"act",a:"unhide"})}else if(l){const d=kh(n.yaw),f=[Math.cos(n.yaw),0,Math.sin(n.yaw)],g=n.kind==="killer"?yv:xv,_=(d[0]*t.move[1]+f[0]*t.move[0])*g,m=(d[2]*t.move[1]+f[2]*t.move[0])*g,p=24;n.vel[0]+=xt(_-n.vel[0],-p*i,p*i),n.vel[2]+=xt(m-n.vel[2],-p*i,p*i),ut.world.moveCharacter(n.pos,n.vel,_v,vv,i,.45),n.pos[1]<-15&&(n.pos=[...Ft.points.huddle[0]],n.vel=[0,0,0]),n.rpos=[...n.pos],n.ryaw=n.yaw,n.spd=xt(Math.hypot(n.vel[0],n.vel[2])/g,0,1),O.poseTimer+=i,O.poseTimer>=.05&&(O.poseTimer=0,en({t:"pose",p:[+n.pos[0].toFixed(3),+n.pos[1].toFixed(3),+n.pos[2].toFixed(3)],yaw:+n.yaw.toFixed(3),pitch:+n.pitch.toFixed(2),spd:+n.spd.toFixed(2)}));const T=Rv(n);n.kind==="survivor"?T&&!O.spots[T.id].open&&O.spots[T.id].occ<0&&O.phase!=="rescue"?(li((It.touch?"HIDE":"E")+" - "+T.label),t.use&&en({t:"act",a:"hide",spot:T.id})):li(""):(T&&!O.spots[T.id].open?(li((It.touch?"OPEN":"E")+" - check the "+T.label.replace(/^hide (in|under|behind|between) the /,"")),t.use&&en({t:"act",a:"check",spot:T.id})):li(It.touch?"":"LMB - swing"),t.attack&&en({t:"act",a:"attack"}))}else n.spd=0,li(""),n.frozen&&n.kind==="killer"&&O.phase!=="briefing"&&li("Wait for them to hide…")}for(const l of O.entities.values()){const u=l===n;if(!(u&&!l.hostDriven&&!l.frozen&&l.hidden<0&&!l.dead)){const p=tt(l.rpos,l.pos)>2?30:12;l.rpos[0]=Ys(l.rpos[0],l.pos[0],Math.min(1,i*p)),l.rpos[1]=Ys(l.rpos[1],l.pos[1],Math.min(1,i*p)),l.rpos[2]=Ys(l.rpos[2],l.pos[2],Math.min(1,i*p)),l.ryaw=Kr(l.ryaw,l.yaw,Math.min(1,i*12)),u&&(l.ryaw=l.yaw)}const f=ut.chars.get(l.id),g=l.hidden<0||O.spots[l.hidden]&&O.spots[l.hidden].open,_=!(Rn()&&l.kind==="survivor");if(f&&ut.updateChar(f,l.rpos,l.ryaw,l.spd,l.dead,g,i,u&&!qs(l),_),!l.dead&&l.hidden<0){const m=l.kind==="killer"?1.65:1.45;l.stepDist=(l.stepDist||0)+Math.hypot(l.rpos[0]-(l.stepPrev?l.stepPrev[0]:l.rpos[0]),l.rpos[2]-(l.stepPrev?l.stepPrev[2]:l.rpos[2])),l.stepDist>=m&&(l.stepDist=0,ot.footstep([l.rpos[0],l.rpos[1]+.2,l.rpos[2]],l.spd>.75,l.kind==="killer"))}l.stepPrev=[...l.rpos]}const a=n&&n.dead;if(O.phase==="briefing"&&!O.spectateOnly)ut.fixed(Ft.points.meetingCam.pos,Ft.points.meetingCam.look,50);else if(O.phase==="rescue"||O.phase==="over"&&O.result&&O.result.survivorsWon)ut.fixed(Ft.points.rescueCam.pos,Ft.points.rescueCam.look,55);else if(n&&!a){const l=qs(n);l?ut.peek(n.pos,l.eye,n.yaw,n.pitch):ut.thirdPerson(n.rpos,n.yaw,n.pitch,i)}else Pv(i,t,e);if(n&&!a&&n.kind==="survivor"&&r&&qs(n)&&s){const l=tt(n.pos,s.pos);ot.heartbeat(i,xt(1-l/16,0,1)),O.minigame.active||(O.breathTimer+=i,O.breathTimer>=10&&(O.breathTimer=0,O.minigame.start()))}else O.breathTimer=4,O.minigame.active&&O.minigame.finish(!1),n&&s&&r&&!a&&n.kind==="survivor"&&ot.heartbeat(i,xt(1-tt(n.pos,s.pos)/10,0,1));Wt.armed=!!(n&&!a&&n.kind==="survivor"&&r&&!n.escaped),Wt.update(i,e),Sv();const c=ut.camera.position,h=ut.camera.getWorldDirection(new U);ot.setListener([c.x,c.y,c.z],[h.x,h.y,h.z]),Lv(e,n,s),O.flash>0?(O.flash-=i*2,re("flash").style.opacity=xt(O.flash,0,.6),re("flash").style.background="#8b0000"):re("flash").style.opacity=0}function Rv(i){let e=null,t=i.kind==="killer"?2.4:2;for(const n of Ft.spots){const s=tt(i.pos,n.entry);s<t&&(t=s,e=n)}return e}function Pv(i,e,t){const n=Fn();if(n&&n.dead&&t-O.spectate.since<2500&&O.spectate.since){ut.thirdPerson(n.rpos,n.yaw,n.pitch,i);return}const s=[...O.entities.values()].filter(a=>!a.dead&&a.hidden<0&&a!==n),r=Ru();if(r&&!s.includes(r)&&!r.dead&&s.unshift(r),O.spectate.active||(O.spectate.active=!0,O.spectate.index=0,re("btnCycle").hidden=!1,re("btnUse").hidden=!0,re("btnAttack").hidden=!0),(e.cycle||e.use||e.attack)&&O.spectate.index++,s.length===0){ut.fixed(Ft.points.rescueCam.pos,Ft.points.rescueCam.look,55);return}const o=s[O.spectate.index%s.length];O.spectate.angle+=i*.25,ut.orbit(o.rpos,O.spectate.angle,i),li(""),re("pocket").textContent=(n&&n.dead?"YOU ARE DEAD - ":"")+"spectating "+o.name+(It.touch?`
NEXT - next camera`:`
Tab - next camera`)}function Lv(i,e,t){const n=re("timer"),s={briefing:"get ready",hiding:"hide",hunt:"until the cops arrive",rescue:"rescue",over:"match over",lobby:""};n.querySelector(".t").textContent=O.phase==="rescue"||O.phase==="over"?"":Mv(O.timeLeft),n.querySelector(".l").textContent=s[O.phase]||"",n.classList.toggle("hunt",O.phase==="hunt"),re("dialog").hidden=!(O.phase==="briefing"&&!Rn()&&!O.spectateOnly),O.phase==="briefing"&&Rn()&&(re("pocket").textContent="They are huddled in the living room. Wait outside."),e&&e.kind==="survivor"?(re("health").hidden=!1,re("health").querySelector("i").style.width=xt(e.hp,0,100)+"%",re("health").classList.toggle("low",e.hp<=40)):re("health").hidden=!0;const r=[...O.entities.values()].filter(o=>o.kind==="survivor");if(re("status").innerHTML=r.map(o=>`<div>${o.name}: ${o.dead?'<span style="color:#ff8b80">found</span>':o.escaped?'<span style="color:#7fd68a">rescued</span>':o.hidden>=0&&!Rn()?"hidden":"alive"}</div>`).join(""),!O.spectate.active){if(Rn()){const o=[];i<O.clueUntil&&o.push(O.clue),O.phase==="hunt"&&t&&t.state&&o.push(t.state),re("pocket").textContent=o.join(`
`)}else if(e){const o=qs(e);re("pocket").textContent=o?"Hidden: "+o.label.replace(/^hide /,"")+(It.touch?`
HIDE - come out`:`
E - come out`):O.phase==="hiding"?"Find somewhere to hide!":""}}}
