import axios from "axios";

const API_URL = "https://api.spotify.com/v1/"



const getTrack = (idTrack) => {


    return axios.get(API_URL+"tracks/"+idTrack, {
    headers: {
        Authorization: "Bearer "+localStorage.getItem("spotifyToken")
    }}
    )
    .then((response) => {
        localStorage.setItem("currentTrackName", response.data.name)
        localStorage.setItem("currentTrackUri", response.data.uri)
    })
    .catch((error) => {
        console.log(error);
    })
}

const playTrack = (uri) => {
    const data = {
        uris: [uri]
    }

    const headers = {
        Authorization: "Bearer "+localStorage.getItem("spotifyToken")
    }
    axios.put(API_URL+"me/player/play", 
    data,
    {
        headers: headers
    })
    .catch((error) => {
        console.log(error)
    })

    return false
}

const trackService = {
    getTrack,
    playTrack,
  };
  
  export default trackService;