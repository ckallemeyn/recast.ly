var searchYouTube = ({ max=5, key=YOUTUBE_API_KEY, query=''}, callback) => {
  // TODO
  // options = options || {};
  // write ajax call in this function to get youtube Data from api
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    videoEmbeddable: 'true',
    maxResults: max,
    q: query,
    key: key,
    type: 'video',
  }).done((videoData) => callback(videoData.items)).fail((err)=>console.log('get request failed: ', err));
};

window.searchYouTube = searchYouTube;

// Use jQuery to send a GET request to the search endpoint.
// This is the only time you should use jQuery in this sprint

// Accept a callback function that is invoked with the videos
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key
// Only GET embeddable videos
// Make sure all the tests for searchYouTube are passing. You can open the tests with npm test

// {
//   "kind": "youtube#searchListResponse",
//   "etag": etag,
//   "nextPageToken": string,
//   "prevPageToken": string,
//   "regionCode": string,
//   "pageInfo": {
//     "totalResults": integer,
//     "resultsPerPage": integer
//   },
//   "items": [
//     search Resource
//   ]
// }