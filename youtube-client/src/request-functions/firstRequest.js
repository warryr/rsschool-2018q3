import { makeRequest } from './makeRequest';

export function firstRequest(searchValue) {
  const url = `https://www.googleapis.com/youtube/v3/search?type=video&q=${searchValue}&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM`;
  makeRequest(searchValue, url);
}
