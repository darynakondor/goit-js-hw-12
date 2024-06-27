import{a as d,i as y,S as b}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();d.defaults.baseURL="https://pixabay.com/api/";async function u(r,t=1){const a={key:"44594941-2a4acc61a8cc3b7fa403a0877",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},s=new URLSearchParams(a).toString();return(await d.get(`?${s}`)).data}const L=document.querySelector(".gallery");function p(r){let t="";r.forEach(({webformatURL:a,largeImageURL:s,tags:e,likes:o,views:n,comments:g,downloads:h})=>t+=`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
              <img
                class="gallery-image"
                src="${a}"
                alt="${e}"
              />
            </a>
            <ul class="info">
                <li class="item">
                    <p class="bold">Likes</p>
                    <p>${o}</p>
                </li>
                <li class="item">
                    <p class="bold">Views</p>
                    <p>${n}</p>
                </li>
                <li class="item">
                    <p class="bold">Comments</p>
                    <p>${g}</p>
                </li>
                <li class="item">
                    <p class="bold">Downloads</p>
                    <p>${h}</p>
                </li>
            </ul>
        </li>
    `),L.insertAdjacentHTML("beforeend",t)}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more"),galleryItem:document.querySelector(".gallery-item")};let c=1,i="";l.form.addEventListener("submit",async r=>{if(r.preventDefault(),i=r.target.elements.search.value,l.gallery.innerHTML="",l.loader.style.display="block",c=1,i!=="")try{const t=await u(i);p(t.hits),l.loader.style.display="none",l.loadMoreBtn.style.display="inline-block",f(t.totalHits),t.hits.length||y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.refresh()}catch(t){console.error("Error fetching gallery:",t)}else l.loader.style.display="none",l.loadMoreBtn.style.display="none"});l.gallery.addEventListener("click",r=>{r.preventDefault()});var m=new b(".gallery a",{captionsData:"alt",captionDelay:250});async function S(){try{c++;const r=await u(i,c);l.loader.style.display="none",p(r.hits),f(r.totalHits),m.refresh(),q()}catch{console.error("Error fetching gallery:",error)}}l.loadMoreBtn.addEventListener("click",S);function f(r){c*15>=r&&(l.loadMoreBtn.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function q(){const t=document.querySelector(".gallery-item").getBoundingClientRect(),{height:a}=t;window.scrollBy({top:a*2+237.5,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
