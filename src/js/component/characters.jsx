import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Characters = (props) => {
  const {store, actions}=useContext(Context)
  let item=props.itemCard
  return (
    <div className="card m-1 bg-dark text-white" style={{ width: "18rem" }}>
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          props.id +
          ".jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <div className="title">
          <h5 className="card-title text-warning">{props.name}</h5>
        </div>
        <div className="text">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="footer mt-5">
          <Link
            to={"/charactersDetail/" + props.id}
            className="btn btn-outline-warning"
          >
            Learn more!
          </Link>
    
          <button className="btn btn-outline-warning float-end" onClick={()=> actions.addFavorites(item)} >💛</button>
        </div>
      </div>
    </div>
    </div>
  );
};