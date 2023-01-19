import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  //console.log(store.demo);
  

  

 
  useEffect(() => {
    actions.getDetailCharacter(params.theid)
    

  }, []);

  return (
    <div className="bg-dark">
    <br />
    
<h1 className="text-warning">{store.detailCharacter?.properties?.name}</h1>
<div className="card mb-3 border-warning border rounded" style={{width: "720px", margin: "20px"}}>
    <div className="row g-0">
      <div className="col-md-4 align-self-center" style={{padding: "5px"}}>
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          params.theid +
          ".jpg"}
      className="img-fluid rounded-start" style={{width: "90%"}} />
      </div>
    <div className="col-md-6">
    <div className="card-body">
      <p className="card-text text-warning">Name: {store.detailCharacter?.properties?.name}</p>
      <p className="card-text text-warning">Birth year: {store.detailCharacter?.properties?.birth_year}</p>
      <p className="card-text text-warning">Gender: {store.detailCharacter?.properties?.gender}</p>
      <p className="card-text text-warning">Height: {store.detailCharacter?.properties?.height}</p>
      <p className="card-text text-warning">Skin color: {store.detailCharacter?.properties?.skin_color}</p>
      <p className="card-text text-warning">Eye color: {store.detailCharacter?.properties?.eye_color}</p>
                
    </div>
    </div>
    </div>
</div>

  
      <Link to="/">
        <span className="btn btn-warning btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
      </div>
      
  );
};

