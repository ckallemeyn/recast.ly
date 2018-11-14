var VideoListEntry = (props) => {
  // onClick={()=>props.onClick(props.video)}
  return (
    <div className="video-list-entry media">
      {console.log('props from videolist entry:', props)}
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" onClick={() => props.onClick(props.video)} />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => props.onClick(props.video)}>{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
