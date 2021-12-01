import React from 'react';
import image from '../assets/no-results-found-ufo.svg';
// Copied the text from the internet word for word maybe should change?

const NoResultsFound = (props) => {
  return (
    <div>
      <img
        src={image}
        className="no-results-found-centre"
      />
      <div className="no-results-found-heading">
        <b>Your results were abducted!</b>
      </div>
      <div className="no-results-found-subheading">
        That filter combination has no results.
      </div>
    </div>
  );
};

export default NoResultsFound;
