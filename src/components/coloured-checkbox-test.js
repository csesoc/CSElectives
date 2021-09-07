import React from 'react';

const TestColouredCheckbox = () => {
  return (
    <div className="ui segment">
      <div className="ui attached icon form" id="info_input_form">
        <div className="ui checkbox">
          <input
            type="checkbox"
            tabIndex="0"
          />
          <label className="coloring black">Toggle</label>
        </div>
      </div>
    </div>
  );
};

export default TestColouredCheckbox;
