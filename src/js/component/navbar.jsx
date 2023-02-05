import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starImage from "../../img/starwars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-black p-2">
      <div className = "container-fluid" ></div>
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img src={starImage} width="80" height="50" />
        </span>
      </Link>

      <div className="dropdown d-flex float-end" >
  <button className="btn btn-lg btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites 
  </button>
  <ul className="dropdown-menu" >
 {store.favorites.map((item, id)=> <li key={id} className="dropdown-item">{item.name} <button type="button" className="btn border-0 float-end"  onClick={() => actions.deleteFavorites(item)}><i className="fa fa-trash"></i></button></li>)}
  </ul>
</div>
    </nav>
  )}