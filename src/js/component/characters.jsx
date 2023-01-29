import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Characters = ({ name, id}) => {
  const {store, actions}=useContext(Context)

  return (
    <div className="card m-1 bg-dark text-white" style={{ width: "18rem" }}>
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          id +
          ".jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <div className="title">
          <h5 className="card-title text-warning">{name}</h5>
        </div>
        <div className="text">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="footer mt-5">
          <Link
            to={"/charactersDetail/" + id}
            className="btn btn-outline-warning"
          >
            Learn more!
          </Link>
    
        <button className="btn btn-outline-warning float-end" onClick={() => store.likesGuardados.indexOf({name}) !== -1 ? alert("Oh no, elige otro personaje, este ya sabemos que te gusta") : actions.giveMeLikes({name}) } >💛</button>
        </div>
      </div>
    </div>
    </div>
  );
};
