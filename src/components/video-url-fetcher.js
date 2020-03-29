function VideoUrlFetcher ({url}) {
        $.ajax({
          type: 'GET',
          url: 'https://www.googleapis.com/youtube/v3/search',
          data: {
              key: 'AIzaSyBnT9fVLtyF87RVFr12tPZEBx0NENiWots',
              q: "cats",
              part: 'snippet',
              maxResults: 1,
              type: 'video',
              videoEmbeddable: true,
          },
          success: function(data){
              embedVideo(data)
          },
          error: function(response){
              console.log("Request Failed")
          }
        })
}

export default VideoUrlFetcher