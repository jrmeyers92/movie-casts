import React, { useState } from "react";

const Input = (props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		props.searchSubmit(searchTerm);
	};

	return (
		<div className='ui fluid input' onSubmit={onSubmit}>
			<form className='ui form'>
				<input
					type='text'
					placeholder='search a movie'
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
			</form>
		</div>
	);
};

export default Input;
