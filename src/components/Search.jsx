var Search = (props) => {
  // onInput={props.findTextChange} onChange={props.findTextChange}
  // var debounce = (func, wait, immediate) => {

  // };

  // onChange={props.findTextChange}
  // ^ this works in the input field, but the debounce does not.
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onInput={props.findTextChange} onChange={props.searchVideos} />
      <button className="btn hidden-sm-down" onClick={props.searchBtn}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
