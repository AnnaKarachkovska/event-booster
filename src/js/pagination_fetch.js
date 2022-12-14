import { FetchService } from './base_fetch';
import { getStartPageMarkup } from './start_page_render';

const fetchFromAPI = new FetchService();
const inputValue = document.querySelector('[data-input-search]');

export default function paginationFetch(page) {
  const eventName = inputValue.value.trim();
  if (eventName === '') {
    fetchFromAPI.config.params.page = 0;
    if (page === 1) {
      standardPaginationFetch();
    } else {
      fetchFromAPI.config.params.page = page - 1;
      standardPaginationFetch();
    }
  } else {
    fetchFromAPI.config.params.keyword = eventName;
    if (page === 1) {
      fetchFromAPI.config.params.page = 0;
      standardPaginationFetch();
    } else {
      fetchFromAPI.config.params.page = page - 1;
      standardPaginationFetch();
    }
  }
}
function standardPaginationFetch() {
  fetchFromAPI.baseFetch().then(response => {
    const cardList = document.querySelector('.cards__list');
    const result = response._embedded.events;
    cardList.innerHTML = '';
    getStartPageMarkup(result);
  });
}
