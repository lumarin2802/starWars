import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetail = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [detailPlanet, setDetailPlanet] = useState({});
  

  function getDetailPlanet() {
    fetch("https://www.swapi.tech/api/planets/" + params.theid)
      .then((response) => response.json())
   
      .then((data) => setDetailPlanet(data.result));   
  }

 
  useEffect(() => {
    getDetailPlanet()
    

  }, []);

  return (
    
    <div className="jumbotron d-flex flex-row">
       <img
        src={
          "https://starwars-visualguide.com/assets/img/planets/" +
          params.theid +
          ".jpg"
        }/>
       <div className="card-body">
         <h1 className="mx-4 mb-2 card-title text-center">{detailPlanet?.properties?.name}</h1>
         <p className="mx-4 card-text text-center">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inci dunt, ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
      <h1 className="display-4">
        {/* This will show the demo element: {store.demo[params.theid].title} */}
      </h1>
      <div>
        {/* <h3>{detailCharacter?.properties?.name}</h3> */}
       
        
      </div> 
      
      <hr className="my-4" />
      <div className="container strong text-danger">
        <p>Name:{detailPlanet?.properties?.name}</p>
        <p>Diameter:{detailPlanet?.properties?.diameter}</p>
        <p>Rotation period:{detailPlanet?.properties?.rotation_period}</p>
        <p>Orbital period:{detailPlanet?.properties?.orbital_period}</p>
        <p>Gravity:{detailPlanet?.properties?.gravity}</p>
        <p>Population:{detailPlanet?.properties?.population}</p>
        <p>Climate:{detailPlanet?.properties?.climate}</p>

      </div>
<div>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
      </div>
    </div>
  );
};

