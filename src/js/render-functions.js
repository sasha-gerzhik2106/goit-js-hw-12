export function renderMarkup(arr, galleryEl) {
    const markup = arr
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
         const li = document.createElement("li");
         li.innerHTML =`
                  <a class="gallery_link" href="${largeImageURL}">
                      <img class="gallery_img" src="${webformatURL}" 
                          alt="${tags}" 
                          title="${tags}" />
                      <ul class="statistics-list">
                          <li class="statistics-item">
                              <p class="statistics-item_name">Likes</p>
                              <p class="statistics_result">${likes}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Views</p>
                              <p class="statistics_result">${views}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Comments</p>
                              <p class="statistics_result">${comments}</p>
                          </li>
                          <li class="statistics-item">
                              <p class="statistics-item_name">Downloads</p>
                              <p class="statistics_result">${downloads}</p>
                          </li>
                      </ul>
                  </a>
              `;
              li.classList.add('gallery-list-item');
              return li;
        }
      );
    galleryEl.append(...markup);
    const firstElement = markup[0];
    if(firstElement){
        const rect = firstElement.getBoundingClientRect();
        window.scrollBy({
            top: rect.top,
            left: 0,
            behavior: "smooth",
          });
    }
  }