import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/foodAdviser_logo.png";

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
				<div className="nav-links">
					<a href="/#">Accueil</a>
					<a href="/#">Recettes</a>
					<a href="/#">Recette du jour</a>
					<a href="/#">Actus</a>
				</div>
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
