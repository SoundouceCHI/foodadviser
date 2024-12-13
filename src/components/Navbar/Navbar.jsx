import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/foodAdviser_logo.png";
import { NavLink } from "react-router-dom"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className="logo-container">
            <img src={logo} alt="Logo" className="logo"/>
			</div>
			<nav ref={navRef}>
				<nav className="nav-links">
					<NavLink to={"/"}>Accueil</NavLink>
					<NavLink to={"/recipes"}>Recettes</NavLink>
					<NavLink to={"/toprecipes"}>Les meilleurs recettes</NavLink>
					<NavLink to={"/ingredients"}>Les ingredients</NavLink>
				</nav>
				<div className="connexion-container">
					<button>Connexion</button>
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
