import{S as L,i as o}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const w="https://pixabay.com/api/",_="46829805-97afaea9a63466d4d0f01977e";async function $(r,i,a){const s=`${w}?key=${_}&q=${r}&page=${i}&per_page=${a}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(s);if(!e.ok)throw new Error(e.status);return e.json()}function v(r,i){const a=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:l,views:g,comments:h,downloads:b})=>`
              <li class="gallery-list-item">
                  <a class="gallery_link" href="${e}">
                      <img class="gallery_img" src="${s}" 
                          alt="${t}" 
                          title="${t}" />
                      <ul class="statistics-list">
                          <li class="statistics-item">
                              <p class="statistics-item_name">Likes</p>
                              <p class="statistics_result">${l}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Views</p>
                              <p class="statistics_result">${g}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Comments</p>
                              <p class="statistics_result">${h}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Downloads</p>
                              <p class="statistics_result">${b}</p>
                          </li>
                      </ul>
                  </a>
              </li>`).join("");i.insertAdjacentHTML("beforeend",a)}const p=document.querySelector(".gallery-list"),S=document.querySelector("form"),d=document.querySelector(".loader"),c=document.querySelector(".load-more"),q=new L(".gallery-list a",{});let n="";const f=15;let m=1,u=null;async function y(r,i,a){d.style.display="block";try{if(u!==null&&i*a>=u){o.warning({message:"We're sorry, but you've reached the end of search results."});return}const s=await $(r,i,a);if(s.hits.length===0){o.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}u=s.totalHits,v(s.hits,p),q.refresh()}catch(s){o.error({message:s.message})}finally{d.style.display="none"}}S.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.target.elements.choiceSearch.value.trim().toLowerCase(),!n){o.error({message:"Please enter a search word."});return}p.innerHTML="",m=1,u=null,await y(n,m,f),c.style.visibility="visible"});c.addEventListener("click",async()=>{m+=1,c.style.visibility="hidden",await y(n,m,f),c.style.visibility="visible"});
//# sourceMappingURL=index.js.map
