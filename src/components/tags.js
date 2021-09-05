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

{/* Tags without colour*/}

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
      {/* this currently creates a tag bubble of EACH color for EACH label */}
      {colors.map((color) => (
        <Label circular color={color} key={color} as='a'>
          &nbsp; {code} &nbsp;
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
