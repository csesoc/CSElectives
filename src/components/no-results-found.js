import React from 'react';

// Copied the text from the internet word for word maybe should change?

const NoResultsFound = (props) => {
  return (
    <div>
      <img
        src="../assets/no-results-found.jpg"
        className="no-results-counf-centre"
      />
      <div className="no-results-found-heading">
        <b>That is a miss</b>
      </div>
      <div className="no-results-found-subheading">
        Sorry, that filter combination has no results.
        Please try a different criteria
      </div>
    </div>
  );
};

export default NoResultsFound;
