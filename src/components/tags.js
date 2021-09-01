import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';


const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

// const LabelExampleIcon = (props) => {
//   const { code } = props;

//   return (
//     <div>
//       <Label as='a'>
//         {code}
//         <Icon name='delete' />
//       </Label>
//     </div>
//   );
// };

const LabelExampleIcon = (props) => {
  const { code } = props;

  return (
    <div>
      {colors.map((color) => (
        <Label color={color} key={color} as='a'>
          {code}
          <Icon name='delete' />
        </Label>
      ))}
    </div>
  );
};

LabelExampleIcon.propTypes = {
  code: PropTypes.string,
};

export default LabelExampleIcon;
