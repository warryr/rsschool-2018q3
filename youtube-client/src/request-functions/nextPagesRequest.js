import { nextPageTok } from '../index';
import { makeRequest } from './makeRequest';

export function nextPagesRequest(searchValue) {
  const url = `https://www.googleapis.com/youtube/v3/search?pageToken=${nextPageTok}&type=video&q=${searchValue}&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM`;
  makeRequest(searchValue, url);
}
