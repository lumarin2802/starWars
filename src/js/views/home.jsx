import React, {useState, useEffect} from "react";
import "../../styles/home.css";

import  {Characters}  from "../component/characters.jsx";


export const Home = () => {
	
	const [characters, setCharacters] = useState([]);


	function getCharacters() {
		fetch("https://www.swapi.tech/api/people/")
		.then((response) => response.json())
		.then((data) => console.log(data.results))
		.then((data) => setCharacters(data.result || data.results));
	}


	useEffect(() => {
	getCharacters()
	}, [])

	return (
		<div>
			<h2>Characters</h2>
			{characters.map((item, index) => {
				return <Characters key={index} name={item.name} id={item.uid}/>
			}
			)}
		</div>
	)
};
