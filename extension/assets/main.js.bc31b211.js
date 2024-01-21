import{_ as y,c as m,a as o,b as r,n as S,u as h,F as _,o as c,d as v,e as E,t as p,r as b,f as q,p as x,g as A,h as L}from"./plugin-vue_export-helper.dc637d8f.js";const C={loadAtStart:!0,modifyEngravings:!0,displayQuality:!0},k={0:"black",25:"rgb(219, 192, 0)",50:"rgb(0, 183, 0)",70:"rgb(0, 84, 255)",90:"rgb(255, 0, 221)",100:"rgb(255, 94, 0)"};const $=["src"],T={class:"bar"},N={__name:"QualityBar",props:{quality:Number,url:String},setup(e){const t=e,s=m(()=>({backgroundColor:function(){let a;switch(!0){case t.quality===0:a=0;break;case t.quality<39:a=25;break;case t.quality<70:a=50;break;case t.quality<90:a=70;break;case t.quality<100:a=90;break;case t.quality===100:a=100;break}return k[a]}(),width:t.quality!==0?t.quality+"%":"100%"}));return(a,n)=>(c(),o(_,null,[r("img",{src:t.url,alt:""},null,8,$),r("div",T,[r("div",{class:"quality",style:S(h(s))},null,4)])],64))}};var w=y(N,[["__scopeId","data-v-41632cc8"]]);function I(){let e={};const t=document.querySelectorAll(".profile-equipment__slot>div");e=JSON.parse(document.querySelector("#profile-ability > script").innerText.replace(/.+\{/,"[{").replace(/;\n$/,"]")),t.forEach(s=>{if(s.classList.length===1&&parseInt(s.className.replace(/slot(\d+)$/,"$1"))<=11){let a=s.getAttribute("data-item"),n=parseInt(e[0].Equip[a].Element_001.value.qualityValue);s.style.flexWrap="wrap",v(w,{quality:n,url:s.firstElementChild.getAttribute("src")}).mount(s)}})}const B=["\u0418\u0437\u043D\u043E\u0441","\u0420\u0436\u0430\u0432\u0447\u0438\u043D\u0430","\u041C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C","\u041C\u0438\u0440\u043E\u043B\u044E\u0431\u0438\u0435"];const Q={style:{"justify-content":"space-between"}},V={class:"profile-ability-tooltip"},O={__name:"Engraving",props:{name:String,level:Number,tooltipText:String},setup(e){const t=e,s=m(()=>B.includes(t.name));return(a,n)=>(c(),o(_,null,[r("div",Q,[r("span",{class:E({"negative-engraving":h(s)})},p(t.name),3),r("span",null,p(t.level)+" \u0443\u0440. ",1)]),r("div",V,[r("p",null,p(t.tooltipText),1)])],64))}};var G=y(O,[["__scopeId","data-v-cc33b56a"]]);const D=e=>(x("data-v-2e27b2a8"),e=e(),A(),e),F=D(()=>r("h4",null,"\u0413\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u043A\u0438",-1)),j={class:"swiper-container"},z={class:"swiper-wrapper"},J={class:"swiper-slide"},M={class:"swiper-slide-item"},R={__name:"EngravingList",props:{engravingList:Array},setup(e){return(t,s)=>(c(),o(_,null,[F,r("div",j,[r("div",z,[r("ul",J,[(c(!0),o(_,null,b(e.engravingList,a=>(c(),o("li",M,[q(G,{name:a.name,level:a.level,"tooltip-text":a.tooltipText},null,8,["name","level","tooltip-text"])]))),256))])])])],64))}};var H=y(R,[["__scopeId","data-v-2e27b2a8"]]);function P(){const e=document.querySelector(".profile-ability-engrave");e.style.height="auto";const t=document.querySelectorAll(".swiper-slide>li"),s=[];t.length>0&&t.forEach(a=>{let n=JSON.parse(a.firstElementChild.innerHTML.replace(/(.+)\s(\d) ур\./g,'{"name":"$1", "level":$2}'));n.tooltipText=a.lastElementChild.firstElementChild.innerText,s.push(n)}),v(H,{engravingList:s}).mount(e)}const U=["onClick"],W=["src","alt"],K={__name:"CharacterList",props:{characterList:Array},setup(e){const t=e,s=n=>{location.href=`/Profile/Character/${n}`},a=m(()=>t.characterList.sort((n,u)=>+n.gs<+u.gs?1:+n.gs>+u.gs?-1:0));return(n,u)=>(c(!0),o(_,null,b(h(a),(l,i)=>(c(),o("li",{key:i+"ch"},[r("span",null,[r("button",{type:"button",onClick:g=>s(l.name)},[r("img",{src:l.img,alt:l.characterClass},null,8,W),L(" \u0423\u0440."+p(l.level)+" ",1),r("span",null,p(l.name)+"("+p(l.gs)+")",1)],8,U)])]))),128))}};function X(e){const t={};e.forEach(s=>{chrome.runtime.sendMessage({type:"load-character-info",name:s.name},a=>{t[s.name]={gs:a.gs,level:a.level}})}),setTimeout(()=>{const s=[];document.querySelectorAll("#expand-character-list > ul").forEach((n,u)=>{s.push([]),Array.from(n.children).forEach(l=>{const i={},g=l.querySelector("button span").textContent;i.name=g,i.gs=t[g].gs,i.level=t[g].level,i.class=l.querySelector("button img").getAttribute("alt"),i.img=l.querySelector("button img").getAttribute("src"),s[u].push(i)}),v(K,{characterList:s[u]}).mount(n)})},e.length*250)}let d={},f=[];async function Y(){await chrome.storage.sync.get().then(e=>{Object.assign(d,C,e)})}try{document.querySelectorAll("#expand-character-list > ul > li").forEach(e=>{f.push({element:e.querySelector("span > button > span"),name:e.querySelector("button span").textContent,class:e.querySelector("button img").getAttribute("alt")})}),Y().then(()=>{d.loadAtStart&&X(f),d.displayQuality&&I(),d.modifyEngravings&&P()})}catch(e){console.error(e)}
