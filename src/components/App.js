import React, { useState, useEffect } from "react";
import Header from "./Header";
import Input from "./Input";
import movieList from "./Movies";
import axios from "axios";
import TMBd from "./apis/TMBd";
import Movies from "./Movies";

const App = () => {
	const [movieTerm, setMovieTerm] = useState("");
	const [movieList, setMovieList] = useState([]);

	const searchSubmit = (term) => {
		setMovieTerm(term);
	};

	useEffect(() => {
		const response = async fetch("https://api.themoviedb.org/3/movie/343611?api_key=19b7484b16487bbecac75bf455e0c742")
	
	}, [movieTerm]);

	return (
		<div className='ui container'>
			<Header />
			<Input searchSubmit={searchSubmit} />
			<Movies movies={movieList} />
		</div>
	);
};

export default App;
