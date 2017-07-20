class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <VideoPlayer video={this.props.videos[0]} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> view goes here</h5></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={window.exampleVideoData} />
          </div>
        </div>
      </div>
    );
  }
  videoListEntryClick (event) {
    
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//