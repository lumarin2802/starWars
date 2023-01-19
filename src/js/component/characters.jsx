import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Characters = ({ name, id, gender, hair, eyes }) => {
  return (
    <div className="card m-1 bg-dark text-white " style={{ width: "18rem" }}>
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
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">Hair color: {hair}</p>
          <p className="card-text">Eye color: {eyes}</p>
        </div>
        
        <div className=" mt-5">
          <Link
            to={"/charactersDetail/" + id}
            className="btn btn-outline-warning"
          >
            Learn more!
          </Link>
          <button className="btn btn-outline-warning float-end">💛</button>
        </div>
      </div>
    </div>
  );
};
