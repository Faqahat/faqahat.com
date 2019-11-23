import React,{useState, useEffect} from "react"
import "../css/bulma.css"
import "../css/main.css"
import "../css/style.css"
import "../css/spotify.css"
import axios from "axios";

const Spotify = () => {
    let [playingDetails,setPlayingDetails] = useState({
                isPlaying : false,
                trackName : "",
                artworkURI : "",
                artistName : ""
    })
    let accessToken = "";
    
    function getToken()
    {
        
        axios.get('/api/spotifyToken')
        .then(function (response) {
            accessToken = response.data;
            loadPlayingData();
            console.log("API: " + response.data);
            setInterval(loadPlayingData, 10000);
            
        })
    .catch(function (error) {
        console.log(error);
    })

    }
    function loadPlayingData() 
    {
        axios.get('https://api.spotify.com/v1/me/player/currently-playing?market=ES',{
            headers: {
                'Authorization' : 'Bearer ' + accessToken
            }
          })
        .then(function (response) {
            if(response.data)
            {

                setPlayingDetails({
                        isPlaying : true,
                        trackName : response.data.item.name,
                        artworkURI : response.data.item.album.images[1].url,
                        artistName : response.data.item.artists[0].name
                })
            } else loadRecent();
    

        })
        .catch(function (error) {
            console.log(error);
        })
    }

    function loadRecent() 
    {
        axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1',{
            headers: {
                'Authorization' : 'Bearer ' + accessToken
            }
          })
        .then(function (response) {
            console.log(response.data.items[0].track.name)
            
            setPlayingDetails({
                    isPlaying : false,
                    trackName : response.data.items[0].track.name,
                    artistName : response.data.items[0].track.artists[0].name
            })
    

        })
        .catch(function (error) {
            console.log(error);
        })
    }


    useEffect(() => {
        getToken();
        console.log("Fetching  Token")
      },[]);
    let header="",artWork="",musicName="",artist="",youtubeLink="";
    if(playingDetails.isPlaying) 
    {  
        header = " 🎧 What am i listening to? 🎧 ";
        artWork = <img  alt=""  src={playingDetails.artworkURI} />;
    }
    else      
    {
                header = "I recently played";
                artWork = "";
    }
    youtubeLink = `https://www.youtube.com/results?search_query=${playingDetails.trackName} ${playingDetails.artistName}`
    musicName = <a  rel="noopener noreferrer" href={youtubeLink} target="_blank"> {playingDetails.trackName}</a>;
    artist = ` ${playingDetails.artistName}`;
	return(

        <div style={{margin: "25px"}}>
            <div className="columns">
            <div className="column is-full">
            <center>
						<p id="spotifyHeader">{header}</p>
						<span id="trackArtwork">{artWork}</span>
						<span id="trackName">{musicName}</span>
						<span id="artist">{artist}</span> 
							 
						
		
					</center>
            </div>
        </div>
    </div>	
					
)
	}

export default Spotify
