import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";

const App = () => {
	const [movieTerm, setMovieTerm] = useState("");

	const searchSubmit = (term) => {
		setMovieTerm(term);
		console.log(movieTerm);
	};

	return (
		<div className='ui container'>
			<Header />
			<Input searchSubmit={searchSubmit} />
		</div>
	);
};

export default App;
