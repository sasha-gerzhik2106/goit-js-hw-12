const BASE_URL = 'https://pixabay.com/api/';
const KEY = '46829805-97afaea9a63466d4d0f01977e';

export async function search(searchQuery, page, per_page) {
  const url = `${BASE_URL}?key=${KEY}&q=${searchQuery}&page=${page}&per_page=${per_page}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}
