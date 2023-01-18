import React, {useState, useEffect} from "react";


import  {Characters}  from "../component/characters.jsx";


export const Home = () => {
	
	const [characters, setCharacters] = useState([]);


	function getCharacters() {
		fetch("https://www.swapi.tech/api/people/")
		.then((response) => response.json())
		// .then((data) => console.log(data.results))
		.then((data) => setCharacters(data.results));
	}


	useEffect(() => {
	getCharacters()
	}, [])

	return (
		<div className="container-fluid bg-dark p-4">
			<h2 style={{color:"yellow"}}>Characters</h2>
			<div className="d-flex">
			{characters.map((item, index) => {
				return <Characters key={index} name={item.name} id={item.uid}/>
			}
			)}
		</div>
		</div>
	)
};
