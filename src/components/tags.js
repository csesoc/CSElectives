import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';

// Maybe what we can do here is make another component for tags which other
// components can use to input whatever tag they want
// For any questions please refer to Timmy


const LabelExampleIcon = (props) => {
  const { activeTags, setActiveTags } = props;

  return (
    <div>
      {activeTags.map((tag) => (
        // This might be the part that we might want to make into a seperate component
        <Label key={tag} as='a' circular>
          {tag}
          <Icon name='delete' />
        </Label>
      ))}
    </div>
  );
};

LabelExampleIcon.propTypes = {
  code: PropTypes.string,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default LabelExampleIcon;
