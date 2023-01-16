import React from "react";
import { Link } from "react-router-dom";
import starImage from "../../img/starwars.png";
export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid position-relative">
    <img src={starImage}  width="80" height="50"></img>
        <button className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </button>
    </div>
</nav>
	
		</div>
	);
};
