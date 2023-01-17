import React from "react";
import { Link } from "react-router-dom";
import starImage from "../../img/starwars.png";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid position-relative">
  <Link to="/">
    <img src={starImage}  width="80" height="50"></img>
      </Link>
        <button className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </button>
    </div>
</nav>
	
		</div>
	);
};
