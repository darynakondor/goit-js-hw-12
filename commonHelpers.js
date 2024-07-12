import{a as d,i as u,S as L}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();d.defaults.baseURL="https://pixabay.com/api/";async function g(t,e=1){const r={key:"44594941-2a4acc61a8cc3b7fa403a0877",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15},n=new URLSearchParams(r).toString();return(await d.get(`?${n}`)).data}const b="Hello",S={hello:b},v="Привіт",M={hello:v},q=document.querySelector(".gallery");function y(t){let e="";t.forEach(({webformatURL:r,largeImageURL:n,tags:o,likes:a,views:s,comments:m,downloads:h})=>e+=`<li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${o}"
              />
            </a>s
            <ul class="info">s
                <li class="item">
                    <p class="bold">Likes</p>
                    <p>${a}</p>
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
    `),q.insertAdjacentHTML("beforeend",e)}function w(t){localStorage.setItem("language",t)}function E(){return localStorage.getItem("language")||"en"}function P(t){return t=="ua"?M:S}function $(t){document.querySelectorAll("[data-translate]").forEach(e=>{const r=e.getAttribute("data-translate");e.tagName==="INPUT"&&e.placeholder==="comments"?e.placeholder=t[r]||e.placeholder:e.innerHTML=t[r]||e.textContent})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".languages .link"),e=E();document.documentElement.lang=e,P(e).then(r=>{$(r)}),t.forEach(r=>{r.addEventListener("click",n=>{n.preventDefault();const o=n.target.getAttribute("data-lang");w(o),window.location.href=`/${o}`})})});const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more"),galleryItem:document.querySelector(".gallery-item")};let i=1,c="";l.form.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.target.elements.search.value,l.gallery.innerHTML="",l.loader.style.display="block",l.loadMoreBtn.style.display="none",i=1,c!=="")try{const e=await g(c);y(e.hits),l.loader.style.display="none",l.loadMoreBtn.style.display="inline-block",f(e.totalHits),e.hits.length||u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.refresh()}catch(e){console.error("Error fetching gallery:",e)}else l.loader.style.display="none",l.loadMoreBtn.style.display="none"});l.gallery.addEventListener("click",t=>{t.preventDefault()});var p=new L(".gallery a",{captionsData:"alt",captionDelay:250});async function B(){try{i++;const t=await g(c,i);l.loader.style.display="none",y(t.hits),f(t.totalHits),p.refresh(),I()}catch{console.error("Error fetching gallery:",error)}}l.loadMoreBtn.addEventListener("click",B);function f(t){i*15>=t&&(l.loadMoreBtn.style.display="none",u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function I(){const e=document.querySelector(".gallery-item").getBoundingClientRect(),{height:r}=e;window.scrollBy({top:r*2+237.5,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
