import React, { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ClaimList from "../components/ClaimList";
import "../App.css"; // Import your CSS file for styling

const Main = () => {
  const [query, setQuery] = useState("");
  const [claims, setClaims] = useState([]);
  const [expandedClaim, setExpandedClaim] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    console.log();
    try {
      setError("");
      const response = await fetch(
        `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${query}&key=${
          "AIzaSyBbsDzr7taySaeVp3xDcO7zkPwb2mIjwCQ"
        }&pageSize=20`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data. Please try again later.");
      }
      const data = await response.json();
      if (data.claims && data.claims.length > 0) {
        setClaims(data.claims);
      } else {
        setClaims([]);
        setError("No results found. Please try a different query.");
      }
    } catch (error) {
      setClaims([]);
      setError(error.message);
    }
  };

  const handleExpand = (index) => {
    setExpandedClaim(expandedClaim === index ? null : index);
  };

  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      {error && <div className="error-message">{error}</div>}
      {claims.length > 0 && (
        <div className="container">
          <ClaimList
            claims={claims}
            expandedClaim={expandedClaim}
            handleExpand={handleExpand}
          />
        </div>
      )}
    </>
  );
};

export default Main;
