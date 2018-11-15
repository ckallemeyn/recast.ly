// var searchYouTube = (options, callback) => {
//   // { max=5, key=YOUTUBE_API_KEY, query=''}
//   options = options || {
//     max: 5,
//     key: window.YOUTUBE_API_KEY,
//     query: ''
//   };

//   // write ajax call in this function to get youtube Data from api
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: window.YOUTUBE_API_KEY,
//     q: '',
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   }).done( videoData => {
//     callback(videoData.items);
//   })
// .fail((err) => console.log('get request failed: ', err));

// };
var searchYouTube = (callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: window.YOUTUBE_API_KEY,
    q: '',
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
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