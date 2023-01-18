import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersDetail = (props) => {
    const [characters, setCharacters] = useState([]);

    function getCharacters() {
        fetch("https://www.swapi.tech/api/people/" + params.theid)
          .then((response) => response.json())
          .then((data) => console.log(data.results))
          .then((data) => setCharacters(data.results.properties));
      }

      useEffect(() => {
        getCharacters();
        
    
      }, []);
}