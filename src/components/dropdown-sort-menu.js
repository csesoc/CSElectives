import React from 'react';

import { Dropdown } from 'semantic-ui-react';

const options = [
  {
    key: 'Most Popular',
    text: 'Most Popular',
    value: 'Most Popular',
  },
  {
    key: 'Most Useful',
    text: 'Most Useful',
    value: 'Most Useful',
  },
  {
    key: 'Most Enjoyable',
    text: 'Most Enjoyable',
    value: 'Most Enjoyable',
  },
  {
    key: 'Lowest Difficulty',
    text: 'Lowest Difficulty',
    value: 'Lowest Difficulty',
  },
];

const DropdownSort = () => {
  return (
    <Dropdown
      placeholder='Most Popular'
      selection
      fluid
      compact
      button
      options = {options}
      defaultValue={options}
    >
    </Dropdown>
  );
};


export default DropdownSort;
