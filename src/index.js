// TODO: Render the `App` component to the DOM

// class video extends React.Component
// data={this.exampleVideoData}
console.log(window.searchYouTube);
// var videos = [{
//   kind: '',
//   etag: '',
//   id: {
//     kind: '',
//     videoId: ''
//   },
//   snippet: {
//     publishedAt: '',
//     channelId: '',
//     title: '',
//     description: '',
//     thumbnails: {
//       default: {
//         url: '',
//         width: 120,
//         height: 90
//       },
//       medium: {
//         url: '',
//         width: 320,
//         height: 180
//       },
//       high: {
//         url: '',
//         width: 480,
//         height: 360
//       }
//     },
//     channelTitle: '',
//     liveBroadcastContent: ''
//   }
// }];

// videoList={videoList}
ReactDOM.render(<App  searchYouTube={window.searchYouTube}/>,document.getElementById('app'));
