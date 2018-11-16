var Search = (props) => {
  // onInput={props.findTextChange} onChange={props.findTextChange}
  var debounce = (func, wait, immediate) => {
    var timeout;

    return function executedFunction() {
      var context = this;
      var args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate){
          func.apply(context, args);
        }
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  // onChange={props.findTextChange}
  // ^ this works in the input field, but the debounce does not.
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onInput={debounce((e)=> {
        props.findTextChange(e);
      }, 5000)} onChange={props.findTextChange} />
      <button className="btn hidden-sm-down" onClick={props.searchBtn}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
