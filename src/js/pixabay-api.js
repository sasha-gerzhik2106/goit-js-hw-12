const BASE_URL = 'https://pixabay.com/api/';
const KEY = '46829805-97afaea9a63466d4d0f01977e';

export function search(element) {
	const url = `${BASE_URL}?key=${KEY}&q=${element}&image_type=photo&orientation=horizontal&safesearch=true`

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}