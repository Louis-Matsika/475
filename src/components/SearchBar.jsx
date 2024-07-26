import React from "react";

//search bar that allows users to enter a query to fact checks
const SearchBar = ({ query, setQuery, handleSearch }) => {
	return (
		<div className="search-bar">
			<input
				id = "enterable"
				type="text"
				className="search-input"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Type your query..."
			/>
			<button className="search-button" id="search-button" onClick={handleSearch}>
				Check<span>.</span>
			</button>
		</div>
	);
};

export default SearchBar;
