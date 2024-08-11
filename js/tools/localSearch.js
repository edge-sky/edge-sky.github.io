export default function initLocalSearch(){let e=config.path;if(e){let t,n=!1,r=!0;0===e.length?e="search.xml":e.endsWith("json")&&(r=!1);const o=document.querySelector(".search-input"),l=document.getElementById("search-result"),s=(e,t,n)=>{var r=e.length;if(0===r)return[];let o=0;var l,s=[];for(n||(t=t.toLowerCase(),e=e.toLowerCase());-1<(l=t.indexOf(e,o));)s.push({position:l,word:e}),o=l+r;return s},i=(e,t,n,r)=>{var o;let{position:l,word:s}=n[n.length-1];var i=[];let a=0;for(;l+s.length<=t&&0!==n.length;){s===r&&a++,i.push({position:l,length:s.length});var c=l+s.length;n.pop();for(let e=n.length-1;0<=e&&(l=(o=n[e]).position,s=o.word,!(c<=l));e--)n.pop()}return{hits:i,start:e,end:t,searchTextCount:a}},a=(e,t)=>{let n="",r=t.start;return t.hits.forEach((t=>{n+=e.substring(r,t.position);var o=t.position+t.length;n+=`<b class="search-keyword">${e.substring(t.position,o)}</b>`,r=o})),n+=e.substring(r,t.end)},c=()=>{if(n){let e=o.value.trim().toLowerCase(),n=e.split(/[-\s]+/),r=(1<n.length&&n.push(e),[]);if(0<e.length&&t.forEach((({title:t,content:o,url:l})=>{let c=t.toLowerCase(),h=o.toLowerCase(),u=[],d=[],p=0;if(n.forEach((e=>{u=u.concat(s(e,c,!1)),d=d.concat(s(e,h,!1))})),0<u.length||0<d.length){var g=u.length+d.length,f=([u,d].forEach((e=>{e.sort(((e,t)=>t.position!==e.position?t.position-e.position:e.word.length-t.word.length))})),[]);0!==u.length&&(p+=(y=i(0,t.length,u,e)).searchTextCountInSlice,f.push(y));let n=[];for(;0!==d.length;){var{position:v,word:m}=d[d.length-1];let t=v-20,r=v+80;t<0&&(t=0),(r=r<v+m.length?v+m.length:r)>o.length&&(r=o.length),p+=(v=i(t,r,d,e)).searchTextCountInSlice,n.push(v)}n.sort(((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start));var y=parseInt(theme.navbar.search.top_n_per_article||1,10);0<=y&&(n=n.slice(0,y));let s="";s+=0!==f.length?`<li><a href="${l}" class="search-result-title">${a(t,f[0])}</a>`:`<li><a href="${l}" class="search-result-title">${t}</a>`,n.forEach((e=>{s+=`<a href="${l}"><p class="search-result">${a(o,e)}...</p></a>`})),s+="</li>",r.push({item:s,id:r.length,hitCount:g,searchTextCount:p})}})),1===n.length&&""===n[0])l.innerHTML='<div id="no-result"><i class="fa-solid fa-magnifying-glass fa-5x"></i></div>';else if(0===r.length)l.innerHTML='<div id="no-result"><i class="fa-solid fa-box-open fa-5x"></i></div>';else{r.sort(((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id));let e='<ul class="search-result-list">';r.forEach((t=>{e+=t.item})),e+="</ul>",l.innerHTML=e,window.pjax&&window.pjax.refresh(l)}}},h=()=>{fetch(config.root+e).then((e=>e.text())).then((e=>{n=!0,t=(t=r?[...(new DOMParser).parseFromString(e,"text/xml").querySelectorAll("entry")].map((e=>({title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}))):JSON.parse(e)).filter((e=>e.title)).map((e=>(e.title=e.title.trim(),e.content=e.content?e.content.trim().replace(/<[^>]+>/g,""):"",e.url=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),e))),(e=document.querySelector("#no-result"))&&(e.innerHTML='<i class="fa-solid fa-magnifying-glass fa-5x"></i>')}))},u=(theme.navbar.search.preload&&h(),o&&o.addEventListener("input",c),document.querySelectorAll(".search-popup-trigger").forEach((e=>{e.addEventListener("click",(()=>{document.body.style.overflow="hidden",document.querySelector(".search-pop-overlay").classList.add("active"),setTimeout((()=>o.focus()),500),n||h()}))})),()=>{document.body.style.overflow="",document.querySelector(".search-pop-overlay").classList.remove("active")});document.querySelector(".search-pop-overlay").addEventListener("click",(e=>{e.target===document.querySelector(".search-pop-overlay")&&u()})),document.querySelector(".search-input-field-pre").addEventListener("click",(()=>{o.value="",o.focus(),c()})),document.querySelector(".popup-btn-close").addEventListener("click",u);try{swup.hooks.on("page:view",(e=>{u()}))}catch(e){}window.addEventListener("keyup",(e=>{"Escape"===e.key&&u()}))}else console.warn("`hexo-generator-searchdb` plugin is not installed!")}