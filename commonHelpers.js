import{a as d,i as u,S as L}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();d.defaults.baseURL="https://pixabay.com/api/";async function g(t,e=1){const o={key:"44594941-2a4acc61a8cc3b7fa403a0877",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15},n=new URLSearchParams(o).toString();return(await d.get(`?${n}`)).data}const b=document.querySelector(".gallery");function y(t){let e="";t.forEach(({webformatURL:o,largeImageURL:n,tags:r,likes:a,views:s,comments:m,downloads:h})=>e+=`<li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img
                class="gallery-image"
                src="${o}"
                alt="${r}"
              />
            </a>
            <ul class="info">
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
    `),b.insertAdjacentHTML("beforeend",e)}function S(t){localStorage.setItem("language",t)}function v(){return localStorage.getItem("language")||"en"}function w(t){return fetch(`goit-js-hw-12/languages/${t}.json`).then(e=>e.json()).catch(e=>console.error("Error loading translations:",e))}function E(t){document.querySelectorAll("[data-translate]").forEach(e=>{const o=e.getAttribute("data-translate");e.tagName==="INPUT"&&e.placeholder==="comments"?e.placeholder=t[o]||e.placeholder:e.innerHTML=t[o]||e.textContent})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".languages .link"),e=v();document.documentElement.lang=e,w(e).then(o=>{E(o)}),t.forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const r=n.target.getAttribute("data-lang");S(r),window.location.href=`/${r}`})})});const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more"),galleryItem:document.querySelector(".gallery-item")};let c=1,i="";l.form.addEventListener("submit",async t=>{if(t.preventDefault(),i=t.target.elements.search.value,l.gallery.innerHTML="",l.loader.style.display="block",l.loadMoreBtn.style.display="none",c=1,i!=="")try{const e=await g(i);y(e.hits),l.loader.style.display="none",l.loadMoreBtn.style.display="inline-block",f(e.totalHits),e.hits.length||u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.refresh()}catch(e){console.error("Error fetching gallery:",e)}else l.loader.style.display="none",l.loadMoreBtn.style.display="none"});l.gallery.addEventListener("click",t=>{t.preventDefault()});var p=new L(".gallery a",{captionsData:"alt",captionDelay:250});async function M(){try{c++;const t=await g(i,c);l.loader.style.display="none",y(t.hits),f(t.totalHits),p.refresh(),q()}catch{console.error("Error fetching gallery:",error)}}l.loadMoreBtn.addEventListener("click",M);function f(t){c*15>=t&&(l.loadMoreBtn.style.display="none",u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function q(){const e=document.querySelector(".gallery-item").getBoundingClientRect(),{height:o}=e;window.scrollBy({top:o*2+237.5,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
