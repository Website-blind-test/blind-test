import axios from "axios";

const API_URL = "http://localhost:8055/"

const login = (email, password) =>{
    console.log(localStorage.getItem('user'));
    return axios.post(API_URL+"auth/login", {
        email,
        password,
    })
    .then((response) => {
        if(response.data.data.access_token){
            localStorage.setItem("user", JSON.stringify(response.data.data));
        }

        return response.data
    })
}

const register = (first_name, email, password) => {
  const role = "ad0210e5-eb5e-4f54-8899-f16a17b9eb7b"
    // const role = "3e5173cf-4003-49b5-9335-50b5bd2bad35"
    return axios.post(API_URL + "users", {
        first_name,
        email,
        password,
        role,
      }) 
      .then((response) => {
        const usersReq = axios.get(API_URL + "users").then((responseGet) => {
          let users = responseGet.data.data
          let obj = JSON.parse(response.config.data)
          users.forEach(user => {
            if(user.first_name == obj.first_name){
              let idUser = user.id;
              let username = user.first_name;
              let email = user.email
              axios.post(API_URL + "items/user", {
                idUser,
                username,
                email
              })
            }
          });
        });
        
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
