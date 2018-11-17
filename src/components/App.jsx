// chases Youtube API key: AIzaSyCpyOuDL6IhjX7cesQRveKjZtRvmxNMvsk
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      query: 'Star Wars bloopers'
    };
    console.log("props.initialVideos", props.initialVideos);

    this.retrieveVideos = this.retrieveVideos.bind(this);
    this.searchBtnClicked = this.searchBtnClicked.bind(this);
    this.debouncedResultFunc = _.debounce(this.debouncedResultFunc, 500,{leading: true, trailing: false});
    this.updateQuery = this.updateQuery.bind(this);
    this.searchVideos = this.searchVideos.bind(this);
  }

  updateQuery(e) {
    let query = e.target.value;
    this.setState({
      query: query
    }, this.debouncedResultFunc);
  }

  debouncedResultFunc() {
    this.retrieveVideos(this.state.query);
  }


  searchVideos(e) {
    // console.log("event", e.target.parentNode);
    // e.preventDefault();
    // if ((Date.now() >= this.secondsPassed + 5000) || this.initialSearch) {
    //   this.initialSearch = false;
    // }
    let query = e.target.value;
    if (query !== this.state.query) {
      this.retrieveVideos(query);
    }
  }
  searchBtnClicked(e) {
    let query = e.target.parentNode.children[0].value;
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
  }

  changeVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search searchBtn={this.searchBtnClicked}
              findTextChange={this.updateQuery} /></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videoList} onClick={(video) => this.changeVideo(video)}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
