let playing = "";
let accessToken = "";
getToken();


function getToken()
 {
    axios.get('https://spotifycode2x.herokuapp.com/')
  .then(function (response) {
    accessToken = response.data;
    loadPlayingData();
    
    let refresh = setInterval(loadPlayingData, 10000);
  })
  .catch(function (error) {
    console.log(error);
  })

 }

function loadPlayingData() {
$.ajax({
  type: "GET",
  url: "https://api.spotify.com/v1/me/player/currently-playing?market=ES",
  headers: {
     'Authorization' : 'Bearer ' + accessToken
  },
  success: function(data) {

    if(data)
    {

      if(playing !== data.item.id)
      {
        playing = data.item.id;
        let artwork = data.item.album.images[1].url;
        let trackName = data.item.name;
        let artistName = data.item.artists[0].name;


        let header = document.getElementById('spotifyHeader');
        let artworkID = document.getElementById('trackArtwork');
        let track = document.getElementById('trackName');
        let artist = document.getElementById('artist');
        header.textContent = "🎧 What am i listening to? 🎧";
        artworkID.innerHTML = '<img ondragstart="return false" ondrag="return false" oncontextmenu="return false" src=' + artwork + '>';
        track.innerHTML = `<a href="https://www.youtube.com/results?search_query=${trackName} + ${artistName}" target="_blank">` + trackName + '</a>';
        artist.textContent = 'By ' + artistName;
      }
    } else loadRecent();

  },
  dataType: "json"
});
}
function getDevice()
{



}
function loadRecent() {
  $.ajax({
    type: "GET",
    url: "https://api.spotify.com/v1/me/player/recently-played",
    data: {
      'limit' : 1
   },

    headers: {
       'Authorization' : 'Bearer ' + accessToken
    },
    success: function(data) {
  
      if(data)
      {
          let artworkID = document.getElementById('trackArtwork');
          let trackName = data.items[0].track.name;
          let artistName = data.items[0].track.artists[0].name;
          let header = document.getElementById('spotifyHeader');
          let track = document.getElementById('trackName');
          let artist = document.getElementById('artist');
          artworkID.innerHTML = '';
          header.textContent = "I recently played";
          track.innerHTML = `<a href="https://www.youtube.com/results?search_query=${trackName} + ${artistName}" target="_blank">` + trackName + '</a>';
          artist.textContent = 'By ' + artistName;
      }
  
    },
    dataType: "json"
  });
  }
  
