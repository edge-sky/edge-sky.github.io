const initScrollTopBottom=()=>{const o=document.querySelector(".tool-scroll-to-top"),t=document.querySelector(".tool-scroll-to-bottom");o.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),t.addEventListener("click",(()=>{var o=document.body.scrollHeight;window.scrollTo({top:o,behavior:"smooth"})}))};export default initScrollTopBottom;