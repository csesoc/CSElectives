import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

const DropdownSortMenu = (props) => {
  const { options } = props;
  return (
    <Dropdown
      placeholder='Most Popular'
      selection
      fluid
      compact
      button
      options={options}
      defaultValue={options}
    >
    </Dropdown>
  );
};

DropdownSortMenu.propTypes = {
  options: PropTypes.array,
};

export default DropdownSortMenu;
