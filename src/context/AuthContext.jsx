import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authentication_service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = authService.getAccessToken();
    if (accessToken) {
      setIsLoggedIn(true);
      setUser("inconnu"); 
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  const login = (user) => {
    setIsLoggedIn(true);
    setUser(user);
  };

  const logout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
