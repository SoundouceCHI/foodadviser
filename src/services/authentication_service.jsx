import axios from "axios";

const API_URL = `${process.env.API_URL}users/`;

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}token/`, {
      username,
      password,
    });
    // Stock tokens in local storage
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    return response.data;
  } catch (error) {
    throw new Error("Invalid username or password");
  }
};

const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  };
  
  const getAccessToken = () => localStorage.getItem("access");
  
  const isAuthenticated = () => !!getAccessToken();
  
  export default {
    login,
    logout,
    getAccessToken,
    isAuthenticated,
  };
