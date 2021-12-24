import React from 'react';
import NoResultImage from '../assets/no-results-found-ufo.svg';
// Copied the text from the internet word for word maybe should change?

const NoResultsFound = (props) => {
  return (
    <div className="no-results-found">
      <img
        src={NoResultImage}
        className="no-results-found-centre"
      />
      <div className="no-results-found-heading">
        <b>Your results were abducted!</b>
      </div>
      <div className="no-results-found-subheading">
        That search has no results.
      </div>
    </div>
  );
};

export default NoResultsFound;
