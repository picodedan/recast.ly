class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {      
      playerVid: this.props.videos[0],
      listVids: this.props.videos    
    };
  }
  
  componentDidMount() {
    this.searchEvent('cats');
    // finish this with   
  }
  
  videoListEntryClick (data) {
    this.setState({
      playerVid: data
    });
  }
  //submit handler for search event 
  searchEvent (input) {
    //take input from searh view and format to object for ajax request
    //output to props.search(object,callbackmethod);
    var obj = {
      //stuff and things needed for ajax
      max: 5,
      query: input,
      key: window.YOUTUBE_API_KEY
    };
    this.props.search(obj, this.newVideosTime.bind(this));
  }
  //callback funtion to be passed to ajax via searchEvent
  newVideosTime (dataArray) {
    this.setState({
      listVids: dataArray
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.searchEvent.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVid}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.listVids} onClick={this.videoListEntryClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//window.App = new App();

//