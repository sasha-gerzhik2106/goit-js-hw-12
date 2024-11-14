import{S as f,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="46829805-97afaea9a63466d4d0f01977e";async function h(r,a,s){const i=`${y}?key=${g}&q=${r}&page=${a}&per_page=${s}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(i);if(!e.ok)throw new Error(e.status);return e.json()}function b(r,a){const s=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:l,views:c,comments:o,downloads:d})=>`
              <li class="gallery-list-item">
                  <a class="gallery_link" href="${e}">
                      <img class="gallery_img" src="${i}" 
                          alt="${t}" 
                          title="${t}" />
                      <ul class="statistics-list">
                          <li class="statistics-item">
                              <p class="statistics-item_name">Likes</p>
                              <p class="statistics_result">${l}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Views</p>
                              <p class="statistics_result">${c}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Comments</p>
                              <p class="statistics_result">${o}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Downloads</p>
                              <p class="statistics_result">${d}</p>
                          </li>
                      </ul>
                  </a>
              </li>`).join("");a.insertAdjacentHTML("beforeend",s)}const m=document.querySelector(".gallery-list"),_=document.querySelector("form"),p=document.querySelector(".loader");let L=new f(".gallery-list a",{});const u=document.querySelector(".load-more");function w(){let r="",s=1,i=null;async function e(t,l,c){p.style.display="block";try{if(i!==null&&l*c>=i)return n.warning({message:"We're sorry, but you've reached the end of search results."});const o=await h(t,l,c);o.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(i=o.totalHits,b(o.hits,m),L.refresh())}catch(o){n.error({message:o.message})}finally{p.style.display="none"}}_.addEventListener("submit",async t=>{if(t.preventDefault(),r=t.target.elements.choiceSearch.value.toLowerCase().trim(),r)m.innerHTML="";else{n.error({message:"Please enter a search word."});return}s=1,await e(r,s,15),u.style.visibility="visible"}),u.addEventListener("click",async()=>{u.style.visibility="hidden",s+=1,await e(r,s,15),u.style.visibility="visible"})}w();
//# sourceMappingURL=index.js.map
