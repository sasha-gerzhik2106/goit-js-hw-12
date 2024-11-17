import{S as h,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",w="46829805-97afaea9a63466d4d0f01977e";async function L(a,l,r){const s=`${g}?key=${w}&q=${a}&page=${l}&per_page=${r}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(s);if(!e.ok)throw new Error(e.status);return e.json()}function _(a,l){const r=a.map(({webformatURL:e,largeImageURL:t,tags:i,likes:n,views:o,comments:f,downloads:y})=>{const u=document.createElement("li");return u.innerHTML=`
                  <a class="gallery_link" href="${t}">
                      <img class="gallery_img" src="${e}" 
                          alt="${i}" 
                          title="${i}" />
                      <ul class="statistics-list">
                          <li class="statistics-item">
                              <p class="statistics-item_name">Likes</p>
                              <p class="statistics_result">${n}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Views</p>
                              <p class="statistics_result">${o}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Comments</p>
                              <p class="statistics_result">${f}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Downloads</p>
                              <p class="statistics_result">${y}</p>
                          </li>
                      </ul>
                  </a>
              `,u.classList.add("gallery-list-item"),u});l.append(...r);const s=r[0];if(s){const e=s.getBoundingClientRect();window.scrollBy({top:e.top,left:0,behavior:"smooth"})}}const p=document.querySelector(".gallery-list"),b=document.querySelector("form"),d=document.querySelector(".loader");let $=new h(".gallery-list a",{});const m=document.querySelector(".load-more");function S(){let a="",r=1,s=null;async function e(t,i,n){d.style.display="block",m.style.visibility="hidden";try{if(s!==null&&i*n>=s)return c.warning({message:"We're sorry, but you've reached the end of search results."});const o=await L(t,i,n);o.hits.length===0?c.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(s=o.totalHits,s/n>i&&(m.style.visibility="visible"),_(o.hits,p),$.refresh())}catch(o){c.error({message:o.message})}finally{d.style.display="none"}}b.addEventListener("submit",async t=>{if(t.preventDefault(),a=t.target.elements.choiceSearch.value.toLowerCase().trim(),a)p.innerHTML="";else{c.error({message:"Please enter a search word."});return}r=1,s=null,await e(a,r,15)}),m.addEventListener("click",async()=>{r+=1,await e(a,r,15)})}S();
//# sourceMappingURL=index.js.map
