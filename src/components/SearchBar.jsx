import React from "react";

//search bar that allows users to enter a query to fact checks
const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your query..."
      />
      <button onClick={handleSearch}>Check</button>
    </div>
  );
};

export default SearchBar;
