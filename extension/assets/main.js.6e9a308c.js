import{_ as o,c as f,a as b,b as n,n as m,u as y,F as g,o as u,d,e as S,t as _,r as h,f as E,p as q,g as x,h as A}from"./plugin-vue_export-helper.dc637d8f.js";const L={loadAtStart:!0,modifyEngravings:!0,displayQuality:!0},C={0:"black",10:"rgb(255, 96, 0)",30:"rgb(255, 210, 0)",70:"rgb(145, 254, 2)",90:"rgb(0, 181, 255)",99:"rgb(206, 67, 252)",100:"rgb(254, 150, 0)"};const k=["src"],$={class:"bar"},I={__name:"QualityBar",props:{quality:Number,url:String},setup(i){const t=i,e=f(()=>({backgroundColor:function(){let a;switch(!0){case t.quality===0:a=0;break;case t.quality<10:a=10;break;case t.quality<30:a=30;break;case t.quality<70:a=70;break;case t.quality<90:a=90;break;case t.quality<100:a=99;break;case t.quality===100:a=100;break}return C[a]}(),width:t.quality!==0?t.quality+"%":"100%"}));return(a,l)=>(u(),b(g,null,[n("img",{src:t.url,alt:""},null,8,k),n("div",$,[n("div",{class:"quality",style:m(y(e))},null,4)])],64))}};var N=o(I,[["__scopeId","data-v-25602f5d"]]);function T(){let i={};const t=document.querySelectorAll(".profile-equipment__slot>div");i=JSON.parse(document.querySelector("#profile-ability > script").innerText.replace(/.+\{/,"[{").replace(/;\n$/,"]")),t.forEach(e=>{if(e.classList.length===1&&parseInt(e.className.replace(/slot(\d+)$/,"$1"))<=11){let a=e.getAttribute("data-item"),l=parseInt(i[0].Equip[a].Element_001.value.qualityValue);e.style.flexWrap="wrap",d(N,{quality:l,url:e.firstElementChild.getAttribute("src")}).mount(e)}})}const w=["\u0418\u0437\u043D\u043E\u0441","\u0420\u0436\u0430\u0432\u0447\u0438\u043D\u0430","\u041C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C","\u041C\u0438\u0440\u043E\u043B\u044E\u0431\u0438\u0435"],B={"\u041F\u0440\u0435\u0437\u0440\u0435\u043D\u0438\u0435 \u043A \u0441\u043B\u0430\u0431\u044B\u043C":"/achieve/achieve_04_30.png",\u0421\u0442\u0440\u0435\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"/buff/buff_65.png","\u0427\u0430\u0441 \u0436\u0430\u0442\u0432\u044B":"/buff/buff_74.png",\u0411\u0440\u0430\u0432\u0430\u0434\u0430:"/buff/buff_105.png",\u0422\u0438\u0442\u0430\u043D\u043E\u0431\u043E\u0440\u0435\u0446:"/buff/buff_71.png","\u041C\u0430\u0441\u0442\u0435\u0440 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438":"/achieve/achieve_06_14.png","\u041D\u0435\u0441\u043E\u043A\u0440\u0443\u0448\u0438\u043C\u044B\u0439 \u0431\u043E\u0435\u0446":"/buff/buff_44.png","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u0435\u043B\u044C \u0434\u0443\u0448":"/buff/buff_18.png","\u041E\u0431\u043C\u0430\u043D \u0441\u043C\u0435\u0440\u0442\u0438":"/buff/buff_162.png",\u041C\u043E\u0440\u0433\u0435\u043D\u0448\u0442\u0435\u0440\u043D:"/achieve/achieve_03_40.png",\u0418\u0441\u0441\u0435\u0447\u0435\u043D\u0438\u0435:"/buff/buff_168.png","\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043C\u0430\u043D\u044B":"/buff/buff_122.png","\u0410\u0441\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0442\u0435\u043B\u043E":"/buff/buff_166.png","\u041C\u043E\u043B\u043D\u0438\u0435\u043D\u043E\u0441\u043D\u044B\u0435 \u0440\u0435\u0444\u043B\u0435\u043A\u0441\u044B":"/buff/buff_10.png",\u041D\u0435\u0443\u0442\u043E\u043C\u0438\u043C\u043E\u0441\u0442\u044C:"/buff/buff_66.png","\u0422\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u0441\u0442\u0432\u043E":"/buff/buff_83.png","\u0420\u0430\u0437\u0440\u0443\u0448\u0438\u0442\u0435\u043B\u044C \u0449\u0438\u0442\u043E\u0432":"/buff/buff_89.png","\u0421\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0435\u0440\u0432\u044B":"/buff/buff_147.png","\u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430":"/buff/buff_229.png","\u0422\u044F\u0436\u0435\u043B\u0430\u044F \u0431\u0440\u043E\u043D\u044F":"/buff/buff_46.png",\u0413\u0440\u0435\u043D\u0430\u0434\u0435\u0440:"/buff/buff_121.png","\u041E\u0442\u0440\u0430\u0436\u0430\u044E\u0449\u0438\u0439 \u0431\u0430\u0440\u044C\u0435\u0440":"/buff/buff_239.png","\u0422\u0435\u043C\u043D\u044B\u0439 \u043F\u0430\u043A\u0442":"/buff/buff_29.png",\u0417\u0430\u0441\u0430\u0434\u0430:"/achieve/achieve_08_62.png",\u0411\u0435\u0441\u043F\u043E\u0449\u0430\u0434\u043D\u043E\u0441\u0442\u044C:"/buff/buff_94.png","\u0413\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u0431\u0443\u0440\u044F":"/buff/buff_191.png",\u0413\u043E\u043B\u0435\u043C:"/buff/buff_237.png","\u041F\u043E\u0431\u0435\u0434\u043D\u0430\u044F \u044D\u0439\u0444\u043E\u0440\u0438\u044F":"/buff/buff_136.png","\u0411\u0435\u0441\u0448\u0443\u043C\u043D\u044B\u0439 \u0443\u0431\u0438\u0439\u0446\u0430":"/buff/buff_148.png","\u0411\u0435\u0437\u043C\u044F\u0442\u0435\u0436\u043D\u044B\u0439 \u0434\u0443\u0445":"/buff/buff_63.png","\u041B\u0443\u0447\u0448\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430":"/buff/buff_170.png","\u041D\u0435\u0443\u0442\u043E\u043C\u0438\u043C\u044B\u0439 \u043D\u0430\u0442\u0438\u0441\u043A":"/buff/buff_210.png","\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u0441\u0432\u0435\u0442":"/buff/buff_113.png",\u0413\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430:"/ability/ability_224.png","\u041A\u0430\u0440\u0430\u044E\u0449\u0430\u044F \u0434\u043B\u0430\u043D\u044C":"/ability/ability_231.png","\u041E\u0431\u043C\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u043D\u0435\u0432\u0440":"/ability/ability_232.png",\u041F\u043E\u0431\u043E\u0438\u0449\u0435:"/ability/ability_233.png",\u041F\u0410\u041D\u0418\u041A\u0410:"/ability/ability_234.png",\u0410\u0434\u0440\u0435\u043D\u0430\u043B\u0438\u043D:"/ability/ability_235.png","\u0421\u043A\u043E\u0440\u043E\u0442\u0435\u0447\u043D\u0430\u044F \u0440\u0430\u0441\u043F\u0440\u0430\u0432\u0430":"/ability/ability_236.png",\u0417\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u043A:"/ability/ability_237.png","\u0421\u043A\u043E\u0440\u0430\u044F \u043F\u043E\u043C\u043E\u0449\u044C":"/ability/ability_238.png",\u0421\u043A\u0430\u043B\u044C\u043F\u0435\u043B\u044C:"/ability/ability_239.png","\u0422\u0451\u043C\u043D\u043E\u0435 \u0431\u0435\u0437\u0440\u0430\u0441\u0441\u0443\u0434\u0441\u0442\u0432\u043E":"/ability/ability_270.png",\u0411\u0435\u0437\u0440\u0430\u0441\u0441\u0443\u0434\u0441\u0442\u0432\u043E:"/ability/ability_269.png",\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B:"/ability/ability_242.png","\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B \u0438 \u043F\u0443\u043B\u0438":"/buff/buff_600.png","\u041A\u0438\u0431\u0435\u0440-\u0441\u043E\u043B\u0434\u0430\u0442":"/ability/ability_271.png",\u0411\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440\u043E\u0432\u043A\u0430:"/gl_skill/gl_skill_01_26.png","\u0420\u0432\u0435\u043D\u0438\u0435 \u0437\u0430\u0449\u0438\u0442\u043D\u0438\u043A\u0430":"/ability/ability_266.png","\u0413\u0435\u0440\u043E\u0439-\u043E\u0434\u0438\u043D\u043E\u0447\u043A\u0430":"/ability/ability_267.png","\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u0430\u044F \u0447\u0430\u043A\u0440\u0430":"/buff/buff_238.png",\u041F\u0435\u0440\u0435\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435:"/ability/ability_25.png","\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u0443\u0442\u044C":"/achieve/achieve_07_22.png","\u041B\u0438\u043A\u0443\u044E\u0449\u0438\u0439 \u0434\u0443\u0445":"/buff/buff_177.png","\u041A\u0430\u043D\u0442\u0430\u0442\u0430 \u0434\u043E\u0431\u043B\u0435\u0441\u0442\u0438":"/ability/ability_275.png",\u042D\u043A\u0441\u0442\u0430\u0437:"/ability/ability_276.png","\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u0441\u0436\u0430\u0442\u0438\u0435":"/achieve/achieve_08_49.png","\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F":"/ability/ability_268.png","\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C \u042D\u043D\u0432\u0438\u0441\u0441\u044B":"/buff/buff_78.png","\u0427\u0430\u0440\u043E\u0434\u0435\u0439\u0441\u043A\u0430\u044F \u0433\u0435\u043D\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C":"/ability/ability_274.png",\u0418\u043C\u043F\u0435\u0440\u0430\u0442\u0440\u0438\u0446\u0430:"/ability/ability_272.png",\u0418\u043C\u043F\u0435\u0440\u0430\u0442\u043E\u0440:"/ability/ability_273.png",\u041C\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044F:"/buff/buff_235.png","\u0412\u043E\u043F\u043B\u043E\u0449\u0435\u043D\u0438\u0435 \u0421\u0438\u043B\u044B":"/ability/ability_45.png","\u0412\u0442\u043E\u0440\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C":"/ability/ability_47.png","\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043F\u043E\u043B\u0435\u0442":"/buff/buff_245.png","\u041F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u0441\u0442\u0432\u043E \u0441\u0432\u0435\u0442\u0438\u043B":"/ability/ability_207.png",\u041F\u043E\u043B\u043D\u043E\u043B\u0443\u043D\u0438\u0435:"/ability/ability_208.png","\u041E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F":"/ability/ability_209.png","\u0422\u0432\u0435\u0440\u0434\u0430\u044F \u0432\u043E\u043B\u044F":"/ability/ability_210.png","\u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C":"/ability/ability_211.png","\u0422\u0435\u043C\u043D\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430":"/ability/ability_212.png","\u041C\u0430\u0441\u0442\u0435\u0440-\u0444\u0435\u0445\u0442\u043E\u0432\u0430\u043B\u044C\u0449\u0438\u043A":"/ability/ability_214.png","\u0418\u0441\u0446\u0435\u043B\u044F\u044E\u0449\u0430\u044F \u0432\u0435\u0440\u0430":"/ability/ability_215.png","\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0410\u0440\u0434\u0435\u0442\u0430\u0439\u043D\u0430":"/ability/ability_216.png","\u041D\u0430\u0441\u043B\u0435\u0434\u0438\u0435 \xAB\u0413\u0435\u043D\u0435\u0437\u0438\u0441\u0430\xBB":"/ability/ability_217.png",\u0416\u0430\u0436\u0434\u0430:"/ability/ability_222.png","\u0413\u043E\u043B\u043E\u0441 \u043B\u0443\u043D\u044B":"/ability/ability_223.png",\u041C\u0438\u0440\u043E\u0442\u0432\u043E\u0440\u0435\u0446:"/ability/ability_225.png",\u041E\u0442\u0441\u0442\u0440\u0435\u043B:"/ability/ability_228.png","\u0412\u0430-\u0431\u0430\u043D\u043A":"/ability/ability_230.png","\u0411\u0430\u043B\u0430\u043D\u0441 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432":"/ability/ability_229.png","\u041E\u0431\u043E\u0441\u0442\u0440\u0451\u043D\u043D\u044B\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0430":"/ability/ability_240.png","\u041E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u044B\u0439 \u0434\u0438\u0441\u0441\u043E\u043D\u0430\u043D\u0441":"/ability/ability_241.png","\u041A\u0440\u0443\u0433\u043E\u0432\u043E\u0440\u043E\u0442 \u0441\u0432\u0435\u0442\u0438\u043B":"/ability/ability_248.png","\u0412\u0435\u0441\u0435\u043D\u043D\u0438\u0439 \u0440\u0430\u0441\u0441\u0432\u0435\u0442":"/ability/ability_249.png","\u041F\u043E\u0432\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0431\u0443\u0440\u0438":"/ability/ability_258.png","\u0421\u0435\u0437\u043E\u043D \u0434\u043E\u0436\u0434\u0435\u0439":"/ability/ability_259.png",\u0425\u0438\u0449\u043D\u0438\u0446\u0430:"/ability/ability_260.png","\u0412\u043E\u043B\u044F \u043F\u0430\u043B\u0430\u0447\u0430":"/ability/ability_261.png","\u0411\u043B\u0435\u0434\u043D\u0430\u044F \u043B\u0443\u043D\u0430":"/ability/ability_263.png","\u0423\u0437\u044B \u0441\u0443\u0434\u044C\u0431\u044B":"/ability/ability_264.png",\u0418\u0437\u043D\u043E\u0441:"/ability/ability_219.png",\u041C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"/ability/ability_221.png",\u0420\u0436\u0430\u0432\u0447\u0438\u043D\u0430:"/ability/ability_218.png",\u041C\u0438\u0440\u043E\u043B\u044E\u0431\u0438\u0435:"/ability/ability_220.png"};const G={style:{display:"flex","align-items":"center","justify-content":"space-between"}},Q={style:{display:"flex","align-items":"center",gap:"8px"}},V={class:"engraving-image"},O=["src"],D={class:"engraving-text"},F={class:"profile-ability-tooltip"},R={__name:"Engraving",props:{name:String,level:Number,tooltipText:String},setup(i){const t=i,e=l=>"https://static.monopoly.la.gmru.net/efui_iconatlas"+B[l],a=f(()=>w.includes(t.name));return(l,r)=>(u(),b(g,null,[n("div",G,[n("div",Q,[n("div",V,[n("img",{src:e(t.name),class:"engraving-image-item"},null,8,O)]),n("span",{class:S([{"negative-engraving":y(a)},"engraving-text"])},_(t.name),3)]),n("span",D,_(t.level)+" \u0443\u0440. ",1)]),n("div",F,[n("p",null,_(t.tooltipText),1)])],64))}};var j=o(R,[["__scopeId","data-v-42da742f"]]);const z=i=>(q("data-v-2e27b2a8"),i=i(),x(),i),H=z(()=>n("h4",null,"\u0413\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u043A\u0438",-1)),J={class:"swiper-container"},M={class:"swiper-wrapper"},P={class:"swiper-slide"},U={class:"swiper-slide-item"},W={__name:"EngravingList",props:{engravingList:Array},setup(i){return(t,e)=>(u(),b(g,null,[H,n("div",J,[n("div",M,[n("ul",P,[(u(!0),b(g,null,h(i.engravingList,a=>(u(),b("li",U,[E(j,{name:a.name,level:a.level,"tooltip-text":a.tooltipText},null,8,["name","level","tooltip-text"])]))),256))])])])],64))}};var K=o(W,[["__scopeId","data-v-2e27b2a8"]]);function X(){const i=document.querySelector(".profile-ability-engrave");i.style.height="auto";const t=document.querySelectorAll(".swiper-slide>li"),e=[];t.length>0&&t.forEach(a=>{let l=JSON.parse(a.firstElementChild.innerHTML.replace(/(.+)\s(\d) ур\./g,'{"name":"$1", "level":$2}'));l.tooltipText=a.lastElementChild.firstElementChild.innerText,e.push(l)}),d(K,{engravingList:e}).mount(i)}const Y=["onClick"],Z=["src","alt"],tt={__name:"CharacterList",props:{characterList:Array},setup(i){const t=i,e=l=>{location.href=`/Profile/Character/${l}`},a=f(()=>t.characterList.sort((l,r)=>+l.gs<+r.gs?1:+l.gs>+r.gs?-1:0));return(l,r)=>(u(!0),b(g,null,h(y(a),(s,c)=>(u(),b("li",{key:c+"ch"},[n("span",null,[n("button",{type:"button",onClick:lt=>e(s.name)},[n("img",{src:s.img,alt:s.characterClass},null,8,Z),A(" \u0423\u0440."+_(s.level)+" ",1),n("span",null,_(s.name)+"("+_(s.gs)+")",1)],8,Y)])]))),128))}};function it(i){const t={};var e=0;i.forEach(l=>{chrome.runtime.sendMessage({type:"load-character-info",name:l.name},r=>{t[l.name]={gs:r.gs,level:r.level},++e})});var a=setInterval(function(){document&&e===i.length&&(clearInterval(a),at(t))},30)}const at=i=>{const t=[];document.querySelectorAll("#expand-character-list > ul").forEach((a,l)=>{t.push([]),Array.from(a.children).forEach(r=>{const s={},c=r.querySelector("button span").textContent;s.name=c,s.gs=i[c].gs,s.level=i[c].level,s.class=r.querySelector("button img").getAttribute("alt"),s.img=r.querySelector("button img").getAttribute("src"),t[l].push(s)}),d(tt,{characterList:t[l]}).mount(a)})};let p={},v=[];async function et(){await chrome.storage.sync.get().then(i=>{Object.assign(p,L,i)})}try{document.querySelectorAll("#expand-character-list > ul > li").forEach(i=>{v.push({name:i.querySelector("button span").textContent,class:i.querySelector("button img").getAttribute("alt")})}),et().then(()=>{p.loadAtStart&&it(v),p.displayQuality&&T(),p.modifyEngravings&&X()})}catch(i){console.error(i)}
