// Importing libraries
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

// Imports from folder JS
import { search } from './js/pixabay-api';
import { renderMarkup } from './js/render-functions';

// DOM elements
const galleryList = document.querySelector('.gallery-list');
const form = document.querySelector('form');
const loader = document.querySelector('.loader');
const loadMoreImagesButton = document.querySelector('.load-more');

// Initializing SimpleLightbox
const lightbox = new SimpleLightbox('.gallery-list a', {});

// Search and pagination state
let searchQuery = '';
const perPage = 15;
let currentPage = 1;
let totalHits = null;

// Function to load images
async function loadImages(searchQuery, page, perPage) {
  loader.style.display = 'block';

  try {
    // Check if we've reached the end of search results
    if (totalHits !== null && page * perPage >= totalHits) {
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
      });
      return;
    }

    const response = await search(searchQuery, page, perPage);

    // Handle no results
    if (response.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    // Update totalHits and render the results
    totalHits = response.totalHits;
    renderMarkup(response.hits, galleryList);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({ message: error.message });
  } finally {
    loader.style.display = 'none';
  }
}

// Event listener for form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.choiceSearch.value.trim().toLowerCase();

  // Validate search query
  if (!searchQuery) {
    iziToast.error({ message: 'Please enter a search word.' });
    return;
  }

  // Clear previous results and reset state
  galleryList.innerHTML = '';
  currentPage = 1;
  totalHits = null;

  // Load initial results
  await loadImages(searchQuery, currentPage, perPage);

  // Show "Load More" button if results exist
  loadMoreImagesButton.style.visibility = 'visible';
});

// Event listener for "Load More" button
loadMoreImagesButton.addEventListener('click', async () => {
  currentPage += 1;
  loadMoreImagesButton.style.visibility = 'hidden';

  await loadImages(searchQuery, currentPage, perPage);

  loadMoreImagesButton.style.visibility = 'visible';
});