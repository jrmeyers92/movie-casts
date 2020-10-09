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
		TMBd.get(
			`search/movie?api_key=19b7484b16487bbecac75bf455e0c742&query=${movieTerm}`
		).then((res) => {
			console.log(res);
			const data = res.data;
			setMovieList(data.results);
		});
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
