(function(){"use strict";var n={7495:function(n,r,e){var t=e(9242),i=e(3396);function a(n,r){const e=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(e)}var o=e(89);const u={},c=(0,o.Z)(u,[["render",a]]);var l=c,s=e(2483),d=e(7139);const p=["src"];function f(n,r,e,t,a,o){const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[r[0]||(r[0]=(0,i._)("h1",null,"相机列表",-1)),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.cameras,(n=>((0,i.wg)(),(0,i.iD)("li",{key:n.id},[(0,i.Wm)(u,{to:"/camera/"+n.id},{default:(0,i.w5)((()=>[(0,i._)("img",{src:n.image,alt:"Camera Thumbnail"},null,8,p),(0,i._)("h2",null,(0,d.zw)(n.brand)+" "+(0,d.zw)(n.model),1),(0,i._)("p",null,"价格: "+(0,d.zw)(n.price),1)])),_:2},1032,["to"])])))),128))])])}var m={data(){return{cameras:[{id:1,brand:"Nikon",model:"D850",price:"$2500",image:"url_to_nikon_d850_thumbnail.jpg",description:"Nikon D850 is a high-end DSLR camera with excellent image quality."}]}}};const h=(0,o.Z)(m,[["render",f]]);var v=h;const g={key:0},w=["src"],_={key:1};function b(n,r,e,t,a,o){return a.camera?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("h1",null,(0,d.zw)(a.camera.brand)+" "+(0,d.zw)(a.camera.model),1),(0,i._)("img",{src:a.camera.image,alt:"Camera Image"},null,8,w),(0,i._)("p",null,"价格: "+(0,d.zw)(a.camera.price),1),(0,i._)("p",null,"描述: "+(0,d.zw)(a.camera.description),1)])):((0,i.wg)(),(0,i.iD)("div",_,r[0]||(r[0]=[(0,i._)("p",null,"Loading...",-1)])))}var k={data(){return{camera:null}},mounted(){const n=this.$route.params.id;this.camera={id:n,brand:"Nikon",model:"D850",price:"$2500",image:"url_to_nikon_d850_large.jpg",description:"Nikon D850 is a high-end DSLR camera with excellent image quality."}}};const y=(0,o.Z)(k,[["render",b]]);var O=y;const D=[{path:"/",component:v},{path:"/camera/:id",component:O,props:!0}],j=(0,s.p7)({mode:"history",history:(0,s.PO)("/"),routes:D});var x=j;(0,t.ri)(l).use(x).mount("#app")}},r={};function e(t){var i=r[t];if(void 0!==i)return i.exports;var a=r[t]={exports:{}};return n[t].call(a.exports,a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(r,t,i,a){if(!t){var o=1/0;for(s=0;s<n.length;s++){t=n[s][0],i=n[s][1],a=n[s][2];for(var u=!0,c=0;c<t.length;c++)(!1&a||o>=a)&&Object.keys(e.O).every((function(n){return e.O[n](t[c])}))?t.splice(c--,1):(u=!1,a<o&&(o=a));if(u){n.splice(s--,1);var l=i();void 0!==l&&(r=l)}}return r}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[t,i,a]}}(),function(){e.n=function(n){var r=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(r,{a:r}),r}}(),function(){e.d=function(n,r){for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){var n={143:0};e.O.j=function(r){return 0===n[r]};var r=function(r,t){var i,a,o=t[0],u=t[1],c=t[2],l=0;if(o.some((function(r){return 0!==n[r]}))){for(i in u)e.o(u,i)&&(e.m[i]=u[i]);if(c)var s=c(e)}for(r&&r(t);l<o.length;l++)a=o[l],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(s)},t=self["webpackChunkcamera_app"]=self["webpackChunkcamera_app"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(7495)}));t=e.O(t)})();
//# sourceMappingURL=app.01107e4b.js.map