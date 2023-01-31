import axios from "axios";

const API_URL = "http://localhost:8055/"

const getTrack = () => {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    return axios.get(API_URL+"items/track", {
        headers : {
            Authorization: "Bearer " + token
        }
    }).then((response) => {
        localStorage.setItem("trackList", JSON.stringify(response.data.data));
        return response.data
    }).catch((err) => {
        console.log(err)
    })
}

const addTrack = (title, path) => {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    let data = {
        title: title,
        url: path,
        idDifficulty: 1
    }
    return axios.post(API_URL + "items/track", data,
    {
        headers : {
            Authorization: "Bearer " + token
        }
    }).then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}

const trackService = {
    getTrack,
    addTrack,
  };
  
  export default trackService;