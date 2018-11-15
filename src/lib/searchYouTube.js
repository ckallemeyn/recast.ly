var searchYouTube = ({ max=5, key=YOUTUBE_API_KEY, query=''}, successCB) => {
  // { max=5, key=YOUTUBE_API_KEY, query=''}
  // write ajax call in this function to get youtube Data from api
  // var options = {
  //   key: window.YOUTUBE_API_KEY,
  //   query: 'Star Wars',
  //   max: 5
  // }

  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      'key': key,
      'q': query,
      'maxResults': max || 5,
      'videoEmbeddable': 'true',
      'type': 'video',
      'part': 'snippet',
    },
    success: function(data) {
      successCB(data.items);
    }
  });
};
// };
// var searchYouTube = (callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: window.YOUTUBE_API_KEY,
//     q: '',
//     maxResults: 5,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };


window.searchYouTube = searchYouTube;
