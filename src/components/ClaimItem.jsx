import React from "react";

const ClaimItem = ({ claim, isExpanded, handleExpand }) => {
  return (
    <div className="claim-item">
      <div onClick={handleExpand} className="claim-text">
        {claim.text}
      </div>
      {isExpanded && (
        <div className="claim-details">
          {claim.claimant && (
            <p>
              <strong>Claimant:</strong> {claim.claimant}
            </p>
          )}
          {claim.claimDate && (
            <p className="claim-date">
              <strong>Claim Date:</strong>{" "}
              {new Date(claim.claimDate).toLocaleDateString()}
            </p>
          )}
          {claim.claimReview &&
            claim.claimReview.map((review, reviewIndex) => (
              <div key={reviewIndex} className="review-item">
                <p>
                  <strong>Publisher:</strong> {review.publisher.name} (
                  {review.publisher.site})
                </p>
                <p>
                  <strong>Title:</strong>{" "}
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {review.title}
                  </a>
                </p>
                <p>
                  <strong>Review Date:</strong>{" "}
                  {new Date(review.reviewDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Rating:</strong> {review.textualRating}
                </p>
                <p>
                  <strong>Language:</strong> {review.languageCode}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ClaimItem;
