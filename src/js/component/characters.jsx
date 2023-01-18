import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const Characters  = ({name, id}) => {
	return (
		<div className="card m-1 bg-black text-white " style={{width: ("18rem")}}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id)+".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className="title">
    <h5 className="card-title">{name}</h5>
    </div>
    <div className="text">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div className="footer mt-5">
    <Link to={"/single/"+id} className="btn btn-outline-warning">Learn more!</Link>
    {/* <button className="">💛</button> */}
  </div>
</div>
</div>

	)
};