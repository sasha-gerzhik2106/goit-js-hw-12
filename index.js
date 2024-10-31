import{S as d,i as o}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="46829805-97afaea9a63466d4d0f01977e";function g(i){const r=`${y}?key=${h}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function L(i,r){const s=i.map(({webformatURL:l,largeImageURL:e,tags:t,likes:a,views:m,comments:f,downloads:p})=>`
              <li class="gallery-list-item">
                  <a class="gallery_link" href="${e}">
                      <img class="gallery_img" src="${l}" 
                          alt="${t}" 
                          title="${t}" />
                      <ul class="statistics-list">
                          <li class="statistics-item">
                              <p class="statistics-item_name">Likes</p>
                              <p class="statistics_result">${a}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Views</p>
                              <p class="statistics_result">${m}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Comments</p>
                              <p class="statistics_result">${f}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Downloads</p>
                              <p class="statistics_result">${p}</p>
                          </li>
                      </ul>
                  </a>
              </li>`).join("");r.insertAdjacentHTML("afterbegin",s)}const c=document.querySelector(".gallery-list"),n=document.querySelector("form"),u=document.querySelector(".loader");let _=new d(".gallery-list a",{});function $(){n.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.choiceSearch.value.toLowerCase().trim();if(r)c.innerHTML="";else{o.error({message:"Please enter a search word."});return}u.style.display="block",g(r).then(s=>{s.hits.length===0?o.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(L(s.hits,c),_.refresh())}).catch(s=>{o.error({message:s.message})}).finally(()=>{u.style.display="none",n.reset()})})}$();
//# sourceMappingURL=index.js.map
