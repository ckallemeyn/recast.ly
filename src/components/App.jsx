// chases Youtube API key: AIzaSyCpyOuDL6IhjX7cesQRveKjZtRvmxNMvsk
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };

  }

  // window.searchYouTube({query=''}, (videos) => {
  //   {console.log(this.state.videos)}
  //   this.setState({
  //     videos: videos.slice(1),
  //     currentVideo: videos[0]
  //   }, () => {console.log('video arr', this.state.videos)});
  // });
  componentDidMount() {

    const callback = (data) => {
      console.log(data);
      this.setState({
        videos: data,
        currentVideo: data[0]
      });
    };

    this.props.searchYouTube(callback);
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
  render() {
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

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search/></em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em> view goes here</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videos} onClick={(video) => this.changeVideo(video)}/></em> view goes here</h5></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
