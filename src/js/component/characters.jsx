import React, { useState, useEffect } from "react";

export const Characters  = ({name}) => {
	return (
		<div className="card m-5" style={{width: ("18rem")}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Learn More!</a>
    {/* <button className="">💛</button> */}
  </div>
</div>
	)
};