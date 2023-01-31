import axios from "axios";

const API_URL = "http://localhost:8055/"

const login = (email, password) =>{
    return axios.post(API_URL+"auth/login", {
        email,
        password,
    })
    .then((response) => {
        if(response.data.data.access_token){
            localStorage.setItem("user", JSON.stringify(response.data.data));
            const usersReq = axios.get(API_URL + "users").then((responseGet) => {
              let users = responseGet.data.data
              let obj = JSON.parse(response.config.data)
              users.forEach(user => {
                if(user.email == obj.email){
                  let idUser = user.id;
                  let username = user.first_name;
                  let email = user.email
                  localStorage.setItem("userInfo", JSON.stringify({userId: idUser, username: username, email: email}) );
                }
              });
            });
        }

        return response.data
    })
}


const refreshToken = ({refresh_token}) =>{
  return axios.post(API_URL+"auth/refresh", {
      refresh_token,
      mode: "json"
  })
  .then((response) => {
    if(response.data.data.access_token){
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(response.data.data));
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

  const checkToken = (user) => {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    return axios.get(API_URL+"items/track", {
      headers : {
          Authorization: "Bearer " + token
      }
  }).then((response) => {
  })
    .catch((err) => {
      if(err.response.status === 401)
        refreshToken(user)
    })
  }

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };
  
  const authService = {
    register,
    login,
    logout,
    refreshToken,
    checkToken,
  };
  
  export default authService;
