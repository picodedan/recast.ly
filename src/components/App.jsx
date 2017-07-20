class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      playerVid: this.props.videos[0],
      vidList: this.props.videos
       
    
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div> Placeholder for search Bar </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVid} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.vidList} />
          </div>
        </div>
      </div>
    );
  }
  videoListEntryClick () {
    console.log('HAHAHAHAHAHA');
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//