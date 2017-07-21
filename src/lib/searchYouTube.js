var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true',
      q: options.query,
      part: 'snippet',
      key: options.key
    },
    success: function(data) {
      //console.log(data.items);
      return callback(data.items);
      
    },
    error: function(data) {
      //console.log(data);
      return callback(data);
      
    },
    
  });
};

window.searchYouTube = searchYouTube;////
