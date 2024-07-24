import React from "react";

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
