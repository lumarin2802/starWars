import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [characters, setCharacters] = useState([]);

	function getCharacters() {
		fetch("https://www.swapi.tech/api/people/"+params.theid)
		.then((response) => response.json())
		.then((data) => console.log(data.results))
		.then((data) => setCharacters(data.results.properties));
	}


	useEffect(() => {
	getCharacters()
	}, [])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>
			<div>
        <ul className="list-group mt-2" >
                    {characters.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between">
                                {item}
                        </li>
                    ))}
                </ul>
			</div>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
