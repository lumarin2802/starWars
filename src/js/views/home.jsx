import React, { useState, useEffect } from "react";

import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  function getCharacters() {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      // .then((data) => console.log(data.results))
      .then((data) => setCharacters(data.results));
  }

  function getPlanets() {
    fetch("https://www.swapi.tech/api/planets/")
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((data) => setPlanets(data.results));
    
  }
  function getVehicles() {
    fetch("https://www.swapi.tech/api/vehicles/")
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((data) => setVehicles(data.results));
    
  }

  useEffect(() => {
    getCharacters();
    getPlanets();
    getVehicles();
  }, []);

  return (
    


    <div className="container-fluid bg-dark p-3">
      <h2 style={{ color: "yellow" }}>Characters</h2>
      <div className="d-flex">
        {characters.map((item, index) => {
          return <Characters key={index} name={item.name} id={item.uid} gender={item.gender} hair={item.hair_color} eyes={item.eye_color} />;
        })}
      </div>

      <div className="d-flex">
      <h2 style={{ color: "yellow" }}>Planets</h2>
   
        {planets.map((item, index) => {
          return <Planets key={index} name={item.name} id={item.uid} gender={item.gender} hair={item.hair_color} eyes={item.eye_color}/>;
          
        })}
     </div>
     <div className="d-flex">
      <h2 style={{ color: "yellow" }}>Vehicles</h2>
   
        {planets.map((item, index) => {
          return <Vehicles key={index} name={item.name} id={item.uid} />;
          
        })}
     </div>
    </div>
  );
};
