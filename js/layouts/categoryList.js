const toggleStyle=(t,e,o,l)=>{t.style[e]=t.style[e]===o?l:o},setupCategoryList=()=>{const t=Array.from(document.querySelectorAll(".all-category-list-item")).filter((t=>t.parentElement.classList.contains("all-category-list")));t.forEach((e=>{const o=e.querySelectorAll(".all-category-list-child");o.forEach((t=>{t.style.maxHeight="0px",t.style.marginTop="0px"})),e.addEventListener("click",(()=>{const l=e.offsetTop;o.forEach((t=>{toggleStyle(t,"maxHeight","0px","1000px"),toggleStyle(t,"marginTop","0px","15px")})),t.forEach((t=>{t.offsetTop===l&&t!==e&&t.querySelectorAll(".all-category-list-child").forEach((t=>{toggleStyle(t,"maxHeight","0px","1000px"),toggleStyle(t,"marginTop","0px","15px")}))}))}))}))};try{swup.hooks.on("page:view",setupCategoryList)}catch(t){console.error(t)}document.addEventListener("DOMContentLoaded",setupCategoryList);