import React, { useState, useEffect } from "react";

import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  function getCharacters() {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      // .then((data) => console.log(data.results))
      .then((data) => setCharacters(data.results));
  }

  function getPlanets() {
    fetch("https://www.swapi.tech/api/planets/1/")
      .then((response) => response.json())
      .then((data) => console.log(data.result))
	  //.then((data) => setPlanets(data.results));
      //.catch((err) => console.error(err));
  }

  useEffect(() => {
    getCharacters();
	getPlanets();

  }, []);

  return (
    <div className="container-fluid bg-dark p-3">
      <h2 style={{ color: "yellow" }}>Characters</h2>
      <div className="d-flex">
        {characters.map((item, index) => {
          return <Characters key={index} name={item.name} id={item.uid} />;
        })}
      </div>
	  <h2 style={{ color: "yellow" }}>Planets</h2>
      <div className="d-flex">
        {planets.map((item, index) => {
          return <Planets key={index} name={item.name} id={item.uid} />;
        })}
      </div>
    </div>
  );
};
