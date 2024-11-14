//library 1
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//library 2
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

//imports from folder JS
import { search } from './js/pixabay-api';
import { renderMarkup } from './js/render-functions';

const galleryList = document.querySelector('.gallery-list');
const form = document.querySelector('form');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery-list a', {});
const loadMoreImagesButton = document.querySelector('.load-more');

function elementForSearch() {
  let searchQuery = "";
  const per_page = 15;
  let page = 1;
  let totalHits = null;
  async function loadImages(searchQuery, page, per_page){
    loader.style.display = 'block';
   try{
    if(totalHits !== null && page * per_page >= totalHits){
      return iziToast.warning({
        message: "We're sorry, but you've reached the end of search results."
            })
    }
    const response = await search(searchQuery, page, per_page)
      //if are not results
      if (response.hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        //markup generation and gallery update
      } else {
        totalHits = response.totalHits;
        renderMarkup(response.hits, galleryList);
        lightbox.refresh();
      }
   } catch (error) {
      iziToast.error({ message: error.message });
    } finally {
      loader.style.display = 'none';
    };
  };
  
    form.addEventListener('submit',  async event => {
    event.preventDefault();
    searchQuery = event.target.elements.choiceSearch.value
      .toLowerCase()
      .trim();

    //checking for an empty input
    if (!searchQuery) {
      iziToast.error({ message: 'Please enter a search word.' });
      return;
    }else{
    // clearing past results
    galleryList.innerHTML = '';
	}
  page = 1;
  await loadImages(searchQuery, page, per_page);
  loadMoreImagesButton.style.visibility = "visible";
  
  });
  loadMoreImagesButton.addEventListener('click', async () => {
    loadMoreImagesButton.style.visibility = "hidden";
    page += 1;
    await loadImages(searchQuery, page, per_page);
    loadMoreImagesButton.style.visibility = "visible";
  })

}

elementForSearch();