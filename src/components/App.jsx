// chases Youtube API key: AIzaSyCpyOuDL6IhjX7cesQRveKjZtRvmxNMvsk
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      query: 'Star Wars bloopers'
    };
    this.findTextChange = this.findTextChange.bind(this);
  }

  findTextChange(e) {
    let query = e.target.value;
    if (query !== this.state.query) {
      this.retrieveVideos(query);
    }
  }


  retrieveVideos(q) {
    let userQuery = q ? q : this.state.query;
    let options = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: userQuery
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        videoList: data,
        currentVideo: data[0],
        query: q
      });
    });
  }

  componentDidMount() {
    this.retrieveVideos();
    // const options = {
    //   key: window.YOUTUBE_API_KEY,
    //   max: 5,
    //   query: 'Jar-Jar Binks'
    // }

    // const callback = (data) => {
    //   this.setState({
    //     videoList: data,
    //     currentVideo: data[0],
    //     query: 'Star Wars'
    //   });
    // };
    // this.props.searchYouTube(options, callback);
  }

  changeVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  /*
  we need to create a method that takes in a specific video title that alters the state upon being clicked.
  We need to have the same click event passed down to the children of app
  */
  // if (_.isNull(this.state.currentVideo)) {
  //   return (
  //     <div>
  //     <nav className="navbar">
  //       <div className="col-md-6 offset-md-3">
  //         <div><h5><em><Search/></em> view goes here</h5></div>
  //       </div>
  //     </nav>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search findTextChange={this.findTextChange}/></em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em> view goes here</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videoList} onClick={(video) => this.changeVideo(video)}/></em> view goes here</h5></div>
          </div>
        </div>
      </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
