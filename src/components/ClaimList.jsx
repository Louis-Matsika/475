import React from "react";
import ClaimItem from "./ClaimItem";

// list of ClaimItems returned
const ClaimList = ({ claims, expandedClaim, handleExpand }) => {
  return (
    <div className="claims-list">
      {claims.map((claim, index) => (
        <ClaimItem
          key={index}
          claim={claim}
          isExpanded={expandedClaim === index}
          handleExpand={() => handleExpand(index)}
        />
      ))}
    </div>
  );
};

export default ClaimList;
