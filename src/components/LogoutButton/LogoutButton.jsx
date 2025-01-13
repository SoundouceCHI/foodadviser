import React, {useContext} from 'react'
import authService from "../../services/authentication_service";
import { AuthContext } from "../../context/AuthContext";

export default function LogoutButton() {
    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        authService.logout();
        window.location.href = "/signin"; //redirect to signIn
        logout();
      };
  return (
    <>
    
    <button onClick={handleLogout} >Se déconnecter</button>
    </>
  )
}
