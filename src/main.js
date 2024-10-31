//library 1
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//library 2
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//imports from folder JS
import { search } from './js/pixabay-api';
import { renderMarkup } from './js/render-functions';

const galleryList = document.querySelector('.gallery-list');
const form = document.querySelector('form');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery-list a', {});

function elementForSearch() {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const myElement = event.target.elements.choiceSearch.value
      .toLowerCase()
      .trim();

    //checking for an empty input
    if (!myElement) {
      iziToast.error({ message: 'Please enter a search word.' });
      return;
    }else{
    // clearing past results
    galleryList.innerHTML = '';
	}



    // Show loading
    loader.style.display = 'block';

    //запит до pixabay-API
    search(myElement)
      .then(element => {
        //if are not results
        if (element.hits.length === 0) {
          iziToast.info({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
          //markup generation and gallery update
        } else {
          renderMarkup(element.hits, galleryList);
          lightbox.refresh();
        }
      })
      //error checking
      .catch(error => {
        iziToast.error({ message: error.message });
      })
      .finally(() => {
        loader.style.display = 'none';
		form.reset();
      });
  });


}

elementForSearch();