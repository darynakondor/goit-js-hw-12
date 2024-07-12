import{a as d,i as u,S as L}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();d.defaults.baseURL="https://pixabay.com/api/";async function g(t,e=1){const a={key:"44594941-2a4acc61a8cc3b7fa403a0877",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15},n=new URLSearchParams(a).toString();return(await d.get(`?${n}`)).data}const b="Hello",S={hello:b},v="Привіт",M={hello:v},q=document.querySelector(".gallery");function y(t){let e="";t.forEach(({webformatURL:a,largeImageURL:n,tags:o,likes:r,views:s,comments:m,downloads:h})=>e+=`<li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img
                class="gallery-image"
                src="${a}"
                alt="${o}"
              />
            </a>s
            <ul class="info">s
                <li class="item">
                    <p class="bold">Likes</p>
                    <p>${r}</p>
                </li>
                <li class="item">
                    <p class="bold">Views</p>
                    <p>${s}</p>
                </li>
                <li class="item">
                    <p class="bold">Comments</p>
                    <p>${m}</p>
                </li>
                <li class="item">
                    <p class="bold">Downloads</p>
                    <p>${h}</p>
                </li>
            </ul>
        </li>
    `),q.insertAdjacentHTML("beforeend",e)}function w(t){localStorage.setItem("language",t)}function E(){return localStorage.getItem("language")||"en"}function P(t){return t=="ua"?M:S}function $(t){document.querySelectorAll("[data-translate]").forEach(e=>{const a=e.getAttribute("data-translate");e.tagName==="INPUT"&&e.placeholder==="comments"?e.placeholder=t[a]||e.placeholder:e.innerHTML=t[a]||e.textContent})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".languages .link"),e=E();document.documentElement.lang=e;const a=P(e);$(a),t.forEach(n=>{n.addEventListener("click",o=>{o.preventDefault();const r=o.target.getAttribute("data-lang");w(r),window.location.href=`/${r}`})})});const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more"),galleryItem:document.querySelector(".gallery-item")};let i=1,c="";l.form.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.target.elements.search.value,l.gallery.innerHTML="",l.loader.style.display="block",l.loadMoreBtn.style.display="none",i=1,c!=="")try{const e=await g(c);y(e.hits),l.loader.style.display="none",l.loadMoreBtn.style.display="inline-block",f(e.totalHits),e.hits.length||u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.refresh()}catch(e){console.error("Error fetching gallery:",e)}else l.loader.style.display="none",l.loadMoreBtn.style.display="none"});l.gallery.addEventListener("click",t=>{t.preventDefault()});var p=new L(".gallery a",{captionsData:"alt",captionDelay:250});async function B(){try{i++;const t=await g(c,i);l.loader.style.display="none",y(t.hits),f(t.totalHits),p.refresh(),I()}catch{console.error("Error fetching gallery:",error)}}l.loadMoreBtn.addEventListener("click",B);function f(t){i*15>=t&&(l.loadMoreBtn.style.display="none",u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function I(){const e=document.querySelector(".gallery-item").getBoundingClientRect(),{height:a}=e;window.scrollBy({top:a*2+237.5,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
