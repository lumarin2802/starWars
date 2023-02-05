import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => {
   const {store}=useContext(Context)
//console.log(store.demo);

 
  return (
    


    <div className="container-fluid bg-dark p-3">
      <h2 style={{ color: "yellow" }}>Characters</h2>
      <div className="d-flex flex-row overflow-scroll">
        <div className="d-flex">
        {store.characters.map((item, index) => {
          return <Characters key={index} name={item.name} id={item.uid} itemCard={item} />;
        })}
        </div>
      </div>

      <h2 style={{ color: "yellow" }}>Planets</h2>
      <div className="d-flex flex-row overflow-scroll">
      <div className="d-flex">
        {store.planets.map((item, index) => {
          return <Planets key={index} name={item.name} id={item.uid} itemCard={item} />;
          
        })}
        </div>
     </div>
     
      <h2 style={{ color: "yellow" }}>Vehicles</h2>
      <div className="d-flex flex-row overflow-scroll">
      <div className="d-flex">
        {store.vehicles.map((item, index) => {
          return <Vehicles key={index} name={item.name} id={item.uid} itemCard={item} />;
          
        })}
     </div>
     </div>
    </div>
  );
};
