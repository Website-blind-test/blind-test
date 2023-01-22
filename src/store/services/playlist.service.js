import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8055/";

const getPlaylists = () => {
    return axios.get(API_URL + "items/playlist", { headers: authHeader() })
}


const playlist = {
    getPlaylists,
}

export default playlist