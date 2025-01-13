import { useRef, useContext, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/foodAdviser_logo.png";
import { NavLink } from "react-router-dom"
import LogoutButton from "../LogoutButton/LogoutButton";
import authService from "../../services/authentication_service";
import { AuthContext } from "../../context/AuthContext";
 


function Navbar() {
	const navRef = useRef();
	const { isLoggedIn, user } = useContext(AuthContext);
	console.log("User Connecté : ", isLoggedIn)

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className="logo-container">
            <img src={logo} alt="Logo" className="logo"/>
			</div>
			<nav ref={navRef}>
				<div className="nav-links">
					<NavLink to={"/"} className="a">Accueil</NavLink>
					<NavLink to={"/recipes"} className="a">Recettes</NavLink>
					<NavLink to={"/toprecipes"} className="a">Les meilleurs recettes</NavLink>
				</div>
				<div className="connexion-container">
				{isLoggedIn ? (
						<LogoutButton />
					) : (
						<NavLink to={"/signin"}>
						<button>Connexion</button>
						</NavLink>
					)}
				</div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}
				>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}
			>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
