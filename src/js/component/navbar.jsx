import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import starImage from "../../img/starwars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [contadorLikes, setContadorLikes] = useState("")

    function contarLikes() {
        setContadorLikes(store.likesGuardados.length)
    }

    useEffect(() => {
        contarLikes()
    }, [store.likesGuardados])

  return (
    <nav className="navbar navbar-dark bg-black p-2">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img src={starImage} width="80" height="50" />
        </span>
      </Link>

      <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                        <span className="text-danger">
                            {
                            " " + contadorLikes
                        }</span>
                    </button>
                    <ul className="dropdown-menu">


                        {
                        store.likesGuardados.map((like, i) => (
                            <li key={i} 
                                className="d-flex">
                                <a  class="dropdown-item" href="#" >
                                    {
                                    like
                                } </a>
                                <button className="btn"
                                    onClick={
                                        () => actions.dotLikeItAnymore(like)
                                }>💛
                                </button>
                            </li>

                        ))
                    }

                         </ul>
                </div>
            </div>
        </nav>
  );
};
