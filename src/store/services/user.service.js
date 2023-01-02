import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

const getDifficulty = () => {
  return axios.get(API_URL + "difficulty", { headers: authHeader() });
};

const userService = {
    getPublicContent   
  };
  
  export default userService