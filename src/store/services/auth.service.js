import axios from "axios";

const API_URL = "http://localhost:8055/"

const login = (email, password) =>{
    return axios.post(API_URL+"auth/login", {
        email,
        password,
    })
    .then((response) => {
      console.log(response);
        if(response.data.access_token){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    })
}

const register = (first_name, email, password) => {
    const role = "3e5173cf-4003-49b5-9335-50b5bd2bad35"
    return axios.post(API_URL + "users", {
        first_name,
        email,
        password,
        role,
      }) 
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };
  
  const authService = {
    register,
    login,
    logout,
  };
  
  export default authService;
