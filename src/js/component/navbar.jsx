import React from "react";
import { Link } from "react-router-dom";
import starImage from "../../img/starwars.png";

export const Navbar = () => {
	return (
		
			<nav className="navbar navbar-black bg-black p-2">
  <Link to="/">
  <span className="navbar-brand mb-0 h1">
    <img src={starImage}  width="80" height="50"/></span>
      </Link>
        {/* <button className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </button> */}
        <div className="ml-auto">
        <Link to="/demo">
					<button className="btn btn-outline-warning">Favorites</button>
				</Link>
        </div>
   
</nav>
	
		
	);
};
